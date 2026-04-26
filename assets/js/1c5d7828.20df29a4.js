"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["24256"], {
430519(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkgraphics_2_d_displaysync_displaysoloist_native_guidelines_displaysoloist_native_guidelines_md_1c5_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkgraphics-2-d-displaysync-displaysoloist-native-guidelines-displaysoloist-native-guidelines-md-1c5.json
var site_docs_arkgraphics_2_d_displaysync_displaysoloist_native_guidelines_displaysoloist_native_guidelines_md_1c5_namespaceObject = JSON.parse('{"id":"arkgraphics-2d/displaysync/displaysoloist-native-guidelines/displaysoloist-native-guidelines","title":"NativeDisplaySoloist开发指导 (C/C++)","description":"如果开发者想在独立线程中实现帧率控制的Native侧业务，可以通过DisplaySoloist来实现，如游戏、自绘制UI框架对接等场景。","source":"@site/docs/arkgraphics-2d/displaysync/displaysoloist-native-guidelines/displaysoloist-native-guidelines.md","sourceDirName":"arkgraphics-2d/displaysync/displaysoloist-native-guidelines","slug":"/arkgraphics-2d/displaysync/displaysoloist-native-guidelines/","permalink":"/harmonyos-docs-site/arkgraphics-2d/displaysync/displaysoloist-native-guidelines/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"NativeDisplaySoloist开发指导 (C/C++)","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/displaysoloist-native-guidelines","kit":"graphics","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"请求自绘制内容绘制帧率","permalink":"/harmonyos-docs-site/arkgraphics-2d/displaysync/displaysync-xcomponent/"},"next":{"title":"过度绘制调试使用指导","permalink":"/harmonyos-docs-site/arkgraphics-2d/overdraw-dfx-guidelines/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkgraphics-2d/displaysync/displaysoloist-native-guidelines/displaysoloist-native-guidelines.md


const frontMatter = {
	title: 'NativeDisplaySoloist开发指导 (C/C++)',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/displaysoloist-native-guidelines',
	kit: 'graphics',
	last_updated: '2026-04-22'
};
const contentTitle = 'NativeDisplaySoloist开发指导 (C/C++)';

const assets = {

};



const toc = [{
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "开发示例",
  "id": "开发示例",
  "level": 2
}, {
  "value": "添加开发依赖",
  "id": "添加开发依赖",
  "level": 3
}, {
  "value": "开发步骤",
  "id": "开发步骤",
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
        id: "nativedisplaysoloist开发指导-cc",
        children: "NativeDisplaySoloist开发指导 (C/C++)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果开发者想在独立线程中实现帧率控制的Native侧业务，可以通过DisplaySoloist来实现，如游戏、自绘制UI框架对接等场景。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者可以选择多个DisplaySoloist实例共享一个线程，也可以选择每个DisplaySoloist实例独占一个线程。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "函数名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_DisplaySoloist* OH_DisplaySoloist_Create (bool useExclusiveThread)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个OH_DisplaySoloist实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_DisplaySoloist_Destroy (OH_DisplaySoloist * displaySoloist)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁一个OH_DisplaySoloist实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_DisplaySoloist_Start (OH_DisplaySoloist * displaySoloist, OH_DisplaySoloist_FrameCallback callback, void * data )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置每帧回调函数，每次VSync信号到来时启动每帧回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_DisplaySoloist_Stop (OH_DisplaySoloist * displaySoloist)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "停止请求下一次VSync信号，并停止调用回调函数callback。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_DisplaySoloist_SetExpectedFrameRateRange (OH_DisplaySoloist* displaySoloist, DisplaySoloist_ExpectedRateRange* range)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置期望帧率范围。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["详细的接口说明请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-module/capi-nativedisplaysoloist/capi-nativedisplaysoloist",
        children: "NativeDisplaySoloist"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发示例",
      children: "开发示例"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本范例是通过Drawing在Native侧实现图形的绘制，通过异步线程设置期望的帧率，再根据帧率进行图形的绘制并将其呈现在NativeWindow上，图形绘制部分可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkgraphics-2d/graphic-drawing-and-display/graphic-drawing-overview",
        children: "使用Drawing实现图形绘制与显示"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "添加开发依赖",
      children: "添加开发依赖"
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
        children: "target_link_libraries(entry PUBLIC libace_napi.z.so libnative_drawing.so libnative_window.so libace_ndk.z.so libnative_display_soloist.so)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "头文件"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include <ace/xcomponent/native_interface_xcomponent.h>\n#include <arpa/nameser.h>\n#include <bits/alltypes.h>\n#include <native_window/external_window.h>\n#include <native_drawing/drawing_bitmap.h>\n#include <native_drawing/drawing_color.h>\n#include <native_drawing/drawing_canvas.h>\n#include <native_drawing/drawing_pen.h>\n#include <native_drawing/drawing_brush.h>\n#include <native_drawing/drawing_path.h>\n#include <cstdint>\n#include <map>\n#include <sys/mman.h>\n#include <string>\n#include \"napi/native_api.h\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include <native_display_soloist/native_display_soloist.h>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "定义ArkTS接口文件XComponentContext.ts，用来对接Native层。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "export default interface XComponentContext {\n  register(): void;\n\n  unregister(): void;\n\n  destroy(): void;\n};\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "定义演示页面，包含两个XComponent组件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import XComponentContext from '../interface/XComponentContext';\n// ...\n\n@Entry\n@Component\nstruct Index {\n  private xComponentContext1: XComponentContext | undefined = undefined;\n  private xComponentContext2: XComponentContext | undefined = undefined;\n\n  // ...\n\n  build() {\n    Column() {\n      Row() {\n        // ...\n\n        XComponent({\n          id: 'xcomponentId_30',\n          type: XComponentType.SURFACE,\n          libraryname: 'entry'\n        })\n          .onLoad((xComponentContext) => {\n            this.xComponentContext1 = xComponentContext as XComponentContext;\n          }).width('640px')\n          // ...\n      }.height('40%')\n\n      Row() {\n        // ...\n\n        XComponent({\n          id: 'xcomponentId_120',\n          type: XComponentType.SURFACE,\n          libraryname: 'entry'\n        })\n          .onLoad((xComponentContext) => {\n            this.xComponentContext2 = xComponentContext as XComponentContext;\n          }).width('640px')\n          // ...\n      }.height('40%')\n\n      // ...\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在 Native C++层获取NativeXComponent。建议使用单例模式保存XComponent。此步骤需要在napi_init的过程中处理。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建一个PluginManager单例类，用于管理NativeXComponent。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "class PluginManager {\npublic:\n    ~PluginManager();\n\n    static PluginManager *GetInstance();\n\n    void SetNativeXComponent(std::string &id, OH_NativeXComponent *nativeXComponent);\n    SampleXComponent *GetRender(std::string &id);\n    void Export(napi_env env, napi_value exports);\n\nprivate:\n    std::unordered_map<std::string, OH_NativeXComponent *> nativeXComponentMap_;\n    std::unordered_map<std::string, SampleXComponent *> pluginRenderMap_;\n};\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "SampleXComponent类会在后面的绘制图形中创建。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "void PluginManager::Export(napi_env env, napi_value exports)\n{\n    nativeXComponentMap_.clear();\n    pluginRenderMap_.clear();\n    if ((env == nullptr) || (exports == nullptr)) {\n        SAMPLE_LOGE(\"Export: env or exports is null\");\n        return;\n    }\n\n    napi_value exportInstance = nullptr;\n    if (napi_get_named_property(env, exports, OH_NATIVE_XCOMPONENT_OBJ, &exportInstance) != napi_ok) {\n        SAMPLE_LOGE(\"Export: napi_get_named_property fail\");\n        return;\n    }\n\n    OH_NativeXComponent *nativeXComponent = nullptr;\n    if (napi_unwrap(env, exportInstance, reinterpret_cast<void **>(&nativeXComponent)) != napi_ok) {\n        SAMPLE_LOGE(\"Export: napi_unwrap fail\");\n        return;\n    }\n\n    char idStr[OH_XCOMPONENT_ID_LEN_MAX + 1] = {'\\0'};\n    uint64_t idSize = OH_XCOMPONENT_ID_LEN_MAX + 1;\n    if (OH_NativeXComponent_GetXComponentId(nativeXComponent, idStr, &idSize) != OH_NATIVEXCOMPONENT_RESULT_SUCCESS) {\n        SAMPLE_LOGE(\"Export: OH_NativeXComponent_GetXComponentId fail\");\n        return;\n    }\n\n    std::string id(idStr);\n    auto context = PluginManager::GetInstance();\n    if ((context != nullptr) && (nativeXComponent != nullptr)) {\n        context->SetNativeXComponent(id, nativeXComponent);\n        auto render = context->GetRender(id);\n        if (render != nullptr) {\n            render->RegisterCallback(nativeXComponent);\n            render->Export(env, exports);\n        } else {\n            SAMPLE_LOGE(\"render is nullptr\");\n        }\n    }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Native层配置帧率和注册回调函数。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "定义每帧回调函数内容。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "static void TestCallback(long long timestamp, long long targetTimestamp, void *data)\n{\n    // ...\n    OH_NativeXComponent *component = nullptr;\n    component = static_cast<OH_NativeXComponent *>(data);\n    if (component == nullptr) {\n        SAMPLE_LOGE(\"TestCallback: component is null\");\n        return;\n    }\n\n    char idStr[OH_XCOMPONENT_ID_LEN_MAX + 1] = {'\\0'};\n    uint64_t idSize = OH_XCOMPONENT_ID_LEN_MAX + 1;\n    if (OH_NativeXComponent_GetXComponentId(component, idStr, &idSize) != OH_NATIVEXCOMPONENT_RESULT_SUCCESS) {\n        SAMPLE_LOGE(\"TestCallback: Unable to get XComponent id\");\n        return;\n    }\n\n    std::string id(idStr);\n    auto render = SampleXComponent::GetInstance(id);\n    OHNativeWindow *nativeWindow = render->GetNativeWindow();\n    uint64_t width;\n    uint64_t height;\n\n    int32_t xSize = OH_NativeXComponent_GetXComponentSize(component, nativeWindow, &width, &height);\n    if ((xSize == OH_NATIVEXCOMPONENT_RESULT_SUCCESS) && (render != nullptr)) {\n        render->Prepare();\n        render->Create();\n        if (id == \"xcomponentId_30\") {\n            int offset = 16;\n            render->ConstructPath(offset, offset, render->defaultOffsetY);\n        }\n        if (id == \"xcomponentId_120\") {\n            int offset = 4;\n            render->ConstructPath(offset, offset, render->defaultOffsetY);\n        }\n        // ...\n    }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用DisplaySoloist接口配置帧率和注册每帧回调函数。如果使用OH_DisplaySoloist_Create创建DisplaySoloist实例时传入的参数useExclusiveThread为true，则OH_DisplaySoloist_FrameCallback以独占线程方式执行，否则OH_DisplaySoloist_FrameCallback以共享线程方式执行。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(70783)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "实例在调用NapiRegister后，在不需要进行帧率控制时，应进行NapiUnregister操作，避免内存泄漏问题。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "在页面跳转时，应进行NapiUnregister和NapiDestroy操作，避免内存泄漏问题。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "static std::unordered_map<std::string, OH_DisplaySoloist *> g_displaySync;\n\n// ...\n\nvoid ExecuteDisplaySoloist(std::string id, DisplaySoloist_ExpectedRateRange range, bool useExclusiveThread,\n                           OH_NativeXComponent *nativeXComponent)\n{\n    OH_DisplaySoloist *nativeDisplaySoloist = nullptr;\n    if (g_displaySync.find(id) == g_displaySync.end()) {\n        g_displaySync[id] = OH_DisplaySoloist_Create(useExclusiveThread);\n    }\n    nativeDisplaySoloist = g_displaySync[id];\n    OH_DisplaySoloist_SetExpectedFrameRateRange(nativeDisplaySoloist, &range);\n    OH_DisplaySoloist_Start(nativeDisplaySoloist, TestCallback, nativeXComponent);\n}\n\nnapi_value SampleXComponent::NapiRegister(napi_env env, napi_callback_info info)\n{\n    // ...\n\n    napi_value thisArg;\n    if (napi_get_cb_info(env, info, nullptr, nullptr, &thisArg, nullptr) != napi_ok) {\n        SAMPLE_LOGE(\"NapiRegister: napi_get_cb_info fail\");\n        return nullptr;\n    }\n\n    napi_value exportInstance;\n    if (napi_get_named_property(env, thisArg, OH_NATIVE_XCOMPONENT_OBJ, &exportInstance) != napi_ok) {\n        SAMPLE_LOGE(\"NapiRegister: napi_get_named_property fail\");\n        return nullptr;\n    }\n\n    OH_NativeXComponent *nativeXComponent = nullptr;\n    if (napi_unwrap(env, exportInstance, reinterpret_cast<void **>(&nativeXComponent)) != napi_ok) {\n        SAMPLE_LOGE(\"NapiRegister: napi_unwrap fail\");\n        return nullptr;\n    }\n\n    char idStr[OH_XCOMPONENT_ID_LEN_MAX + 1] = {'\\0'};\n    uint64_t idSize = OH_XCOMPONENT_ID_LEN_MAX + 1;\n    if (OH_NativeXComponent_GetXComponentId(nativeXComponent, idStr, &idSize) != OH_NATIVEXCOMPONENT_RESULT_SUCCESS) {\n        SAMPLE_LOGE(\"NapiRegister: Unable to get XComponent id\");\n        return nullptr;\n    }\n    SAMPLE_LOGI(\"RegisterID = %{public}s\", idStr);\n    std::string id(idStr);\n    SampleXComponent *render = SampleXComponent().GetInstance(id);\n    if (render != nullptr) {\n        DisplaySoloist_ExpectedRateRange range;\n        bool useExclusiveThread = false;\n        if (id == \"xcomponentId30\") {\n            range = {30, 120, 30};\n        }\n\n        if (id == \"xcomponentId120\") {\n            range = {30, 120, 120};\n        }\n        ExecuteDisplaySoloist(id, range, useExclusiveThread, nativeXComponent);\n    }\n    return nullptr;\n}\n\nnapi_value SampleXComponent::NapiUnregister(napi_env env, napi_callback_info info)\n{\n    // ...\n        OH_DisplaySoloist_Stop(g_displaySync[id]);\n        // ...\n}\n\nnapi_value SampleXComponent::NapiDestroy(napi_env env, napi_callback_info info)\n{\n    // ...\n        OH_DisplaySoloist_Destroy(g_displaySync[id]);\n        g_displaySync.erase(id);\n        // ...\n}\n\n// ...\n\nvoid SampleXComponent::Export(napi_env env, napi_value exports)\n{\n    if ((env == nullptr) || (exports == nullptr)) {\n        SAMPLE_LOGE(\"Export: env or exports is null\");\n        return;\n    }\n    napi_property_descriptor desc[] = {\n        {\"register\", nullptr, SampleXComponent::NapiRegister, nullptr, nullptr, nullptr, napi_default, nullptr},\n        {\"unregister\", nullptr, SampleXComponent::NapiUnregister, nullptr, nullptr, nullptr, napi_default, nullptr},\n        {\"destroy\", nullptr, SampleXComponent::NapiDestroy, nullptr, nullptr, nullptr, napi_default, nullptr}};\n\n    if (napi_define_properties(env, exports, sizeof(desc) / sizeof(desc[0]), desc) != napi_ok) {\n        SAMPLE_LOGE(\"Export: napi_define_properties failed\");\n    }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "TS层注册和取消注册每帧回调，销毁OH_DisplaySoloist实例。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "aboutToDisappear(): void {\n  // ...\n  if (this.xComponentContext1) {\n    this.xComponentContext1.unregister();\n    this.xComponentContext1.destroy();\n  }\n  if (this.xComponentContext2) {\n    this.xComponentContext2.unregister();\n    this.xComponentContext2.destroy();\n  }\n}\n\n// ...\n\n    Row() {\n      Button('Start')\n        .id('Start')\n        .fontSize(14)\n        .fontWeight(500)\n        .margin({ bottom: 20, right: 6, left: 6 })\n        .onClick(() => {\n          if (this.xComponentContext1) {\n            this.xComponentContext1.register();\n          }\n          if (this.xComponentContext2) {\n            this.xComponentContext2.register();\n          }\n        })\n        .width('30%')\n        .height(40)\n        .shadow(ShadowStyle.OUTER_DEFAULT_LG)\n\n      Button('Stop')\n        .id('Stop')\n        .fontSize(14)\n        .fontWeight(500)\n        .margin({ bottom: 20, left: 6 })\n        .onClick(() => {\n          if (this.xComponentContext1) {\n            this.xComponentContext1.unregister();\n          }\n          if (this.xComponentContext2) {\n            this.xComponentContext2.unregister();\n          }\n        })\n        .width('30%')\n        .height(40)\n        .shadow(ShadowStyle.OUTER_DEFAULT_LG)\n    }\n"
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
70783(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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