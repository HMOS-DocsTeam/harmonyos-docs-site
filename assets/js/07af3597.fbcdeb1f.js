"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["547602"], {
664954(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_data_augmentation_api_dataaugmentation_arkts_dataaugmentation_error_code_dataaugmentation_error_code_md_07a_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-data-augmentation-api-dataaugmentation-arkts-dataaugmentation-error-code-dataaugmentation-error-code-md-07a.json
var site_docs_ref_data_augmentation_api_dataaugmentation_arkts_dataaugmentation_error_code_dataaugmentation_error_code_md_07a_namespaceObject = JSON.parse('{"id":"data-augmentation-api/dataaugmentation-arkts/dataaugmentation-error-code/dataaugmentation-error-code","title":"ArkTS API错误码","description":"以下仅介绍本模块特有错误码，通用错误码请参考通用错误码说明文档。","source":"@site/docs-ref/data-augmentation-api/dataaugmentation-arkts/dataaugmentation-error-code/dataaugmentation-error-code.md","sourceDirName":"data-augmentation-api/dataaugmentation-arkts/dataaugmentation-error-code","slug":"/data-augmentation-api/dataaugmentation-arkts/dataaugmentation-error-code/dataaugmentation-error-code","permalink":"/harmonyos-docs-site/ref/data-augmentation-api/dataaugmentation-arkts/dataaugmentation-error-code/dataaugmentation-error-code","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"ArkTS API错误码","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataaugmentation-error-code","kit":"应用框架","last_updated":"2026-04-22","slug":"dataaugmentation-error-code"},"sidebar":"ref","previous":{"title":"localChatModel（端侧问答模型）","permalink":"/harmonyos-docs-site/ref/data-augmentation-api/dataaugmentation-arkts/dataaugmentation-localchatmodel-api/dataaugmentation-localchatmodel-api"},"next":{"title":"AIP","permalink":"/harmonyos-docs-site/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-module/dataaugmentation-capi-aip/dataaugmentation-capi-aip"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/data-augmentation-api/dataaugmentation-arkts/dataaugmentation-error-code/dataaugmentation-error-code.md


const frontMatter = {
	title: 'ArkTS API错误码',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataaugmentation-error-code',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'dataaugmentation-error-code'
};
const contentTitle = 'ArkTS API错误码';

const assets = {

};



const toc = [{
  "value": "1021000000 系统资源不足或内存访问异常",
  "id": "1021000000-系统资源不足或内存访问异常",
  "level": 2
}, {
  "value": "1021000001 调用LLM超时",
  "id": "1021000001-调用llm超时",
  "level": 2
}, {
  "value": "1021000002 调用LLM加载失败",
  "id": "1021000002-调用llm加载失败",
  "level": 2
}, {
  "value": "1021000003 调用LLM时发生请求失败",
  "id": "1021000003-调用llm时发生请求失败",
  "level": 2
}, {
  "value": "1021000004 LLM繁忙",
  "id": "1021000004-llm繁忙",
  "level": 2
}, {
  "value": "1021000005 LLM输出不符合约束",
  "id": "1021000005-llm输出不符合约束",
  "level": 2
}, {
  "value": "1021000006 RAG会话已存在",
  "id": "1021000006-rag会话已存在",
  "level": 2
}, {
  "value": "1021000007 RAG会话繁忙",
  "id": "1021000007-rag会话繁忙",
  "level": 2
}, {
  "value": "1021000008 RAG会话已关闭",
  "id": "1021000008-rag会话已关闭",
  "level": 2
}, {
  "value": "1021000009 用户已取消streamRun",
  "id": "1021000009-用户已取消streamrun",
  "level": 2
}, {
  "value": "1021000010 会话中发生超时",
  "id": "1021000010-会话中发生超时",
  "level": 2
}, {
  "value": "1021000011 某些参数不满足约束条件",
  "id": "1021000011-某些参数不满足约束条件",
  "level": 2
}, {
  "value": "1021000012 知识库不可用",
  "id": "1021000012-知识库不可用",
  "level": 2
}, {
  "value": "1021000013 Retrieval: 检索过程中发生错误",
  "id": "1021000013-retrieval-检索过程中发生错误",
  "level": 2
}, {
  "value": "1021000014 Retrieval: 存在无效的主键",
  "id": "1021000014-retrieval-存在无效的主键",
  "level": 2
}, {
  "value": "1021000015 Retrieval: 使用了不支持复合主键的重排序算法",
  "id": "1021000015-retrieval-使用了不支持复合主键的重排序算法",
  "level": 2
}, {
  "value": "1021000016 Retrieval: 筛选器输入无效",
  "id": "1021000016-retrieval-筛选器输入无效",
  "level": 2
}, {
  "value": "1021000017 Retrieval: RecallCondition中存在无效的召回名称",
  "id": "1021000017-retrieval-recallcondition中存在无效的召回名称",
  "level": 2
}, {
  "value": "1021000018 Retrieval: VectorQuery中的向量相似度阈值高于VectorRerankParameter中的分层阈值",
  "id": "1021000018-retrieval-vectorquery中的向量相似度阈值高于vectorrerankparameter中的分层阈值",
  "level": 2
}, {
  "value": "1021000019 Retrieval: RerankMethod参数与通道类型不匹配",
  "id": "1021000019-retrieval-rerankmethod参数与通道类型不匹配",
  "level": 2
}, {
  "value": "1021200001 数据库文件损坏",
  "id": "1021200001-数据库文件损坏",
  "level": 2
}, {
  "value": "1021200002 数据库或事务关闭",
  "id": "1021200002-数据库或事务关闭",
  "level": 2
}, {
  "value": "1021200003 数据库BUSY",
  "id": "1021200003-数据库busy",
  "level": 2
}, {
  "value": "1021200004 数据库内存不足",
  "id": "1021200004-数据库内存不足",
  "level": 2
}, {
  "value": "1021200100 SQLite 通用错误",
  "id": "1021200100-sqlite-通用错误",
  "level": 2
}, {
  "value": "1021200101 SQLite:访问权限被拒绝",
  "id": "1021200101-sqlite访问权限被拒绝",
  "level": 2
}, {
  "value": "1021200102 SQLite:数据库文件已锁定",
  "id": "1021200102-sqlite数据库文件已锁定",
  "level": 2
}, {
  "value": "1021200103 SQLite:发生了某种磁盘I/O错误",
  "id": "1021200103-sqlite发生了某种磁盘io错误",
  "level": 2
}, {
  "value": "1021200104 WAL文件大小超过默认上限",
  "id": "1021200104-wal文件大小超过默认上限",
  "level": 2
}, {
  "value": "1021200105 无法打开数据库文件",
  "id": "1021200105-无法打开数据库文件",
  "level": 2
}, {
  "value": "1021201000 Retrieval: Recall error",
  "id": "1021201000-retrieval-recall-error",
  "level": 2
}, {
  "value": "1021201001 Retrieval: Re-ranking error",
  "id": "1021201001-retrieval-re-ranking-error",
  "level": 2
}, {
  "value": "1021201002 Retrieval: Numerical parameter out of range",
  "id": "1021201002-retrieval-numerical-parameter-out-of-range",
  "level": 2
}, {
  "value": "1021201003 Retrieval: Invalid primary keys",
  "id": "1021201003-retrieval-invalid-primary-keys",
  "level": 2
}, {
  "value": "1021201004 Retrieval: Unsupport composite primary key in re-ranking",
  "id": "1021201004-retrieval-unsupport-composite-primary-key-in-re-ranking",
  "level": 2
}, {
  "value": "1021201005 Retrieval: Empty string field",
  "id": "1021201005-retrieval-empty-string-field",
  "level": 2
}, {
  "value": "1021201006 Retrieval: Illegal filter input",
  "id": "1021201006-retrieval-illegal-filter-input",
  "level": 2
}, {
  "value": "1021201007 Retrieval: Invalid recall field name",
  "id": "1021201007-retrieval-invalid-recall-field-name",
  "level": 2
}, {
  "value": "1021201008 Retrieval: Vector similarity threshold too high",
  "id": "1021201008-retrieval-vector-similarity-threshold-too-high",
  "level": 2
}, {
  "value": "1021201009 Retrieval: RerankMethod parameters do not match the channel type",
  "id": "1021201009-retrieval-rerankmethod-parameters-do-not-match-the-channel-type",
  "level": 2
}, {
  "value": "1021201010 Retrieval: Empty parameter value",
  "id": "1021201010-retrieval-empty-parameter-value",
  "level": 2
}, {
  "value": "1021200012 Unable to generate embeddings",
  "id": "1021200012-unable-to-generate-embeddings",
  "level": 2
}, {
  "value": "1021400000 内部错误",
  "id": "1021400000-内部错误",
  "level": 2
}, {
  "value": "1021400001 知识源未配置",
  "id": "1021400001-知识源未配置",
  "level": 2
}, {
  "value": "1021400002 知识schema文件不存在",
  "id": "1021400002-知识schema文件不存在",
  "level": 2
}, {
  "value": "1021400003 知识schema内容不合法",
  "id": "1021400003-知识schema内容不合法",
  "level": 2
}, {
  "value": "1021400004 操作RDB数据源时发生错误",
  "id": "1021400004-操作rdb数据源时发生错误",
  "level": 2
}, {
  "value": "1021400005 重复启动知识加工",
  "id": "1021400005-重复启动知识加工",
  "level": 2
}, {
  "value": "1021900001 调用端侧问答模型超时",
  "id": "1021900001-调用端侧问答模型超时",
  "level": 2
}, {
  "value": "1021900002 端侧问答模型加载失败",
  "id": "1021900002-端侧问答模型加载失败",
  "level": 2
}, {
  "value": "1021900003 端侧问答模型请求失败",
  "id": "1021900003-端侧问答模型请求失败",
  "level": 2
}, {
  "value": "1021900004 端侧问答模型繁忙",
  "id": "1021900004-端侧问答模型繁忙",
  "level": 2
}, {
  "value": "1021900005 某些参数不满足指定的约束条件",
  "id": "1021900005-某些参数不满足指定的约束条件",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "arkts-api错误码",
        children: "ArkTS API错误码"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(800954)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下仅介绍本模块特有错误码，通用错误码请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码说明文档"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1021000000-系统资源不足或内存访问异常",
      children: "1021000000 系统资源不足或内存访问异常"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Insufficient system resources or memory access exception."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "系统资源不足或内存访问异常。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "系统资源不足"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "系统错误，如空指针、数据服务异常重启、I/O错误、JS引擎异常等。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "尝试清理内存后重试。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果依然无法解决，可以提示用户重启应用、升级应用或升级设备版本。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1021000001-调用llm超时",
      children: "1021000001 调用LLM超时"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A timeout occurred when calling the LLM."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "与大语言模型交互过程中出现超时错误。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者在streamChat中请求大语言模型时出现超时错误。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["请开发者重新调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/data-augmentation-api/dataaugmentation-arkts/dataaugmentation-rag-api/dataaugmentation-rag-api#streamrun",
          children: "streamRun"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["多次重试均失败则需请开发者优化", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/data-augmentation-api/dataaugmentation-arkts/dataaugmentation-rag-api/dataaugmentation-rag-api#streamchat",
          children: "streamChat"
        }), "中使用的大语言模型及相应实现。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1021000002-调用llm加载失败",
      children: "1021000002 调用LLM加载失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A loading failure occurred when calling the LLM."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "与大语言模型交互过程中出现加载错误。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者在streamChat中请求大语言模型时出现加载错误。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["请开发者重新调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/data-augmentation-api/dataaugmentation-arkts/dataaugmentation-rag-api/dataaugmentation-rag-api#streamrun",
          children: "streamRun"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["多次重试均失败则需请开发者优化", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/data-augmentation-api/dataaugmentation-arkts/dataaugmentation-rag-api/dataaugmentation-rag-api#streamchat",
          children: "streamChat"
        }), "中使用的大语言模型及相应实现。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1021000003-调用llm时发生请求失败",
      children: "1021000003 调用LLM时发生请求失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A request failure occurred when calling the LLM."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "与大语言模型交互过程中发生请求失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/data-augmentation-api/dataaugmentation-arkts/dataaugmentation-rag-api/dataaugmentation-rag-api#streamchat",
        children: "streamChat"
      }), "中请求大语言模型时失败。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["请开发者重新调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/data-augmentation-api/dataaugmentation-arkts/dataaugmentation-rag-api/dataaugmentation-rag-api#streamrun",
          children: "streamRun"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["多次重试均失败则需请开发者优化", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/data-augmentation-api/dataaugmentation-arkts/dataaugmentation-rag-api/dataaugmentation-rag-api#streamchat",
          children: "streamChat"
        }), "中使用的大语言模型及相应实现。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1021000004-llm繁忙",
      children: "1021000004 LLM繁忙"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The LLM chat is busy."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "与大语言模型交互过程中大语言模型繁忙。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/data-augmentation-api/dataaugmentation-arkts/dataaugmentation-rag-api/dataaugmentation-rag-api#streamchat",
        children: "streamChat"
      }), "中请求大语言模型时大语言模型繁忙。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["请开发者重新调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/data-augmentation-api/dataaugmentation-arkts/dataaugmentation-rag-api/dataaugmentation-rag-api#streamrun",
          children: "streamRun"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["多次重试均失败则需请开发者优化", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/data-augmentation-api/dataaugmentation-arkts/dataaugmentation-rag-api/dataaugmentation-rag-api#streamchat",
          children: "streamChat"
        }), "中使用的大语言模型及相应实现。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1021000005-llm输出不符合约束",
      children: "1021000005 LLM输出不符合约束"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The output of LLM chat does not comply with the constraints."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "大语言模型响应结果的长度超出限制。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/data-augmentation-api/dataaugmentation-arkts/dataaugmentation-rag-api/dataaugmentation-rag-api#streamchat",
        children: "streamChat"
      }), "中的某一次大语言模型请求时，累计转发给rag的响应数据长度超出范围8192字节。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请开发者检查大语言模型响应结果，并检查对于大语言模型响应的解析以及给rag的数据的拼装是否正确。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1021000006-rag会话已存在",
      children: "1021000006 RAG会话已存在"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The RAG session already exists."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "RAG会话已存在。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/data-augmentation-api/dataaugmentation-arkts/dataaugmentation-rag-api/dataaugmentation-rag-api#ragsession",
        children: "RagSession"
      }), "未关闭，重复创建", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/data-augmentation-api/dataaugmentation-arkts/dataaugmentation-rag-api/dataaugmentation-rag-api#ragsession",
        children: "RagSession"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/data-augmentation-api/dataaugmentation-arkts/dataaugmentation-rag-api/dataaugmentation-rag-api#config",
        children: "Config"
      }), "没有变化，可以使用之前的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/data-augmentation-api/dataaugmentation-arkts/dataaugmentation-rag-api/dataaugmentation-rag-api#ragsession",
        children: "RagSession"
      }), "继续对话，否则，请先使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/data-augmentation-api/dataaugmentation-arkts/dataaugmentation-rag-api/dataaugmentation-rag-api#close",
        children: "close"
      }), "接口关闭旧的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/data-augmentation-api/dataaugmentation-arkts/dataaugmentation-rag-api/dataaugmentation-rag-api#ragsession",
        children: "RagSession"
      }), "，再使用新的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/data-augmentation-api/dataaugmentation-arkts/dataaugmentation-rag-api/dataaugmentation-rag-api#config",
        children: "Config"
      }), "调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/data-augmentation-api/dataaugmentation-arkts/dataaugmentation-rag-api/dataaugmentation-rag-api#createragsession",
        children: "createRagSession"
      }), "接口创建新的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/data-augmentation-api/dataaugmentation-arkts/dataaugmentation-rag-api/dataaugmentation-rag-api#ragsession",
        children: "RagSession"
      }), "进行对话。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1021000007-rag会话繁忙",
      children: "1021000007 RAG会话繁忙"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The RAG session is busy."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "RAG会话繁忙。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["前一次", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/data-augmentation-api/dataaugmentation-arkts/dataaugmentation-rag-api/dataaugmentation-rag-api#streamrun",
        children: "streamRun"
      }), "回答期间重新调用了", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/data-augmentation-api/dataaugmentation-arkts/dataaugmentation-rag-api/dataaugmentation-rag-api#streamrun",
        children: "streamRun"
      }), "开启新一轮问答。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果开发者希望保留前一次回答结果，请等待前一次", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/data-augmentation-api/dataaugmentation-arkts/dataaugmentation-rag-api/dataaugmentation-rag-api#streamrun",
        children: "streamRun"
      }), "结束，再重新调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/data-augmentation-api/dataaugmentation-arkts/dataaugmentation-rag-api/dataaugmentation-rag-api#streamrun",
        children: "streamRun"
      }), "进行新一轮问答。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1021000008-rag会话已关闭",
      children: "1021000008 RAG会话已关闭"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The RAG session is Already closed."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "RAG会话已关闭。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/data-augmentation-api/dataaugmentation-arkts/dataaugmentation-rag-api/dataaugmentation-rag-api#ragsession",
        children: "RagSession"
      }), "的接口时，", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/data-augmentation-api/dataaugmentation-arkts/dataaugmentation-rag-api/dataaugmentation-rag-api#ragsession",
        children: "RagSession"
      }), "已关闭。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/data-augmentation-api/dataaugmentation-arkts/dataaugmentation-rag-api/dataaugmentation-rag-api#ragsession",
        children: "RagSession"
      }), "的接口前请确认存在打开的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/data-augmentation-api/dataaugmentation-arkts/dataaugmentation-rag-api/dataaugmentation-rag-api#ragsession",
        children: "RagSession"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1021000009-用户已取消streamrun",
      children: "1021000009 用户已取消streamRun"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "User has canceled the stream run."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["用户已取消", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/data-augmentation-api/dataaugmentation-arkts/dataaugmentation-rag-api/dataaugmentation-rag-api#streamrun",
        children: "streamRun"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/data-augmentation-api/dataaugmentation-arkts/dataaugmentation-rag-api/dataaugmentation-rag-api#streamrun",
        children: "streamRun"
      }), "接口过程中，用户主动取消了本次", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/data-augmentation-api/dataaugmentation-arkts/dataaugmentation-rag-api/dataaugmentation-rag-api#streamrun",
        children: "streamRun"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["请用户按需取消", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/data-augmentation-api/dataaugmentation-arkts/dataaugmentation-rag-api/dataaugmentation-rag-api#streamrun",
        children: "streamRun"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1021000010-会话中发生超时",
      children: "1021000010 会话中发生超时"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A timeout occurred in the session."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "会话中发生超时。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Retriever检索数据超时。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["请开发者尝试重试", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/data-augmentation-api/dataaugmentation-arkts/dataaugmentation-rag-api/dataaugmentation-rag-api#streamrun",
        children: "streamRun"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1021000011-某些参数不满足约束条件",
      children: "1021000011 某些参数不满足约束条件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Some parameter does not meet the constraints."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "某些参数不满足约束条件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/data-augmentation-api/dataaugmentation-arkts/dataaugmentation-rag-api/dataaugmentation-rag-api#createragsession",
        children: "createRagSession"
      }), "时传入的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/data-augmentation-api/dataaugmentation-arkts/dataaugmentation-rag-api/dataaugmentation-rag-api#config",
        children: "Config"
      }), "不满足约束条件。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["请开发者查阅API参考中对各类型的描述，结合实际业务需要配置正确", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/data-augmentation-api/dataaugmentation-arkts/dataaugmentation-rag-api/dataaugmentation-rag-api#config",
        children: "Config"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1021000012-知识库不可用",
      children: "1021000012 知识库不可用"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The knowledge base is not available."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "知识库不可用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "未配置知识加工schema。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "错误配置知识加工schema。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["使用rag能力前请确认已配置", (0,jsx_runtime.jsx)(_components.a, {
          href: "/data-augmentation-kit-guide/data-augmentation-knowledge-processing",
          children: "知识加工"
        }), "schema。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查schema配置文件格式及内容，确保符合相应约束。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1021000013-retrieval-检索过程中发生错误",
      children: "1021000013 Retrieval: 检索过程中发生错误"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Retrieval: An error occurred during the Retrieval."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检索过程中发生错误。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在检索模块的Recall阶段发生错误，比如服务内部状态异常，或者输入参数有问题。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在检索模块的Re-ranking阶段发生错误，比如服务端状态异常或排序逻辑错误。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查输入参数是否符合要求。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "确保服务端状态正常并且已经完成相关初始化工作。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查服务的内部逻辑，确保排序方法符合预期。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1021000014-retrieval-存在无效的主键",
      children: "1021000014 Retrieval: 存在无效的主键"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Retrieval: There are invalid primary keys."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "存在无效的主键。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "多个召回过程配置的主键个数不一致。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "配置的主键为空字符串。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查输入主键是否正确一致。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "修正Config中配置的主键信息后重试。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1021000015-retrieval-使用了不支持复合主键的重排序算法",
      children: "1021000015 Retrieval: 使用了不支持复合主键的重排序算法"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Retrieval: A re-ranking algorithm that does not support composite primary keys was used."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用了不支持复合主键的重排序算法。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "重排序算法中除了rrf排序算法，其他排序算法不支持多主键。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "确保主键数量不超过算法允许的限制。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["修正", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/data-augmentation-api/dataaugmentation-arkts/dataaugmentation-rag-api/dataaugmentation-rag-api#config",
          children: "Config"
        }), "后重试。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1021000016-retrieval-筛选器输入无效",
      children: "1021000016 Retrieval: 筛选器输入无效"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Retrieval: The filter input is invalid."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "筛选器输入无效。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "缺失必要字段。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "对于“between”类型，没有定义“range”字段。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "对于非“between”类型，没有定义“value”字段。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查filter参数。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["修正", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/data-augmentation-api/dataaugmentation-arkts/dataaugmentation-rag-api/dataaugmentation-rag-api#config",
          children: "Config"
        }), "后重试。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1021000017-retrieval-recallcondition中存在无效的召回名称",
      children: "1021000017 Retrieval: RecallCondition中存在无效的召回名称"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Retrieval: There are invalid recall names in RecallCondition."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "RecallCondition中存在无效的召回名称。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "不同RecallCondition中的recallName字段相同。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查每个RecallCondition中的recallName字段名称，确保其合法性。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["修正", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/data-augmentation-api/dataaugmentation-arkts/dataaugmentation-rag-api/dataaugmentation-rag-api#config",
          children: "Config"
        }), "后重试。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1021000018-retrieval-vectorquery中的向量相似度阈值高于vectorrerankparameter中的分层阈值",
      children: "1021000018 Retrieval: VectorQuery中的向量相似度阈值高于VectorRerankParameter中的分层阈值"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Retrieval: The vector similarity threshold in VectorQuery is higher than the tiered threshold in VectorRerankParameter."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "VectorQuery中的相似度阈值超出了VectorRerankParameter的分层阈值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "VectorQuery中输入的相似度阈值大于VectorRerankParameter的最小阈值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查VectorQuery的参数配置，确保其在合理的范围内。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["修正", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/data-augmentation-api/dataaugmentation-arkts/dataaugmentation-rag-api/dataaugmentation-rag-api#config",
          children: "Config"
        }), "后重试。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1021000019-retrieval-rerankmethod参数与通道类型不匹配",
      children: "1021000019 Retrieval: RerankMethod参数与通道类型不匹配"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Retrieval: RerankMethod parameters do not match the channel type."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "RerankMethod参数与通道类型不匹配。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "输入的参数和通道类型未正确关联。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查输入的通道类型和参数是否匹配。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["修正", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/data-augmentation-api/dataaugmentation-arkts/dataaugmentation-rag-api/dataaugmentation-rag-api#config",
          children: "Config"
        }), "后重试。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1021200001-数据库文件损坏",
      children: "1021200001 数据库文件损坏"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The database is corrupted."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该错误码表示在调用数据库read、write等接口时，数据库已损坏。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "调用数据库read、write等接口操作数据库时，数据库文件已损坏。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "目前暂不支持数据库的备份、恢复，如果可以接受数据库数据丢失，则可尝试删除数据库后重新创建。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1021200002-数据库或事务关闭",
      children: "1021200002 数据库或事务关闭"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The database is closed."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "数据库或事务关闭。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "执行当前操作时，已调用过close接口关闭数据库或者开库未成功。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "执行当前操作时，已调用过commit接口提交事务或者调用过rollback接口回滚事务。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "使用getStore接口重新开库，注意入参应与前一次成功开库时的入参保持一致。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "使用createTransaction接口重新创建事务。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1021200003-数据库busy",
      children: "1021200003 数据库BUSY"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The database is busy."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "数据库BUSY。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "同一应用多个进程同时打开了同一个数据库，进行读写操作。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "进程内多线程同时进行读写操作，导致某一线程读写操作超时。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "存在一个事务调用过write接口写入数据但未提交或回滚。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "避免进程并发操作数据库。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "等待一段时间重试。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "提交或回滚未关闭的事务。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1021200004-数据库内存不足",
      children: "1021200004 数据库内存不足"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The database is out of memory."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "数据库内存不足。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "数据库内存不足，可能是由于数据量过大或内存分配不足导致的。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "减小数据量或尝试通过清理其他进程增加内存分配。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1021200100-sqlite-通用错误",
      children: "1021200100 SQLite 通用错误"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SQLite: Generic error."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SQLite：通用错误。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "执行sql语句过程中出现错误，如："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "插入或更新未创建的表。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "插入或更新未曾有的列。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "查询时指定了未曾有的列，或指定了不存在的表。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "调用未定义的函数等，参见SQLITE_ERROR的相关错误场景。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者分析错误的SQL语句，找出错误点。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1021200101-sqlite访问权限被拒绝",
      children: "1021200101 SQLite:访问权限被拒绝"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SQLite: Access permission denied."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SQLite访问权限被拒绝。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "操作系统级别的权限问题，意味着SQLite试图访问或修改一个文件，但是没有足够的权限去执行这个操作。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "参见SQLITE_PERM的相关错误场景。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "确认文件没有只读属性，如果有，去掉只读属性。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查文件和文件夹的权限，确保当前用户有足够的权限来读写文件。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查文件系统是否为只读，如果是，改为可写状态。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "确认没有其他进程锁定数据库文件，如果有，关闭占用文件的进程。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在处理权限问题时，确保有足够的权限去更改相关的文件或文件夹权限。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1021200102-sqlite数据库文件已锁定",
      children: "1021200102 SQLite:数据库文件已锁定"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SQLite: The database file is locked."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SQLite数据库文件已锁定。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "同一应用两个进程，例如UIability和datashareability同时打开了同一个数据库，进行增删改操作，或者不同应用的同一个group组内的进程通过group组打开同一个数据库，进行增删改操作。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "参见SQLITE_BUSY的相关错误场景。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "避免进程并发操作数据库。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "等待一段时间重试。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1021200103-sqlite发生了某种磁盘io错误",
      children: "1021200103 SQLite:发生了某种磁盘I/O错误"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SQLite: Some kind of disk I/O error occurred."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SQLite发生了某种磁盘I/O错误。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可能是由于多种原因造成的，包括但不限于："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "文件不存在。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "文件是只读的。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "磁盘空间不足。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "文件损坏。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "参见SQLITE_IOERR的相关错误场景。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查文件路径是否正确，文件是否存在。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "确保文件没有设置为只读。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查磁盘空间是否足够，并清理不必要的文件释放空间。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查文件的权限，确保应用程序有足够的权限去读写文件。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1021200104-wal文件大小超过默认上限",
      children: "1021200104 WAL文件大小超过默认上限"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SQLite: The WAL file size exceeds the default limit."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "WAL文件大小超过默认上限（512MB）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在开启读事务或者结果集未关闭的情况下，不断执行增删改操作，导致WAL文件大小超过默认上限。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查结果集或者事务是否未关闭。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "关闭所有的结果集或者事务。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1021200105-无法打开数据库文件",
      children: "1021200105 无法打开数据库文件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SQLite: Unable to open the database file."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "无法打开数据库文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "文件不存在，并且创建新数据库失败。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "文件存在，但是数据库文件损坏。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "文件权限问题，SQLite无法读写文件。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "磁盘空间不足。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "参见SQLITE_CANTOPEN的相关错误场景"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "确认数据库文件路径是否正确，检查文件权限，确保应用程序有足够的权限去读写文件。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "确认磁盘空间足够。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1021201000-retrieval-recall-error",
      children: "1021201000 Retrieval: Recall error"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Retrieval: An error occurred during the recall phase."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在检索模块的Recall阶段发生错误。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "服务内部状态异常，或者输入参数有问题。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查输入参数是否符合要求。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "确保服务端状态正常并且已经完成相关初始化工作。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1021201001-retrieval-re-ranking-error",
      children: "1021201001 Retrieval: Re-ranking error"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Retrieval: An error occurred during the re-ranking phase."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在检索模块的Re-ranking阶段发生错误。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "服务端状态异常或排序逻辑错误。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查输入的排序参数时候正确。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查服务的内部逻辑，确保排序方法符合预期。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1021201002-retrieval-numerical-parameter-out-of-range",
      children: "1021201002 Retrieval: Numerical parameter out of range"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Retrieval: The value of the numerical parameter is outside the constrained range."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "某数值参数的值超出了允许的范围。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "提供的参数值未按文档要求设置参数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查输入的数值参数，确保其在文档指定的范围内。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "修改参数值并重试。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1021201003-retrieval-invalid-primary-keys",
      children: "1021201003 Retrieval: Invalid primary keys"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Retrieval: The primary key is invalid."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Primary keys值未按文档要求设置参数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在多个Recall过程中，recall的参数中使用的主键个数不一致。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "recall接口的参数中，主键的个数为空。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "recall接口的参数中，主键为空字符串。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查输入主键是否正确一致。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "修正Recall流程中的主键信息后重试。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1021201004-retrieval-unsupport-composite-primary-key-in-re-ranking",
      children: "1021201004 Retrieval: Unsupport composite primary key in re-ranking"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Retrieval: A re-ranking algorithm that does not support composite primary keys was used."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "不支持多主键的re-ranking算法中传入的主键个数大于1。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Re-ranking算法中除了rrf排序算法，其他排序算法不支持多主键。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "确保主键数量不超过算法允许的限制。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "修正输入数据后重试。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1021201005-retrieval-empty-string-field",
      children: "1021201005 Retrieval: Empty string field"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Retrieval: There is a field with an empty string."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "输入参数中存在空字符串字段。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "输入参数包含不合法的空字符串值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查输入字符串字段，确保所有值为非空。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "修正输入数据后重试。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1021201006-retrieval-illegal-filter-input",
      children: "1021201006 Retrieval: Illegal filter input"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Retrieval: The filter input is invalid."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "提供的filter是无效参数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "缺失必要字段（没有field&没有fields；没有value且没有range；没有op）。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "对于between，没有定义range。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "对于非between，没有定义value。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查filter参数。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "修正输入数据后重试。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1021201007-retrieval-invalid-recall-field-name",
      children: "1021201007 Retrieval: Invalid recall field name"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Retrieval: There is invalid recall name in RecallCondition."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "RecallCondition中的recallName字段相同。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "不同RecallCondition中的recallName字段相同。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查每个RecallCondition中的recallName字段名称，确保其合法性。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "根据文档修改字段名称并重试。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1021201008-retrieval-vector-similarity-threshold-too-high",
      children: "1021201008 Retrieval: Vector similarity threshold too high"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Retrieval: The vector similarity threshold in VectorQuery is higher than the tiered threshold in VectorRerankParameter."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "VectorQuery中的相似度阈值超出了VectorRerankParameter的分层阈值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "VectorQuery中输入的相似度阈值大于VectorRerankParameter的最小阈值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查VectorQuery的参数配置，确保其在合理的范围内。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "修改相似度阈值后重试。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1021201009-retrieval-rerankmethod-parameters-do-not-match-the-channel-type",
      children: "1021201009 Retrieval: RerankMethod parameters do not match the channel type"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Retrieval: RerankMethod parameters do not match the channel type."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "RerankMethod参数与通道类型不匹配。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "输入的参数和通道类型未正确关联。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查输入的通道类型和参数是否匹配。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "修改参数配置后重试。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1021201010-retrieval-empty-parameter-value",
      children: "1021201010 Retrieval: Empty parameter value"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Retrieval: There exists a parameter value that should not be empty but is actually not defined."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "输入的参数为空。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "调用时未提供合法的参数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查输入的参数是否合法。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "修改参数配置后重试。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1021200012-unable-to-generate-embeddings",
      children: "1021200012 Unable to generate embeddings"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Unable to generate embeddings"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "加载模型失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当前版本不支持自动生成query的向量，需要直接导入向量数组。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "可能因资源不足导致模型加载异常。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "修改参数配置后重试。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1021400000-内部错误",
      children: "1021400000 内部错误"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Internal error."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "内部错误。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "优先查看错误日志，通过日志可以详细了解错误原因，主要有以下几种："
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "接口执行异常。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "内部状态异常。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "错误地使用接口。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "系统错误，如空指针、数据服务异常重启、I/O错误、JS引擎异常等。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "数据库异常。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "开发者排查是否按接口文档正确使用接口。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "尝试重试，如果依然无法解决，可以提示用户重启应用、升级应用或升级设备版本。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1021400001-知识源未配置",
      children: "1021400001 知识源未配置"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The knowledge source is not configured."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "知识源配置中的rdbSource未配置。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "知识源配置中的rdbSource未配置。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["参照", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/data-augmentation-api/dataaugmentation-arkts/dataaugmentation-knowledgeprocessor-api/dataaugmentation-knowledgeprocessor-api#knowledgesourceconfig",
          children: "知识源配置"
        }), "类型，正确配置rdbSource字段。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1021400002-知识schema文件不存在",
      children: "1021400002 知识schema文件不存在"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The knowledge schema file is not found."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "知识schema文件不存在。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "知识schema文件未放到指定目录下。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["参考开发步骤中的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/data-augmentation-kit-guide/data-augmentation-knowledge-processing#%E5%BC%80%E5%8F%91%E6%AD%A5%E9%AA%A4",
          children: "知识schema配置示例"
        }), "，将knowledge_schema.json放到指定的entry/src/main/resources/rawfile/arkdata/knowledge目录下。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1021400003-知识schema内容不合法",
      children: "1021400003 知识schema内容不合法"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The knowledge schema content is invalid."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "知识schema内容不合法。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "知识schema中的内容不符合当前的规格及约束限制。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["参#fig照", (0,jsx_runtime.jsx)(_components.a, {
          href: "/data-augmentation-kit-guide/data-augmentation-knowledge-processing#%E7%BA%A6%E6%9D%9F%E9%99%90%E5%88%B6",
          children: "知识schema规格及约束限制"
        }), "修改其中内容。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1021400004-操作rdb数据源时发生错误",
      children: "1021400004 操作RDB数据源时发生错误"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An error occurred during operations on the RDB source."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "操作RDB数据源时发生错误。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RDB数据源异常导致操作RDB数据源时发生了错误。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "尝试重试，如果依然无法解决，可以提示用户重启应用、升级应用或升级设备版"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1021400005-重复启动知识加工",
      children: "1021400005 重复启动知识加工"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Feature already active. Function called repeatedly."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "重复启动知识加工。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "重复调用启动知识加工接口。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "启动知识加工后，不要重复调用。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1021900001-调用端侧问答模型超时",
      children: "1021900001 调用端侧问答模型超时"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A timeout occurs when the local chat model is called."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "调用端侧大模型超时。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "输入的问题内容过长导致端侧问答模型处理过久。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "系统繁忙，硬件资源紧张，端侧问答模型处理过慢。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "尝试缩短输入问题的长度。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "关闭后台优先级低的进程，并稍后重试。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1021900002-端侧问答模型加载失败",
      children: "1021900002 端侧问答模型加载失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A loading failure occurs when the local chat model is called."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "调用端侧大模型时端侧问答模型加载失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "没有在PC模型管家下载模型文件。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PC模型管家服务拉起失败。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在PC模型管家下载页面下载模型。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "重启应用后重试。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1021900003-端侧问答模型请求失败",
      children: "1021900003 端侧问答模型请求失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A request failure occurs when the local chat model is called."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "调用端侧问答模型时端侧问答模型请求失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "内部处理流程异常。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "稍后重试。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1021900004-端侧问答模型繁忙",
      children: "1021900004 端侧问答模型繁忙"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The local chat model is busy."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "调用端侧问答模型时端侧问答模型繁忙。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "模型正在处理其他任务。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "关闭其他优先级低的问答请求，并稍后重试。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1021900005-某些参数不满足指定的约束条件",
      children: "1021900005 某些参数不满足指定的约束条件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Some parameters do not meet the specified constraints."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "某些参数不满足指定的约束条件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "接口的入参不符合约束条件。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "按照约束条件修改入参后重试。"
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
800954(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

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