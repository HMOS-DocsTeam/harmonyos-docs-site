"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["605275"], {
79116(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_hardware_driver_development_kit_specialized_driver_development_usb_serial_ddk_guidelines_usb_serial_ddk_guidelines_md_010_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-hardware-driver-development-kit-specialized-driver-development-usb-serial-ddk-guidelines-usb-serial-ddk-guidelines-md-010.json
var site_docs_system_hardware_driver_development_kit_specialized_driver_development_usb_serial_ddk_guidelines_usb_serial_ddk_guidelines_md_010_namespaceObject = JSON.parse('{"id":"system-hardware/driver-development-kit/specialized-driver-development/usb-serial-ddk-guidelines/usb-serial-ddk-guidelines","title":"开发适用串口协议的设备驱动","description":"简介","source":"@site/docs/system-hardware/driver-development-kit/specialized-driver-development/usb-serial-ddk-guidelines/usb-serial-ddk-guidelines.md","sourceDirName":"system-hardware/driver-development-kit/specialized-driver-development/usb-serial-ddk-guidelines","slug":"/system-hardware/driver-development-kit/specialized-driver-development/usb-serial-ddk-guidelines/","permalink":"/harmonyos-docs-site/system-hardware/driver-development-kit/specialized-driver-development/usb-serial-ddk-guidelines/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"开发适用串口协议的设备驱动","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/usb-serial-ddk-guidelines","kit":"system/hardware","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"开发适用HID协议的设备驱动","permalink":"/harmonyos-docs-site/system-hardware/driver-development-kit/specialized-driver-development/hid-ddk-guidelines/"},"next":{"title":"开发使用SCSI协议的设备驱动","permalink":"/harmonyos-docs-site/system-hardware/driver-development-kit/specialized-driver-development/scsi-peripheral-ddk-guidelines/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-hardware/driver-development-kit/specialized-driver-development/usb-serial-ddk-guidelines/usb-serial-ddk-guidelines.md


const frontMatter = {
	title: '开发适用串口协议的设备驱动',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/usb-serial-ddk-guidelines',
	kit: 'system/hardware',
	last_updated: '2026-04-22'
};
const contentTitle = '开发适用串口协议的设备驱动';

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
  "level": 3
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
}, {
  "value": "调测验证",
  "id": "调测验证",
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
        id: "开发适用串口协议的设备驱动",
        children: "开发适用串口协议的设备驱动"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "简介",
      children: "简介"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在工业用途场景中和一些陈旧设备上，都有对非标串口设备的使用需求，例如：温湿度计、特殊身份读卡器等，当系统中没有适配该设备的驱动时，会导致设备接入后无法使用。USBSerialDDK（USB Serial Driver Development Kit）是为开发者提供的USB串口驱动程序开发套件，支持开发者基于用户态，在应用层开发USB串口设备驱动。USBSerialDDK提供了一系列主机侧访问设备的接口，包括主机侧打开和关闭接口、串口读写通信等。依赖这些驱动开发接口，该类三方生态外设可顺利接入HarmonyOS，满足生态安全加密场景应用需求。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在进行USBSerialDDK开发前，开发者应了解以下基本概念："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "USB 串口"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "USB 串口（USB-to-Serial）是指一种接口转换技术，它允许通过 USB（通用串行总线）接口实现与传统串行端口（如 RS-232、RS-485 等）之间的数据通信。这种技术通常通过专门的硬件适配器或特定的内置芯片来实现。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "AMS"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "AMS（Ability Manager Service）用于协调各Ability运行关系、及对生命周期进行调度的系统服务。在驱动开发过程中用于拉起和关闭扩展驱动能力DriverExtensionAbility。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "BMS"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "BMS（Bundle Manager Service）在HarmonyOS上主要负责应用的安装、卸载和数据管理。"
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
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "非标外设"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "非标外设（也称为自定义外设或专有外设）是指不遵循通用标准或专门为特定应用场景定制设计的外围设备。这类设备往往需要专门的软件支持或者特殊的接口来实现与主机系统的通信。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "标准外设"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "标准外设指的是遵循行业广泛接受的标准规范设计的外围设备（USB 键盘、鼠标）。这些设备通常具有统一的接口协议、物理尺寸和电气特性，使得其可以在不同的系统之间互换使用。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "实现原理",
      children: "实现原理"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "非标外设应用通过扩展外设管理服务获取USB串口设备的ID，通过RPC将ID和要操作的动作下发给USB串口驱动应用，USB串口驱动应用通过调用USBSerialDDK接口可设置串口属性（波特率、数据位、校验位等），读取串口数据，DDK接口使用HDI服务将指令下发至内核驱动，内核驱动使用指令与设备通信。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1"
        })
      }), " USBSerialDDK调用原理"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(866048)/* ["default"] */.A) + "",
        width: "930",
        height: "641"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "USBSerialDDK开放API支持USB串口接口非标外设扩展驱动开发场景。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "USBSerialDDK开放API使用范围内仅允许DriverExtensionAbility生命周期内使用。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "使用USBSerialDDK开放API需要在module.json5中声明匹配的ACL权限，例如ohos.permission.ACCESS_DDK_USB_SERIAL。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "OH_UsbSerial_Init(void)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "初始化USBSerialDDK。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_UsbSerial_Release(void)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "释放USBSerialDDK。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_UsbSerial_Open(uint64_t deviceId, uint8_t interfaceIndex, UsbSerial_Device **dev)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过deviceId和interfaceIndex打开USB串口设备。请在设备使用完后调用OH_UsbSerial_Close()关闭设备，否则会造成内存泄漏。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_UsbSerial_Close(UsbSerial_Device **dev)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "关闭USB串口设备，请在设备使用完后关闭设备，否则会造成内存泄漏。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_UsbSerial_Read(UsbSerial_Device *dev, uint8_t *buff, uint32_t bufferSize, uint32_t *bytesRead)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从USB串口设备读取数据到缓冲区。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_UsbSerial_Write(UsbSerial_Device *dev, uint8_t *buff, uint32_t bufferSize, uint32_t *bytesWritten)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将buff中的数据写入USB串口设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_UsbSerial_SetBaudRate(UsbSerial_Device *dev, uint32_t baudRate)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置USB串口设备的波特率。如果USB串口设备的参数为默认值（数据位为8，停止位为1，数据传输无校验），则只需要调用该接口设置波特率即可。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_UsbSerial_SetParams(UsbSerial_Device *dev, UsbSerial_Params *params)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置USB串口设备的参数，包含波特率、数据传输位、停止位、校验设置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_UsbSerial_SetTimeout(UsbSerial_Device *dev, int timeout)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置读取USB串口设备上报数据的超时时间，默认时间为0。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_UsbSerial_SetFlowControl(UsbSerial_Device *dev, UsbSerial_FlowControl flowControl)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置流控参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_UsbSerial_Flush(UsbSerial_Device *dev)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "写入完成后清空输入和输出缓冲区。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_UsbSerial_FlushInput(UsbSerial_Device *dev)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "刷新输入缓冲区，缓冲区中的数据会被立刻清空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_UsbSerial_FlushOutput(UsbSerial_Device *dev)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "刷新输出缓冲区，缓冲区中的数据会被立刻清空。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["详细的接口说明请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-module/capi-serialddk/capi-serialddk",
        children: "USBSerialDDK"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下步骤描述了如何使用 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "USBSerialDDK"
        })
      }), "开发USB串口驱动："]
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
        children: "libusb_serial_ndk.z.so\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "头文件"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include <usb_serial/usb_serial_api.h>\n#include <usb_serial/usb_serial_types.h>\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "初始化DDK。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["使用 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "usb_serial_api.h"
            })
          }), " 的 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "OH_UsbSerial_Init"
            })
          }), " 初始化DDK。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 初始化USB Serial DDK\nOH_UsbSerial_Init();\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "打开USB串口设备。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["使用 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "usb_serial_api.h"
            })
          }), " 的 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "OH_UsbSerial_Open"
            })
          }), " 打开设备。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "UsbSerial_Device *dev = NULL;\nuint64_t deviceId = 1;\nuint8_t interfaceIndex = 0;\n// 打开deviceId和interfaceIndex指定的USB串口设备\nOH_UsbSerial_Open(deviceId, interfaceIndex, &dev);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置USB串口设备的参数（可选）。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["使用 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "usb_serial_api.h"
            })
          }), " 的 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "OH_UsbSerial_SetParams"
            })
          }), " 接口设置串口参数，或者直接调用 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "OH_UsbSerial_SetBaudRate"
            })
          }), " 设置波特率，使用 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "OH_UsbSerial_SetTimeout"
            })
          }), " 设置读取数据的超时时间。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "UsbSerial_Params params;\nparams.baudRate = NUM_BAUDRATE;\nparams.nDataBits = NUM_EIGHT;\nparams.nStopBits = 1;\nparams.parity = 0;\n// 设置串口参数\nOH_UsbSerial_SetParams(dev, &params);\n    \n// 设置波特率\nuint32_t baudRate = NUM_BAUDRATE;\nOH_UsbSerial_SetBaudRate(dev, baudRate);\n    \n// 设置超时时间\nint timeout = 500;\nOH_UsbSerial_SetTimeout(dev, timeout);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置流控、清空缓冲区（可选）。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["使用 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "usb_serial_api.h"
            })
          }), " 的 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "OH_UsbSerial_SetFlowControl"
            })
          }), " 设置流控方式，使用 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "OH_UsbSerial_Flush"
            })
          }), " 清空缓冲区，使用 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "OH_UsbSerial_FlushInput"
            })
          }), " 清空输入缓冲区，使用 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "OH_UsbSerial_FlushOutput"
            })
          }), " 清空输出缓冲区。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 设置软件流控\nOH_UsbSerial_SetFlowControl(dev, USB_SERIAL_SOFTWARE_FLOW_CONTROL);\n    \n// 清空缓冲区\nOH_UsbSerial_Flush(dev);\n    \n// 清空输入缓冲区\nOH_UsbSerial_FlushInput(dev);\n    \n// 清空输出缓冲区\nOH_UsbSerial_FlushOutput(dev);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "向USB串口设备写入/读取数据（可选）。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["使用 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "usb_serial_api.h"
            })
          }), " 的 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "OH_UsbSerial_Write"
            })
          }), " 给设备发送数据，并使用 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "OH_UsbSerial_Read"
            })
          }), " 读取设备发送过来的数据。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "uint32_t bytesWritten = 0;\n// 测试设备读取指令，具体指令根据设备协议而定\nuint8_t writeBuff[NUM_EIGHT] = {0x01, 0x03, 0x00, 0x00, 0x00, 0x01, 0x84, 0xA};\n// 发送数据\nOH_UsbSerial_Write(dev, writeBuff, sizeof(writeBuff), &bytesWritten);\n    \n// 接收数据\nuint8_t readBuff[100];\nuint32_t bytesRead = 0;\nOH_UsbSerial_Read(dev, readBuff, sizeof(readBuff), &bytesRead);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "关闭USB串口设备。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在所有请求处理完毕，程序退出前，使用 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "usb_serial_api.h"
            })
          }), " 的 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "OH_UsbSerial_Close"
            })
          }), " 关闭设备。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 关闭设备\nOH_UsbSerial_Close(&dev);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "释放DDK。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在关闭USB串口设备后，使用 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "usb_serial_api.h"
            })
          }), " 的 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "OH_UsbSerial_Release"
            })
          }), " 释放DDK。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 释放USB Serial DDK\nOH_UsbSerial_Release();\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "调测验证",
      children: "调测验证"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "驱动应用侧开发完成后，可在HarmonyOS设备上安装应用，测试步骤如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在设备上点击驱动应用，应用在设备上被拉起。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "点击波特率等设置按钮，可以设置串口属性。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "点击数据读取按钮，可以读取到串口设备数据。"
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
866048(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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