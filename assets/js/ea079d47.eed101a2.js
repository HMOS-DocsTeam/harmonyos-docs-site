"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["569347"], {
856350(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_system_network_api_network_boost_api_networkboost_c_network_boost_c_module_network_boost_c_overview_network_boost_c_overview_md_ea0_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-system-network-api-network-boost-api-networkboost-c-network-boost-c-module-network-boost-c-overview-network-boost-c-overview-md-ea0.json
var site_docs_ref_system_network_api_network_boost_api_networkboost_c_network_boost_c_module_network_boost_c_overview_network_boost_c_overview_md_ea0_namespaceObject = JSON.parse('{"id":"system-network-api/network-boost-api/networkboost-c/network-boost-c-module/network-boost-c-overview/network-boost-c-overview","title":"NetworkBoost","description":"概述","source":"@site/docs-ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-module/network-boost-c-overview/network-boost-c-overview.md","sourceDirName":"system-network-api/network-boost-api/networkboost-c/network-boost-c-module/network-boost-c-overview","slug":"/system-network-api/network-boost-api/networkboost-c/network-boost-c-module/network-boost-c-overview/network-boost-c-overview","permalink":"/harmonyos-docs-site/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-module/network-boost-c-overview/network-boost-c-overview","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"NetworkBoost","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/network-boost-c-overview","kit":"系统","last_updated":"2026-04-22","slug":"network-boost-c-overview"},"sidebar":"ref","previous":{"title":"ArkTS API错误码","permalink":"/harmonyos-docs-site/ref/system-network-api/network-boost-api/networkboost-arkts/networkboost-arkts-errorcode/networkboost-arkts-errorcode"},"next":{"title":"network_boost_handover.h","permalink":"/harmonyos-docs-site/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-files/network-boost-c-files-handover/network-boost-c-files-handover"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-module/network-boost-c-overview/network-boost-c-overview.md


const frontMatter = {
	title: 'NetworkBoost',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/network-boost-c-overview',
	kit: '系统',
	last_updated: '2026-04-22',
	slug: 'network-boost-c-overview'
};
const contentTitle = 'NetworkBoost';

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
  "value": "文件",
  "id": "文件",
  "level": 3
}, {
  "value": "结构体",
  "id": "结构体",
  "level": 3
}, {
  "value": "宏定义",
  "id": "宏定义",
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
}, {
  "value": "宏定义说明",
  "id": "宏定义说明",
  "level": 2
}, {
  "value": "NB_BPS",
  "id": "nb_bps",
  "level": 3
}, {
  "value": "NB_GBPS",
  "id": "nb_gbps",
  "level": 3
}, {
  "value": "NB_KBPS",
  "id": "nb_kbps",
  "level": 3
}, {
  "value": "NB_MBPS",
  "id": "nb_mbps",
  "level": 3
}, {
  "value": "NB_TBPS",
  "id": "nb_tbps",
  "level": 3
}, {
  "value": "NETBOOST_MAX_PATH_NUM",
  "id": "netboost_max_path_num",
  "level": 3
}, {
  "value": "类型定义说明",
  "id": "类型定义说明",
  "level": 2
}, {
  "value": "HMS_NetworkBoost_HandoverCallback",
  "id": "hms_networkboost_handovercallback",
  "level": 3
}, {
  "value": "HMS_NetworkBoost_NetQosChange",
  "id": "hms_networkboost_netqoschange",
  "level": 3
}, {
  "value": "HMS_NetworkBoost_NetSceneChange",
  "id": "hms_networkboost_netscenechange",
  "level": 3
}, {
  "value": "HMS_NetworkBoost_OnHandoverComplete",
  "id": "hms_networkboost_onhandovercomplete",
  "level": 3
}, {
  "value": "HMS_NetworkBoost_OnHandoverStart",
  "id": "hms_networkboost_onhandoverstart",
  "level": 3
}, {
  "value": "HMS_NetworkBoost_OnMultiPathRequestResult",
  "id": "hms_networkboost_onmultipathrequestresult",
  "level": 3
}, {
  "value": "HMS_NetworkBoost_OnMultiPathStateChange",
  "id": "hms_networkboost_onmultipathstatechange",
  "level": 3
}, {
  "value": "HMS_NetworkBoost_OnMultiPathRecommendation",
  "id": "hms_networkboost_onmultipathrecommendation",
  "level": 3
}, {
  "value": "NetworkBoost_DataSpeedAction",
  "id": "networkboost_dataspeedaction",
  "level": 3
}, {
  "value": "NetworkBoost_DataSpeedSimpleAction",
  "id": "networkboost_dataspeedsimpleaction",
  "level": 3
}, {
  "value": "NetworkBoost_ErrorResult",
  "id": "networkboost_errorresult",
  "level": 3
}, {
  "value": "NetworkBoost_HandoverComplete",
  "id": "networkboost_handovercomplete",
  "level": 3
}, {
  "value": "NetworkBoost_HandoverMode",
  "id": "networkboost_handovermode",
  "level": 3
}, {
  "value": "NetworkBoost_HandoverStart",
  "id": "networkboost_handoverstart",
  "level": 3
}, {
  "value": "NetworkBoost_NetHandle",
  "id": "networkboost_nethandle",
  "level": 3
}, {
  "value": "NetworkBoost_NetworkQos",
  "id": "networkboost_networkqos",
  "level": 3
}, {
  "value": "NetworkBoost_NetworkQosArray",
  "id": "networkboost_networkqosarray",
  "level": 3
}, {
  "value": "NetworkBoost_NetworkScene",
  "id": "networkboost_networkscene",
  "level": 3
}, {
  "value": "NetworkBoost_PathType",
  "id": "networkboost_pathtype",
  "level": 3
}, {
  "value": "NetworkBoost_QoeType",
  "id": "networkboost_qoetype",
  "level": 3
}, {
  "value": "NetworkBoost_RecommendedAction",
  "id": "networkboost_recommendedaction",
  "level": 3
}, {
  "value": "NetworkBoost_ReEstAction",
  "id": "networkboost_reestaction",
  "level": 3
}, {
  "value": "NetworkBoost_Scene",
  "id": "networkboost_scene",
  "level": 3
}, {
  "value": "NetworkBoost_ServiceType",
  "id": "networkboost_servicetype",
  "level": 3
}, {
  "value": "NetworkBoost_WeakSignalPrediction",
  "id": "networkboost_weaksignalprediction",
  "level": 3
}, {
  "value": "枚举类型说明",
  "id": "枚举类型说明",
  "level": 2
}, {
  "value": "NetworkBoost_DataSpeedSimpleAction",
  "id": "networkboost_dataspeedsimpleaction-1",
  "level": 3
}, {
  "value": "NetworkBoost_ErrorResult",
  "id": "networkboost_errorresult-1",
  "level": 3
}, {
  "value": "NetworkBoost_HandoverMode",
  "id": "networkboost_handovermode-1",
  "level": 3
}, {
  "value": "NetworkBoost_PathType",
  "id": "networkboost_pathtype-1",
  "level": 3
}, {
  "value": "NetworkBoost_QoeType",
  "id": "networkboost_qoetype-1",
  "level": 3
}, {
  "value": "NetworkBoost_RecommendedAction",
  "id": "networkboost_recommendedaction-1",
  "level": 3
}, {
  "value": "NetworkBoost_ReEstAction",
  "id": "networkboost_reestaction-1",
  "level": 3
}, {
  "value": "NetworkBoost_Scene",
  "id": "networkboost_scene-1",
  "level": 3
}, {
  "value": "NetworkBoost_ServiceType",
  "id": "networkboost_servicetype-1",
  "level": 3
}, {
  "value": "NetworkBoost_PathState",
  "id": "networkboost_pathstate",
  "level": 3
}, {
  "value": "NetworkBoost_MultiPathChangeCause",
  "id": "networkboost_multipathchangecause",
  "level": 3
}, {
  "value": "NetworkBoost_MultiPathErrorResult",
  "id": "networkboost_multipatherrorresult",
  "level": 3
}, {
  "value": "NetworkBoost_MultiPathState",
  "id": "networkboost_multipathstate",
  "level": 3
}, {
  "value": "NetworkBoost_MultiPathAction",
  "id": "networkboost_multipathaction",
  "level": 3
}, {
  "value": "NetworkBoost_SceneEvent",
  "id": "networkboost_sceneevent",
  "level": 3
}, {
  "value": "函数说明",
  "id": "函数说明",
  "level": 2
}, {
  "value": "HMS_NetworkBoost_RegisterHandoverChangeCallback()",
  "id": "hms_networkboost_registerhandoverchangecallback",
  "level": 3
}, {
  "value": "HMS_NetworkBoost_RegisterNetQosCallback()",
  "id": "hms_networkboost_registernetqoscallback",
  "level": 3
}, {
  "value": "HMS_NetworkBoost_RegisterNetSceneCallback()",
  "id": "hms_networkboost_registernetscenecallback",
  "level": 3
}, {
  "value": "HMS_NetworkBoost_ReportQoe()",
  "id": "hms_networkboost_reportqoe",
  "level": 3
}, {
  "value": "HMS_NetworkBoost_SetHandoverMode()",
  "id": "hms_networkboost_sethandovermode",
  "level": 3
}, {
  "value": "HMS_NetworkBoost_UnregisterHandoverChangeCallback()",
  "id": "hms_networkboost_unregisterhandoverchangecallback",
  "level": 3
}, {
  "value": "HMS_NetworkBoost_UnregisterNetQosCallback()",
  "id": "hms_networkboost_unregisternetqoscallback",
  "level": 3
}, {
  "value": "HMS_NetworkBoost_UnregisterNetSceneCallback()",
  "id": "hms_networkboost_unregisternetscenecallback",
  "level": 3
}, {
  "value": "HMS_NetworkBoost_GetMultiPathQuotaStats()",
  "id": "hms_networkboost_getmultipathquotastats",
  "level": 3
}, {
  "value": "HMS_NetworkBoost_RequestMultiPath()",
  "id": "hms_networkboost_requestmultipath",
  "level": 3
}, {
  "value": "HMS_NetworkBoost_ReleaseMultiPath()",
  "id": "hms_networkboost_releasemultipath",
  "level": 3
}, {
  "value": "HMS_NetworkBoost_RegisterMultiPathStateChangeCallback()",
  "id": "hms_networkboost_registermultipathstatechangecallback",
  "level": 3
}, {
  "value": "HMS_NetworkBoost_UnregisterMultiPathStateChangeCallback()",
  "id": "hms_networkboost_unregistermultipathstatechangecallback",
  "level": 3
}, {
  "value": "HMS_NetworkBoost_RegisterMultiPathRecommendationCallback()",
  "id": "hms_networkboost_registermultipathrecommendationcallback",
  "level": 3
}, {
  "value": "HMS_NetworkBoost_UnregisterMultiPathRecommendationCallback()",
  "id": "hms_networkboost_unregistermultipathrecommendationcallback",
  "level": 3
}, {
  "value": "HMS_NetworkBoost_SetSceneDesc()",
  "id": "hms_networkboost_setscenedesc",
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
    li: "li",
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
        id: "networkboost",
        children: "NetworkBoost"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "提供网络质量与网络连接迁移相关接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "网络质量模块提供网络质量实时评估、网络场景识别以及弱信号预测等能力，以便应用针对弱网等环境下实现网络自适应，包括缓存、码率、帧率、分辨率等策略的调整。应用也可以通过网络质量中的应用传输体验反馈接口，触发系统进行网络加速。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "连接迁移模块提供网络连接迁移能力，以便在弱网环境下，系统发起多网迁移（Wi-Fi<->蜂窝，主卡<->副卡等）的过程中，给应用提供连接迁移开始和完成通知，应用根据连接迁移通知的建议进行重建，快速恢复业务，给用户带来平滑、高速、低时延的上网体验。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "多网并发是系统提供接口可以建立多个网络通路，应用发起多网请求后，系统依据业务场景决定并发组合和实施相应的并发管控，并对并发做收益度量。使用多网并发功能的原则是应用申请（受限权限）、系统管控、最小化使用。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.1.0(18)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "文件",
      children: "文件"
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
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-files/network-boost-c-files-handover/network-boost-c-files-handover",
              children: "network_boost_handover.h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "声明用于连接迁移的API。提供基本的函数，结构体和const定义。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-files/network-boost-c-files-quality/network-boost-c-files-quality",
              children: "network_boost_quality.h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "声明用于网络质量的API。提供基本的函数，结构体和const定义。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-files/network-boost-c-files-boost/network-boost-c-files-boost",
              children: "network_boost.h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "声明用于网络加速的API。提供基本的函数，结构体和const定义。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "结构体",
      children: "结构体"
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-struct/network-boost-c-struct-data_speed_action/network-boost-c-struct-data_speed_action",
              children: "NetworkBoost_DataSpeedAction"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "发包速率建议。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-struct/network-boost-c-struct-net_handle/network-boost-c-struct-net_handle",
              children: "NetworkBoost_NetHandle"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NetHandle信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-struct/network-boost-c-struct-handover_start/network-boost-c-struct-handover_start",
              children: "NetworkBoost_HandoverStart"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "连接迁移开始信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-struct/network-boost-c-struct-handover_complete/network-boost-c-struct-handover_complete",
              children: "NetworkBoost_HandoverComplete"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "连接迁移完成信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-struct/network-boost-c-struct-handover_callback/network-boost-c-struct-handover_callback",
              children: "HMS_NetworkBoost_HandoverCallback"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "连接迁移回调信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-struct/network-boost-c-struct-network_qos/network-boost-c-struct-network_qos",
              children: "NetworkBoost_NetworkQos"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "单条路径的网络质量回调信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-struct/network-boost-c-struct-network_qos_array/network-boost-c-struct-network_qos_array",
              children: "NetworkBoost_NetworkQosArray"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "多条路径的网络质量回调信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-struct/network-boost-c-struct-weak_signal_prediction/network-boost-c-struct-weak_signal_prediction",
              children: "NetworkBoost_WeakSignalPrediction"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "弱信号预测相关信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-struct/network-boost-c-struct-network_scene/network-boost-c-struct-network_scene",
              children: "NetworkBoost_NetworkScene"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "网络场景状态变更回调信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-struct/network-boost-c-struct-multipath_quotainfo/network-boost-c-struct-multipath_quotainfo",
              children: "NetworkBoost_MultiPathQuotaInfo"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "配额信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-struct/network-boost-c-struct-multipath_quota/network-boost-c-struct-multipath_quota",
              children: "NetworkBoost_MultiPathQuota"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用配额使用信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-struct/network-boost-c-struct-multipath_req_result/network-boost-c-struct-multipath_req_result",
              children: "NetworkBoost_MultiPathRequestResult"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "多网请求结果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-struct/network-boost-c-struct-multipath_statechange/network-boost-c-struct-multipath_statechange",
              children: "NetworkBoost_MultiPathStateChange"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "多网状态信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-struct/network-boost-c-struct-multipath_reco/network-boost-c-struct-multipath_reco",
              children: "NetworkBoost_MultiPathRecommendation"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "多网推荐信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-struct/network-boost-c-struct-scene_desc/network-boost-c-struct-scene_desc",
              children: "NetworkBoost_SceneDesc"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "业务场景描述信息。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "宏定义",
      children: "宏定义"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "#netboost_max_path_num",
              children: "NETBOOST_MAX_PATH_NUM"
            }), " 4"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "网络质量变化信息的最大路径数量。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#nb_bps",
              children: "NB_BPS"
            }), " 1"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1bps"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#nb_kbps",
              children: "NB_KBPS"
            }), " 1000"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1kbps"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#nb_mbps",
              children: "NB_MBPS"
            }), " 1000000"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1mbps"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#nb_gbps",
              children: "NB_GBPS"
            }), " 1000000000"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1gbps"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#nb_tbps",
              children: "NB_TBPS"
            }), " 1000000000000"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1tbps，请使用uint64_t类型来避免溢出。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "类型定义",
      children: "类型定义"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "#networkboost_dataspeedsimpleaction-1",
              children: "NetworkBoost_DataSpeedSimpleAction"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#networkboost_dataspeedsimpleaction",
              children: "NetworkBoost_DataSpeedSimpleAction"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用发包策略的建议。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef enum ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#networkboost_errorresult-1",
              children: "NetworkBoost_ErrorResult"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#networkboost_errorresult",
              children: "NetworkBoost_ErrorResult"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "连接迁移结果枚举。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef enum ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#networkboost_reestaction-1",
              children: "NetworkBoost_ReEstAction"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#networkboost_reestaction",
              children: "NetworkBoost_ReEstAction"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "重建枚举。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-struct/network-boost-c-struct-data_speed_action/network-boost-c-struct-data_speed_action",
              children: "NetworkBoost_DataSpeedAction"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#networkboost_dataspeedaction",
              children: "NetworkBoost_DataSpeedAction"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "发包速率建议。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-struct/network-boost-c-struct-net_handle/network-boost-c-struct-net_handle",
              children: "NetworkBoost_NetHandle"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#networkboost_nethandle",
              children: "NetworkBoost_NetHandle"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NetHandle信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-struct/network-boost-c-struct-handover_start/network-boost-c-struct-handover_start",
              children: "NetworkBoost_HandoverStart"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#networkboost_handoverstart",
              children: "NetworkBoost_HandoverStart"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "连接迁移开始信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-struct/network-boost-c-struct-handover_complete/network-boost-c-struct-handover_complete",
              children: "NetworkBoost_HandoverComplete"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#networkboost_handovercomplete",
              children: "NetworkBoost_HandoverComplete"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "连接迁移完成信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef enum ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#networkboost_handovermode-1",
              children: "NetworkBoost_HandoverMode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#networkboost_handovermode",
              children: "NetworkBoost_HandoverMode"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "连接迁移模式枚举。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef void(* ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_networkboost_onhandoverstart",
              children: "HMS_NetworkBoost_OnHandoverStart"
            }), ") (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-struct/network-boost-c-struct-handover_start/network-boost-c-struct-handover_start",
              children: "NetworkBoost_HandoverStart"
            }), " *handoverStart)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "连接迁移开始的回调函数原型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef void(* ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_networkboost_onhandovercomplete",
              children: "HMS_NetworkBoost_OnHandoverComplete"
            }), ") (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-struct/network-boost-c-struct-handover_complete/network-boost-c-struct-handover_complete",
              children: "NetworkBoost_HandoverComplete"
            }), " *handoverComplete)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "连接迁移结束的回调函数原型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-struct/network-boost-c-struct-handover_callback/network-boost-c-struct-handover_callback",
              children: "HMS_NetworkBoost_HandoverCallback"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_networkboost_handovercallback",
              children: "HMS_NetworkBoost_HandoverCallback"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "连接迁移回调注册函数的参数，包含连接迁移开始和完成的回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef enum ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#networkboost_recommendedaction-1",
              children: "NetworkBoost_RecommendedAction"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#networkboost_recommendedaction",
              children: "NetworkBoost_RecommendedAction"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用数传策略建议。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef enum ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#networkboost_pathtype-1",
              children: "NetworkBoost_PathType"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#networkboost_pathtype",
              children: "NetworkBoost_PathType"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数据路径类型，枚举值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef enum ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#networkboost_scene-1",
              children: "NetworkBoost_Scene"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#networkboost_scene",
              children: "NetworkBoost_Scene"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "网络场景类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef enum ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#networkboost_servicetype-1",
              children: "NetworkBoost_ServiceType"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#networkboost_servicetype",
              children: "NetworkBoost_ServiceType"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用业务类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef enum ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#networkboost_qoetype-1",
              children: "NetworkBoost_QoeType"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#networkboost_qoetype",
              children: "NetworkBoost_QoeType"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用体验类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-struct/network-boost-c-struct-network_qos/network-boost-c-struct-network_qos",
              children: "NetworkBoost_NetworkQos"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#networkboost_networkqos",
              children: "NetworkBoost_NetworkQos"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "单条路径的网络质量回调信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-struct/network-boost-c-struct-network_qos_array/network-boost-c-struct-network_qos_array",
              children: "NetworkBoost_NetworkQosArray"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#networkboost_networkqosarray",
              children: "NetworkBoost_NetworkQosArray"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "多条路径的网络质量回调信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-struct/network-boost-c-struct-weak_signal_prediction/network-boost-c-struct-weak_signal_prediction",
              children: "NetworkBoost_WeakSignalPrediction"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#networkboost_weaksignalprediction",
              children: "NetworkBoost_WeakSignalPrediction"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "弱信号预测相关信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-struct/network-boost-c-struct-network_scene/network-boost-c-struct-network_scene",
              children: "NetworkBoost_NetworkScene"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#networkboost_networkscene",
              children: "NetworkBoost_NetworkScene"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "网络场景状态变更回调信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef void(* ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_networkboost_netqoschange",
              children: "HMS_NetworkBoost_NetQosChange"
            }), ") (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-struct/network-boost-c-struct-network_qos_array/network-boost-c-struct-network_qos_array",
              children: "NetworkBoost_NetworkQosArray"
            }), " *networkQosArray)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "网络质量变更回调函数原型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef void(* ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_networkboost_netscenechange",
              children: "HMS_NetworkBoost_NetSceneChange"
            }), ") (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-struct/network-boost-c-struct-network_scene/network-boost-c-struct-network_scene",
              children: "NetworkBoost_NetworkScene"
            }), " *networkScene)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "网络场景状态变更回调函数原型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef void (* ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_networkboost_onmultipathrequestresult",
              children: "HMS_NetworkBoost_OnMultiPathRequestResult"
            }), ")(", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-struct/network-boost-c-struct-multipath_req_result/network-boost-c-struct-multipath_req_result",
              children: "NetworkBoost_MultiPathRequestResult"
            }), "* result)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "多网请求结果回调函数原型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef void (* ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_networkboost_onmultipathstatechange",
              children: "HMS_NetworkBoost_OnMultiPathStateChange"
            }), ")(", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-struct/network-boost-c-struct-multipath_statechange/network-boost-c-struct-multipath_statechange",
              children: "NetworkBoost_MultiPathStateChange"
            }), "* multiPathState)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "多网状态变化回调函数原型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef void (* ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_networkboost_onmultipathrecommendation",
              children: "HMS_NetworkBoost_OnMultiPathRecommendation"
            }), ")(", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-struct/network-boost-c-struct-multipath_reco/network-boost-c-struct-multipath_reco",
              children: "NetworkBoost_MultiPathRecommendation"
            }), "* recommendation)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "系统多网建议变化回调函数原型。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "枚举",
      children: "枚举"
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#networkboost_dataspeedsimpleaction-1",
              children: "NetworkBoost_DataSpeedSimpleAction"
            }), " { NB_SIMPLEACTION_SUSPEND_DATA = 1, NB_SIMPLEACTION_DECREASE_DATA = 2, NB_SIMPLEACTION_INCREASE_DATA = 3, NB_SIMPLEACTION_KEEP_DATA = 4 }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用发包策略的建议。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#networkboost_errorresult-1",
              children: "NetworkBoost_ErrorResult"
            }), " { NB_ERROR_NONE = 0, NB_ERROR_HANDOVER_TIMEOUT = 1, NB_ERROR_NEW_PATH_ACTIVATION_FAILED = 2, NB_ERROR_ABORT = 3 }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "连接迁移结果枚举。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#networkboost_reestaction-1",
              children: "NetworkBoost_ReEstAction"
            }), " {  NB_REEST_DEFAULT = 0, NB_REEST_QUERY_DNS = 1, NB_REEST_CHANGE_REMOTE_IP = 2, NB_REEST_CHANGE_IP_VERSION = 3,  NB_NO_EST = 4  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "重建枚举。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#networkboost_handovermode-1",
              children: "NetworkBoost_HandoverMode"
            }), " { NB_MODE_DELEGATION = 0, NB_MODE_DISCRETION = 1 }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "连接迁移模式枚举。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#networkboost_recommendedaction-1",
              children: "NetworkBoost_RecommendedAction"
            }), " {  NB_ACTION_DO_CACHING = 0, NB_ACTION_SUSPEND_DATA = 1, NB_ACTION_DECREASE_DATA = 2, NB_ACTION_INCREASE_DATA = 3,  NB_ACTION_KEEP_DATA = 4  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用数传策略建议。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#networkboost_pathtype-1",
              children: "NetworkBoost_PathType"
            }), " { NB_PATH_CELLULAR_PRIMARY = 0, NB_PATH_CELLULAR_SECONDARY = 1, NB_PATH_WIFI_PRIMARY = 2, NB_PATH_WIFI_SECONDARY = 3 }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数据路径类型，枚举值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#networkboost_scene-1",
              children: "NetworkBoost_Scene"
            }), " { NB_SCENE_NORMAL = 0, NB_SCENE_CONGESTION = 1, NB_SCENE_FREQUENT_HANDOVER = 2, NB_SCENE_WEAK_SIGNAL = 3 }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "网络场景类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#networkboost_servicetype-1",
              children: "NetworkBoost_ServiceType"
            }), " {  NB_SERVICE_DEFAULT = 0, NB_SERVICE_BACKGROUND = 1, NB_SERVICE_REAL_TIME_VOICE = 2, NB_SERVICE_REAL_TIME_VIDEO = 3,  NB_SERVICE_CALL_SIGNALING = 4, NB_SERVICE_REAL_TIME_GAME = 5, NB_SERVICE_NORMAL_GAME = 6, NB_SERVICE_SHORT_VIDEO = 7,  NB_SERVICE_LONG_VIDEO = 8, NB_SERVICE_LIVE_STREAMING_ANCHOR = 9, NB_SERVICE_LIVE_STREAMING_WATCHER = 10, NB_SERVICE_DOWNLOAD = 11,  NB_SERVICE_UPLOAD = 12, NB_SERVICE_BROWSER = 13, NB_SERVICE_BROWSER = 13, NB_SERVICE_TRANSACTION = 14, NB_SERVICE_DETECTION = 15, NB_SERVICE_CLOUDSERVICE = 16, NB_SERVICE_VOICE_CONFERENCE = 17, NB_SERVICE_VIDEO_CONFERENCE = 18, NB_SERVICE_NAVIGATION = 19, NB_SERVICE_SECKILL_SERVICE = 20, NB_SERVICE_LOGIN = 21, NB_SERVICE_AUDIO = 22, NB_SERVICE_SHOPPING = 23  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用业务类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#networkboost_qoetype-1",
              children: "NetworkBoost_QoeType"
            }), " {  NB_QOE_GOOD = 0, NB_QOE_BAD_UNKNOWN = 1, NB_QOE_BAD_SERVER_ERROR = 2, NB_QOE_BAD_NO_DATA = 3,  NB_QOE_BAD_PACKET_LOST = 4, NB_QOE_BAD_PACKET_OUT_OF_ORDER = 5, NB_QOE_BAD_HIGH_JITTER = 6, NB_QOE_BAD_HIGH_LATENCY = 7  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用体验类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#networkboost_pathstate",
              children: "NetworkBoost_PathState"
            }), " {  NB_PATH_IDLE = 0，NB_PATH_CONNECTED = 1，NB_PATH_SUSPENDED = 2  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "多网链路状态的枚举。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#networkboost_multipatherrorresult",
              children: "NetworkBoost_MultiPathErrorResult"
            }), " {  NB_MULTIPATH_ERROR_NONE = 0，NB_MULTIPATH_ERROR_NETWORK_REFUSED = 1， NB_MULTIPATH_ERROR_TIMEOUT = 2， NB_MULTIPATH_ERROR_LOCAL = 3  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "多网建立结果的枚举。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#networkboost_multipathchangecause",
              children: "NetworkBoost_MultiPathChangeCause"
            }), " {  NB_MULTIPATH_CAUSE_REQUEST_NORMAL = 0, NB_MULTIPATH_CAUSE_RELEASE_NORMAL = 50, NB_MULTIPATH_CHANGE_CAUSE_RELEASE_NETWORK = 51, NB_MULTIPATH_CHANGE_CAUSE_RELEASE_USER_REFUSED = 52, NB_MULTIPATH_CAUSE_RELEASE_NO_QUOTA = 53, NB_MULTIPATH_CAUSE_RELEASE_POWER_CONSUMPTION = 54, NB_MULTIPATH_CHANGE_CAUSE_RELEASE_INSUFFICIENT_TRAFFIC = 55, NB_MULTIPATH_CHANGE_CAUSE_RELEASE_CONFLICT = 56, NB_MULTIPATH_CHANGE_CAUSE_RELEASE_SYS_FUSING = 57, NB_MULTIPATH_CHANGE_CAUSE_RELEASE_SYS_DEFAULT = 99, NB_MULTIPATH_CHANGE_CAUSE_SUSPEND_ENTER = 100, NB_MULTIPATH_CHANGE_CAUSE_SUSPEND_LEAVE = 101, NB_MULTIPATH_CHANGE_CAUSE_CONN_PROPERTIES_UPDATE = 102  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "多网变化原因的枚举。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#networkboost_multipathstate",
              children: "NetworkBoost_MultiPathState"
            }), " {  NB_MULTIPATH_IDLE = 0, NB_MULTIPATH_CREATEING = 1, NB_MULTIPATH_CREATED = 2, NB_MULTIPATH_RELEASING = 3  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "多网状态的枚举。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#networkboost_multipathaction",
              children: "NetworkBoost_MultiPathAction"
            }), " {  NB_MULTIPATH_ACTION_REQUEST = 0， NB_MULTIPATH_ACTION_RELEASE = 1  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "多网推荐动作的枚举。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#networkboost_sceneevent",
              children: "NetworkBoost_SceneEvent"
            }), " {  NB_SCENE_EVENT_ENTER = 0， NB_SCENE_EVENT_UPDATE = 1，NB_SCENE_EVENT_LEAVE = 2  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "业务事件枚举。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "函数",
      children: "函数"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "#hms_networkboost_registerhandoverchangecallback",
              children: "HMS_NetworkBoost_RegisterHandoverChangeCallback"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-struct/network-boost-c-struct-handover_callback/network-boost-c-struct-handover_callback",
              children: "HMS_NetworkBoost_HandoverCallback"
            }), " *callback, uint32_t *callbackId)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册连接迁移回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["int32_t ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_networkboost_unregisterhandoverchangecallback",
              children: "HMS_NetworkBoost_UnregisterHandoverChangeCallback"
            }), " (uint32_t callbackId)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消注册连接迁移回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["int32_t ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_networkboost_sethandovermode",
              children: "HMS_NetworkBoost_SetHandoverMode"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#networkboost_handovermode-1",
              children: "NetworkBoost_HandoverMode"
            }), " mode)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用可通过该接口变更连接迁移模式，包括委托模式(由系统发起连接迁移)，和自主模式(由应用发起连接迁移)，默认为委托模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["int32_t ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_networkboost_registernetqoscallback",
              children: "HMS_NetworkBoost_RegisterNetQosCallback"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_networkboost_netqoschange",
              children: "HMS_NetworkBoost_NetQosChange"
            }), " callback, uint32_t *callbackId)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册网络质量变化回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["int32_t ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_networkboost_unregisternetqoscallback",
              children: "HMS_NetworkBoost_UnregisterNetQosCallback"
            }), " (uint32_t callbackId)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消注册网络质量变化回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["int32_t ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_networkboost_registernetscenecallback",
              children: "HMS_NetworkBoost_RegisterNetSceneCallback"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_networkboost_netscenechange",
              children: "HMS_NetworkBoost_NetSceneChange"
            }), " callback, uint32_t *callbackId)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册网络场景变化回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["int32_t ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_networkboost_unregisternetscenecallback",
              children: "HMS_NetworkBoost_UnregisterNetSceneCallback"
            }), " (uint32_t callbackId)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消注册网络场景变化回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["int32_t ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_networkboost_reportqoe",
              children: "HMS_NetworkBoost_ReportQoe"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#networkboost_servicetype-1",
              children: "NetworkBoost_ServiceType"
            }), " serviceType, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#networkboost_qoetype-1",
              children: "NetworkBoost_QoeType"
            }), " qoeType)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用传输体验反馈。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["int32_t ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_networkboost_getmultipathquotastats",
              children: "HMS_NetworkBoost_GetMultiPathQuotaStats"
            }), "(", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-struct/network-boost-c-struct-multipath_quota/network-boost-c-struct-multipath_quota",
              children: "NetworkBoost_MultiPathQuota"
            }), " *quota)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取当前应用多网使用的配额，包括已使用的配额信息和剩余配额信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["int32_t ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_networkboost_requestmultipath",
              children: "HMS_NetworkBoost_RequestMultiPath"
            }), "(", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-struct/network-boost-c-struct-multipath_req_result/network-boost-c-struct-multipath_req_result",
              children: "HMS_NetworkBoost_OnMultiPathRequestResult"
            }), " result)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "发起多网请求。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["int32_t ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_networkboost_releasemultipath",
              children: "HMS_NetworkBoost_ReleaseMultiPath"
            }), "()"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "释放多网请求。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["int32_t ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_networkboost_registermultipathstatechangecallback",
              children: "HMS_NetworkBoost_RegisterMultiPathStateChangeCallback"
            }), "(", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_networkboost_onmultipathstatechange",
              children: "HMS_NetworkBoost_OnMultiPathStateChange"
            }), " callback, uint32_t* callbackId)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册多网状态变化事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["int32_t ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_networkboost_unregistermultipathstatechangecallback",
              children: "HMS_NetworkBoost_UnregisterMultiPathStateChangeCallback"
            }), "(uint32_t callbackId)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "去注册多网状态变化事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["int32_t ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_networkboost_registermultipathrecommendationcallback",
              children: "HMS_NetworkBoost_RegisterMultiPathRecommendationCallback"
            }), "(", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_networkboost_onmultipathrecommendation",
              children: "HMS_NetworkBoost_OnMultiPathRecommendation"
            }), " callback, uint32_t* callbackId)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册系统多网建议变化事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["int32_t ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_networkboost_unregistermultipathrecommendationcallback",
              children: "HMS_NetworkBoost_UnregisterMultiPathRecommendationCallback"
            }), "(uint32_t callbackId)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "去系统多网建议变化事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["int32_t ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_networkboost_setscenedesc",
              children: "HMS_NetworkBoost_SetSceneDesc"
            }), "(", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-struct/network-boost-c-struct-scene_desc/network-boost-c-struct-scene_desc",
              children: "NetworkBoost_SceneDesc"
            }), " sceneDesc)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置业务场景。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "宏定义说明",
      children: "宏定义说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "nb_bps",
      children: "NB_BPS"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#define NB_BPS   1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1bps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.1.0(18)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "nb_gbps",
      children: "NB_GBPS"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#define NB_GBPS   1000000000\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1gbps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.1.0(18)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "nb_kbps",
      children: "NB_KBPS"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#define NB_KBPS   1000\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1kbps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.1.0(18)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "nb_mbps",
      children: "NB_MBPS"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#define NB_MBPS   1000000\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1mbps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.1.0(18)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "nb_tbps",
      children: "NB_TBPS"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#define NB_TBPS   1000000000000\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1tbps。请使用uint64_t类型来避免溢出。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.1.0(18)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "netboost_max_path_num",
      children: "NETBOOST_MAX_PATH_NUM"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#define NETBOOST_MAX_PATH_NUM   4\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "网络质量变化的详细信息数组的最大长度值。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.1.0(18)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "类型定义说明",
      children: "类型定义说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_networkboost_handovercallback",
      children: "HMS_NetworkBoost_HandoverCallback"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct HMS_NetworkBoost_HandoverCallback HMS_NetworkBoost_HandoverCallback\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "连接迁移回调信息。回调中的每个方法都不能为空。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.1.0(18)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_networkboost_netqoschange",
      children: "HMS_NetworkBoost_NetQosChange"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void(* HMS_NetworkBoost_NetQosChange) (NetworkBoost_NetworkQosArray *networkQosArray)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "回调函数，返回网络质量变化的详细信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.1.0(18)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
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
            children: "networkQosArray"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "网络质量变化的详细信息"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_networkboost_netscenechange",
      children: "HMS_NetworkBoost_NetSceneChange"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void(* HMS_NetworkBoost_NetSceneChange) (NetworkBoost_NetworkScene *networkScene)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "回调函数，返回网络场景变化的详细信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.1.0(18)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
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
            children: "networkScene"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "网络场景变化的详细信息"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_networkboost_onhandovercomplete",
      children: "HMS_NetworkBoost_OnHandoverComplete"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void(* HMS_NetworkBoost_OnHandoverComplete) (NetworkBoost_HandoverComplete *handoverComplete)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "回调函数，返回连接迁移完成变化的详细信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.1.0(18)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
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
            children: "handoverComplete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "连接迁移完成的详细信息"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_networkboost_onhandoverstart",
      children: "HMS_NetworkBoost_OnHandoverStart"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void(* HMS_NetworkBoost_OnHandoverStart) (NetworkBoost_HandoverStart *handoverStart)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "回调函数，返回连接迁移开始的详细信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.1.0(18)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
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
            children: "handoverStart"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "连接迁移开始的详细信息"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_networkboost_onmultipathrequestresult",
      children: "HMS_NetworkBoost_OnMultiPathRequestResult"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void (*HMS_NetworkBoost_OnMultiPathRequestResult)(NetworkBoost_MultiPathRequestResult* result)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "多网请求结果回调原型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.2(22)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
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
            children: "result"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "发起多网的结果。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_networkboost_onmultipathstatechange",
      children: "HMS_NetworkBoost_OnMultiPathStateChange"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void (*HMS_NetworkBoost_OnMultiPathStateChange)(NetworkBoost_MultiPathStateChange* multiPathState)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "多网状态变化回调原型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.2(22)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
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
            children: "multiPathState"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "多网状态信息。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_networkboost_onmultipathrecommendation",
      children: "HMS_NetworkBoost_OnMultiPathRecommendation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void (*HMS_NetworkBoost_OnMultiPathRecommendation)(NetworkBoost_MultiPathRecommendation* recommendation)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "多网推荐信息变化回调原型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.2(22)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
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
            children: "recommendation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "多网推荐信息。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "networkboost_dataspeedaction",
      children: "NetworkBoost_DataSpeedAction"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct NetworkBoost_DataSpeedAction NetworkBoost_DataSpeedAction\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "发包速率建议。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.1.0(18)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "networkboost_dataspeedsimpleaction",
      children: "NetworkBoost_DataSpeedSimpleAction"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef enum NetworkBoost_DataSpeedSimpleAction NetworkBoost_DataSpeedSimpleAction\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用发包策略的建议。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.1.0(18)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "networkboost_errorresult",
      children: "NetworkBoost_ErrorResult"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef enum NetworkBoost_ErrorResult NetworkBoost_ErrorResult\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "连接迁移结果。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.1.0(18)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "networkboost_handovercomplete",
      children: "NetworkBoost_HandoverComplete"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct NetworkBoost_HandoverComplete NetworkBoost_HandoverComplete\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "连接迁移完成信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.1.0(18)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "networkboost_handovermode",
      children: "NetworkBoost_HandoverMode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef enum NetworkBoost_HandoverMode NetworkBoost_HandoverMode\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "连接迁移模式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.1.0(18)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "networkboost_handoverstart",
      children: "NetworkBoost_HandoverStart"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct NetworkBoost_HandoverStart NetworkBoost_HandoverStart\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "连接迁移开始信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.1.0(18)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "networkboost_nethandle",
      children: "NetworkBoost_NetHandle"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct NetworkBoost_NetHandle NetworkBoost_NetHandle\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "数据网络的句柄。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.1.0(18)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "networkboost_networkqos",
      children: "NetworkBoost_NetworkQos"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct NetworkBoost_NetworkQos NetworkBoost_NetworkQos\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "单条路径的网络质量回调信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.1.0(18)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "networkboost_networkqosarray",
      children: "NetworkBoost_NetworkQosArray"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct NetworkBoost_NetworkQosArray NetworkBoost_NetworkQosArray\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "多条路径的网络质量回调信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.1.0(18)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "networkboost_networkscene",
      children: "NetworkBoost_NetworkScene"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct NetworkBoost_NetworkScene NetworkBoost_NetworkScene\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "网络场景状态变更回调信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.1.0(18)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "networkboost_pathtype",
      children: "NetworkBoost_PathType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef enum NetworkBoost_PathType NetworkBoost_PathType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "路径类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.1.0(18)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "networkboost_qoetype",
      children: "NetworkBoost_QoeType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef enum NetworkBoost_QoeType NetworkBoost_QoeType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用体验类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.1.0(18)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "networkboost_recommendedaction",
      children: "NetworkBoost_RecommendedAction"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef enum NetworkBoost_RecommendedAction NetworkBoost_RecommendedAction\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "建议的数传策略。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.1.0(18)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "networkboost_reestaction",
      children: "NetworkBoost_ReEstAction"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef enum NetworkBoost_ReEstAction NetworkBoost_ReEstAction\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "路径重建类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.1.0(18)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "networkboost_scene",
      children: "NetworkBoost_Scene"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef enum NetworkBoost_Scene NetworkBoost_Scene\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "网络场景类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.1.0(18)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "networkboost_servicetype",
      children: "NetworkBoost_ServiceType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef enum NetworkBoost_ServiceType NetworkBoost_ServiceType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用业务类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.1.0(18)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "networkboost_weaksignalprediction",
      children: "NetworkBoost_WeakSignalPrediction"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct NetworkBoost_WeakSignalPrediction NetworkBoost_WeakSignalPrediction\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "弱信号预测相关信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.1.0(18)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "枚举类型说明",
      children: "枚举类型说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "networkboost_dataspeedsimpleaction-1",
      children: "NetworkBoost_DataSpeedSimpleAction"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum NetworkBoost_DataSpeedSimpleAction\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用发包策略的建议。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.1.0(18)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NB_SIMPLEACTION_SUSPEND_DATA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "停止发包。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NB_SIMPLEACTION_DECREASE_DATA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "降低发包速率。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NB_SIMPLEACTION_INCREASE_DATA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "增加发包速率。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NB_SIMPLEACTION_KEEP_DATA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "保持当前发包速率。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "networkboost_errorresult-1",
      children: "NetworkBoost_ErrorResult"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum NetworkBoost_ErrorResult\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "连接迁移结果枚举。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.1.0(18)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NB_ERROR_NONE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "连接迁移成功。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NB_ERROR_HANDOVER_TIMEOUT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "连接迁移超时。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NB_ERROR_NEW_PATH_ACTIVATION_FAILED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "连接迁移时新链路激活失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NB_ERROR_ABORT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "连接迁移被取消。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "networkboost_handovermode-1",
      children: "NetworkBoost_HandoverMode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum NetworkBoost_HandoverMode\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "连接迁移模式枚举。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.1.0(18)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NB_MODE_DELEGATION"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "委托模式，表示由系统发起连接迁移。默认为该模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NB_MODE_DISCRETION"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自主模式，表示由应用发起连接迁移。应用可以通过该接口禁止系统发起连接迁移。在某些场景下，比如该应用切换到后台时，依旧有可能由系统触发切换。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "networkboost_pathtype-1",
      children: "NetworkBoost_PathType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum NetworkBoost_PathType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "数据路径类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.1.0(18)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NB_PATH_CELLULAR_PRIMARY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "蜂窝主卡。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NB_PATH_CELLULAR_SECONDARY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "蜂窝副卡。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NB_PATH_WIFI_PRIMARY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "主Wi-Fi。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NB_PATH_WIFI_SECONDARY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "辅Wi-Fi。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "networkboost_qoetype-1",
      children: "NetworkBoost_QoeType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum NetworkBoost_QoeType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用体验类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.1.0(18)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NB_QOE_GOOD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "体验良好。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NB_QOE_BAD_UNKNOWN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "体验差：未知原因。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NB_QOE_BAD_SERVER_ERROR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "体验差：服务器异常。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NB_QOE_BAD_NO_DATA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "体验差：无数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NB_QOE_BAD_PACKET_LOST"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "体验差：丢包。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NB_QOE_BAD_PACKET_OUT_OF_ORDER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "体验差：乱序。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NB_QOE_BAD_HIGH_JITTER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "体验差：高抖动。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NB_QOE_BAD_HIGH_LATENCY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "体验差：高时延。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "networkboost_recommendedaction-1",
      children: "NetworkBoost_RecommendedAction"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum NetworkBoost_RecommendedAction\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用数传策略建议。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.1.0(18)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NB_ACTION_DO_CACHING"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "做缓存动作。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NB_ACTION_SUSPEND_DATA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "停止发包。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NB_ACTION_DECREASE_DATA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "降低发包速率。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NB_ACTION_INCREASE_DATA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "增加发包速率。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NB_ACTION_KEEP_DATA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "保持当前发包速率。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "networkboost_reestaction-1",
      children: "NetworkBoost_ReEstAction"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum NetworkBoost_ReEstAction\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "重建枚举。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.1.0(18)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NB_REEST_DEFAULT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用需要使用同样的远端IP，进行重建链路。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NB_REEST_QUERY_DNS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数据链路类型发生变化，比如Wi-Fi <-> CELL，或者是数据链路所在的运营商信息等变化。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NB_REEST_CHANGE_REMOTE_IP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用需要使用不同的远端IP进行重建。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NB_REEST_CHANGE_IP_VERSION"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用需要修改IP类型进行重建，比如IPV4 <-> IPV6。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NB_NO_EST"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用应该在老链路进行立即重试，再次发起网络资源请求和交互，无需重建链路。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "networkboost_scene-1",
      children: "NetworkBoost_Scene"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum NetworkBoost_Scene\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "网络场景类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.1.0(18)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NB_SCENE_NORMAL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "正常场景。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NB_SCENE_CONGESTION"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "拥塞场景。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NB_SCENE_FREQUENT_HANDOVER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "小区切换频繁场景。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NB_SCENE_WEAK_SIGNAL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "弱信号场景。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "networkboost_servicetype-1",
      children: "NetworkBoost_ServiceType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum NetworkBoost_ServiceType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用业务类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.1.0(18)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NB_SERVICE_DEFAULT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认服务类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NB_SERVICE_BACKGROUND"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "后台类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NB_SERVICE_REAL_TIME_VOICE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "实时语音类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NB_SERVICE_REAL_TIME_VIDEO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "实时视频类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NB_SERVICE_CALL_SIGNALING"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "语音信令类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NB_SERVICE_REAL_TIME_GAME"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "实时游戏类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NB_SERVICE_NORMAL_GAME"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "普通游戏类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NB_SERVICE_SHORT_VIDEO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "短视频类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NB_SERVICE_LONG_VIDEO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "长视频类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NB_SERVICE_LIVE_STREAMING_ANCHOR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "直播主播类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NB_SERVICE_LIVE_STREAMING_WATCHER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "直播观看类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NB_SERVICE_DOWNLOAD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "下载类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NB_SERVICE_UPLOAD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "上传类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NB_SERVICE_BROWSER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "浏览页面类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NB_SERVICE_TRANSACTION"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "交易支付或者扫码类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NB_SERVICE_DETECTION"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "探测类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NB_SERVICE_CLOUDSERVICE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "云业务、云游戏类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NB_SERVICE_VOICE_CONFERENCE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "语音会议类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NB_SERVICE_VIDEO_CONFERENCE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "视频会议类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NB_SERVICE_NAVIGATION"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "导航定位类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NB_SERVICE_SECKILL_SERVICE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "秒杀业务类型，如抢票、抢购、抢单、抢红包等。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NB_SERVICE_LOGIN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "登录（含一键登录）类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NB_SERVICE_AUDIO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "音乐、音频类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NB_SERVICE_SHOPPING"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "购物类型。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "networkboost_pathstate",
      children: "NetworkBoost_PathState"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum NetworkBoost_PathState\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "多网链路状态枚举。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.2(22)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NB_PATH_IDLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "多网链路处于空闲状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NB_PATH_CONNECTED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "多网链路已连接。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NB_PATH_SUSPENDED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "多网链路处于挂起状态。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "networkboost_multipathchangecause",
      children: "NetworkBoost_MultiPathChangeCause"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum NetworkBoost_MultiPathChangeCause\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "多网变化原因的枚举。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.2(22)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NB_MULTIPATH_CAUSE_REQUEST_NORMAL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "正常发起多网请求。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NB_MULTIPATH_CAUSE_RELEASE_NORMAL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "正常释放多网请求。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NB_MULTIPATH_CHANGE_CAUSE_RELEASE_NETWORK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "网络原因释放多网。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NB_MULTIPATH_CHANGE_CAUSE_RELEASE_USER_REFUSED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户操作开关释放多网。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NB_MULTIPATH_CAUSE_RELEASE_NO_QUOTA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "配额耗尽释放多网。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NB_MULTIPATH_CAUSE_RELEASE_POWER_CONSUMPTION"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "功耗原因释放多网。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NB_MULTIPATH_CHANGE_CAUSE_RELEASE_INSUFFICIENT_TRAFFIC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "流量原因释放多网。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NB_MULTIPATH_CHANGE_CAUSE_RELEASE_CONFLICT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "场景冲突释放多网。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NB_MULTIPATH_CHANGE_CAUSE_RELEASE_SYS_FUSING"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用使用不规范，比如长时间拉起多网不释放，系统释放多网。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NB_MULTIPATH_CHANGE_CAUSE_RELEASE_SYS_DEFAULT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "系统网络状态变化释放多网。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NB_MULTIPATH_CHANGE_CAUSE_SUSPEND_ENTER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "多网进入挂起状态，此时多网虽未释放，但是实际链路无法传输数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NB_MULTIPATH_CHANGE_CAUSE_SUSPEND_LEAVE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "多网退出挂起状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NB_MULTIPATH_CHANGE_CAUSE_CONN_PROPERTIES_UPDATE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "多网链路的链接属性信息更新，比如IP地址更新。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "networkboost_multipatherrorresult",
      children: "NetworkBoost_MultiPathErrorResult"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum NetworkBoost_MultiPathErrorResult\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "多网建立结果的枚举。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.2(22)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NB_MULTIPATH_ERROR_NONE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "多网建立成功。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NB_MULTIPATH_ERROR_NETWORK_REFUSED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "多网请求被网络拒绝。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NB_MULTIPATH_ERROR_TIMEOUT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "多网建立超时。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NB_MULTIPATH_ERROR_LOCAL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "多网建立过程中，本地释放，例如在建立过程中数据开关关闭，或者其他事件发生，已经不满足拉起多网的条件。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "networkboost_multipathstate",
      children: "NetworkBoost_MultiPathState"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum NetworkBoost_MultiPathState\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "多网状态的枚举。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.2(22)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NB_MULTIPATH_IDLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "多网处于空闲状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NB_MULTIPATH_CREATEING"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "多网正在建立中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NB_MULTIPATH_CREATED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "多网已建立。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NB_MULTIPATH_RELEASING"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "多网正在释放中。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "networkboost_multipathaction",
      children: "NetworkBoost_MultiPathAction"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum NetworkBoost_MultiPathAction\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "多网推荐动作的枚举。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.2(22)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NB_MULTIPATH_ACTION_REQUEST"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "建议发起多网请求。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NB_MULTIPATH_ACTION_RELEASE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "建议释放多网请求。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "networkboost_sceneevent",
      children: "NetworkBoost_SceneEvent"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum NetworkBoost_SceneEvent\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "业务事件枚举。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.2(22)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NB_SCENE_EVENT_ENTER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "进入业务场景。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NB_SCENE_EVENT_UPDATE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "更新上一次的业务事件信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NB_SCENE_EVENT_LEAVE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "离开业务场景。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数说明",
      children: "函数说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_networkboost_registerhandoverchangecallback",
      children: "HMS_NetworkBoost_RegisterHandoverChangeCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t HMS_NetworkBoost_RegisterHandoverChangeCallback (HMS_NetworkBoost_HandoverCallback * callback, uint32_t * callbackId )\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注册连接迁移信息回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.1.0(18)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
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
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "连接迁移回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callbackId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数的ID，由系统分配，用于取消注册回调。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "0 - 成功。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "201 - 权限不足。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "401 - 参数错误。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "801 - 系统能力不支持。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "62100001 - 内部错误。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "62100002 - 系统服务操作失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "62100003 - 注册请求达到上限。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "权限："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ohos.permission.GET_NETWORK_INFO"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_networkboost_registernetqoscallback",
      children: "HMS_NetworkBoost_RegisterNetQosCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t HMS_NetworkBoost_RegisterNetQosCallback (HMS_NetworkBoost_NetQosChange callback, uint32_t * callbackId )\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注册网络质量信息回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.1.0(18)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
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
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "网络质量回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callbackId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数的ID，由系统分配，用于取消注册回调。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "0 - 成功。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "201 - 权限不足。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "401 - 参数错误。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "801 - 系统能力不支持。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "62100001 - 内部错误。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "62100002 - 系统服务操作失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "62100003 - 注册请求达到上限。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "权限："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ohos.permission.GET_NETWORK_INFO"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_networkboost_registernetscenecallback",
      children: "HMS_NetworkBoost_RegisterNetSceneCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t HMS_NetworkBoost_RegisterNetSceneCallback (HMS_NetworkBoost_NetSceneChange callback, uint32_t * callbackId )\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注册网络场景变化回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.1.0(18)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
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
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "网络场景变化回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callbackId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数的ID，由系统分配，用于取消注册回调。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "0 - 成功。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "201 - 权限不足。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "401 - 参数错误。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "801 - 系统能力不支持。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "62100001 - 内部错误。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "62100002 - 系统服务操作失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "62100003 - 注册请求达到上限。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "权限："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ohos.permission.GET_NETWORK_INFO"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_networkboost_reportqoe",
      children: "HMS_NetworkBoost_ReportQoe()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t HMS_NetworkBoost_ReportQoe (NetworkBoost_ServiceType serviceType, NetworkBoost_QoeType qoeType )\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用传输体验反馈。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.1.0(18)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
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
            children: "serviceType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用的业务类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "qoeType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用的网络体验类型。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "0 - 成功。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "201 - 权限不足。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "401 - 参数错误。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "801 - 系统能力不支持。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "62100001 - 内部错误。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "62100002 - 系统服务操作失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "权限："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ohos.permission.GET_NETWORK_INFO"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_networkboost_sethandovermode",
      children: "HMS_NetworkBoost_SetHandoverMode()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t HMS_NetworkBoost_SetHandoverMode (NetworkBoost_HandoverMode mode)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "变更连接迁移模式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.1.0(18)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
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
            children: "mode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "连接迁移模式。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "0 - 成功。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "201 - 权限不足。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "401 - 参数错误。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "801 - 系统能力不支持。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "62100001 - 内部错误。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "62100002 - 系统服务操作失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "权限："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ohos.permission.GET_NETWORK_INFO"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_networkboost_unregisterhandoverchangecallback",
      children: "HMS_NetworkBoost_UnregisterHandoverChangeCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t HMS_NetworkBoost_UnregisterHandoverChangeCallback (uint32_t callbackId)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "取消注册连接迁移信息回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.1.0(18)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
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
            children: "callbackId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调的ID，在注册回调函数时由系统分配。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "0 - 成功。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "201 - 权限不足。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "401 - 参数错误。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "801 - 系统能力不支持。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "62100001 - 内部错误。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "62100002 - 系统服务操作失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "权限："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ohos.permission.GET_NETWORK_INFO"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_networkboost_unregisternetqoscallback",
      children: "HMS_NetworkBoost_UnregisterNetQosCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t HMS_NetworkBoost_UnregisterNetQosCallback (uint32_t callbackId)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "取消注册网络质量信息回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.1.0(18)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
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
            children: "callbackId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调的ID，在注册回调函数时由系统分配。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "0 - 成功。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "201 - 权限不足。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "401 - 参数错误。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "801 - 系统能力不支持。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "62100001 - 内部错误。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "62100002 - 系统服务操作失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "权限："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ohos.permission.GET_NETWORK_INFO"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_networkboost_unregisternetscenecallback",
      children: "HMS_NetworkBoost_UnregisterNetSceneCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t HMS_NetworkBoost_UnregisterNetSceneCallback (uint32_t callbackId)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "取消注册网络场景变化回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.1.0(18)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
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
            children: "callbackId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调的ID，在注册回调函数时由系统分配。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "0 - 成功。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "201 - 权限不足。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "401 - 参数错误。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "801 - 系统能力不支持。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "62100001 - 内部错误。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "62100002 - 系统服务操作失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "权限："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ohos.permission.GET_NETWORK_INFO"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_networkboost_getmultipathquotastats",
      children: "HMS_NetworkBoost_GetMultiPathQuotaStats()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t HMS_NetworkBoost_GetMultiPathQuotaStats(NetworkBoost_MultiPathQuota* quota)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取当前应用多网使用的配额，包括已使用的配额信息和剩余配额信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.2(22)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
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
            children: "quota"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取到的应用配额信息。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "0 - 成功。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "201 - 权限不足。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1013600001 - 内部错误。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1013600002 - 系统处理异常，例如IPC跨进程调用失败，网络管理服务启动失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1013600041 - 传入参数有误，例如入参为空指针。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "权限："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ohos.permission.LINKTURBO"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_networkboost_requestmultipath",
      children: "HMS_NetworkBoost_RequestMultiPath()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t HMS_NetworkBoost_RequestMultiPath(HMS_NetworkBoost_OnMultiPathRequestResult result)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "发起多网请求。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.2(22)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
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
            children: "result"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "发起多网的结果。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "0 - 成功。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "201 - 权限不足。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1013600001 - 内部处理异常，例如内部处理异常，例如内部管理状态机异常，内部消息队列处理阻塞等。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1013600002 - 系统处理异常，例如IPC跨进程调用失败，网络管理服务启动失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1013600041 - 传入参数有误，例如入参为空指针。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1013620000 - 多网功能没有使能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1013620001 - 多网已经激活或者是在激活的过程中。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1013620002 - 应用多网请求已经达到上限。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1013620003 - 功耗限制不允许发起多网。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1013620004 - 限额耗尽。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1013620005 - 多网请求场景的冲突。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1013620006 - 多网发起太频繁。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1013620007 - 没有合适的多网链路可用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1013620008 - 流量不足。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1013620009 - 不支持并发。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "权限："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ohos.permission.LINKTURBO"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_networkboost_releasemultipath",
      children: "HMS_NetworkBoost_ReleaseMultiPath()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t HMS_NetworkBoost_ReleaseMultiPath()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "释放多网请求。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.2(22)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "0 - 成功。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "201 - 权限不足。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1013600001 - 内部处理异常，例如内部处理异常，例如内部管理状态机异常，内部消息队列处理阻塞等。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1013600002 - 系统处理异常，例如IPC跨进程调用失败，网络管理服务启动失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1013620100 - 多网已经激活状态，但是多网不是当前发起release的应用拉起的。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1013620101 - 多网不在激活态。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "权限："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ohos.permission.LINKTURBO"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_networkboost_registermultipathstatechangecallback",
      children: "HMS_NetworkBoost_RegisterMultiPathStateChangeCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t HMS_NetworkBoost_RegisterMultiPathStateChangeCallback(HMS_NetworkBoost_OnMultiPathStateChange callback, uint32_t* callbackId)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注册多网状态变化事件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.2(22)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
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
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "网状态变化回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callbackId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调的ID，注册多网状态时由系统分配。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "0 - 成功。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "201 - 权限不足。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1013600001 - 内部处理异常，例如内部处理异常，例如内部管理状态机异常，内部消息队列处理阻塞等。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1013600002 - 系统处理异常，例如IPC跨进程调用失败，网络管理服务启动失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1013600041 - 传入参数有误，例如入参为空指针。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "权限："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ohos.permission.LINKTURBO"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_networkboost_unregistermultipathstatechangecallback",
      children: "HMS_NetworkBoost_UnregisterMultiPathStateChangeCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t HMS_NetworkBoost_UnregisterMultiPathStateChangeCallback(uint32_t callbackId)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "去注册多网状态变化事件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.2(22)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
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
            children: "callbackId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调的ID，注册多网状态时由系统分配。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "0 - 成功。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "201 - 权限不足。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1013600001 - 内部处理异常，例如内部处理异常，例如内部管理状态机异常，内部消息队列处理阻塞等。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1013600002 - 系统处理异常，例如IPC跨进程调用失败，网络管理服务启动失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "权限："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ohos.permission.LINKTURBO"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_networkboost_registermultipathrecommendationcallback",
      children: "HMS_NetworkBoost_RegisterMultiPathRecommendationCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t HMS_NetworkBoost_RegisterMultiPathRecommendationCallback(HMS_NetworkBoost_OnMultiPathRecommendation callback, uint32_t* callbackId)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注册系统多网建议变化事件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.2(22)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
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
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "系统多网建议变化回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callbackId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调的ID，注册多网状态时由系统分配。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "0 - 成功。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "201 - 权限不足。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1013600001 - 内部处理异常，例如内部处理异常，例如内部管理状态机异常，内部消息队列处理阻塞等。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1013600002 - 系统处理异常，例如IPC跨进程调用失败，网络管理服务启动失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1013600041 - 传入参数有误，例如入参为空指针。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "权限："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ohos.permission.LINKTURBO"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_networkboost_unregistermultipathrecommendationcallback",
      children: "HMS_NetworkBoost_UnregisterMultiPathRecommendationCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t HMS_NetworkBoost_UnregisterMultiPathRecommendationCallback(uint32_t callbackId)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "去注册系统多网建议变化事件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.2(22)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
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
            children: "callbackId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调的ID，注册多网状态时由系统分配。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "0 - 成功。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "201 - 权限不足。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1013600001 - 内部处理异常，例如内部处理异常，例如内部管理状态机异常，内部消息队列处理阻塞等。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1013600002 - 系统处理异常，例如IPC跨进程调用失败，网络管理服务启动失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "权限："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ohos.permission.LINKTURBO"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_networkboost_setscenedesc",
      children: "HMS_NetworkBoost_SetSceneDesc()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t HMS_NetworkBoost_SetSceneDesc(NetworkBoost_SceneDesc sceneDesc)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置业务场景。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.2(22)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
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
            children: "sceneDesc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要设置的业务场景信息。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "0 - 成功。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "201 - 权限不足。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1013600001 - 内部处理异常，例如内部处理异常，例如内部管理状态机异常，内部消息队列处理阻塞等。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1013600002 - 系统处理异常，例如IPC跨进程调用失败，网络管理服务启动失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "权限："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ohos.permission.INTERNET"
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