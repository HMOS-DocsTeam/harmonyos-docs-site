"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["603689"], {
84840(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_data_augmentation_api_dataaugmentation_capi_dataaugmentation_capi_header_struct_dataaugmentation_aip_retrieval_dataaugmentation_aip_retrieval_md_70a_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-data-augmentation-api-dataaugmentation-capi-dataaugmentation-capi-header-struct-dataaugmentation-aip-retrieval-dataaugmentation-aip-retrieval-md-70a.json
var site_docs_ref_data_augmentation_api_dataaugmentation_capi_dataaugmentation_capi_header_struct_dataaugmentation_aip_retrieval_dataaugmentation_aip_retrieval_md_70a_namespaceObject = JSON.parse('{"id":"data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-header-struct/dataaugmentation-aip-retrieval/dataaugmentation-aip-retrieval","title":"aip_retrieval.h","description":"概述","source":"@site/docs-ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-header-struct/dataaugmentation-aip-retrieval/dataaugmentation-aip-retrieval.md","sourceDirName":"data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-header-struct/dataaugmentation-aip-retrieval","slug":"/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-header-struct/dataaugmentation-aip-retrieval/dataaugmentation-aip-retrieval","permalink":"/harmonyos-docs-site/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-header-struct/dataaugmentation-aip-retrieval/dataaugmentation-aip-retrieval","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"aip_retrieval.h","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataaugmentation-aip-retrieval","kit":"应用框架","last_updated":"2026-04-22","slug":"dataaugmentation-aip-retrieval"},"sidebar":"ref","previous":{"title":"aip_error_code.h","permalink":"/harmonyos-docs-site/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-header-struct/dataaugmentation-aip-error-code/dataaugmentation-aip-error-code"},"next":{"title":"aip_retrieval_condition.h","permalink":"/harmonyos-docs-site/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-header-struct/dataaugmentation-aip-retrieval-condition/dataaugmentation-aip-retrieval-condition"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-header-struct/dataaugmentation-aip-retrieval/dataaugmentation-aip-retrieval.md


const frontMatter = {
	title: 'aip_retrieval.h',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataaugmentation-aip-retrieval',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'dataaugmentation-aip-retrieval'
};
const contentTitle = 'aip_retrieval.h';

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
        id: "aip_retrievalh",
        children: "aip_retrieval.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "提供知识检索相关的接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " #include \"dataaugmentation/retrieval/aip_retrieval.h\""]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "库："
        })
      }), " libretrieval_ndk.so"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.DataAugmentation.Retrieval"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "相关模块："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-module/dataaugmentation-capi-retrieval/dataaugmentation-capi-retrieval",
        children: "Retrieval"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "类型定义",
      children: "类型定义"
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
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-module/dataaugmentation-capi-retrieval/dataaugmentation-capi-retrieval#oh_retrieval_retriever",
              children: "OH_Retrieval_Retriever"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-module/dataaugmentation-capi-retrieval/dataaugmentation-capi-retrieval#oh_retrieval_retriever",
              children: "OH_Retrieval_Retriever"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义检索器类型，检索器是进行检索的句柄。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-module/dataaugmentation-capi-retrieval/dataaugmentation-capi-retrieval#oh_retrieval_config",
              children: "OH_Retrieval_Config"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-module/dataaugmentation-capi-retrieval/dataaugmentation-capi-retrieval#oh_retrieval_config",
              children: "OH_Retrieval_Config"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义检索器配置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-module/dataaugmentation-capi-retrieval/dataaugmentation-capi-retrieval#oh_retrieval_dbconfig",
              children: "OH_Retrieval_DbConfig"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-module/dataaugmentation-capi-retrieval/dataaugmentation-capi-retrieval#oh_retrieval_dbconfig",
              children: "OH_Retrieval_DbConfig"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义一个用于打开数据库存储的数据库配置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef enum ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-module/dataaugmentation-capi-retrieval/dataaugmentation-capi-retrieval#retrieval_channel_type",
              children: "Retrieval_Channel_Type"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-module/dataaugmentation-capi-retrieval/dataaugmentation-capi-retrieval#retrieval_channel_type",
              children: "Retrieval_Channel_Type"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义数据索引类型，目前仅包含向量索引数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef void(* ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-module/dataaugmentation-capi-retrieval/dataaugmentation-capi-retrieval#oh_retrieval_callback",
              children: "OH_Retrieval_Callback"
            }), ") (void *context, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-module/dataaugmentation-capi-retrieval/dataaugmentation-capi-retrieval#oh_retrieval_record",
              children: "OH_Retrieval_Record"
            }), " *record, int errCode)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "检索结果记录的回调函数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "枚举",
      children: "枚举"
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-module/dataaugmentation-capi-retrieval/dataaugmentation-capi-retrieval#retrieval_channel_type",
              children: "Retrieval_Channel_Type"
            }), " { RETRIEVAL_TYPE_VECTOR = 1 }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义数据索引类型，目前仅包含向量索引数据。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "函数",
      children: "函数"
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
            children: ["int ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-module/dataaugmentation-capi-retrieval/dataaugmentation-capi-retrieval#oh_retrieval_createretriever",
              children: "OH_Retrieval_CreateRetriever"
            }), " (const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-module/dataaugmentation-capi-retrieval/dataaugmentation-capi-retrieval#oh_retrieval_config",
              children: "OH_Retrieval_Config"
            }), " *config, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-module/dataaugmentation-capi-retrieval/dataaugmentation-capi-retrieval#oh_retrieval_retriever",
              children: "OH_Retrieval_Retriever"
            }), " **retriever)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "读取检索配置，初始化检索器。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["int ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-module/dataaugmentation-capi-retrieval/dataaugmentation-capi-retrieval#oh_retrieval_destroyretriever",
              children: "OH_Retrieval_DestroyRetriever"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-module/dataaugmentation-capi-retrieval/dataaugmentation-capi-retrieval#oh_retrieval_retriever",
              children: "OH_Retrieval_Retriever"
            }), " *retriever)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["销毁通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-module/dataaugmentation-capi-retrieval/dataaugmentation-capi-retrieval#oh_retrieval_createretriever",
              children: "OH_Retrieval_CreateRetriever"
            }), "获得的检索器。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-module/dataaugmentation-capi-retrieval/dataaugmentation-capi-retrieval#oh_retrieval_config",
              children: "OH_Retrieval_Config"
            }), " * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-module/dataaugmentation-capi-retrieval/dataaugmentation-capi-retrieval#oh_retrieval_createconfig",
              children: "OH_Retrieval_CreateConfig"
            }), " ()"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取检索器配置。用于初始化检索器。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["int ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-module/dataaugmentation-capi-retrieval/dataaugmentation-capi-retrieval#oh_retrieval_destroyconfig",
              children: "OH_Retrieval_DestroyConfig"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-module/dataaugmentation-capi-retrieval/dataaugmentation-capi-retrieval#oh_retrieval_config",
              children: "OH_Retrieval_Config"
            }), " *config)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["销毁通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-module/dataaugmentation-capi-retrieval/dataaugmentation-capi-retrieval#oh_retrieval_createconfig",
              children: "OH_Retrieval_CreateConfig"
            }), "获得的检索配置。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-module/dataaugmentation-capi-retrieval/dataaugmentation-capi-retrieval#oh_retrieval_dbconfig",
              children: "OH_Retrieval_DbConfig"
            }), " * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-module/dataaugmentation-capi-retrieval/dataaugmentation-capi-retrieval#oh_retrieval_createdbconfig",
              children: "OH_Retrieval_CreateDbConfig"
            }), " ()"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个配置项以打开数据库。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["int ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-module/dataaugmentation-capi-retrieval/dataaugmentation-capi-retrieval#oh_retrieval_destroydbconfig",
              children: "OH_Retrieval_DestroyDbConfig"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-module/dataaugmentation-capi-retrieval/dataaugmentation-capi-retrieval#oh_retrieval_dbconfig",
              children: "OH_Retrieval_DbConfig"
            }), " *dbConfig)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["销毁", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-module/dataaugmentation-capi-retrieval/dataaugmentation-capi-retrieval#oh_retrieval_createdbconfig",
              children: "OH_Retrieval_CreateDbConfig"
            }), "创建的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-module/dataaugmentation-capi-retrieval/dataaugmentation-capi-retrieval#oh_retrieval_dbconfig",
              children: "OH_Retrieval_DbConfig"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["int ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-module/dataaugmentation-capi-retrieval/dataaugmentation-capi-retrieval#oh_retrieval_setdbconfig",
              children: "OH_Retrieval_SetDbConfig"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-module/dataaugmentation-capi-retrieval/dataaugmentation-capi-retrieval#oh_retrieval_dbconfig",
              children: "OH_Retrieval_DbConfig"
            }), " *dbConfig, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-rdb-configv2/capi-rdb-oh-rdb-configv2",
              children: "OH_Rdb_ConfigV2"
            }), " *rdbConfig)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["在", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-module/dataaugmentation-capi-retrieval/dataaugmentation-capi-retrieval#oh_retrieval_dbconfig",
              children: "OH_Retrieval_DbConfig"
            }), "中设置数据库配置。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["int ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-module/dataaugmentation-capi-retrieval/dataaugmentation-capi-retrieval#oh_retrieval_addconfig",
              children: "OH_Retrieval_AddConfig"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-module/dataaugmentation-capi-retrieval/dataaugmentation-capi-retrieval#oh_retrieval_config",
              children: "OH_Retrieval_Config"
            }), " *config, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-module/dataaugmentation-capi-retrieval/dataaugmentation-capi-retrieval#retrieval_channel_type",
              children: "Retrieval_Channel_Type"
            }), " channelType, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-module/dataaugmentation-capi-retrieval/dataaugmentation-capi-retrieval#oh_retrieval_dbconfig",
              children: "OH_Retrieval_DbConfig"
            }), " *dbConfig)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-module/dataaugmentation-capi-retrieval/dataaugmentation-capi-retrieval#oh_retrieval_config",
              children: "OH_Retrieval_Config"
            }), "中的数据库配置。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["int ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-module/dataaugmentation-capi-retrieval/dataaugmentation-capi-retrieval#oh_retrieval_retrieve",
              children: "OH_Retrieval_Retrieve"
            }), " (const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-module/dataaugmentation-capi-retrieval/dataaugmentation-capi-retrieval#oh_retrieval_retriever",
              children: "OH_Retrieval_Retriever"
            }), " *retriever, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-module/dataaugmentation-capi-retrieval/dataaugmentation-capi-retrieval#oh_retrieval_query",
              children: "OH_Retrieval_Query"
            }), " *query, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-module/dataaugmentation-capi-retrieval/dataaugmentation-capi-retrieval#oh_retrieval_condition",
              children: "OH_Retrieval_Condition"
            }), " *condition, void *context, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-module/dataaugmentation-capi-retrieval/dataaugmentation-capi-retrieval#oh_retrieval_callback",
              children: "OH_Retrieval_Callback"
            }), " *callback)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "执行检索。获得检索器句柄后，输入检索查询词，根据检索条件执行检索，得到检索结果。"
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