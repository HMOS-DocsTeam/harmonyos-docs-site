"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["729574"], {
592787(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_basicfun_basic_services_kit_app_events_common_event_communication_native_common_event_subscription_native_common_event_subscription_md_c56_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-basicfun-basic-services-kit-app-events-common-event-communication-native-common-event-subscription-native-common-event-subscription-md-c56.json
var site_docs_system_basicfun_basic_services_kit_app_events_common_event_communication_native_common_event_subscription_native_common_event_subscription_md_c56_namespaceObject = JSON.parse('{"id":"system-basicfun/basic-services-kit/app-events/common-event-communication/native-common-event-subscription/native-common-event-subscription","title":"订阅公共事件（C/C++）","description":"场景介绍","source":"@site/docs/system-basicfun/basic-services-kit/app-events/common-event-communication/native-common-event-subscription/native-common-event-subscription.md","sourceDirName":"system-basicfun/basic-services-kit/app-events/common-event-communication/native-common-event-subscription","slug":"/system-basicfun/basic-services-kit/app-events/common-event-communication/native-common-event-subscription/","permalink":"/harmonyos-docs-site/system-basicfun/basic-services-kit/app-events/common-event-communication/native-common-event-subscription/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"订阅公共事件（C/C++）","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/native-common-event-subscription","kit":"system/basic-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"发布公共事件","permalink":"/harmonyos-docs-site/system-basicfun/basic-services-kit/app-events/common-event-communication/common-event-publish/"},"next":{"title":"取消订阅公共事件（C/C++）","permalink":"/harmonyos-docs-site/system-basicfun/basic-services-kit/app-events/common-event-communication/native-common-event-unsubscription/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-basicfun/basic-services-kit/app-events/common-event-communication/native-common-event-subscription/native-common-event-subscription.md


const frontMatter = {
	title: '订阅公共事件（C/C++）',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/native-common-event-subscription',
	kit: 'system/basic-services',
	last_updated: '2026-04-22'
};
const contentTitle = '订阅公共事件（C/C++）';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
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
    header: "header",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
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
        id: "订阅公共事件cc",
        children: "订阅公共事件（C/C++）"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-headerfile/capi-oh-commonevent-h/capi-oh-commonevent-h#oh_commonevent_createsubscriber",
        children: "OH_CommonEvent_CreateSubscriber"
      }), "创建的订阅者可以对某个公共事件进行订阅，如果有订阅的事件发布那么订阅了这个事件的订阅者将会收到该事件及其传递的参数，也可以通过订阅者对象进一步处理有序公共事件。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["详细的API说明请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-headerfile/capi-oh-commonevent-h/capi-oh-commonevent-h",
        children: "oh_commonevent.h"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "%60https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-commonevent-h#oh_commonevent_createsubscribeinfo%60",
              children: "CommonEvent_SubscribeInfo* OH_CommonEvent_CreateSubscribeInfo(const char* events[], int32_t eventsNum)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建订阅者信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-headerfile/capi-oh-commonevent-h/capi-oh-commonevent-h#oh_commonevent_destroysubscribeinfo",
              children: "void OH_CommonEvent_DestroySubscribeInfo(CommonEvent_SubscribeInfo* info)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁订阅者信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-headerfile/capi-oh-commonevent-h/capi-oh-commonevent-h#oh_commonevent_createsubscriber",
              children: "CommonEvent_Subscriber* OH_CommonEvent_CreateSubscriber(const CommonEvent_SubscribeInfo* info, CommonEvent_ReceiveCallback callback)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建订阅者。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-headerfile/capi-oh-commonevent-h/capi-oh-commonevent-h#oh_commonevent_destroysubscriber",
              children: "void OH_CommonEvent_DestroySubscriber(CommonEvent_Subscriber* subscriber)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁订阅者。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-headerfile/capi-oh-commonevent-h/capi-oh-commonevent-h#oh_commonevent_subscribe",
              children: "CommonEvent_ErrCode OH_CommonEvent_Subscribe(const CommonEvent_Subscriber* subscriber)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "订阅事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-headerfile/capi-oh-commonevent-h/capi-oh-commonevent-h#oh_commonevent_abortcommonevent",
              children: "bool OH_CommonEvent_AbortCommonEvent(CommonEvent_Subscriber* subscriber)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "中止当前的有序公共事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-headerfile/capi-oh-commonevent-h/capi-oh-commonevent-h#oh_commonevent_clearabortcommonevent",
              children: "bool OH_CommonEvent_ClearAbortCommonEvent(CommonEvent_Subscriber* subscriber)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消当前有序公共事件的中止状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-headerfile/capi-oh-commonevent-h/capi-oh-commonevent-h#oh_commonevent_finishcommonevent",
              children: "bool OH_CommonEvent_FinishCommonEvent(CommonEvent_Subscriber* subscriber)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "结束对当前有序公共事件的处理。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "引用头文件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include <cstdint>\n#include <cstring>\n#include \"hilog/log.h\"\n#include \"BasicServicesKit/oh_commonevent.h\"\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在CMake脚本中添加动态链接库。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "target_link_libraries(entry PUBLIC\n    libace_napi.z.so\n    libhilog_ndk.z.so\n    libohcommonevent.so\n)\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建订阅者信息。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-headerfile/capi-oh-commonevent-h/capi-oh-commonevent-h#oh_commonevent_createsubscribeinfo",
            children: "OH_CommonEvent_CreateSubscribeInfo"
          }), "创建订阅者信息。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "CommonEvent_SubscribeInfo *CreateSubscribeInfo(const char *events[], int32_t eventsNum, const char *permission,\n                                               const char *bundleName)\n{\n    int32_t ret = -1;\n    // 创建订阅者信息\n    CommonEvent_SubscribeInfo *info = OH_CommonEvent_CreateSubscribeInfo(events, eventsNum);\n\n    // 设置发布者权限\n    ret = OH_CommonEvent_SetPublisherPermission(info, permission);\n    OH_LOG_Print(LOG_APP, LOG_INFO, 1, \"CES_TEST\", \"OH_CommonEvent_SetPublisherPermission ret <%{public}d>.\", ret);\n\n    // 设置发布者包名称\n    ret = OH_CommonEvent_SetPublisherBundleName(info, bundleName);\n    OH_LOG_Print(LOG_APP, LOG_INFO, 1, \"CES_TEST\", \"OH_CommonEvent_SetPublisherBundleName ret <%{public}d>.\", ret);\n    return info;\n}\n\n// 销毁订阅者信息\nvoid DestroySubscribeInfo(CommonEvent_SubscribeInfo *info)\n{\n    OH_CommonEvent_DestroySubscribeInfo(info);\n    info = nullptr;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建订阅者。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["创建订阅者时需传入公共事件的回调函数", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-headerfile/capi-oh-commonevent-h/capi-oh-commonevent-h#commonevent_receivecallback",
            children: "CommonEvent_ReceiveCallback"
          }), "。待事件发布时，订阅者会接收到回调数据", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-headerfile/capi-oh-commonevent-h/capi-oh-commonevent-h#%E7%BB%93%E6%9E%84%E4%BD%93",
            children: "CommonEvent_RcvData"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 公共事件回调函数\nvoid OnReceive(const CommonEvent_RcvData *data)\n{\n    // 获取回调公共事件名称\n    const char *event = OH_CommonEvent_GetEventFromRcvData(data);\n\n    // 获取回调公共事件结果代码\n    int code = OH_CommonEvent_GetCodeFromRcvData(data);\n\n    // 获取回调公共事件自定义结果数据\n    const char *retData = OH_CommonEvent_GetDataStrFromRcvData(data);\n\n    // 获取回调公共事件包名称\n    const char *bundle = OH_CommonEvent_GetBundleNameFromRcvData(data);\n    OH_LOG_Print(LOG_APP, LOG_INFO, 1, \"CES_TEST\",\n                 \"event: %{public}s, code: %{public}d, data: %{public}s, bundle: %{public}s\", event, code, retData,\n                 bundle);\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-headerfile/capi-oh-commonevent-h/capi-oh-commonevent-h#%E5%8F%98%E9%87%8F",
            children: "CommonEvent_Parameters"
          }), "传入key来获取附加信息内容。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "void GetParameters(const CommonEvent_RcvData *data)\n{\n    // 获取回调公共事件附件信息\n    bool exists = false;\n    const CommonEvent_Parameters *parameters = OH_CommonEvent_GetParametersFromRcvData(data);\n\n    // 检查公共事件附加信息中是否包含某个键值对信息\n    exists = OH_CommonEvent_HasKeyInParameters(parameters, \"intKey\");\n    // 获取公共事件附加信息中int数据信息\n    int intValue = OH_CommonEvent_GetIntFromParameters(parameters, \"intKey\", 10);\n    OH_LOG_Print(LOG_APP, LOG_INFO, 1, \"CES_TEST\", \"exists = %{public}d, intValue = %{public}d\", exists, intValue);\n\n    // 补充说明：除int类型外，还支持获取以下多种类型的公共事件附加信息，调用对应鸿蒙API即可：\n    // - 基础数据类型：bool（OH_CommonEvent_GetBoolFromParameters）、long（OH_CommonEvent_GetLongFromParameters）、\n    // double（OH_CommonEvent_GetDoubleFromParameters）、char（OH_CommonEvent_GetCharFromParameters）\n    // -\n    // 数组数据类型：int数组（OH_CommonEvent_GetIntArrayFromParameters）、long数组（OH_CommonEvent_GetLongArrayFromParameters）、\n    // double数组（OH_CommonEvent_GetDoubleArrayFromParameters）、char数组（OH_CommonEvent_GetCharArrayFromParameters）、\n    // bool数组（OH_CommonEvent_GetBoolArrayFromParameters）\n    // 所有类型均支持通过OH_CommonEvent_HasKeyInParameters先校验键是否存在，避免获取失败\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-headerfile/capi-oh-commonevent-h/capi-oh-commonevent-h#oh_commonevent_createsubscriber",
            children: "OH_CommonEvent_CreateSubscriber"
          }), "创建订阅者，传入订阅者信息", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-headerfile/capi-oh-commonevent-h/capi-oh-commonevent-h#%E7%BB%93%E6%9E%84%E4%BD%93",
            children: "CommonEvent_SubscribeInfo"
          }), "和步骤4公共事件回调函数OnReceive。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 创建订阅者\nCommonEvent_Subscriber *CreateSubscriber(CommonEvent_SubscribeInfo *info)\n{\n    return OH_CommonEvent_CreateSubscriber(info, OnReceive);\n}\n\n// 销毁订阅者\nvoid DestroySubscriber(CommonEvent_Subscriber *Subscriber)\n{\n    OH_CommonEvent_DestroySubscriber(Subscriber);\n    Subscriber = nullptr;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "订阅事件。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-headerfile/capi-oh-commonevent-h/capi-oh-commonevent-h#oh_commonevent_subscribe",
            children: "OH_CommonEvent_Subscribe"
          }), "订阅事件。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "void Subscribe(CommonEvent_Subscriber *subscriber)\n{\n    // 通过传入订阅者来订阅事件\n    int32_t ret = OH_CommonEvent_Subscribe(subscriber);\n    OH_LOG_Print(LOG_APP, LOG_INFO, 1, \"CES_TEST\", \"OH_CommonEvent_Subscribe ret <%{public}d>.\", ret);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（可选）当订阅的事件为有序公共事件时，可以选择进一步处理有序公共事件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "根据订阅者设置的优先级等级，优先将公共事件发送给优先级较高的订阅者，等待其成功接收该公共事件之后再将事件发送给优先级较低的订阅者。如果有多个订阅者具有相同的优先级，则他们将随机接收到公共事件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(576899)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在订阅者收到公共事件之后，才能通过以下接口进一步处理有序公共事件。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "中止当前的有序公共事件。"
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-headerfile/capi-oh-commonevent-h/capi-oh-commonevent-h#oh_commonevent_abortcommonevent",
                children: "OH_CommonEvent_AbortCommonEvent"
              }), "与", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-headerfile/capi-oh-commonevent-h/capi-oh-commonevent-h#oh_commonevent_finishcommonevent",
                children: "OH_CommonEvent_FinishCommonEvent"
              }), "配合使用，可以中止当前的有序公共事件，使该公共事件不再向下一个订阅者传递。"]
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "void AbortCommonEvent(CommonEvent_Subscriber *subscriber)\n{\n    // 判断是否为有序公共事件\n    if (!OH_CommonEvent_IsOrderedCommonEvent(subscriber)) {\n        OH_LOG_Print(LOG_APP, LOG_INFO, 1, \"CES_TEST\", \"Not ordered common event.\");\n        return;\n    }\n    // 中止有序事件\n    if (OH_CommonEvent_AbortCommonEvent(subscriber)) {\n        if (OH_CommonEvent_FinishCommonEvent(subscriber)) {\n            // 获取当前有序公共事件是否处于中止状态\n            OH_LOG_Print(LOG_APP, LOG_INFO, 1, \"CES_TEST\", \"Abort common event success, Get abort <%{public}d>.\",\n                         OH_CommonEvent_GetAbortCommonEvent(subscriber));\n        }\n    } else {\n        OH_LOG_Print(LOG_APP, LOG_ERROR, 1, \"CES_TEST\", \"Abort common event failed.\");\n    }\n}\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "取消当前有序公共事件的中止状态。"
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-headerfile/capi-oh-commonevent-h/capi-oh-commonevent-h#oh_commonevent_clearabortcommonevent",
                children: "OH_CommonEvent_ClearAbortCommonEvent"
              }), "与", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-headerfile/capi-oh-commonevent-h/capi-oh-commonevent-h#oh_commonevent_finishcommonevent",
                children: "OH_CommonEvent_FinishCommonEvent"
              }), "配合使用，可以取消当前有序公共事件的中止状态，使该公共事件继续向下一个订阅者传递。"]
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "void ClearAbortCommonEvent(CommonEvent_Subscriber *subscriber)\n{\n    // 判断是否为有序公共事件\n    if (!OH_CommonEvent_IsOrderedCommonEvent(subscriber)) {\n        OH_LOG_Print(LOG_APP, LOG_INFO, 1, \"CES_TEST\", \"Not ordered common event.\");\n        return;\n    }\n    // 中止有序事件\n    if (!OH_CommonEvent_AbortCommonEvent(subscriber)) {\n        OH_LOG_Print(LOG_APP, LOG_ERROR, 1, \"CES_TEST\", \"Abort common event failed.\");\n        return;\n    }\n    // 取消中止有序事件\n    if (OH_CommonEvent_ClearAbortCommonEvent(subscriber)) {\n        if (OH_CommonEvent_FinishCommonEvent(subscriber)) {\n            // 获取当前有序公共事件是否处于中止状态\n            OH_LOG_Print(LOG_APP, LOG_INFO, 1, \"CES_TEST\", \"Clear abort common event success, Get abort <%{public}d>.\",\n                         OH_CommonEvent_GetAbortCommonEvent(subscriber));\n        }\n    } else {\n        OH_LOG_Print(LOG_APP, LOG_ERROR, 1, \"CES_TEST\", \"Clear abort common event failed.\");\n    }\n}\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "修改有序公共事件的内容。"
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-headerfile/capi-oh-commonevent-h/capi-oh-commonevent-h#oh_commonevent_setcodetosubscriber",
                children: "OH_CommonEvent_SetCodeToSubscriber"
              }), "与", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-headerfile/capi-oh-commonevent-h/capi-oh-commonevent-h#oh_commonevent_setdatatosubscriber",
                children: "OH_CommonEvent_SetDataToSubscriber"
              }), "设置有序公共事件的代码和数据。"]
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "void SetToSubscriber(CommonEvent_Subscriber *subscriber, const int32_t code, const char *data)\n{\n    // 设置有序公共事件的代码\n    if (!OH_CommonEvent_SetCodeToSubscriber(subscriber, code)) {\n        OH_LOG_Print(LOG_APP, LOG_ERROR, 1, \"CES_TEST\", \"OH_CommonEvent_SetCodeToSubscriber failed.\");\n        return;\n    }\n    // 设置有序公共事件的数据\n    size_t dataLength = strlen(data);\n    if (!OH_CommonEvent_SetDataToSubscriber(subscriber, data, dataLength)) {\n        OH_LOG_Print(LOG_APP, LOG_ERROR, 1, \"CES_TEST\", \"OH_CommonEvent_SetDataToSubscriber failed.\");\n        return;\n    }\n}\n\nvoid GetFromSubscriber(CommonEvent_Subscriber *subscriber)\n{\n    // 获取有序公共事件的数据和代码\n    const char *data = OH_CommonEvent_GetDataFromSubscriber(subscriber);\n    int32_t code = OH_CommonEvent_GetCodeFromSubscriber(subscriber);\n    OH_LOG_Print(LOG_APP, LOG_INFO, 1, \"CES_TEST\", \"Subscriber data <%{public}s>, code <%{public}d>.\", data, code);\n}\n"
              })
            }), "\n"]
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
576899(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

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