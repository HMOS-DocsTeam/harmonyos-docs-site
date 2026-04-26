"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["465781"], {
992674(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_system_hardware_api_driver_development_api_driver_development_c_driver_development_headerfile_capi_scsi_peripheral_types_h_capi_scsi_peripheral_types_h_md_c5c_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-system-hardware-api-driver-development-api-driver-development-c-driver-development-headerfile-capi-scsi-peripheral-types-h-capi-scsi-peripheral-types-h-md-c5c.json
var site_docs_ref_system_hardware_api_driver_development_api_driver_development_c_driver_development_headerfile_capi_scsi_peripheral_types_h_capi_scsi_peripheral_types_h_md_c5c_namespaceObject = JSON.parse('{"id":"system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-scsi-peripheral-types-h/capi-scsi-peripheral-types-h","title":"scsi_peripheral_types.h","description":"概述","source":"@site/docs-ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-scsi-peripheral-types-h/capi-scsi-peripheral-types-h.md","sourceDirName":"system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-scsi-peripheral-types-h","slug":"/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-scsi-peripheral-types-h/capi-scsi-peripheral-types-h","permalink":"/harmonyos-docs-site/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-scsi-peripheral-types-h/capi-scsi-peripheral-types-h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"scsi_peripheral_types.h","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsi-peripheral-types-h","kit":"系统","last_updated":"2026-04-22","slug":"capi-scsi-peripheral-types-h"},"sidebar":"ref","previous":{"title":"scsi_peripheral_api.h","permalink":"/harmonyos-docs-site/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-scsi-peripheral-api-h/capi-scsi-peripheral-api-h"},"next":{"title":"usb_ddk_api.h","permalink":"/harmonyos-docs-site/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-usb-ddk-api-h/capi-usb-ddk-api-h"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-scsi-peripheral-types-h/capi-scsi-peripheral-types-h.md


const frontMatter = {
	title: 'scsi_peripheral_types.h',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsi-peripheral-types-h',
	kit: '系统',
	last_updated: '2026-04-22',
	slug: 'capi-scsi-peripheral-types-h'
};
const contentTitle = 'scsi_peripheral_types.h';

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
  "value": "结构体",
  "id": "结构体",
  "level": 3
}, {
  "value": "枚举",
  "id": "枚举",
  "level": 3
}, {
  "value": "枚举类型说明",
  "id": "枚举类型说明",
  "level": 2
}, {
  "value": "ScsiPeripheral_DdkErrCode",
  "id": "scsiperipheral_ddkerrcode",
  "level": 3
}, {
  "value": "ScsiPeripheral_Status",
  "id": "scsiperipheral_status",
  "level": 3
}, {
  "value": "SCSIPERIPHERAL_MIN_DESCRIPTOR_FORMAT_SENSE",
  "id": "scsiperipheral_min_descriptor_format_sense",
  "level": 3
}, {
  "value": "SCSIPERIPHERAL_MIN_FIXED_FORMAT_SENSE",
  "id": "scsiperipheral_min_fixed_format_sense",
  "level": 3
}, {
  "value": "SCSIPERIPHERAL_MAX_CMD_DESC_BLOCK_LEN",
  "id": "scsiperipheral_max_cmd_desc_block_len",
  "level": 3
}, {
  "value": "SCSIPERIPHERAL_MAX_SENSE_DATA_LEN",
  "id": "scsiperipheral_max_sense_data_len",
  "level": 3
}, {
  "value": "SCSIPERIPHERAL_VENDOR_ID_LEN",
  "id": "scsiperipheral_vendor_id_len",
  "level": 3
}, {
  "value": "SCSIPERIPHERAL_PRODUCT_ID_LEN",
  "id": "scsiperipheral_product_id_len",
  "level": 3
}, {
  "value": "SCSIPERIPHERAL_PRODUCT_REV_LEN",
  "id": "scsiperipheral_product_rev_len",
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
        id: "scsi_peripheral_typesh",
        children: "scsi_peripheral_types.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "提供在SCSI Peripheral DDK（驱动开发工具包）API中使用的枚举变量、结构体和宏。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <scsi_peripheral/scsi_peripheral_types.h>"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "库："
        })
      }), " libscsi.z.so"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Driver.SCSI.Extension"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 18"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "相关模块："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-module/capi-scsiperipheralddk/capi-scsiperipheralddk",
        children: "ScsiPeripheralDDK"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "结构体",
      children: "结构体"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "typedef关键字"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-struct/capi-scsiperipheralddk-scsiperipheral-devicememmap/capi-scsiperipheralddk-scsiperipheral-devicememmap",
              children: "ScsiPeripheral_DeviceMemMap"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ScsiPeripheral_DeviceMemMap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过调用OH_ScsiPeripheral_CreateDeviceMemMap创建的设备内存映射。使用该设备内存映射的缓冲区可以提供更好的性能。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-struct/capi-scsiperipheralddk-scsiperipheral-iorequest/capi-scsiperipheralddk-scsiperipheral-iorequest",
              children: "ScsiPeripheral_IORequest"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ScsiPeripheral_IORequest"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "读/写操作的请求参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-struct/capi-scsiperipheralddk-scsiperipheral-request/capi-scsiperipheralddk-scsiperipheral-request",
              children: "ScsiPeripheral_Request"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ScsiPeripheral_Request"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求参数结构体。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-struct/capi-scsiperipheralddk-scsiperipheral-response/capi-scsiperipheralddk-scsiperipheral-response",
              children: "ScsiPeripheral_Response"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ScsiPeripheral_Response"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "响应参数结构体。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-struct/iperipheralddk-scsiperipheral-testunitreadyrequest/iperipheralddk-scsiperipheral-testunitreadyrequest",
              children: "ScsiPeripheral_TestUnitReadyRequest"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ScsiPeripheral_TestUnitReadyRequest"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "命令（test unit ready）的请求结构体。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-struct/pi-scsiperipheralddk-scsiperipheral-inquiryrequest/pi-scsiperipheralddk-scsiperipheral-inquiryrequest",
              children: "ScsiPeripheral_InquiryRequest"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ScsiPeripheral_InquiryRequest"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SCSI命令（inquiry）的请求结构体。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-struct/capi-scsiperipheralddk-scsiperipheral-inquiryinfo/capi-scsiperipheralddk-scsiperipheral-inquiryinfo",
              children: "ScsiPeripheral_InquiryInfo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ScsiPeripheral_InquiryInfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SCSI inquiry 数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-struct/siperipheralddk-scsiperipheral-readcapacityrequest/siperipheralddk-scsiperipheral-readcapacityrequest",
              children: "ScsiPeripheral_ReadCapacityRequest"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ScsiPeripheral_ReadCapacityRequest"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SCSI命令（read capacity）的请求结构体。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-struct/capi-scsiperipheralddk-scsiperipheral-capacityinfo/capi-scsiperipheralddk-scsiperipheral-capacityinfo",
              children: "ScsiPeripheral_CapacityInfo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ScsiPeripheral_CapacityInfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SCSI read capacity 数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-struct/siperipheralddk-scsiperipheral-requestsenserequest/siperipheralddk-scsiperipheral-requestsenserequest",
              children: "ScsiPeripheral_RequestSenseRequest"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ScsiPeripheral_RequestSenseRequest"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SCSI命令（Request Sense）的请求结构体。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-struct/pi-scsiperipheralddk-scsiperipheral-basicsenseinfo/pi-scsiperipheralddk-scsiperipheral-basicsenseinfo",
              children: "ScsiPeripheral_BasicSenseInfo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ScsiPeripheral_BasicSenseInfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "sense data的基本信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-struct/api-scsiperipheralddk-scsiperipheral-verifyrequest/api-scsiperipheralddk-scsiperipheral-verifyrequest",
              children: "ScsiPeripheral_VerifyRequest"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ScsiPeripheral_VerifyRequest"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SCSI命令（verify）的请求结构体。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-struct/capi-scsiperipheralddk-scsiperipheral-device/capi-scsiperipheralddk-scsiperipheral-device",
              children: "ScsiPeripheral_Device"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ScsiPeripheral_Device"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不透明的SCSI设备结构体。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "枚举",
      children: "枚举"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "typedef关键字"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#scsiperipheral_ddkerrcode",
              children: "ScsiPeripheral_DdkErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ScsiPeripheral_DdkErrCode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SCSI Peripheral DDK错误码。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#scsiperipheral_status",
              children: "ScsiPeripheral_Status"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ScsiPeripheral_Status"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义用于响应的SCSI状态。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "枚举类型说明",
      children: "枚举类型说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "scsiperipheral_ddkerrcode",
      children: "ScsiPeripheral_DdkErrCode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum ScsiPeripheral_DdkErrCode\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SCSI Peripheral DDK错误码。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 18"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SCSIPERIPHERAL_DDK_NO_PERM = 201"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "没有权限。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SCSIPERIPHERAL_DDK_INVALID_PARAMETER = 401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "非法参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SCSIPERIPHERAL_DDK_SUCCESS = 31700000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "操作成功。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SCSIPERIPHERAL_DDK_MEMORY_ERROR = 31700001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "与内存相关的错误，例如，内存不足、内存数据复制失败或内存申请失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SCSIPERIPHERAL_DDK_INVALID_OPERATION = 31700002"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "非法操作。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SCSIPERIPHERAL_DDK_IO_ERROR = 31700003"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备输入/输出操作失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SCSIPERIPHERAL_DDK_TIMEOUT = 31700004"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "传输超时。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SCSIPERIPHERAL_DDK_INIT_ERROR = 31700005"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DDK初始化错误，或者DDK未初始化。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SCSIPERIPHERAL_DDK_SERVICE_ERROR = 31700006"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "与SCSI Peripheral DDK服务的通信失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SCSIPERIPHERAL_DDK_DEVICE_NOT_FOUND = 31700007"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备未找到。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "scsiperipheral_status",
      children: "ScsiPeripheral_Status"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum ScsiPeripheral_Status\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义用于响应的SCSI状态。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 18"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SCSIPERIPHERAL_STATUS_GOOD = 0x00"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "正常状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SCSIPERIPHERAL_STATUS_CHECK_CONDITION_NEEDED = 0x02"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要状态检查。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SCSIPERIPHERAL_STATUS_CONDITION_MET = 0x04"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "条件满足。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SCSIPERIPHERAL_STATUS_BUSY = 0x08"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "占用中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SCSIPERIPHERAL_STATUS_RESERVATION_CONFLICT = 0x18"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "资源保留冲突。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SCSIPERIPHERAL_STATUS_TASK_SET_FULL = 0x28"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "任务集已满。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SCSIPERIPHERAL_STATUS_ACA_ACTIVE = 0x30"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ACA活动状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SCSIPERIPHERAL_STATUS_TASK_ABORTED = 0x40"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "任务已终止。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "scsiperipheral_min_descriptor_format_sense",
      children: "SCSIPERIPHERAL_MIN_DESCRIPTOR_FORMAT_SENSE"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "SCSIPERIPHERAL_MIN_DESCRIPTOR_FORMAT_SENSE 8\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "描述符格式感应数据的最小长度。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 18"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "scsiperipheral_min_fixed_format_sense",
      children: "SCSIPERIPHERAL_MIN_FIXED_FORMAT_SENSE"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "SCSIPERIPHERAL_MIN_FIXED_FORMAT_SENSE 18\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "固定格式感应数据的最小长度。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 18"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "scsiperipheral_max_cmd_desc_block_len",
      children: "SCSIPERIPHERAL_MAX_CMD_DESC_BLOCK_LEN"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "SCSIPERIPHERAL_MAX_CMD_DESC_BLOCK_LEN 16\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "命令描述块的最大长度。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 18"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "scsiperipheral_max_sense_data_len",
      children: "SCSIPERIPHERAL_MAX_SENSE_DATA_LEN"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "SCSIPERIPHERAL_MAX_SENSE_DATA_LEN 252\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "感应数据的最大长度。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 18"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "scsiperipheral_vendor_id_len",
      children: "SCSIPERIPHERAL_VENDOR_ID_LEN"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "SCSIPERIPHERAL_VENDOR_ID_LEN 8\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "厂商标识符的长度。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 18"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "scsiperipheral_product_id_len",
      children: "SCSIPERIPHERAL_PRODUCT_ID_LEN"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "SCSIPERIPHERAL_PRODUCT_ID_LEN 16\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "产品标识符的长度。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 18"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "scsiperipheral_product_rev_len",
      children: "SCSIPERIPHERAL_PRODUCT_REV_LEN"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "SCSIPERIPHERAL_PRODUCT_REV_LEN 4\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "产品修订版本号的长度。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 18"]
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