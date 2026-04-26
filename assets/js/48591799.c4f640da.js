"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["525656"], {
478569(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_basicfun_basic_services_kit_pasteboard_pasteboard_time_lapse_copy_and_paste_pasteboard_time_lapse_copy_and_paste_md_485_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-basicfun-basic-services-kit-pasteboard-pasteboard-time-lapse-copy-and-paste-pasteboard-time-lapse-copy-and-paste-md-485.json
var site_docs_system_basicfun_basic_services_kit_pasteboard_pasteboard_time_lapse_copy_and_paste_pasteboard_time_lapse_copy_and_paste_md_485_namespaceObject = JSON.parse('{"id":"system-basicfun/basic-services-kit/pasteboard/pasteboard-time-lapse-copy-and-paste/pasteboard-time-lapse-copy-and-paste","title":"使用剪贴板进行延迟复制粘贴","description":"场景介绍","source":"@site/docs/system-basicfun/basic-services-kit/pasteboard/pasteboard-time-lapse-copy-and-paste/pasteboard-time-lapse-copy-and-paste.md","sourceDirName":"system-basicfun/basic-services-kit/pasteboard/pasteboard-time-lapse-copy-and-paste","slug":"/system-basicfun/basic-services-kit/pasteboard/pasteboard-time-lapse-copy-and-paste/","permalink":"/harmonyos-docs-site/system-basicfun/basic-services-kit/pasteboard/pasteboard-time-lapse-copy-and-paste/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"使用剪贴板进行延迟复制粘贴","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/pasteboard-time-lapse-copy-and-paste","kit":"system/basic-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用剪贴板进行复制粘贴 (C/C++)","permalink":"/harmonyos-docs-site/system-basicfun/basic-services-kit/pasteboard/native-use-pasteboard/"},"next":{"title":"应用文件上传下载","permalink":"/harmonyos-docs-site/system-basicfun/basic-services-kit/upload-download/app-file-upload-download/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-basicfun/basic-services-kit/pasteboard/pasteboard-time-lapse-copy-and-paste/pasteboard-time-lapse-copy-and-paste.md


const frontMatter = {
	title: '使用剪贴板进行延迟复制粘贴',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/pasteboard-time-lapse-copy-and-paste',
	kit: 'system/basic-services',
	last_updated: '2026-04-22'
};
const contentTitle = '使用剪贴板进行延迟复制粘贴';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "约束限制",
  "id": "约束限制",
  "level": 2
}, {
  "value": "使用基于Record级别的延迟复制粘贴",
  "id": "使用基于record级别的延迟复制粘贴",
  "level": 2
}, {
  "value": "接口说明",
  "id": "接口说明",
  "level": 3
}, {
  "value": "开发步骤",
  "id": "开发步骤",
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
        id: "使用剪贴板进行延迟复制粘贴",
        children: "使用剪贴板进行延迟复制粘贴"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/data-file-processing-arkts/js-apis-pasteboard/js-apis-pasteboard",
        children: "@ohos.pasteboard"
      }), "主要提供管理系统剪贴板的能力，为系统复制、粘贴功能提供支持。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "反复执行复制操作时，剪贴板缓存中会存储多余数据从而导致内存增加，为了优化内存以及后续支持指定数据类型粘贴，剪贴板提供了延迟复制粘贴的功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用户复制使用延迟复制技术的应用内的数据时，该条真实数据不会立即写入剪贴板服务的缓存中，而是等需要粘贴时，再从应用获取数据。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束限制",
      children: "约束限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "剪贴板内容包含剪贴板系统服务元数据和应用设置的数据，总大小上限默认为128MB，PC/2in1设备可通过系统配置修改上限，有效范围为128MB~2GB。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "NDK接口仅支持Record级别的延迟复制粘贴。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当复制的数据量较小且准备数据所需时间不会影响用户体验时，不建议应用程序使用延迟复制功能，推荐将数据直接写入剪贴板。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用基于record级别的延迟复制粘贴",
      children: "使用基于Record级别的延迟复制粘贴"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本方案可以在粘贴前查询数据type信息，应用可以据此决定是否向剪贴板请求数据，因此建议使用本方案实现延迟复制功能。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 21开始，应用退出不仅可以调用延迟复制接口", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-headerfile/capi-oh-pasteboard-h/capi-oh-pasteboard-h#oh_pasteboard_setdata",
        children: "OH_Pasteboard_SetData"
      }), "主动提交所有复制数据，还可以使用同步延迟数据接口", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-headerfile/capi-oh-pasteboard-h/capi-oh-pasteboard-h#oh_pasteboard_syncdelayeddataasync",
        children: "OH_Pasteboard_SyncDelayedDataAsync"
      }), "通知剪贴板获取全量数据。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["当应用使用延迟复制功能复制时，仅将应用支持的数据类型写入剪贴板。应用应在退出时，重新调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-headerfile/capi-oh-pasteboard-h/capi-oh-pasteboard-h#oh_pasteboard_setdata",
          children: "OH_Pasteboard_SetData"
        }), "接口主动提交所有复制数据或调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-headerfile/capi-oh-pasteboard-h/capi-oh-pasteboard-h#oh_pasteboard_syncdelayeddataasync",
          children: "OH_Pasteboard_SyncDelayedDataAsync"
        }), "接口通知剪贴板获取全量数据，等待数据同步完成再继续退出，否则可能导致其他应用粘贴获取不到数据。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-headerfile/capi-oh-pasteboard-h/capi-oh-pasteboard-h#oh_pasteboard_syncdelayeddataasync",
          children: "OH_Pasteboard_SyncDelayedDataAsync"
        }), "接口会延长退出过程，建议应用在复制数据时直接设置数据到剪贴板，而不是调用延迟复制接口", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-udmf-h/capi-udmf-h#oh_udmfrecordprovider_setdata",
          children: "OH_UdmfRecordProvider_SetData"
        }), "和同步延迟数据接口", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-headerfile/capi-oh-pasteboard-h/capi-oh-pasteboard-h#oh_pasteboard_syncdelayeddataasync",
          children: "OH_Pasteboard_SyncDelayedDataAsync"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "延迟复制场景应用异常退出时，无法触发应用退出延迟数据同步流程，会导致其他应用粘贴时获取不到数据。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["详细接口见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-module/capi-pasteboard/capi-pasteboard",
        children: "Pasteboard文档"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-module/capi-udmf/capi-udmf",
        children: "UDMF接口文档"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_UdmfRecordProvider* OH_UdmfRecordProvider_Create()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个指向统一数据提供者的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int OH_UdmfRecordProvider_SetData(OH_UdmfRecordProvider* provider, void* context, const OH_UdmfRecordProvider_GetData callback, const UdmfData_Finalize finalize)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置统一数据提供者的回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int OH_UdmfRecord_SetProvider(OH_UdmfRecord* pThis, const char* const* types, unsigned int count, OH_UdmfRecordProvider* provider)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将统一数据提供者配置到OH_UdmfRecord中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int OH_Pasteboard_SetData(OH_Pasteboard* pasteboard, OH_UdmfData* data)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "向剪贴板中写入数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_UdmfData * OH_Pasteboard_GetData(OH_Pasteboard* pasteboard, int* status)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取剪贴板中的数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_UdmfRecord** OH_UdmfData_GetRecords(OH_UdmfData* pThis, unsigned int* count)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取OH_UdmfData中全部的数据记录。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void OH_Pasteboard_SyncDelayedDataAsync(OH_Pasteboard* pasteboard, void (*callback)(int errorCode))"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["通知剪贴板从应用同步所有延迟数据。 当应用使用延迟复制功能复制时，仅将应用支持的数据类型写入剪贴板。应用应在退出时，重新调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-headerfile/capi-oh-pasteboard-h/capi-oh-pasteboard-h#oh_pasteboard_setdata",
              children: "OH_Pasteboard_SetData"
            }), "接口主动提交所有复制数据或调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-headerfile/capi-oh-pasteboard-h/capi-oh-pasteboard-h#oh_pasteboard_syncdelayeddataasync",
              children: "OH_Pasteboard_SyncDelayedDataAsync"
            }), "接口通知剪贴板获取全量数据，等待数据同步完成再继续退出，否则可能导致其他应用粘贴获取不到数据。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下面以纯文本类型和HTML类型数据为例，说明如何向剪贴板服务设置延迟复制数据。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为了代码可读性，代码中省略了各个步骤操作结果的校验，实际开发中需要确认每次调用的成功。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "引用头文件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include <cstring>\n#include <hilog/log.h>\n#include <database/pasteboard/oh_pasteboard.h>\n#include <database/udmf/udmf.h>\n#include <database/udmf/uds.h>\n#include <database/udmf/udmf_meta.h>\n#include <accesstoken/ability_access_control.h>\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "定义OH_UdmfRecordProvider的数据提供函数和实例注销回调函数。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 1. 获取数据时触发的提供剪贴板数据的回调函数。\nvoid* GetDataCallback(void* context, const char* type)\n{\n    // 纯文本类型\n    if (memcmp(type, UDMF_META_PLAIN_TEXT, sizeof(UDMF_META_PLAIN_TEXT) - 1) == 0) {\n        // 创建纯文本类型的Uds对象。\n        OH_UdsPlainText* udsText = OH_UdsPlainText_Create();\n        // 设置纯文本内容。\n        OH_UdsPlainText_SetContent(udsText, \"hello world\");\n        return udsText;\n    } else if (strcmp(type, UDMF_META_HTML) == 0) {\n        // 创建HTML类型的Uds对象。\n        OH_UdsHtml* udsHtml = OH_UdsHtml_Create();\n        // 设置HTML内容。\n        OH_UdsHtml_SetContent(udsHtml, \"<div>hello world</div>\");\n        return udsHtml;\n    }\n    return nullptr;\n}\n// 2. OH_UdmfRecordProvider销毁时触发的回调函数。\nvoid ProviderFinalizeCallback(void* context)\n{\n    OH_LOG_INFO(LOG_APP, \"OH_UdmfRecordProvider finalize.\");\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "定义OH_Pasteboard_SyncDelayedDataAsync的回调函数。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 3. 定义应用退出时调用延迟同步接口触发的回调函数。\nvoid SyncCallback(int errorCode)\n{\n    // 继续退出\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在剪贴板中准备延迟复制数据。此步骤完成后纯文本类型数据与HTML类型数据并未真正写入剪贴板服务，只有当数据使用者从OH_UdmfRecord中获取OH_UdsPlainText或OH_UdsHtml时，才会触发上文定义的GetDataCallback数据提供函数，从中得到数据。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "OH_Pasteboard* CreateAndSetPasteboardData()\n{\n    // 4. 创建OH_UdmfRecord对象。\n    OH_UdmfRecord* record = OH_UdmfRecord_Create();\n    // 5. 创建OH_UdmfRecordProvider对象，并设置用于提供延迟数据、析构的两个回调函数。\n    OH_UdmfRecordProvider* provider = OH_UdmfRecordProvider_Create();\n    OH_UdmfRecordProvider_SetData(provider, (void *)record, GetDataCallback, ProviderFinalizeCallback);\n    // 6. 将provider绑定到record，并设置支持的数据类型。\n    #define TYPE_COUNT 2\n    const char* types[TYPE_COUNT] = {UDMF_META_PLAIN_TEXT, UDMF_META_HTML};\n    OH_UdmfRecord_SetProvider(record, types, TYPE_COUNT, provider);\n    // 7. 创建OH_UdmfData对象，并向OH_UdmfData中添加OH_UdmfRecord。\n    OH_UdmfData* setData = OH_UdmfData_Create();\n    if (setData != nullptr) {\n        OH_UdmfData_AddRecord(setData, record);\n    }\n    // 8. 创建OH_Pasteboard对象，将数据写入剪贴板中。\n    OH_Pasteboard* pasteboard = OH_Pasteboard_Create();\n    if (setData != nullptr) {\n        OH_Pasteboard_SetData(pasteboard, setData);\n    }\n    OH_UdmfRecordProvider_Destroy(provider);\n    OH_UdmfRecord_Destroy(record);\n    OH_UdmfData_Destroy(setData);\n    return pasteboard;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "从剪贴板获取延迟复制数据。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "void ProcessRecordType(OH_UdmfRecord* record, const char* recordType)\n{\n    OH_UdsPlainText* udsText = nullptr;\n    OH_UdsHtml* udsHtml = nullptr;\n    if (strcmp(recordType, UDMF_META_PLAIN_TEXT) == 0) {\n        // 创建纯文本类型的Uds对象\n        udsText = OH_UdsPlainText_Create();\n        if (udsText != nullptr) {\n            // 从record中获取纯文本类型的Uds对象\n            OH_UdmfRecord_GetPlainText(record, udsText);\n            // 从Uds对象中获取内容\n            const char* content = OH_UdsPlainText_GetContent(udsText);\n        } else if (strcmp(recordType, UDMF_META_HTML) == 0) {\n            // 创建HTML类型的Uds对象\n            udsHtml = OH_UdsHtml_Create();\n            if (udsHtml != nullptr) {\n                // 从record中获取HTML类型的Uds对象\n                OH_UdmfRecord_GetHtml(record, udsHtml);\n                // 从Uds对象中获取内容\n                const char* content = OH_UdsHtml_GetContent(udsHtml);\n            }\n        }\n    }\n}\nvoid ProcessRecord(OH_UdmfRecord* record)\n{\n    // 13. 查询OH_UdmfRecord中的数据类型。\n    unsigned typeCount = 0;\n    char** recordTypes = OH_UdmfRecord_GetTypes(record, &typeCount);\n    // 14. 遍历数据类型。\n    for (unsigned int typeIndex = 0; typeIndex < typeCount; ++typeIndex) {\n        const char* recordType = recordTypes[typeIndex];\n        ProcessRecordType(record, recordType);\n    }\n}\n\nstatic napi_value NAPI_Pasteboard_time(napi_env env, napi_callback_info info)\n{\n    OH_Pasteboard* pasteboard = CreateAndSetPasteboardData();\n    // 9. 记录当前的剪贴板数据变化次数。\n    uint32_t changeCount = OH_Pasteboard_GetChangeCount(pasteboard);\n    // 10. 从剪贴板获取OH_UdmfData。\n    int status = -1;\n    bool hasPermission = OH_AT_CheckSelfPermission(\"ohos.permission.READ_PASTEBOARD\");\n    if (!hasPermission) {\n        OH_LOG_ERROR(LOG_APP, \"No Permission READ_PASTEBOARD\");\n    };\n    OH_UdmfData* getData = OH_Pasteboard_GetData(pasteboard, &status);\n    if (getData == nullptr) {\n        // 处理错误情况，清理资源\n        OH_LOG_ERROR(LOG_APP, \"Failed to get data from pasteboard, status: %d\\n\", status);\n    }\n    // 11. 获取OH_UdmfData中的所有OH_UdmfRecord。\n    unsigned int recordCount = 0;\n    OH_UdmfRecord** getRecords = OH_UdmfData_GetRecords(getData, &recordCount);\n    OH_UdsPlainText* udsText = nullptr;\n    OH_UdsHtml* udsHtml = nullptr;\n    // 12. 遍历OH_UdmfRecord。\n    for (unsigned int recordIndex = 0; recordIndex < recordCount; ++recordIndex) {\n        OH_UdmfRecord* record = getRecords[recordIndex];\n        ProcessRecord(record);\n    }\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用退出时，如果剪贴板内的数据没有变化，则通知剪贴板获取全量数据，等待回调完成再继续退出，否则可能导致其他应用粘贴获取不到数据。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 15. 查询剪贴板内的数据是否变化。\nuint32_t newChangeCount = OH_Pasteboard_GetChangeCount(pasteboard);\nif (newChangeCount == changeCount) {\n    // 16. 通知剪贴板获取全量数据。\n    OH_Pasteboard_SyncDelayedDataAsync(pasteboard, SyncCallback);\n    // 需要等待SyncCallback回调完成再继续退出\n} else {\n    // 继续退出\n    OH_LOG_INFO(LOG_APP, \"No newChangeCount in pasteboard.\");\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用完毕后需要及时释放相关对象的内存。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "    OH_UdsPlainText_Destroy(udsText);\n    OH_UdsHtml_Destroy(udsHtml);\n    OH_UdmfData_Destroy(getData);\n    OH_Pasteboard_Destroy(pasteboard);\n}\n"
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