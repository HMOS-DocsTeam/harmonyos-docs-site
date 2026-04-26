"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["419789"], {
979918(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_data_augmentation_api_dataaugmentation_capi_dataaugmentation_capi_module_dataaugmentation_capi_retrieval_dataaugmentation_capi_retrieval_md_f1c_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-data-augmentation-api-dataaugmentation-capi-dataaugmentation-capi-module-dataaugmentation-capi-retrieval-dataaugmentation-capi-retrieval-md-f1c.json
var site_docs_ref_data_augmentation_api_dataaugmentation_capi_dataaugmentation_capi_module_dataaugmentation_capi_retrieval_dataaugmentation_capi_retrieval_md_f1c_namespaceObject = JSON.parse('{"id":"data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-module/dataaugmentation-capi-retrieval/dataaugmentation-capi-retrieval","title":"Retrieval","description":"概述","source":"@site/docs-ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-module/dataaugmentation-capi-retrieval/dataaugmentation-capi-retrieval.md","sourceDirName":"data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-module/dataaugmentation-capi-retrieval","slug":"/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-module/dataaugmentation-capi-retrieval/dataaugmentation-capi-retrieval","permalink":"/harmonyos-docs-site/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-module/dataaugmentation-capi-retrieval/dataaugmentation-capi-retrieval","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"Retrieval","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataaugmentation-capi-retrieval","kit":"应用框架","last_updated":"2026-04-22","slug":"dataaugmentation-capi-retrieval"},"sidebar":"ref","previous":{"title":"AIP","permalink":"/harmonyos-docs-site/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-module/dataaugmentation-capi-aip/dataaugmentation-capi-aip"},"next":{"title":"aip_error_code.h","permalink":"/harmonyos-docs-site/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-header-struct/dataaugmentation-aip-error-code/dataaugmentation-aip-error-code"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-module/dataaugmentation-capi-retrieval/dataaugmentation-capi-retrieval.md


const frontMatter = {
	title: 'Retrieval',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataaugmentation-capi-retrieval',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'dataaugmentation-capi-retrieval'
};
const contentTitle = 'Retrieval';

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
  "value": "类型定义说明",
  "id": "类型定义说明",
  "level": 2
}, {
  "value": "OH_Retrieval_Callback",
  "id": "oh_retrieval_callback",
  "level": 3
}, {
  "value": "OH_Retrieval_Condition",
  "id": "oh_retrieval_condition",
  "level": 3
}, {
  "value": "OH_Retrieval_Config",
  "id": "oh_retrieval_config",
  "level": 3
}, {
  "value": "OH_Retrieval_DbConfig",
  "id": "oh_retrieval_dbconfig",
  "level": 3
}, {
  "value": "OH_Retrieval_Query",
  "id": "oh_retrieval_query",
  "level": 3
}, {
  "value": "OH_Retrieval_Record",
  "id": "oh_retrieval_record",
  "level": 3
}, {
  "value": "OH_Retrieval_RecordItem",
  "id": "oh_retrieval_recorditem",
  "level": 3
}, {
  "value": "OH_Retrieval_Retriever",
  "id": "oh_retrieval_retriever",
  "level": 3
}, {
  "value": "OH_Retrieval_SubCondition",
  "id": "oh_retrieval_subcondition",
  "level": 3
}, {
  "value": "OH_Retrieval_VectorCondition",
  "id": "oh_retrieval_vectorcondition",
  "level": 3
}, {
  "value": "Retrieval_Channel_Type",
  "id": "retrieval_channel_type",
  "level": 3
}, {
  "value": "枚举类型说明",
  "id": "枚举类型说明",
  "level": 2
}, {
  "value": "Retrieval_Channel_Type",
  "id": "retrieval_channel_type-1",
  "level": 3
}, {
  "value": "函数说明",
  "id": "函数说明",
  "level": 2
}, {
  "value": "OH_Retrieval_AddConfig()",
  "id": "oh_retrieval_addconfig",
  "level": 3
}, {
  "value": "OH_Retrieval_AddSubCondition()",
  "id": "oh_retrieval_addsubcondition",
  "level": 3
}, {
  "value": "OH_Retrieval_CreateCondition()",
  "id": "oh_retrieval_createcondition",
  "level": 3
}, {
  "value": "OH_Retrieval_CreateConfig()",
  "id": "oh_retrieval_createconfig",
  "level": 3
}, {
  "value": "OH_Retrieval_CreateDbConfig()",
  "id": "oh_retrieval_createdbconfig",
  "level": 3
}, {
  "value": "OH_Retrieval_CreateQuery()",
  "id": "oh_retrieval_createquery",
  "level": 3
}, {
  "value": "OH_Retrieval_CreateRetriever()",
  "id": "oh_retrieval_createretriever",
  "level": 3
}, {
  "value": "OH_Retrieval_CreateVectorCondition()",
  "id": "oh_retrieval_createvectorcondition",
  "level": 3
}, {
  "value": "OH_Retrieval_DestroyCondition()",
  "id": "oh_retrieval_destroycondition",
  "level": 3
}, {
  "value": "OH_Retrieval_DestroyConfig()",
  "id": "oh_retrieval_destroyconfig",
  "level": 3
}, {
  "value": "OH_Retrieval_DestroyDbConfig()",
  "id": "oh_retrieval_destroydbconfig",
  "level": 3
}, {
  "value": "OH_Retrieval_DestroyQuery()",
  "id": "oh_retrieval_destroyquery",
  "level": 3
}, {
  "value": "OH_Retrieval_DestroyRecord()",
  "id": "oh_retrieval_destroyrecord",
  "level": 3
}, {
  "value": "OH_Retrieval_DestroyRetriever()",
  "id": "oh_retrieval_destroyretriever",
  "level": 3
}, {
  "value": "OH_Retrieval_DestroySubCondition()",
  "id": "oh_retrieval_destroysubcondition",
  "level": 3
}, {
  "value": "OH_Retrieval_DestroyVectorCondition()",
  "id": "oh_retrieval_destroyvectorcondition",
  "level": 3
}, {
  "value": "OH_Retrieval_GetItemSize()",
  "id": "oh_retrieval_getitemsize",
  "level": 3
}, {
  "value": "OH_Retrieval_GetItemText()",
  "id": "oh_retrieval_getitemtext",
  "level": 3
}, {
  "value": "OH_Retrieval_GetRecordItem()",
  "id": "oh_retrieval_getrecorditem",
  "level": 3
}, {
  "value": "OH_Retrieval_GetRecordLength()",
  "id": "oh_retrieval_getrecordlength",
  "level": 3
}, {
  "value": "OH_Retrieval_Retrieve()",
  "id": "oh_retrieval_retrieve",
  "level": 3
}, {
  "value": "OH_Retrieval_SetDbConfig()",
  "id": "oh_retrieval_setdbconfig",
  "level": 3
}, {
  "value": "OH_Retrieval_SetOriginalQuestion()",
  "id": "oh_retrieval_setoriginalquestion",
  "level": 3
}, {
  "value": "OH_Retrieval_SetSimilarityThreshold()",
  "id": "oh_retrieval_setsimilaritythreshold",
  "level": 3
}, {
  "value": "OH_Retrieval_SetVectorRecallLimit()",
  "id": "oh_retrieval_setvectorrecalllimit",
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
        id: "retrieval",
        children: "Retrieval"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "智慧化数据平台（AIP）为应用提供构建端侧智慧化解决方案，提供向量化、知识检索和知识问答的能力。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "文件",
      children: "文件"
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-header-struct/dataaugmentation-aip-retrieval/dataaugmentation-aip-retrieval",
              children: "aip_retrieval.h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "提供知识检索相关的接口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-header-struct/dataaugmentation-aip-retrieval-condition/dataaugmentation-aip-retrieval-condition",
              children: "aip_retrieval_condition.h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "提供与检索条件相关的接口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-header-struct/dataaugmentation-aip-retrieval-condition-vector/dataaugmentation-aip-retrieval-condition-vector",
              children: "aip_retrieval_condition_vector.h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "提供与向量条件相关的接口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-header-struct/dataaugmentation-aip-retrieval-query/dataaugmentation-aip-retrieval-query",
              children: "aip_retrieval_query.h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "提供与检索查询相关的接口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-header-struct/dataaugmentation-aip-retrieval-record/dataaugmentation-aip-retrieval-record",
              children: "aip_retrieval_record.h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "提供与检索结果相关的接口。"
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
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_retrieval_retriever",
              children: "OH_Retrieval_Retriever"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_retrieval_retriever",
              children: "OH_Retrieval_Retriever"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义检索器类型，检索器是进行检索的句柄。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_retrieval_config",
              children: "OH_Retrieval_Config"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_retrieval_config",
              children: "OH_Retrieval_Config"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义检索器配置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_retrieval_dbconfig",
              children: "OH_Retrieval_DbConfig"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_retrieval_dbconfig",
              children: "OH_Retrieval_DbConfig"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义一个用于打开数据库存储的数据库配置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef enum ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#retrieval_channel_type",
              children: "Retrieval_Channel_Type"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#retrieval_channel_type",
              children: "Retrieval_Channel_Type"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义数据索引类型，目前仅包括向量索引数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef void(* ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_retrieval_callback",
              children: "OH_Retrieval_Callback"
            }), ") (void *context, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_retrieval_record",
              children: "OH_Retrieval_Record"
            }), " *record, int errCode)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "检索结果记录的回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_retrieval_condition",
              children: "OH_Retrieval_Condition"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_retrieval_condition",
              children: "OH_Retrieval_Condition"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义检索条件，可包含多个子检索条件等。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_retrieval_subcondition",
              children: "OH_Retrieval_SubCondition"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_retrieval_subcondition",
              children: "OH_Retrieval_SubCondition"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义子检索条件，可以是向量检索。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_retrieval_subcondition",
              children: "OH_Retrieval_SubCondition"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_retrieval_vectorcondition",
              children: "OH_Retrieval_VectorCondition"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义向量检索条件，包含检索的字段、检索参数、过滤条件等。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_retrieval_query",
              children: "OH_Retrieval_Query"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_retrieval_query",
              children: "OH_Retrieval_Query"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义检索词，当前只支持纯文本检索。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_retrieval_record",
              children: "OH_Retrieval_Record"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_retrieval_record",
              children: "OH_Retrieval_Record"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义检索结果，包含检索知识库得到的字段和字段取值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_retrieval_recorditem",
              children: "OH_Retrieval_RecordItem"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_retrieval_recorditem",
              children: "OH_Retrieval_RecordItem"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义检索结果中的数据库bucket数组。"
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
              href: "#retrieval_channel_type",
              children: "Retrieval_Channel_Type"
            }), " { Retrieval_TYPE_VECTOR = 1 }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义数据索引类型，目前仅包括向量索引数据。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "函数",
      children: "函数"
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
            children: ["int ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_retrieval_createretriever",
              children: "OH_Retrieval_CreateRetriever"
            }), " (const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_retrieval_config",
              children: "OH_Retrieval_Config"
            }), " *config, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_retrieval_retriever",
              children: "OH_Retrieval_Retriever"
            }), " **retriever)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取检索器。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["int ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_retrieval_destroyretriever",
              children: "OH_Retrieval_DestroyRetriever"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_retrieval_retriever",
              children: "OH_Retrieval_Retriever"
            }), " *retriever)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["销毁通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_retrieval_createretriever",
              children: "OH_Retrieval_CreateRetriever"
            }), "获得的检索器。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_retrieval_config",
              children: "OH_Retrieval_Config"
            }), " * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_retrieval_createconfig",
              children: "OH_Retrieval_CreateConfig"
            }), " ()"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取检索器配置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["int ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_retrieval_destroyconfig",
              children: "OH_Retrieval_DestroyConfig"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_retrieval_config",
              children: "OH_Retrieval_Config"
            }), " *config)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["销毁通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_retrieval_createconfig",
              children: "OH_Retrieval_CreateConfig"
            }), "获得的检索配置。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_retrieval_dbconfig",
              children: "OH_Retrieval_DbConfig"
            }), " * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_retrieval_createdbconfig",
              children: "OH_Retrieval_CreateDbConfig"
            }), " ()"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个配置项以打开数据库。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["int ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_retrieval_destroydbconfig",
              children: "OH_Retrieval_DestroyDbConfig"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_retrieval_dbconfig",
              children: "OH_Retrieval_DbConfig"
            }), " *dbConfig)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["销毁", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_retrieval_createdbconfig",
              children: "OH_Retrieval_CreateDbConfig"
            }), "创建的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_retrieval_dbconfig",
              children: "OH_Retrieval_DbConfig"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["int ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_retrieval_setdbconfig",
              children: "OH_Retrieval_SetDbConfig"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_retrieval_dbconfig",
              children: "OH_Retrieval_DbConfig"
            }), " *dbConfig, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-rdb-configv2/capi-rdb-oh-rdb-configv2",
              children: "OH_Rdb_ConfigV2"
            }), "*rdbConfig)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_retrieval_dbconfig",
              children: "OH_Retrieval_DbConfig"
            }), "中的数据库配置。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["int ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_retrieval_addconfig",
              children: "OH_Retrieval_AddConfig"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_retrieval_config",
              children: "OH_Retrieval_Config"
            }), " *config, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#retrieval_channel_type",
              children: "Retrieval_Channel_Type"
            }), " channelType, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_retrieval_dbconfig",
              children: "OH_Retrieval_DbConfig"
            }), " *dbConfig)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_retrieval_config",
              children: "OH_Retrieval_Config"
            }), "中的数据库配置。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["int ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_retrieval_retrieve",
              children: "OH_Retrieval_Retrieve"
            }), " (const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_retrieval_retriever",
              children: "OH_Retrieval_Retriever"
            }), " *retriever, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_retrieval_query",
              children: "OH_Retrieval_Query"
            }), " *query, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_retrieval_condition",
              children: "OH_Retrieval_Condition"
            }), " *condition, void *context, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_retrieval_callback",
              children: "OH_Retrieval_Callback"
            }), " *callback)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "执行检索。获得检索器句柄后，输入检索查询词，根据检索条件执行检索，得到检索结果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_retrieval_condition",
              children: "OH_Retrieval_Condition"
            }), " * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_retrieval_createcondition",
              children: "OH_Retrieval_CreateCondition"
            }), " ()"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建检索条件，作为检索接口的入参。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["int ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_retrieval_destroycondition",
              children: "OH_Retrieval_DestroyCondition"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_retrieval_condition",
              children: "OH_Retrieval_Condition"
            }), " *condition)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["销毁通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_retrieval_createcondition",
              children: "OH_Retrieval_CreateCondition"
            }), "获得的检索条件。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["int ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_retrieval_destroysubcondition",
              children: "OH_Retrieval_DestroySubCondition"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_retrieval_subcondition",
              children: "OH_Retrieval_SubCondition"
            }), " *condition)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["销毁", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_retrieval_subcondition",
              children: "OH_Retrieval_SubCondition"
            }), "对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["int ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_retrieval_addsubcondition",
              children: "OH_Retrieval_AddSubCondition"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_retrieval_condition",
              children: "OH_Retrieval_Condition"
            }), " *condition, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_retrieval_subcondition",
              children: "OH_Retrieval_SubCondition"
            }), " *subCondition)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在检索条件中，增加子检索条件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_retrieval_vectorcondition",
              children: "OH_Retrieval_VectorCondition"
            }), " * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_retrieval_createvectorcondition",
              children: "OH_Retrieval_CreateVectorCondition"
            }), " ()"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建向量检索条件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["int ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_retrieval_destroyvectorcondition",
              children: "OH_Retrieval_DestroyVectorCondition"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_retrieval_vectorcondition",
              children: "OH_Retrieval_VectorCondition"
            }), " *condition)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["销毁通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_retrieval_createvectorcondition",
              children: "OH_Retrieval_CreateVectorCondition"
            }), "获得的检索条件。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["int ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_retrieval_setvectorrecalllimit",
              children: "OH_Retrieval_SetVectorRecallLimit"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_retrieval_vectorcondition",
              children: "OH_Retrieval_VectorCondition"
            }), " *condition, uint32_t limit)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在检索条件中，设置向量检索结果数量上限1000。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["int ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_retrieval_setsimilaritythreshold",
              children: "OH_Retrieval_SetSimilarityThreshold"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_retrieval_vectorcondition",
              children: "OH_Retrieval_VectorCondition"
            }), " *condition, double threshold)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在检索条件中，设置向量检索的相似度阈值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_retrieval_query",
              children: "OH_Retrieval_Query"
            }), " * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_retrieval_createquery",
              children: "OH_Retrieval_CreateQuery"
            }), " ()"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建检索词，作为检索接口的入参。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["int ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_retrieval_destroyquery",
              children: "OH_Retrieval_DestroyQuery"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_retrieval_query",
              children: "OH_Retrieval_Query"
            }), " *query)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["销毁通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_retrieval_createquery",
              children: "OH_Retrieval_CreateQuery"
            }), "获得的检索词。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["int ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_retrieval_setoriginalquestion",
              children: "OH_Retrieval_SetOriginalQuestion"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_retrieval_query",
              children: "OH_Retrieval_Query"
            }), " *query, const char *question)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_retrieval_query",
              children: "OH_Retrieval_Query"
            }), "中的检索词。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["int ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_retrieval_destroyrecord",
              children: "OH_Retrieval_DestroyRecord"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_retrieval_record",
              children: "OH_Retrieval_Record"
            }), " *record)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["销毁通过检索接口", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_retrieval_retrieve",
              children: "OH_Retrieval_Retrieve"
            }), "获得的检索结果。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["int ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_retrieval_getrecordlength",
              children: "OH_Retrieval_GetRecordLength"
            }), " (const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_retrieval_record",
              children: "OH_Retrieval_Record"
            }), " *record, uint32_t *length)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取检索结果", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_retrieval_record",
              children: "OH_Retrieval_Record"
            }), "中的数据库bucket数组长度。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["int ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_retrieval_getrecorditem",
              children: "OH_Retrieval_GetRecordItem"
            }), " (const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_retrieval_record",
              children: "OH_Retrieval_Record"
            }), " *record, uint32_t index, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_retrieval_recorditem",
              children: "OH_Retrieval_RecordItem"
            }), " **item)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取检索结果", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_retrieval_record",
              children: "OH_Retrieval_Record"
            }), "中的数据库bucket数组。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["int ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_retrieval_getitemsize",
              children: "OH_Retrieval_GetItemSize"
            }), " (const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_retrieval_recorditem",
              children: "OH_Retrieval_RecordItem"
            }), " *items, const char *fieldName, size_t *size)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取数据库bucket数组", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_retrieval_recorditem",
              children: "OH_Retrieval_RecordItem"
            }), "中指定字段的值的size。size值包含结束符。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["int ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_retrieval_getitemtext",
              children: "OH_Retrieval_GetItemText"
            }), " (const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_retrieval_recorditem",
              children: "OH_Retrieval_RecordItem"
            }), " *items, const char *fieldName, char *value, size_t size)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取数据库bucket数组", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_retrieval_recorditem",
              children: "OH_Retrieval_RecordItem"
            }), "中指定字段的值。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "类型定义说明",
      children: "类型定义说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_retrieval_callback",
      children: "OH_Retrieval_Callback"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void(* OH_Retrieval_Callback) (void *context, OH_Retrieval_Record *record, int errCode)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检索结果记录的回调函数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
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
            children: "context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示用户提供的上下文数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "record"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_retrieval_record",
              children: "OH_Retrieval_Record"
            }), " 实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "errCode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示返回的错误码。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_retrieval_condition",
      children: "OH_Retrieval_Condition"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct OH_Retrieval_Condition OH_Retrieval_Condition\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义检索条件，可包含多个子检索条件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_retrieval_config",
      children: "OH_Retrieval_Config"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct OH_Retrieval_Config OH_Retrieval_Config\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义检索器配置，包括数据库路径、数据库名称、包名等。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_retrieval_dbconfig",
      children: "OH_Retrieval_DbConfig"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct OH_Retrieval_DbConfig OH_Retrieval_DbConfig\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义一个用于打开数据库存储的数据库配置。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_retrieval_query",
      children: "OH_Retrieval_Query"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct OH_Retrieval_Query OH_Retrieval_Query\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义检索词，当前只支持纯文本检索，不支持图片、视频等。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_retrieval_record",
      children: "OH_Retrieval_Record"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct OH_Retrieval_Record OH_Retrieval_Record\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义检索结果，包含检索知识库得到的字段和字段取值。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_retrieval_recorditem",
      children: "OH_Retrieval_RecordItem"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct OH_Retrieval_RecordItem OH_Retrieval_RecordItem\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义检索结果中的数据库bucket数组。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_retrieval_retriever",
      children: "OH_Retrieval_Retriever"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct OH_Retrieval_Retriever OH_Retrieval_Retriever\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义检索器类型，检索器是进行检索的句柄。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_retrieval_subcondition",
      children: "OH_Retrieval_SubCondition"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct OH_Retrieval_SubCondition OH_Retrieval_SubCondition\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义子检索条件，目前支持向量检索。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_retrieval_vectorcondition",
      children: "OH_Retrieval_VectorCondition"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct OH_Retrieval_SubCondition OH_Retrieval_VectorCondition\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义向量检索条件，包含检索的字段、检索参数、过滤条件等。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "retrieval_channel_type",
      children: "Retrieval_Channel_Type"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef enum Retrieval_Channel_Type Retrieval_Channel_Type\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义数据索引类型，目前仅包括向量索引数据。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "枚举类型说明",
      children: "枚举类型说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "retrieval_channel_type-1",
      children: "Retrieval_Channel_Type"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum Retrieval_Channel_Type\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义数据索引类型，目前仅包括向量索引数据。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Retrieval_TYPE_VECTOR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示向量索引。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数说明",
      children: "函数说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_retrieval_addconfig",
      children: "OH_Retrieval_AddConfig()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_Retrieval_AddConfig (OH_Retrieval_Config * config, Retrieval_Channel_Type channelType, OH_Retrieval_DbConfig * dbConfig )\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_retrieval_config",
        children: "OH_Retrieval_Config"
      }), "中的数据库配置。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
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
            children: "config"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向检索配置 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_retrieval_config",
              children: "OH_Retrieval_Config"
            }), " 实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "channelType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示一种数据索引类型，目前仅支持向量查询。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dbConfig"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向数据库配置实例的指针。"
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
      children: "返回函数的执行状态。执行成功返回AIP_OK。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "操作成功"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1021200010"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无效参数"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参见："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_retrieval_config",
        children: "OH_Retrieval_Config"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#retrieval_channel_type",
        children: "Retrieval_Channel_Type"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_retrieval_dbconfig",
        children: "OH_Retrieval_DbConfig"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-module/dataaugmentation-capi-aip/dataaugmentation-capi-aip#oh_aip_errcode-1",
        children: "OH_Aip_ErrCode"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_retrieval_addsubcondition",
      children: "OH_Retrieval_AddSubCondition()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_Retrieval_AddSubCondition (OH_Retrieval_Condition * condition, OH_Retrieval_SubCondition * subCondition )\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在检索条件中，增加子检索条件。当前仅支持增加一个子检索条件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
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
            children: "condition"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向检索条件", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_retrieval_condition",
              children: "OH_Retrieval_Condition"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "subCondition"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向子检索条件实例的指针，可以是向量检索条件", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_retrieval_vectorcondition",
              children: "OH_Retrieval_VectorCondition"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "返回函数的执行状态。执行成功返回AIP_OK。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "操作成功"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1021200009"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "条件数量超过上限1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1021200010"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无效参数"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参见："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_retrieval_condition",
        children: "OH_Retrieval_Condition"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_retrieval_subcondition",
        children: "OH_Retrieval_SubCondition"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_retrieval_vectorcondition",
        children: "OH_Retrieval_VectorCondition"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-module/dataaugmentation-capi-aip/dataaugmentation-capi-aip#oh_aip_errcode-1",
        children: "OH_Aip_ErrCode"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_retrieval_createcondition",
      children: "OH_Retrieval_CreateCondition()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_Retrieval_Condition* OH_Retrieval_CreateCondition ()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建检索条件，作为检索接口的入参。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["函数执行成功时，返回指向检索条件", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_retrieval_condition",
        children: "OH_Retrieval_Condition"
      }), "实例的指针。当函数执行失败时，该指针为空指针。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参见："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_retrieval_condition",
        children: "OH_Retrieval_Condition"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_retrieval_createconfig",
      children: "OH_Retrieval_CreateConfig()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_Retrieval_Config* OH_Retrieval_CreateConfig ()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取检索器配置。用于初始化检索器。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["函数执行成功时，返回指向检索器配置", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_retrieval_config",
        children: "OH_Retrieval_Config"
      }), "实例的指针。当函数执行失败时，该指针为空指针。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参见："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_retrieval_config",
        children: "OH_Retrieval_Config"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-module/dataaugmentation-capi-aip/dataaugmentation-capi-aip#oh_aip_errcode-1",
        children: "OH_Aip_ErrCode"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_retrieval_createdbconfig",
      children: "OH_Retrieval_CreateDbConfig()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_Retrieval_DbConfig* OH_Retrieval_CreateDbConfig ()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建一个数据库相关配置项。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["返回指向", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_retrieval_dbconfig",
        children: "OH_Retrieval_DbConfig"
      }), "实例的指针。当函数执行失败时，该指针为空指针。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参见："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_retrieval_dbconfig",
        children: "OH_Retrieval_DbConfig"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-module/dataaugmentation-capi-aip/dataaugmentation-capi-aip#oh_aip_errcode-1",
        children: "OH_Aip_ErrCode"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_retrieval_createquery",
      children: "OH_Retrieval_CreateQuery()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_Retrieval_Query* OH_Retrieval_CreateQuery ()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建检索词，作为检索接口的入参。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["函数执行成功时，返回指向", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_retrieval_query",
        children: "OH_Retrieval_Query"
      }), "实例的指针。当函数执行失败时，该指针为空指针。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参见："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_retrieval_query",
        children: "OH_Retrieval_Query"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_retrieval_createretriever",
      children: "OH_Retrieval_CreateRetriever()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_Retrieval_CreateRetriever (const OH_Retrieval_Config * config, OH_Retrieval_Retriever ** retriever )\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "读取检索配置，初始化检索器。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
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
            children: "config"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建检索器时，需要输入检索器的配置项", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_retrieval_config",
              children: "OH_Retrieval_Config"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "retriever"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回指向检索器", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_retrieval_retriever",
              children: "OH_Retrieval_Retriever"
            }), "实例的指针。"]
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
      children: "返回函数的执行状态。执行成功返回AIP_OK。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "操作成功"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1021200010"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无效参数"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参见："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_retrieval_retriever",
        children: "OH_Retrieval_Retriever"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_retrieval_config",
        children: "OH_Retrieval_Config"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-module/dataaugmentation-capi-aip/dataaugmentation-capi-aip#oh_aip_errcode-1",
        children: "OH_Aip_ErrCode"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_retrieval_createvectorcondition",
      children: "OH_Retrieval_CreateVectorCondition()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_Retrieval_VectorCondition* OH_Retrieval_CreateVectorCondition ()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建向量检索条件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["函数执行成功时，返回指向检索条件", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_retrieval_vectorcondition",
        children: "OH_Retrieval_VectorCondition"
      }), "实例的指针。当函数执行失败时，该指针为空指针。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参见："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_retrieval_vectorcondition",
        children: "OH_Retrieval_VectorCondition"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_retrieval_destroycondition",
      children: "OH_Retrieval_DestroyCondition()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_Retrieval_DestroyCondition (OH_Retrieval_Condition * condition)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["销毁通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_retrieval_createcondition",
        children: "OH_Retrieval_CreateCondition"
      }), "获得的检索条件。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
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
            children: "condition"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向检索条件", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_retrieval_condition",
              children: "OH_Retrieval_Condition"
            }), "的指针。"]
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
      children: "返回函数的执行状态。执行成功返回AIP_OK。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "操作成功"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1021200010"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无效参数"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参见："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_retrieval_condition",
        children: "OH_Retrieval_Condition"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-module/dataaugmentation-capi-aip/dataaugmentation-capi-aip#oh_aip_errcode-1",
        children: "OH_Aip_ErrCode"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_retrieval_createcondition",
        children: "OH_Retrieval_CreateCondition"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_retrieval_destroyconfig",
      children: "OH_Retrieval_DestroyConfig()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_Retrieval_DestroyConfig (OH_Retrieval_Config * config)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "销毁通过OH_Retriever_CreateConfig获得的检索配置。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
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
            children: "config"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向检索配置", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_retrieval_config",
              children: "OH_Retrieval_Config"
            }), "的指针。"]
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
      children: "返回函数的执行状态。执行成功返回AIP_OK。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "操作成功"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1021200010"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无效参数"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参见："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_retrieval_config",
        children: "OH_Retrieval_Config"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-module/dataaugmentation-capi-aip/dataaugmentation-capi-aip#oh_aip_errcode-1",
        children: "OH_Aip_ErrCode"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_retrieval_createconfig",
        children: "OH_Retrieval_CreateConfig"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_retrieval_destroydbconfig",
      children: "OH_Retrieval_DestroyDbConfig()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_Retrieval_DestroyDbConfig (OH_Retrieval_DbConfig * dbConfig)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["销毁", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_retrieval_createdbconfig",
        children: "OH_Retrieval_CreateDbConfig"
      }), "创建的", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_retrieval_dbconfig",
        children: "OH_Retrieval_DbConfig"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
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
            children: "dbConfig"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_retrieval_dbconfig",
              children: "OH_Retrieval_DbConfig"
            }), "实例的指针。"]
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
      children: "返回函数的执行状态。执行成功返回AIP_OK。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "操作成功"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1021200010"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无效参数"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参见："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_retrieval_dbconfig",
        children: "OH_Retrieval_DbConfig"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-module/dataaugmentation-capi-aip/dataaugmentation-capi-aip#oh_aip_errcode-1",
        children: "OH_Aip_ErrCode"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_retrieval_createdbconfig",
        children: "OH_Retrieval_CreateDbConfig"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_retrieval_destroyquery",
      children: "OH_Retrieval_DestroyQuery()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_Retrieval_DestroyQuery (OH_Retrieval_Query * query)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["销毁通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_retrieval_createquery",
        children: "OH_Retrieval_CreateQuery"
      }), "获得的检索词。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
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
            children: "query"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向检索词", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_retrieval_query",
              children: "OH_Retrieval_Query"
            }), "的指针。"]
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
      children: "返回函数的执行状态。执行成功返回AIP_OK。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "操作成功"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1021200010"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无效参数"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参见："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_retrieval_query",
        children: "OH_Retrieval_Query"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-module/dataaugmentation-capi-aip/dataaugmentation-capi-aip#oh_aip_errcode-1",
        children: "OH_Aip_ErrCode"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_retrieval_createquery",
        children: "OH_Retrieval_CreateQuery"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_retrieval_destroyrecord",
      children: "OH_Retrieval_DestroyRecord()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_Retrieval_DestroyRecord (OH_Retrieval_Record * record)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["销毁通过检索接口", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_retrieval_retrieve",
        children: "OH_Retrieval_Retrieve"
      }), "获得的检索结果。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
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
            children: "record"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向检索结果", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_retrieval_record",
              children: "OH_Retrieval_Record"
            }), "的指针。"]
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
      children: "返回函数的执行状态。执行成功返回AIP_OK。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "操作成功"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1021200010"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无效参数"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参见："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_retrieval_record",
        children: "OH_Retrieval_Record"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-module/dataaugmentation-capi-aip/dataaugmentation-capi-aip#oh_aip_errcode-1",
        children: "OH_Aip_ErrCode"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_retrieval_retrieve",
        children: "OH_Retrieval_Retrieve"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_retrieval_destroyretriever",
      children: "OH_Retrieval_DestroyRetriever()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_Retrieval_DestroyRetriever (OH_Retrieval_Retriever * retriever)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["销毁通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_retrieval_createretriever",
        children: "OH_Retrieval_CreateRetriever"
      }), "获得的检索器。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
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
            children: "retriever"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向检索器", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_retrieval_retriever",
              children: "OH_Retrieval_Retriever"
            }), "的指针。"]
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
      children: "返回函数的执行状态。执行成功返回AIP_OK。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "操作成功"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1021200010"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无效参数"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参见："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_retrieval_retriever",
        children: "OH_Retrieval_Retriever"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-module/dataaugmentation-capi-aip/dataaugmentation-capi-aip#oh_aip_errcode-1",
        children: "OH_Aip_ErrCode"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_retrieval_createretriever",
        children: "OH_Retrieval_CreateRetriever"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_retrieval_destroysubcondition",
      children: "OH_Retrieval_DestroySubCondition()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_Retrieval_DestroySubCondition (OH_Retrieval_SubCondition * condition)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["销毁通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_retrieval_subcondition",
        children: "OH_Retrieval_SubCondition"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
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
            children: "condition"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向检索条件", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_retrieval_subcondition",
              children: "OH_Retrieval_SubCondition"
            }), "的指针。"]
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
      children: "返回函数的执行状态。执行成功返回AIP_OK。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "操作成功"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1021200010"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无效参数"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参见："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_retrieval_subcondition",
        children: "OH_Retrieval_SubCondition"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-module/dataaugmentation-capi-aip/dataaugmentation-capi-aip#oh_aip_errcode-1",
        children: "OH_Aip_ErrCode"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_retrieval_destroyvectorcondition",
      children: "OH_Retrieval_DestroyVectorCondition()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_Retrieval_DestroyVectorCondition (OH_Retrieval_VectorCondition * condition)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["销毁通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_retrieval_createvectorcondition",
        children: "OH_Retrieval_CreateVectorCondition"
      }), "获得的检索条件。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
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
            children: "condition"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向向量检索条件", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_retrieval_vectorcondition",
              children: "OH_Retrieval_VectorCondition"
            }), "的指针。"]
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
      children: "返回函数的执行状态。执行成功返回AIP_OK。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "操作成功"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1021200010"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无效参数"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参见："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_retrieval_vectorcondition",
        children: "OH_Retrieval_VectorCondition"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-module/dataaugmentation-capi-aip/dataaugmentation-capi-aip#oh_aip_errcode-1",
        children: "OH_Aip_ErrCode"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_retrieval_createvectorcondition",
        children: "OH_Retrieval_CreateVectorCondition"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_retrieval_getitemsize",
      children: "OH_Retrieval_GetItemSize()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_Retrieval_GetItemSize (const OH_Retrieval_RecordItem * items, const char * fieldName, size_t * size )\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["获取数据库bucket数组", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_retrieval_recorditem",
        children: "OH_Retrieval_RecordItem"
      }), "中指定字段的值的size。size值包含结束符。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
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
            children: "items"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向数据库bucket数组", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_retrieval_recorditem",
              children: "OH_Retrieval_RecordItem"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fieldName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数据库bucket的字段名。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数据库bucket相应字段的值的大小。"
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
      children: "返回函数的执行状态。执行成功返回AIP_OK。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "操作成功"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1021200007"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不存在该字段"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1021200010"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无效参数"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参见："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_retrieval_recorditem",
        children: "OH_Retrieval_RecordItem"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-module/dataaugmentation-capi-aip/dataaugmentation-capi-aip#oh_aip_errcode-1",
        children: "OH_Aip_ErrCode"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_retrieval_getitemtext",
      children: "OH_Retrieval_GetItemText()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_Retrieval_GetItemText (const OH_Retrieval_RecordItem * items, const char * fieldName, char * value, size_t size )\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["获取数据库bucket数组", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_retrieval_recorditem",
        children: "OH_Retrieval_RecordItem"
      }), "中指定字段的值。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "items"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向数据库bucket数组", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_retrieval_recorditem",
              children: "OH_Retrieval_RecordItem"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fieldName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数据库bucket的字段名。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数据库bucket相应字段的值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数据库bucket相应字段的值的大小。"
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
      children: "返回函数的执行状态。执行成功返回AIP_OK。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "操作成功"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1021200007"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不存在该字段"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1021200010"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无效参数"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参见："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_retrieval_recorditem",
        children: "OH_Retrieval_RecordItem"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-module/dataaugmentation-capi-aip/dataaugmentation-capi-aip#oh_aip_errcode-1",
        children: "OH_Aip_ErrCode"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_retrieval_getrecorditem",
      children: "OH_Retrieval_GetRecordItem()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_Retrieval_GetRecordItem (const OH_Retrieval_Record * record, uint32_t index, const OH_Retrieval_RecordItem ** item )\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["获取检索结果", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_retrieval_record",
        children: "OH_Retrieval_Record"
      }), "中的数据库bucket数组。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
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
            children: "record"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向检索结果", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_retrieval_record",
              children: "OH_Retrieval_Record"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "index"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "record数组的索引值。最大值为999。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "item"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向record数组中单个元素", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_retrieval_recorditem",
              children: "OH_Retrieval_RecordItem"
            }), "的指针。"]
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
      children: "返回函数的执行状态。执行成功返回AIP_OK。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "操作成功"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1021200006"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "下标越界"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1021200010"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无效参数"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参见："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_retrieval_record",
        children: "OH_Retrieval_Record"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_retrieval_recorditem",
        children: "OH_Retrieval_RecordItem"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-module/dataaugmentation-capi-aip/dataaugmentation-capi-aip#oh_aip_errcode-1",
        children: "OH_Aip_ErrCode"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_retrieval_getrecordlength",
      children: "OH_Retrieval_GetRecordLength()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_Retrieval_GetRecordLength (const OH_Retrieval_Record * record, uint32_t * length )\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["获取检索结果", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_retrieval_record",
        children: "OH_Retrieval_Record"
      }), "中的数据库bucket数组。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
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
            children: "record"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向检索结果", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_retrieval_record",
              children: "OH_Retrieval_Record"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "length"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数据库bucket数组的长度。"
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
      children: "返回函数的执行状态。执行成功返回AIP_OK。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "操作成功"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1021200010"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无效参数"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参见："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_retrieval_record",
        children: "OH_Retrieval_Record"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-module/dataaugmentation-capi-aip/dataaugmentation-capi-aip#oh_aip_errcode-1",
        children: "OH_Aip_ErrCode"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_retrieval_retrieve",
      children: "OH_Retrieval_Retrieve()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_Retrieval_Retrieve (const OH_Retrieval_Retriever * retriever, const OH_Retrieval_Query * query, const OH_Retrieval_Condition * condition, void * context, const OH_Retrieval_Callback * callback )\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "执行检索。获得检索器句柄后，输入检索查询词，根据检索条件执行检索，得到检索结果。接口执行时，会在“/data/storage/el2/base/cache”路径下生成临时存储缓存文件。当设备类型为phone、tablet时，该接口仅支持倒排，不支持向量。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "retriever"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["检索器句柄，指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_retrieval_retriever",
              children: "OH_Retrieval_Retriever"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "query"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["检索的查询词，指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_retrieval_query",
              children: "OH_Retrieval_Query"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "condition"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["检索条件，指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_retrieval_condition",
              children: "OH_Retrieval_Condition"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示用户提供的上下文数据，这些数据将在后续调用函数时传递回函数中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_retrieval_callback",
              children: "OH_Retrieval_Callback"
            }), "实例的指针。"]
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
      children: "返回函数的执行状态。执行成功返回AIP_OK。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "操作成功"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1021200005"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "执行报错"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1021200010"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无效参数"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1021200012"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无法生成嵌入向量"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参见："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_retrieval_retriever",
        children: "OH_Retrieval_Retriever"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_retrieval_query",
        children: "OH_Retrieval_Query"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_retrieval_condition",
        children: "OH_Retrieval_Condition"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_retrieval_callback",
        children: "OH_Retrieval_Callback"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-module/dataaugmentation-capi-aip/dataaugmentation-capi-aip#oh_aip_errcode-1",
        children: "OH_Aip_ErrCode"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_retrieval_setdbconfig",
      children: "OH_Retrieval_SetDbConfig()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_Retrieval_SetDbConfig (OH_Retrieval_DbConfig * dbConfig, OH_Rdb_ConfigV2 * rdbConfig )\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_retrieval_dbconfig",
        children: "OH_Retrieval_DbConfig"
      }), "中设置数据库配置。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
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
            children: "dbConfig"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_retrieval_dbconfig",
              children: "OH_Retrieval_DbConfig"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "rdbConfig"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向数据库配置实例的指针，可能是", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-rdb-configv2/capi-rdb-oh-rdb-configv2",
              children: "OH_Rdb_ConfigV2"
            }), "实例。"]
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
      children: "返回函数的执行状态。执行成功返回AIP_OK。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "操作成功"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1021200010"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无效参数"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参见："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_retrieval_dbconfig",
        children: "OH_Retrieval_DbConfig"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-rdb-configv2/capi-rdb-oh-rdb-configv2",
        children: "OH_Rdb_ConfigV2"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-module/dataaugmentation-capi-aip/dataaugmentation-capi-aip#oh_aip_errcode-1",
        children: "OH_Aip_ErrCode"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_retrieval_setoriginalquestion",
      children: "OH_Retrieval_SetOriginalQuestion()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_Retrieval_SetOriginalQuestion (OH_Retrieval_Query * query, const char * question )\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_retrieval_query",
        children: "OH_Retrieval_Query"
      }), "中的检索词。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
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
            children: "query"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向检索词", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_retrieval_query",
              children: "OH_Retrieval_Query"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "question"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "纯文本的问题。"
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
      children: "返回函数的执行状态。执行成功返回AIP_OK。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "操作成功"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1021200008"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数组超过最大长度512字节"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1021200010"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无效参数"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参见："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_retrieval_query",
        children: "OH_Retrieval_Query"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-module/dataaugmentation-capi-aip/dataaugmentation-capi-aip#oh_aip_errcode-1",
        children: "OH_Aip_ErrCode"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_retrieval_setsimilaritythreshold",
      children: "OH_Retrieval_SetSimilarityThreshold()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_Retrieval_SetSimilarityThreshold (OH_Retrieval_VectorCondition * condition, double threshold )\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在检索条件中，设置向量检索的相似度阈值。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
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
            children: "condition"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向检索条件", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_retrieval_vectorcondition",
              children: "OH_Retrieval_VectorCondition"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "threshold"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "向量检索的余弦相似度阈值，取值范围[0, 1]。"
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
      children: "返回函数的执行状态。执行成功返回AIP_OK。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "操作成功"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1021200010"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无效参数"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参见："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_retrieval_vectorcondition",
        children: "OH_Retrieval_VectorCondition"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-module/dataaugmentation-capi-aip/dataaugmentation-capi-aip#oh_aip_errcode-1",
        children: "OH_Aip_ErrCode"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_retrieval_setvectorrecalllimit",
      children: "OH_Retrieval_SetVectorRecallLimit()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_Retrieval_SetVectorRecallLimit (OH_Retrieval_VectorCondition * condition, uint32_t limit )\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在检索条件中，设置向量检索结果数量上限。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
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
            children: "condition"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向检索条件", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_retrieval_vectorcondition",
              children: "OH_Retrieval_VectorCondition"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "limit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "向量检索结果的数量上限，最大值1000。"
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
      children: "返回函数的执行状态。执行成功返回AIP_OK。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "操作成功"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1021200010"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无效参数"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参见："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_retrieval_vectorcondition",
        children: "OH_Retrieval_VectorCondition"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-module/dataaugmentation-capi-aip/dataaugmentation-capi-aip#oh_aip_errcode-1",
        children: "OH_Aip_ErrCode"
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