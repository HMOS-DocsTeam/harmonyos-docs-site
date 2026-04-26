"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["426458"], {
375843(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_hardware_driver_development_kit_specialized_driver_development_scsi_peripheral_ddk_guidelines_scsi_peripheral_ddk_guidelines_md_67a_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-hardware-driver-development-kit-specialized-driver-development-scsi-peripheral-ddk-guidelines-scsi-peripheral-ddk-guidelines-md-67a.json
var site_docs_system_hardware_driver_development_kit_specialized_driver_development_scsi_peripheral_ddk_guidelines_scsi_peripheral_ddk_guidelines_md_67a_namespaceObject = JSON.parse('{"id":"system-hardware/driver-development-kit/specialized-driver-development/scsi-peripheral-ddk-guidelines/scsi-peripheral-ddk-guidelines","title":"开发使用SCSI协议的设备驱动","description":"简介","source":"@site/docs/system-hardware/driver-development-kit/specialized-driver-development/scsi-peripheral-ddk-guidelines/scsi-peripheral-ddk-guidelines.md","sourceDirName":"system-hardware/driver-development-kit/specialized-driver-development/scsi-peripheral-ddk-guidelines","slug":"/system-hardware/driver-development-kit/specialized-driver-development/scsi-peripheral-ddk-guidelines/","permalink":"/harmonyos-docs-site/system-hardware/driver-development-kit/specialized-driver-development/scsi-peripheral-ddk-guidelines/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"开发使用SCSI协议的设备驱动","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/scsi-peripheral-ddk-guidelines","kit":"system/hardware","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"开发适用串口协议的设备驱动","permalink":"/harmonyos-docs-site/system-hardware/driver-development-kit/specialized-driver-development/usb-serial-ddk-guidelines/"},"next":{"title":"常见问题","permalink":"/harmonyos-docs-site/system-hardware/driver-development-kit/externaldevice-faqs/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-hardware/driver-development-kit/specialized-driver-development/scsi-peripheral-ddk-guidelines/scsi-peripheral-ddk-guidelines.md


const frontMatter = {
	title: '开发使用SCSI协议的设备驱动',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/scsi-peripheral-ddk-guidelines',
	kit: 'system/hardware',
	last_updated: '2026-04-22'
};
const contentTitle = '开发使用SCSI协议的设备驱动';

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
        id: "开发使用scsi协议的设备驱动",
        children: "开发使用SCSI协议的设备驱动"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "简介",
      children: "简介"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在企业级存储解决方案和工业应用场景中，对SCSI（Small Computer System Interface，小型计算机系统接口）设备的使用需求广泛存在，例如：磁盘阵列、磁带库以及特定类型的存储服务器等。当操作系统中缺乏针对这些设备的适配驱动时，会导致设备连接后无法被识别或正常使用。ScsiPeripheralDDK（SCSI Peripheral Driver Development Kit）是为开发者提供的专门用于开发SCSI设备驱动程序的套件，支持开发者基于用户态，在应用层进行SCSI设备驱动的开发。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ScsiPeripheralDDK支持SPC（SCSI Primary Commands）、SBC（SCSI Block Commands）和MMC（MultiMedia Commands）三个命令集中的七个常用命令（INQUIRY、READ CAPACITY、TEST UNIT READY、REQUEST SENSE、READ、WRITE和VERIFY），使得开发者可以使用相对熟悉的命令进行设备驱动开发。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在进行ScsiPeripheralDDK开发前，开发者应了解以下基本概念："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "SCSI"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "SCSI是一种用于计算机和外围设备如硬盘驱动器、磁带驱动器、光盘驱动器、扫描仪等之间通信的标准化协议集。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "AMS"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "AMS（Ability Manager Service）是用于协调各Ability运行关系，以及对生命周期进行调度的系统服务。"
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
          children: "DDK（Driver Development Kit）是HarmonyOS基于扩展外设框架，为开发者提供的驱动应用开发的工具包，可针对SCSI非标外设，开发对应的驱动。"
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
          children: "标准外设指的是遵循行业广泛接受的标准规范设计的外围设备（USB键盘、鼠标）。此类设备通常具有统一的接口协议、物理尺寸和电气特性，使得其可以在不同的系统之间互换使用。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "逻辑块"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "逻辑块（Logical Block）是一个基本的数据存储单位。它代表设备上的一块固定大小的数据区域，通常用于数据读写操作。逻辑块的大小可以是512字节、1024字节、2048字节等，具体大小取决于设备的配置和文件系统的设计。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "CDB"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "CDB（Command Descriptor Block）即命令描述块，是 SCSI协议中用于发送命令的标准数据结构。CDB是一个固定长度的字节数组，包含了SCSI命令的操作码（Opcode）以及相关的参数，用于告诉设备执行什么操作（如读取、写入、查询等）。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "实现原理",
      children: "实现原理"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "非标外设应用通过扩展外设管理服务获取SCSI设备的ID，通过RPC将ID和要操作的动作下发给SCSI驱动应用，SCSI驱动应用通过调用ScsiPeripheralDDK接口可获取SCSI设备基本信息，读写数据，DDK接口使用HDI服务将指令下发至内核驱动，内核驱动使用指令与设备通信。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1"
        })
      }), " ScsiPeripheralDDK调用原理"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(686490)/* ["default"] */.A) + "",
        width: "930",
        height: "641"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ScsiPeripheralDDK开放API支持标准SCSI类外设扩展驱动开发场景。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ScsiPeripheralDDK开放API仅允许在DriverExtensionAbility生命周期内使用。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "使用ScsiPeripheralDDK开放API需要在module.json5中声明对应的ACL权限：ohos.permission.ACCESS_DDK_SCSI_PERIPHERAL。"
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
            children: "int32_t OH_ScsiPeripheral_Init(void)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "初始化ScsiPeripheralDDK。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t OH_ScsiPeripheral_Release(void)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "释放ScsiPeripheralDDK。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t OH_ScsiPeripheral_Open(uint64_t deviceId, uint8_t interfaceIndex, ScsiPeripheral_Device **dev)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "打开deviceId和interfaceIndex指定的SCSI设备。其中，deviceId可以通过USB设备的总线编号左移32位后、同其设备地址进行或运算得到，interfaceIndex为需要打开的USB接口的索引值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t OH_ScsiPeripheral_Close(ScsiPeripheral_Device **dev)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "关闭SCSI设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t OH_ScsiPeripheral_TestUnitReady(ScsiPeripheral_Device *dev, ScsiPeripheral_TestUnitReadyRequest *request, ScsiPeripheral_Response *response)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "检查逻辑单元是否已经准备好。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t OH_ScsiPeripheral_Inquiry(ScsiPeripheral_Device *dev, ScsiPeripheral_InquiryRequest *request, ScsiPeripheral_InquiryInfo *inquiryInfo, ScsiPeripheral_Response *response)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询SCSI设备的基本信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t OH_ScsiPeripheral_ReadCapacity10(ScsiPeripheral_Device *dev, ScsiPeripheral_ReadCapacityRequest *request, ScsiPeripheral_CapacityInfo *capacityInfo, ScsiPeripheral_Response *response)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取SCSI设备的容量信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t OH_ScsiPeripheral_RequestSense(ScsiPeripheral_Device *dev, ScsiPeripheral_RequestSenseRequest *request, ScsiPeripheral_Response *response)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取sense data（SCSI设备返回给主机的信息，用于报告设备的状态、错误信息以及诊断信息）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t OH_ScsiPeripheral_Read10(ScsiPeripheral_Device *dev, ScsiPeripheral_IORequest *request, ScsiPeripheral_Response *response)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从指定逻辑块读取数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t OH_ScsiPeripheral_Write10(ScsiPeripheral_Device *dev, ScsiPeripheral_IORequest *request, ScsiPeripheral_Response *response)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "写数据到设备的指定逻辑块。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t OH_ScsiPeripheral_Verify10(ScsiPeripheral_Device *dev, ScsiPeripheral_VerifyRequest *request, ScsiPeripheral_Response *response)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "校验指定逻辑块。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t OH_ScsiPeripheral_SendRequestByCdb(ScsiPeripheral_Device *dev, ScsiPeripheral_Request *request, ScsiPeripheral_Response *response)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "以CDB方式发送SCSI命令。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t OH_ScsiPeripheral_CreateDeviceMemMap(ScsiPeripheral_Device *dev, size_t size, ScsiPeripheral_DeviceMemMap **devMmap)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建缓冲区。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t OH_ScsiPeripheral_DestroyDeviceMemMap(ScsiPeripheral_DeviceMemMap *devMmap)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁缓冲区。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t OH_ScsiPeripheral_ParseBasicSenseInfo(uint8_t *senseData, uint8_t senseDataLen, ScsiPeripheral_BasicSenseInfo *senseInfo)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "解析基本的sense data，包括Information、Command specific information、Sense key specific字段。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["详细的接口说明请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-module/capi-scsiperipheralddk/capi-scsiperipheralddk",
        children: "ScsiPeripheralDDK"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下步骤描述了如何使用ScsiPeripheralDDK开发非标SCSI外设的驱动："
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
        children: "libscsi.z.so\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "头文件"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include <scsi_peripheral/scsi_peripheral_api.h>\n#include <scsi_peripheral/scsi_peripheral_types.h>\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "初始化DDK。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["使用 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "scsi_peripheral_api.h"
            })
          }), " 的 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "OH_ScsiPeripheral_Init"
            })
          }), " 初始化ScsiPeripheralDDK。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 初始化SCSI Peripheral DDK\nint32_t ret = OH_ScsiPeripheral_Init();\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "打开设备。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["初始化ScsiPeripheralDDK后，使用 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "scsi_peripheral_api.h"
            })
          }), " 的 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "OH_ScsiPeripheral_Open"
            })
          }), " 打开SCSI设备。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "ret = OH_ScsiPeripheral_Open(g_devHandle, interfaceIndex, &g_scsiPeripheralDevice);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建缓冲区（可选）。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["使用 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "scsi_peripheral_api.h"
            })
          }), " 的 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "OH_ScsiPeripheral_CreateDeviceMemMap"
            })
          }), " 创建内存缓冲区devMmap。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "ret = OH_ScsiPeripheral_CreateDeviceMemMap(g_scsiPeripheralDevice, DEVICE_MEM_MAP_SIZE, &g_scsiDeviceMemMap);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "检查逻辑单元是否已经准备好（可选）。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["使用 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "scsi_peripheral_api.h"
            })
          }), " 的 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "OH_ScsiPeripheral_TestUnitReady"
            })
          }), " 检查逻辑单元是否已经准备好。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "int32_t ret = OH_ScsiPeripheral_TestUnitReady(g_scsiPeripheralDevice, &request, &response);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "查询SCSI设备的基本信息（可选）。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["使用 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "scsi_peripheral_api.h"
            })
          }), " 的 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "OH_ScsiPeripheral_Inquiry"
            })
          }), " 获取SCSI设备的基本信息。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "int32_t ret = OH_ScsiPeripheral_Inquiry(g_scsiPeripheralDevice, &inquiryRequest, &inquiryInfo, &response);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取SCSI设备的容量信息（可选）。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["使用 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "scsi_peripheral_api.h"
            })
          }), " 的 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "OH_ScsiPeripheral_ReadCapacity10"
            })
          }), " 获取SCSI设备容量信息。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "ret = OH_ScsiPeripheral_ReadCapacity10(g_scsiPeripheralDevice, &readCapacityRequest, &capacityInfo, &response);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取sense data（可选）。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["使用 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "scsi_peripheral_api.h"
            })
          }), " 的 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "OH_ScsiPeripheral_RequestSense"
            })
          }), " 获取sense data。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "int32_t ret = OH_ScsiPeripheral_RequestSense(g_scsiPeripheralDevice, &senseRequest, &response);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "解析sense data（可选）。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["使用 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "scsi_peripheral_api.h"
            })
          }), " 的 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "OH_ScsiPeripheral_ParseBasicSenseInfo"
            })
          }), " 解析基本的sense data，包括Information、Command specific information、Sense key specific字段。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "int32_t ret = OH_ScsiPeripheral_ParseBasicSenseInfo(response.senseData, SCSIPERIPHERAL_MAX_SENSE_DATA_LEN,\n    &senseInfo);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "读取数据（可选）。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["使用 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "scsi_peripheral_api.h"
            })
          }), " 的 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "OH_ScsiPeripheral_Read10"
            })
          }), " 读取指定逻辑块的数据。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "int32_t ret = OH_ScsiPeripheral_Read10(g_scsiPeripheralDevice, &request, &response);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "写入数据（可选）。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["使用 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "scsi_peripheral_api.h"
            })
          }), " 的 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "OH_ScsiPeripheral_Write10"
            })
          }), " 写数据到设备指定逻辑块。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "int32_t ret = OH_ScsiPeripheral_Write10(g_scsiPeripheralDevice, &request, &response);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "校验指定逻辑块（可选）。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["使用 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "scsi_peripheral_api.h"
            })
          }), " 的 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "OH_ScsiPeripheral_Verify10"
            })
          }), " 校验指定逻辑块。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "int32_t ret = OH_ScsiPeripheral_Verify10(g_scsiPeripheralDevice, &request, &response);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "以CDB方式发送SCSI命令（可选）。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["使用 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "scsi_peripheral_api.h"
            })
          }), " 的 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "OH_ScsiPeripheral_SendRequestByCdb"
            })
          }), " 发送SCSI命令。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "int32_t ret = OH_ScsiPeripheral_SendRequestByCdb(g_scsiPeripheralDevice, &request, &response);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "销毁缓冲区（可选）。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在所有请求处理完毕，程序退出前，使用 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "scsi_peripheral_api.h"
            })
          }), " 的 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "OH_ScsiPeripheral_DestroyDeviceMemMap"
            })
          }), " 销毁缓冲区。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "ret = OH_ScsiPeripheral_DestroyDeviceMemMap(g_scsiDeviceMemMap);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "关闭设备。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在销毁缓冲区后，使用 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "scsi_peripheral_api.h"
            })
          }), " 的 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "OH_ScsiPeripheral_Close"
            })
          }), " 关闭设备。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "ret = OH_ScsiPeripheral_Close(&g_scsiPeripheralDevice);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "释放DDK。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在关闭SCSI设备后，使用 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "scsi_peripheral_api.h"
            })
          }), " 的 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "OH_ScsiPeripheral_Release"
            })
          }), " 释放ScsiPeripheralDDK。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "ret = OH_ScsiPeripheral_Release();\n"
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
        children: "应用可以读取到SCSI设备的基础信息。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "选择对应的SCSI命令，输入参数，点击发送按钮，可以执行对应的SCSI命令。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "也可以通过输入方向、CDB数据及CDB长度，点击发送按钮，执行对应的SCSI命令。"
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
686490(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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