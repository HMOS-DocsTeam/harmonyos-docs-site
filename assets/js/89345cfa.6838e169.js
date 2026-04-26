"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["124677"], {
805603(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkgraphics_api_arkgraphics_c_arkgraphics_headerfile_capi_native_image_h_capi_native_image_h_md_893_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkgraphics-api-arkgraphics-c-arkgraphics-headerfile-capi-native-image-h-capi-native-image-h-md-893.json
var site_docs_ref_arkgraphics_api_arkgraphics_c_arkgraphics_headerfile_capi_native_image_h_capi_native_image_h_md_893_namespaceObject = JSON.parse('{"id":"arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-native-image-h/capi-native-image-h","title":"native_image.h","description":"概述","source":"@site/docs-ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-native-image-h/capi-native-image-h.md","sourceDirName":"arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-native-image-h","slug":"/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-native-image-h/capi-native-image-h","permalink":"/harmonyos-docs-site/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-native-image-h/capi-native-image-h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":50,"frontMatter":{"title":"native_image.h","sidebar_position":50,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-image-h","kit":"图形","last_updated":"2026-04-22","slug":"capi-native-image-h"},"sidebar":"ref","previous":{"title":"effect_types.h","permalink":"/harmonyos-docs-site/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-effect-types-h/capi-effect-types-h"},"next":{"title":"native_vsync.h","permalink":"/harmonyos-docs-site/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-native-vsync-h/capi-native-vsync-h"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-native-image-h/capi-native-image-h.md


const frontMatter = {
	title: 'native_image.h',
	sidebar_position: 50,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-image-h',
	kit: '图形',
	last_updated: '2026-04-22',
	slug: 'capi-native-image-h'
};
const contentTitle = 'native_image.h';

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
  "value": "OH_OnFrameAvailable()",
  "id": "oh_onframeavailable",
  "level": 3
}, {
  "value": "OH_NativeImage_Create()",
  "id": "oh_nativeimage_create",
  "level": 3
}, {
  "value": "OH_NativeImage_AcquireNativeWindow()",
  "id": "oh_nativeimage_acquirenativewindow",
  "level": 3
}, {
  "value": "OH_NativeImage_AttachContext()",
  "id": "oh_nativeimage_attachcontext",
  "level": 3
}, {
  "value": "OH_NativeImage_DetachContext()",
  "id": "oh_nativeimage_detachcontext",
  "level": 3
}, {
  "value": "OH_NativeImage_UpdateSurfaceImage()",
  "id": "oh_nativeimage_updatesurfaceimage",
  "level": 3
}, {
  "value": "OH_NativeImage_GetTimestamp()",
  "id": "oh_nativeimage_gettimestamp",
  "level": 3
}, {
  "value": "OH_NativeImage_GetTransformMatrix()",
  "id": "oh_nativeimage_gettransformmatrix",
  "level": 3
}, {
  "value": "OH_NativeImage_GetSurfaceId()",
  "id": "oh_nativeimage_getsurfaceid",
  "level": 3
}, {
  "value": "OH_NativeImage_SetOnFrameAvailableListener()",
  "id": "oh_nativeimage_setonframeavailablelistener",
  "level": 3
}, {
  "value": "OH_NativeImage_UnsetOnFrameAvailableListener()",
  "id": "oh_nativeimage_unsetonframeavailablelistener",
  "level": 3
}, {
  "value": "OH_NativeImage_Destroy()",
  "id": "oh_nativeimage_destroy",
  "level": 3
}, {
  "value": "OH_NativeImage_GetTransformMatrixV2()",
  "id": "oh_nativeimage_gettransformmatrixv2",
  "level": 3
}, {
  "value": "OH_NativeImage_GetBufferMatrix()",
  "id": "oh_nativeimage_getbuffermatrix",
  "level": 3
}, {
  "value": "OH_NativeImage_AcquireNativeWindowBuffer()",
  "id": "oh_nativeimage_acquirenativewindowbuffer",
  "level": 3
}, {
  "value": "OH_NativeImage_ReleaseNativeWindowBuffer()",
  "id": "oh_nativeimage_releasenativewindowbuffer",
  "level": 3
}, {
  "value": "OH_ConsumerSurface_Create()",
  "id": "oh_consumersurface_create",
  "level": 3
}, {
  "value": "OH_ConsumerSurface_SetDefaultUsage()",
  "id": "oh_consumersurface_setdefaultusage",
  "level": 3
}, {
  "value": "OH_ConsumerSurface_SetDefaultSize()",
  "id": "oh_consumersurface_setdefaultsize",
  "level": 3
}, {
  "value": "OH_NativeImage_SetDropBufferMode()",
  "id": "oh_nativeimage_setdropbuffermode",
  "level": 3
}, {
  "value": "OH_NativeImage_CreateWithSingleBufferMode()",
  "id": "oh_nativeimage_createwithsinglebuffermode",
  "level": 3
}, {
  "value": "OH_ConsumerSurface_CreateWithSingleBufferMode()",
  "id": "oh_consumersurface_createwithsinglebuffermode",
  "level": 3
}, {
  "value": "OH_NativeImage_ReleaseTextImage()",
  "id": "oh_nativeimage_releasetextimage",
  "level": 3
}, {
  "value": "OH_NativeImage_GetColorSpace()",
  "id": "oh_nativeimage_getcolorspace",
  "level": 3
}, {
  "value": "OH_NativeImage_AcquireLatestNativeWindowBuffer()",
  "id": "oh_nativeimage_acquirelatestnativewindowbuffer",
  "level": 3
}, {
  "value": "OH_NativeImage_IsReleased()",
  "id": "oh_nativeimage_isreleased",
  "level": 3
}, {
  "value": "OH_NativeImage_Release()",
  "id": "oh_nativeimage_release",
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
        id: "native_imageh",
        children: "native_image.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义获取和使用NativeImage的相关函数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <native_image/native_image.h>"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "库："
        })
      }), " libnative_image.so"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeImage"]
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
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-module/capi-oh-nativeimage/capi-oh-nativeimage",
        children: "OH_NativeImage"
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
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-oh-nativeimage-oh-onframeavailablelistener/capi-oh-nativeimage-oh-onframeavailablelistener",
              children: "OH_OnFrameAvailableListener"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_OnFrameAvailableListener"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["一个OH_NativeImage的监听者，通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-native-image-h/capi-native-image-h#oh_nativeimage_setonframeavailablelistener",
              children: "OH_NativeImage_SetOnFrameAvailableListener"
            }), "接口注册该监听结构体，当有buffer可获取时，将触发回调给用户。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-oh-nativeimage-oh-nativeimage/capi-oh-nativeimage-oh-nativeimage",
              children: "OH_NativeImage"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NativeImage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "提供OH_NativeImage结构体声明。"
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
            children: "提供对NativeWindow的访问功能。"
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
            children: "提供NativeWindowBuffer结构体声明。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "函数",
      children: "函数"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "#oh_onframeavailable",
              children: "typedef void (*OH_OnFrameAvailable)(void *context)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_OnFrameAvailable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "有buffer可获取时触发的回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativeimage_create",
              children: "OH_NativeImage* OH_NativeImage_Create(uint32_t textureId, uint32_t textureTarget)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建一个OH_NativeImage实例，该实例与OpenGL ES的纹理ID和纹理目标相关联。  本接口需要与", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-native-image-h/capi-native-image-h#oh_nativeimage_destroy",
              children: "OH_NativeImage_Destroy"
            }), "接口配合使用，否则会存在内存泄露。  本接口为非线程安全类型接口。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativeimage_acquirenativewindow",
              children: "OHNativeWindow* OH_NativeImage_AcquireNativeWindow(OH_NativeImage* image)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取与OH_NativeImage相关联的OHNativeWindow指针。  本接口为非线程安全类型接口。  本接口获取到的OHNativeWindow无需额外释放，执行", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-native-image-h/capi-native-image-h#oh_nativeimage_destroy",
              children: "OH_NativeImage_Destroy"
            }), "会将对应的OHNativeWindow引用计数减一。当执行", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-native-image-h/capi-native-image-h#oh_nativeimage_destroy",
              children: "OH_NativeImage_Destroy"
            }), "时，请将本接口获取到的OHNativeWindow指针置空，防止后续产生野指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativeimage_attachcontext",
              children: "int32_t OH_NativeImage_AttachContext(OH_NativeImage* image, uint32_t textureId)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将OH_NativeImage实例附加到当前OpenGL ES上下文，且该OpenGL ES纹理会绑定到GL_TEXTURE_EXTERNAL_OES, 并通过OH_NativeImage进行更新。  本接口为非线程安全类型接口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativeimage_detachcontext",
              children: "int32_t OH_NativeImage_DetachContext(OH_NativeImage* image)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将OH_NativeImage实例从当前OpenGL ES上下文分离。  本接口为非线程安全类型接口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativeimage_updatesurfaceimage",
              children: "int32_t OH_NativeImage_UpdateSurfaceImage(OH_NativeImage* image)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["通过OH_NativeImage获取最新帧更新相关联的OpenGL ES纹理。  本接口需要在OpenGL ES环境上下文的线程中调用。  本接口需要在接收到", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-oh-nativeimage-oh-onframeavailablelistener/capi-oh-nativeimage-oh-onframeavailablelistener",
              children: "OH_OnFrameAvailableListener"
            }), "回调后调用。  本接口为非线程安全类型接口。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativeimage_gettimestamp",
              children: "int64_t OH_NativeImage_GetTimestamp(OH_NativeImage* image)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取最近调用OH_NativeImage_UpdateSurfaceImage的纹理图像的相关时间戳。  本接口为非线程安全类型接口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativeimage_gettransformmatrix",
              children: "int32_t OH_NativeImage_GetTransformMatrix(OH_NativeImage* image, float matrix[16])"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取最近调用OH_NativeImage_UpdateSurfaceImage的纹理图像的变化矩阵。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativeimage_getsurfaceid",
              children: "int32_t OH_NativeImage_GetSurfaceId(OH_NativeImage* image, uint64_t* surfaceId)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取OH_NativeImage的surface编号。  本接口为非线程安全类型接口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativeimage_setonframeavailablelistener",
              children: "int32_t OH_NativeImage_SetOnFrameAvailableListener(OH_NativeImage* image, OH_OnFrameAvailableListener listener)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置帧可用回调。  不允许在回调函数中调用本模块的其他接口。  本接口为非线程安全类型接口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativeimage_unsetonframeavailablelistener",
              children: "int32_t OH_NativeImage_UnsetOnFrameAvailableListener(OH_NativeImage* image)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消设置帧可用回调。  本接口为非线程安全类型接口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativeimage_destroy",
              children: "void OH_NativeImage_Destroy(OH_NativeImage** image)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁通过OH_NativeImage_Create创建的OH_NativeImage实例，销毁后该OH_NativeImage指针会被赋值为空。  并将对应OHNativeWindow引用计数减一。  本接口为非线程安全类型接口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativeimage_gettransformmatrixv2",
              children: "int32_t OH_NativeImage_GetTransformMatrixV2(OH_NativeImage* image, float matrix[16])"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["根据生产端设置的旋转角度，获取最近调用OH_NativeImage_UpdateSurfaceImage的纹理图像的变化矩阵。  matrix在", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-native-image-h/capi-native-image-h#oh_nativeimage_updatesurfaceimage",
              children: "OH_NativeImage_UpdateSurfaceImage"
            }), "接口调用后，才会更新。  本接口为非线程安全类型接口。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativeimage_getbuffermatrix",
              children: "int32_t OH_NativeImage_GetBufferMatrix(OH_NativeImage* image, float matrix[16])"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取根据生产端设置的旋转角度和buffer实际有效内容区域计算出的变换矩阵。  本接口返回一个变换矩阵，该矩阵是", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-oh-nativeimage-oh-nativeimage/capi-oh-nativeimage-oh-nativeimage",
              children: "OH_NativeImage"
            }), "在消费buffer，即调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-native-image-h/capi-native-image-h#oh_nativeimage_updatesurfaceimage",
              children: "OH_NativeImage_UpdateSurfaceImage"
            }), "或者", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-native-image-h/capi-native-image-h#oh_nativeimage_acquirenativewindowbuffer",
              children: "OH_NativeImage_AcquireNativeWindowBuffer"
            }), "时，根据buffer的旋转角度和实际有效内容区域计算所得。  本接口为非线程安全类型接口。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativeimage_acquirenativewindowbuffer",
              children: "int32_t OH_NativeImage_AcquireNativeWindowBuffer(OH_NativeImage* image,OHNativeWindowBuffer** nativeWindowBuffer, int* fenceFd)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["通过消费端的OH_NativeImage获取一个OHNativeWindowBuffer。  本接口不能与", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-native-image-h/capi-native-image-h#oh_nativeimage_updatesurfaceimage",
              children: "OH_NativeImage_UpdateSurfaceImage"
            }), "接口同时使用。  本接口将会创建一个OHNativeWindowBuffer。  当使用OHNativeWindowBuffer时，用户需要通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-external-window-h/capi-external-window-h#oh_nativewindow_nativeobjectreference",
              children: "OH_NativeWindow_NativeObjectReference"
            }), "接口将其引用计数加一。  当OHNativeWindowBuffer使用完，用户需要通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-external-window-h/capi-external-window-h#oh_nativewindow_nativeobjectunreference",
              children: "OH_NativeWindow_NativeObjectUnreference"
            }), "接口将其引用计数减一。  本接口需要和", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-native-image-h/capi-native-image-h#oh_nativeimage_releasenativewindowbuffer",
              children: "OH_NativeImage_ReleaseNativeWindowBuffer"
            }), "接口配合使用，否则会存在内存泄露。  当fenceFd使用完，用户需要将其close。  本接口为非线程安全类型接口。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativeimage_releasenativewindowbuffer",
              children: "int32_t OH_NativeImage_ReleaseNativeWindowBuffer(OH_NativeImage* image,OHNativeWindowBuffer* nativeWindowBuffer, int fenceFd)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["通过OH_NativeImage实例将OHNativeWindowBuffer归还到buffer队列中。  系统会将fenceFd关闭，无需用户close。  当接口返回失败时，需要额外执行一次", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-external-window-h/capi-external-window-h#oh_nativewindow_nativeobjectunreference",
              children: "OH_NativeWindow_NativeObjectUnreference"
            }), "对buffer引用计数减一，否则会存在内存泄露。  本接口为非线程安全类型接口。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_consumersurface_create",
              children: "OH_NativeImage* OH_ConsumerSurface_Create(void)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建一个OH_NativeImage实例，作为surface的消费端。  本接口仅用于surface消费端的内存轮转，创建的OH_NativeImage内部不会主动进行内存渲染处理。  本接口不能与", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-native-image-h/capi-native-image-h#oh_nativeimage_updatesurfaceimage",
              children: "OH_NativeImage_UpdateSurfaceImage"
            }), "接口同时使用。  本接口与", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-native-image-h/capi-native-image-h#oh_nativeimage_acquirenativewindowbuffer",
              children: "OH_NativeImage_AcquireNativeWindowBuffer"
            }), "和", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-native-image-h/capi-native-image-h#oh_nativeimage_releasenativewindowbuffer",
              children: "OH_NativeImage_ReleaseNativeWindowBuffer"
            }), "配合使用。  本接口需要和", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-native-image-h/capi-native-image-h#oh_nativeimage_destroy",
              children: "OH_NativeImage_Destroy"
            }), "接口配合使用，否则会存在内存泄露。  本接口为非线程安全类型接口。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_consumersurface_setdefaultusage",
              children: "int32_t OH_ConsumerSurface_SetDefaultUsage(OH_NativeImage* image, uint64_t usage)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置默认读写方式。  本接口为非线程安全类型接口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_consumersurface_setdefaultsize",
              children: "int32_t OH_ConsumerSurface_SetDefaultSize(OH_NativeImage* image, int32_t width, int32_t height)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置几何图形默认尺寸。  本接口为非线程安全类型接口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativeimage_setdropbuffermode",
              children: "int32_t OH_NativeImage_SetDropBufferMode(OH_NativeImage* image, bool isOpen)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置OH_NativeImage是否为渲染丢帧模式。  处于此模式时，大部分生产端生产的buffer将会被丢弃，最新的buffer会及时上屏渲染。  此模式不能同时保证帧率高的要求。  此接口建议在", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-native-image-h/capi-native-image-h#oh_nativeimage_create",
              children: "OH_NativeImage_Create"
            }), "接口调用后立即调用。  此接口在与", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-native-image-h/capi-native-image-h#oh_nativeimage_updatesurfaceimage",
              children: "OH_NativeImage_UpdateSurfaceImage"
            }), "接口一起使用的场景下才会生效。  本接口为非线程安全类型接口。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativeimage_createwithsinglebuffermode",
              children: "OH_NativeImage* OH_NativeImage_CreateWithSingleBufferMode(uint32_t textureId, uint32_t textureTarget, bool singleBufferMode)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["使用纹理ID创建一个OH_NativeImage实例，该实例与OpenGL ES的纹理ID和纹理目标相关联，并选择是否设置单buffer模式。  本接口需要与", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-native-image-h/capi-native-image-h#oh_nativeimage_destroy",
              children: "OH_NativeImage_Destroy"
            }), "接口配合使用，否则会存在内存泄露。  本接口为非线程安全类型接口。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_consumersurface_createwithsinglebuffermode",
              children: "OH_NativeImage* OH_ConsumerSurface_CreateWithSingleBufferMode(bool singleBufferMode)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["不使用纹理ID创建一个", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-oh-nativeimage-oh-nativeimage/capi-oh-nativeimage-oh-nativeimage",
              children: "OH_NativeImage"
            }), "实例，作为surface的消费端，并选择是否设置单buffer模式。  本接口仅用于surface消费端的内存轮转，创建的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-oh-nativeimage-oh-nativeimage/capi-oh-nativeimage-oh-nativeimage",
              children: "OH_NativeImage"
            }), "内部不会主动进行内存渲染处理。  本接口不能与", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-native-image-h/capi-native-image-h#oh_nativeimage_updatesurfaceimage",
              children: "OH_NativeImage_UpdateSurfaceImage"
            }), "接口同时使用。  本接口需要和", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-native-image-h/capi-native-image-h#oh_nativeimage_destroy",
              children: "OH_NativeImage_Destroy"
            }), "接口配合使用，否则会存在内存泄露。  本接口为非线程安全类型接口。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativeimage_releasetextimage",
              children: "int32_t OH_NativeImage_ReleaseTextImage(OH_NativeImage* image)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "解除SurfaceBuffer与纹理的绑定，将纹理恢复到未使用状态。  单buffer模式下，需要调用该接口释放纹理，否则生产者下次无法申请buffer。  本接口为非线程安全类型接口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativeimage_getcolorspace",
              children: "int32_t OH_NativeImage_GetColorSpace(OH_NativeImage* image, OH_NativeBuffer_ColorSpace* colorSpace)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取最近调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-native-image-h/capi-native-image-h#oh_nativeimage_updatesurfaceimage",
              children: "OH_NativeImage_UpdateSurfaceImage"
            }), "的纹理图像的相关色彩空间。  本接口为非线程安全类型接口。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativeimage_acquirelatestnativewindowbuffer",
              children: "int32_t OH_NativeImage_AcquireLatestNativeWindowBuffer(OH_NativeImage* image, OHNativeWindowBuffer** nativeWindowBuffer, int* fenceFd)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["通过消费端的OH_NativeImage获取一个生产者最近生产的OHNativeWindowBuffer，并将其余buffer丢弃。  消费端可以通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-oh-nativeimage-oh-onframeavailablelistener/capi-oh-nativeimage-oh-onframeavailablelistener",
              children: "OH_OnFrameAvailableListener"
            }), "注册的回调，收到所有可用buffer（包括被丢弃的buffer)的回调。  本接口不能与", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-native-image-h/capi-native-image-h#oh_nativeimage_updatesurfaceimage",
              children: "OH_NativeImage_UpdateSurfaceImage"
            }), "接口同时使用。  本接口为非线程安全类型接口。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativeimage_isreleased",
              children: "int32_t OH_NativeImage_IsReleased(OH_NativeImage* image, bool* isReleased)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["查询与", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-oh-nativeimage-oh-nativeimage/capi-oh-nativeimage-oh-nativeimage",
              children: "OH_NativeImage"
            }), "关联的纹理是否已释放。  本接口为非线程安全类型接口。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativeimage_release",
              children: "int32_t OH_NativeImage_Release(OH_NativeImage* image)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["清除所有", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-nativewindow-nativewindow/capi-nativewindow-nativewindow",
              children: "OHNativeWindow"
            }), "的OHNativeWindowBuffer缓存，并将", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-oh-nativeimage-oh-nativeimage/capi-oh-nativeimage-oh-nativeimage",
              children: "OH_NativeImage"
            }), "从OpenGL ES上下文中分离。  本接口为非线程安全类型接口。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数说明",
      children: "函数说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_onframeavailable",
      children: "OH_OnFrameAvailable()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void (*OH_OnFrameAvailable)(void *context)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "有buffer可获取时触发的回调函数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeImage"]
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
            children: "void *context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户自定义的上下文信息，会在回调触发时返回给用户。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativeimage_create",
      children: "OH_NativeImage_Create()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_NativeImage* OH_NativeImage_Create(uint32_t textureId, uint32_t textureTarget)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建一个OH_NativeImage实例，该实例与OpenGL ES的纹理ID和纹理目标相关联。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本接口需要与", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-native-image-h/capi-native-image-h#oh_nativeimage_destroy",
        children: "OH_NativeImage_Destroy"
      }), "接口配合使用，否则会存在内存泄露。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本接口为非线程安全类型接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeImage"]
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
            children: "uint32_t textureId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OpenGL ES的纹理ID，OH_NativeImage实例会与之相关联。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t textureTarget"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["OpenGL ES的纹理目标，取值范围为GL_TEXTURE_2D和GL_TEXTURE_EXTERNAL_OES，具体可见", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-arkgraphics-2d-12",
              children: "选择纹理类型"
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
            children: "OH_NativeImage*"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建成功则返回一个指向OH_NativeImage实例的指针，否则返回NULL。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativeimage_acquirenativewindow",
      children: "OH_NativeImage_AcquireNativeWindow()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OHNativeWindow* OH_NativeImage_AcquireNativeWindow(OH_NativeImage* image)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取与OH_NativeImage相关联的OHNativeWindow指针。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本接口为非线程安全类型接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本接口获取到的OHNativeWindow无需额外释放，执行", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-native-image-h/capi-native-image-h#oh_nativeimage_destroy",
        children: "OH_NativeImage_Destroy"
      }), "会将对应的OHNativeWindow引用计数减一。当执行", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-native-image-h/capi-native-image-h#oh_nativeimage_destroy",
        children: "OH_NativeImage_Destroy"
      }), "时，请将本接口获取到的OHNativeWindow指针置空，防止后续产生野指针。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeImage"]
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
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-oh-nativeimage-oh-nativeimage/capi-oh-nativeimage-oh-nativeimage",
              children: "OH_NativeImage"
            }), "* image"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_NativeImage实例的指针。"
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
            children: "成功则返回一个指向OHNativeWindow实例的指针，否则返回NULL。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativeimage_attachcontext",
      children: "OH_NativeImage_AttachContext()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_NativeImage_AttachContext(OH_NativeImage* image, uint32_t textureId)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将OH_NativeImage实例附加到当前OpenGL ES上下文，且该OpenGL ES纹理会绑定到GL_TEXTURE_EXTERNAL_OES, 并通过OH_NativeImage进行更新。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本接口为非线程安全类型接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeImage"]
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
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-oh-nativeimage-oh-nativeimage/capi-oh-nativeimage-oh-nativeimage",
              children: "OH_NativeImage"
            }), "* image"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_NativeImage实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t textureId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是OH_NativeImage要附加到的OpenGL ES纹理的id。"
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
      id: "oh_nativeimage_detachcontext",
      children: "OH_NativeImage_DetachContext()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_NativeImage_DetachContext(OH_NativeImage* image)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将OH_NativeImage实例从当前OpenGL ES上下文分离。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本接口为非线程安全类型接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeImage"]
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
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-oh-nativeimage-oh-nativeimage/capi-oh-nativeimage-oh-nativeimage",
              children: "OH_NativeImage"
            }), "* image"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_NativeImage实例的指针。"
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
      id: "oh_nativeimage_updatesurfaceimage",
      children: "OH_NativeImage_UpdateSurfaceImage()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_NativeImage_UpdateSurfaceImage(OH_NativeImage* image)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过OH_NativeImage获取最新帧更新相关联的OpenGL ES纹理。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本接口需要在OpenGL ES环境上下文的线程中调用。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本接口需要在接收到", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-oh-nativeimage-oh-onframeavailablelistener/capi-oh-nativeimage-oh-onframeavailablelistener",
        children: "OH_OnFrameAvailableListener"
      }), "回调后调用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本接口为非线程安全类型接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeImage"]
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
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-oh-nativeimage-oh-nativeimage/capi-oh-nativeimage-oh-nativeimage",
              children: "OH_NativeImage"
            }), "* image"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_NativeImage实例的指针。"
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
      id: "oh_nativeimage_gettimestamp",
      children: "OH_NativeImage_GetTimestamp()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int64_t OH_NativeImage_GetTimestamp(OH_NativeImage* image)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取最近调用OH_NativeImage_UpdateSurfaceImage的纹理图像的相关时间戳。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本接口为非线程安全类型接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeImage"]
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
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-oh-nativeimage-oh-nativeimage/capi-oh-nativeimage-oh-nativeimage",
              children: "OH_NativeImage"
            }), "* image"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_NativeImage实例的指针。"
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
            children: "int64_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回纹理图像的相关时间戳。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativeimage_gettransformmatrix",
      children: "OH_NativeImage_GetTransformMatrix()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_NativeImage_GetTransformMatrix(OH_NativeImage* image, float matrix[16])\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取最近调用OH_NativeImage_UpdateSurfaceImage的纹理图像的变化矩阵。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeImage"]
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
      }), " 从API version 12开始废弃。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "替代接口："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-native-image-h/capi-native-image-h#oh_nativeimage_gettransformmatrixv2",
        children: "OH_NativeImage_GetTransformMatrixV2"
      })]
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
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-oh-nativeimage-oh-nativeimage/capi-oh-nativeimage-oh-nativeimage",
              children: "OH_NativeImage"
            }), "* image"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_NativeImage实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "matrix"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用来存储要获取的4*4的变化矩阵。"
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
      id: "oh_nativeimage_getsurfaceid",
      children: "OH_NativeImage_GetSurfaceId()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_NativeImage_GetSurfaceId(OH_NativeImage* image, uint64_t* surfaceId)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取OH_NativeImage的surface编号。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本接口为非线程安全类型接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeImage"]
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
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-oh-nativeimage-oh-nativeimage/capi-oh-nativeimage-oh-nativeimage",
              children: "OH_NativeImage"
            }), "* image"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_NativeImage实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint64_t* surfaceId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是指向surface编号的指针。"
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
      id: "oh_nativeimage_setonframeavailablelistener",
      children: "OH_NativeImage_SetOnFrameAvailableListener()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_NativeImage_SetOnFrameAvailableListener(OH_NativeImage* image, OH_OnFrameAvailableListener listener)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置帧可用回调。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "不允许在回调函数中调用本模块的其他接口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本接口为非线程安全类型接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeImage"]
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
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-oh-nativeimage-oh-nativeimage/capi-oh-nativeimage-oh-nativeimage",
              children: "OH_NativeImage"
            }), "* image"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_NativeImage实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-oh-nativeimage-oh-onframeavailablelistener/capi-oh-nativeimage-oh-onframeavailablelistener",
              children: "OH_OnFrameAvailableListener"
            }), " listener"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示回调监听者。"
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
      id: "oh_nativeimage_unsetonframeavailablelistener",
      children: "OH_NativeImage_UnsetOnFrameAvailableListener()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_NativeImage_UnsetOnFrameAvailableListener(OH_NativeImage* image)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "取消设置帧可用回调。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本接口为非线程安全类型接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeImage"]
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-oh-nativeimage-oh-nativeimage/capi-oh-nativeimage-oh-nativeimage",
              children: "OH_NativeImage"
            }), "* image"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_NativeImage实例的指针。"
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
      id: "oh_nativeimage_destroy",
      children: "OH_NativeImage_Destroy()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_NativeImage_Destroy(OH_NativeImage** image)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "销毁通过OH_NativeImage_Create创建的OH_NativeImage实例, 销毁后该OH_NativeImage指针会被赋值为空。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "并将对应OHNativeWindow引用计数减一。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本接口为非线程安全类型接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeImage"]
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
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-oh-nativeimage-oh-nativeimage/capi-oh-nativeimage-oh-nativeimage",
              children: "OH_NativeImage"
            }), "** image"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_NativeImage实例的指针。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativeimage_gettransformmatrixv2",
      children: "OH_NativeImage_GetTransformMatrixV2()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_NativeImage_GetTransformMatrixV2(OH_NativeImage* image, float matrix[16])\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据生产端设置的旋转角度，获取最近调用OH_NativeImage_UpdateSurfaceImage的纹理图像的变化矩阵。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["matrix在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-native-image-h/capi-native-image-h#oh_nativeimage_updatesurfaceimage",
        children: "OH_NativeImage_UpdateSurfaceImage"
      }), "接口调用后，才会更新。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本接口为非线程安全类型接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeImage"]
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
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-oh-nativeimage-oh-nativeimage/capi-oh-nativeimage-oh-nativeimage",
              children: "OH_NativeImage"
            }), "* image"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_NativeImage实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "matrix"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用来存储要获取的4*4的变化矩阵。"
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
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回接口执行结果。NATIVE_ERROR_OK，表示接口执行成功。  返回NATIVE_ERROR_INVALID_ARGUMENTS，对应错误码为40001000，表示image参数为空。  返回NATIVE_ERROR_UNKNOWN，对应错误码为50002000，表示未知错误，请查看日志。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativeimage_getbuffermatrix",
      children: "OH_NativeImage_GetBufferMatrix()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_NativeImage_GetBufferMatrix(OH_NativeImage* image, float matrix[16])\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取根据生产端设置的旋转角度和buffer实际有效内容区域计算出的变换矩阵。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本接口返回一个变换矩阵，该矩阵是", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-oh-nativeimage-oh-nativeimage/capi-oh-nativeimage-oh-nativeimage",
        children: "OH_NativeImage"
      }), "在消费buffer，即调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-native-image-h/capi-native-image-h#oh_nativeimage_updatesurfaceimage",
        children: "OH_NativeImage_UpdateSurfaceImage"
      }), "或者", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-native-image-h/capi-native-image-h#oh_nativeimage_acquirenativewindowbuffer",
        children: "OH_NativeImage_AcquireNativeWindowBuffer"
      }), "时，根据buffer的旋转角度和实际有效内容区域计算所得。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本接口为非线程安全类型接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeImage"]
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
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-oh-nativeimage-oh-nativeimage/capi-oh-nativeimage-oh-nativeimage",
              children: "OH_NativeImage"
            }), "* image"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-oh-nativeimage-oh-nativeimage/capi-oh-nativeimage-oh-nativeimage",
              children: "OH_NativeImage"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "matrix"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于存储获取的4*4变换矩阵。"
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
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回接口执行结果。NATIVE_ERROR_OK，表示接口执行成功。  返回NATIVE_ERROR_INVALID_ARGUMENTS，对应错误码为40001000，表示image参数为空。  返回NATIVE_ERROR_MEM_OPERATION_ERROR，对应错误码为30001000，表示内存操作错误，获取变换矩阵失败。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativeimage_acquirenativewindowbuffer",
      children: "OH_NativeImage_AcquireNativeWindowBuffer()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_NativeImage_AcquireNativeWindowBuffer(OH_NativeImage* image,OHNativeWindowBuffer** nativeWindowBuffer, int* fenceFd)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过消费端的OH_NativeImage获取一个OHNativeWindowBuffer。本接口不能与", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-native-image-h/capi-native-image-h#oh_nativeimage_updatesurfaceimage",
        children: "OH_NativeImage_UpdateSurfaceImage"
      }), "接口同时使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本接口将会创建一个OHNativeWindowBuffer。当使用OHNativeWindowBuffer时，用户需要通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-external-window-h/capi-external-window-h#oh_nativewindow_nativeobjectreference",
        children: "OH_NativeWindow_NativeObjectReference"
      }), "接口将其引用计数加一。当OHNativeWindowBuffer使用完，用户需要通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-external-window-h/capi-external-window-h#oh_nativewindow_nativeobjectunreference",
        children: "OH_NativeWindow_NativeObjectUnreference"
      }), "接口将其引用计数减一。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本接口需要和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-native-image-h/capi-native-image-h#oh_nativeimage_releasenativewindowbuffer",
        children: "OH_NativeImage_ReleaseNativeWindowBuffer"
      }), "接口配合使用，否则会存在内存泄露。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当fenceFd使用完，用户需要将其close。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本接口为非线程安全类型接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeImage"]
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
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-oh-nativeimage-oh-nativeimage/capi-oh-nativeimage-oh-nativeimage",
              children: "OH_NativeImage"
            }), "* image"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_NativeImage实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-nativewindow-nativewindowbuffer/capi-nativewindow-nativewindowbuffer",
              children: "OHNativeWindowBuffer"
            }), "** nativeWindowBuffer"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OHNativeWindowBuffer指针的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int* fenceFd"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向文件描述符句柄的指针。"
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
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "执行成功时返回NATIVE_ERROR_OK。  image, nativeWindowBuffer, fenceFd是空指针时返回NATIVE_ERROR_INVALID_ARGUMENTS。  没有buffer可以消费时返回NATIVE_ERROR_NO_BUFFER。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativeimage_releasenativewindowbuffer",
      children: "OH_NativeImage_ReleaseNativeWindowBuffer()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_NativeImage_ReleaseNativeWindowBuffer(OH_NativeImage* image,OHNativeWindowBuffer* nativeWindowBuffer, int fenceFd)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过OH_NativeImage实例将OHNativeWindowBuffer归还到buffer队列中。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "系统会将fenceFd关闭，无需用户close。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当接口返回失败时，需要额外执行一次", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-external-window-h/capi-external-window-h#oh_nativewindow_nativeobjectunreference",
        children: "OH_NativeWindow_NativeObjectUnreference"
      }), "对buffer引用计数减一，否则会存在内存泄露。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本接口为非线程安全类型接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeImage"]
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
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-oh-nativeimage-oh-nativeimage/capi-oh-nativeimage-oh-nativeimage",
              children: "OH_NativeImage"
            }), "* image"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_NativeImage实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-nativewindow-nativewindowbuffer/capi-nativewindow-nativewindowbuffer",
              children: "OHNativeWindowBuffer"
            }), "* nativeWindowBuffer"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OHNativeWindowBuffer实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int fenceFd"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向文件描述符句柄, 用于并发同步控制。"
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
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "执行成功时返回NATIVE_ERROR_OK。  image, nativeWindowBuffer是空指针时返回NATIVE_ERROR_INVALID_ARGUMENTS。  nativeWindowBuffer为状态非法时返回NATIVE_ERROR_BUFFER_STATE_INVALID。  nativeWindowBuffer不在缓存中返回NATIVE_ERROR_BUFFER_NOT_IN_CACHE。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_consumersurface_create",
      children: "OH_ConsumerSurface_Create()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_NativeImage* OH_ConsumerSurface_Create(void)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建一个OH_NativeImage实例，作为surface的消费端。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本接口仅用于surface消费端的内存轮转，创建的OH_NativeImage内部不会主动进行内存渲染处理。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本接口不能与", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-native-image-h/capi-native-image-h#oh_nativeimage_updatesurfaceimage",
        children: "OH_NativeImage_UpdateSurfaceImage"
      }), "接口同时使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本接口与", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-native-image-h/capi-native-image-h#oh_nativeimage_acquirenativewindowbuffer",
        children: "OH_NativeImage_AcquireNativeWindowBuffer"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-native-image-h/capi-native-image-h#oh_nativeimage_releasenativewindowbuffer",
        children: "OH_NativeImage_ReleaseNativeWindowBuffer"
      }), "配合使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本接口需要和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-native-image-h/capi-native-image-h#oh_nativeimage_destroy",
        children: "OH_NativeImage_Destroy"
      }), "接口配合使用，否则会存在内存泄露。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本接口为非线程安全类型接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeImage"]
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-oh-nativeimage-oh-nativeimage/capi-oh-nativeimage-oh-nativeimage",
              children: "OH_NativeImage"
            }), "*"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "成功则返回一个指向OH_NativeImage实例的指针，否则返回NULL。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_consumersurface_setdefaultusage",
      children: "OH_ConsumerSurface_SetDefaultUsage()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_ConsumerSurface_SetDefaultUsage(OH_NativeImage* image, uint64_t usage)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置默认读写方式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本接口为非线程安全类型接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeImage"]
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
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-oh-nativeimage-oh-nativeimage/capi-oh-nativeimage-oh-nativeimage",
              children: "OH_NativeImage"
            }), "* image"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_NativeImage实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint64_t usage"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示读写方式。枚举值参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-native-buffer-h/capi-native-buffer-h#oh_nativebuffer_usage",
              children: "OH_NativeBuffer_Usage"
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
            children: "int32_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "执行成功时返回NATIVE_ERROR_OK。  image是空指针时返回NATIVE_ERROR_INVALID_ARGUMENTS。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_consumersurface_setdefaultsize",
      children: "OH_ConsumerSurface_SetDefaultSize()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_ConsumerSurface_SetDefaultSize(OH_NativeImage* image, int32_t width, int32_t height)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置几何图形默认尺寸。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本接口为非线程安全类型接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeImage"]
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
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-oh-nativeimage-oh-nativeimage/capi-oh-nativeimage-oh-nativeimage",
              children: "OH_NativeImage"
            }), "* image"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_NativeImage实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t width"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示几何图形宽度，取值范围大于0，单位为像素。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t height"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示几何图形高度，取值范围大于0，单位为像素。"
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
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "执行成功时返回NATIVE_ERROR_OK。  image是空指针时，或width、height小于等于0时返回NATIVE_ERROR_INVALID_ARGUMENTS。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativeimage_setdropbuffermode",
      children: "OH_NativeImage_SetDropBufferMode()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_NativeImage_SetDropBufferMode(OH_NativeImage* image, bool isOpen)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置OH_NativeImage是否为渲染丢帧模式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "处于此模式时，大部分生产端生产的buffer将会被丢弃，最新的buffer会及时上屏渲染。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此模式不能同时保证帧率高的要求。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["此接口建议在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-native-image-h/capi-native-image-h#oh_nativeimage_create",
        children: "OH_NativeImage_Create"
      }), "接口调用后立即调用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["此接口在与", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-native-image-h/capi-native-image-h#oh_nativeimage_updatesurfaceimage",
        children: "OH_NativeImage_UpdateSurfaceImage"
      }), "接口一起使用的场景下才会生效。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本接口为非线程安全类型接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-native-image-h/capi-native-image-h#oh_nativeimage_setonframeavailablelistener",
        children: "OH_NativeImage_SetOnFrameAvailableListener"
      }), "设置的listener回调不会因为设置了丢帧模式而减少。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeImage"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 17"]
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
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-oh-nativeimage-oh-nativeimage/capi-oh-nativeimage-oh-nativeimage",
              children: "OH_NativeImage"
            }), "* image"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_NativeImage实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bool isOpen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否设置渲染丢帧。true表示设置为渲染丢帧模式，false表示不设置。"
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
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "执行成功时返回NATIVE_ERROR_OK。  image是空指针时返回NATIVE_ERROR_INVALID_ARGUMENTS。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativeimage_createwithsinglebuffermode",
      children: "OH_NativeImage_CreateWithSingleBufferMode()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_NativeImage* OH_NativeImage_CreateWithSingleBufferMode(uint32_t textureId, uint32_t textureTarget, bool singleBufferMode)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用纹理ID创建一个OH_NativeImage实例，该实例与OpenGL ES的纹理ID和纹理目标相关联，并选择是否设置单buffer模式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本接口需要与", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-native-image-h/capi-native-image-h#oh_nativeimage_destroy",
        children: "OH_NativeImage_Destroy"
      }), "接口配合使用，否则会存在内存泄露。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本接口为非线程安全类型接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeImage"]
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
            children: "uint32_t textureId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OpenGL ES的纹理ID，OH_NativeImage实例会与之相关联。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t textureTarget"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["OpenGL ES的纹理目标，具体可见", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-arkgraphics-2d-12",
              children: "选择纹理类型"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bool singleBufferMode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否设置单buffer模式。true表示设置为单buffer模式，false表示不设置。"
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
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-oh-nativeimage-oh-nativeimage/capi-oh-nativeimage-oh-nativeimage",
              children: "OH_NativeImage*"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建成功则返回一个指向OH_NativeImage实例的指针，否则返回NULL。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_consumersurface_createwithsinglebuffermode",
      children: "OH_ConsumerSurface_CreateWithSingleBufferMode()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_NativeImage* OH_ConsumerSurface_CreateWithSingleBufferMode(bool singleBufferMode)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["不使用纹理ID创建一个", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-oh-nativeimage-oh-nativeimage/capi-oh-nativeimage-oh-nativeimage",
        children: "OH_NativeImage"
      }), "实例，作为surface的消费端，并选择是否设置单buffer模式。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本接口仅用于surface消费端的内存轮转，创建的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-oh-nativeimage-oh-nativeimage/capi-oh-nativeimage-oh-nativeimage",
        children: "OH_NativeImage"
      }), "内部不会主动进行内存渲染处理。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本接口不能与", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-native-image-h/capi-native-image-h#oh_nativeimage_updatesurfaceimage",
        children: "OH_NativeImage_UpdateSurfaceImage"
      }), "接口同时使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本接口需要和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-native-image-h/capi-native-image-h#oh_nativeimage_destroy",
        children: "OH_NativeImage_Destroy"
      }), "接口配合使用，否则会存在内存泄露。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本接口为非线程安全类型接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeImage"]
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
            children: "bool singleBufferMode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否设置单buffer模式。true表示设置为单buffer模式，false表示不设置。"
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
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-oh-nativeimage-oh-nativeimage/capi-oh-nativeimage-oh-nativeimage",
              children: "OH_NativeImage*"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["成功则返回一个指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-oh-nativeimage-oh-nativeimage/capi-oh-nativeimage-oh-nativeimage",
              children: "OH_NativeImage"
            }), "实例的指针，否则返回NULL。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativeimage_releasetextimage",
      children: "OH_NativeImage_ReleaseTextImage()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_NativeImage_ReleaseTextImage(OH_NativeImage* image)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "解除SurfaceBuffer与纹理的绑定，将纹理恢复到未使用状态。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "单buffer模式下，需要调用该接口释放纹理，否则生产者下次无法申请buffer。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本接口为非线程安全类型接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeImage"]
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-oh-nativeimage-oh-nativeimage/capi-oh-nativeimage-oh-nativeimage",
              children: "OH_NativeImage"
            }), "* image"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-oh-nativeimage-oh-nativeimage/capi-oh-nativeimage-oh-nativeimage",
              children: "OH_NativeImage"
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
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["执行成功时返回NATIVE_ERROR_OK。  image是空指针时返回NATIVE_ERROR_INVALID_ARGUMENTS。  其他返回值可参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-graphic-error-code-h/capi-graphic-error-code-h#ohnativeerrorcode",
              children: "OHNativeErrorCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativeimage_getcolorspace",
      children: "OH_NativeImage_GetColorSpace()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_NativeImage_GetColorSpace(OH_NativeImage* image, OH_NativeBuffer_ColorSpace* colorSpace)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["获取最近调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-native-image-h/capi-native-image-h#oh_nativeimage_updatesurfaceimage",
        children: "OH_NativeImage_UpdateSurfaceImage"
      }), "的纹理图像的相关色彩空间。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本接口为非线程安全类型接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeImage"]
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
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-oh-nativeimage-oh-nativeimage/capi-oh-nativeimage-oh-nativeimage",
              children: "OH_NativeImage"
            }), "* image"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-oh-nativeimage-oh-nativeimage/capi-oh-nativeimage-oh-nativeimage",
              children: "OH_NativeImage"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NativeBuffer_ColorSpace* colorSpace"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-oh-nativeimage-oh-nativeimage/capi-oh-nativeimage-oh-nativeimage",
              children: "OH_NativeImage"
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
            children: ["执行成功时返回NATIVE_ERROR_OK。  image，colorSpace是空指针时返回NATIVE_ERROR_INVALID_ARGUMENTS。  其他返回值可参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-graphic-error-code-h/capi-graphic-error-code-h#ohnativeerrorcode",
              children: "OHNativeErrorCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativeimage_acquirelatestnativewindowbuffer",
      children: "OH_NativeImage_AcquireLatestNativeWindowBuffer()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_NativeImage_AcquireLatestNativeWindowBuffer(OH_NativeImage* image, OHNativeWindowBuffer** nativeWindowBuffer, int* fenceFd)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过消费端的OH_NativeImage获取一个生产者最近生产的OHNativeWindowBuffer，并将其余buffer丢弃。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["消费端可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-oh-nativeimage-oh-onframeavailablelistener/capi-oh-nativeimage-oh-onframeavailablelistener",
        children: "OH_OnFrameAvailableListener"
      }), "注册的回调，收到所有可用buffer（包括被丢弃的buffer)的回调。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本接口不能与", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-native-image-h/capi-native-image-h#oh_nativeimage_updatesurfaceimage",
        children: "OH_NativeImage_UpdateSurfaceImage"
      }), "接口同时使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本接口将会创建一个OHNativeWindowBuffer。当使用OHNativeWindowBuffer时，用户需要通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-external-window-h/capi-external-window-h#oh_nativewindow_nativeobjectreference",
        children: "OH_NativeWindow_NativeObjectReference"
      }), "接口将其引用计数加一。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当OHNativeWindowBuffer使用完，用户需要通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-external-window-h/capi-external-window-h#oh_nativewindow_nativeobjectunreference",
        children: "OH_NativeWindow_NativeObjectUnreference"
      }), "接口将其引用计数减一。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本接口需要和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-native-image-h/capi-native-image-h#oh_nativeimage_releasenativewindowbuffer",
        children: "OH_NativeImage_ReleaseNativeWindowBuffer"
      }), "接口配合使用，否则会存在内存泄露。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当fenceFd使用完，用户需要将其close。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本接口为非线程安全类型接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeImage"]
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
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-oh-nativeimage-oh-nativeimage/capi-oh-nativeimage-oh-nativeimage",
              children: "OH_NativeImage"
            }), "* image"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_NativeImage实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-nativewindow-nativewindowbuffer/capi-nativewindow-nativewindowbuffer",
              children: "OHNativeWindowBuffer"
            }), "** nativeWindowBuffer"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OHNativeWindowBuffer的二级指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int* fenceFd"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向文件描述符句柄的指针。"
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
            children: ["执行成功时返回NATIVE_ERROR_OK。  image，nativeWindowBuffer或fenceFd是空指针时返回NATIVE_ERROR_INVALID_ARGUMENTS。  没有buffer可以消费时返回NATIVE_ERROR_NO_BUFFER。  其他返回值可参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-graphic-error-code-h/capi-graphic-error-code-h#ohnativeerrorcode",
              children: "OHNativeErrorCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativeimage_isreleased",
      children: "OH_NativeImage_IsReleased()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_NativeImage_IsReleased(OH_NativeImage* image, bool* isReleased)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["查询与", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-oh-nativeimage-oh-nativeimage/capi-oh-nativeimage-oh-nativeimage",
        children: "OH_NativeImage"
      }), "关联的纹理是否已释放。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本接口为非线程安全类型接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeImage"]
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
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-oh-nativeimage-oh-nativeimage/capi-oh-nativeimage-oh-nativeimage",
              children: "OH_NativeImage"
            }), "* image"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_NativeImage实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bool* isReleased"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "纹理是否已释放。true表示纹理已释放，false表示纹理未释放，作为出参使用。"
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
            children: ["执行成功时返回NATIVE_ERROR_OK。  image或isReleased为空指针时返回NATIVE_ERROR_INVALID_ARGUMENTS。  其他返回值可参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-graphic-error-code-h/capi-graphic-error-code-h#ohnativeerrorcode",
              children: "OHNativeErrorCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativeimage_release",
      children: "OH_NativeImage_Release()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_NativeImage_Release(OH_NativeImage* image)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["清除所有", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-nativewindow-nativewindow/capi-nativewindow-nativewindow",
        children: "OHNativeWindow"
      }), "的OHNativeWindowBuffer缓存，并将", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-oh-nativeimage-oh-nativeimage/capi-oh-nativeimage-oh-nativeimage",
        children: "OH_NativeImage"
      }), "从OpenGL ES上下文中分离。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本接口为非线程安全类型接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Graphic.Graphic2D.NativeImage"]
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
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-oh-nativeimage-oh-nativeimage/capi-oh-nativeimage-oh-nativeimage",
              children: "OH_NativeImage"
            }), "* image"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_NativeImage实例的指针。"
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
            children: ["执行成功时返回NATIVE_ERROR_OK。  image为空指针时返回NATIVE_ERROR_INVALID_ARGUMENTS。  其他返回值可参考", (0,jsx_runtime.jsx)(_components.a, {
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