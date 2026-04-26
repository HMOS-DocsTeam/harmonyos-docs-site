"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["417882"], {
405009(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_system_basicfun_api_basic_services_api_basic_services_c_basic_services_headerfile_capi_oh_pasteboard_h_capi_oh_pasteboard_h_md_577_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-system-basicfun-api-basic-services-api-basic-services-c-basic-services-headerfile-capi-oh-pasteboard-h-capi-oh-pasteboard-h-md-577.json
var site_docs_ref_system_basicfun_api_basic_services_api_basic_services_c_basic_services_headerfile_capi_oh_pasteboard_h_capi_oh_pasteboard_h_md_577_namespaceObject = JSON.parse('{"id":"system-basicfun-api/basic-services-api/basic-services-c/basic-services-headerfile/capi-oh-pasteboard-h/capi-oh-pasteboard-h","title":"oh_pasteboard.h","description":"概述","source":"@site/docs-ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-headerfile/capi-oh-pasteboard-h/capi-oh-pasteboard-h.md","sourceDirName":"system-basicfun-api/basic-services-api/basic-services-c/basic-services-headerfile/capi-oh-pasteboard-h","slug":"/system-basicfun-api/basic-services-api/basic-services-c/basic-services-headerfile/capi-oh-pasteboard-h/capi-oh-pasteboard-h","permalink":"/harmonyos-docs-site/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-headerfile/capi-oh-pasteboard-h/capi-oh-pasteboard-h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"oh_pasteboard.h","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-pasteboard-h","kit":"系统","last_updated":"2026-04-22","slug":"capi-oh-pasteboard-h"},"sidebar":"ref","previous":{"title":"oh_commonevent_support.h","permalink":"/harmonyos-docs-site/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-headerfile/capi-oh-commonevent-support-h/capi-oh-commonevent-support-h"},"next":{"title":"oh_pasteboard_err_code.h","permalink":"/harmonyos-docs-site/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-headerfile/capi-oh-pasteboard-err-code-h/capi-oh-pasteboard-err-code-h"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-headerfile/capi-oh-pasteboard-h/capi-oh-pasteboard-h.md


const frontMatter = {
	title: 'oh_pasteboard.h',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-pasteboard-h',
	kit: '系统',
	last_updated: '2026-04-22',
	slug: 'capi-oh-pasteboard-h'
};
const contentTitle = 'oh_pasteboard.h';

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
  "value": "宏定义",
  "id": "宏定义",
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
  "value": "宏定义说明",
  "id": "宏定义说明",
  "level": 2
}, {
  "value": "PASTEBOARD_MIMETYPE_TEXT_PLAIN",
  "id": "pasteboard_mimetype_text_plain",
  "level": 3
}, {
  "value": "PASTEBOARD_MIMETYPE_TEXT_URI",
  "id": "pasteboard_mimetype_text_uri",
  "level": 3
}, {
  "value": "PASTEBOARD_MIMETYPE_TEXT_HTML",
  "id": "pasteboard_mimetype_text_html",
  "level": 3
}, {
  "value": "PASTEBOARD_MIMETYPE_PIXELMAP",
  "id": "pasteboard_mimetype_pixelmap",
  "level": 3
}, {
  "value": "PASTEBOARD_MIMETYPE_TEXT_WANT",
  "id": "pasteboard_mimetype_text_want",
  "level": 3
}, {
  "value": "枚举类型说明",
  "id": "枚举类型说明",
  "level": 2
}, {
  "value": "Pasteboard_NotifyType",
  "id": "pasteboard_notifytype",
  "level": 3
}, {
  "value": "Pasteboard_FileConflictOptions",
  "id": "pasteboard_fileconflictoptions",
  "level": 3
}, {
  "value": "Pasteboard_ProgressIndicator",
  "id": "pasteboard_progressindicator",
  "level": 3
}, {
  "value": "函数说明",
  "id": "函数说明",
  "level": 2
}, {
  "value": "OH_Pasteboard_ProgressListener()",
  "id": "oh_pasteboard_progresslistener",
  "level": 3
}, {
  "value": "Pasteboard_Notify()",
  "id": "pasteboard_notify",
  "level": 3
}, {
  "value": "Pasteboard_Finalize()",
  "id": "pasteboard_finalize",
  "level": 3
}, {
  "value": "OH_PasteboardObserver_Create()",
  "id": "oh_pasteboardobserver_create",
  "level": 3
}, {
  "value": "OH_PasteboardObserver_Destroy()",
  "id": "oh_pasteboardobserver_destroy",
  "level": 3
}, {
  "value": "OH_PasteboardObserver_SetData()",
  "id": "oh_pasteboardobserver_setdata",
  "level": 3
}, {
  "value": "OH_Pasteboard_Create()",
  "id": "oh_pasteboard_create",
  "level": 3
}, {
  "value": "OH_Pasteboard_Destroy()",
  "id": "oh_pasteboard_destroy",
  "level": 3
}, {
  "value": "OH_Pasteboard_Subscribe()",
  "id": "oh_pasteboard_subscribe",
  "level": 3
}, {
  "value": "OH_Pasteboard_Unsubscribe()",
  "id": "oh_pasteboard_unsubscribe",
  "level": 3
}, {
  "value": "OH_Pasteboard_IsRemoteData()",
  "id": "oh_pasteboard_isremotedata",
  "level": 3
}, {
  "value": "OH_Pasteboard_GetDataSource()",
  "id": "oh_pasteboard_getdatasource",
  "level": 3
}, {
  "value": "OH_Pasteboard_HasType()",
  "id": "oh_pasteboard_hastype",
  "level": 3
}, {
  "value": "OH_Pasteboard_HasData()",
  "id": "oh_pasteboard_hasdata",
  "level": 3
}, {
  "value": "OH_Pasteboard_GetData()",
  "id": "oh_pasteboard_getdata",
  "level": 3
}, {
  "value": "OH_Pasteboard_SetData()",
  "id": "oh_pasteboard_setdata",
  "level": 3
}, {
  "value": "OH_Pasteboard_ClearData()",
  "id": "oh_pasteboard_cleardata",
  "level": 3
}, {
  "value": "OH_Pasteboard_GetMimeTypes()",
  "id": "oh_pasteboard_getmimetypes",
  "level": 3
}, {
  "value": "OH_Pasteboard_GetDataParams_Create()",
  "id": "oh_pasteboard_getdataparams_create",
  "level": 3
}, {
  "value": "OH_Pasteboard_GetDataParams_Destroy()",
  "id": "oh_pasteboard_getdataparams_destroy",
  "level": 3
}, {
  "value": "OH_Pasteboard_GetDataParams_SetProgressIndicator()",
  "id": "oh_pasteboard_getdataparams_setprogressindicator",
  "level": 3
}, {
  "value": "OH_Pasteboard_GetDataParams_SetDestUri()",
  "id": "oh_pasteboard_getdataparams_setdesturi",
  "level": 3
}, {
  "value": "OH_Pasteboard_GetDataParams_SetFileConflictOptions()",
  "id": "oh_pasteboard_getdataparams_setfileconflictoptions",
  "level": 3
}, {
  "value": "OH_Pasteboard_GetDataParams_SetProgressListener()",
  "id": "oh_pasteboard_getdataparams_setprogresslistener",
  "level": 3
}, {
  "value": "OH_Pasteboard_ProgressInfo_GetProgress()",
  "id": "oh_pasteboard_progressinfo_getprogress",
  "level": 3
}, {
  "value": "OH_Pasteboard_ProgressCancel()",
  "id": "oh_pasteboard_progresscancel",
  "level": 3
}, {
  "value": "OH_Pasteboard_GetDataWithProgress()",
  "id": "oh_pasteboard_getdatawithprogress",
  "level": 3
}, {
  "value": "OH_Pasteboard_GetChangeCount()",
  "id": "oh_pasteboard_getchangecount",
  "level": 3
}, {
  "value": "OH_Pasteboard_SyncDelayedDataAsync()",
  "id": "oh_pasteboard_syncdelayeddataasync",
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
        id: "oh_pasteboardh",
        children: "oh_pasteboard.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "提供访问系统剪贴板的接口、数据结构、枚举类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <database/pasteboard/oh_pasteboard.h>"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "库："
        })
      }), " libpasteboard.so"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.MiscServices.Pasteboard"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "相关模块："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-module/capi-pasteboard/capi-pasteboard",
        children: "Pasteboard"
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
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-struct/capi-pasteboard-progressinfo/capi-pasteboard-progressinfo",
              children: "Pasteboard_ProgressInfo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pasteboard_ProgressInfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义进度上报的数据结构。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-struct/capi-pasteboard-getdataparams/capi-pasteboard-getdataparams",
              children: "Pasteboard_GetDataParams"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pasteboard_GetDataParams"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示从剪贴板获取粘贴数据和进度时需要写入的参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-struct/capi-pasteboard-oh-pasteboardobserver/capi-pasteboard-oh-pasteboardobserver",
              children: "OH_PasteboardObserver"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_PasteboardObserver"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义剪贴板数据变更观察者。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-struct/capi-pasteboard-oh-pasteboard/capi-pasteboard-oh-pasteboard",
              children: "OH_Pasteboard"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Pasteboard"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义剪贴板对象，用以操作系统剪贴板。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "宏定义",
      children: "宏定义"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#pasteboard_mimetype_text_plain",
              children: "PASTEBOARD_MIMETYPE_TEXT_PLAIN"
            }), " \"text/plain\""]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "纯文本类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#pasteboard_mimetype_text_uri",
              children: "PASTEBOARD_MIMETYPE_TEXT_URI"
            }), " \"text/uri\""]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "URI类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#pasteboard_mimetype_text_html",
              children: "PASTEBOARD_MIMETYPE_TEXT_HTML"
            }), " \"text/html\""]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTML类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#pasteboard_mimetype_pixelmap",
              children: "PASTEBOARD_MIMETYPE_PIXELMAP"
            }), " \"pixelMap\""]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "pixelMap类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#pasteboard_mimetype_text_want",
              children: "PASTEBOARD_MIMETYPE_TEXT_WANT"
            }), " \"text/want\""]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "want类型。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "枚举",
      children: "枚举"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "#pasteboard_notifytype",
              children: "Pasteboard_NotifyType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pasteboard_NotifyType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "剪贴板的数据变更类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#pasteboard_fileconflictoptions",
              children: "Pasteboard_FileConflictOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pasteboard_FileConflictOptions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义文件拷贝冲突时的选项。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#pasteboard_progressindicator",
              children: "Pasteboard_ProgressIndicator"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pasteboard_ProgressIndicator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义进度条指示选项，可选择是否采用系统默认进度显示。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "函数",
      children: "函数"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "#oh_pasteboard_progresslistener",
              children: "typedef void (*OH_Pasteboard_ProgressListener)(Pasteboard_ProgressInfo* progressInfo)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Pasteboard_ProgressListener"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于在不使用系统默认进度显示时，通知应用拷贝粘贴任务进度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#pasteboard_notify",
              children: "typedef void (*Pasteboard_Notify)(void* context, Pasteboard_NotifyType type)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pasteboard_Notify"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义剪贴板内容变更时触发的回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#pasteboard_finalize",
              children: "typedef void (*Pasteboard_Finalize)(void* context)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pasteboard_Finalize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义用于释放上下文的回调函数，剪贴板数据变更观察者对象销毁时触发。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_pasteboardobserver_create",
              children: "OH_PasteboardObserver* OH_PasteboardObserver_Create()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建一个剪贴板数据变更观察者", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-struct/capi-pasteboard-oh-pasteboardobserver/capi-pasteboard-oh-pasteboardobserver",
              children: "OH_PasteboardObserver"
            }), "指针及实例对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_pasteboardobserver_destroy",
              children: "int OH_PasteboardObserver_Destroy(OH_PasteboardObserver* observer)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["销毁剪贴板数据变更观察者", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-struct/capi-pasteboard-oh-pasteboardobserver/capi-pasteboard-oh-pasteboardobserver",
              children: "OH_PasteboardObserver"
            }), "指针指向的实例对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_pasteboardobserver_setdata",
              children: "int OH_PasteboardObserver_SetData(OH_PasteboardObserver* observer, void* context,const Pasteboard_Notify callback, const Pasteboard_Finalize finalize)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "向剪贴板数据变更观察者设置回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_pasteboard_create",
              children: "OH_Pasteboard* OH_Pasteboard_Create()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建剪贴板", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-struct/capi-pasteboard-oh-pasteboard/capi-pasteboard-oh-pasteboard",
              children: "OH_Pasteboard"
            }), "指针及实例对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_pasteboard_destroy",
              children: "void OH_Pasteboard_Destroy(OH_Pasteboard* pasteboard)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["销毁剪贴板", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-struct/capi-pasteboard-oh-pasteboard/capi-pasteboard-oh-pasteboard",
              children: "OH_Pasteboard"
            }), "实例对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_pasteboard_subscribe",
              children: "int OH_Pasteboard_Subscribe(OH_Pasteboard* pasteboard, int type, const OH_PasteboardObserver* observer)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "订阅剪贴板的数据变更事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_pasteboard_unsubscribe",
              children: "int OH_Pasteboard_Unsubscribe(OH_Pasteboard* pasteboard, int type, const OH_PasteboardObserver* observer)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消对剪贴板数据变更事件的订阅。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_pasteboard_isremotedata",
              children: "bool OH_Pasteboard_IsRemoteData(OH_Pasteboard* pasteboard)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断剪贴板中的数据是否来自远端设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_pasteboard_getdatasource",
              children: "int OH_Pasteboard_GetDataSource(OH_Pasteboard* pasteboard, char* source, unsigned int len)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取剪贴板中数据的数据源。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_pasteboard_hastype",
              children: "bool OH_Pasteboard_HasType(OH_Pasteboard* pasteboard, const char* type)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断剪贴板中是否有指定类型的数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_pasteboard_hasdata",
              children: "bool OH_Pasteboard_HasData(OH_Pasteboard* pasteboard)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断剪贴板中是否有数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_pasteboard_getdata",
              children: "OH_UdmfData* OH_Pasteboard_GetData(OH_Pasteboard* pasteboard, int* status)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取剪贴板中的数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_pasteboard_setdata",
              children: "int OH_Pasteboard_SetData(OH_Pasteboard* pasteboard, OH_UdmfData* data)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将统一数据对象数据写入剪贴板。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_pasteboard_cleardata",
              children: "int OH_Pasteboard_ClearData(OH_Pasteboard* pasteboard)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "清空剪贴板中的数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_pasteboard_getmimetypes",
              children: "char **OH_Pasteboard_GetMimeTypes(OH_Pasteboard *pasteboard, unsigned int *count)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取剪贴板中的MIME类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_pasteboard_getdataparams_create",
              children: "Pasteboard_GetDataParams *OH_Pasteboard_GetDataParams_Create(void)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建剪贴板", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-struct/capi-pasteboard-getdataparams/capi-pasteboard-getdataparams",
              children: "Pasteboard_GetDataParams"
            }), "指针及实例对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_pasteboard_getdataparams_destroy",
              children: "void OH_Pasteboard_GetDataParams_Destroy(Pasteboard_GetDataParams* params)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["销毁剪贴板", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-struct/capi-pasteboard-getdataparams/capi-pasteboard-getdataparams",
              children: "Pasteboard_GetDataParams"
            }), "指针指向的实例对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_pasteboard_getdataparams_setprogressindicator",
              children: "void OH_Pasteboard_GetDataParams_SetProgressIndicator(Pasteboard_GetDataParams* params,Pasteboard_ProgressIndicator progressIndicator)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["向剪贴板", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-struct/capi-pasteboard-getdataparams/capi-pasteboard-getdataparams",
              children: "Pasteboard_GetDataParams"
            }), "设置进度条指示选项，可选择是否采用系统默认进度显示。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_pasteboard_getdataparams_setdesturi",
              children: "void OH_Pasteboard_GetDataParams_SetDestUri(Pasteboard_GetDataParams* params, const char* destUri, uint32_t destUriLen)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["向剪贴板", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-struct/capi-pasteboard-getdataparams/capi-pasteboard-getdataparams",
              children: "Pasteboard_GetDataParams"
            }), "设置拷贝文件时目标路径。若不支持文件处理，则不需要设置此参数；若应用涉及复杂文件处理策略或需要区分文件多路径存储，建议不设置此参数，由应用自行完成文件copy处理。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_pasteboard_getdataparams_setfileconflictoptions",
              children: "void OH_Pasteboard_GetDataParams_SetFileConflictOptions(Pasteboard_GetDataParams* params,Pasteboard_FileConflictOptions option)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["向剪贴板", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-struct/capi-pasteboard-getdataparams/capi-pasteboard-getdataparams",
              children: "Pasteboard_GetDataParams"
            }), "设置文件冲突选项。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_pasteboard_getdataparams_setprogresslistener",
              children: "void OH_Pasteboard_GetDataParams_SetProgressListener(Pasteboard_GetDataParams* params,const OH_Pasteboard_ProgressListener listener)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["向剪贴板", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-struct/capi-pasteboard-getdataparams/capi-pasteboard-getdataparams",
              children: "Pasteboard_GetDataParams"
            }), "设置进度上报回调函数。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_pasteboard_progressinfo_getprogress",
              children: "int OH_Pasteboard_ProgressInfo_GetProgress(Pasteboard_ProgressInfo* progressInfo)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-struct/capi-pasteboard-progressinfo/capi-pasteboard-progressinfo",
              children: "Pasteboard_ProgressInfo"
            }), "获取粘贴进度。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_pasteboard_progresscancel",
              children: "void OH_Pasteboard_ProgressCancel(Pasteboard_GetDataParams* params)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义取消函数，用于在获取粘贴数据时取消正在进行的粘贴动作。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_pasteboard_getdatawithprogress",
              children: "OH_UdmfData* OH_Pasteboard_GetDataWithProgress(OH_Pasteboard* pasteboard, Pasteboard_GetDataParams* params,int* status)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取剪贴板的数据以及粘贴进度，不支持对文件夹的拷贝。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_pasteboard_getchangecount",
              children: "uint32_t OH_Pasteboard_GetChangeCount(OH_Pasteboard *pasteboard)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取剪贴板内容的变化次数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_pasteboard_syncdelayeddataasync",
              children: "void OH_Pasteboard_SyncDelayedDataAsync(OH_Pasteboard* pasteboard, void (*callback)(int errorCode))"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["通知剪贴板从应用同步所有延迟数据，与延迟复制接口", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-udmf-h/capi-udmf-h#oh_udmfrecordprovider_setdata",
              children: "OH_UdmfRecordProvider_SetData"
            }), "搭配使用。当应用使用延迟复制功能复制时，仅将应用支持的数据类型写入剪贴板。应用应在退出时，重新调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_pasteboard_setdata",
              children: "OH_Pasteboard_SetData"
            }), "接口主动提交所有复制数据或调用此接口通知剪贴板获取全量数据，等待数据同步完成再继续退出，否则可能导致其他应用粘贴获取不到数据。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "宏定义说明",
      children: "宏定义说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pasteboard_mimetype_text_plain",
      children: "PASTEBOARD_MIMETYPE_TEXT_PLAIN"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#define PASTEBOARD_MIMETYPE_TEXT_PLAIN \"text/plain\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "纯文本类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 22"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pasteboard_mimetype_text_uri",
      children: "PASTEBOARD_MIMETYPE_TEXT_URI"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#define PASTEBOARD_MIMETYPE_TEXT_URI \"text/uri\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "URI类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 22"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pasteboard_mimetype_text_html",
      children: "PASTEBOARD_MIMETYPE_TEXT_HTML"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#define PASTEBOARD_MIMETYPE_TEXT_HTML \"text/html\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HTML类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 22"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pasteboard_mimetype_pixelmap",
      children: "PASTEBOARD_MIMETYPE_PIXELMAP"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#define PASTEBOARD_MIMETYPE_PIXELMAP \"pixelMap\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "pixelMap类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 22"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pasteboard_mimetype_text_want",
      children: "PASTEBOARD_MIMETYPE_TEXT_WANT"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#define PASTEBOARD_MIMETYPE_TEXT_WANT \"text/want\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "want类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 22"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "枚举类型说明",
      children: "枚举类型说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pasteboard_notifytype",
      children: "Pasteboard_NotifyType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum Pasteboard_NotifyType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "剪贴板的数据变更类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "NOTIFY_LOCAL_DATA_CHANGE = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "本地设备剪贴板数据变更。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NOTIFY_REMOTE_DATA_CHANGE = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "组网内的非本地设备剪贴板数据变更。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pasteboard_fileconflictoptions",
      children: "Pasteboard_FileConflictOptions"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum Pasteboard_FileConflictOptions\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义文件拷贝冲突时的选项。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 15"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "PASTEBOARD_OVERWRITE = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "目标路径存在同文件名时覆盖。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PASTEBOARD_SKIP = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "目标路径存在同文件名时跳过。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pasteboard_progressindicator",
      children: "Pasteboard_ProgressIndicator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum Pasteboard_ProgressIndicator\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义进度条指示选项，可选择是否采用系统默认进度显示。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 15"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "PASTEBOARD_NONE = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不采用系统默认进度显示。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PASTEBOARD_DEFAULT = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "采用系统默认进度显示。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数说明",
      children: "函数说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_pasteboard_progresslistener",
      children: "OH_Pasteboard_ProgressListener()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void (*OH_Pasteboard_ProgressListener)(Pasteboard_ProgressInfo* progressInfo)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于在不使用系统默认进度显示时，通知应用拷贝粘贴任务进度。"
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
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-struct/capi-pasteboard-progressinfo/capi-pasteboard-progressinfo",
              children: "Pasteboard_ProgressInfo"
            }), "* progressInfo"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["定义进度上报的数据结构，且仅当进度指示选项", (0,jsx_runtime.jsx)(_components.a, {
              href: "#pasteboard_progressindicator",
              children: "Pasteboard_ProgressIndicator"
            }), "设置为PASTEBOARD_NONE时才会上报此信息。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pasteboard_notify",
      children: "Pasteboard_Notify()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void (*Pasteboard_Notify)(void* context, Pasteboard_NotifyType type)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义剪贴板内容变更时触发的回调函数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
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
            children: "void* context"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["上下文信息，由函数", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-headerfile/capi-oh-pasteboard-h/capi-oh-pasteboard-h#oh_pasteboardobserver_setdata",
              children: "OH_PasteboardObserver_SetData"
            }), "传入。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-headerfile/capi-oh-pasteboard-h/capi-oh-pasteboard-h#pasteboard_notifytype",
              children: "Pasteboard_NotifyType"
            }), " type"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["数据变更的类型。详见：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-headerfile/capi-oh-pasteboard-h/capi-oh-pasteboard-h#pasteboard_notifytype",
              children: "Pasteboard_NotifyType"
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pasteboard_finalize",
      children: "Pasteboard_Finalize()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void (*Pasteboard_Finalize)(void* context)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义用于释放上下文的回调函数，剪贴板数据变更观察者对象销毁时触发。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
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
            children: "void* context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要释放的上下文指针。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_pasteboardobserver_create",
      children: "OH_PasteboardObserver_Create()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_PasteboardObserver* OH_PasteboardObserver_Create()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["创建一个剪贴板数据变更观察者", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-struct/capi-pasteboard-oh-pasteboardobserver/capi-pasteboard-oh-pasteboardobserver",
        children: "OH_PasteboardObserver"
      }), "指针及实例对象。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-struct/capi-pasteboard-oh-pasteboardobserver/capi-pasteboard-oh-pasteboardobserver",
              children: "OH_PasteboardObserver"
            }), "*"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["执行成功时返回一个指向剪贴板数据变更观察者", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-struct/capi-pasteboard-oh-pasteboardobserver/capi-pasteboard-oh-pasteboardobserver",
              children: "OH_PasteboardObserver"
            }), "实例对象的指针，否则返回空指针。  当不再需要使用指针时，请使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-headerfile/capi-oh-pasteboard-h/capi-oh-pasteboard-h#oh_pasteboardobserver_destroy",
              children: "OH_PasteboardObserver_Destroy"
            }), "销毁实例对象，否则会导致内存泄漏。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_pasteboardobserver_destroy",
      children: "OH_PasteboardObserver_Destroy()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_PasteboardObserver_Destroy(OH_PasteboardObserver* observer)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["销毁剪贴板数据变更观察者", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-struct/capi-pasteboard-oh-pasteboardobserver/capi-pasteboard-oh-pasteboardobserver",
        children: "OH_PasteboardObserver"
      }), "指针指向的实例对象。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
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
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-struct/capi-pasteboard-oh-pasteboardobserver/capi-pasteboard-oh-pasteboardobserver",
              children: "OH_PasteboardObserver"
            }), "* observer"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向剪贴板数据变更观察者", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-struct/capi-pasteboard-oh-pasteboardobserver/capi-pasteboard-oh-pasteboardobserver",
              children: "OH_PasteboardObserver"
            }), "实例的指针。"]
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
            children: "int"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回执行的错误码。错误码定义详见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-headerfile/capi-oh-pasteboard-err-code-h/capi-oh-pasteboard-err-code-h#pasteboard_errcode",
              children: "PASTEBOARD_ErrCode"
            }), "。  若返回ERR_OK，表示执行成功。  若返回ERR_INVALID_PARAMETER，表示传入了无效参数。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_pasteboardobserver_setdata",
      children: "OH_PasteboardObserver_SetData()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_PasteboardObserver_SetData(OH_PasteboardObserver* observer, void* context,const Pasteboard_Notify callback, const Pasteboard_Finalize finalize)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "向剪贴板数据变更观察者设置回调函数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
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
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-struct/capi-pasteboard-oh-pasteboardobserver/capi-pasteboard-oh-pasteboardobserver",
              children: "OH_PasteboardObserver"
            }), "* observer"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向剪贴板数据变更观察者", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-struct/capi-pasteboard-oh-pasteboardobserver/capi-pasteboard-oh-pasteboardobserver",
              children: "OH_PasteboardObserver"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void* context"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向上下文数据的指针，将作为第一个参数传入", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-headerfile/capi-oh-pasteboard-h/capi-oh-pasteboard-h#pasteboard_notify",
              children: "Pasteboard_Notify"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-headerfile/capi-oh-pasteboard-h/capi-oh-pasteboard-h#pasteboard_notify",
              children: "Pasteboard_Notify"
            }), " callback"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示数据变更回调函数。详见：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-headerfile/capi-oh-pasteboard-h/capi-oh-pasteboard-h#pasteboard_notify",
              children: "Pasteboard_Notify"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-headerfile/capi-oh-pasteboard-h/capi-oh-pasteboard-h#pasteboard_finalize",
              children: "Pasteboard_Finalize"
            }), " finalize"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示可选的回调函数，可以用于剪贴板数据变更观察者销毁时释放上下文数据。详见：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-headerfile/capi-oh-pasteboard-h/capi-oh-pasteboard-h#pasteboard_finalize",
              children: "Pasteboard_Finalize"
            }), "。"]
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
            children: "int"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回执行的错误码。错误码定义详见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-headerfile/capi-oh-pasteboard-err-code-h/capi-oh-pasteboard-err-code-h#pasteboard_errcode",
              children: "PASTEBOARD_ErrCode"
            }), "。  若返回ERR_OK，表示执行成功。  若返回ERR_INVALID_PARAMETER，表示传入了无效参数。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_pasteboard_create",
      children: "OH_Pasteboard_Create()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_Pasteboard* OH_Pasteboard_Create()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["创建剪贴板", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-struct/capi-pasteboard-oh-pasteboard/capi-pasteboard-oh-pasteboard",
        children: "OH_Pasteboard"
      }), "指针及实例对象。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-struct/capi-pasteboard-oh-pasteboard/capi-pasteboard-oh-pasteboard",
              children: "OH_Pasteboard"
            }), "*"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["执行成功则返回一个指向剪贴板", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-struct/capi-pasteboard-oh-pasteboard/capi-pasteboard-oh-pasteboard",
              children: "OH_Pasteboard"
            }), "实例对象的指针，否则返回nullptr。  当不再需要使用指针时，请使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_pasteboard_destroy",
              children: "OH_Pasteboard_Destroy"
            }), "销毁实例对象，否则会导致内存泄漏。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_pasteboard_destroy",
      children: "OH_Pasteboard_Destroy()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_Pasteboard_Destroy(OH_Pasteboard* pasteboard)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["销毁剪贴板", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-struct/capi-pasteboard-oh-pasteboard/capi-pasteboard-oh-pasteboard",
        children: "OH_Pasteboard"
      }), "实例对象。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
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
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-struct/capi-pasteboard-oh-pasteboard/capi-pasteboard-oh-pasteboard",
              children: "OH_Pasteboard"
            }), "* pasteboard"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向剪贴板", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-struct/capi-pasteboard-oh-pasteboard/capi-pasteboard-oh-pasteboard",
              children: "OH_Pasteboard"
            }), "实例的指针。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_pasteboard_subscribe",
      children: "OH_Pasteboard_Subscribe()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_Pasteboard_Subscribe(OH_Pasteboard* pasteboard, int type, const OH_PasteboardObserver* observer)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "订阅剪贴板的数据变更事件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
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
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-struct/capi-pasteboard-oh-pasteboard/capi-pasteboard-oh-pasteboard",
              children: "OH_Pasteboard"
            }), "* pasteboard"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向剪贴板", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-struct/capi-pasteboard-oh-pasteboard/capi-pasteboard-oh-pasteboard",
              children: "OH_Pasteboard"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int type"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示订阅的剪贴板数据变更类型，详见：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-headerfile/capi-oh-pasteboard-h/capi-oh-pasteboard-h#pasteboard_notifytype",
              children: "Pasteboard_NotifyType"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-struct/capi-pasteboard-oh-pasteboardobserver/capi-pasteboard-oh-pasteboardobserver",
              children: "OH_PasteboardObserver"
            }), "* observer"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向剪贴板数据变更观察者", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-struct/capi-pasteboard-oh-pasteboardobserver/capi-pasteboard-oh-pasteboardobserver",
              children: "OH_PasteboardObserver"
            }), "实例的指针。它指定了剪贴板数据变更时触发的回调函数，详见：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-struct/capi-pasteboard-oh-pasteboardobserver/capi-pasteboard-oh-pasteboardobserver",
              children: "OH_PasteboardObserver"
            }), "。"]
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
            children: "int"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回执行的错误码。错误码定义详见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-headerfile/capi-oh-pasteboard-err-code-h/capi-oh-pasteboard-err-code-h#pasteboard_errcode",
              children: "PASTEBOARD_ErrCode"
            }), "。  若返回ERR_OK，表示执行成功。  若返回ERR_INVALID_PARAMETER，表示传入了无效参数。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_pasteboard_unsubscribe",
      children: "OH_Pasteboard_Unsubscribe()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_Pasteboard_Unsubscribe(OH_Pasteboard* pasteboard, int type, const OH_PasteboardObserver* observer)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "取消对剪贴板数据变更事件的订阅。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
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
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-struct/capi-pasteboard-oh-pasteboard/capi-pasteboard-oh-pasteboard",
              children: "OH_Pasteboard"
            }), "* pasteboard"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向剪贴板", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-struct/capi-pasteboard-oh-pasteboard/capi-pasteboard-oh-pasteboard",
              children: "OH_Pasteboard"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int type"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示订阅的剪贴板数据变更类型，详见：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-headerfile/capi-oh-pasteboard-h/capi-oh-pasteboard-h#pasteboard_notifytype",
              children: "Pasteboard_NotifyType"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-struct/capi-pasteboard-oh-pasteboardobserver/capi-pasteboard-oh-pasteboardobserver",
              children: "OH_PasteboardObserver"
            }), "* observer"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向剪贴板数据变更观察者", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-struct/capi-pasteboard-oh-pasteboardobserver/capi-pasteboard-oh-pasteboardobserver",
              children: "OH_PasteboardObserver"
            }), "实例的指针。它指定了剪贴板数据变更时触发的回调函数，详见：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-struct/capi-pasteboard-oh-pasteboardobserver/capi-pasteboard-oh-pasteboardobserver",
              children: "OH_PasteboardObserver"
            }), "。"]
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
            children: "int"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回执行的错误码。错误码定义详见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-headerfile/capi-oh-pasteboard-err-code-h/capi-oh-pasteboard-err-code-h#pasteboard_errcode",
              children: "PASTEBOARD_ErrCode"
            }), "。  若返回ERR_OK，表示执行成功。  若返回ERR_INVALID_PARAMETER，表示传入了无效参数。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_pasteboard_isremotedata",
      children: "OH_Pasteboard_IsRemoteData()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "bool OH_Pasteboard_IsRemoteData(OH_Pasteboard* pasteboard)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "判断剪贴板中的数据是否来自远端设备。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
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
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-struct/capi-pasteboard-oh-pasteboard/capi-pasteboard-oh-pasteboard",
              children: "OH_Pasteboard"
            }), "* pasteboard"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向剪贴板", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-struct/capi-pasteboard-oh-pasteboard/capi-pasteboard-oh-pasteboard",
              children: "OH_Pasteboard"
            }), "实例的指针。"]
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
            children: "bool"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回剪贴板中的数据是否来自远端设备。返回true表示剪贴板中的数据来自远端设备，返回false表示剪贴板中数据来自本端设备。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_pasteboard_getdatasource",
      children: "OH_Pasteboard_GetDataSource()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_Pasteboard_GetDataSource(OH_Pasteboard* pasteboard, char* source, unsigned int len)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取剪贴板中数据的数据源。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
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
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-struct/capi-pasteboard-oh-pasteboard/capi-pasteboard-oh-pasteboard",
              children: "OH_Pasteboard"
            }), "* pasteboard"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向剪贴板", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-struct/capi-pasteboard-oh-pasteboard/capi-pasteboard-oh-pasteboard",
              children: "OH_Pasteboard"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "char* source"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示用于存放剪贴板数据源实例的指针，开发者需在调用接口前申请指针指向的内存。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "unsigned int len"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示source指针对应的内存长度，当内存长度不足时调用接口会失败，建议长度：128字节。"
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
            children: "int"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回执行的错误码。错误码定义详见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-headerfile/capi-oh-pasteboard-err-code-h/capi-oh-pasteboard-err-code-h#pasteboard_errcode",
              children: "PASTEBOARD_ErrCode"
            }), "。  若返回ERR_OK，表示执行成功。  若返回ERR_INVALID_PARAMETER，表示传入了无效参数。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_pasteboard_hastype",
      children: "OH_Pasteboard_HasType()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "bool OH_Pasteboard_HasType(OH_Pasteboard* pasteboard, const char* type)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "判断剪贴板中是否有指定类型的数据。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-struct/capi-pasteboard-oh-pasteboard/capi-pasteboard-oh-pasteboard",
              children: "OH_Pasteboard"
            }), "* pasteboard"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向剪贴板", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-struct/capi-pasteboard-oh-pasteboard/capi-pasteboard-oh-pasteboard",
              children: "OH_Pasteboard"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* type"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示要检查的数据类型。包含剪贴板基础数据类型与自定义数据类型，其中剪贴板基础数据类型有：\"text/plain\"、\"text/html\"、\"text/uri\"、\"text/want\"和\"pixelMap\"，详见", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%AE%8F%E5%AE%9A%E4%B9%89",
              children: "宏定义"
            }), "。"]
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
            children: "bool"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回剪贴板中是否有指定类型的数据。返回true表示剪贴板中包含指定类型的数据，返回false表示剪贴板中没有指定类型的数据。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_pasteboard_hasdata",
      children: "OH_Pasteboard_HasData()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "bool OH_Pasteboard_HasData(OH_Pasteboard* pasteboard)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "判断剪贴板中是否有数据。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
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
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-struct/capi-pasteboard-oh-pasteboard/capi-pasteboard-oh-pasteboard",
              children: "OH_Pasteboard"
            }), "* pasteboard"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向剪贴板", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-struct/capi-pasteboard-oh-pasteboard/capi-pasteboard-oh-pasteboard",
              children: "OH_Pasteboard"
            }), "实例的指针。"]
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
            children: "bool"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回剪贴板中是否有数据。返回true表示剪贴板中有数据，返回false表示剪贴板中没有数据。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_pasteboard_getdata",
      children: "OH_Pasteboard_GetData()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_UdmfData* OH_Pasteboard_GetData(OH_Pasteboard* pasteboard, int* status)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取剪贴板中的数据。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限"
        })
      }), "：ohos.permission.READ_PASTEBOARD，应用访问剪贴板内容需", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-basicfun/basic-services-kit/pasteboard/get-pastedata-permission-guidelines",
        children: "申请访问剪贴板权限"
      }), "。", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/access-control/security-components/pastebutton",
        children: "使用粘贴控件"
      }), "访问剪贴板内容的应用，可以无需申请权限。"]
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-struct/capi-pasteboard-oh-pasteboard/capi-pasteboard-oh-pasteboard",
              children: "OH_Pasteboard"
            }), "* pasteboard"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向剪贴板", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-struct/capi-pasteboard-oh-pasteboard/capi-pasteboard-oh-pasteboard",
              children: "OH_Pasteboard"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int* status"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["该参数是输出参数，表示执行的错误码。错误码定义详见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-headerfile/capi-oh-pasteboard-err-code-h/capi-oh-pasteboard-err-code-h#pasteboard_errcode",
              children: "PASTEBOARD_ErrCode"
            }), "。"]
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfdata/capi-udmf-oh-udmfdata",
              children: "OH_UdmfData"
            }), "*"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["执行成功时返回统一数据对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfdata/capi-udmf-oh-udmfdata",
              children: "OH_UdmfData"
            }), "实例的指针。否则返回空指针。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_pasteboard_setdata",
      children: "OH_Pasteboard_SetData()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_Pasteboard_SetData(OH_Pasteboard* pasteboard, OH_UdmfData* data)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将统一数据对象数据写入剪贴板。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-struct/capi-pasteboard-oh-pasteboard/capi-pasteboard-oh-pasteboard",
              children: "OH_Pasteboard"
            }), "* pasteboard"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向剪贴板", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-struct/capi-pasteboard-oh-pasteboard/capi-pasteboard-oh-pasteboard",
              children: "OH_Pasteboard"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfdata/capi-udmf-oh-udmfdata",
              children: "OH_UdmfData"
            }), "* data"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向统一数据对象", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfdata/capi-udmf-oh-udmfdata",
              children: "OH_UdmfData"
            }), "实例的指针。"]
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
            children: "int"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回执行的错误码。错误码定义详见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-headerfile/capi-oh-pasteboard-err-code-h/capi-oh-pasteboard-err-code-h#pasteboard_errcode",
              children: "PASTEBOARD_ErrCode"
            }), "。  若返回ERR_OK，表示执行成功。  若返回ERR_INVALID_PARAMETER，表示传入了无效参数。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_pasteboard_cleardata",
      children: "OH_Pasteboard_ClearData()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_Pasteboard_ClearData(OH_Pasteboard* pasteboard)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "清空剪贴板中的数据。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
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
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-struct/capi-pasteboard-oh-pasteboard/capi-pasteboard-oh-pasteboard",
              children: "OH_Pasteboard"
            }), "* pasteboard"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向剪贴板", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-struct/capi-pasteboard-oh-pasteboard/capi-pasteboard-oh-pasteboard",
              children: "OH_Pasteboard"
            }), "实例的指针。"]
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
            children: "int"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回执行的错误码。错误码定义详见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-headerfile/capi-oh-pasteboard-err-code-h/capi-oh-pasteboard-err-code-h#pasteboard_errcode",
              children: "PASTEBOARD_ErrCode"
            }), "。  若返回ERR_OK，表示执行成功。  若返回ERR_INVALID_PARAMETER，表示传入了无效参数。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_pasteboard_getmimetypes",
      children: "OH_Pasteboard_GetMimeTypes()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "char **OH_Pasteboard_GetMimeTypes(OH_Pasteboard *pasteboard, unsigned int *count)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取剪贴板中的MIME类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 14"]
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-struct/capi-pasteboard-oh-pasteboard/capi-pasteboard-oh-pasteboard",
              children: "OH_Pasteboard"
            }), " *pasteboard"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向剪贴板", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-struct/capi-pasteboard-oh-pasteboard/capi-pasteboard-oh-pasteboard",
              children: "OH_Pasteboard"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "unsigned int *count"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该参数是输出参数，结果集中的类型数量会写入该变量。"
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
            children: "char **"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "执行成功时返回剪贴板所有内容的MIME类型，否则返回nullptr。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_pasteboard_getdataparams_create",
      children: "OH_Pasteboard_GetDataParams_Create()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Pasteboard_GetDataParams *OH_Pasteboard_GetDataParams_Create(void)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["创建剪贴板", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-struct/capi-pasteboard-getdataparams/capi-pasteboard-getdataparams",
        children: "Pasteboard_GetDataParams"
      }), "指针及实例对象。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 15"]
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-struct/capi-pasteboard-getdataparams/capi-pasteboard-getdataparams",
              children: "Pasteboard_GetDataParams"
            }), "*"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["执行成功时返回一个指向剪贴板", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-struct/capi-pasteboard-getdataparams/capi-pasteboard-getdataparams",
              children: "Pasteboard_GetDataParams"
            }), "实例对象的指针，否则返回空指针。  当不再需要使用指针时，请使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-headerfile/capi-oh-pasteboard-h/capi-oh-pasteboard-h#oh_pasteboard_getdataparams_destroy",
              children: "OH_Pasteboard_GetDataParams_Destroy"
            }), "销毁实例对象，否则会导致内存泄漏。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_pasteboard_getdataparams_destroy",
      children: "OH_Pasteboard_GetDataParams_Destroy()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_Pasteboard_GetDataParams_Destroy(Pasteboard_GetDataParams* params)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["销毁剪贴板", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-struct/capi-pasteboard-getdataparams/capi-pasteboard-getdataparams",
        children: "Pasteboard_GetDataParams"
      }), "指针指向的实例对象。"]
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
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-struct/capi-pasteboard-getdataparams/capi-pasteboard-getdataparams",
              children: "Pasteboard_GetDataParams"
            }), " * params"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向剪贴板OH_Pasteboard_GetDataParams的指针。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_pasteboard_getdataparams_setprogressindicator",
      children: "OH_Pasteboard_GetDataParams_SetProgressIndicator()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_Pasteboard_GetDataParams_SetProgressIndicator(Pasteboard_GetDataParams* params,Pasteboard_ProgressIndicator progressIndicator)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["向剪贴板", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-struct/capi-pasteboard-getdataparams/capi-pasteboard-getdataparams",
        children: "Pasteboard_GetDataParams"
      }), "设置进度条指示选项，可选择是否采用系统默认进度显示。"]
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-struct/capi-pasteboard-getdataparams/capi-pasteboard-getdataparams",
              children: "Pasteboard_GetDataParams"
            }), "* params"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向剪贴板OH_Pasteboard_GetDataParams的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#pasteboard_progressindicator",
              children: "Pasteboard_ProgressIndicator"
            }), " progressIndicator"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义进度条指示选项。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_pasteboard_getdataparams_setdesturi",
      children: "OH_Pasteboard_GetDataParams_SetDestUri()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_Pasteboard_GetDataParams_SetDestUri(Pasteboard_GetDataParams* params, const char* destUri, uint32_t destUriLen)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置拷贝文件时目标路径。若不支持文件处理，则不需要设置此参数；若应用涉及复杂文件处理策略或需要区分文件多路径存储，建议不设置此参数，由应用自行完成文件copy处理。"
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
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-struct/capi-pasteboard-getdataparams/capi-pasteboard-getdataparams",
              children: "Pasteboard_GetDataParams"
            }), "* params"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向剪贴板OH_Pasteboard_GetDataParams的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* destUri"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义拷贝文件目标路径。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t destUriLen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义拷贝文件目标路径长度。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_pasteboard_getdataparams_setfileconflictoptions",
      children: "OH_Pasteboard_GetDataParams_SetFileConflictOptions()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_Pasteboard_GetDataParams_SetFileConflictOptions(Pasteboard_GetDataParams* params,Pasteboard_FileConflictOptions option)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["向剪贴板", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-struct/capi-pasteboard-getdataparams/capi-pasteboard-getdataparams",
        children: "Pasteboard_GetDataParams"
      }), "设置文件冲突选项。"]
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-struct/capi-pasteboard-getdataparams/capi-pasteboard-getdataparams",
              children: "Pasteboard_GetDataParams"
            }), "* params"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向剪贴板OH_Pasteboard_GetDataParams的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#pasteboard_fileconflictoptions",
              children: "Pasteboard_FileConflictOptions"
            }), " option"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义文件拷贝冲突时的选项，默认为PASTEBOARD_OVERWRITE。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_pasteboard_getdataparams_setprogresslistener",
      children: "OH_Pasteboard_GetDataParams_SetProgressListener()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_Pasteboard_GetDataParams_SetProgressListener(Pasteboard_GetDataParams* params,const OH_Pasteboard_ProgressListener listener)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["向剪贴板", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-struct/capi-pasteboard-getdataparams/capi-pasteboard-getdataparams",
        children: "Pasteboard_GetDataParams"
      }), "设置进度上报回调函数。"]
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-struct/capi-pasteboard-getdataparams/capi-pasteboard-getdataparams",
              children: "Pasteboard_GetDataParams"
            }), "* params"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向剪贴板OH_Pasteboard_GetDataParams的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_pasteboard_progresslistener",
              children: "OH_Pasteboard_ProgressListener"
            }), " listener"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示进度上报回调函数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_pasteboard_progressinfo_getprogress",
      children: "OH_Pasteboard_ProgressInfo_GetProgress()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_Pasteboard_ProgressInfo_GetProgress(Pasteboard_ProgressInfo* progressInfo)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-struct/capi-pasteboard-progressinfo/capi-pasteboard-progressinfo",
        children: "Pasteboard_ProgressInfo"
      }), "获取粘贴进度。"]
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
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-struct/capi-pasteboard-progressinfo/capi-pasteboard-progressinfo",
              children: "Pasteboard_ProgressInfo"
            }), "* progressInfo"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向剪贴板", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-struct/capi-pasteboard-progressinfo/capi-pasteboard-progressinfo",
              children: "Pasteboard_ProgressInfo"
            }), "的指针。"]
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
            children: "int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回粘贴进度百分比。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_pasteboard_progresscancel",
      children: "OH_Pasteboard_ProgressCancel()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_Pasteboard_ProgressCancel(Pasteboard_GetDataParams* params)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义取消函数，用于在获取粘贴数据时取消正在进行的粘贴动作。"
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
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-struct/capi-pasteboard-getdataparams/capi-pasteboard-getdataparams",
              children: "Pasteboard_GetDataParams"
            }), "* params"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向剪贴板OH_Pasteboard_GetDataParams的指针。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_pasteboard_getdatawithprogress",
      children: "OH_Pasteboard_GetDataWithProgress()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_UdmfData* OH_Pasteboard_GetDataWithProgress(OH_Pasteboard* pasteboard, Pasteboard_GetDataParams* params,int* status)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取剪贴板的数据以及粘贴进度，不支持对文件夹的拷贝。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 15"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限"
        })
      }), "：ohos.permission.READ_PASTEBOARD，应用访问剪贴板内容需", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-basicfun/basic-services-kit/pasteboard/get-pastedata-permission-guidelines",
        children: "申请访问剪贴板权限"
      }), "。", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/access-control/security-components/pastebutton",
        children: "使用粘贴控件"
      }), "访问剪贴板内容的应用，可以无需申请权限。"]
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
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-struct/capi-pasteboard-oh-pasteboard/capi-pasteboard-oh-pasteboard",
              children: "OH_Pasteboard"
            }), "* pasteboard"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向剪贴板", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-struct/capi-pasteboard-oh-pasteboard/capi-pasteboard-oh-pasteboard",
              children: "OH_Pasteboard"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-struct/capi-pasteboard-getdataparams/capi-pasteboard-getdataparams",
              children: "Pasteboard_GetDataParams"
            }), "* params"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向剪贴板OH_Pasteboard_GetDataParams的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int* status"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["该参数是输出参数，表示执行的错误码。错误码定义详见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-headerfile/capi-oh-pasteboard-err-code-h/capi-oh-pasteboard-err-code-h#pasteboard_errcode",
              children: "PASTEBOARD_ErrCode"
            }), "。"]
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfdata/capi-udmf-oh-udmfdata",
              children: "OH_UdmfData"
            }), "*"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "执行成功时返回统一数据对象OH_UdmfData实例的指针。否则返回空指针。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_pasteboard_getchangecount",
      children: "OH_Pasteboard_GetChangeCount()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "uint32_t OH_Pasteboard_GetChangeCount(OH_Pasteboard *pasteboard)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取剪贴板内容的变化次数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 18"]
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
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-struct/capi-pasteboard-oh-pasteboard/capi-pasteboard-oh-pasteboard",
              children: "OH_Pasteboard"
            }), " *pasteboard"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向剪贴板", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-struct/capi-pasteboard-oh-pasteboard/capi-pasteboard-oh-pasteboard",
              children: "OH_Pasteboard"
            }), "实例的指针。"]
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
            children: "执行成功时返回剪贴板内容的变化次数，否则返回0。  当剪贴板内容过期或调用OH_Pasteboard_ClearData等接口导致剪贴板内容为空时，内容变化次数不会因此改变。  系统重启或剪贴板服务异常重启时，剪贴板内容变化次数重新从0开始计数。对同一内容连续多次复制会被视作多次更改，每次复制均会导致内容变化次数增加。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_pasteboard_syncdelayeddataasync",
      children: "OH_Pasteboard_SyncDelayedDataAsync()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_Pasteboard_SyncDelayedDataAsync(OH_Pasteboard* pasteboard, void (*callback)(int errorCode))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通知剪贴板从应用同步所有延迟数据，与延迟复制接口", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-udmf-h/capi-udmf-h#oh_udmfrecordprovider_setdata",
        children: "OH_UdmfRecordProvider_SetData"
      }), "搭配使用。当应用使用延迟复制功能复制时，仅将应用支持的数据类型写入剪贴板。应用应在退出时，重新调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_pasteboard_setdata",
        children: "OH_Pasteboard_SetData"
      }), "接口主动提交所有复制数据或调用此接口通知剪贴板获取全量数据，等待数据同步完成再继续退出，否则可能导致其他应用粘贴获取不到数据。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(30204)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用此接口会延长退出过程，建议应用直接设置数据到剪贴板，而不是调用延迟复制接口", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-udmf-h/capi-udmf-h#oh_udmfrecordprovider_setdata",
          children: "OH_UdmfRecordProvider_SetData"
        }), "和此接口。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-struct/capi-pasteboard-oh-pasteboard/capi-pasteboard-oh-pasteboard",
              children: "OH_Pasteboard"
            }), " *pasteboard"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向剪贴板", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-struct/capi-pasteboard-oh-pasteboard/capi-pasteboard-oh-pasteboard",
              children: "OH_Pasteboard"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void (*callback)(int errorCode)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["数据同步完成后调用的回调函数指针，errorCode表示同步任务的结果，错误码定义详见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-headerfile/capi-oh-pasteboard-err-code-h/capi-oh-pasteboard-err-code-h#pasteboard_errcode",
              children: "PASTEBOARD_ErrCode"
            }), "。"]
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
30204(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAIQUlEQVRo3u2ae1DTVxbHP4gmPMLDhKcPEkAelqW2CsWyikLFik6VHV91hrGKdZmiOz6KY92hI+3Stajja6qWioiIi6i1rFWLUhCRUqkIVpYFBFHQBgUJ8taAsn9EwqYgVsA1XXNmMpPc+/3dc+/9/s6555wbvaa8YRHAenSiVTJItwU6YnSiI0ZHjE50xOiI0YkWyODnraC1TcLOb15juPUQAr0vYjikVrfr2kDMup2OxMQfAKAhchEh088MuI5d+0WEvtf0xP7SW6M4dQ78POtxd67ps56vDlnToW/M9coW1ixWIBErf5/EFMm9iYk/SnhYEPLbTXwYHsecSZORGF8dMB2RuyzJKRrCvyuFfLKsscfN+ktEFVl5pYQGebNx9dOJ+e6sSY/t2ZdbOJ5RiFKpxHCwC2+8KuwRF+DbqN3EfLTxFjKplLk+d1E0mxGbAH/bY862lQOnI6eghR/yKzirVNKhN46F0+vxGtuigXnFyZSsPPi5qIHSciFODg96HfPgGTHJp3/sFbNpf0mP7WEhfgT4FmsvMRmF/qRl7mdn1BLMhLmYCasIDwsicnMCIfPmMHpY9oDo+XZ3M8si3TmRUU7iiQL0OlwQWY3VwEzxaeTUOWsEgkEkpdrwpxkj1X0ig1akFpc08O7OQkbJ/Ghpvk/yyULkdfX4jHPgDQ+ZBi7l+2L+dU3OhHGjGe9hC4DtALm350JMa5uE5eEZyKRS3nLvcltzfe4SuRmi9jQQN4DVuZ3hVdhaulJVo8TdxZB3lqT3iCssk1NYBrHHStVtLlILvvuqCxN9xAFzUTvmAOJBSO2GIq+rR2xhjWhIEyYmAgBqFA/p0DcCwFDwQIOQQ6eG8e50eb/WpPc8ipiJ56axdFUsR6IX4SnL57rCFQB7cTEnL3uwbO1eThx4j8luqf3WlXzGAluLFrX7ik+240yOngamuUVJ6vlLuDo74mpvpTnAw0YSNirUPx3eVlJdc7dfcwoL8SMipFi7LKa22Zmlq2KZPXMqnrJ8Pj1gT2xCEgBR6xczy+sqMqmU5eEZXDws6Vf4nHzGgn98b0zbgyHMKjdg0RwFCwMrWRioiYs+4kDqeXC1tyJhQ0WvY659X/US5f7ct+jNY4wlZsYN2ufKtidZA7B8wVDgDrEJyeq+3XHpzPc2Z9NffZkbEkdydjALJqX0WZehkRENdffIulSEvNqRW9WWhIfW9Gv+IXPLATifJ8VmhO0zPavfXkfI3BLty/yL5N5s+SKJFR/Mx17c3ZQd7FQL9ZTlM3vmVJauiqW22bnP+t6eUElMpJCJHq4Ullyj+MbDAVtLdl4pX+49Ru0vpYgG3+v1U1l2lS/3HuOX2/e1M4+J2qMy4eCAenWbTCrlRkXF4+82wHW1RX19XGVhnwb3Pa8ZYV1NwucC1m1zZ8NKVf6wOsoWU3MzNUZRryKsqbWDiGhXjeeHmdXx53fvPHF8c5OOp0ZaFYZ62ptgZhT6c/SfXeFxp/hNfJ3Yx8QMsxGp2+3Fxaz4YD5bvkhiwbT+h89rFjWpk8trN9soSL/SDZN5IY8rRaYabaHzHXp3T6bOlFY/xYUZmwAF2kdMa5uErXtKuoXHvybD1lIzUw4OqGf7bog+3N6vpHNfshXpF5WYGLSStLWRHRFSmu53WcaRk3fZHJ3OJC93Itc4ajxrb9X7mXC1IBdrC8NeMTdutWinxSRne5KWGUvcjiUY6Odq9P03GTIbTZdgJqwiav1i1n6yj0D/vofPldX6ZOZcJnjem0Bjt4QxS6yyCmMjAW4jsp5p7PSfKn+fRczaZmc+25aG38TxTHbJ7db/il1XcVEi6l5onOVVxm6plK17SvDa1Lfw+frNZgCchrcNyKaczrLDZ0w1U70lnM+D9kfg5qDP3XsdnM5qwNxsCKsXql6465Ud2NvpUVcP35ytJu6omEVzFC8+Ktt3ciQ3Kir4OFTaY7+9uJjZM6cSHhaEjai8W7+BfgMRH04hLfMCydmefar4/nCpGDcXR6b9sf9XCrUKAbsOtXA88xblcgMa28QknirB0ETMO5PbsLe34VKRnMOpAgJ8G0k8/YCz+RISU9pIy7lJXpkJtQrBi7WYIrk3EZ8fIDgosMfwuFOWzmjEWvzkE3SySy5+E8fz2bY0pno4P1P1uUxuiFKpxEVmRllFMwdT7btheovKfh2ZbT84lLTsfN7yfpXw0BqC1qleuOKye4TMbWF5uwiBvjMyayWrNogpLL+Kra0FcX9/xOwVdsQe/hH9jj+wdZ3ixRETfbgdgBXznhy/1zXoMWdVHlYSEV9vGclQ044ecR+HSvFdcIF9J30Im/fbiSm6pnKPzjIh0Ez8sSs94qwsLbhSVMaVou59nZFZrULAxYJWBAIBMyboA2BkoJrv9TsigtY9vg7Qh9LbUFhWjVKpRDZciESsZMHMEQgNDLjXqEetQtCv+5o+E5NR6E9M/H6i1i/GTJj3RFx+oWph1bVN1NXDUFOe6PKCgwKJ+PwAMyb8tvC5tFyItWQwHm6j8PeswWtsC986+T3zWjojM4lYyY6P9EhKGa22oKCA+9y/P5ZHdM9VnOzM8X/Tm9mTq9VVg9ccjbpdO/xPi5izVtpxraKKlN12GOj3XhvKK1QtaqxbR6+4+ge2jJmZwvsLA9m28ideZunT4Z94bhppmRdYEzrlqaR0EvI0UjrD5/CwIGLik8kt932piemTK8vJ7zrYTl72GNAJmRg/Urmpm0I8HHTEPJN4vS4mJh6Wrd37XCYlk0pxGvngpbYYPd2//f+Pzhid6IjREaMTHTE60RGjI0YnzyGPydBtg/bJfwCln/+4V4N0SAAAAABJRU5ErkJggg==");

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