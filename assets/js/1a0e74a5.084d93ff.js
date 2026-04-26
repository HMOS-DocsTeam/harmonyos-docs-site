"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["450184"], {
672720(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkgraphics_api_arkgraphics_c_arkgraphics_headerfile_capi_external_window_h_capi_external_window_h_md_1a0_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkgraphics-api-arkgraphics-c-arkgraphics-headerfile-capi-external-window-h-capi-external-window-h-md-1a0.json
var site_docs_ref_arkgraphics_api_arkgraphics_c_arkgraphics_headerfile_capi_external_window_h_capi_external_window_h_md_1a0_namespaceObject = JSON.parse('{"id":"arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-external-window-h/capi-external-window-h","title":"external_window.h","description":"概述","source":"@site/docs-ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-external-window-h/capi-external-window-h.md","sourceDirName":"arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-external-window-h","slug":"/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-external-window-h/capi-external-window-h","permalink":"/harmonyos-docs-site/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-external-window-h/capi-external-window-h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":53,"frontMatter":{"title":"external_window.h","sidebar_position":53,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-external-window-h","kit":"图形","last_updated":"2026-04-22","slug":"capi-external-window-h"},"sidebar":"ref","previous":{"title":"buffer_handle.h","permalink":"/harmonyos-docs-site/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-buffer-handle-h/capi-buffer-handle-h"},"next":{"title":"graphic_error_code.h","permalink":"/harmonyos-docs-site/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-graphic-error-code-h/capi-graphic-error-code-h"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-external-window-h/capi-external-window-h.md


const frontMatter = {
	title: 'external_window.h',
	sidebar_position: 53,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-external-window-h',
	kit: '图形',
	last_updated: '2026-04-22',
	slug: 'capi-external-window-h'
};
const contentTitle = 'external_window.h';

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
  "value": "NativeWindowOperation",
  "id": "nativewindowoperation",
  "level": 3
}, {
  "value": "OHScalingMode",
  "id": "ohscalingmode",
  "level": 3
}, {
  "value": "OHScalingModeV2",
  "id": "ohscalingmodev2",
  "level": 3
}, {
  "value": "OHHDRMetadataKey",
  "id": "ohhdrmetadatakey",
  "level": 3
}, {
  "value": "OHSurfaceSource",
  "id": "ohsurfacesource",
  "level": 3
}, {
  "value": "函数说明",
  "id": "函数说明",
  "level": 2
}, {
  "value": "OH_NativeWindow_CreateNativeWindow()",
  "id": "oh_nativewindow_createnativewindow",
  "level": 3
}, {
  "value": "OH_NativeWindow_DestroyNativeWindow()",
  "id": "oh_nativewindow_destroynativewindow",
  "level": 3
}, {
  "value": "OH_NativeWindow_CreateNativeWindowBufferFromSurfaceBuffer()",
  "id": "oh_nativewindow_createnativewindowbufferfromsurfacebuffer",
  "level": 3
}, {
  "value": "OH_NativeWindow_CreateNativeWindowBufferFromNativeBuffer()",
  "id": "oh_nativewindow_createnativewindowbufferfromnativebuffer",
  "level": 3
}, {
  "value": "OH_NativeWindow_DestroyNativeWindowBuffer()",
  "id": "oh_nativewindow_destroynativewindowbuffer",
  "level": 3
}, {
  "value": "OH_NativeWindow_NativeWindowRequestBuffer()",
  "id": "oh_nativewindow_nativewindowrequestbuffer",
  "level": 3
}, {
  "value": "OH_NativeWindow_NativeWindowFlushBuffer()",
  "id": "oh_nativewindow_nativewindowflushbuffer",
  "level": 3
}, {
  "value": "OH_NativeWindow_GetLastFlushedBuffer()",
  "id": "oh_nativewindow_getlastflushedbuffer",
  "level": 3
}, {
  "value": "OH_NativeWindow_NativeWindowAbortBuffer()",
  "id": "oh_nativewindow_nativewindowabortbuffer",
  "level": 3
}, {
  "value": "OH_NativeWindow_NativeWindowHandleOpt()",
  "id": "oh_nativewindow_nativewindowhandleopt",
  "level": 3
}, {
  "value": "OH_NativeWindow_GetBufferHandleFromNative()",
  "id": "oh_nativewindow_getbufferhandlefromnative",
  "level": 3
}, {
  "value": "OH_NativeWindow_NativeObjectReference()",
  "id": "oh_nativewindow_nativeobjectreference",
  "level": 3
}, {
  "value": "OH_NativeWindow_NativeObjectUnreference()",
  "id": "oh_nativewindow_nativeobjectunreference",
  "level": 3
}, {
  "value": "OH_NativeWindow_GetNativeObjectMagic()",
  "id": "oh_nativewindow_getnativeobjectmagic",
  "level": 3
}, {
  "value": "OH_NativeWindow_NativeWindowSetScalingMode()",
  "id": "oh_nativewindow_nativewindowsetscalingmode",
  "level": 3
}, {
  "value": "OH_NativeWindow_NativeWindowSetMetaData()",
  "id": "oh_nativewindow_nativewindowsetmetadata",
  "level": 3
}, {
  "value": "OH_NativeWindow_NativeWindowSetMetaDataSet()",
  "id": "oh_nativewindow_nativewindowsetmetadataset",
  "level": 3
}, {
  "value": "OH_NativeWindow_NativeWindowSetTunnelHandle()",
  "id": "oh_nativewindow_nativewindowsettunnelhandle",
  "level": 3
}, {
  "value": "OH_NativeWindow_NativeWindowAttachBuffer()",
  "id": "oh_nativewindow_nativewindowattachbuffer",
  "level": 3
}, {
  "value": "OH_NativeWindow_NativeWindowDetachBuffer()",
  "id": "oh_nativewindow_nativewindowdetachbuffer",
  "level": 3
}, {
  "value": "OH_NativeWindow_GetSurfaceId()",
  "id": "oh_nativewindow_getsurfaceid",
  "level": 3
}, {
  "value": "OH_NativeWindow_CreateNativeWindowFromSurfaceId()",
  "id": "oh_nativewindow_createnativewindowfromsurfaceid",
  "level": 3
}, {
  "value": "OH_NativeWindow_NativeWindowSetScalingModeV2()",
  "id": "oh_nativewindow_nativewindowsetscalingmodev2",
  "level": 3
}, {
  "value": "OH_NativeWindow_GetLastFlushedBufferV2()",
  "id": "oh_nativewindow_getlastflushedbufferv2",
  "level": 3
}, {
  "value": "OH_NativeWindow_SetBufferHold()",
  "id": "oh_nativewindow_setbufferhold",
  "level": 3
}, {
  "value": "OH_NativeWindow_WriteToParcel()",
  "id": "oh_nativewindow_writetoparcel",
  "level": 3
}, {
  "value": "OH_NativeWindow_ReadFromParcel()",
  "id": "oh_nativewindow_readfromparcel",
  "level": 3
}, {
  "value": "OH_NativeWindow_SetColorSpace()",
  "id": "oh_nativewindow_setcolorspace",
  "level": 3
}, {
  "value": "OH_NativeWindow_GetColorSpace()",
  "id": "oh_nativewindow_getcolorspace",
  "level": 3
}, {
  "value": "OH_NativeWindow_SetMetadataValue()",
  "id": "oh_nativewindow_setmetadatavalue",
  "level": 3
}, {
  "value": "OH_NativeWindow_GetMetadataValue()",
  "id": "oh_nativewindow_getmetadatavalue",
  "level": 3
}, {
  "value": "OH_NativeWindow_CleanCache()",
  "id": "oh_nativewindow_cleancache",
  "level": 3
}, {
  "value": "OH_NativeWindow_PreAllocBuffers()",
  "id": "oh_nativewindow_preallocbuffers",
  "level": 3
}, {
  "value": "OH_NativeWindow_LockBuffer()",
  "id": "oh_nativewindow_lockbuffer",
  "level": 3
}, {
  "value": "OH_NativeWindow_UnlockAndFlushBuffer()",
  "id": "oh_nativewindow_unlockandflushbuffer",
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
    p: "p",
    pre: "pre",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "external_windowh",
        children: "external_window.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义获取和使用NativeWindow的相关函数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <native_window/external_window.h>"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "库："
        })
      }), " libnative_window.so"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeWindow"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 8"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "相关模块："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-module/capi-nativewindow/capi-nativewindow",
        children: "NativeWindow"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "结构体",
      children: "结构体"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-nativewindow-region/capi-nativewindow-region",
              children: "Region"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Region"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示本地窗口OHNativeWindow需要更新内容的矩形区域（脏区）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-nativewindow-rect/capi-nativewindow-rect",
              children: "Rect"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "如果rects是空指针nullptr，默认Buffer大小为脏区。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-nativewindow-ohhdrmetadata/capi-nativewindow-ohhdrmetadata",
              children: "OHHDRMetaData"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OHHDRMetaData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HDR元数据结构体定义。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-nativewindow-ohextdatahandle/capi-nativewindow-ohextdatahandle",
              children: "OHExtDataHandle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OHExtDataHandle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "扩展数据句柄结构体定义。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-nativewindow-ohipcparcel/capi-nativewindow-ohipcparcel",
              children: "OHIPCParcel"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OHIPCParcel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "提供对IPC序列化对象的访问功能。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-nativewindow-nativewindow/capi-nativewindow-nativewindow",
              children: "NativeWindow"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OHNativeWindow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "提供对OHNativeWindow的访问功能。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-nativewindow-nativewindowbuffer/capi-nativewindow-nativewindowbuffer",
              children: "NativeWindowBuffer"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OHNativeWindowBuffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "提供对OHNativeWindowBuffer的访问功能。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-oh-nativebuffer-oh-nativebuffer/capi-oh-nativebuffer-oh-nativebuffer",
              children: "OH_NativeBuffer"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NativeBuffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "提供对OH_NativeBuffer的访问功能。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "枚举",
      children: "枚举"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "#nativewindowoperation",
              children: "NativeWindowOperation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NativeWindowOperation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NativeWindow_NativeWindowHandleOpt函数中的操作码。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#ohscalingmode",
              children: "OHScalingMode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OHScalingMode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "缩放模式Scaling Mode。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#ohscalingmodev2",
              children: "OHScalingModeV2"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OHScalingModeV2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "渲染缩放模式枚举。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#ohhdrmetadatakey",
              children: "OHHDRMetadataKey"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OHHDRMetadataKey"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "枚举HDR元数据关键字。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#ohsurfacesource",
              children: "OHSurfaceSource"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OHSurfaceSource"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "本地窗口内容来源类型枚举。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "函数",
      children: "函数"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "#oh_nativewindow_createnativewindow",
              children: "OHNativeWindow* OH_NativeWindow_CreateNativeWindow(void* pSurface)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建OHNativeWindow实例，每次调用都会产生一个新的OHNativeWindow实例。  说明：此接口不可用，可通过OH_NativeImage_AcquireNativeWindow创建，或通过XComponent创建。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativewindow_destroynativewindow",
              children: "void OH_NativeWindow_DestroyNativeWindow(OHNativeWindow* window)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将OHNativeWindow对象的引用计数减1，当引用计数为0的时候，该OHNativeWindow对象会被析构掉。  本接口为非线程安全类型接口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativewindow_createnativewindowbufferfromsurfacebuffer",
              children: "OHNativeWindowBuffer* OH_NativeWindow_CreateNativeWindowBufferFromSurfaceBuffer(void* pSurfaceBuffer)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建OHNativeWindowBuffer实例，每次调用都会产生一个新的OHNativeWindowBuffer实例。  说明：此接口不可用，使用OH_NativeWindow_CreateNativeWindowBufferFromNativeBuffer替代。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativewindow_createnativewindowbufferfromnativebuffer",
              children: "OHNativeWindowBuffer* OH_NativeWindow_CreateNativeWindowBufferFromNativeBuffer(OH_NativeBuffer* nativeBuffer)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建OHNativeWindowBuffer实例，每次调用都会产生一个新的OHNativeWindowBuffer实例。  本接口需要与", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativewindow_destroynativewindowbuffer",
              children: "OH_NativeWindow_DestroyNativeWindowBuffer"
            }), "接口配合使用，否则会存在内存泄露。  本接口为非线程安全类型接口。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativewindow_destroynativewindowbuffer",
              children: "void OH_NativeWindow_DestroyNativeWindowBuffer(OHNativeWindowBuffer* buffer)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将OHNativeWindowBuffer对象的引用计数减1，当引用计数为0的时候，该OHNativeWindowBuffer对象会被析构掉。  本接口为非线程安全类型接口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativewindow_nativewindowrequestbuffer",
              children: "int32_t OH_NativeWindow_NativeWindowRequestBuffer(OHNativeWindow *window,OHNativeWindowBuffer **buffer, int *fenceFd)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["通过OHNativeWindow对象申请一块OHNativeWindowBuffer，用以内容生产。  在调用本接口前，需要通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#nativewindowoperation",
              children: "SET_BUFFER_GEOMETRY"
            }), "对OHNativeWindow设置宽高。  本接口需要与", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativewindow_nativewindowflushbuffer",
              children: "OH_NativeWindow_NativeWindowFlushBuffer"
            }), "接口配合使用，否则内存会耗尽。  当fenceFd使用完，用户需要将其close。  本接口为非线程安全类型接口。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativewindow_nativewindowflushbuffer",
              children: "int32_t OH_NativeWindow_NativeWindowFlushBuffer(OHNativeWindow *window, OHNativeWindowBuffer *buffer,int fenceFd, Region region)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过OHNativeWindow将生产好内容的OHNativeWindowBuffer放回到Buffer队列中，用以内容消费。  系统会将fenceFd关闭，无需用户close。  本接口为非线程安全类型接口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativewindow_getlastflushedbuffer",
              children: "int32_t OH_NativeWindow_GetLastFlushedBuffer(OHNativeWindow *window, OHNativeWindowBuffer **buffer,int *fenceFd, float matrix[16])"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从OHNativeWindow获取上次送回到buffer队列中的OHNativeWindowBuffer。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativewindow_nativewindowabortbuffer",
              children: "int32_t OH_NativeWindow_NativeWindowAbortBuffer(OHNativeWindow *window, OHNativeWindowBuffer *buffer)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过OHNativeWindow将之前申请出来的OHNativeWindowBuffer返还到Buffer队列中，供下次再申请。  本接口为非线程安全类型接口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativewindow_nativewindowhandleopt",
              children: "int32_t OH_NativeWindow_NativeWindowHandleOpt(OHNativeWindow *window, int code, ...)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置/获取OHNativeWindow的属性，包括设置/获取宽高、内容格式等。  本接口为非线程安全类型接口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativewindow_getbufferhandlefromnative",
              children: "BufferHandle *OH_NativeWindow_GetBufferHandleFromNative(OHNativeWindowBuffer *buffer)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过OHNativeWindowBuffer获取该buffer的BufferHandle指针。  本接口为非线程安全类型接口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativewindow_nativeobjectreference",
              children: "int32_t OH_NativeWindow_NativeObjectReference(void *obj)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["增加一个NativeObject的引用计数。  本接口需要与", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativewindow_nativeobjectunreference",
              children: "OH_NativeWindow_NativeObjectUnreference"
            }), "接口配合使用，否则会存在内存泄露。  本接口为非线程安全类型接口。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativewindow_nativeobjectunreference",
              children: "int32_t OH_NativeWindow_NativeObjectUnreference(void *obj)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "减少一个NativeObject的引用计数，当引用计数减少为0时，该NativeObject将被析构掉。  本接口为非线程安全类型接口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativewindow_getnativeobjectmagic",
              children: "int32_t OH_NativeWindow_GetNativeObjectMagic(void *obj)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取NativeObject的MagicId。  本接口为非线程安全类型接口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativewindow_nativewindowsetscalingmode",
              children: "int32_t OH_NativeWindow_NativeWindowSetScalingMode(OHNativeWindow *window, uint32_t sequence,OHScalingMode scalingMode)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置OHNativeWindow的ScalingMode。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativewindow_nativewindowsetmetadata",
              children: "int32_t OH_NativeWindow_NativeWindowSetMetaData(OHNativeWindow *window, uint32_t sequence, int32_t size,const OHHDRMetaData *metaData)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置OHNativeWindow的元数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativewindow_nativewindowsetmetadataset",
              children: "int32_t OH_NativeWindow_NativeWindowSetMetaDataSet(OHNativeWindow *window, uint32_t sequence, OHHDRMetadataKey key,int32_t size, const uint8_t *metaData)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置OHNativeWindow的元数据集。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativewindow_nativewindowsettunnelhandle",
              children: "int32_t OH_NativeWindow_NativeWindowSetTunnelHandle(OHNativeWindow *window, const OHExtDataHandle *handle)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置OHNativeWindow的TunnelHandle。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativewindow_nativewindowattachbuffer",
              children: "int32_t OH_NativeWindow_NativeWindowAttachBuffer(OHNativeWindow *window, OHNativeWindowBuffer *buffer)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["将OHNativeWindowBuffer添加进OHNativeWindow中。  本接口需要与", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativewindow_nativewindowdetachbuffer",
              children: "OH_NativeWindow_NativeWindowDetachBuffer"
            }), "接口配合使用，否则会存在内存管理混乱问题。  本接口为非线程安全类型接口。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativewindow_nativewindowdetachbuffer",
              children: "int32_t OH_NativeWindow_NativeWindowDetachBuffer(OHNativeWindow *window, OHNativeWindowBuffer *buffer)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将OHNativeWindowBuffer从OHNativeWindow中分离。  本接口为非线程安全类型接口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativewindow_getsurfaceid",
              children: "int32_t OH_NativeWindow_GetSurfaceId(OHNativeWindow *window, uint64_t *surfaceId)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过OHNativeWindow获取对应的surfaceId。  本接口为非线程安全类型接口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativewindow_createnativewindowfromsurfaceid",
              children: "int32_t OH_NativeWindow_CreateNativeWindowFromSurfaceId(uint64_t surfaceId, OHNativeWindow **window)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["通过surfaceId创建对应的OHNativeWindow。  本接口需要与", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativewindow_destroynativewindow",
              children: "OH_NativeWindow_DestroyNativeWindow"
            }), "接口配合使用，否则会存在内存泄露。  如果存在并发释放OHNativeWindow的情况，需要通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativewindow_nativeobjectreference",
              children: "OH_NativeWindow_NativeObjectReference"
            }), "和", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativewindow_nativeobjectunreference",
              children: "OH_NativeWindow_NativeObjectUnreference"
            }), "对OHNativeWindow进行引用计数加一和减一。  通过surfaceId获取的surface需要是在本进程中创建的，不能跨进程获取surface。  本接口为非线程安全类型接口。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativewindow_nativewindowsetscalingmodev2",
              children: "int32_t OH_NativeWindow_NativeWindowSetScalingModeV2(OHNativeWindow* window, OHScalingModeV2 scalingMode)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置OHNativeWindow的渲染缩放模式。  本接口为非线程安全类型接口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativewindow_getlastflushedbufferv2",
              children: "int32_t OH_NativeWindow_GetLastFlushedBufferV2(OHNativeWindow *window, OHNativeWindowBuffer **buffer,int *fenceFd, float matrix[16])"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从OHNativeWindow获取上次送回到buffer队列中的OHNativeWindowBuffer,与OH_NativeWindow_GetLastFlushedBuffer的差异在于matrix不同。  本接口需要与", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativewindow_nativeobjectunreference",
              children: "OH_NativeWindow_NativeObjectUnreference"
            }), "接口配合使用，否则会存在内存泄露。  本接口为非线程安全类型接口。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativewindow_setbufferhold",
              children: "void OH_NativeWindow_SetBufferHold(OHNativeWindow *window)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "启用单帧缓存机制，通过提前缓存一帧buffer并延迟显示，用于平滑帧率波动。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativewindow_writetoparcel",
              children: "int32_t OH_NativeWindow_WriteToParcel(OHNativeWindow *window, OHIPCParcel *parcel)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将窗口对象写入IPC序列化对象中。  本接口为非线程安全类型接口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativewindow_readfromparcel",
              children: "int32_t OH_NativeWindow_ReadFromParcel(OHIPCParcel *parcel, OHNativeWindow **window)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从IPC序列化对象中读取窗口对象。  本接口将会创建一个OHNativeWindow，当窗口对象使用完，开发者需要与", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativewindow_destroynativewindow",
              children: "OH_NativeWindow_DestroyNativeWindow"
            }), "接口配合使用，否则会存在内存泄漏。  本接口为非线程安全类型接口。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativewindow_setcolorspace",
              children: "int32_t OH_NativeWindow_SetColorSpace(OHNativeWindow *window, OH_NativeBuffer_ColorSpace colorSpace)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为OHNativeWindow设置颜色空间属性。  本接口为非线程安全类型接口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativewindow_getcolorspace",
              children: "int32_t OH_NativeWindow_GetColorSpace(OHNativeWindow *window, OH_NativeBuffer_ColorSpace *colorSpace)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取OHNativeWindow颜色空间属性。  本接口为非线程安全类型接口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativewindow_setmetadatavalue",
              children: "int32_t OH_NativeWindow_SetMetadataValue(OHNativeWindow *window, OH_NativeBuffer_MetadataKey metadataKey,int32_t size, uint8_t *metadata)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为OHNativeWindow设置元数据属性值。  本接口为非线程安全类型接口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativewindow_getmetadatavalue",
              children: "int32_t OH_NativeWindow_GetMetadataValue(OHNativeWindow *window, OH_NativeBuffer_MetadataKey metadataKey,int32_t *size, uint8_t **metadata)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取OHNativeWindow元数据属性值。  本接口为非线程安全类型接口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativewindow_cleancache",
              children: "int32_t OH_NativeWindow_CleanCache(OHNativeWindow *window)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["清理OHNativeWindow中的OHNativeWindowBuffer缓存。  使用该接口清理缓存前，需确保已通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativewindow_nativewindowrequestbuffer",
              children: "OH_NativeWindow_NativeWindowRequestBuffer"
            }), "接口成功申请OHNativeWindowBuffer。  本接口为非线程安全类型接口。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativewindow_preallocbuffers",
              children: "int32_t OH_NativeWindow_PreAllocBuffers(OHNativeWindow *window, uint32_t allocBufferCnt)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["通过OHNativeWindow对象提前申请多块OHNativeWindowBuffer，用以内容生产。  在调用本接口前，需要通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-external-window-h/capi-external-window-h#oh_nativewindow_nativewindowhandleopt",
              children: "OH_NativeWindow_NativeWindowHandleOpt"
            }), "对OHNativeWindow设置宽高。  本接口为非线程安全类型接口。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativewindow_lockbuffer",
              children: "int32_t OH_NativeWindow_LockBuffer(OHNativeWindow* window, Region region, OHNativeWindowBuffer** buffer)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["通过OHNativeWindow对象申请一块OHNativeWindowBuffer，用以内容生产，并对该OHNativeWindowBuffer加锁。  本接口需要和", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-external-window-h/capi-external-window-h#oh_nativewindow_unlockandflushbuffer",
              children: "OH_NativeWindow_UnlockAndFlushBuffer"
            }), "接口配合使用。  本接口对OHNativeWindowBuffer加锁后，需要调", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-external-window-h/capi-external-window-h#oh_nativewindow_unlockandflushbuffer",
              children: "OH_NativeWindow_UnlockAndFlushBuffer"
            }), "接口解锁后才能重新对OHNativeWindowBuffer加锁。  若用本接口重复对OHNativeWindowBuffer加锁，会返回操作非法错误码。  本接口支持通过CPU上的内存读写直接渲染图像。  本接口为非线程安全类型接口。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativewindow_unlockandflushbuffer",
              children: "int32_t OH_NativeWindow_UnlockAndFlushBuffer(OHNativeWindow* window)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["通过OHNativeWindow将生产好内容的OHNativeWindowBuffer放回到Buffer队列中，用以内容消费，并对OHNativeWindowBuffer解锁。  本接口需要和", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-external-window-h/capi-external-window-h#oh_nativewindow_lockbuffer",
              children: "OH_NativeWindow_LockBuffer"
            }), "接口配合使用。  若用本接口重复对OHNativeWindowBuffer解锁，会返回操作非法错误码。  本接口为非线程安全类型接口。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "枚举类型说明",
      children: "枚举类型说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "nativewindowoperation",
      children: "NativeWindowOperation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum NativeWindowOperation\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "OH_NativeWindow_NativeWindowHandleOpt函数中的操作码。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeWindow"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 8"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "SET_BUFFER_GEOMETRY"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置本地窗口缓冲区几何图形，函数中的可变参数是[输入] int32_t width，[输入] int32_t height。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 设置与获取的宽高顺序不一致，请使用时注意。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GET_BUFFER_GEOMETRY"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取本地窗口缓冲区几何图形，函数中的可变参数是[输出] int32_t *height，[输出] int32_t *width。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 获取与设置的宽高顺序不一致，请使用时注意。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GET_FORMAT"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取本地窗口缓冲区格式，函数中的可变参数是[输出] int32_t *format，取值具体可见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-buffer-common-h/capi-buffer-common-h#oh_nativebuffer_format",
              children: "OH_NativeBuffer_Format"
            }), "枚举值。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SET_FORMAT"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置本地窗口缓冲区格式，函数中的可变参数是[输入] int32_t format，取值具体可见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-buffer-common-h/capi-buffer-common-h#oh_nativebuffer_format",
              children: "OH_NativeBuffer_Format"
            }), "枚举值。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GET_USAGE"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取本地窗口读写方式，函数中的可变参数是[输出] uint64_t *usage，取值具体可见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-native-buffer-h/capi-native-buffer-h#oh_nativebuffer_usage",
              children: "OH_NativeBuffer_Usage"
            }), "枚举值。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SET_USAGE"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置本地窗口缓冲区读写方式，函数中的可变参数是[输入] uint64_t usage，取值具体可见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-native-buffer-h/capi-native-buffer-h#oh_nativebuffer_usage",
              children: "OH_NativeBuffer_Usage"
            }), "枚举值。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SET_STRIDE"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置本地窗口缓冲区步幅，函数中的可变参数是[输入] int32_t stride。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "废弃版本："
              })
            }), " 16"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GET_STRIDE"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取本地窗口缓冲区步幅，函数中的可变参数是[输出] int32_t *stride。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "废弃版本："
              })
            }), " 16  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "替代方案："
              })
            }), " 使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativewindow_getbufferhandlefromnative",
              children: "OH_NativeWindow_GetBufferHandleFromNative"
            }), "接口获取BufferHandle实例，从", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-nativewindow-bufferhandle/capi-nativewindow-bufferhandle",
              children: "BufferHandle"
            }), "实例中获取stride值。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SET_SWAP_INTERVAL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置本地窗口缓冲区交换间隔，函数中的可变参数是[输入] int32_t interval。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GET_SWAP_INTERVAL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取本地窗口缓冲区交换间隔，函数中的可变参数是[输出] int32_t *interval。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SET_TIMEOUT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置请求本地窗口请求缓冲区的超时等待时间，未手动设置时默认值为3000毫秒，函数中的可变参数是[输入] int32_t timeout, 单位为毫秒。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GET_TIMEOUT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取请求本地窗口请求缓冲区的超时等待时间，未手动设置时默认值为3000毫秒，函数中的可变参数是[输出] int32_t *timeout，单位为毫秒。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SET_COLOR_GAMUT"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置本地窗口缓冲区色彩空间，函数中的可变参数是[输入] int32_t colorGamut，取值具体可见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-native-buffer-h/capi-native-buffer-h#oh_nativebuffer_colorgamut",
              children: "OH_NativeBuffer_ColorGamut"
            }), "枚举值。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GET_COLOR_GAMUT"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取本地窗口缓冲区色彩空间，函数中的可变参数是[输出] int32_t *colorGamut，取值具体可见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-native-buffer-h/capi-native-buffer-h#oh_nativebuffer_colorgamut",
              children: "OH_NativeBuffer_ColorGamut"
            }), "枚举值。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SET_TRANSFORM"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置本地窗口缓冲区变换，函数中的可变参数是[输入] int32_t transform，取值具体可见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-buffer-common-h/capi-buffer-common-h#oh_nativebuffer_transformtype",
              children: "OH_NativeBuffer_TransformType"
            }), "枚举值。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GET_TRANSFORM"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取本地窗口缓冲区变换，函数中的可变参数是[输出] int32_t *transform，取值具体可见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-buffer-common-h/capi-buffer-common-h#oh_nativebuffer_transformtype",
              children: "OH_NativeBuffer_TransformType"
            }), "枚举值。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SET_UI_TIMESTAMP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置本地窗口缓冲区UI时间戳，函数中的可变参数是[输入] uint64_t uiTimestamp。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GET_BUFFERQUEUE_SIZE"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取内存队列大小，函数中的可变参数是[输出] int32_t *size。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SET_SOURCE_TYPE"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置本地窗口内容来源，函数中的可变参数是[输入] int32_t sourceType，取值具体可见", (0,jsx_runtime.jsx)(_components.a, {
              href: "#ohsurfacesource",
              children: "OHSurfaceSource"
            }), "枚举值。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GET_SOURCE_TYPE"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取本地窗口内容来源，函数中的可变参数是[输出] int32_t *sourceType，取值具体可见", (0,jsx_runtime.jsx)(_components.a, {
              href: "#ohsurfacesource",
              children: "OHSurfaceSource"
            }), "枚举值。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SET_APP_FRAMEWORK_TYPE"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置本地窗口应用框架名称，函数中的可变参数是[输入] char* frameworkType，最大支持64字节。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GET_APP_FRAMEWORK_TYPE"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取本地窗口应用框架名称，函数中的可变参数是[输出] char** frameworkType。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SET_HDR_WHITE_POINT_BRIGHTNESS"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置HDR白点亮度，函数中的可变参数是[输入] float brightness。取值范围为[0.0f, 1.0f]。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SET_SDR_WHITE_POINT_BRIGHTNESS"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置SDR白点亮度，函数中的可变参数是[输入] float brightness。取值范围为[0.0f, 1.0f]。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SET_DESIRED_PRESENT_TIMESTAMP = 24"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置本地窗口缓冲区期望上屏时间的时间戳。  当且仅当RenderService为本地窗口的消费者时，该时间戳生效  本操作执行后需要配合调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativewindow_nativewindowflushbuffer",
              children: "OH_NativeWindow_NativeWindowFlushBuffer"
            }), "生效。  生产者下一次放入队列的buffer，达到该期望上屏时间后，才会被RenderService消费并上屏。  如果buffer队列中存在多个生产者放入的buffer，都设置了desiredPresentTimestamp并已达到期望上屏时间，则较早入队的buffer将被消费者丢弃回队列。  如果期望上屏时间大于消费者提供的时间 1 秒以上，则该期望上屏时间戳将被忽略。  函数中的可变参数是[输入] int64_t desiredPresentTimestamp，取值范围大于0，应由std::chrono::steady_clock标准库时钟生成，且单位为纳秒。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 13"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ohscalingmode",
      children: "OHScalingMode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OHScalingMode\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "缩放模式Scaling Mode。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeWindow"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 9"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "废弃版本："
        })
      }), " 10"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "替代接口："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "#ohscalingmodev2",
        children: "OHScalingModeV2"
      })]
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
            children: "OH_SCALING_MODE_FREEZE = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在接收到窗口大小的缓冲区之前，不可以更新窗口内容。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_SCALING_MODE_SCALE_TO_WINDOW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "缓冲区在二维中缩放以匹配窗口大小。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_SCALING_MODE_SCALE_CROP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "缓冲区被统一缩放，使得缓冲区的较小尺寸与窗口大小匹配。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_SCALING_MODE_NO_SCALE_CROP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "窗口被裁剪为缓冲区裁剪矩形的大小，裁剪矩形之外的像素被视为完全透明。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ohscalingmodev2",
      children: "OHScalingModeV2"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OHScalingModeV2\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "渲染缩放模式枚举。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeWindow"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "OH_SCALING_MODE_FREEZE_V2 = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "冻结窗口，在接收到和窗口大小相等的缓冲区之前，窗口内容不进行更新。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_SCALING_MODE_SCALE_TO_WINDOW_V2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "缓冲区进行拉伸缩放以匹配窗口大小。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_SCALING_MODE_SCALE_CROP_V2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "缓冲区按原比例缩放，使得缓冲区的较小边与窗口匹配，较长边超出窗口部分被视为透明。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_SCALING_MODE_NO_SCALE_CROP_V2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按窗口大小将缓冲区裁剪，裁剪矩形之外的像素被视为完全透明。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_SCALING_MODE_SCALE_FIT_V2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "缓冲区按原比例缩放。优先显示所有缓冲区内容。如果比例与窗口比例不同，用背景颜色填充窗口的未填充区域。  模拟器不支持该模式。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ohhdrmetadatakey",
      children: "OHHDRMetadataKey"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OHHDRMetadataKey\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "枚举HDR元数据关键字。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeWindow"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 9"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "废弃版本："
        })
      }), " 10"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "OH_METAKEY_RED_PRIMARY_X = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "红基色X坐标。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_METAKEY_RED_PRIMARY_Y = 1,"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "红基色Y坐标。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_METAKEY_GREEN_PRIMARY_X = 2,"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "绿基色X坐标。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_METAKEY_GREEN_PRIMARY_Y = 3,"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "绿基色Y坐标。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_METAKEY_BLUE_PRIMARY_X = 4,"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "蓝基色X坐标。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_METAKEY_BLUE_PRIMARY_Y = 5,"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "蓝基色Y坐标。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_METAKEY_WHITE_PRIMARY_X = 6,"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "白点X坐标。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_METAKEY_WHITE_PRIMARY_Y = 7,"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "白点Y坐标。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_METAKEY_MAX_LUMINANCE = 8,"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "最大的光亮度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_METAKEY_MIN_LUMINANCE = 9,"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "最小的光亮度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_METAKEY_MAX_CONTENT_LIGHT_LEVEL = 10,"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "最大的内容亮度水平。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_METAKEY_MAX_FRAME_AVERAGE_LIGHT_LEVEL = 11,"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "最大的帧平均亮度水平。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_METAKEY_HDR10_PLUS = 12,"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HDR10 Plus。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_METAKEY_HDR_VIVID = 13,"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vivid。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ohsurfacesource",
      children: "OHSurfaceSource"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OHSurfaceSource\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeWindow"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本地窗口内容来源类型枚举。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "OH_SURFACE_SOURCE_DEFAULT = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "窗口内容默认来源。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_SURFACE_SOURCE_UI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "窗口内容来自于UI。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_SURFACE_SOURCE_GAME"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "窗口内容来自于游戏。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_SURFACE_SOURCE_CAMERA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "窗口内容来自于相机。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_SURFACE_SOURCE_VIDEO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "窗口内容来自于视频。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数说明",
      children: "函数说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativewindow_createnativewindow",
      children: "OH_NativeWindow_CreateNativeWindow()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OHNativeWindow* OH_NativeWindow_CreateNativeWindow(void* pSurface)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建OHNativeWindow实例，每次调用都会产生一个新的OHNativeWindow实例。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["说明：此接口不可用，可通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-native-image-h/capi-native-image-h#oh_nativeimage_acquirenativewindow",
        children: "OH_NativeImage_AcquireNativeWindow"
      }), "创建，或通过XComponent创建。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeWindow"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 8"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "废弃版本："
        })
      }), " 从API version 12开始废弃，不再提供替代接口。"]
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
            children: "void* pSurface"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "一个指向生产者ProduceSurface的指针，类型为sptr<OHOS::Surface>。"
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-nativewindow-nativewindow/capi-nativewindow-nativewindow",
              children: "OHNativeWindow"
            }), "*"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回一个指针，指向OHNativeWindow的结构体实例。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativewindow_destroynativewindow",
      children: "OH_NativeWindow_DestroyNativeWindow()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_NativeWindow_DestroyNativeWindow(OHNativeWindow* window)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将OHNativeWindow对象的引用计数减1，当引用计数为0的时候，该OHNativeWindow对象会被析构掉。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本接口为非线程安全类型接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeWindow"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 8"]
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
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-nativewindow-nativewindow/capi-nativewindow-nativewindow",
              children: "OHNativeWindow"
            }), "* window"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "一个OHNativeWindow的结构体实例的指针。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativewindow_createnativewindowbufferfromsurfacebuffer",
      children: "OH_NativeWindow_CreateNativeWindowBufferFromSurfaceBuffer()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OHNativeWindowBuffer* OH_NativeWindow_CreateNativeWindowBufferFromSurfaceBuffer(void* pSurfaceBuffer)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建OHNativeWindowBuffer实例，每次调用都会产生一个新的OHNativeWindowBuffer实例。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["说明：此接口不可用，使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_nativewindow_createnativewindowbufferfromnativebuffer",
        children: "OH_NativeWindow_CreateNativeWindowBufferFromNativeBuffer"
      }), "替代。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeWindow"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 8"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "废弃版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "替代接口："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_nativewindow_createnativewindowbufferfromnativebuffer",
        children: "OH_NativeWindow_CreateNativeWindowBufferFromNativeBuffer"
      })]
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
            children: "void* pSurfaceBuffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "一个指向生产者buffer的指针，类型为sptrOHOS::SurfaceBuffer。"
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
            children: "OHNativeWindowBuffer*"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回一个指针，指向OHNativeWindowBuffer的结构体实例。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativewindow_createnativewindowbufferfromnativebuffer",
      children: "OH_NativeWindow_CreateNativeWindowBufferFromNativeBuffer()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OHNativeWindowBuffer* OH_NativeWindow_CreateNativeWindowBufferFromNativeBuffer(OH_NativeBuffer* nativeBuffer)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建OHNativeWindowBuffer实例，每次调用都会产生一个新的OHNativeWindowBuffer实例。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本接口需要与", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_nativewindow_destroynativewindowbuffer",
        children: "OH_NativeWindow_DestroyNativeWindowBuffer"
      }), "接口配合使用，否则会存在内存泄露。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本接口为非线程安全类型接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeWindow"]
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
            children: "OH_NativeBuffer* nativeBuffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "一个指向OH_NativeBuffer的指针。"
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
            children: "OHNativeWindowBuffer*"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回一个指针，指向OHNativeWindowBuffer的结构体实例。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativewindow_destroynativewindowbuffer",
      children: "OH_NativeWindow_DestroyNativeWindowBuffer()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_NativeWindow_DestroyNativeWindowBuffer(OHNativeWindowBuffer* buffer)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将OHNativeWindowBuffer对象的引用计数减1，当引用计数为0的时候，该OHNativeWindowBuffer对象会被析构掉。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本接口为非线程安全类型接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeWindow"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 8"]
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
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-nativewindow-nativewindowbuffer/capi-nativewindow-nativewindowbuffer",
              children: "OHNativeWindowBuffer"
            }), "* buffer"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "一个OHNativeWindowBuffer的结构体实例的指针。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativewindow_nativewindowrequestbuffer",
      children: "OH_NativeWindow_NativeWindowRequestBuffer()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_NativeWindow_NativeWindowRequestBuffer(OHNativeWindow *window,OHNativeWindowBuffer **buffer, int *fenceFd)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过OHNativeWindow对象申请一块OHNativeWindowBuffer，用以内容生产。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在调用本接口前，需要通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#nativewindowoperation",
        children: "SET_BUFFER_GEOMETRY"
      }), "对OHNativeWindow设置宽高。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "未设置宽高将使用消费端设置的默认宽高。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本接口需要与", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_nativewindow_nativewindowflushbuffer",
        children: "OH_NativeWindow_NativeWindowFlushBuffer"
      }), "接口配合使用，否则内存会耗尽。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当fenceFd使用完，用户需要将其close。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本接口为非线程安全类型接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeWindow"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 8"]
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
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-nativewindow-nativewindow/capi-nativewindow-nativewindow",
              children: "OHNativeWindow"
            }), " *window"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "一个OHNativeWindow的结构体实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-nativewindow-nativewindowbuffer/capi-nativewindow-nativewindowbuffer",
              children: "OHNativeWindowBuffer"
            }), " **buffer"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "一个指向OHNativeWindowBuffer指针的指针（二级指针）。  通过OH_NativeWindow_GetBufferHandleFromNative可获取BufferHandle结构体，访问缓冲区内存。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int *fenceFd"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "一个文件描述符句柄，用于GPU/CPU同步：不同取值及含义如下：  - 返回≥0：缓冲区正被GPU使用，需要等待文件描述符fenceFd就绪。  - 返回-1：缓冲区可直接使用。"
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
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回值为0表示执行成功，其他返回值可参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-graphic-error-code-h/capi-graphic-error-code-h#ohnativeerrorcode",
              children: "OHNativeErrorCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativewindow_nativewindowflushbuffer",
      children: "OH_NativeWindow_NativeWindowFlushBuffer()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_NativeWindow_NativeWindowFlushBuffer(OHNativeWindow *window, OHNativeWindowBuffer *buffer,int fenceFd, Region region)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过OHNativeWindow将生产好内容的OHNativeWindowBuffer放回到Buffer队列中，用以内容消费。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "系统会将fenceFd关闭，无需用户close。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本接口为非线程安全类型接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeWindow"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 8"]
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
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-nativewindow-nativewindow/capi-nativewindow-nativewindow",
              children: "OHNativeWindow"
            }), " *window"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "一个OHNativeWindow的结构体实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-nativewindow-nativewindowbuffer/capi-nativewindow-nativewindowbuffer",
              children: "OHNativeWindowBuffer"
            }), " *buffer"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "一个OHNativeWindowBuffer的结构体实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int fenceFd"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "一个文件描述符句柄，用以同步时序。不同取值及含义如下：  - -1：CPU渲染完成，无需同步时序。  - ≥0：从GPU同步对象转换（如EGL的eglDupNativeFenceFDANDROID），对端需要通过此fenceFd同步时序。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-nativewindow-region/capi-nativewindow-region",
              children: "Region"
            }), " region"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "一个Region结构体，表示一块脏区域，该区域有内容更新。  Region.rectNumber限制最大数量为1000，当rectNumber≤0或者rectNumber>1000时，使用整个buffer作为脏区。  Region.rect以buffer左下角为坐标原点。"
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
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回值为0表示执行成功，其他返回值可参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-graphic-error-code-h/capi-graphic-error-code-h#ohnativeerrorcode",
              children: "OHNativeErrorCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativewindow_getlastflushedbuffer",
      children: "OH_NativeWindow_GetLastFlushedBuffer()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_NativeWindow_GetLastFlushedBuffer(OHNativeWindow *window, OHNativeWindowBuffer **buffer,int *fenceFd, float matrix[16])\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从OHNativeWindow获取上次送回到buffer队列中的OHNativeWindowBuffer。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeWindow"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "废弃版本："
        })
      }), " 从API version 12开始废弃。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "替代接口："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_nativewindow_getlastflushedbufferv2",
        children: "OH_NativeWindow_GetLastFlushedBufferV2"
      })]
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
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-nativewindow-nativewindow/capi-nativewindow-nativewindow",
              children: "OHNativeWindow"
            }), " *window"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "一个OHNativeWindow的结构体实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-nativewindow-nativewindowbuffer/capi-nativewindow-nativewindowbuffer",
              children: "OHNativeWindowBuffer"
            }), " **buffer"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "一个OHNativeWindowBuffer结构体指针的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int *fenceFd"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "一个文件描述符的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "matrix"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示检索到的4*4变换矩阵。"
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
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回值为0表示执行成功，其他返回值可参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-graphic-error-code-h/capi-graphic-error-code-h#ohnativeerrorcode",
              children: "OHNativeErrorCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativewindow_nativewindowabortbuffer",
      children: "OH_NativeWindow_NativeWindowAbortBuffer()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_NativeWindow_NativeWindowAbortBuffer(OHNativeWindow *window, OHNativeWindowBuffer *buffer)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过OHNativeWindow将之前申请出来的OHNativeWindowBuffer返还到Buffer队列中，供下次再申请。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本接口为非线程安全类型接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeWindow"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 8"]
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
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-nativewindow-nativewindow/capi-nativewindow-nativewindow",
              children: "OHNativeWindow"
            }), " *window"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "一个OHNativeWindow的结构体实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-nativewindow-nativewindowbuffer/capi-nativewindow-nativewindowbuffer",
              children: "OHNativeWindowBuffer"
            }), " *buffer"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "一个OHNativeWindowBuffer的结构体实例的指针。"
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
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回值为0表示执行成功，其他返回值可参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-graphic-error-code-h/capi-graphic-error-code-h#ohnativeerrorcode",
              children: "OHNativeErrorCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativewindow_nativewindowhandleopt",
      children: "OH_NativeWindow_NativeWindowHandleOpt()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_NativeWindow_NativeWindowHandleOpt(OHNativeWindow *window, int code, ...)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置/获取OHNativeWindow的属性，包括设置/获取宽高、内容格式等。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本接口为非线程安全类型接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeWindow"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 8"]
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
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-nativewindow-nativewindow/capi-nativewindow-nativewindow",
              children: "OHNativeWindow"
            }), " *window"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "一个OHNativeWindow的结构体实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int code"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示操作码，详见", (0,jsx_runtime.jsx)(_components.a, {
              href: "#nativewindowoperation",
              children: "NativeWindowOperation"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "..."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可变参数，必须与操作码对应的数据类型保持一致，且入参数量严格按照操作码提示传入，否则会存在未定义行为。"
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
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回值为0表示执行成功，其他返回值可参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-graphic-error-code-h/capi-graphic-error-code-h#ohnativeerrorcode",
              children: "OHNativeErrorCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativewindow_getbufferhandlefromnative",
      children: "OH_NativeWindow_GetBufferHandleFromNative()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "BufferHandle *OH_NativeWindow_GetBufferHandleFromNative(OHNativeWindowBuffer *buffer)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过OHNativeWindowBuffer获取该buffer的BufferHandle指针。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本接口为非线程安全类型接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeWindow"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 8"]
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
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-nativewindow-nativewindowbuffer/capi-nativewindow-nativewindowbuffer",
              children: "OHNativeWindowBuffer"
            }), " *buffer"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "一个OHNativeWindowBuffer的结构体实例的指针。"
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
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-nativewindow-bufferhandle/capi-nativewindow-bufferhandle",
              children: "BufferHandle"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["BufferHandle 返回一个指针，指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-nativewindow-bufferhandle/capi-nativewindow-bufferhandle",
              children: "BufferHandle"
            }), "的结构体实例。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativewindow_nativeobjectreference",
      children: "OH_NativeWindow_NativeObjectReference()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_NativeWindow_NativeObjectReference(void *obj)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "增加一个NativeObject的引用计数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本接口需要与", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_nativewindow_nativeobjectunreference",
        children: "OH_NativeWindow_NativeObjectUnreference"
      }), "接口配合使用，否则会存在内存泄露。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本接口为非线程安全类型接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeWindow"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 8"]
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
            children: "void *obj"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "一个OHNativeWindow或者OHNativeWindowBuffer的结构体实例的指针。"
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
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回值为0表示执行成功，其他返回值可参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-graphic-error-code-h/capi-graphic-error-code-h#ohnativeerrorcode",
              children: "OHNativeErrorCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativewindow_nativeobjectunreference",
      children: "OH_NativeWindow_NativeObjectUnreference()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_NativeWindow_NativeObjectUnreference(void *obj)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "减少一个NativeObject的引用计数，当引用计数减少为0时，该NativeObject将被析构掉。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本接口为非线程安全类型接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeWindow"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 8"]
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
            children: "void *obj"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "一个OHNativeWindow或者OHNativeWindowBuffer的结构体实例的指针。"
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
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回值为0表示执行成功，其他返回值可参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-graphic-error-code-h/capi-graphic-error-code-h#ohnativeerrorcode",
              children: "OHNativeErrorCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativewindow_getnativeobjectmagic",
      children: "OH_NativeWindow_GetNativeObjectMagic()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_NativeWindow_GetNativeObjectMagic(void *obj)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取NativeObject的MagicId。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本接口为非线程安全类型接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeWindow"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 8"]
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
            children: "void *obj"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "一个OHNativeWindow或者OHNativeWindowBuffer的结构体实例的指针。"
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
            children: "int32_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MagicId 返回值为魔鬼数字，每个NativeObject唯一。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativewindow_nativewindowsetscalingmode",
      children: "OH_NativeWindow_NativeWindowSetScalingMode()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_NativeWindow_NativeWindowSetScalingMode(OHNativeWindow *window, uint32_t sequence,OHScalingMode scalingMode)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置OHNativeWindow的ScalingMode。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeWindow"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 9"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "废弃版本："
        })
      }), " 从API version 10开始废弃。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "替代接口："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_nativewindow_nativewindowsetscalingmodev2",
        children: "OH_NativeWindow_NativeWindowSetScalingModeV2"
      })]
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
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-nativewindow-nativewindow/capi-nativewindow-nativewindow",
              children: "OHNativeWindow"
            }), " *window"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "一个OHNativeWindow的结构体实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t sequence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "生产缓冲区的序列。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#ohscalingmode",
              children: "OHScalingMode"
            }), " scalingMode"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "枚举值OHScalingMode。"
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
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回值为0表示执行成功，其他返回值可参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-graphic-error-code-h/capi-graphic-error-code-h#ohnativeerrorcode",
              children: "OHNativeErrorCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativewindow_nativewindowsetmetadata",
      children: "OH_NativeWindow_NativeWindowSetMetaData()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_NativeWindow_NativeWindowSetMetaData(OHNativeWindow *window, uint32_t sequence, int32_t size,const OHHDRMetaData *metaData)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置OHNativeWindow的元数据。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeWindow"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 9"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "废弃版本："
        })
      }), " 从API version 10开始废弃，不再提供替代接口。"]
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
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-nativewindow-nativewindow/capi-nativewindow-nativewindow",
              children: "OHNativeWindow"
            }), " *window"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "一个OHNativeWindow的结构体实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t sequence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "生产缓冲区的序列。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OHHDRMetaData数组的大小，最大支持为3000，超出会返回NATIVE_ERROR_INVALID_ARGUMENTS。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "metaData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OHHDRMetaData数组的指针。"
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
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回值为0表示执行成功，其他返回值可参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-graphic-error-code-h/capi-graphic-error-code-h#ohnativeerrorcode",
              children: "OHNativeErrorCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativewindow_nativewindowsetmetadataset",
      children: "OH_NativeWindow_NativeWindowSetMetaDataSet()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_NativeWindow_NativeWindowSetMetaDataSet(OHNativeWindow *window, uint32_t sequence, OHHDRMetadataKey key,int32_t size, const uint8_t *metaData)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置OHNativeWindow的元数据集。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeWindow"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 9"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "废弃版本："
        })
      }), " 从API version 10开始废弃，不再提供替代接口。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-nativewindow-nativewindow/capi-nativewindow-nativewindow",
              children: "OHNativeWindow"
            }), " *window"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "一个OHNativeWindow的结构体实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t sequence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "生产缓冲区的序列。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#ohhdrmetadatakey",
              children: "OHHDRMetadataKey"
            }), " key"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "枚举值OHHDRMetadataKey。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uint8_t向量的大小，最大支持为3000，超出会返回NATIVE_ERROR_INVALID_ARGUMENTS。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "metaData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向uint8_t向量的指针。"
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
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回值为0表示执行成功，其他返回值可参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-graphic-error-code-h/capi-graphic-error-code-h#ohnativeerrorcode",
              children: "OHNativeErrorCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativewindow_nativewindowsettunnelhandle",
      children: "OH_NativeWindow_NativeWindowSetTunnelHandle()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_NativeWindow_NativeWindowSetTunnelHandle(OHNativeWindow *window, const OHExtDataHandle *handle)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置OHNativeWindow的TunnelHandle。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeWindow"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 9"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "废弃版本："
        })
      }), " 从API version 10开始废弃，不再提供替代接口。"]
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
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-nativewindow-nativewindow/capi-nativewindow-nativewindow",
              children: "OHNativeWindow"
            }), " *window"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "一个OHNativeWindow的结构体实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-nativewindow-ohextdatahandle/capi-nativewindow-ohextdatahandle",
              children: "OHExtDataHandle"
            }), " *handle"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OHExtDataHandle的指针。"
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
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回值为0表示执行成功，其他返回值可参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-graphic-error-code-h/capi-graphic-error-code-h#ohnativeerrorcode",
              children: "OHNativeErrorCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativewindow_nativewindowattachbuffer",
      children: "OH_NativeWindow_NativeWindowAttachBuffer()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_NativeWindow_NativeWindowAttachBuffer(OHNativeWindow *window, OHNativeWindowBuffer *buffer)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将OHNativeWindowBuffer添加进OHNativeWindow中。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本接口需要与", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_nativewindow_nativewindowdetachbuffer",
        children: "OH_NativeWindow_NativeWindowDetachBuffer"
      }), "接口配合使用，否则会存在内存管理混乱问题。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本接口为非线程安全类型接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeWindow"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
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
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-nativewindow-nativewindow/capi-nativewindow-nativewindow",
              children: "OHNativeWindow"
            }), " *window"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "一个OHNativeWindow的结构体实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-nativewindow-nativewindowbuffer/capi-nativewindow-nativewindowbuffer",
              children: "OHNativeWindowBuffer"
            }), " *buffer"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "一个OHNativeWindowBuffer的结构体实例的指针。"
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
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回值为0表示执行成功，其他返回值可参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-graphic-error-code-h/capi-graphic-error-code-h#ohnativeerrorcode",
              children: "OHNativeErrorCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativewindow_nativewindowdetachbuffer",
      children: "OH_NativeWindow_NativeWindowDetachBuffer()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_NativeWindow_NativeWindowDetachBuffer(OHNativeWindow *window, OHNativeWindowBuffer *buffer)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将OHNativeWindowBuffer从OHNativeWindow中分离。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本接口为非线程安全类型接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeWindow"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
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
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-nativewindow-nativewindow/capi-nativewindow-nativewindow",
              children: "OHNativeWindow"
            }), " *window"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "一个OHNativeWindow的结构体实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-nativewindow-nativewindowbuffer/capi-nativewindow-nativewindowbuffer",
              children: "OHNativeWindowBuffer"
            }), " *buffer"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "一个OHNativeWindowBuffer的结构体实例的指针。"
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
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回值为0表示执行成功，其他返回值可参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-graphic-error-code-h/capi-graphic-error-code-h#ohnativeerrorcode",
              children: "OHNativeErrorCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativewindow_getsurfaceid",
      children: "OH_NativeWindow_GetSurfaceId()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_NativeWindow_GetSurfaceId(OHNativeWindow *window, uint64_t *surfaceId)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过OHNativeWindow获取对应的surfaceId。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本接口为非线程安全类型接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeWindow"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
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
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-nativewindow-nativewindow/capi-nativewindow-nativewindow",
              children: "OHNativeWindow"
            }), " *window"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "一个OHNativeWindow的结构体实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint64_t *surfaceId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "一个surface对应ID的指针。"
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
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回值为0表示执行成功，其他返回值可参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-graphic-error-code-h/capi-graphic-error-code-h#ohnativeerrorcode",
              children: "OHNativeErrorCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativewindow_createnativewindowfromsurfaceid",
      children: "OH_NativeWindow_CreateNativeWindowFromSurfaceId()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_NativeWindow_CreateNativeWindowFromSurfaceId(uint64_t surfaceId, OHNativeWindow **window)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过surfaceId创建对应的OHNativeWindow。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本接口需要与", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_nativewindow_destroynativewindow",
        children: "OH_NativeWindow_DestroyNativeWindow"
      }), "接口配合使用，否则会存在内存泄露。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果存在并发释放OHNativeWindow的情况，需要通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_nativewindow_nativeobjectreference",
        children: "OH_NativeWindow_NativeObjectReference"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_nativewindow_nativeobjectunreference",
        children: "OH_NativeWindow_NativeObjectUnreference"
      }), "对OHNativeWindow进行引用计数加一和减一。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过surfaceId获取的surface需要是在本进程中创建的，不能跨进程获取surface。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本接口为非线程安全类型接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeWindow"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
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
            children: "uint64_t surfaceId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "一个surface对应的ID。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-nativewindow-nativewindow/capi-nativewindow-nativewindow",
              children: "OHNativeWindow"
            }), " **window"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "一个OHNativeWindow的结构体实例的二级指针。"
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
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回值为0表示执行成功，其他返回值可参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-graphic-error-code-h/capi-graphic-error-code-h#ohnativeerrorcode",
              children: "OHNativeErrorCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativewindow_nativewindowsetscalingmodev2",
      children: "OH_NativeWindow_NativeWindowSetScalingModeV2()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_NativeWindow_NativeWindowSetScalingModeV2(OHNativeWindow* window, OHScalingModeV2 scalingMode)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置OHNativeWindow的渲染缩放模式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本接口为非线程安全类型接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeWindow"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
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
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-nativewindow-nativewindow/capi-nativewindow-nativewindow",
              children: "OHNativeWindow"
            }), "* window"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "一个OHNativeWindow的结构体实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#ohscalingmodev2",
              children: "OHScalingModeV2"
            }), " scalingMode"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "一个OHScalingModeV2类型的枚举值。"
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
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回值为0表示执行成功，其他返回值可参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-graphic-error-code-h/capi-graphic-error-code-h#ohnativeerrorcode",
              children: "OHNativeErrorCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativewindow_getlastflushedbufferv2",
      children: "OH_NativeWindow_GetLastFlushedBufferV2()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_NativeWindow_GetLastFlushedBufferV2(OHNativeWindow *window, OHNativeWindowBuffer **buffer,int *fenceFd, float matrix[16])\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从OHNativeWindow获取上次送回到buffer队列中的OHNativeWindowBuffer,与OH_NativeWindow_GetLastFlushedBuffer的差异在于matrix不同。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本接口需要与", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_nativewindow_nativeobjectunreference",
        children: "OH_NativeWindow_NativeObjectUnreference"
      }), "接口配合使用，否则会存在内存泄露。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本接口为非线程安全类型接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeWindow"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
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
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-nativewindow-nativewindow/capi-nativewindow-nativewindow",
              children: "OHNativeWindow"
            }), " *window"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "一个OHNativeWindow的结构体实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-nativewindow-nativewindowbuffer/capi-nativewindow-nativewindowbuffer",
              children: "OHNativeWindowBuffer"
            }), " **buffer"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "一个OHNativeWindowBuffer结构体指针的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int *fenceFd"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "一个文件描述符的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "matrix"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示检索到的4*4变换矩阵。"
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
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回值为0表示执行成功，其他返回值可参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-graphic-error-code-h/capi-graphic-error-code-h#ohnativeerrorcode",
              children: "OHNativeErrorCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativewindow_setbufferhold",
      children: "OH_NativeWindow_SetBufferHold()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_NativeWindow_SetBufferHold(OHNativeWindow *window)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "启用单帧缓存机制，通过提前缓存一帧buffer并延迟显示，用于平滑帧率波动。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "启用后，系统会预留一帧buffer作为缓冲，该帧会延迟一个显示周期才上屏。当后续渲染出现超长帧或帧间不均匀时，可使用该缓存帧填补空白，减少画面卡顿。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "建议在预知即将出现渲染高峰前提前调用，以建立缓冲保护；缓存仅生效一次，被消费后自动失效，如需持续保护需重新调用本接口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "适用于游戏、动画、复杂UI渲染等对帧率稳定性要求较高的场景，但会引入一帧显示延迟（比如，在60hz的刷新率下，会延迟16.6ms上屏显示），不建议在高交互实时场景中使用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本接口为非线程安全类型接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeWindow"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
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
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-nativewindow-nativewindow/capi-nativewindow-nativewindow",
              children: "OHNativeWindow"
            }), " *window"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["一个", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-nativewindow-nativewindow/capi-nativewindow-nativewindow",
              children: "OHNativeWindow"
            }), "的结构体实例的指针。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativewindow_writetoparcel",
      children: "OH_NativeWindow_WriteToParcel()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_NativeWindow_WriteToParcel(OHNativeWindow *window, OHIPCParcel *parcel)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将窗口对象写入IPC序列化对象中。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本接口为非线程安全类型接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeWindow"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
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
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-nativewindow-nativewindow/capi-nativewindow-nativewindow",
              children: "OHNativeWindow"
            }), " *window"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["一个指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-nativewindow-nativewindow/capi-nativewindow-nativewindow",
              children: "OHNativeWindow"
            }), "的结构体实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-nativewindow-ohipcparcel/capi-nativewindow-ohipcparcel",
              children: "OHIPCParcel"
            }), " *parcel"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["一个指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-nativewindow-ohipcparcel/capi-nativewindow-ohipcparcel",
              children: "OHIPCParcel"
            }), "的结构体实例的指针。"]
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
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回值为0表示执行成功，其他返回值可参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-graphic-error-code-h/capi-graphic-error-code-h#ohnativeerrorcode",
              children: "OHNativeErrorCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativewindow_readfromparcel",
      children: "OH_NativeWindow_ReadFromParcel()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_NativeWindow_ReadFromParcel(OHIPCParcel *parcel, OHNativeWindow **window)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从IPC序列化对象中读取窗口对象。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本接口将会创建一个OHNativeWindow，当窗口对象使用完，开发者需要与", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_nativewindow_destroynativewindow",
        children: "OH_NativeWindow_DestroyNativeWindow"
      }), "接口配合使用，否则会存在内存泄漏。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本接口为非线程安全类型接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeWindow"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
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
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-nativewindow-ohipcparcel/capi-nativewindow-ohipcparcel",
              children: "OHIPCParcel"
            }), " *parcel"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["一个指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-nativewindow-ohipcparcel/capi-nativewindow-ohipcparcel",
              children: "OHIPCParcel"
            }), "的结构体实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-nativewindow-nativewindow/capi-nativewindow-nativewindow",
              children: "OHNativeWindow"
            }), " **window"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["一个指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-nativewindow-nativewindow/capi-nativewindow-nativewindow",
              children: "OHNativeWindow"
            }), "的结构体实例的二级指针。"]
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
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回值为0表示执行成功，其他返回值可参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-graphic-error-code-h/capi-graphic-error-code-h#ohnativeerrorcode",
              children: "OHNativeErrorCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativewindow_setcolorspace",
      children: "OH_NativeWindow_SetColorSpace()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_NativeWindow_SetColorSpace(OHNativeWindow *window, OH_NativeBuffer_ColorSpace colorSpace)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为OHNativeWindow设置颜色空间属性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本接口为非线程安全类型接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeWindow"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
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
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-nativewindow-nativewindow/capi-nativewindow-nativewindow",
              children: "OHNativeWindow"
            }), " *window"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["一个指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-nativewindow-nativewindow/capi-nativewindow-nativewindow",
              children: "OHNativeWindow"
            }), "的结构体实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-buffer-common-h/capi-buffer-common-h#oh_nativebuffer_colorspace",
              children: "OH_NativeBuffer_ColorSpace"
            }), " colorSpace"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为OHNativeWindow设置的颜色空间，其值从", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-buffer-common-h/capi-buffer-common-h#oh_nativebuffer_colorspace",
              children: "OH_NativeBuffer_ColorSpace"
            }), "获取。"]
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
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回值为0表示执行成功，其他返回值可参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-graphic-error-code-h/capi-graphic-error-code-h#ohnativeerrorcode",
              children: "OHNativeErrorCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativewindow_getcolorspace",
      children: "OH_NativeWindow_GetColorSpace()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_NativeWindow_GetColorSpace(OHNativeWindow *window, OH_NativeBuffer_ColorSpace *colorSpace)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取OHNativeWindow颜色空间属性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本接口为非线程安全类型接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeWindow"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
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
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-nativewindow-nativewindow/capi-nativewindow-nativewindow",
              children: "OHNativeWindow"
            }), " *window"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["一个指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-nativewindow-nativewindow/capi-nativewindow-nativewindow",
              children: "OHNativeWindow"
            }), "的结构体实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-buffer-common-h/capi-buffer-common-h#oh_nativebuffer_colorspace",
              children: "OH_NativeBuffer_ColorSpace"
            }), " *colorSpace"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为OHNativeWindow设置的颜色空间，其值从", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-buffer-common-h/capi-buffer-common-h#oh_nativebuffer_colorspace",
              children: "OH_NativeBuffer_ColorSpace"
            }), "获取。"]
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
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回值为0表示执行成功，其他返回值可参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-graphic-error-code-h/capi-graphic-error-code-h#ohnativeerrorcode",
              children: "OHNativeErrorCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativewindow_setmetadatavalue",
      children: "OH_NativeWindow_SetMetadataValue()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_NativeWindow_SetMetadataValue(OHNativeWindow *window, OH_NativeBuffer_MetadataKey metadataKey,int32_t size, uint8_t *metadata)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为OHNativeWindow设置元数据属性值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本接口为非线程安全类型接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeWindow"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
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
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-nativewindow-nativewindow/capi-nativewindow-nativewindow",
              children: "OHNativeWindow"
            }), " *window"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["一个指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-nativewindow-nativewindow/capi-nativewindow-nativewindow",
              children: "OHNativeWindow"
            }), "的结构体实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-buffer-common-h/capi-buffer-common-h#oh_nativebuffer_metadatakey",
              children: "OH_NativeBuffer_MetadataKey"
            }), " metadataKey"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Window的元数据类型，其值从", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-buffer-common-h/capi-buffer-common-h#oh_nativebuffer_metadatakey",
              children: "OH_NativeBuffer_MetadataKey"
            }), "获取。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t size"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["uint8_t向量的大小，其取值范围见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-buffer-common-h/capi-buffer-common-h#oh_nativebuffer_metadatakey",
              children: "OH_NativeBuffer_MetadataKey"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "metadata"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向uint8_t向量的指针。"
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
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回值为0表示执行成功，其他返回值可参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-graphic-error-code-h/capi-graphic-error-code-h#ohnativeerrorcode",
              children: "OHNativeErrorCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativewindow_getmetadatavalue",
      children: "OH_NativeWindow_GetMetadataValue()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_NativeWindow_GetMetadataValue(OHNativeWindow *window, OH_NativeBuffer_MetadataKey metadataKey,int32_t *size, uint8_t **metadata)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取OHNativeWindow元数据属性值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本接口为非线程安全类型接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeWindow"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
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
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-nativewindow-nativewindow/capi-nativewindow-nativewindow",
              children: "OHNativeWindow"
            }), " *window"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["一个指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-nativewindow-nativewindow/capi-nativewindow-nativewindow",
              children: "OHNativeWindow"
            }), "的结构体实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-buffer-common-h/capi-buffer-common-h#oh_nativebuffer_metadatakey",
              children: "OH_NativeBuffer_MetadataKey"
            }), " metadataKey"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Window的元数据类型，其值从", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-buffer-common-h/capi-buffer-common-h#oh_nativebuffer_metadatakey",
              children: "OH_NativeBuffer_MetadataKey"
            }), "获取。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t *size"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["uint8_t向量的大小，其取值范围见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-buffer-common-h/capi-buffer-common-h#oh_nativebuffer_metadatakey",
              children: "OH_NativeBuffer_MetadataKey"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "metadata"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向uint8_t向量的二级指针。"
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
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回值为0表示执行成功，其他返回值可参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-graphic-error-code-h/capi-graphic-error-code-h#ohnativeerrorcode",
              children: "OHNativeErrorCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativewindow_cleancache",
      children: "OH_NativeWindow_CleanCache()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_NativeWindow_CleanCache(OHNativeWindow *window)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "清理OHNativeWindow中的OHNativeWindowBuffer缓存。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用该接口清理缓存前，需确保已通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_nativewindow_nativewindowrequestbuffer",
        children: "OH_NativeWindow_NativeWindowRequestBuffer"
      }), "接口成功申请OHNativeWindowBuffer。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本接口为非线程安全类型接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeWindow"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 19"]
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
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-nativewindow-nativewindow/capi-nativewindow-nativewindow",
              children: "OHNativeWindow"
            }), " *window"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["一个指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-nativewindow-nativewindow/capi-nativewindow-nativewindow",
              children: "OHNativeWindow"
            }), "的结构体实例的指针。"]
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
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回值为0表示执行成功，其他返回值可参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-graphic-error-code-h/capi-graphic-error-code-h#ohnativeerrorcode",
              children: "OHNativeErrorCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativewindow_preallocbuffers",
      children: "OH_NativeWindow_PreAllocBuffers()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_NativeWindow_PreAllocBuffers(OHNativeWindow *window, uint32_t allocBufferCnt)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过OHNativeWindow对象提前申请多块OHNativeWindowBuffer，用以内容生产。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在调用本接口前，需要通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-external-window-h/capi-external-window-h#oh_nativewindow_nativewindowhandleopt",
        children: "OH_NativeWindow_NativeWindowHandleOpt"
      }), "对OHNativeWindow设置宽高。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本接口为非线程安全类型接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeWindow"]
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
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-nativewindow-nativewindow/capi-nativewindow-nativewindow",
              children: "OHNativeWindow"
            }), " *window"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "一个指向OHNativeWindow的结构体实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t allocBufferCnt"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["提前申请buffer的数量。当allocBufferCnt大于bufferQueueSize时，只能提前申请bufferQueueSize数量的buffer。bufferQueueSize可以通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-external-window-h/capi-external-window-h#oh_nativewindow_nativewindowhandleopt",
              children: "OH_NativeWindow_NativeWindowHandleOpt"
            }), "获取。"]
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
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回值为0表示执行成功，其他返回值可参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-graphic-error-code-h/capi-graphic-error-code-h#ohnativeerrorcode",
              children: "OHNativeErrorCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativewindow_lockbuffer",
      children: "OH_NativeWindow_LockBuffer()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_NativeWindow_LockBuffer(OHNativeWindow* window, Region region, OHNativeWindowBuffer** buffer)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过OHNativeWindow对象申请一块OHNativeWindowBuffer，用以内容生产，并对该OHNativeWindowBuffer加锁。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本接口需要和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-external-window-h/capi-external-window-h#oh_nativewindow_unlockandflushbuffer",
        children: "OH_NativeWindow_UnlockAndFlushBuffer"
      }), "接口配合使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本接口对OHNativeWindowBuffer加锁后，需要调", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-external-window-h/capi-external-window-h#oh_nativewindow_unlockandflushbuffer",
        children: "OH_NativeWindow_UnlockAndFlushBuffer"
      }), "接口解锁后才能重新对OHNativeWindowBuffer加锁。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "若用本接口重复对OHNativeWindowBuffer加锁，会返回操作非法错误码。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本接口支持通过CPU上的内存读写直接渲染图像。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本接口为非线程安全类型接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeWindow"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 23"]
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
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-nativewindow-nativewindow/capi-nativewindow-nativewindow",
              children: "OHNativeWindow"
            }), "* window"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "一个指向OHNativeWindow的结构体实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-nativewindow-region/capi-nativewindow-region",
              children: "Region"
            }), " region"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "一个Region结构体，表示一块脏区域，该区域有内容更新。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-nativewindow-nativewindowbuffer/capi-nativewindow-nativewindowbuffer",
              children: "OHNativeWindowBuffer"
            }), "** buffer"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "一个指向OHNativeWindowBuffer的二级指针。"
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
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["执行成功时返回NATIVE_ERROR_OK。  window或buffer是空指针时返回NATIVE_ERROR_INVALID_ARGUMENTS。  window的surface成员是空指针时返回NATIVE_ERROR_UNKNOWN。  其他返回值可参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-graphic-error-code-h/capi-graphic-error-code-h#ohnativeerrorcode",
              children: "OHNativeErrorCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativewindow_unlockandflushbuffer",
      children: "OH_NativeWindow_UnlockAndFlushBuffer()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_NativeWindow_UnlockAndFlushBuffer(OHNativeWindow* window)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过OHNativeWindow将生产好内容的OHNativeWindowBuffer放回到Buffer队列中，用以内容消费，并对OHNativeWindowBuffer解锁。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本接口需要和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-external-window-h/capi-external-window-h#oh_nativewindow_lockbuffer",
        children: "OH_NativeWindow_LockBuffer"
      }), "接口配合使用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "若用本接口重复对OHNativeWindowBuffer解锁，会返回操作非法错误码。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本接口为非线程安全类型接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeWindow"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 23"]
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
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-nativewindow-nativewindow/capi-nativewindow-nativewindow",
              children: "OHNativeWindow"
            }), "* window"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "一个指向OHNativeWindow的结构体实例的指针。"
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
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["执行成功时返回NATIVE_ERROR_OK。  window是空指针时返回NATIVE_ERROR_INVALID_ARGUMENTS。  window的surface成员是空指针时返回NATIVE_ERROR_UNKNOWN。  其他返回值可参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-graphic-error-code-h/capi-graphic-error-code-h#ohnativeerrorcode",
              children: "OHNativeErrorCode"
            }), "。"]
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