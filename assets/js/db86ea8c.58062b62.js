"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["985759"], {
514458(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_location_api_location_c_location_headerfile_capi_oh_location_h_capi_oh_location_h_md_db8_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-location-api-location-c-location-headerfile-capi-oh-location-h-capi-oh-location-h-md-db8.json
var site_docs_ref_location_api_location_c_location_headerfile_capi_oh_location_h_capi_oh_location_h_md_db8_namespaceObject = JSON.parse('{"id":"location-api/location-c/location-headerfile/capi-oh-location-h/capi-oh-location-h","title":"oh_location.h","description":"概述","source":"@site/docs-ref/location-api/location-c/location-headerfile/capi-oh-location-h/capi-oh-location-h.md","sourceDirName":"location-api/location-c/location-headerfile/capi-oh-location-h","slug":"/location-api/location-c/location-headerfile/capi-oh-location-h/capi-oh-location-h","permalink":"/harmonyos-docs-site/ref/location-api/location-c/location-headerfile/capi-oh-location-h/capi-oh-location-h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"oh_location.h","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-location-h","kit":"应用服务","last_updated":"2026-04-22","slug":"capi-oh-location-h"},"sidebar":"ref","previous":{"title":"Location","permalink":"/harmonyos-docs-site/ref/location-api/location-c/location-module/capi-location/capi-location"},"next":{"title":"oh_location_type.h","permalink":"/harmonyos-docs-site/ref/location-api/location-c/location-headerfile/capi-oh-location-type-h/capi-oh-location-type-h"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/location-api/location-c/location-headerfile/capi-oh-location-h/capi-oh-location-h.md


const frontMatter = {
	title: 'oh_location.h',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-location-h',
	kit: '应用服务',
	last_updated: '2026-04-22',
	slug: 'capi-oh-location-h'
};
const contentTitle = 'oh_location.h';

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
  "value": "OH_Location_IsLocatingEnabled()",
  "id": "oh_location_islocatingenabled",
  "level": 3
}, {
  "value": "OH_Location_StartLocating()",
  "id": "oh_location_startlocating",
  "level": 3
}, {
  "value": "OH_Location_StopLocating()",
  "id": "oh_location_stoplocating",
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
        id: "oh_locationh",
        children: "oh_location.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义查询位置开关状态、启动定位、停止定位的接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <LocationKit/oh_location.h>"]
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
      id: "函数",
      children: "函数"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "#oh_location_islocatingenabled",
              children: "Location_ResultCode OH_Location_IsLocatingEnabled(bool* enabled)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询位置开关是否开启。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_location_startlocating",
              children: "Location_ResultCode OH_Location_StartLocating(const Location_RequestConfig* requestConfig)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "启动定位并订阅位置变化。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_location_stoplocating",
              children: "Location_ResultCode OH_Location_StopLocating(const Location_RequestConfig* requestConfig)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "停止定位并取消订阅位置变化。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数说明",
      children: "函数说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_location_islocatingenabled",
      children: "OH_Location_IsLocatingEnabled()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Location_ResultCode OH_Location_IsLocatingEnabled(bool* enabled)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查询位置开关是否开启。"
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bool* enabled"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "bool类型的指针，用于接收位置开关状态值。  等于true表示位置开关开启，false表示位置开关关闭。  需要传入非空指针，否则会返回错误。"
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
            }), " 查询位置开关状态成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/location-api/location-c/location-headerfile/capi-oh-location-type-h/capi-oh-location-type-h#location_resultcode",
              children: "LOCATION_INVALID_PARAM"
            }), " 入参是空指针。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/location-api/location-c/location-headerfile/capi-oh-location-type-h/capi-oh-location-type-h#location_resultcode",
              children: "LOCATION_SERVICE_UNAVAILABLE"
            }), " 位置服务运行异常导致查询位置开关状态失败。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_location_startlocating",
      children: "OH_Location_StartLocating()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Location_ResultCode OH_Location_StartLocating(const Location_RequestConfig* requestConfig)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "启动定位并订阅位置变化。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限："
        })
      }), " ohos.permission.APPROXIMATELY_LOCATION"]
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
              children: "const Location_RequestConfig"
            }), "* requestConfig"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向定位请求参数的指针，该参数用于指定发起定位的场景信息和位置上报间隔。  详细定义请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/location-api/location-c/location-struct/capi-location-location-requestconfig/capi-location-location-requestconfig",
              children: "Location_RequestConfig"
            }), "，可以使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/location-api/location-c/location-headerfile/capi-oh-location-type-h/capi-oh-location-type-h#oh_location_createrequestconfig",
              children: "OH_Location_CreateRequestConfig"
            }), "创建。"]
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
            }), " 启动定位成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/location-api/location-c/location-headerfile/capi-oh-location-type-h/capi-oh-location-type-h#location_resultcode",
              children: "LOCATION_INVALID_PARAM"
            }), " 入参requestConfig为空指针。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/location-api/location-c/location-headerfile/capi-oh-location-type-h/capi-oh-location-type-h#location_resultcode",
              children: "LOCATION_PERMISSION_DENIED"
            }), " 权限校验失败。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/location-api/location-c/location-headerfile/capi-oh-location-type-h/capi-oh-location-type-h#location_resultcode",
              children: "LOCATION_NOT_SUPPORTED"
            }), " 当前设备不支持该功能。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/location-api/location-c/location-headerfile/capi-oh-location-type-h/capi-oh-location-type-h#location_resultcode",
              children: "LOCATION_SERVICE_UNAVAILABLE"
            }), " 位置服务运行异常。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/location-api/location-c/location-headerfile/capi-oh-location-type-h/capi-oh-location-type-h#location_resultcode",
              children: "LOCATION_SWITCH_OFF"
            }), " 位置开关未打开导致无法启动定位。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_location_stoplocating",
      children: "OH_Location_StopLocating()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Location_ResultCode OH_Location_StopLocating(const Location_RequestConfig* requestConfig)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "停止定位并取消订阅位置变化。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限："
        })
      }), " ohos.permission.APPROXIMATELY_LOCATION"]
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
              children: "const Location_RequestConfig"
            }), "* requestConfig"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向定位请求参数的指针。  该参数需要与", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/location-api/location-c/location-headerfile/capi-oh-location-h/capi-oh-location-h#oh_location_startlocating",
              children: "OH_Location_StartLocating"
            }), "中的requestConfig是同一个指针。  详细定义请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/location-api/location-c/location-struct/capi-location-location-requestconfig/capi-location-location-requestconfig",
              children: "Location_RequestConfig"
            }), "。  需要传入非空指针，否则会返回错误。"]
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
            }), " 停止定位成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/location-api/location-c/location-headerfile/capi-oh-location-type-h/capi-oh-location-type-h#location_resultcode",
              children: "LOCATION_INVALID_PARAM"
            }), " 1. 入参为空指针。  2. 入参与", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/location-api/location-c/location-headerfile/capi-oh-location-h/capi-oh-location-h#oh_location_startlocating",
              children: "OH_Location_StartLocating"
            }), "的requestConfig指针不同。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/location-api/location-c/location-headerfile/capi-oh-location-type-h/capi-oh-location-type-h#location_resultcode",
              children: "LOCATION_PERMISSION_DENIED"
            }), " 权限校验失败。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/location-api/location-c/location-headerfile/capi-oh-location-type-h/capi-oh-location-type-h#location_resultcode",
              children: "LOCATION_NOT_SUPPORTED"
            }), " 当前设备不支持该功能。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/location-api/location-c/location-headerfile/capi-oh-location-type-h/capi-oh-location-type-h#location_resultcode",
              children: "LOCATION_SERVICE_UNAVAILABLE"
            }), " 位置服务运行异常。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/location-api/location-c/location-headerfile/capi-oh-location-type-h/capi-oh-location-type-h#location_resultcode",
              children: "LOCATION_SWITCH_OFF"
            }), " 位置开关未打开。"]
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