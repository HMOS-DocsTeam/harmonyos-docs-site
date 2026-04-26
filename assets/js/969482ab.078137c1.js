"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["292719"], {
576725(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_preview_api_preview_c_openfileboost_index_openfileboost_preview_openfileboost_preview_md_969_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-preview-api-preview-c-openfileboost-index-openfileboost-preview-openfileboost-preview-md-969.json
var site_docs_ref_preview_api_preview_c_openfileboost_index_openfileboost_preview_openfileboost_preview_md_969_namespaceObject = JSON.parse('{"id":"preview-api/preview-c/openfileboost-index/openfileboost_preview/openfileboost_preview","title":"Preview","description":"概述","source":"@site/docs-ref/preview-api/preview-c/openfileboost-index/openfileboost_preview/openfileboost_preview.md","sourceDirName":"preview-api/preview-c/openfileboost-index/openfileboost_preview","slug":"/preview-api/preview-c/openfileboost-index/openfileboost_preview/openfileboost_preview","permalink":"/harmonyos-docs-site/ref/preview-api/preview-c/openfileboost-index/openfileboost_preview/openfileboost_preview","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Preview","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/openfileboost_preview","kit":"应用服务","last_updated":"2026-04-22","slug":"openfileboost_preview"},"sidebar":"ref","previous":{"title":"ArkTS API错误码","permalink":"/harmonyos-docs-site/ref/preview-api/preview-api-reference/preview-arkts-errcode/preview-arkts-errcode"},"next":{"title":"open_file_boost.h","permalink":"/harmonyos-docs-site/ref/preview-api/preview-c/openfileboost-total/openfileboost-files/openfileboost-open__file__boost_8h/openfileboost-open__file__boost_8h"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/preview-api/preview-c/openfileboost-index/openfileboost_preview/openfileboost_preview.md


const frontMatter = {
	title: 'Preview',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/openfileboost_preview',
	kit: '应用服务',
	last_updated: '2026-04-22',
	slug: 'openfileboost_preview'
};
const contentTitle = 'Preview';

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
  "value": "文件",
  "id": "文件",
  "level": 3
}, {
  "value": "宏定义",
  "id": "宏定义",
  "level": 3
}, {
  "value": "类型定义",
  "id": "类型定义",
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
  "value": "MAX_BUFFER_LENGTH",
  "id": "max_buffer_length",
  "level": 3
}, {
  "value": "类型定义说明",
  "id": "类型定义说明",
  "level": 2
}, {
  "value": "HMS_OpenFileBoost_OnFilePreload",
  "id": "hms_openfileboost_onfilepreload",
  "level": 3
}, {
  "value": "HMS_OpenFileBoost_QueryAppState",
  "id": "hms_openfileboost_queryappstate",
  "level": 3
}, {
  "value": "CacheKey",
  "id": "cachekey",
  "level": 3
}, {
  "value": "SerializeFunc",
  "id": "serializefunc",
  "level": 3
}, {
  "value": "WriteFunc",
  "id": "writefunc",
  "level": 3
}, {
  "value": "DeserializeFunc",
  "id": "deserializefunc",
  "level": 3
}, {
  "value": "ReadFunc",
  "id": "readfunc",
  "level": 3
}, {
  "value": "枚举类型说明",
  "id": "枚举类型说明",
  "level": 2
}, {
  "value": "OpenFileBoost_AppState",
  "id": "openfileboost_appstate",
  "level": 3
}, {
  "value": "OpenFileBoost_CbErrCode",
  "id": "openfileboost_cberrcode",
  "level": 3
}, {
  "value": "OpenFileBoost_ErrCode",
  "id": "openfileboost_errcode",
  "level": 3
}, {
  "value": "FileCacheBoost_CbErrCode",
  "id": "filecacheboost_cberrcode",
  "level": 3
}, {
  "value": "FileCacheBoost_ErrCode",
  "id": "filecacheboost_errcode",
  "level": 3
}, {
  "value": "函数说明",
  "id": "函数说明",
  "level": 2
}, {
  "value": "HMS_OpenFileBoost_GetFdFromPreloadFileInfo()",
  "id": "hms_openfileboost_getfdfrompreloadfileinfo",
  "level": 3
}, {
  "value": "HMS_OpenFileBoost_GetSandboxPathFromPreloadFileInfo()",
  "id": "hms_openfileboost_getsandboxpathfrompreloadfileinfo",
  "level": 3
}, {
  "value": "HMS_OpenFileBoost_NotifyPreloadHit()",
  "id": "hms_openfileboost_notifypreloadhit",
  "level": 3
}, {
  "value": "HMS_OpenFileBoost_RegisterFilePreload()",
  "id": "hms_openfileboost_registerfilepreload",
  "level": 3
}, {
  "value": "HMS_OpenFileBoost_UnregisterFilePreload()",
  "id": "hms_openfileboost_unregisterfilepreload",
  "level": 3
}, {
  "value": "HMS_FileCacheBoost_Init()",
  "id": "hms_filecacheboost_init",
  "level": 3
}, {
  "value": "HMS_FileCacheBoost_AddObjectByKey()",
  "id": "hms_filecacheboost_addobjectbykey",
  "level": 3
}, {
  "value": "HMS_FileCacheBoost_GetObjectByKey()",
  "id": "hms_filecacheboost_getobjectbykey",
  "level": 3
}, {
  "value": "HMS_FileCacheBoost_FreeObject()",
  "id": "hms_filecacheboost_freeobject",
  "level": 3
}, {
  "value": "HMS_FileCacheBoost_AddSerialObjectByKey()",
  "id": "hms_filecacheboost_addserialobjectbykey",
  "level": 3
}, {
  "value": "HMS_FileCacheBoost_GetSerialObjectByKey()",
  "id": "hms_filecacheboost_getserialobjectbykey",
  "level": 3
}, {
  "value": "HMS_FileCacheBoost_CancelOngoingIOByKey()",
  "id": "hms_filecacheboost_cancelongoingiobykey",
  "level": 3
}, {
  "value": "HMS_FileCacheBoost_RemoveObjectByKey()",
  "id": "hms_filecacheboost_removeobjectbykey",
  "level": 3
}, {
  "value": "HMS_FileCacheBoost_ClearAllCache()",
  "id": "hms_filecacheboost_clearallcache",
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
        id: "preview",
        children: "Preview"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Preview Kit（文件预览服务）为应用提供便捷的文件快速预览服务。应用可以通过Preview Kit提供的预览API，快速启动预览界面，实现对各类文件的预览。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "其中C API接口主要提供了文件打开加速功能和通用文件缓存加速功能。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "文件打开加速功能支持应用通过预加载机制提前加载文件，缩短用户打开文件时间，给用户提供流畅顺滑的爽感体验。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "通用文件缓存加速功能支持应用通过缓存服务，将解码后的数据缓存到磁盘中，后续可直接获取缓存数据，省去解码过程，提升文件打开和浏览的性能。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/preview-kit-guide/preview-openfileboost",
        children: "文件打开加速开发指南"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/preview-filecacheboost",
        children: "通用文件缓存加速开发指南"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.3(15)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "文件",
      children: "文件"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/preview-api/preview-c/openfileboost-total/openfileboost-files/openfileboost-open__file__boost_8h/openfileboost-open__file__boost_8h",
              children: "open_file_boost.h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "声明文件打开加速的API集合。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/preview-api/preview-c/openfileboost-total/openfileboost-files/openfileboost-file__cache__boost_8h/openfileboost-file__cache__boost_8h",
              children: "file_cache_boost.h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "声明用于通用文件缓存加速的API，以优化文件打开和文件浏览等场景中的性能。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/preview-api/preview-c/openfileboost-total/openfileboost-files/openfileboost-preview__kit_8h/openfileboost-preview__kit_8h",
              children: "preview_kit.h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "声明Preview Kit所包含的所有头文件。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "宏定义",
      children: "宏定义"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#max_buffer_length",
              children: "MAX_BUFFER_LENGTH"
            }), " 1024"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "沙箱路径最大长度1024。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "类型定义",
      children: "类型定义"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: ["typedef  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#openfileboost_appstate",
              children: "OpenFileBoost_AppState"
            }), "(* ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_openfileboost_queryappstate",
              children: "HMS_OpenFileBoost_QueryAppState"
            }), ") (void)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["该函数在调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_openfileboost_onfilepreload",
              children: "HMS_OpenFileBoost_OnFilePreload"
            }), "推荐文件之前先调用，用于向app查询当前是否允许推荐文件给app。比如，如果应用处于前台焦点或者某些特殊状态，不适合预加载文件，app返回特定枚举值拒绝预加载。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#openfileboost_cberrcode",
              children: "OpenFileBoost_CbErrCode"
            }), "(* ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_openfileboost_onfilepreload",
              children: "HMS_OpenFileBoost_OnFilePreload"
            }), ") (void *fileInfo)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "系统预测用户可能打开的文件，并通过该回调函数通知app，另外在某些场景下，比如当前系统可用内存不足，或者有其他文件更有可能被用户打开，则系统会通知app取消某些文件的预加载。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#cachekey",
              children: "CacheKey"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#cachekey",
              children: "CacheKey"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["开发者传入的key相关数据结构的对外声明，开发者只需在序列化函数", (0,jsx_runtime.jsx)(_components.a, {
              href: "#serializefunc",
              children: "SerializeFunc"
            }), "和反序列化函数", (0,jsx_runtime.jsx)(_components.a, {
              href: "#deserializefunc",
              children: "DeserializeFunc"
            }), "调用 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#writefunc",
              children: "WriteFunc"
            }), " 和", (0,jsx_runtime.jsx)(_components.a, {
              href: "#readfunc",
              children: "ReadFunc"
            }), "时传入即可。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#filecacheboost_errcode",
              children: "FileCacheBoost_ErrCode"
            }), "(* ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#readfunc",
              children: "ReadFunc"
            }), ") (void *buffer, size_t *bufferLen, struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#cachekey",
              children: "CacheKey"
            }), " *key)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#deserializefunc",
              children: "DeserializeFunc"
            }), "进行反序列化的过程中调用此函数，可从缓存读取数据到缓冲区。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#filecacheboost_errcode",
              children: "FileCacheBoost_ErrCode"
            }), "(* ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#writefunc",
              children: "WriteFunc"
            }), ") (const void *buffer, size_t bufferLen, struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#cachekey",
              children: "CacheKey"
            }), " *key)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#serializefunc",
              children: "SerializeFunc"
            }), "进行序列化的过程中调用此函数，将数据写入缓存。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#filecacheboost_cberrcode",
              children: "FileCacheBoost_CbErrCode"
            }), "(* ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#serializefunc",
              children: "SerializeFunc"
            }), ") (const void *object, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#writefunc",
              children: "WriteFunc"
            }), " writeFunc, struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#cachekey",
              children: "CacheKey"
            }), " *key)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "系统执行序列化操作的回调函数定义。由开发者实现，用于将复杂类型数据进行序列化操作。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#filecacheboost_cberrcode",
              children: "FileCacheBoost_CbErrCode"
            }), "(* ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#deserializefunc",
              children: "DeserializeFunc"
            }), ") (void **object, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#readfunc",
              children: "ReadFunc"
            }), " readFunc, struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#cachekey",
              children: "CacheKey"
            }), " *key)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "系统执行反序列化操作的回调函数定义。由开发者实现，用于将已序列化的数据恢复为原始数据。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "枚举",
      children: "枚举"
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
              href: "#openfileboost_errcode",
              children: "OpenFileBoost_ErrCode"
            }), " {  OPEN_FILE_BOOST_SUCCESS = 0,  OPEN_FILE_BOOST_PERMISSION_NOT_GRANTED = 201,  OPEN_FILE_BOOST_INVALID_PARAM = 401,  OPEN_FILE_BOOST_INTERNAL_ERROR = 1017200001,  OPEN_FILE_BOOST_INSUFFICIENT_BUFFER = 1017200002,  OPEN_FILE_BOOST_SERVICE_UNAVAILABLE = 1017200003,  OPEN_FILE_BOOST_NO_MEMORY = 1017200004  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文件打开加速的错误码定义。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#openfileboost_cberrcode",
              children: "OpenFileBoost_CbErrCode"
            }), " { OPEN_FILE_BOOST_CALLBACK_SUCCESS = 0,  OPEN_FILE_BOOST_CALLBACK_FAILURE = 1017210000  }"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["回调函数", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_openfileboost_onfilepreload",
              children: "HMS_OpenFileBoost_OnFilePreload"
            }), "的错误码定义，用于app向系统返回回调函数执行结果。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#openfileboost_appstate",
              children: "OpenFileBoost_AppState"
            }), " { OPEN_FILE_BOOST_APP_STATE_ALLOW_PRELOAD = 0,  OPEN_FILE_BOOST_APP_STATE_REJECT_PRELOAD = 1,  OPEN_FILE_BOOST_APP_STATE_FOREVER_REJECT_PRELOAD = 2  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "app状态，用于指示app当前允许、拒绝或永久拒绝系统推荐预加载文件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#filecacheboost_errcode",
              children: "FileCacheBoost_ErrCode"
            }), " {  FILE_CACHE_BOOST_SUCCESS = 0,  FILE_CACHE_BOOST_ERROR_INVALID_PARAM = 401,  FILE_CACHE_BOOST_ERROR_NOT_SUPPORTED = 801,  FILE_CACHE_BOOST_ERROR_NOMEM = 1017220001,  FILE_CACHE_BOOST_ERROR_INTERNAL_ERROR = 1017220002,  FILE_CACHE_BOOST_ERROR_KEY_NOT_FOUND = 1017220003,  FILE_CACHE_BOOST_ERROR_KEY_EXIST = 1017220004,  FILE_CACHE_BOOST_ERROR_NOT_DIR = 1017220005,  FILE_CACHE_BOOST_ERROR_IO = 1017220006,  FILE_CACHE_BOOST_ERROR_IO_CANCELED = 1017220007,  FILE_CACHE_BOOST_ERROR_NOT_INITIALIZED = 1017220008,  FILE_CACHE_BOOST_ERROR_EXCEED_LIMIT = 1017220009，  FILE_CACHE_BOOST_ERROR_IO_CANCEL_FAILED = 1017220010  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文件缓存加速相关的错误码定义。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#filecacheboost_cberrcode",
              children: "FileCacheBoost_CbErrCode"
            }), " { FILE_CACHE_BOOST_CALLBACK_SUCCESS = 0,  FILE_CACHE_BOOST_CALLBACK_FAILURE = 1017221001，  FILE_CACHE_BOOST_CALLBACK_IO_CANCELED = 1017221002  }"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["回调函数", (0,jsx_runtime.jsx)(_components.a, {
              href: "#deserializefunc",
              children: "DeserializeFunc"
            }), "和", (0,jsx_runtime.jsx)(_components.a, {
              href: "#serializefunc",
              children: "SerializeFunc"
            }), "的错误码定义，用于应用程序将回调函数的执行结果返回给系统。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "函数",
      children: "函数"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "#openfileboost_errcode",
              children: "OpenFileBoost_ErrCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_openfileboost_getfdfrompreloadfileinfo",
              children: "HMS_OpenFileBoost_GetFdFromPreloadFileInfo"
            }), " (void *fileInfo, int32_t *fd)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取文件描述符信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#openfileboost_errcode",
              children: "OpenFileBoost_ErrCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_openfileboost_getsandboxpathfrompreloadfileinfo",
              children: "HMS_OpenFileBoost_GetSandboxPathFromPreloadFileInfo"
            }), " (void *fileInfo, char *sandboxPath, int32_t pathLen)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取沙箱路径信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#openfileboost_errcode",
              children: "OpenFileBoost_ErrCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_openfileboost_registerfilepreload",
              children: "HMS_OpenFileBoost_RegisterFilePreload"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_openfileboost_queryappstate",
              children: "HMS_OpenFileBoost_QueryAppState"
            }), " queryAppState, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_openfileboost_onfilepreload",
              children: "HMS_OpenFileBoost_OnFilePreload"
            }), " filePreload, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_openfileboost_onfilepreload",
              children: "HMS_OpenFileBoost_OnFilePreload"
            }), " cancelFilePreload)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册预加载回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#openfileboost_errcode",
              children: "OpenFileBoost_ErrCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_openfileboost_unregisterfilepreload",
              children: "HMS_OpenFileBoost_UnregisterFilePreload"
            }), " (void)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消注册预加载回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#openfileboost_errcode",
              children: "OpenFileBoost_ErrCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_openfileboost_notifypreloadhit",
              children: "HMS_OpenFileBoost_NotifyPreloadHit"
            }), " (int32_t fd, char *sandboxPath, int32_t pathLen)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当用户打开预加载文件时, app调用该接口通知系统预加载命中, 这将有助于提高预加载文件预测的准确性。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#filecacheboost_errcode",
              children: "FileCacheBoost_ErrCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_filecacheboost_init",
              children: "HMS_FileCacheBoost_Init"
            }), " (const char *path, size_t pathLen, uint32_t cacheUpperLimitMb, const char *dbName, size_t dbNameLen)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "初始化缓存路径、缓存容量上限、数据库名称。系统保证了线程并发安全控制，如需支持多进程并发场景，建议各进程使用不同的数据库文件名以保证访问安全性。  缓存路径：开发者传入相对路径，缓存保存在应用沙箱目录下。  缓存容量上限：当系统检测到缓存总量超出设定上限后，将根据缓存淘汰策略进行容量管控，删除相应的缓存以释放空间。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#filecacheboost_errcode",
              children: "FileCacheBoost_ErrCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_filecacheboost_addobjectbykey",
              children: "HMS_FileCacheBoost_AddObjectByKey"
            }), " (const uint8_t *key, size_t keyLen, const uint8_t *data, size_t dataLen, uint32_t weight)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建并添加一个缓存对象至文件缓存。 该函数通过指定的唯一标识符 (key) 将数据缓存至文件缓存系统中，便于后续快速访问。建议开发者合理设计和管理key值，确保其在不同上下文中的唯一性和准确性。 当缓存不再需要时，推荐开发者主动调用 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_filecacheboost_removeobjectbykey",
              children: "HMS_FileCacheBoost_RemoveObjectByKey"
            }), "删除对应的缓存项，以避免资源浪费。 若不主动删除，系统将在缓存容量不足时，依据系统策略进行清除。开发者若想要对key对应的缓存内容做修改，需要先调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_filecacheboost_removeobjectbykey",
              children: "HMS_FileCacheBoost_RemoveObjectByKey"
            }), "删除之前的key，再重新创建和添加。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#filecacheboost_errcode",
              children: "FileCacheBoost_ErrCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_filecacheboost_getobjectbykey",
              children: "HMS_FileCacheBoost_GetObjectByKey"
            }), " (const uint8_t *key, size_t keyLen, uint8_t **data, size_t *dataLen)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["根据指定的key查询缓存对象，若存在，则从磁盘中加载缓存对象的内容。调用该函数系统会分配一段内存用于存储缓存数据，作为出参返回给开发者，开发者需在使用完毕后调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_filecacheboost_freeobject",
              children: "HMS_FileCacheBoost_FreeObject"
            }), "显式释放该内存。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["void ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_filecacheboost_freeobject",
              children: "HMS_FileCacheBoost_FreeObject"
            }), " (uint8_t *data)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["释放调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_filecacheboost_getobjectbykey",
              children: "HMS_FileCacheBoost_GetObjectByKey"
            }), "或", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_filecacheboost_getserialobjectbykey",
              children: "HMS_FileCacheBoost_GetSerialObjectByKey"
            }), "分配的内存，建议开发者不再使用该内存时，及时调用此函数进行释放，避免造成内存泄漏。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#filecacheboost_errcode",
              children: "FileCacheBoost_ErrCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_filecacheboost_addserialobjectbykey",
              children: "HMS_FileCacheBoost_AddSerialObjectByKey"
            }), " (const uint8_t *key, size_t keyLen, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#serializefunc",
              children: "SerializeFunc"
            }), " func, const void *object, uint32_t weight)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建一个复杂类型对象的缓存项，通过传入自定义的序列化函数", (0,jsx_runtime.jsx)(_components.a, {
              href: "#serializefunc",
              children: "SerializeFunc"
            }), "对该象进行序列化处理，以便将其存储至磁盘并支持后续恢复。 例如图像数据需要同时保存其元数据和像素数据，才能实现完整的缓存与读取过程。序列化和反序列化会占用内存，请开发者控制object大小，降低内存压力。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#filecacheboost_errcode",
              children: "FileCacheBoost_ErrCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_filecacheboost_getserialobjectbykey",
              children: "HMS_FileCacheBoost_GetSerialObjectByKey"
            }), " (const uint8_t *key, size_t keyLen, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#deserializefunc",
              children: "DeserializeFunc"
            }), " func, void **object)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["根据指定的key值获取复杂类型缓存对象，并通过传入的反序列化函数", (0,jsx_runtime.jsx)(_components.a, {
              href: "#deserializefunc",
              children: "DeserializeFunc"
            }), "将其还原为原始数据，从而获得完整的对象内容。 调用该函数系统会分配一段内存用于存储缓存数据，作为出参返回给开发者，开发者需在使用完毕后调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_filecacheboost_freeobject",
              children: "HMS_FileCacheBoost_FreeObject"
            }), "显式释放该内存。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#filecacheboost_errcode",
              children: "FileCacheBoost_ErrCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_filecacheboost_removeobjectbykey",
              children: "HMS_FileCacheBoost_RemoveObjectByKey"
            }), " (const uint8_t *key, size_t keyLen)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据指定的key删除对应的缓存对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#filecacheboost_errcode",
              children: "FileCacheBoost_ErrCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_filecacheboost_cancelongoingiobykey",
              children: "HMS_FileCacheBoost_CancelOngoingIOByKey"
            }), " (const uint8_t *key, size_t keyLen)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["取消key对应的缓存对象当前正在进行的I/O操作。当开发者需要释放数据对象时，应调用本函数，防止有其他线程对该数据对象进行添加缓存对象或者获取缓存对象的操作。若该对象正处于缓存过程中，则操作将被中止；若已缓存完成，则此函数不做任何处理。  当该函数返回 FILE_CACHE_BOOST_SUCCESS，开发者可以立即释放数据对象；当返回FILE_CACHE_BOOST_ERROR_IO_CANCEL_FAILED，表示当前没有正在执行的 key 需要被取消，开发者需要确认该 key 对应的动作执行完成或无需执行后再释放数据对象。  例如当一个线程尝试删除数据对象的同时，有其他线程对其进行", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_filecacheboost_addobjectbykey",
              children: "HMS_FileCacheBoost_AddObjectByKey"
            }), "操作， 调用本函数可确保缓存对象的安全性，避免引发数据竞争问题。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#filecacheboost_errcode",
              children: "FileCacheBoost_ErrCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_filecacheboost_clearallcache",
              children: "HMS_FileCacheBoost_ClearAllCache"
            }), " (void)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["清理所有的缓存对象。 该函数会释放通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_filecacheboost_addobjectbykey",
              children: "HMS_FileCacheBoost_AddObjectByKey"
            }), "和", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_filecacheboost_addserialobjectbykey",
              children: "HMS_FileCacheBoost_AddSerialObjectByKey"
            }), "创建的所有缓存对象"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "宏定义说明",
      children: "宏定义说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "max_buffer_length",
      children: "MAX_BUFFER_LENGTH"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#define MAX_BUFFER_LENGTH   1024\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "沙箱路径最大长度。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.3(15)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "类型定义说明",
      children: "类型定义说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_openfileboost_onfilepreload",
      children: "HMS_OpenFileBoost_OnFilePreload"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef OpenFileBoost_CbErrCode(*HMS_OpenFileBoost_OnFilePreload) (void *fileInfo)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "系统向应用推荐或取消推荐预加载文件的回调函数定义。系统预测用户可能打开的文件，并通过该回调函数通知app，另外在某些场景下，比如当前系统可用内存不足，或者有其他文件更有可能被用户打开，则系统会通知app取消某些文件的预加载。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.3(15)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fileInfo"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["预加载文件信息，app可以调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_openfileboost_getfdfrompreloadfileinfo",
              children: "HMS_OpenFileBoost_GetFdFromPreloadFileInfo"
            }), "获取对应的文件描述符信息，然后调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_openfileboost_getsandboxpathfrompreloadfileinfo",
              children: "HMS_OpenFileBoost_GetSandboxPathFromPreloadFileInfo"
            }), "获取对应的沙箱路径信息。app应该在当前回调上下文中同步解析预加载文件，以便系统可以评估本次预加载文件的资源消耗。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "函数执行结果，如果执行成功则返回OPEN_FILE_BOOST_CALLBACK_SUCCESS，如果失败则返回 OPEN_FILE_BOOST_CALLBACK_FAILURE。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_openfileboost_queryappstate",
      children: "HMS_OpenFileBoost_QueryAppState"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef OpenFileBoost_AppState(*HMS_OpenFileBoost_QueryAppState) (void)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["系统查询app状态的回调函数定义，该函数在调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_openfileboost_onfilepreload",
        children: "HMS_OpenFileBoost_OnFilePreload"
      }), "推荐文件之前先回调app。该函数用于系统向app查询当前是否允许推荐文件给app。比如，如果应用处于前台焦点或者某些特殊状态，不适合预加载文件，app返回特定枚举值拒绝预加载。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.3(15)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果app允许推荐文件，应该返回OPEN_FILE_BOOST_APP_STATE_ALLOW_PRELOAD，系统接下来将调用 ", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_openfileboost_onfilepreload",
        children: "HMS_OpenFileBoost_OnFilePreload"
      }), "去推荐文件进行预加载。 如果app拒绝此次推荐，应该返回OPEN_FILE_BOOST_APP_STATE_REJECT_PRELOAD。如果app在本次注册期间不想再收到推荐，应该返回OPEN_FILE_BOOST_APP_STATE_FOREVER_REJECT_PRELOAD，然后尽快调用HMS_OpenFileBoost_UnregisterFilePreloadCb来取消注册。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cachekey",
      children: "CacheKey"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct CacheKey CacheKey\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者在序列化函数", (0,jsx_runtime.jsx)(_components.a, {
        href: "#serializefunc",
        children: "SerializeFunc"
      }), "和反序列化函数", (0,jsx_runtime.jsx)(_components.a, {
        href: "#deserializefunc",
        children: "DeserializeFunc"
      }), "调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#writefunc",
        children: "WriteFunc"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "#readfunc",
        children: "ReadFunc"
      }), "时，传入的key相关数据结构的对外声明。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.1.0(23)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "serializefunc",
      children: "SerializeFunc"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef FileCacheBoost_CbErrCode(*SerializeFunc) (const void *object, WriteFunc writeFunc, struct CacheKey *key)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "序列化函数，定义了系统执行序列化操作时的回调接口。由开发者实现，用于将复杂类型数据进行序列化操作。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.1.0(23)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "待序列化的对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "writeFunc"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["将序列化数据写入缓存的回调函数，参数类型可参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "#writefunc",
              children: "WriteFunc"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "key"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "序列化对象的key。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["函数执行成功则返回FILE_CACHE_BOOST_CALLBACK_SUCCESS，函数执行失败则返回FILE_CACHE_BOOST_CALLBACK_FAILURE，其他错误详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "#filecacheboost_cberrcode",
        children: "FileCacheBoost_CbErrCode"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "writefunc",
      children: "WriteFunc"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef FileCacheBoost_ErrCode(*WriteFunc) (const void *buffer, size_t bufferLen, struct CacheKey *key)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "#serializefunc",
        children: "SerializeFunc"
      }), " 进行序列化的过程中调用此函数，将数据写入缓存。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.1.0(23)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "buffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "待写入数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bufferLen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "待写入数据的长度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "key"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "待写入缓存对象的key。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果函数执行成功，则返回FILE_CACHE_BOOST_SUCCESS，如果因数据对象内存被释放，导致写入缓存对象任务无法执行则返回FILE_CACHE_BOOST_ERROR_IO_CANCELED，其他错误详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "#filecacheboost_errcode",
        children: "FileCacheBoost_ErrCode"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "deserializefunc",
      children: "DeserializeFunc"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef FileCacheBoost_CbErrCode(*DeserializeFunc) (void **object, ReadFunc readFunc, struct CacheKey *key)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "反序列化函数，定义了系统执行反序列化操作时的回调接口。由开发者实现，用于将已序列化的数据恢复为原始数据。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.1.0(23)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "反序列化后生成的数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "readFunc"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从缓存中读取序列化数据的回调函数，参数类型可参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "#readfunc",
              children: "ReadFunc"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "key"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "待反序列化对象的key。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["函数执行成功则返回FILE_CACHE_BOOST_CALLBACK_SUCCESS，函数执行失败则返回FILE_CACHE_BOOST_CALLBACK_FAILURE，其他错误详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "#filecacheboost_cberrcode",
        children: "FileCacheBoost_CbErrCode"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "readfunc",
      children: "ReadFunc"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef FileCacheBoost_ErrCode(*ReadFunc) (void *buffer, size_t *bufferLen, struct CacheKey *key)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "#deserializefunc",
        children: "DeserializeFunc"
      }), "进行反序列化的过程中调用此函数，可从缓存读取数据到缓冲区。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.1.0(23)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "buffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "存储读取数据的缓冲区。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bufferLen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "作为入参表示期望读取的数据长度，作为出参表示实际读取的数据长度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "key"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前正在读取的缓存对象。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果函数执行成功，则返回FILE_CACHE_BOOST_SUCCESS，如果因数据对象内存被释放，导致读取缓存对象任务无法执行则返回FILE_CACHE_BOOST_ERROR_IO_CANCELED，其他错误详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "#filecacheboost_errcode",
        children: "FileCacheBoost_ErrCode"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "枚举类型说明",
      children: "枚举类型说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "openfileboost_appstate",
      children: "OpenFileBoost_AppState"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OpenFileBoost_AppState\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "app状态，用于指示app当前是否允许系统推荐预加载文件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.3(15)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OPEN_FILE_BOOST_APP_STATE_ALLOW_PRELOAD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前允许推荐预加载文件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OPEN_FILE_BOOST_APP_STATE_REJECT_PRELOAD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前不允许推荐预加载文件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OPEN_FILE_BOOST_APP_STATE_FOREVER_REJECT_PRELOAD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "这次注册期间永远不允许推荐预加载文件。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "openfileboost_cberrcode",
      children: "OpenFileBoost_CbErrCode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OpenFileBoost_CbErrCode\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["回调函数", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_openfileboost_onfilepreload",
        children: "HMS_OpenFileBoost_OnFilePreload"
      }), "的错误码定义，它用于app向系统返回回调函数执行结果。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.3(15)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OPEN_FILE_BOOST_CALLBACK_SUCCESS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数执行成功。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OPEN_FILE_BOOST_CALLBACK_FAILURE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数执行失败。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "openfileboost_errcode",
      children: "OpenFileBoost_ErrCode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OpenFileBoost_ErrCode\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "文件打开加速的错误码定义。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.3(15)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OPEN_FILE_BOOST_SUCCESS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "成功。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OPEN_FILE_BOOST_PERMISSION_NOT_GRANTED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "未授权。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OPEN_FILE_BOOST_INVALID_PARAM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无效输入参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OPEN_FILE_BOOST_INTERNAL_ERROR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "内部错误。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OPEN_FILE_BOOST_INSUFFICIENT_BUFFER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "传入的缓冲区的长度不足。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OPEN_FILE_BOOST_SERVICE_UNAVAILABLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "服务不可用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OPEN_FILE_BOOST_NO_MEMORY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "内存不足。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "filecacheboost_cberrcode",
      children: "FileCacheBoost_CbErrCode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum FileCacheBoost_CbErrCode\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["回调函数", (0,jsx_runtime.jsx)(_components.a, {
        href: "#deserializefunc",
        children: "DeserializeFunc"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "#serializefunc",
        children: "SerializeFunc"
      }), "的错误码定义，应用程序将回调函数的执行结果返回给系统。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.1.0(23)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FILE_CACHE_BOOST_CALLBACK_SUCCESS = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数执行成功。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FILE_CACHE_BOOST_CALLBACK_FAILURE = 1017221001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数执行失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FILE_CACHE_BOOST_CALLBACK_IO_CANCELED = 1017221002"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "I/O取消错误。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "filecacheboost_errcode",
      children: "FileCacheBoost_ErrCode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum FileCacheBoost_ErrCode\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "文件缓存加速相关的错误码定义。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.1.0(23)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FILE_CACHE_BOOST_SUCCESS = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "成功。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FILE_CACHE_BOOST_ERROR_INVALID_PARAM = 401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无效输入参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FILE_CACHE_BOOST_ERROR_NOT_SUPPORTED = 801"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该设备不支持此API。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FILE_CACHE_BOOST_ERROR_NOMEM = 1017220001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "内存不足。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FILE_CACHE_BOOST_ERROR_INTERNAL_ERROR = 1017220002"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "内部错误。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FILE_CACHE_BOOST_ERROR_KEY_NOT_FOUND = 1017220003"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "缓存key不存在。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FILE_CACHE_BOOST_ERROR_KEY_EXIST = 1017220004"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "缓存key已存在。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FILE_CACHE_BOOST_ERROR_NOT_DIR = 1017220005"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "路径初始化错误。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FILE_CACHE_BOOST_ERROR_IO = 1017220006"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "I/O读写错误。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FILE_CACHE_BOOST_ERROR_IO_CANCELED = 1017220007"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "I/O 被取消。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FILE_CACHE_BOOST_ERROR_NOT_INITIALIZED = 1017220008"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "未初始化。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FILE_CACHE_BOOST_ERROR_EXCEED_LIMIT = 1017220009"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "单个缓存大小超出限制。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FILE_CACHE_BOOST_ERROR_IO_CANCEL_FAILED = 1017220010"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "I/O 取消失败。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数说明",
      children: "函数说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_openfileboost_getfdfrompreloadfileinfo",
      children: "HMS_OpenFileBoost_GetFdFromPreloadFileInfo()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OpenFileBoost_ErrCode HMS_OpenFileBoost_GetFdFromPreloadFileInfo (void * fileInfo, int32_t * fd)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取文件描述符信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.3(15)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fileInfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "系统向app推荐的预加载文件信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fd"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输出参数，预加载文件的文件描述符信息。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["函数执行结果，如果执行成功则返回OPEN_FILE_BOOST_SUCCESS，如果失败将返回具体错误码，详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "#openfileboost_errcode",
        children: "OpenFileBoost_ErrCode"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_openfileboost_getsandboxpathfrompreloadfileinfo",
      children: "HMS_OpenFileBoost_GetSandboxPathFromPreloadFileInfo()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OpenFileBoost_ErrCode HMS_OpenFileBoost_GetSandboxPathFromPreloadFileInfo (void * fileInfo, char * sandboxPath, int32_t pathLen)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取沙箱路径信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.3(15)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fileInfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "系统向app推荐的预加载文件信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sandboxPath"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输出参数，预加载文件的沙箱路径信息，app应该传递一个指向一块有效内存区域的指针，系统将向其中填充沙箱路径信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pathLen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于填充沙箱路径的内存区域的长度。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["函数执行结果，如果执行成功则返回OPEN_FILE_BOOST_SUCCESS，如果传入的内存缓冲区太小，系统将返回OPEN_FILE_BOOST_INSUFFICIENT_BUFFER，其他错误详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "#openfileboost_errcode",
        children: "OpenFileBoost_ErrCode"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_openfileboost_notifypreloadhit",
      children: "HMS_OpenFileBoost_NotifyPreloadHit()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OpenFileBoost_ErrCode HMS_OpenFileBoost_NotifyPreloadHit (int32_t fd, char * sandboxPath, int32_t pathLen)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当用户打开预加载文件时，app调用该接口通知系统预加载命中，这将有助于提高预加载文件预测的准确性。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.3(15)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fd"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "命中文件的文件描述符信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sandboxPath"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "命中文件的沙箱路径。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pathLen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "沙箱路径的长度"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["函数执行结果，如果执行成功则返回OPEN_FILE_BOOST_SUCCESS，如果失败将返回具体错误码，详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "#openfileboost_errcode",
        children: "OpenFileBoost_ErrCode"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_openfileboost_registerfilepreload",
      children: "HMS_OpenFileBoost_RegisterFilePreload()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OpenFileBoost_ErrCode HMS_OpenFileBoost_RegisterFilePreload (HMS_OpenFileBoost_QueryAppState queryAppState, HMS_OpenFileBoost_OnFilePreload filePreload, HMS_OpenFileBoost_OnFilePreload cancelFilePreload)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注册预加载回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.3(15)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "queryAppState"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "app状态查询回调函数，在通知预加载之前先调用该回调函数查询当前是否允许推荐预加载文件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "filePreload"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文件预加载回调，系统预测用户可能打开的文件，并通过该回调函数通知调用者。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "cancelFilePreload"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消文件预加载回调，比如系统可用内存不足时系统会通知调用方取消文件的预加载。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["函数执行结果，如果执行成功则返回OPEN_FILE_BOOST_SUCCESS，如果失败将返回具体错误码，详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "#openfileboost_errcode",
        children: "OpenFileBoost_ErrCode"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_openfileboost_unregisterfilepreload",
      children: "HMS_OpenFileBoost_UnregisterFilePreload()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OpenFileBoost_ErrCode HMS_OpenFileBoost_UnregisterFilePreload (void)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "取消注册预加载回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.3(15)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["函数执行结果，如果执行成功则返回OPEN_FILE_BOOST_SUCCESS，如果失败将返回具体错误码，详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "#openfileboost_errcode",
        children: "OpenFileBoost_ErrCode"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_filecacheboost_init",
      children: "HMS_FileCacheBoost_Init()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FileCacheBoost_ErrCode HMS_FileCacheBoost_Init (const char * path, size_t pathLen, uint32_t cacheUpperLimitMb, const char * dbName, size_t dbNameLen)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "初始化缓存路径、缓存容量上限和数据库名称。该函数用于配置缓存文件的存储目录以及缓存最大容量。当系统检测到缓存总量超出设定上限后，将根据缓存淘汰策略进行容量管控，删除相应的缓存以释放空间。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.1.0(23)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "存储缓存文件的路径。开发者传入相对路径即可，系统会创建完整路径，传入的路径须有效。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pathLen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "缓存路径的缓冲区长度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "cacheUpperLimitMb"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "缓存容量上限值（单位为MB）。若缓存使用量超过该限制，系统将触发缓存淘汰机制。 若用户设置的缓存容量大于系统预设的默认上限，则系统将使用默认上限为作为缓存容量上限值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dbName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数据库文件名，该数据库用于缓存元数据管理。系统保证了线程并发安全控制，如需支持多进程并发场景，建议各进程使用不同的数据库文件名以保证访问安全性。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dbNameLen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数据库名称的缓冲区长度。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "函数执行结果:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FILE_CACHE_BOOST_SUCCESS：执行成功。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FILE_CACHE_BOOST_ERROR_NOT_DIR：传入的路径无效，系统无法创建。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FILE_CACHE_BOOST_ERROR_INVALID_PARAM：传入的参数无效。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["其他错误详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "#filecacheboost_errcode",
        children: "FileCacheBoost_ErrCode"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_filecacheboost_addobjectbykey",
      children: "HMS_FileCacheBoost_AddObjectByKey()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FileCacheBoost_ErrCode HMS_FileCacheBoost_AddObjectByKey (const uint8_t * key, size_t keyLen, const uint8_t * data, size_t dataLen, uint32_t weight)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建并添加一个缓存对象至文件缓存。 该函数通过指定的唯一标识符 (key) 将数据缓存至文件缓存系统中，便于后续快速访问。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["建议开发者合理设计和管理key值，确保其在不同上下文中的唯一性和准确性。 当缓存不再需要时，推荐开发者主动调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_filecacheboost_removeobjectbykey",
        children: "HMS_FileCacheBoost_RemoveObjectByKey"
      }), "删除对应的缓存项，以避免资源浪费。 若不主动删除，系统将在缓存容量不足时，依据系统策略进行清除。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者若想要对key对应的缓存内容做修改，需要先调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_filecacheboost_removeobjectbykey",
        children: "HMS_FileCacheBoost_RemoveObjectByKey"
      }), "删除之前的key，再重新创建和添加。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.1.0(23)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "key"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "缓存对象的唯一标识符。该值通常可由文件的特征值生成，例如图片的SHA-256 、MD4哈希值等。当图片内容未发生变化时，再次打开可获取到对应缓存。当图片内容发生变化时，key值应同步更新，原缓存内容失效。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "keyLen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "key的缓冲区长度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "待缓存数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dataLen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "缓存数据的缓冲区长度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "weight"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "缓存对象的权重值，用于反映其重要性或优先级。若开发者希望某个缓存对象优先保留，应为其分配较高的权重。  有效取值范围为0-10000，如果输入的权重超过10000，系统会将其设置为10000。  例如开发者可传入数据解码耗时作为权重，当缓存空间达到上限时，系统将参考该权重计算缓存的淘汰顺序。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "函数执行结果："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FILE_CACHE_BOOST_SUCCESS：执行成功。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FILE_CACHE_BOOST_ERROR_KEY_EXIST：key 值已经存在。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FILE_CACHE_BOOST_ERROR_IO：发生I/O读写错误。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FILE_CACHE_BOOST_ERROR_IO_CANCELED：因数据对象内存缓存被释放，导致创建缓存对象任务无法执行。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FILE_CACHE_BOOST_ERROR_NOT_INITIALIZED：未初始化。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FILE_CACHE_BOOST_ERROR_EXCEED_LIMIT：添加的缓存大小大于缓存容量上限。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FILE_CACHE_BOOST_ERROR_INVALID_PARAM：传入的参数无效。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["其他错误详见 ", (0,jsx_runtime.jsx)(_components.a, {
        href: "#filecacheboost_errcode",
        children: "FileCacheBoost_ErrCode"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_filecacheboost_getobjectbykey",
      children: "HMS_FileCacheBoost_GetObjectByKey()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FileCacheBoost_ErrCode HMS_FileCacheBoost_GetObjectByKey (const uint8_t * key, size_t keyLen, uint8_t ** data, size_t * dataLen )\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["根据指定的key查询缓存对象，若存在，则从磁盘中加载缓存对象的内容。调用该函数系统会分配一段内存用于存储缓存数据，作为出参返回给开发者，开发者需在使用完毕后调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_filecacheboost_freeobject",
        children: "HMS_FileCacheBoost_FreeObject"
      }), "显式释放该内存。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.1.0(23)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "key"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "缓存对象的key。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "keyLen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "key的缓冲区长度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "出参，缓存对象的内容。开发者需确保传入参数非空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dataLen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "缓存对象内容的长度。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "函数执行结果："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FILE_CACHE_BOOST_SUCCESS：执行成功。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FILE_CACHE_BOOST_ERROR_KEY_NOT_FOUND：key值不存在。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FILE_CACHE_BOOST_ERROR_IO：发生I/O读写错误。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FILE_CACHE_BOOST_ERROR_NOT_INITIALIZED：未初始化。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FILE_CACHE_BOOST_ERROR_IO_CANCELED：因数据对象内存被释放，导致获取缓存对象任务无法执行。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FILE_CACHE_BOOST_ERROR_INVALID_PARAM：传入的参数无效。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["其他错误详见 ", (0,jsx_runtime.jsx)(_components.a, {
        href: "#filecacheboost_errcode",
        children: "FileCacheBoost_ErrCode"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_filecacheboost_freeobject",
      children: "HMS_FileCacheBoost_FreeObject()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void HMS_FileCacheBoost_FreeObject (uint8_t * data)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["释放调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_filecacheboost_getobjectbykey",
        children: "HMS_FileCacheBoost_GetObjectByKey"
      }), "或", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_filecacheboost_getserialobjectbykey",
        children: "HMS_FileCacheBoost_GetSerialObjectByKey"
      }), "分配的内存，建议开发者不再使用该内存时，及时调用此函数进行释放，避免造成内存泄漏。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.1.0(23)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要释放的内存数据。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_filecacheboost_addserialobjectbykey",
      children: "HMS_FileCacheBoost_AddSerialObjectByKey()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FileCacheBoost_ErrCode HMS_FileCacheBoost_AddSerialObjectByKey (const uint8_t * key, size_t keyLen, SerializeFunc func, const void * object, uint32_t weight )\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["创建一个复杂类型对象的缓存项，通过传入自定义的序列化函数", (0,jsx_runtime.jsx)(_components.a, {
        href: "#serializefunc",
        children: "SerializeFunc"
      }), "对该象进行序列化处理，以便将该对象存储至磁盘并支持后续恢复。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "例如图像数据需要同时保存其元数据和像素数据，才能实现完整的缓存与读取过程。序列化和反序列化会占用内存，请开发者控制object大小，降低内存压力。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.1.0(23)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "key"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "缓存对象的key。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "keyLen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "key的长度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "func"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开发者实现的序列化函数，用于将复杂类型数据进行序列化处理。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "待缓存的复杂类型对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "weight"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "缓存对象的权重值，用于反映其重要性或优先级，有效取值范围为0-10000，如果输入的权重超过10000，系统会将其设置为10000。 例如开发者可传入数据解码耗时作为权重，当缓存空间达到上限时，系统将参考该权重计算缓存的淘汰顺序。 若开发者希望某个缓存对象优先保留，应为其分配较高的权重。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "函数执行结果："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FILE_CACHE_BOOST_SUCCESS：执行成功。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FILE_CACHE_BOOST_ERROR_KEY_EXIST：key值已经存在。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FILE_CACHE_BOOST_ERROR_IO：发生I/O读写错误。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FILE_CACHE_BOOST_ERROR_IO_CANCELED：因数据对象内存缓存被释放， 导致创建缓存对象任务无法执行。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FILE_CACHE_BOOST_ERROR_NOT_INITIALIZED：未初始化。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FILE_CACHE_BOOST_ERROR_EXCEED_LIMIT：添加的缓存大小大于缓存容量上限。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FILE_CACHE_BOOST_ERROR_INVALID_PARAM：传入的参数无效。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["其他错误详见 ", (0,jsx_runtime.jsx)(_components.a, {
        href: "#filecacheboost_errcode",
        children: "FileCacheBoost_ErrCode"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_filecacheboost_getserialobjectbykey",
      children: "HMS_FileCacheBoost_GetSerialObjectByKey()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FileCacheBoost_ErrCode HMS_FileCacheBoost_GetSerialObjectByKey (const uint8_t * key, size_t keyLen, DeserializeFunc func, void ** object )\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["根据指定的key值获取复杂类型缓存对象，并通过传入的反序列化函数", (0,jsx_runtime.jsx)(_components.a, {
        href: "#deserializefunc",
        children: "DeserializeFunc"
      }), "将其还原为原始数据，从而获得完整的对象内容。 调用该函数系统会分配一段内存用于存储缓存数据，作为出参返回给开发者，开发者需在使用完毕后调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_filecacheboost_freeobject",
        children: "HMS_FileCacheBoost_FreeObject"
      }), "显式释放该内存。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.1.0(23)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "key"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "缓存对象的key。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "keyLen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "key的缓冲区长度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "func"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开发者实现的反序列化函数，于将已序列化的数据恢复为原始对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "出参，缓存对象的内容。开发者需确保传入参数非空。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "函数执行结果："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FILE_CACHE_BOOST_SUCCESS：执行成功。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FILE_CACHE_BOOST_ERROR_KEY_NOT_FOUND：key值不存在。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FILE_CACHE_BOOST_ERROR_IO：发生I/O读写错误。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FILE_CACHE_BOOST_ERROR_NOT_INITIALIZED：未初始化。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FILE_CACHE_BOOST_ERROR_IO_CANCELED：因数据对象内存缓存被释放，导致获取缓存对象任务无法执行。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FILE_CACHE_BOOST_ERROR_INVALID_PARAM：传入的参数无效。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["其他错误详见 ", (0,jsx_runtime.jsx)(_components.a, {
        href: "#filecacheboost_errcode",
        children: "FileCacheBoost_ErrCode"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_filecacheboost_cancelongoingiobykey",
      children: "HMS_FileCacheBoost_CancelOngoingIOByKey()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FileCacheBoost_ErrCode HMS_FileCacheBoost_CancelOngoingIOByKey (const uint8_t * key, size_t keyLen )\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "取消key对应的缓存对象当前正在进行的I/O操作。当开发者需要释放数据对象时，应调用本函数，防止有其他线程对该数据对象进行添加缓存对象或者获取缓存对象的操作。若该对象正处于缓存过程中，则操作将被中止；若已缓存完成，则此函数不做任何处理。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当该函数返回 FILE_CACHE_BOOST_SUCCESS，开发者可以立即释放数据对象；当返回FILE_CACHE_BOOST_ERROR_IO_CANCEL_FAILED，表示当前没有正在执行的 key 需要被取消，开发者需要确认该 key 对应的动作执行完成或无需执行后再释放数据对象。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["例如当一个线程尝试删除数据对象的同时，有其他线程对其进行", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_filecacheboost_addobjectbykey",
        children: "HMS_FileCacheBoost_AddObjectByKey"
      }), "操作， 调用本函数可确保缓存对象的安全性，避免引发数据竞争问题。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.1.0(23)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "key"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "缓存对象的key。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "keyLen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "key的缓冲区长度。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "函数执行结果："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FILE_CACHE_BOOST_SUCCESS：缓存完成和I/O取消成功，开发者可以立即释放数据对象。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FILE_CACHE_BOOST_ERROR_IO_CANCEL_FAILED：I/O取消失败，表示当前没有正在执行的key需要被取消，开发者需要确认该key对应的动作执行完成或无需执行后再释放数据对象。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FILE_CACHE_BOOST_ERROR_INVALID_PARAM：传入的参数无效。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["其他错误详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "#filecacheboost_errcode",
        children: "FileCacheBoost_ErrCode"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_filecacheboost_removeobjectbykey",
      children: "HMS_FileCacheBoost_RemoveObjectByKey()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FileCacheBoost_ErrCode HMS_FileCacheBoost_RemoveObjectByKey (const uint8_t * key, size_t keyLen )\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据指定的key删除对应的缓存对象。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.1.0(23)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "key"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "缓存对象的key。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "keyLen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "key的缓冲区长度。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "函数执行结果："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FILE_CACHE_BOOST_SUCCESS：执行成功。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FILE_CACHE_BOOST_ERROR_KEY_NOT_FOUND：key值不存在。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FILE_CACHE_BOOST_ERROR_NOT_INITIALIZED：未初始化。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FILE_CACHE_BOOST_ERROR_INVALID_PARAM：传入参数无效。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["其他错误详见 ", (0,jsx_runtime.jsx)(_components.a, {
        href: "#filecacheboost_errcode",
        children: "FileCacheBoost_ErrCode"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_filecacheboost_clearallcache",
      children: "HMS_FileCacheBoost_ClearAllCache()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FileCacheBoost_ErrCode HMS_FileCacheBoost_ClearAllCache (void )\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["清理所有的缓存对象。 该函数会释放通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_filecacheboost_addobjectbykey",
        children: "HMS_FileCacheBoost_AddObjectByKey"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_filecacheboost_addserialobjectbykey",
        children: "HMS_FileCacheBoost_AddSerialObjectByKey"
      }), "创建的所有缓存对象。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.1.0(23)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "函数执行结果："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FILE_CACHE_BOOST_SUCCESS：执行成功。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FILE_CACHE_BOOST_ERROR_NOT_INITIALIZED：未初始化。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["其他错误详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "#filecacheboost_errcode",
        children: "FileCacheBoost_ErrCode"
      }), "。"]
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