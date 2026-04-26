"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["155789"], {
986132(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_basicfun_basic_services_kit_print_native_print_file_native_print_file_md_95c_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-basicfun-basic-services-kit-print-native-print-file-native-print-file-md-95c.json
var site_docs_system_basicfun_basic_services_kit_print_native_print_file_native_print_file_md_95c_namespaceObject = JSON.parse('{"id":"system-basicfun/basic-services-kit/print/native-print-file/native-print-file","title":"文件打印（C/C++）","description":"HarmonyOS提供的两种打印方式","source":"@site/docs/system-basicfun/basic-services-kit/print/native-print-file/native-print-file.md","sourceDirName":"system-basicfun/basic-services-kit/print/native-print-file","slug":"/system-basicfun/basic-services-kit/print/native-print-file/","permalink":"/harmonyos-docs-site/system-basicfun/basic-services-kit/print/native-print-file/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"文件打印（C/C++）","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/native-print-file","kit":"system/basic-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"压缩与解压","permalink":"/harmonyos-docs-site/system-basicfun/basic-services-kit/compress/deflate-and-inflate/"},"next":{"title":"打印扩展能力","permalink":"/harmonyos-docs-site/system-basicfun/basic-services-kit/print/printextensionabilityguide/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-basicfun/basic-services-kit/print/native-print-file/native-print-file.md


const frontMatter = {
	title: '文件打印（C/C++）',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/native-print-file',
	kit: 'system/basic-services',
	last_updated: '2026-04-22'
};
const contentTitle = '文件打印（C/C++）';

const assets = {

};



const toc = [{
  "value": "HarmonyOS提供的两种打印方式",
  "id": "harmonyos提供的两种打印方式",
  "level": 2
}, {
  "value": "步骤1. 引用NDK头文件",
  "id": "步骤1-引用ndk头文件",
  "level": 3
}, {
  "value": "步骤2. 在CMake脚本中添加动态链接库",
  "id": "步骤2-在cmake脚本中添加动态链接库",
  "level": 3
}, {
  "value": "步骤3. 绑定页面和打印服务生命周期",
  "id": "步骤3-绑定页面和打印服务生命周期",
  "level": 3
}, {
  "value": "步骤4. 通过接口拉起系统打印预览界面下发任务",
  "id": "步骤4-通过接口拉起系统打印预览界面下发任务",
  "level": 3
}, {
  "value": "步骤5. 通过打印接口直接下发打印任务",
  "id": "步骤5-通过打印接口直接下发打印任务",
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
    p: "p",
    pre: "pre",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "文件打印cc",
        children: "文件打印（C/C++）"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "harmonyos提供的两种打印方式",
      children: "HarmonyOS提供的两种打印方式"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "#%E6%AD%A5%E9%AA%A44-%E9%80%9A%E8%BF%87%E6%8E%A5%E5%8F%A3%E6%8B%89%E8%B5%B7%E7%B3%BB%E7%BB%9F%E6%89%93%E5%8D%B0%E9%A2%84%E8%A7%88%E7%95%8C%E9%9D%A2%E4%B8%8B%E5%8F%91%E4%BB%BB%E5%8A%A1",
        children: "方式一"
      }), "：应用通过接口拉起系统打印预览界面。适合没有实现打印预览能力的应用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "#%E6%AD%A5%E9%AA%A45-%E9%80%9A%E8%BF%87%E6%89%93%E5%8D%B0%E6%8E%A5%E5%8F%A3%E7%9B%B4%E6%8E%A5%E4%B8%8B%E5%8F%91%E6%89%93%E5%8D%B0%E4%BB%BB%E5%8A%A1",
        children: "方式二"
      }), "：应用通过接口指定打印文件和选项直接下发打印任务，适合已经实现打印预览能力的应用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(880620)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用打印服务，需", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions",
        children: "声明权限"
      }), "：ohos.permission.PRINT。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当不再使用打印服务时，调用OH_Print_Release()释放打印客户端资源并取消事件订阅。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["c++接口需要在NDK工程中使用，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ndk-development-overview",
        children: "NDK开发导读"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "步骤1-引用ndk头文件",
      children: "步骤1. 引用NDK头文件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "初始路径为entry/src/main/cpp/types/napi_init.cpp # C++ 源码目录 NAPI 初始化入口（桥接 ArkTS 与 C++）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include \"hilog/log.h\"\n#include \"napi/native_api.h\"\n#include \"BasicServicesKit/ohprint.h\"\n\n#undef LOG_TAG\n#define LOG_TAG \"print c/c++\"\n#define LOGE(...) OH_LOG_ERROR(LOG_APP, ##__VA_ARGS__)\n#define LOGI(...) OH_LOG_INFO(LOG_APP, ##__VA_ARGS__)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "初始路径为entry/src/main/ets/pages/Index.ets # ArkTS 源码目录主页面。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\nimport { testNapi } from 'libentry.so';\nimport { Context } from '@kit.AbilityKit';\n\nclass HiLog {\n  static info(...args:string[]): void {\n    hilog.info(0x0, \"print c/c++ \", '%{public}s', `${args.join(' ')}`);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "步骤2-在cmake脚本中添加动态链接库",
      children: "步骤2. 在CMake脚本中添加动态链接库"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "初始路径为entry/src/main/cpp/types/CMakeLists.txt # C++ 源码目录 CMake 构建配置。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "target_link_libraries(entry PUBLIC\n    libace_napi.z.so\n    libhilog_ndk.z.so\n    libohprint.so\n)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "步骤3-绑定页面和打印服务生命周期",
      children: "步骤3. 绑定页面和打印服务生命周期"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "建议将打印服务初始化和释放与使用系统打印能力的页面的生命周期绑定。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "封装c++接口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// napi_init.cpp\n\nstatic void PrinterDiscoveryCallback(Print_DiscoveryEvent event, const Print_PrinterInfo *printerInfo)\n{\n    // 发现打印设备事件，以设备Id作为唯一标识符\n    if (printerInfo == nullptr) {\n        LOGE(\"printerInfo is nullptr\");\n        return;\n    }\n    // 开发者需根据具体事件实现相关逻辑\n    switch (event) {\n        // 探测到一台打印设备，可能会重复上报\n        case PRINTER_DISCOVERED:\n            LOGI(\"do something, printer[%{public}s] discovered\", printerInfo->printerId);\n            break;\n        // 打印设备从发现列表移除，仅上报一次\n        case PRINTER_LOST:\n            LOGI(\"do something, printer[%{public}s] lost\", printerInfo->printerId);\n            break;\n        // 打印设备开始连接，由OH_Print_ConnectPrinter触发\n        case PRINTER_CONNECTING:\n            LOGI(\"do something, printer[%{public}s] on connecting\", printerInfo->printerId);\n            break;\n        // 打印设备成功连接，由OH_Print_ConnectPrinter触发\n        case PRINTER_CONNECTED:\n            LOGI(\"do something, printer[%{public}s] connected\", printerInfo->printerId);\n            break;\n        default:\n            break;\n    }\n}\n\nstatic void PrinterChangeCallback(Print_PrinterEvent event, const Print_PrinterInfo *printerInfo)\n{\n    // 以设备Id作为唯一标识符\n    if (printerInfo == nullptr) {\n        LOGE(\"printerInfo is nullptr\");\n        return;\n    }\n    // 开发者需根据具体事件实现相关逻辑\n    switch (event) {\n        // 打印设备新增到已添加设备列表\n        case PRINTER_ADDED:\n            LOGI(\"do something, printer[%{public}s] added\", printerInfo->printerId);\n            break;\n        // 打印设备从已添加设备列表移除\n        case PRINTER_DELETED:\n            LOGI(\"do something, printer[%{public}s] deleted\", printerInfo->printerId);\n            break;\n        // 打印设备状态变更\n        case PRINTER_STATE_CHANGED:\n            LOGI(\"do something, printer[%{public}s] state change to %{public}d\",\n                 printerInfo->printerId, printerInfo->printerState);\n            break;\n        // 打印设备基础属性变更\n        case PRINTER_INFO_CHANGED:\n            LOGI(\"do something, printer[%{public}s] info changed\", printerInfo->printerId);\n            break;\n        // 打印设备首选项属性\n        case PRINTER_PREFERENCE_CHANGED:\n            LOGI(\"do something, printer[%{public}s] preference changed\", printerInfo->printerId);\n            break;\n        default:\n            break;\n    }\n}\n\nstatic napi_value NativeInit(napi_env env, napi_callback_info info)\n{\n    // 初始化打印服务\n    Print_ErrorCode ret = OH_Print_Init();\n    LOGI(\"nativeInit, ret = %{public}d\", ret);\n    napi_value n_ret = nullptr;\n    napi_get_boolean(env, !ret, &n_ret);\n    if (ret == 0) {\n        // 订阅已添加设备状态变更事件\n        Print_ErrorCode error = OH_Print_RegisterPrinterChangeListener(PrinterChangeCallback);\n        LOGI(\"OH_Print_RegisterPrinterChangeListener, ret = %{public}d\", error);\n        // 订阅设备发现相关事件\n        error = OH_Print_StartPrinterDiscovery(PrinterDiscoveryCallback);\n        LOGI(\"OH_Print_StartPrinterDiscovery, ret = %{public}d\", error);\n    }\n    return n_ret;\n}\n\nstatic napi_value NativeRelease(napi_env env, napi_callback_info info)\n{\n    // 取消订阅已添加设备状态变更事件\n    OH_Print_UnregisterPrinterChangeListener();\n    // 取消订阅设备发现相关事件\n    OH_Print_StopPrinterDiscovery();\n    // 释放打印服务\n    Print_ErrorCode ret = OH_Print_Release();\n    LOGI(\"nativeInit, ret = %{public}d\", ret);\n    napi_value n_ret = nullptr;\n    napi_get_boolean(env, !ret, &n_ret);\n    return n_ret;\n}\n\n// 添加napi接口声明\nEXTERN_C_START\nstatic napi_value Init(napi_env env, napi_value exports)\n{\n    napi_property_descriptor desc[] = {\n        { \"nativeInit\", nullptr, NativeInit, nullptr, nullptr, nullptr, napi_default, nullptr },\n        { \"nativeRelease\", nullptr, NativeRelease, nullptr, nullptr, nullptr, napi_default, nullptr },\n    };\n    napi_define_properties(env, exports, sizeof(desc) / sizeof(desc[0]), desc);\n    return exports;\n}\nEXTERN_C_END\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用侧在页面被拉起的生命周期初始化，在页面关掉时释放。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Index.ets\n\n@Entry\n@Component\nstruct Index {\n  // 页面展示到屏幕时，初始化打印服务\n  aboutToAppear(): void {\n    testNapi.nativeInit();\n  }\n  // 页面离开到屏幕时\n  aboutToDisappear(): void {\n    testNapi.nativeRelease();\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "步骤4-通过接口拉起系统打印预览界面下发任务",
      children: "步骤4. 通过接口拉起系统打印预览界面下发任务"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "封装c++接口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// napi_init.cpp\n\n// WriteFile 由开发者实现，示例仅为简单的文件拷贝。根据当前用户修改后的打印参数，若需要更新打印文件可重新写入系统提供的fd中\nstatic uint32_t WriteFile(uint32_t fd, const Print_PrintAttributes *oldAttrs, const Print_PrintAttributes *newAttrs){\n    // 沙箱内合法路径\n    const char* filePath = \"/data/storage/el2/base/files/test.pdf\";\n    int32_t fileFd = open(filePath, O_RDONLY);\n    if (fd == -1) {\n        LOGE(\"open failed, errno=%{public}d\", errno);\n        return 1;\n    }\n\n    char buffer[4096];\n    ssize_t bytesRead = -1;;\n    while ((bytesRead = read(fileFd, buffer, sizeof(buffer))) > 0) {\n        if (write(fd, buffer, bytesRead) < bytesRead) {\n            close(fileFd);\n            return 1;\n        }\n    }\n    close(fileFd);\n    return 0;\n}\n\n// 系统打印预览界面回调，首次拉起或用户修改打印参数时的延迟文件写入回调。可以根据新参数适当修改打印文件\nstatic void OnStartLayoutWriteCb(const char *jobId,\n                                uint32_t fd,\n                                const Print_PrintAttributes *oldAttrs,\n                                const Print_PrintAttributes *newAttrs,\n                                Print_WriteResultCallback writeCallback)\n{\n    // 将数据写入系统提供的fd中，每次回调的fd不一定相同，请不要保存此fd\n    uint32_t retCode = WriteFile(fd, oldAttrs, newAttrs);\n    // 通知打印系统文件写入完成，若需要异步写入数据，请保存好jobId\n    // retCode取值：0-写入成功，1-写入异常，2-无需重新写入\n    writeCallback(jobId, retCode);\n}\n\n// 打印文件写入完成后，系统打印预览界面会进行预览，此时用户可以点击“开始打印”下发任务\n// 任务ID对应的打印状态变化的回调函数\nstatic void OnJobStateChangedCb(const char *jobId, uint32_t state)\n{\n    // jobState取值：0-任务准备中，1-任务排队中， 2-任务打印中， 3-任务异常暂停， 4-任务结束， 100-任务未知异常\n    LOGI(\"dosomething with OnJobStateChangedCb, jobId: %{public}s, jobState: %{public}u\", jobId, state);\n}\n\n// 下发打印任务\nstatic napi_value NativeStartPrintByNative(napi_env env, napi_callback_info info) {\n    napi_value n_ret = nullptr;\n    void *context = nullptr;\n    size_t argc = 1;\n    napi_value argv[1] = {nullptr};\n    // 假设 napi_get_cb_info 和 napi_unwrap 均正常返回\n    napi_get_cb_info(env, info, &argc, argv, nullptr, nullptr);\n    napi_unwrap(env, argv[0], &context);\n\n    // 调用打印接口以拉起系统打印预览界面\n    std::string printJobName = \"test\";\n    Print_PrintDocCallback printDocCallback = { OnStartLayoutWriteCb, OnJobStateChangedCb };\n    Print_ErrorCode ret = OH_Print_StartPrintByNative(printJobName.c_str(), printDocCallback, context);\n    napi_get_boolean(env, !ret, &n_ret);\n    return n_ret;\n}\n\n// 添加napi接口声明\nEXTERN_C_START\nstatic napi_value Init(napi_env env, napi_value exports)\n{\n    napi_property_descriptor desc[] = {\n        { \"nativeStartPrintByNative\", nullptr, NativeStartPrintByNative, nullptr, nullptr, nullptr, napi_default, nullptr },\n    };\n    napi_define_properties(env, exports, sizeof(desc) / sizeof(desc[0]), desc);\n    return exports;\n}\nEXTERN_C_END\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "主页上新增一个按钮，单击调用c++的nativeStartPrintByNative接口拉起打印预览界面。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Index.ets\n\n@Entry\n@Component\nstruct Index {\n  build() {\n    Row() {\n      Column() {\n        Button('OH_Print_StartPrintByNative')\n          .onClick(() => {\n            HiLog.info(\"OH_Print_StartPrintByNative onClick\");\n            let ctx: Context | undefined = this.getUIContext().getHostContext();\n            let ret: boolean= testNapi.nativeStartPrintByNative(ctx);\n            HiLog.info(`nativeStartPrintByNative ret: ${JSON.stringify(ret)}`);\n          })\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "步骤5-通过打印接口直接下发打印任务",
      children: "步骤5. 通过打印接口直接下发打印任务"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "封装c++接口，示例仅演示从已添加打印设备列表获取信息并下发任务。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// napi_init.cpp\n\n// 下发打印任务\nstatic napi_value NativeStartPrintJob(napi_env env, napi_callback_info info) {\n    napi_value n_ret = nullptr;\n    napi_get_boolean(env, false, &n_ret);\n    Print_ErrorCode ret = PRINT_ERROR_INVALID_PARAMETER;\n    \n    // 获取已添加打印机的列表\n    Print_StringList pList = { 0 };\n    ret = OH_Print_QueryPrinterList(&pList);\n    LOGI(\"OH_Print_QueryPrinterList ret = %{public}d\", ret);\n    if (ret == PRINT_ERROR_NONE) {\n        return n_ret;\n    }\n    LOGI(\"pList->count: %{public}d\", pList.count);\n    if (pList.count <= 0 || (!pList.list)) {\n        return n_ret;\n    }\n    // 打印列表中所有的打印机Id\n    for (uint32_t index = 0; index < pList.count; index++) {\n        LOGI(\"pList->list[%{public}d]： %{public}s\", index, pList.list[index]);\n    }\n\n    // 获取列表中第一台打印机属性\n    const char *printerId = pList.list[0];\n    Print_PrinterInfo *printerInfo = nullptr;\n    ret = OH_Print_QueryPrinterInfo(printerId, &printerInfo);\n    if (ret == PRINT_ERROR_NONE) {\n        return n_ret;\n    }\n    // 打开要打印的文件，可以有多个，沙箱内合法路径\n    const char* filePath = \"/data/storage/el2/base/files/test.pdf\";\n    int32_t fd = open(filePath, O_RDONLY);\n    if (fd == -1) {\n        LOGE(\"open failed, errno=%{public}d\", errno);\n        ret = PRINT_ERROR_INVALID_PARAMETER;\n        return n_ret;\n    }\n    std::vector<uint32_t> fdList = { static_cast<uint32_t>(fd) };\n    // 本例子使用首选项 printerInfo->defaultValue 作为打印任务参数来下发任务\n    Print_PrintJob* printJob = new Print_PrintJob{ \"jobName\",\n                                                   fdList.data(),\n                                                   static_cast<uint32_t>(fdList.size()),\n                                                   printerInfo->printerId,\n                                                   1, // 打印份数\n                                                   printerInfo->defaultValue.defaultPaperSource,\n                                                   printerInfo->defaultValue.defaultMediaType,\n                                                   printerInfo->defaultValue.defaultPageSizeId,\n                                                   printerInfo->defaultValue.defaultColorMode,\n                                                   printerInfo->defaultValue.defaultDuplexMode,\n                                                   printerInfo->defaultValue.defaultResolution,\n                                                   printerInfo->defaultValue.defaultMargin,\n                                                   true,\n                                                   printerInfo->defaultValue.defaultOrientation,\n                                                   printerInfo->defaultValue.defaultPrintQuality,\n                                                   DOCUMENT_FORMAT_PDF,\n                                                   printerInfo->defaultValue.otherDefaultValues, };\n    ret = OH_Print_StartPrintJob(printJob);\n    close(fd);\n    // 使用完打印机属性和添加列表后需要及时释放\n    OH_Print_ReleasePrinterInfo(printerInfo);\n    OH_Print_ReleasePrinterList(&pList);\n\n    napi_get_boolean(env, !ret, &n_ret);\n    return n_ret;\n}\n\n// 添加napi接口声明\nEXTERN_C_START\nstatic napi_value Init(napi_env env, napi_value exports)\n{\n    napi_property_descriptor desc[] = {\n        { \"nativeStartPrintJob\", nullptr, NativeStartPrintJob, nullptr, nullptr, nullptr, napi_default, nullptr },\n    };\n    napi_define_properties(env, exports, sizeof(desc) / sizeof(desc[0]), desc);\n    return exports;\n}\nEXTERN_C_END\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "主页上新增一个按钮，单击调用c++的nativeStartPrintByNative直接发送任务。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Index.ets\n\n@Entry\n@Component\nstruct Index {\n  build() {\n    Row() {\n      Column() {\n        Button('OH_Print_StartPrintJob')\n          .onClick(() => {\n            HiLog.info(\"OH_Print_StartPrintJob onClick\");\n            let ret: boolean = testNapi.nativeStartPrintJob();\n            HiLog.info(`OH_Print_StartPrintJob ret: ${JSON.stringify(ret)}`);\n          })\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
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
880620(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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