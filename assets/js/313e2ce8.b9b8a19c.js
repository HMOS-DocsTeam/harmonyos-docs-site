"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["280346"], {
24608(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_avsession_api_avsession_arkts_js_apis_avsession_arkts_apis_avsession_t_arkts_apis_avsession_t_md_313_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-avsession-api-avsession-arkts-js-apis-avsession-arkts-apis-avsession-t-arkts-apis-avsession-t-md-313.json
var site_docs_ref_avsession_api_avsession_arkts_js_apis_avsession_arkts_apis_avsession_t_arkts_apis_avsession_t_md_313_namespaceObject = JSON.parse('{"id":"avsession-api/avsession-arkts/js-apis-avsession/arkts-apis-avsession-t/arkts-apis-avsession-t","title":"Types","description":"本模块首批接口从API version 9开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。","source":"@site/docs-ref/avsession-api/avsession-arkts/js-apis-avsession/arkts-apis-avsession-t/arkts-apis-avsession-t.md","sourceDirName":"avsession-api/avsession-arkts/js-apis-avsession/arkts-apis-avsession-t","slug":"/avsession-api/avsession-arkts/js-apis-avsession/arkts-apis-avsession-t/arkts-apis-avsession-t","permalink":"/harmonyos-docs-site/ref/avsession-api/avsession-arkts/js-apis-avsession/arkts-apis-avsession-t/arkts-apis-avsession-t","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":9,"frontMatter":{"title":"Types","sidebar_position":9,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-avsession-t","kit":"媒体","last_updated":"2026-04-22","slug":"arkts-apis-avsession-t"},"sidebar":"ref","previous":{"title":"Enums","permalink":"/harmonyos-docs-site/ref/avsession-api/avsession-arkts/js-apis-avsession/arkts-apis-avsession-e/arkts-apis-avsession-e"},"next":{"title":"@ohos.multimedia.avCastPickerParam (投播组件参数)","permalink":"/harmonyos-docs-site/ref/avsession-api/avsession-arkts/js-apis-avcastpickerparam/js-apis-avcastpickerparam"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/avsession-api/avsession-arkts/js-apis-avsession/arkts-apis-avsession-t/arkts-apis-avsession-t.md


const frontMatter = {
	title: 'Types',
	sidebar_position: 9,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-avsession-t',
	kit: '媒体',
	last_updated: '2026-04-22',
	slug: 'arkts-apis-avsession-t'
};
const contentTitle = 'Types';

const assets = {

};



const toc = [{
  "value": "导入模块",
  "id": "导入模块",
  "level": 2
}, {
  "value": "AVSessionType10+",
  "id": "avsessiontype10",
  "level": 2
}, {
  "value": "AVCastControlCommandType10+",
  "id": "avcastcontrolcommandtype10",
  "level": 2
}, {
  "value": "ExtraInfo18+",
  "id": "extrainfo18",
  "level": 2
}, {
  "value": "KeyRequestCallback12+",
  "id": "keyrequestcallback12",
  "level": 2
}, {
  "value": "AVControlCommandType10+",
  "id": "avcontrolcommandtype10",
  "level": 2
}, {
  "value": "NoParamCallback22+",
  "id": "noparamcallback22",
  "level": 2
}, {
  "value": "TwoParamCallback22+",
  "id": "twoparamcallback22",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
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
        id: "types",
        children: "Types"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(369039)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本模块首批接口从API version 9开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "导入模块",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { avSession } from '@kit.AVSessionKit';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "avsessiontype10",
      children: "AVSessionType10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type AVSessionType = 'audio' | 'video' | 'voice_call' | 'video_call' | 'photo'"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前会话支持的会话类型。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该类型可取的值为下表字符串。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.AVSession.Core"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "'audio'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "音频"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "'video'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "视频"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "'voice_call'11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "音频通话。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "'video_call'12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "视频通话。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "'photo'22+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图片。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "avcastcontrolcommandtype10",
      children: "AVCastControlCommandType10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type AVCastControlCommandType = 'play' | 'pause' | 'stop' | 'playNext' | 'playPrevious' | 'fastForward' | 'rewind' |"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "'seek' | 'setVolume' | 'setSpeed' | 'setLoopMode' | 'toggleFavorite' | 'toggleMute'"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "投播控制器可传递的命令。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.AVSession.AVCast"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "'play'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "播放。无需传入参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "'pause'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "暂停。无需传入参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "'stop'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "停止。无需传入参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "'playNext'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "下一首。无需传入参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "'playPrevious'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "上一首。无需传入参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "'fastForward'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "快进。无需传入参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "'rewind'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "快退。无需传入参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "'seek'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "跳转某一节点。对应参数使用number类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "'setVolume'"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置音量。对应参数使用number类型, 可通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avsession-api/avsession-arkts/js-apis-avsession/arkts-apis-avsession-i/arkts-apis-avsession-i#avplaybackstate10",
              children: "AVPlaybackState.maxVolume"
            }), "获取系统最大音量"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "'setSpeed'"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置播放倍速。对应参数使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-arkts/js-apis-media/arkts-apis-media-e/arkts-apis-media-e#playbackspeed8",
              children: "media.PlaybackSpeed"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "'setLoopMode'"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置循环模式。对应参数使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avsession-api/avsession-arkts/js-apis-avsession/arkts-apis-avsession-e/arkts-apis-avsession-e#loopmode10",
              children: "LoopMode"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "'toggleFavorite'"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["是否收藏。对应参数使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avsession-api/avsession-arkts/js-apis-avsession/arkts-apis-avsession-i/arkts-apis-avsession-i#avmetadata10",
              children: "AVMetadata.assetId"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "'toggleMute'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置静音状态。无需传入参数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "extrainfo18",
      children: "ExtraInfo18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type ExtraInfo = {[key: string]: Object;}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "媒体提供方设置的自定义媒体数据包对象。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.AVSession.Core"]
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
            children: "{[key: string]: Object;}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "key为远端分布式事件类型。当前支持的事件类型包括：  AUDIO_GET_VOLUME：获取远端设备音量。  AUDIO_GET_AVAILABLE_DEVICES：获取远端所有可连接设备。  AUDIO_GET_PREFERRED_OUTPUT_DEVICE_FOR_RENDERER_INFO：获取远端实际发声设备。  媒体提供方根据不同的远端分布式事件类型，返回对应的媒体数据包Object对象。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "keyrequestcallback12",
      children: "KeyRequestCallback12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type KeyRequestCallback = (assetId: string, requestData: Uint8Array) => void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "许可证请求事件的回调函数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.AVSession.AVCast"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "assetId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体ID。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "requestData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Uint8Array"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体许可证请求数据。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let keyRequestCallback: avSession.KeyRequestCallback = async(assetId: string, requestData: Uint8Array) => {\n  console.info(`Succeeded in keyRequestCallback. assetId: ${assetId}, requestData: ${requestData}`);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "avcontrolcommandtype10",
      children: "AVControlCommandType10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type AVControlCommandType = 'play' | 'pause' | 'stop' | 'playNext' | 'playPrevious' | 'fastForward' | 'rewind' |"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "'seek' | 'setSpeed' | 'setLoopMode' | 'toggleFavorite' | 'playFromAssetId' | 'playWithAssetId' | 'answer' | 'hangUp' | 'toggleCallMute' | 'setTargetLoopMode'"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "会话可传递的命令。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该类型可取的值为下表字符串的并集。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.AVSession.Core"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "'play'"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["播放。无需传入参数。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "'pause'"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["暂停。无需传入参数。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "'stop'"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["停止。 无需传入参数。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "'playNext'"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["下一首。无需传入参数。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "'playPrevious'"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["上一首。无需传入参数。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "'fastForward'"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["快进。对应参数请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avsession-api/avsession-arkts/js-apis-avsession/arkts-apis-avsession-e/arkts-apis-avsession-e#skipintervals11",
              children: "SkipIntervals"
            }), "。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "'rewind'"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["快退。对应参数请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avsession-api/avsession-arkts/js-apis-avsession/arkts-apis-avsession-e/arkts-apis-avsession-e#skipintervals11",
              children: "SkipIntervals"
            }), "。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "'seek'"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["跳转某一节点。对应参数使用number类型。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "'setSpeed'"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置播放倍速。对应参数使用number类型。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "'setLoopMode'"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置循环模式。对应参数使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avsession-api/avsession-arkts/js-apis-avsession/arkts-apis-avsession-e/arkts-apis-avsession-e#loopmode10",
              children: "LoopMode"
            }), "。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "'setTargetLoopMode' 18+"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置目标循环模式。对应参数推荐使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avsession-api/avsession-arkts/js-apis-avsession/arkts-apis-avsession-e/arkts-apis-avsession-e#loopmode10",
              children: "LoopMode"
            }), "。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 18开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "'toggleFavorite'"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["是否收藏。对应参数使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avsession-api/avsession-arkts/js-apis-avsession/arkts-apis-avsession-i/arkts-apis-avsession-i#avmetadata10",
              children: "AVMetadata.assetId"
            }), "。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "'playFromAssetId' 11+"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["播放指定的assetId。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "'playWithAssetId' 20+"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["播放指定的assetId。对应参数使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avsession-api/avsession-arkts/js-apis-avsession/arkts-apis-avsession-i/arkts-apis-avsession-i#avmetadata10",
              children: "AVMetadata.assetId"
            }), "，  字符串长度<40960字节。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 20开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "'answer' 11+"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["接听。无需传入参数。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "'hangUp' 11+"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["挂断。无需传入参数。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "'toggleCallMute' 11+"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置通话静音状态。无需传入参数。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "noparamcallback22",
      children: "NoParamCallback22+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type NoParamCallback = () => void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义无参数的回调函数类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.AVSession.Core"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "twoparamcallback22",
      children: "TwoParamCallback22+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type TwoParamCallback<T, G> = (data1: T, data2: G) => void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义包含两个参数的回调类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.AVSession.Core"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "data1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "参数1。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "data2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "G"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "参数2。"
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
369039(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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