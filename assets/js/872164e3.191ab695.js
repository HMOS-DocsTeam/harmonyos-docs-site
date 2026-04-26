"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["289390"], {
947642(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_system_network_api_network_boost_api_networkboost_c_network_boost_c_total_network_boost_c_files_network_boost_c_files_quality_network_boost_c_files_quality_md_872_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-system-network-api-network-boost-api-networkboost-c-network-boost-c-total-network-boost-c-files-network-boost-c-files-quality-network-boost-c-files-quality-md-872.json
var site_docs_ref_system_network_api_network_boost_api_networkboost_c_network_boost_c_total_network_boost_c_files_network_boost_c_files_quality_network_boost_c_files_quality_md_872_namespaceObject = JSON.parse('{"id":"system-network-api/network-boost-api/networkboost-c/network-boost-c-total/network-boost-c-files/network-boost-c-files-quality/network-boost-c-files-quality","title":"network_boost_quality.h","description":"概述","source":"@site/docs-ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-total/network-boost-c-files/network-boost-c-files-quality/network-boost-c-files-quality.md","sourceDirName":"system-network-api/network-boost-api/networkboost-c/network-boost-c-total/network-boost-c-files/network-boost-c-files-quality","slug":"/system-network-api/network-boost-api/networkboost-c/network-boost-c-total/network-boost-c-files/network-boost-c-files-quality/network-boost-c-files-quality","permalink":"/harmonyos-docs-site/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-total/network-boost-c-files/network-boost-c-files-quality/network-boost-c-files-quality","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"network_boost_quality.h","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/network-boost-c-files-quality","kit":"系统","last_updated":"2026-04-20","slug":"network-boost-c-files-quality"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-total/network-boost-c-files/network-boost-c-files-quality/network-boost-c-files-quality.md


const frontMatter = {
	title: 'network_boost_quality.h',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/network-boost-c-files-quality',
	kit: '系统',
	last_updated: '2026-04-20',
	slug: 'network-boost-c-files-quality'
};
const contentTitle = 'network_boost_quality.h';

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
        id: "network_boost_qualityh",
        children: "network_boost_quality.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "声明用于网络质量模块的API。提供基本的函数、结构体和const定义。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <NetworkBoostKit/network_boost_quality.h>"]
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-total/network-boost-c-struct/network-boost-c-struct-network_qos/network-boost-c-struct-network_qos",
              children: "NetworkBoost_NetworkQos"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "网络质量回调信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-total/network-boost-c-struct/network-boost-c-struct-network_qos_array/network-boost-c-struct-network_qos_array",
              children: "NetworkBoost_NetworkQosArray"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "网络质量变化的详细信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-total/network-boost-c-struct/network-boost-c-struct-weak_signal_prediction/network-boost-c-struct-weak_signal_prediction",
              children: "NetworkBoost_WeakSignalPrediction"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "弱信号预测相关信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-total/network-boost-c-struct/network-boost-c-struct-network_scene/network-boost-c-struct-network_scene",
              children: "NetworkBoost_NetworkScene"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "网络场景状态变更回调信息。"
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
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-module/network-boost-c-overview/network-boost-c-overview#netboost_max_path_num",
              children: "NETBOOST_MAX_PATH_NUM"
            }), " 4"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "网络质量变化的最大路径数量。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-module/network-boost-c-overview/network-boost-c-overview#nb_bps",
              children: "NB_BPS"
            }), " 1"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1bps"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-module/network-boost-c-overview/network-boost-c-overview#nb_kbps",
              children: "NB_KBPS"
            }), " 1000"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1kbps"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-module/network-boost-c-overview/network-boost-c-overview#nb_mbps",
              children: "NB_MBPS"
            }), " 1000000"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1mbps"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-module/network-boost-c-overview/network-boost-c-overview#nb_gbps",
              children: "NB_GBPS"
            }), " 1000000000"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1gbps"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-module/network-boost-c-overview/network-boost-c-overview#nb_tbps",
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-module/network-boost-c-overview/network-boost-c-overview#networkboost_recommendedaction-1",
              children: "NetworkBoost_RecommendedAction"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-module/network-boost-c-overview/network-boost-c-overview#networkboost_recommendedaction",
              children: "NetworkBoost_RecommendedAction"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用数传策略建议。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef enum ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-module/network-boost-c-overview/network-boost-c-overview#networkboost_pathtype-1",
              children: "NetworkBoost_PathType"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-module/network-boost-c-overview/network-boost-c-overview#networkboost_pathtype",
              children: "NetworkBoost_PathType"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数据路径类型，枚举值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef enum ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-module/network-boost-c-overview/network-boost-c-overview#networkboost_scene-1",
              children: "NetworkBoost_Scene"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-module/network-boost-c-overview/network-boost-c-overview#networkboost_scene",
              children: "NetworkBoost_Scene"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "网络场景类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef enum ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-module/network-boost-c-overview/network-boost-c-overview#networkboost_servicetype-1",
              children: "NetworkBoost_ServiceType"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-module/network-boost-c-overview/network-boost-c-overview#networkboost_servicetype",
              children: "NetworkBoost_ServiceType"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用业务类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef enum ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-module/network-boost-c-overview/network-boost-c-overview#networkboost_qoetype-1",
              children: "NetworkBoost_QoeType"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-module/network-boost-c-overview/network-boost-c-overview#networkboost_qoetype",
              children: "NetworkBoost_QoeType"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用体验类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-total/network-boost-c-struct/network-boost-c-struct-network_qos/network-boost-c-struct-network_qos",
              children: "NetworkBoost_NetworkQos"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-module/network-boost-c-overview/network-boost-c-overview#networkboost_networkqos",
              children: "NetworkBoost_NetworkQos"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "网络质量回调信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-total/network-boost-c-struct/network-boost-c-struct-network_qos_array/network-boost-c-struct-network_qos_array",
              children: "NetworkBoost_NetworkQosArray"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-module/network-boost-c-overview/network-boost-c-overview#networkboost_networkqosarray",
              children: "NetworkBoost_NetworkQosArray"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "网络质量变化的详细信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-total/network-boost-c-struct/network-boost-c-struct-weak_signal_prediction/network-boost-c-struct-weak_signal_prediction",
              children: "NetworkBoost_WeakSignalPrediction"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-module/network-boost-c-overview/network-boost-c-overview#networkboost_weaksignalprediction",
              children: "NetworkBoost_WeakSignalPrediction"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "弱信号预测相关信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-total/network-boost-c-struct/network-boost-c-struct-network_scene/network-boost-c-struct-network_scene",
              children: "NetworkBoost_NetworkScene"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-module/network-boost-c-overview/network-boost-c-overview#networkboost_networkscene",
              children: "NetworkBoost_NetworkScene"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "网络场景状态变更回调信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef void(* ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-module/network-boost-c-overview/network-boost-c-overview#hms_networkboost_netqoschange",
              children: "HMS_NetworkBoost_NetQosChange"
            }), ") (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-total/network-boost-c-struct/network-boost-c-struct-network_qos_array/network-boost-c-struct-network_qos_array",
              children: "NetworkBoost_NetworkQosArray"
            }), " *networkQosArray)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "网络质量变更回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef void(* ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-module/network-boost-c-overview/network-boost-c-overview#hms_networkboost_netscenechange",
              children: "HMS_NetworkBoost_NetSceneChange"
            }), ") (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-total/network-boost-c-struct/network-boost-c-struct-network_scene/network-boost-c-struct-network_scene",
              children: "NetworkBoost_NetworkScene"
            }), " *networkScene)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "网络场景状态变更回调。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "枚举",
      children: "枚举"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-module/network-boost-c-overview/network-boost-c-overview#networkboost_recommendedaction-1",
              children: "NetworkBoost_RecommendedAction"
            }), " {  NB_ACTION_DO_CACHING = 0, NB_ACTION_SUSPEND_DATA = 1, NB_ACTION_DECREASE_DATA = 2, NB_ACTION_INCREASE_DATA = 3,  NB_ACTION_KEEP_DATA = 4  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用数传策略建议。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-module/network-boost-c-overview/network-boost-c-overview#networkboost_pathtype-1",
              children: "NetworkBoost_PathType"
            }), " { NB_PATH_CELLULAR_PRIMARY = 0, NB_PATH_CELLULAR_SECONDARY = 1, NB_PATH_WIFI_PRIMARY = 2, NB_PATH_WIFI_SECONDARY = 3 }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数据路径类型，枚举值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-module/network-boost-c-overview/network-boost-c-overview#networkboost_scene-1",
              children: "NetworkBoost_Scene"
            }), " { NB_SCENE_NORMAL = 0, NB_SCENE_CONGESTION = 1, NB_SCENE_FREQUENT_HANDOVER = 2, NB_SCENE_WEAK_SIGNAL = 3 }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "网络场景类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-module/network-boost-c-overview/network-boost-c-overview#networkboost_servicetype-1",
              children: "NetworkBoost_ServiceType"
            }), " {  NB_SERVICE_DEFAULT = 0, NB_SERVICE_BACKGROUND = 1, NB_SERVICE_REAL_TIME_VOICE = 2, NB_SERVICE_REAL_TIME_VIDEO = 3,  NB_SERVICE_CALL_SIGNALING = 4, NB_SERVICE_REAL_TIME_GAME = 5, NB_SERVICE_NORMAL_GAME = 6, NB_SERVICE_SHORT_VIDEO = 7,  NB_SERVICE_LONG_VIDEO = 8, NB_SERVICE_LIVE_STREAMING_ANCHOR = 9, NB_SERVICE_LIVE_STREAMING_WATCHER = 10, NB_SERVICE_DOWNLOAD = 11,  NB_SERVICE_UPLOAD = 12, NB_SERVICE_BROWSER = 13, NB_SERVICE_TRANSACTION = 14, NB_SERVICE_DETECTION = 15, NB_SERVICE_CLOUDSERVICE = 16, NB_SERVICE_VOICE_CONFERENCE = 17, NB_SERVICE_VIDEO_CONFERENCE = 18, NB_SERVICE_NAVIGATION = 19, NB_SERVICE_SECKILL_SERVICE = 20, NB_SERVICE_LOGIN = 21, NB_SERVICE_AUDIO = 22, NB_SERVICE_SHOPPING = 23  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用业务类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-module/network-boost-c-overview/network-boost-c-overview#networkboost_qoetype-1",
              children: "NetworkBoost_QoeType"
            }), " {  NB_QOE_GOOD = 0, NB_QOE_BAD_UNKNOWN = 1, NB_QOE_BAD_SERVER_ERROR = 2, NB_QOE_BAD_NO_DATA = 3,  NB_QOE_BAD_PACKET_LOST = 4, NB_QOE_BAD_PACKET_OUT_OF_ORDER = 5, NB_QOE_BAD_HIGH_JITTER = 6, NB_QOE_BAD_HIGH_LATENCY = 7  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用体验类型。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "函数",
      children: "函数"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-module/network-boost-c-overview/network-boost-c-overview#hms_networkboost_registernetqoscallback",
              children: "HMS_NetworkBoost_RegisterNetQosCallback"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-module/network-boost-c-overview/network-boost-c-overview#hms_networkboost_netqoschange",
              children: "HMS_NetworkBoost_NetQosChange"
            }), " callback, uint32_t *callbackId)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册网络质量信息回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["int32_t ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-module/network-boost-c-overview/network-boost-c-overview#hms_networkboost_unregisternetqoscallback",
              children: "HMS_NetworkBoost_UnregisterNetQosCallback"
            }), " (uint32_t callbackId)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消注册网络质量信息回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["int32_t ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-module/network-boost-c-overview/network-boost-c-overview#hms_networkboost_registernetscenecallback",
              children: "HMS_NetworkBoost_RegisterNetSceneCallback"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-module/network-boost-c-overview/network-boost-c-overview#hms_networkboost_netscenechange",
              children: "HMS_NetworkBoost_NetSceneChange"
            }), " callback, uint32_t *callbackId)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册网络场景变化信息回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["int32_t ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-module/network-boost-c-overview/network-boost-c-overview#hms_networkboost_unregisternetscenecallback",
              children: "HMS_NetworkBoost_UnregisterNetSceneCallback"
            }), " (uint32_t callbackId)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消注册网络场景变化信息回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["int32_t ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-module/network-boost-c-overview/network-boost-c-overview#hms_networkboost_reportqoe",
              children: "HMS_NetworkBoost_ReportQoe"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-module/network-boost-c-overview/network-boost-c-overview#networkboost_servicetype-1",
              children: "NetworkBoost_ServiceType"
            }), " serviceType, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-boost-api/networkboost-c/network-boost-c-module/network-boost-c-overview/network-boost-c-overview#networkboost_qoetype-1",
              children: "NetworkBoost_QoeType"
            }), " qoeType)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用传输体验反馈。"
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