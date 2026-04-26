"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["586683"], {
77133(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkweb_web_native_messaging_web_native_messaging_md_e8c_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkweb-web-native-messaging-web-native-messaging-md-e8c.json
var site_docs_arkweb_web_native_messaging_web_native_messaging_md_e8c_namespaceObject = JSON.parse('{"id":"arkweb/web-native-messaging/web-native-messaging","title":"使用WebNativeMessagingExtensionAbility组件实现浏览器扩展和应用通信场景","description":"概述","source":"@site/docs/arkweb/web-native-messaging/web-native-messaging.md","sourceDirName":"arkweb/web-native-messaging","slug":"/arkweb/web-native-messaging/","permalink":"/harmonyos-docs-site/arkweb/web-native-messaging/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":15,"frontMatter":{"title":"使用WebNativeMessagingExtensionAbility组件实现浏览器扩展和应用通信场景","sidebar_position":15,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/web-native-messaging","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用离线Web组件","permalink":"/harmonyos-docs-site/arkweb/web-offline-mode/"},"next":{"title":"使用DevTools工具调试前端页面","permalink":"/harmonyos-docs-site/arkweb/web-debugging/web-debugging-with-devtools/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkweb/web-native-messaging/web-native-messaging.md


const frontMatter = {
	title: '使用WebNativeMessagingExtensionAbility组件实现浏览器扩展和应用通信场景',
	sidebar_position: 15,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/web-native-messaging',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '使用WebNativeMessagingExtensionAbility组件实现浏览器扩展和应用通信场景';

const assets = {

};



const toc = [{
  "value": "概述",
  "id": "概述",
  "level": 2
}, {
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 2
}, {
  "value": "设备限制",
  "id": "设备限制",
  "level": 3
}, {
  "value": "规格限制",
  "id": "规格限制",
  "level": 3
}, {
  "value": "运作机制",
  "id": "运作机制",
  "level": 2
}, {
  "value": "整体流程",
  "id": "整体流程",
  "level": 3
}, {
  "value": "dataShare存放应用extension配置信息",
  "id": "datashare存放应用extension配置信息",
  "level": 3
}, {
  "value": "WebNativeMessagingExtensionAbility生命周期管理",
  "id": "webnativemessagingextensionability生命周期管理",
  "level": 3
}, {
  "value": "消息格式和限制",
  "id": "消息格式和限制",
  "level": 3
}, {
  "value": "实现一个connectNative的扩展（应用开发者）",
  "id": "实现一个connectnative的扩展应用开发者",
  "level": 3
}, {
  "value": "实现一个WebNativeMessagingExtensionAbility（应用开发者）",
  "id": "实现一个webnativemessagingextensionability应用开发者",
  "level": 3
}, {
  "value": "实现拉起WebNativeMessagingExtensionAbility（浏览器开发者）",
  "id": "实现拉起webnativemessagingextensionability浏览器开发者",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "使用webnativemessagingextensionability组件实现浏览器扩展和应用通信场景",
        children: "使用WebNativeMessagingExtensionAbility组件实现浏览器扩展和应用通信场景"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "浏览器的扩展程序（extension）支持与系统上安装的应用交换消息，应用向扩展提供服务，帮助扩展实现一些应用才具备的能力，常见的例子是密码管理器：应用负责存储和加密你的密码信息，以便浏览器扩展程序自动填充网页中的表单字段。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 21开始，支持开发者在应用中使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-arkts/arkts-apis-web-webnativemessagingextensionability/arkts-apis-web-webnativemessagingextensionability",
        children: "WebNativeMessagingExtensionAbility"
      }), "组件，为浏览器扩展提供后台服务能力。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["浏览器扩展通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.mozilla.org/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/runtime",
        children: "WebExtensions runtime API"
      }), "连接WebNativeMessagingExtensionAbility，双方通信是通过共享pipe文件描述符后调用IO接口实现。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(49475)/* ["default"] */.A) + "",
        width: "661",
        height: "541"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(179044)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本文将浏览器扩展调用WebExtension接口runtime.connectNative建立的连接称为NativeMessaging连接。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["NativeMessaging面向两类开发者：应用开发者和浏览器应用开发者。两者均需要了解WebNativeMessagingExtensionAbility运作机制，但关注的场景和接口不同。应用开发者关注", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-arkts/arkts-apis-web-webnativemessagingextensionability/arkts-apis-web-webnativemessagingextensionability",
        children: "WebNativeMessagingExtensionAbility"
      }), "组件的使用，负责相关业务开发；浏览器应用开发者负责建立NativeMessaging连接，关注", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-arkts/arkts-apis-web-webnativemessagingextensionmanager/arkts-apis-web-webnativemessagingextensionmanager",
        children: "WebNativeMessagingExtensionManager"
      }), "相关接口。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本文会在具体的描述中，特意标注需要哪类开发者关注。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "设备限制",
      children: "设备限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "WebNativeMessagingExtensionAbility组件当前仅支持2in1设备。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "规格限制",
      children: "规格限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "WebNativeMessagingExtensionAbility组件无需额外权限，允许任意三方应用集成使用，但拉起方（浏览器）需申请ACL权限（ohos.permission.WEB_NATIVE_MESSAGING）。此权限仅对浏览器类应用开放。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["WebNativeMessagingExtensionAbility组件内不支持调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window/arkts-apis-window",
          children: "Window"
        }), "相关API。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["WebNativeMessagingExtensionAbility仅支持拉起本应用的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability",
          children: "UIAbility"
        }), "，不支持拉起其他应用UIAbility或者其他类型ExtensionAbility。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "WebNativeMessagingExtensionAbility仅用于浏览器扩展与应用通信场景，不支持如后台服务等其他场景使用。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "运作机制",
      children: "运作机制"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "整体流程",
      children: "整体流程"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(186094)/* ["default"] */.A) + "",
        width: "761",
        height: "541"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "流程："
          })
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "浏览器扩展"
          })
        }), "调用runtime.connectNative接口传入应用包名，来创建NativeMessaging连接。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "浏览器应用"
          })
        }), "调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkdata/cross-app-data-share/one-to-many-data-share/share-config",
          children: "dataShare"
        }), "获取应用配置信息，包括WebNativeMessagingExtension的名称，和限制访问规则（是否允许某个扩展访问该WebNativeMessagingExtension）。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "浏览器应用"
          })
        }), "创建两组pipe作为收发双向通道，调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkweb-api/arkweb-arkts/arkts-apis-web-webnativemessagingextensionmanager/arkts-apis-web-webnativemessagingextensionmanager#webnativemessagingextensionmanagerconnectnative",
          children: "WebNativeMessagingExtensionManager.connectNative"
        }), "接口，拉起WebNativeMessagingExtension并创建一条NativeMessaging连接，并将pipe的收发文件描述符作为参数传输过去。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "应用"
          })
        }), "WebNativeMessagingExtensionAbility被拉起，", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkweb-api/arkweb-arkts/arkts-apis-web-webnativemessagingextensionability/arkts-apis-web-webnativemessagingextensionability#onconnectnative",
          children: "WebNativeMessagingExtensionAbility.onConnectNative"
        }), "生命周期回调触发，获取pipe的文件描述符。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "应用"
          })
        }), "监听读端的文件描述符，获取浏览器扩展发过来的消息指令，并通过写端的文件描述符发送回去。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "应用"
          })
        }), "使用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkweb-api/arkweb-arkts/arkts-apis-web-webnativemessagingextensioncontext/arkts-apis-web-webnativemessagingextensioncontext#startability",
          children: "WebNativeMessagingExtensionContext.startAbility"
        }), "拉起本应用的UIAbility图形界面。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(303853)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["WebNativeMessagingExtensionAbility为单实例独立进程，多次调用connectNative接口仅拉起一个实例，同时触发多次onConnectNative回调，需要", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "应用"
        })
      }), "管理多会话场景。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "datashare存放应用extension配置信息",
      children: "dataShare存放应用extension配置信息"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用集成WebNativeMessagingExtensionAbility时，需要通过dataShare能力向浏览器应用提供extension配置。该配置用于浏览器应用判断允许访问的扩展及指定要拉起的WebNativeMessagingExtensionAbility名称。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "extension配置采用json字符串格式"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "abilityName属性：字符串，WebNativeMessagingExtensionAbility名称，用于填充want中abilityName字段，一个应用仅有一个WebNativeMessagingExtensionAbility。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "allowed_origins属性：数组，允许访问该WebNativeMessagingExtensionAbility的浏览器扩展url信息，可以配置多条，不同浏览器的扩展有不同的scheme协议，例如华为浏览器使用chrome-extension协议头。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "extension配置格式："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  // 应用包名\n  \"name\": \"com.example.myapplication\",\n  // 具体描述\n  \"description\": \"Send message to native app.\",\n  /*\n   * WebNativeMessagingExtensionAbility名称，用于元能力want填充abilityName，一个应用应只有一个\n   * WebNativeMessagingExtensionAbility\n   */\n  \"abilityName\": \"webExtensionAbility\",\n  /*\n   * 允许访问该WebNativeMessagingExtensionAbility的浏览器扩展url信息，不同的浏览器的扩展有不同的scheme协议，华为浏览器使用chrome-extension协议头\n   */\n  \"allowed_origins\":[\n    \"chrome-extension://knldjmfmopnpolahpmmgbagdohdnhkik/\"\n  ]\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["extension配置通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkdata/cross-app-data-share/one-to-many-data-share/share-config#modulejson5-%E9%85%8D%E7%BD%AE",
        children: "dataShare配置项"
      }), "向浏览器应用暴露，具体的配置方式可参考下方", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%AE%9E%E7%8E%B0%E4%B8%80%E4%B8%AAwebnativemessagingextensionability%E5%BA%94%E7%94%A8%E5%BC%80%E5%8F%91%E8%80%85",
        children: "实现一个WebNativeMessagingExtensionAbility（应用开发者）"
      }), "中步骤6。其中，uri为固定格式：datashareproxy://[包名]/browserNativeMessagingHosts，value字段填写上述extension配置的JSON字符串，allowList字段填写允许访问该配置的浏览器应用的appIdentifier。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "webnativemessagingextensionability生命周期管理",
      children: "WebNativeMessagingExtensionAbility生命周期管理"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkweb-api/arkweb-arkts/arkts-apis-web-webnativemessagingextensionability/arkts-apis-web-webnativemessagingextensionability#onconnectnative",
          children: "onConnectNative"
        }), "：当浏览器扩展调用一次runtime.connectNative时触发，如果WebNativeMessagingExtensionAbility尚未运行，调用runtime.connectNative会拉起WebNativeMessagingExtensionAbility，并触发该回调。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkweb-api/arkweb-arkts/arkts-apis-web-webnativemessagingextensionability/arkts-apis-web-webnativemessagingextensionability#ondisconnectnative",
          children: "onDisconnectNative"
        }), "：当浏览器扩展销毁runtime.port时，会触发一次该回调，每条NativeMessaging连接的断开，都会触发一次该回调，当全部连接都断开时，会触发onDestroy的回调后关闭WebNativeMessagingExtensionAbility。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkweb-api/arkweb-arkts/arkts-apis-web-webnativemessagingextensionability/arkts-apis-web-webnativemessagingextensionability#ondestroy",
          children: "onDestroy"
        }), "：当WebNativeMessagingExtensionAbility销毁前触发该回调，全部NativeMessaging连接断开会触发WebNativeMessagingExtensionAbility的销毁。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkweb-api/arkweb-arkts/arkts-apis-web-webnativemessagingextensioncontext/arkts-apis-web-webnativemessagingextensioncontext#stopnativeconnection",
          children: "stopNativeConnection"
        }), "：WebNativeMessagingExtensionAbility可以主动断开一条NativeMessaging连接，如果断开的是最后一条连接，则会触发WebNativeMessagingExtensionAbility的销毁。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkweb-api/arkweb-arkts/arkts-apis-web-webnativemessagingextensioncontext/arkts-apis-web-webnativemessagingextensioncontext#terminateself",
          children: "terminateSelf"
        }), "：WebNativeMessagingExtensionAbility可以主动退出，触发后会销毁所有NativeMessaging连接。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "消息格式和限制",
      children: "消息格式和限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "NativeMessaging连接使用的具体格式，每个消息都使用JSON进行序列化，编码为UTF-8，并在前面附加32位消息长度（采用原生字节顺序）。来自WebNativeMessagingExtensionAbility的单个消息的大小上限为 1 MB，这主要是为了保护浏览器免受行为异常的应用影响。发送到WebNativeMessagingExtensionAbility的消息大小上限为 64 MB。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "实现一个connectnative的扩展应用开发者",
      children: "实现一个connectNative的扩展（应用开发者）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(73979)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "需按w3c标准配置manifest.json和background.js实现通信。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "支持使用chrome.runtime.connectNative或chrome.runtime.sendNativeMessage进行连接。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "配置插件内容，发送ping字符串并接收pong响应的插件代码，示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "实现配置manifest.json"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"name\": \"com.example.myapplication\",\n  \"version\": \"1.0.1\",\n  \"description\": \"Launch APP\",\n  \"manifest_version\": 3,\n  \"permissions\": [\"nativeMessaging\", \"tabs\", \"scripting\"], // 根据实际场景是否需要进行选择\n  \"host_permissions\": [\"http://*/*\", \"https://*/*\", \"ftp://*/*\", \"file://*/*\"], // 根据实际场景选择\n  \"background\": {\n    \"service_worker\": \"background.js\" // 用于运行插件runtime命令\n  },\n  \"content_scripts\": [\n    {\n      \"matches\": [\"http://*/*\", \"https://*/*\", \"ftp://*/*\", \"file://*/*\"], // 根据实际场景选择\n      \"js\": [\"main.js\"] // 用于运行插件js命令\n    }\n  ],\n  \"action\": {\n    \"default_popup\": \"index.html\" // 插件页面展示\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "实现main.js"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 从html中触发调用\nfunction sendMessageToNative() {\n  var message = \"ping\"; // 发送ping\n  chrome.runtime.sendMessage({\n    type: \"sendMessage\",\n    message: message\n  }, function (response) {});\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "实现配置background.js"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用chrome.runtime.connectNative连接"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "var port = null;\n// 监听来自main.js的信息\nchrome.runtime.onMessage.addListener(\n  function (request, sender, sendResponse) {\n    if (request.type == \"sendMessage\") {\n      if (port == null) {\n        connectToNativeHost();\n      }\n      port.postMessage(request.message); // 向应用程序发送信息\n    }\n    return true; // 保持消息通道开放\n});\nfunction connectToNativeHost() {\n  var bundleName = \"com.example.app\"; // 插件对应应用的bundleName\n  port = chrome.runtime.connectNative(bundleName); // 根据bundleName名得到通信端口port\n  port.onMessage.addListener(onNativeMessage); // 监听native应用程序是否发来消息\n  port.onDisconnect.addListener(onDisconnected); // 监听是否断开连接\n}\n // 接收到来自native程序的消息时触发\nasync function onNativeMessage(message) {\n  console.info('接收到从本地应用程序发送来的消息：' + JSON.stringify(message)); // 示例中的pong\n}\n// 断开连接时触发\nfunction onDisconnected() {\n  port = null;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用chrome.runtime.sendNativeMessage连接"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "function sendNativeMessage() {\n  var bundleName = \"com.example.app\"; // 插件对应应用的bundleName\n  var nativeMessage = \"ping\"; // 插件要发给应用的内容\n  chrome.runtime.sendNativeMessage(\n    bundleName,\n    {message: nativeMessage},\n    function(response) {\n    // 收到一次应用回复的信息后断开连接\n    console.info(\"sendNativeMessage收到应用程序响应:\", JSON.stringify (response));\n    }\n  )\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "实现一个webnativemessagingextensionability应用开发者",
      children: "实现一个WebNativeMessagingExtensionAbility（应用开发者）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在DevEco Studio工程中手动新建一个WebNativeMessagingExtensionAbility组件，具体步骤如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在工程Module对应的ets目录下，右键选择“New > Directory”，新建一个目录并命名为MyWebNativeMessageExtAbility。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在MyWebNativeMessageExtAbility目录，右键选择“New > ArkTS File”，新建一个文件并命名为MyWebNativeMessageExtAbility.ets。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "其目录结构如下所示："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: " ├── ets\n │ ├── MyWebNativeMessageExtAbility\n │ │   ├── MyWebNativeMessageExtAbility.ets\n └\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在MyWebNativeMessageExtAbility.ets文件中，增加导入", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkweb-api/arkweb-arkts/arkts-apis-web-webnativemessagingextensionability/arkts-apis-web-webnativemessagingextensionability",
            children: "WebNativeMessagingExtensionAbility"
          }), "的依赖包，自定义类继承WebNativeMessagingExtensionAbility组件并实现生命周期回调。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { WebNativeMessagingExtensionAbility, ConnectionInfo } from '@kit.ArkWeb';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport {buffer, util} from '@kit.ArkTS';\nimport { fileIo } from '@kit.CoreFileKit';\n\nconst TAG: string = '[MyWebNativeMessageExtAbility]';\nconst DOMAIN_NUMBER: number = 0xFF00;\n\nexport default class MyWebNativeMessageExtAbility extends WebNativeMessagingExtensionAbility {\n  // 读取扩展发来的消息，并回复\n  async ReadAsync(fdRead:number, fdWrite:number) : Promise<void> {\n    try {\n      // read\n      let arrayBuffer = new ArrayBuffer(1024);\n      let readLen = await fileIo.read(fdRead, arrayBuffer);\n      if (readLen <= 4) {\n        hilog.error(DOMAIN_NUMBER, TAG, 'read pipe length failed');\n        return;\n      }\n      hilog.info(DOMAIN_NUMBER, TAG, 'read pipe %{public}s', buffer.from(arrayBuffer, 4, readLen - 4).toString());\n\n      // write\n      let strResponse : string = \"pong\";\n      const encoder = new util.TextEncoder(\"utf-8\");\n      const strBytes = encoder.encodeInto(strResponse);\n      let bufferLen = strBytes.length;\n      const lenBytes = new Uint8Array(4);\n      lenBytes[0] = (bufferLen >> 0) & 0xFF;\n      lenBytes[1] = (bufferLen >> 8) & 0xFF;\n      lenBytes[2] = (bufferLen >> 16) & 0xFF;\n      lenBytes[3] = (bufferLen >> 24) & 0xFF;\n      const writeBuffer = new Uint8Array(4 + bufferLen);\n      writeBuffer.set(lenBytes, 0);\n      writeBuffer.set(strBytes, 4);\n      let writeLen = await fileIo.write(fdWrite, writeBuffer.buffer);\n      hilog.info(DOMAIN_NUMBER, TAG, 'write pipe length %{public}d', writeLen);\n    } catch (err) {\n      hilog.error(DOMAIN_NUMBER, TAG, 'fileIo failed, error code: ' + err.code + \" message: \" + err.code);\n    }\n  }\n\n  onConnectNative(info: ConnectionInfo): void {\n    hilog.info(DOMAIN_NUMBER, TAG,\n      `onConnectNative, connectionId ${info.connectionId} caller bundle: ${info.bundleName}, extension origin: ${info.extensionOrigin}, pipe Read: ${info.fdRead}, pipe write ${info.fdWrite}  `);\n    this.ReadAsync(info.fdRead, info.fdWrite)\n  }\n\n  onDisconnectNative(info: ConnectionInfo): void {\n    hilog.info(DOMAIN_NUMBER, TAG, `onDisconnectNative, connectionId: ${info.connectionId}`);\n  }\n\n  onDestroy(): void {\n    hilog.info(DOMAIN_NUMBER, TAG, 'onDestroy');\n  }\n};\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在工程Module的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file",
            children: "module.json5配置文件"
          }), "中注册WebNativeMessagingExtensionAbility组件。设置type标签为“webNativeMessaging”，srcEntry标签指向组件代码路径。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  \"module\": {\n    // ...\n    \"extensionAbilities\": [\n      {\n        \"name\": \"MyWebNativeMessageExtAbility\",\n        \"description\": \"webNativeMessaging\",\n        \"type\": \"webNativeMessaging\",\n        \"exported\": true,\n        \"srcEntry\": \"./ets/MyWebNativeMessageExtAbility/MyWebNativeMessageExtAbility.ets\"\n      }\n    ]\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在工程Module对应的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file",
            children: "module.json5配置文件"
          }), "中配置crossAppSharedConfig，定义共享配置项，共享配置文件需放置在工程resources/base/profile目录下，并通过$资源访问方式引用。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  \"module\": {\n    \"crossAppSharedConfig\": \"$profile:shared_config\"\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["6.在shared_config.json添加", (0,jsx_runtime.jsx)(_components.a, {
        href: "#datashare%E5%AD%98%E6%94%BE%E5%BA%94%E7%94%A8extension%E9%85%8D%E7%BD%AE%E4%BF%A1%E6%81%AF",
        children: "extension配置"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"crossAppSharedConfig\": [\n    // ...\n    {\n      // uri固定格式，datashareproxy://[包名]/browserNativeMessagingHosts，浏览器应用通过该uri获取的value，即extension配置。\n      \"uri\": \"datashareproxy://com.example.app/browserNativeMessagingHosts\",\n      // extension配置，格式参考extension配置章节的格式，注意转义字符\n      \"value\": \"{\\\"name\\\": \\\"com.example.myapplication\\\",\\\"description\\\": \\\"Send message to native app.\\\",\\\"abilityName\\\": \\\"MyWebNativeMessageExtAbility\\\", \\\"allowed_origins\\\":[\\\"chrome-extension://knldjmfmopnpolahpmmgbagdohdnhkik/\\\"]}\",\n      \"allowList\": [\n        // 允许访问的应用appIdentifier, 这里加入具体浏览器的appIdentifier\n        \"1234567890123456789\"\n      ]\n    }\n  ]\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "实现拉起webnativemessagingextensionability浏览器开发者",
      children: "实现拉起WebNativeMessagingExtensionAbility（浏览器开发者）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "浏览器负责实现扩展runtime接口，拉起WebNativeMessagingExtensionAbility，建立和管理NativeMessaging连接。需要申请权限：ohos.permission.WEB_NATIVE_MESSAGING。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["当接收到创建NativeMessaging连接时，先通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-datashare/js-apis-data-datashare#get20",
            children: "应用间配置共享接口"
          }), "获取目标应用的extension配置。然后读取WebNativeMessagingExtensionAbility名称和允许访问的扩展列表。最后校验是否允许访问。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { dataShare } from '@kit.ArkData';\n\ninterface ExtensionConfig {\n  abilityName:string;\n  allowed_origins:string[];\n}\n\nasync function getManifestData(bundleName:string, connectExtensionOrigin:string) {\n  try {\n   // 调用dataShare接口获取extension配置\n    const dsProxyHelper = await dataShare.createDataProxyHandle();\n    const urisToGet = [`datashareproxy://${bundleName}/browserNativeMessagingHosts`];\n    const config : dataShare.DataProxyConfig = {\n      type: dataShare.DataProxyType.SHARED_CONFIG,\n    };\n    const results = await dsProxyHelper.get(urisToGet, config);\n    let foundValid = false;\n    for (let i = 0; i < results.length; i++) {\n      try {\n        const result = results[i];\n        const json = result.value;\n        if (typeof json !== \"string\") {\n          continue;\n        }\n        let jsonStr:string = json as string;\n        let info:ExtensionConfig = JSON.parse(jsonStr);\n        if (info.abilityName) {\n          console.info('Native message json info is ok');\n          if (!Array.isArray(info.allowed_origins)) {\n            info.allowed_origins = [info.allowed_origins];\n          }\n          if (!info.allowed_origins.includes(connectExtensionOrigin)) {\n            console.error('Origin not allowed, continue searching');\n            continue;\n          }\n          foundValid = true;\n          break;\n        }\n      } catch (error) {\n        console.error('NativeMessage JSON parse error:', error);\n      }\n    }\n    if (!foundValid) {\n      console.error('NativeMessage JSON no valid manifest found');\n    } else {\n      console.info('NativeMessage allowed_origins match ok');\n    }\n  } catch (error) {\n    console.error('Error getting config:', error);\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkweb-api/arkweb-arkts/arkts-apis-web-webnativemessagingextensionmanager/arkts-apis-web-webnativemessagingextensionmanager#webnativemessagingextensionmanagerconnectnative",
            children: "webNativeMessagingExtensionManager.connectNative"
          }), "创建NativeMessaging连接，如WebNativeMessagingExtensionAbility尚未运行，该接口则会拉起ExtensionAbility并触发。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { UIAbility, Want, common } from '@kit.AbilityKit';\nimport { webNativeMessagingExtensionManager } from '@kit.ArkWeb'\n\nclass ConnectionCallback implements webNativeMessagingExtensionManager.WebExtensionConnectionCallback {\n  onConnect(connection:webNativeMessagingExtensionManager.ConnectionNativeInfo) {\n    // connected\n    console.error(`onConnect id ${connection.connectionId} is connected`);\n  }\n  onDisconnect(connection:webNativeMessagingExtensionManager.ConnectionNativeInfo) {\n    // disconnect\n    console.error(`onDisconnect id ${connection.connectionId} is connected`);\n  }\n  onFailed(code:webNativeMessagingExtensionManager.NmErrorCode, errMsg:string) {\n    console.error(`onFailed error code is ${code}, errMsg is ${errMsg}`);\n  }\n}\n\nfunction connectNative(abilityContext: common.UIAbilityContext, bundleName: string, abilityName: string,\n  connectExtensionOrigin: string, readPipe: number, writePipe: number) : void {\n  try {\n    let wantInfo:Want = {\n      bundleName: bundleName,\n      abilityName: abilityName,\n      parameters: {\n        'ohos.arkweb.messageReadPipe': { 'type': 'FD', 'value': readPipe },\n        'ohos.arkweb.messageWritePipe': { 'type': 'FD', 'value': writePipe },\n        'ohos.arkweb.extensionOrigin': connectExtensionOrigin\n      },\n    };\n\n    let options : ConnectionCallback = new ConnectionCallback;\n    let connectId = webNativeMessagingExtensionManager.connectNative(abilityContext, wantInfo, options);\n    console.info(`innerWebNativeMessageManager  connectionId : ${connectId}` );\n  } catch (error) {\n    console.info(`inner callback error Message: ${JSON.stringify(error)}`);\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["需要销毁NativeMessaging连接时，调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkweb-api/arkweb-arkts/arkts-apis-web-webnativemessagingextensionmanager/arkts-apis-web-webnativemessagingextensionmanager#webnativemessagingextensionmanagerdisconnectnative",
            children: "webNativeMessagingExtensionManager.disconnectNative"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { webNativeMessagingExtensionManager } from '@kit.ArkWeb'\n\nfunction disconnectNative(connectId: number) : void {\n  console.info(`NativeMessageDisconnect start connectionId is ${connectId}`);\n  webNativeMessagingExtensionManager.disconnectNative(connectId);\n}\n"
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
179044(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
186094(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958248-11dcb8b68d72a20debfa33cc86d5e1f4.png");

},
303853(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
73979(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
49475(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438293-4ea13f50fdbe98dd86e1a4fd8f26bdca.png");

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