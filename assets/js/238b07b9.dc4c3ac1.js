"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["180137"], {
404186(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkgraphics_2_d_native_surface_native_window_guidelines_native_window_guidelines_md_238_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkgraphics-2-d-native-surface-native-window-guidelines-native-window-guidelines-md-238.json
var site_docs_arkgraphics_2_d_native_surface_native_window_guidelines_native_window_guidelines_md_238_namespaceObject = JSON.parse('{"id":"arkgraphics-2d/native-surface/native-window-guidelines/native-window-guidelines","title":"NativeWindow开发指导 (C/C++)","description":"场景介绍","source":"@site/docs/arkgraphics-2d/native-surface/native-window-guidelines/native-window-guidelines.md","sourceDirName":"arkgraphics-2d/native-surface/native-window-guidelines","slug":"/arkgraphics-2d/native-surface/native-window-guidelines/","permalink":"/harmonyos-docs-site/arkgraphics-2d/native-surface/native-window-guidelines/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"NativeWindow开发指导 (C/C++)","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/native-window-guidelines","kit":"graphics","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"NativeImage开发指导 (C/C++)","permalink":"/harmonyos-docs-site/arkgraphics-2d/native-surface/native-image-guidelines/"},"next":{"title":"GPU/CPU内存访问同步操作开发指南 (C/C++)","permalink":"/harmonyos-docs-site/arkgraphics-2d/native-surface/native-fence-guidelines/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkgraphics-2d/native-surface/native-window-guidelines/native-window-guidelines.md


const frontMatter = {
	title: 'NativeWindow开发指导 (C/C++)',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/native-window-guidelines',
	kit: 'graphics',
	last_updated: '2026-04-22'
};
const contentTitle = 'NativeWindow开发指导 (C/C++)';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
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
        id: "nativewindow开发指导-cc",
        children: "NativeWindow开发指导 (C/C++)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["NativeWindow是", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "本地平台化窗口"
        })
      }), "，表示图形队列的生产者端。开发者可以通过NativeWindow接口进行申请和提交Buffer，配置Buffer属性信息。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "针对NativeWindow，常见的开发场景如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "通过NativeWindow提供的Native API接口申请图形Buffer，并将生成的图形内容写入图形Buffer，最终提交Buffer到图形队列。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在适配EGL层的eglswapbuffer接口时，进行申请和提交Buffer。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NativeWindow_NativeWindowRequestBuffer (OHNativeWindow *window, OHNativeWindowBuffer **buffer, int *fenceFd)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过OHNativeWindow对象申请一块OHNativeWindowBuffer，用以内容生产。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NativeWindow_NativeWindowFlushBuffer (OHNativeWindow *window, OHNativeWindowBuffer *buffer, int fenceFd, Region region)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过OHNativeWindow将生产好内容的OHNativeWindowBuffer放回到Buffer队列中，用以内容消费。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NativeWindow_NativeWindowHandleOpt (OHNativeWindow *window, int code,...)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置/获取OHNativeWindow的属性，包括设置/获取宽高、内容格式等。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["详细的接口说明请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-module/capi-nativewindow/capi-nativewindow",
        children: "native_window"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下步骤描述了如何使用NativeWindow提供的Native API接口申请图形Buffer，写入图形内容，并提交Buffer到图形队列。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "添加动态链接库"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CMakeLists.txt中添加以下lib。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "libace_ndk.z.so\nlibnative_window.so\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "头文件"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include <sys/poll.h>\n#include <sys/mman.h>\n#include <unistd.h>\n#include <ace/xcomponent/native_interface_xcomponent.h>\n#include <native_window/external_window.h>\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取OHNativeWindow实例。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["可通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-c/arkui-struct/ent-native-xcomponent-oh-nativexcomponent-callback/ent-native-xcomponent-oh-nativexcomponent-callback",
            children: "OH_NativeXComponent_Callback"
          }), "接口获取OHNativeWindow。代码示例如下。关于XComponent模块的使用方法，详见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkui/arkts-ui-development/arkts-add-component/napi-xcomponent-guidelines",
            children: "XComponent开发指导"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "在xxx.ets中添加一个XComponent组件。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "XComponent({ id: 'xcomponentId', type: 'texture', libraryname: 'nativerender' })\n  .margin({ bottom: 26 })\n  .onLoad((nativeWindowContext) => {\n    this.nativeWindowContext = nativeWindowContext as NativeWindowContext;\n  })\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "在 native c++ 层获取 NativeXComponent。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "napi_value exportInstance = nullptr;\nOH_NativeXComponent *nativeXComponent = nullptr;\nint32_t ret;\nchar idStr[OH_XCOMPONENT_ID_LEN_MAX + 1] = {};\nuint64_t idSize = OH_XCOMPONENT_ID_LEN_MAX + 1;\n\nstatus = napi_get_named_property(env, exports, OH_NATIVE_XCOMPONENT_OBJ, &exportInstance);\nif (status != napi_ok) {\n    return false;\n}\n\nstatus = napi_unwrap(env, exportInstance, reinterpret_cast<void**>(&nativeXComponent));\nif (status != napi_ok) {\n    return false;\n}\n\nret = OH_NativeXComponent_GetXComponentId(nativeXComponent, idStr, &idSize);\nif (ret != OH_NATIVEXCOMPONENT_RESULT_SUCCESS) {\n    return false;\n}\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "定义 OH_NativeXComponent_Callback。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "void OnSurfaceCreatedCB(OH_NativeXComponent* component, void* window)\n{\n    // ...\n    OHNativeWindow* nativeWindow = static_cast<OHNativeWindow*>(window);\n    // ...\n}\n\nvoid OnSurfaceChangedCB(OH_NativeXComponent* component, void* window)\n{\n    // ...\n    OHNativeWindow* nativeWindow = static_cast<OHNativeWindow*>(window);\n    // ...\n}\n\nvoid OnSurfaceDestroyedCB(OH_NativeXComponent* component, void* window)\n{\n    // ...\n    OHNativeWindow* nativeWindow = static_cast<OHNativeWindow*>(window);\n    // ...\n}\n\nvoid DispatchTouchEventCB(OH_NativeXComponent* component, void* window)\n{\n    // ...\n    OHNativeWindow* nativeWindow = static_cast<OHNativeWindow*>(window);\n}\n// ...\ncallback_.OnSurfaceCreated = OnSurfaceCreatedCB;\ncallback_.OnSurfaceChanged = OnSurfaceChangedCB;\ncallback_.OnSurfaceDestroyed = OnSurfaceDestroyedCB;\ncallback_.DispatchTouchEvent = DispatchTouchEventCB;\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "将OH_NativeXComponent_Callback 注册给 NativeXComponent。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "OH_NativeXComponent_RegisterCallback(nativeXComponent, &callback_);\n"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["设置OHNativeWindowBuffer的属性。使用OH_NativeWindow_NativeWindowHandleOpt设置OHNativeWindowBuffer的属性（默认携带NATIVEBUFFER_USAGE_CPU_READ usage参数，如果不使用CPU读写数据，建议去除NATIVEBUFFER_USAGE_CPU_READ usage参数，具体可见", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-arkgraphics-2d-14",
            children: "关闭CPU访问窗口缓冲区数据"
          }), "）。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "int code = SET_BUFFER_GEOMETRY;\nint32_t bufferHeight = static_cast<int32_t>(height_ / 4);\nint32_t bufferWidth = static_cast<int32_t>(width_ / 2);\nOH_NativeWindow_NativeWindowHandleOpt(nativeWindow_, code, bufferWidth, bufferHeight);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "从图形队列申请OHNativeWindowBuffer。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "int fenceFd = -1;\nOHNativeWindowBuffer *nativeWindowBuffer = nullptr;\nret = OH_NativeWindow_NativeWindowRequestBuffer(nativeWindow, &nativeWindowBuffer, &fenceFd);\nif (ret != 0 || nativeWindowBuffer == nullptr) {\n    return;\n}\nBufferHandle *bufferHandle = OH_NativeWindow_GetBufferHandleFromNative(nativeWindowBuffer);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "内存映射mmap。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "void *mappedAddr =\n    mmap(bufferHandle->virAddr, bufferHandle->size, PROT_READ | PROT_WRITE, MAP_SHARED, bufferHandle->fd, 0);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "将生产的内容写入OHNativeWindowBuffer，在这之前需要等待releaseFenceFd可用（注意releaseFenceFd不等于-1才需要调用poll）。如果没有等待releaseFenceFd事件的数据可用（POLLIN），则可能造成花屏、裂屏、HEBC（High Efficiency Bandwidth Compression，高效带宽压缩） fault等问题。releaseFenceFd是消费者进程创建的一个文件句柄，代表消费者消费buffer完毕，buffer可读，生产者可以开始填充buffer内容。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "int retCode = -1;\nuint32_t timeout = 3000;\nif (fenceFd != -1) {\n    struct pollfd pollfds = {0};\n    pollfds.fd = fenceFd;\n    pollfds.events = POLLIN;\n    do {\n        retCode = poll(&pollfds, 1, timeout);\n    } while (retCode == -1 && (errno == EINTR || errno == EAGAIN));\n    close(fenceFd);\n}\nuint32_t *pixel = static_cast<uint32_t *>(mappedAddr);\nfor (uint64_t x = 0; x < bufferHandle->width; x++) {\n    for (uint64_t y = 0; y < bufferHandle->height; y++) {\n        *pixel++ = value;\n    }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "提交OHNativeWindowBuffer到图形队列。请注意OH_NativeWindow_NativeWindowFlushBuffer接口的acquireFenceFd不可以和OH_NativeWindow_NativeWindowRequestBuffer接口获取的releaseFenceFd相同，acquireFenceFd可传入默认值-1。acquireFenceFd是生产者需要传入的文件句柄，消费者获取到buffer后可根据生产者传入的acquireFenceFd决定何时去渲染并上屏buffer内容。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "struct Region *region = new Region();\nret = OH_NativeWindow_NativeWindowFlushBuffer(nativeWindow, nativeWindowBuffer, fenceFd, *region);\nif (ret != NATIVE_ERROR_OK) {\n    LOGE(\"flush failed\");\n    (void)OH_NativeWindow_NativeWindowAbortBuffer(nativeWindow, nativeWindowBuffer);\n    return;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用munmap取消内存映射。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "if (munmap(mappedAddr, bufferHandle->size) < 0) {\n    OH_NativeWindow_DestroyNativeWindow(nativeWindow);\n    LOGE(\"munmap failed\");\n    return;\n}\n"
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