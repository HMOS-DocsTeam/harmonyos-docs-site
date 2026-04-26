"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["49364"], {
734509(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_media_api_media_c_media_headerfile_capi_avplayer_base_h_capi_avplayer_base_h_md_660_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-media-api-media-c-media-headerfile-capi-avplayer-base-h-capi-avplayer-base-h-md-660.json
var site_docs_ref_media_api_media_c_media_headerfile_capi_avplayer_base_h_capi_avplayer_base_h_md_660_namespaceObject = JSON.parse('{"id":"media-api/media-c/media-headerfile/capi-avplayer-base-h/capi-avplayer-base-h","title":"avplayer_base.h","description":"概述","source":"@site/docs-ref/media-api/media-c/media-headerfile/capi-avplayer-base-h/capi-avplayer-base-h.md","sourceDirName":"media-api/media-c/media-headerfile/capi-avplayer-base-h","slug":"/media-api/media-c/media-headerfile/capi-avplayer-base-h/capi-avplayer-base-h","permalink":"/harmonyos-docs-site/ref/media-api/media-c/media-headerfile/capi-avplayer-base-h/capi-avplayer-base-h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"avplayer_base.h","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-avplayer-base-h","kit":"媒体","last_updated":"2026-04-22","slug":"capi-avplayer-base-h"},"sidebar":"ref","previous":{"title":"avplayer.h","permalink":"/harmonyos-docs-site/ref/media-api/media-c/media-headerfile/capi-avplayer-h/capi-avplayer-h"},"next":{"title":"avrecorder.h","permalink":"/harmonyos-docs-site/ref/media-api/media-c/media-headerfile/capi-avrecorder-h/capi-avrecorder-h"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/media-api/media-c/media-headerfile/capi-avplayer-base-h/capi-avplayer-base-h.md


const frontMatter = {
	title: 'avplayer_base.h',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-avplayer-base-h',
	kit: '媒体',
	last_updated: '2026-04-22',
	slug: 'capi-avplayer-base-h'
};
const contentTitle = 'avplayer_base.h';

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
  "value": "AVPlayerState",
  "id": "avplayerstate",
  "level": 3
}, {
  "value": "AVPlayerSeekMode",
  "id": "avplayerseekmode",
  "level": 3
}, {
  "value": "AVPlaybackSpeed",
  "id": "avplaybackspeed",
  "level": 3
}, {
  "value": "AVPlayerOnInfoType",
  "id": "avplayeroninfotype",
  "level": 3
}, {
  "value": "AVPlayerBufferingType",
  "id": "avplayerbufferingtype",
  "level": 3
}, {
  "value": "AVPlayerTrackSwitchMode",
  "id": "avplayertrackswitchmode",
  "level": 3
}, {
  "value": "函数说明",
  "id": "函数说明",
  "level": 2
}, {
  "value": "OH_AVPlayerOnInfo()",
  "id": "oh_avplayeroninfo",
  "level": 3
}, {
  "value": "OH_AVPlayerOnInfoCallback()",
  "id": "oh_avplayeroninfocallback",
  "level": 3
}, {
  "value": "OH_AVPlayerOnError()",
  "id": "oh_avplayeronerror",
  "level": 3
}, {
  "value": "OH_AVPlayerOnErrorCallback()",
  "id": "oh_avplayeronerrorcallback",
  "level": 3
}, {
  "value": "OH_AVPlayerOnAmplitudeUpdateCallback()",
  "id": "oh_avplayeronamplitudeupdatecallback",
  "level": 3
}, {
  "value": "OH_AVPlayerOnSeiMessageReceivedCallback()",
  "id": "oh_avplayeronseimessagereceivedcallback",
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
        id: "avplayer_baseh",
        children: "avplayer_base.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义AVPlayer的结构体和枚举。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <multimedia/player_framework/avplayer_base.h>"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "库："
        })
      }), " libavplayer.so"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.AVPlayer"]
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
        href: "/ref/media-api/media-c/media-module/capi-avplayer/capi-avplayer",
        children: "AVPlayer"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "结构体",
      children: "结构体"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "/ref/media-api/media-c/media-struct/capi-avplayer-avplayercallback/capi-avplayer-avplayercallback",
              children: "AVPlayerCallback"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AVPlayerCallback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["包含了", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-avplayer-base-h/capi-avplayer-base-h#oh_avplayeroninfo",
              children: "OH_AVPlayerOnInfo"
            }), "和", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-avplayer-base-h/capi-avplayer-base-h#oh_avplayeronerror",
              children: "OH_AVPlayerOnError"
            }), "回调函数指针的集合。应用需注册此结构体到OH_AVPlayer实例中，并处理回调上报的信息，保证AVPlayer的正常运行(API version 12废弃) 。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-struct/capi-avplayer-oh-avplayer/capi-avplayer-oh-avplayer",
              children: "OH_AVPlayer"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVPlayer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "初始化AVPlayer。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-struct/capi-avplayer-oh-avseimessagearray/capi-avplayer-oh-avseimessagearray",
              children: "OH_AVSeiMessageArray"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVSeiMessageArray"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SEI消息数组。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-struct/capi-avplayer-oh-avplaybackstrategy/capi-avplayer-oh-avplaybackstrategy",
              children: "OH_AVPlaybackStrategy"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVPlaybackStrategy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "音视频播放策略的结构体类型。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "枚举",
      children: "枚举"
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
              href: "#avplayerstate",
              children: "AVPlayerState"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AVPlayerState"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "播放状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#avplayerseekmode",
              children: "AVPlayerSeekMode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AVPlayerSeekMode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "跳转模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#avplaybackspeed",
              children: "AVPlaybackSpeed"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AVPlaybackSpeed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "播放速度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#avplayeroninfotype",
              children: "AVPlayerOnInfoType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AVPlayerOnInfoType"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["OnInfo类型。  可用于OH_AVPlayerOnInfoCallback和OH_AVPlayerOnInfo(已废弃)，用于表示收到的播放器信息类型。  从API 12开始，推荐用户使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-avplayer-base-h/capi-avplayer-base-h#oh_avplayeroninfocallback",
              children: "OH_AVPlayerOnInfoCallback"
            }), "。不同的OnInfo类型，可获取到不同信息（infoBody），infoBody中包含key-value关系表，详见下述枚举值表。  使用API 11版本的开发者，需要使用旧接口。针对已废弃接口OH_AVPlayerOnInfo中使用的对应关系，可直接参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-avplayer-base-h/capi-avplayer-base-h#oh_avplayeroninfo",
              children: "OH_AVPlayerOnInfo"
            }), "的API说明。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#avplayerbufferingtype",
              children: "AVPlayerBufferingType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AVPlayerBufferingType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "播放缓冲消息类型定义。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#avplayertrackswitchmode",
              children: "AVPlayerTrackSwitchMode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AVPlayerTrackSwitchMode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "枚举轨道切换模式。"
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
              href: "#oh_avplayeroninfo",
              children: "typedef void (*OH_AVPlayerOnInfo)(OH_AVPlayer *player, AVPlayerOnInfoType type, int32_t extra)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVPlayerOnInfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "收到播放器消息时调用。(API12废弃)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avplayeroninfocallback",
              children: "typedef void (*OH_AVPlayerOnInfoCallback)(OH_AVPlayer player, AVPlayerOnInfoType type, OH_AVFormat infoBody, void *userData)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVPlayerOnInfoCallback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "收到播放器消息时被调用。如果应用成功设置该回调，则不会回调OH_AVPlayerOnInfo函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avplayeronerror",
              children: "typedef void (*OH_AVPlayerOnError)(OH_AVPlayer *player, int32_t errorCode, const char *errorMsg)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVPlayerOnError"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在API9以上的版本发生错误时调用。(API12废弃)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avplayeronerrorcallback",
              children: "typedef void (*OH_AVPlayerOnErrorCallback)(OH_AVPlayer *player, int32_t errorCode, const char *errorMsg, void *userData)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVPlayerOnErrorCallback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "发生错误时被调用。如果应用成功设置该回调，则不会调用OH_AVPlayerOnError函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avplayeronamplitudeupdatecallback",
              children: "typedef void (*OH_AVPlayerOnAmplitudeUpdateCallback)(OH_AVPlayer *player, double *amplitudes, uint32_t size, void *userData)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVPlayerOnAmplitudeUpdateCallback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当计算出最大音频电平值时调用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avplayeronseimessagereceivedcallback",
              children: "typedef void (*OH_AVPlayerOnSeiMessageReceivedCallback)(OH_AVPlayer *player, OH_AVSeiMessageArray *message, int32_t playbackPosition, void *userData)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVPlayerOnSeiMessageReceivedCallback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于获取SEI消息的回调处理函数。在订阅SEI消息事件时使用，回调返回详细的SEI信息。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "变量",
      children: "变量"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "const char * OH_PLAYER_STATE"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取播放状态的关键字，对应值类型是int32_t。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.AVPlayer"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_PLAYER_STATE_CHANGE_REASON"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取播放状态变更原因的关键字，对应值类型是int32_t。  1：用户操作触发；2：系统变更触发。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.AVPlayer"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_PLAYER_VOLUME"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取音量的关键字，对应值类型是float。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.AVPlayer"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_PLAYER_BITRATE_ARRAY"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取比特率列表的关键字，对应值类型是uint8_t字节数组。通过该关键字获取信息时：  需要先使用uint8_t类型指针变量保存比特率列表，使用size_t类型变量保存字节数组长度。  然后分配若干个uint32_t类型的存储空间，接收将uint8_t字节数组转换为uint32_t类型比特率整数值。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.AVPlayer"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_PLAYER_AUDIO_INTERRUPT_TYPE"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取音频打断类型的关键字，对应值类型是int32_t。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.AVPlayer"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_PLAYER_AUDIO_INTERRUPT_FORCE"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取音频打断FORCE类型的关键字，对应值类型是int32_t。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.AVPlayer"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_PLAYER_AUDIO_INTERRUPT_HINT"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取音频打断HINT类型的关键字，对应值类型是int32_t。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.AVPlayer"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_PLAYER_AUDIO_DEVICE_CHANGE_REASON"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取音频设备变更原因的关键字，对应值类型是int32_t。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.AVPlayer"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_PLAYER_BUFFERING_TYPE"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取缓冲更新消息类型的关键字，对应值类型是", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-avplayer-base-h/capi-avplayer-base-h#avplayerbufferingtype",
              children: "AVPlayerBufferingType"
            }), "。  通过该关键字获取信息时，需要先使用int32_t类型变量保存结果，再转换为AVPlayerBufferingType类型。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.AVPlayer"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_PLAYER_BUFFERING_VALUE"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取缓冲更新消息数值的关键字，对应值类型是int32_t，参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-avplayer-base-h/capi-avplayer-base-h#avplayerbufferingtype",
              children: "AVPlayerBufferingType"
            }), "。  当缓冲更新消息类型是AVPLAYER_BUFFERING_PERCENT、AVPLAYER_BUFFERING_CACHED_DURATION时有效。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.AVPlayer"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_PLAYER_SEEK_POSITION"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取Seek后播放进度的关键字，对应值类型是int32_t。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.AVPlayer"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_PLAYER_PLAYBACK_SPEED"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取播放倍速信息的关键字, 对应值类型是", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-avplayer-base-h/capi-avplayer-base-h#avplaybackspeed",
              children: "AVPlaybackSpeed"
            }), "。  通过该关键字获取信息时，需要先使用int32_t类型变量保存结果，再转换为AVPlaybackSpeed类型。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.AVPlayer"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_PLAYER_PLAYBACK_RATE"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取有效播放速率的关键字，对应值类型是浮点数。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 20  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.AVPlayer"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_PLAYER_BITRATE"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取比特率信息的关键字，对应值类型是uint32_t。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.AVPlayer"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_PLAYER_CURRENT_POSITION"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取播放进度信息的关键字，对应值类型是int32_t。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.AVPlayer"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_PLAYER_DURATION"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取媒体资源时长信息的关键字，对应值类型是int64_t。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.AVPlayer"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_PLAYER_VIDEO_WIDTH"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取视频宽度信息的关键字，对应值类型是int32_t。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.AVPlayer"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_PLAYER_VIDEO_HEIGHT"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取视频高度信息的关键字，对应值类型是int32_t。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.AVPlayer"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_PLAYER_MESSAGE_TYPE"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取播放器消息信息的关键字，对应值类型是int32_t。  1：视频帧开始渲染。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.AVPlayer"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_PLAYER_IS_LIVE_STREAM"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取媒体资源是否为直播类型信息的关键字，对应值类型是int32_t。  1：直播。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.Multimedia.Media.AVPlayer"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_PLAYER_MD_KEY_HAS_VIDEO"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取媒体资源是否包含视频轨信息的关键字，对应值类型int32_t。  1：包含视频轨，0：不包含视频轨。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_PLAYER_MD_KEY_HAS_AUDIO"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取媒体资源是否包含音频轨信息的关键字，对应值类型int32_t。  1：包含音频轨，0：不包含音频轨。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_PLAYER_MD_KEY_HAS_SUBTITLE"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取媒体资源是否包含字幕轨信息的关键字，对应值类型int32_t。  1：包含字幕轨，0：不包含字幕轨。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_PLAYER_MD_KEY_TRACK_INDEX"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取媒体资源轨道下标信息的关键字，对应值类型int32_t。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_PLAYER_SEI_PAYLOAD_TYPE"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["SEI 消息中表示负载类型的关键字。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_PLAYER_SEI_PAYLOAD_CONTENT"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["SEI 消息中表示负载内容的关键字。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_PLAYER_SUPER_RESOLUTION_ENABLE_STATE"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["超分辨率功能启用状态关键字，值类型为int32_t。值为1表示已启用，0表示未启用；用于超分辨率状态变化时的信息回调。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_PLAYER_TRACH_CHANGE_INFO_TRACK_INDEX"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["轨道切换信息中表示轨道索引的关键字，值类型为int32_t。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_PLAYER_TRACH_CHANGE_INFO_TRACK_SELECTED"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["轨道切换信息中表示轨道是否被选中的标志关键字，值类型为int32_t。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_PLAYER_SUBTITLE_UPDATE_INFO_DURATION"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["字幕更新信息中表示持续时间的关键字，值类型为int32_t。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_PLAYER_SUBTITLE_UPDATE_INFO_START_TIME"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["字幕更新信息中表示起始时间的关键字，值类型为int32_t。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_PLAYER_SUBTITLE_UPDATE_INFO_TEXT"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["字幕更新信息中表示字幕文本内容的关键字，值类型为字符串（string）。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_PLAYER_SERVER_IP_ADDRESS"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["播放信息中表示服务器IP地址的关键字。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_PLAYER_IS_DOWNLOADING"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["播放信息中表示当前是否处于下载状态的关键字。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_PLAYER_BUFFER_DURATION"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["播放信息中表示缓冲区时长的关键字。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_PLAYER_DOWNLOAD_RATE"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["播放信息中表示当前下载速率的关键字，下载速率的单位为比特率（bps）。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_PLAYER_AVG_DOWNLOAD_RATE"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["播放信息中表示平均下载速率的关键字，下载速率的单位为比特率（bps）。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_MEDIA_EVENT_INFO_PREPARE_DURATION"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取统计指标信息中的准备时长的关键字，对应值类型为uint32_t，单位为毫秒。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_MEDIA_EVENT_INFO_RESOURCE_CONNECTION_DURATION"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取统计指标信息中的资源链接建立时长的关键字，对应值类型为uint32_t，单位为毫秒。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_MEDIA_EVENT_INFO_FIRST_FRAME_DECAPSULATION_DURATION"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取统计指标信息中的首帧解封装时长的关键字，对应值类型为uint32_t，单位为毫秒。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_MEDIA_EVENT_INFO_TOTAL_PLAYING_TIME"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取统计指标信息中的累计播放时长的关键字，对应值类型为uint32_t，单位为毫秒。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_MEDIA_EVENT_INFO_DOWNLOAD_REQUEST_COUNT"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取统计指标信息中的媒体资源加载请求累计次数的关键字，对应值类型为uint32_t。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_MEDIA_EVENT_INFO_DOWNLOAD_TOTAL_TIME"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取统计指标信息中的媒体资源加载总时长的关键字，对应值类型为uint32_t，单位为毫秒。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_MEDIA_EVENT_INFO_DOWNLOAD_TOTAL_SIZE"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取统计指标信息中的已加载媒体资源累计字节数的关键字，对应值类型为int64_t。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_MEDIA_EVENT_INFO_STALLING_COUNT"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取统计指标信息中的累计卡顿次数的关键字，对应值类型为uint32_t。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * OH_MEDIA_EVENT_INFO_TOTAL_STALLING_TIME"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取统计指标信息中的累计卡顿时长的关键字，对应值类型为uint32_t，单位为毫秒。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "枚举类型说明",
      children: "枚举类型说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "avplayerstate",
      children: "AVPlayerState"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum AVPlayerState\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "播放状态。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.AVPlayer"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
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
            children: "AV_IDLE = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "空闲"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV_INITIALIZED = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "初始化"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV_PREPARED = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "准备"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV_PLAYING = 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "播放"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV_PAUSED = 4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "暂停"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV_STOPPED = 5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "停止"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV_COMPLETED = 6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "结束"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV_RELEASED = 7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "释放"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV_ERROR = 8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "错误"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "avplayerseekmode",
      children: "AVPlayerSeekMode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum AVPlayerSeekMode\n"
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
      }), " SystemCapability.Multimedia.Media.AVPlayer"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
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
            children: "AV_SEEK_NEXT_SYNC = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "同步到时间点之后的关键帧。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV_SEEK_PREVIOUS_SYNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "同步到时间点之前的关键帧。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV_SEEK_CLOSEST = 2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["同步到距离指定时间点最近的帧。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV_SEEK_CONTINUOUS = 3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["连续拖动模式下的跳转（seek）。该模式可提供更流畅的拖拽体验，但要求设备支持对当前流执行连续跳转。在调用连续跳转前，请先检查是否支持，参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-avplayer-h/capi-avplayer-h#oh_avplayer_isseekcontinuoussupported",
              children: "OH_AVPlayer_IsSeekContinuousSupported"
            }), "。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "avplaybackspeed",
      children: "AVPlaybackSpeed"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum AVPlaybackSpeed\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "播放速度。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.AVPlayer"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
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
            children: "AV_SPEED_FORWARD_0_75_X"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.75倍速播放。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV_SPEED_FORWARD_1_00_X"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "正常播放。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV_SPEED_FORWARD_1_25_X"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.25倍速播放。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV_SPEED_FORWARD_1_75_X"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.75倍速播放。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV_SPEED_FORWARD_2_00_X"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2.0倍速播放。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV_SPEED_FORWARD_0_50_X"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["0.5倍速播放。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV_SPEED_FORWARD_1_50_X"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["1.5倍速播放。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV_SPEED_FORWARD_3_00_X"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["3.0倍速播放。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 13"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV_SPEED_FORWARD_0_25_X"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["0.25倍速播放。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 13"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV_SPEED_FORWARD_0_125_X"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["0.125倍速播放。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 13"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "avplayeroninfotype",
      children: "AVPlayerOnInfoType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum AVPlayerOnInfoType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "OnInfo类型。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可用于OH_AVPlayerOnInfoCallback和OH_AVPlayerOnInfo(已废弃)，用于表示收到的播放器信息类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 12开始，推荐用户使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-c/media-headerfile/capi-avplayer-base-h/capi-avplayer-base-h#oh_avplayeroninfocallback",
        children: "OH_AVPlayerOnInfoCallback"
      }), "。不同的OnInfo类型，可获取到不同信息（infoBody），infoBody中包含key-value关系表，详见下述枚举值表。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用API version 11版本的开发者，需要使用旧接口。针对已废弃接口OH_AVPlayerOnInfo中使用的对应关系，可直接参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-c/media-headerfile/capi-avplayer-base-h/capi-avplayer-base-h#oh_avplayeroninfo",
        children: "OH_AVPlayerOnInfo"
      }), "的API说明。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.AVPlayer"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
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
            children: "AV_INFO_TYPE_SEEKDONE = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "跳转到对应播放位置时返回消息。  key为OH_PLAYER_SEEK_POSITION：取值类型int32_t。系统通过int32_t传递value，应用需通过int32_t获取。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV_INFO_TYPE_SPEEDDONE = 1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["播放倍速设置完成时返回消息。  key为OH_PLAYER_PLAYBACK_SPEED：取值类型", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-avplayer-base-h/capi-avplayer-base-h#avplaybackspeed",
              children: "AVPlaybackSpeed"
            }), "。系统通过int32_t传递value，应用需先通过int32_t获取，再强制转为", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-avplayer-base-h/capi-avplayer-base-h#avplaybackspeed",
              children: "AVPlaybackSpeed"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV_INFO_TYPE_BITRATEDONE = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "比特率设置完成时返回消息。  key为OH_PLAYER_BITRATE：取值类型uint32_t。系统通过int32_t传递value，应用需先通过int32_t获取，再强制为uint32_t。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV_INFO_TYPE_EOS = 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "播放完成时返回消息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV_INFO_TYPE_STATE_CHANGE = 4"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["状态改变时返回消息。  key为OH_PLAYER_STATE：取值类型int32_t。系统通过int32_t传递value，应用需先通过int32_t获取，再强制转为", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-avplayer-base-h/capi-avplayer-base-h#avplayerstate",
              children: "AVPlayerState"
            }), "。  key为OH_PLAYER_STATE_CHANGE_REASON：取值类型int32_t。系统通过int32_t传递value，应用需通过int32_t获取。1：用户操作触发；2：系统变更触发。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV_INFO_TYPE_POSITION_UPDATE = 5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回当前播放位置。  key为OH_PLAYER_CURRENT_POSITION：取值类型int32_t。系统通过int32_t传递value，应用需通过int32_t获取。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV_INFO_TYPE_MESSAGE = 6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "视频开始渲染时返回消息。  key为OH_PLAYER_MESSAGE_TYPE：取值类型int32_t。系统通过int32_t传递value，应用需通过int32_t获取。1表示视频开始渲染。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV_INFO_TYPE_VOLUME_CHANGE = 7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "音量改变时返回消息。  key为OH_PLAYER_VOLUME：取值类型float。系统通过float传递value，应用需通过float获取。取值范围[0.0, 1.0]。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV_INFO_TYPE_RESOLUTION_CHANGE = 8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "首次获取视频大小或视频大小更新时返回消息。  key为OH_PLAYER_VIDEO_WIDTH 或 OH_PLAYER_VIDEO_HEIGHT：取值类型int32_t。系统通过int32_t传递value，应用需通过int32_t获取。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV_INFO_TYPE_BUFFERING_UPDATE = 9"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回多队列缓冲时间。  key为OH_PLAYER_BUFFERING_TYPE：取值类型", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-avplayer-base-h/capi-avplayer-base-h#avplayerbufferingtype",
              children: "AVPlayerBufferingType"
            }), "。系统通过int32_t传递value，应用需先通过int32_t获取，再强制转为", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-avplayer-base-h/capi-avplayer-base-h#avplayerbufferingtype",
              children: "AVPlayerBufferingType"
            }), "。  key为OH_PLAYER_BUFFERING_VALUE：取值类型int32_t。系统通过int32_t传递value，应用需通过int32_t获取。  当缓冲更新消息类型是AVPLAYER_BUFFERING_PERCENT、AVPLAYER_BUFFERING_CACHED_DURATION时有效，分别表示缓冲进度完成百分比、缓冲数据可播放时长。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV_INFO_TYPE_BITRATE_COLLECT = 10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "上报HLS视频比特率列表消息。  key为OH_PLAYER_BITRATE_ARRAY：取值类型uint8_t字节数组。应用需要先使用uint8_t类型指针变量保存比特率列表，使用size_t类型变量保存字节数组长度。然后分配若干个uint32_t类型的存储空间，接收将uint8_t字节数组转换为uint32_t类型比特率整数值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV_INFO_TYPE_INTERRUPT_EVENT = 11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "音频焦点改变时返回消息。  取值类型int32_t。系统通过int32_t传递value，应用需通过int32_t获取。  key为：  OH_PLAYER_AUDIO_INTERRUPT_TYPE：取值1表示中断事件开始；2表示结束。  OH_PLAYER_AUDIO_INTERRUPT_FORCE：取值0表示强制打断，系统改变音频播放状态；1表示共享打断，应用改变音频播放状态。  OH_PLAYER_AUDIO_INTERRUPT_HINT：取值0表示NONE，无提示；1表示RESUME，提示音频恢复；2表示PAUSE，提示音频暂停暂时失去焦点；3表示STOP，提示音频停止；4表示DUCK，音频降低音量；5表示UNDUCK，音频恢复音量。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV_INFO_TYPE_DURATION_UPDATE = 12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回播放时长。  key为OH_PLAYER_DURATION：取值类型int64_t。系统通过int64_t传递value，应用需通过int64_t获取。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV_INFO_TYPE_IS_LIVE_STREAM = 13"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "播放为直播流时返回消息。 key为OH_PLAYER_IS_LIVE_STREAM：取值类型int32_t。系统通过int32_t传递value，应用需通过int32_t获取。0表示非直播流，1表示直播流。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV_INFO_TYPE_TRACKCHANGE = 14"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "轨道改变时返回消息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV_INFO_TYPE_TRACK_INFO_UPDATE = 15"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "轨道更新时返回消息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV_INFO_TYPE_SUBTITLE_UPDATE = 16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字幕信息更新时返回消息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV_INFO_TYPE_AUDIO_OUTPUT_DEVICE_CHANGE = 17"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "音频输出设备改变时返回消息。  key为OH_PLAYER_AUDIO_DEVICE_CHANGE_REASON：取值类型int32_t。系统通过int32_t传递value，应用需通过int32_t获取。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV_INFO_TYPE_PLAYBACK_RATE_DONE = 18"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["播放速率成功应用时返回消息。  key为OH_PLAYER_PLAYBACK_RATE：取值类型float。系统通过float传递value，应用通过float获取。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 20"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV_INFO_TYPE_SUPER_RESOLUTION_CHANGED = 19"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["超分辨率变化时返回消息。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "avplayerbufferingtype",
      children: "AVPlayerBufferingType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum AVPlayerBufferingType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "播放缓冲消息类型定义。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.AVPlayer"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
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
            children: "AVPLAYER_BUFFERING_START = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "缓冲开始消息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AVPLAYER_BUFFERING_END"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "缓冲结束消息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AVPLAYER_BUFFERING_PERCENT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "缓冲执行进度百分比，取值范围：整数，[0, 100]。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AVPLAYER_BUFFERING_CACHED_DURATION"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "缓冲数据可播放时长，单位：毫秒。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "avplayertrackswitchmode",
      children: "AVPlayerTrackSwitchMode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum AVPlayerTrackSwitchMode\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "枚举轨道切换模式。"
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
            children: "AV_TRACK_SWITCH_MODE_SMOOTH = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "平滑切换轨道。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV_TRACK_SWITCH_MODE_SEGMENT = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按片段切换轨道。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV_TRACK_SWITCH_MODE_CLOSEST = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "切换到最接近的轨道。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数说明",
      children: "函数说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avplayeroninfo",
      children: "OH_AVPlayerOnInfo()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void (*OH_AVPlayerOnInfo)(OH_AVPlayer *player, AVPlayerOnInfoType type, int32_t extra)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "收到播放器消息时调用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "信息类型（type）和信息（extra）的对应关系如表所示。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "信息类型（type）"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "对应的extra描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV_INFO_TYPE_SEEKDONE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "跳转到对应播放位置时返回消息，extra表示跳转到的位置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV_INFO_TYPE_SPEEDDONE"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["播放倍速设置完成时返回消息，extra表示播放倍速信息，具体请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "#avplaybackspeed",
              children: "AVPlaybackSpeed"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV_INFO_TYPE_BITRATEDONE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "比特率设置完成时返回消息，extra表示比特率信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV_INFO_TYPE_EOS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "播放完成时返回消息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV_INFO_TYPE_STATE_CHANGE"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["状态改变时返回消息，extra表示当前播放状态，具体请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "#avplayerstate",
              children: "AVPlayerState"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV_INFO_TYPE_POSITION_UPDATE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回当前播放位置，extra表示当前位置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV_INFO_TYPE_MESSAGE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "视频开始渲染时返回消息，extra表示视频首帧渲染。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV_INFO_TYPE_VOLUME_CHANGE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "音量改变时返回消息，此场景下extra未定义。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV_INFO_TYPE_RESOLUTION_CHANGE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "首次获取视频大小或视频大小更新时返回消息，此场景下extra未定义。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV_INFO_TYPE_BUFFERING_UPDATE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回多队列缓冲时间，extra表示视频时长。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV_INFO_TYPE_BITRATE_COLLECT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "上报HLS视频比特率列表消息。上报时每个比特率已经转化为uint8_t字节数组，使用者需要将uint8_t字节数组强制转换为uint32_t整型数组。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV_INFO_TYPE_INTERRUPT_EVENT"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["音频焦点改变时返回消息，extra表示音频打断提示，具体请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiostream-base-h/capi-native-audiostream-base-h#oh_audiointerrupt_hint",
              children: "OH_AudioInterrupt_Hint"
            }), "，应用可决定是否根据打断提示作进一步处理。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV_INFO_TYPE_DURATION_UPDATE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回播放时长，extra表示视频时长。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV_INFO_TYPE_IS_LIVE_STREAM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "播放为直播流时返回消息，extra表示是否为直播流，0表示非直播流，1表示直播流。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV_INFO_TYPE_TRACKCHANGE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "轨道改变时返回消息，此场景extra未定义。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV_INFO_TYPE_TRACK_INFO_UPDATE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "轨道更新时返回消息，此场景extra未定义。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV_INFO_TYPE_SUBTITLE_UPDATE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字幕信息更新时返回消息，此场景extra未定义。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AV_INFO_TYPE_AUDIO_OUTPUT_DEVICE_CHANGE"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["音频输出设备改变时返回消息，extra表示设备改变原因，具体请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiostream-base-h/capi-native-audiostream-base-h#oh_audiostream_devicechangereason",
              children: "OH_AudioStream_DeviceChangeReason"
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.AVPlayer"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "废弃版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "替代接口："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-c/media-headerfile/capi-avplayer-base-h/capi-avplayer-base-h#oh_avplayeroninfocallback",
        children: "OH_AVPlayerOnInfoCallback"
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
              href: "/ref/media-api/media-c/media-struct/capi-avplayer-oh-avplayer/capi-avplayer-oh-avplayer",
              children: "OH_AVPlayer"
            }), " *player"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_AVPlayer实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-avplayer-base-h/capi-avplayer-base-h#avplayeroninfotype",
              children: "AVPlayerOnInfoType"
            }), " type"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["信息类型。类型为", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-avplayer-base-h/capi-avplayer-base-h#avplayeroninfotype",
              children: "AVPlayerOnInfoType"
            }), "，与extra的对应关系可见方法描述。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t extra"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "其他信息，如播放文件的开始时间位置。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avplayeroninfocallback",
      children: "OH_AVPlayerOnInfoCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void (*OH_AVPlayerOnInfoCallback)(OH_AVPlayer *player, AVPlayerOnInfoType type, OH_AVFormat* infoBody, void *userData)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "收到播放器消息时被调用。如果应用成功设置该回调，则不会回调OH_AVPlayerOnInfo函数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.AVPlayer"]
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
              href: "/ref/media-api/media-c/media-struct/capi-avplayer-oh-avplayer/capi-avplayer-oh-avplayer",
              children: "OH_AVPlayer"
            }), " *player"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_AVPlayer实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-avplayer-base-h/capi-avplayer-base-h#avplayeroninfotype",
              children: "AVPlayerOnInfoType"
            }), " type"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["信息类型。具体请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-avplayer-base-h/capi-avplayer-base-h#avplayeroninfotype",
              children: "AVPlayerOnInfoType"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-struct/capi-core-oh-avformat/capi-core-oh-avformat",
              children: "OH_AVFormat"
            }), "* infoBody"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向携带具体消息的指针，仅在该回调方法内有效。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void *userData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向应用调用者设置该回调函数时提供的实例的指针。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avplayeronerror",
      children: "OH_AVPlayerOnError()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void (*OH_AVPlayerOnError)(OH_AVPlayer *player, int32_t errorCode, const char *errorMsg)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在API version 9以上的版本发生错误时调用。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.AVPlayer"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "废弃版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "替代接口："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-c/media-headerfile/capi-avplayer-base-h/capi-avplayer-base-h#oh_avplayeronerrorcallback",
        children: "OH_AVPlayerOnErrorCallback"
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
              href: "/ref/media-api/media-c/media-struct/capi-avplayer-oh-avplayer/capi-avplayer-oh-avplayer",
              children: "OH_AVPlayer"
            }), " *player"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_AVPlayer实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t errorCode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "错误码。  AV_ERR_NO_MEMORY：无内存，取值为1。  AV_ERR_OPERATE_NOT_PERMIT：操作不允许，取值为2。  AV_ERR_INVALID_VAL：无效值，取值为3。  AV_ERR_IO：IO错误，取值为4。  AV_ERR_TIMEOUT：超时错误，取值为5。  AV_ERR_UNKNOWN：未知错误，取值为6。  AV_ERR_SERVICE_DIED：服务死亡，取值为7。  AV_ERR_INVALID_STATE：当前状态不支持此操作，取值为8。  AV_ERR_UNSUPPORT：未支持的接口，取值为9。  AV_ERR_EXTEND_START：扩展错误码初始值，取值为100。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char *errorMsg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "错误消息。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avplayeronerrorcallback",
      children: "OH_AVPlayerOnErrorCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void (*OH_AVPlayerOnErrorCallback)(OH_AVPlayer *player, int32_t errorCode, const char *errorMsg, void *userData)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "发生错误时被调用。如果应用成功设置该回调，则不会调用OH_AVPlayerOnError函数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.AVPlayer"]
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
              href: "/ref/media-api/media-c/media-struct/capi-avplayer-oh-avplayer/capi-avplayer-oh-avplayer",
              children: "OH_AVPlayer"
            }), " *player"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_AVPlayer实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t errorCode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "错误码。  AV_ERR_NO_MEMORY：无内存，取值为1。  AV_ERR_OPERATE_NOT_PERMIT：操作不允许，取值为2。  AV_ERR_INVALID_VAL：无效值，取值为3。  AV_ERR_IO：IO错误。API version 12-13取值为4；API version 14及以后，对应错误细化为错误码5411001~5411011。  AV_ERR_TIMEOUT：超时错误，取值为5。  AV_ERR_UNKNOWN：未知错误，取值为6。  AV_ERR_SERVICE_DIED：服务死亡，取值为7。  AV_ERR_INVALID_STATE：当前状态不支持此操作，取值为8。  AV_ERR_UNSUPPORT：未支持的接口，取值为9。  AV_ERR_EXTEND_START：扩展错误码初始值，取值为100。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char *errorMsg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "错误消息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void *userData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "原样返回用户设置回调时传入的userData数据。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avplayeronamplitudeupdatecallback",
      children: "OH_AVPlayerOnAmplitudeUpdateCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void (*OH_AVPlayerOnAmplitudeUpdateCallback)(OH_AVPlayer *player, double *amplitudes, uint32_t size, void *userData)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当计算出最大音频电平值时调用。"
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
            children: "OH_AVPlayer *player"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_AVPlayer实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "double *amplitudes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向最大音频电平值数组的指针。注意：最大音频电平值数组会在回调后自动释放，如有需要，用户需自行拷贝数据以供后续使用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "最大音频电平值数组的大小。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void *userData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向用户特定数据的指针。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avplayeronseimessagereceivedcallback",
      children: "OH_AVPlayerOnSeiMessageReceivedCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void (*OH_AVPlayerOnSeiMessageReceivedCallback)(OH_AVPlayer *player, OH_AVSeiMessageArray *message, int32_t playbackPosition, void *userData)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于获取SEI消息的回调处理函数。在订阅SEI消息事件时使用，回调返回详细的SEI信息。"
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
            children: "OH_AVPlayer *player"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_AVPlayer实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVSeiMessageArray *message"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SEI消息数组。注意：SEI消息数组会在回调后自动释放，如有需要，用户需自行拷贝数据以供后续使用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t playbackPosition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "播放位置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void *userData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向用户特定数据的指针。"
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