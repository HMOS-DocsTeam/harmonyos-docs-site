"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["569104"], {
31627(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkweb_api_arkweb_c_arkweb_headerfile_capi_native_interface_arkweb_h_capi_native_interface_arkweb_h_md_3f5_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkweb-api-arkweb-c-arkweb-headerfile-capi-native-interface-arkweb-h-capi-native-interface-arkweb-h-md-3f5.json
var site_docs_ref_arkweb_api_arkweb_c_arkweb_headerfile_capi_native_interface_arkweb_h_capi_native_interface_arkweb_h_md_3f5_namespaceObject = JSON.parse('{"id":"arkweb-api/arkweb-c/arkweb-headerfile/capi-native-interface-arkweb-h/capi-native-interface-arkweb-h","title":"native_interface_arkweb.h","description":"概述","source":"@site/docs-ref/arkweb-api/arkweb-c/arkweb-headerfile/capi-native-interface-arkweb-h/capi-native-interface-arkweb-h.md","sourceDirName":"arkweb-api/arkweb-c/arkweb-headerfile/capi-native-interface-arkweb-h","slug":"/arkweb-api/arkweb-c/arkweb-headerfile/capi-native-interface-arkweb-h/capi-native-interface-arkweb-h","permalink":"/harmonyos-docs-site/ref/arkweb-api/arkweb-c/arkweb-headerfile/capi-native-interface-arkweb-h/capi-native-interface-arkweb-h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"native_interface_arkweb.h","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-interface-arkweb-h","kit":"应用框架","last_updated":"2026-04-22","slug":"capi-native-interface-arkweb-h"},"sidebar":"ref","previous":{"title":"arkweb_type.h","permalink":"/harmonyos-docs-site/ref/arkweb-api/arkweb-c/arkweb-headerfile/capi-arkweb-type-h/capi-arkweb-type-h"},"next":{"title":"ArkWeb_AnyNativeAPI","permalink":"/harmonyos-docs-site/ref/arkweb-api/arkweb-c/arkweb-struct/capi-web-arkweb-anynativeapi/capi-web-arkweb-anynativeapi"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkweb-api/arkweb-c/arkweb-headerfile/capi-native-interface-arkweb-h/capi-native-interface-arkweb-h.md


const frontMatter = {
	title: 'native_interface_arkweb.h',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-interface-arkweb-h',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'capi-native-interface-arkweb-h'
};
const contentTitle = 'native_interface_arkweb.h';

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
  "value": "枚举类型说明",
  "id": "枚举类型说明",
  "level": 2
}, {
  "value": "ArkWebEngineVersion",
  "id": "arkwebengineversion",
  "level": 3
}, {
  "value": "函数说明",
  "id": "函数说明",
  "level": 2
}, {
  "value": "NativeArkWeb_OnJavaScriptCallback()",
  "id": "nativearkweb_onjavascriptcallback",
  "level": 3
}, {
  "value": "NativeArkWeb_OnJavaScriptProxyCallback()",
  "id": "nativearkweb_onjavascriptproxycallback",
  "level": 3
}, {
  "value": "NativeArkWeb_OnValidCallback()",
  "id": "nativearkweb_onvalidcallback",
  "level": 3
}, {
  "value": "NativeArkWeb_OnDestroyCallback()",
  "id": "nativearkweb_ondestroycallback",
  "level": 3
}, {
  "value": "OH_ArkWeb_OnCookieSaveCallback()",
  "id": "oh_arkweb_oncookiesavecallback",
  "level": 3
}, {
  "value": "OH_NativeArkWeb_RunJavaScript()",
  "id": "oh_nativearkweb_runjavascript",
  "level": 3
}, {
  "value": "OH_NativeArkWeb_RegisterJavaScriptProxy()",
  "id": "oh_nativearkweb_registerjavascriptproxy",
  "level": 3
}, {
  "value": "OH_NativeArkWeb_UnregisterJavaScriptProxy()",
  "id": "oh_nativearkweb_unregisterjavascriptproxy",
  "level": 3
}, {
  "value": "OH_NativeArkWeb_SetJavaScriptProxyValidCallback()",
  "id": "oh_nativearkweb_setjavascriptproxyvalidcallback",
  "level": 3
}, {
  "value": "OH_NativeArkWeb_GetJavaScriptProxyValidCallback()",
  "id": "oh_nativearkweb_getjavascriptproxyvalidcallback",
  "level": 3
}, {
  "value": "OH_NativeArkWeb_SetDestroyCallback()",
  "id": "oh_nativearkweb_setdestroycallback",
  "level": 3
}, {
  "value": "OH_NativeArkWeb_GetDestroyCallback()",
  "id": "oh_nativearkweb_getdestroycallback",
  "level": 3
}, {
  "value": "OH_NativeArkWeb_LoadData()",
  "id": "oh_nativearkweb_loaddata",
  "level": 3
}, {
  "value": "OH_NativeArkWeb_RegisterAsyncThreadJavaScriptProxy()",
  "id": "oh_nativearkweb_registerasyncthreadjavascriptproxy",
  "level": 3
}, {
  "value": "OH_ArkWebCookieManager_SaveCookieSync()",
  "id": "oh_arkwebcookiemanager_savecookiesync",
  "level": 3
}, {
  "value": "OH_ArkWebCookieManager_SaveCookieAsync()",
  "id": "oh_arkwebcookiemanager_savecookieasync",
  "level": 3
}, {
  "value": "OH_NativeArkWeb_GetBlanklessInfoWithKey()",
  "id": "oh_nativearkweb_getblanklessinfowithkey",
  "level": 3
}, {
  "value": "OH_NativeArkWeb_SetBlanklessLoadingWithKey()",
  "id": "oh_nativearkweb_setblanklessloadingwithkey",
  "level": 3
}, {
  "value": "OH_NativeArkWeb_ClearBlanklessLoadingCache()",
  "id": "oh_nativearkweb_clearblanklessloadingcache",
  "level": 3
}, {
  "value": "OH_NativeArkWeb_SetBlanklessLoadingCacheCapacity()",
  "id": "oh_nativearkweb_setblanklessloadingcachecapacity",
  "level": 3
}, {
  "value": "OH_NativeArkWeb_SetActiveWebEngineVersion()",
  "id": "oh_nativearkweb_setactivewebengineversion",
  "level": 3
}, {
  "value": "OH_NativeArkWeb_GetActiveWebEngineVersion()",
  "id": "oh_nativearkweb_getactivewebengineversion",
  "level": 3
}, {
  "value": "OH_NativeArkWeb_IsActiveWebEngineEvergreen()",
  "id": "oh_nativearkweb_isactivewebengineevergreen",
  "level": 3
}, {
  "value": "OH_NativeArkWeb_LazyInitializeWebEngineInCookieManager()",
  "id": "oh_nativearkweb_lazyinitializewebengineincookiemanager",
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
        id: "native_interface_arkwebh",
        children: "native_interface_arkweb.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "声明API接口供开发者使用注入对象和执行JavaScript代码等功能。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <web/native_interface_arkweb.h>"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "库："
        })
      }), " libohweb.so"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Web.Webview.Core"]
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
        href: "/ref/arkweb-api/arkweb-c/arkweb-module/capi-web/capi-web",
        children: "Web"
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
              href: "/ref/arkweb-api/arkweb-c/arkweb-struct/capi-web-arkweb-blanklessinfo/capi-web-arkweb-blanklessinfo",
              children: "ArkWeb_BlanklessInfo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArkWeb_BlanklessInfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "页面首屏加载预测信息，主要包括首屏相似度预测值，首屏加载耗时预测值，预测错误码，应用需根据此信息来决策是否启用无白屏加载插帧方案。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "枚举",
      children: "枚举"
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
              href: "#arkwebengineversion",
              children: "ArkWebEngineVersion"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArkWebEngineVersion"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["ArkWeb内核版本，请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://gitcode.com/openharmony-tpc/chromium_src/blob/132_trunk/web/ReleaseNote/CompatibleWithLegacyWebEngine.md",
              children: "M114内核在HarmonyOS6.0系统上的适配指导"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "函数",
      children: "函数"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "#nativearkweb_onjavascriptcallback",
              children: "typedef void (*NativeArkWeb_OnJavaScriptCallback)(const char*)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NativeArkWeb_OnJavaScriptCallback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义执行JavaScript代码后返回结果的回调函数的类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#nativearkweb_onjavascriptproxycallback",
              children: "typedef char* (*NativeArkWeb_OnJavaScriptProxyCallback)(const char** argv, int32_t argc)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NativeArkWeb_OnJavaScriptProxyCallback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义注入对象的回调函数的类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#nativearkweb_onvalidcallback",
              children: "typedef void (*NativeArkWeb_OnValidCallback)(const char*)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NativeArkWeb_OnValidCallback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义Web组件可用时的回调函数的类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#nativearkweb_ondestroycallback",
              children: "typedef void (*NativeArkWeb_OnDestroyCallback)(const char*)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NativeArkWeb_OnDestroyCallback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义Web组件销毁时的回调函数的类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkweb_oncookiesavecallback",
              children: "typedef void (*OH_ArkWeb_OnCookieSaveCallback)(ArkWeb_ErrorCode errorCode)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_ArkWeb_OnCookieSaveCallback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["定义保存cookie的回调函数的类型。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 20"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativearkweb_runjavascript",
              children: "void OH_NativeArkWeb_RunJavaScript(const char* webTag, const char* jsCode, NativeArkWeb_OnJavaScriptCallback callback)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在当前显示页面的环境下，加载并异步执行一段JavaScript代码。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativearkweb_registerjavascriptproxy",
              children: "void OH_NativeArkWeb_RegisterJavaScriptProxy(const char* webTag, const char* objName, const char** methodList,NativeArkWeb_OnJavaScriptProxyCallback* callback, int32_t size, bool needRefresh)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册对象及函数名称列表。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativearkweb_unregisterjavascriptproxy",
              children: "void OH_NativeArkWeb_UnregisterJavaScriptProxy(const char* webTag, const char* objName)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "删除已注册的对象及其下的回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativearkweb_setjavascriptproxyvalidcallback",
              children: "void OH_NativeArkWeb_SetJavaScriptProxyValidCallback(const char* webTag, NativeArkWeb_OnValidCallback callback)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置对象可注册时的回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativearkweb_getjavascriptproxyvalidcallback",
              children: "NativeArkWeb_OnValidCallback OH_NativeArkWeb_GetJavaScriptProxyValidCallback(const char* webTag)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取已注册的对象可注册时的回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativearkweb_setdestroycallback",
              children: "void OH_NativeArkWeb_SetDestroyCallback(const char* webTag, NativeArkWeb_OnDestroyCallback callback)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置组件销毁时的回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativearkweb_getdestroycallback",
              children: "NativeArkWeb_OnDestroyCallback OH_NativeArkWeb_GetDestroyCallback(const char* webTag)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取已注册的组件销毁时的回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativearkweb_loaddata",
              children: "ArkWeb_ErrorCode OH_NativeArkWeb_LoadData(const char* webTag,const char* data,const char* mimeType,const char* encoding,const char* baseUrl,const char* historyUrl)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "加载数据或URL，此函数应在主线程中调用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativearkweb_registerasyncthreadjavascriptproxy",
              children: "void OH_NativeArkWeb_RegisterAsyncThreadJavaScriptProxy(const char* webTag,const ArkWeb_ProxyObjectWithResult* proxyObject, const char* permission)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册一个包含回调方法的 JavaScript 对象，这些方法可带有返回值。该对象将被注入到当前页面的所有frame中，包括所有的 iframe，并且可以通过在 ArkWeb_ProxyObjectWithResult 中指定的名称进行访问。该对象只会在下一次加载或重新加载页面后在 JavaScript 中生效。这些方法将在 ArkWeb 的工作线程中执行。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkwebcookiemanager_savecookiesync",
              children: "ArkWeb_ErrorCode OH_ArkWebCookieManager_SaveCookieSync()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["将当前可通过CookieManager API访问的所有Cookie持久化到磁盘。如果要在非UI线程中使用此接口，则需要先使用OH_ArkWeb_GetNativeAPI初始化CookieManager接口。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 20"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkwebcookiemanager_savecookieasync",
              children: "void OH_ArkWebCookieManager_SaveCookieAsync(OH_ArkWeb_OnCookieSaveCallback callback)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["将当前可通过CookieManager API访问的所有Cookie持久化到磁盘。在不初始化CookieManager接口的情况下，此接口将在UI线程上自动执行。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 20"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativearkweb_getblanklessinfowithkey",
              children: "ArkWeb_BlanklessInfo OH_NativeArkWeb_GetBlanklessInfoWithKey(const char* webTag, const char* key)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取页面首屏加载预测信息（详细说明见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkweb-api/arkweb-c/arkweb-struct/capi-web-arkweb-blanklessinfo/capi-web-arkweb-blanklessinfo",
              children: "ArkWeb_BlanklessInfo"
            }), "），并开始本次加载过渡帧生成，应用根据此信息确定是否需要启用无白屏加载。必须与", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativearkweb_setblanklessloadingwithkey",
              children: "OH_NativeArkWeb_SetBlanklessLoadingWithKey"
            }), "接口配套使用，并且必须在触发加载页面的接口之前调用。需在WebViewController与Web组件绑定后才能使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativearkweb_setblanklessloadingwithkey",
              children: "ArkWeb_BlanklessErrorCode OH_NativeArkWeb_SetBlanklessLoadingWithKey(const char* webTag, const char* key, bool isStarted)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置无白屏加载是否启用。本接口必须与", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativearkweb_getblanklessinfowithkey",
              children: "OH_NativeArkWeb_GetBlanklessInfoWithKey"
            }), "接口配套使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativearkweb_clearblanklessloadingcache",
              children: "void OH_NativeArkWeb_ClearBlanklessLoadingCache(const char* key[], uint32_t size)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "清除指定key值页面无白屏优化缓存，本接口只清除缓存。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativearkweb_setblanklessloadingcachecapacity",
              children: "uint32_t OH_NativeArkWeb_SetBlanklessLoadingCacheCapacity(uint32_t capacity)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置无白屏加载方案的持久化缓存容量，返回实际生效值。默认缓存容量为30MB，最大值为100MB。当实际缓存超过容量时，将采用淘汰不常用的过渡帧的方式清理。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativearkweb_setactivewebengineversion",
              children: "void OH_NativeArkWeb_SetActiveWebEngineVersion(ArkWebEngineVersion webEngineVersion)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置ArkWeb内核版本。若系统不支持指定版本，则设置无效。该接口为全局静态方法，须在调用initializeWebEngine前执行，若已加载任何Web组件，则该设置无效。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativearkweb_getactivewebengineversion",
              children: "ArkWebEngineVersion OH_NativeArkWeb_GetActiveWebEngineVersion()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取当前使用的ArkWeb内核版本。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativearkweb_isactivewebengineevergreen",
              children: "bool OH_NativeArkWeb_IsActiveWebEngineEvergreen()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断应用所使用ArkWeb内核是否是常青内核，即系统的最新内核。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativearkweb_lazyinitializewebengineincookiemanager",
              children: "void OH_NativeArkWeb_LazyInitializeWebEngineInCookieManager(bool lazy)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置是否延后初始化ArkWeb内核，不调用该方法时，默认不延后初始化ArkWeb内核。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "枚举类型说明",
      children: "枚举类型说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "arkwebengineversion",
      children: "ArkWebEngineVersion"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum ArkWebEngineVersion\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ArkWeb内核版本，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/openharmony-tpc/chromium_src/blob/132_trunk/web/ReleaseNote/CompatibleWithLegacyWebEngine.md",
        children: "M114内核在HarmonyOS6.0系统上的适配指导"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "内核类型"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "英文"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "常青内核"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EVERGREEN WebCore"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前系统的最新Web内核，系统基于此内核进行完整的功能实现，推荐应用使用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "遗留内核"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LEGACY WebCore"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "复用上一版本的内核，只做安全补丁及舆情问题修复，仅作为兼容性回滚使用，且遗留内核的支持有时间限制。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
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
            children: "SYSTEM_DEFAULT = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "系统默认内核，HarmonyOS 6.0版本默认为M132。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKWEB_M114 = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HarmonyOS 6.0版本的遗留内核。开发者可选择此遗留内核，若系统版本上不存在此内核则设置无效。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKWEB_M132 = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HarmonyOS 6.0版本的常青内核，M132为此版本的默认内核。若系统版本上不存在此内核则设置无效。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKWEB_EVERGREEN = 99999"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["常青内核，系统的最新内核。开发者可选择在每个系统版本上都使用最新的内核，HarmonyOS 6.1及之后所有系统版本都生效。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数说明",
      children: "函数说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "nativearkweb_onjavascriptcallback",
      children: "NativeArkWeb_OnJavaScriptCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void (*NativeArkWeb_OnJavaScriptCallback)(const char*)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义执行JavaScript代码后返回结果的回调函数的类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "nativearkweb_onjavascriptproxycallback",
      children: "NativeArkWeb_OnJavaScriptProxyCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef char* (*NativeArkWeb_OnJavaScriptProxyCallback)(const char** argv, int32_t argc)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义注入对象的回调函数的类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "nativearkweb_onvalidcallback",
      children: "NativeArkWeb_OnValidCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void (*NativeArkWeb_OnValidCallback)(const char*)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义Web组件可用时的回调函数的类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "nativearkweb_ondestroycallback",
      children: "NativeArkWeb_OnDestroyCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void (*NativeArkWeb_OnDestroyCallback)(const char*)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义Web组件销毁时的回调函数的类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkweb_oncookiesavecallback",
      children: "OH_ArkWeb_OnCookieSaveCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void (*OH_ArkWeb_OnCookieSaveCallback)(ArkWeb_ErrorCode errorCode)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义保存cookie的回调函数的类型。"
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
              href: "/ref/arkweb-api/arkweb-c/arkweb-headerfile/capi-arkweb-error-code-h/capi-arkweb-error-code-h#arkweb_errorcode",
              children: "ArkWeb_ErrorCode"
            }), " errorCode"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkweb-api/arkweb-c/arkweb-headerfile/capi-arkweb-error-code-h/capi-arkweb-error-code-h#arkweb_errorcode",
              children: "ARKWEB_SUCCESS"
            }), " 保存cookie成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkweb-api/arkweb-c/arkweb-headerfile/capi-arkweb-error-code-h/capi-arkweb-error-code-h#arkweb_errorcode",
              children: "ARKWEB_COOKIE_SAVE_FAILED"
            }), " 保存cookie失败。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkweb-api/arkweb-c/arkweb-headerfile/capi-arkweb-error-code-h/capi-arkweb-error-code-h#arkweb_errorcode",
              children: "ARKWEB_COOKIE_MANAGER_INITIALIZE_FAILED"
            }), " CookieManager初始化失败。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativearkweb_runjavascript",
      children: "OH_NativeArkWeb_RunJavaScript()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_NativeArkWeb_RunJavaScript(const char* webTag, const char* jsCode, NativeArkWeb_OnJavaScriptCallback callback)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在当前显示页面的环境下，加载并异步执行一段JavaScript代码。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Web.Webview.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* webTag"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Web组件的名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* jsCode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "一段JavaScript的代码脚本。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#nativearkweb_onjavascriptcallback",
              children: "NativeArkWeb_OnJavaScriptCallback"
            }), " callback"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "代码执行完后通知开发者结果的回调函数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativearkweb_registerjavascriptproxy",
      children: "OH_NativeArkWeb_RegisterJavaScriptProxy()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_NativeArkWeb_RegisterJavaScriptProxy(const char* webTag, const char* objName, const char** methodList,NativeArkWeb_OnJavaScriptProxyCallback* callback, int32_t size, bool needRefresh)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注册对象及函数名称列表。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Web.Webview.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "const char* webTag"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Web组件的名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* objName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注入对象的名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char** methodList"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注入函数列表的名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#nativearkweb_onjavascriptproxycallback",
              children: "NativeArkWeb_OnJavaScriptProxyCallback"
            }), "* callback"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注入的回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注入的回调函数的个数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bool needRefresh"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否需要刷新页面。true：刷新页面，false：不刷新页面。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativearkweb_unregisterjavascriptproxy",
      children: "OH_NativeArkWeb_UnregisterJavaScriptProxy()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_NativeArkWeb_UnregisterJavaScriptProxy(const char* webTag, const char* objName)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "删除已注册的对象及其下的回调函数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Web.Webview.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* webTag"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Web组件的名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* objName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注入对象的名称。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativearkweb_setjavascriptproxyvalidcallback",
      children: "OH_NativeArkWeb_SetJavaScriptProxyValidCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_NativeArkWeb_SetJavaScriptProxyValidCallback(const char* webTag, NativeArkWeb_OnValidCallback callback)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置对象可注册时的回调函数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Web.Webview.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* webTag"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Web组件的名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#nativearkweb_onvalidcallback",
              children: "NativeArkWeb_OnValidCallback"
            }), " callback"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象可注册时的回调函数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativearkweb_getjavascriptproxyvalidcallback",
      children: "OH_NativeArkWeb_GetJavaScriptProxyValidCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "NativeArkWeb_OnValidCallback OH_NativeArkWeb_GetJavaScriptProxyValidCallback(const char* webTag)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取已注册的对象可注册时的回调函数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Web.Webview.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* webTag"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Web组件的名称。"
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
              href: "#nativearkweb_onvalidcallback",
              children: "NativeArkWeb_OnValidCallback"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "已注册的对象可注册时的回调函数。如果未设置由参数webTag指定的有效回调函数，则将返回空指针。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativearkweb_setdestroycallback",
      children: "OH_NativeArkWeb_SetDestroyCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_NativeArkWeb_SetDestroyCallback(const char* webTag, NativeArkWeb_OnDestroyCallback callback)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置组件销毁时的回调函数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Web.Webview.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* webTag"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Web组件的名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#nativearkweb_ondestroycallback",
              children: "NativeArkWeb_OnDestroyCallback"
            }), " callback"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "组件销毁时的回调函数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativearkweb_getdestroycallback",
      children: "OH_NativeArkWeb_GetDestroyCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "NativeArkWeb_OnDestroyCallback OH_NativeArkWeb_GetDestroyCallback(const char* webTag)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取已注册的组件销毁时的回调函数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Web.Webview.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* webTag"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Web组件的名称。"
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
              href: "#nativearkweb_ondestroycallback",
              children: "NativeArkWeb_OnDestroyCallback"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回已注册的组件销毁时的回调函数。如果未设置由参数webTag指定的销毁回调函数，则将返回空指针。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativearkweb_loaddata",
      children: "OH_NativeArkWeb_LoadData()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ArkWeb_ErrorCode OH_NativeArkWeb_LoadData(const char* webTag,const char* data,const char* mimeType,const char* encoding,const char* baseUrl,const char* historyUrl)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "加载数据或URL，此函数应在主线程中调用。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Web.Webview.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 15"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "const char* webTag"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Web组件的名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Base64\"或\"URL\"编码的字符串，不能为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* mimeType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体类型，例如\"text/html\"，不能为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* encoding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "编码类型，例如\"UTF-8\"，不能为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* baseUrl"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定的URL路径(\"http\"/\"https\"/\"data\"协议),由Web组件分配给window.origin。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* historyUrl"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "历史URL，当它不为空时，可以通过历史记录来管理，实现前进和后退功能。"
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
              href: "/ref/arkweb-api/arkweb-c/arkweb-headerfile/capi-arkweb-error-code-h/capi-arkweb-error-code-h#arkweb_errorcode",
              children: "ArkWeb_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["LoadData 错误码。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkweb-api/arkweb-c/arkweb-headerfile/capi-arkweb-error-code-h/capi-arkweb-error-code-h#arkweb_errorcode",
              children: "ARKWEB_SUCCESS"
            }), " 加载数据成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkweb-api/arkweb-c/arkweb-headerfile/capi-arkweb-error-code-h/capi-arkweb-error-code-h#arkweb_errorcode",
              children: "ARKWEB_INVALID_PARAM"
            }), " 必填参数未指定或参数类型不正确或参数校验失败。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkweb-api/arkweb-c/arkweb-headerfile/capi-arkweb-error-code-h/capi-arkweb-error-code-h#arkweb_errorcode",
              children: "ARKWEB_INIT_ERROR"
            }), " 初始化失败，根据传入的\"webTag\"找不到有效的Web组件。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkweb-api/arkweb-c/arkweb-headerfile/capi-arkweb-error-code-h/capi-arkweb-error-code-h#arkweb_errorcode",
              children: "ARKWEB_LIBRARY_OPEN_FAILURE"
            }), " 打开动态链接库失败。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkweb-api/arkweb-c/arkweb-headerfile/capi-arkweb-error-code-h/capi-arkweb-error-code-h#arkweb_errorcode",
              children: "ARKWEB_LIBRARY_SYMBOL_NOT_FOUND"
            }), " 动态链接库中未找到所需的符号。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativearkweb_registerasyncthreadjavascriptproxy",
      children: "OH_NativeArkWeb_RegisterAsyncThreadJavaScriptProxy()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_NativeArkWeb_RegisterAsyncThreadJavaScriptProxy(const char* webTag,const ArkWeb_ProxyObjectWithResult* proxyObject, const char* permission)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注册一个包含回调方法的 JavaScript 对象，这些方法可带有返回值。该对象将被注入到当前页面的所有frame中，包括所有的 iframe，并且可以通过在 ArkWeb_ProxyObjectWithResult 中指定的名称进行访问。该对象只会在下一次加载或重新加载页面后在 JavaScript 中生效。这些方法将在 ArkWeb 的工作线程中执行。"
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* webTag"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Web组件名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkweb-api/arkweb-c/arkweb-struct/capi-web-arkweb-proxyobjectwithresult/capi-web-arkweb-proxyobjectwithresult",
              children: "ArkWeb_ProxyObjectWithResult"
            }), "* proxyObject"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册的对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* permission"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "json格式字符串，默认值为空。该字符串用来配置JSBridge的权限限制，可以配置对象和方法级别。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkwebcookiemanager_savecookiesync",
      children: "OH_ArkWebCookieManager_SaveCookieSync()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ArkWeb_ErrorCode OH_ArkWebCookieManager_SaveCookieSync()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将当前可通过CookieManager API访问的所有Cookie持久化到磁盘。如果要在非UI线程中使用此接口，则需要先使用OH_ArkWeb_GetNativeAPI初始化CookieManager接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
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
              href: "/ref/arkweb-api/arkweb-c/arkweb-headerfile/capi-arkweb-error-code-h/capi-arkweb-error-code-h#arkweb_errorcode",
              children: "ArkWeb_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["SaveCookieSync错误码。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkweb-api/arkweb-c/arkweb-headerfile/capi-arkweb-error-code-h/capi-arkweb-error-code-h#arkweb_errorcode",
              children: "ARKWEB_SUCCESS"
            }), " 保存cookie成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkweb-api/arkweb-c/arkweb-headerfile/capi-arkweb-error-code-h/capi-arkweb-error-code-h#arkweb_errorcode",
              children: "ARKWEB_COOKIE_SAVE_FAILED"
            }), " 保存cookie失败。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkweb-api/arkweb-c/arkweb-headerfile/capi-arkweb-error-code-h/capi-arkweb-error-code-h#arkweb_errorcode",
              children: "ARKWEB_COOKIE_MANAGER_INITIALIZE_FAILED"
            }), " CookieManager初始化失败。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkweb-api/arkweb-c/arkweb-headerfile/capi-arkweb-error-code-h/capi-arkweb-error-code-h#arkweb_errorcode",
              children: "ARKWEB_COOKIE_MANAGER_NOT_INITIALIZED"
            }), " 在非UI线程中，不允许在不初始化CookieManager接口的情况下调用该接口。请先使用OH_ArkWeb_GetNativeAPI初始化CookieManager接口。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkwebcookiemanager_savecookieasync",
      children: "OH_ArkWebCookieManager_SaveCookieAsync()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_ArkWebCookieManager_SaveCookieAsync(OH_ArkWeb_OnCookieSaveCallback callback)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将当前可通过CookieManager API访问的所有Cookie持久化到磁盘。在不初始化CookieManager接口的情况下，此接口将在UI线程上自动执行。"
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
              href: "#oh_arkweb_oncookiesavecallback",
              children: "OH_ArkWeb_OnCookieSaveCallback"
            }), "* callback"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "保存cookie完成后执行该回调。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativearkweb_getblanklessinfowithkey",
      children: "OH_NativeArkWeb_GetBlanklessInfoWithKey()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ArkWeb_BlanklessInfo OH_NativeArkWeb_GetBlanklessInfoWithKey(const char* webTag, const char* key)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["获取页面首屏加载预测信息（详细说明见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-c/arkweb-struct/capi-web-arkweb-blanklessinfo/capi-web-arkweb-blanklessinfo",
        children: "ArkWeb_BlanklessInfo"
      }), "），并开始本次加载过渡帧生成，应用根据此信息确定是否需要启用无白屏加载。必须与", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_nativearkweb_setblanklessloadingwithkey",
        children: "OH_NativeArkWeb_SetBlanklessLoadingWithKey"
      }), "接口配套使用，并且必须在触发加载页面的接口之前调用。需在WebViewController与Web组件绑定后才能使用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(741216)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["持久缓存容量：默认大小为30MB（约30页），可以通过接口", (0,jsx_runtime.jsx)(_components.a, {
          href: "#oh_nativearkweb_setblanklessloadingcachecapacity",
          children: "OH_NativeArkWeb_SetBlanklessLoadingCacheCapacity"
        }), "设置缓存容量，具体见该接口说明。超过容量时根据LRU（Least Recently Used，淘汰不常用缓存的策略）机制更新缓存。自动清理超过7天的持久缓存数据，缓存清除后第三次加载页面开始有优化效果。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["如果发现相似度（即", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkweb-api/arkweb-c/arkweb-struct/capi-web-arkweb-blanklessinfo/capi-web-arkweb-blanklessinfo",
          children: "ArkWeb_BlanklessInfo"
        }), "中的similarity）极低，请检查key值是否正确传递。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "调用本接口后，会启用页面加载快照检测及生成过渡帧计算，产生一定资源开销。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "启用无白屏加载的页面会带来一定的资源开销，开销的大小与Web组件的分辨率相关。假设分辨率的宽度和高度分别为：w, h。页面在打开阶段会增加峰值内存，增加量约为12wh B。页面打开后，内存会被回收，不影响稳态内存。增加固态应用缓存的大小，每个页面增加的缓存约w*h/10 B，缓存位于应用缓存的位置。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限："
        })
      }), " ohos.permission.INTERNET和ohos.permission.GET_NETWORK_INFO"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异："
        })
      }), " 该接口在Phone中可正常调用，在其他设备类型中返回801错误码。"]
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* webTag"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Web组件名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* key"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "唯一标识本页面的key值。  合法取值范围：非空，长度不超过2048个字符。  设置非法值时不生效。"
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
              href: "/ref/arkweb-api/arkweb-c/arkweb-struct/capi-web-arkweb-blanklessinfo/capi-web-arkweb-blanklessinfo",
              children: "ArkWeb_BlanklessInfo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "页面首屏加载预测信息，主要包括首屏相似度预测值，首屏加载耗时预测值，应用需根据此信息来决策是否启用无白屏加载插帧。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativearkweb_setblanklessloadingwithkey",
      children: "OH_NativeArkWeb_SetBlanklessLoadingWithKey()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ArkWeb_BlanklessErrorCode OH_NativeArkWeb_SetBlanklessLoadingWithKey(const char* webTag, const char* key, bool isStarted)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置无白屏加载是否启用。本接口必须与", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_nativearkweb_getblanklessinfowithkey",
        children: "OH_NativeArkWeb_GetBlanklessInfoWithKey"
      }), "接口配套使用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(617718)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["需在触发页面加载的接口之后调用。其他约束同", (0,jsx_runtime.jsx)(_components.a, {
          href: "#oh_nativearkweb_getblanklessinfowithkey",
          children: "OH_NativeArkWeb_GetBlanklessInfoWithKey"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "页面的加载必须在调用本套接口的组件中进行。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当相似度较低时，系统将判定为跳变过大，启用插帧会失败。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限："
        })
      }), " ohos.permission.INTERNET和ohos.permission.GET_NETWORK_INFO"]
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* webTag"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Web组件名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* key"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["唯一标识本页面的key值。必须与", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativearkweb_getblanklessinfowithkey",
              children: "OH_NativeArkWeb_GetBlanklessInfoWithKey"
            }), "接口的key值相同。  合法取值范围：非空，长度不超过2048个字符。  非法值设置行为：返回错误码", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkweb-api/arkweb-c/arkweb-headerfile/capi-arkweb-error-code-h/capi-arkweb-error-code-h#arkweb_blanklesserrorcode",
              children: "ArkWeb_BlanklessErrorCode"
            }), "，插帧不生效。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bool isStarted"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否启用开始插帧，true：启用，false：不启用。  默认值：false。"
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
              href: "/ref/arkweb-api/arkweb-c/arkweb-headerfile/capi-arkweb-error-code-h/capi-arkweb-error-code-h#arkweb_blanklesserrorcode",
              children: "ArkWeb_BlanklessErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回接口调用是否成功，具体见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkweb-api/arkweb-c/arkweb-headerfile/capi-arkweb-error-code-h/capi-arkweb-error-code-h#arkweb_blanklesserrorcode",
              children: "ArkWeb_BlanklessErrorCode"
            }), "定义。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativearkweb_clearblanklessloadingcache",
      children: "OH_NativeArkWeb_ClearBlanklessLoadingCache()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_NativeArkWeb_ClearBlanklessLoadingCache(const char* key[], uint32_t size)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "清除指定key值页面无白屏优化缓存，本接口只清除缓存。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在小程序或Web应用场景中，当页面加载时内容变化显著，可能会出现一次明显的跳变。若对此跳变有所顾虑，可使用该接口清除页面缓存。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(425124)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "清除之后的页面，需在第三次加载页面时才会产生优化效果。"
      }), "\n"]
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* key[]"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["清除Blankless优化方案页面的key值列表，key值为", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativearkweb_getblanklessinfowithkey",
              children: "OH_NativeArkWeb_GetBlanklessInfoWithKey"
            }), "中指定过的。  默认值：所有Blankless优化方案缓存的页面key列表。  合法取值范围：长度不超过2048，key列表长度<=100。key和加载页面时输入给ArkWeb的相同。  非法值设置行为：key长度超过2048时该key不生效；长度超过100时，取前100个；当为NULL时，使用默认值。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "keys数组的大小。  默认值：0。  合法取值范围：0~100。取值超过100时，keys数组取前100个。  非法值设置行为：0。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativearkweb_setblanklessloadingcachecapacity",
      children: "OH_NativeArkWeb_SetBlanklessLoadingCacheCapacity()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "uint32_t OH_NativeArkWeb_SetBlanklessLoadingCacheCapacity(uint32_t capacity)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置无白屏加载方案的持久化缓存容量，返回实际生效值。默认缓存容量为30MB，最大值为100MB。当实际缓存超过容量时，将采用淘汰不常用的过渡帧的方式清理。"
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t capacity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置持久化缓存设置，单位MB，最大设置不超过100MB。  默认值：30MB。  合法取值范围：0~100，当设置为0时，无缓存空间，则功能全局不开启。  非法值设置行为：小于0时生效值为0，大于100时生效值为100。"
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
            children: "uint32_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回实际生效的容量值，范围0~100。  小于0时生效值为0，大于100时生效值为100。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativearkweb_setactivewebengineversion",
      children: "OH_NativeArkWeb_SetActiveWebEngineVersion()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_NativeArkWeb_SetActiveWebEngineVersion(ArkWebEngineVersion webEngineVersion)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置ArkWeb内核版本。若系统不支持指定版本，则设置无效。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该接口为全局静态方法，须在调用initializeWebEngine前执行，若已加载任何Web组件，则该设置无效。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "遗留内核适配："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在HarmonyOS 6.0及以后，使用遗留内核时，部分ArkWeb接口不会生效，参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/openharmony-tpc/chromium_src/blob/132_trunk/web/ReleaseNote/CompatibleWithLegacyWebEngine.md",
        children: "M114内核在HarmonyOS6.0系统上的适配指导"
      }), "。"]
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ArkWebEngineVersion webEngineVersion"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["ArkWeb内核版本（详细说明见", (0,jsx_runtime.jsx)(_components.a, {
              href: "#arkwebengineversion",
              children: "ArkWebEngineVersion"
            }), "）。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativearkweb_getactivewebengineversion",
      children: "OH_NativeArkWeb_GetActiveWebEngineVersion()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ArkWebEngineVersion OH_NativeArkWeb_GetActiveWebEngineVersion()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取当前使用的ArkWeb内核版本。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
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
            children: "ArkWebEngineVersion"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回由", (0,jsx_runtime.jsx)(_components.a, {
              href: "#arkwebengineversion",
              children: "ArkWebEngineVersion"
            }), "枚举所定义的当前使用的ArkWeb内核版本。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativearkweb_isactivewebengineevergreen",
      children: "OH_NativeArkWeb_IsActiveWebEngineEvergreen()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "bool OH_NativeArkWeb_IsActiveWebEngineEvergreen()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "判断应用所使用ArkWeb内核是否是常青内核，即系统的最新内核。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 23"]
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
            children: "bool"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示当前应用所使用内核是否为常青内核。true表示当前应用所使用内核是常青内核，false表示当前应用所使用内核不是常青内核。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativearkweb_lazyinitializewebengineincookiemanager",
      children: "OH_NativeArkWeb_LazyInitializeWebEngineInCookieManager()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_NativeArkWeb_LazyInitializeWebEngineInCookieManager(bool lazy)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置是否延后初始化ArkWeb内核，不调用该方法时，默认不延后初始化ArkWeb内核。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(608315)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "该接口为全局静态方法，须在使用ArkWeb组件和初始化ArkWeb内核前调用，否则该设置无效。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["该接口仅适用于调用后会初始化CookieManager的接口，比如", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkweb-api/arkweb-c/arkweb-struct/capi-web-arkweb-cookiemanagerapi/capi-web-arkweb-cookiemanagerapi",
          children: "ArkWeb_CookieManagerAPI"
        }), "的接口。调用本接口后，再调用适用的接口，会在初始化CookieManager时跳过初始化ArkWeb内核，后续需自行初始化ArkWeb内核。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 22"]
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bool lazy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否延后初始化ArkWeb内核，true：延后，false：不延后。"
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
425124(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
741216(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
608315(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
617718(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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