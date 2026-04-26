"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["62730"], {
996544(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_hardware_sensor_service_kit_vibrator_vibrator_guidelines_capi_vibrator_guidelines_capi_md_d9b_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-hardware-sensor-service-kit-vibrator-vibrator-guidelines-capi-vibrator-guidelines-capi-md-d9b.json
var site_docs_system_hardware_sensor_service_kit_vibrator_vibrator_guidelines_capi_vibrator_guidelines_capi_md_d9b_namespaceObject = JSON.parse('{"id":"system-hardware/sensor-service-kit/vibrator/vibrator-guidelines-capi/vibrator-guidelines-capi","title":"振动开发指导(C/C++)","description":"场景介绍","source":"@site/docs/system-hardware/sensor-service-kit/vibrator/vibrator-guidelines-capi/vibrator-guidelines-capi.md","sourceDirName":"system-hardware/sensor-service-kit/vibrator/vibrator-guidelines-capi","slug":"/system-hardware/sensor-service-kit/vibrator/vibrator-guidelines-capi/","permalink":"/harmonyos-docs-site/system-hardware/sensor-service-kit/vibrator/vibrator-guidelines-capi/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"振动开发指导(C/C++)","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/vibrator-guidelines-capi","kit":"system/hardware","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"振动开发指导(ArkTS)","permalink":"/harmonyos-docs-site/system-hardware/sensor-service-kit/vibrator/vibrator-guidelines/"},"next":{"title":"Mechanic Kit简介","permalink":"/harmonyos-docs-site/system-hardware/mechanic-kit/mechanic-kit-intro/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-hardware/sensor-service-kit/vibrator/vibrator-guidelines-capi/vibrator-guidelines-capi.md


const frontMatter = {
	title: '振动开发指导(C/C++)',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/vibrator-guidelines-capi',
	kit: 'system/hardware',
	last_updated: '2026-04-22'
};
const contentTitle = '振动开发指导(C/C++)';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "函数说明",
  "id": "函数说明",
  "level": 2
}, {
  "value": "振动效果说明",
  "id": "振动效果说明",
  "level": 2
}, {
  "value": "固定时长振动",
  "id": "固定时长振动",
  "level": 3
}, {
  "value": "自定义振动",
  "id": "自定义振动",
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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "振动开发指导cc",
        children: "振动开发指导(C/C++)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当设备需要设置不同的振动效果时，可以调用Vibrator模块，例如：设备的按键可以设置不同强度和不同时长的振动，闹钟和来电可以设置不同强度和时长的单次或周期振动。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["详细的接口介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-hardware-api/sensor-service-api/sensor-service-c/sensor-service-module/capi-vibrator/capi-vibrator",
        children: "Vibrator"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数说明",
      children: "函数说明"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "OHOS::Sensors::OH_Vibrator_PlayVibration(int32_t duration, Vibrator_Attribute attribute)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "控制马达在指定时间内持续振动。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OHOS::Sensors::OH_Vibrator_PlayVibrationCustom(Vibrator_FileDescription fileDescription, Vibrator_Attribute vibrateAttribute)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "播放自定义振动序列。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OHOS::Sensors::OH_Vibrator_Cancel()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "停止马达振动。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "振动效果说明",
      children: "振动效果说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "目前支持两类振动效果，如下所示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "固定时长振动",
      children: "固定时长振动"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "传入一个固定时长，马达按照默认强度和频率触发振动。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "自定义振动",
      children: "自定义振动"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "自定义振动提供给用户设计自己所需振动效果的能力，用户可通过自定义振动配置文件，并遵循相应规则编排所需振动形式，使能更加开放的振感交互体验。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "新建一个Native C++工程。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(454936)/* ["default"] */.A) + "",
            width: "1265",
            height: "1016"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["控制设备上的振动器，需要申请权限ohos.permission.VIBRATE。具体配置方式请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions",
            children: "声明权限"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "\"requestPermissions\": [\n  {\n    \"name\": \"ohos.permission.VIBRATE\"\n  }\n]\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "CMakeLists.txt文件中引入动态依赖库。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "target_link_libraries(entry PUBLIC libace_napi.z.so)\ntarget_link_libraries(entry PUBLIC libhilog_ndk.z.so)\ntarget_link_libraries(entry PUBLIC libohvibrator.z.so)\ntarget_link_libraries(entry PUBLIC librawfile.z.so)\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include <sensors/vibrator.h>\n#include \"napi/native_api.h\"\n#include \"hilog/log.h\"\n#include <thread>\n#include <fcntl.h>\n#include <unistd.h>\n#include <sys/stat.h>\n#include <rawfile/raw_file_manager.h>\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "定义常量。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "const int VIBRATOR_LOG_DOMAIN = 0xD002701;\nconst char *TAG = \"[NativeVibratorTest]\";\nconstexpr int32_t TIME_WAIT_FOR_OP = 2;\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "控制马达在指定时间内持续振动和停止马达振动。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "static napi_value PlayVibrationInDuration(napi_env env, napi_callback_info info)\n{\n    Vibrator_Attribute vibrateAttribute;\n    vibrateAttribute.usage = VIBRATOR_USAGE_ALARM;\n    // 控制马达在指定时间内持续振动。\n    int32_t ret = OH_Vibrator_PlayVibration(2000, vibrateAttribute);\n    if (ret != 0) {\n        OH_LOG_Print(LOG_APP, LOG_ERROR, VIBRATOR_LOG_DOMAIN, TAG, \"vibration fail\");\n        return nullptr;\n    }\n    OH_LOG_Print(LOG_APP, LOG_INFO, VIBRATOR_LOG_DOMAIN, TAG, \"vibration successful\");\n    std::this_thread::sleep_for(std::chrono::milliseconds(TIME_WAIT_FOR_OP));\n    // 停止马达振动。\n    ret = OH_Vibrator_Cancel();\n    if (ret != 0) {\n        OH_LOG_Print(LOG_APP, LOG_ERROR, VIBRATOR_LOG_DOMAIN, TAG, \"cancel vibration fail\");\n        return nullptr;\n    }\n    return nullptr;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "播放自定义振动序列。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "static napi_value PlayVibrationCustom(napi_env env, napi_callback_info info)\n{\n    size_t argc = 1;\n    napi_value argv[1] = { nullptr };\n    // 获取参数信息\n    napi_get_cb_info(env, info, &argc, argv, nullptr, nullptr);\n\n    // argv[0]即为函数第一个参数Js资源对象，OH_ResourceManager_InitNativeResourceManager转为Native对象\n    NativeResourceManager *mNativeResMgr = OH_ResourceManager_InitNativeResourceManager(env, argv[0]);\n    if (mNativeResMgr == nullptr) {\n        OH_LOG_Print(LOG_APP, LOG_ERROR, VIBRATOR_LOG_DOMAIN, TAG, \"Get native resource manager failed\");\n        return nullptr;\n    }\n    // 获取rawfile指针对象\n    std::string fileName = \"coin_drop.json\";\n    RawFile *rawFile = OH_ResourceManager_OpenRawFile(mNativeResMgr, fileName.c_str());\n    if (rawFile == nullptr) {\n        OH_ResourceManager_ReleaseNativeResourceManager(mNativeResMgr);\n        OH_LOG_Print(LOG_APP, LOG_ERROR, VIBRATOR_LOG_DOMAIN, TAG, \"Get native rawFile failed\");\n        return nullptr;\n    }\n    // 获取rawfile的描述符RawFileDescriptor {fd, offset, length}\n    RawFileDescriptor descriptor;\n    OH_ResourceManager_GetRawFileDescriptor(rawFile, descriptor);\n    Vibrator_FileDescription fileDescription = {\n        .fd = descriptor.fd,\n        .offset = descriptor.start,\n        .length = descriptor.length\n    };\n    Vibrator_Attribute vibrateAttribute = {\n        .usage = VIBRATOR_USAGE_RING\n    };\n    // 播放自定义振动序列。\n    int32_t ret = OH_Vibrator_PlayVibrationCustom(fileDescription, vibrateAttribute);\n    bool isSuccess = ((ret == 0) || (ret == UNSUPPORTED));\n    if (!isSuccess) {\n        OH_LOG_Print(LOG_APP, LOG_INFO, VIBRATOR_LOG_DOMAIN, TAG, \"Vibratecustom fail\");\n    } else {\n        OH_LOG_Print(LOG_APP, LOG_INFO, VIBRATOR_LOG_DOMAIN, TAG, \"Vibratecustom successful\");\n    }\n    std::this_thread::sleep_for(std::chrono::milliseconds(TIME_WAIT_FOR_OP));\n    // 停止马达振动。\n    OH_Vibrator_Cancel();\n    // 关闭打开的指针对象\n    OH_ResourceManager_CloseRawFile(rawFile);\n    OH_ResourceManager_ReleaseNativeResourceManager(mNativeResMgr);\n    return nullptr;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在Init函数中补充接口。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "EXTERN_C_START\nstatic napi_value Init(napi_env env, napi_value exports)\n{\n    napi_property_descriptor desc[] = {\n        {\"playVibrationInDuration\", nullptr, PlayVibrationInDuration, nullptr, nullptr, nullptr, napi_default, nullptr},\n        {\"playVibrationCustom\", nullptr, PlayVibrationCustom, nullptr, nullptr, nullptr, napi_default, nullptr}\n    };\n    napi_define_properties(env, exports, sizeof(desc) / sizeof(desc[0]), desc);\n    return exports;\n}\nEXTERN_C_END\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在types/libentry路径下index.d.ts文件中引入Napi接口。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "export const playVibrationInDuration: () => object;\nexport const playVibrationCustom: (resmgr: object) => object;\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编写程序入口调用代码。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { BusinessError } from '@kit.BasicServicesKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { resourceManager } from '@kit.LocalizationKit';\nimport vibratorCapi from 'libentry.so';\n\nconst DOMAIN = 0xD002701;\n// ...\n          try {\n            vibratorCapi.playVibrationInDuration();\n            // ...\n          } catch (error) {\n            let e: BusinessError = error as BusinessError;\n            hilog.error(DOMAIN, 'testTag', `Failed to invoke playVibrationInDuration. Code: ${e.code}, message: ${e.message}`);\n          }\n          // ...\n          try {\n            vibratorCapi.playVibrationCustom(this.getUIContext().getHostContext()?.resourceManager);\n            // ...\n          } catch (error) {\n            let e: BusinessError = error as BusinessError;\n            hilog.error(DOMAIN, 'testTag', `Failed to invoke playVibrationCustom. Code: ${e.code}, message: ${e.message}`);\n          }\n"
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
454936(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478483-ba5323a0e9d9eb09b57401acf6c46ded.png");

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