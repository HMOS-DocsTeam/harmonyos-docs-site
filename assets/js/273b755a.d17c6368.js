"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["493404"], {
1457(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_location_api_location_c_location_headerfile_capi_oh_location_type_h_capi_oh_location_type_h_md_273_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-location-api-location-c-location-headerfile-capi-oh-location-type-h-capi-oh-location-type-h-md-273.json
var site_docs_ref_location_api_location_c_location_headerfile_capi_oh_location_type_h_capi_oh_location_type_h_md_273_namespaceObject = JSON.parse('{"id":"location-api/location-c/location-headerfile/capi-oh-location-type-h/capi-oh-location-type-h","title":"oh_location_type.h","description":"概述","source":"@site/docs-ref/location-api/location-c/location-headerfile/capi-oh-location-type-h/capi-oh-location-type-h.md","sourceDirName":"location-api/location-c/location-headerfile/capi-oh-location-type-h","slug":"/location-api/location-c/location-headerfile/capi-oh-location-type-h/capi-oh-location-type-h","permalink":"/harmonyos-docs-site/ref/location-api/location-c/location-headerfile/capi-oh-location-type-h/capi-oh-location-type-h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"oh_location_type.h","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-location-type-h","kit":"应用服务","last_updated":"2026-04-22","slug":"capi-oh-location-type-h"},"sidebar":"ref","previous":{"title":"oh_location.h","permalink":"/harmonyos-docs-site/ref/location-api/location-c/location-headerfile/capi-oh-location-h/capi-oh-location-h"},"next":{"title":"Location_BasicInfo","permalink":"/harmonyos-docs-site/ref/location-api/location-c/location-struct/capi-location-location-basicinfo/capi-location-location-basicinfo"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/location-api/location-c/location-headerfile/capi-oh-location-type-h/capi-oh-location-type-h.md


const frontMatter = {
	title: 'oh_location_type.h',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-location-type-h',
	kit: '应用服务',
	last_updated: '2026-04-22',
	slug: 'capi-oh-location-type-h'
};
const contentTitle = 'oh_location_type.h';

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
  "value": "函数",
  "id": "函数",
  "level": 3
}, {
  "value": "枚举类型说明",
  "id": "枚举类型说明",
  "level": 2
}, {
  "value": "Location_ResultCode",
  "id": "location_resultcode",
  "level": 3
}, {
  "value": "Location_UseScene",
  "id": "location_usescene",
  "level": 3
}, {
  "value": "Location_PowerConsumptionScene",
  "id": "location_powerconsumptionscene",
  "level": 3
}, {
  "value": "Location_SourceType",
  "id": "location_sourcetype",
  "level": 3
}, {
  "value": "函数说明",
  "id": "函数说明",
  "level": 2
}, {
  "value": "OH_LocationInfo_GetBasicInfo()",
  "id": "oh_locationinfo_getbasicinfo",
  "level": 3
}, {
  "value": "OH_LocationInfo_GetAdditionalInfo()",
  "id": "oh_locationinfo_getadditionalinfo",
  "level": 3
}, {
  "value": "Location_InfoCallback()",
  "id": "location_infocallback",
  "level": 3
}, {
  "value": "OH_Location_CreateRequestConfig()",
  "id": "oh_location_createrequestconfig",
  "level": 3
}, {
  "value": "OH_Location_DestroyRequestConfig()",
  "id": "oh_location_destroyrequestconfig",
  "level": 3
}, {
  "value": "OH_LocationRequestConfig_SetUseScene()",
  "id": "oh_locationrequestconfig_setusescene",
  "level": 3
}, {
  "value": "OH_LocationRequestConfig_SetPowerConsumptionScene()",
  "id": "oh_locationrequestconfig_setpowerconsumptionscene",
  "level": 3
}, {
  "value": "OH_LocationRequestConfig_SetInterval()",
  "id": "oh_locationrequestconfig_setinterval",
  "level": 3
}, {
  "value": "OH_LocationRequestConfig_SetCallback()",
  "id": "oh_locationrequestconfig_setcallback",
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
        id: "oh_location_typeh",
        children: "oh_location_type.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义位置服务常用的属性。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <LocationKit/oh_location_type.h>"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "库："
        })
      }), " liblocation_ndk.so"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Location.Location.Core"]
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
        href: "/ref/location-api/location-c/location-module/capi-location/capi-location",
        children: "Location"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "结构体",
      children: "结构体"
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
              href: "/ref/location-api/location-c/location-struct/capi-location-location-basicinfo/capi-location-location-basicinfo",
              children: "Location_BasicInfo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Location_BasicInfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义位置基本信息的结构体。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/location-api/location-c/location-struct/capi-location-location-info/capi-location-location-info",
              children: "Location_Info"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Location_Info"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义位置信息的结构体。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/location-api/location-c/location-struct/capi-location-location-requestconfig/capi-location-location-requestconfig",
              children: "Location_RequestConfig"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Location_RequestConfig"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义位置请求参数的结构体。"
          })]
        })]
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
              href: "#location_resultcode",
              children: "Location_ResultCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Location_ResultCode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义位置服务的错误码。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#location_usescene",
              children: "Location_UseScene"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Location_UseScene"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义位置请求中的用户活动场景类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#location_powerconsumptionscene",
              children: "Location_PowerConsumptionScene"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Location_PowerConsumptionScene"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义位置请求中的功耗场景类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#location_sourcetype",
              children: "Location_SourceType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Location_SourceType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义位置信息的来源。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "函数",
      children: "函数"
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
              href: "#oh_locationinfo_getbasicinfo",
              children: "Location_BasicInfo OH_LocationInfo_GetBasicInfo(Location_Info* location)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取位置基本信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_locationinfo_getadditionalinfo",
              children: "Location_ResultCode OH_LocationInfo_GetAdditionalInfo(Location_Info* location, char* additionalInfo, uint32_t length)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取位置信息中的附加信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#location_infocallback",
              children: "typedef void (*Location_InfoCallback)(Location_Info* location, void* userData)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Location_InfoCallback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于接收位置上报的回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_location_createrequestconfig",
              children: "Location_RequestConfig* OH_Location_CreateRequestConfig(void)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个位置请求参数结构体实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_location_destroyrequestconfig",
              children: "void OH_Location_DestroyRequestConfig(Location_RequestConfig* requestConfig)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁位置请求参数实例并回收内存。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_locationrequestconfig_setusescene",
              children: "void OH_LocationRequestConfig_SetUseScene(Location_RequestConfig* requestConfig, Location_UseScene useScene)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置位置请求参数中的用户活动场景。  位置请求参数", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/location-api/location-c/location-struct/capi-location-location-requestconfig/capi-location-location-requestconfig",
              children: "Location_RequestConfig"
            }), "中以useScene优先。  如果设置了useScene，则powerConsumptionScene参数无效。  如果未设置useScene，设置了powerConsumptionScene则该参数生效。  如果两个参数都未设置，则默认useScene为", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/location-api/location-c/location-headerfile/capi-oh-location-type-h/capi-oh-location-type-h#location_usescene",
              children: "LOCATION_USE_SCENE_DAILY_LIFE_SERVICE"
            }), "，powerConsumptionScene参数无效。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_locationrequestconfig_setpowerconsumptionscene",
              children: "void OH_LocationRequestConfig_SetPowerConsumptionScene(Location_RequestConfig* requestConfig, Location_PowerConsumptionScene powerConsumptionScene)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置位置请求参数中的功耗场景。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_locationrequestconfig_setinterval",
              children: "void OH_LocationRequestConfig_SetInterval(Location_RequestConfig* requestConfig, int interval)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置位置请求参数中的位置上报间隔。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_locationrequestconfig_setcallback",
              children: "void OH_LocationRequestConfig_SetCallback(Location_RequestConfig* requestConfig, Location_InfoCallback callback, void* userData)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置回调函数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "枚举类型说明",
      children: "枚举类型说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "location_resultcode",
      children: "Location_ResultCode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum Location_ResultCode\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义位置服务的错误码。"
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
            children: "LOCATION_SUCCESS = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "操作成功。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LOCATION_PERMISSION_DENIED = 201"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "权限校验失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LOCATION_INVALID_PARAM = 401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "参数错误。  可能原因：1.输入参数为空指针；2.参数数值超出定义范围。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LOCATION_NOT_SUPPORTED = 801"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该功能不支持。由于设备能力有限，无法调用该函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LOCATION_SERVICE_UNAVAILABLE = 3301000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "位置服务不可用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LOCATION_SWITCH_OFF = 3301100"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "位置开关处于关闭状态。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "location_usescene",
      children: "Location_UseScene"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum Location_UseScene\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义位置请求中的用户活动场景类型。"
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
            children: "LOCATION_USE_SCENE_NAVIGATION = 0x0401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "导航场景。  适用于在户外获取设备实时位置的场景，如车载、步行导航。  主要使用GNSS定位技术提供定位服务，功耗较高。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LOCATION_USE_SCENE_SPORT = 0x0402"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示运动场景。  适用于记录用户位置轨迹的场景，如运动类应用记录轨迹功能。  主要使用GNSS定位技术提供定位服务，功耗较高。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LOCATION_USE_SCENE_TRANSPORT = 0x0403"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示出行场景。  适用于用户出行场景，如打车、乘坐公共交通等场景。  主要使用GNSS定位技术提供定位服务，功耗较高。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LOCATION_USE_SCENE_DAILY_LIFE_SERVICE = 0x0404"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示日常服务使用场景。  适用于不需要定位用户精确位置的使用场景，如新闻资讯、网购、点餐类应用。  该场景仅使用网络定位技术提供定位服务，功耗较低。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "location_powerconsumptionscene",
      children: "Location_PowerConsumptionScene"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum Location_PowerConsumptionScene\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义位置请求中的功耗场景类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
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
            children: "LOCATION_HIGH_POWER_CONSUMPTION = 0x0601"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "高功耗。  以GNSS定位技术为主。在GNSS提供稳定位置结果之前会使用网络定位技术提供服务。  在持续定位时，如果超过30秒无法获取GNSS定位结果则会使用网络定位技术获取位置。  对设备的硬件资源消耗较大，功耗较大。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LOCATION_LOW_POWER_CONSUMPTION = 0x0602"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "低功耗。  适用于对用户位置精度要求不高的使用场景，如新闻资讯、网购、点餐类应用。  该场景仅使用网络定位技术提供定位服务，功耗较低。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LOCATION_NO_POWER_CONSUMPTION = 0x0603"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无功耗。  这种场景下不会主动触发定位，会在其他应用定位时，才给当前应用返回位置。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "location_sourcetype",
      children: "Location_SourceType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum Location_SourceType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义位置信息的来源。"
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
            children: "LOCATION_SOURCE_TYPE_GNSS = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示定位结果来自于GNSS定位技术。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LOCATION_SOURCE_TYPE_NETWORK = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示定位结果来自于网络定位技术。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LOCATION_SOURCE_TYPE_INDOOR = 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示定位结果来自于室内高精度定位技术。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LOCATION_SOURCE_TYPE_RTK = 4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示定位结果来自于室外高精度定位技术。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数说明",
      children: "函数说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_locationinfo_getbasicinfo",
      children: "OH_LocationInfo_GetBasicInfo()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Location_BasicInfo OH_LocationInfo_GetBasicInfo(Location_Info* location)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取位置基本信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
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
              href: "/ref/location-api/location-c/location-struct/capi-location-location-info/capi-location-location-info",
              children: "Location_Info"
            }), "* location"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向位置信息结构体的指针。  需要传入非空指针，该指针可以在", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/location-api/location-c/location-headerfile/capi-oh-location-type-h/capi-oh-location-type-h#location_infocallback",
              children: "Location_InfoCallback"
            }), "中获取。"]
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/location-api/location-c/location-struct/capi-location-location-basicinfo/capi-location-location-basicinfo",
              children: "Location_BasicInfo"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回位置基本信息结构体。详细定义请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/location-api/location-c/location-struct/capi-location-location-basicinfo/capi-location-location-basicinfo",
              children: "Location_BasicInfo"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_locationinfo_getadditionalinfo",
      children: "OH_LocationInfo_GetAdditionalInfo()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Location_ResultCode OH_LocationInfo_GetAdditionalInfo(Location_Info* location, char* additionalInfo, uint32_t length)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取位置信息中的附加信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
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
              href: "/ref/location-api/location-c/location-struct/capi-location-location-info/capi-location-location-info",
              children: "Location_Info"
            }), "* location"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向位置信息结构体的指针。  需要传入非空指针，该指针可以在", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/location-api/location-c/location-headerfile/capi-oh-location-type-h/capi-oh-location-type-h#location_infocallback",
              children: "Location_InfoCallback"
            }), "中获取。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "char* additionalInfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "char类型的非空指针；该变量用于保存附加信息字符串，该字符串是JSON格式。  该指针和对应的内存由调用者创建，建议申请大于等于256字节的内存。  如果传入空指针，会返回错误码。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t length"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示additionalInfo的内存大小。"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/location-api/location-c/location-headerfile/capi-oh-location-type-h/capi-oh-location-type-h#location_resultcode",
              children: "Location_ResultCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回操作结果，详细定义参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/location-api/location-c/location-headerfile/capi-oh-location-type-h/capi-oh-location-type-h#location_resultcode",
              children: "Location_ResultCode"
            }), "。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/location-api/location-c/location-headerfile/capi-oh-location-type-h/capi-oh-location-type-h#location_resultcode",
              children: "LOCATION_SUCCESS"
            }), " 获取附加信息成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/location-api/location-c/location-headerfile/capi-oh-location-type-h/capi-oh-location-type-h#location_resultcode",
              children: "LOCATION_INVALID_PARAM"
            }), " 1. 入参location或additionalInfo是空指针。  2. 入参length太小，也就是additionalInfo指向的内存太小导致无法保存完整的附加信息字符串。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "location_infocallback",
      children: "Location_InfoCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void (*Location_InfoCallback)(Location_Info* location, void* userData)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于接收位置上报的回调函数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
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
              href: "/ref/location-api/location-c/location-struct/capi-location-location-info/capi-location-location-info",
              children: "Location_Info"
            }), "* location"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/location-api/location-c/location-struct/capi-location-location-info/capi-location-location-info",
              children: "Location_Info"
            }), "实例的指针，携带最新的位置信息。  location实例的内存会在", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/location-api/location-c/location-headerfile/capi-oh-location-type-h/capi-oh-location-type-h#location_infocallback",
              children: "Location_InfoCallback"
            }), "结束时回收，请在此之前调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/location-api/location-c/location-headerfile/capi-oh-location-type-h/capi-oh-location-type-h#oh_locationinfo_getbasicinfo",
              children: "OH_LocationInfo_GetBasicInfo"
            }), "等接口获取位置信息。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void* userData"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向调用者数据结构或对象的指针，该参数是通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/location-api/location-c/location-headerfile/capi-oh-location-type-h/capi-oh-location-type-h#oh_locationrequestconfig_setcallback",
              children: "OH_LocationRequestConfig_SetCallback"
            }), "传入的。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_location_createrequestconfig",
      children: "OH_Location_CreateRequestConfig()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Location_RequestConfig* OH_Location_CreateRequestConfig(void)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建一个位置请求参数结构体实例。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/location-api/location-c/location-struct/capi-location-location-requestconfig/capi-location-location-requestconfig",
              children: "Location_RequestConfig*"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/location-api/location-c/location-struct/capi-location-location-requestconfig/capi-location-location-requestconfig",
              children: "Location_RequestConfig"
            }), "实例的指针。  如果返回NULL表示创建失败，可能的原因是应用地址空间满，导致空间分配不出来。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_location_destroyrequestconfig",
      children: "OH_Location_DestroyRequestConfig()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_Location_DestroyRequestConfig(Location_RequestConfig* requestConfig)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "销毁位置请求参数实例并回收内存。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
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
              href: "/ref/location-api/location-c/location-struct/capi-location-location-requestconfig/capi-location-location-requestconfig",
              children: "Location_RequestConfig"
            }), "* requestConfig"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/location-api/location-c/location-struct/capi-location-location-requestconfig/capi-location-location-requestconfig",
              children: "Location_RequestConfig"
            }), "实例的指针。  该实例是由", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/location-api/location-c/location-headerfile/capi-oh-location-type-h/capi-oh-location-type-h#oh_location_createrequestconfig",
              children: "OH_Location_CreateRequestConfig"
            }), "创建的。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_locationrequestconfig_setusescene",
      children: "OH_LocationRequestConfig_SetUseScene()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_LocationRequestConfig_SetUseScene(Location_RequestConfig* requestConfig, Location_UseScene useScene)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置位置请求参数中的用户活动场景。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["位置请求参数", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/location-api/location-c/location-struct/capi-location-location-requestconfig/capi-location-location-requestconfig",
        children: "Location_RequestConfig"
      }), "中以useScene优先。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果设置了useScene，则powerConsumptionScene参数无效。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果未设置useScene，设置了powerConsumptionScene则该参数生效。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果两个参数都未设置，则默认useScene为", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/location-api/location-c/location-headerfile/capi-oh-location-type-h/capi-oh-location-type-h#location_usescene",
        children: "LOCATION_USE_SCENE_DAILY_LIFE_SERVICE"
      }), "，powerConsumptionScene参数无效。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
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
              href: "/ref/location-api/location-c/location-struct/capi-location-location-requestconfig/capi-location-location-requestconfig",
              children: "Location_RequestConfig"
            }), "* requestConfig"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/location-api/location-c/location-struct/capi-location-location-requestconfig/capi-location-location-requestconfig",
              children: "Location_RequestConfig"
            }), "实例的指针。  该实例是由", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/location-api/location-c/location-headerfile/capi-oh-location-type-h/capi-oh-location-type-h#oh_location_createrequestconfig",
              children: "OH_Location_CreateRequestConfig"
            }), "创建的。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/location-api/location-c/location-headerfile/capi-oh-location-type-h/capi-oh-location-type-h#location_usescene",
              children: "Location_UseScene"
            }), " useScene"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示位置请求时的用户活动场景。  默认值是", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/location-api/location-c/location-headerfile/capi-oh-location-type-h/capi-oh-location-type-h#location_usescene",
              children: "LOCATION_USE_SCENE_DAILY_LIFE_SERVICE"
            }), "。  详细定义见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/location-api/location-c/location-headerfile/capi-oh-location-type-h/capi-oh-location-type-h#location_usescene",
              children: "Location_UseScene"
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_locationrequestconfig_setpowerconsumptionscene",
      children: "OH_LocationRequestConfig_SetPowerConsumptionScene()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_LocationRequestConfig_SetPowerConsumptionScene(Location_RequestConfig* requestConfig, Location_PowerConsumptionScene powerConsumptionScene)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置位置请求参数中的功耗场景。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
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
              href: "/ref/location-api/location-c/location-struct/capi-location-location-requestconfig/capi-location-location-requestconfig",
              children: "Location_RequestConfig"
            }), "* requestConfig"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/location-api/location-c/location-struct/capi-location-location-requestconfig/capi-location-location-requestconfig",
              children: "Location_RequestConfig"
            }), "实例的指针。  该实例是由", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/location-api/location-c/location-headerfile/capi-oh-location-type-h/capi-oh-location-type-h#oh_location_createrequestconfig",
              children: "OH_Location_CreateRequestConfig"
            }), "创建的。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/location-api/location-c/location-headerfile/capi-oh-location-type-h/capi-oh-location-type-h#location_powerconsumptionscene",
              children: "Location_PowerConsumptionScene"
            }), " powerConsumptionScene"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示位置请求的功耗场景。  默认值是", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/location-api/location-c/location-headerfile/capi-oh-location-type-h/capi-oh-location-type-h#location_powerconsumptionscene",
              children: "LOCATION_LOW_POWER_CONSUMPTION"
            }), "。  详细定义见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/location-api/location-c/location-headerfile/capi-oh-location-type-h/capi-oh-location-type-h#location_powerconsumptionscene",
              children: "Location_PowerConsumptionScene"
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_locationrequestconfig_setinterval",
      children: "OH_LocationRequestConfig_SetInterval()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_LocationRequestConfig_SetInterval(Location_RequestConfig* requestConfig, int interval)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置位置请求参数中的位置上报间隔。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
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
              href: "/ref/location-api/location-c/location-struct/capi-location-location-requestconfig/capi-location-location-requestconfig",
              children: "Location_RequestConfig"
            }), "* requestConfig"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/location-api/location-c/location-struct/capi-location-location-requestconfig/capi-location-location-requestconfig",
              children: "Location_RequestConfig"
            }), "实例的指针。  该实例是由", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/location-api/location-c/location-headerfile/capi-oh-location-type-h/capi-oh-location-type-h#oh_location_createrequestconfig",
              children: "OH_Location_CreateRequestConfig"
            }), "创建的。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int interval"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示位置上报时间间隔，单位是“秒”。取值范围为大于等于1，默认值为1。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_locationrequestconfig_setcallback",
      children: "OH_LocationRequestConfig_SetCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_LocationRequestConfig_SetCallback(Location_RequestConfig* requestConfig, Location_InfoCallback callback, void* userData)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置回调函数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
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
              href: "/ref/location-api/location-c/location-struct/capi-location-location-requestconfig/capi-location-location-requestconfig",
              children: "Location_RequestConfig"
            }), "* requestConfig"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/location-api/location-c/location-struct/capi-location-location-requestconfig/capi-location-location-requestconfig",
              children: "Location_RequestConfig"
            }), "实例的指针。  该实例是由", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/location-api/location-c/location-headerfile/capi-oh-location-type-h/capi-oh-location-type-h#oh_location_createrequestconfig",
              children: "OH_Location_CreateRequestConfig"
            }), "创建的。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/location-api/location-c/location-headerfile/capi-oh-location-type-h/capi-oh-location-type-h#location_infocallback",
              children: "Location_InfoCallback"
            }), " callback"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向回调函数的指针，该回调函数用于接收位置信息变化。  详细定义请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/location-api/location-c/location-headerfile/capi-oh-location-type-h/capi-oh-location-type-h#location_infocallback",
              children: "Location_InfoCallback"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void* userData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向调用者数据结构或对象的指针。这个指针会在回调函数执行时作为入参回传给调用者。"
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