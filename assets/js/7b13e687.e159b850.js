"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["297095"], {
236682(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_data_augmentation_kit_guide_data_augmentation_knowledge_processing_data_augmentation_knowledge_processing_md_7b1_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-data-augmentation-kit-guide-data-augmentation-knowledge-processing-data-augmentation-knowledge-processing-md-7b1.json
var site_docs_data_augmentation_kit_guide_data_augmentation_knowledge_processing_data_augmentation_knowledge_processing_md_7b1_namespaceObject = JSON.parse('{"id":"data-augmentation-kit-guide/data-augmentation-knowledge-processing/data-augmentation-knowledge-processing","title":"知识加工","description":"知识加工是指根据实际业务数据生成知识库的能力，主要包含以下两个方面：","source":"@site/docs/data-augmentation-kit-guide/data-augmentation-knowledge-processing/data-augmentation-knowledge-processing.md","sourceDirName":"data-augmentation-kit-guide/data-augmentation-knowledge-processing","slug":"/data-augmentation-kit-guide/data-augmentation-knowledge-processing/","permalink":"/harmonyos-docs-site/data-augmentation-kit-guide/data-augmentation-knowledge-processing/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"知识加工","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/data-augmentation-knowledge-processing","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"完整示例代码","permalink":"/harmonyos-docs-site/data-augmentation-kit-guide/dataaugmentation-rag/data-augmentation-rag-demo/"},"next":{"title":"智慧化数据检索-ArkTS","permalink":"/harmonyos-docs-site/data-augmentation-kit-guide/dataaugmentation-retrieval/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/data-augmentation-kit-guide/data-augmentation-knowledge-processing/data-augmentation-knowledge-processing.md


const frontMatter = {
	title: '知识加工',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/data-augmentation-knowledge-processing',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '知识加工';

const assets = {

};



const toc = [{
  "value": "触发知识加工的时机",
  "id": "触发知识加工的时机",
  "level": 2
}, {
  "value": "约束限制",
  "id": "约束限制",
  "level": 2
}, {
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    li: "li",
    ol: "ol",
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
        id: "知识加工",
        children: "知识加工"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "知识加工是指根据实际业务数据生成知识库的能力，主要包含以下两个方面："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "通过配置schema生成知识加工的产物（如倒排表、向量库、向量表），这些产物最终用于知识问答过程中的检索。schema的配置应基于实际业务使用的数据库及数据表结构。知识加工和检索对中文处理进行了优化，因此中文问答的效果优于英文。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "通过调用获取知识加工状态的接口，查询当前的加工状态。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "知识加工支持处理如下文件类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "文本和网页类型：txt、html。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "办公文件类型：doc、docx、ppt、pptx、xls、xlsx、pdf，仅支持纯文本的基本处理，复杂或特定内容可由应用侧自行解析处理后转成txt格式进行后续加工。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "图片类型：jpeg、jpg、png。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从6.1.0(23)版本开始，新增支持关键字表和时间特征表。当前知识加工生成的产物结构如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表1"
        })
      }), " 倒排表结构"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "列名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "含义"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "reference_id"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UNINDEXED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "关联id，与业务表主键id对应。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "chunk_id"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UNINDEXED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于标识每一个切分后的Chunk。一个Chunk代表需要进行知识加工的文本的一个切片。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "chunk_source"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UNINDEXED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "每个Chunk在业务表中的字段归属。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "chunk_text"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TEXT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "倒排索引字段，每个Chunk的文本内容。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表2"
        })
      }), " 向量表结构"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "列名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "含义"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "id"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "INTEGER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自增主键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "reference_id"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "INTEGER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "关联id，与业务表主键id对应。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "chunk_id"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TEXT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于标识每一个切分后的Chunk。一个Chunk代表需要进行知识加工的文本的一个切片。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "chunk_source"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TEXT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "每个Chunk在业务表中的字段归属。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "repr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FLOATVECTOR(128)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "chunk_id对应的文本的向量表征。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Scalar"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TEXT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Schema中定义的所有标量字段，类型均为TEXT。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表3"
        })
      }), " 关键字表结构"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "列名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "含义"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "id"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "INTEGER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自增主键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "reference_id"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "INTEGER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "关联id，与业务表主键id对应。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "chunk_id"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TEXT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于标识每一个切分后的Chunk。一个Chunk代表需要进行知识加工的文本的一个切片。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "word"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TEXT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "匹配到的关键字。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "extendFields"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TEXT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Schema中customKeyword字段下extendFields定义的所有列，每个字段一列，类型均为TEXT。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表4"
        })
      }), " 时间特征表结构"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "列名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "含义"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "id"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "INTEGER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自增主键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "reference_id"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "INTEGER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "关联id，与业务表主键id对应。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "chunk_id"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TEXT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于标识每一个切分后的Chunk。一个Chunk代表需要进行知识加工的文本的一个切片。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "start_time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TEXT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "匹配到的时间段的开始时间。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "end_time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TEXT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "匹配到的时间段的结束时间。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "extendFields"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TEXT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Schema中time字段下extendFields定义的所有列，每个字段一列，类型均为TEXT。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "触发知识加工的时机",
      children: "触发知识加工的时机"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "触发知识加工包含下列两种情况。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E5%BC%80%E5%8F%91%E6%AD%A5%E9%AA%A4",
          children: "开发步骤"
        }), "配置knowledge_schema.json和开库参数后，每次开库都会启动一次知识加工任务。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当已经成功开库并且存在一个活跃的数据库连接时，数据源表发生数据变更（插入、更新、删除）时会自动触发加工任务。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束限制",
      children: "约束限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "知识加工使用的表不支持同时进行端端同步、端云同步以及搜索。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "知识加工schema配置文件为src/main/resources/rawfile/arkdata/knowledge/knowledge_schema.json，文件内容必须是合法的Json字符串。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "知识加工清理接口：在schema升级场景下，首次开库或调用getKnowledgeProcessor接口前调用cleanKnowledgeData接口。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["知识加工关键接口", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-basecontext/js-apis-inner-application-basecontext",
        children: "common.BaseContext"
      }), "如下表所示，具体API说明详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/data-augmentation-api/dataaugmentation-arkts/dataaugmentation-knowledgeprocessor-api/dataaugmentation-knowledgeprocessor-api",
        children: "API参考"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/data-augmentation-api/dataaugmentation-arkts/dataaugmentation-knowledgeprocessor-api/dataaugmentation-knowledgeprocessor-api#getknowledgeprocessor",
              children: "getKnowledgeProcessor"
            }), "(context: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-basecontext/js-apis-inner-application-basecontext",
              children: "common.BaseContext"
            }), ", config: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/data-augmentation-api/dataaugmentation-arkts/dataaugmentation-knowledgeprocessor-api/dataaugmentation-knowledgeprocessor-api#knowledgeprocessorconfig",
              children: "KnowledgeProcessorConfig"
            }), "): Promise<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/data-augmentation-api/dataaugmentation-arkts/dataaugmentation-knowledgeprocessor-api/dataaugmentation-knowledgeprocessor-api#knowledgeprocessor",
              children: "KnowledgeProcessor"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取知识加工对象，进行获取知识加工状态等操作。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/data-augmentation-api/dataaugmentation-arkts/dataaugmentation-knowledgeprocessor-api/dataaugmentation-knowledgeprocessor-api#getstatus",
              children: "getStatus"
            }), "(): Promise<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/data-augmentation-api/dataaugmentation-arkts/dataaugmentation-knowledgeprocessor-api/dataaugmentation-knowledgeprocessor-api#processorstatus",
              children: "ProcessorStatus"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取知识加工状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/data-augmentation-api/dataaugmentation-arkts/dataaugmentation-knowledgeprocessor-api/dataaugmentation-knowledgeprocessor-api#startprocess",
              children: "startProcess"
            }), "(option: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/data-augmentation-api/dataaugmentation-arkts/dataaugmentation-knowledgeprocessor-api/dataaugmentation-knowledgeprocessor-api#knowledgeprocessconfig",
              children: "KnowledgeProcessConfig"
            }), "): Promise<void>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据入参的配置，启动知识加工。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/data-augmentation-api/dataaugmentation-arkts/dataaugmentation-knowledgeprocessor-api/dataaugmentation-knowledgeprocessor-api#stopprocess",
              children: "stopProcess"
            }), "(): Promise<void>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "停止当前知识加工。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/data-augmentation-api/dataaugmentation-arkts/dataaugmentation-knowledgeprocessor-api/dataaugmentation-knowledgeprocessor-api#cleanknowledgedata",
              children: "cleanKnowledgeData"
            }), "(context: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-basecontext/js-apis-inner-application-basecontext",
              children: "common.BaseContext"
            }), ", config: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/data-augmentation-api/dataaugmentation-arkts/dataaugmentation-knowledgeprocessor-api/dataaugmentation-knowledgeprocessor-api#knowledgeprocessorconfig",
              children: "KnowledgeProcessorConfig"
            }), "): Promise<void>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "清理知识库，根据入参中的知识加工配置获取对应知识库信息，将知识库进行清理。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-f/arkts-apis-data-relationalstore-f#relationalstoregetrdbstore-1",
              children: "getRdbStore"
            }), "(context: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context",
              children: "Context"
            }), ", config: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-i/arkts-apis-data-relationalstore-i#storeconfig",
              children: "StoreConfig"
            }), "): Promise<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-rdbstore/arkts-apis-data-relationalstore-rdbstore",
              children: "RdbStore"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建或打开已有的关系型数据库，按照步骤2配置开库参数后，调用该接口可触发知识加工。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从6.1.0(23)版本开始，知识加工schema配置文件knowledge_schema.json新增支持commonAttribute和customKeyword参数；knowledgeField的type字段新增支持Markdown类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "配置知识加工schema文件knowledge_schema.json，下文是配置示例，实际文件内容请根据业务需要进行配置。知识加工产物命名规则如下："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "倒排库与数据源库是同一个数据库。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "倒排表名相较于数据源表名增加了\"_inverted\"后缀（email->email_inverted）。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "向量库名相较于数据源库名增加了\"_vector\"后缀（testmail_store.db->testmail_store_vector.db）。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "向量表名相较于数据源表名增加了\"_vector\"后缀（email->email_vector）。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "   // 文件路径：src/main/resources/rawfile/arkdata/knowledge/knowledge_schema.json\n   // 项目中没有该目录请递归创建\n   // 实际使用时请去除注释，示例中增加注释仅作字段说明用\n   {\n     \"knowledgeSource\": [{\n       \"version\": 1,\n       \"dbName\": \"testmail_store.db\",  // 存储原始数据的数据库文件名\n       \"tables\": [{\n         \"tableName\": \"email\",  // 用于知识加工的表名\n         \"referenceFields\": [\"id\"],  // 知识数据源引用字段，用于关联知识库中的数据\n         \"processSequence\": {  // 定义加工顺序为id倒序\n           \"columnName\": \"id\",\n           \"sortType\": \"DESC\"\n         },\n         \"customKeyword\": {\n             \"wordTablePath\": \"/data/storage/el2/base/haps/entry/files/keywords.txt\", // 此处仅作示例，实际文件路径根据业务实际情况配置\n             \"sourceFields\": [\"subject\", \"content\"],  // 关键字提取生效的列\n             \"extendFields\": []  // 创建关键字表时额外增加的列，数据与源表一致\n         },\n         \"commonAttribute\": {\n             \"time\": {\n                 \"baseTimeField\": \"received_date\",\n                 \"sourceFields\": [\"subject\", \"content\"],\n                 \"extendFields\": [\"sender\"]\n             }\n         },\n         \"knowledgeFields\": [{  // 关注的知识字段\n           \"columnName\": \"subject\",  // 关注的字段名称\n           \"type\": [\"Text\"]  // 关注的字段类型，Text则表示要做向量和倒排\n         },\n         {\n           \"columnName\": \"content\",\n           \"type\": [\"Text\"]\n         },\n         {\n           \"columnName\": \"image_text\",\n           \"type\": [\"Text\"]\n         },\n         {\n           \"columnName\": \"attachment_names\",\n           \"type\": [\"Text\"]\n         },\n         {\n           \"columnName\": \"inline_files\",\n           \"type\": [\"Json\"],\n           \"parser\": [\n             {\n               \"type\": \"File\",\n               \"path\": \"$[*].uri\"  // path字段的值为Json路径表达式\n             }\n           ]\n         },\n         {\n           \"columnName\": \"sender\",\n           \"type\": [\"Scalar\"],  // Scalar表示标量字段，不做加工，直接写到向量数据表中对应的列，用于标量检索过滤\n           \"description\": \"sender\"\n         },\n         {\n           \"columnName\": \"receivers\",\n           \"type\": [\"Scalar\"],\n           \"description\": \"receivers\"\n         },\n         {\n           \"columnName\": \"received_date\",\n           \"type\": [\"Scalar\"],\n           \"description\": \"received_date\"\n         }],\n         \"pipelineHandlers\": {\n           \"FileParserHandler\": [\"SplitTextHandler\"],  // 表示文件解析完成后交由文本切分处理器SplitTextHandler进行处理\n           \"SplitTextHandler\": [\"TextEmbeddingHandler\"],\n           \"TextEmbeddingHandler\": [\"ImageEmbeddingHandler\"],\n           \"ImageEmbeddingHandler\": []\n         }\n       }],\n       \"knowledgeProcess\": {\n         \"embeddingModelCfg\":\n         {\n           \"modelVersion\": \"default\"  // 向量表征模型，\"default\" 表示默认版本\n         },\n         \"chunkSplitter\":\n         {\n           \"chunkSize\": 3072,\n           \"segmentSize\": 300,\n           \"overlapRatio\": 0.1\n         },\n         \"perRecordLimit\":\n         {\n           \"parseFileMaxCnt\": 10,\n           \"textEmbeddingMaxCnt\": 50,\n           \"imageEmbeddingMaxCnt\": 10\n         }\n       }\n     }]\n   }\n"
          })
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "字段"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "是否可选"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "说明"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "version"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "否"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "schema的版本号，正整数，最大值为2147483647。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "dbName"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "否"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "数据库名称，最小长度为1，最大长度为120，支持数字、大小写字母、下划线和字符“.”。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "tableName"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "否"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "知识表名称，最小长度为1，最大长度为120，支持数字、大小写字母和下划线。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "columnName"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "否"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "知识字段列名，最小长度为1，最大长度为255。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "referenceFields"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "否"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "知识表主键，仅支持一个字段，且字段为整数类型，字段值最小长度为1，最大长度为255。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "type"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "否"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["知识字段类型，支持的知识字段类型，包括：  - Text：纯文本知识加工字段。  - Scalar：标量字段。  必须包含description字段，字段取值范围：[1，255]。  Scalar字段不会进行知识加工，内容与业务表对应字段保持一致。  Scalar字段的columnName允许长度范围：[1, 128]。  - Json：Json格式的知识加工字段。  必须包含parser字段，用于指定文件路径的解析器。  每个Json字段允许定义的parser数量范围是[1, 5]，最多支持提取5个不同的本地文件路径。  每个parser对象必填type和path，其中type为File，path的长度范围是[1，255]。  path必须是合法的Json路径表达式，用于表示知识加工需要解析的文件路径。  - Markdown: Markdown格式的知识加工字段。当前仅支持一个Markdown类型的知识字段，且Markdown字段不能同时设置为其它类型。", (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "起始版本："
                  })
                }), " 6.1.0(23)"]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "processSequence"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "加工顺序，用于定义数据的加工顺序，包含columnName和sortType两个字段。  - columnName对应一个数据源表的列名。  columnName值的长度范围是[1，255]，支持数字、大小写字母和下划线。  columnName对应的列必须是整数类型，且必须在数据源表里存在。  - sortType用于指定升序或降序排列。  sortType仅能配置为\"ASC\"（升序）或\"DESC\"（降序）。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "customKeyword"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["自定义关键字，用于配置关键字提取功能。配置该字段后知识加工会额外生成关键字表，表名相比数据源表增加\"_knowledge_keyword\"后缀，包含三个字段。  - wordTablePath对应关键词列表文件的路径，长度范围是[1, 255]，文件必须是.txt类型且实际存在。  - sourceFields用于指定关键词提取功能生效的列，长度范围[1, 10]。其中每个列的长度范围是[1, 255]，且只能包含数字、大小写字母和下划线。  - extendFields用于指定关键字提取产物额外需要创建的列，长度范围[0, 10]。其中每个列的长度范围是[1, 255]，且只能包含数字、大小写字母和下划线。  ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "起始版本："
                  })
                }), " 6.1.0(23)"]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "commonAttribute"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["公共特征，当前仅支持配置时间特征，对应字段为\"time\"。配置该字段后知识加工会额外生成时间表，表名相比数据源表增加\"_knowledge_time\"后缀， 包含三个字段。  - baseTimeField对应基准时间列，长度范围是[1, 255]且该列实际存在。该列在数据源表中需要是合法的Unix毫秒级时间戳。  - sourceFields用于指定时间特征提取功能生效的列，长度范围[1, 10]。其中每个列的长度范围是[1, 255]，且只能包含数字、大小写字母和下划线。  - extendFields用于指定时间特征提取产物额外需要创建的列，长度范围[0, 10]。其中每个列的长度范围是[1, 255]，且只能包含数字、大小写字母和下划线。  ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "起始版本："
                  })
                }), " 6.1.0(23)"]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "pipelineHandlers"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "否"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "执行顺序，用于定义知识加工时各处理模块（Handler）的执行顺序，可以控制原始数据如何被解析、切分、表征，最终写入倒排表与向量表。  可修改Handler流程，配置为一个映射（unordered_map<string, vector<string>>），每个键为当前Handler，值为其后续执行的Handler列表，参考示例：  \"pipelineHandlers\":  {  \"FileParserHandler\": [\"SplitTextHandler\"],  \"SplitTextHandler\": [\"TextEmbeddingHandler\"],  \"TextEmbeddingHandler\": [\"ImageEmbeddingHandler\"],  \"ImageEmbeddingHandler\": []  }  当前Handler支持的名称包括：FileParserHandler、SplitTextHandler、TextEmbeddingHandler、ImageEmbeddingHandler。  Handler之间不能出现循环依赖，否则系统会在加载schema时报错。  每个Handler的下游可以为空数组，表示加工流程在此结束。  推荐的标准知识加工流程为：  FileParserHandler → SplitTextHandler → TextEmbeddingHandler → ImageEmbeddingHandler。  如果配置顺序错误（如跳过某些处理器、顺序不通或形成闭环），可能导致文件未处理、加工流程中断或初始化失败。  可根据实际场景适当简化，例如：仅加工倒排索引时只配置SplitTextHandler。  各Handler功能与依赖说明如下：  - FileParserHandler：提取Json字段中指向本地文件的文本内容，支持格式：doc、docx、ppt、pptx、xls、xlsx、html、txt、pdf、png、jpg、jpeg。文本类文件会提取正文内容，图片文件会通过OCR提取可识别文本。不依赖其他Handler。  推荐组合：建议放在SplitTextHandler之前，使提取出的文件内容能被切分、表征。  未配置影响：Json字段内文件不会被解析，倒排和向量中均无这些内容（不影响图片向量表征）。  - SplitTextHandler：对文本字段进行两级切分。  - 第一级chunk：用于倒排索引  - 第二级segment：用于向量表征（Embedding）  推荐组合：必须在TextEmbeddingHandler之前；否则向量表征阶段缺少segment，后续表征失败。  未配置影响：倒排表和向量表都无文本内容，检索无法返回文本相关内容。  - TextEmbeddingHandler：对SplitTextHandler产生的segment进行文本向量表征，生成供向量检索使用的数据。依赖SplitTextHandler的结果。  推荐组合：放在SplitTextHandler之后、ImageEmbeddingHandler 之前。  未配置影响：文本表征结果不会进入向量表，影响语义搜索。  - ImageEmbeddingHandler：根据Json字段解析后的图像路径加载图片，并对图像特征进行向量表征。图片处理不依赖SplitTextHandler和TextEmbeddingHandler，也不会参与文本倒排表，独立于文本处理流程。  推荐组合：放在TextEmbeddingHandler之后，避免图片路径字段被误当作文本参与表征，产生噪声。  未配置影响：图像表征结果不会进入向量表，影响图片相关搜索。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "knowledgeProcess"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "加工参数，用于设置知识加工参数配置，开发者可根据实际情况选择一个或多个字段进行配置。配置对应字段后，对应的子字段内部的内容均为必填，不允许部分配置。包括以下三个字段。  - embeddingModelCfg：表征模型设置。  若knowledgeProcess中配置了embeddingModelCfg字段，则必须包含modelVersion字段，类型为字符串，表示所使用的向量表征模型版本。  字段值最大长度为100，若为空字符串会使用默认版本。  该字段值需与实际部署或支持的模型版本匹配，且知识加工的表征模型版本需要和推理的版本一致，当前默认值为\"default\"。  - chunkSplitter：文本切分设置。  若knowledgeProcess字段中配置了chunkSplitter字段，则需同时配置以下三个子字段，均为必填项。  - chunkSize：每个Chunk的最大长度，整数类型，取值范围为[100, 5000]，默认值为3072。  - segmentSize：Chunk内部分段的最大长度，是向量表征的单位，整数类型，取值范围为[128, 512]，默认值为300。  - overlapRatio：相邻Chunk之间的重叠比例，浮点数类型，取值范围为(0.0, 0.3]，默认值为0.1。  这些参数用于控制文本切分策略，影响切分粒度、上下文连续性，如果未配置，则系统将使用上述默认值。  - perRecordLimit：文件预处理限制。  若knowledgeProcess中配置了perRecordLimit字段，则需同时配置以下三个字段，均为必填项。  - parseFileMaxCnt：每条记录最多允许解析的文件数，整数类型，取值范围为[0, 200]，默认值为10。  - textEmbeddingMaxCnt：每条记录最多进行向量表征的文本段数量，整数类型，取值范围为[0, 200]，默认值为50，超出限制的文本段不会被表征。  - imageEmbeddingMaxCnt：每条记录最多进行处理的图片数量，整数类型，取值范围为[0, 200]，默认值为10。  这些参数用于限制单条记录在知识加工过程中的最大处理规模，如果未配置，则系统将采用默认值。"
              })]
            })]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["配置数据源库", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-i/arkts-apis-data-relationalstore-i#storeconfig",
            children: "开库参数"
          }), "，根据业务需要预置数据。下文是示例代码片段，仅供参考，具体实现方式请根据业务需要调整。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "schema示例中inline_files列配置的type为Json，且其path字段为指向uri的路径表达式，那么知识加工会去数据库中的inline_files字段解析uri对应的值作为文件路径。插入数据的SQL语句inline_files列的值应配置为示例代码中所示的文件路径的对象数组形式。加工时会根据获取的文件路径进行知识构建。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(771664)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "relationalStore开库参数配置中的name字段需要与中\"dbName\"字段保持一致，并且enableSemanticIndex字段需要设置为true才会触发知识加工。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "建表语句中的表名需要与中\"tableName\"字段保持一致，列名与\"columnName\"字段保持一致。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { relationalStore } from '@kit.ArkData';\n\n// relationalStore开库参数配置\nconst storeConfig: relationalStore.StoreConfig = {\n  name: 'testmail_store.db',  // 注意与步骤1中\"dbName\"字段保持一致\n  securityLevel: relationalStore.SecurityLevel.S3,\n  enableSemanticIndex: true,  // 注意该项设为true才会触发知识加工\n  tokenizer: relationalStore.Tokenizer.CUSTOM_TOKENIZER\n};\n\n// 建表语句，注意表名应与步骤1中\"tableName\"字段保持一致，列名与\"columnName\"字段保持一致\nconst createTableSql = \"CREATE TABLE IF NOT EXISTS email(id integer primary key, subject text, \" +\n  \"content text, image_text text, attachment_names text, inline_files text, sender text, \" +\n  \"receivers text, received_date text);\";\n\n// 插入数据语句，请按实际业务需要实现，下文仅作参考\nconst sql = `insert or replace into email VALUES(0, 'Subject of an email', 'Content of an email', 'Convert image to text through OCR',\n  'attachment_name_1.txt, attachment_name_2.txt', '[{\"uri\":\"/data/storage/el2/base/haps/entry/files/capture_1.png\"},{\"uri\":\"/data/storage/el2/base/haps/entry/files/capture_2.jpeg\"}]',\n  'test1(test1@example.com)', 'test2(test2@example.com), test3(test3@example.com)', 'Convert time to timestamp');`;\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["可根据业务需要，调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/data-augmentation-api/dataaugmentation-arkts/dataaugmentation-knowledgeprocessor-api/dataaugmentation-knowledgeprocessor-api#getstatus",
            children: "getStatus()"
          }), "接口，查询当前的知识加工状态。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { relationalStore } from '@kit.ArkData';\nimport { knowledgeProcessor } from '@kit.DataAugmentationKit';\nimport { UIAbility, common } from '@kit.AbilityKit';\n\n// relationalStore开库参数配置\nconst storeConfig: relationalStore.StoreConfig = {\n  name: 'testmail_store.db',  // 注意与步骤1中\"dbName\"字段保持一致\n  securityLevel: relationalStore.SecurityLevel.S3,\n  enableSemanticIndex: true,\n  tokenizer: relationalStore.Tokenizer.CUSTOM_TOKENIZER\n};\n\nlet knowledgeSourceConfig: knowledgeProcessor.KnowledgeSourceConfig = {\n  rdbSource: storeConfig,\n}\nlet knowledgeProcessorConfig: knowledgeProcessor.KnowledgeProcessorConfig = {\n  sourceConfig: knowledgeSourceConfig,\n}\n\n// 获取知识加工状态的异步函数，业务自行按需调用\nasync function getStatus() {\n  const context = AppStorage.get<common.UIAbilityContext>(\"Context\") as common.UIAbilityContext;\n  try {\n    // 获取知识加工对象\n    const processor = await knowledgeProcessor.getKnowledgeProcessor(context, knowledgeProcessorConfig);\n    // 获取知识加工状态\n    const status: knowledgeProcessor.ProcessorStatus = await processor.getStatus();\n    return status;\n  } catch (err) {\n    console.error(\"Error: \" + err.message + \" code: \" + err.code);\n    return undefined;\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["可根据业务需要，调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/data-augmentation-api/dataaugmentation-arkts/dataaugmentation-knowledgeprocessor-api/dataaugmentation-knowledgeprocessor-api#startprocess",
            children: "startProcess"
          }), "(option: ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/data-augmentation-api/dataaugmentation-arkts/dataaugmentation-knowledgeprocessor-api/dataaugmentation-knowledgeprocessor-api#knowledgeprocessconfig",
            children: "KnowledgeProcessConfig"
          }), ")接口，启动知识加工。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { relationalStore } from '@kit.ArkData';\nimport { knowledgeProcessor } from '@kit.DataAugmentationKit';\nimport { UIAbility, common } from '@kit.AbilityKit';\n\n// relationalStore开库参数配置\nconst storeConfig: relationalStore.StoreConfig = {\n  name: 'testmail_store.db',  // 注意与步骤1中\"dbName\"字段保持一致\n  securityLevel: relationalStore.SecurityLevel.S3,\n  enableSemanticIndex: true,\n  tokenizer: relationalStore.Tokenizer.CUSTOM_TOKENIZER\n};\n\nlet knowledgeSourceConfig: knowledgeProcessor.KnowledgeSourceConfig = {\n  rdbSource: storeConfig,\n}\nlet knowledgeProcessorConfig: knowledgeProcessor.KnowledgeProcessorConfig = {\n  sourceConfig: knowledgeSourceConfig,\n}\n\n// 启动知识加工的异步函数，业务自行按需调用\nasync function startProcess() {\n  const context = AppStorage.get<common.UIAbilityContext>(\"Context\") as common.UIAbilityContext;\n  try {\n    // 获取知识加工对象\n    const processor = await knowledgeProcessor.getKnowledgeProcessor(context, knowledgeProcessorConfig);\n    // 启动知识加工\n    let processMode: knowledgeProcessor.KnowledgeProcessMode = knowledgeProcessor.KnowledgeProcessMode.INVERTED_INDEX;\n    let config: knowledgeProcessor.KnowledgeProcessConfig = {\n      mode: processMode,\n    }\n    await processor.startProcess(config);\n  } catch (err) {\n    console.error(\"Error: \" + err.message + \" code: \" + err.code);\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["可根据业务需要，调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/data-augmentation-api/dataaugmentation-arkts/dataaugmentation-knowledgeprocessor-api/dataaugmentation-knowledgeprocessor-api#stopprocess",
            children: "stopProcess"
          }), "()接口，停止知识加工。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { relationalStore } from '@kit.ArkData';\nimport { knowledgeProcessor } from '@kit.DataAugmentationKit';\nimport { UIAbility, common } from '@kit.AbilityKit';\n\n// relationalStore开库参数配置\nconst storeConfig: relationalStore.StoreConfig = {\n  name: 'testmail_store.db',  // 注意与步骤1中\"dbName\"字段保持一致\n  securityLevel: relationalStore.SecurityLevel.S3,\n  enableSemanticIndex: true,\n  tokenizer: relationalStore.Tokenizer.CUSTOM_TOKENIZER\n};\n\nlet knowledgeSourceConfig: knowledgeProcessor.KnowledgeSourceConfig = {\n  rdbSource: storeConfig,\n}\nlet knowledgeProcessorConfig: knowledgeProcessor.KnowledgeProcessorConfig = {\n  sourceConfig: knowledgeSourceConfig,\n}\n\n// 停止知识加工的异步函数，业务自行按需调用\nasync function stopProcess() {\n  const context = AppStorage.get<common.UIAbilityContext>(\"Context\") as common.UIAbilityContext;\n  try {\n    // 获取知识加工对象\n    const processor = await knowledgeProcessor.getKnowledgeProcessor(context, knowledgeProcessorConfig);\n    // 停止知识加工\n    await processor.stopProcess();\n  } catch (err) {\n    console.error(\"Error: \" + err.message + \" code: \" + err.code);\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["可根据业务需要，调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/data-augmentation-api/dataaugmentation-arkts/dataaugmentation-knowledgeprocessor-api/dataaugmentation-knowledgeprocessor-api#cleanknowledgedata",
            children: "cleanKnowledgeData"
          }), "(context: ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-basecontext/js-apis-inner-application-basecontext",
            children: "common.BaseContext"
          }), ", config: ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/data-augmentation-api/dataaugmentation-arkts/dataaugmentation-knowledgeprocessor-api/dataaugmentation-knowledgeprocessor-api#knowledgeprocessorconfig",
            children: "KnowledgeProcessorConfig"
          }), ")接口，将知识库进行清理。注意：看约束和限制说明使用。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { relationalStore } from '@kit.ArkData';\nimport { knowledgeProcessor } from '@kit.DataAugmentationKit';\nimport { UIAbility, common } from '@kit.AbilityKit';\n\n// relationalStore开库参数配置\nconst storeConfig: relationalStore.StoreConfig = {\n  name: 'testmail_store.db',  // 注意与步骤1中\"dbName\"字段保持一致\n  securityLevel: relationalStore.SecurityLevel.S3,\n  enableSemanticIndex: true,\n  tokenizer: relationalStore.Tokenizer.CUSTOM_TOKENIZER\n};\n\nlet knowledgeSourceConfig: knowledgeProcessor.KnowledgeSourceConfig = {\n  rdbSource: storeConfig,\n}\nlet knowledgeProcessorConfig: knowledgeProcessor.KnowledgeProcessorConfig = {\n  sourceConfig: knowledgeSourceConfig,\n}\n\n// 清理知识库的异步函数，业务自行按需调用\nasync function cleanKnowledgeData() {\n  const context = AppStorage.get<common.UIAbilityContext>(\"Context\") as common.UIAbilityContext;\n  try {\n    // 清理知识库\n    await knowledgeProcessor.cleanKnowledgeData(context, knowledgeProcessorConfig);\n  } catch (err) {\n    console.error(\"Error: \" + err.message + \" code: \" + err.code);\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
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
771664(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAIQUlEQVRo3u2ae1DTVxbHP4gmPMLDhKcPEkAelqW2CsWyikLFik6VHV91hrGKdZmiOz6KY92hI+3Stajja6qWioiIi6i1rFWLUhCRUqkIVpYFBFHQBgUJ8taAsn9EwqYgVsA1XXNmMpPc+/3dc+/9/s6555wbvaa8YRHAenSiVTJItwU6YnSiI0ZHjE50xOiI0YkWyODnraC1TcLOb15juPUQAr0vYjikVrfr2kDMup2OxMQfAKAhchEh088MuI5d+0WEvtf0xP7SW6M4dQ78POtxd67ps56vDlnToW/M9coW1ixWIBErf5/EFMm9iYk/SnhYEPLbTXwYHsecSZORGF8dMB2RuyzJKRrCvyuFfLKsscfN+ktEFVl5pYQGebNx9dOJ+e6sSY/t2ZdbOJ5RiFKpxHCwC2+8KuwRF+DbqN3EfLTxFjKplLk+d1E0mxGbAH/bY862lQOnI6eghR/yKzirVNKhN46F0+vxGtuigXnFyZSsPPi5qIHSciFODg96HfPgGTHJp3/sFbNpf0mP7WEhfgT4FmsvMRmF/qRl7mdn1BLMhLmYCasIDwsicnMCIfPmMHpY9oDo+XZ3M8si3TmRUU7iiQL0OlwQWY3VwEzxaeTUOWsEgkEkpdrwpxkj1X0ig1akFpc08O7OQkbJ/Ghpvk/yyULkdfX4jHPgDQ+ZBi7l+2L+dU3OhHGjGe9hC4DtALm350JMa5uE5eEZyKRS3nLvcltzfe4SuRmi9jQQN4DVuZ3hVdhaulJVo8TdxZB3lqT3iCssk1NYBrHHStVtLlILvvuqCxN9xAFzUTvmAOJBSO2GIq+rR2xhjWhIEyYmAgBqFA/p0DcCwFDwQIOQQ6eG8e50eb/WpPc8ipiJ56axdFUsR6IX4SnL57rCFQB7cTEnL3uwbO1eThx4j8luqf3WlXzGAluLFrX7ik+240yOngamuUVJ6vlLuDo74mpvpTnAw0YSNirUPx3eVlJdc7dfcwoL8SMipFi7LKa22Zmlq2KZPXMqnrJ8Pj1gT2xCEgBR6xczy+sqMqmU5eEZXDws6Vf4nHzGgn98b0zbgyHMKjdg0RwFCwMrWRioiYs+4kDqeXC1tyJhQ0WvY659X/US5f7ct+jNY4wlZsYN2ufKtidZA7B8wVDgDrEJyeq+3XHpzPc2Z9NffZkbEkdydjALJqX0WZehkRENdffIulSEvNqRW9WWhIfW9Gv+IXPLATifJ8VmhO0zPavfXkfI3BLty/yL5N5s+SKJFR/Mx17c3ZQd7FQL9ZTlM3vmVJauiqW22bnP+t6eUElMpJCJHq4Ullyj+MbDAVtLdl4pX+49Ru0vpYgG3+v1U1l2lS/3HuOX2/e1M4+J2qMy4eCAenWbTCrlRkXF4+82wHW1RX19XGVhnwb3Pa8ZYV1NwucC1m1zZ8NKVf6wOsoWU3MzNUZRryKsqbWDiGhXjeeHmdXx53fvPHF8c5OOp0ZaFYZ62ptgZhT6c/SfXeFxp/hNfJ3Yx8QMsxGp2+3Fxaz4YD5bvkhiwbT+h89rFjWpk8trN9soSL/SDZN5IY8rRaYabaHzHXp3T6bOlFY/xYUZmwAF2kdMa5uErXtKuoXHvybD1lIzUw4OqGf7bog+3N6vpHNfshXpF5WYGLSStLWRHRFSmu53WcaRk3fZHJ3OJC93Itc4ajxrb9X7mXC1IBdrC8NeMTdutWinxSRne5KWGUvcjiUY6Odq9P03GTIbTZdgJqwiav1i1n6yj0D/vofPldX6ZOZcJnjem0Bjt4QxS6yyCmMjAW4jsp5p7PSfKn+fRczaZmc+25aG38TxTHbJ7db/il1XcVEi6l5onOVVxm6plK17SvDa1Lfw+frNZgCchrcNyKaczrLDZ0w1U70lnM+D9kfg5qDP3XsdnM5qwNxsCKsXql6465Ud2NvpUVcP35ytJu6omEVzFC8+Ktt3ciQ3Kir4OFTaY7+9uJjZM6cSHhaEjai8W7+BfgMRH04hLfMCydmefar4/nCpGDcXR6b9sf9XCrUKAbsOtXA88xblcgMa28QknirB0ETMO5PbsLe34VKRnMOpAgJ8G0k8/YCz+RISU9pIy7lJXpkJtQrBi7WYIrk3EZ8fIDgosMfwuFOWzmjEWvzkE3SySy5+E8fz2bY0pno4P1P1uUxuiFKpxEVmRllFMwdT7btheovKfh2ZbT84lLTsfN7yfpXw0BqC1qleuOKye4TMbWF5uwiBvjMyayWrNogpLL+Kra0FcX9/xOwVdsQe/hH9jj+wdZ3ixRETfbgdgBXznhy/1zXoMWdVHlYSEV9vGclQ044ecR+HSvFdcIF9J30Im/fbiSm6pnKPzjIh0Ez8sSs94qwsLbhSVMaVou59nZFZrULAxYJWBAIBMyboA2BkoJrv9TsigtY9vg7Qh9LbUFhWjVKpRDZciESsZMHMEQgNDLjXqEetQtCv+5o+E5NR6E9M/H6i1i/GTJj3RFx+oWph1bVN1NXDUFOe6PKCgwKJ+PwAMyb8tvC5tFyItWQwHm6j8PeswWtsC986+T3zWjojM4lYyY6P9EhKGa22oKCA+9y/P5ZHdM9VnOzM8X/Tm9mTq9VVg9ccjbpdO/xPi5izVtpxraKKlN12GOj3XhvKK1QtaqxbR6+4+ge2jJmZwvsLA9m28ideZunT4Z94bhppmRdYEzrlqaR0EvI0UjrD5/CwIGLik8kt932piemTK8vJ7zrYTl72GNAJmRg/Urmpm0I8HHTEPJN4vS4mJh6Wrd37XCYlk0pxGvngpbYYPd2//f+Pzhid6IjREaMTHTE60RGjI0YnzyGPydBtg/bJfwCln/+4V4N0SAAAAABJRU5ErkJggg==");

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