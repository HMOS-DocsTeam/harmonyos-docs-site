"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["197804"], {
558767(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkgraphics_api_arkgraphics_c_arkgraphics_headerfile_capi_native_buffer_h_capi_native_buffer_h_md_93a_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkgraphics-api-arkgraphics-c-arkgraphics-headerfile-capi-native-buffer-h-capi-native-buffer-h-md-93a.json
var site_docs_ref_arkgraphics_api_arkgraphics_c_arkgraphics_headerfile_capi_native_buffer_h_capi_native_buffer_h_md_93a_namespaceObject = JSON.parse('{"id":"arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-native-buffer-h/capi-native-buffer-h","title":"native_buffer.h","description":"概述","source":"@site/docs-ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-native-buffer-h/capi-native-buffer-h.md","sourceDirName":"arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-native-buffer-h","slug":"/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-native-buffer-h/capi-native-buffer-h","permalink":"/harmonyos-docs-site/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-native-buffer-h/capi-native-buffer-h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"native_buffer.h","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-buffer-h","kit":"图形","last_updated":"2026-04-22","slug":"capi-native-buffer-h"},"sidebar":"ref","previous":{"title":"buffer_common.h","permalink":"/harmonyos-docs-site/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-buffer-common-h/capi-buffer-common-h"},"next":{"title":"native_color_space_manager.h","permalink":"/harmonyos-docs-site/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-native-color-space-manager-h/capi-native-color-space-manager-h"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-native-buffer-h/capi-native-buffer-h.md


const frontMatter = {
	title: 'native_buffer.h',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-buffer-h',
	kit: '图形',
	last_updated: '2026-04-22',
	slug: 'capi-native-buffer-h'
};
const contentTitle = 'native_buffer.h';

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
  "value": "OH_NativeBuffer_Usage",
  "id": "oh_nativebuffer_usage",
  "level": 3
}, {
  "value": "OH_NativeBuffer_ColorGamut",
  "id": "oh_nativebuffer_colorgamut",
  "level": 3
}, {
  "value": "函数说明",
  "id": "函数说明",
  "level": 2
}, {
  "value": "OH_NativeBuffer_Alloc()",
  "id": "oh_nativebuffer_alloc",
  "level": 3
}, {
  "value": "OH_NativeBuffer_Reference()",
  "id": "oh_nativebuffer_reference",
  "level": 3
}, {
  "value": "OH_NativeBuffer_Unreference()",
  "id": "oh_nativebuffer_unreference",
  "level": 3
}, {
  "value": "OH_NativeBuffer_GetConfig()",
  "id": "oh_nativebuffer_getconfig",
  "level": 3
}, {
  "value": "OH_NativeBuffer_Map()",
  "id": "oh_nativebuffer_map",
  "level": 3
}, {
  "value": "OH_NativeBuffer_Unmap()",
  "id": "oh_nativebuffer_unmap",
  "level": 3
}, {
  "value": "OH_NativeBuffer_GetSeqNum()",
  "id": "oh_nativebuffer_getseqnum",
  "level": 3
}, {
  "value": "OH_NativeBuffer_SetColorSpace()",
  "id": "oh_nativebuffer_setcolorspace",
  "level": 3
}, {
  "value": "OH_NativeBuffer_MapPlanes()",
  "id": "oh_nativebuffer_mapplanes",
  "level": 3
}, {
  "value": "OH_NativeBuffer_FromNativeWindowBuffer()",
  "id": "oh_nativebuffer_fromnativewindowbuffer",
  "level": 3
}, {
  "value": "OH_NativeBuffer_GetColorSpace()",
  "id": "oh_nativebuffer_getcolorspace",
  "level": 3
}, {
  "value": "OH_NativeBuffer_SetMetadataValue()",
  "id": "oh_nativebuffer_setmetadatavalue",
  "level": 3
}, {
  "value": "OH_NativeBuffer_GetMetadataValue()",
  "id": "oh_nativebuffer_getmetadatavalue",
  "level": 3
}, {
  "value": "OH_NativeBuffer_MapWaitFence()",
  "id": "oh_nativebuffer_mapwaitfence",
  "level": 3
}, {
  "value": "OH_NativeBuffer_WriteToParcel()",
  "id": "oh_nativebuffer_writetoparcel",
  "level": 3
}, {
  "value": "OH_NativeBuffer_ReadFromParcel()",
  "id": "oh_nativebuffer_readfromparcel",
  "level": 3
}, {
  "value": "OH_NativeBuffer_IsSupported()",
  "id": "oh_nativebuffer_issupported",
  "level": 3
}, {
  "value": "OH_NativeBuffer_MapAndGetConfig()",
  "id": "oh_nativebuffer_mapandgetconfig",
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
        id: "native_bufferh",
        children: "native_buffer.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义获取和使用NativeBuffer的相关函数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <native_buffer/native_buffer.h>"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "库："
        })
      }), " libnative_buffer.so"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeBuffer"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 9"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "相关模块："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-module/capi-oh-nativebuffer/capi-oh-nativebuffer",
        children: "OH_NativeBuffer"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "结构体",
      children: "结构体"
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
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-oh-nativebuffer-oh-nativebuffer-config/capi-oh-nativebuffer-oh-nativebuffer-config",
              children: "OH_NativeBuffer_Config"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NativeBuffer_Config"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NativeBuffer的属性配置，用于申请新的OH_NativeBuffer实例或查询现有实例的相关属性。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-oh-nativebuffer-oh-nativebuffer-plane/capi-oh-nativebuffer-oh-nativebuffer-plane",
              children: "OH_NativeBuffer_Plane"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NativeBuffer_Plane"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "单个图像平面格式信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-oh-nativebuffer-oh-nativebuffer-planes/capi-oh-nativebuffer-oh-nativebuffer-planes",
              children: "OH_NativeBuffer_Planes"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NativeBuffer_Planes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NativeBuffer的图像平面格式信息。"
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
            children: "提供OH_NativeBuffer结构体声明。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ipc-api/ipc-c/ipc-struct/capi-ohipcparcel-ohipcparcel/capi-ohipcparcel-ohipcparcel",
              children: "OHIPCParcel"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OHIPCParcel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "提供OHIPCParcel结构体声明，用于进程间通信。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "枚举",
      children: "枚举"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "#oh_nativebuffer_usage",
              children: "OH_NativeBuffer_Usage"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NativeBuffer_Usage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NativeBuffer的用途。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativebuffer_colorgamut",
              children: "OH_NativeBuffer_ColorGamut"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NativeBuffer_ColorGamut"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NativeBuffer的色域。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "函数",
      children: "函数"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "#oh_nativebuffer_alloc",
              children: "OH_NativeBuffer* OH_NativeBuffer_Alloc(const OH_NativeBuffer_Config* config)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["通过OH_NativeBuffer_Config创建OH_NativeBuffer实例，每次调用都会产生一个新的OH_NativeBuffer实例。  本接口需要与", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-native-buffer-h/capi-native-buffer-h#oh_nativebuffer_unreference",
              children: "OH_NativeBuffer_Unreference"
            }), "接口配合使用，否则会存在内存泄露。  本接口为非线程安全类型接口。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativebuffer_reference",
              children: "int32_t OH_NativeBuffer_Reference(OH_NativeBuffer *buffer)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["将OH_NativeBuffer对象的引用计数加1。  本接口需要与", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-native-buffer-h/capi-native-buffer-h#oh_nativebuffer_unreference",
              children: "OH_NativeBuffer_Unreference"
            }), "接口配合使用，否则会存在内存泄露。  本接口为非线程安全类型接口。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativebuffer_unreference",
              children: "int32_t OH_NativeBuffer_Unreference(OH_NativeBuffer *buffer)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将OH_NativeBuffer对象的引用计数减1，当引用计数为0的时候，该NativeBuffer对象会被析构掉。  本接口为非线程安全类型接口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativebuffer_getconfig",
              children: "void OH_NativeBuffer_GetConfig(OH_NativeBuffer buffer, OH_NativeBuffer_Config config)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于获取OH_NativeBuffer的属性。  本接口为非线程安全类型接口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativebuffer_map",
              children: "int32_t OH_NativeBuffer_Map(OH_NativeBuffer *buffer, void **virAddr)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["将OH_NativeBuffer对应的ION内存映射到进程空间。  需注意调用该接口的OH_NativeBuffer的usage必须带有CPU_READ属性，否则可能导致稳定性问题。  通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativebuffer_alloc",
              children: "OH_NativeBuffer_Alloc"
            }), "申请的OH_NativeBuffer，需保证参数config.usage带有NATIVEBUFFER_USAGE_CPU_READ。  通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativebuffer_fromnativewindowbuffer",
              children: "OH_NativeBuffer_FromNativeWindowBuffer"
            }), "转换来的OH_NativeBuffer，需保证原OH_NativeWindowBuffer申请前，通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-external-window-h/capi-external-window-h#oh_nativewindow_nativewindowhandleopt",
              children: "OH_NativeWindow_NativeWindowHandleOpt"
            }), "接口设置的USAGE带有NATIVEBUFFER_USAGE_CPU_READ。  本接口需要与", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-native-buffer-h/capi-native-buffer-h#oh_nativebuffer_unmap",
              children: "OH_NativeBuffer_Unmap"
            }), "接口配合使用。  本接口为非线程安全类型接口。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativebuffer_unmap",
              children: "int32_t OH_NativeBuffer_Unmap(OH_NativeBuffer *buffer)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将OH_NativeBuffer对应的ION内存从进程空间移除。  本接口为非线程安全类型接口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativebuffer_getseqnum",
              children: "uint32_t OH_NativeBuffer_GetSeqNum(OH_NativeBuffer *buffer)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取OH_NativeBuffer的序列号。  本接口为非线程安全类型接口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativebuffer_setcolorspace",
              children: "int32_t OH_NativeBuffer_SetColorSpace(OH_NativeBuffer *buffer, OH_NativeBuffer_ColorSpace colorSpace)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为OH_NativeBuffer设置颜色空间属性。  本接口为非线程安全类型接口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativebuffer_mapplanes",
              children: "int32_t OH_NativeBuffer_MapPlanes(OH_NativeBuffer *buffer, void **virAddr, OH_NativeBuffer_Planes *outPlanes)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将OH_NativeBuffer对应的多通道ION内存映射到进程空间。  本接口为非线程安全类型接口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativebuffer_fromnativewindowbuffer",
              children: "int32_t OH_NativeBuffer_FromNativeWindowBuffer(OHNativeWindowBuffer *nativeWindowBuffer, OH_NativeBuffer **buffer)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将OHNativeWindowBuffer实例转换为OH_NativeBuffer实例。  本接口为非线程安全类型接口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativebuffer_getcolorspace",
              children: "int32_t OH_NativeBuffer_GetColorSpace(OH_NativeBuffer *buffer, OH_NativeBuffer_ColorSpace *colorSpace)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取OH_NativeBuffer颜色空间属性。  本接口为非线程安全类型接口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativebuffer_setmetadatavalue",
              children: "int32_t OH_NativeBuffer_SetMetadataValue(OH_NativeBuffer *buffer, OH_NativeBuffer_MetadataKey metadataKey,int32_t size, uint8_t *metadata)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为OH_NativeBuffer设置元数据属性值。  本接口为非线程安全类型接口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativebuffer_getmetadatavalue",
              children: "int32_t OH_NativeBuffer_GetMetadataValue(OH_NativeBuffer *buffer, OH_NativeBuffer_MetadataKey metadataKey,int32_t *size, uint8_t **metadata)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取OH_NativeBuffer元数据属性值。  本接口为非线程安全类型接口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativebuffer_mapwaitfence",
              children: "int32_t OH_NativeBuffer_MapWaitFence(OH_NativeBuffer *buffer, int32_t fenceFd, void **virAddr)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["将", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-oh-nativebuffer-oh-nativebuffer/capi-oh-nativebuffer-oh-nativebuffer",
              children: "OH_NativeBuffer"
            }), "对应的ION内存映射到进程空间，永久阻塞传入的fenceFd。  如果接口返回OK，系统会将fenceFd关闭，无需用户close，否则，用户需要自行关闭fenceFd。  本接口需要与", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-native-buffer-h/capi-native-buffer-h#oh_nativebuffer_unmap",
              children: "OH_NativeBuffer_Unmap"
            }), "接口配合使用。  本接口为非线程安全类型接口。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativebuffer_writetoparcel",
              children: "int32_t OH_NativeBuffer_WriteToParcel(OH_NativeBuffer* buffer, OHIPCParcel* parcel)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["将", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-oh-nativebuffer-oh-nativebuffer/capi-oh-nativebuffer-oh-nativebuffer",
              children: "OH_NativeBuffer"
            }), "对象写入IPC序列化对象中。  本接口为非线程安全类型接口。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativebuffer_readfromparcel",
              children: "int32_t OH_NativeBuffer_ReadFromParcel(OHIPCParcel* parcel, OH_NativeBuffer** buffer)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从IPC序列化对象中读取", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-oh-nativebuffer-oh-nativebuffer/capi-oh-nativebuffer-oh-nativebuffer",
              children: "OH_NativeBuffer"
            }), "对象。  本接口将会创建一个", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-oh-nativebuffer-oh-nativebuffer/capi-oh-nativebuffer-oh-nativebuffer",
              children: "OH_NativeBuffer"
            }), "，当OH_NativeBuffer对象使用完，开发者需要与", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-native-buffer-h/capi-native-buffer-h#oh_nativebuffer_unreference",
              children: "OH_NativeBuffer_Unreference"
            }), "接口配合使用，否则会存在内存泄漏。  本接口为非线程安全类型接口。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativebuffer_issupported",
              children: "int32_t OH_NativeBuffer_IsSupported(OH_NativeBuffer_Config config, bool* isSupported)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["检查系统是否支持传入的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-oh-nativebuffer-oh-nativebuffer-config/capi-oh-nativebuffer-oh-nativebuffer-config",
              children: "OH_NativeBuffer_Config"
            }), "配置信息。  本接口为非线程安全类型接口。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativebuffer_mapandgetconfig",
              children: "int32_t OH_NativeBuffer_MapAndGetConfig(OH_NativeBuffer* buffer, void** virAddr, OH_NativeBuffer_Config* config)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["将", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-oh-nativebuffer-oh-nativebuffer/capi-oh-nativebuffer-oh-nativebuffer",
              children: "OH_NativeBuffer"
            }), "对应的多通道ION内存映射到进程空间，并获取", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-oh-nativebuffer-oh-nativebuffer/capi-oh-nativebuffer-oh-nativebuffer",
              children: "OH_NativeBuffer"
            }), "对应的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-oh-nativebuffer-oh-nativebuffer-config/capi-oh-nativebuffer-oh-nativebuffer-config",
              children: "OH_NativeBuffer_Config"
            }), "。  本接口为非线程安全类型接口。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "枚举类型说明",
      children: "枚举类型说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativebuffer_usage",
      children: "OH_NativeBuffer_Usage"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_NativeBuffer_Usage\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "OH_NativeBuffer的用途。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeBuffer"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 10"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "NATIVEBUFFER_USAGE_CPU_READ = (1ULL << 0)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CPU可读。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NATIVEBUFFER_USAGE_CPU_WRITE = (1ULL << 1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CPU可写。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NATIVEBUFFER_USAGE_MEM_DMA = (1ULL << 3)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "直接内存访问缓冲区。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NATIVEBUFFER_USAGE_MEM_MMZ_CACHE = (1ULL << 5)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["媒体内存区域缓存。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 20"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NATIVEBUFFER_USAGE_HW_RENDER = (1ULL << 8)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["GPU可写。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NATIVEBUFFER_USAGE_HW_TEXTURE = (1ULL << 9)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["GPU可读。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NATIVEBUFFER_USAGE_CPU_READ_OFTEN = (1ULL << 16)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["CPU可直接映射。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NATIVEBUFFER_USAGE_ALIGNMENT_512 = (1ULL << 18)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["512字节对齐。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativebuffer_colorgamut",
      children: "OH_NativeBuffer_ColorGamut"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_NativeBuffer_ColorGamut\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "OH_NativeBuffer的色域。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeBuffer"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "NATIVEBUFFER_COLOR_GAMUT_NATIVE = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认色域格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NATIVEBUFFER_COLOR_GAMUT_STANDARD_BT601 = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Standard BT601色域格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NATIVEBUFFER_COLOR_GAMUT_STANDARD_BT709 = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Standard BT709色域格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NATIVEBUFFER_COLOR_GAMUT_DCI_P3 = 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DCI P3色域格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NATIVEBUFFER_COLOR_GAMUT_SRGB = 4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SRGB色域格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NATIVEBUFFER_COLOR_GAMUT_ADOBE_RGB = 5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adobe RGB色域格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NATIVEBUFFER_COLOR_GAMUT_DISPLAY_P3 = 6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Display P3色域格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NATIVEBUFFER_COLOR_GAMUT_BT2020 = 7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BT2020色域格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NATIVEBUFFER_COLOR_GAMUT_BT2100_PQ = 8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BT2100 PQ色域格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NATIVEBUFFER_COLOR_GAMUT_BT2100_HLG = 9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BT2100 HLG色域格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NATIVEBUFFER_COLOR_GAMUT_DISPLAY_BT2020 = 10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Display BT2020色域格式。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数说明",
      children: "函数说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativebuffer_alloc",
      children: "OH_NativeBuffer_Alloc()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_NativeBuffer* OH_NativeBuffer_Alloc(const OH_NativeBuffer_Config* config)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过OH_NativeBuffer_Config创建OH_NativeBuffer实例，每次调用都会产生一个新的OH_NativeBuffer实例。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本接口需要与", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-native-buffer-h/capi-native-buffer-h#oh_nativebuffer_unreference",
        children: "OH_NativeBuffer_Unreference"
      }), "接口配合使用，否则会存在内存泄露。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本接口为非线程安全类型接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeBuffer"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 9"]
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
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-oh-nativebuffer-oh-nativebuffer-config/capi-oh-nativebuffer-oh-nativebuffer-config",
              children: "OH_NativeBuffer_Config"
            }), "* config"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "一个指向OH_NativeBuffer_Config类型的指针。"
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
            children: "OH_NativeBuffer*"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建成功则返回一个指向OH_NativeBuffer结构体实例的指针，否则返回NULL。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativebuffer_reference",
      children: "OH_NativeBuffer_Reference()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_NativeBuffer_Reference(OH_NativeBuffer *buffer)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将OH_NativeBuffer对象的引用计数加1。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本接口需要与", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-native-buffer-h/capi-native-buffer-h#oh_nativebuffer_unreference",
        children: "OH_NativeBuffer_Unreference"
      }), "接口配合使用，否则会存在内存泄露。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本接口为非线程安全类型接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeBuffer"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 9"]
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
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-oh-nativebuffer-oh-nativebuffer/capi-oh-nativebuffer-oh-nativebuffer",
              children: "OH_NativeBuffer"
            }), " *buffer"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "一个指向OH_NativeBuffer实例的指针。"
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
      id: "oh_nativebuffer_unreference",
      children: "OH_NativeBuffer_Unreference()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_NativeBuffer_Unreference(OH_NativeBuffer *buffer)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将OH_NativeBuffer对象的引用计数减1，当引用计数为0的时候，该NativeBuffer对象会被析构掉。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本接口为非线程安全类型接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeBuffer"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 9"]
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
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-oh-nativebuffer-oh-nativebuffer/capi-oh-nativebuffer-oh-nativebuffer",
              children: "OH_NativeBuffer"
            }), " *buffer"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "一个指向OH_NativeBuffer实例的指针。"
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
      id: "oh_nativebuffer_getconfig",
      children: "OH_NativeBuffer_GetConfig()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_NativeBuffer_GetConfig(OH_NativeBuffer *buffer, OH_NativeBuffer_Config* config)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于获取OH_NativeBuffer的属性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本接口为非线程安全类型接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeBuffer"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 9"]
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
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-oh-nativebuffer-oh-nativebuffer/capi-oh-nativebuffer-oh-nativebuffer",
              children: "OH_NativeBuffer"
            }), " *buffer"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "一个指向OH_NativeBuffer实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-oh-nativebuffer-oh-nativebuffer-config/capi-oh-nativebuffer-oh-nativebuffer-config",
              children: "OH_NativeBuffer_Config"
            }), "* config"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "一个指向OH_NativeBuffer_Config的指针，用于接收OH_NativeBuffer的属性。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativebuffer_map",
      children: "OH_NativeBuffer_Map()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_NativeBuffer_Map(OH_NativeBuffer *buffer, void **virAddr)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将OH_NativeBuffer对应的ION内存映射到进程空间。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "需注意调用该接口的OH_NativeBuffer的usage必须带有CPU_READ属性，否则可能导致稳定性问题。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_nativebuffer_alloc",
        children: "OH_NativeBuffer_Alloc"
      }), "申请的OH_NativeBuffer，需保证参数config.usage带有NATIVEBUFFER_USAGE_CPU_READ。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_nativebuffer_fromnativewindowbuffer",
        children: "OH_NativeBuffer_FromNativeWindowBuffer"
      }), "转换来的OH_NativeBuffer，需保证原OH_NativeWindowBuffer申请前，通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-external-window-h/capi-external-window-h#oh_nativewindow_nativewindowhandleopt",
        children: "OH_NativeWindow_NativeWindowHandleOpt"
      }), "接口设置的USAGE带有NATIVEBUFFER_USAGE_CPU_READ。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本接口需要与", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-native-buffer-h/capi-native-buffer-h#oh_nativebuffer_unmap",
        children: "OH_NativeBuffer_Unmap"
      }), "接口配合使用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本接口为非线程安全类型接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeBuffer"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 9"]
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
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-oh-nativebuffer-oh-nativebuffer/capi-oh-nativebuffer-oh-nativebuffer",
              children: "OH_NativeBuffer"
            }), " *buffer"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "一个指向OH_NativeBuffer实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void **virAddr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "一个二级指针，二级指针指向映射到当前进程的虚拟内存的地址。"
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
      id: "oh_nativebuffer_unmap",
      children: "OH_NativeBuffer_Unmap()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_NativeBuffer_Unmap(OH_NativeBuffer *buffer)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将OH_NativeBuffer对应的ION内存从进程空间移除。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本接口为非线程安全类型接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeBuffer"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 9"]
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
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-oh-nativebuffer-oh-nativebuffer/capi-oh-nativebuffer-oh-nativebuffer",
              children: "OH_NativeBuffer"
            }), " *buffer"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "一个指向OH_NativeBuffer实例的指针。"
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
      id: "oh_nativebuffer_getseqnum",
      children: "OH_NativeBuffer_GetSeqNum()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "uint32_t OH_NativeBuffer_GetSeqNum(OH_NativeBuffer *buffer)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取OH_NativeBuffer的序列号。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本接口为非线程安全类型接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeBuffer"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 9"]
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
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-oh-nativebuffer-oh-nativebuffer/capi-oh-nativebuffer-oh-nativebuffer",
              children: "OH_NativeBuffer"
            }), " *buffer"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "一个指向OH_NativeBuffer实例的指针。"
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
            children: "返回对应OH_NativeBuffer的唯一序列号。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativebuffer_setcolorspace",
      children: "OH_NativeBuffer_SetColorSpace()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_NativeBuffer_SetColorSpace(OH_NativeBuffer *buffer, OH_NativeBuffer_ColorSpace colorSpace)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为OH_NativeBuffer设置颜色空间属性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本接口为非线程安全类型接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeBuffer"]
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-oh-nativebuffer-oh-nativebuffer/capi-oh-nativebuffer-oh-nativebuffer",
              children: "OH_NativeBuffer"
            }), " *buffer"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "一个指向OH_NativeBuffer实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-buffer-common-h/capi-buffer-common-h#oh_nativebuffer_colorspace",
              children: "OH_NativeBuffer_ColorSpace"
            }), " colorSpace"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为OH_NativeBuffer设置的颜色空间，其值从", (0,jsx_runtime.jsx)(_components.a, {
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
      id: "oh_nativebuffer_mapplanes",
      children: "OH_NativeBuffer_MapPlanes()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_NativeBuffer_MapPlanes(OH_NativeBuffer *buffer, void **virAddr, OH_NativeBuffer_Planes *outPlanes)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将OH_NativeBuffer对应的多通道ION内存映射到进程空间。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本接口为非线程安全类型接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeBuffer"]
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
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-oh-nativebuffer-oh-nativebuffer/capi-oh-nativebuffer-oh-nativebuffer",
              children: "OH_NativeBuffer"
            }), " *buffer"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "一个指向OH_NativeBuffer实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void **virAddr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "一个二级指针，二级指针指向映射到当前进程的虚拟内存的地址。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-oh-nativebuffer-oh-nativebuffer-planes/capi-oh-nativebuffer-oh-nativebuffer-planes",
              children: "OH_NativeBuffer_Planes"
            }), " *outPlanes"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "一个指向所有图像平面格式信息的指针。"
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
      id: "oh_nativebuffer_fromnativewindowbuffer",
      children: "OH_NativeBuffer_FromNativeWindowBuffer()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_NativeBuffer_FromNativeWindowBuffer(OHNativeWindowBuffer *nativeWindowBuffer, OH_NativeBuffer **buffer)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将OHNativeWindowBuffer实例转换为OH_NativeBuffer实例。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本接口为非线程安全类型接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeBuffer"]
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
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-nativewindow-nativewindowbuffer/capi-nativewindow-nativewindowbuffer",
              children: "OHNativeWindowBuffer"
            }), " *nativeWindowBuffer"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["一个指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-nativewindow-nativewindowbuffer/capi-nativewindow-nativewindowbuffer",
              children: "OHNativeWindowBuffer"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-oh-nativebuffer-oh-nativebuffer/capi-oh-nativebuffer-oh-nativebuffer",
              children: "OH_NativeBuffer"
            }), " **buffer"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "一个指向OH_NativeBuffer实例的二级指针。"
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
      id: "oh_nativebuffer_getcolorspace",
      children: "OH_NativeBuffer_GetColorSpace()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_NativeBuffer_GetColorSpace(OH_NativeBuffer *buffer, OH_NativeBuffer_ColorSpace *colorSpace)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取OH_NativeBuffer颜色空间属性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本接口为非线程安全类型接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeBuffer"]
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
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-oh-nativebuffer-oh-nativebuffer/capi-oh-nativebuffer-oh-nativebuffer",
              children: "OH_NativeBuffer"
            }), " *buffer"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "一个指向OH_NativeBuffer实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-buffer-common-h/capi-buffer-common-h#oh_nativebuffer_colorspace",
              children: "OH_NativeBuffer_ColorSpace"
            }), " *colorSpace"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-oh-nativebuffer-oh-nativebuffer/capi-oh-nativebuffer-oh-nativebuffer",
              children: "OH_NativeBuffer"
            }), "设置的颜色空间，其值从", (0,jsx_runtime.jsx)(_components.a, {
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
      id: "oh_nativebuffer_setmetadatavalue",
      children: "OH_NativeBuffer_SetMetadataValue()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_NativeBuffer_SetMetadataValue(OH_NativeBuffer *buffer, OH_NativeBuffer_MetadataKey metadataKey,int32_t size, uint8_t *metadata)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为OH_NativeBuffer设置元数据属性值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本接口为非线程安全类型接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeBuffer"]
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
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-oh-nativebuffer-oh-nativebuffer/capi-oh-nativebuffer-oh-nativebuffer",
              children: "OH_NativeBuffer"
            }), " *buffer"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "一个指向OH_NativeBuffer实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-buffer-common-h/capi-buffer-common-h#oh_nativebuffer_metadatakey",
              children: "OH_NativeBuffer_MetadataKey"
            }), " metadataKey"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-oh-nativebuffer-oh-nativebuffer/capi-oh-nativebuffer-oh-nativebuffer",
              children: "OH_NativeBuffer"
            }), "的元数据类型，其值从", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-buffer-common-h/capi-buffer-common-h#oh_nativebuffer_metadatakey",
              children: "OH_NativeBuffer_MetadataKey"
            }), "获取。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t size"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["uint8_t向量的大小，其取值范围参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-buffer-common-h/capi-buffer-common-h#oh_nativebuffer_metadatakey",
              children: "OH_NativeBuffer_MetadataKey"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint8_t *metadata"
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
      id: "oh_nativebuffer_getmetadatavalue",
      children: "OH_NativeBuffer_GetMetadataValue()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_NativeBuffer_GetMetadataValue(OH_NativeBuffer *buffer, OH_NativeBuffer_MetadataKey metadataKey,int32_t *size, uint8_t **metadata)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取OH_NativeBuffer元数据属性值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本接口为非线程安全类型接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeBuffer"]
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
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-oh-nativebuffer-oh-nativebuffer/capi-oh-nativebuffer-oh-nativebuffer",
              children: "OH_NativeBuffer"
            }), " *buffer"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "一个指向OH_NativeBuffer实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-buffer-common-h/capi-buffer-common-h#oh_nativebuffer_metadatakey",
              children: "OH_NativeBuffer_MetadataKey"
            }), " metadataKey"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-oh-nativebuffer-oh-nativebuffer/capi-oh-nativebuffer-oh-nativebuffer",
              children: "OH_NativeBuffer"
            }), "的元数据类型，其值从", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-buffer-common-h/capi-buffer-common-h#oh_nativebuffer_metadatakey",
              children: "OH_NativeBuffer_MetadataKey"
            }), "获取。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t *size"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["uint8_t向量的大小，其取值范围参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-buffer-common-h/capi-buffer-common-h#oh_nativebuffer_metadatakey",
              children: "OH_NativeBuffer_MetadataKey"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint8_t **metadata"
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
      id: "oh_nativebuffer_mapwaitfence",
      children: "OH_NativeBuffer_MapWaitFence()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_NativeBuffer_MapWaitFence(OH_NativeBuffer *buffer, int32_t fenceFd, void **virAddr)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["将", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-oh-nativebuffer-oh-nativebuffer/capi-oh-nativebuffer-oh-nativebuffer",
        children: "OH_NativeBuffer"
      }), "对应的ION内存映射到进程空间，永久阻塞传入的fenceFd。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果接口返回OK，系统会将fenceFd关闭，无需用户close，否则，用户需要自行关闭fenceFd。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本接口需要与", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-native-buffer-h/capi-native-buffer-h#oh_nativebuffer_unmap",
        children: "OH_NativeBuffer_Unmap"
      }), "接口配合使用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本接口为非线程安全类型接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeBuffer"]
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
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-oh-nativebuffer-oh-nativebuffer/capi-oh-nativebuffer-oh-nativebuffer",
              children: "OH_NativeBuffer"
            }), " *buffer"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["一个指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-oh-nativebuffer-oh-nativebuffer/capi-oh-nativebuffer-oh-nativebuffer",
              children: "OH_NativeBuffer"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t fenceFd"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向文件描述符句柄，用于并发同步控制。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void **virAddr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "一个二级指针，二级指针指向映射到当前进程的虚拟内存的地址。"
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
            children: ["执行成功时返回NATIVE_ERROR_OK。  buffer、virAddr是空指针或fenceFd小于0时返回NATIVE_ERROR_INVALID_ARGUMENTS。  映射失败时返回NATIVE_ERROR_UNKNOWN。  其他返回值可参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-graphic-error-code-h/capi-graphic-error-code-h#ohnativeerrorcode",
              children: "OHNativeErrorCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativebuffer_writetoparcel",
      children: "OH_NativeBuffer_WriteToParcel()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_NativeBuffer_WriteToParcel(OH_NativeBuffer* buffer, OHIPCParcel* parcel)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["将", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-oh-nativebuffer-oh-nativebuffer/capi-oh-nativebuffer-oh-nativebuffer",
        children: "OH_NativeBuffer"
      }), "对象写入IPC序列化对象中。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本接口为非线程安全类型接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeBuffer"]
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
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-oh-nativebuffer-oh-nativebuffer/capi-oh-nativebuffer-oh-nativebuffer",
              children: "OH_NativeBuffer"
            }), "* buffer"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["一个指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-oh-nativebuffer-oh-nativebuffer/capi-oh-nativebuffer-oh-nativebuffer",
              children: "OH_NativeBuffer"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ipc-api/ipc-c/ipc-struct/capi-ohipcparcel-ohipcparcel/capi-ohipcparcel-ohipcparcel",
              children: "OHIPCParcel"
            }), "* parcel"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["一个指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ipc-api/ipc-c/ipc-struct/capi-ohipcparcel-ohipcparcel/capi-ohipcparcel-ohipcparcel",
              children: "OHIPCParcel"
            }), "结构体实例的指针，作为出参使用。"]
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
            children: ["执行成功时返回NATIVE_ERROR_OK。  buffer或parcel为空指针时返回NATIVE_ERROR_INVALID_ARGUMENTS。  IPC发送失败返回NATIVE_ERROR_BINDER_ERROR。  其他返回值可参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-graphic-error-code-h/capi-graphic-error-code-h#ohnativeerrorcode",
              children: "OHNativeErrorCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativebuffer_readfromparcel",
      children: "OH_NativeBuffer_ReadFromParcel()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_NativeBuffer_ReadFromParcel(OHIPCParcel* parcel, OH_NativeBuffer** buffer)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从IPC序列化对象中读取", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-oh-nativebuffer-oh-nativebuffer/capi-oh-nativebuffer-oh-nativebuffer",
        children: "OH_NativeBuffer"
      }), "对象。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本接口将会创建一个", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-oh-nativebuffer-oh-nativebuffer/capi-oh-nativebuffer-oh-nativebuffer",
        children: "OH_NativeBuffer"
      }), "，当OH_NativeBuffer对象使用完，开发者需要与", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-native-buffer-h/capi-native-buffer-h#oh_nativebuffer_unreference",
        children: "OH_NativeBuffer_Unreference"
      }), "接口配合使用，否则会存在内存泄漏。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本接口为非线程安全类型接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeBuffer"]
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
              href: "/ref/ipc-api/ipc-c/ipc-struct/capi-ohipcparcel-ohipcparcel/capi-ohipcparcel-ohipcparcel",
              children: "OHIPCParcel"
            }), "* parcel"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["一个指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ipc-api/ipc-c/ipc-struct/capi-ohipcparcel-ohipcparcel/capi-ohipcparcel-ohipcparcel",
              children: "OHIPCParcel"
            }), "的结构体实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-oh-nativebuffer-oh-nativebuffer/capi-oh-nativebuffer-oh-nativebuffer",
              children: "OH_NativeBuffer"
            }), "** buffer"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["一个指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-oh-nativebuffer-oh-nativebuffer/capi-oh-nativebuffer-oh-nativebuffer",
              children: "OH_NativeBuffer"
            }), "结构体实例的二级指针，作为出参使用。"]
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
            children: ["执行成功时返回NATIVE_ERROR_OK。  parcel或buffer为空指针时返回NATIVE_ERROR_INVALID_ARGUMENTS。  parcel反序列化失败返回NATIVE_ERROR_UNKNOWN。  其他返回值可参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-graphic-error-code-h/capi-graphic-error-code-h#ohnativeerrorcode",
              children: "OHNativeErrorCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativebuffer_issupported",
      children: "OH_NativeBuffer_IsSupported()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_NativeBuffer_IsSupported(OH_NativeBuffer_Config config, bool* isSupported)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["检查系统是否支持传入的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-oh-nativebuffer-oh-nativebuffer-config/capi-oh-nativebuffer-oh-nativebuffer-config",
        children: "OH_NativeBuffer_Config"
      }), "配置信息。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本接口为非线程安全类型接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeBuffer"]
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
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-oh-nativebuffer-oh-nativebuffer-config/capi-oh-nativebuffer-oh-nativebuffer-config",
              children: "OH_NativeBuffer_Config"
            }), " config"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-oh-nativebuffer-oh-nativebuffer-config/capi-oh-nativebuffer-oh-nativebuffer-config",
              children: "OH_NativeBuffer_Config"
            }), "结构体实例。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bool* isSupported"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为true代表系统支持传入的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-oh-nativebuffer-oh-nativebuffer-config/capi-oh-nativebuffer-oh-nativebuffer-config",
              children: "OH_NativeBuffer_Config"
            }), "配置信息，为false表示系统不支持传入的OH_NativeBuffer_Config配置信息，作为出参使用。"]
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
            children: ["执行成功时返回NATIVE_ERROR_OK。  isSupported为空指针时返回NATIVE_ERROR_INVALID_ARGUMENTS。  其他返回值可参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-graphic-error-code-h/capi-graphic-error-code-h#ohnativeerrorcode",
              children: "OHNativeErrorCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativebuffer_mapandgetconfig",
      children: "OH_NativeBuffer_MapAndGetConfig()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_NativeBuffer_MapAndGetConfig(OH_NativeBuffer* buffer, void** virAddr, OH_NativeBuffer_Config* config)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["将", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-oh-nativebuffer-oh-nativebuffer/capi-oh-nativebuffer-oh-nativebuffer",
        children: "OH_NativeBuffer"
      }), "对应的多通道ION内存映射到进程空间，并获取", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-oh-nativebuffer-oh-nativebuffer/capi-oh-nativebuffer-oh-nativebuffer",
        children: "OH_NativeBuffer"
      }), "对应的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-oh-nativebuffer-oh-nativebuffer-config/capi-oh-nativebuffer-oh-nativebuffer-config",
        children: "OH_NativeBuffer_Config"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本接口为非线程安全类型接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeBuffer"]
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
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-oh-nativebuffer-oh-nativebuffer/capi-oh-nativebuffer-oh-nativebuffer",
              children: "OH_NativeBuffer"
            }), "* buffer"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["一个指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-oh-nativebuffer-oh-nativebuffer/capi-oh-nativebuffer-oh-nativebuffer",
              children: "OH_NativeBuffer"
            }), "的结构体实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void** virAddr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "一个指向映射到当前进程的虚拟内存的地址的二级指针，作为出参使用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-oh-nativebuffer-oh-nativebuffer-config/capi-oh-nativebuffer-oh-nativebuffer-config",
              children: "OH_NativeBuffer_Config"
            }), "* config"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["一个指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-oh-nativebuffer-oh-nativebuffer-config/capi-oh-nativebuffer-oh-nativebuffer-config",
              children: "OH_NativeBuffer_Config"
            }), "的结构体实例的指针，作为出参使用。"]
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
            children: ["执行成功时返回NATIVE_ERROR_OK。  buffer、virAddr或config为空指针时返回NATIVE_ERROR_INVALID_ARGUMENTS。  映射时返回NATIVE_ERROR_UNKNOWN。  其他返回值可参考", (0,jsx_runtime.jsx)(_components.a, {
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