"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["585394"], {
924503(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_hardware_driver_development_kit_specialized_driver_development_usb_ddk_guidelines_usb_ddk_guidelines_md_24a_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-hardware-driver-development-kit-specialized-driver-development-usb-ddk-guidelines-usb-ddk-guidelines-md-24a.json
var site_docs_system_hardware_driver_development_kit_specialized_driver_development_usb_ddk_guidelines_usb_ddk_guidelines_md_24a_namespaceObject = JSON.parse('{"id":"system-hardware/driver-development-kit/specialized-driver-development/usb-ddk-guidelines/usb-ddk-guidelines","title":"开发适用USB协议的设备驱动","description":"简介","source":"@site/docs/system-hardware/driver-development-kit/specialized-driver-development/usb-ddk-guidelines/usb-ddk-guidelines.md","sourceDirName":"system-hardware/driver-development-kit/specialized-driver-development/usb-ddk-guidelines","slug":"/system-hardware/driver-development-kit/specialized-driver-development/usb-ddk-guidelines/","permalink":"/harmonyos-docs-site/system-hardware/driver-development-kit/specialized-driver-development/usb-ddk-guidelines/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"开发适用USB协议的设备驱动","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/usb-ddk-guidelines","kit":"system/hardware","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"开发带UI界面基础驱动","permalink":"/harmonyos-docs-site/system-hardware/driver-development-kit/development-of-basic-drivers/externaldevice-guidelines/"},"next":{"title":"开发适用HID协议的设备驱动","permalink":"/harmonyos-docs-site/system-hardware/driver-development-kit/specialized-driver-development/hid-ddk-guidelines/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-hardware/driver-development-kit/specialized-driver-development/usb-ddk-guidelines/usb-ddk-guidelines.md


const frontMatter = {
	title: '开发适用USB协议的设备驱动',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/usb-ddk-guidelines',
	kit: 'system/hardware',
	last_updated: '2026-04-22'
};
const contentTitle = '开发适用USB协议的设备驱动';

const assets = {

};



const toc = [{
  "value": "简介",
  "id": "简介",
  "level": 2
}, {
  "value": "基本概念",
  "id": "基本概念",
  "level": 3
}, {
  "value": "实现原理",
  "id": "实现原理",
  "level": 3
}, {
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 2
}, {
  "value": "环境搭建",
  "id": "环境搭建",
  "level": 2
}, {
  "value": "开发指导",
  "id": "开发指导",
  "level": 2
}, {
  "value": "接口说明",
  "id": "接口说明",
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
        id: "开发适用usb协议的设备驱动",
        children: "开发适用USB协议的设备驱动"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "简介",
      children: "简介"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "UsbDdk（USB Driver Development Kit）是为开发者提供的USB驱动程序开发套件，支持开发者基于用户态，在应用层开发USB设备驱动。提供了一系列主机侧访问设备的接口，包括主机侧打开和关闭接口、管道同步异步读写通信、控制传输、中断传输等。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "凡是采用USB总线，通过USB协议传输数据的设备都可以使用UsbDdk开发设备驱动。特别是内核标准驱动不支持的扩展外设，可以通过UsbDdk开发的扩展外设驱动应用实现其独特的设备能力。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在进行UsbDdk开发前，开发者应了解以下基本概念："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "USB"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "USB（Universal Serial Bus，通用串行总线）是一种广泛使用的接口技术，用于连接计算机与各种外部设备，如键盘、鼠标、打印机、存储设备、智能手机等。USB 的设计目标是提供一种标准化、高效且易于使用的连接方式，以替代传统的串行和并行接口。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "DDK"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "DDK（Driver Development Kit）是HarmonyOS基于扩展外设框架，为开发者提供的驱动应用开发的工具包，可针对非标USB设备，开发对应的驱动。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "实现原理",
      children: "实现原理"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "非标外设应用通过扩展外设管理服务获取USB设备的ID，通过RPC将ID和要操作的动作下发给USB驱动应用。USB驱动应用通过调用UsbDdk接口，可获取设备描述符与配置描述符，以及发送控制传输和中断传输等请求，DDK接口使用HDI服务将指令下发至内核驱动，内核驱动使用指令与设备通信。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1"
        })
      }), " UsbDdk调用原理"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(994879)/* ["default"] */.A) + "",
        width: "930",
        height: "641"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "UsbDdk开放API支持USB接口非标外设扩展驱动开发场景。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "UsbDdk开放API仅允许DriverExtensionAbility生命周期内使用。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "使用UsbDdk开放API需要在module.json5中声明匹配的ACL权限，例如ohos.permission.ACCESS_DDK_USB。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "环境搭建",
      children: "环境搭建"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-hardware/driver-development-kit/environmental-preparation",
        children: "环境准备"
      }), "完成开发前的准备工作。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发指导",
      children: "开发指导"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "接口说明",
      children: "接口说明"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "OH_Usb_Init(void)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "初始化DDK。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Usb_Release(void)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "释放DDK。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Usb_GetDeviceDescriptor(uint64_t deviceId, struct UsbDeviceDescriptor *desc)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取设备描述符。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Usb_GetConfigDescriptor(uint64_t deviceId, uint8_t configIndex, struct UsbDdkConfigDescriptor **const config)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取配置描述符。请在描述符使用完后使用OH_Usb_FreeConfigDescriptor()释放描述符，否则会造成内存泄漏。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Usb_FreeConfigDescriptor(const struct UsbDdkConfigDescriptor *const config)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "释放配置描述符，请在描述符使用完后释放描述符，否则会造成内存泄漏。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Usb_ClaimInterface(uint64_t deviceId, uint8_t interfaceIndex, uint64_t *interfaceHandle)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "声明接口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Usb_SelectInterfaceSetting(uint64_t interfaceHandle, uint8_t settingIndex)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "激活接口的备用设置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Usb_GetCurrentInterfaceSetting(uint64_t interfaceHandle, uint8_t *settingIndex)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取接口当前激活的备用设置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Usb_SendControlReadRequest(uint64_t interfaceHandle, const struct UsbControlRequestSetup *setup, uint32_t timeout, uint8_t *data, uint32_t *dataLen)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "发送控制读请求，该接口为同步接口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Usb_SendControlWriteRequest(uint64_t interfaceHandle, const struct UsbControlRequestSetup *setup, uint32_t timeout, const uint8_t *data, uint32_t dataLen)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "发送控制写请求，该接口为同步接口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Usb_ReleaseInterface(uint64_t interfaceHandle)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "释放接口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Usb_SendPipeRequest(const struct UsbRequestPipe *pipe, UsbDeviceMemMap *devMmap)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "发送管道请求，该接口为同步接口。中断传输和批量传输都使用该接口发送请求。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Usb_CreateDeviceMemMap(uint64_t deviceId, size_t size, UsbDeviceMemMap **devMmap)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建缓冲区。请在缓冲区使用完后，调用OH_Usb_DestroyDeviceMemMap()销毁缓冲区，否则会造成资源泄漏。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Usb_DestroyDeviceMemMap(UsbDeviceMemMap *devMmap)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁缓冲区。请在缓冲区使用完后及时销毁缓冲区，否则会造成资源泄漏。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Usb_GetDevices(struct Usb_DeviceArray *devices)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取USB设备ID列表。请保证传入的指针参数是有效的，申请的设备ID数组的大小建议不超过128，以避免过度占用内存。在使用完结构之后，释放成员内存，否则造成资源泄漏。获取到的USB设备ID，已通过驱动配置信息中的vid进行筛选过滤。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["详细的接口说明请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-module/capi-usbddk/capi-usbddk",
        children: "UsbDdk"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下步骤描述了如何使用 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "UsbDdk"
        })
      }), "开发USB驱动："]
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
        children: "libusb_ndk.z.so\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "头文件"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include <usb/usb_ddk_api.h>\n#include <usb/usb_ddk_types.h>\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取设备描述符。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["使用 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "usb_ddk_api.h"
            })
          }), " 的 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "OH_Usb_Init"
            })
          }), " 接口初始化DDK，并使用 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "OH_Usb_GetDeviceDescriptor"
            })
          }), "获取到设备描述符。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 初始化USB DDK\nint32_t ret = OH_Usb_Init();\nOH_LOG_INFO(LOG_APP, \"OH_Usb_Init ret=:%{public}d\\n\", ret);\n// ...\nstruct UsbDeviceDescriptor devDesc;\n// 获取设备描述符\nret = OH_Usb_GetDeviceDescriptor(g_devHandle, &devDesc);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取配置描述符及声明接口。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["使用 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "usb_ddk_api.h"
            })
          }), " 的 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "OH_Usb_GetConfigDescriptor"
            })
          }), " 接口获取配置描述符 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "config"
            })
          }), "，并使用 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "OH_Usb_ClaimInterface"
            })
          }), " 声明\"认领\"接口。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "struct UsbDdkConfigDescriptor *config = nullptr;\n// 获取配置描述符\nauto ret = OH_Usb_GetConfigDescriptor(g_devHandle, 1, &config);\nOH_LOG_INFO(LOG_APP, \"OH_Usb_GetConfigDescriptor ret = %{public}d\", ret);\nif (ret != 0) {\n    OH_LOG_ERROR(LOG_APP, \"get config desc failed:%{public}d\", ret);\n    return false;\n}\n// 从配置描述符中找到手写板相关的接口和端点\nauto [res, interface, endpoint, maxPktSize] = GetInterfaceAndEndpoint(config);\nOH_LOG_INFO(LOG_APP, \"OH_Usb_GetConfigDescriptor ret = %{public}d\", res);\nif (!res) {\n    OH_LOG_ERROR(LOG_APP, \"GetInterfaceAndEndpoint failed\");\n    return false;\n}\n// 释放配置描述符，防止内存泄露\nOH_Usb_FreeConfigDescriptor(config);\ng_dataEp = endpoint;\ng_maxPktSize = maxPktSize;\ng_interface = interface;\n// 占用接口，同时也会卸载内核键盘驱动\nret = OH_Usb_ClaimInterface(g_devHandle, g_interface, &g_interfaceHandle);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取当前激活接口的备用设置及激活备用设置（可选）。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["使用 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "usb_ddk_api.h"
            })
          }), " 的 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "OH_Usb_GetCurrentInterfaceSetting"
            })
          }), " 获取备用设置，并使用 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "OH_Usb_SelectInterfaceSetting"
            })
          }), " 激活备用设置。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "uint8_t settingIndex = 0;\n// 接口获取备用设置\nint32_t ret = OH_Usb_GetCurrentInterfaceSetting(g_interfaceHandle, &settingIndex);\nif (ret != USB_DDK_SUCCESS) {\n    OH_LOG_ERROR(LOG_APP, \"OH_Usb_GetCurrentInterfaceSetting failed, ret=%{public}d\", ret);\n}\n\n// 激活备用设置\nret = OH_Usb_SelectInterfaceSetting(g_interfaceHandle, settingIndex);\nif (ret != USB_DDK_SUCCESS) {\n    OH_LOG_ERROR(LOG_APP, \"OH_Usb_SelectInterfaceSetting failed, ret=%{public}d\", ret);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "发送控制读请求、发送控制写请求（可选）。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["使用 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "usb_ddk_api.h"
            })
          }), " 的", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "OH_Usb_SendControlReadRequest"
            })
          }), "发送控制读请求，或者使用", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "OH_Usb_SendControlWriteRequest"
            })
          }), "发送控制写请求。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "uint8_t strDesc[100] = {0};\n// 获取产品字符串描述符\nuint32_t len = 100;\nstruct UsbControlRequestSetup strDescSetup;\nstrDescSetup.bmRequestType = 0x80;\nstrDescSetup.bRequest = 0x06;\nstrDescSetup.wValue = (0x03 << BIT_EIGHT) | (iProduct); // desc Index\nstrDescSetup.wIndex = 0x409;                    // language Id\nstrDescSetup.wLength = len;\nauto ret = OH_Usb_SendControlReadRequest(g_interfaceHandle, &strDescSetup, UINT32_MAX, strDesc, &len);\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 设置feature\nuint32_t timeout = 5000;\nstruct UsbControlRequestSetup strDescSetup;\nstrDescSetup.bmRequestType = 0x21;\nstrDescSetup.bRequest = 0x09;\nstrDescSetup.wValue = ((0x03 << BIT_EIGHT) | 0x02); // desc Index\nstrDescSetup.wIndex = 0x0;\nstrDescSetup.wLength = 0x02;\nuint8_t data[128] = {0x02, 0x02};\nuint32_t dataLen = 2;\nint32_t ret = OH_Usb_SendControlWriteRequest(g_interfaceHandle, &strDescSetup, timeout, data, dataLen);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建内存映射缓冲区及发送请求（可选）。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["使用 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "usb_ddk_api.h"
            })
          }), " 的", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "OH_Usb_CreateDeviceMemMap"
            })
          }), "接口创建内存映射缓冲区", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "devMmap"
            })
          }), "，并使用", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "OH_Usb_SendPipeRequest"
            })
          }), "发送请求。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 占用接口，同时也会卸载内核键盘驱动\n// 创建用于存放数据的缓冲区\nint32_t ret = OH_Usb_CreateDeviceMemMap(g_devHandle, bufferLen, &devMmap);\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "struct UsbRequestPipe pipe;\npipe.interfaceHandle = g_interfaceHandle;\npipe.endpoint = g_dataEp;\npipe.timeout = 4; // 中断传输超时时间，保持和手写板bInterval保持一致\n// 读取手写板数据\n// 通过USB中断传输方式，读取键值\nret = OH_Usb_SendPipeRequest(&pipe, devMmap);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "释放资源。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在所有请求处理完毕，程序退出前，使用 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "usb_ddk_api.h"
            })
          }), " 的 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "OH_Usb_DestroyDeviceMemMap"
            })
          }), " 接口销毁缓冲区。使用", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "OH_Usb_ReleaseInterface"
            })
          }), "释放接口。使用", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "OH_Usb_Release"
            })
          }), "释放UsbDdk。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 销毁缓冲区\nOH_Usb_DestroyDeviceMemMap(devMmap);\n// 释放接口\nint32_t ret = OH_Usb_ReleaseInterface(g_interfaceHandle);\nif (ret != 0) {\n    OH_LOG_ERROR(LOG_APP, \"ReleaseInterface failed %{public}d\", ret);\n}\n// 释放USB DDK\nOH_Usb_Release();\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取可识别的USB设备列表（独立步骤，可选）。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["驱动拉起后调用", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "OH_Usb_GetDevices"
            })
          }), "接口获取驱动配置信息中匹配vid（vid是设备厂商的vendor id，在驱动应用里面配置，表示驱动适配哪些设备，查询到的设备ID都需要通过vid进行过滤）的设备ID，以供后续应用开发使用。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "constexpr size_t maxUsbDeviceNum = 128;\nstruct Usb_DeviceArray deviceArray;\ndeviceArray.deviceIds = new uint64_t[maxUsbDeviceNum];\n// 获取设备列表\nint32_t ret = OH_Usb_GetDevices(&deviceArray);\nif (ret != USB_DDK_SUCCESS) {\n    OH_LOG_ERROR(LOG_APP, \"OH_Usb_GetDevices failed, ret=%{public}d\", ret);\n}\n"
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
994879(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438519-d6f02eda16b792ea90d120a19e3f194f.png");

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