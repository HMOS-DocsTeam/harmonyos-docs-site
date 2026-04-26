"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["382276"], {
701305(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_vulkan_guide_vulkan_guides_vulkan_oh_external_memory_guidelines_vulkan_oh_external_memory_guidelines_md_1bb_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-vulkan-guide-vulkan-guides-vulkan-oh-external-memory-guidelines-vulkan-oh-external-memory-guidelines-md-1bb.json
var site_docs_ref_vulkan_guide_vulkan_guides_vulkan_oh_external_memory_guidelines_vulkan_oh_external_memory_guidelines_md_1bb_namespaceObject = JSON.parse('{"id":"vulkan-guide/vulkan-guides/vulkan-oh-external-memory-guidelines/vulkan-oh-external-memory-guidelines","title":"Vulkan External Memory开发指导","description":"场景介绍","source":"@site/docs-ref/vulkan-guide/vulkan-guides/vulkan-oh-external-memory-guidelines/vulkan-oh-external-memory-guidelines.md","sourceDirName":"vulkan-guide/vulkan-guides/vulkan-oh-external-memory-guidelines","slug":"/vulkan-guide/vulkan-guides/vulkan-oh-external-memory-guidelines/vulkan-oh-external-memory-guidelines","permalink":"/harmonyos-docs-site/ref/vulkan-guide/vulkan-guides/vulkan-oh-external-memory-guidelines/vulkan-oh-external-memory-guidelines","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"Vulkan External Memory开发指导","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/vulkan-oh-external-memory-guidelines","kit":"标准库","last_updated":"2026-04-22","slug":"vulkan-oh-external-memory-guidelines"},"sidebar":"ref","previous":{"title":"Vulkan Surface开发指导","permalink":"/harmonyos-docs-site/ref/vulkan-guide/vulkan-guides/vulkan-guidelines/vulkan-guidelines"},"next":{"title":"Vulkan支持能力","permalink":"/harmonyos-docs-site/ref/vulkan-guide/vulkan/vulkan"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/vulkan-guide/vulkan-guides/vulkan-oh-external-memory-guidelines/vulkan-oh-external-memory-guidelines.md


const frontMatter = {
	title: 'Vulkan External Memory开发指导',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/vulkan-oh-external-memory-guidelines',
	kit: '标准库',
	last_updated: '2026-04-22',
	slug: 'vulkan-oh-external-memory-guidelines'
};
const contentTitle = 'Vulkan External Memory开发指导';

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
  "value": "结构体",
  "id": "结构体",
  "level": 3
}, {
  "value": "函数",
  "id": "函数",
  "level": 3
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
    h3: "h3",
    header: "header",
    img: "img",
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
        id: "vulkan-external-memory开发指导",
        children: "Vulkan External Memory开发指导"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "VK_OHOS_external_memory 扩展用于在GPU Vulkan环境下与HarmonyOS的本机缓冲区（OHNativeBuffer）之间做零拷贝的内存共享。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该扩展允许：把由HarmonyOS或其他组件（Camera、RenderService、视频解码器、OHNativeWindow等）创建的OHNativeBuffer导入为Vulkan内存（并绑定到VkImage/VkBuffer）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "这可以实现视频帧、相机输出、图像解码器等在生产端与Vulkan渲染/计算端的高效共享，避免额外拷贝或像素转换。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "所以，本指导将介绍实现视频解码器与渲染器零拷贝：将解码器输出OHNativeBuffer，直接导入Vulkan。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "结构体",
      children: "结构体"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/vulkan-guide/vulkan-extensions/capi-vulkan-vknativebufferpropertiesohos/capi-vulkan-vknativebufferpropertiesohos",
              children: "VkNativeBufferPropertiesOHOS"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "包含了NativeBuffer的属性。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/vulkan-guide/vulkan-extensions/capi-vulkan-vknativebufferformatpropertiesohos/capi-vulkan-vknativebufferformatpropertiesohos",
              children: "VkNativeBufferFormatPropertiesOHOS"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "包含了NativeBuffer的一些格式属性。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/vulkan-guide/vulkan-extensions/capi-vulkan-vkimportnativebufferinfoohos/capi-vulkan-vkimportnativebufferinfoohos",
              children: "VkImportNativeBufferInfoOHOS"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "包含了OH_NativeBuffer结构体的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/vulkan-guide/vulkan-extensions/capi-vulkan-vkmemorygetnativebufferinfoohos/capi-vulkan-vkmemorygetnativebufferinfoohos",
              children: "VkMemoryGetNativeBufferInfoOHOS"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于从Vulkan内存中获取OH_NativeBuffer。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/vulkan-guide/vulkan-extensions/capi-vulkan-vkexternalformatohos/capi-vulkan-vkexternalformatohos",
              children: "VkExternalFormatOHOS"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示外部定义的格式标识符。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "函数",
      children: "函数"
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
            children: ["VKAPI_ATTR VkResult VKAPI_CALL ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/vulkan-guide/vulkan-extensions/capi-vulkan-ohos-h/capi-vulkan-ohos-h#vkgetnativebufferpropertiesohos",
              children: "vkGetNativeBufferPropertiesOHOS"
            }), " (VkDevice device, const struct OH_NativeBuffer *buffer, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/vulkan-guide/vulkan-extensions/capi-vulkan-vknativebufferpropertiesohos/capi-vulkan-vknativebufferpropertiesohos",
              children: "VkNativeBufferPropertiesOHOS"
            }), " *pProperties)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取OH_NativeBuffer属性。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下步骤说明了如何将视频解码器输出的本机缓冲区（OHNativeBuffer）导入为Vulkan内存，并绑定到VkImage/VkBuffer。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "启动渲染子线程，初始化Vulkan环境，动态加载libvulkan.so, 并加载Vulkan基础函数的指针。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "void VulkanRenderThread::ThreadMainLoop() {\n    threadId_ = std::this_thread::get_id();\n    if (!InitRenderContext()) {\n        return;\n    }\n    if (!InitNativeVsync()) {\n        return;\n    }\n    if (!CreateNativeImage()) {\n        return;\n    }\n    while (running_) {\n        {\n            OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN, \"RenderThread\", \"Waiting for Vsync.\");\n            std::unique_lock<std::mutex> Lock(wakeUpMutex_);\n            wakeUpCond_.wait(Lock, [this]() { return wakeup_ || vSyncCnt_ > 0 || availableFrameCnt_ > 0; });\n            wakeup_ = false;\n            vSyncCnt_--;\n            (void)OH_NativeVSync_RequestFrame(nativeVsync_, &VulkanRenderThread::OnVsync, this);\n        }\n\n        std::vector<VulkanRenderTask> tasks;\n        {\n            std::lock_guard<std::mutex> lock(taskMutex_);\n            tasks.swap(tasks_);\n        }\n        for (const auto &task : tasks) {\n            task(*vulkanRenderContext_);\n        }\n        if (availableFrameCnt_ <= 0) {\n            continue;\n        }\n        DrawImage();\n        availableFrameCnt_--;\n    }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "动态加载libvulkan.so，并加载Vulkan基础函数的指针。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// Dynamically load Vulkan library and base function pointers\nbool LoadVulkanLibrary() {\n    // Load vulkan library\n    constexpr char *path = \"libvulkan.so\";\n    dlerror();\n    g_libVulkan = dlopen(path, RTLD_NOW | RTLD_LOCAL);\n    if (!g_libVulkan) {\n        OH_LOG_ERROR(LOG_APP, \"Failed to load vulkan Library, %{public}s\", dlerror());\n        return false;\n    }\n\n    // // Load base function pointers\n    vkEnumerateInstanceExtensionProperties = reinterpret_cast<PFN_vkEnumerateInstanceExtensionProperties>(\n        dlsym(g_libVulkan, \"vkEnumerateInstanceExtensionProperties\"));\n    vkEnumerateInstanceLayerProperties = reinterpret_cast<PFN_vkEnumerateInstanceLayerProperties>(\n        dlsym(g_libVulkan, \"vkEnumerateInstanceLayerProperties\"));\n    vkCreateInstance = reinterpret_cast<PFN_vkCreateInstance>(dlsym(g_libVulkan, \"vkCreateInstance\"));\n    vkGetInstanceProcAddr = reinterpret_cast<PFN_vkGetInstanceProcAddr>(dlsym(g_libVulkan, \"vkGetInstanceProcAddr\"));\n    vkGetDeviceProcAddr = reinterpret_cast<PFN_vkGetDeviceProcAddr>(dlsym(g_libVulkan, \"vkGetDeviceProcAddr\"));\n\n    return true;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建NativeImage对象作为OHNativeBuffer的消费端，并根据NativeImage对象获取对应的NativeWindow对象，将NativeWindow句柄传给视频编解码，作为OHNativeBuffer的生产端，用于生产视频帧内容。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "bool VulkanRenderThread::CreateNativeImage() {\n    nativeImage_ = OH_ConsumerSurface_Create();\n    if (nativeImage_ == nullptr) {\n        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN, \"RenderThread\", \"OH_NativeImage_Create failed.\");\n        return false;\n    }\n    int ret = 0;\n    {\n        std::lock_guard<std::mutex> Lock(nativeImageSurfaceIdMutex_);\n        nativeImageWindow_ = OH_NativeImage_AcquireNativeWindow(nativeImage_);\n        ret = OH_NativeImage_GetSurfaceId(nativeImage_, &nativeImageSurfaceId_);\n    }\n    if (ret != 0) {\n        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN, \"RenderThread\",\n                    \"OH_NativeImage_GetSurfaceId failed, ret is %{public}d.\", ret);\n        return false;\n    }\n\n    nativeImageFrameAvailableListener_.context = this;\n    nativeImageFrameAvailableListener_.onFrameAvailable = &VulkanRenderThread::OnNativeImageFrameAvailable;\n    ret = OH_NativeImage_SetOnFrameAvailableListener(nativeImage_, nativeImageFrameAvailableListener_);\n    if (ret != 0) {\n        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN, \"RenderThread\",\n                    \"OH_NativeImage_SetonFrameAvailableListener failed, ret is %{public}d.\", ret);\n        return false;\n    }\n    return true;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取XComponent的NativeWindow对象，根据NativeWindow对象创建出Vulkan环境的VkSurface，用于绘制显示内容。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "void VulkanRenderThread::UpdateNativeWindow(void *window, uint64_t width, uint64_t height) {\n    OH_LOG_Print(LOG_APP, LOG_DEBUG, LOG_PRINT_DOMAIN, \"RenderThread\", \"UpdateNativeWindow.\");\n    auto nativeWindow = reinterpret_cast<OHNativeWindow *>(window);\n    PostTask([this, nativeWindow, width, height](VulkanRender &renderContext) {\n        if (nativeWindow_ != nativeWindow) {\n            if (nativeWindow_ != nullptr) {\n                (void)OH_NativeWindow_NativeObjectUnreference(nativeWindow_);\n            }\n            nativeWindow_ = nativeWindow;\n            if (nativeWindow_ != nullptr) {\n                (void)OH_NativeWindow_NativeObjectReference(nativeWindow_);\n            }\n        }\n        if (nativeWindow_ != nullptr) {\n            vulkanRenderContext_->SetupWindow(nativeWindow_);\n        }\n    });\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "同时更新初始化Vulkan的上下文，包括Vulkan的实列、选择物理设备、创建渲染管线等。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "void VulkanRender::SetupWindow(NativeWindow *nativeWindow) {\n    nativeWindow_ = nativeWindow;\n    CreateInstance();\n    vkExample::utils::LoadVulkanFunctions(instance);\n    CreateSurface();\n    PickPhysicalDevice();\n    CreateLogicalDevice();\n    vkExample::utils::LoadVulkanFunctions(device);\n\n    createSwapChain();\n    createRenderPass();\n    createFrameBuffersAndImages();\n    createVertexBuffer();\n    createUniformBuffer();\n    deviceInfoInitialized = true;\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过vkCreateSurfaceOHOS()创建VkSurface对象。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "bool VulkanRender::CreateSurface() {\n    VkSurfaceCreateInfoOHOS surfaceCreateInfo{};\n    surfaceCreateInfo.sType = VK_STRUCTURE_TYPE_SURFACE_CREATE_INFO_OHOS;\n    if (nativeWindow_ == nullptr) {\n        OH_LOG_INFO(LOG_APP, \"nativeWindow_ is nullptr.Failed to create surface !\");\n        return false;\n    }\n    surfaceCreateInfo.window = nativeWindow_;\n    surfaceCreateInfo.flags = 0;\n    surfaceCreateInfo.pNext = nullptr;\n    bool res = CheckResult(vkCreateSurfaceOHOS(instance, &surfaceCreateInfo, nullptr, &surface));\n    return res;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "初始化视频解码的环境，包括初始化解封装器、初始化解码器。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "napi_value PluginRender::StartPlayer(napi_env env, napi_callback_info info)\n{\n    SampleInfo sampleInfo;\n    size_t argc = 4;\n    napi_value args[4] = {nullptr};\n    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);\n    napi_get_value_int32(env, args[0], &sampleInfo.inputFd);\n    napi_get_value_int64(env, args[1], &sampleInfo.inputFileOffset);\n    napi_get_value_int64(env, args[2], &sampleInfo.inputFileSize);\n    size_t length = 0;\n    napi_status status = napi_get_value_string_utf8(env, args[3], nullptr, 0, &length);\n    char* buf = new char[length + 1];\n    std::memset(buf, 0, length + 1);\n    status = napi_get_value_string_utf8(env, args[3], buf, length + 1, &length);\n    std::string type = buf;\n    PluginRender *render = PluginRender::GetInstance(type);\n    if (render != nullptr) {\n        if (type == \"Vulkan\") {\n            sampleInfo.window = render->vulkanRenderThread_->GetNativeImageWindow();\n        } else {\n            sampleInfo.window = render->nativeWindow;\n        }\n    }\n    int32_t ret = Player::GetInstance().Init(sampleInfo);\n    if (ret != AVCODEC_SAMPLE_ERR_OK) {\n        return nullptr;\n    }\n    Player::GetInstance().Start();\n    return nullptr;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "启动解码器、解码输入子线程、解码输出子线程。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "int32_t Player::Start() {\n    std::unique_lock<std::mutex> lock(mutex_);\n    int32_t ret;\n    if (isStarted_ || demuxer_ == nullptr) {\n        OH_LOG_ERROR(LOG_APP, \"Already started.\");\n        return AVCODEC_SAMPLE_ERR_ERROR;\n    }\n    \n    if (videoDecContext_) {\n        ret = videoDecoder_->Start();\n        if (ret != AVCODEC_SAMPLE_ERR_OK) {\n            OH_LOG_ERROR(LOG_APP, \"Video Decoder start failed\");\n            lock.unlock();\n            StartRelease();\n            return AVCODEC_SAMPLE_ERR_ERROR;\n        }\n        isStarted_ = true;\n        videoDecInputThread_ = std::make_unique<std::thread>(&Player::VideoDecInputThread, this);\n        videoDecOutputThread_ = std::make_unique<std::thread>(&Player::VideoDecOutputThread, this);\n\n        if (videoDecInputThread_ == nullptr || videoDecOutputThread_ == nullptr) {\n            OH_LOG_ERROR(LOG_APP, \"Create thread failed\");\n            lock.unlock();\n            StartRelease();\n            return AVCODEC_SAMPLE_ERR_ERROR;\n        }\n    }\n\n    OH_LOG_INFO(LOG_APP, \"Succeed\");\n    doneCond_.notify_all();\n    return AVCODEC_SAMPLE_ERR_OK;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在解码输入子线程中，通过解封装器读取视频数据，并交给解码器。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "void Player::VideoDecInputThread() {\n    while (true) {\n        if (!isStarted_) {\n            OH_LOG_ERROR(LOG_APP, \"Decoder input thread out\");\n            break;;\n        }\n        \n        std::unique_lock<std::mutex> lock(videoDecContext_->inputMutex);\n        bool condRet = videoDecContext_->inputCond.wait_for(\n            lock, 5s, [this]() { return !isStarted_ || !videoDecContext_->inputBufferInfoQueue.empty(); });\n        if (!isStarted_) {\n            OH_LOG_ERROR(LOG_APP, \"Work done, thread out\");\n            break;\n        }\n        if (videoDecContext_->inputBufferInfoQueue.empty()) {\n            OH_LOG_ERROR(LOG_APP, \"Buffer queue is empty, continue, cond ret: %{public}d\", condRet);\n            continue;\n        }\n\n        CodecBufferInfo bufferInfo = videoDecContext_->inputBufferInfoQueue.front();\n        videoDecContext_->inputBufferInfoQueue.pop();\n        videoDecContext_->inputFrameCount++;\n        lock.unlock();\n\n        demuxer_->ReadSample(demuxer_->GetVideoTrackId(), reinterpret_cast<OH_AVBuffer *>(bufferInfo.buffer),\n                            bufferInfo.attr);\n\n        int32_t ret = videoDecoder_->PushInputBuffer(bufferInfo);\n        if (ret != AVCODEC_SAMPLE_ERR_OK) {\n            OH_LOG_ERROR(LOG_APP, \"Push data failed, thread out\");\n            break;\n        }\n\n        if (bufferInfo.attr.flags & AVCODEC_BUFFER_FLAGS_EOS) {\n            OH_LOG_ERROR(LOG_APP, \"Catch EOS, thread out\");\n            break;\n        }\n    }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在解码输出子线程中，将解码后的视频提交给输出Surface。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "void Player::VideoDecOutputThread() {\n    sampleInfo_.frameInterval = MICROSECOND / sampleInfo_.frameRate;\n    while (true) {\n        thread_local auto lastPushTime = std::chrono::system_clock::now();\n        if (!isStarted_) {\n            OH_LOG_ERROR(LOG_APP, \"Decoder output thread out\");\n            break;\n        }\n        std::unique_lock<std::mutex> lock(videoDecContext_->outputMutex);\n        bool condRet = videoDecContext_->outputCond.wait_for(\n            lock, 5s, [this]() { return !isStarted_ || !videoDecContext_->outputBufferInfoQueue.empty(); });\n        if (!isStarted_) {\n            OH_LOG_ERROR(LOG_APP, \"Decoder output thread out\");\n            break;\n        }\n        if (videoDecContext_->outputBufferInfoQueue.empty()) {\n            OH_LOG_ERROR(LOG_APP, \"Buffer queue is empty, continue, cond ret: %{public}d\", condRet);\n            continue;\n        }\n\n        CodecBufferInfo bufferInfo = videoDecContext_->outputBufferInfoQueue.front();\n        videoDecContext_->outputBufferInfoQueue.pop();\n        if (bufferInfo.attr.flags & AVCODEC_BUFFER_FLAGS_EOS) {\n            OH_LOG_ERROR(LOG_APP, \"Catch EOS, thread out\");\n            break;\n        }\n        videoDecContext_->outputFrameCount++;\n        OH_LOG_INFO(LOG_APP,\"Out buffer count: %{public}u, size: %{public}d, flag: %{public}u, pts: %{public}ld\",\n                            videoDecContext_->outputFrameCount, bufferInfo.attr.size, bufferInfo.attr.flags,\n                            bufferInfo.attr.pts);\n        lock.unlock();\n\n        int32_t ret = videoDecoder_->FreeOutputBuffer(bufferInfo.bufferIndex, true);\n        if (ret != AVCODEC_SAMPLE_ERR_OK) {\n            OH_LOG_ERROR(LOG_APP, \"Decoder output thread out\");\n            break;\n        }\n\n        std::this_thread::sleep_until(lastPushTime + std::chrono::microseconds(sampleInfo_.frameInterval));\n        lastPushTime = std::chrono::system_clock::now();\n    }\n    StartRelease();\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在NativeImage有可用数据后，通过OH_NativeImage_AcquireNativeWindowBuffer()获取视频数据，并通过OH_NativeBuffer_FromNativeWindowBuffer()转化NativeBuffer的类型。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "void VulkanRenderThread::DrawImage() {\n    OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN, \"VulkanRenderThread\", \"DrawImage.\");\n    int ret;\n    OHNativeWindowBuffer *inBuffer = nullptr;\n    OH_NativeBuffer *nativeBuffer = nullptr;\n    int32_t fenceFd1 = -1;\n    ret = OH_NativeImage_AcquireNativeWindowBuffer(nativeImage_, &inBuffer, &fenceFd1);\n    ret = OH_NativeWindow_NativeObjectReference(inBuffer);\n    ret = OH_NativeBuffer_FromNativeWindowBuffer(inBuffer, &nativeBuffer);\n    if (nativeBuffer == nullptr) {\n        OH_NativeWindow_NativeObjectUnreference(inBuffer);\n        OH_NativeImage_ReleaseNativeWindowBuffer(nativeImage_, inBuffer, -1);\n        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN, \"VulkanRenderThread\", \"nativeBuffer is null.\");\n        return;\n    }\n    ret = OH_NativeImage_GetTransformMatrix(nativeImage_, matrix_);\n    int32_t transformTmp = 0;\n    ComputeTransform(transformTmp, matrix_);\n    vulkanRenderContext_->hwBufferToTexture(nativeBuffer, matrix_);\n    vulkanRenderContext_->render();\n    if (lastInBuffer_ != nullptr) {\n        OH_NativeWindow_NativeObjectUnreference(lastInBuffer_);\n        OH_NativeImage_ReleaseNativeWindowBuffer(nativeImage_, lastInBuffer_, -1);\n    }\n    lastInBuffer_ = inBuffer;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Vulkan根据NativeBuffer创建对应的ImageView用于渲染显示，同时创建对应格式的采样器，将YUV格式的图像采样成RGBA的图像，用于正确的渲染显示。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(420450)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "API version 23之前，基于标准库VkExternalMemoryImageCreateInfo结构体，系统支持扩展类型VK_EXTERNAL_MEMORY_HANDLE_TYPE_OHOS_NATIVE_BUFFER_BIT_OHOS。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "从API version 23开始，VK_EXTERNAL_MEMORY_HANDLE_TYPE_OHOS_NATIVE_BUFFER_BIT_OHOS已废弃，请改用VK_EXTERNAL_MEMORY_HANDLE_TYPE_OH_NATIVE_BUFFER_BIT_OHOS。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "void VulkanRender::hwBufferToTexture(OH_NativeBuffer *buffer, float transformMatrix[16]) {\n    OH_LOG_Print(LOG_APP, LOG_INFO, 0xFF00, \"VulkanRenderThread\", \"hwBufferToTexture.\");\n    if (!deviceInfoInitialized) {\n        return;\n    }\n    UniformBufferObject ubo{};\n    memcpy(ubo.mvp, transformMatrix, sizeof(float) * 16);\n    memcpy(buffersInfo.uniformBufferMapped, &ubo, sizeof(ubo));\n    VkNativeBufferFormatPropertiesOHOS nbFormatProps = {\n        .sType = VK_STRUCTURE_TYPE_NATIVE_BUFFER_FORMAT_PROPERTIES_OHOS,\n        .pNext = nullptr\n    };\n    VkNativeBufferPropertiesOHOS nbProps = {.sType = VK_STRUCTURE_TYPE_NATIVE_BUFFER_PROPERTIES_OHOS,\n                                            .pNext = &nbFormatProps};\n    CheckResult(vkGetNativeBufferPropertiesOHOS(device, buffer, &nbProps));\n\n    VkImportNativeBufferInfoOHOS importBufferInfo = {\n        .sType = VK_STRUCTURE_TYPE_IMPORT_NATIVE_BUFFER_INFO_OHOS,\n        .pNext = nullptr,\n        .buffer = buffer\n    };\n\n    VkMemoryDedicatedAllocateInfo dedicatedAllocateInfo = {\n        .sType = VK_STRUCTURE_TYPE_MEMORY_DEDICATED_ALLOCATE_INFO,\n        .pNext = &importBufferInfo,\n        .image = VK_NULL_HANDLE, // will be set later\n        .buffer = VK_NULL_HANDLE\n    };\n\n    VkPhysicalDeviceMemoryProperties physicalDeviceMemProps;\n    uint32_t foundTypeIndex = 0;\n    vkGetPhysicalDeviceMemoryProperties(gpuDevice, &physicalDeviceMemProps);\n    uint32_t memTypeCnt = physicalDeviceMemProps.memoryTypeCount;\n    for (uint32_t i = 0; i < memTypeCnt; ++i) {\n        if (nbProps.memoryTypeBits & (1 << i)) {\n            const VkPhysicalDeviceMemoryProperties &pdmp = physicalDeviceMemProps;\n            uint32_t supportedFLags = pdmp.memoryTypes[i].propertyFlags & VK_MEMORY_PROPERTY_DEVICE_LOCAL_BIT;\n            if (supportedFLags == VK_MEMORY_PROPERTY_DEVICE_LOCAL_BIT) {\n                foundTypeIndex = i;\n                break;\n            }\n        }\n    }\n\n    VkMemoryAllocateInfo allocInfo{\n        .sType = VK_STRUCTURE_TYPE_MEMORY_ALLOCATE_INFO,\n        .pNext = &dedicatedAllocateInfo,\n        .allocationSize = nbProps.allocationSize,\n        .memoryTypeIndex = 0 // Memory type assigned in the next step\n    };\n\n    mapMemoryTypeToIndex(nbProps.memoryTypeBits, VK_MEMORY_PROPERTY_DEVICE_LOCAL_BIT, &allocInfo.memoryTypeIndex);\n    VkExternalFormatOHOS externalFormat;\n    externalFormat.sType = VK_STRUCTURE_TYPE_EXTERNAL_FORMAT_OHOS;\n    externalFormat.pNext = nullptr;\n    externalFormat.externalFormat = 0;\n    if (nbFormatProps.format == VK_FORMAT_UNDEFINED) {\n        externalFormat.externalFormat = nbFormatProps.externalFormat;\n    }\n\n    VkExternalMemoryImageCreateInfo externalMemoryImageInfo = {\n        .sType = VK_STRUCTURE_TYPE_EXTERNAL_MEMORY_IMAGE_CREATE_INFO,\n        .pNext = &externalFormat,\n        .handleTypes = VK_EXTERNAL_MEMORY_HANDLE_TYPE_OH_NATIVE_BUFFER_BIT_OHOS,\n    };\n\n    VkImageUsageFlags usageFlags = VK_IMAGE_USAGE_SAMPLED_BIT;\n    if (nbFormatProps.format != VK_FORMAT_UNDEFINED) {\n        usageFlags = usageFlags | VK_IMAGE_USAGE_TRANSFER_SRC_BIT | VK_IMAGE_USAGE_TRANSFER_DST_BIT |\n                    VK_IMAGE_USAGE_COLOR_ATTACHMENT_BIT | VK_IMAGE_USAGE_INPUT_ATTACHMENT_BIT;\n    }\n    OH_NativeBuffer_Config config;\n    OH_NativeBuffer_GetConfig(buffer, &config);\n    VkImageCreateInfo image_create_info = {\n        .sType = VK_STRUCTURE_TYPE_IMAGE_CREATE_INFO,\n        .pNext = &externalMemoryImageInfo,\n        .flags = 0,\n        .imageType = VK_IMAGE_TYPE_2D,\n        .format = nbFormatProps.format,\n        .extent = {static_cast<uint32_t>(config.width), static_cast<uint32_t>(config.height), 1},\n        .mipLevels = 1,\n        .arrayLayers = 1,\n        .samples = VK_SAMPLE_COUNT_1_BIT,\n        .tiling = VK_IMAGE_TILING_OPTIMAL,\n        .usage = usageFlags,\n        .sharingMode = VK_SHARING_MODE_EXCLUSIVE,\n        .queueFamilyIndexCount = 1,\n        .pQueueFamilyIndices = &queueFamilyIndex_,\n        // VK_IMAGE_LAYOUT_UNDEFINED is mandatory when using external memory\n        .initialLayout = VK_IMAGE_LAYOUT_UNDEFINED\n    };\n\n    CheckResult(vkCreateImage(device, &image_create_info, nullptr, &externalTextureImage));\n    dedicatedAllocateInfo.image = externalTextureImage;\n    CheckResult(vkAllocateMemory(device, &allocInfo, nullptr, &externalTextureMemory));\n    CheckResult(vkBindImageMemory(device, externalTextureImage, externalTextureMemory, 0));\n\n    VkSamplerYcbcrConversionCreateInfo ycbcrCreateInfo = {\n        .sType = VK_STRUCTURE_TYPE_SAMPLER_YCBCR_CONVERSION_CREATE_INFO,\n        .ycbcrRange = nbFormatProps.suggestedYcbcrRange,\n        .components = nbFormatProps.samplerYcbcrConversionComponents,\n        .xChromaOffset = nbFormatProps.suggestedXChromaOffset,\n        .yChromaOffset = nbFormatProps.suggestedYChromaOffset,\n        .chromaFilter = VK_FILTER_LINEAR,\n        .forceExplicitReconstruction = false\n    };\n\n    if (nbFormatProps.format == VK_FORMAT_UNDEFINED) {\n        ycbcrCreateInfo.pNext = &externalFormat;\n        ycbcrCreateInfo.format = VK_FORMAT_UNDEFINED;\n        ycbcrCreateInfo.ycbcrModel = nbFormatProps.suggestedYcbcrModel;\n    }\n\n    CheckResult(\n        vkCreateSamplerYcbcrConversion(device, &ycbcrCreateInfo, nullptr, &externalTextureInfo.ycbcrConversion));\n\n    VkSamplerYcbcrConversionInfo convInfoWrap = {\n        .sType = VK_STRUCTURE_TYPE_SAMPLER_YCBCR_CONVERSION_INFO,\n        .conversion = externalTextureInfo.ycbcrConversion,\n        .pNext = nullptr,\n    };\n\n    VkImageViewCreateInfo view = {\n        .sType = VK_STRUCTURE_TYPE_IMAGE_VIEW_CREATE_INFO,\n        .pNext = &convInfoWrap,\n        .flags = 0,\n        .image = externalTextureImage,\n        .viewType = VK_IMAGE_VIEW_TYPE_2D,\n        .format = nbFormatProps.format,\n        .components =\n            {\n                VK_COMPONENT_SWIZZLE_IDENTITY,\n                VK_COMPONENT_SWIZZLE_IDENTITY,\n                VK_COMPONENT_SWIZZLE_IDENTITY,\n                VK_COMPONENT_SWIZZLE_IDENTITY\n            },\n        .subresourceRange = {VK_IMAGE_ASPECT_COLOR_BIT, 0, 1, 0, 1},\n    };\n    CheckResult(vkCreateImageView(device, &view, nullptr, &externalTextureInfo.view));\n\n    // Create sampler\n    const VkSamplerCreateInfo sampler = {\n        .sType = VK_STRUCTURE_TYPE_SAMPLER_CREATE_INFO,\n        .pNext = &convInfoWrap,\n        .magFilter = VK_FILTER_NEAREST,\n        .minFilter = VK_FILTER_NEAREST,\n        .mipmapMode = VK_SAMPLER_MIPMAP_MODE_NEAREST,\n        .addressModeU = VK_SAMPLER_ADDRESS_MODE_CLAMP_TO_EDGE,\n        .addressModeV = VK_SAMPLER_ADDRESS_MODE_CLAMP_TO_EDGE,\n        .addressModeW = VK_SAMPLER_ADDRESS_MODE_CLAMP_TO_EDGE,\n        .mipLodBias = 0.0f,\n        .compareEnable = VK_FALSE,\n        .anisotropyEnable = VK_FALSE,\n        .maxAnisotropy = 1,\n        .compareOp = VK_COMPARE_OP_NEVER,\n        .minLod = 0.0f,\n        .maxLod = 0.0f,\n        .borderColor = VK_BORDER_COLOR_FLOAT_OPAQUE_WHITE,\n        .unnormalizedCoordinates = VK_FALSE\n    };\n    CheckResult(vkCreateSampler(device, &sampler, nullptr, &externalTextureInfo.sampler));\n\n    createDescriptorSetLayout();\n    createDescriptorSet();\n\n    VkDescriptorImageInfo imageInfo = {\n        .sampler = externalTextureInfo.sampler,\n        .imageView = externalTextureInfo.view,\n        .imageLayout = VK_IMAGE_LAYOUT_SHADER_READ_ONLY_OPTIMAL\n    };\n\n    VkDescriptorBufferInfo bufferInfo = {\n        .buffer = buffersInfo.uniformBuf, .offset = 0, .range = sizeof(UniformBufferObject)};\n    VkWriteDescriptorSet bufferWrite = {.sType = VK_STRUCTURE_TYPE_WRITE_DESCRIPTOR_SET,\n                                        .dstSet = gfxPipelineInfo.descSet,\n                                        .dstBinding = 0,\n                                        .dstArrayElement = 0,\n                                        .descriptorCount = 1,\n                                        .descriptorType = VK_DESCRIPTOR_TYPE_UNIFORM_BUFFER,\n                                        .pImageInfo = nullptr,\n                                        .pBufferInfo = &bufferInfo,\n                                        .pTexelBufferView = nullptr};\n    VkWriteDescriptorSet imageWrite = {.sType = VK_STRUCTURE_TYPE_WRITE_DESCRIPTOR_SET,\n                                    .dstSet = gfxPipelineInfo.descSet,\n                                    .dstBinding = 1,\n                                    .dstArrayElement = 0,\n                                    .descriptorCount = 1,\n                                    .descriptorType = VK_DESCRIPTOR_TYPE_COMBINED_IMAGE_SAMPLER,\n                                    .pImageInfo = &imageInfo,\n                                    .pBufferInfo = nullptr,\n                                    .pTexelBufferView = nullptr};\n    gfxPipelineInfo.descWrites[0] = bufferWrite;\n    gfxPipelineInfo.descWrites[1] = imageWrite;\n    vkUpdateDescriptorSets(device, 2, gfxPipelineInfo.descWrites, 0, nullptr);\n\n    createGraphicsPipeline();\n    createOtherStuff();\n\n    recordCommandBuffer();\n    OH_LOG_INFO(LOG_APP, \"hwBufferToTexture end\");\n}\n"
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
420450(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

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