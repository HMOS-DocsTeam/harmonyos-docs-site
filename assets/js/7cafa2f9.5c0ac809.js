"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["415239"], {
165621(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_basicfun_basic_services_kit_pasteboard_native_use_pasteboard_native_use_pasteboard_md_7ca_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-basicfun-basic-services-kit-pasteboard-native-use-pasteboard-native-use-pasteboard-md-7ca.json
var site_docs_system_basicfun_basic_services_kit_pasteboard_native_use_pasteboard_native_use_pasteboard_md_7ca_namespaceObject = JSON.parse('{"id":"system-basicfun/basic-services-kit/pasteboard/native-use-pasteboard/native-use-pasteboard","title":"使用剪贴板进行复制粘贴 (C/C++)","description":"场景介绍","source":"@site/docs/system-basicfun/basic-services-kit/pasteboard/native-use-pasteboard/native-use-pasteboard.md","sourceDirName":"system-basicfun/basic-services-kit/pasteboard/native-use-pasteboard","slug":"/system-basicfun/basic-services-kit/pasteboard/native-use-pasteboard/","permalink":"/harmonyos-docs-site/system-basicfun/basic-services-kit/pasteboard/native-use-pasteboard/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"使用剪贴板进行复制粘贴 (C/C++)","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/native-use-pasteboard","kit":"system/basic-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用剪贴板进行复制粘贴","permalink":"/harmonyos-docs-site/system-basicfun/basic-services-kit/pasteboard/use-pasteboard-to-copy-and-paste/"},"next":{"title":"使用剪贴板进行延迟复制粘贴","permalink":"/harmonyos-docs-site/system-basicfun/basic-services-kit/pasteboard/pasteboard-time-lapse-copy-and-paste/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-basicfun/basic-services-kit/pasteboard/native-use-pasteboard/native-use-pasteboard.md


const frontMatter = {
	title: '使用剪贴板进行复制粘贴 (C/C++)',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/native-use-pasteboard',
	kit: 'system/basic-services',
	last_updated: '2026-04-22'
};
const contentTitle = '使用剪贴板进行复制粘贴 (C/C++)';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "基本概念",
  "id": "基本概念",
  "level": 2
}, {
  "value": "约束限制",
  "id": "约束限制",
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
        id: "使用剪贴板进行复制粘贴-cc",
        children: "使用剪贴板进行复制粘贴 (C/C++)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "剪贴板为开发者提供数据的复制粘贴能力。支持对纯文本、超文本、URI等内容的操作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-struct/capi-pasteboard-oh-pasteboardobserver/capi-pasteboard-oh-pasteboardobserver",
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "OH_PasteboardObserver"
            })
          })
        }), "：剪贴板数据变更观察者对象，用以监听剪贴板数据变更事件。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-struct/capi-pasteboard-oh-pasteboard/capi-pasteboard-oh-pasteboard",
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "OH_Pasteboard"
            })
          })
        }), "：剪贴板对象，用来进行查询、写入等操作。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfdata/capi-udmf-oh-udmfdata",
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "OH_UdmfData"
            })
          })
        }), "：统一数据对象。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束限制",
      children: "约束限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "剪贴板内容包含剪贴板系统服务元数据和应用设置的数据，总大小上限默认为128MB，PC/2in1设备可通过系统配置修改上限，有效范围为128MB~2GB。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "为保证剪贴板数据的准确性，同一时间只能支持一个复制操作。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["当前支持的数据类型：纯文本类型(OH_UdsPlainText)、超文本标记语言类型(OH_UdsHtml)、文件Uri类型(OH_UdsFileUri)、像素图片类型(OH_UdsPixelMap)、超链接类型(OH_UdsHyperlink)、桌面图标类型(OH_UdsAppItem)、自定义类型。ArkTS接口与NDK接口支持数据类型不完全一致，使用时须匹配接口支持类型，详情见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-basicfun/basic-services-kit/pasteboard/use-pasteboard-to-copy-and-paste#arkts%E6%8E%A5%E5%8F%A3%E4%B8%8Endk%E6%8E%A5%E5%8F%A3%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B%E5%AF%B9%E5%BA%94%E5%85%B3%E7%B3%BB",
          children: "ArkTS接口与NDK接口数据类型对应关系"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "自定义类型数据在复制粘贴时，指定的类型名称不能和已有的类型名称重复。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["API version 12及之后，系统为提升用户隐私安全保护能力，剪贴板读取接口增加", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-basicfun/basic-services-kit/pasteboard/get-pastedata-permission-guidelines",
          children: "权限管控"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["API version 12中新增的复制、粘贴接口", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/data-file-processing-arkts/js-apis-pasteboard/js-apis-pasteboard#setunifieddata12",
          children: "setUnifiedData"
        }), "/", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/data-file-processing-arkts/js-apis-pasteboard/js-apis-pasteboard#getunifieddata12",
          children: "getUnifiedData"
        }), "与本文档中的复制、粘贴接口", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-headerfile/capi-oh-pasteboard-h/capi-oh-pasteboard-h#oh_pasteboard_setdata",
          children: "OH_Pasteboard_SetData"
        }), "/", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-headerfile/capi-oh-pasteboard-h/capi-oh-pasteboard-h#oh_pasteboard_getdata",
          children: "OH_Pasteboard_GetData"
        }), "当前相互独立，进行写入、读取操作时请使用对应配套接口。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["详细接口见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-module/capi-pasteboard/capi-pasteboard",
        children: "Pasteboard文档"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_PasteboardObserver* OH_PasteboardObserver_Create()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个剪贴板数据变更观察者对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_PasteboardObserver_Destroy(OH_PasteboardObserver* observer)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁剪贴板数据变更观察者对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int OH_PasteboardObserver_SetData(OH_PasteboardObserver* observer, void* context, const Pasteboard_Notify callback, const Pasteboard_Finalize finalize)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将剪贴板变更回调函数设置到剪贴板数据变更观察者对象中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Pasteboard* OH_Pasteboard_Create()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个剪贴板实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void OH_Pasteboard_Destroy(OH_Pasteboard* pasteboard)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁剪贴板实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int OH_Pasteboard_Subscribe(OH_Pasteboard* pasteboard, int type, const OH_PasteboardObserver* observer)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "订阅剪贴板的数据变更。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int OH_Pasteboard_Unsubscribe(OH_Pasteboard* pasteboard, int type, const OH_PasteboardObserver* observer)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消对剪贴板数据变更的订阅。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bool OH_Pasteboard_IsRemoteData(OH_Pasteboard* pasteboard)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断剪贴板中的数据是否来自远端设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int OH_Pasteboard_GetDataSource(OH_Pasteboard* pasteboard, char* source, unsigned int len)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取剪贴板中数据的数据源。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bool OH_Pasteboard_HasType(OH_Pasteboard* pasteboard, const char* type)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断剪贴板中是否有指定类型的数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bool OH_Pasteboard_HasData(OH_Pasteboard* pasteboard)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "检查剪贴板中是否有数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_UdmfData* OH_Pasteboard_GetData(OH_Pasteboard* pasteboard, int* status)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取剪贴板中的数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int OH_Pasteboard_SetData(OH_Pasteboard* pasteboard, OH_UdmfData* data)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "向剪贴板中写入数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int OH_Pasteboard_ClearData(OH_Pasteboard* pasteboard)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "清空剪贴板中的数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void (*Pasteboard_Notify)(void* context, Pasteboard_NotifyType type)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "剪贴板中数据变更回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void (*Pasteboard_Finalize)(void* context)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "剪贴板数据变更观察者对象销毁时，释放context上下文资源。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "添加动态链接库。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "# CMakeLists.txt中添加以下lib\nlibudmf.so\nlibpasteboard.so\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "引用头文件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include <cstdio>\n#include <cstring>\n#include <hilog/log.h>\n#include <database/pasteboard/oh_pasteboard.h>\n#include <database/udmf/udmf.h>\n#include <database/udmf/uds.h>\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "定义剪贴板变化监听的回调函数。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 定义剪贴板数据内容变更时的通知回调函数\nstatic void PasteboardNotifyImpl2(void* context, Pasteboard_NotifyType type)\n{\n    OH_LOG_INFO(LOG_APP, \"Pasteboard_NotifyType, type: %d\", type);\n}\n// 定义剪贴板数据变更观察者对象销毁时的通知回调函数\nstatic void PasteboardFinalizeImpl2(void* context)\n{\n    OH_LOG_INFO(LOG_APP, \"callback: Pasteboard_Finalize\");\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "订阅剪贴板变化。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "static void PasteboardTestObserver()\n{\n    // 1. 创建一个剪贴板实例\n    OH_Pasteboard* pasteboard = OH_Pasteboard_Create();\n    // 2. 创建一个剪贴板数据变更观察者实例\n    OH_PasteboardObserver* observer = OH_PasteboardObserver_Create();\n    // 3. 将两个回调函数设置到观察者实例\n    OH_PasteboardObserver_SetData(observer, (void*)pasteboard, PasteboardNotifyImpl2, PasteboardFinalizeImpl2);\n    // 4. 设置对剪贴板本端数据变化的订阅\n    OH_Pasteboard_Subscribe(pasteboard, NOTIFY_LOCAL_DATA_CHANGE, observer);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "向剪贴板写入数据。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "static napi_value NAPI_Pasteboard_set(napi_env env, napi_callback_info info)\n{\n    napi_value args[1];\n    size_t argc = 1;\n    napi_status status = napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);\n    char text[256];\n    size_t value0Size;\n    status = napi_get_value_string_utf8(env, args[0], text, sizeof(text), &value0Size);\n\n    // 1. 创建一个剪贴板实例\n    OH_Pasteboard* pasteboard = OH_Pasteboard_Create();\n    if (pasteboard == nullptr) {\n        OH_LOG_INFO(LOG_APP, \"Failed to create pasteboard instance.\");\n    };\n    // 2. 创建OH_UdmfRecord对象，并向OH_UdmfRecord中添加文本类型数据\n    OH_UdsPlainText* udsPlainText = OH_UdsPlainText_Create();\n    OH_UdsPlainText_SetContent(udsPlainText, text);\n    OH_UdsHtml* udsHtml = OH_UdsHtml_Create();\n    OH_UdsHtml_SetContent(udsHtml, \"hello world\");\n    OH_UdmfRecord* record = OH_UdmfRecord_Create();\n    OH_UdmfRecord_AddPlainText(record, udsPlainText);\n    OH_UdmfRecord_AddHtml(record, udsHtml);\n    // 3. 创建OH_UdmfData对象，并向OH_UdmfData中添加OH_UdmfRecord\n    OH_UdmfData* data = OH_UdmfData_Create();\n    OH_UdmfData_AddRecord(data, record);\n    // 4. 将数据写入剪贴板\n    OH_Pasteboard_SetData(pasteboard, data);\n    // 5. 使用完销毁指针\n    OH_UdsPlainText_Destroy(udsPlainText);\n    OH_UdsHtml_Destroy(udsHtml);\n    OH_UdmfRecord_Destroy(record);\n    OH_UdmfData_Destroy(data);\n    OH_Pasteboard_Destroy(pasteboard);\n    // ...\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "从剪贴板读取数据。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "static napi_value NAPI_Pasteboard_get(napi_env env, napi_callback_info info)\n{\n    // 1. 创建一个剪贴板实例\n    OH_Pasteboard* pasteboard = OH_Pasteboard_Create();\n    if (pasteboard == nullptr) {\n        OH_LOG_INFO(LOG_APP, \"Failed to create pasteboard instance.\");\n    };\n    // 2. 判断剪贴板中是否有文本类型数据\n    bool hasPlainTextData = OH_Pasteboard_HasType(pasteboard, \"text/plain\");\n    if (hasPlainTextData) {\n        // 3. 从剪贴板中获取统一类型数据OH_UdmfData\n        int ret = 0;\n        OH_UdmfData* udmfData = OH_Pasteboard_GetData(pasteboard, &ret);\n        if (udmfData == nullptr) {\n            OH_LOG_INFO(LOG_APP, \"Failed to get data from pasteboard.\");\n        };\n        // 4. 从OH_UdmfData中获取第一个数据记录\n        OH_UdmfRecord* record = OH_UdmfData_GetRecord(udmfData, 0);\n        if (record == nullptr) {\n            OH_LOG_INFO(LOG_APP, \"Failed to get record from udmfData.\");\n        };\n        // 5. 从数据记录中获取文本数据内容\n        OH_UdsPlainText* plainText = OH_UdsPlainText_Create();\n        if (plainText == nullptr) {\n            OH_LOG_INFO(LOG_APP, \"Failed to create plain text object.\");\n        };\n        OH_UdmfRecord_GetPlainText(record, plainText);\n        const char* content = OH_UdsPlainText_GetContent(plainText);\n        if (content == nullptr) {\n            OH_LOG_INFO(LOG_APP, \"Failed to get content from plain text.\");\n        }\n        napi_value result;\n        napi_create_string_utf8(env, content, strlen(content), &result);\n        // 6. 使用完销毁指针\n        OH_UdsPlainText_Destroy(plainText);\n        OH_UdmfRecord_Destroy(record);\n        return result;\n    } else {\n        OH_LOG_INFO(LOG_APP, \"No plain text data in pasteboard.\");\n    }\n    OH_Pasteboard_Destroy(pasteboard);\n}\n"
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