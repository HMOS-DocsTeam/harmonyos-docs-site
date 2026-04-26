"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["612902"], {
232806(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_location_kit_location_guidelines_index_location_guidelines_capi_location_guidelines_capi_md_e28_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-location-kit-location-guidelines-index-location-guidelines-capi-location-guidelines-capi-md-e28.json
var site_docs_location_kit_location_guidelines_index_location_guidelines_capi_location_guidelines_capi_md_e28_namespaceObject = JSON.parse('{"id":"location-kit/location-guidelines-index/location-guidelines-capi/location-guidelines-capi","title":"获取设备的位置信息开发指导(C/C++)","description":"场景介绍","source":"@site/docs/location-kit/location-guidelines-index/location-guidelines-capi/location-guidelines-capi.md","sourceDirName":"location-kit/location-guidelines-index/location-guidelines-capi","slug":"/location-kit/location-guidelines-index/location-guidelines-capi/","permalink":"/harmonyos-docs-site/location-kit/location-guidelines-index/location-guidelines-capi/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"获取设备的位置信息开发指导(C/C++)","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/location-guidelines-capi","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"获取设备的位置信息开发指导(ArkTS)","permalink":"/harmonyos-docs-site/location-kit/location-guidelines-index/location-guidelines/"},"next":{"title":"正地理编码与逆地理编码开发指导","permalink":"/harmonyos-docs-site/location-kit/geocode-guidelines/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/location-kit/location-guidelines-index/location-guidelines-capi/location-guidelines-capi.md


const frontMatter = {
	title: '获取设备的位置信息开发指导(C/C++)',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/location-guidelines-capi',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '获取设备的位置信息开发指导(C/C++)';

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
        id: "获取设备的位置信息开发指导cc",
        children: "获取设备的位置信息开发指导(C/C++)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者可以调用HarmonyOS位置相关接口，监听设备的位置变化。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数说明",
      children: "函数说明"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "OH_Location_IsLocatingEnabled(bool* enabled)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询位置开关是否开启。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Location_StartLocating(const Location_RequestConfig* requestConfig)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "启动定位并订阅位置变化。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Location_ResultCode OH_Location_StopLocating(const Location_RequestConfig* requestConfig)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "停止定位并取消订阅位置变化。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_LocationInfo_GetBasicInfo(Location_Info* location)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从定位结果中获取基本信息，如经纬度、海拔、速度等信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_LocationInfo_GetAdditionalInfo(Location_Info* location, char* additionalInfo, uint32_t length)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从定位结果中获取附加信息。附加信息是一个JSON格式的字符串。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Location_CreateRequestConfig(void)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个位置请求参数结构体实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Location_DestroyRequestConfig(Location_RequestConfig* requestConfig)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁位置请求参数实例并回收内存。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_LocationRequestConfig_SetUseScene(Location_RequestConfig* requestConfig, Location_UseScene useScene)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置发起定位时的用户活动场景。  如果设置了useScene，则powerConsumptionScene无效。  如果未设置useScene，且设置了powerConsumptionScene，则该参数生效。  如果两个参数都不设置，则默认useScene为LOCATION_USE_SCENE_DAILY_LIFE_SERVICE,powerConsumptionScene参数无效。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_LocationRequestConfig_SetPowerConsumptionScene(Location_RequestConfig* requestConfig, Location_PowerConsumptionScene powerConsumptionScene)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置发起定位时的功耗场景。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_LocationRequestConfig_SetInterval(Location_RequestConfig* requestConfig, int interval)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置定位结果上报时间间隔。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_LocationRequestConfig_SetCallback(Location_RequestConfig* requestConfig, Location_InfoCallback callback, void* userData)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置用于接收位置上报的回调函数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "新建一个Native C++工程。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(595027)/* ["default"] */.A) + "",
            width: "1331",
            height: "665"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["获取设备的位置信息，需要有位置权限，位置权限申请的方法和步骤见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/location-kit/location-preparation/location-permission-guidelines",
            children: "申请位置权限开发指导"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "CMakeLists.txt文件中引入动态依赖库。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "target_link_libraries(entry PUBLIC libace_napi.z.so)\ntarget_link_libraries(entry PUBLIC libhilog_ndk.z.so)\ntarget_link_libraries(entry PUBLIC liblocation_ndk.so)\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在napi_init.cpp文件中编码，首先导入模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include \"napi/native_api.h\"\n#include \"LocationKit/oh_location.h\"\n#include \"LocationKit/oh_location_type.h\"\n#include \"hilog/log.h\"\n#include <stdlib.h>\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用获取位置接口之前需要先判断位置开关是否打开。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "查询当前位置开关状态，返回结果为布尔值，true代表位置开关开启，false代表位置开关关闭，示例代码如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: " static napi_value OhLocationIsEnabled(napi_env env, napi_callback_info info)\n {\n     bool isEnabled = false;\n     int resultCode = OH_Location_IsLocatingEnabled(&isEnabled);\n     napi_value result = NULL;\n     napi_get_boolean(env, isEnabled, &result);\n     return result;\n }\n // 在Init函数中补充接口。\n EXTERN_C_START\n static napi_value Init(napi_env env, napi_value exports)\n {\n     napi_property_descriptor desc[] = {\n         {\"ohLocationIsEnabled\", NULL, OhLocationIsEnabled, NULL, NULL, NULL, napi_default, NULL},\n     };\n     napi_define_properties(env, exports, sizeof(desc) / sizeof(desc[0]), desc);\n     return exports;\n }\n EXTERN_C_END\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "定位位置变化。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 定义一个请求参数\nstruct Location_RequestConfig *g_requestConfig = NULL;\nvoid *mydata = NULL;\n\n// 定义一个回调函数用来接收位置信息\nvoid reportLocation(Location_Info* location, void* userData)\n{\n    Location_BasicInfo baseInfo = OH_LocationInfo_GetBasicInfo(location);\n    char additionalInfo[1024] = \"\";\n    Location_ResultCode result = OH_LocationInfo_GetAdditionalInfo(location, additionalInfo, sizeof(additionalInfo));\n    if (mydata == userData) {\n        OH_LOG_INFO(LOG_APP, \"userData is mydata\");\n    }\n    return;\n}\n\n// 订阅位置信息\nstatic napi_value OhLocationStartLocating(napi_env env, napi_callback_info info)\n{\n    if (g_requestConfig == NULL) {\n        g_requestConfig = OH_Location_CreateRequestConfig();\n    }\n    OH_LocationRequestConfig_SetUseScene(g_requestConfig, LOCATION_USE_SCENE_NAVIGATION);\n    OH_LocationRequestConfig_SetInterval(g_requestConfig, 1);\n    mydata = (void *)malloc(sizeof(\"mydata\")); // 用户自定义任意类型，callback 透传返回\n    OH_LocationRequestConfig_SetCallback(g_requestConfig, reportLocation, mydata);\n    OH_Location_StartLocating(g_requestConfig);\n    int32_t ret = 0;\n    napi_value result = NULL;\n    napi_create_int32(env, ret, &result);\n    return result;\n}\n\n// 取消订阅位置信息， g_requestConfig要和订阅时传入的对象保持一致\nstatic napi_value OhLocationStopLocating(napi_env env, napi_callback_info info)\n{\n    OH_Location_StopLocating(g_requestConfig);\n    if (g_requestConfig != NULL) {\n        OH_Location_DestroyRequestConfig(g_requestConfig);\n        g_requestConfig = NULL;\n    }\n    free(mydata);\n    mydata = NULL;\n    int32_t ret = 0;\n    napi_value result = NULL;\n    napi_create_int32(env, ret, &result);\n    return result;\n}\n\n// 在Init函数中补充接口。\nEXTERN_C_START\nstatic napi_value Init(napi_env env, napi_value exports)\n{\n    napi_property_descriptor desc[] = {\n        {\"ohLocationStartLocating\", NULL, OhLocationStartLocating, NULL, NULL, NULL, napi_default, NULL},\n        {\"ohLocationStopLocating\", NULL, OhLocationStopLocating, NULL, NULL, NULL, napi_default, NULL},\n    };\n    napi_define_properties(env, exports, sizeof(desc) / sizeof(desc[0]), desc);\n    return exports;\n}\nEXTERN_C_END\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在types/libentry路径下index.d.ts文件中引入Napi接口。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "export const ohLocationIsEnabled: () => boolean;\nexport const ohLocationStartLocating: () => number;\nexport const ohLocationStopLocating: () => number;\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "删除Index.ets中的已废弃函数。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: ".onClick(() => {\n    hilog.info(0x0000, 'testTag', 'Test NAPI 2 + 3 = %{public}d', testNapi.add(2, 3));\n})\n"
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
595027(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478995-59742d3784526de19c28a1c85092feae.png");

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