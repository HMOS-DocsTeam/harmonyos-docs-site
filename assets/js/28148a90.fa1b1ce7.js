"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["536173"], {
549189(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_system_hardware_api_driver_development_api_driver_development_c_driver_development_headerfile_capi_scsi_peripheral_api_h_capi_scsi_peripheral_api_h_md_281_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-system-hardware-api-driver-development-api-driver-development-c-driver-development-headerfile-capi-scsi-peripheral-api-h-capi-scsi-peripheral-api-h-md-281.json
var site_docs_ref_system_hardware_api_driver_development_api_driver_development_c_driver_development_headerfile_capi_scsi_peripheral_api_h_capi_scsi_peripheral_api_h_md_281_namespaceObject = JSON.parse('{"id":"system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-scsi-peripheral-api-h/capi-scsi-peripheral-api-h","title":"scsi_peripheral_api.h","description":"概述","source":"@site/docs-ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-scsi-peripheral-api-h/capi-scsi-peripheral-api-h.md","sourceDirName":"system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-scsi-peripheral-api-h","slug":"/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-scsi-peripheral-api-h/capi-scsi-peripheral-api-h","permalink":"/harmonyos-docs-site/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-scsi-peripheral-api-h/capi-scsi-peripheral-api-h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"scsi_peripheral_api.h","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsi-peripheral-api-h","kit":"系统","last_updated":"2026-04-22","slug":"capi-scsi-peripheral-api-h"},"sidebar":"ref","previous":{"title":"hid_ddk_types.h","permalink":"/harmonyos-docs-site/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-hid-ddk-types-h/capi-hid-ddk-types-h"},"next":{"title":"scsi_peripheral_types.h","permalink":"/harmonyos-docs-site/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-scsi-peripheral-types-h/capi-scsi-peripheral-types-h"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-scsi-peripheral-api-h/capi-scsi-peripheral-api-h.md


const frontMatter = {
	title: 'scsi_peripheral_api.h',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsi-peripheral-api-h',
	kit: '系统',
	last_updated: '2026-04-22',
	slug: 'capi-scsi-peripheral-api-h'
};
const contentTitle = 'scsi_peripheral_api.h';

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
  "value": "OH_ScsiPeripheral_Init()",
  "id": "oh_scsiperipheral_init",
  "level": 3
}, {
  "value": "OH_ScsiPeripheral_Release()",
  "id": "oh_scsiperipheral_release",
  "level": 3
}, {
  "value": "OH_ScsiPeripheral_Open()",
  "id": "oh_scsiperipheral_open",
  "level": 3
}, {
  "value": "OH_ScsiPeripheral_Close()",
  "id": "oh_scsiperipheral_close",
  "level": 3
}, {
  "value": "OH_ScsiPeripheral_TestUnitReady()",
  "id": "oh_scsiperipheral_testunitready",
  "level": 3
}, {
  "value": "OH_ScsiPeripheral_Inquiry()",
  "id": "oh_scsiperipheral_inquiry",
  "level": 3
}, {
  "value": "OH_ScsiPeripheral_ReadCapacity10()",
  "id": "oh_scsiperipheral_readcapacity10",
  "level": 3
}, {
  "value": "OH_ScsiPeripheral_RequestSense()",
  "id": "oh_scsiperipheral_requestsense",
  "level": 3
}, {
  "value": "OH_ScsiPeripheral_Read10()",
  "id": "oh_scsiperipheral_read10",
  "level": 3
}, {
  "value": "OH_ScsiPeripheral_Write10()",
  "id": "oh_scsiperipheral_write10",
  "level": 3
}, {
  "value": "OH_ScsiPeripheral_Verify10()",
  "id": "oh_scsiperipheral_verify10",
  "level": 3
}, {
  "value": "OH_ScsiPeripheral_SendRequestByCdb()",
  "id": "oh_scsiperipheral_sendrequestbycdb",
  "level": 3
}, {
  "value": "OH_ScsiPeripheral_CreateDeviceMemMap()",
  "id": "oh_scsiperipheral_createdevicememmap",
  "level": 3
}, {
  "value": "OH_ScsiPeripheral_DestroyDeviceMemMap()",
  "id": "oh_scsiperipheral_destroydevicememmap",
  "level": 3
}, {
  "value": "OH_ScsiPeripheral_ParseBasicSenseInfo()",
  "id": "oh_scsiperipheral_parsebasicsenseinfo",
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
        id: "scsi_peripheral_apih",
        children: "scsi_peripheral_api.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "声明用于主机侧访问SCSI设备的SCSI Peripheral DDK接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <scsi_peripheral/scsi_peripheral_api.h>"]
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
      id: "函数",
      children: "函数"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_scsiperipheral_init",
              children: "int32_t OH_ScsiPeripheral_Init(void)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "初始化SCSI Peripheral DDK。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_scsiperipheral_release",
              children: "int32_t OH_ScsiPeripheral_Release(void)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "释放SCSI Peripheral DDK。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_scsiperipheral_open",
              children: "int32_t OH_ScsiPeripheral_Open(uint64_t deviceId, uint8_t interfaceIndex, ScsiPeripheral_Device **dev)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "打开deviceId和interfaceIndex指定的SCSI设备。其中，deviceId可以通过USB设备的总线编号左移32位后、同其设备地址进行或运算得到，interfaceIndex为需要打开的USB接口的索引值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_scsiperipheral_close",
              children: "int32_t OH_ScsiPeripheral_Close(ScsiPeripheral_Device **dev)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "关闭SCSI设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_scsiperipheral_testunitready",
              children: "int32_t OH_ScsiPeripheral_TestUnitReady(ScsiPeripheral_Device *dev, ScsiPeripheral_TestUnitReadyRequest *request,ScsiPeripheral_Response *response)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "检查逻辑单元是否已经准备好。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_scsiperipheral_inquiry",
              children: "int32_t OH_ScsiPeripheral_Inquiry(ScsiPeripheral_Device *dev, ScsiPeripheral_InquiryRequest *request,ScsiPeripheral_InquiryInfo *inquiryInfo, ScsiPeripheral_Response *response)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询SCSI设备的基本信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_scsiperipheral_readcapacity10",
              children: "int32_t OH_ScsiPeripheral_ReadCapacity10(ScsiPeripheral_Device *dev, ScsiPeripheral_ReadCapacityRequest *request,ScsiPeripheral_CapacityInfo *capacityInfo, ScsiPeripheral_Response *response)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取SCSI设备的容量信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_scsiperipheral_requestsense",
              children: "int32_t OH_ScsiPeripheral_RequestSense(ScsiPeripheral_Device *dev, ScsiPeripheral_RequestSenseRequest *request,ScsiPeripheral_Response *response)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取sense data（SCSI设备返回给主机的信息，用于报告设备的状态、错误信息以及诊断信息）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_scsiperipheral_read10",
              children: "int32_t OH_ScsiPeripheral_Read10(ScsiPeripheral_Device *dev, ScsiPeripheral_IORequest *request,ScsiPeripheral_Response *response)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从指定逻辑块读取数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_scsiperipheral_write10",
              children: "int32_t OH_ScsiPeripheral_Write10(ScsiPeripheral_Device *dev, ScsiPeripheral_IORequest *request,ScsiPeripheral_Response *response)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "写数据到设备的指定逻辑块。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_scsiperipheral_verify10",
              children: "int32_t OH_ScsiPeripheral_Verify10(ScsiPeripheral_Device *dev, ScsiPeripheral_VerifyRequest *request,ScsiPeripheral_Response *response)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "校验指定逻辑块。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_scsiperipheral_sendrequestbycdb",
              children: "int32_t OH_ScsiPeripheral_SendRequestByCdb(ScsiPeripheral_Device *dev, ScsiPeripheral_Request *request,ScsiPeripheral_Response *response)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "以CDB（Command Descriptor Block）方式发送SCSI命令。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_scsiperipheral_createdevicememmap",
              children: "int32_t OH_ScsiPeripheral_CreateDeviceMemMap(ScsiPeripheral_Device *dev, size_t size,ScsiPeripheral_DeviceMemMap **devMmap)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建缓冲区。请在缓冲区使用完后，调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-scsi-peripheral-api-h/capi-scsi-peripheral-api-h#oh_scsiperipheral_destroydevicememmap",
              children: "OH_ScsiPeripheral_DestroyDeviceMemMap"
            }), "销毁缓冲区，否则会造成资源泄漏。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_scsiperipheral_destroydevicememmap",
              children: "int32_t OH_ScsiPeripheral_DestroyDeviceMemMap(ScsiPeripheral_DeviceMemMap *devMmap)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁缓冲区。请在缓冲区使用完后及时销毁缓冲区，否则会造成资源泄漏。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_scsiperipheral_parsebasicsenseinfo",
              children: "int32_t OH_ScsiPeripheral_ParseBasicSenseInfo(uint8_t *senseData, uint8_t senseDataLen,ScsiPeripheral_BasicSenseInfo *senseInfo)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "解析基本的sense data，包括Information、Command specific information、Sense key specific字段。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数说明",
      children: "函数说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_scsiperipheral_init",
      children: "OH_ScsiPeripheral_Init()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_ScsiPeripheral_Init(void)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "初始化SCSI Peripheral DDK。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限："
        })
      }), " ohos.permission.ACCESS_DDK_SCSI_PERIPHERAL"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 18"]
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-scsi-peripheral-types-h/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode",
              children: "SCSIPERIPHERAL_DDK_SUCCESS"
            }), " 调用接口成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-scsi-peripheral-types-h/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode",
              children: "SCSIPERIPHERAL_DDK_NO_PERM"
            }), " 权限校验失败。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-scsi-peripheral-types-h/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode",
              children: "SCSIPERIPHERAL_DDK_INIT_ERROR"
            }), " 初始化DDK失败。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-scsi-peripheral-types-h/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode",
              children: "SCSIPERIPHERAL_DDK_SERVICE_ERROR"
            }), " 与DDK服务通信失败。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_scsiperipheral_release",
      children: "OH_ScsiPeripheral_Release()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_ScsiPeripheral_Release(void)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "释放SCSI Peripheral DDK。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限："
        })
      }), " ohos.permission.ACCESS_DDK_SCSI_PERIPHERAL"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 18"]
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-scsi-peripheral-types-h/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode",
              children: "SCSIPERIPHERAL_DDK_SUCCESS"
            }), " 调用接口成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-scsi-peripheral-types-h/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode",
              children: "SCSIPERIPHERAL_DDK_NO_PERM"
            }), " 权限校验失败。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-scsi-peripheral-types-h/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode",
              children: "SCSIPERIPHERAL_DDK_INIT_ERROR"
            }), " 未初始化DDK。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-scsi-peripheral-types-h/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode",
              children: "SCSIPERIPHERAL_DDK_SERVICE_ERROR"
            }), " 与DDK服务通信失败。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_scsiperipheral_open",
      children: "OH_ScsiPeripheral_Open()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_ScsiPeripheral_Open(uint64_t deviceId, uint8_t interfaceIndex, ScsiPeripheral_Device **dev)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "打开deviceId和interfaceIndex指定的SCSI设备。其中，deviceId可以通过USB设备的总线编号左移32位后、同其设备地址进行或运算得到，interfaceIndex为需要打开的USB接口的索引值。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限："
        })
      }), " ohos.permission.ACCESS_DDK_SCSI_PERIPHERAL"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 18"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "uint64_t deviceId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备ID，代表要操作的设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint8_t interfaceIndex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "接口索引，对应SCSI设备的接口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-struct/capi-scsiperipheralddk-scsiperipheral-device/capi-scsiperipheralddk-scsiperipheral-device",
              children: "ScsiPeripheral_Device"
            }), " **dev"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设备句柄，详情参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-struct/capi-scsiperipheralddk-scsiperipheral-device/capi-scsiperipheralddk-scsiperipheral-device",
              children: "ScsiPeripheral_Device"
            }), "。"]
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-scsi-peripheral-types-h/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode",
              children: "SCSIPERIPHERAL_DDK_SUCCESS"
            }), " 调用接口成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-scsi-peripheral-types-h/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode",
              children: "SCSIPERIPHERAL_DDK_NO_PERM"
            }), " 权限校验失败。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-scsi-peripheral-types-h/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode",
              children: "SCSIPERIPHERAL_DDK_INIT_ERROR"
            }), " 未初始化DDK。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-scsi-peripheral-types-h/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode",
              children: "SCSIPERIPHERAL_DDK_INVALID_PARAMETER"
            }), " dev为空或*dev为空。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-scsi-peripheral-types-h/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode",
              children: "SCSIPERIPHERAL_DDK_SERVICE_ERROR"
            }), " 与DDK服务通信失败。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-scsi-peripheral-types-h/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode",
              children: "SCSIPERIPHERAL_DDK_MEMORY_ERROR"
            }), " 内存操作失败。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-scsi-peripheral-types-h/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode",
              children: "SCSIPERIPHERAL_DDK_IO_ERROR"
            }), " DDK发生IO错误。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-scsi-peripheral-types-h/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode",
              children: "SCSIPERIPHERAL_DDK_DEVICE_NOT_FOUND"
            }), " 通过deviceId和interfaceIndex找不到设备。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-scsi-peripheral-types-h/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode",
              children: "SCSIPERIPHERAL_DDK_INVALID_OPERATION"
            }), " 不支持该操作。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_scsiperipheral_close",
      children: "OH_ScsiPeripheral_Close()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_ScsiPeripheral_Close(ScsiPeripheral_Device **dev)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "关闭SCSI设备。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限："
        })
      }), " ohos.permission.ACCESS_DDK_SCSI_PERIPHERAL"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 18"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-struct/capi-scsiperipheralddk-scsiperipheral-device/capi-scsiperipheralddk-scsiperipheral-device",
              children: "ScsiPeripheral_Device"
            }), " **dev"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设备句柄，详情参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-struct/capi-scsiperipheralddk-scsiperipheral-device/capi-scsiperipheralddk-scsiperipheral-device",
              children: "ScsiPeripheral_Device"
            }), "。"]
          })]
        })
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-scsi-peripheral-types-h/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode",
              children: "SCSIPERIPHERAL_DDK_SUCCESS"
            }), " 调用接口成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-scsi-peripheral-types-h/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode",
              children: "SCSIPERIPHERAL_DDK_NO_PERM"
            }), " 权限校验失败。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-scsi-peripheral-types-h/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode",
              children: "SCSIPERIPHERAL_DDK_INIT_ERROR"
            }), " 未初始化DDK。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-scsi-peripheral-types-h/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode",
              children: "SCSIPERIPHERAL_DDK_INVALID_PARAMETER"
            }), " dev为空或*dev为空。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-scsi-peripheral-types-h/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode",
              children: "SCSIPERIPHERAL_DDK_SERVICE_ERROR"
            }), " 与DDK服务通信失败。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-scsi-peripheral-types-h/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode",
              children: "SCSIPERIPHERAL_DDK_IO_ERROR"
            }), " DDK发生I/O错误。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_scsiperipheral_testunitready",
      children: "OH_ScsiPeripheral_TestUnitReady()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_ScsiPeripheral_TestUnitReady(ScsiPeripheral_Device *dev, ScsiPeripheral_TestUnitReadyRequest *request,ScsiPeripheral_Response *response)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查逻辑单元是否已经准备好。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限："
        })
      }), " ohos.permission.ACCESS_DDK_SCSI_PERIPHERAL"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 18"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-struct/capi-scsiperipheralddk-scsiperipheral-device/capi-scsiperipheralddk-scsiperipheral-device",
              children: "ScsiPeripheral_Device"
            }), " *dev"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设备句柄，详情参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-struct/capi-scsiperipheralddk-scsiperipheral-device/capi-scsiperipheralddk-scsiperipheral-device",
              children: "ScsiPeripheral_Device"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-struct/iperipheralddk-scsiperipheral-testunitreadyrequest/iperipheralddk-scsiperipheral-testunitreadyrequest",
              children: "ScsiPeripheral_TestUnitReadyRequest"
            }), " *request"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["逻辑单元检查命令（test unit ready）的请求信息，详情参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-struct/iperipheralddk-scsiperipheral-testunitreadyrequest/iperipheralddk-scsiperipheral-testunitreadyrequest",
              children: "ScsiPeripheral_TestUnitReadyRequest"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-struct/capi-scsiperipheralddk-scsiperipheral-response/capi-scsiperipheralddk-scsiperipheral-response",
              children: "ScsiPeripheral_Response"
            }), " *response"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["逻辑单元检查命令（test unit ready）的响应信息，详情参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-struct/capi-scsiperipheralddk-scsiperipheral-response/capi-scsiperipheralddk-scsiperipheral-response",
              children: "ScsiPeripheral_Response"
            }), "。"]
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-scsi-peripheral-types-h/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode",
              children: "SCSIPERIPHERAL_DDK_SUCCESS"
            }), " 调用接口成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-scsi-peripheral-types-h/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode",
              children: "SCSIPERIPHERAL_DDK_NO_PERM"
            }), " 权限校验失败。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-scsi-peripheral-types-h/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode",
              children: "SCSIPERIPHERAL_DDK_INIT_ERROR"
            }), " 未初始化DDK。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-scsi-peripheral-types-h/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode",
              children: "SCSIPERIPHERAL_DDK_INVALID_PARAMETER"
            }), " dev为空、request为空或者response为空。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-scsi-peripheral-types-h/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode",
              children: "SCSIPERIPHERAL_DDK_SERVICE_ERROR"
            }), " 与DDK服务通信失败。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-scsi-peripheral-types-h/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode",
              children: "SCSIPERIPHERAL_DDK_MEMORY_ERROR"
            }), " 内存操作失败。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-scsi-peripheral-types-h/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode",
              children: "SCSIPERIPHERAL_DDK_IO_ERROR"
            }), " DDK发生I/O错误。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-scsi-peripheral-types-h/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode",
              children: "SCSIPERIPHERAL_DDK_TIMEOUT"
            }), " 传输超时。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-scsi-peripheral-types-h/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode",
              children: "SCSIPERIPHERAL_DDK_INVALID_OPERATION"
            }), " 不支持该操作。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_scsiperipheral_inquiry",
      children: "OH_ScsiPeripheral_Inquiry()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_ScsiPeripheral_Inquiry(ScsiPeripheral_Device *dev, ScsiPeripheral_InquiryRequest *request,ScsiPeripheral_InquiryInfo *inquiryInfo, ScsiPeripheral_Response *response)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查询SCSI设备的基本信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限："
        })
      }), " ohos.permission.ACCESS_DDK_SCSI_PERIPHERAL"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 18"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-struct/capi-scsiperipheralddk-scsiperipheral-device/capi-scsiperipheralddk-scsiperipheral-device",
              children: "ScsiPeripheral_Device"
            }), " *dev"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设备句柄，详情参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-struct/capi-scsiperipheralddk-scsiperipheral-device/capi-scsiperipheralddk-scsiperipheral-device",
              children: "ScsiPeripheral_Device"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-struct/pi-scsiperipheralddk-scsiperipheral-inquiryrequest/pi-scsiperipheralddk-scsiperipheral-inquiryrequest",
              children: "ScsiPeripheral_InquiryRequest"
            }), " *request"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["inquiry命令的请求信息，详情参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-struct/pi-scsiperipheralddk-scsiperipheral-inquiryrequest/pi-scsiperipheralddk-scsiperipheral-inquiryrequest",
              children: "ScsiPeripheral_InquiryRequest"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-struct/capi-scsiperipheralddk-scsiperipheral-inquiryinfo/capi-scsiperipheralddk-scsiperipheral-inquiryinfo",
              children: "ScsiPeripheral_InquiryInfo"
            }), " *inquiryInfo"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["inquiry命令返回的查询信息，详情参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-struct/capi-scsiperipheralddk-scsiperipheral-inquiryinfo/capi-scsiperipheralddk-scsiperipheral-inquiryinfo",
              children: "ScsiPeripheral_InquiryInfo"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-struct/capi-scsiperipheralddk-scsiperipheral-response/capi-scsiperipheralddk-scsiperipheral-response",
              children: "ScsiPeripheral_Response"
            }), " *response"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["inquiry命令返回的原始响应信息，详情参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-struct/capi-scsiperipheralddk-scsiperipheral-response/capi-scsiperipheralddk-scsiperipheral-response",
              children: "ScsiPeripheral_Response"
            }), "。"]
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-scsi-peripheral-types-h/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode",
              children: "SCSIPERIPHERAL_DDK_SUCCESS"
            }), " 调用接口成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-scsi-peripheral-types-h/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode",
              children: "SCSIPERIPHERAL_DDK_NO_PERM"
            }), " 权限校验失败。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-scsi-peripheral-types-h/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode",
              children: "SCSIPERIPHERAL_DDK_INIT_ERROR"
            }), " 未初始化DDK。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-scsi-peripheral-types-h/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode",
              children: "SCSIPERIPHERAL_DDK_INVALID_PARAMETER"
            }), " dev为空、 request为空、inquiryInfo 为空、inquiryInfo->data或者response为空。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-scsi-peripheral-types-h/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode",
              children: "SCSIPERIPHERAL_DDK_SERVICE_ERROR"
            }), " 与DDK服务通信失败。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-scsi-peripheral-types-h/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode",
              children: "SCSIPERIPHERAL_DDK_MEMORY_ERROR"
            }), " 内存操作失败。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-scsi-peripheral-types-h/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode",
              children: "SCSIPERIPHERAL_DDK_IO_ERROR"
            }), " DDK发生I/O错误。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-scsi-peripheral-types-h/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode",
              children: "SCSIPERIPHERAL_DDK_TIMEOUT"
            }), " 传输超时。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-scsi-peripheral-types-h/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode",
              children: "SCSIPERIPHERAL_DDK_INVALID_OPERATION"
            }), " 不支持该操作。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_scsiperipheral_readcapacity10",
      children: "OH_ScsiPeripheral_ReadCapacity10()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_ScsiPeripheral_ReadCapacity10(ScsiPeripheral_Device *dev, ScsiPeripheral_ReadCapacityRequest *request,ScsiPeripheral_CapacityInfo *capacityInfo, ScsiPeripheral_Response *response)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取SCSI设备的容量信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限："
        })
      }), " ohos.permission.ACCESS_DDK_SCSI_PERIPHERAL"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 18"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-struct/capi-scsiperipheralddk-scsiperipheral-device/capi-scsiperipheralddk-scsiperipheral-device",
              children: "ScsiPeripheral_Device"
            }), " *dev"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设备句柄，详情参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-struct/capi-scsiperipheralddk-scsiperipheral-device/capi-scsiperipheralddk-scsiperipheral-device",
              children: "ScsiPeripheral_Device"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-struct/siperipheralddk-scsiperipheral-readcapacityrequest/siperipheralddk-scsiperipheral-readcapacityrequest",
              children: "ScsiPeripheral_ReadCapacityRequest"
            }), " *request"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["read capacity命令的请求信息，详情参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-struct/siperipheralddk-scsiperipheral-readcapacityrequest/siperipheralddk-scsiperipheral-readcapacityrequest",
              children: "ScsiPeripheral_ReadCapacityRequest"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-struct/capi-scsiperipheralddk-scsiperipheral-capacityinfo/capi-scsiperipheralddk-scsiperipheral-capacityinfo",
              children: "ScsiPeripheral_CapacityInfo"
            }), " *capacityInfo"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["read capacity命令返回的容量信息，详情参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-struct/capi-scsiperipheralddk-scsiperipheral-capacityinfo/capi-scsiperipheralddk-scsiperipheral-capacityinfo",
              children: "ScsiPeripheral_CapacityInfo"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-struct/capi-scsiperipheralddk-scsiperipheral-response/capi-scsiperipheralddk-scsiperipheral-response",
              children: "ScsiPeripheral_Response"
            }), " *response"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["read capacity命令返回的原始响应信息，详情参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-struct/capi-scsiperipheralddk-scsiperipheral-response/capi-scsiperipheralddk-scsiperipheral-response",
              children: "ScsiPeripheral_Response"
            }), "。"]
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-scsi-peripheral-types-h/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode",
              children: "SCSIPERIPHERAL_DDK_SUCCESS"
            }), " 调用接口成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-scsi-peripheral-types-h/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode",
              children: "SCSIPERIPHERAL_DDK_NO_PERM"
            }), " 权限校验失败。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-scsi-peripheral-types-h/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode",
              children: "SCSIPERIPHERAL_DDK_INIT_ERROR"
            }), " 未初始化DDK。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-scsi-peripheral-types-h/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode",
              children: "SCSIPERIPHERAL_DDK_INVALID_PARAMETER"
            }), " dev为空、 request为空、capacityInfo为空或者response为空。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-scsi-peripheral-types-h/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode",
              children: "SCSIPERIPHERAL_DDK_SERVICE_ERROR"
            }), " 与DDK服务通信失败。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-scsi-peripheral-types-h/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode",
              children: "SCSIPERIPHERAL_DDK_MEMORY_ERROR"
            }), " 内存操作失败。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-scsi-peripheral-types-h/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode",
              children: "SCSIPERIPHERAL_DDK_IO_ERROR"
            }), " DDK发生I/O错误。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-scsi-peripheral-types-h/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode",
              children: "SCSIPERIPHERAL_DDK_TIMEOUT"
            }), " 传输超时。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-scsi-peripheral-types-h/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode",
              children: "SCSIPERIPHERAL_DDK_INVALID_OPERATION"
            }), " 不支持该操作。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_scsiperipheral_requestsense",
      children: "OH_ScsiPeripheral_RequestSense()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_ScsiPeripheral_RequestSense(ScsiPeripheral_Device *dev, ScsiPeripheral_RequestSenseRequest *request,ScsiPeripheral_Response *response)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取sense data（SCSI设备返回给主机的信息，用于报告设备的状态、错误信息以及诊断信息）。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限："
        })
      }), " ohos.permission.ACCESS_DDK_SCSI_PERIPHERAL"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 18"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-struct/capi-scsiperipheralddk-scsiperipheral-device/capi-scsiperipheralddk-scsiperipheral-device",
              children: "ScsiPeripheral_Device"
            }), " *dev"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设备句柄，详情参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-struct/capi-scsiperipheralddk-scsiperipheral-device/capi-scsiperipheralddk-scsiperipheral-device",
              children: "ScsiPeripheral_Device"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-struct/siperipheralddk-scsiperipheral-requestsenserequest/siperipheralddk-scsiperipheral-requestsenserequest",
              children: "ScsiPeripheral_RequestSenseRequest"
            }), " *request"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Request Sense命令的请求信息，详情参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-struct/siperipheralddk-scsiperipheral-requestsenserequest/siperipheralddk-scsiperipheral-requestsenserequest",
              children: "ScsiPeripheral_RequestSenseRequest"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-struct/capi-scsiperipheralddk-scsiperipheral-response/capi-scsiperipheralddk-scsiperipheral-response",
              children: "ScsiPeripheral_Response"
            }), " *response"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Request Sense命令返回的响应信息，详情参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-struct/capi-scsiperipheralddk-scsiperipheral-response/capi-scsiperipheralddk-scsiperipheral-response",
              children: "ScsiPeripheral_Response"
            }), "。"]
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-scsi-peripheral-types-h/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode",
              children: "SCSIPERIPHERAL_DDK_SUCCESS"
            }), " 调用接口成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-scsi-peripheral-types-h/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode",
              children: "SCSIPERIPHERAL_DDK_NO_PERM"
            }), " 权限校验失败。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-scsi-peripheral-types-h/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode",
              children: "SCSIPERIPHERAL_DDK_INIT_ERROR"
            }), " 未初始化DDK。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-scsi-peripheral-types-h/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode",
              children: "SCSIPERIPHERAL_DDK_INVALID_PARAMETER"
            }), " dev为空、 request为空或者response为空。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-scsi-peripheral-types-h/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode",
              children: "SCSIPERIPHERAL_DDK_SERVICE_ERROR"
            }), " 与DDK服务通信失败。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-scsi-peripheral-types-h/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode",
              children: "SCSIPERIPHERAL_DDK_MEMORY_ERROR"
            }), " 内存操作失败。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-scsi-peripheral-types-h/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode",
              children: "SCSIPERIPHERAL_DDK_IO_ERROR"
            }), " DDK发生I/O错误。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-scsi-peripheral-types-h/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode",
              children: "SCSIPERIPHERAL_DDK_TIMEOUT"
            }), " 传输超时。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-scsi-peripheral-types-h/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode",
              children: "SCSIPERIPHERAL_DDK_INVALID_OPERATION"
            }), " 不支持该操作。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_scsiperipheral_read10",
      children: "OH_ScsiPeripheral_Read10()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_ScsiPeripheral_Read10(ScsiPeripheral_Device *dev, ScsiPeripheral_IORequest *request,ScsiPeripheral_Response *response)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从指定逻辑块读取数据。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限："
        })
      }), " ohos.permission.ACCESS_DDK_SCSI_PERIPHERAL"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 18"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-struct/capi-scsiperipheralddk-scsiperipheral-device/capi-scsiperipheralddk-scsiperipheral-device",
              children: "ScsiPeripheral_Device"
            }), " *dev"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设备句柄，详情参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-struct/capi-scsiperipheralddk-scsiperipheral-device/capi-scsiperipheralddk-scsiperipheral-device",
              children: "ScsiPeripheral_Device"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-struct/capi-scsiperipheralddk-scsiperipheral-iorequest/capi-scsiperipheralddk-scsiperipheral-iorequest",
              children: "ScsiPeripheral_IORequest"
            }), " *request"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["read命令的请求信息，详情参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-struct/capi-scsiperipheralddk-scsiperipheral-iorequest/capi-scsiperipheralddk-scsiperipheral-iorequest",
              children: "ScsiPeripheral_IORequest"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-struct/capi-scsiperipheralddk-scsiperipheral-response/capi-scsiperipheralddk-scsiperipheral-response",
              children: "ScsiPeripheral_Response"
            }), " *response"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["read命令返回的响应信息，详情参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-struct/capi-scsiperipheralddk-scsiperipheral-response/capi-scsiperipheralddk-scsiperipheral-response",
              children: "ScsiPeripheral_Response"
            }), "。"]
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-scsi-peripheral-types-h/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode",
              children: "SCSIPERIPHERAL_DDK_SUCCESS"
            }), " 调用接口成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-scsi-peripheral-types-h/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode",
              children: "SCSIPERIPHERAL_DDK_NO_PERM"
            }), " 权限校验失败。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-scsi-peripheral-types-h/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode",
              children: "SCSIPERIPHERAL_DDK_INIT_ERROR"
            }), " 未初始化DDK。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-scsi-peripheral-types-h/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode",
              children: "SCSIPERIPHERAL_DDK_INVALID_PARAMETER"
            }), " dev为空、 request为空、request->data或者response为空。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-scsi-peripheral-types-h/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode",
              children: "SCSIPERIPHERAL_DDK_SERVICE_ERROR"
            }), " 与DDK服务通信失败。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-scsi-peripheral-types-h/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode",
              children: "SCSIPERIPHERAL_DDK_MEMORY_ERROR"
            }), " 内存操作失败。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-scsi-peripheral-types-h/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode",
              children: "SCSIPERIPHERAL_DDK_IO_ERROR"
            }), " DDK发生I/O错误。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-scsi-peripheral-types-h/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode",
              children: "SCSIPERIPHERAL_DDK_TIMEOUT"
            }), " 传输超时。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-scsi-peripheral-types-h/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode",
              children: "SCSIPERIPHERAL_DDK_INVALID_OPERATION"
            }), " 不支持该操作。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_scsiperipheral_write10",
      children: "OH_ScsiPeripheral_Write10()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_ScsiPeripheral_Write10(ScsiPeripheral_Device *dev, ScsiPeripheral_IORequest *request,ScsiPeripheral_Response *response)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "写数据到设备的指定逻辑块。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限："
        })
      }), " ohos.permission.ACCESS_DDK_SCSI_PERIPHERAL"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 18"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-struct/capi-scsiperipheralddk-scsiperipheral-device/capi-scsiperipheralddk-scsiperipheral-device",
              children: "ScsiPeripheral_Device"
            }), " *dev"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设备句柄，详情参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-struct/capi-scsiperipheralddk-scsiperipheral-device/capi-scsiperipheralddk-scsiperipheral-device",
              children: "ScsiPeripheral_Device"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-struct/capi-scsiperipheralddk-scsiperipheral-iorequest/capi-scsiperipheralddk-scsiperipheral-iorequest",
              children: "ScsiPeripheral_IORequest"
            }), " *request"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["write命令的请求信息，详情参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-struct/capi-scsiperipheralddk-scsiperipheral-iorequest/capi-scsiperipheralddk-scsiperipheral-iorequest",
              children: "ScsiPeripheral_IORequest"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-struct/capi-scsiperipheralddk-scsiperipheral-response/capi-scsiperipheralddk-scsiperipheral-response",
              children: "ScsiPeripheral_Response"
            }), " *response"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["write命令返回的响应信息，详情参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-struct/capi-scsiperipheralddk-scsiperipheral-response/capi-scsiperipheralddk-scsiperipheral-response",
              children: "ScsiPeripheral_Response"
            }), "。"]
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-scsi-peripheral-types-h/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode",
              children: "SCSIPERIPHERAL_DDK_SUCCESS"
            }), " 调用接口成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-scsi-peripheral-types-h/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode",
              children: "SCSIPERIPHERAL_DDK_NO_PERM"
            }), " 权限校验失败。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-scsi-peripheral-types-h/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode",
              children: "SCSIPERIPHERAL_DDK_INIT_ERROR"
            }), " 未初始化DDK。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-scsi-peripheral-types-h/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode",
              children: "SCSIPERIPHERAL_DDK_INVALID_PARAMETER"
            }), " dev为空、 request为空、request->data为空或者response为空。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-scsi-peripheral-types-h/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode",
              children: "SCSIPERIPHERAL_DDK_SERVICE_ERROR"
            }), " 与DDK服务通信失败。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-scsi-peripheral-types-h/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode",
              children: "SCSIPERIPHERAL_DDK_MEMORY_ERROR"
            }), " 内存操作失败。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-scsi-peripheral-types-h/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode",
              children: "SCSIPERIPHERAL_DDK_IO_ERROR"
            }), " DDK发生I/O错误。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-scsi-peripheral-types-h/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode",
              children: "SCSIPERIPHERAL_DDK_TIMEOUT"
            }), " 传输超时。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-scsi-peripheral-types-h/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode",
              children: "SCSIPERIPHERAL_DDK_INVALID_OPERATION"
            }), " 不支持该操作。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_scsiperipheral_verify10",
      children: "OH_ScsiPeripheral_Verify10()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_ScsiPeripheral_Verify10(ScsiPeripheral_Device *dev, ScsiPeripheral_VerifyRequest *request,ScsiPeripheral_Response *response)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "校验指定逻辑块。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限："
        })
      }), " ohos.permission.ACCESS_DDK_SCSI_PERIPHERAL"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 18"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-struct/capi-scsiperipheralddk-scsiperipheral-device/capi-scsiperipheralddk-scsiperipheral-device",
              children: "ScsiPeripheral_Device"
            }), " *dev"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设备句柄，详情参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-struct/capi-scsiperipheralddk-scsiperipheral-device/capi-scsiperipheralddk-scsiperipheral-device",
              children: "ScsiPeripheral_Device"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-struct/api-scsiperipheralddk-scsiperipheral-verifyrequest/api-scsiperipheralddk-scsiperipheral-verifyrequest",
              children: "ScsiPeripheral_VerifyRequest"
            }), " *request"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["verify命令的请求信息，详情参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-struct/api-scsiperipheralddk-scsiperipheral-verifyrequest/api-scsiperipheralddk-scsiperipheral-verifyrequest",
              children: "ScsiPeripheral_VerifyRequest"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-struct/capi-scsiperipheralddk-scsiperipheral-response/capi-scsiperipheralddk-scsiperipheral-response",
              children: "ScsiPeripheral_Response"
            }), " *response"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["verify命令返回的响应信息，详情参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-struct/capi-scsiperipheralddk-scsiperipheral-response/capi-scsiperipheralddk-scsiperipheral-response",
              children: "ScsiPeripheral_Response"
            }), "。"]
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-scsi-peripheral-types-h/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode",
              children: "SCSIPERIPHERAL_DDK_SUCCESS"
            }), " 调用接口成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-scsi-peripheral-types-h/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode",
              children: "SCSIPERIPHERAL_DDK_NO_PERM"
            }), " 权限校验失败。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-scsi-peripheral-types-h/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode",
              children: "SCSIPERIPHERAL_DDK_INIT_ERROR"
            }), " 未初始化DDK。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-scsi-peripheral-types-h/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode",
              children: "SCSIPERIPHERAL_DDK_INVALID_PARAMETER"
            }), " dev为空、request为空或者response为空。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-scsi-peripheral-types-h/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode",
              children: "SCSIPERIPHERAL_DDK_SERVICE_ERROR"
            }), " 与DDK服务通信失败。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-scsi-peripheral-types-h/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode",
              children: "SCSIPERIPHERAL_DDK_MEMORY_ERROR"
            }), " 内存操作失败。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-scsi-peripheral-types-h/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode",
              children: "SCSIPERIPHERAL_DDK_IO_ERROR"
            }), " DDK发生I/O错误。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-scsi-peripheral-types-h/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode",
              children: "SCSIPERIPHERAL_DDK_TIMEOUT"
            }), " 传输超时。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-scsi-peripheral-types-h/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode",
              children: "SCSIPERIPHERAL_DDK_INVALID_OPERATION"
            }), " 不支持该操作。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_scsiperipheral_sendrequestbycdb",
      children: "OH_ScsiPeripheral_SendRequestByCdb()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_ScsiPeripheral_SendRequestByCdb(ScsiPeripheral_Device *dev, ScsiPeripheral_Request *request,ScsiPeripheral_Response *response)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以CDB（Command Descriptor Block）方式发送SCSI命令。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限："
        })
      }), " ohos.permission.ACCESS_DDK_SCSI_PERIPHERAL"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 18"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-struct/capi-scsiperipheralddk-scsiperipheral-device/capi-scsiperipheralddk-scsiperipheral-device",
              children: "ScsiPeripheral_Device"
            }), " *dev"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设备句柄，详情参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-struct/capi-scsiperipheralddk-scsiperipheral-device/capi-scsiperipheralddk-scsiperipheral-device",
              children: "ScsiPeripheral_Device"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-struct/capi-scsiperipheralddk-scsiperipheral-request/capi-scsiperipheralddk-scsiperipheral-request",
              children: "ScsiPeripheral_Request"
            }), " *request"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["请求，详情参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-struct/capi-scsiperipheralddk-scsiperipheral-request/capi-scsiperipheralddk-scsiperipheral-request",
              children: "ScsiPeripheral_Request"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-struct/capi-scsiperipheralddk-scsiperipheral-response/capi-scsiperipheralddk-scsiperipheral-response",
              children: "ScsiPeripheral_Response"
            }), " *response"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["响应，详情参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-struct/capi-scsiperipheralddk-scsiperipheral-response/capi-scsiperipheralddk-scsiperipheral-response",
              children: "ScsiPeripheral_Response"
            }), "。"]
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-scsi-peripheral-types-h/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode",
              children: "SCSIPERIPHERAL_DDK_SUCCESS"
            }), " 调用接口成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-scsi-peripheral-types-h/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode",
              children: "SCSIPERIPHERAL_DDK_NO_PERM"
            }), " 权限校验失败。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-scsi-peripheral-types-h/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode",
              children: "SCSIPERIPHERAL_DDK_INIT_ERROR"
            }), " 未初始化DDK。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-scsi-peripheral-types-h/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode",
              children: "SCSIPERIPHERAL_DDK_INVALID_PARAMETER"
            }), " dev为空、 request为空、request->data为  空、request->cdbLength为0或者response为空。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-scsi-peripheral-types-h/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode",
              children: "SCSIPERIPHERAL_DDK_SERVICE_ERROR"
            }), " 与DDK服务通信失败。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-scsi-peripheral-types-h/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode",
              children: "SCSIPERIPHERAL_DDK_MEMORY_ERROR"
            }), " 内存操作失败。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-scsi-peripheral-types-h/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode",
              children: "SCSIPERIPHERAL_DDK_IO_ERROR"
            }), " DDK发生I/O错误。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-scsi-peripheral-types-h/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode",
              children: "SCSIPERIPHERAL_DDK_TIMEOUT"
            }), " 传输超时。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-scsi-peripheral-types-h/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode",
              children: "SCSIPERIPHERAL_DDK_INVALID_OPERATION"
            }), " 不支持该操作。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_scsiperipheral_createdevicememmap",
      children: "OH_ScsiPeripheral_CreateDeviceMemMap()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_ScsiPeripheral_CreateDeviceMemMap(ScsiPeripheral_Device *dev, size_t size,ScsiPeripheral_DeviceMemMap **devMmap)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["创建缓冲区。请在缓冲区使用完后，调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-scsi-peripheral-api-h/capi-scsi-peripheral-api-h#oh_scsiperipheral_destroydevicememmap",
        children: "OH_ScsiPeripheral_DestroyDeviceMemMap"
      }), "销毁缓冲区，否则会造成资源泄漏。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 18"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-struct/capi-scsiperipheralddk-scsiperipheral-device/capi-scsiperipheralddk-scsiperipheral-device",
              children: "ScsiPeripheral_Device"
            }), " *dev"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设备句柄，详情参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-struct/capi-scsiperipheralddk-scsiperipheral-device/capi-scsiperipheralddk-scsiperipheral-device",
              children: "ScsiPeripheral_Device"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "size_t size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "缓冲区的大小。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-struct/capi-scsiperipheralddk-scsiperipheral-devicememmap/capi-scsiperipheralddk-scsiperipheral-devicememmap",
              children: "ScsiPeripheral_DeviceMemMap"
            }), " **devMmap"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建的缓冲区通过该参数返回给调用者，详情参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-struct/capi-scsiperipheralddk-scsiperipheral-devicememmap/capi-scsiperipheralddk-scsiperipheral-devicememmap",
              children: "ScsiPeripheral_DeviceMemMap"
            }), "。"]
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-scsi-peripheral-types-h/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode",
              children: "SCSIPERIPHERAL_DDK_SUCCESS"
            }), " 调用接口成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-scsi-peripheral-types-h/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode",
              children: "SCSIPERIPHERAL_DDK_INVALID_PARAMETER"
            }), " dev为空、devMmap为空或*devMmap为空。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-scsi-peripheral-types-h/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode",
              children: "SCSIPERIPHERAL_DDK_MEMORY_ERROR"
            }), " 内存操作失败。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_scsiperipheral_destroydevicememmap",
      children: "OH_ScsiPeripheral_DestroyDeviceMemMap()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_ScsiPeripheral_DestroyDeviceMemMap(ScsiPeripheral_DeviceMemMap *devMmap)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "销毁缓冲区。请在缓冲区使用完后及时销毁缓冲区，否则会造成资源泄漏。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 18"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-struct/capi-scsiperipheralddk-scsiperipheral-devicememmap/capi-scsiperipheralddk-scsiperipheral-devicememmap",
              children: "ScsiPeripheral_DeviceMemMap"
            }), " *devMmap"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["待销毁的由", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_scsiperipheral_createdevicememmap",
              children: "OH_ScsiPeripheral_CreateDeviceMemMap"
            }), "创建的缓冲区，详情参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-struct/capi-scsiperipheralddk-scsiperipheral-devicememmap/capi-scsiperipheralddk-scsiperipheral-devicememmap",
              children: "ScsiPeripheral_DeviceMemMap"
            }), "。"]
          })]
        })
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-scsi-peripheral-types-h/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode",
              children: "SCSIPERIPHERAL_DDK_SUCCESS"
            }), " 调用接口成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-scsi-peripheral-types-h/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode",
              children: "SCSIPERIPHERAL_DDK_INVALID_PARAMETER"
            }), " devMmap为空。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-scsi-peripheral-types-h/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode",
              children: "SCSIPERIPHERAL_DDK_MEMORY_ERROR"
            }), " 内存操作失败。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_scsiperipheral_parsebasicsenseinfo",
      children: "OH_ScsiPeripheral_ParseBasicSenseInfo()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_ScsiPeripheral_ParseBasicSenseInfo(uint8_t *senseData, uint8_t senseDataLen,ScsiPeripheral_BasicSenseInfo *senseInfo)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "解析基本的sense data，包括Information、Command specific information、Sense key specific字段。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 18"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "uint8_t *senseData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "待解析的sense data。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint8_t senseDataLen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "sense data长度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-struct/pi-scsiperipheralddk-scsiperipheral-basicsenseinfo/pi-scsiperipheralddk-scsiperipheral-basicsenseinfo",
              children: "ScsiPeripheral_BasicSenseInfo"
            }), " *senseInfo"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["用于保存解析后的基本信息，详情参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-struct/pi-scsiperipheralddk-scsiperipheral-basicsenseinfo/pi-scsiperipheralddk-scsiperipheral-basicsenseinfo",
              children: "ScsiPeripheral_BasicSenseInfo"
            }), "。"]
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-scsi-peripheral-types-h/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode",
              children: "SCSIPERIPHERAL_DDK_SUCCESS"
            }), " 调用接口成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-scsi-peripheral-types-h/capi-scsi-peripheral-types-h#scsiperipheral_ddkerrcode",
              children: "SCSIPERIPHERAL_DDK_INVALID_PARAMETER"
            }), " senseData格式不是描述符或固定格式、senseDataLen小于  SCSIPERIPHERAL_MIN_DESCRIPTOR_FORMAT_SENSE或者senseDataLen小于SCSIPERIPHERAL_MIN_FIXED_FORMAT_SENSE。"]
          })]
        })
      })]
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