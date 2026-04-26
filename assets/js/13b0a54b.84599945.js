"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["135330"], {
183843(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_system_hardware_api_driver_development_api_driver_development_c_driver_development_headerfile_capi_hid_ddk_types_h_capi_hid_ddk_types_h_md_13b_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-system-hardware-api-driver-development-api-driver-development-c-driver-development-headerfile-capi-hid-ddk-types-h-capi-hid-ddk-types-h-md-13b.json
var site_docs_ref_system_hardware_api_driver_development_api_driver_development_c_driver_development_headerfile_capi_hid_ddk_types_h_capi_hid_ddk_types_h_md_13b_namespaceObject = JSON.parse('{"id":"system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-hid-ddk-types-h/capi-hid-ddk-types-h","title":"hid_ddk_types.h","description":"概述","source":"@site/docs-ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-hid-ddk-types-h/capi-hid-ddk-types-h.md","sourceDirName":"system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-hid-ddk-types-h","slug":"/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-hid-ddk-types-h/capi-hid-ddk-types-h","permalink":"/harmonyos-docs-site/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-hid-ddk-types-h/capi-hid-ddk-types-h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"hid_ddk_types.h","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hid-ddk-types-h","kit":"系统","last_updated":"2026-04-22","slug":"capi-hid-ddk-types-h"},"sidebar":"ref","previous":{"title":"hid_ddk_api.h","permalink":"/harmonyos-docs-site/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-hid-ddk-api-h/capi-hid-ddk-api-h"},"next":{"title":"scsi_peripheral_api.h","permalink":"/harmonyos-docs-site/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-scsi-peripheral-api-h/capi-scsi-peripheral-api-h"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-hid-ddk-types-h/capi-hid-ddk-types-h.md


const frontMatter = {
	title: 'hid_ddk_types.h',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hid-ddk-types-h',
	kit: '系统',
	last_updated: '2026-04-22',
	slug: 'capi-hid-ddk-types-h'
};
const contentTitle = 'hid_ddk_types.h';

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
  "value": "宏定义",
  "id": "宏定义",
  "level": 3
}, {
  "value": "枚举类型说明",
  "id": "枚举类型说明",
  "level": 2
}, {
  "value": "Hid_DeviceProp",
  "id": "hid_deviceprop",
  "level": 3
}, {
  "value": "Hid_EventType",
  "id": "hid_eventtype",
  "level": 3
}, {
  "value": "Hid_SynEvent",
  "id": "hid_synevent",
  "level": 3
}, {
  "value": "Hid_KeyCode",
  "id": "hid_keycode",
  "level": 3
}, {
  "value": "Hid_AbsAxes",
  "id": "hid_absaxes",
  "level": 3
}, {
  "value": "Hid_RelAxes",
  "id": "hid_relaxes",
  "level": 3
}, {
  "value": "Hid_MscEvent",
  "id": "hid_mscevent",
  "level": 3
}, {
  "value": "Hid_DdkErrCode",
  "id": "hid_ddkerrcode",
  "level": 3
}, {
  "value": "Hid_ReportType",
  "id": "hid_reporttype",
  "level": 3
}, {
  "value": "HID_MAX_REPORT_BUFFER_SIZE",
  "id": "hid_max_report_buffer_size",
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
        id: "hid_ddk_typesh",
        children: "hid_ddk_types.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "提供HID DDK中的枚举变量与结构体定义。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <hid/hid_ddk_types.h>"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "库："
        })
      }), " libhid.z.so"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Driver.HID.Extension"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "相关模块："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-module/capi-hidddk/capi-hidddk",
        children: "HidDdk"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "结构体",
      children: "结构体"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-struct/capi-hidddk-hid-emititem/capi-hidddk-hid-emititem",
              children: "Hid_EmitItem"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hid_EmitItem"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "事件信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-struct/capi-hidddk-hid-device/capi-hidddk-hid-device",
              children: "Hid_Device"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hid_Device"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备基本信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-struct/capi-hidddk-hid-eventtypearray/capi-hidddk-hid-eventtypearray",
              children: "Hid_EventTypeArray"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hid_EventTypeArray"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "事件类型编码数组。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-struct/capi-hidddk-hid-keycodearray/capi-hidddk-hid-keycodearray",
              children: "Hid_KeyCodeArray"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hid_KeyCodeArray"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "键值属性数组。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-struct/capi-hidddk-hid-absaxesarray/capi-hidddk-hid-absaxesarray",
              children: "Hid_AbsAxesArray"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hid_AbsAxesArray"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "绝对坐标属性数组。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-struct/capi-hidddk-hid-relaxesarray/capi-hidddk-hid-relaxesarray",
              children: "Hid_RelAxesArray"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hid_RelAxesArray"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "相对坐标属性数组。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-struct/capi-hidddk-hid-msceventarray/capi-hidddk-hid-msceventarray",
              children: "Hid_MscEventArray"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hid_MscEventArray"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "其它特殊事件属性数组。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-struct/capi-hidddk-hid-eventproperties/capi-hidddk-hid-eventproperties",
              children: "Hid_EventProperties"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hid_EventProperties"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备关注事件属性。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-struct/capi-hidddk-hid-rawdevinfo/capi-hidddk-hid-rawdevinfo",
              children: "Hid_RawDevInfo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hid_RawDevInfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "原始设备信息定义。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-struct/capi-hidddk-hid-devicehandle/capi-hidddk-hid-devicehandle",
              children: "Hid_DeviceHandle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hid_DeviceHandle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不透明的USB HID设备结构。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "枚举",
      children: "枚举"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "#hid_deviceprop",
              children: "Hid_DeviceProp"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hid_DeviceProp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入设备特性定义。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#hid_eventtype",
              children: "Hid_EventType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hid_EventType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "事件类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#hid_synevent",
              children: "Hid_SynEvent"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hid_SynEvent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "同步事件编码。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#hid_keycode",
              children: "Hid_KeyCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hid_KeyCode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "键值编码。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#hid_absaxes",
              children: "Hid_AbsAxes"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hid_AbsAxes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "绝对坐标编码。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#hid_relaxes",
              children: "Hid_RelAxes"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hid_RelAxes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "相对坐标编码。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#hid_mscevent",
              children: "Hid_MscEvent"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hid_MscEvent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不适合其它类型的输入事件编码。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#hid_ddkerrcode",
              children: "Hid_DdkErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hid_DdkErrCode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HID DDK错误码定义。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#hid_reporttype",
              children: "Hid_ReportType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hid_ReportType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "报告（HID设备与主机之间交换的数据包）类型定义。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "宏定义",
      children: "宏定义"
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
            children: "HID_MAX_REPORT_BUFFER_SIZE (16 * 1024 - 1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "最大报告缓冲区大小。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "枚举类型说明",
      children: "枚举类型说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hid_deviceprop",
      children: "Hid_DeviceProp"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum Hid_DeviceProp\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "输入设备特性定义。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "HID_PROP_POINTER = 0x00"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指针设备"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_PROP_DIRECT = 0x01"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "直接输入设备"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_PROP_BUTTON_PAD = 0x02"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "底部按键触摸设备"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_PROP_SEMI_MT = 0x03"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "全多点触控设备"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_PROP_TOP_BUTTON_PAD = 0x04"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "顶部软按键触摸设备"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_PROP_POINTING_STICK = 0x05"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指点杆设备"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_PROP_ACCELEROMETER = 0x06"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "加速度传感器设备"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hid_eventtype",
      children: "Hid_EventType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum Hid_EventType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "事件类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "HID_EV_SYN = 0x00"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "同步事件"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_EV_KEY = 0x01"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键事件"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_EV_REL = 0x02"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "相对坐标事件"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_EV_ABS = 0x03"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "绝对坐标事件"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_EV_MSC = 0x04"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "特殊事件"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hid_synevent",
      children: "Hid_SynEvent"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum Hid_SynEvent\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "同步事件编码。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "HID_SYN_REPORT = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示一个事件的结束"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_SYN_CONFIG = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示配置同步"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_SYN_MT_REPORT = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示多点触摸的ABS数据包结束"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_SYN_DROPPED = 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示该事件被丢弃"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hid_keycode",
      children: "Hid_KeyCode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum Hid_KeyCode\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "键值编码。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "HID_KEY_A = 30"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "键A"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_KEY_B = 48"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "键B"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_KEY_C = 46"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "键C"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_KEY_D = 32"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "键D"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_KEY_E = 18"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "键E"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_KEY_F = 33"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "键F"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_KEY_G = 34"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "键G"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_KEY_H = 35"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "键H"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_KEY_I = 23"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "键I"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_KEY_J = 36"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "键J"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_KEY_K = 37"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "键K"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_KEY_L = 38"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "键L"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_KEY_M = 50"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "键M"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_KEY_N = 49"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "键N"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_KEY_O = 24"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "键O"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_KEY_P = 25"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "键P"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_KEY_Q = 16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "键Q"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_KEY_R = 19"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "键R"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_KEY_S = 31"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "键S"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_KEY_T = 20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "键T"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_KEY_U = 22"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "键U"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_KEY_V = 47"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "键V"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_KEY_W = 17"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "键W"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_KEY_X = 45"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "键X"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_KEY_Y = 21"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "键Y"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_KEY_Z = 44"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "键Z"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_KEY_ESC = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "键ESC"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_KEY_0 = 11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "键0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_KEY_1 = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "键1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_KEY_2 = 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "键2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_KEY_3 = 4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "键3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_KEY_4 = 5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "键4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_KEY_5 = 6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "键5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_KEY_6 = 7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "键6"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_KEY_7 = 8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "键7"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_KEY_8 = 9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "键8"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_KEY_9 = 10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "键9"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_KEY_GRAVE = 41"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "键`"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_KEY_MINUS = 12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "键-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_KEY_EQUALS = 13"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "键="
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_KEY_BACKSPACE = 14"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "键退格"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_KEY_LEFT_BRACKET = 26"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "键["
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_KEY_RIGHT_BRACKET = 27"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "键]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_KEY_ENTER = 28"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "键回车"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_KEY_LEFT_SHIFT = 42"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "键左shift"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_KEY_BACKSLASH = 43"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "键\\"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_KEY_SEMICOLON = 39"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "键;"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_KEY_APOSTROPHE = 40"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "键'"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_KEY_SPACE = 57"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "键空格"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_KEY_SLASH = 53"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "键"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_KEY_COMMA = 51"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "键,"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_KEY_PERIOD = 52"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "键."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_KEY_RIGHT_SHIFT = 54"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "键右shift"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_KEY_NUMPAD_0 = 82"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数字键0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_KEY_NUMPAD_1 = 79"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数字键1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_KEY_NUMPAD_2 = 80"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数字键2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_KEY_NUMPAD_3 = 81"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数字键3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_KEY_NUMPAD_4 = 75"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数字键4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_KEY_NUMPAD_5 = 76"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数字键5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_KEY_NUMPAD_6 = 77"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数字键6"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_KEY_NUMPAD_7 = 71"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数字键7"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_KEY_NUMPAD_8 = 72"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数字键8"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_KEY_NUMPAD_9 = 73"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数字键9"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_KEY_NUMPAD_DIVIDE = 70"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数字键"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_KEY_NUMPAD_MULTIPLY = 55"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数字键"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_KEY_NUMPAD_SUBTRACT = 74"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数字键-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_KEY_NUMPAD_ADD = 78"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数字键+"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_KEY_NUMPAD_DOT = 83"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数字键."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_KEY_SYSRQ = 99"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "键打印屏幕"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_KEY_DELETE = 111"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "键删除"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_KEY_MUTE = 113"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "键静音"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_KEY_VOLUME_DOWN = 114"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "键音量-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_KEY_VOLUME_UP = 115"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "键音量+"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_KEY_BRIGHTNESS_DOWN = 224"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "键亮度-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_KEY_BRIGHTNESS_UP = 225"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "键亮度+"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_BTN_0 = 0x100"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按钮0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_BTN_1 = 0x101"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按钮1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_BTN_2 = 0x102"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按钮2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_BTN_3 = 0x103"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按钮3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_BTN_4 = 0x104"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按钮4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_BTN_5 = 0x105"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按钮5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_BTN_6 = 0x106"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按钮6"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_BTN_7 = 0x107"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按钮7"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_BTN_8 = 0x108"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按钮8"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_BTN_9 = 0x109"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按钮9"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_BTN_LEFT = 0x110"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "鼠标按键左键"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_BTN_RIGHT = 0x111"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "鼠标按键右键"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_BTN_MIDDLE = 0x112"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "鼠标按键中键"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_BTN_SIDE = 0x113"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "鼠标侧面按键"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_BTN_EXTRA = 0x114"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "鼠标附加按键"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_BTN_FORWARD = 0x115"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "鼠标向前按键"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_BTN_BACKWARD = 0x116"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "鼠标向后按键"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_BTN_TASK = 0x117"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "鼠标任务按键"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_BTN_TOOL_PEN = 0x140"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "画笔"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_BTN_TOOL_RUBBER = 0x141"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "橡皮擦"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_BTN_TOOL_BRUSH = 0x142"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "笔刷"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_BTN_TOOL_PENCIL = 0x143"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "钢笔"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_BTN_TOOL_AIRBRUSH = 0x144"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "喷枪"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_BTN_TOOL_FINGER = 0x145"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "手指"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_BTN_TOOL_MOUSE = 0x146"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "鼠标"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_BTN_TOOL_LENS = 0x147"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "镜头"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_BTN_TOOL_QUINT_TAP = 0x148"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "五指触控"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_BTN_STYLUS3 = 0x149"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "手写笔3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_BTN_TOUCH = 0x14a"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "触摸"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_BTN_STYLUS = 0x14b"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "手写笔"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_BTN_STYLUS2 = 0x14c"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "手写笔2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_BTN_TOOL_DOUBLE_TAP = 0x14d"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "二指触控"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_BTN_TOOL_TRIPLE_TAP = 0x14e"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "三指触控"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_BTN_TOOL_QUAD_TAP = 0x14f"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "四指触控"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_BTN_WHEEL = 0x150"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "滚轮"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hid_absaxes",
      children: "Hid_AbsAxes"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum Hid_AbsAxes\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "绝对坐标编码。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "HID_ABS_X = 0x00"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "X轴"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_ABS_Y = 0x01"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Y轴"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_ABS_Z = 0x02"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Z轴"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_ABS_RX = 0x03"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "右模拟摇杆的 X 轴"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_ABS_RY = 0x04"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "右模拟摇杆的 Y 轴"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_ABS_RZ = 0x05"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "右模拟摇杆的 Z 轴"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_ABS_THROTTLE = 0x06"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "油门"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_ABS_RUDDER = 0x07"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "舵"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_ABS_WHEEL = 0x08"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "滚轮"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_ABS_GAS = 0x09"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "气"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_ABS_BRAKE = 0x0a"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "制动"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_ABS_HAT0X = 0x10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HAT0X"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_ABS_HAT0Y = 0x11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HAT0Y"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_ABS_HAT1X = 0x12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HAT1X"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_ABS_HAT1Y = 0x13"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HAT1Y"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_ABS_HAT2X = 0x14"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HAT2X"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_ABS_HAT2Y = 0x15"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HAT2Y"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_ABS_HAT3X = 0x16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HAT3X"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_ABS_HAT3Y = 0x17"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HAT3Y"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_ABS_PRESSURE = 0x18"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "压力"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_ABS_DISTANCE = 0x19"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "距离"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_ABS_TILT_X = 0x1a"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "X轴倾斜度"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_ABS_TILT_Y = 0x1b"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Y轴倾斜度"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_ABS_TOOL_WIDTH = 0x1c"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "触摸工具的宽度"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_ABS_VOLUME = 0x20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "音量"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_ABS_MISC = 0x28"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "其它"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hid_relaxes",
      children: "Hid_RelAxes"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum Hid_RelAxes\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "相对坐标编码。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "HID_REL_X = 0x00"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "X轴"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_REL_Y = 0x01"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Y轴"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_REL_Z = 0x02"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Z轴"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_REL_RX = 0x03"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "右模拟摇杆的 X 轴"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_REL_RY = 0x04"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "右模拟摇杆的 Y 轴"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_REL_RZ = 0x05"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "右模拟摇杆的 Z 轴"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_REL_HWHEEL = 0x06"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "水平滚轮"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_REL_DIAL = 0x07"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "刻度"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_REL_WHEEL = 0x08"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "滚轮"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_REL_MISC = 0x09"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "其它"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_REL_RESERVED = 0x0a"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "预留"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_REL_WHEEL_HI_RES = 0x0b"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "高分辨率滚轮"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_REL_HWHEEL_HI_RES = 0x0c"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "高分辨率水平滚轮"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hid_mscevent",
      children: "Hid_MscEvent"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum Hid_MscEvent\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "不适合其它类型的输入事件编码。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "HID_MSC_SERIAL = 0x00"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "序列号"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_MSC_PULSE_LED = 0x01"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "脉冲"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_MSC_GESTURE = 0x02"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "手势"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_MSC_RAW = 0x03"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开始事件"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_MSC_SCAN = 0x04"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "扫描"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_MSC_TIMESTAMP = 0x05"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "时间戳"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hid_ddkerrcode",
      children: "Hid_DdkErrCode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum Hid_DdkErrCode\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HID DDK错误码定义。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "HID_DDK_SUCCESS = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "操作成功。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_DDK_NO_PERM = 201"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "没有权限，从API 16起，取值由-6变更为201。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_DDK_INVALID_PARAMETER = 401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "非法参数，从API 16起，取值由-2变更为401。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_DDK_FAILURE = 27300001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "操作失败，从API 16起，取值由-1变更为27300001。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_DDK_NULL_PTR = 27300002"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "空指针异常，从API 16起，取值由-4变更为27300002。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_DDK_INVALID_OPERATION = 27300003"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "非法操作，从API 16起，取值由-3变更为27300003。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_DDK_TIMEOUT = 27300004"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "超时，从API 16起，取值由-5变更为27300004。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_DDK_INIT_ERROR = 27300005"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["初始化DDK失败或DDK未初始化。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 18"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_DDK_SERVICE_ERROR = 27300006"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["服务通信过程中错误。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 18"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_DDK_MEMORY_ERROR = 27300007"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["内存相关的错误，包括：内存数据拷贝失败、内存申请失败等。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 18"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_DDK_IO_ERROR = 27300008"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["I/O操作失败。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 18"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_DDK_DEVICE_NOT_FOUND = 27300009"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设备未找到。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 18"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hid_reporttype",
      children: "Hid_ReportType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum Hid_ReportType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "报告（HID设备与主机之间交换的数据包）类型定义。"
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
            children: "HID_INPUT_REPORT = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入报告"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_OUTPUT_REPORT = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输出报告"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID_FEATURE_REPORT = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "特性报告"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hid_max_report_buffer_size",
      children: "HID_MAX_REPORT_BUFFER_SIZE"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "HID_MAX_REPORT_BUFFER_SIZE (16 * 1024 - 1)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "最大报告缓冲区大小。"
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