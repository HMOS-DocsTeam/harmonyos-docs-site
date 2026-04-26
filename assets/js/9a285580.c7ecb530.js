"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["86102"], {
172659(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_network_service_collaboration_kit_guide_servicecollaboration_servicendk_servicecollaboration_servicendk_guide_servicecollaboration_servicendk_guide_md_9a2_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-network-service-collaboration-kit-guide-servicecollaboration-servicendk-servicecollaboration-servicendk-guide-servicecollaboration-servicendk-guide-md-9a2.json
var site_docs_system_network_service_collaboration_kit_guide_servicecollaboration_servicendk_servicecollaboration_servicendk_guide_servicecollaboration_servicendk_guide_md_9a2_namespaceObject = JSON.parse('{"id":"system-network/service-collaboration-kit-guide/servicecollaboration-servicendk/servicecollaboration-servicendk-guide/servicecollaboration-servicendk-guide","title":"跨设备互通NDK开发指导","description":"跨设备互通提供相机、扫描以及图库（图片和视频）的跨设备调用能力，TV、平板或2in1设备可以调用手机的相机、扫描、图库等功能，并且在6.1.0(23)之后支持TV、手机、平板或2in1设备调用支持拍照、扫描、选择图库中图片与视频能力的手机，支持拍照、扫描、选择图库中图片与视频能力的平板，以及支持选择图库中图片与视频能力的2in1设备。","source":"@site/docs/system-network/service-collaboration-kit-guide/servicecollaboration-servicendk/servicecollaboration-servicendk-guide/servicecollaboration-servicendk-guide.md","sourceDirName":"system-network/service-collaboration-kit-guide/servicecollaboration-servicendk/servicecollaboration-servicendk-guide","slug":"/system-network/service-collaboration-kit-guide/servicecollaboration-servicendk/servicecollaboration-servicendk-guide/","permalink":"/harmonyos-docs-site/system-network/service-collaboration-kit-guide/servicecollaboration-servicendk/servicecollaboration-servicendk-guide/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"跨设备互通NDK开发指导","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/servicecollaboration-servicendk-guide","kit":"system/network","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"跨设备互通NDK特性概述","permalink":"/harmonyos-docs-site/system-network/service-collaboration-kit-guide/servicecollaboration-servicendk/servicecollaboration-servicendk-description/"},"next":{"title":"跨设备互通（RichEditor控件）","permalink":"/harmonyos-docs-site/system-network/service-collaboration-kit-guide/servicecollaboration-richeditor-title/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-network/service-collaboration-kit-guide/servicecollaboration-servicendk/servicecollaboration-servicendk-guide/servicecollaboration-servicendk-guide.md


const frontMatter = {
	title: '跨设备互通NDK开发指导',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/servicecollaboration-servicendk-guide',
	kit: 'system/network',
	last_updated: '2026-04-22'
};
const contentTitle = '跨设备互通NDK开发指导';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 2
}, {
  "value": "业务流程",
  "id": "业务流程",
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
        id: "跨设备互通ndk开发指导",
        children: "跨设备互通NDK开发指导"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "跨设备互通提供相机、扫描以及图库（图片和视频）的跨设备调用能力，TV、平板或2in1设备可以调用手机的相机、扫描、图库等功能，并且在6.1.0(23)之后支持TV、手机、平板或2in1设备调用支持拍照、扫描、选择图库中图片与视频能力的手机，支持拍照、扫描、选择图库中图片与视频能力的平板，以及支持选择图库中图片与视频能力的2in1设备。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "您通过此能力实现跨设备交互，可以使用其他设备的相机、扫描和图库功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "需同时满足以下条件，才能使用该功能："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "设备限制"
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "本端设备：HarmonyOS版本为HarmonyOS NEXT及以上的TV、平板或2in1设备。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "远端设备：HarmonyOS版本为HarmonyOS NEXT及以上、具有相机能力的手机或平板设备。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "使用限制"
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "双端设备需要登录同一华为账号。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "跨设备互通API支持根据特定调用策略调用设备。调用策略：TV、2in1设备可以调用平板和手机，平板可以调用手机，并且在6.1.0(23)之后支持TV、手机、平板或2in1设备调用支持拍照、扫描、选择图库中图片与视频能力的手机，支持拍照、扫描、选择图库中图片与视频能力的平板，以及支持选择图库中图片与视频能力的2in1设备。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "双端设备需要打开WLAN和蓝牙开关。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "条件允许时，建议双端设备接入同一个局域网，可提升唤醒相机的速度。"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "业务流程",
      children: "业务流程"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-network-api/service-collaboration-api/servicecollaboration-capi/servicecollaboration-capi-model/servicecollaboration-capi-module/servicecollaboration-capi-module#hms_servicecollaboration_getcollaborationdeviceinfos",
          children: "HMS_ServiceCollaboration_GetCollaborationDeviceInfos"
        }), "接口获取设备能力列表。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-network-api/service-collaboration-api/servicecollaboration-capi/servicecollaboration-capi-model/servicecollaboration-capi-module/servicecollaboration-capi-module#hms_servicecollaboration_startcollaboration",
          children: "HMS_ServiceCollaboration_StartCollaboration"
        }), "接口拉起跨设备互通能力。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "对端设备确定回传后，本端处理对端回传的图片。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在开发具体功能前，请先查阅", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/service-collaboration-api/servicecollaboration-capi/servicecollaboration-capi-model/servicecollaboration-capi-module/servicecollaboration-capi-module",
        children: "参考文档"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "/ref/system-network-api/service-collaboration-api/servicecollaboration-capi/servicecollaboration-capi-model/servicecollaboration-capi-module/servicecollaboration-capi-module#hms_servicecollaboration_getcollaborationdeviceinfos",
              children: "HMS_ServiceCollaboration_GetCollaborationDeviceInfos"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取跨设备互通可用的设备信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/service-collaboration-api/servicecollaboration-capi/servicecollaboration-capi-model/servicecollaboration-capi-module/servicecollaboration-capi-module#hms_servicecollaboration_startcollaboration",
              children: "HMS_ServiceCollaboration_StartCollaboration"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "拉起跨设备互通能力，回传图片。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/service-collaboration-api/servicecollaboration-capi/servicecollaboration-capi-model/servicecollaboration-capi-module/servicecollaboration-capi-module#hms_servicecollaboration_stopcollaboration",
              children: "HMS_ServiceCollaboration_StopCollaboration"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消跨设备互通能力。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/service-collaboration-api/servicecollaboration-capi/servicecollaboration-capi-model/servicecollaboration-capi-module/servicecollaboration-capi-module#hms_servicecollaboration_startcollaborationv2",
              children: "HMS_ServiceCollaboration_StartCollaborationV2"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "拉起跨设备互通能力, 回传图片和视频"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "引入头文件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include \"service_collaboration/service_collaboration_api.h\"\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编写CMakeLists.txt。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "find_library(\n    # Sets the name of the path variable.\n    service_collaboration-lib\n    # Specifies the name of the NDK library that\n    # you want CMake to locate.\n    libservice_collaboration_ndk.z.so\n)\ntarget_link_libraries(entry PUBLIC\n    ${service_collaboration-lib}\n)\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "实例代码调用接口，分为以下三步。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "通过调用HMS_ServiceCollaboration_GetCollaborationDeviceInfos接口获取设备列表信息，传入需要的ServiceCollaborationFilterType能力数组，接口会返回支持对应能力设备。每个设备中包含所支持的能力类型ServiceCollaborationFilterTypes和设备类型deviceType信息。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "创建回调ServiceCollaborationCallback，其中包括事件回调OnEventProc和图片数据回调OnDataCallbackProc；创建ServiceCollaboration_SelectInfo，示例中传入了TAKE_PHOTO能力，并选择了列表的第一个设备。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "HMS_ServiceCollaboration_StartCollaboration入参传入第二步构造的ServiceCollaborationCallback和ServiceCollaboration_SelectInfo，此时被调用的设备会拉起相机，操作被拉起相机的设备进行拍照。事件和图片数据会通过第二步构造的回调通知给应用。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include \"service_collaboration/service_collaboration_api.h\"\n#include <thread>\n\nstatic int32_t OnEventProc(ServiceCollaborationEventCode code, uint32_t extraCode)\n{\n    return 0;\n}\nstatic int32_t OnDataCallbackProc(\n    ServiceCollaborationEventCode code, ServiceCollaborationDataType dataType, uint32_t dataSize, char* data)\n{\n    return 0;\n}\nint main(int argc, char* argv[])\n{\n    int two = 2;\n    int three = 3;\n    int filter = 1;\n    const int size = 3;\n    int shouldCancel = 0;\n    \n    // 构建所需跨设备互通能力，并调用HMS_ServiceCollaboration_GetCollaborationDeviceInfos接口获取设备信息\n    ServiceCollaborationFilterType serviceFilterTypes[size] = {TAKE_PHOTO, SCAN_DOCUMENT, IMAGE_PICKER};\n    ServiceCollaboration_CollaborationDeviceInfoSets* info = HMS_ServiceCollaboration_GetCollaborationDeviceInfos(3, serviceFilterTypes);\n    // 构建callback回调\n    ServiceCollaboration_SelectInfo taskInfo = { TAKE_PHOTO, { 0 } };\n    for (uint32_t i = 0; i < info->size; i++) {\n        ServiceCollaboration_CollaborationDeviceInfo *deviceInfo =\n            (ServiceCollaboration_CollaborationDeviceInfo *)&(info->deviceInfoSets[i]);\n        if (filter == 1) {\n            taskInfo.serviceFilterType = TAKE_PHOTO;\n        }\n        if (filter == two) {\n            taskInfo.serviceFilterType = SCAN_DOCUMENT;\n        }\n        if (filter == three) {\n            taskInfo.serviceFilterType = IMAGE_PICKER;\n        }\n        std::memcpy(taskInfo.deviceNetworkId, deviceInfo->deviceNetworkId, COLLABORATIONDEVICEINFO_DEVICENETWORKID_MAXLENGTH-1);\n    }\n    ServiceCollaborationCallback callback = {.OnEvent = OnEventProc, .OnDataCallback = OnDataCallbackProc};\n    // 传入拍照参数、callback回调并调用HMS_ServiceCollaboration_StartCollaboration接口\n    uint32_t id = HMS_ServiceCollaboration_StartCollaboration(&taskInfo, &callback);\n    std::this_thread::sleep_for(std::chrono::seconds(three));\n    if (shouldCancel) {\n        // 三秒后主动调用HMS_ServiceCollaboration_StopCollaboration关闭跨设备互通\n        int32_t ret = HMS_ServiceCollaboration_StopCollaboration(id);\n    }\n}\n"
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