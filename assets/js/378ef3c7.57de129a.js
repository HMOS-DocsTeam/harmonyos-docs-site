"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["148340"], {
371108(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_system_network_api_network_boost_api_networkboost_c_network_boost_c_total_network_boost_c_files_network_boost_c_files_handover_network_boost_c_files_handover_md_378_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-system-network-api-network-boost-api-networkboost-c-network-boost-c-total-network-boost-c-files-network-boost-c-files-handover-network-boost-c-files-handover-md-378.json
var site_docs_ref_system_network_api_network_boost_api_networkboost_c_network_boost_c_total_network_boost_c_files_network_boost_c_files_handover_network_boost_c_files_handover_md_378_namespaceObject = JSON.parse('{"id":"system-network-api/network-boost-api/networkboost-c/network-boost-c-total/network-boost-c-files/network-boost-c-files-handover/network-boost-c-files-handover","title":"network_boost_handover.h","description":"概述","source":"@site/docs-ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-total/network-boost-c-files/network-boost-c-files-handover/network-boost-c-files-handover.md","sourceDirName":"system-network-api/network-boost-api/networkboost-c/network-boost-c-total/network-boost-c-files/network-boost-c-files-handover","slug":"/system-network-api/network-boost-api/networkboost-c/network-boost-c-total/network-boost-c-files/network-boost-c-files-handover/network-boost-c-files-handover","permalink":"/harmonyos-docs-site/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-total/network-boost-c-files/network-boost-c-files-handover/network-boost-c-files-handover","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"network_boost_handover.h","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/network-boost-c-files-handover","kit":"系统","last_updated":"2026-04-20","slug":"network-boost-c-files-handover"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-total/network-boost-c-files/network-boost-c-files-handover/network-boost-c-files-handover.md


const frontMatter = {
	title: 'network_boost_handover.h',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/network-boost-c-files-handover',
	kit: '系统',
	last_updated: '2026-04-20',
	slug: 'network-boost-c-files-handover'
};
const contentTitle = 'network_boost_handover.h';

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
  "value": "类型定义",
  "id": "类型定义",
  "level": 3
}, {
  "value": "枚举",
  "id": "枚举",
  "level": 3
}, {
  "value": "函数",
  "id": "函数",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    p: "p",
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
        id: "network_boost_handoverh",
        children: "network_boost_handover.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "声明用于连接迁移模块的API。提供基本的函数、结构体和const定义。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <NetworkBoostKit/network_boost_handover.h>"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "库："
        })
      }), " libnetwork_boost.so"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Communication.NetworkBoost.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.1.0(18)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "相关模块："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-module/network-boost-c-overview/network-boost-c-overview",
        children: "NetworkBoost"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "结构体",
      children: "结构体"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-total/network-boost-c-struct/network-boost-c-struct-data_speed_action/network-boost-c-struct-data_speed_action",
              children: "NetworkBoost_DataSpeedAction"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "发包建议。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-total/network-boost-c-struct/network-boost-c-struct-net_handle/network-boost-c-struct-net_handle",
              children: "NetworkBoost_NetHandle"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数据网络的句柄。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-total/network-boost-c-struct/network-boost-c-struct-handover_start/network-boost-c-struct-handover_start",
              children: "NetworkBoost_HandoverStart"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "连接迁移开始信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-total/network-boost-c-struct/network-boost-c-struct-handover_complete/network-boost-c-struct-handover_complete",
              children: "NetworkBoost_HandoverComplete"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "连接迁移完成信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-total/network-boost-c-struct/network-boost-c-struct-handover_callback/network-boost-c-struct-handover_callback",
              children: "HMS_NetworkBoost_HandoverCallback"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数，返回连接迁移开始和完成的详细信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-total/network-boost-c-struct/network-boost-c-struct-multipath_quotainfo/network-boost-c-struct-multipath_quotainfo",
              children: "NetworkBoost_MultiPathQuotaInfo"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "配额信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-total/network-boost-c-struct/network-boost-c-struct-multipath_quota/network-boost-c-struct-multipath_quota",
              children: "NetworkBoost_MultiPathQuota"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用配额使用信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-total/network-boost-c-struct/network-boost-c-struct-multipath_req_result/network-boost-c-struct-multipath_req_result",
              children: "NetworkBoost_MultiPathRequestResult"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "多网请求结果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-total/network-boost-c-struct/network-boost-c-struct-multipath_statechange/network-boost-c-struct-multipath_statechange",
              children: "NetworkBoost_MultiPathStateChange"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "多网状态信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-total/network-boost-c-struct/network-boost-c-struct-multipath_reco/network-boost-c-struct-multipath_reco",
              children: "NetworkBoost_MultiPathRecommendation"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "多网推荐信息。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "类型定义",
      children: "类型定义"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef enum ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-module/network-boost-c-overview/network-boost-c-overview#networkboost_dataspeedsimpleaction-1",
              children: "NetworkBoost_DataSpeedSimpleAction"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-module/network-boost-c-overview/network-boost-c-overview#networkboost_dataspeedsimpleaction",
              children: "NetworkBoost_DataSpeedSimpleAction"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用发包策略的简单建议。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef enum ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-module/network-boost-c-overview/network-boost-c-overview#networkboost_errorresult-1",
              children: "NetworkBoost_ErrorResult"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-module/network-boost-c-overview/network-boost-c-overview#networkboost_errorresult",
              children: "NetworkBoost_ErrorResult"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示连接迁移结果枚举。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef enum ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-module/network-boost-c-overview/network-boost-c-overview#networkboost_reestaction-1",
              children: "NetworkBoost_ReEstAction"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-module/network-boost-c-overview/network-boost-c-overview#networkboost_reestaction",
              children: "NetworkBoost_ReEstAction"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示重建枚举。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-total/network-boost-c-struct/network-boost-c-struct-data_speed_action/network-boost-c-struct-data_speed_action",
              children: "NetworkBoost_DataSpeedAction"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-module/network-boost-c-overview/network-boost-c-overview#networkboost_dataspeedaction",
              children: "NetworkBoost_DataSpeedAction"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "发包速率建议。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-total/network-boost-c-struct/network-boost-c-struct-net_handle/network-boost-c-struct-net_handle",
              children: "NetworkBoost_NetHandle"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-module/network-boost-c-overview/network-boost-c-overview#networkboost_nethandle",
              children: "NetworkBoost_NetHandle"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数据网络的句柄。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-total/network-boost-c-struct/network-boost-c-struct-handover_start/network-boost-c-struct-handover_start",
              children: "NetworkBoost_HandoverStart"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-module/network-boost-c-overview/network-boost-c-overview#networkboost_handoverstart",
              children: "NetworkBoost_HandoverStart"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "连接迁移开始信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-total/network-boost-c-struct/network-boost-c-struct-handover_complete/network-boost-c-struct-handover_complete",
              children: "NetworkBoost_HandoverComplete"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-module/network-boost-c-overview/network-boost-c-overview#networkboost_handovercomplete",
              children: "NetworkBoost_HandoverComplete"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "连接迁移完成信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef enum ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-module/network-boost-c-overview/network-boost-c-overview#networkboost_handovermode-1",
              children: "NetworkBoost_HandoverMode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-module/network-boost-c-overview/network-boost-c-overview#networkboost_handovermode",
              children: "NetworkBoost_HandoverMode"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "连接迁移模式枚举。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef void(* ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-module/network-boost-c-overview/network-boost-c-overview#hms_networkboost_onhandoverstart",
              children: "HMS_NetworkBoost_OnHandoverStart"
            }), ") (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-total/network-boost-c-struct/network-boost-c-struct-handover_start/network-boost-c-struct-handover_start",
              children: "NetworkBoost_HandoverStart"
            }), " *handoverStart)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "连接迁移开始的回调原型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef void(* ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-module/network-boost-c-overview/network-boost-c-overview#hms_networkboost_onhandovercomplete",
              children: "HMS_NetworkBoost_OnHandoverComplete"
            }), ") (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-total/network-boost-c-struct/network-boost-c-struct-handover_complete/network-boost-c-struct-handover_complete",
              children: "NetworkBoost_HandoverComplete"
            }), " *handoverComplete)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "连接迁移结束的回调原型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-total/network-boost-c-struct/network-boost-c-struct-handover_callback/network-boost-c-struct-handover_callback",
              children: "HMS_NetworkBoost_HandoverCallback"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-module/network-boost-c-overview/network-boost-c-overview#hms_networkboost_handovercallback",
              children: "HMS_NetworkBoost_HandoverCallback"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数，返回连接迁移开始和完成的详细信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef void (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-module/network-boost-c-overview/network-boost-c-overview#hms_networkboost_onmultipathrequestresult",
              children: "HMS_NetworkBoost_OnMultiPathRequestResult"
            }), ")(", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-total/network-boost-c-struct/network-boost-c-struct-multipath_req_result/network-boost-c-struct-multipath_req_result",
              children: "NetworkBoost_MultiPathRequestResult"
            }), "* result)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "多网请求结果回调原型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef void (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-module/network-boost-c-overview/network-boost-c-overview#hms_networkboost_onmultipathstatechange",
              children: "HMS_NetworkBoost_OnMultiPathStateChange"
            }), ")(", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-total/network-boost-c-struct/network-boost-c-struct-multipath_statechange/network-boost-c-struct-multipath_statechange",
              children: "NetworkBoost_MultiPathStateChange"
            }), "* multiPathState)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "多网状态变化回调原型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef void (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-module/network-boost-c-overview/network-boost-c-overview#hms_networkboost_onmultipathrecommendation",
              children: "HMS_NetworkBoost_OnMultiPathRecommendation"
            }), ")(", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-total/network-boost-c-struct/network-boost-c-struct-multipath_reco/network-boost-c-struct-multipath_reco",
              children: "NetworkBoost_MultiPathRecommendation"
            }), "* recommendation)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "系统多网建议变化回调原型。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "枚举",
      children: "枚举"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-module/network-boost-c-overview/network-boost-c-overview#networkboost_dataspeedsimpleaction-1",
              children: "NetworkBoost_DataSpeedSimpleAction"
            }), " { NB_SIMPLEACTION_SUSPEND_DATA = 1, NB_SIMPLEACTION_DECREASE_DATA = 2, NB_SIMPLEACTION_INCREASE_DATA = 3, NB_SIMPLEACTION_KEEP_DATA = 4 }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用发包策略的简单建议。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-module/network-boost-c-overview/network-boost-c-overview#networkboost_errorresult-1",
              children: "NetworkBoost_ErrorResult"
            }), " { NB_ERROR_NONE = 0, NB_ERROR_HANDOVER_TIMEOUT = 1, NB_ERROR_NEW_PATH_ACTIVATION_FAILED = 2, NB_ERROR_ABORT = 3 }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "连接迁移结果枚举。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-module/network-boost-c-overview/network-boost-c-overview#networkboost_reestaction-1",
              children: "NetworkBoost_ReEstAction"
            }), " {  NB_REEST_DEFAULT = 0, NB_REEST_QUERY_DNS = 1, NB_REEST_CHANGE_REMOTE_IP = 2, NB_REEST_CHANGE_IP_VERSION = 3,  NB_NO_EST = 4  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "重建枚举。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-module/network-boost-c-overview/network-boost-c-overview#networkboost_handovermode-1",
              children: "NetworkBoost_HandoverMode"
            }), " { NB_MODE_DELEGATION = 0, NB_MODE_DISCRETION = 1 }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "连接迁移模式枚举。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-module/network-boost-c-overview/network-boost-c-overview#networkboost_pathstate",
              children: "NetworkBoost_PathState"
            }), "{  NB_PATH_IDLE = 0，NB_PATH_CONNECTED = 1，NB_PATH_SUSPENDED = 2  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "多网链路状态的枚举。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-module/network-boost-c-overview/network-boost-c-overview#networkboost_multipatherrorresult",
              children: "NetworkBoost_MultiPathErrorResult"
            }), "{  NB_MULTIPATH_ERROR_NONE = 0，NB_MULTIPATH_ERROR_NETWORK_REFUSED = 1， NB_MULTIPATH_ERROR_TIMEOUT = 2， NB_MULTIPATH_ERROR_LOCAL = 3  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "多网建立结果的枚举。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-module/network-boost-c-overview/network-boost-c-overview#networkboost_multipathchangecause",
              children: "NetworkBoost_MultiPathChangeCause"
            }), "{  NB_MULTIPATH_CAUSE_REQUEST_NORMAL = 0, NB_MULTIPATH_CAUSE_RELEASE_NORMAL = 50, NB_MULTIPATH_CHANGE_CAUSE_RELEASE_NETWORK = 51, NB_MULTIPATH_CHANGE_CAUSE_RELEASE_USER_REFUSED = 52, NB_MULTIPATH_CAUSE_RELEASE_NO_QUOTA = 53, NB_MULTIPATH_CAUSE_RELEASE_POWER_CONSUMPTION = 54, NB_MULTIPATH_CHANGE_CAUSE_RELEASE_INSUFFICIENT_TRAFFIC = 55, NB_MULTIPATH_CHANGE_CAUSE_RELEASE_CONFLICT = 56, NB_MULTIPATH_CHANGE_CAUSE_RELEASE_SYS_FUSING = 57, NB_MULTIPATH_CHANGE_CAUSE_RELEASE_SYS_DEFAULT = 99, NB_MULTIPATH_CHANGE_CAUSE_SUSPEND_ENTER = 100, NB_MULTIPATH_CHANGE_CAUSE_SUSPEND_LEAVE = 101, NB_MULTIPATH_CHANGE_CAUSE_CONN_PROPERTIES_UPDATE = 102  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "多网变化原因的枚举。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-module/network-boost-c-overview/network-boost-c-overview#networkboost_multipathstate",
              children: "NetworkBoost_MultiPathState"
            }), "{  NB_MULTIPATH_IDLE = 0, NB_MULTIPATH_CREATEING = 1, NB_MULTIPATH_CREATED = 2, NB_MULTIPATH_RELEASING = 3  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "多网状态的枚举。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-module/network-boost-c-overview/network-boost-c-overview#networkboost_multipathaction",
              children: "NetworkBoost_MultiPathAction"
            }), "{  NB_MULTIPATH_ACTION_REQUEST = 0， NB_MULTIPATH_ACTION_RELEASE = 1  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "多网推荐动作的枚举。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "函数",
      children: "函数"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["int32_t ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-module/network-boost-c-overview/network-boost-c-overview#hms_networkboost_registerhandoverchangecallback",
              children: "HMS_NetworkBoost_RegisterHandoverChangeCallback"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-total/network-boost-c-struct/network-boost-c-struct-handover_callback/network-boost-c-struct-handover_callback",
              children: "HMS_NetworkBoost_HandoverCallback"
            }), " *callback, uint32_t *callbackId)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册连接迁移回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["int32_t ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-module/network-boost-c-overview/network-boost-c-overview#hms_networkboost_unregisterhandoverchangecallback",
              children: "HMS_NetworkBoost_UnregisterHandoverChangeCallback"
            }), " (uint32_t callbackId)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消注册连接迁移回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["int32_t ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-module/network-boost-c-overview/network-boost-c-overview#hms_networkboost_sethandovermode",
              children: "HMS_NetworkBoost_SetHandoverMode"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-module/network-boost-c-overview/network-boost-c-overview#networkboost_handovermode-1",
              children: "NetworkBoost_HandoverMode"
            }), " mode)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用可通过该接口变更连接迁移模式，包括委托模式(由系统发起连接迁移)，和自主模式(由应用发起连接迁移)，默认为委托模式。设置失败，接口会抛出异常。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["int32_t ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-module/network-boost-c-overview/network-boost-c-overview#hms_networkboost_getmultipathquotastats",
              children: "HMS_NetworkBoost_GetMultiPathQuotaStats"
            }), "(", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-total/network-boost-c-struct/network-boost-c-struct-multipath_quota/network-boost-c-struct-multipath_quota",
              children: "NetworkBoost_MultiPathQuota"
            }), " *quota)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取当前应用多网使用的配额，包括已使用的配额信息和剩余配额信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["int32_t ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-module/network-boost-c-overview/network-boost-c-overview#hms_networkboost_requestmultipath",
              children: "HMS_NetworkBoost_RequestMultiPath"
            }), "(", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-total/network-boost-c-struct/network-boost-c-struct-multipath_req_result/network-boost-c-struct-multipath_req_result",
              children: "HMS_NetworkBoost_OnMultiPathRequestResult"
            }), " result, uint32_t *requestId)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "发起多网请求。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["int32_t ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-module/network-boost-c-overview/network-boost-c-overview#hms_networkboost_releasemultipath",
              children: "HMS_NetworkBoost_ReleaseMultiPath"
            }), "(uint32_t requestId)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "释放多网请求。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["int32_t ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-module/network-boost-c-overview/network-boost-c-overview#hms_networkboost_registermultipathstatechangecallback",
              children: "HMS_NetworkBoost_RegisterMultiPathStateChangeCallback"
            }), "(", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-module/network-boost-c-overview/network-boost-c-overview#hms_networkboost_onmultipathstatechange",
              children: "HMS_NetworkBoost_OnMultiPathStateChange"
            }), "callback, uint32_t *callbackId)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册多网状态变化事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["int32_t ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-module/network-boost-c-overview/network-boost-c-overview#hms_networkboost_unregistermultipathstatechangecallback",
              children: "HMS_NetworkBoost_UnregisterMultiPathStateChangeCallback"
            }), "(uint32_t callbackId)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "去注册多网状态变化事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["int32_t ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-module/network-boost-c-overview/network-boost-c-overview#hms_networkboost_registermultipathrecommendationcallback",
              children: "HMS_NetworkBoost_RegisterMultiPathRecommendationCallback"
            }), "(", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-module/network-boost-c-overview/network-boost-c-overview#hms_networkboost_onmultipathrecommendation",
              children: "HMS_NetworkBoost_OnMultiPathRecommendation"
            }), "callback, uint32_t *callbackId)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册系统多网建议变化事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["int32_t ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-module/network-boost-c-overview/network-boost-c-overview#hms_networkboost_unregistermultipathrecommendationcallback",
              children: "HMS_NetworkBoost_UnregisterMultiPathRecommendationCallback"
            }), "(uint32_t callbackId)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "去系统多网建议变化事件。"
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