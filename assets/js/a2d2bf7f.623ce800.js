"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["189824"], {
164446(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkgraphics_2_d_native_surface_native_common_mistakes_native_common_mistakes_md_a2d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkgraphics-2-d-native-surface-native-common-mistakes-native-common-mistakes-md-a2d.json
var site_docs_arkgraphics_2_d_native_surface_native_common_mistakes_native_common_mistakes_md_a2d_namespaceObject = JSON.parse('{"id":"arkgraphics-2d/native-surface/native-common-mistakes/native-common-mistakes","title":"图形缓冲区常见稳定性问题 (C/C++)","description":"本文档主要针对NativeWindow、NativeBuffer和NativeImage开发过程中的常见问题进行说明，帮助开发者及时避免或定位对应问题，提高应用稳定性。","source":"@site/docs/arkgraphics-2d/native-surface/native-common-mistakes/native-common-mistakes.md","sourceDirName":"arkgraphics-2d/native-surface/native-common-mistakes","slug":"/arkgraphics-2d/native-surface/native-common-mistakes/","permalink":"/harmonyos-docs-site/arkgraphics-2d/native-surface/native-common-mistakes/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"图形缓冲区常见稳定性问题 (C/C++)","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/native-common-mistakes","kit":"graphics","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"GPU/CPU内存访问同步操作开发指南 (C/C++)","permalink":"/harmonyos-docs-site/arkgraphics-2d/native-surface/native-fence-guidelines/"},"next":{"title":"图形开发术语","permalink":"/harmonyos-docs-site/arkgraphics-2d/graphic-term/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkgraphics-2d/native-surface/native-common-mistakes/native-common-mistakes.md


const frontMatter = {
	title: '图形缓冲区常见稳定性问题 (C/C++)',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/native-common-mistakes',
	kit: 'graphics',
	last_updated: '2026-04-22'
};
const contentTitle = '图形缓冲区常见稳定性问题 (C/C++)';

const assets = {

};



const toc = [{
  "value": "OHNativeWindow与NativeWindowBuffer",
  "id": "ohnativewindow与nativewindowbuffer",
  "level": 2
}, {
  "value": "NativeWindow生命周期问题",
  "id": "nativewindow生命周期问题",
  "level": 2
}, {
  "value": "典型崩溃日志及原因",
  "id": "典型崩溃日志及原因",
  "level": 3
}, {
  "value": "典型错误代码及解决方案",
  "id": "典型错误代码及解决方案",
  "level": 3
}, {
  "value": "NativeWindowBuffer生命周期问题",
  "id": "nativewindowbuffer生命周期问题",
  "level": 2
}, {
  "value": "典型崩溃日志及原因",
  "id": "典型崩溃日志及原因-1",
  "level": 3
}, {
  "value": "典型错误代码及解决方案",
  "id": "典型错误代码及解决方案-1",
  "level": 3
}, {
  "value": "NativeWindowBuffer卡死问题",
  "id": "nativewindowbuffer卡死问题",
  "level": 2
}, {
  "value": "典型卡死日志及原因",
  "id": "典型卡死日志及原因",
  "level": 3
}, {
  "value": "内存泄露问题",
  "id": "内存泄露问题",
  "level": 2
}, {
  "value": "典型内存泄露原因",
  "id": "典型内存泄露原因",
  "level": 3
}, {
  "value": "典型错误代码及解决方案",
  "id": "典型错误代码及解决方案-2",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "图形缓冲区常见稳定性问题-cc",
        children: "图形缓冲区常见稳定性问题 (C/C++)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本文档主要针对NativeWindow、NativeBuffer和NativeImage开发过程中的常见问题进行说明，帮助开发者及时避免或定位对应问题，提高应用稳定性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ohnativewindow与nativewindowbuffer",
      children: "OHNativeWindow与NativeWindowBuffer"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "OHNativeWindow与NativeWindowBuffer在系统多个模块与应用之间传递，通过增加与减少引用计数的NDK接口实现伪智能指针，由各模块维护自己的引用计数，超过90%的问题都是由于增减引用计数接口未匹配导致的。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "增加NativeWindow引用计数的接口："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_NativeWindow_NativeObjectReference(void *obj)\n\nint32_t OH_NativeWindow_CreateNativeWindowFromSurfaceId(uint64_t surfaceId, OHNativeWindow **window)\n\nOHNativeWindow* OH_NativeImage_AcquireNativeWindow(OH_NativeImage* image)\n\nint32_t OH_NativeWindow_ReadFromParcel(OHIPCParcel *parcel, OHNativeWindow **window)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "减少NativeWindow引用计数的接口："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_NativeWindow_NativeObjectUnreference(void *obj)\n\nvoid OH_NativeWindow_DestroyNativeWindow(OHNativeWindow* window)\n\nvoid OH_NativeImage_Destroy(OH_NativeImage** image)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "增加NativeWindowBuffer引用计数的接口："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_NativeWindow_NativeObjectReference(void *obj)\n\nint32_t OH_NativeWindow_GetLastFlushedBufferV2(OHNativeWindow *window, OHNativeWindowBuffer **buffer,int *fenceFd, float matrix[16])\n\nOHNativeWindowBuffer* OH_NativeWindow_CreateNativeWindowBufferFromNativeBuffer(OH_NativeBuffer* nativeBuffer)\n\nint32_t OH_NativeImage_AcquireNativeWindowBuffer(OH_NativeImage* image,OHNativeWindowBuffer** nativeWindowBuffer, int* fenceFd)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "减少NativeWindowBuffer引用计数的接口："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_NativeWindow_NativeObjectUnreference(void *obj)\n\nvoid OH_NativeWindow_DestroyNativeWindowBuffer(OHNativeWindowBuffer* buffer)\n\nint32_t OH_NativeImage_ReleaseNativeWindowBuffer(OH_NativeImage* image,OHNativeWindowBuffer* nativeWindowBuffer, int fenceFd) // 仅接口返回成功时减少引用计数\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "nativewindow生命周期问题",
      children: "NativeWindow生命周期问题"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "典型崩溃日志及原因",
      children: "典型崩溃日志及原因"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "典型崩溃日志如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "**典型崩溃日志1**\n00 /system/lib64/chipset-sdk-sp/libsurface.z.so(OH_NativeWindow_DestroyNativeWindow())\n\n**典型崩溃日志2**\n00 /system/lib64/chipset-sdk-sp/libsurface.z.so(……)\n01 /system/lib64/chipset-sdk-sp/libsurface.z.so(……)\n02 /system/lib64/chipset-sdk-sp/libsurface.z.so(OH_NativeWindow_NativeWindowHandleOpt)\n\n**典型崩溃日志3**\n00 /system/lib64/chipset-sdk-sp/libsurface.z.so(OH_NativeWindow_NativeObjectUnreference())\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可能原因如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1.错误地减少了一次NativeWindow引用计数，导致NativeWindow计数减为0释放后，其他地方调用或者再次减计数时崩溃。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "2.从XComponent组件获取的NativeWindow，抛向子线程使用，XComponent组件销毁时将NativeWindow引用计数减一，若减为0析构后，子线程仍在使用会导致崩溃。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "典型错误代码及解决方案",
      children: "典型错误代码及解决方案"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "典型错误代码1"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_NativeImage *image_ = OH_NativeImage_Create(textureId, GL_TEXTURE_2D);\nOHNativeWindow *nativewindow_ = OH_NativeImage_AcquireNativeWindow();\n\n// 错误：OH_NativeImage_Destroy中会减少OHNativeWindow引用计数，无需再调用OH_NativeWindow_DestroyNativeWindow\nOH_NativeImage_Destroy(image_);\nOH_NativeWindow_DestroyNativeWindow(nativewindow_);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "具体解析"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "OH_NativeImage_Destroy中会减少OHNativeWindow引用计数，无需再调用OH_NativeWindow_DestroyNativeWindow。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "修改：删除OH_NativeWindow_DestroyNativeWindow(nativewindow_)，并在OH_NativeImage_Destroy后及时将image_和nativewindow_置空，防止后续使用野指针。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_NativeImage *image_ = OH_NativeImage_Create(textureId, GL_TEXTURE_2D);\nOHNativeWindow *nativewindow_ = OH_NativeImage_AcquireNativeWindow();\n\n// 释放NativeImage时将image_和nativewindow_置空，防止后续使用野指针\nOH_NativeImage_Destroy(image_);\nimage_ = nullptr;\nnativewindow_ = nullptr;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "典型错误代码2"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OnSurfaceCreatedCB(OH_NativeXComponent* component, void* window)\n{\n    uint64_t width = 0;\n    uint64_t height = 0;\n    int32_t ret = OH_NativeXComponent_GetXComponentSize(component, window, &width, &height);\n    OHNativeWindow* nativewindow_ = static_cast<OHNativeWindow*>(window);\n\n    // 未对NativeWindow增加引用计数直接抛向子线程使用\n    NativeRender::GetInstance()->SetNativeWindow(nativewindow_, width, height);\n}\n\nvoid OnSurfaceDestroyedCB(OH_NativeXComponent* component, void* window)\n{\n    if ((component == nullptr) || (window == nullptr)) {\n        LOGE(\"OnSurfaceDestroyedCB: component or window is null\");\n        return;\n    }\n\n    // 错误：通知子线程停止，但未做等待操作，OnSurfaceDestroyedCB结束后NativeWindow可能被释放，子线程正在使用可能崩溃\n    NativeRender::GetInstance()->Release();\n    OHNativeWindow* nativewindow_ = static_cast<OHNativeWindow*>(window);\n    // 错误：未对nativewindow_引用计数加一的情况下调用DestroyNativeWindow会使nativewindow_提前释放，导致崩溃\n    OH_NativeWindow_DestroyNativeWindow(nativewindow_);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "具体解析"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从XComponent组件获取NativeWindow后，传递给渲染子线程使用，当页面退出，XComponent组件销毁时，会将NativeWindow引用计数减一，应用未对NativeWindow引用加一的情况下NativeWindow会被释放，此时子线程仍在使用可能导致并发崩溃。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "修改方案一：在将NativeWindow传递给子线程前，将其引用计数加一，此时XComponent组件销毁时，因应用持有NativeWindow引用计数，NativeWindow不会销毁，当子线程使用完成后将其引用计数减一。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OnSurfaceCreatedCB(OH_NativeXComponent* component, void* window)\n{\n    uint64_t width = 0;\n    uint64_t height = 0;\n    int32_t ret = OH_NativeXComponent_GetXComponentSize(component, window, &width, &height);\n    OHNativeWindow* nativewindow_ = static_cast<OHNativeWindow*>(window);\n\n    // 抛任务前将nativeWindow引用计数加一\n    OH_NativeWindow_NativeObjectReference(nativewindow_);\n    NativeRender::GetInstance()->SetNativeWindow(nativewindow_, width, height);\n}\n\nvoid OnSurfaceDestroyedCB(OH_NativeXComponent* component, void* window)\n{\n    if ((component == nullptr) || (window == nullptr)) {\n        LOGE(\"OnSurfaceDestroyedCB: component or window is null\");\n        return;\n    }\n\n    // 通知子线程停止，因为前面有对引用计数加一，OnSurfaceDestroyedCB结束时不会释放\n    // 当子线程使用完毕后执行OH_NativeWindow_NativeObjectUnreference(nativewindow_)对引用计数减一\n    NativeRender::GetInstance()->Release();\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "修改方案二：在XComponent组件销毁的OnSurfaceDestroyedCB回调通知中，通知子线程停止并等待，直到子线程结束，避免NativeWindow销毁后子线程还在使用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OnSurfaceCreatedCB(OH_NativeXComponent* component, void* window)\n{\n    uint64_t width = 0;\n    uint64_t height = 0;\n    int32_t ret = OH_NativeXComponent_GetXComponentSize(component, window, &width, &height);\n    OHNativeWindow* nativewindow_ = static_cast<OHNativeWindow*>(window);\n\n    NativeRender::GetInstance()->SetNativeWindow(nativewindow_, width, height);\n}\n\nvoid OnSurfaceDestroyedCB(OH_NativeXComponent* component, void* window)\n{\n    if ((component == nullptr) || (window == nullptr)) {\n        LOGE(\"OnSurfaceDestroyedCB: component or window is null\");\n        return;\n    }\n\n    NativeRender::GetInstance()->Release();\n    // 通知子线程停止后等待子线程任务结束再结束OnSurfaceDestroyedCB\n    renderThread.join();\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "nativewindowbuffer生命周期问题",
      children: "NativeWindowBuffer生命周期问题"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "典型崩溃日志及原因-1",
      children: "典型崩溃日志及原因"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "典型崩溃日志如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "**典型崩溃日志1**\n00 /system/lib64/chipset-sdk-sp/libsurface.z.so(OH_NativeWindow_GetBufferHandleFromNative())\n\n**典型崩溃日志2**\n00 /system/lib64/chipset-sdk-sp/libsurface.z.so(OH_NativeWindow_NativeObjectUnreference())\n\n**典型崩溃日志3**\n00 /system/lib64/chipset-sdk-sp/libsurface.z.so(OH_NativeWindow_NativeObjectReference())\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可能原因如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从XComponent组件获取的NativeWindow，抛向子线程使用，XComponent组件销毁时将NativeWindow计数减一，NativeWindow销毁时对内部的NativeWindowBuffer引用计数减一，此时子线程刚RequestBuffer拿到buffer正在使用导致崩溃。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "典型错误代码及解决方案-1",
      children: "典型错误代码及解决方案"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "同上述NativeWindow生命周期问题的典型错误代码及解决方案。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "nativewindowbuffer卡死问题",
      children: "NativeWindowBuffer卡死问题"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "典型卡死日志及原因",
      children: "典型卡死日志及原因"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "典型卡死日志如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/system/lib64/chipset-sdk-sp/libsurface.z.so(RequestBufferLocked())\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可能原因如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用申请了buffer，但未归还，导致后续无可用buffer，再次申请buffer时卡住。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "典型错误代码"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "auto ret = OH_NativeWindow_NativeWindowRequestBuffer(nativewindow_, &buffer, &fence);\nif (ret != NATIVE_ERROR_OK) {\n    return;\n}\n\n// 错误：异常分支未归还buffer，NativeWindow内buffer数量固定，可能导致后续无buffer可用卡死\nif (error) {\n    return;\n}\n\nOH_NativeWindow_NativeWindowFlushBuffer(nativewindow_, buffer, fence, region);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "具体解析"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "NativeWindow中的NativeWindowBuffer数量固定，当只申请buffer未归还，会导致NativeWindow内buffer耗尽，再次申请buffer时卡死。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "修改：确保申请的buffer一定会归还到NativeWindow中，成功绘制的可通过OH_NativeWindow_NativeWindowFlushBuffer归还，未绘制的可通过OH_NativeWindow_NativeWindowAbortBuffer归还。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "auto ret = OH_NativeWindow_NativeWindowRequestBuffer(nativewindow_, &buffer, &fence);\nif (ret != NATIVE_ERROR_OK) {\n    return;\n}\n\nif (error) {\n    // 异常分支归还buffer\n    OH_NativeWindow_NativeWindowAbortBuffer(nativewindow_, buffer);\n    return;\n}\n\nOH_NativeWindow_NativeWindowFlushBuffer(nativewindow_, buffer, fence, region);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "内存泄露问题",
      children: "内存泄露问题"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "典型内存泄露原因",
      children: "典型内存泄露原因"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "额外执行了增加引用计数接口，未配套执行减少引用计数接口导致泄露。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "典型错误代码及解决方案-2",
      children: "典型错误代码及解决方案"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "典型错误代码1"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "auto ret = OH_NativeWindow_NativeWindowRequestBuffer(nativewindow_, &buffer, &fence);\nif (ret != NATIVE_ERROR_OK) {\n    return;\n}\nret = OH_NativeWindow_NativeObjectReference(buffer);\nif (ret != NATIVE_ERROR_OK) {\n    return;\n}\n\n// 错误：对buffer增加了引用计数，绘制流程走到异常分支，异常分支未相应减少引用计数，导致泄露\nif (error) {\n    OH_NativeWindow_NativeWindowAbortBuffer(nativewindow_, buffer);\n    return;\n}\n\nOH_NativeWindow_NativeWindowFlushBuffer(nativewindow_, buffer, fence, region);\nOH_NativeWindow_NativeObjectReference(buffer);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "具体解析"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "申请buffer后增加引用计数延长其生命周期，未配套减少引用计数，导致该buffer无法被释放。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "修改：确保增加引用计数后有配套调用减少引用计数接口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "auto ret = OH_NativeWindow_NativeWindowRequestBuffer(nativewindow_, &buffer, &fence);\nif (ret != NATIVE_ERROR_OK) {\n    return;\n}\nret = OH_NativeWindow_NativeObjectReference(buffer);\nif (ret != NATIVE_ERROR_OK) {\n    return;\n}\n\nif (error) {\n    // 异常分支配套减少引用计数\n    OH_NativeWindow_NativeWindowAbortBuffer(nativewindow_, buffer);\n    OH_NativeWindow_NativeObjectUnreference(buffer);\n    return;\n}\n\nOH_NativeWindow_NativeWindowFlushBuffer(nativewindow_, buffer, fence, region);\nOH_NativeWindow_NativeObjectReference(buffer);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "典型错误代码2"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "auto ret = OH_NativeImage_AcquireNativeWindowBuffer(nativeimage, &buffer, &fence);\nif (ret != NATIVE_ERROR_OK) {\n    return;\n}\nret = OH_NativeWindow_NativeObjectReference(buffer);\nif (ret != NATIVE_ERROR_OK) {\n    return;\n}\n\n// 错误：未对Release失败场景处理，AcquireNativeWindowBuffer成功会对buffer引用计数加一，ReleaseNativeWindowBuffer失败不会减一\nOH_NativeImage_ReleaseNativeWindowBuffer(nativeimage, buffer, fence);\nOH_NativeWindow_NativeObjectUnreference(buffer);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "具体解析"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "OH_NativeImage_AcquireNativeWindowBuffer接口获取的buffer会增加引用计数，OH_NativeImage_ReleaseNativeWindowBuffer接口只在成功时减少引用计数，未对返回值做处理会导致内存泄露。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "修改：OH_NativeImage_ReleaseNativeWindowBuffer接口返回不为NATIVE_ERROR_OK时，额外调用OH_NativeWindow_NativeObjectUnreference减少一次引用计数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "auto ret = OH_NativeImage_AcquireNativeWindowBuffer(nativeimage, &buffer, &fence);\nif (ret != NATIVE_ERROR_OK) {\n    return;\n}\nret = OH_NativeWindow_NativeObjectReference(buffer);\nif (ret != NATIVE_ERROR_OK) {\n    return;\n}\n\n// 对OH_NativeImage_ReleaseNativeWindowBuffer失败做异常处理\nret = OH_NativeImage_ReleaseNativeWindowBuffer(nativeimage, buffer, fence);\nif (ret != NATIVE_ERROR_OK) {\n    OH_NativeWindow_NativeObjectUnreference(buffer);\n}\nOH_NativeWindow_NativeObjectUnreference(buffer);\n"
      })
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