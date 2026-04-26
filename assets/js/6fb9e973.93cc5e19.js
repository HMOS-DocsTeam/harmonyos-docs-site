"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["111225"], {
33612(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_ipc_api_ipc_c_ipc_headerfile_capi_ipc_cparcel_h_capi_ipc_cparcel_h_md_6fb_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-ipc-api-ipc-c-ipc-headerfile-capi-ipc-cparcel-h-capi-ipc-cparcel-h-md-6fb.json
var site_docs_ref_ipc_api_ipc_c_ipc_headerfile_capi_ipc_cparcel_h_capi_ipc_cparcel_h_md_6fb_namespaceObject = JSON.parse('{"id":"ipc-api/ipc-c/ipc-headerfile/capi-ipc-cparcel-h/capi-ipc-cparcel-h","title":"ipc_cparcel.h","description":"概述","source":"@site/docs-ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-cparcel-h/capi-ipc-cparcel-h.md","sourceDirName":"ipc-api/ipc-c/ipc-headerfile/capi-ipc-cparcel-h","slug":"/ipc-api/ipc-c/ipc-headerfile/capi-ipc-cparcel-h/capi-ipc-cparcel-h","permalink":"/harmonyos-docs-site/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-cparcel-h/capi-ipc-cparcel-h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"ipc_cparcel.h","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ipc-cparcel-h","kit":"应用框架","last_updated":"2026-04-22","slug":"capi-ipc-cparcel-h"},"sidebar":"ref","previous":{"title":"IPCKit","permalink":"/harmonyos-docs-site/ref/ipc-api/ipc-c/ipc-module/capi-ipckit/capi-ipckit"},"next":{"title":"ipc_cremote_object.h","permalink":"/harmonyos-docs-site/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-cremote-object-h/capi-ipc-cremote-object-h"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-cparcel-h/capi-ipc-cparcel-h.md


const frontMatter = {
	title: 'ipc_cparcel.h',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ipc-cparcel-h',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'capi-ipc-cparcel-h'
};
const contentTitle = 'ipc_cparcel.h';

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
  "value": "函数",
  "id": "函数",
  "level": 3
}, {
  "value": "函数说明",
  "id": "函数说明",
  "level": 2
}, {
  "value": "OH_IPC_MemAllocator()",
  "id": "oh_ipc_memallocator",
  "level": 3
}, {
  "value": "OH_IPCParcel_Create()",
  "id": "oh_ipcparcel_create",
  "level": 3
}, {
  "value": "OH_IPCParcel_Destroy()",
  "id": "oh_ipcparcel_destroy",
  "level": 3
}, {
  "value": "OH_IPCParcel_GetDataSize()",
  "id": "oh_ipcparcel_getdatasize",
  "level": 3
}, {
  "value": "OH_IPCParcel_GetWritableBytes()",
  "id": "oh_ipcparcel_getwritablebytes",
  "level": 3
}, {
  "value": "OH_IPCParcel_GetReadableBytes()",
  "id": "oh_ipcparcel_getreadablebytes",
  "level": 3
}, {
  "value": "OH_IPCParcel_GetReadPosition()",
  "id": "oh_ipcparcel_getreadposition",
  "level": 3
}, {
  "value": "OH_IPCParcel_GetWritePosition()",
  "id": "oh_ipcparcel_getwriteposition",
  "level": 3
}, {
  "value": "OH_IPCParcel_RewindReadPosition()",
  "id": "oh_ipcparcel_rewindreadposition",
  "level": 3
}, {
  "value": "OH_IPCParcel_RewindWritePosition()",
  "id": "oh_ipcparcel_rewindwriteposition",
  "level": 3
}, {
  "value": "OH_IPCParcel_WriteInt8()",
  "id": "oh_ipcparcel_writeint8",
  "level": 3
}, {
  "value": "OH_IPCParcel_ReadInt8()",
  "id": "oh_ipcparcel_readint8",
  "level": 3
}, {
  "value": "OH_IPCParcel_WriteInt16()",
  "id": "oh_ipcparcel_writeint16",
  "level": 3
}, {
  "value": "OH_IPCParcel_ReadInt16()",
  "id": "oh_ipcparcel_readint16",
  "level": 3
}, {
  "value": "OH_IPCParcel_WriteInt32()",
  "id": "oh_ipcparcel_writeint32",
  "level": 3
}, {
  "value": "OH_IPCParcel_ReadInt32()",
  "id": "oh_ipcparcel_readint32",
  "level": 3
}, {
  "value": "OH_IPCParcel_WriteInt64()",
  "id": "oh_ipcparcel_writeint64",
  "level": 3
}, {
  "value": "OH_IPCParcel_ReadInt64()",
  "id": "oh_ipcparcel_readint64",
  "level": 3
}, {
  "value": "OH_IPCParcel_WriteFloat()",
  "id": "oh_ipcparcel_writefloat",
  "level": 3
}, {
  "value": "OH_IPCParcel_ReadFloat()",
  "id": "oh_ipcparcel_readfloat",
  "level": 3
}, {
  "value": "OH_IPCParcel_WriteDouble()",
  "id": "oh_ipcparcel_writedouble",
  "level": 3
}, {
  "value": "OH_IPCParcel_ReadDouble()",
  "id": "oh_ipcparcel_readdouble",
  "level": 3
}, {
  "value": "OH_IPCParcel_WriteString()",
  "id": "oh_ipcparcel_writestring",
  "level": 3
}, {
  "value": "OH_IPCParcel_ReadString()",
  "id": "oh_ipcparcel_readstring",
  "level": 3
}, {
  "value": "OH_IPCParcel_WriteBuffer()",
  "id": "oh_ipcparcel_writebuffer",
  "level": 3
}, {
  "value": "OH_IPCParcel_ReadBuffer()",
  "id": "oh_ipcparcel_readbuffer",
  "level": 3
}, {
  "value": "OH_IPCParcel_WriteRemoteStub()",
  "id": "oh_ipcparcel_writeremotestub",
  "level": 3
}, {
  "value": "OH_IPCParcel_ReadRemoteStub()",
  "id": "oh_ipcparcel_readremotestub",
  "level": 3
}, {
  "value": "OH_IPCParcel_WriteRemoteProxy()",
  "id": "oh_ipcparcel_writeremoteproxy",
  "level": 3
}, {
  "value": "OH_IPCParcel_ReadRemoteProxy()",
  "id": "oh_ipcparcel_readremoteproxy",
  "level": 3
}, {
  "value": "OH_IPCParcel_WriteFileDescriptor()",
  "id": "oh_ipcparcel_writefiledescriptor",
  "level": 3
}, {
  "value": "OH_IPCParcel_ReadFileDescriptor()",
  "id": "oh_ipcparcel_readfiledescriptor",
  "level": 3
}, {
  "value": "OH_IPCParcel_Append()",
  "id": "oh_ipcparcel_append",
  "level": 3
}, {
  "value": "OH_IPCParcel_WriteInterfaceToken()",
  "id": "oh_ipcparcel_writeinterfacetoken",
  "level": 3
}, {
  "value": "OH_IPCParcel_ReadInterfaceToken()",
  "id": "oh_ipcparcel_readinterfacetoken",
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
        id: "ipc_cparcelh",
        children: "ipc_cparcel.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "提供IPC序列化/反序列化C接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <IPCKit/ipc_cparcel.h>"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "库："
        })
      }), " libipc_capi.so"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Communication.IPC.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "相关模块："
        })
      }), (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ipc-api/ipc-c/ipc-module/capi-ohipcparcel/capi-ohipcparcel",
        children: "OHIPCParcel"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "结构体",
      children: "结构体"
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
              href: "/ref/ipc-api/ipc-c/ipc-struct/capi-ohipcparcel-ohipcparcel/capi-ohipcparcel-ohipcparcel",
              children: "OHIPCParcel"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OHIPCParcel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IPC序列化对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ipc-api/ipc-c/ipc-struct/capi-ohipcparcel-ohipcremoteproxy/capi-ohipcparcel-ohipcremoteproxy",
              children: "OHIPCRemoteProxy"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OHIPCRemoteProxy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IPC远端代理对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ipc-api/ipc-c/ipc-struct/capi-ohipcparcel-ohipcremotestub/capi-ohipcparcel-ohipcremotestub",
              children: "OHIPCRemoteStub"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OHIPCRemoteStub"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IPC远端服务对象。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "函数",
      children: "函数"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "#oh_ipc_memallocator",
              children: "typedef void* (*OH_IPC_MemAllocator)(int32_t len)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_IPC_MemAllocator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "内存分配函数类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_ipcparcel_create",
              children: "OHIPCParcel* OH_IPCParcel_Create(void)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建OHIPCParcel对象，对象可序列化大小不能超过204800字节。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_ipcparcel_destroy",
              children: "void OH_IPCParcel_Destroy(OHIPCParcel *parcel)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁OHIPCParcel对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_ipcparcel_getdatasize",
              children: "int OH_IPCParcel_GetDataSize(const OHIPCParcel *parcel)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取OHIPCParcel对象包含的数据的大小。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_ipcparcel_getwritablebytes",
              children: "int OH_IPCParcel_GetWritableBytes(const OHIPCParcel *parcel)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取OHIPCParcel对象可以写入的字节数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_ipcparcel_getreadablebytes",
              children: "int OH_IPCParcel_GetReadableBytes(const OHIPCParcel *parcel)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取OHIPCParcel对象还可以读取的字节数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_ipcparcel_getreadposition",
              children: "int OH_IPCParcel_GetReadPosition(const OHIPCParcel *parcel)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取OHIPCParcel对象当前读取位置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_ipcparcel_getwriteposition",
              children: "int OH_IPCParcel_GetWritePosition(const OHIPCParcel *parcel)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取OHIPCParcel对象当前写入位置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_ipcparcel_rewindreadposition",
              children: "int OH_IPCParcel_RewindReadPosition(OHIPCParcel *parcel, uint32_t newReadPos)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "重置OHIPCParcel对象读取位置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_ipcparcel_rewindwriteposition",
              children: "int OH_IPCParcel_RewindWritePosition(OHIPCParcel *parcel, uint32_t newWritePos)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "重置OHIPCParcel对象写入位置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_ipcparcel_writeint8",
              children: "int OH_IPCParcel_WriteInt8(OHIPCParcel *parcel, int8_t value)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "向OHIPCParcel对象写入一个int8_t值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_ipcparcel_readint8",
              children: "int OH_IPCParcel_ReadInt8(const OHIPCParcel *parcel, int8_t *value)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从OHIPCParcel对象中读取一个int8_t值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_ipcparcel_writeint16",
              children: "int OH_IPCParcel_WriteInt16(OHIPCParcel *parcel, int16_t value)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "向OHIPCParcel对象写入一个int16_t值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_ipcparcel_readint16",
              children: "int OH_IPCParcel_ReadInt16(const OHIPCParcel *parcel, int16_t *value)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从OHIPCParcel对象中读取一个int16_t值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_ipcparcel_writeint32",
              children: "int OH_IPCParcel_WriteInt32(OHIPCParcel *parcel, int32_t value)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "向OHIPCParcel对象写入一个int32_t值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_ipcparcel_readint32",
              children: "int OH_IPCParcel_ReadInt32(const OHIPCParcel *parcel, int32_t *value)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从OHIPCParcel对象中读取一个int32_t值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_ipcparcel_writeint64",
              children: "int OH_IPCParcel_WriteInt64(OHIPCParcel *parcel, int64_t value)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "向OHIPCParcel对象写入一个int64_t值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_ipcparcel_readint64",
              children: "int OH_IPCParcel_ReadInt64(const OHIPCParcel *parcel, int64_t *value)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从OHIPCParcel对象中读取一个int64_t值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_ipcparcel_writefloat",
              children: "int OH_IPCParcel_WriteFloat(OHIPCParcel *parcel, float value)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "向OHIPCParcel对象写入一个float值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_ipcparcel_readfloat",
              children: "int OH_IPCParcel_ReadFloat(const OHIPCParcel *parcel, float *value)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从OHIPCParcel对象中读取一个float值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_ipcparcel_writedouble",
              children: "int OH_IPCParcel_WriteDouble(OHIPCParcel *parcel, double value)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "向OHIPCParcel对象写入一个double值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_ipcparcel_readdouble",
              children: "int OH_IPCParcel_ReadDouble(const OHIPCParcel *parcel, double *value)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从OHIPCParcel对象中读取一个double值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_ipcparcel_writestring",
              children: "int OH_IPCParcel_WriteString(OHIPCParcel *parcel, const char *str)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "向OHIPCParcel对象写入字符串，包含字符串结束符。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_ipcparcel_readstring",
              children: "const char* OH_IPCParcel_ReadString(const OHIPCParcel *parcel)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从OHIPCParcel对象读取字符串，用户可通过strlen获取字符串长度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_ipcparcel_writebuffer",
              children: "int OH_IPCParcel_Writebuffer(OHIPCParcel *parcel, const uint8_t *buffer, int32_t len)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "向OHIPCParcel对象写入指定长度的内存信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_ipcparcel_readbuffer",
              children: "const uint8_t* OH_IPCParcel_ReadBuffer(const OHIPCParcel *parcel, int32_t len)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从OHIPCParcel对象读取指定长度的内存信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_ipcparcel_writeremotestub",
              children: "int OH_IPCParcel_WriteRemoteStub(OHIPCParcel *parcel, const OHIPCRemoteStub *stub)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "向OHIPCParcel对象写入OHIPCRemoteStub对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_ipcparcel_readremotestub",
              children: "OHIPCRemoteStub* OH_IPCParcel_ReadRemoteStub(const OHIPCParcel *parcel)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从OHIPCParcel对象读取OHIPCRemoteStub对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_ipcparcel_writeremoteproxy",
              children: "int OH_IPCParcel_WriteRemoteProxy(OHIPCParcel *parcel, const OHIPCRemoteProxy *proxy)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "向OHIPCParcel对象写入OHIPCRemoteProxy对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_ipcparcel_readremoteproxy",
              children: "OHIPCRemoteProxy* OH_IPCParcel_ReadRemoteProxy(const OHIPCParcel *parcel)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从OHIPCParcel对象读取OHIPCRemoteProxy对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_ipcparcel_writefiledescriptor",
              children: "int OH_IPCParcel_WriteFileDescriptor(OHIPCParcel *parcel, int32_t fd)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "向OHIPCParcel对象写入文件描述符。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_ipcparcel_readfiledescriptor",
              children: "int OH_IPCParcel_ReadFileDescriptor(const OHIPCParcel *parcel, int32_t *fd)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从OHIPCParcel对象读取文件描述符。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_ipcparcel_append",
              children: "int OH_IPCParcel_Append(OHIPCParcel *parcel, const OHIPCParcel *data)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OHIPCParcel对象数据拼接。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_ipcparcel_writeinterfacetoken",
              children: "int OH_IPCParcel_WriteInterfaceToken(OHIPCParcel *parcel, const char *token)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "向OHIPCParcel对象写入接口描述符，用于接口身份校验。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_ipcparcel_readinterfacetoken",
              children: "int OH_IPCParcel_ReadInterfaceToken(const OHIPCParcel *parcel, char **token, int32_t *len, OH_IPC_MemAllocator allocator)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从OHIPCParcel对象读取接口描述符信息，用于接口身份校验。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数说明",
      children: "函数说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_ipc_memallocator",
      children: "OH_IPC_MemAllocator()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void* (*OH_IPC_MemAllocator)(int32_t len)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "内存分配函数类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Communication.IPC.Core"]
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t len"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "len 申请内存的长度。"
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
            children: "void*"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "成功返回分配的内存地址；失败返回NULL。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_ipcparcel_create",
      children: "OH_IPCParcel_Create()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OHIPCParcel* OH_IPCParcel_Create(void)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建OHIPCParcel对象，对象可序列化大小不能超过204800字节。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Communication.IPC.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
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
            children: "OHIPCParcel*"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "成功返回OHIPCParcel对象指针；失败返回NULL。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_ipcparcel_destroy",
      children: "OH_IPCParcel_Destroy()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_IPCParcel_Destroy(OHIPCParcel *parcel)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "销毁OHIPCParcel对象。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Communication.IPC.Core"]
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
              href: "/ref/ipc-api/ipc-c/ipc-module/capi-ohipcparcel/capi-ohipcparcel",
              children: "OHIPCParcel"
            }), " *parcel"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "parcel 需要销毁OHIPCParcel对象的指针。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_ipcparcel_getdatasize",
      children: "OH_IPCParcel_GetDataSize()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_IPCParcel_GetDataSize(const OHIPCParcel *parcel)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取OHIPCParcel对象包含的数据的大小。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Communication.IPC.Core"]
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
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ipc-api/ipc-c/ipc-module/capi-ohipcparcel/capi-ohipcparcel",
              children: "OHIPCParcel"
            }), " *parcel"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "parcel OHIPCParcel对象的指针，不能为空。"
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
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回数据大小，参数不合法时返回-1。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_ipcparcel_getwritablebytes",
      children: "OH_IPCParcel_GetWritableBytes()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_IPCParcel_GetWritableBytes(const OHIPCParcel *parcel)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取OHIPCParcel对象可以写入的字节数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Communication.IPC.Core"]
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
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ipc-api/ipc-c/ipc-module/capi-ohipcparcel/capi-ohipcparcel",
              children: "OHIPCParcel"
            }), " *parcel"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "parcel OHIPCParcel对象的指针，不能为空。"
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
            children: "返回可写字节数大小，参数不合法时返回-1。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_ipcparcel_getreadablebytes",
      children: "OH_IPCParcel_GetReadableBytes()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_IPCParcel_GetReadableBytes(const OHIPCParcel *parcel)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取OHIPCParcel对象还可以读取的字节数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Communication.IPC.Core"]
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
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ipc-api/ipc-c/ipc-module/capi-ohipcparcel/capi-ohipcparcel",
              children: "OHIPCParcel"
            }), " *parcel"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "parcel OHIPCParcel对象的指针，不能为空。"
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
            children: "返回可读字节数大小，参数不合法时返回-1。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_ipcparcel_getreadposition",
      children: "OH_IPCParcel_GetReadPosition()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_IPCParcel_GetReadPosition(const OHIPCParcel *parcel)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取OHIPCParcel对象当前读取位置。"
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
              href: "/ref/ipc-api/ipc-c/ipc-module/capi-ohipcparcel/capi-ohipcparcel",
              children: "OHIPCParcel"
            }), " *parcel"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "parcel OHIPCParcel对象的指针，不能为空。"
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
            children: "返回当前读位置，参数不合法时返回-1。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_ipcparcel_getwriteposition",
      children: "OH_IPCParcel_GetWritePosition()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_IPCParcel_GetWritePosition(const OHIPCParcel *parcel)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取OHIPCParcel对象当前写入位置。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Communication.IPC.Core"]
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
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ipc-api/ipc-c/ipc-module/capi-ohipcparcel/capi-ohipcparcel",
              children: "OHIPCParcel"
            }), " *parcel"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "parcel OHIPCParcel对象的指针，不能为空。"
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
            children: "返回当前写入位置，参数不合法时返回-1。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_ipcparcel_rewindreadposition",
      children: "OH_IPCParcel_RewindReadPosition()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_IPCParcel_RewindReadPosition(OHIPCParcel *parcel, uint32_t newReadPos)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "重置OHIPCParcel对象读取位置。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Communication.IPC.Core"]
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
              href: "/ref/ipc-api/ipc-c/ipc-module/capi-ohipcparcel/capi-ohipcparcel",
              children: "OHIPCParcel"
            }), " *parcel"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "parcel OHIPCParcel对象的指针，不能为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t newReadPos"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "newReadPos 新的读取位置，范围：[0，当前数据大小]。"
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
            children: ["成功返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-error-code-h/capi-ipc-error-code-h#oh_ipc_errorcode",
              children: "OH_IPC_ErrorCode#OH_IPC_SUCCESS"
            }), "；  参数不合法时返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-error-code-h/capi-ipc-error-code-h#oh_ipc_errorcode",
              children: "OH_IPC_ErrorCode#OH_IPC_CHECK_PARAM_ERROR"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_ipcparcel_rewindwriteposition",
      children: "OH_IPCParcel_RewindWritePosition()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_IPCParcel_RewindWritePosition(OHIPCParcel *parcel, uint32_t newWritePos)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "重置OHIPCParcel的写入位置。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Communication.IPC.Core"]
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
              href: "/ref/ipc-api/ipc-c/ipc-module/capi-ohipcparcel/capi-ohipcparcel",
              children: "OHIPCParcel"
            }), " *parcel"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "parcel OHIPCParcel对象的指针，不能为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t newWritePos"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "newWritePos 新的写入位置，范围：[0, 当前数据大小]。"
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
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["成功返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-error-code-h/capi-ipc-error-code-h#oh_ipc_errorcode",
              children: "OH_IPC_ErrorCode#OH_IPC_SUCCESS"
            }), "；  参数不合法时返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-error-code-h/capi-ipc-error-code-h#oh_ipc_errorcode",
              children: "OH_IPC_ErrorCode#OH_IPC_CHECK_PARAM_ERROR"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_ipcparcel_writeint8",
      children: "OH_IPCParcel_WriteInt8()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_IPCParcel_WriteInt8(OHIPCParcel *parcel, int8_t value)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "向OHIPCParcel写入一个int8_t值。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Communication.IPC.Core"]
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
              href: "/ref/ipc-api/ipc-c/ipc-module/capi-ohipcparcel/capi-ohipcparcel",
              children: "OHIPCParcel"
            }), " *parcel"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "parcel OHIPCParcel对象的指针，不能为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int8_t value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "value 要写入的值。"
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
            children: "返回"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["成功返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-error-code-h/capi-ipc-error-code-h#oh_ipc_errorcode",
              children: "OH_IPC_ErrorCode#OH_IPC_SUCCESS"
            }), "；  参数不合法时返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-error-code-h/capi-ipc-error-code-h#oh_ipc_errorcode",
              children: "OH_IPC_ErrorCode#OH_IPC_CHECK_PARAM_ERROR"
            }), "；  写入失败返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-error-code-h/capi-ipc-error-code-h#oh_ipc_errorcode",
              children: "OH_IPC_ErrorCode#OH_IPC_PARCEL_WRITE_ERROR"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_ipcparcel_readint8",
      children: "OH_IPCParcel_ReadInt8()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_IPCParcel_ReadInt8(const OHIPCParcel *parcel, int8_t *value)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从OHIPCParcel对象中读取int8_t值。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Communication.IPC.Core"]
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
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ipc-api/ipc-c/ipc-module/capi-ohipcparcel/capi-ohipcparcel",
              children: "OHIPCParcel"
            }), " *parcel"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "parcel OHIPCParcel对象的指针，不能为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int8_t *value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "value 存储读取数据的指针，不能为空。"
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
            children: "返回"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["成功返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-error-code-h/capi-ipc-error-code-h#oh_ipc_errorcode",
              children: "OH_IPC_ErrorCode#OH_IPC_SUCCESS"
            }), "；  参数不合法时返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-error-code-h/capi-ipc-error-code-h#oh_ipc_errorcode",
              children: "OH_IPC_ErrorCode#OH_IPC_CHECK_PARAM_ERROR"
            }), "；  读取失败返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-error-code-h/capi-ipc-error-code-h#oh_ipc_errorcode",
              children: "OH_IPC_ErrorCode#OH_IPC_PARCEL_READ_ERROR"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_ipcparcel_writeint16",
      children: "OH_IPCParcel_WriteInt16()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_IPCParcel_WriteInt16(OHIPCParcel *parcel, int16_t value)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "向OHIPCParcel对象写入int16_t值。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Communication.IPC.Core"]
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
              href: "/ref/ipc-api/ipc-c/ipc-module/capi-ohipcparcel/capi-ohipcparcel",
              children: "OHIPCParcel"
            }), " *parcel"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "parcel OHIPCParcel对象的指针，不能为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int16_t value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "value 要写入的值。"
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
            children: ["成功返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-error-code-h/capi-ipc-error-code-h#oh_ipc_errorcode",
              children: "OH_IPC_ErrorCode#OH_IPC_SUCCESS"
            }), "；  参数不合法时返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-error-code-h/capi-ipc-error-code-h#oh_ipc_errorcode",
              children: "OH_IPC_ErrorCode#OH_IPC_CHECK_PARAM_ERROR"
            }), "；  写入失败返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-error-code-h/capi-ipc-error-code-h#oh_ipc_errorcode",
              children: "OH_IPC_ErrorCode#OH_IPC_PARCEL_WRITE_ERROR"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_ipcparcel_readint16",
      children: "OH_IPCParcel_ReadInt16()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_IPCParcel_ReadInt16(const OHIPCParcel *parcel, int16_t *value)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从OHIPCParcel对象读取int16_t值。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Communication.IPC.Core"]
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
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ipc-api/ipc-c/ipc-module/capi-ohipcparcel/capi-ohipcparcel",
              children: "OHIPCParcel"
            }), " *parcel"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "parcel OHIPCParcel对象的指针，不能为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int16_t *value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "value 存储读取数据的指针，不能为空。"
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
            children: ["成功返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-error-code-h/capi-ipc-error-code-h#oh_ipc_errorcode",
              children: "OH_IPC_ErrorCode#OH_IPC_SUCCESS"
            }), "；  参数不合法时返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-error-code-h/capi-ipc-error-code-h#oh_ipc_errorcode",
              children: "OH_IPC_ErrorCode#OH_IPC_CHECK_PARAM_ERROR"
            }), "；  读取失败返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-error-code-h/capi-ipc-error-code-h#oh_ipc_errorcode",
              children: "OH_IPC_ErrorCode#OH_IPC_PARCEL_READ_ERROR"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_ipcparcel_writeint32",
      children: "OH_IPCParcel_WriteInt32()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_IPCParcel_WriteInt32(OHIPCParcel *parcel, int32_t value)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "向OHIPCParcel对象写入int32_t值。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Communication.IPC.Core"]
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
              href: "/ref/ipc-api/ipc-c/ipc-module/capi-ohipcparcel/capi-ohipcparcel",
              children: "OHIPCParcel"
            }), " *parcel"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "parcel OHIPCParcel对象的指针，不能为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "value 要写入的值。"
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
            children: ["成功返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-error-code-h/capi-ipc-error-code-h#oh_ipc_errorcode",
              children: "OH_IPC_ErrorCode#OH_IPC_SUCCESS"
            }), "；  参数不合法时返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-error-code-h/capi-ipc-error-code-h#oh_ipc_errorcode",
              children: "OH_IPC_ErrorCode#OH_IPC_CHECK_PARAM_ERROR"
            }), "；  写入失败返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-error-code-h/capi-ipc-error-code-h#oh_ipc_errorcode",
              children: "OH_IPC_ErrorCode#OH_IPC_PARCEL_WRITE_ERROR"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_ipcparcel_readint32",
      children: "OH_IPCParcel_ReadInt32()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_IPCParcel_ReadInt32(const OHIPCParcel *parcel, int32_t *value)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从OHIPCParcel对象读取int32_t值。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Communication.IPC.Core"]
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
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ipc-api/ipc-c/ipc-module/capi-ohipcparcel/capi-ohipcparcel",
              children: "OHIPCParcel"
            }), " *parcel"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "parcel OHIPCParcel对象的指针，不能为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t *value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "value 存储读取数据的指针，不能为空。"
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
            children: ["成功返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-error-code-h/capi-ipc-error-code-h#oh_ipc_errorcode",
              children: "OH_IPC_ErrorCode#OH_IPC_SUCCESS"
            }), "；  参数不合法时返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-error-code-h/capi-ipc-error-code-h#oh_ipc_errorcode",
              children: "OH_IPC_ErrorCode#OH_IPC_CHECK_PARAM_ERROR"
            }), "；  读取失败返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-error-code-h/capi-ipc-error-code-h#oh_ipc_errorcode",
              children: "OH_IPC_ErrorCode#OH_IPC_PARCEL_READ_ERROR"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_ipcparcel_writeint64",
      children: "OH_IPCParcel_WriteInt64()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_IPCParcel_WriteInt64(OHIPCParcel *parcel, int64_t value)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "向OHIPCParcel对象写入int64_t值。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Communication.IPC.Core"]
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
              href: "/ref/ipc-api/ipc-c/ipc-module/capi-ohipcparcel/capi-ohipcparcel",
              children: "OHIPCParcel"
            }), " *parcel"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "parcel OHIPCParcel对象的指针，不能为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int64_t value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "value 要写入的值。"
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
            children: ["成功返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-error-code-h/capi-ipc-error-code-h#oh_ipc_errorcode",
              children: "OH_IPC_ErrorCode#OH_IPC_SUCCESS"
            }), "；  参数不合法时返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-error-code-h/capi-ipc-error-code-h#oh_ipc_errorcode",
              children: "OH_IPC_ErrorCode#OH_IPC_CHECK_PARAM_ERROR"
            }), "；  写入失败返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-error-code-h/capi-ipc-error-code-h#oh_ipc_errorcode",
              children: "OH_IPC_ErrorCode#OH_IPC_PARCEL_WRITE_ERROR"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_ipcparcel_readint64",
      children: "OH_IPCParcel_ReadInt64()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_IPCParcel_ReadInt64(const OHIPCParcel *parcel, int64_t *value)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从OHIPCParcel对象读取int64_t值。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Communication.IPC.Core"]
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
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ipc-api/ipc-c/ipc-module/capi-ohipcparcel/capi-ohipcparcel",
              children: "OHIPCParcel"
            }), " *parcel"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "parcel OHIPCParcel对象的指针，不能为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int64_t *value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "value 存储读取数据的指针，不能为空。"
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
            children: ["成功返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-error-code-h/capi-ipc-error-code-h#oh_ipc_errorcode",
              children: "OH_IPC_ErrorCode#OH_IPC_SUCCESS"
            }), "；  参数不合法时返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-error-code-h/capi-ipc-error-code-h#oh_ipc_errorcode",
              children: "OH_IPC_ErrorCode#OH_IPC_CHECK_PARAM_ERROR"
            }), "；  读取失败返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-error-code-h/capi-ipc-error-code-h#oh_ipc_errorcode",
              children: "OH_IPC_ErrorCode#OH_IPC_PARCEL_READ_ERROR"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_ipcparcel_writefloat",
      children: "OH_IPCParcel_WriteFloat()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_IPCParcel_WriteFloat(OHIPCParcel *parcel, float value)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "向OHIPCParcel对象写入float值。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Communication.IPC.Core"]
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
              href: "/ref/ipc-api/ipc-c/ipc-module/capi-ohipcparcel/capi-ohipcparcel",
              children: "OHIPCParcel"
            }), " *parcel"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "parcel OHIPCParcel对象的指针，不能为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "float value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "value 要写入的值。"
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
            children: ["成功返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-error-code-h/capi-ipc-error-code-h#oh_ipc_errorcode",
              children: "OH_IPC_ErrorCode#OH_IPC_SUCCESS"
            }), "；  参数不合法时返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-error-code-h/capi-ipc-error-code-h#oh_ipc_errorcode",
              children: "OH_IPC_ErrorCode#OH_IPC_CHECK_PARAM_ERROR"
            }), "；  写入失败返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-error-code-h/capi-ipc-error-code-h#oh_ipc_errorcode",
              children: "OH_IPC_ErrorCode#OH_IPC_PARCEL_WRITE_ERROR"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_ipcparcel_readfloat",
      children: "OH_IPCParcel_ReadFloat()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_IPCParcel_ReadFloat(const OHIPCParcel *parcel, float *value)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从OHIPCParcel对象读取float值。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Communication.IPC.Core"]
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
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ipc-api/ipc-c/ipc-module/capi-ohipcparcel/capi-ohipcparcel",
              children: "OHIPCParcel"
            }), " *parcel"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "parcel OHIPCParcel对象的指针，不能为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "float *value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "value 存储读取数据的指针，不能为空。"
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
            children: ["成功返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-error-code-h/capi-ipc-error-code-h#oh_ipc_errorcode",
              children: "OH_IPC_ErrorCode#OH_IPC_SUCCESS"
            }), "；  参数不合法时返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-error-code-h/capi-ipc-error-code-h#oh_ipc_errorcode",
              children: "OH_IPC_ErrorCode#OH_IPC_CHECK_PARAM_ERROR"
            }), "；  读取失败返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-error-code-h/capi-ipc-error-code-h#oh_ipc_errorcode",
              children: "OH_IPC_ErrorCode#OH_IPC_PARCEL_READ_ERROR"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_ipcparcel_writedouble",
      children: "OH_IPCParcel_WriteDouble()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_IPCParcel_WriteDouble(OHIPCParcel *parcel, double value)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "向OHIPCParcel对象写入double值。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Communication.IPC.Core"]
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
              href: "/ref/ipc-api/ipc-c/ipc-module/capi-ohipcparcel/capi-ohipcparcel",
              children: "OHIPCParcel"
            }), " *parcel"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "parcel OHIPCParcel对象的指针，不能为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "double value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "value 要写入的值。"
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
            children: ["成功返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-error-code-h/capi-ipc-error-code-h#oh_ipc_errorcode",
              children: "OH_IPC_ErrorCode#OH_IPC_SUCCESS"
            }), "；  参数不合法时返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-error-code-h/capi-ipc-error-code-h#oh_ipc_errorcode",
              children: "OH_IPC_ErrorCode#OH_IPC_CHECK_PARAM_ERROR"
            }), "；  写入失败返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-error-code-h/capi-ipc-error-code-h#oh_ipc_errorcode",
              children: "OH_IPC_ErrorCode#OH_IPC_PARCEL_WRITE_ERROR"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_ipcparcel_readdouble",
      children: "OH_IPCParcel_ReadDouble()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_IPCParcel_ReadDouble(const OHIPCParcel *parcel, double *value)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从OHIPCParcel对象读取double值。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Communication.IPC.Core"]
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
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ipc-api/ipc-c/ipc-module/capi-ohipcparcel/capi-ohipcparcel",
              children: "OHIPCParcel"
            }), " *parcel"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "parcel OHIPCParcel对象的指针，不能为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "double *value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "value 存储读取数据的指针，不能为空。"
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
            children: ["成功返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-error-code-h/capi-ipc-error-code-h#oh_ipc_errorcode",
              children: "OH_IPC_ErrorCode#OH_IPC_SUCCESS"
            }), "；  参数不合法时返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-error-code-h/capi-ipc-error-code-h#oh_ipc_errorcode",
              children: "OH_IPC_ErrorCode#OH_IPC_CHECK_PARAM_ERROR"
            }), "；  读取失败返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-error-code-h/capi-ipc-error-code-h#oh_ipc_errorcode",
              children: "OH_IPC_ErrorCode#OH_IPC_PARCEL_READ_ERROR"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_ipcparcel_writestring",
      children: "OH_IPCParcel_WriteString()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_IPCParcel_WriteString(OHIPCParcel *parcel, const char *str)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "向OHIPCParcel对象写入字符串，包括字符串结束符。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Communication.IPC.Core"]
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
              href: "/ref/ipc-api/ipc-c/ipc-module/capi-ohipcparcel/capi-ohipcparcel",
              children: "OHIPCParcel"
            }), " *parcel"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "parcel OHIPCParcel对象的指针，不能为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char *str"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "str 写入字符串，不能为空。"
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
            children: ["成功返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-error-code-h/capi-ipc-error-code-h#oh_ipc_errorcode",
              children: "OH_IPC_ErrorCode#OH_IPC_SUCCESS"
            }), "；  参数不合法时返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-error-code-h/capi-ipc-error-code-h#oh_ipc_errorcode",
              children: "OH_IPC_ErrorCode#OH_IPC_CHECK_PARAM_ERROR"
            }), "；  写入失败返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-error-code-h/capi-ipc-error-code-h#oh_ipc_errorcode",
              children: "OH_IPC_ErrorCode#OH_IPC_PARCEL_WRITE_ERROR"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_ipcparcel_readstring",
      children: "OH_IPCParcel_ReadString()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "const char* OH_IPCParcel_ReadString(const OHIPCParcel *parcel)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从OHIPCParcel对象读取字符串，用户可通过strlen获取字符串长度。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Communication.IPC.Core"]
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
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ipc-api/ipc-c/ipc-module/capi-ohipcparcel/capi-ohipcparcel",
              children: "OHIPCParcel"
            }), " *parcel"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "parcel OHIPCParcel对象的指针，不能为空。"
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
            children: "const char*"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "成功返回读取字符串地址；参数不合法或读取失败时返回NULL。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_ipcparcel_writebuffer",
      children: "OH_IPCParcel_WriteBuffer()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_IPCParcel_WriteBuffer(OHIPCParcel *parcel, const uint8_t *buffer, int32_t len)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "向OHIPCParcel对象写入指定长度的内存信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Communication.IPC.Core"]
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
              href: "/ref/ipc-api/ipc-c/ipc-module/capi-ohipcparcel/capi-ohipcparcel",
              children: "OHIPCParcel"
            }), " *parcel"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "parcel OHIPCParcel对象的指针，不能为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const uint8_t *buffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "buffer 写入内存地址信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t len"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "len 写入信息长度。"
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
            children: ["成功返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-error-code-h/capi-ipc-error-code-h#oh_ipc_errorcode",
              children: "OH_IPC_ErrorCode#OH_IPC_SUCCESS"
            }), "；  参数不合法时返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-error-code-h/capi-ipc-error-code-h#oh_ipc_errorcode",
              children: "OH_IPC_ErrorCode#OH_IPC_CHECK_PARAM_ERROR"
            }), "；  写入失败返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-error-code-h/capi-ipc-error-code-h#oh_ipc_errorcode",
              children: "OH_IPC_ErrorCode#OH_IPC_PARCEL_WRITE_ERROR"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_ipcparcel_readbuffer",
      children: "OH_IPCParcel_ReadBuffer()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "const uint8_t* OH_IPCParcel_ReadBuffer(const OHIPCParcel *parcel, int32_t len)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从OHIPCParcel对象读取指定长度内存信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Communication.IPC.Core"]
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
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ipc-api/ipc-c/ipc-module/capi-ohipcparcel/capi-ohipcparcel",
              children: "OHIPCParcel"
            }), " *parcel"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "parcel OHIPCParcel对象的指针，不能为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t len"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "len 读取内存的长度。"
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
            children: "const uint8_t*"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "成功返回读取到的内存地址；参数不合法或len超过parcel可读长度时返回NULL。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_ipcparcel_writeremotestub",
      children: "OH_IPCParcel_WriteRemoteStub()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_IPCParcel_WriteRemoteStub(OHIPCParcel *parcel, const OHIPCRemoteStub *stub)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "向OHIPCParcel对象写入OHIPCRemoteStub对象。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Communication.IPC.Core"]
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
              href: "/ref/ipc-api/ipc-c/ipc-module/capi-ohipcparcel/capi-ohipcparcel",
              children: "OHIPCParcel"
            }), " *parcel"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "parcel OHIPCParcel对象的指针，不能为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ipc-api/ipc-c/ipc-struct/capi-ohipcparcel-ohipcremotestub/capi-ohipcparcel-ohipcremotestub",
              children: "OHIPCRemoteStub"
            }), " *stub"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "stub 需要写入的OHIPCRemoteStub对象指针，不能为空。"
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
            children: ["成功返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-error-code-h/capi-ipc-error-code-h#oh_ipc_errorcode",
              children: "OH_IPC_ErrorCode#OH_IPC_SUCCESS"
            }), "；  参数不合法时返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-error-code-h/capi-ipc-error-code-h#oh_ipc_errorcode",
              children: "OH_IPC_ErrorCode#OH_IPC_CHECK_PARAM_ERROR"
            }), "；  写入失败返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-error-code-h/capi-ipc-error-code-h#oh_ipc_errorcode",
              children: "OH_IPC_ErrorCode#OH_IPC_PARCEL_WRITE_ERROR"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_ipcparcel_readremotestub",
      children: "OH_IPCParcel_ReadRemoteStub()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OHIPCRemoteStub* OH_IPCParcel_ReadRemoteStub(const OHIPCParcel *parcel)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从OHIPCParcel对象读取OHIPCRemoteStub对象。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Communication.IPC.Core"]
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
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ipc-api/ipc-c/ipc-module/capi-ohipcparcel/capi-ohipcparcel",
              children: "OHIPCParcel"
            }), " *parcel"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "parcel OHIPCParcel对象的指针，不能为空。"
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
            children: "OHIPCRemoteStub*"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "成功返回OHIPCRemoteStub对象指针；失败返回NULL。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_ipcparcel_writeremoteproxy",
      children: "OH_IPCParcel_WriteRemoteProxy()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_IPCParcel_WriteRemoteProxy(OHIPCParcel *parcel, const OHIPCRemoteProxy *proxy)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "向OHIPCParcel对象写入OHIPCRemoteProxy对象。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Communication.IPC.Core"]
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
              href: "/ref/ipc-api/ipc-c/ipc-module/capi-ohipcparcel/capi-ohipcparcel",
              children: "OHIPCParcel"
            }), " *parcel"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "parcel OHIPCParcel对象的指针，不能为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ipc-api/ipc-c/ipc-struct/capi-ohipcparcel-ohipcremoteproxy/capi-ohipcparcel-ohipcremoteproxy",
              children: "OHIPCRemoteProxy"
            }), " *proxy"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "proxy 需要写入的OHIPCRemoteProxy对象指针，不能为空。"
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
            children: ["成功返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-error-code-h/capi-ipc-error-code-h#oh_ipc_errorcode",
              children: "OH_IPC_ErrorCode#OH_IPC_SUCCESS"
            }), "；  参数不合法时返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-error-code-h/capi-ipc-error-code-h#oh_ipc_errorcode",
              children: "OH_IPC_ErrorCode#OH_IPC_CHECK_PARAM_ERROR"
            }), "；  写入失败返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-error-code-h/capi-ipc-error-code-h#oh_ipc_errorcode",
              children: "OH_IPC_ErrorCode#OH_IPC_PARCEL_WRITE_ERROR"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_ipcparcel_readremoteproxy",
      children: "OH_IPCParcel_ReadRemoteProxy()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OHIPCRemoteProxy* OH_IPCParcel_ReadRemoteProxy(const OHIPCParcel *parcel)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从OHIPCParcel对象读取OHIPCRemoteProxy对象。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Communication.IPC.Core"]
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
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ipc-api/ipc-c/ipc-module/capi-ohipcparcel/capi-ohipcparcel",
              children: "OHIPCParcel"
            }), " *parcel"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "parcel OHIPCParcel对象的指针，不能为空。"
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
            children: "OHIPCRemoteProxy*"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "成功返回OHIPCRemoteProxy对象指针；失败返回NULL。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_ipcparcel_writefiledescriptor",
      children: "OH_IPCParcel_WriteFileDescriptor()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_IPCParcel_WriteFileDescriptor(OHIPCParcel *parcel, int32_t fd)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "向OHIPCParcel对象写入文件描述符。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Communication.IPC.Core"]
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
              href: "/ref/ipc-api/ipc-c/ipc-module/capi-ohipcparcel/capi-ohipcparcel",
              children: "OHIPCParcel"
            }), " *parcel"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "parcel OHIPCParcel对象的指针，不能为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t fd"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "fd 要写入的文件描述符。"
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
            children: ["成功返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-error-code-h/capi-ipc-error-code-h#oh_ipc_errorcode",
              children: "OH_IPC_ErrorCode#OH_IPC_SUCCESS"
            }), "；  参数不合法时返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-error-code-h/capi-ipc-error-code-h#oh_ipc_errorcode",
              children: "OH_IPC_ErrorCode#OH_IPC_CHECK_PARAM_ERROR"
            }), "；  写入失败返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-error-code-h/capi-ipc-error-code-h#oh_ipc_errorcode",
              children: "OH_IPC_ErrorCode#OH_IPC_PARCEL_WRITE_ERROR"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_ipcparcel_readfiledescriptor",
      children: "OH_IPCParcel_ReadFileDescriptor()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_IPCParcel_ReadFileDescriptor(const OHIPCParcel *parcel, int32_t *fd)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从OHIPCParcel对象读取文件描述符。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Communication.IPC.Core"]
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
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ipc-api/ipc-c/ipc-module/capi-ohipcparcel/capi-ohipcparcel",
              children: "OHIPCParcel"
            }), " *parcel"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "parcel OHIPCParcel对象的指针，不能为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t *fd"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "fd 存储读取文件描述符的指针，不能为空。"
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
            children: ["成功返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-error-code-h/capi-ipc-error-code-h#oh_ipc_errorcode",
              children: "OH_IPC_ErrorCode#OH_IPC_SUCCESS"
            }), "；  参数不合法时返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-error-code-h/capi-ipc-error-code-h#oh_ipc_errorcode",
              children: "OH_IPC_ErrorCode#OH_IPC_CHECK_PARAM_ERROR"
            }), "；  读取失败返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-error-code-h/capi-ipc-error-code-h#oh_ipc_errorcode",
              children: "OH_IPC_ErrorCode#OH_IPC_PARCEL_READ_ERROR"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_ipcparcel_append",
      children: "OH_IPCParcel_Append()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_IPCParcel_Append(OHIPCParcel *parcel, const OHIPCParcel *data)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "OHIPCParcel对象数据拼接。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Communication.IPC.Core"]
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
              href: "/ref/ipc-api/ipc-c/ipc-module/capi-ohipcparcel/capi-ohipcparcel",
              children: "OHIPCParcel"
            }), " *parcel"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "parcel OHIPCParcel对象的指针，不能为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ipc-api/ipc-c/ipc-module/capi-ohipcparcel/capi-ohipcparcel",
              children: "OHIPCParcel"
            }), " *data"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "data 源OHIPCParcel对象的指针，不能为空。"
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
            children: ["成功返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-error-code-h/capi-ipc-error-code-h#oh_ipc_errorcode",
              children: "OH_IPC_ErrorCode#OH_IPC_SUCCESS"
            }), "；  参数不合法时返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-error-code-h/capi-ipc-error-code-h#oh_ipc_errorcode",
              children: "OH_IPC_ErrorCode#OH_IPC_CHECK_PARAM_ERROR"
            }), "；  拼接失败返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-error-code-h/capi-ipc-error-code-h#oh_ipc_errorcode",
              children: "OH_IPC_ErrorCode#OH_IPC_PARCEL_WRITE_ERROR"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_ipcparcel_writeinterfacetoken",
      children: "OH_IPCParcel_WriteInterfaceToken()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_IPCParcel_WriteInterfaceToken(OHIPCParcel *parcel, const char *token)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "向OHIPCParcel对象写入接口描述符，用于接口身份校验。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Communication.IPC.Core"]
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
              href: "/ref/ipc-api/ipc-c/ipc-module/capi-ohipcparcel/capi-ohipcparcel",
              children: "OHIPCParcel"
            }), " *parcel"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "parcel OHIPCParcel对象的指针，不能为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char *token"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "token 需要写入的接口描述符信息，不能为空。"
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
            children: ["成功返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-error-code-h/capi-ipc-error-code-h#oh_ipc_errorcode",
              children: "OH_IPC_ErrorCode#OH_IPC_SUCCESS"
            }), "；  参数不合法时返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-error-code-h/capi-ipc-error-code-h#oh_ipc_errorcode",
              children: "OH_IPC_ErrorCode#OH_IPC_CHECK_PARAM_ERROR"
            }), "；  写入失败返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-error-code-h/capi-ipc-error-code-h#oh_ipc_errorcode",
              children: "OH_IPC_ErrorCode#OH_IPC_PARCEL_WRITE_ERROR"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_ipcparcel_readinterfacetoken",
      children: "OH_IPCParcel_ReadInterfaceToken()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_IPCParcel_ReadInterfaceToken(const OHIPCParcel *parcel, char **token, int32_t *len, OH_IPC_MemAllocator allocator)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从OHIPCParcel对象读取接口描述符信息，用于接口身份校验。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Communication.IPC.Core"]
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
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ipc-api/ipc-c/ipc-module/capi-ohipcparcel/capi-ohipcparcel",
              children: "OHIPCParcel"
            }), " *parcel"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "parcel OHIPCParcel对象的指针，不能为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "char **token"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "token 用于存储接口描述符信息的内存地址，该内存由用户提供的分配器进行内存分配，用户使用完后需要主动释放，不能为空。接口返回失败时，用户依然需要判断该内存是否为空，并主动释放，否则会造成内存泄漏。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t *len"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "len 存储读取接口描述符的长度，包括结束符，不能为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_ipc_memallocator",
              children: "OH_IPC_MemAllocator"
            }), " allocator"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "allocator 用户指定的用来分配token的内存分配器，不能为空。"
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
            children: ["成功返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-error-code-h/capi-ipc-error-code-h#oh_ipc_errorcode",
              children: "OH_IPC_ErrorCode#OH_IPC_SUCCESS"
            }), "；  参数不合法时返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-error-code-h/capi-ipc-error-code-h#oh_ipc_errorcode",
              children: "OH_IPC_ErrorCode#OH_IPC_CHECK_PARAM_ERROR"
            }), "；读取失败返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ipc-api/ipc-c/ipc-headerfile/capi-ipc-error-code-h/capi-ipc-error-code-h#oh_ipc_errorcode",
              children: "OH_IPC_ErrorCode#OH_IPC_PARCEL_READ_ERROR"
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