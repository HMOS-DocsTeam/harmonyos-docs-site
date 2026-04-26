"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["53507"], {
156982(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_data_augmentation_api_dataaugmentation_arkts_dataaugmentation_retrieval_api_dataaugmentation_retrieval_api_md_d3d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-data-augmentation-api-dataaugmentation-arkts-dataaugmentation-retrieval-api-dataaugmentation-retrieval-api-md-d3d.json
var site_docs_ref_data_augmentation_api_dataaugmentation_arkts_dataaugmentation_retrieval_api_dataaugmentation_retrieval_api_md_d3d_namespaceObject = JSON.parse('{"id":"data-augmentation-api/dataaugmentation-arkts/dataaugmentation-retrieval-api/dataaugmentation-retrieval-api","title":"retrieval（智慧化数据平台）","description":"智慧数据平台（ArkData Intelligence Platform，AIP）提供端侧的数据智慧化能力，实现数据和AI智能在端侧闭环。作为端侧智慧化能力底座，将支持以下能力：","source":"@site/docs-ref/data-augmentation-api/dataaugmentation-arkts/dataaugmentation-retrieval-api/dataaugmentation-retrieval-api.md","sourceDirName":"data-augmentation-api/dataaugmentation-arkts/dataaugmentation-retrieval-api","slug":"/data-augmentation-api/dataaugmentation-arkts/dataaugmentation-retrieval-api/dataaugmentation-retrieval-api","permalink":"/harmonyos-docs-site/ref/data-augmentation-api/dataaugmentation-arkts/dataaugmentation-retrieval-api/dataaugmentation-retrieval-api","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"retrieval（智慧化数据平台）","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataaugmentation-retrieval-api","kit":"应用框架","last_updated":"2026-04-22","slug":"dataaugmentation-retrieval-api"},"sidebar":"ref","previous":{"title":"rag（检索增强生成）","permalink":"/harmonyos-docs-site/ref/data-augmentation-api/dataaugmentation-arkts/dataaugmentation-rag-api/dataaugmentation-rag-api"},"next":{"title":"knowledgeProcessor（知识加工）","permalink":"/harmonyos-docs-site/ref/data-augmentation-api/dataaugmentation-arkts/dataaugmentation-knowledgeprocessor-api/dataaugmentation-knowledgeprocessor-api"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/data-augmentation-api/dataaugmentation-arkts/dataaugmentation-retrieval-api/dataaugmentation-retrieval-api.md


const frontMatter = {
	title: 'retrieval（智慧化数据平台）',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataaugmentation-retrieval-api',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'dataaugmentation-retrieval-api'
};
const contentTitle = 'retrieval（智慧化数据平台）';

const assets = {

};



const toc = [{
  "value": "导入模块",
  "id": "导入模块",
  "level": 2
}, {
  "value": "getRetriever",
  "id": "getretriever",
  "level": 2
}, {
  "value": "RetrievalConfig",
  "id": "retrievalconfig",
  "level": 2
}, {
  "value": "ChannelConfig",
  "id": "channelconfig",
  "level": 2
}, {
  "value": "ChannelType",
  "id": "channeltype",
  "level": 2
}, {
  "value": "DbConfig",
  "id": "dbconfig",
  "level": 2
}, {
  "value": "Retriever",
  "id": "retriever",
  "level": 2
}, {
  "value": "retrieveRdb",
  "id": "retrieverdb",
  "level": 3
}, {
  "value": "RetrievalCondition",
  "id": "retrievalcondition",
  "level": 2
}, {
  "value": "ExplanationConfig",
  "id": "explanationconfig",
  "level": 2
}, {
  "value": "Recallcondition",
  "id": "recallcondition",
  "level": 2
}, {
  "value": "InvertedIndexRecallCondition",
  "id": "invertedindexrecallcondition",
  "level": 2
}, {
  "value": "ColumnName",
  "id": "columnname",
  "level": 2
}, {
  "value": "RecallName",
  "id": "recallname",
  "level": 2
}, {
  "value": "FilterInfo",
  "id": "filterinfo",
  "level": 2
}, {
  "value": "FilterValue",
  "id": "filtervalue",
  "level": 2
}, {
  "value": "FilterRange",
  "id": "filterrange",
  "level": 2
}, {
  "value": "Operator",
  "id": "operator",
  "level": 2
}, {
  "value": "InvertedIndexStrategy",
  "id": "invertedindexstrategy",
  "level": 2
}, {
  "value": "Bm25Strategy",
  "id": "bm25strategy",
  "level": 2
}, {
  "value": "ExactMatchingStrategy",
  "id": "exactmatchingstrategy",
  "level": 2
}, {
  "value": "ProximityStrategy",
  "id": "proximitystrategy",
  "level": 2
}, {
  "value": "VectorRecallCondition",
  "id": "vectorrecallcondition",
  "level": 2
}, {
  "value": "VectorQuery",
  "id": "vectorquery",
  "level": 2
}, {
  "value": "RerankMethod",
  "id": "rerankmethod",
  "level": 2
}, {
  "value": "RerankType",
  "id": "reranktype",
  "level": 2
}, {
  "value": "RerankParameter",
  "id": "rerankparameter",
  "level": 2
}, {
  "value": "InvertedIndexRerankParameter",
  "id": "invertedindexrerankparameter",
  "level": 2
}, {
  "value": "VectorRerankParameter",
  "id": "vectorrerankparameter",
  "level": 2
}, {
  "value": "RdbRecords",
  "id": "rdbrecords",
  "level": 2
}, {
  "value": "ItemInfo",
  "id": "iteminfo",
  "level": 2
}, {
  "value": "RecallScore",
  "id": "recallscore",
  "level": 2
}, {
  "value": "SimilarityLevel",
  "id": "similaritylevel",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    column: "column",
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
        id: "retrieval智慧化数据平台",
        children: "retrieval（智慧化数据平台）"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "智慧数据平台（ArkData Intelligence Platform，AIP）提供端侧的数据智慧化能力，实现数据和AI智能在端侧闭环。作为端侧智慧化能力底座，将支持以下能力："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "多模态嵌入模型：使用嵌入模型（Embedding Model）对多模态数据生成向量表征，将文本、图片等数据映射到同一向量空间，支撑基于语义的多模态知识检索。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "多模态数据存储：支持端侧向量、倒排索引等多模态数据存储，避免将原始数据发送到服务器进行处理，减少了数据泄露的风险。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "知识检索：逐步构建语义索引、知识图谱、召回、重排等功能，支持用户知识的语义化检索。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "知识生成与整理：基于用户文档、消息、电子邮件、照片、视频、日历事件、屏幕上下文等数据，支持高效数据整理与知识生成，实现数据到知识的转换。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "起始版本："
            })
          }), " 6.0.0(20)"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "导入模块",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { retrieval } from '@kit.DataAugmentationKit';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "getretriever",
      children: "getRetriever"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getRetriever(config: RetrievalConfig): Promise<Retriever>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取检索器，进行多路检索召回。使用promise异步回调。"
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
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "config"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#retrievalconfig",
              children: "RetrievalConfig"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "检索器的配置信息。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Promise<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#retriever",
              children: "Retriever"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise对象，返回检索器对象。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { retrieval } from '@kit.DataAugmentationKit';\nimport { relationalStore } from '@kit.ArkData';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n@Entry\n@Component\nstruct Page {\n  async retrieve() {\n    let vectorDBConfig:retrieval.DbConfig = {\n      name:\"vector_store_test.db\",\n      securityLevel:relationalStore.SecurityLevel.S3\n    }\n\n    let invidxDBConfig:retrieval.DbConfig = {\n      name:\"invidx_store_test.db\",\n      securityLevel:relationalStore.SecurityLevel.S3\n    }\n    let context: Context | undefined = this.getUIContext().getHostContext();\n    if (context == undefined) {\n      console.info(\"getHostContext failed.\");\n      return;\n    }\n    let channelConfigVector:retrieval.ChannelConfig = {\n      channelType:retrieval.ChannelType.VECTOR_DATABASE,\n      context:context,\n      dbConfig:vectorDBConfig\n    }\n\n    let channelConfigInvIdx:retrieval.ChannelConfig = {\n      channelType:retrieval.ChannelType.INVERTED_INDEX_DATABASE,\n      context:context,\n      dbConfig:invidxDBConfig\n    }\n\n    let retrievalConfig:retrieval.RetrievalConfig = {\n      channelConfigs:[channelConfigInvIdx, channelConfigVector]\n    }\n\n    let globalRetriever:retrieval.Retriever | undefined;\n    // 获取检索器\n    await retrieval.getRetriever(retrievalConfig)\n      .then((retriever:retrieval.Retriever) => {\n        globalRetriever = retriever;\n        console.info(\"globalRetriever is success\");\n      })\n      .catch((err:BusinessError) => {\n        globalRetriever = undefined;\n        console.error(\"Failed to get Retriever and code is \" + err.code);\n      })\n  }\n\n  build() {\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "retrievalconfig",
      children: "RetrievalConfig"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "管理召回的配置"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "channelConfigs"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Array<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#channelconfig",
              children: "ChannelConfig"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不同检索回路的配置信息数组。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "channelconfig",
      children: "ChannelConfig"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "管理每个检索回路的配置信息。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "channelType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#channeltype",
              children: "ChannelType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前检索回路的数据库类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-basecontext/js-apis-inner-application-basecontext",
              children: "common.BaseContext"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用的上下文。  FA模型的应用Context定义。  Stage模型的应用Context定义。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dbConfig"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#dbconfig",
              children: "DbConfig"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前检索回路的数据库配置。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "channeltype",
      children: "ChannelType"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "数据库类型枚举。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VECTOR_DATABASE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "向量数据库。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "INVERTED_INDEX_DATABASE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "倒排数据库。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "dbconfig",
      children: "DbConfig"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type DbConfig = relationalStore.StoreConfig"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "数据库配置。"
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
              href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-i/arkts-apis-data-relationalstore-i#storeconfig",
              children: "relationalStore.StoreConfig"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数据库配置。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "retriever",
      children: "Retriever"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检索器，用于多路检索召回。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["下列接口都需先使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#getretriever",
        children: "retrieval.getRetriever"
      }), "获取到检索器实例，再通过此实例调用对应接口。"]
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
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "retrieverdb",
      children: "retrieveRdb"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "retrieveRdb(query: string, condition: RetrievalCondition): Promise<RdbRecords>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "给定检索条件（包含查询词分词、召回条件），从一个关系型数据库检索召回满足条件的数据，使用Promise异步回调。"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "query"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前检索的查询词,长度上限为1000字节。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "condition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#retrievalcondition",
              children: "RetrievalCondition"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "检索条件。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Promise<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rdbrecords",
              children: "RdbRecords"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise对象，返回检索召回数据。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/data-augmentation-api/dataaugmentation-arkts/dataaugmentation-error-code/dataaugmentation-error-code",
        children: "ArkTS API错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/data-augmentation-api/dataaugmentation-arkts/dataaugmentation-error-code/dataaugmentation-error-code#section1021200001-%E6%95%B0%E6%8D%AE%E5%BA%93%E6%96%87%E4%BB%B6%E6%8D%9F%E5%9D%8F",
              children: "1021200001"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The database is corrupted."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/data-augmentation-api/dataaugmentation-arkts/dataaugmentation-error-code/dataaugmentation-error-code#section1021200002-%E6%95%B0%E6%8D%AE%E5%BA%93%E6%88%96%E4%BA%8B%E5%8A%A1%E5%85%B3%E9%97%AD",
              children: "1021200002"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The database is closed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/data-augmentation-api/dataaugmentation-arkts/dataaugmentation-error-code/dataaugmentation-error-code#section1021200003-%E6%95%B0%E6%8D%AE%E5%BA%93busy",
              children: "1021200003"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The database is busy."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/data-augmentation-api/dataaugmentation-arkts/dataaugmentation-error-code/dataaugmentation-error-code#section1021200004-%E6%95%B0%E6%8D%AE%E5%BA%93%E5%86%85%E5%AD%98%E4%B8%8D%E8%B6%B3",
              children: "1021200004"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The database is out of memory."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/data-augmentation-api/dataaugmentation-arkts/dataaugmentation-error-code/dataaugmentation-error-code#section1021200100-sqlite-%E9%80%9A%E7%94%A8%E9%94%99%E8%AF%AF",
              children: "1021200100"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: Generic error."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/data-augmentation-api/dataaugmentation-arkts/dataaugmentation-error-code/dataaugmentation-error-code#section1021200101-sqlite%E8%AE%BF%E9%97%AE%E6%9D%83%E9%99%90%E8%A2%AB%E6%8B%92%E7%BB%9D",
              children: "1021200101"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: Access permission denied."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/data-augmentation-api/dataaugmentation-arkts/dataaugmentation-error-code/dataaugmentation-error-code#section1021200102-sqlite%E6%95%B0%E6%8D%AE%E5%BA%93%E6%96%87%E4%BB%B6%E5%B7%B2%E9%94%81%E5%AE%9A",
              children: "1021200102"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: The database file is locked."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/data-augmentation-api/dataaugmentation-arkts/dataaugmentation-error-code/dataaugmentation-error-code#section1021200103-sqlite%E5%8F%91%E7%94%9F%E4%BA%86%E6%9F%90%E7%A7%8D%E7%A3%81%E7%9B%98io%E9%94%99%E8%AF%AF",
              children: "1021200103"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: Some kind of disk I/O error occurred."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/data-augmentation-api/dataaugmentation-arkts/dataaugmentation-error-code/dataaugmentation-error-code#section1021200104-wal%E6%96%87%E4%BB%B6%E5%A4%A7%E5%B0%8F%E8%B6%85%E8%BF%87%E9%BB%98%E8%AE%A4%E4%B8%8A%E9%99%90",
              children: "1021200104"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: The WAL file size exceeds the default limit."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/data-augmentation-api/dataaugmentation-arkts/dataaugmentation-error-code/dataaugmentation-error-code#section1021200105-%E6%97%A0%E6%B3%95%E6%89%93%E5%BC%80%E6%95%B0%E6%8D%AE%E5%BA%93%E6%96%87%E4%BB%B6",
              children: "1021200105"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: Unable to open the database file."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/data-augmentation-api/dataaugmentation-arkts/dataaugmentation-error-code/dataaugmentation-error-code#section1021201000-retrieval-recall-error",
              children: "1021201000"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Retrieval: An error occurred during the reacall phase."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/data-augmentation-api/dataaugmentation-arkts/dataaugmentation-error-code/dataaugmentation-error-code#section1021201001-retrieval-re-ranking-error",
              children: "1021201001"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Retrieval: An error occurred during the re-ranking phase."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/data-augmentation-api/dataaugmentation-arkts/dataaugmentation-error-code/dataaugmentation-error-code#section1021201002-retrieval-numerical-parameter-out-of-range",
              children: "1021201002"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Retrieval: The value of the numerical parameter is outside the constrained range."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/data-augmentation-api/dataaugmentation-arkts/dataaugmentation-error-code/dataaugmentation-error-code#section1021201003-retrieval-invalid-primary-keys",
              children: "1021201003"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Retrieval: There are invalid primary keys."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/data-augmentation-api/dataaugmentation-arkts/dataaugmentation-error-code/dataaugmentation-error-code#section1021201004-retrieval-unsupport-composite-primary-key-in-re-ranking",
              children: "1021201004"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Retrieval: A re-ranking algorithm that does not support composite primary keys was used."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/data-augmentation-api/dataaugmentation-arkts/dataaugmentation-error-code/dataaugmentation-error-code#section1021201005-retrieval-empty-string-field",
              children: "1021201005"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Retrieval: There are fields with empty strings."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/data-augmentation-api/dataaugmentation-arkts/dataaugmentation-error-code/dataaugmentation-error-code#section1021201006-retrieval-illegal-filter-input",
              children: "1021201006"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Retrieval: The filter input is invalid."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/data-augmentation-api/dataaugmentation-arkts/dataaugmentation-error-code/dataaugmentation-error-code#section1021201007-retrieval-invalid-recall-field-name",
              children: "1021201007"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Retrieval: There are invalid recall names in RecallCondition."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/data-augmentation-api/dataaugmentation-arkts/dataaugmentation-error-code/dataaugmentation-error-code#section1021201008-retrieval-vector-similarity-threshold-too-high",
              children: "1021201008"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Retrieval: The vector similarity threshold in VectorQuery is higher than the tiered threshold in VectorRerankParameter."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/data-augmentation-api/dataaugmentation-arkts/dataaugmentation-error-code/dataaugmentation-error-code#section1021201009-retrieval-rerankmethod-parameters-do-not-match-the-channel-type",
              children: "1021201009"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Retrieval: RerankMethod parameters do not match the channel type."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/data-augmentation-api/dataaugmentation-arkts/dataaugmentation-error-code/dataaugmentation-error-code#section1021201010-retrieval-empty-parameter-value",
              children: "1021201010"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Retrieval: There exists a parameter value that should not be empty but is actually empty"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/data-augmentation-api/dataaugmentation-arkts/dataaugmentation-error-code/dataaugmentation-error-code#section1021200012-unable-to-generate-embeddings",
              children: "1021200012"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unable to generate embeddings."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { retrieval } from '@kit.DataAugmentationKit';\nimport { relationalStore } from '@kit.ArkData';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n@Entry\n@Component\nstruct Page {\n \nasync retrieve() {\n    let vectorDBConfig:retrieval.DbConfig = {\n      name:\"vector_test.db\",\n      securityLevel:relationalStore.SecurityLevel.S3\n    }\n\n    let invidxDBConfig:retrieval.DbConfig = {\n      name:\"files_test.db\",\n      securityLevel:relationalStore.SecurityLevel.S3\n    }\n    let context: Context | undefined = this.getUIContext().getHostContext();\n    if (context == undefined) {\n      console.info(\"getHostContext failed.\");\n      return;\n    }\n    let channelConfigVector:retrieval.ChannelConfig = {\n      channelType:retrieval.ChannelType.VECTOR_DATABASE,\n      context:context,\n      dbConfig:vectorDBConfig\n    }\n\n    let channelConfigInvIdx:retrieval.ChannelConfig = {\n      channelType:retrieval.ChannelType.INVERTED_INDEX_DATABASE,\n      context:context,\n      dbConfig:invidxDBConfig\n    }\n\n    let retrievalConfig:retrieval.RetrievalConfig = {\n      channelConfigs:[channelConfigInvIdx, channelConfigVector]\n    }\n\n    let globalRetriever:retrieval.Retriever | undefined;\n    await retrieval.getRetriever(retrievalConfig)\n      .then((retriever:retrieval.Retriever) => {\n        globalRetriever = retriever;\n        console.info(\"globalRetriever is success\");\n      })\n      .catch((err:BusinessError) => {\n        globalRetriever = undefined;\n        console.error(\"Failed to get Retriever and code is \" + err.code);\n      })\n\n    let fieldWeight:Record<string, number> = {\n      \"filename\":4.0\n    }\n\n    let fieldSlops:Record<string, number> = {\n      \"filename\":5\n    }\n\n    let bm25Strategy:retrieval.Bm25Strategy = {\n      bm25Weight:1.5,\n      columnWeight:fieldWeight\n    }\n\n    let exactStrategy:retrieval.ExactMatchingStrategy = {\n      exactMatchingWeight:1.2,\n      columnWeight:fieldWeight\n    }\n\n    let outOfOrderStrategy:retrieval.ProximityStrategy = {\n      proximityWeight:1.0,\n      columnWeight:fieldWeight,\n      columnSlops:fieldSlops\n    }\n\n    let invertedIndexStrategies:Array<retrieval.InvertedIndexStrategy> = [bm25Strategy, exactStrategy, outOfOrderStrategy]\n\n    let recallConditionInvIdx:retrieval.InvertedIndexRecallCondition ={\n      ftsTableName:\"files\",\n      primaryKey:[\"fileid\"],\n      fromClause:\"files\",\n      responseColumns:[\"fileid\", \"filename\", \"keywords\"],\n      deepSize:2,\n      invertedIndexStrategies:invertedIndexStrategies,\n      recallName:\"invIdxRecall\"\n    }\n\n    // 这里 floatArray 时输入的 query 的表征向量，根据实际情况需要修改\n    let floatArray = new Float32Array([0.006954, -0.079041, 0.046173, 0.157959, -0.017212, 0.037018, -0.072083, -0.028488, -0.099854, 0.044037, -0.008911, -0.063049, 0.035950, -0.105835, 0.057739, 0.060364, -0.062042, 0.044159, 0.143188, 0.123901, -0.069641, -0.061920, -0.086731, -0.092468, 0.092957, -0.027649, -0.005497, -0.039276, 0.017502, -0.046570, -0.115906, 0.081177, -0.153931, -0.040588, 0.123474, -0.099060, 0.062042, 0.026352, -0.041382, -0.099548, 0.071167, -0.120850, 0.082642, 0.026398, -0.035614, -0.008545, -0.076660, -0.031067, 0.192017, -0.052582, 0.005310, 0.052734, 0.199463, 0.075195, -0.070740, -0.035950, 0.073120, 0.089172, 0.075989, 0.003582, 0.050201, -0.012787, 0.016647, -0.053619, 0.001906, -0.060181, -0.068359, -0.114502, -0.045013, 0.004547, -0.004673, -0.148071, 0.126343, 0.019394, -0.063110, -0.055908, 0.071228, 0.002369, 0.041412, 0.126709, -0.053467, 0.127808, 0.055420, 0.206177, 0.002169, -0.001452, 0.095520, -0.042511, 0.099243, -0.164185, 0.093384, -0.014618, -0.129150, -0.238770, -0.085327, 0.051300, -0.020004, 0.010063, -0.084351, -0.003567, 0.064941, -0.205322, -0.158936, -0.074768, 0.104370, 0.197021, -0.080688, -0.066772, -0.036346, 0.034912, -0.019760, 0.110474, 0.128662, 0.094727, 0.024948, -0.033356, -0.081848, 0.054474, -0.065857, -0.156494, 0.002527, 0.097595, -0.027420, 0.039185, 0.063965, 0.220093, 0.029556, -0.115417]);\n\n    let vectorQuery:retrieval.VectorQuery = {\n      column:\"keywords\",\n      value:floatArray,\n      similarityThreshold:0.35\n    }\n\n    let recallConditionVector:retrieval.VectorRecallCondition = {\n      vectorQuery:vectorQuery,\n      fromClause:\"vector\",\n      primaryKey:[\"fileid\"],\n      responseColumns:[\"filename_text\", \"filename\", \"int64_value\", \"double_value\", \"bool_value\", \"blob_value\"],\n      recallName:\"vectorRecall\",\n      deepSize:2\n    }\n\n    let vectorWeights:Record<string, number> = {\n      \"vectorRecall\":0.5\n    }\n\n    let invidxWeights:Record<string, number> = {\n      \"vectorRecall\":0.5\n    }\n\n    let vectorRerankParameter:retrieval.VectorRerankParameter = {\n      vectorWeights:vectorWeights,\n      thresholds:[0.55, 0.45]\n    }\n\n    let invidxRerankParameter:retrieval.InvertedIndexRerankParameter = {\n      invertedIndexWeights:invidxWeights,\n    }\n\n    let parameters:Record<retrieval.ChannelType, retrieval.RerankParameter> = {\n      0:vectorRerankParameter,\n      1:invidxRerankParameter\n    }\n\n    let rerankMethod:retrieval.RerankMethod = {\n      rerankType:retrieval.RerankType.RRF,\n      parameters:parameters,\n      isSoftmaxNormalized:true\n    }\n\n    let groundTruthIds: Array<string> = ['1','2', '3'];\n    let explain : retrieval.ExplanationConfig ={\n      groundTruths: groundTruthIds\n    }\n\n    let retrievalCondition:retrieval.RetrievalCondition = {\n      rerankMethod:rerankMethod,\n      recallConditions:[recallConditionInvIdx, recallConditionVector],\n      resultCount:2,\n      explanation:explain\n    }\n\n\n    if (globalRetriever != undefined) {\n      let query:string = \"运动直播场景\";\n      // 执行检索\n      globalRetriever.retrieveRdb(query, retrievalCondition)\n        .then((rdbdata:retrieval.RdbRecords) => {\n\n          console.info(`#########  retrieval result ############`);\n          for (let i = 0; i < rdbdata.records.length; i++) {\n            console.info(` primaryKey is ${rdbdata.records[i].primaryKey}`);\n            Object.keys(rdbdata.records[i].columns).forEach((key) => {\n              if (rdbdata.records && rdbdata.records[i]) {\n                let value = rdbdata.records[i].columns[key];\n                console.info(`recall Scores Key: ${key}, Value: ${value}`);\n              }\n            });\n            console.info(`score is ${rdbdata.records[i].score}`);\n\n            Object.keys(rdbdata.records[i].recallScores).forEach((channelType) => {\n              if (rdbdata.records) {\n                let scores:Record<string, retrieval.RecallScore>  = rdbdata.records[i].recallScores[channelType];\n                Object.keys(scores).forEach((key)=>{\n                  let value = scores[key];\n                  console.info(`recall Scores channelType is ${channelType}, Key: ${key}, score: ${value.score}`);\n                });\n              }\n            });\n            console.info(\"recall Scores\", rdbdata.records[i].recallScores.toString());\n            Object.keys(rdbdata.records[i].features).forEach((key) => {\n              if (rdbdata.records && rdbdata.records[i]) {\n                let value = rdbdata.records[i].features[key];\n                console.info(`features Key: ${key}, Value: ${value}`);\n              }\n            });\n            console.info(`similarityLevel is ${rdbdata.records[i].similarityLevel}`);\n\n          }\n\n          console.info(`#########  missdGroundTruthsPrimaryKey ############`);\n          if(rdbdata.missedGroundTruths != undefined && rdbdata.missedGroundTruths.length != 0){\n            for (let i = 0; i < rdbdata.missedGroundTruths.length; i++) {\n              console.info(`missdGroundTruthsPrimaryKey is ${rdbdata.missedGroundTruths[i].primaryKey}`);\n              Object.keys(rdbdata.missedGroundTruths[i].columns).forEach((key) => {\n                if (rdbdata.missedGroundTruths && rdbdata.missedGroundTruths[i]) {\n                  let value = rdbdata.missedGroundTruths[i].columns[key];\n                  console.info(`missdGroundTruths recall Scores Key: ${key}, Value: ${value}`);\n                }\n              });\n              console.info(` missdGroundTruths score is ${rdbdata.missedGroundTruths[i].score}`);\n\n              Object.keys(rdbdata.missedGroundTruths[i].recallScores).forEach((channelType) => {\n                if (rdbdata.missedGroundTruths) {\n                  let scores:Record<string, retrieval.RecallScore>  = rdbdata.missedGroundTruths[i].recallScores[channelType];\n                  Object.keys(scores).forEach((key)=>{\n                    let value = scores[key];\n                    console.info(`missdGroundTruths recall Scores channelType is ${channelType}, Key: ${key}, score: ${value.score}`);\n                  });\n                }\n              });\n              console.info(\"missdGroundTruths recall Scores\", rdbdata.missedGroundTruths[i].recallScores.toString());\n              Object.keys(rdbdata.missedGroundTruths[i].features).forEach((key) => {\n                if (rdbdata.missedGroundTruths && rdbdata.missedGroundTruths[i]) {\n                  let value = rdbdata.missedGroundTruths[i].features[key];\n                  console.info(`missdGroundTruths features Key: ${key}, Value: ${value}`);\n                }\n              });\n              console.info(`missdGroundTruths similarityLevel is ${rdbdata.missedGroundTruths[i].similarityLevel}`);\n            }\n          }\n          console.info(\"retrieval success.\");\n        })\n        .catch((err:BusinessError) => {\n          console.error(\"Failure in retrieveRdb and code is \" + err.code);\n        })\n    }\n  }\n\n  build() {\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "retrievalcondition",
      children: "RetrievalCondition"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检索条件。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "recallConditions"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Array<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#recallcondition",
              children: "RecallCondition"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "召回的条件，数组中的每个元素对应一个召回操作。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "rerankMethod"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#rerankmethod",
              children: "RerankMethod"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["重排方法。其参数rerankType默认值为RRF算法，参数parameters默认值遵循", (0,jsx_runtime.jsx)(_components.a, {
              href: "#recallcondition",
              children: "RecallCondition"
            }), "中相应检索回路的参数。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "resultCount"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "重排后允许返回结果的最大数量。默认值为500。必须为正整数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "explanation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#explanationconfig",
              children: "ExplanationConfig"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "检索解释"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "explanationconfig",
      children: "ExplanationConfig"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检索解释配置"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "groundTruths"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Array<string>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "待解释的文档id，为字符串类型可取任意值。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "recallcondition",
      children: "Recallcondition"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type RecallCondition = InvertedIndexRecallCondition | VectorRecallCondition"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "召回操作的条件。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#invertedindexrecallcondition",
              children: "InvertedIndexRecallCondition"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "倒排召回条件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#vectorrecallcondition",
              children: "VectorRecallCondition"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "向量召回条件。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "invertedindexrecallcondition",
      children: "InvertedIndexRecallCondition"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "倒排检索的召回条件。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ftsTableName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "倒排检索所用的fts（Full-Text Search）数据表的名称，用于执行bm25函数输入。必须为存在的表名且不能为空字符串。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fromClause"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询目标索引名。不能为空字符串。  fromClause指定的表中包含filters中涉及的所有字段，允许两种输入：  1. 和ftsTableName填一样的值，则倒排检索将仅局限在倒排表内进行检索。  2. 提供完整select...join语句的方式，来连接fts表之外的元素表，作为检索表（注意，使用此模式时，该select语句中必须有rowid字段且必须是fts表的rowid。例如当ftsTableName为“files”时，存在一个元素表metadata需要参与filters过滤，则应如下定义fromClause：\"SELECT files.rowid as rowid, * FROM metadata JOIN files ON metadata.fileid = files.fileid\"。）"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "primaryKey"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Array<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#columnname",
              children: "ColumnName"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "召回结果主键字段，会作为召回字段之一，作为多路召回文档聚合依据。一次查询中所有召回操作的主键字段数量之和必须和相等且不能为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "responseColumns"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Array<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#columnname",
              children: "ColumnName"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["需要额外召回的字段集合。Array<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#columnname",
              children: "ColumnName"
            }), ">中", (0,jsx_runtime.jsx)(_components.a, {
              href: "#columnname",
              children: "ColumnName"
            }), "不得为空。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "invertedIndexStrategies"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Array<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#invertedindexstrategy",
              children: "InvertedIndexStrategy"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "召回策略列表，决定了倒排表应当如何打分。如果为空，则默认执行全表匹配。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "recallName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#recallname",
              children: "RecallName"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前检索回路的名称，作为重排阶段识别依据。默认值为随机字符串。构造方法中可以不构建该参数，如果有这个参数则值不能为空字符串。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "filters"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Array<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#filterinfo",
              children: "FilterInfo"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "附加的过滤条件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "deepSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "重排阶段包含当前召回过程的最大结果数。默认值500，必须为正整数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "columnname",
      children: "ColumnName"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type ColumnName = string"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "数据表的列名，类型为字符串。"
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
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数据表列名对应的类型，为字符串类型可取任意值。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "recallname",
      children: "RecallName"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type RecallName = string"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "召回回路名称，类型为字符串，用于给倒排和向量两路召回取名。例如出现两路向量召回时，给两路向量取名做区分。"
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
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "召回路径名称对应的类型，类型为字符串，可取任意值。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "filterinfo",
      children: "FilterInfo"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "过滤器信息。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "columns"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Array<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#columnname",
              children: "ColumnName"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被过滤的列名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "operator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#operator",
              children: "Operator"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "过滤条件中的操作算子。operator和filterValue、operator和filterRange至少有一组同时设置，过滤功能才能生效。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "filterValue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#filtervalue",
              children: "FilterValue"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "过滤条件中的过滤值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "filterRange"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#filterrange",
              children: "FilterRange"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "过滤条件中的过滤范围。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "filtervalue",
      children: "FilterValue"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type FilterValue = number | string | bigint"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "过滤条件中的过滤值。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FilterValue 收到的类型为number则过滤条件为数字类型"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FilterValue 收到的类型为string则过滤条件为字符串类型"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bigint"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FilterValue 收到的类型为bigint则过滤条件为int64类型"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "filterrange",
      children: "FilterRange"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "过滤条件中的过滤值范围。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "max"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "最大过滤值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "min"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "最小过滤值，取值需小于最大过滤值。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "operator",
      children: "Operator"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "过滤条件中的操作算子。column为数据库表中的字段名，filterValue为该字段的取值。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "操作"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OP_EQ = '='"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "<column>等于<filterValue>。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OP_NE = '!='"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "<column>不等于<filterValue>。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OP_LT = '<'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "<column>小于<filterValue>，其中<filterValue>为数值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OP_LE = '<='"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "<column>小于等于<filterValue>，其中<filterValue>为数值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OP_GT = '>'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "<column>大于<filterValue>，其中<filterValue>为数值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OP_GE = '>='"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "<column>大于等于<filterValue>，其中<filterValue>为数值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OP_IN = 'IN'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "<column> IN <filterValue>，其中<filterValue>为string且通过','组合。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OP_NOT_IN = 'NOT_IN'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "<column> NOT IN <filterValue>，其中<filterValue>为string且通过','拼接。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OP_BETWEEN = 'BETWEEN'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.column, {
              children: "的值在 <filterRange.min> 和 <filterRange.max>之间。"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OP_LIKE = 'LIKE'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过LIKE匹配含有<filterValue>的<column> ,其中<filterValue>为string。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OP_NOT_LIKE = 'NOT_LIKE'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "<column> NOT LIKE <filterValue>，其中<filterValue>为string。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "invertedindexstrategy",
      children: "InvertedIndexStrategy"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type InvertedIndexStrategy = Bm25Strategy | ExactMatchingStrategy | ProximityStrategy"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "倒排召回策略。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#bm25strategy",
              children: "Bm25Strategy"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "部分命中策略，检索目标只要命中查询词中的80%核心词就可以被召回，召回结果基于bm25算法进行评分，适用于对检索目标匹配要求较宽松的场景。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#exactmatchingstrategy",
              children: "ExactMatchingStrategy"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "精确命中策略，要求检索目标和查询词完全匹配才能被召回，适用于对检索目标匹配要求较严格的场景。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#proximitystrategy",
              children: "ProximityStrategy"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "乱序命中策略，查询词的分词结果在检索目标中不必严格按照原本顺序出现，各个分词结果在指定间隔内都出现即可召回，适用于对检索目标匹配要求中等的场景。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "bm25strategy",
      children: "Bm25Strategy"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "倒排检索所用的bm25策略。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bm25Weight"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "bm25策略的打分权重，在多种倒排策略并存的情况下，控制该策略对最终召回结果的评分影响程度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "columnWeight"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Record<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#columnname",
              children: "ColumnName"
            }), ", number>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定该策略运用于倒排表的哪些字段，以及这些字段对应的权重（用于控制字段匹配情况对最终结果的影响程度）  如果字段为空，则默认该策略运用于倒排表的全部字段，会默认增加1个配置，字段名为倒排表名，权重值为1.0。  如果不为空，则字段名不为空字符串，权重值为非负数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exactmatchingstrategy",
      children: "ExactMatchingStrategy"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "倒排检索所用的精确场景匹配策略。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "exactMatchingWeight"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "精确场景匹配策略的打分权重，在多种倒排策略并存的情况下，控制该策略对最终召回结果的评分影响程度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "columnWeight"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Record<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#columnname",
              children: "ColumnName"
            }), ", number>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定该策略运用于倒排表的哪些字段，以及这些字段对应的权重（用于控制字段匹配情况对最终结果的影响程度）  如果字段为空，则默认该策略运用于倒排表的全部字段，会默认增加1个配置，字段名为倒排表名，权重值为1.0。  如果不为空，则字段名不为空字符串，权重值为非负数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "proximitystrategy",
      children: "ProximityStrategy"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "倒排检索所用的近似与乱序匹配策略。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "proximityWeight"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "近似与乱序匹配策略的打分权重，在多种倒排策略并存的情况下，控制该策略对最终召回结果的评分影响程度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "columnWeight"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Record<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#columnname",
              children: "ColumnName"
            }), ", number>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定该策略运用于倒排表的哪些字段，以及这些字段对应的权重（用于控制字段匹配情况对最终结果的影响程度）  如果字段为空，则默认该策略运用于倒排表的全部字段，会默认增加1个配置，字段名为倒排表名，权重值为1.0。  如果不为空，则字段名不为空字符串，权重值为非负数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "columnSlops"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Record<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#columnname",
              children: "ColumnName"
            }), ", number>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "每个字段使用的偏移量配置。默认值和columnWeight相同的字段，值为10。字段不能为空，对应值必须为非负数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "vectorrecallcondition",
      children: "VectorRecallCondition"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "向量检索的召回条件。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "vectorQuery"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#vectorquery",
              children: "VectorQuery"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于向量检索的查询词向量。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fromClause"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询目标索引名。不能为空字符串。  fromClause指定的表中包含filters中涉及的所有字段，接受两种输入：  1. 和ftsTableName填一样的值，则倒排检索将仅局限在倒排表内进行检索；  2. 提供完整select...join语句的方式，来连接fts表之外的元素表，作为倒排这一路的被检索表。（使用此模式时，该select语句中必须有rowid字段且必须定义为fts表的rowid。例如：当ftsTableName为“files”时，存在一个元素表metadata需要参与filters过滤，则应如下定义fromClause：\"SELECT files.rowid as rowid, * FROM metadata JOIN files ON metadata.fileid = files.fileid\"。）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "primaryKey"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Array<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#columnname",
              children: "ColumnName"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "召回结果主键字段，会作为召回字段之一，作为多路召回文档聚合依据。一次查询中所有RecallCondition的主键字段数量必须相等且不能为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "responseColumns"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Array<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#columnname",
              children: "ColumnName"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要额外召回的字段集合。ColumnName不得为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "recallName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#recallname",
              children: "RecallName"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前检索回路的名称，作为重排阶段识别依据。默认值为随机字符串，不能为空字符串"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "filters"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Array<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#filterinfo",
              children: "FilterInfo"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "额外的过滤条件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "deepSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前召回过程给重排阶段返回的最大结果数。默认值500，必须为正整数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "vectorquery",
      children: "VectorQuery"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据查询词生成的向量。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "column"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#columnname",
              children: "ColumnName"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "待匹配向量字段名。必须为指定的向量数据库中存在的向量类型字段。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Float32Array"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "向量列的向量值。  如果未定义value字段，系统将尝试将原始query生成向量。目前在PC上支持自动生成。  从HarmonyOS 6.0.0 Beta2版本开始，此参数由“必填”变更为“可选”。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "similarityThreshold"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["向量阈值，用于过滤不相似向量的阈值。默认值为1，取值范围最小值为0，最大值为", (0,jsx_runtime.jsx)(_components.a, {
              href: "#vectorrerankparameter",
              children: "VectorRerankParameter"
            }), "中有效thresholds的最小值。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "rerankmethod",
      children: "RerankMethod"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "重排策略的参数。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "rerankType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#reranktype",
              children: "RerankType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["重排算法，取值类型为枚举类", (0,jsx_runtime.jsx)(_components.a, {
              href: "#reranktype",
              children: "RerankType"
            }), "，可选项为RRF、FUSED_SCORE，分别指向rrf排序算法以及分数融合排序算法。默认值为RRF。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "parameters"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Record<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#channeltype",
              children: "ChannelType"
            }), ", ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rerankparameter",
              children: "RerankParameter"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["每个召回回路对应的重排参数。如果上述检索参数RetrievalCondition中的存在的channelType未在parameters中配置重排参数，则会自动填充该channelType对应的重排参数默认值。倒排的重排参数默认值参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "#invertedindexrerankparameter",
              children: "InvertedIndexRerankParameter"
            }), "，向量的重排参数默认值参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "#vectorrerankparameter",
              children: "VectorRerankParameter"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "isSoftmaxNormalized"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FUSED_SCORE模式下，是否使用softmax函数归一化计算重排最终得分。默认为false。true表示使用softmax函数归一化计算重排最终得分，false表示不使用。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "reranktype",
      children: "RerankType"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "重排算法的类型。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RRF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reciprocal Rank Fusion(RRF)方法。根据各路召回位置信息进行分档排序。  适用场景：对结果多样性要求较高的场景，希望每路结果平等输出。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUSION_SCORE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "基于得分的召回融合方法。根据各路相关性分数进行分档排序。适用场景：对相关性准确性要求高、召回分数可靠且注重结果的排序稳定性的场景。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "rerankparameter",
      children: "RerankParameter"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type RerankParameter = InvertedIndexRerankParameter| VectorRerankParameter"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "重排算法的参数配置。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#invertedindexrerankparameter",
              children: "InvertedIndexRerankParameter"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "重排参数为InvertedIndexRerankParameter。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#vectorrerankparameter",
              children: "VectorRerankParameter"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "重排参数为VectorRerankParameter。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "invertedindexrerankparameter",
      children: "InvertedIndexRerankParameter"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于倒排索引的重排算法的参数。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "invertedIndexWeights"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Record<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#recallname",
              children: "RecallName"
            }), ", number>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["每路召回的重排权重，体现各路召回在重排过程中的重要性。key为各路召回RecallCondition的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#recallname",
              children: "RecallName"
            }), "，value为对应那一路召回的权重。  权重值必须为非负数。如果未定义某一路召回的权重，则默认值为1。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "vectorrerankparameter",
      children: "VectorRerankParameter"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于向量数据的重排算法的参数。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "vectorWeights"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Record<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#recallname",
              children: "RecallName"
            }), ", number>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["每路召回的重排权重，体现各路召回在重排过程中的重要性。key为各路召回RecallCondition的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#recallname",
              children: "RecallName"
            }), "，value为对应那一路召回的权重。权重值必须为非负数。如果未定义某一路召回的权重，则默认值为1。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "thresholds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Array<number>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "向量召回的分档阈值，用户应当从[0, 1]范围内给3个值，高、中、低档最低分，赋值对应cosine()相似度得分，越高越相关；  如果是2个值，则分出高、中两档，剩下结果都是低档；  如果是1个值，则除了高档剩下结果都是低档。  当给出多于3个值，则使用从大到小排序后前3个数值，后面忽略。如果未定义，默认值为[0.6, 0.45, 0.4]。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "numberInspector"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Record<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#recallname",
              children: "RecallName"
            }), ", ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#columnname",
              children: "ColumnName"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["向量召回数字匹配降档策略配置，如果查询中存在数字，但是对应目标字段中的数字和查询数字不匹配，则将该检索结果的相关性降低。key为对应向量召回条件中的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#recallname",
              children: "RecallName"
            }), "，value为对应模式匹配字段名。默认值为空。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "rdbrecords",
      children: "RdbRecords"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检索结果。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "records"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Array<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#iteminfo",
              children: "ItemInfo"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "检索结果"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "missedGroundTruths"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Array<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#iteminfo",
              children: "ItemInfo"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "未检索到指定文档的信息"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "iteminfo",
      children: "ItemInfo"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检索结果中每条数据的特定内容。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "primaryKey"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "检索结果的主键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "columns"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Record<string, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-t/arkts-apis-data-relationalstore-t#valuetype",
              children: "relationalStore.ValueType"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "召回列及其内容。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "score"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "检索重排后的最终得分，其反映了重排记录与查询词之间的相似度。score取值大于等于0。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "recallScores"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Record<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#channeltype",
              children: "ChannelType"
            }), ", Record<string, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#recallscore",
              children: "RecallScore"
            }), ">>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "每路召回的得分，其反映了每路召回对该结果的相关性评估。key为该路RecallCondition的scoreKey；  - 如果这里没有体现RetrievalCondition中的某一路RecallCondition的scoreKey，则代表该路召回认为该结果相关性过低不予召回。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "features"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Record<string, number>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不同倒排策略的得分。目前支持的倒排策略及得分为：  - \"exact_phase\"：文档字段精确命中查询语句的得分。  - \"out_of_order_phase\"：文档字段命中近似乱序匹配策略的得分。  - \"token_bm25\"：文档字段bm25策略得分。  - \"core_count\"：文档单个匹配字段内核心词总数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "similarityLevel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#similaritylevel",
              children: "SimilarityLevel"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据语义向量距离以及文本匹配程度，对检索结果按照相关性分档，方便对结果进行进一步筛选并且过滤。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "recallscore",
      children: "RecallScore"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "召回过程的得分。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "score"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "召回得分。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "isReverseQuery"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示得分是否来自反查过程。true表示来自反查过程，flase表示来自原始召回过程。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "similaritylevel",
      children: "SimilarityLevel"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据语义向量距离以及文本匹配程度，对检索结果按照相关性的高中低分档，方便对结果进行进一步筛选并且过滤。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NONE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "保留值，暂无特定含义。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LOW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "结果和Query的语义向量距离小，表示语义更相似。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MEDIUM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "结果和Query的语义向量距离中等，表示语义相似性中等。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HIGH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "结果和Query的语义向量距离大，表示语义差异较大，相关性低。"
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