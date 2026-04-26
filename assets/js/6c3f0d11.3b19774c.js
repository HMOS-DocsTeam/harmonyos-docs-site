"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["657720"], {
150182(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkgraphics_api_arkgraphics_c_arkgraphics_headerfile_capi_native_vsync_h_capi_native_vsync_h_md_6c3_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkgraphics-api-arkgraphics-c-arkgraphics-headerfile-capi-native-vsync-h-capi-native-vsync-h-md-6c3.json
var site_docs_ref_arkgraphics_api_arkgraphics_c_arkgraphics_headerfile_capi_native_vsync_h_capi_native_vsync_h_md_6c3_namespaceObject = JSON.parse('{"id":"arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-native-vsync-h/capi-native-vsync-h","title":"native_vsync.h","description":"概述","source":"@site/docs-ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-native-vsync-h/capi-native-vsync-h.md","sourceDirName":"arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-native-vsync-h","slug":"/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-native-vsync-h/capi-native-vsync-h","permalink":"/harmonyos-docs-site/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-native-vsync-h/capi-native-vsync-h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":51,"frontMatter":{"title":"native_vsync.h","sidebar_position":51,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-vsync-h","kit":"图形","last_updated":"2026-04-22","slug":"capi-native-vsync-h"},"sidebar":"ref","previous":{"title":"native_image.h","permalink":"/harmonyos-docs-site/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-native-image-h/capi-native-image-h"},"next":{"title":"buffer_handle.h","permalink":"/harmonyos-docs-site/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-buffer-handle-h/capi-buffer-handle-h"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-native-vsync-h/capi-native-vsync-h.md


const frontMatter = {
	title: 'native_vsync.h',
	sidebar_position: 51,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-vsync-h',
	kit: '图形',
	last_updated: '2026-04-22',
	slug: 'capi-native-vsync-h'
};
const contentTitle = 'native_vsync.h';

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
  "value": "OH_NativeVSync_FrameCallback()",
  "id": "oh_nativevsync_framecallback",
  "level": 3
}, {
  "value": "OH_NativeVSync_Create()",
  "id": "oh_nativevsync_create",
  "level": 3
}, {
  "value": "OH_NativeVSync_Create_ForAssociatedWindow()",
  "id": "oh_nativevsync_create_forassociatedwindow",
  "level": 3
}, {
  "value": "OH_NativeVSync_Destroy()",
  "id": "oh_nativevsync_destroy",
  "level": 3
}, {
  "value": "OH_NativeVSync_RequestFrame()",
  "id": "oh_nativevsync_requestframe",
  "level": 3
}, {
  "value": "OH_NativeVSync_RequestFrameWithMultiCallback()",
  "id": "oh_nativevsync_requestframewithmulticallback",
  "level": 3
}, {
  "value": "OH_NativeVSync_GetPeriod()",
  "id": "oh_nativevsync_getperiod",
  "level": 3
}, {
  "value": "OH_NativeVSync_DVSyncSwitch()",
  "id": "oh_nativevsync_dvsyncswitch",
  "level": 3
}, {
  "value": "OH_NativeVSync_SetExpectedFrameRateRange()",
  "id": "oh_nativevsync_setexpectedframeraterange",
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
        id: "native_vsynch",
        children: "native_vsync.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义获取和使用NativeVsync的相关函数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <native_vsync/native_vsync.h>"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "库："
        })
      }), " libnative_vsync.so"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeVsync"]
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
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-module/capi-nativevsync/capi-nativevsync",
        children: "NativeVsync"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "结构体",
      children: "结构体"
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
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-nativevsync-oh-nativevsync-expectedraterange/capi-nativevsync-oh-nativevsync-expectedraterange",
              children: "OH_NativeVSync_ExpectedRateRange"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NativeVSync_ExpectedRateRange"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "期望帧率范围结构体。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-nativevsync-oh-nativevsync/capi-nativevsync-oh-nativevsync",
              children: "OH_NativeVSync"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NativeVSync"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "提供OH_NativeVSync结构体声明。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "函数",
      children: "函数"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "#oh_nativevsync_framecallback",
              children: "typedef void (*OH_NativeVSync_FrameCallback)(long long timestamp, void *data)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NativeVSync_FrameCallback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VSync回调函数类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativevsync_create",
              children: "OH_NativeVSync* OH_NativeVSync_Create(const char* name, unsigned int length)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建一个OH_NativeVSync实例，每次调用都会产生一个新的实例。  本接口需要与", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-native-vsync-h/capi-native-vsync-h#oh_nativevsync_destroy",
              children: "OH_NativeVSync_Destroy"
            }), "接口配合使用，否则会存在内存泄露。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativevsync_create_forassociatedwindow",
              children: "OH_NativeVSync* OH_NativeVSync_Create_ForAssociatedWindow(uint64_t windowID, const char* name, unsigned int length)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个和窗口绑定的OH_NativeVSync实例，每次调用都会产生一个新的实例。  使用本接口创建出来的OH_NativeVSync实例的实际vsync周期与系统vsync周期不完全一致，系统会根据窗口的状态对实际vsync周期进行调整。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativevsync_destroy",
              children: "void OH_NativeVSync_Destroy(OH_NativeVSync* nativeVsync)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁OH_NativeVSync实例。  销毁后的OH_NativeVSync指针不能再继续使用，否则会有野指针问题，尤其需要注意多线程并发时对于OH_NativeVSync指针的管理。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativevsync_requestframe",
              children: "int OH_NativeVSync_RequestFrame(OH_NativeVSync* nativeVsync, OH_NativeVSync_FrameCallback callback, void* data)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["请求下一次vsync信号，当信号到来时，调用回调函数callback。  如果在同一帧内中多次调用此接口，则只会触发最后一个回调。  如果此接口与", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-native-vsync-h/capi-native-vsync-h#oh_nativevsync_requestframewithmulticallback",
              children: "OH_NativeVSync_RequestFrameWithMultiCallback"
            }), "接口在同一帧内被调用，则此接口的功能不会生效。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativevsync_requestframewithmulticallback",
              children: "int OH_NativeVSync_RequestFrameWithMultiCallback(OH_NativeVSync* nativeVsync, OH_NativeVSync_FrameCallback callback, void* data)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求下一次vsync信号，当信号到来时，调用回调函数callback。  如果在同一帧内中多次调用此接口，每一次传入的callback都会被执行。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativevsync_getperiod",
              children: "int OH_NativeVSync_GetPeriod(OH_NativeVSync* nativeVsync, long long* period)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取vsync周期。  vsync周期是在每次使用OH_NativeVSync_RequestFrame接口请求vsync信号后收到OH_NativeVSync_FrameCallback回调的时候才会更新。  首次使用该接口获取vsync周期之前，需要先使用OH_NativeVSync_RequestFrame接口请求vsync信号，在收到OH_NativeVSync_FrameCallback回调之后，才可以通过该接口获取到vsync周期。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativevsync_dvsyncswitch",
              children: "int OH_NativeVSync_DVSyncSwitch(OH_NativeVSync* nativeVsync, bool enable)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "启用DVSync以提高自绘制动画场景的流畅性。  DVSync是Decoupled VSync的缩写，它是一种与硬件VSync解耦的帧时序管理策略。  DVSync通过提前发送带有未来时间戳的VSync信号驱动后续动画帧的提前绘制，这些帧会被帧缓冲队列缓存；DVSync通过缓存的帧减少未来可能发生的丢帧，进而提高动画场景的流畅性。  因为DVSync需要占用空闲的自绘制帧缓冲用于缓存提前绘制的动画帧，用户需要确保至少有一个空闲的帧缓冲区，否则不建议启用此功能。  启用DVSync后，用户需要正确响应提前发送的VSync信号，并在前一个VSync对应的动画帧完成后再请求下一个VSync，且自绘制帧需要携带与VSync一致的时间戳。  在动画结束之后，用户需要关闭DVSync。  在不支持DVSync的平台或者如果有另一个应用程序已经启用了DVSync，则当前的启用操作将不会生效，应用程序仍将收到正常的VSync信号。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativevsync_setexpectedframeraterange",
              children: "int OH_NativeVSync_SetExpectedFrameRateRange(OH_NativeVSync* nativeVsync, OH_NativeVSync_ExpectedRateRange* range)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置VSync期望帧率以及期望帧率的范围。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数说明",
      children: "函数说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativevsync_framecallback",
      children: "OH_NativeVSync_FrameCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void (*OH_NativeVSync_FrameCallback)(long long timestamp, void *data)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "VSync回调函数类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeVsync"]
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "long long timestamp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VSync使用CLOCK_MONOTONIC获取的系统时间戳, 单位为纳秒。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void *data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户自定义数据。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativevsync_create",
      children: "OH_NativeVSync_Create()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_NativeVSync* OH_NativeVSync_Create(const char* name, unsigned int length)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建一个OH_NativeVSync实例，每次调用都会产生一个新的实例。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本接口需要与", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-native-vsync-h/capi-native-vsync-h#oh_nativevsync_destroy",
        children: "OH_NativeVSync_Destroy"
      }), "接口配合使用，否则会存在内存泄露。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeVsync"]
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示一个名字，与创建的OH_NativeVSync实例关联。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "unsigned int length"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "name的长度（字符数）。"
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
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-nativevsync-oh-nativevsync/capi-nativevsync-oh-nativevsync",
              children: "OH_NativeVSync"
            }), "*"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回一个指向OH_NativeVSync实例的指针。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativevsync_create_forassociatedwindow",
      children: "OH_NativeVSync_Create_ForAssociatedWindow()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_NativeVSync* OH_NativeVSync_Create_ForAssociatedWindow(uint64_t windowID, const char* name, unsigned int length)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建一个和窗口绑定的OH_NativeVSync实例，每次调用都会产生一个新的实例。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用本接口创建出来的OH_NativeVSync实例的实际vsync周期与系统vsync周期不完全一致，系统会根据窗口的状态对实际vsync周期进行调整。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeVsync"]
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
            children: "uint64_t windowID"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示窗口ID，窗口子进程索引标识符，可以通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-external-window-h/capi-external-window-h#oh_nativewindow_getsurfaceid",
              children: "OH_NativeWindow_GetSurfaceId"
            }), "接口获取。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示一个名称，与创建的OH_NativeVSync实例关联。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "unsigned int length"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "name的长度（字符数）。"
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
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-nativevsync-oh-nativevsync/capi-nativevsync-oh-nativevsync",
              children: "OH_NativeVSync"
            }), "*"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回一个指向OH_NativeVSync实例的指针。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativevsync_destroy",
      children: "OH_NativeVSync_Destroy()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_NativeVSync_Destroy(OH_NativeVSync* nativeVsync)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "销毁OH_NativeVSync实例。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "销毁后的OH_NativeVSync指针不能再继续使用，否则会有野指针问题，尤其需要注意多线程并发时对于OH_NativeVSync指针的管理。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeVsync"]
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
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-nativevsync-oh-nativevsync/capi-nativevsync-oh-nativevsync",
              children: "OH_NativeVSync"
            }), "* nativeVsync"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "一个指向OH_NativeVSync实例的指针。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativevsync_requestframe",
      children: "OH_NativeVSync_RequestFrame()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_NativeVSync_RequestFrame(OH_NativeVSync* nativeVsync, OH_NativeVSync_FrameCallback callback, void* data)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请求下一次vsync信号，当信号到来时，调用回调函数callback。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果在同一帧内中多次调用此接口，则只会触发最后一个回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果此接口与", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-native-vsync-h/capi-native-vsync-h#oh_nativevsync_requestframewithmulticallback",
        children: "OH_NativeVSync_RequestFrameWithMultiCallback"
      }), "接口在同一帧内被调用，则此接口的功能不会生效。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeVsync"]
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
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-nativevsync-oh-nativevsync/capi-nativevsync-oh-nativevsync",
              children: "OH_NativeVSync"
            }), "* nativeVsync"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "一个指向OH_NativeVSync实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativevsync_framecallback",
              children: "OH_NativeVSync_FrameCallback"
            }), " callback"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "一个OH_NativeVSync_FrameCallback类型的函数指针，当下一次vsync信号到来时会被调用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void* data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "一个指向用户自定义数据结构的指针，类型是void。"
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
            children: ["返回值为0表示执行成功，其他返回值可参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-graphic-error-code-h/capi-graphic-error-code-h#ohnativeerrorcode",
              children: "OHNativeErrorCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativevsync_requestframewithmulticallback",
      children: "OH_NativeVSync_RequestFrameWithMultiCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_NativeVSync_RequestFrameWithMultiCallback(OH_NativeVSync* nativeVsync, OH_NativeVSync_FrameCallback callback, void* data)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请求下一次vsync信号，当信号到来时，调用回调函数callback。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果在同一帧内中多次调用此接口，每一次传入的callback都会被执行。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeVsync"]
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
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-nativevsync-oh-nativevsync/capi-nativevsync-oh-nativevsync",
              children: "OH_NativeVSync"
            }), "* nativeVsync"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "一个指向OH_NativeVSync实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativevsync_framecallback",
              children: "OH_NativeVSync_FrameCallback"
            }), " callback"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "一个OH_NativeVSync_FrameCallback类型的函数指针，当下一次vsync信号到来时会被调用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void* data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "一个指向用户自定义数据结构的指针，类型是void。"
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
            children: ["返回值为0表示执行成功，其他返回值可参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-graphic-error-code-h/capi-graphic-error-code-h#ohnativeerrorcode",
              children: "OHNativeErrorCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativevsync_getperiod",
      children: "OH_NativeVSync_GetPeriod()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_NativeVSync_GetPeriod(OH_NativeVSync* nativeVsync, long long* period)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取vsync周期。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "vsync周期是在每次使用OH_NativeVSync_RequestFrame接口请求vsync信号后收到OH_NativeVSync_FrameCallback回调的时候才会更新。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "首次使用该接口获取vsync周期之前，需要先使用OH_NativeVSync_RequestFrame接口请求vsync信号，在收到OH_NativeVSync_FrameCallback回调之后，才可以通过该接口获取到vsync周期。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeVsync"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 10"]
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
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-nativevsync-oh-nativevsync/capi-nativevsync-oh-nativevsync",
              children: "OH_NativeVSync"
            }), "* nativeVsync"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "一个指向OH_NativeVSync实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "long long* period"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示vsync周期，作为出参使用。"
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
            children: ["返回值为0表示执行成功，其他返回值可参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-graphic-error-code-h/capi-graphic-error-code-h#ohnativeerrorcode",
              children: "OHNativeErrorCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativevsync_dvsyncswitch",
      children: "OH_NativeVSync_DVSyncSwitch()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_NativeVSync_DVSyncSwitch(OH_NativeVSync* nativeVsync, bool enable)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "启用DVSync以提高自绘制动画场景的流畅性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DVSync是Decoupled VSync的缩写，它是一种与硬件VSync解耦的帧时序管理策略。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DVSync通过提前发送带有未来时间戳的VSync信号驱动后续动画帧的提前绘制，这些帧会被帧缓冲队列缓存；DVSync通过缓存的帧减少未来可能发生的丢帧，进而提高动画场景的流畅性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "因为DVSync需要占用空闲的自绘制帧缓冲用于缓存提前绘制的动画帧，用户需要确保至少有一个空闲的帧缓冲区，否则不建议启用此功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "启用DVSync后，用户需要正确响应提前发送的VSync信号，并在前一个VSync对应的动画帧完成后再请求下一个VSync，且自绘制帧需要携带与VSync一致的时间戳。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在动画结束之后，用户需要关闭DVSync。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在不支持DVSync的平台或者如果有另一个应用程序已经启用了DVSync，则当前的启用操作将不会生效，应用程序仍将收到正常的VSync信号。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeVsync"]
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
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-nativevsync-oh-nativevsync/capi-nativevsync-oh-nativevsync",
              children: "OH_NativeVSync"
            }), "* nativeVsync"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "一个指向OH_NativeVSync实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bool enable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示打开或者关闭DVSync，true表示打开，false表示关闭。"
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
            children: ["返回值为0表示执行成功，其他返回值可参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-graphic-error-code-h/capi-graphic-error-code-h#ohnativeerrorcode",
              children: "OHNativeErrorCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativevsync_setexpectedframeraterange",
      children: "OH_NativeVSync_SetExpectedFrameRateRange()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_NativeVSync_SetExpectedFrameRateRange(OH_NativeVSync* nativeVsync, OH_NativeVSync_ExpectedRateRange* range)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置VSync期望帧率及其范围。实际帧率可能因系统功耗、性能和硬件规格等限制而与设置的期望值不一致。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeVsync"]
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-nativevsync-oh-nativevsync/capi-nativevsync-oh-nativevsync",
              children: "OH_NativeVSync"
            }), "* nativeVsync"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-nativevsync-oh-nativevsync/capi-nativevsync-oh-nativevsync",
              children: "OH_NativeVSync"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-nativevsync-oh-nativevsync-expectedraterange/capi-nativevsync-oh-nativevsync-expectedraterange",
              children: "OH_NativeVSync_ExpectedRateRange"
            }), "* range"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-nativevsync-oh-nativevsync-expectedraterange/capi-nativevsync-oh-nativevsync-expectedraterange",
              children: "OH_NativeVSync_ExpectedRateRange"
            }), "实例的指针。  有效的期望帧率范围为：0 <= 最小值 <= 期望帧率 <= 最大值 <= 144。  期望帧率为0时，表示取消设置期望帧率。  此指针需开发者自行管理生命周期。"]
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
            children: ["返回值为0表示成功，其他返回值可参考", (0,jsx_runtime.jsx)(_components.a, {
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