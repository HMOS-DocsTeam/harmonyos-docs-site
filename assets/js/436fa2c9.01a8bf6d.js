"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["954422"], {
853167(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_call_kit_guide_incoming_calls_incoming_calls_md_436_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-call-kit-guide-incoming-calls-incoming-calls-md-436.json
var site_docs_call_kit_guide_incoming_calls_incoming_calls_md_436_namespaceObject = JSON.parse('{"id":"call-kit-guide/incoming-calls/incoming-calls","title":"来电场景","description":"场景介绍","source":"@site/docs/call-kit-guide/incoming-calls/incoming-calls.md","sourceDirName":"call-kit-guide/incoming-calls","slug":"/call-kit-guide/incoming-calls/","permalink":"/harmonyos-docs-site/call-kit-guide/incoming-calls/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"来电场景","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/incoming-calls","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"开发准备","permalink":"/harmonyos-docs-site/call-kit-guide/call-preparations/"},"next":{"title":"去电场景","permalink":"/harmonyos-docs-site/call-kit-guide/outgoing-calls/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/call-kit-guide/incoming-calls/incoming-calls.md


const frontMatter = {
	title: '来电场景',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/incoming-calls',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '来电场景';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 2
}, {
  "value": "业务流程",
  "id": "业务流程",
  "level": 2
}, {
  "value": "来电场景：接听流程图",
  "id": "来电场景接听流程图",
  "level": 3
}, {
  "value": "来电场景：拒接流程图",
  "id": "来电场景拒接流程图",
  "level": 3
}, {
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "来电场景",
        children: "来电场景"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用接收到来自网络的音/视频通话，称为来电场景。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "来电场景的效果图展示如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "语音来电"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "视频来电"
              })
            })
          }), (0,jsx_runtime.jsxs)(_components.th, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "视频来电（不支持语音接听"
              })
            }), "）"]
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "通话中"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "锁屏语音来电"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "锁屏视频来电"
              })
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "来电场景支持Phone、Tablet设备，并从6.0(20)版本开始支持Wearable设备。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "业务流程",
      children: "业务流程"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "来电场景接听流程图",
      children: "来电场景：接听流程图"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(282269)/* ["default"] */.A) + "",
        width: "936",
        height: "1050"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "来电场景拒接流程图",
      children: "来电场景：拒接流程图"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(962274)/* ["default"] */.A) + "",
        width: "1107",
        height: "955"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["来电场景的接口，由", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/call-api/call-arkts/call-voipcall/call-voipcall",
        children: "voipCall"
      }), "提供。更多接口信息详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/call-api/call-arkts/call-voipcall/call-voipcall",
        children: "接口文档"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "on(type: 'voipCallUiEvent', callback: Callback<VoipCallUiEventInfo>): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "订阅voipCallUiEvent事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "off(type: 'voipCallUiEvent', callback?: Callback<VoipCallUiEventInfo>): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消订阅voipCallUiEvent事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "reportIncomingCall(voipCallAttribute: VoipCallAttribute): Promise<ErrorReason>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "上报来电。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "reportCallAudioEventChange(callId: string, callAudioEvent: CallAudioEvent): Promise<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "上报音频事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "reportCallStateChange(callId: string, callState: VoipCallState): Promise<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "上报通话状态改变。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "reportCallStateChange(callId: string, callState: VoipCallState, callType: VoipCallType): Promise<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "上报通话状态改变，并指定通话类型。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入相关依赖。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { voipCall } from '@kit.CallServiceKit';\nimport { image } from '@kit.ImageKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "为了感知到用户在横幅通知上做的接听、挂断、静音与解除静音等操作，应用需要注册voipCallUiEvent事件。建议在上报来电之前注册。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "示例代码如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 注册voipCallUiEvent事件\nvoipCall.on('voipCallUiEvent', callback => {\n  hilog.info(0x0000, 'CallDemo', 'Succeeded in registering voipCallUiEvent');\n});\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["应用内部建立通话连接之后，需要向Call Service Kit上报来电，并携带通话信息，详见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/call-api/call-arkts/call-voipcall/call-voipcall#voipcallattribute",
            children: "VoipCallAttribute"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如果当时应用在后台，系统会展示来电横幅。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "示例代码如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 构造上报来电的参数\nlet voipCallAttribute: voipCall.VoipCallAttribute = {\n  callId: '1234567890',\n  voipCallType: voipCall.VoipCallType.VOIP_CALL_VOICE,\n  userName: 'Callman',\n  userProfile: image.createPixelMapSync(new ArrayBuffer(100), { size: { width: 90, height: 90 } }),\n  abilityName: 'VoipCallAbility',\n  voipCallState: voipCall.VoipCallState.VOIP_CALL_STATE_RINGING,\n  showBannerForIncomingCall: true\n};\n\n// 上报来电\nvoipCall.reportIncomingCall(voipCallAttribute).then(errorReason => {\n  if (errorReason == voipCall.ErrorReason.ERROR_NONE) {\n    hilog.info(0x0000, 'CallDemo', 'Succeeded in reporting the incoming call');\n  } else {\n    hilog.error(0x0000, 'CallDemo', 'Failed to report the incoming call: %{public}d', errorReason);\n  }\n});\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["对于视频通话，可以通过参数", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/call-api/call-arkts/call-voipcall/call-voipcall#voipcallattribute",
            children: "isVoiceAnswerSupported"
          }), "指定是否允许语音接听，示例代码如下："]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 构造上报来电的参数\nlet voipCallAttribute: voipCall.VoipCallAttribute = {\n  callId: '1234567890',\n  voipCallType: voipCall.VoipCallType.VOIP_CALL_VIDEO,\n  userName: 'Jack',\n  userProfile: image.createPixelMapSync(new ArrayBuffer(100), { size: { width: 90, height: 90 } }),\n  abilityName: 'VoipCallAbility',\n  voipCallState: voipCall.VoipCallState.VOIP_CALL_STATE_RINGING,\n  showBannerForIncomingCall: true,\n  isVoiceAnswerSupported: false  // 视频通话不支持语音接听\n};\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "接收到来电之后，用户可以选择接听或拒接。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "接听有两种开发方式：上报两次状态、只上报一次状态。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "上报两次状态（推荐）。"
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["以语音通话为例，应用在接收到", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/call-api/call-arkts/call-voipcall/call-voipcall#voipcalluievent",
                children: "VOIP_CALL_EVENT_VOICE_ANSWER"
              }), "事件回调之后，立即向Call Service Kit上报", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/call-api/call-arkts/call-voipcall/call-voipcall#voipcallstate",
                children: "VOIP_CALL_STATE_ANSWERED"
              }), "状态，并同时执行应用内接听。"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["在完成应用内接听之后，再向Call Service Kit上报", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/call-api/call-arkts/call-voipcall/call-voipcall#voipcallstate",
                children: "VOIP_CALL_STATE_ACTIVE"
              }), "状态，系统会更新通话横幅。"]
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "示例代码如下："
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "voipCall.on('voipCallUiEvent', callback => {\n  if (callback?.voipCallUiEvent == voipCall.VoipCallUiEvent.VOIP_CALL_EVENT_VOICE_ANSWER) {\n    // 立即向Call Service Kit上报answered状态\n    voipCall.reportCallStateChange(callback.callId, voipCall.VoipCallState.VOIP_CALL_STATE_ANSWERED);\n\n    //...在应用内完成接听\n\n    // 应用内接听后，向Call Service Kit上报active状态\n    voipCall.reportCallStateChange(callback.callId, voipCall.VoipCallState.VOIP_CALL_STATE_ACTIVE);\n  }\n});\n"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "接听过程的效果图展示如下："
            }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
              children: [(0,jsx_runtime.jsx)(_components.thead, {
                children: (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.th, {
                    children: (0,jsx_runtime.jsx)(_components.strong, {
                      children: (0,jsx_runtime.jsx)(_components.strong, {
                        children: "正在接通"
                      })
                    })
                  }), (0,jsx_runtime.jsx)(_components.th, {
                    children: (0,jsx_runtime.jsx)(_components.strong, {
                      children: (0,jsx_runtime.jsx)(_components.strong, {
                        children: "接通后"
                      })
                    })
                  })]
                })
              }), (0,jsx_runtime.jsx)(_components.tbody, {
                children: (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
                })
              })]
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(424750)/* ["default"] */.A) + "",
                width: "102",
                height: "38"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "通话接听时，上报两次状态的好处是："
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "因为网络等原因，从用户点击接听，到通话真正被接通的时间间隔可能比较长（比如，1s左右）。这段时间，如果横幅通知的样式不变，一直停留在来电状态，用户可能认为点击接听无响应，体验不好。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "上报两次状态，可以在接听的过程中，在界面上给用户以反馈。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "只上报一次状态。"
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["以语音通话为例，应用在接收到", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/call-api/call-arkts/call-voipcall/call-voipcall#voipcalluievent",
            children: "VOIP_CALL_EVENT_VOICE_ANSWER"
          }), "事件回调之后，执行应用内接听。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["一直到完成应用内接听后，再向Call Service Kit上报", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/call-api/call-arkts/call-voipcall/call-voipcall#voipcallstate",
            children: "VOIP_CALL_STATE_ACTIVE"
          }), "状态。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "示例代码如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "voipCall.on('voipCallUiEvent', callback => {\n  if (callback?.voipCallUiEvent == voipCall.VoipCallUiEvent.VOIP_CALL_EVENT_VOICE_ANSWER) {\n    //...在应用内完成接听\n\n    // 应用内接听后，向Call Service Kit上报通话状态\n    voipCall.reportCallStateChange(callback.callId, voipCall.VoipCallState.VOIP_CALL_STATE_ACTIVE);\n  }\n});\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["如果用户在横幅通知上点击拒接，则应用在接收到", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/call-api/call-arkts/call-voipcall/call-voipcall#voipcalluievent",
            children: "VOIP_CALL_EVENT_REJECT"
          }), "事件回调之后，在应用内完成拒接，然后向Call Service Kit 上报", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/call-api/call-arkts/call-voipcall/call-voipcall#voipcallstate",
            children: "VOIP_CALL_STATE_DISCONNECTED"
          }), "状态，系统会取消横幅通知。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "拒接之后，应用可跳过5、6步，直接看第7步。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "拒接的示例代码如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "voipCall.on('voipCallUiEvent', callback => {\n  if (callback?.voipCallUiEvent == voipCall.VoipCallUiEvent.VOIP_CALL_EVENT_REJECT) {\n    // ...应用内完成拒接\n\n    // 向Call Service Kit上报通话状态\n    voipCall.reportCallStateChange(callback.callId, voipCall.VoipCallState.VOIP_CALL_STATE_DISCONNECTED);\n  }\n});\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在通话过程中，用户可以根据需要，可以静音或解除静音。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["以静音为例，用户在横幅上点击静音，Call Service Kit会给应用回调", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/call-api/call-arkts/call-voipcall/call-voipcall#voipcalluievent",
            children: "VOIP_CALL_EVENT_MUTED"
          }), "事件。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["应用在完成静音后，应向Call Service Kit上报", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/call-api/call-arkts/call-voipcall/call-voipcall#callaudioevent",
            children: "AUDIO_EVENT_MUTED"
          }), "音频状态。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "示例代码如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "voipCall.on('voipCallUiEvent', callback => {\n  if (callback?.voipCallUiEvent == voipCall.VoipCallUiEvent.VOIP_CALL_EVENT_MUTED) {\n    // 向Call Service Kit上报静音\n    voipCall.reportCallAudioEventChange(callback.callId, voipCall.CallAudioEvent.AUDIO_EVENT_MUTED);\n  } else if (callback?.voipCallUiEvent == voipCall.VoipCallUiEvent.VOIP_CALL_EVENT_UNMUTED) {\n    // 向Call Service Kit上报解除静音\n    voipCall.reportCallAudioEventChange(callback.callId, voipCall.CallAudioEvent.AUDIO_EVENT_UNMUTED);\n  }\n});\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "静音、解除静音的横幅通知效果图展示如下："
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "静音"
                  })
                })
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "解除静音"
                  })
                })
              })]
            })
          }), (0,jsx_runtime.jsx)(_components.tbody, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
            })
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["用户在横幅点击挂断，Call Service Kit会给应用回调", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/call-api/call-arkts/call-voipcall/call-voipcall#voipcalluievent",
            children: "VOIP_CALL_EVENT_HANGUP"
          }), "事件。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["应用收到该事件后，应在应用内完成挂断，然后，向Call Service Kit上报", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/call-api/call-arkts/call-voipcall/call-voipcall#voipcallstate",
            children: "VOIP_CALL_STATE_DISCONNECTED"
          }), "状态，系统会取消横幅通知。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "示例代码如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "voipCall.on('voipCallUiEvent', callback => {\n  if (callback?.voipCallUiEvent == voipCall.VoipCallUiEvent.VOIP_CALL_EVENT_HANGUP) {\n    // ...应用内完成挂断\n\n    // 向Call Service Kit上报通话状态\n    voipCall.reportCallStateChange(callback.callId, voipCall.VoipCallState.VOIP_CALL_STATE_DISCONNECTED);\n  }\n});\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通话结束后，应用不再需要感知到用户在通话横幅上的操作，可以解除voipCallUiEvent事件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "示例代码如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 解除voipCallUiEvent事件\nvoipCall.off('voipCallUiEvent', callback => {\n  hilog.info(0x0000, 'CallDemo', `Succeeded in unRegistering voipCallUiEvent, callId: ${callback.callId}`);\n});\n"
          })
        }), "\n"]
      }), "\n"]
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
424750(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
282269(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478831-50443b5fe26b4d022c865128c89066d9.jpg");

},
962274(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799182-766e4fa4cc01e2b4a0ed29de6d1646a2.jpg");

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