"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["199321"], {
528727(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_hardware_driver_development_kit_specialized_driver_development_hid_ddk_guidelines_hid_ddk_guidelines_md_ff8_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-hardware-driver-development-kit-specialized-driver-development-hid-ddk-guidelines-hid-ddk-guidelines-md-ff8.json
var site_docs_system_hardware_driver_development_kit_specialized_driver_development_hid_ddk_guidelines_hid_ddk_guidelines_md_ff8_namespaceObject = JSON.parse('{"id":"system-hardware/driver-development-kit/specialized-driver-development/hid-ddk-guidelines/hid-ddk-guidelines","title":"开发适用HID协议的设备驱动","description":"简介","source":"@site/docs/system-hardware/driver-development-kit/specialized-driver-development/hid-ddk-guidelines/hid-ddk-guidelines.md","sourceDirName":"system-hardware/driver-development-kit/specialized-driver-development/hid-ddk-guidelines","slug":"/system-hardware/driver-development-kit/specialized-driver-development/hid-ddk-guidelines/","permalink":"/harmonyos-docs-site/system-hardware/driver-development-kit/specialized-driver-development/hid-ddk-guidelines/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"开发适用HID协议的设备驱动","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/hid-ddk-guidelines","kit":"system/hardware","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"开发适用USB协议的设备驱动","permalink":"/harmonyos-docs-site/system-hardware/driver-development-kit/specialized-driver-development/usb-ddk-guidelines/"},"next":{"title":"开发适用串口协议的设备驱动","permalink":"/harmonyos-docs-site/system-hardware/driver-development-kit/specialized-driver-development/usb-serial-ddk-guidelines/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-hardware/driver-development-kit/specialized-driver-development/hid-ddk-guidelines/hid-ddk-guidelines.md


const frontMatter = {
	title: '开发适用HID协议的设备驱动',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/hid-ddk-guidelines',
	kit: 'system/hardware',
	last_updated: '2026-04-22'
};
const contentTitle = '开发适用HID协议的设备驱动';

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
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}, {
  "value": "HID基础驱动能力开发",
  "id": "hid基础驱动能力开发",
  "level": 3
}, {
  "value": "HID报文通信驱动能力开发",
  "id": "hid报文通信驱动能力开发",
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
        id: "开发适用hid协议的设备驱动",
        children: "开发适用HID协议的设备驱动"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "简介",
      children: "简介"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HidDdk（HID Driver Development Kit）是为开发者提供的HID设备驱动程序开发套件，支持开发者基于用户态，在应用层开发HID设备驱动。提供了一系列主机侧访问设备的接口，包括创建设备、向设备发送事件、销毁设备、打开关闭设备、读取写入报告、获取设备信息等。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "凡是采用USB总线，通过HID协议传输数据的设备，或者通过扩展外设驱动创建虚拟设备，来实现与非标设备的信息交互都可以使用HidDdk开发设备驱动。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在进行HidDdk开发前，开发者应了解以下基本概念："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "HID"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "HID（Human Interface Device），中文意思是“人机接口设备”。它是一类用于实现人与计算机或其他电子设备交互的硬件设备。HID 设备的主要功能是将用户的输入（如按键、点击、移动等）转换为数据信号，并将这些信号发送给主机设备（如计算机、平板、游戏机等），从而实现用户对设备的控制和操作。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "DDK"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "DDK（Driver Development Kit）是HarmonyOS基于扩展外设框架，为开发者提供的驱动应用开发的工具包，可针对非标USB串口设备，开发对应的驱动。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "实现原理",
      children: "实现原理"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "非标外设应用通过扩展外设管理服务获取HID设备的ID，通过RPC将ID和要操作的动作下发给HID设备驱动应用，驱动应用通过调用HidDdk接口可创建、销毁HID设备，以及对HID设备发送事件，获取HID报文，解析报文等，DDK接口使用HDI服务将指令下发至内核驱动，内核驱动使用指令与设备通信。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1"
        })
      }), " HidDdk调用原理"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(866831)/* ["default"] */.A) + "",
        width: "930",
        height: "641"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "HidDdk开放API支持非标HID类外设扩展驱动开发场景。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "HidDdk开放API仅允许DriverExtensionAbility生命周期内使用。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "使用HidDdk开放API需要在module.json5中声明匹配的ACL权限，例如ohos.permission.ACCESS_DDK_HID。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "OH_Hid_CreateDevice(Hid_Device *hidDevice, Hid_EventProperties *hidEventProperties)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建HID设备。请在设备使用完后使用OH_Hid_DestroyDevice销毁设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Hid_EmitEvent(int32_t deviceId, const Hid_EmitItem items[], uint16_t length)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "向指定deviceId的HID设备发送事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Hid_DestroyDevice(int32_t deviceId)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁指定deviceId的HID设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t OH_Hid_Init(void)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "初始化HidDdk。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t OH_Hid_Release(void)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "释放HidDdk。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t OH_Hid_Open(uint64_t deviceId, uint8_t interfaceIndex, Hid_DeviceHandle **dev)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "打开deviceId和interfaceIndex指定的设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t OH_Hid_Close(Hid_DeviceHandle **dev)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "关闭设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t OH_Hid_Write(Hid_DeviceHandle *dev, uint8_t *data, uint32_t length, uint32_t *bytesWritten)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "向设备写入报告。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t OH_Hid_ReadTimeout(Hid_DeviceHandle *dev, uint8_t *data, uint32_t buffSize, int timeout, uint32_t *bytesRead)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在指定的超时时间内从设备读取报告。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t OH_Hid_Read(Hid_DeviceHandle *dev, uint8_t *data, uint32_t buffSize, uint32_t *bytesRead)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从设备读取报告，默认为阻塞模式（阻塞等待直到有数据可读取），可以调用OH_Hid_SetNonBlocking改变模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t OH_Hid_SetNonBlocking(Hid_DeviceHandle *dev, int nonblock)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置设备读取模式为非阻塞。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t OH_Hid_GetRawInfo(Hid_DeviceHandle *dev, Hid_RawDevInfo *rawDevInfo)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取设备原始信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t OH_Hid_GetRawName(Hid_DeviceHandle *dev, char *data, uint32_t buffSize)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取设备原始名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t OH_Hid_GetPhysicalAddress(Hid_DeviceHandle *dev, char *data, uint32_t buffSize)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取设备物理地址。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t OH_Hid_GetRawUniqueId(Hid_DeviceHandle *dev, uint8_t *data, uint32_t buffSize)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取设备原始唯一标识符。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t OH_Hid_SendReport(Hid_DeviceHandle *dev, Hid_ReportType reportType, const uint8_t *data, uint32_t length)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "向设备发送报告。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t OH_Hid_GetReport(Hid_DeviceHandle *dev, Hid_ReportType reportType, uint8_t *data, uint32_t buffSize)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取设备报告。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t OH_Hid_GetReportDescriptor(Hid_DeviceHandle *dev, uint8_t *buf, uint32_t buffSize, uint32_t *bytesRead)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取设备报告描述符。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["详细的接口说明请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-module/capi-hidddk/capi-hidddk",
        children: "HidDdk"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hid基础驱动能力开发",
      children: "HID基础驱动能力开发"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下步骤描述了如何使用 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "HidDdk"
        })
      }), "开发HID设备驱动："]
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
        children: "libhid.z.so\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "头文件"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include <hid/hid_ddk_api.h>\n#include <hid/hid_ddk_types.h>\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建设备。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["使用 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "hid_ddk_api.h"
            })
          }), " 的 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "OH_Hid_CreateDevice"
            })
          }), " 接口创建HID设备，成功返回设备deviceId，失败返回", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-hid-ddk-types-h/capi-hid-ddk-types-h#hid_ddkerrcode",
            children: "Hid_DdkErrCode"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Hid_Device hidDevice = {\n    .deviceName = deviceName.c_str(),\n    .vendorId = 0x6006,\n    .productId = 0x6008,\n    .version = 1,\n    .bustype = BUS_USB\n};\nstd::vector<Hid_EventType> eventType = {HID_EV_KEY};\nHid_EventTypeArray eventTypeArray = {.hidEventType = eventType.data(), .length = (uint16_t)eventType.size()};\nstd::vector<Hid_KeyCode> keyCode = {\n    HID_KEY_1,          HID_KEY_SPACE,       HID_KEY_BACKSPACE,   HID_KEY_ENTER,     HID_KEY_ESC, HID_KEY_SYSRQ,\n    HID_KEY_LEFT_SHIFT, HID_KEY_RIGHT_SHIFT, HID_KEY_VOLUME_DOWN, HID_KEY_VOLUME_UP, HID_KEY_0,   HID_KEY_2,\n    HID_KEY_3,          HID_KEY_4,           HID_KEY_5,           HID_KEY_6,         HID_KEY_7,   HID_KEY_8,\n    HID_KEY_9,          HID_KEY_A,           HID_KEY_B,           HID_KEY_C,         HID_KEY_D,   HID_KEY_E,\n    HID_KEY_F,          HID_KEY_G,           HID_KEY_H,           HID_KEY_I,         HID_KEY_J,   HID_KEY_K,\n    HID_KEY_L,          HID_KEY_M,           HID_KEY_N,           HID_KEY_O,         HID_KEY_P,   HID_KEY_Q,\n    HID_KEY_R,          HID_KEY_S,           HID_KEY_T,           HID_KEY_U,         HID_KEY_V,   HID_KEY_W,\n    HID_KEY_X,          HID_KEY_Y,           HID_KEY_Z,           HID_KEY_DELETE};\nHid_KeyCodeArray keyCodeArray = {.hidKeyCode = keyCode.data(), .length = (uint16_t)keyCode.size()};\nHid_EventProperties hidEventProp = {.hidEventTypes = eventTypeArray, .hidKeys = keyCodeArray};\nint deviceId = OH_Hid_CreateDevice(&hidDevice, &hidEventProp);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "向指定deviceId的HID设备发送事件。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["使用 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "hid_ddk_api.h"
            })
          }), " 的 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "OH_Hid_EmitEvent"
            })
          }), " 向指定的deviceId的设备发送事件。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 向指定deviceId的设备发送事件，事件来源于物理外设，通过InjectEvent方法注入\nint32_t ret = OH_Hid_EmitEvent(item.first, item.second.data(), (uint16_t)item.second.size());\nif (ret != HID_DDK_SUCCESS) {\n    OH_LOG_ERROR(LOG_APP, \"OH_Hid_EmitEvent failed, deviceId:%{public}d\", item.first);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "释放资源。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在所有请求处理完毕，程序退出前，使用 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "hid_ddk_api.h"
            })
          }), " 的 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "OH_Hid_DestroyDevice"
            })
          }), " 接口销毁HID设备。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 销毁HID设备\nint32_t res = OH_Hid_DestroyDevice(deviceId);\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hid报文通信驱动能力开发",
      children: "HID报文通信驱动能力开发"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下步骤描述了如何使用 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "HidDdk"
        })
      }), " 开发HID报文通信驱动："]
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
        children: "libhid.z.so\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "头文件"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include <hid/hid_ddk_api.h>\n#include <hid/hid_ddk_types.h>\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "初始化DDK。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["使用 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "hid_ddk_api.h"
            })
          }), " 的 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "OH_Hid_Init"
            })
          }), " 初始化HidDdk。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 初始化HID DDK\nint32_t ret = OH_Hid_Init();\nif (ret != HID_DDK_SUCCESS) {\n    OH_LOG_ERROR(LOG_APP, \"OH_Hid_Init() return failed: %{public}d\", ret);\n    return ret;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "打开设备。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["初始化HidDdk后，使用 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "hid_ddk_api.h"
            })
          }), " 的 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "OH_Hid_Open"
            })
          }), " 打开HID设备。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "uint32_t bInterfaceNum1 = 0x00;\n// 打开deviceId和interfaceIndex1指定的HID设备（一般为/dev/hidraw0设备文件）\nret = OH_Hid_Open(deviceID_, bInterfaceNum1, &hid_);\nif (ret != 0) {\n    OH_LOG_ERROR(LOG_APP, \"Failed to open hid device, interface number:%{public}u ret:%{public}d\",\n        bInterfaceNum1, ret);\n    return ret;\n}\nuint32_t bInterfaceNum2 = 0x01;\n// 打开deviceId和interfaceIndex2指定的HID设备（一般为/dev/hidraw1设备文件）\nret = OH_Hid_Open(deviceID_, bInterfaceNum2, &hid2_);\nif (ret != 0) {\n    OH_LOG_ERROR(LOG_APP, \"Failed to open hid device, interface number:%{public}u ret:%{public}d\",\n        bInterfaceNum2, ret);\n    return ret;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "向HID设备写入/发送报告（HID设备与主机之间交换的数据包）（可选）。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["当报告类型为HID_OUTPUT_REPORT（输出报告）时，支持如下两种写入/发送方式。\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["使用 ", (0,jsx_runtime.jsx)(_components.strong, {
                    children: (0,jsx_runtime.jsx)(_components.strong, {
                      children: "hid_ddk_api.h"
                    })
                  }), " 的 ", (0,jsx_runtime.jsx)(_components.strong, {
                    children: (0,jsx_runtime.jsx)(_components.strong, {
                      children: "OH_Hid_Write"
                    })
                  }), " 向HID设备写入一个输出报告。"]
                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                  children: (0,jsx_runtime.jsx)(_components.code, {
                    children: "uint32_t bytesWritten;\n// 写入报告\nint32_t ret = OH_Hid_Write(DataParser::GetInstance().getHidObject(), dataBuff, sizeof(dataBuff), &bytesWritten);\nif (ret != HID_DDK_SUCCESS) {\n    OH_LOG_ERROR(LOG_APP, \"OH_Hid_Write failed. ret: %{public}u\", ret);\n}\n"
                  })
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["使用 ", (0,jsx_runtime.jsx)(_components.strong, {
                    children: (0,jsx_runtime.jsx)(_components.strong, {
                      children: "hid_ddk_api.h"
                    })
                  }), " 的 ", (0,jsx_runtime.jsx)(_components.strong, {
                    children: (0,jsx_runtime.jsx)(_components.strong, {
                      children: "OH_Hid_SendReport"
                    })
                  }), " 向HID设备发送一个输出报告。"]
                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                  children: (0,jsx_runtime.jsx)(_components.code, {
                    children: "// 发送输出报告\nint32_t ret = OH_Hid_SendReport(DataParser::GetInstance().getHidObject(), HID_OUTPUT_REPORT, dataBuff,\n                                sizeof(dataBuff));\nif (ret != HID_DDK_SUCCESS) {\n    OH_LOG_ERROR(LOG_APP, \"OH_Hid_SendReport failed. ret: %{public}u\", ret);\n}\n"
                  })
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["当报告类型为HID_FEATURE_REPORT（特性报告）时，使用 ", (0,jsx_runtime.jsx)(_components.strong, {
                    children: (0,jsx_runtime.jsx)(_components.strong, {
                      children: "hid_ddk_api.h"
                    })
                  }), " 的 ", (0,jsx_runtime.jsx)(_components.strong, {
                    children: (0,jsx_runtime.jsx)(_components.strong, {
                      children: "OH_Hid_SendReport"
                    })
                  }), " 向HID设备发送一个特性报告。"]
                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                  children: (0,jsx_runtime.jsx)(_components.code, {
                    children: "uint8_t dataBuff[NUM_EIGHT] = { 0x00 };\nstring str(hexFormat);\nHexStringToUint8Array(str, dataBuff, sizeof(dataBuff));\n// 发送特性报告\nint32_t ret = OH_Hid_SendReport(DataParser::GetInstance().getHid2Object(), HID_FEATURE_REPORT, dataBuff,\n                                sizeof(dataBuff));\nif (ret != HID_DDK_SUCCESS) {\n    OH_LOG_ERROR(LOG_APP, \"OH_Hid_SendReport failed. ret: %{public}u\", ret);\n}\n"
                  })
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "从HID设备读取报告（可选）。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["当报告类型为HID_INPUT_REPORT（输入报告）时，支持如下三种读取方式。\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["使用 ", (0,jsx_runtime.jsx)(_components.strong, {
                    children: (0,jsx_runtime.jsx)(_components.strong, {
                      children: "hid_ddk_api.h"
                    })
                  }), " 的 ", (0,jsx_runtime.jsx)(_components.strong, {
                    children: (0,jsx_runtime.jsx)(_components.strong, {
                      children: "OH_Hid_SetNonBlocking"
                    })
                  }), " 设置读取模式。"]
                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                  children: (0,jsx_runtime.jsx)(_components.code, {
                    children: "// nonblock取值：1启用非阻塞，0禁用非阻塞\nret = OH_Hid_SetNonBlocking(DataParser::GetInstance().getHidObject(), nonblockTag);\nif (ret != HID_DDK_SUCCESS) {\n    OH_LOG_ERROR(LOG_APP, \"OH_Hid_SetNonBlocking failed. ret: %{public}u\", ret);\n    return false;\n}\n"
                  })
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["使用 ", (0,jsx_runtime.jsx)(_components.strong, {
                    children: (0,jsx_runtime.jsx)(_components.strong, {
                      children: "hid_ddk_api.h"
                    })
                  }), " 的 ", (0,jsx_runtime.jsx)(_components.strong, {
                    children: (0,jsx_runtime.jsx)(_components.strong, {
                      children: "OH_Hid_Read"
                    })
                  }), " 或者 ", (0,jsx_runtime.jsx)(_components.strong, {
                    children: (0,jsx_runtime.jsx)(_components.strong, {
                      children: "OH_Hid_ReadTimeout"
                    })
                  }), " 以非阻塞模式或者阻塞模式从HID设备读取一个输入报告。"]
                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                  children: (0,jsx_runtime.jsx)(_components.code, {
                    children: "if (nonblock) {\n    ret = OH_Hid_Read(DataParser::GetInstance().getHidObject(), dataBuff, sizeof(dataBuff), &bytesRead);\n} else {\n    ret = OH_Hid_ReadTimeout(DataParser::GetInstance().getHidObject(), dataBuff, sizeof(dataBuff),\n                             CONST_TIMEOUT, &bytesRead);\n}\n"
                  })
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["使用 ", (0,jsx_runtime.jsx)(_components.strong, {
                    children: (0,jsx_runtime.jsx)(_components.strong, {
                      children: "hid_ddk_api.h"
                    })
                  }), " 的 ", (0,jsx_runtime.jsx)(_components.strong, {
                    children: (0,jsx_runtime.jsx)(_components.strong, {
                      children: "OH_Hid_GetReport"
                    })
                  }), " 从HID设备读取一个输入报告。"]
                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                  children: (0,jsx_runtime.jsx)(_components.code, {
                    children: "uint8_t dataBuff[NUM_NINE] = { 0x00 };\n// 读取输入报告\nint32_t ret = OH_Hid_GetReport(DataParser::GetInstance().getHidObject(), HID_INPUT_REPORT, dataBuff,\n                               sizeof(dataBuff));\nif (ret != HID_DDK_SUCCESS) {\n    OH_LOG_ERROR(LOG_APP, \"OH_Hid_GetReport failed. ret: %{public}u\", ret);\n    return nullptr;\n}\n"
                  })
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["当报告类型为HID_FEATURE_REPORT（特性报告）时，使用 ", (0,jsx_runtime.jsx)(_components.strong, {
                    children: (0,jsx_runtime.jsx)(_components.strong, {
                      children: "hid_ddk_api.h"
                    })
                  }), " 的 ", (0,jsx_runtime.jsx)(_components.strong, {
                    children: (0,jsx_runtime.jsx)(_components.strong, {
                      children: "OH_Hid_GetReport"
                    })
                  }), " 从HID设备读取一个特性报告。"]
                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                  children: (0,jsx_runtime.jsx)(_components.code, {
                    children: "uint8_t dataBuff[NUM_EIGHT] = { 0x00 };\n// 指定报告编号\ndataBuff[0] = 0x07;\n// 读取特性报告\nint32_t ret = OH_Hid_GetReport(DataParser::GetInstance().getHid2Object(), HID_FEATURE_REPORT, dataBuff,\n                               sizeof(dataBuff));\nif (ret != HID_DDK_SUCCESS) {\n    OH_LOG_ERROR(LOG_APP, \"OH_Hid_GetReport failed. ret: %{public}u\", ret);\n    return nullptr;\n}\n"
                  })
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取设备原始信息、原始名称、物理地址、原始唯一标识符（可选）。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["使用 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "hid_ddk_api.h"
            })
          }), " 的 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "OH_Hid_GetRawInfo"
            })
          }), " 获取HID设备原始信息，使用 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "OH_Hid_GetRawName"
            })
          }), " 获取HID设备原始名称，使用 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "OH_Hid_GetPhysicalAddress"
            })
          }), " 获取HID设备物理地址，使用 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "OH_Hid_GetRawUniqueId"
            })
          }), " 获取HID设备原始唯一标识符。这些信息可被上层应用引用，例如在界面中展示设备信息等。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Hid_RawDevInfo rawDevInfo;\nint32_t ret = OH_Hid_GetRawInfo(DataParser::GetInstance().getHidObject(), &rawDevInfo);\nif (ret != HID_DDK_SUCCESS) {\n    OH_LOG_ERROR(LOG_APP, \"OH_Hid_GetRawInfo failed, ret:%{public}d\", ret);\n    return nullptr;\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "char dataBuff[DATA_BUFF_SIZE];\nint32_t ret = OH_Hid_GetRawName(DataParser::GetInstance().getHidObject(), dataBuff, sizeof(dataBuff));\nif (ret != HID_DDK_SUCCESS) {\n    OH_LOG_ERROR(LOG_APP, \"OH_Hid_GetRawName failed, ret:%{public}d\", ret);\n    return nullptr;\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "char dataBuff[DATA_BUFF_SIZE];\nint32_t ret = OH_Hid_GetPhysicalAddress(DataParser::GetInstance().getHidObject(), dataBuff, sizeof(dataBuff));\nif (ret != HID_DDK_SUCCESS) {\n    OH_LOG_ERROR(LOG_APP, \"OH_Hid_GetPhysicalAddress failed, ret:%{public}d\", ret);\n    return nullptr;\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "uint8_t dataBuff[NUM_SIXTY_FOUR];\nint32_t ret = OH_Hid_GetRawUniqueId(DataParser::GetInstance().getHidObject(), dataBuff, sizeof(dataBuff));\nif (ret != HID_DDK_SUCCESS) {\n    OH_LOG_ERROR(LOG_APP, \"OH_Hid_GetRawUniqueId failed, ret:%{public}d\", ret);\n    return nullptr;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取报告描述符（可选）。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["使用 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "hid_ddk_api.h"
            })
          }), " 的 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "OH_Hid_GetReportDescriptor"
            })
          }), " 获取HID设备报告描述符。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "uint8_t dataBuff[DATA_BUFF_SIZE1];\nuint32_t bytesRead;\nint32_t ret = OH_Hid_GetReportDescriptor(DataParser::GetInstance().getHidObject(), dataBuff, sizeof(dataBuff),\n                                         &bytesRead);\nif (ret != HID_DDK_SUCCESS) {\n    OH_LOG_ERROR(LOG_APP, \"OH_Hid_GetReportDescriptor failed, ret:%{public}d\", ret);\n    return nullptr;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "关闭设备。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在所有请求处理完毕后，使用 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "hid_ddk_api.h"
            })
          }), " 的 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "OH_Hid_Close"
            })
          }), " 关闭设备。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Hid_DeviceHandle *hid = DataParser::GetInstance().getHidObject();\nint32_t ret1 = OH_Hid_Close(&hid);\nDataParser::GetInstance().UpdateHid(hid);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "释放DDK。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在关闭HID设备后，使用 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "hid_ddk_api.h"
            })
          }), " 的 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "OH_Hid_Release"
            })
          }), " 释放HidDdk。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "ret1 = OH_Hid_Release();\nif (ret1 != HID_DDK_SUCCESS) {\n    OH_LOG_ERROR(LOG_APP, \"OH_Hid_Init() return failed: %{public}d\", ret1);\n}\n"
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
866831(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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