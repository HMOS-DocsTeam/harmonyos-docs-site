"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["758749"], {
70918(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_window_manager_window_pipwindow_pipwindow_native_pipwindow_native_md_5ab_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-window-manager-window-pipwindow-pipwindow-native-pipwindow-native-md-5ab.json
var site_docs_arkui_window_manager_window_pipwindow_pipwindow_native_pipwindow_native_md_5ab_namespaceObject = JSON.parse('{"id":"arkui/window-manager/window-pipwindow/pipwindow-native/pipwindow-native","title":"使用NDK接口实现画中画功能开发（C/C++）","description":"本文以视频播放为例，介绍通过NDK接口实现画中画功能的基本开发步骤。","source":"@site/docs/arkui/window-manager/window-pipwindow/pipwindow-native/pipwindow-native.md","sourceDirName":"arkui/window-manager/window-pipwindow/pipwindow-native","slug":"/arkui/window-manager/window-pipwindow/pipwindow-native/","permalink":"/harmonyos-docs-site/arkui/window-manager/window-pipwindow/pipwindow-native/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"使用NDK接口实现画中画功能开发（C/C++）","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/pipwindow-native","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用typeNode实现画中画功能开发（ArkTS）","permalink":"/harmonyos-docs-site/arkui/window-manager/window-pipwindow/pipwindow-typenode/"},"next":{"title":"画中画常见问题","permalink":"/harmonyos-docs-site/arkui/window-manager/window-pipwindow/pip-faqs/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/window-manager/window-pipwindow/pipwindow-native/pipwindow-native.md


const frontMatter = {
	title: '使用NDK接口实现画中画功能开发（C/C++）',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/pipwindow-native',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '使用NDK接口实现画中画功能开发（C/C++）';

const assets = {

};



const toc = [{
  "value": "约束与限制",
  "id": "约束与限制",
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
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "使用ndk接口实现画中画功能开发cc",
        children: "使用NDK接口实现画中画功能开发（C/C++）"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本文以视频播放为例，介绍通过NDK接口实现画中画功能的基本开发步骤。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(345025)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "从API version 20开始，支持使用NDK接口实现画中画功能开发。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "支持在Phone、PC/2in1、Tablet设备使用NDK接口实现画中画功能开发。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "画中画窗口中画面的呈现不通过传入XComponent Controller实现，而是通过渲染surfaceId（在开启画中画回调中获取）对应的组件实现。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "与typeNode实现方式相同，系统不缓存页面。如需进行页面操作，应用需要开启画中画生命周期监听，在对应周期内进行对应操作。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "不支持设置自动拉起画中画。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例中的视频播放器简易实现逻辑如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "通过OH_PictureInPicture_CreatePipConfig创建画中画参数配置器，并通过OH_PictureInPicture_SetPipMainWindowId、OH_PictureInPicture_SetPipTemplateType、OH_PictureInPicture_SetPipRect、OH_PictureInPicture_SetPipControlGroup、OH_PictureInPicture_SetPipNapiEnv接口在画中画参数配置器中设置初始配置信息。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "创建画中画控制器，后续可根据返回的控制器标识controllerId注册生命周期事件以及控制事件回调。通过OH_PictureInPicture_CreatePip接口创建画中画控制器实例，并缓存对应的控制器标识。建议在创建完成后立即调用OH_PictureInPicture_DestroyPipConfig销毁画中画参数配置器，以免发生内存泄漏。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "通过OH_PictureInPicture_RegisterStartPipCallback接口注册启动画中画回调，并根据返回的surfaceId渲染视频画面。同时应用可以按需注册其他需要监听的事件回调。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "通过OH_PictureInPicture_StartPip启动画中画。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "通过OH_PictureInPicture_UpdatePipContentSize更新媒体源尺寸信息。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "通过OH_PictureInPicture_StopPip关闭画中画。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "通过OH_PictureInPicture_UnregisterStartPipCallback解注册画中画启动回调，避免内存泄漏。同时应用可以按需解注册其他已注册的事件回调。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以上步骤涉及的各文件及示例可见下文。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Node-API模块注册，具体使用请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/coding/using-napi-interaction-with-cpp/napi-guidelines",
        children: "Native API在应用工程中的使用指导"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本文件仅作为参考示例，异常处理及错误码打印由开发者按需处理。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// napi_init.cpp\n#include \"napi/native_api.h\"\n#include <cstddef>\n#include <cstdint>\n#include <cstdio>\n#include <string>\n#include \"window_manager/oh_window_pip.h\"\n#include \"hilog/log.h\"\n#include \"js_native_api.h\"\n#include \"napi/native_api.h\"\n#include <cstdio>\n#include \"rawfile/raw_file_manager.h\"\n\n#define LOG_MSG_TAG \"PiPMain\"\n#define LOG(format, ...) ((void)OH_LOG_Print(LOG_APP, LOG_INFO, 0xFF00, LOG_MSG_TAG, format, ##__VA_ARGS__))\nnapi_ref jsCallback;\nnapi_env env_;\n\nnapi_ref jsLifecycleCallback;\nnapi_env lifeEnv_;\nint32_t g_minValue = 0;\nint32_t g_maxValue = 255;\n\ninline bool ConvertFromJsNumber(napi_env env, napi_value jsValue, int32_t& value)\n{\n    return napi_get_value_int32(env, jsValue, &value) == napi_ok;\n}\n\ninline bool ConvertFromJsNumber(napi_env env, napi_value jsValue, uint32_t& value)\n{\n    return napi_get_value_uint32(env, jsValue, &value) == napi_ok;\n}\n\ninline bool ConvertFromJsNumber(napi_env env, napi_value jsValue, int64_t& value)\n{\n    return napi_get_value_int64(env, jsValue, &value) == napi_ok;\n}\n\ninline bool ConvertFromJsNumber(napi_env env, napi_value jsValue, uint64_t& value)\n{\n    int64_t num;\n    auto res = napi_get_value_int64(env, jsValue, &num);\n    if (res == napi_ok) {\n        value = static_cast<uint64_t>(num);\n    }\n    return res == napi_ok;\n}\n\ninline bool ConvertFromJsNumber(napi_env env, napi_value jsValue, double& value)\n{\n    return napi_get_value_double(env, jsValue, &value) == napi_ok;\n}\n\ninline bool ConvertFromJsNumber(napi_env env, napi_value jsValue, bool& value)\n{\n    return napi_get_value_bool(env, jsValue, &value) == napi_ok;\n}\n\ninline bool ConvertFromJsNumber(napi_env env, napi_value jsValue, unsigned char& value)\n{\n    int32_t num;\n    if (napi_get_value_int32(env, jsValue, &num) != napi_ok) {\n        return false;\n    }\n    if (num < g_minValue || num > g_maxValue) {\n        return false; // 越界无效\n    }\n    value = static_cast<unsigned char>(num);\n    return true;\n}\n\ntemplate<class T>\nbool ConvertFromJsValue(napi_env env, napi_value jsValue, T& value)\n{\n    if (jsValue == nullptr) {\n        return false;\n    }\n    using ValueType = std::remove_cv_t<std::remove_reference_t<T>>;\n    if constexpr (std::is_same_v<ValueType, bool>) {\n        return napi_get_value_bool(env, jsValue, &value) == napi_ok;\n    } else if constexpr (std::is_arithmetic_v<ValueType>) {\n        return ConvertFromJsNumber(env, jsValue, value);\n    } else if constexpr (std::is_same_v<ValueType, std::string>) {\n        size_t len = 0;\n        if (napi_get_value_string_utf8(env, jsValue, nullptr, 0, &len) != napi_ok) {\n            return false;\n        }\n        auto buffer = std::make_unique<char[]>(len + 1);\n        size_t strLength = 0;\n        if (napi_get_value_string_utf8(env, jsValue, buffer.get(), len + 1, &strLength) == napi_ok) {\n            value = buffer.get();\n            return true;\n        }\n        return false;\n    } else if constexpr (std::is_enum_v<ValueType>) {\n        std::make_signed_t<ValueType> numberValue = 0;\n        if (!ConvertFromJsNumber(env, jsValue, numberValue)) {\n            return false;\n        }\n        value = static_cast<ValueType>(numberValue);\n        return true;\n    }\n    return false;\n}\n\nvoid PipStartPipCallback(uint32_t controllerId, uint8_t requestId, uint64_t surfaceId)\n{\n    if (jsCallback) {\n        napi_value global = nullptr;\n        napi_get_global(env_, &global);\n        size_t argc = 1;\n        std::string tStr = std::to_string(surfaceId);\n        const char* cStr = tStr.c_str();\n        size_t length = strlen(cStr);\n        napi_value str;\n        napi_status status = napi_create_string_utf8(env_, cStr, length, &str);\n        napi_value argv[1] = {str};\n        napi_value jsCallbackValue;\n        \n        napi_value result = nullptr;\n        if (!jsCallback) {\n            LOG(\"js callback is invalid\");\n        }\n        napi_get_reference_value(env_, jsCallback, &jsCallbackValue);\n        napi_call_function(env_, global, jsCallbackValue, argc, argv, &result);\n    }\n}\n\nvoid LifecycleCallback(uint32_t controllerId, PictureInPicture_PipState state, int32_t errcode)\n{\n    if (jsLifecycleCallback) {\n        napi_value global = nullptr;\n        napi_get_global(lifeEnv_, &global);\n        size_t argc = 1;\n        napi_value pipState = nullptr;\n        napi_create_int32(lifeEnv_, static_cast<int32_t> (state), &pipState);\n        napi_value argv[1] = {pipState};\n        napi_value jsCallbackValue;\n        \n        napi_value result = nullptr;\n        if (!jsCallback) {\n            LOG(\"js callback is invalid\");\n        }\n        napi_get_reference_value(lifeEnv_, jsLifecycleCallback, &jsCallbackValue);\n        napi_call_function(lifeEnv_, global, jsCallbackValue, argc, argv, &result);\n    }\n}\n\nclass PiPManager {\npublic:\n    static napi_value CreatePip(napi_env env, napi_callback_info info);\n    static napi_value StartPip(napi_env env, napi_callback_info info);\n    static napi_value RegisterStartPip(napi_env env, napi_callback_info info);\n    static napi_value DeletePip(napi_env env, napi_callback_info info);\n    static napi_value StopPip(napi_env env, napi_callback_info info);\n    static napi_value RegisterLifecycleListener(napi_env env, napi_callback_info info);\n    static void getElement(napi_env &env, uint32_t size, napi_value &controlGroupValue,\n                PictureInPicture_PipControlGroup controlGroup[]);\n};\n\nnapi_value PiPManager::CreatePip(napi_env env, napi_callback_info info)\n{\n    size_t argc = 1;\n    napi_value argv[1] = {nullptr};\n    napi_get_cb_info(env, info, &argc, argv, nullptr, nullptr);\n    napi_value config = argv[0];\n\n    napi_value mainWindowIdValue = nullptr;\n    napi_value pipTemplateTypeValue = nullptr;\n    napi_value widthValue = nullptr;\n    napi_value heightValue = nullptr;\n    napi_value controlGroupValue = nullptr;\n    napi_value pipControllerIdValue = nullptr;\n    \n    uint32_t controllerId = -1;\n    uint32_t mainWindowId = -1;\n    PictureInPicture_PipTemplateType pipTemplateType = PictureInPicture_PipTemplateType::VIDEO_PLAY;\n    uint32_t width = -1;\n    uint32_t height = -1;\n    \n    napi_get_named_property(env, config, \"mainWindowId\", &mainWindowIdValue);\n    napi_get_named_property(env, config, \"pipTemplateType\", &pipTemplateTypeValue);\n    napi_get_named_property(env, config, \"width\", &widthValue);\n    napi_get_named_property(env, config, \"height\", &heightValue);\n    napi_get_named_property(env, config, \"controlGroup\", &controlGroupValue);\n    napi_get_named_property(env, config, \"pipControllerId\", &pipControllerIdValue);\n    \n    ConvertFromJsValue(env, mainWindowIdValue, mainWindowId);\n    ConvertFromJsValue(env, pipTemplateTypeValue, pipTemplateType);\n    ConvertFromJsValue(env, widthValue, width);\n    ConvertFromJsValue(env, heightValue, height);\n    ConvertFromJsValue(env, pipControllerIdValue, controllerId);\n    \n    uint32_t size = 0;\n    napi_get_array_length(env, controlGroupValue, &size);\n    PictureInPicture_PipControlGroup controlGroup[size];\n\n    PiPManager::getElement(env, size, controlGroupValue, controlGroup);\n    \n    napi_value result = nullptr;\n    PictureInPicture_PipConfig pipConfig;\n    OH_PictureInPicture_CreatePipConfig(&pipConfig);\n    OH_PictureInPicture_SetPipMainWindowId(pipConfig, mainWindowId);\n    OH_PictureInPicture_SetPipTemplateType(pipConfig, pipTemplateType);\n    OH_PictureInPicture_SetPipRect(pipConfig, width, height);\n    OH_PictureInPicture_SetPipControlGroup(pipConfig, controlGroup, size);\n    OH_PictureInPicture_SetPipNapiEnv(pipConfig, env);\n    int32_t res = OH_PictureInPicture_CreatePip(pipConfig, &controllerId);\n    OH_PictureInPicture_DestroyPipConfig(&pipConfig);\n    napi_create_uint32(env, controllerId, &result);\n    return result;\n}\n\nvoid PiPManager::getElement(napi_env &env, uint32_t size, napi_value &controlGroupValue,\n    PictureInPicture_PipControlGroup controlGroup[])\n{\n    for (uint32_t i = 0; i < size; i++) {\n        napi_value getElementValue = nullptr;\n        napi_get_element(env, controlGroupValue, i, &getElementValue);\n        PictureInPicture_PipControlGroup controlType;\n        if (ConvertFromJsValue(env, getElementValue, controlType)) {\n            controlGroup[i] = controlType;\n        }\n        LOG(\"controlType: %{public}d\", controlType);\n    }\n}\n\nnapi_value PiPManager::StartPip(napi_env env, napi_callback_info info)\n{\n    size_t argc = 1;\n    napi_value argv[1] = {nullptr};\n    napi_get_cb_info(env, info, &argc, argv, nullptr, nullptr);\n    napi_value controlIdValue = argv[0];\n    uint32_t controlId = -1;\n    ConvertFromJsValue(env, controlIdValue, controlId);\n    napi_value resultValue = nullptr;\n    int32_t result = OH_PictureInPicture_StartPip(controlId);\n    napi_create_uint32(env, result, &resultValue);\n    return resultValue;\n}\n\nnapi_value PiPManager::RegisterStartPip(napi_env env, napi_callback_info info)\n{\n    size_t argc = 2;\n    napi_value argv[2] = {nullptr};\n    napi_get_cb_info(env, info, &argc, argv, nullptr, nullptr);\n    napi_value controllerIdValue = argv[0];\n    uint32_t controlId = -1;\n    napi_status status = napi_create_reference(env, argv[1], 1, &jsCallback);\n    env_ = env;\n    ConvertFromJsValue(env, controllerIdValue, controlId);\n    napi_value resultValue = nullptr;\n    int32_t result = OH_PictureInPicture_RegisterStartPipCallback(controlId, PipStartPipCallback);\n    napi_create_uint32(env, result, &resultValue);\n    return resultValue;\n}\n\nnapi_value PiPManager::DeletePip(napi_env env, napi_callback_info info)\n{\n    size_t argc = 1;\n    napi_value argv[1] = {nullptr};\n    napi_get_cb_info(env, info, &argc, argv, nullptr, nullptr);\n    uint32_t controlId = -1;\n    ConvertFromJsValue(env, argv[0], controlId);\n    napi_value resultValue = nullptr;\n    int32_t result = OH_PictureInPicture_DeletePip(controlId);\n    napi_create_uint32(env, result, &resultValue);\n    return resultValue;\n}\n\nnapi_value PiPManager::StopPip(napi_env env, napi_callback_info info)\n{\n    size_t argc = 1;\n    napi_value argv[1] = {nullptr};\n    napi_get_cb_info(env, info, &argc, argv, nullptr, nullptr);\n    uint32_t controlId = -1;\n    napi_value resultValue = nullptr;\n\n    ConvertFromJsValue(env, argv[0], controlId);\n    uint32_t result = OH_PictureInPicture_StopPip(controlId);\n    napi_create_uint32(env, result, &resultValue);\n    return resultValue;\n}\n\nnapi_value PiPManager::RegisterLifecycleListener(napi_env env, napi_callback_info info)\n{\n    size_t argc = 2;\n    napi_value argv[2] = {nullptr};\n    napi_get_cb_info(env, info, &argc, argv, nullptr, nullptr);\n    uint32_t controlId = -1;\n    napi_status status = napi_create_reference(env, argv[1], 1, &jsLifecycleCallback);\n    lifeEnv_ = env;\n    if (status != napi_ok) {\n        LOG(\"register failed %{public}d\", status);\n    }\n    ConvertFromJsValue(env, argv[0], controlId);\n    \n    napi_value resultValue = nullptr;\n    int32_t result = OH_PictureInPicture_RegisterLifecycleListener(controlId, LifecycleCallback);\n    napi_create_uint32(env, result, &resultValue);\n    return resultValue;\n}\n\nEXTERN_C_START\nstatic napi_value Init(napi_env env, napi_value exports)\n{\n    napi_property_descriptor desc[] = {\n        {\"createPip\", nullptr, PiPManager::CreatePip, nullptr, nullptr, nullptr, napi_default, nullptr},\n        {\"startPip\", nullptr, PiPManager::StartPip, nullptr, nullptr, nullptr, napi_default, nullptr},\n        {\"registerStartPip\", nullptr, PiPManager::RegisterStartPip, nullptr, nullptr, nullptr, napi_default, nullptr},\n        {\"deletePip\", nullptr, PiPManager::DeletePip, nullptr, nullptr, nullptr, napi_default, nullptr},\n        {\"stopPip\", nullptr, PiPManager::StopPip, nullptr, nullptr, nullptr, napi_default, nullptr},\n        {\"registerLifecycleListener\", nullptr, PiPManager::RegisterLifecycleListener,\n            nullptr, nullptr, nullptr, napi_default, nullptr},\n    };\n    napi_define_properties(env, exports, sizeof(desc) / sizeof(desc[0]), desc);\n    return exports;\n}\nEXTERN_C_END\n\nstatic napi_module demoModule = {\n    .nm_version = 1,\n    .nm_flags = 0,\n    .nm_filename = nullptr,\n    .nm_register_func = Init,\n    .nm_modname = \"entry\",\n    .nm_priv = ((void*)0),\n    .reserved = { 0 },\n};\nextern \"C\" __attribute__((constructor)) void RegisterEntryModule(void)\n{\n    napi_module_register(&demoModule);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Node-API接口声明。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Index.d.ts\nexport enum PiPControlGroup {\n  VIDEO_PLAY_VIDEO_PREVIOUS_NEXT = 101,\n  VIDEO_PLAY_FAST_FORWARD_BACKWARD = 102,\n  VIDEO_CALL_MICROPHONE_SWITCH = 201,\n  VIDEO_CALL_HANG_UP_BUTTON = 202,\n  VIDEO_CALL_CAMERA_SWITCH = 203,\n  VIDEO_CALL_MUTE_SWITCH = 204,\n  VIDEO_MEETING_HANG_UP_BUTTON = 301,\n  VIDEO_MEETING_CAMERA_SWITCH = 302,\n  VIDEO_MEETING_MUTE_SWITCH = 303,\n  VIDEO_MEETING_MICROPHONE_SWITCH = 304,\n  VIDEO_LIVE_VIDEO_PLAY_PAUSE = 401,\n  VIDEO_LIVE_MUTE_SWITCH = 402,\n}\nexport interface PiPConfig {\n  mainWindowId: number;\n  pipTemplateType: number;\n  width: number;\n  height: number;\n  controlGroup: Array<PiPControlGroup>;\n}\nexport declare const createPip: (config: PiPConfig) => number;\nexport declare const startPip: (controllerId: number) => number;\nexport declare const registerStartPip: (controllerId: number, jsCallback: Function) => number;\nexport declare const deletePip: (controllerId: number) => number;\nexport declare const stopPip: (controllerId: number) => number;\nexport declare const registerLifecycleListener: (controllerId: number, jsCallback: Function) => number;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CMakeLists.txt文件，用于生成对应的库文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# CMakeLists.txt\n# the minimum version of CMake.\ncmake_minimum_required(VERSION 3.5.0)\nset(CMAKE_CXX_STANDARD 17)\nset(CMAKE_CXX_STANDARD_REQUIRED ON)\nproject(MyApplication)\nset(NATIVERENDER_ROOT_PATH ${CMAKE_CURRENT_SOURCE_DIR})\nif(DEFINED PACKAGE_FIND_FILE)\n    include(${PACKAGE_FIND_FILE})\nendif()\ninclude_directories(${NATIVERENDER_ROOT_PATH}\n                    ${NATIVERENDER_ROOT_PATH}/include)\nadd_library(entry SHARED napi_init.cpp)\ntarget_link_libraries(entry PUBLIC libace_napi.z.so libace_ndk.z.so libnative_window_manager.so libhilog_ndk.z.so)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "EntryAbility文件示例。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// entryability/EntryAbility.ets\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { AbilityConstant, ConfigurationConstant, UIAbility, Want } from '@kit.AbilityKit';\nimport { window } from '@kit.ArkUI';\nimport { PipManager } from '../nodefree/PipManager';\nimport { Logger } from '../util/LogUtil';\n\nexport default class EntryAbility extends UIAbility {\n  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {\n      AppStorage.setOrCreate('UIAbilityContext', this.context);\n      this.context.getApplicationContext().setColorMode(ConfigurationConstant.ColorMode.COLOR_MODE_NOT_SET);\n  }\n\n  onDestroy(): void {\n    Logger.info('testTag', '%{public}s', 'Ability onDestroy');\n  }\n\n  onWindowStageCreate(windowStage: window.WindowStage): void {\n    // Main window is created, set main page for this ability\n    Logger.info('testTag', '%{public}s', 'Ability onWindowStageCreate');\n    let windowClass: window.Window | undefined = undefined;\n    let windowClassId: number = -1;\n\n    windowStage.getMainWindow().then((window) => {\n      if (window == null) {\n        Logger.error('Failed to obtaining the window. Cause: The data is empty');\n        return;\n      }\n      windowClass = window;\n      windowClass.setUIContent('pages/Index');\n      windowClassId = windowClass.getWindowProperties().id;\n      AppStorage.setOrCreate('windowId', windowClassId);\n      Logger.info('Succeeded in obtaining the window')\n\n      let ctx = window.getUIContext();\n      AppStorage.setOrCreate('UIContext', ctx);\n      // 通过主窗口UIContext创建typeNode节点\n      PipManager.getInstance().makeTypeNode(ctx);\n    }).catch((err: BusinessError) => {\n      Logger.error(`Failed to obtaining the window. Cause code: ${err.code}, message: ${err.message}`);\n    });\n    windowStage.loadContent('pages/Index', (err) => {\n      if (err.code) {\n        Logger.error('testTag', 'Failed to load the content. Cause: %{public}s', JSON.stringify(err));\n        return;\n      }\n      Logger.info('testTag', 'Succeeded in loading the content.');\n    });\n  }\n  onWindowStageDestroy(): void {\n    // Main window is destroyed, release UI related resources\n    Logger.info('testTag', '%{public}s', 'Ability onWindowStageDestroy');\n  }\n\n  onForeground(): void {\n    // Ability has brought to foreground\n    Logger.info('testTag', '%{public}s', 'Ability onForeground');\n  }\n\n  onBackground(): void {\n    // Ability has back to background\n    Logger.info('testTag', '%{public}s', 'Ability onBackground');\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["示例中的视频播放需要使用AVPlayer，具体实现可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/media-kit/media-kit-dev--arkts/media-playback-arkts/video-playback",
        children: "视频播放"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// model/AVPlayer.ets\n// 视频播放器简单实现\nimport media from '@ohos.multimedia.media';\nimport common from '@ohos.app.ability.common';\nimport { BusinessError } from '@ohos.base';\nimport resourceManager from '@ohos.resourceManager';\nimport { Logger } from '../util/LogUtil';\n\nexport class AVPlayer {\n  public avPlayer?: media.AVPlayer;\n  private count: number = 0;\n  private surfaceID: string; // surfaceID用于播放画面显示，具体的值需要通过XComponent接口获取，相关文档链接见上面XComponent创建方法\n  public jumpNext: boolean = false;\n  public type: number = 0; // 用于区分主界面的player还是pip界面的player\n  public state_: string = ''\n  public playStatus: boolean = true;\n\n  constructor(surfaceID: string, type: number) {\n    this.surfaceID = surfaceID;\n    this.type = type\n  }\n\n  setSurfaceId(id: string) {\n    if (this.avPlayer) {\n      this.surfaceID = id;\n      this.avPlayer.surfaceId = id;\n    }\n  }\n\n  updatePlayStatus(status: boolean) {\n    this.playStatus = status;\n  }\n  // 注册avplayer回调函数\n  setAVPlayerCallback() {\n    // seek操作结果回调函数\n    this.avPlayer?.on('seekDone', (seekDoneTime: number) => {\n      Logger.info(`PipMain AVPlayer seek succeeded, seek time is ${seekDoneTime}`);\n    })\n    // error回调监听函数,当avPlayer在操作过程中出现错误时调用reset接口触发重置流程\n    this.avPlayer?.on('error', (err: BusinessError) => {\n      Logger.error(`PipMain Invoke avPlayer failed, code is ${err.code}, message is ${err.message}`);\n      this.avPlayer?.reset(); // 调用reset重置资源，触发idle状态\n    })\n    // 状态机变化回调函数\n    this.avPlayer?.on('stateChange', async (state, reason) => {\n      if (!this.avPlayer) {\n        return;\n      }\n      this.state_ = state;\n      switch (state) {\n        case 'idle': // 成功调用reset接口后触发该状态机上报\n          Logger.info('AVPlayer state idle called.');\n          if (!this.jumpNext) {\n            this.avPlayer.release(); // 调用release接口销毁实例对象\n          } else {\n            let uiContext: UIContext = AppStorage.get('UIAbilityContext') as UIContext;\n            let context = uiContext.getHostContext() as common.UIAbilityContext;\n            let fileDescriptor: resourceManager.RawFileDescriptor;\n            fileDescriptor = await context.resourceManager.getRawFd('640x360.mp4');\n            // 为fdSrc赋值触发initialized状态机上报\n            this.avPlayer.fdSrc = fileDescriptor;\n          }\n          break;\n        case 'initialized': // avplayer 设置播放源后触发该状态上报\n          Logger.info('initialized called.');\n          this.avPlayer.surfaceId = this.surfaceID; // 设置显示画面，当播放的资源为纯音频时无需设置\n          this.avPlayer.prepare().then(() => {\n            Logger.info('AVPlayer prepare succeeded.');\n          }, (err: BusinessError) => {\n            Logger.error(`Invoke prepare failed, code is ${err.code}, message is ${err.message}`);\n          });\n          break;\n        case 'prepared': // prepare调用成功后上报该状态机\n          Logger.info('AVPlayer state prepared called.');\n          this.avPlayer.play(); // 调用播放接口开始播放\n          break;\n        case 'playing': // play成功调用后触发该状态机上报\n          Logger.info('AVPlayer state playing called.');\n          this.jumpNext = false;\n          this.count++;\n          break;\n        case 'paused': // pause成功调用后触发该状态机上报\n          Logger.info('AVPlayer state paused called.');\n          // this.avPlayer.play(); // 再次播放接口开始播放\n          break;\n        case 'completed': // 播放结束后触发该状态机上报\n          Logger.info('AVPlayer state completed called.');\n          this.playNext();\n          ; //调用播放结束接口\n          break;\n        case 'stopped': // stop接口成功调用后触发该状态机上报\n          Logger.info('AVPlayer state stopped called.');\n          this.avPlayer.reset(); // 调用reset接口初始化avplayer状态\n          break;\n        case 'released':\n          Logger.info('AVPlayer state released called.');\n          break;\n        default:\n          Logger.info('AVPlayer state unknown called.');\n          break;\n      }\n    })\n    this.avPlayer?.on('videoSizeChange', (width: number, height: number) => {\n      Logger.info('videoSizeChange width:' + width + ' height:' + height);\n      let context = AppStorage.get('UIAbilityContext') as common.UIAbilityContext;\n    })\n  }\n\n  // 以下demo为使用资源管理接口获取打包在HAP内的媒体资源文件并通过fdSrc属性进行播放示例\n  async avPlayerFdSrc() {\n    // 创建avPlayer实例对象\n    Logger.info('avPlayerFdSrc');\n    this.avPlayer = await media.createAVPlayer();\n\n    // 创建状态机变化回调函数\n    this.setAVPlayerCallback();\n    // 通过UIAbilityContext的resourceManager成员的getRawFd接口获取媒体资源播放地址\n    // 返回类型为{fd,offset,length},fd为HAP包fd地址，offset为媒体资源偏移量，length为播放长度\n\n    let context = AppStorage.get('UIAbilityContext') as common.UIAbilityContext;\n    let fileDescriptor = await context.resourceManager.getRawFd('640x360.mp4');\n    Logger.info('getRawFd');\n    // 为fdSrc赋值触发initialized状态机上报\n    this.avPlayer.fdSrc = fileDescriptor;\n  }\n\n  async playNext() {\n    if (this.avPlayer === null) {\n      return;\n    }\n    this.jumpNext = true;\n    this.avPlayer?.stop();\n  }\n\n  play() {\n    if (this.state_ === 'paused') {\n      this.avPlayer?.play();\n    }\n  }\n\n  pause() {\n    if (this.state_ === 'playing') {\n      this.avPlayer?.pause();\n    }\n  }\n\n  stopAvPlayer() {\n    Logger.info('stopAvPlayer>>>')\n    if (!this.avPlayer) {\n      return;\n    }\n    this.avPlayer.stop();\n    Logger.info('stopping>>>');\n    this.avPlayer.reset();\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用界面布局文件，用于演示画中画基本功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// pages/Index.ets\n// 应用首页\nimport { router } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct Index {\n  pathStack: NavPathStack = new NavPathStack();\n\n  build() {\n    Navigation(this.pathStack) {\n      Scroll() {\n        Flex({ direction: FlexDirection.Column }) {\n          // ...\n          this.featureButton('使用NDK接口实现画中画（C++）', this.ndkImplement);\n        }\n      }\n    }\n    .hideBackButton(true)\n    .titleMode(NavigationTitleMode.Mini)\n    .backgroundColor('#FFF1F3F5')\n    .mode(NavigationMode.Stack)\n    .title('画中画SampleCode')\n  }\n\n  @Builder\n  featureButton(buttonText: string, callbackOnClick: () => void) {\n    Button({ type: ButtonType.Normal }) {\n      Row() {\n        Column() {\n          Text(buttonText)\n            .fontSize(24)\n            .fontWeight(FontWeight.Bold)\n            .fontColor('#000000')\n          Rect()\n            .radius(1)\n            .fill('#0A59F7')\n            .height(2)\n            .width(30)\n        }\n        .width('100%')\n        .alignItems(HorizontalAlign.Start)\n      }\n      .width('100%')\n    }\n    .width('90%')\n    .padding('5%')\n    .margin({ top: '3%', bottom: '2%', right: '3%' })\n    .backgroundColor('#FFFFFF')\n    .borderRadius(20)\n    .onClick(callbackOnClick)\n  }\n\n  // ...\n  private ndkImplement = () => {\n    this.getUIContext().getRouter().pushUrl({ url: 'pages/NDKImplementPage' }, router.RouterMode.Standard)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// pages/NDKImplementIndexPage.ets\n// 画中画功能演示界面\nimport testNapi, {PiPConfig} from 'libentry.so';\nimport { PiPWindow } from '@kit.ArkUI';\nimport { AVPlayer } from '../model/NDKAVPlayer';\nimport { Logger } from '../util/LogUtil';\n\nconst TAG = 'PipMain';\nexport enum PiPControlGroup {\n  VIDEO_PLAY_VIDEO_PREVIOUS_NEXT = 101,\n  VIDEO_PLAY_FAST_FORWARD_BACKWARD = 102,\n  VIDEO_CALL_MICROPHONE_SWITCH = 201,\n  VIDEO_CALL_HANG_UP_BUTTON = 202,\n  VIDEO_CALL_CAMERA_SWITCH = 203,\n  VIDEO_CALL_MUTE_SWITCH = 204,\n  VIDEO_MEETING_HANG_UP_BUTTON = 301,\n  VIDEO_MEETING_CAMERA_SWITCH = 302,\n  VIDEO_MEETING_MUTE_SWITCH = 303,\n  VIDEO_MEETING_MICROPHONE_SWITCH = 304,\n  VIDEO_LIVE_VIDEO_PLAY_PAUSE = 401,\n  VIDEO_LIVE_MUTE_SWITCH = 402,\n}\n\n@Entry\n@Component\nstruct NDKImplementIndexPage {\n  @State message: string = 'Hello World';\n  mXComponentController: XComponentController | null = new XComponentController();\n  private controllerId: number = -1;\n  private contentWidth: number = 1920;\n  private contentHeight: number = 1080;\n  private pipType: PiPWindow.PiPTemplateType = PiPWindow.PiPTemplateType.VIDEO_PLAY;\n  private pipControlGroups: Array<PiPControlGroup> = [];\n  player?: AVPlayer;\n  surfaceId = '';\n\n  changeSurface = (surfaceId: string) => {\n    if(this.player) {\n      this.player.setSurfaceId(surfaceId);\n      return;\n    }\n    Logger.info(`[${TAG}] change surface failed`);\n  }\n\n  private onStateChange = (state: PiPWindow.PiPState) => {\n    switch(state) {\n      case PiPWindow.PiPState.ABOUT_TO_START:\n        Logger.info(`[${TAG}] ABOUT_TO_START`);\n        break;\n      case PiPWindow.PiPState.STARTED:\n        Logger.info(`[${TAG}] STARTED`);\n        break;\n      case PiPWindow.PiPState.ABOUT_TO_STOP:\n        Logger.info(`[${TAG}] ABOUT_TO_STOP`);\n        break;\n      case PiPWindow.PiPState.STOPPED:\n        if (this.mXComponentController) {\n          this.changeSurface(this.mXComponentController?.getXComponentSurfaceId());\n        }\n        Logger.info(`[${TAG}] STOPPED`);\n        break;\n      case PiPWindow.PiPState.ABOUT_TO_RESTORE:\n        this.changeSurface(this.surfaceId);\n        Logger.info(`[${TAG}] ABOUT_TO_RESTORE`);\n        break;\n      case PiPWindow.PiPState.ERROR:\n        Logger.info(`[${TAG}] ERROR`);\n        break;\n      default:\n        break;\n    }\n  }\n\n\n  build() {\n    RelativeContainer() {\n      Row({ space: 20 }) {\n\n        Button('更换模板')\n          .bindMenu([\n            {\n              value: '视频',\n              action: () => {\n                this.pipType = PiPWindow.PiPTemplateType.VIDEO_PLAY;\n                this.pipControlGroups = [PiPControlGroup.VIDEO_PLAY_VIDEO_PREVIOUS_NEXT];\n              }\n            },\n            {\n              value: '通话',\n              action: () => {\n                this.pipType = PiPWindow.PiPTemplateType.VIDEO_CALL;\n                this.pipControlGroups = [PiPControlGroup.VIDEO_CALL_HANG_UP_BUTTON,\n                  PiPControlGroup.VIDEO_CALL_CAMERA_SWITCH, PiPControlGroup.VIDEO_CALL_MICROPHONE_SWITCH];\n              }\n            },\n            {\n              value: '会议',\n              action: () => {\n                this.pipType = PiPWindow.PiPTemplateType.VIDEO_MEETING;\n                this.pipControlGroups = [PiPControlGroup.VIDEO_MEETING_MICROPHONE_SWITCH,\n                  PiPControlGroup.VIDEO_MEETING_HANG_UP_BUTTON,\n                  PiPControlGroup.VIDEO_MEETING_CAMERA_SWITCH];\n              }\n            },\n            {\n              value: '直播',\n              action: () => {\n                this.pipType = PiPWindow.PiPTemplateType.VIDEO_LIVE;\n                this.pipControlGroups = [PiPControlGroup.VIDEO_LIVE_VIDEO_PLAY_PAUSE,\n                  PiPControlGroup.VIDEO_LIVE_MUTE_SWITCH];\n              }\n            }\n          ])\n      }\n      .size({ width: '100%', height: 60 })\n      .backgroundColor('#DDDDDD')\n      .justifyContent(FlexAlign.SpaceAround)\n      .alignRules({\n        top: { anchor: '__container__', align: VerticalAlign.Top },\n        middle: { anchor: '__container__', align: HorizontalAlign.Center }\n      })\n      .id('pip_type_control')\n      XComponent({\n        type: XComponentType.SURFACE,\n        controller: this.mXComponentController\n      })\n        .onLoad(() => {\n          if (this.mXComponentController) {\n            this.surfaceId = this.mXComponentController.getXComponentSurfaceId();\n          }\n          this.player = new AVPlayer(this.surfaceId, 1);\n          this.player.avPlayerFdSrc();\n        })\n        .onDestroy(() => {\n          Logger.info(`[${TAG}] XComponent onDestroy`);\n        })\n        .size({ width: '100%', height: '800px' })\n        .margin({ top: 10 })\n        .backgroundColor('#888888')\n        .alignRules({\n          bottom: { anchor: '__container__', align: VerticalAlign.Center },\n          middle: { anchor: '__container__', align: HorizontalAlign.Center }\n        })\n        .id('x_component')\n        .size({ width: '100%', height: '800px' })\n      Row({ space: 0 }) {\n        Button('创建画中画')\n          .onClick(() => {\n            let windowId: number | undefined = AppStorage.get('windowId');\n            let config: PiPConfig = {\n              mainWindowId: windowId as number,\n              pipTemplateType: this.pipType,\n              width: this.contentWidth,\n              height: this.contentHeight,\n              controlGroup: this.pipControlGroups\n            }\n            this.controllerId = testNapi.createPip(config);\n            testNapi.registerStartPip(this.controllerId, this.changeSurface);\n            testNapi.registerLifecycleListener(this.controllerId, this.onStateChange);\n          })\n        Button('开启画中画')\n          .onClick(() => {\n            testNapi.startPip(this.controllerId);\n          })\n      }\n      .size({ width: '100%', height: 60 })\n      .alignRules({\n        top: { anchor: 'x_component', align: VerticalAlign.Bottom },\n        left: { anchor: '__container__', align: HorizontalAlign.Start }\n      })\n      .id('pip_control')\n      Row({ space: 0 }) {\n        Button('关闭画中画')\n          .onClick(() => {\n            testNapi.stopPip(this.controllerId);\n          })\n        Button('删除控制器')\n          .onClick(() => {\n            testNapi.deletePip(this.controllerId);\n          })\n      }\n      .size({ width: '100%', height: 60 })\n      .alignRules({\n        top: { anchor: 'pip_control', align: VerticalAlign.Bottom },\n        left: { anchor: '__container__', align: HorizontalAlign.Start }\n      })\n    }\n    .size({ width: '100%', height: '100%' })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以上示例代码对应的示意图如下所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(504037)/* ["default"] */.A) + "",
        width: "640",
        height: "1480"
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
504037(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478181-70252eb7715bd3a0b6b3eca303007170.gif");

},
345025(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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