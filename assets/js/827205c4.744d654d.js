"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["179523"], {
590464(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_coding_bundle_management_native_bundle_guidelines_native_bundle_guidelines_md_827_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-coding-bundle-management-native-bundle-guidelines-native-bundle-guidelines-md-827.json
var site_docs_coding_bundle_management_native_bundle_guidelines_native_bundle_guidelines_md_827_namespaceObject = JSON.parse('{"id":"coding/bundle-management/native-bundle-guidelines/native-bundle-guidelines","title":"NativeBundle开发指导","description":"场景介绍","source":"@site/docs/coding/bundle-management/native-bundle-guidelines/native-bundle-guidelines.md","sourceDirName":"coding/bundle-management/native-bundle-guidelines","slug":"/coding/bundle-management/native-bundle-guidelines/","permalink":"/harmonyos-docs-site/coding/bundle-management/native-bundle-guidelines/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"NativeBundle开发指导","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/native-bundle-guidelines","kit":"ndk","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"内存管理purgeable内存开发指导","permalink":"/harmonyos-docs-site/coding/memory-management/purgeable-memory-guidelines/"},"next":{"title":"调试和性能分析概述","permalink":"/harmonyos-docs-site/debugging-profiling/debug-performance-profiling-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/coding/bundle-management/native-bundle-guidelines/native-bundle-guidelines.md


const frontMatter = {
	title: 'NativeBundle开发指导',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/native-bundle-guidelines',
	kit: 'ndk',
	last_updated: '2026-04-22'
};
const contentTitle = 'NativeBundle开发指导';

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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "nativebundle开发指导",
        children: "NativeBundle开发指导"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者可以通过本指导了解在HarmonyOS应用中，如何使用Native Bundle接口获取应用自身相关信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["常用接口如下表所示，具体API说明详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-c/ability-module/capi-native-bundle/capi-native-bundle",
        children: "Native_Bundle"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-c/ability-headerfile/capi-native-interface-bundle-h/capi-native-interface-bundle-h#oh_nativebundle_getcurrentapplicationinfo",
              children: "OH_NativeBundle_GetCurrentApplicationInfo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取应用自身相关信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-c/ability-headerfile/capi-native-interface-bundle-h/capi-native-interface-bundle-h#oh_nativebundle_getappid",
              children: "OH_NativeBundle_GetAppId"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取自身应用的appId信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-c/ability-headerfile/capi-native-interface-bundle-h/capi-native-interface-bundle-h#oh_nativebundle_getappidentifier",
              children: "OH_NativeBundle_GetAppIdentifier"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取自身应用的appIdentifier信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-c/ability-headerfile/capi-native-interface-bundle-h/capi-native-interface-bundle-h#oh_nativebundle_getmainelementname",
              children: "OH_NativeBundle_GetMainElementName"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取自身应用入口的信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-c/ability-headerfile/capi-native-interface-bundle-h/capi-native-interface-bundle-h#oh_nativebundle_getcompatibledevicetype",
              children: "OH_NativeBundle_GetCompatibleDeviceType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取自身应用适用的设备类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-c/ability-headerfile/capi-native-interface-bundle-h/capi-native-interface-bundle-h#oh_nativebundle_isdebugmode",
              children: "OH_NativeBundle_IsDebugMode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询当前应用的调试模式。从API version 20开始支持。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-c/ability-headerfile/capi-native-interface-bundle-h/capi-native-interface-bundle-h#oh_nativebundle_getmodulemetadata",
              children: "OH_NativeBundle_GetModuleMetadata"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取当前应用的元数据信息。从API version 20开始支持。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-c/ability-headerfile/capi-native-interface-bundle-h/capi-native-interface-bundle-h#oh_nativebundle_getabilityresourceinfo",
              children: "OH_NativeBundle_GetAbilityResourceInfo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取支持打开特定文件类型的组件资源信息列表。从API version 21开始支持。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "1. 创建工程"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(616777)/* ["default"] */.A) + "",
        width: "983",
        height: "658"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "2. 添加依赖"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建完成后，DevEco Studio会在工程生成cpp目录，目录中包含types/libentry/index.d.ts、napi_init.cpp、CMakeLists.txt等文件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "打开src/main/cpp/CMakeLists.txt，在target_link_libraries依赖中添加包管理的libbundle_ndk.so。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "target_link_libraries(entry PUBLIC libace_napi.z.so libbundle_ndk.so)\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "打开src/main/cpp/napi_init.cpp文件，添加头文件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// napi依赖头文件\n#include \"napi/native_api.h\"\n// native接口依赖头文件\n#include \"bundle/ability_resource_info.h\"\n#include \"bundle/native_interface_bundle.h\"\n// free()函数依赖的基础库\n#include <cstdlib>\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "3. 修改源文件"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "打开src/main/cpp/napi_init.cpp文件，文件Init会对当前方法进行初始化映射，这里定义对外的接口。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "EXTERN_C_START\nstatic napi_value Init(napi_env env, napi_value exports)\n{\n    napi_property_descriptor desc[] = {\n        { \"add\", nullptr, Add, nullptr, nullptr, nullptr, napi_default, nullptr },\n        // 新增方法getCurrentApplicationInfo\n        { \"getCurrentApplicationInfo\", nullptr, GetCurrentApplicationInfo, nullptr,\n            nullptr, nullptr, napi_default, nullptr},\n        // 新增方法getAppId\n        { \"getAppId\", nullptr, GetAppId, nullptr, nullptr, nullptr, napi_default, nullptr},\n        // 新增方法getAppIdentifier\n        { \"getAppIdentifier\", nullptr, GetAppIdentifier, nullptr, nullptr, nullptr, napi_default, nullptr},\n        // 新增方法getMainElementName\n        { \"getMainElementName\", nullptr, GetMainElementName, nullptr, nullptr, nullptr, napi_default, nullptr},\n        // 新增方法getCompatibleDeviceType\n        { \"getCompatibleDeviceType\", nullptr, GetCompatibleDeviceType, nullptr,\n            nullptr, nullptr, napi_default, nullptr},\n        // 新增方法isDebugMode\n        { \"isDebugMode\", nullptr, IsDebugMode, nullptr, nullptr, nullptr, napi_default, nullptr},\n        // 新增方法getModuleMetadata\n        { \"getModuleMetadata\", nullptr, GetModuleMetadata, nullptr, nullptr, nullptr, napi_default, nullptr},\n        // 新增方法getAbilityResourceInfo\n        { \"getAbilityResourceInfo\", nullptr, GetAbilityResourceInfo, nullptr, nullptr, nullptr, napi_default, nullptr}\n    };\n    napi_define_properties(env, exports, sizeof(desc) / sizeof(desc[0]), desc);\n    return exports;\n}\nEXTERN_C_END\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在src/main/cpp/napi_init.cpp文件中获取Native的包信息对象，并转为js的包信息对象，即可在js侧获取应用的信息："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "static napi_value GetCurrentApplicationInfo(napi_env env, napi_callback_info info)\n{\n    // 调用Native接口获取应用信息\n    OH_NativeBundle_ApplicationInfo nativeApplicationInfo = OH_NativeBundle_GetCurrentApplicationInfo();\n    napi_value result = nullptr;\n    napi_create_object(env, &result);\n    // Native接口获取的应用包名转为js对象里的bundleName属性\n    napi_value bundleName;\n    napi_create_string_utf8(env, nativeApplicationInfo.bundleName, NAPI_AUTO_LENGTH, &bundleName);\n    napi_set_named_property(env, result, \"bundleName\", bundleName);\n    // Native接口获取的指纹信息转为js对象里的fingerprint属性\n    napi_value fingerprint;\n    napi_create_string_utf8(env, nativeApplicationInfo.fingerprint, NAPI_AUTO_LENGTH, &fingerprint);\n    napi_set_named_property(env, result, \"fingerprint\", fingerprint);\n    // 最后为了防止内存泄漏，手动释放\n    free(nativeApplicationInfo.bundleName);\n    free(nativeApplicationInfo.fingerprint);\n    return result;\n}\n\nstatic napi_value GetAppId(napi_env env, napi_callback_info info)\n{\n    // 调用Native接口获取应用appId\n    char* appId = OH_NativeBundle_GetAppId();\n    // Native接口转成nAppId返回\n    napi_value nAppId;\n    napi_create_string_utf8(env, appId, NAPI_AUTO_LENGTH, &nAppId);\n    // 最后为了防止内存泄漏，手动释放\n    free(appId);\n    return nAppId;\n}\n\nstatic napi_value GetAppIdentifier(napi_env env, napi_callback_info info)\n{\n    // 调用Native接口获取应用appIdentifier\n    char* appIdentifier = OH_NativeBundle_GetAppIdentifier();\n    // Native接口转成nAppIdentifier返回\n    napi_value nAppIdentifier;\n    napi_create_string_utf8(env, appIdentifier, NAPI_AUTO_LENGTH, &nAppIdentifier);\n    // 最后为了防止内存泄漏，手动释放\n    free(appIdentifier);\n    return nAppIdentifier;\n}\n\nstatic napi_value GetMainElementName(napi_env env, napi_callback_info info)\n{\n    // 调用Native接口获取应用入口的信息\n    OH_NativeBundle_ElementName elementName = OH_NativeBundle_GetMainElementName();\n    napi_value result = nullptr;\n    napi_create_object(env, &result);\n    // Native接口获取的应用包名转为js对象里的bundleName属性\n    napi_value bundleName;\n    napi_create_string_utf8(env, elementName.bundleName, NAPI_AUTO_LENGTH, &bundleName);\n    napi_set_named_property(env, result, \"bundleName\", bundleName);\n    // Native接口获取的模块名称转为js对象里的moduleName属性\n    napi_value moduleName;\n    napi_create_string_utf8(env, elementName.moduleName, NAPI_AUTO_LENGTH, &moduleName);\n    napi_set_named_property(env, result, \"moduleName\", moduleName);\n    // Native接口获取的ability名称转为js对象里的abilityName属性\n    napi_value abilityName;\n    napi_create_string_utf8(env, elementName.abilityName, NAPI_AUTO_LENGTH, &abilityName);\n    napi_set_named_property(env, result, \"abilityName\", abilityName);\n    // 最后为了防止内存泄漏，手动释放\n    free(elementName.bundleName);\n    free(elementName.moduleName);\n    free(elementName.abilityName);\n    return result;\n}\n\nstatic napi_value GetCompatibleDeviceType(napi_env env, napi_callback_info info)\n{\n    // 调用Native接口获取应用deviceType\n    char* deviceType = OH_NativeBundle_GetCompatibleDeviceType();\n    // Native接口转成nDeviceType返回\n    napi_value nDeviceType;\n    napi_create_string_utf8(env, deviceType, NAPI_AUTO_LENGTH, &nDeviceType);\n    // 最后为了防止内存泄漏，手动释放\n    free(deviceType);\n    return nDeviceType;\n}\n\nstatic napi_value IsDebugMode(napi_env env, napi_callback_info info)\n{\n    bool isDebug = false;\n    // 调用Native接口获取应用DebugMode的信息，该接口从API version 20开始支持\n    bool isSuccess = OH_NativeBundle_IsDebugMode(&isDebug);\n    // 调用Native接口失败抛出异常\n    if (isSuccess == false) {\n        napi_throw_error(env, nullptr, \"call failed\");\n        return nullptr;\n    }\n    // Native接口转成debug返回\n    napi_value debug;\n    napi_get_boolean(env, isDebug, &debug);\n    return debug;\n}\n\nstatic napi_value GetModuleMetadata(napi_env env, napi_callback_info info)\n{\n    size_t moduleCount = 0;\n    // 调用Native接口获取应用元数据的信息，该接口从API version 20开始支持\n    OH_NativeBundle_ModuleMetadata* modules = OH_NativeBundle_GetModuleMetadata(&moduleCount);\n    if (modules == nullptr || moduleCount == 0) {\n        napi_throw_error(env, nullptr, \"no metadata found\");\n        return nullptr;\n    }\n    napi_value result;\n    napi_create_array(env, &result);\n    for (size_t i = 0; i < moduleCount; i++) {\n        napi_value moduleObj;\n        napi_create_object(env, &moduleObj);\n        // Native接口获取的模块名转为js对象里的moduleName属性\n        napi_value moduleName;\n        napi_create_string_utf8(env, modules[i].moduleName, NAPI_AUTO_LENGTH, &moduleName);\n        napi_set_named_property(env, moduleObj, \"moduleName\", moduleName);\n        napi_value metadataArray;\n        napi_create_array(env, &metadataArray);\n        for (size_t j = 0; j < modules[i].metadataArraySize; j++) {\n            napi_value metadataObj;\n            napi_create_object(env, &metadataObj);\n            napi_value name;\n            napi_value value;\n            napi_value resource;\n            napi_create_string_utf8(env, modules[i].metadataArray[j].name, NAPI_AUTO_LENGTH, &name);\n            napi_create_string_utf8(env, modules[i].metadataArray[j].value, NAPI_AUTO_LENGTH, &value);\n            napi_create_string_utf8(env, modules[i].metadataArray[j].resource, NAPI_AUTO_LENGTH, &resource);\n            // Native接口获取的元数据名称转为js对象里的name属性\n            napi_set_named_property(env, metadataObj, \"name\", name);\n            // Native接口获取的元数据值名称转为js对象里的value属性\n            napi_set_named_property(env, metadataObj, \"value\", value);\n            // Native接口获取的元数据资源转为js对象里的resource属性\n            napi_set_named_property(env, metadataObj, \"resource\", resource);\n            napi_set_element(env, metadataArray, j, metadataObj);\n        }\n        napi_set_named_property(env, moduleObj, \"metadata\", metadataArray);\n        napi_set_element(env, result, i, moduleObj);\n    }\n    // 最后为了防止内存泄漏，手动释放\n    for (size_t i = 0; i < moduleCount; i++) {\n        free(modules[i].moduleName);\n        for (size_t j = 0; j < modules[i].metadataArraySize; j++) {\n            free(modules[i].metadataArray[j].name);\n            free(modules[i].metadataArray[j].value);\n            free(modules[i].metadataArray[j].resource);\n        }\n        free(modules[i].metadataArray);\n    }\n    free(modules);\n    return result;\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "static void AddDefaultApp(napi_env env,\n    napi_value &infoObj,\n    OH_NativeBundle_AbilityResourceInfo* temp)\n{\n    bool isDefaultApp = true;\n    // 该接口从API version 21开始支持\n    OH_NativeBundle_CheckDefaultApp(temp, &isDefaultApp);\n    napi_value defaultAppValue;\n    napi_get_boolean(env, isDefaultApp, &defaultAppValue);\n    napi_set_named_property(env, infoObj, \"isDefaultApp\", defaultAppValue);\n}\n\nstatic void AddAppIndex(napi_env env,\n    napi_value &infoObj,\n    OH_NativeBundle_AbilityResourceInfo* temp)\n{\n    int appIndex = -1;\n    // 该接口从API version 21开始支持\n    OH_NativeBundle_GetAppIndex(temp, &appIndex);\n    napi_value appIndexValue;\n    napi_create_int32(env, appIndex, &appIndexValue);\n    napi_set_named_property(env, infoObj, \"appIndex\", appIndexValue);\n}\n\nstatic void AddLabel(napi_env env,\n    napi_value &infoObj,\n    OH_NativeBundle_AbilityResourceInfo* temp)\n{\n    char *label = nullptr;\n    // 该接口从API version 21开始支持\n    OH_NativeBundle_GetLabel(temp, &label);\n    napi_value labelValue;\n    if (label) {\n        napi_create_string_utf8(env, label, NAPI_AUTO_LENGTH, &labelValue);\n        free(label);\n    } else {\n        napi_get_null(env, &labelValue);\n    }\n    napi_set_named_property(env, infoObj, \"label\", labelValue);\n}\n\nstatic void AddBundleName(napi_env env,\n    napi_value &infoObj,\n    OH_NativeBundle_AbilityResourceInfo* temp)\n{\n    char *bundleName = nullptr;\n    // 该接口从API version 21开始支持\n    OH_NativeBundle_GetBundleName(temp, &bundleName);\n    napi_value bundleNameValue;\n    if (bundleName) {\n        napi_create_string_utf8(env, bundleName, NAPI_AUTO_LENGTH, &bundleNameValue);\n        free(bundleName);\n    } else {\n        napi_get_null(env, &bundleNameValue);\n    }\n    napi_set_named_property(env, infoObj, \"bundleName\", bundleNameValue);\n}\n\nstatic void AddModuleName(napi_env env,\n    napi_value &infoObj,\n    OH_NativeBundle_AbilityResourceInfo* temp)\n{\n    char *moduleName = nullptr;\n    // 该接口从API version 21开始支持\n    OH_NativeBundle_GetModuleName(temp, &moduleName);\n    napi_value moduleNameValue;\n    if (moduleName) {\n        napi_create_string_utf8(env, moduleName, NAPI_AUTO_LENGTH, &moduleNameValue);\n        free(moduleName);\n    } else {\n        napi_get_null(env, &moduleNameValue);\n    }\n    napi_set_named_property(env, infoObj, \"moduleName\", moduleNameValue);\n}\n\nstatic void AddAbilityName(napi_env env,\n    napi_value &infoObj,\n    OH_NativeBundle_AbilityResourceInfo* temp)\n{\n    char *abilityName = nullptr;\n    // 该接口从API version 21开始支持\n    OH_NativeBundle_GetAbilityName(temp, &abilityName);\n    napi_value abilityNameValue;\n    if (abilityName) {\n        napi_create_string_utf8(env, abilityName, NAPI_AUTO_LENGTH, &abilityNameValue);\n        free(abilityName);\n    } else {\n        napi_get_null(env, &abilityNameValue);\n    }\n    napi_set_named_property(env, infoObj, \"abilityName\", abilityNameValue);\n}\n\nstatic void GetDrawableDescriptor(\n    OH_NativeBundle_AbilityResourceInfo* temp)\n{\n    ArkUI_DrawableDescriptor *rawDrawable = nullptr;\n    // 该接口从API version 21开始支持\n    OH_NativeBundle_GetDrawableDescriptor(temp, &rawDrawable);\n    if (rawDrawable) {\n        // 使用ArkUI_DrawableDescriptor对象绘制图标\n    }\n}\n\nstatic void AssemblyAbilityResourceInfo(napi_env env,\n    napi_value &infoObj,\n    OH_NativeBundle_AbilityResourceInfo* temp)\n{\n    // 1. 添加Default App\n    AddDefaultApp(env, infoObj, temp);\n    // 2. 添加App Index\n    AddAppIndex(env, infoObj, temp);\n    // 3. 添加Label\n    AddLabel(env, infoObj, temp);\n    // 4. 添加Bundle Name\n    AddBundleName(env, infoObj, temp);\n    // 5. 添加Module Name\n    AddModuleName(env, infoObj, temp);\n    // 6. 添加Ability Name\n    AddAbilityName(env, infoObj, temp);\n    // 7. 获取ArkUI_DrawableDescriptor对象\n    GetDrawableDescriptor(temp);\n}\n\nstatic napi_value GetAbilityResourceInfo(napi_env env, napi_callback_info info)\n{\n    size_t argc = 1;\n    napi_value args[1];\n    napi_status status;\n    // 获取传入的参数\n    status = napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);\n    if (status != napi_ok || argc < 1) {\n        napi_throw_error(env, nullptr, \"Invalid arguments. Expected fileType string.\");\n        return nullptr;\n    }\n    // 检查参数类型是否为字符串\n    napi_valuetype valuetype;\n    status = napi_typeof(env, args[0], &valuetype);\n    if (status != napi_ok || valuetype != napi_string) {\n        napi_throw_error(env, nullptr, \"Argument must be a string\");\n        return nullptr;\n    }\n    // 获取字符串参数\n    char fileType[256] = {0}; // 假设文件类型不会超过255个字符\n    size_t strLen;\n    status = napi_get_value_string_utf8(env, args[0], fileType, sizeof(fileType) - 1, &strLen);\n    if (status != napi_ok) {\n        napi_throw_error(env, nullptr, \"Failed to get fileType string\");\n        return nullptr;\n    }\n    size_t infosCount = 0;\n    OH_NativeBundle_AbilityResourceInfo *infos = nullptr;\n    // 调用Native接口获取组件资源信息，使用传入的fileType，该接口从API version 21开始支持\n    BundleManager_ErrorCode ret = OH_NativeBundle_GetAbilityResourceInfo(fileType, &infos, &infosCount);\n    if (ret == BUNDLE_MANAGER_ERROR_CODE_PERMISSION_DENIED) {\n        napi_throw_error(env, nullptr, \"BUNDLE_MANAGER_ERROR_CODE_PERMISSION_DENIED\");\n        return nullptr;\n    }\n    if (infos == nullptr || infosCount == 0) {\n        napi_throw_error(env, nullptr, \"no metadata found\");\n        return nullptr;\n    }\n    napi_value result;\n    napi_create_array(env, &result);\n    for (size_t i = 0; i < infosCount; i++) {\n        auto temp = (OH_NativeBundle_AbilityResourceInfo *)((char *)infos + OH_NativeBundle_GetSize() * i);\n        napi_value infoObj;\n        napi_create_object(env, &infoObj);\n        AssemblyAbilityResourceInfo(env, infoObj, temp);\n        napi_set_element(env, result, i, infoObj);\n    }\n    // 释放内存，该接口从API version 21开始支持\n    OH_AbilityResourceInfo_Destroy(infos, infosCount);\n    return result;\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "4. 接口暴露"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在src/main/cpp/types/libentry/Index.d.ts文件中，声明暴露接口。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "export const add: (a: number, b: number) => number;\nexport const getCurrentApplicationInfo: () => object;   // 新增暴露方法 getCurrentApplicationInfo\nexport const getAppId: () => string;                    // 新增暴露方法 getAppId\nexport const getAppIdentifier: () => string;            // 新增暴露方法 getAppIdentifier\nexport const getMainElementName: () => object;          // 新增暴露方法 getMainElementName\nexport const getCompatibleDeviceType: () => string;     // 新增暴露方法 getCompatibleDeviceType\nexport const isDebugMode: () => boolean;                // 新增暴露方法 isDebugMode\nexport const getModuleMetadata: () => object;           // 新增暴露方法 getModuleMetadata\nexport const getAbilityResourceInfo: (fileType: string) => object;      // 新增暴露方法 getAbilityResourceInfo\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "5. js侧调用"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "打开src/main/ets/pages/Index.ets，导入\"libentry.so\"，调用Native接口打印出获取的信息内容。示例如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { hilog } from '@kit.PerformanceAnalysisKit';\nimport testNapi from 'libentry.so';\n\nconst DOMAIN = 0x0000;\n\n@Entry\n@Component\nstruct Index {\n  @State message: string = 'Hello World';\n\n  build() {\n    Row() {\n      Column() {\n        Text(this.message)\n          .fontSize($r('app.float.page_text_font_size'))\n          .fontWeight(FontWeight.Bold)\n          .onClick(() => {\n            this.message = 'Welcome';\n            hilog.info(DOMAIN, 'testTag', 'Test NAPI 2 + 3 = %{public}d', testNapi.add(2, 3));\n            let appInfo = testNapi.getCurrentApplicationInfo();\n            console.info(\"bundleNative getCurrentApplicationInfo success, data is \" + JSON.stringify(appInfo));\n            let appId = testNapi.getAppId();\n            console.info(\"bundleNative getAppId success, appId is \" + appId);\n            let appIdentifier = testNapi.getAppIdentifier();\n            console.info(\"bundleNative getAppIdentifier success, appIdentifier is \" + appIdentifier);\n            let mainElement = testNapi.getMainElementName();\n            console.info(\"bundleNative getMainElementName success, data is \" + JSON.stringify(mainElement));\n            let deviceType = testNapi.getCompatibleDeviceType();\n            console.info(\"bundleNative getCompatibleDeviceType success, deviceType is \" + deviceType);\n            let isDebugMode = testNapi.isDebugMode();\n            console.info(\"bundleNative isDebugMode success, isDebugMode is \" + isDebugMode);\n            let moduleMetadata = testNapi.getModuleMetadata();\n            console.info(\"bundleNative getModuleMetadata success, data is \" + JSON.stringify(moduleMetadata));\n            let fileType: string = '.png';\n            let abilityResourceInfo = testNapi.getAbilityResourceInfo(fileType);\n            console.info(\"bundleNative getAbilityResourceInfo success, data is \" + JSON.stringify(abilityResourceInfo));\n          })\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["关于包管理NDK接口说明，可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-c/ability-module/capi-native-bundle/capi-native-bundle",
        children: "Native_Bundle模块介绍"
      }), "。"]
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
616777(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799738-c69ad0bf5b49018c4cf2275dc12909b1.png");

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