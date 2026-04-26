"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["854658"], {
14777(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_push_kit_guide_push_scenes_push_voip_push_voip_md_5fc_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-push-kit-guide-push-scenes-push-voip-push-voip-md-5fc.json
var site_docs_push_kit_guide_push_scenes_push_voip_push_voip_md_5fc_namespaceObject = JSON.parse('{"id":"push-kit-guide/push-scenes/push-voip/push-voip","title":"推送应用内通话消息","description":"场景介绍","source":"@site/docs/push-kit-guide/push-scenes/push-voip/push-voip.md","sourceDirName":"push-kit-guide/push-scenes/push-voip","slug":"/push-kit-guide/push-scenes/push-voip/","permalink":"/harmonyos-docs-site/push-kit-guide/push-scenes/push-voip/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"推送应用内通话消息","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/push-voip","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"推送实况窗消息","permalink":"/harmonyos-docs-site/push-kit-guide/push-scenes/push-update-liveview/"},"next":{"title":"端云调试概述","permalink":"/harmonyos-docs-site/push-kit-guide/push-server/push-server-intro/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/push-kit-guide/push-scenes/push-voip/push-voip.md


const frontMatter = {
	title: '推送应用内通话消息',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/push-voip',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '推送应用内通话消息';

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
  "value": "开通权益",
  "id": "开通权益",
  "level": 2
}, {
  "value": "频控规则",
  "id": "频控规则",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}, {
  "value": "应用内通话消息",
  "id": "应用内通话消息",
  "level": 3
}, {
  "value": "未接来电通知",
  "id": "未接来电通知",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "推送应用内通话消息",
        children: "推送应用内通话消息"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用内通话消息，支持应用实现网络音视频通话的能力。当终端处于锁屏或解锁两种不同状态时，Push Kit将分别进行以下处理："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["终端处于锁屏状态时，可在锁屏上点击接听或拒绝按钮。锁屏状态下", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "只支持接听语音"
          })
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "终端处于解锁状态时，网络音视频通话呼叫消息显性展示于横幅，支持用户接听视频或语音。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接听视频时会拉起应用内的接听界面。接通后，可以正常挂断（主动挂断/被动挂断）应用内通话消息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用内通话消息样式可参考如下示例，真实样式请以实际效果为准："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "锁屏"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "来电横幅"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(637016)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["应用内通话消息的问题场景请参见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/push-kit-guide/push-faq/push-faq-7",
          children: "指导"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["应用内通话消息的pushOptions.", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-request-param/push-scenariozed-api-request-param#pushoptions",
          children: "ttl"
        }), "建议设置为", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "30~60秒"
          })
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用内通话消息支持Phone、Tablet设备，并且从6.1.0(23)版本开始，新增支持Lite Wearable设备。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开通权益",
      children: "开通权益"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["推送应用内通话消息需要申请场景化消息权益，请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/push-kit-guide/push-preparations/push-apply-right#%E7%94%B3%E8%AF%B7%E6%8E%A8%E9%80%81%E5%BA%94%E7%94%A8%E5%86%85%E9%80%9A%E8%AF%9D%E6%B6%88%E6%81%AF%E6%9D%83%E7%9B%8A",
        children: "申请推送应用内通话消息权益"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "频控规则",
      children: "频控规则"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "调测阶段"
        })
      }), "，每个项目每日全网最多可推送1000条测试消息。发送测试消息需设置", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-request-param/push-scenariozed-api-request-param#pushoptions",
        children: "testMessage"
      }), "为true。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "正式发布阶段"
        })
      }), "，单设备单应用下每日推送消息总条数受", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/push-api/push-rest-api/push-rest-api-scenes/push-msg-freq-control/push-msg-freq-control#%E8%AE%BE%E5%A4%87%E6%B6%88%E6%81%AF%E9%A2%91%E6%8E%A7",
        children: "设备消息频控"
      }), "限制，系统会根据现网使用场景和流量进行管控，不合理的使用场景系统会进行频控。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["参见指导", (0,jsx_runtime.jsx)(_components.a, {
            href: "/push-kit-guide/push-preparations/push-get-token",
            children: "获取Push Token"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在您的工程内创建一个UIAbility类型的组件，如VoIPUIAbility.ets（在项目工程的", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "src/main/ets/entryability"
            })
          }), "目录下），负责处理应用内通话消息的主流程，并完成", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability#oncreate",
            children: "onCreate"
          }), "()、", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability#onwindowstagecreate",
            children: "onWindowStageCreate"
          }), "()、", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability#ondestroy",
            children: "onDestroy"
          }), "()方法的覆写，代码示例如下："]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 文件路径: src/main/ets/entryability/VoIPUIAbility.ets\nimport { UIAbility } from '@kit.AbilityKit';\nimport { pushService } from '@kit.PushKit';\nimport { window } from '@kit.ArkUI';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { VoipCallService } from '../service/VoipCallService';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nexport default class VoIPUIAbility extends UIAbility {\n  onCreate(): void {\n    hilog.info(0x0000, 'testTag', `VoIPUIAbility onCreate`);\n\n    try {\n      pushService.receiveMessage('VoIP', this, async (data) => {\n        // process message，并建议对Callback进行try-catch\n        try {\n          await VoipCallService.processVoIPMainMsg(data.data, this.context);\n        } catch (error) {\n          hilog.error(0x0000, 'testTag', 'Failed to process VoIP message: %{public}d %{public}s',\n            error.code,\n            error.message);\n        }\n      });\n    } catch (e) {\n      hilog.error(0x0000, 'testTag', `Failed to register VOIP, error: ${e.code}, ${e.message}.`);\n    }\n  }\n\n  onWindowStageCreate(windowStage: window.WindowStage): void {\n    hilog.info(0x0000, 'testTag', `VoIPUIAbility onWindowStageCreate`);\n\n    windowStage.loadContent('pages/CalleePage').catch((err: BusinessError) => {\n      hilog.error(0x0000, 'testTag', `Failed to load content, error: ${err.code}, ${err.message}.`);\n    });\n  }\n\n  onDestroy(): void {\n    hilog.info(0x0000, 'testTag', 'VoIPUIAbility onDestroy');\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["VoipCallService.ets（在项目工程的", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "src/main/ets/service"
            })
          }), "目录下），处理应用内通话消息，代码示例如下："]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 文件路径: src/main/ets/service/VoipCallService.ets\nimport { voipCall } from '@kit.CallServiceKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { common } from '@kit.AbilityKit';\nimport { image } from '@kit.ImageKit';\nimport { resourceManager } from '@kit.LocalizationKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nexport interface VoipScene {\n  scene: string;\n}\n\nexport interface Content {\n  data: string;\n  header: string;\n  callId: string;\n}\n\nexport class VoipCallService {\n  private static callId: string | undefined;\n\n  public static async processVoIPMainMsg(data: string,\n    context: common.UIAbilityContext): Promise<void> {\n    hilog.info(0x0000, 'testTag', `Process VoIP message: ${data}`);\n\n    let content: Content = JSON.parse(data);\n    let scene: VoipScene = JSON.parse(content.data);\n    let callId: string = content.callId;\n    if (!callId) {\n      hilog.error(0x0000, 'testTag', `CallId is null`);\n    }\n    VoipCallService.callId = callId;\n\n    try {\n      // 注册voipCallUiEvent事件\n      voipCall.on('voipCallUiEvent', async (event) => {\n        hilog.info(0x0000, 'testTag', `Process voip call ui event: ${JSON.stringify(event)}.`);\n\n        await VoipCallService.processVoipCallEvent(event.voipCallUiEvent);\n      });\n    } catch (err) {\n      let e: BusinessError = err as BusinessError;\n      hilog.error(0x0000, 'testTag', 'Failed to register event: %{public}d %{public}s', e.code, e.message);\n    }\n\n    const resourceMgr: resourceManager.ResourceManager = context.resourceManager;\n    // example.png表示用户头像，取值为“/resources/rawfile”路径下的文件名\n    let fileData: Uint8Array = new Uint8Array(0);\n    try {\n      fileData = await resourceMgr.getRawFileContent('example.png');\n    } catch (e) {\n      hilog.error(0x0000, 'testTag', 'Failed to get raw file: %{public}d %{public}s', e.code, e.message);\n    }\n    const buffer = fileData.buffer;\n    const imageSource: image.ImageSource = image.createImageSource(buffer);\n    const pixelMap: image.PixelMap = await imageSource.createPixelMap();\n    if (pixelMap) {\n      pixelMap.getImageInfo((err, imageInfo) => {\n        if (imageInfo) {\n          hilog.info(0x0000, 'testTag',\n            `User profile imageInfo: ${imageInfo.size.width} * ${imageInfo.size.height}.`);\n        }\n      });\n    }\n\n    // 构造上报来电的参数。注意，voipCallType.scene为您自定义的场景类型字段，从云侧推送消息时，请注意与端侧取值保持一致\n    let call: voipCall.VoipCallAttribute = {\n      callId: callId,\n      voipCallType: scene?.scene === 'video' ? voipCall.VoipCallType.VOIP_CALL_VIDEO :\n      voipCall.VoipCallType.VOIP_CALL_VOICE,\n      userName: 'push',\n      userProfile: pixelMap,\n      abilityName: 'VoIPUIAbility',\n      voipCallState: voipCall.VoipCallState.VOIP_CALL_STATE_RINGING\n    };\n\n    try {\n      // 上报来电\n      let error = await voipCall.reportIncomingCall(call);\n      hilog.info(0x0000, 'testTag', `ReportIncomingCall result: ${error}.`);\n    } catch (err) {\n      let e: BusinessError = err as BusinessError;\n      hilog.error(0x0000, 'testTag', 'Failed to report incoming call: %{public}d %{public}s', e.code, e.message);\n    }\n\n    // ...应用播放振动和铃声\n  }\n\n  public static async processVoipCallEvent(event: voipCall.VoipCallUiEvent) {\n    try {\n      switch (event) {\n        case voipCall.VoipCallUiEvent.VOIP_CALL_EVENT_VOICE_ANSWER:\n        case voipCall.VoipCallUiEvent.VOIP_CALL_EVENT_VIDEO_ANSWER:\n          // 立即向Call Service Kit上报answered状态\n          await voipCall.reportCallStateChange(VoipCallService.callId,\n            voipCall.VoipCallState.VOIP_CALL_STATE_ANSWERED);\n\n          // ...在应用内完成接听\n\n          // 应用内接听后，向Call Service Kit上报active状态\n          await voipCall.reportCallStateChange(VoipCallService.callId,\n            voipCall.VoipCallState.VOIP_CALL_STATE_ACTIVE);\n          break;\n        case voipCall.VoipCallUiEvent.VOIP_CALL_EVENT_REJECT:\n        case voipCall.VoipCallUiEvent.VOIP_CALL_EVENT_HANGUP:\n          // ...应用内完成挂断\n\n          // 向Call Service Kit上报通话状态\n          await voipCall.reportCallStateChange(VoipCallService.callId,\n            voipCall.VoipCallState.VOIP_CALL_STATE_DISCONNECTED);\n          break;\n        default: {\n          break;\n        }\n      }\n    } catch (err) {\n      let e: BusinessError = err as BusinessError;\n      hilog.error(0x0000, 'testTag', 'Failed to report call state change: %{public}d %{public}s', e.code, e.message);\n    }\n  }\n\n  public static close(): void {\n    hilog.info(0x0000, 'testTag', `Close VoIP`);\n\n    VoipCallService.processVoipCallEvent(voipCall.VoipCallUiEvent.VOIP_CALL_EVENT_HANGUP);\n    try {\n      voipCall.off('voipCallUiEvent');\n    } catch (err) {\n      let e: BusinessError = err as BusinessError;\n      hilog.error(0x0000, 'testTag', 'Failed to unregister event: %{public}d %{public}s', e.code, e.message);\n    }\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(165713)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "需要在项目工程的src/main/resources/rawfile目录下添加example.png，表示来电时的用户头像。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["UIAbility.onCreate是同步接口，不支持异步回调，需要在onCreate生命周期的入口，完成", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/push-api/push-arkts/push-pushservice/push-pushservice#pushservicereceivemessage",
              children: "pushService.receiveMessage"
            }), "()注册，并且保证在注册前没有等待异步方法执行的调用。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["在", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/push-api/push-arkts/push-pushservice/push-pushservice#pushservicereceivemessage",
              children: "receiveMessage"
            }), "()回调中接收应用内通话消息，建议应用提前和服务器建连，用户点击接听后可以立即进行通话，并调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/call-api/call-arkts/call-voipcall/call-voipcall#voipcallonvoipcalluievent",
              children: "voipCall.on"
            }), "()接口注册监听通话状态回调。用户点击接听或者拒绝接听之后，系统会通过应用注册的事件监听通话状态回调结果。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["应用需要在10秒内调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/call-api/call-arkts/call-voipcall/call-voipcall#voipcallreportincomingcall",
              children: "voipCall.reportIncomingCall"
            }), "()接口上报通话来电状态，调用完成之后，系统会弹出应用内通话横幅通知。", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/call-api/call-arkts/call-voipcall/call-voipcall#voipcallreportincomingcall",
              children: "voipCall.reportIncomingCall"
            }), "()", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "接口入参中的callId需要使用receiveMessage()回调中的callId"
              })
            }), "。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["如果应用来电消息建立失败，需要调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/call-api/call-arkts/call-voipcall/call-voipcall#voipcallreportincomingcallerror",
              children: "voipCall.reportIncomingCallError"
            }), "()通知来电消息建立失败。如果应用在前台，通过自己的网络连接接收到来电消息，调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/call-api/call-arkts/call-voipcall/call-voipcall#voipcallreportincomingcall",
              children: "voipCall.reportIncomingCall"
            }), "()接口上报了通话来电状态，后面才收到Push推送的应用内通话消息，在该消息处理中需要调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/call-api/call-arkts/call-voipcall/call-voipcall#voipcallreportincomingcallerror",
              children: "voipCall.reportIncomingCallError"
            }), "()上报", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/call-api/call-arkts/call-voipcall/call-voipcall#voipcallfailurecause",
              children: "应用线路忙"
            }), "。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["应用内通话主要有三种回调状态，分别为：接听状态、拒绝状态和挂断状态。\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["在接听状态回调中，应用在建立连接成功之后，需要调用", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/call-api/call-arkts/call-voipcall/call-voipcall#section491515915329",
                  children: "voipCall.reportCallStateChange"
                }), "()接口上报通话激活状态。"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["在拒绝接听状态回调中，应用断开和服务器的连接之后，需要调用", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/call-api/call-arkts/call-voipcall/call-voipcall#section491515915329",
                  children: "voipCall.reportCallStateChange"
                }), "()接口上报通话断开状态。"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["在应用进行应用内通话的同时，若运营商来电，会弹出运营商来电接听界面，用户点击接听运营商来电之后，会回调应用内通话挂断状态，在回调方法中应用需要自行断开和服务器的连接，并调用", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/call-api/call-arkts/call-voipcall/call-voipcall#section491515915329",
                  children: "voipCall.reportCallStateChange"
                }), "()接口上报通话断开状态。"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["有关应用内通话回调状态的更多信息，详情请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/call-kit-guide/call-introduction",
              children: "Call Service Kit简介"
            }), "。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["应用上报通话来电状态之后，可以调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/sensor-service-api/sensor-service-arkts/js-apis-vibrator/js-apis-vibrator#vibratorstartvibration9-1",
              children: "vibrator.startVibration"
            }), "触发振动，有关振动的更多详情，请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/system-hardware/sensor-service-kit/sensorservice-kit-intro",
              children: "Sensor Service Kit简介"
            }), "。可以使用AVPlayer播放应用铃声，音频流建议设置为铃声，usage设置为STREAM_USAGE_RINGTONE，效果为开始响铃，播放的音乐会暂停播放。同时推荐使用AudioSession管理音频焦点，可以保证接听过程中、通话过程中都保持音频焦点，详情请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/audio-kit/audio-kit-intro",
              children: "Audio Kit简介"
            }), "。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["进行音视频通话时，若您的应用处于Overhead场景（设备发热严重或负载较重，Level=4），请降低码率和帧率，或关闭视频流降级为音频。相关说明请参见Basic Services Kit（基础服务）提供的接口", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/basic-services-others/js-apis-resourceschedule-systemload/js-apis-resourceschedule-systemload#systemloadgetlevel",
              children: "getLevel"
            }), "()。"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在项目工程的 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "src/main/ets/pages"
            })
          }), "目录添加：视频接听页面CalleePage.ets，代码示例如下："]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 文件路径: src/main/ets/pages/CalleePage.ets\nimport CallComponent from '../component/CallComponent';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\n@Entry\n@Component\nstruct CalleePage {\n  @StorageLink('close') @Watch('close') end: boolean | undefined = undefined;\n\n  aboutToAppear() {\n    hilog.info(0x0000, 'testTag', `CalleePage aboutToAppear`);\n\n    this.end = false;\n  }\n\n  private close() {\n    if (this.end) {\n      hilog.info(0x0000, 'testTag', `CalleePage close`);\n\n      this.getUIContext().getRouter().back(); // 此处仅为示例（跳转返回），请根据实际情况设定路由\n    }\n  }\n\n  aboutToDisappear() {\n    hilog.info(0x0000, 'testTag', `CalleePage aboutToDisappear`);\n  }\n\n  build() {\n    Column() {\n      CallComponent({})\n    }\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["CallComponent.ets（在项目工程的", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "src/main/ets/component"
            })
          }), "目录下），代码示例如下："]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 文件路径: src/main/ets/component/CallComponent.ets\nimport { VoipCallService } from '../service/VoipCallService';\nimport { voipCall } from '@kit.CallServiceKit';\n\n@Component\nexport default struct CallComponent {\n  @StorageLink('close') end: boolean | undefined = undefined;\n\n  build() {\n    Flex({ direction: FlexDirection.Column, justifyContent: FlexAlign.SpaceBetween }) {\n      Row() {\n      }\n      .width('100%')\n      .justifyContent(FlexAlign.Center)\n\n      Row({ space: 30 }) {\n\n        Column() {\n          Button()\n            .width(80)\n            .height(80)\n            .backgroundColor(Color.Green)\n            .onClick(() => {\n              VoipCallService.processVoipCallEvent(voipCall.VoipCallUiEvent.VOIP_CALL_EVENT_VIDEO_ANSWER);\n            })\n\n          Text('Answer').fontColor(Color.White).padding({ top: 5 })\n        }\n\n        Column() {\n          Button()\n            .width(80)\n            .height(80)\n            .backgroundColor(Color.Red)\n            .onClick(() => {\n              this.end = true;\n              VoipCallService.close();\n            })\n\n          Text('Hang Up').fontColor(Color.White).padding({ top: 5 })\n        }\n\n      }\n      .width('100%')\n      .justifyContent(FlexAlign.Center)\n    }\n    .padding('30 10')\n    .backgroundColor(Color.Black)\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在项目工程的 src/main/resources/base/profile/main_pages.json添加page目录，示例如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  \"src\": [\n    \"pages/Index\",\n    \"pages/CalleePage\"\n  ]\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(729770)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "示例代码提供的页面效果仅供开发参考，不代表最终效果。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在项目工程的 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "src/main/module.json5"
            })
          }), " 文件的", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "abilities"
            })
          }), "模块中配置VoIPUIAbility的 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "actions"
            })
          }), " 信息。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "\"abilities\": [\n  {\n    \"name\": \"VoIPUIAbility\",\n    \"srcEntry\": \"./ets/entryability/VoIPUIAbility.ets\",\n    \"launchType\": \"singleton\",\n    \"description\": \"VoIPUIAbility test\",\n    \"startWindowIcon\": \"$media:startIcon\",\n    \"startWindowBackground\": \"$color:start_window_background\",\n    \"exported\": false,\n    \"skills\": [\n      // 保持现有skill对象不变\n      // 新增一个独立的skill对象，配置actions参数\n      {\n        \"actions\": [\"action.ohos.push.listener\"]\n      }\n    ]\n  }\n]\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["actions：内容为", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "action.ohos.push.listener"
              })
            }), "，有且只能有一个ability定义该action，", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "若同时添加uris参数，则uris内容需为空"
              })
            }), "。"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["应用服务端调用REST API推送消息，消息详情可参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-intro/push-scenariozed-api-intro",
            children: "场景化消息API接口功能介绍"
          }), "。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "应用内通话消息",
      children: "应用内通话消息"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如果您需要呼叫，应用服务器可以调用REST API推送应用内通话消息，请求示例如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// Request URL\nPOST \"https://push-api.cloud.huawei.com/v3/[projectId]/messages:send\"\n\n// Request Header\nContent-Type: application/json\nAuthorization: Bearer eyJr*****OiIx---****.eyJh*****iJodHR--***.QRod*****4Gp---****\npush-type: 10\n\n// Request Body\n{\n  \"pushOptions\": {\n    \"ttl\": 30\n  },\n  \"payload\": {\n    \"extraData\": \"{\\\"scene\\\": \\\"voice\\\"}\"\n  },\n  \"target\": {\n    \"token\": [\"MAMzLg**********aZW\"]\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["[projectId]：项目ID，登录", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.huawei.com/consumer/cn/service/josp/agc/index.html",
              children: "AppGallery Connect"
            }), "网站，选择“开发与服务”，在项目列表中选择对应的项目，左侧导航栏选择“项目设置”，在该页面获取。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Authorization：JWT格式字符串，可参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/push-kit-guide/push-server/push-jwt-token",
              children: "基于服务账号生成鉴权令牌"
            }), "进行获取。"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "push-type：10表示应用内通话消息场景。"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["token：Push Token，可参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/push-kit-guide/push-preparations/push-get-token",
              children: "获取Push Token"
            }), "章节获取。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["extraData：携带的额外数据，字符串类型。详情参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-request-param/push-scenariozed-api-request-param#voipcallpayload-%E5%BA%94%E7%94%A8%E5%86%85%E9%80%9A%E8%AF%9D%E6%B6%88%E6%81%AF",
              children: "VoIPCallPayload 应用内通话消息"
            }), "中extraData参数用法。extraData数据获取请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://gitcode.com/harmonyos_samples/push-kit-sample-code-clientdemo-arkts/blob/master/entry/src/main/ets/service/VoipCallService.ets",
              children: "示例代码"
            }), "。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["ttl：消息缓存时间，建议设置为30~60秒，详见pushOptions.", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-request-param/push-scenariozed-api-request-param#pushoptions",
              children: "ttl"
            }), "。"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(21750)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用内通话消息只能用于音视频通话场景唤醒应用，完成呼叫，不要通过此种类型消息来挂断来电或者和应用通信，应用应该使用自己建立的网络连接和应用通信。相比应用服务器推送Push消息，使用现有的网络连接和应用通信通常会更快，在网络不佳的情况下，推送的Push消息可能无法到达应用。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用无论是否在前台，自己的网络连接存在时，建议您通过Push推送应用内通话消息，再通过自己的网络连接发送通话消息，保证该呼叫能够到达应用。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "未接来电通知",
      children: "未接来电通知"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["如果您需要给被叫方发送未接来电通知，应用服务器可以调用REST API推送", (0,jsx_runtime.jsx)(_components.a, {
            href: "/push-kit-guide/push-scenes/push-alert/push-send-alert",
            children: "通知消息"
          }), "。以通知消息为例，请求示例如下："]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// Request URL\nPOST \"https://push-api.cloud.huawei.com/v3/[projectId]/messages:send\"\n   \n// Request Header\nContent-Type: application/json\nAuthorization: Bearer eyJr*****OiIx---****.eyJh*****iJodHR--***.QRod*****4Gp---****\npush-type: 0\n   \n// Request Body\n{\n  \"pushOptions\": {\n    \"ttl\":86400\n  },\n  \"payload\": {\n    \"notification\": {\n      \"category\": \"MISS_CALL\",\n      \"title\": \"通知标题\",\n      \"body\": \"通知内容\",\n      \"clickAction\": {\n        \"actionType\": 0\n      },\n      \"appMessageId\": \"12345\"\n    }\n   },\n   \"target\": {\n     \"token\": [\"MAMzLg**********aZW\"]\n   }\n }\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "push-type：0表示通知消息场景。"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["category：消息自分类类别，设置为MISS_CALL，请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-request-param/push-scenariozed-api-request-param#notification",
              children: "参数说明"
            }), "，发送消息前请确保您已", (0,jsx_runtime.jsx)(_components.a, {
              href: "/push-kit-guide/push-preparations/push-apply-right#%E7%94%B3%E8%AF%B7%E9%80%9A%E7%9F%A5%E6%B6%88%E6%81%AF%E8%87%AA%E5%88%86%E7%B1%BB%E6%9D%83%E7%9B%8A",
              children: "申请通知消息自分类权益"
            }), "。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["appMessageId：应用消息的唯一标识。被叫挂断，被叫方VoIP应用在前台时应用可以通过调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/notification-kit/notification-overview",
              children: "Notification Kit（用户通知服务）"
            }), "发送未接来电通知。被叫方VoIP应用在后台时，可以通过Push推送未接来电通知。应用可能存在前后台状态判断不准确，同一电话会产生两条未接来电，建议您通过Notification Kit和Push Kit推送的未接来电通知使用相同的appMessageId，系统会进行通知去重。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["其他参数说明可参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-request-param/push-scenariozed-api-request-param#alertpayload-%E9%80%9A%E7%9F%A5%E6%B6%88%E6%81%AF",
              children: "通知消息请求体参数说明"
            }), "。"]
          }), "\n"]
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
729770(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
21750(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
165713(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
637016(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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