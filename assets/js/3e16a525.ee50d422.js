"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["136480"], {
68786(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_push_kit_guide_push_scenes_push_extend_noti_push_send_extend_noti_push_send_extend_noti_md_3e1_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-push-kit-guide-push-scenes-push-extend-noti-push-send-extend-noti-push-send-extend-noti-md-3e1.json
var site_docs_push_kit_guide_push_scenes_push_extend_noti_push_send_extend_noti_push_send_extend_noti_md_3e1_namespaceObject = JSON.parse('{"id":"push-kit-guide/push-scenes/push-extend-noti/push-send-extend-noti/push-send-extend-noti","title":"发送语音播报消息","description":"场景介绍","source":"@site/docs/push-kit-guide/push-scenes/push-extend-noti/push-send-extend-noti/push-send-extend-noti.md","sourceDirName":"push-kit-guide/push-scenes/push-extend-noti/push-send-extend-noti","slug":"/push-kit-guide/push-scenes/push-extend-noti/push-send-extend-noti/","permalink":"/harmonyos-docs-site/push-kit-guide/push-scenes/push-extend-noti/push-send-extend-noti/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"发送语音播报消息","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/push-send-extend-noti","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"推送卡片刷新消息","permalink":"/harmonyos-docs-site/push-kit-guide/push-scenes/push-form-update/"},"next":{"title":"撤回语音播报消息","permalink":"/harmonyos-docs-site/push-kit-guide/push-scenes/push-extend-noti/push-revoke-extend-noti/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/push-kit-guide/push-scenes/push-extend-noti/push-send-extend-noti/push-send-extend-noti.md


const frontMatter = {
	title: '发送语音播报消息',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/push-send-extend-noti',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '发送语音播报消息';

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
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "发送语音播报消息",
        children: "发送语音播报消息"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当用户终端收到您发送的语音播报消息时："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "若您的应用进程不在前台，应用会拉起子进程，名为通知扩展进程，Push Kit会将消息内容传递给通知扩展进程，您可以在该进程中自行完成业务处理后，返回自定义消息内容，Push Kit将弹出通知提醒。您需要在10秒内返回消息内容，否则Push Kit将默认展示原有的消息内容。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "若您的应用进程在前台，则不弹出通知提醒，您可以在应用进程中获取语音播报消息内容并自行完成业务处理。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "推送语音播报消息能力支持Phone、Tablet、PC/2in1。并且从5.1.0(18)版本开始，新增支持Wearable设备；从6.1.0(23)版本开始，新增支持TV设备。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开通权益",
      children: "开通权益"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["推送语音播报消息需要申请推送语音播报消息权益，请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/push-kit-guide/push-preparations/push-apply-right#%E7%94%B3%E8%AF%B7%E6%8E%A8%E9%80%81%E8%AF%AD%E9%9F%B3%E6%92%AD%E6%8A%A5%E6%B6%88%E6%81%AF%E6%9D%83%E7%9B%8A",
        children: "申请推送语音播报消息权益"
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
          children: ["为确保应用可正常收到消息，建议应用发送通知前调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/notification-api/notification-arkts/js-apis-notificationmanager/js-apis-notificationmanager#notificationmanagerrequestenablenotification10-1",
            children: "requestEnableNotification"
          }), "()方法弹出提醒，告知用户需要允许接收通知消息。详情请参见Notification Kit-", (0,jsx_runtime.jsx)(_components.a, {
            href: "/notification-kit/notification-enable",
            children: "请求通知授权"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["应用服务端调用REST API推送消息，消息详情可参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-intro/push-scenariozed-api-intro",
            children: "场景化消息API接口功能介绍"
          }), "，请求示例如下："]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// Request URL\nPOST \"https://push-api.cloud.huawei.com/v3/[projectId]/messages:send\"\n \n// Request Header\nContent-Type: application/json\nAuthorization: Bearer eyJr*****OiIx---****.eyJh*****iJodHR--***.QRod*****4Gp---****\npush-type: 2\n\n// Request Body\n{\n  \"payload\": {\n    \"extraData\": \"{\\\"title\\\":\\\"replace title\\\",\\\"text\\\":\\\"replace text\\\"}\",\n    \"notification\": {\n      \"category\": \"PLAY_VOICE\",\n      \"title\": \"通知标题\",\n      \"body\": \"通知内容\",\n      \"clickAction\": {\n        \"actionType\": 0\n      },\n      \"notifyId\": 12345\n    }\n  },\n  \"target\": {\n    \"token\": [\"MAMzLg**********lPW\"]\n  },\n  \"pushOptions\": {\n    \"testMessage\": true,\n    \"ttl\": 86400\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["[projectId]：项目ID，登录", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.huawei.com/consumer/cn/service/josp/agc/index.html",
              children: "AppGallery Connect"
            }), "网站，选择“开发与服务”，在项目列表中选择对应的项目，左侧导航栏选择“项目设置”，在该页面获取。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Authorization：JWT格式字符串，可参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-request-struct/push-scenariozed-api-request-struct#request-header",
              children: "Authorization"
            }), "获取。"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "push-type：2，表示语音播报场景。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "category：消息自分类类别，当前支持设置为PLAY_VOICE。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "actionType：0表示点击消息打开应用首页。"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["token：Push Token，可参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/push-kit-guide/push-preparations/push-get-token",
              children: "获取Push Token"
            }), "获取。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["extraData：语音播报场景可携带的额外数据，字符串类型。详情参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-request-param/push-scenariozed-api-request-param#extensionpayload-%E8%AF%AD%E9%9F%B3%E6%92%AD%E6%8A%A5%E6%B6%88%E6%81%AF",
              children: "ExtensionPayload 语音播报消息"
            }), "。extraData数据获取请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://gitcode.com/HarmonyOS_Samples/push-kit-sample-code-clientdemo-arkts/blob/master/entry/src/main/ets/entryability/RemoteNotificationExtAbility.ets",
              children: "示例代码"
            }), "。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["testMessage：（选填）测试消息标识，true表示测试消息。每个项目每天限制发送1000条测试消息，单次推送可发送Token数不超过10个。详情请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-request-param/push-scenariozed-api-request-param#pushoptions",
              children: "testMessage"
            }), "。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["ttl：（选填）消息缓存时间，详见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-request-param/push-scenariozed-api-request-param#pushoptions",
              children: "ttl"
            }), "。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["notifyId：（选填）自定义消息标识字段。不携带或者设置-1时，推送服务自动为每条消息生成一个唯一标识；不同的通知消息可以拥有相同的notifyId，实现新消息覆盖旧消息功能。仅支持数字，范围 [0, 2147483647]，若要", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "用于消息撤回则必填"
              })
            }), "。详情请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-request-param/push-scenariozed-api-request-param#notification",
              children: "notifyId"
            }), "。"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "image：（选填）通知右侧大图标URL，URL使用的协议必须是HTTPS协议。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(126900)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "推送服务禁止推送包含敏感信息的图片。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用服务端调用REST API推送消息后，若应用进程在后台，Push Kit会将通知消息内容传递给通知扩展进程，并返回特定的消息内容（例如title、body等）后，通知栏将弹出通知提醒。实现步骤如下："
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在项目工程的", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "src/main/module.json5"
            })
          }), "文件的", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "extensionAbilities"
            })
          }), "模块中配置RemoteNotificationExtAbility的", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "type"
            })
          }), "和", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "actions"
            })
          }), "信息（", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "定义该type和actions的ExtensionAbility有且只能有一个，配置如下，若同时添加uris参数，则uris内容需为空"
            })
          }), "）："]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "\"extensionAbilities\": [\n  {\n    \"name\": \"RemoteNotificationExtAbility\",\n    \"type\": \"remoteNotification\",\n    \"srcEntry\": \"./ets/entryability/RemoteNotificationExtAbility.ets\",\n    \"description\": \"RemoteNotificationExtAbility test\",\n    \"exported\": false,\n    \"skills\": [\n      // 新增一个独立的skill对象，配置actions参数\n      {\n        \"actions\": [\"action.hms.push.extension.remotenotification\"]\n      }\n    ]\n  }\n]\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["type：固定值为", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "remoteNotification"
              })
            }), "，表示通知扩展的ExtensionAbility类型。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["actions：固定值为", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "action.hms.push.extension.remotenotification"
              })
            }), "，用于接收语音播报消息。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在您的工程内创建一个ExtensionAbility类型的组件并且继承", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/push-api/push-arkts/push-remote-notification-extension-ability/push-remote-notification-extension-ability",
            children: "RemoteNotificationExtensionAbility"
          }), "，完成", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/push-api/push-arkts/push-remote-notification-extension-ability/push-remote-notification-extension-ability#onreceivemessage",
            children: "onReceiveMessage"
          }), "()方法的覆写，在此方法中进行数据接收及业务处理。代码示例如下："]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 文件路径: src/main/ets/entryability/RemoteNotificationExtAbility.ets\nimport { pushCommon, RemoteNotificationExtensionAbility } from '@kit.PushKit';\nimport { image } from '@kit.ImageKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { resourceManager } from '@kit.LocalizationKit';\nimport { common } from '@kit.AbilityKit';\n\nexport default class RemoteNotificationExtAbility extends RemoteNotificationExtensionAbility {\n  async onReceiveMessage(remoteNotificationInfo: pushCommon.RemoteNotificationInfo): Promise<pushCommon.RemoteNotificationContent> {\n    hilog.info(0x0000, 'testTag', 'RemoteNotificationExtAbility onReceiveMessage, remoteNotificationInfo');\n\n    // Read the pixel map object\n    const resourceMgr: resourceManager.ResourceManager = (this.context as common.UIExtensionContext).resourceManager;\n    let fileData: Uint8Array = new Uint8Array(0);\n    try {\n      fileData = await resourceMgr.getMediaContent($r('app.media.startIcon').id);\n    } catch (e) {\n      hilog.error(0x0000, 'testTag', 'Failed to get media content: %{public}d %{public}s', e.code, e.message);\n    }\n    const buffer = fileData.buffer;\n    const imageSource: image.ImageSource = image.createImageSource(buffer as ArrayBuffer);\n    const pixelMap: image.PixelMap = await imageSource.createPixelMap();\n    if (pixelMap) {\n      pixelMap.getImageInfo((err, imageInfo) => {\n        if (imageInfo) {\n          hilog.info(0x0000, 'testTag', `imageInfo ${imageInfo.size.width} * ${imageInfo.size.height}`);\n        }\n      });\n    }\n\n    // 应用自行实现语音播报的逻辑\n    this.textToSpeech();\n\n    // Return the display message content.\n    return {\n      title: 'Default replace title.',\n      text: 'Default replace text.',\n      badgeNumber: 1,\n      setBadgeNumber: 2,\n      overlayIcon: pixelMap,\n      wantAgent: {\n        abilityName: 'DemoAbility',\n        parameters: {\n          key: 'Default value'\n        }\n      }\n    }\n  }\n\n  textToSpeech(): void {\n    // Perform the text-to-speech task.\n  }\n\n  onDestroy(): void {\n    hilog.info(0x0000, 'testTag', 'RemoteNotificationExtAbility onDestroy.');\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "函数的返回值用于替换最终展示在终端的通知，title和text代表您要展示的通知标题与通知内容。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["badgeNumber字段为展示通知时", (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "增加"
                })
              }), "的角标数量，setBadgeNumber字段为展示通知时", (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "显示"
                })
              }), "的角标数量，两者同时返回时，setBadgeNumber优先于badgeNumber。详情请参见", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/push-api/push-arkts/push-pushcommon/push-pushcommon#remotenotificationcontent",
                children: "RemoteNotificationContent"
              }), "。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["overlayIcon字段为展示通知时的叠加图标。详情请参见", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/push-api/push-arkts/push-pushcommon/push-pushcommon#remotenotificationcontent",
                children: "RemoteNotificationContent"
              }), "。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["wantAgent.abilityName字段为需要替换的点击拉起的落地页abilityName（例如DemoAbility），DemoAbility需要您自行适配开发。详情请参见", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/push-api/push-arkts/push-pushcommon/push-pushcommon#remotewantagent",
                children: "RemoteWantAgent"
              }), "。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["wantAgent.parameters字段表示传递给应用的数据。详情请参见", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/push-api/push-arkts/push-pushcommon/push-pushcommon#remotewantagent",
                children: "RemoteWantAgent"
              }), "。"]
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(640891)/* ["default"] */.A) + "",
                width: "102",
                height: "38"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "语音播报的功能可在代码示例中的textToSpeech()方法中实现。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "您可参考以下3种Kit能力实现语音播报："
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["文本转语音 ", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/core-speech-kit-guide/texttospeech-guide",
                  children: "Core Speech Kit（基础语音服务）"
                }), "。"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["媒体服务 ", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/media-kit/media-kit-intro",
                  children: "Media Kit（媒体服务）"
                }), "。"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["音频播放 ", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/audio-kit/audio-playback/audio-playback-overview",
                  children: "Audio Kit（音频服务）"
                }), "。"]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用服务端调用REST API推送消息后，若应用进程在前台，通知栏将不会弹出通知提醒。实现步骤如下："
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在项目模块的", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "src/main/module.json5"
            })
          }), "文件的abilities模块中（以PushMessageAbility为例）配置skills标签的actions属性内容为", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "action.ohos.push.listener"
            })
          }), "（有且只能有一个ability定义该action，", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "若同时添加uris参数，则uris内容需为空"
            })
          }), "）："]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  \"name\": \"PushMessageAbility\",\n  \"srcEntry\": \"./ets/abilities/PushMessageAbility.ets\",\n  \"launchType\": \"singleton\",\n  \"startWindowIcon\": \"$media:startIcon\",\n  \"startWindowBackground\": \"$color:start_window_background\",\n  \"exported\": false,\n  \"skills\": [\n    // 保持现有skill对象不变\n    {\n      \"actions\": [\n        \"com.app.action\"\n      ]\n    },\n    // 新增一个独立的skill对象，配置actions参数\n    {\n      \"actions\": [\n        \"action.ohos.push.listener\"\n      ]\n    }\n  ]\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在客户端项目中现有的UIAbility类的onCreate()中（以PushMessageAbility为例），通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/push-api/push-arkts/push-pushservice/push-pushservice#pushservicereceivemessage",
            children: "receiveMessage"
          }), "()方法传入", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/push-api/push-arkts/push-pushservice/push-pushservice#pushservicepushtype",
            children: "PushType"
          }), "为\"IM\"获取语音播报消息，用于应用在前台时接收语音播报消息，示例代码如下："]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 文件路径: src/main/ets/abilities/PushMessageAbility.ets\nimport { UIAbility } from '@kit.AbilityKit';\nimport { pushService } from '@kit.PushKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\n/**\n * 此处以PushMessageAbility为例，用于应用在前台时接收语音播报消息\n */\nexport default class PushMessageAbility extends UIAbility {\n  onCreate(): void {\n    try {\n      // receiveMessage中的参数固定为IM\n      pushService.receiveMessage('IM', this, (payload) => {\n        try {\n          // 获取服务端传递的数据\n          const data: string = payload.data;\n          // TODO：业务自行处理\n          hilog.info(0x0000, 'testTag', 'Succeeded in getting notification,data=%{public}s',\n            JSON.stringify(JSON.parse(data)?.notification));\n        } catch (e) {\n          let errRes: BusinessError = e as BusinessError;\n          hilog.error(0x0000, 'testTag', 'Failed to process data: %{public}d %{public}s',\n            errRes.code, errRes.message);\n        }\n      });\n    } catch (err) {\n      let e: BusinessError = err as BusinessError;\n      hilog.error(0x0000, 'testTag', 'Failed to get message: %{public}d %{public}s', e.code,\n        e.message);\n    }\n  }\n}\n"
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
126900(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
640891(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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