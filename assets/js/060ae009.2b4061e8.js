"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["444019"], {
376079(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_system_network_api_distributed_service_api_distributed_service_c_distributed_service_headerfile_capi_oh_device_manager_h_capi_oh_device_manager_h_md_060_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-system-network-api-distributed-service-api-distributed-service-c-distributed-service-headerfile-capi-oh-device-manager-h-capi-oh-device-manager-h-md-060.json
var site_docs_ref_system_network_api_distributed_service_api_distributed_service_c_distributed_service_headerfile_capi_oh_device_manager_h_capi_oh_device_manager_h_md_060_namespaceObject = JSON.parse('{"id":"system-network-api/distributed-service-api/distributed-service-c/distributed-service-headerfile/capi-oh-device-manager-h/capi-oh-device-manager-h","title":"oh_device_manager.h","description":"概述","source":"@site/docs-ref/system-network-api/distributed-service-api/distributed-service-c/distributed-service-headerfile/capi-oh-device-manager-h/capi-oh-device-manager-h.md","sourceDirName":"system-network-api/distributed-service-api/distributed-service-c/distributed-service-headerfile/capi-oh-device-manager-h","slug":"/system-network-api/distributed-service-api/distributed-service-c/distributed-service-headerfile/capi-oh-device-manager-h/capi-oh-device-manager-h","permalink":"/harmonyos-docs-site/ref/system-network-api/distributed-service-api/distributed-service-c/distributed-service-headerfile/capi-oh-device-manager-h/capi-oh-device-manager-h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"oh_device_manager.h","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-device-manager-h","kit":"系统","last_updated":"2026-04-22","slug":"capi-oh-device-manager-h"},"sidebar":"ref","previous":{"title":"DeviceManager","permalink":"/harmonyos-docs-site/ref/system-network-api/distributed-service-api/distributed-service-c/distributed-service-module/capi-devicemanager/capi-devicemanager"},"next":{"title":"oh_device_manager_err_code.h","permalink":"/harmonyos-docs-site/ref/system-network-api/distributed-service-api/distributed-service-c/distributed-service-headerfile/capi-oh-device-manager-err-code-h/capi-oh-device-manager-err-code-h"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/system-network-api/distributed-service-api/distributed-service-c/distributed-service-headerfile/capi-oh-device-manager-h/capi-oh-device-manager-h.md


const frontMatter = {
	title: 'oh_device_manager.h',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-device-manager-h',
	kit: '系统',
	last_updated: '2026-04-22',
	slug: 'capi-oh-device-manager-h'
};
const contentTitle = 'oh_device_manager.h';

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
  "value": "函数",
  "id": "函数",
  "level": 3
}, {
  "value": "函数说明",
  "id": "函数说明",
  "level": 2
}, {
  "value": "OH_DeviceManager_GetLocalDeviceName()",
  "id": "oh_devicemanager_getlocaldevicename",
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
        id: "oh_device_managerh",
        children: "oh_device_manager.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "提供访问可信设备和本地设备信息的接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <distributedhardware/device_manager/oh_device_manager.h>"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "库："
        })
      }), " libdevicemanager_ndk.so"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.DistributedHardware.DeviceManager"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "相关模块："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/distributed-service-api/distributed-service-c/distributed-service-module/capi-devicemanager/capi-devicemanager",
        children: "DeviceManager"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_devicemanager_getlocaldevicename",
              children: "int32_t OH_DeviceManager_GetLocalDeviceName(char **localDeviceName, unsigned int &len)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取本地设备显示名。  设备显示名称涉及用户的隐私数据，需要应用提供相关隐私声明，声明设备显示名的用途。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数说明",
      children: "函数说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_devicemanager_getlocaldevicename",
      children: "OH_DeviceManager_GetLocalDeviceName()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_DeviceManager_GetLocalDeviceName(char **localDeviceName, unsigned int &len)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取本地设备显示名。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设备显示名称涉及用户的隐私数据，需要应用提供相关隐私声明，声明设备显示名的用途。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限："
        })
      }), " ohos.permission.READ_LOCAL_DEVICE_NAME"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
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
            children: "char **localDeviceName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示本地设备显示名字符串的地址指针。使用后需要手动释放空间资源。应用具备 ohos.permission.READ_LOCAL_DEVICE_NAME 权限，返回设备显示名称；否则返回设备默认名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "unsigned int &len"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示本地设备显示名字符串的长度。"
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
            children: ["返回执行的错误码。错误码定义详见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/distributed-service-api/distributed-service-c/distributed-service-headerfile/capi-oh-device-manager-err-code-h/capi-oh-device-manager-err-code-h#devicemanager_errorcode",
              children: "DeviceManager_ErrorCode"
            }), "。  返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/distributed-service-api/distributed-service-c/distributed-service-headerfile/capi-oh-device-manager-err-code-h/capi-oh-device-manager-err-code-h#devicemanager_errorcode",
              children: "ERR_OK"
            }), "，表示执行成功。  返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/distributed-service-api/distributed-service-c/distributed-service-headerfile/capi-oh-device-manager-err-code-h/capi-oh-device-manager-err-code-h#devicemanager_errorcode",
              children: "DM_ERR_FAILED"
            }), "，表示函数执行失败。  返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/distributed-service-api/distributed-service-c/distributed-service-headerfile/capi-oh-device-manager-err-code-h/capi-oh-device-manager-err-code-h#devicemanager_errorcode",
              children: "DM_ERR_OBTAIN_SERVICE"
            }), "，表示获取设备管理服务失败。  返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/distributed-service-api/distributed-service-c/distributed-service-headerfile/capi-oh-device-manager-err-code-h/capi-oh-device-manager-err-code-h#devicemanager_errorcode",
              children: "DM_ERR_OBTAIN_BUNDLE_NAME"
            }), "，表示获取bundleName失败。  返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/distributed-service-api/distributed-service-c/distributed-service-headerfile/capi-oh-device-manager-err-code-h/capi-oh-device-manager-err-code-h#devicemanager_errorcode",
              children: "ERR_INVALID_PARAMETER"
            }), "，表示参数localDeviceName是空指针或者*localDeviceName是非空指针。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include \"napi/native_api.h\"\n#include \"hilog/log.h\"\n#include <distributedhardware/device_manager/oh_device_manager.h>\n#include <distributedhardware/device_manager/oh_device_manager_err_code.h>\nstatic napi_value GetDeviceName(napi_env env, napi_callback_info info) {\n    napi_value result = nullptr;\n    napi_create_object(env, &result);\n    char *localDeviceName = nullptr; // 声明空字符串，不需要提前分配地址，接口内部会分配\n    unsigned int len = 0;\n    // 将空字符串的地址传给接口\n    int32_t ret = OH_DeviceManager_GetLocalDeviceName(&localDeviceName, len);\n    if (ret != ERR_OK) {\n        OH_LOG_ERROR(LOG_APP, \"ret:%{public}d\", ret);\n    }\n\n    napi_value code = nullptr;\n    napi_create_int32(env, ret, &code);\n    napi_set_named_property(env, result, \"code\", code);\n\n    if (ret == ERR_OK && localDeviceName != nullptr) {\n        napi_value deviceName = nullptr;\n        napi_create_string_utf8(env, localDeviceName, NAPI_AUTO_LENGTH, &deviceName);\n        napi_set_named_property(env, result, \"deviceName\", deviceName);\n        delete[] localDeviceName; // 释放内存\n\n        napi_value deviceNameLen = nullptr;\n        napi_create_int32(env, len, &deviceNameLen);\n        napi_set_named_property(env, result, \"deviceNameLen\", deviceNameLen);\n    }\n    return result;\n}\n"
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