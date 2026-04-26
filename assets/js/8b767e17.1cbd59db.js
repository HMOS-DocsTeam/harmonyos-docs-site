"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["501983"], {
396893(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_system_hardware_api_driver_development_api_driver_development_c_driver_development_headerfile_capi_usb_serial_types_h_capi_usb_serial_types_h_md_8b7_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-system-hardware-api-driver-development-api-driver-development-c-driver-development-headerfile-capi-usb-serial-types-h-capi-usb-serial-types-h-md-8b7.json
var site_docs_ref_system_hardware_api_driver_development_api_driver_development_c_driver_development_headerfile_capi_usb_serial_types_h_capi_usb_serial_types_h_md_8b7_namespaceObject = JSON.parse('{"id":"system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-usb-serial-types-h/capi-usb-serial-types-h","title":"usb_serial_types.h","description":"概述","source":"@site/docs-ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-usb-serial-types-h/capi-usb-serial-types-h.md","sourceDirName":"system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-usb-serial-types-h","slug":"/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-usb-serial-types-h/capi-usb-serial-types-h","permalink":"/harmonyos-docs-site/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-usb-serial-types-h/capi-usb-serial-types-h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"title":"usb_serial_types.h","sidebar_position":10,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-usb-serial-types-h","kit":"系统","last_updated":"2026-04-22","slug":"capi-usb-serial-types-h"},"sidebar":"ref","previous":{"title":"usb_serial_api.h","permalink":"/harmonyos-docs-site/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-usb-serial-api-h/capi-usb-serial-api-h"},"next":{"title":"DDK_Ashmem","permalink":"/harmonyos-docs-site/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-struct/capi-baseddk-ddk-ashmem/capi-baseddk-ddk-ashmem"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-usb-serial-types-h/capi-usb-serial-types-h.md


const frontMatter = {
	title: 'usb_serial_types.h',
	sidebar_position: 10,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-usb-serial-types-h',
	kit: '系统',
	last_updated: '2026-04-22',
	slug: 'capi-usb-serial-types-h'
};
const contentTitle = 'usb_serial_types.h';

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
  "value": "UsbSerial_DdkRetCode",
  "id": "usbserial_ddkretcode",
  "level": 3
}, {
  "value": "UsbSerial_FlowControl",
  "id": "usbserial_flowcontrol",
  "level": 3
}, {
  "value": "UsbSerial_Parity",
  "id": "usbserial_parity",
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
        id: "usb_serial_typesh",
        children: "usb_serial_types.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "提供USB Serial DDK中的枚举变量、结构体定义与宏定义。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <usb_serial/usb_serial_types.h>"]
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
      id: "结构体",
      children: "结构体"
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
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-struct/capi-serialddk-usbserial-params/capi-serialddk-usbserial-params",
              children: "UsbSerial_Params"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "__attribute__((aligned(8))) UsbSerial_Params"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义USB Serial DDK使用的USB串口参数."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-struct/capi-serialddk-usbserial-devicehandle/capi-serialddk-usbserial-devicehandle",
              children: "UsbSerial_Device"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UsbSerial_Device"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "USB串口设备数据结构（不透明）。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "枚举",
      children: "枚举"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "#usbserial_ddkretcode",
              children: "UsbSerial_DdkRetCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UsbSerial_DdkRetCode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义USB Serial DDK使用的返回码。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#usbserial_flowcontrol",
              children: "UsbSerial_FlowControl"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UsbSerial_FlowControl"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义USB Serial DDK中的流量控制。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#usbserial_parity",
              children: "UsbSerial_Parity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UsbSerial_Parity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义USB Serial DDK使用的校验参数枚举。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "枚举类型说明",
      children: "枚举类型说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "usbserial_ddkretcode",
      children: "UsbSerial_DdkRetCode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum UsbSerial_DdkRetCode\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义USB Serial DDK使用的返回码。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 18"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "USB_SERIAL_DDK_NO_PERM = 201"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "权限被拒绝。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "USB_SERIAL_DDK_INVALID_PARAMETER = 401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无效参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "USB_SERIAL_DDK_SUCCESS = 31600000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "操作成功。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "USB_SERIAL_DDK_INVALID_OPERATION = 31600001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无效操作。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "USB_SERIAL_DDK_INIT_ERROR = 31600002"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "初始化失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "USB_SERIAL_DDK_SERVICE_ERROR = 31600003"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "服务错误。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "USB_SERIAL_DDK_MEMORY_ERROR = 31600004"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "内存相关错误，例如内存不足、内存数据复制失败或内存应用程序故障。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "USB_SERIAL_DDK_IO_ERROR = 31600005"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "I/O 错误。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "USB_SERIAL_DDK_DEVICE_NOT_FOUND = 31600006"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "未找到设备。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "usbserial_flowcontrol",
      children: "UsbSerial_FlowControl"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum UsbSerial_FlowControl\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义USB Serial DDK中的流量控制。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 18"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "USB_SERIAL_NO_FLOW_CONTROL = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无流量控制。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "USB_SERIAL_SOFTWARE_FLOW_CONTROL = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "软件流控。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "USB_SERIAL_HARDWARE_FLOW_CONTROL = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "硬件流控。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "usbserial_parity",
      children: "UsbSerial_Parity"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum UsbSerial_Parity\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义USB Serial DDK使用的校验参数枚举。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 18"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "USB_SERIAL_PARITY_NONE = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无校验。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "USB_SERIAL_PARITY_ODD = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "奇校验。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "USB_SERIAL_PARITY_EVEN = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "偶校验。"
          })]
        })]
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