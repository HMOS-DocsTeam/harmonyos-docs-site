"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["142257"], {
516774(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_system_network_api_telephony_api_telephony_c_telephony_headerfile_capi_telephony_radio_type_h_capi_telephony_radio_type_h_md_10d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-system-network-api-telephony-api-telephony-c-telephony-headerfile-capi-telephony-radio-type-h-capi-telephony-radio-type-h-md-10d.json
var site_docs_ref_system_network_api_telephony_api_telephony_c_telephony_headerfile_capi_telephony_radio_type_h_capi_telephony_radio_type_h_md_10d_namespaceObject = JSON.parse('{"id":"system-network-api/telephony-api/telephony-c/telephony-headerfile/capi-telephony-radio-type-h/capi-telephony-radio-type-h","title":"telephony_radio_type.h","description":"概述","source":"@site/docs-ref/system-network-api/telephony-api/telephony-c/telephony-headerfile/capi-telephony-radio-type-h/capi-telephony-radio-type-h.md","sourceDirName":"system-network-api/telephony-api/telephony-c/telephony-headerfile/capi-telephony-radio-type-h","slug":"/system-network-api/telephony-api/telephony-c/telephony-headerfile/capi-telephony-radio-type-h/capi-telephony-radio-type-h","permalink":"/harmonyos-docs-site/ref/system-network-api/telephony-api/telephony-c/telephony-headerfile/capi-telephony-radio-type-h/capi-telephony-radio-type-h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"telephony_radio_type.h","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-telephony-radio-type-h","kit":"系统","last_updated":"2026-04-22","slug":"capi-telephony-radio-type-h"},"sidebar":"ref","previous":{"title":"telephony_radio.h","permalink":"/harmonyos-docs-site/ref/system-network-api/telephony-api/telephony-c/telephony-headerfile/capi-telephony-radio-h/capi-telephony-radio-h"},"next":{"title":"Telephony_NetworkState","permalink":"/harmonyos-docs-site/ref/system-network-api/telephony-api/telephony-c/telephony-struct/capi-telephony-telephony-networkstate/capi-telephony-telephony-networkstate"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/system-network-api/telephony-api/telephony-c/telephony-headerfile/capi-telephony-radio-type-h/capi-telephony-radio-type-h.md


const frontMatter = {
	title: 'telephony_radio_type.h',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-telephony-radio-type-h',
	kit: '系统',
	last_updated: '2026-04-22',
	slug: 'capi-telephony-radio-type-h'
};
const contentTitle = 'telephony_radio_type.h';

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
  "value": "Telephony_RadioResult",
  "id": "telephony_radioresult",
  "level": 3
}, {
  "value": "Telephony_RegState",
  "id": "telephony_regstate",
  "level": 3
}, {
  "value": "Telephony_RadioTechnology",
  "id": "telephony_radiotechnology",
  "level": 3
}, {
  "value": "Telephony_NsaState",
  "id": "telephony_nsastate",
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
        id: "telephony_radio_typeh",
        children: "telephony_radio_type.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义网络搜索模块的C接口需要的数据结构。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <telephony/core_service/telephony_radio_type.h>"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "库："
        })
      }), " libtelephony_radio.so"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Telephony.CoreService"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "相关模块："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/telephony-api/telephony-c/telephony-module/capi-telephony/capi-telephony",
        children: "Telephony"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "结构体",
      children: "结构体"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/telephony-api/telephony-c/telephony-struct/capi-telephony-telephony-networkstate/capi-telephony-telephony-networkstate",
              children: "Telephony_NetworkState"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Telephony_NetworkState"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "网络状态信息。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "枚举",
      children: "枚举"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "#telephony_radioresult",
              children: "Telephony_RadioResult"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Telephony_RadioResult"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "错误码类型枚举。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#telephony_regstate",
              children: "Telephony_RegState"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Telephony_RegState"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备的网络注册状态类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#telephony_radiotechnology",
              children: "Telephony_RadioTechnology"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Telephony_RadioTechnology"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备的无线接入技术类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#telephony_nsastate",
              children: "Telephony_NsaState"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Telephony_NsaState"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备的NSA网络注册状态类型。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "宏定义",
      children: "宏定义"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "TELEPHONY_MAX_OPERATOR_LEN 64"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["定义运营商名称的最大长度。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 13"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TELEPHONY_MAX_PLMN_NUMERIC_LEN 6"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["定义PLMN的最大长度。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 13"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "枚举类型说明",
      children: "枚举类型说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "telephony_radioresult",
      children: "Telephony_RadioResult"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum Telephony_RadioResult\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "错误码类型枚举。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
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
            children: "TEL_RADIO_SUCCESS = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "成功。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TEL_RADIO_PERMISSION_DENIED = 201"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "权限错误。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TEL_RADIO_ERR_INVALID_PARAM = 401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "参数错误。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TEL_RADIO_ERR_MARSHALLING_FAILED = 8300001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "编组错误，这是一个低概率错误，请稍后在遇到此错误时重试。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TEL_RADIO_ERR_SERVICE_CONNECTION_FAILED = 8300002"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "连接电话服务错误，当出现此错误时，请稍后重试。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TEL_RADIO_ERR_OPERATION_FAILED = 8300003"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "操作电话服务错误，当出现此错误时，请稍后重试。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "telephony_regstate",
      children: "Telephony_RegState"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum Telephony_RegState\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设备的网络注册状态类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
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
            children: "TEL_REG_STATE_NO_SERVICE = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备不能使用任何服务。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TEL_REG_STATE_IN_SERVICE = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备可以正常使用服务。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TEL_REG_STATE_EMERGENCY_CALL_ONLY = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备只能使用紧急呼叫业务。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TEL_REG_STATE_POWER_OFF = 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "蜂窝无线电已关闭。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "telephony_radiotechnology",
      children: "Telephony_RadioTechnology"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum Telephony_RadioTechnology\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设备的无线接入技术类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
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
            children: "TEL_RADIO_TECHNOLOGY_UNKNOWN = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "未知无线接入技术（RAT）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TEL_RADIO_TECHNOLOGY_GSM = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无线接入技术GSM（Global System for Mobile Communication）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TEL_RADIO_TECHNOLOGY_1XRTT = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无线接入技术1XRTT（Single-Carrier Radio Transmission Technology）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TEL_RADIO_TECHNOLOGY_WCDMA = 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无线接入技术WCDMA（Wideband Code Division Multiple Access）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TEL_RADIO_TECHNOLOGY_HSPA = 4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无线接入技术HSPA（High Speed Packet Access）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TEL_RADIO_TECHNOLOGY_HSPAP = 5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无线接入技术HSPAP（High Speed Packet Access (HSPA+) ）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TEL_RADIO_TECHNOLOGY_TD_SCDMA = 6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无线接入技术TDSCDMA（Time Division-Synchronous Code Division Multiple Access）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TEL_RADIO_TECHNOLOGY_EVDO = 7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无线接入技术EVDO（Evolution Data Optimized）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TEL_RADIO_TECHNOLOGY_EHRPD = 8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无线接入技术EHRPD（Evolved High Rate Package Data）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TEL_RADIO_TECHNOLOGY_LTE = 9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无线接入技术LTE（Long Term Evolution）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TEL_RADIO_TECHNOLOGY_LTE_CA = 10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无线接入技术LTE_CA（Long Term Evolution_Carrier Aggregation）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TEL_RADIO_TECHNOLOGY_IWLAN = 11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无线接入技术IWLAN（Industrial Wireless LAN）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TEL_RADIO_TECHNOLOGY_NR = 12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无线接入技术NR（New Radio）。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "telephony_nsastate",
      children: "Telephony_NsaState"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum Telephony_NsaState\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设备的NSA网络注册状态类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
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
            children: "TEL_NSA_STATE_NOT_SUPPORTED = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备在不支持NSA的LTE小区下处于空闲状态或连接状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TEL_NSA_STATE_NO_DETECTED = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在支持NSA但不支持NR覆盖检测的LTE小区下，设备处于空闲状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TEL_NSA_STATE_CONNECTED_DETECTED = 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备在LTE小区下连接到LTE网络支持NSA和NR覆盖检测。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TEL_NSA_STATE_IDLE_DETECTED = 4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持NSA和NR覆盖检测的LTE小区下设备处于空闲状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TEL_NSA_STATE_DUAL_CONNECTED = 5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备在支持NSA的LTE小区下连接到LTE + NR网络。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TEL_NSA_STATE_SA_ATTACHED = 6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备在5GC附着时在NG-RAN小区下空闲或连接到NG-RAN小区。"
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