"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["934440"], {
232157(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_system_hardware_api_driver_development_api_driver_development_c_driver_development_headerfile_capi_usb_serial_api_h_capi_usb_serial_api_h_md_c3e_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-system-hardware-api-driver-development-api-driver-development-c-driver-development-headerfile-capi-usb-serial-api-h-capi-usb-serial-api-h-md-c3e.json
var site_docs_ref_system_hardware_api_driver_development_api_driver_development_c_driver_development_headerfile_capi_usb_serial_api_h_capi_usb_serial_api_h_md_c3e_namespaceObject = JSON.parse('{"id":"system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-usb-serial-api-h/capi-usb-serial-api-h","title":"usb_serial_api.h","description":"概述","source":"@site/docs-ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-usb-serial-api-h/capi-usb-serial-api-h.md","sourceDirName":"system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-usb-serial-api-h","slug":"/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-usb-serial-api-h/capi-usb-serial-api-h","permalink":"/harmonyos-docs-site/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-usb-serial-api-h/capi-usb-serial-api-h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":9,"frontMatter":{"title":"usb_serial_api.h","sidebar_position":9,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-usb-serial-api-h","kit":"系统","last_updated":"2026-04-22","slug":"capi-usb-serial-api-h"},"sidebar":"ref","previous":{"title":"usb_ddk_types.h","permalink":"/harmonyos-docs-site/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-usb-ddk-types-h/capi-usb-ddk-types-h"},"next":{"title":"usb_serial_types.h","permalink":"/harmonyos-docs-site/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-usb-serial-types-h/capi-usb-serial-types-h"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-usb-serial-api-h/capi-usb-serial-api-h.md


const frontMatter = {
	title: 'usb_serial_api.h',
	sidebar_position: 9,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-usb-serial-api-h',
	kit: '系统',
	last_updated: '2026-04-22',
	slug: 'capi-usb-serial-api-h'
};
const contentTitle = 'usb_serial_api.h';

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
  "value": "OH_UsbSerial_Init()",
  "id": "oh_usbserial_init",
  "level": 3
}, {
  "value": "OH_UsbSerial_Release()",
  "id": "oh_usbserial_release",
  "level": 3
}, {
  "value": "OH_UsbSerial_Open()",
  "id": "oh_usbserial_open",
  "level": 3
}, {
  "value": "OH_UsbSerial_Close()",
  "id": "oh_usbserial_close",
  "level": 3
}, {
  "value": "OH_UsbSerial_Read()",
  "id": "oh_usbserial_read",
  "level": 3
}, {
  "value": "OH_UsbSerial_Write()",
  "id": "oh_usbserial_write",
  "level": 3
}, {
  "value": "OH_UsbSerial_SetBaudRate()",
  "id": "oh_usbserial_setbaudrate",
  "level": 3
}, {
  "value": "OH_UsbSerial_SetParams()",
  "id": "oh_usbserial_setparams",
  "level": 3
}, {
  "value": "OH_UsbSerial_SetTimeout()",
  "id": "oh_usbserial_settimeout",
  "level": 3
}, {
  "value": "OH_UsbSerial_SetFlowControl()",
  "id": "oh_usbserial_setflowcontrol",
  "level": 3
}, {
  "value": "OH_UsbSerial_Flush()",
  "id": "oh_usbserial_flush",
  "level": 3
}, {
  "value": "OH_UsbSerial_FlushInput()",
  "id": "oh_usbserial_flushinput",
  "level": 3
}, {
  "value": "OH_UsbSerial_FlushOutput()",
  "id": "oh_usbserial_flushoutput",
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
        id: "usb_serial_apih",
        children: "usb_serial_api.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "声明用于主机侧通过USB接口访问串口设备的USB Serial DDK接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <usb_serial/usb_serial_api.h>"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "库："
        })
      }), " libusb_serial_ndk.z.so"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Driver.UsbSerial.Extension"]
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
        href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-module/capi-serialddk/capi-serialddk",
        children: "USBSerialDDK"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "函数",
      children: "函数"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_usbserial_init",
              children: "int32_t OH_UsbSerial_Init(void)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "初始化USB Serial DDK。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_usbserial_release",
              children: "int32_t OH_UsbSerial_Release(void)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "释放USB Serial DDK。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_usbserial_open",
              children: "int32_t OH_UsbSerial_Open(uint64_t deviceId, uint8_t interfaceIndex, UsbSerial_Device **dev)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过deviceId和interfaceIndex打开USB串口设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_usbserial_close",
              children: "int32_t OH_UsbSerial_Close(UsbSerial_Device **dev)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "关闭USB串口设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_usbserial_read",
              children: "int32_t OH_UsbSerial_Read(UsbSerial_Device *dev, uint8_t *buff, uint32_t bufferSize, uint32_t *bytesRead)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从USB串口设备读入数据到缓冲区。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_usbserial_write",
              children: "int32_t OH_UsbSerial_Write(UsbSerial_Device *dev, uint8_t *buff, uint32_t bufferSize, uint32_t *bytesWritten)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将buff中的数据写入USB串口设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_usbserial_setbaudrate",
              children: "int32_t OH_UsbSerial_SetBaudRate(UsbSerial_Device *dev, uint32_t baudRate)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置USB串口设备的波特率。如果USB串口设备的参数为默认值（数据位为8，停止位为1，数据传输无校验），则只需要调用该接口设置波特率即可。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_usbserial_setparams",
              children: "int32_t OH_UsbSerial_SetParams(UsbSerial_Device *dev, UsbSerial_Params *params)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置USB串口设备的参数。如果USB串口设备的参数不为默认值（数据位默认为8，停止位默认为1，数据传输默认无校验），则需要调用该接口进行参数设置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_usbserial_settimeout",
              children: "int32_t OH_UsbSerial_SetTimeout(UsbSerial_Device *dev, int timeout)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置读取USB串口设备上报数据的超时时间（毫秒）。在不调用此函数的情况下，超时值默认为0，表示不管是否读取到数据都立即返回。如果需要等待一定的时间或者必须读取到数据，则调用该接口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_usbserial_setflowcontrol",
              children: "int32_t OH_UsbSerial_SetFlowControl(UsbSerial_Device *dev, UsbSerial_FlowControl flowControl)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置流控参数。USB串口设备通信中的流控用于管理数据传输的速率，以确保发送方不会发送超过接收方处理能力的数据量。  如果USB串口设备实现了流控处理，则需要调用此接口。如果不调用此接口，默认为无流控。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_usbserial_flush",
              children: "int32_t OH_UsbSerial_Flush(UsbSerial_Device *dev)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "写入完成后清空输入和输出缓冲区。在向USB串口设备发送数据时，可能会有大量数据缓冲在内核中等待发送。如果应用程序关闭文件描述符或者退出之前没有等待这些数据被实际发送出去，那么部分数据可能会丢失。调用该接口可以确保所有的数据都被发送完毕再继续执行后续操作。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_usbserial_flushinput",
              children: "int32_t OH_UsbSerial_FlushInput(UsbSerial_Device *dev)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "刷新输入缓冲区，缓冲区中的数据会被立刻清空。在和USB串口设备通信过程中，特别是在调试阶段，有时会遇到乱序的数据包或者其他异常情况。  调用该接口可以帮助清理这些异常状况，使通信恢复正常。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_usbserial_flushoutput",
              children: "int32_t OH_UsbSerial_FlushOutput(UsbSerial_Device *dev)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "刷新输出缓冲区，缓冲区中的数据会被立刻清空。在和USB串口设备通信过程中，特别是在调试阶段，有时会遇到乱序的数据包或者其他异常情况。  调用该接口可以帮助清理这些异常状况，使通信恢复正常。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数说明",
      children: "函数说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_usbserial_init",
      children: "OH_UsbSerial_Init()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_UsbSerial_Init(void)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "初始化USB Serial DDK。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限："
        })
      }), " ohos.permission.ACCESS_DDK_USB_SERIAL"]
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
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-usb-serial-types-h/capi-usb-serial-types-h#usbserial_ddkretcode",
              children: "USB_SERIAL_DDK_SUCCESS"
            }), " 调用接口成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-usb-serial-types-h/capi-usb-serial-types-h#usbserial_ddkretcode",
              children: "USB_SERIAL_DDK_NO_PERM"
            }), " 权限校验失败。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-usb-serial-types-h/capi-usb-serial-types-h#usbserial_ddkretcode",
              children: "USB_SERIAL_DDK_INIT_ERROR"
            }), " 初始化DDK失败。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_usbserial_release",
      children: "OH_UsbSerial_Release()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_UsbSerial_Release(void)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "释放USB Serial DDK。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限："
        })
      }), " ohos.permission.ACCESS_DDK_USB_SERIAL"]
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
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-usb-serial-types-h/capi-usb-serial-types-h#usbserial_ddkretcode",
              children: "USB_SERIAL_DDK_SUCCESS"
            }), " 调用接口成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-usb-serial-types-h/capi-usb-serial-types-h#usbserial_ddkretcode",
              children: "USB_SERIAL_DDK_NO_PERM"
            }), " 权限校验失败。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-usb-serial-types-h/capi-usb-serial-types-h#usbserial_ddkretcode",
              children: "USB_SERIAL_DDK_INIT_ERROR"
            }), " 未初始化DDK。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-usb-serial-types-h/capi-usb-serial-types-h#usbserial_ddkretcode",
              children: "USB_SERIAL_DDK_SERVICE_ERROR"
            }), " DDK服务通信失败。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_usbserial_open",
      children: "OH_UsbSerial_Open()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_UsbSerial_Open(uint64_t deviceId, uint8_t interfaceIndex, UsbSerial_Device **dev)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过deviceId和interfaceIndex打开USB串口设备。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限："
        })
      }), " ohos.permission.ACCESS_DDK_USB_SERIAL"]
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
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["接口索引，对应USB协议中的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-struct/capi-usbddk-usbinterfacedescriptor/capi-usbddk-usbinterfacedescriptor",
              children: "bInterfaceNumber"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-struct/capi-serialddk-usbserial-devicehandle/capi-serialddk-usbserial-devicehandle",
              children: "UsbSerial_Device"
            }), " **dev"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备句柄。"
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
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-usb-serial-types-h/capi-usb-serial-types-h#usbserial_ddkretcode",
              children: "USB_SERIAL_DDK_SUCCESS"
            }), " 调用接口成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-usb-serial-types-h/capi-usb-serial-types-h#usbserial_ddkretcode",
              children: "USB_SERIAL_DDK_NO_PERM"
            }), " 权限校验失败。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-usb-serial-types-h/capi-usb-serial-types-h#usbserial_ddkretcode",
              children: "USB_SERIAL_DDK_INVALID_PARAMETER"
            }), " 参数检查失败。可能原因为：dev为空指针或*dev为空指针。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-usb-serial-types-h/capi-usb-serial-types-h#usbserial_ddkretcode",
              children: "USB_SERIAL_DDK_INIT_ERROR"
            }), " 未初始化DDK。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-usb-serial-types-h/capi-usb-serial-types-h#usbserial_ddkretcode",
              children: "USB_SERIAL_DDK_SERVICE_ERROR"
            }), " DDK服务通信失败。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-usb-serial-types-h/capi-usb-serial-types-h#usbserial_ddkretcode",
              children: "USB_SERIAL_DDK_MEMORY_ERROR"
            }), " 内存不足。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-usb-serial-types-h/capi-usb-serial-types-h#usbserial_ddkretcode",
              children: "USB_SERIAL_DDK_IO_ERROR"
            }), " DDK发生I/O错误。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-usb-serial-types-h/capi-usb-serial-types-h#usbserial_ddkretcode",
              children: "USB_SERIAL_DDK_DEVICE_NOT_FOUND"
            }), " 找不到设备或接口。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_usbserial_close",
      children: "OH_UsbSerial_Close()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_UsbSerial_Close(UsbSerial_Device **dev)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "关闭USB串口设备。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限："
        })
      }), " ohos.permission.ACCESS_DDK_USB_SERIAL"]
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
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-struct/capi-serialddk-usbserial-devicehandle/capi-serialddk-usbserial-devicehandle",
              children: "UsbSerial_Device"
            }), " **dev"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备句柄。"
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
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-usb-serial-types-h/capi-usb-serial-types-h#usbserial_ddkretcode",
              children: "USB_SERIAL_DDK_SUCCESS"
            }), " 调用接口成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-usb-serial-types-h/capi-usb-serial-types-h#usbserial_ddkretcode",
              children: "USB_SERIAL_DDK_NO_PERM"
            }), " 权限校验失败。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-usb-serial-types-h/capi-usb-serial-types-h#usbserial_ddkretcode",
              children: "USB_SERIAL_DDK_INVALID_PARAMETER"
            }), " 参数检查失败。可能原因：dev为空指针或*dev为空指针。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-usb-serial-types-h/capi-usb-serial-types-h#usbserial_ddkretcode",
              children: "USB_SERIAL_DDK_INIT_ERROR"
            }), " 未初始化DDK。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-usb-serial-types-h/capi-usb-serial-types-h#usbserial_ddkretcode",
              children: "USB_SERIAL_DDK_SERVICE_ERROR"
            }), " DDK服务通信失败。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-usb-serial-types-h/capi-usb-serial-types-h#usbserial_ddkretcode",
              children: "USB_SERIAL_DDK_IO_ERROR"
            }), " DDK发生I/O错误。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-usb-serial-types-h/capi-usb-serial-types-h#usbserial_ddkretcode",
              children: "USB_SERIAL_DDK_INVALID_OPERATION"
            }), " 无效操作。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_usbserial_read",
      children: "OH_UsbSerial_Read()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_UsbSerial_Read(UsbSerial_Device *dev, uint8_t *buff, uint32_t bufferSize, uint32_t *bytesRead)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从USB串口设备读入数据到缓冲区。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限："
        })
      }), " ohos.permission.ACCESS_DDK_USB_SERIAL"]
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
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-struct/capi-serialddk-usbserial-devicehandle/capi-serialddk-usbserial-devicehandle",
              children: "UsbSerial_Device"
            }), " *dev"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备句柄。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint8_t *buff"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "保存从USB串口设备读取数据的缓冲区。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t bufferSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "缓冲区的大小。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t *bytesRead"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["实际读取的字节数，如果设置了阻塞模式，则实际读取到的数据等于bufferSize后才会返回，  详见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-usb-serial-api-h/capi-usb-serial-api-h#oh_usbserial_settimeout",
              children: "OH_UsbSerial_SetTimeout"
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
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-usb-serial-types-h/capi-usb-serial-types-h#usbserial_ddkretcode",
              children: "USB_SERIAL_DDK_SUCCESS"
            }), " 调用接口成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-usb-serial-types-h/capi-usb-serial-types-h#usbserial_ddkretcode",
              children: "USB_SERIAL_DDK_NO_PERM"
            }), " 权限校验失败。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-usb-serial-types-h/capi-usb-serial-types-h#usbserial_ddkretcode",
              children: "USB_SERIAL_DDK_INVALID_PARAMETER"
            }), " 参数检查失败。可能原因：1. dev为空指针;  2. buff为空指针; 3. bufferSize等于0; 4. bytesRead为空指针。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-usb-serial-types-h/capi-usb-serial-types-h#usbserial_ddkretcode",
              children: "USB_SERIAL_DDK_INIT_ERROR"
            }), " 未初始化DDK。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-usb-serial-types-h/capi-usb-serial-types-h#usbserial_ddkretcode",
              children: "USB_SERIAL_DDK_SERVICE_ERROR"
            }), " DDK服务通信失败。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-usb-serial-types-h/capi-usb-serial-types-h#usbserial_ddkretcode",
              children: "USB_SERIAL_DDK_MEMORY_ERROR"
            }), " buff地址无效。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-usb-serial-types-h/capi-usb-serial-types-h#usbserial_ddkretcode",
              children: "USB_SERIAL_DDK_IO_ERROR"
            }), " DDK发生I/O错误。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-usb-serial-types-h/capi-usb-serial-types-h#usbserial_ddkretcode",
              children: "USB_SERIAL_DDK_INVALID_OPERATION"
            }), " 无效操作。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_usbserial_write",
      children: "OH_UsbSerial_Write()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_UsbSerial_Write(UsbSerial_Device *dev, uint8_t *buff, uint32_t bufferSize, uint32_t *bytesWritten)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将buff中的数据写入USB串口设备。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限："
        })
      }), " ohos.permission.ACCESS_DDK_USB_SERIAL"]
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
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-struct/capi-serialddk-usbserial-devicehandle/capi-serialddk-usbserial-devicehandle",
              children: "UsbSerial_Device"
            }), " *dev"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备句柄。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint8_t *buff"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "写入USB串口设备数据的缓冲区。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t bufferSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "缓冲区的大小。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t *bytesWritten"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "实际写入的字节数。"
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
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-usb-serial-types-h/capi-usb-serial-types-h#usbserial_ddkretcode",
              children: "USB_SERIAL_DDK_SUCCESS"
            }), " 调用接口成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-usb-serial-types-h/capi-usb-serial-types-h#usbserial_ddkretcode",
              children: "USB_SERIAL_DDK_NO_PERM"
            }), " 权限校验失败。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-usb-serial-types-h/capi-usb-serial-types-h#usbserial_ddkretcode",
              children: "USB_SERIAL_DDK_INVALID_PARAMETER"
            }), " 参数检查失败。可能原因：1. dev为空指针;  2. buff为空指针; 3. bufferSize等于0; 4. bytesWritten为空指针。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-usb-serial-types-h/capi-usb-serial-types-h#usbserial_ddkretcode",
              children: "USB_SERIAL_DDK_INIT_ERROR"
            }), " 未初始化DDK。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-usb-serial-types-h/capi-usb-serial-types-h#usbserial_ddkretcode",
              children: "USB_SERIAL_DDK_SERVICE_ERROR"
            }), " DDK服务通信失败。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-usb-serial-types-h/capi-usb-serial-types-h#usbserial_ddkretcode",
              children: "USB_SERIAL_DDK_MEMORY_ERROR"
            }), " buff地址无效。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-usb-serial-types-h/capi-usb-serial-types-h#usbserial_ddkretcode",
              children: "USB_SERIAL_DDK_IO_ERROR"
            }), " DDK发生I/O错误。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-usb-serial-types-h/capi-usb-serial-types-h#usbserial_ddkretcode",
              children: "USB_SERIAL_DDK_INVALID_OPERATION"
            }), " 无效操作。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_usbserial_setbaudrate",
      children: "OH_UsbSerial_SetBaudRate()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_UsbSerial_SetBaudRate(UsbSerial_Device *dev, uint32_t baudRate)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置USB串口设备的波特率。如果USB串口设备的参数为默认值（数据位为8，停止位为1，数据传输无校验），则只需要调用该接口设置波特率。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限："
        })
      }), " ohos.permission.ACCESS_DDK_USB_SERIAL"]
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-struct/capi-serialddk-usbserial-devicehandle/capi-serialddk-usbserial-devicehandle",
              children: "UsbSerial_Device"
            }), " *dev"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备句柄。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t baudRate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "USB串口设备的波特率。"
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
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-usb-serial-types-h/capi-usb-serial-types-h#usbserial_ddkretcode",
              children: "USB_SERIAL_DDK_SUCCESS"
            }), " 调用接口成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-usb-serial-types-h/capi-usb-serial-types-h#usbserial_ddkretcode",
              children: "USB_SERIAL_DDK_NO_PERM"
            }), " 权限校验失败。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-usb-serial-types-h/capi-usb-serial-types-h#usbserial_ddkretcode",
              children: "USB_SERIAL_DDK_INVALID_PARAMETER"
            }), "参数检查失败。可能原因：dev为空指针。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-usb-serial-types-h/capi-usb-serial-types-h#usbserial_ddkretcode",
              children: "USB_SERIAL_DDK_INIT_ERROR"
            }), " 未初始化DDK。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-usb-serial-types-h/capi-usb-serial-types-h#usbserial_ddkretcode",
              children: "USB_SERIAL_DDK_SERVICE_ERROR"
            }), " DDK服务通信失败。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-usb-serial-types-h/capi-usb-serial-types-h#usbserial_ddkretcode",
              children: "USB_SERIAL_DDK_IO_ERROR"
            }), " DDK发生I/O错误。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-usb-serial-types-h/capi-usb-serial-types-h#usbserial_ddkretcode",
              children: "USB_SERIAL_DDK_INVALID_OPERATION"
            }), " 无效操作。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_usbserial_setparams",
      children: "OH_UsbSerial_SetParams()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_UsbSerial_SetParams(UsbSerial_Device *dev, UsbSerial_Params *params)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置USB串口设备的参数。如果USB串口设备的参数不为默认值（数据位默认为8，停止位默认为1，数据传输默认无校验），则需要调用该接口进行参数设置。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限："
        })
      }), " ohos.permission.ACCESS_DDK_USB_SERIAL"]
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-struct/capi-serialddk-usbserial-devicehandle/capi-serialddk-usbserial-devicehandle",
              children: "UsbSerial_Device"
            }), " *dev"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备句柄。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-struct/capi-serialddk-usbserial-params/capi-serialddk-usbserial-params",
              children: "UsbSerial_Params"
            }), " *params"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["待设置的USB串口设备参数，详见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-struct/capi-serialddk-usbserial-params/capi-serialddk-usbserial-params",
              children: "UsbSerial_Params"
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
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-usb-serial-types-h/capi-usb-serial-types-h#usbserial_ddkretcode",
              children: "USB_SERIAL_DDK_SUCCESS"
            }), " 调用接口成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-usb-serial-types-h/capi-usb-serial-types-h#usbserial_ddkretcode",
              children: "USB_SERIAL_DDK_NO_PERM"
            }), " 权限校验失败。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-usb-serial-types-h/capi-usb-serial-types-h#usbserial_ddkretcode",
              children: "USB_SERIAL_DDK_INVALID_PARAMETER"
            }), " 参数检查失败。可能原因：1. dev为空指针;  2. params为空指针。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-usb-serial-types-h/capi-usb-serial-types-h#usbserial_ddkretcode",
              children: "USB_SERIAL_DDK_INIT_ERROR"
            }), " 未初始化DDK。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-usb-serial-types-h/capi-usb-serial-types-h#usbserial_ddkretcode",
              children: "USB_SERIAL_DDK_SERVICE_ERROR"
            }), " DDK服务通信失败。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-usb-serial-types-h/capi-usb-serial-types-h#usbserial_ddkretcode",
              children: "USB_SERIAL_DDK_IO_ERROR"
            }), " DDK发生I/O错误。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-usb-serial-types-h/capi-usb-serial-types-h#usbserial_ddkretcode",
              children: "USB_SERIAL_DDK_INVALID_OPERATION"
            }), " 无效操作。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_usbserial_settimeout",
      children: "OH_UsbSerial_SetTimeout()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_UsbSerial_SetTimeout(UsbSerial_Device *dev, int timeout)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置读取USB串口设备上报数据的超时时间（毫秒）。在不调用此函数的情况下，超时值默认为0，表示不管是否读取到数据都立即返回。如果需要等待一定的时间或者必须读取到数据，则调用该接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限："
        })
      }), " ohos.permission.ACCESS_DDK_USB_SERIAL"]
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-struct/capi-serialddk-usbserial-devicehandle/capi-serialddk-usbserial-devicehandle",
              children: "UsbSerial_Device"
            }), " *dev"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备句柄。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int timeout"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["读取USB串口设备的超时时间，其取值范围为：- (0, 25500]：以毫秒为单位的时间值，将其四舍五入为最接近的100毫秒后，作为实际的超时时间。例如，输入12321，实际生效的超时时间为12300。- 0：表示立即返回数据，不等待。- -1：表示以阻塞方式读取数据，即读取数据时，只有读到指定长度的数据后才返回，详见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-usb-serial-api-h/capi-usb-serial-api-h#oh_usbserial_read",
              children: "OH_UsbSerial_Read"
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
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-usb-serial-types-h/capi-usb-serial-types-h#usbserial_ddkretcode",
              children: "USB_SERIAL_DDK_SUCCESS"
            }), " 调用接口成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-usb-serial-types-h/capi-usb-serial-types-h#usbserial_ddkretcode",
              children: "USB_SERIAL_DDK_NO_PERM"
            }), " 权限校验失败。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-usb-serial-types-h/capi-usb-serial-types-h#usbserial_ddkretcode",
              children: "USB_SERIAL_DDK_INVALID_PARAMETER"
            }), " 参数检查失败。可能原因：1. dev为空指针;  2. timeout < -1 or timeout > 25500.  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-usb-serial-types-h/capi-usb-serial-types-h#usbserial_ddkretcode",
              children: "USB_SERIAL_DDK_INIT_ERROR"
            }), " 未初始化DDK。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-usb-serial-types-h/capi-usb-serial-types-h#usbserial_ddkretcode",
              children: "USB_SERIAL_DDK_SERVICE_ERROR"
            }), " DDK服务通信失败。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-usb-serial-types-h/capi-usb-serial-types-h#usbserial_ddkretcode",
              children: "USB_SERIAL_DDK_IO_ERROR"
            }), " DDK发生I/O错误。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-usb-serial-types-h/capi-usb-serial-types-h#usbserial_ddkretcode",
              children: "USB_SERIAL_DDK_INVALID_OPERATION"
            }), " 无效操作。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_usbserial_setflowcontrol",
      children: "OH_UsbSerial_SetFlowControl()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_UsbSerial_SetFlowControl(UsbSerial_Device *dev, UsbSerial_FlowControl flowControl)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置流控参数。USB串口设备通信中的流控用于管理数据传输的速率，以确保发送方不会发送超过接收方处理能力的数据量。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果USB串口设备实现了流控处理，则需要调用此接口。如果不调用此接口，默认为无流控。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限："
        })
      }), " ohos.permission.ACCESS_DDK_USB_SERIAL"]
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-struct/capi-serialddk-usbserial-devicehandle/capi-serialddk-usbserial-devicehandle",
              children: "UsbSerial_Device"
            }), " *dev"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备句柄。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-usb-serial-types-h/capi-usb-serial-types-h#usbserial_flowcontrol",
              children: "UsbSerial_FlowControl"
            }), " flowControl"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["流控方式，详见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-usb-serial-types-h/capi-usb-serial-types-h#usbserial_flowcontrol",
              children: "UsbSerial_FlowControl"
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
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-usb-serial-types-h/capi-usb-serial-types-h#usbserial_ddkretcode",
              children: "USB_SERIAL_DDK_SUCCESS"
            }), " 调用接口成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-usb-serial-types-h/capi-usb-serial-types-h#usbserial_ddkretcode",
              children: "USB_SERIAL_DDK_NO_PERM"
            }), " 权限校验失败。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-usb-serial-types-h/capi-usb-serial-types-h#usbserial_ddkretcode",
              children: "USB_SERIAL_DDK_INVALID_PARAMETER"
            }), " 参数检查失败。可能原因：dev为空指针。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-usb-serial-types-h/capi-usb-serial-types-h#usbserial_ddkretcode",
              children: "USB_SERIAL_DDK_INIT_ERROR"
            }), " 未初始化DDK。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-usb-serial-types-h/capi-usb-serial-types-h#usbserial_ddkretcode",
              children: "USB_SERIAL_DDK_SERVICE_ERROR"
            }), " DDK服务通信失败。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-usb-serial-types-h/capi-usb-serial-types-h#usbserial_ddkretcode",
              children: "USB_SERIAL_DDK_IO_ERROR"
            }), " DDK发生I/O错误。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-usb-serial-types-h/capi-usb-serial-types-h#usbserial_ddkretcode",
              children: "USB_SERIAL_DDK_INVALID_OPERATION"
            }), " 无效操作。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_usbserial_flush",
      children: "OH_UsbSerial_Flush()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_UsbSerial_Flush(UsbSerial_Device *dev)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "写入完成后清空输入和输出缓冲区。在向USB串口设备发送数据时，可能会有大量数据缓冲在内核中等待发送。如果应用程序关闭文件描述符或者退出之前没有等待这些数据被实际发送出去，那么部分数据可能会丢失。调用该接口可以确保所有的数据都被发送完毕再继续执行后续操作。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限："
        })
      }), " ohos.permission.ACCESS_DDK_USB_SERIAL"]
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
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-struct/capi-serialddk-usbserial-devicehandle/capi-serialddk-usbserial-devicehandle",
              children: "UsbSerial_Device"
            }), " *dev"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备句柄。"
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
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-usb-serial-types-h/capi-usb-serial-types-h#usbserial_ddkretcode",
              children: "USB_SERIAL_DDK_SUCCESS"
            }), " 调用接口成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-usb-serial-types-h/capi-usb-serial-types-h#usbserial_ddkretcode",
              children: "USB_SERIAL_DDK_NO_PERM"
            }), " 权限校验失败。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-usb-serial-types-h/capi-usb-serial-types-h#usbserial_ddkretcode",
              children: "USB_SERIAL_DDK_INVALID_PARAMETER"
            }), " 参数检查失败。可能原因：dev为空指针。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-usb-serial-types-h/capi-usb-serial-types-h#usbserial_ddkretcode",
              children: "USB_SERIAL_DDK_INIT_ERROR"
            }), " 未初始化DDK。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-usb-serial-types-h/capi-usb-serial-types-h#usbserial_ddkretcode",
              children: "USB_SERIAL_DDK_SERVICE_ERROR"
            }), " DDK服务通信失败。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-usb-serial-types-h/capi-usb-serial-types-h#usbserial_ddkretcode",
              children: "USB_SERIAL_DDK_IO_ERROR"
            }), " DDK发生I/O错误。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-usb-serial-types-h/capi-usb-serial-types-h#usbserial_ddkretcode",
              children: "USB_SERIAL_DDK_INVALID_OPERATION"
            }), " 无效操作。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_usbserial_flushinput",
      children: "OH_UsbSerial_FlushInput()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_UsbSerial_FlushInput(UsbSerial_Device *dev)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "刷新输入缓冲区，缓冲区中的数据会被立刻清空。在和USB串口设备通信过程中，特别是在调试阶段，有时会遇到乱序的数据包或者其他异常情况。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "调用该接口可以帮助清理这些异常状况，使通信恢复正常。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限："
        })
      }), " ohos.permission.ACCESS_DDK_USB_SERIAL"]
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
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-struct/capi-serialddk-usbserial-devicehandle/capi-serialddk-usbserial-devicehandle",
              children: "UsbSerial_Device"
            }), " *dev"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备句柄。"
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
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-usb-serial-types-h/capi-usb-serial-types-h#usbserial_ddkretcode",
              children: "USB_SERIAL_DDK_SUCCESS"
            }), " 调用接口成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-usb-serial-types-h/capi-usb-serial-types-h#usbserial_ddkretcode",
              children: "USB_SERIAL_DDK_NO_PERM"
            }), " 权限校验失败。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-usb-serial-types-h/capi-usb-serial-types-h#usbserial_ddkretcode",
              children: "USB_SERIAL_DDK_INVALID_PARAMETER"
            }), " 参数检查失败。可能原因：dev为空指针。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-usb-serial-types-h/capi-usb-serial-types-h#usbserial_ddkretcode",
              children: "USB_SERIAL_DDK_INIT_ERROR"
            }), " 未初始化DDK。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-usb-serial-types-h/capi-usb-serial-types-h#usbserial_ddkretcode",
              children: "USB_SERIAL_DDK_SERVICE_ERROR"
            }), " DDK服务通信失败。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-usb-serial-types-h/capi-usb-serial-types-h#usbserial_ddkretcode",
              children: "USB_SERIAL_DDK_IO_ERROR"
            }), " DDK发生I/O错误。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-usb-serial-types-h/capi-usb-serial-types-h#usbserial_ddkretcode",
              children: "USB_SERIAL_DDK_INVALID_OPERATION"
            }), " 无效操作。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_usbserial_flushoutput",
      children: "OH_UsbSerial_FlushOutput()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_UsbSerial_FlushOutput(UsbSerial_Device *dev)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "刷新输出缓冲区，缓冲区中的数据会被立刻清空。在和USB串口设备通信过程中，特别是在调试阶段，有时会遇到乱序的数据包或者其他异常情况。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "调用该接口可以帮助清理这些异常状况，使通信恢复正常。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限："
        })
      }), " ohos.permission.ACCESS_DDK_USB_SERIAL"]
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
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-struct/capi-serialddk-usbserial-devicehandle/capi-serialddk-usbserial-devicehandle",
              children: "UsbSerial_Device"
            }), " *dev"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备句柄。"
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
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-usb-serial-types-h/capi-usb-serial-types-h#usbserial_ddkretcode",
              children: "USB_SERIAL_DDK_SUCCESS"
            }), " 调用接口成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-usb-serial-types-h/capi-usb-serial-types-h#usbserial_ddkretcode",
              children: "USB_SERIAL_DDK_NO_PERM"
            }), " 权限校验失败。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-usb-serial-types-h/capi-usb-serial-types-h#usbserial_ddkretcode",
              children: "USB_SERIAL_DDK_INVALID_PARAMETER"
            }), " 参数检查失败。可能原因：dev为空指针。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-usb-serial-types-h/capi-usb-serial-types-h#usbserial_ddkretcode",
              children: "USB_SERIAL_DDK_INIT_ERROR"
            }), " 未初始化DDK。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-usb-serial-types-h/capi-usb-serial-types-h#usbserial_ddkretcode",
              children: "USB_SERIAL_DDK_SERVICE_ERROR"
            }), " DDK服务通信失败。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-usb-serial-types-h/capi-usb-serial-types-h#usbserial_ddkretcode",
              children: "USB_SERIAL_DDK_IO_ERROR"
            }), " DDK发生I/O错误。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-usb-serial-types-h/capi-usb-serial-types-h#usbserial_ddkretcode",
              children: "USB_SERIAL_DDK_INVALID_OPERATION"
            }), " 无效操作。"]
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