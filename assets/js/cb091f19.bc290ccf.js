"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["211071"], {
379834(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_data_augmentation_api_dataaugmentation_arkts_dataaugmentation_knowledgeprocessor_api_dataaugmentation_knowledgeprocessor_api_md_cb0_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-data-augmentation-api-dataaugmentation-arkts-dataaugmentation-knowledgeprocessor-api-dataaugmentation-knowledgeprocessor-api-md-cb0.json
var site_docs_ref_data_augmentation_api_dataaugmentation_arkts_dataaugmentation_knowledgeprocessor_api_dataaugmentation_knowledgeprocessor_api_md_cb0_namespaceObject = JSON.parse('{"id":"data-augmentation-api/dataaugmentation-arkts/dataaugmentation-knowledgeprocessor-api/dataaugmentation-knowledgeprocessor-api","title":"knowledgeProcessor（知识加工）","description":"本模块提供获取知识加工对象（KnowledgeProcessor）以及获取知识加工状态（ProcessorStatus）的能力。","source":"@site/docs-ref/data-augmentation-api/dataaugmentation-arkts/dataaugmentation-knowledgeprocessor-api/dataaugmentation-knowledgeprocessor-api.md","sourceDirName":"data-augmentation-api/dataaugmentation-arkts/dataaugmentation-knowledgeprocessor-api","slug":"/data-augmentation-api/dataaugmentation-arkts/dataaugmentation-knowledgeprocessor-api/dataaugmentation-knowledgeprocessor-api","permalink":"/harmonyos-docs-site/ref/data-augmentation-api/dataaugmentation-arkts/dataaugmentation-knowledgeprocessor-api/dataaugmentation-knowledgeprocessor-api","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"knowledgeProcessor（知识加工）","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataaugmentation-knowledgeprocessor-api","kit":"应用框架","last_updated":"2026-04-22","slug":"dataaugmentation-knowledgeprocessor-api"},"sidebar":"ref","previous":{"title":"retrieval（智慧化数据平台）","permalink":"/harmonyos-docs-site/ref/data-augmentation-api/dataaugmentation-arkts/dataaugmentation-retrieval-api/dataaugmentation-retrieval-api"},"next":{"title":"localChatModel（端侧问答模型）","permalink":"/harmonyos-docs-site/ref/data-augmentation-api/dataaugmentation-arkts/dataaugmentation-localchatmodel-api/dataaugmentation-localchatmodel-api"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/data-augmentation-api/dataaugmentation-arkts/dataaugmentation-knowledgeprocessor-api/dataaugmentation-knowledgeprocessor-api.md


const frontMatter = {
	title: 'knowledgeProcessor（知识加工）',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataaugmentation-knowledgeprocessor-api',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'dataaugmentation-knowledgeprocessor-api'
};
const contentTitle = 'knowledgeProcessor（知识加工）';

const assets = {

};



const toc = [{
  "value": "导入模块",
  "id": "导入模块",
  "level": 2
}, {
  "value": "getKnowledgeProcessor",
  "id": "getknowledgeprocessor",
  "level": 2
}, {
  "value": "cleanKnowledgeData",
  "id": "cleanknowledgedata",
  "level": 2
}, {
  "value": "KnowledgeProcessorConfig",
  "id": "knowledgeprocessorconfig",
  "level": 2
}, {
  "value": "KnowledgeSourceConfig",
  "id": "knowledgesourceconfig",
  "level": 2
}, {
  "value": "KnowledgeProcessConfig",
  "id": "knowledgeprocessconfig",
  "level": 2
}, {
  "value": "KnowledgeProcessorMode",
  "id": "knowledgeprocessormode",
  "level": 2
}, {
  "value": "KnowledgeProcessor",
  "id": "knowledgeprocessor",
  "level": 2
}, {
  "value": "getStatus",
  "id": "getstatus",
  "level": 3
}, {
  "value": "startProcess",
  "id": "startprocess",
  "level": 3
}, {
  "value": "stopProcess",
  "id": "stopprocess",
  "level": 3
}, {
  "value": "ProcessorStatus",
  "id": "processorstatus",
  "level": 2
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
        id: "knowledgeprocessor知识加工",
        children: "knowledgeProcessor（知识加工）"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本模块提供获取知识加工对象（KnowledgeProcessor）以及获取知识加工状态（ProcessorStatus）的能力。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "由于知识加工能力依赖的嵌入模型只支持在PC/2in1部署，因此当前知识加工能力仅支持PC/2in1设备。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "导入模块",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { knowledgeProcessor } from '@kit.DataAugmentationKit';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "getknowledgeprocessor",
      children: "getKnowledgeProcessor"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getKnowledgeProcessor(context: common.BaseContext, config: KnowledgeProcessorConfig): Promise<KnowledgeProcessor>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取知识加工对象，用于获取知识加工状态等操作。使用promise异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在schema升级场景下，首次开库或调用getKnowledgeProcessor接口前需调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#cleanknowledgedata",
        children: "cleanKnowledgeData"
      }), "接口。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.DataAugmentation.KnowledgeProcessor"]
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
            children: "context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-basecontext/js-apis-inner-application-basecontext",
              children: "common.BaseContext"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "知识加工对象的上下文。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "config"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#knowledgeprocessorconfig",
              children: "KnowledgeProcessorConfig"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "知识加工配置。"
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
              href: "#knowledgeprocessor",
              children: "KnowledgeProcessor"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise对象，返回知识加工对象。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "/ref/data-augmentation-api/dataaugmentation-arkts/dataaugmentation-error-code/dataaugmentation-error-code#section1021400000-%E5%86%85%E9%83%A8%E9%94%99%E8%AF%AF",
              children: "1021400000"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal error."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/data-augmentation-api/dataaugmentation-arkts/dataaugmentation-error-code/dataaugmentation-error-code#section1021400001-%E7%9F%A5%E8%AF%86%E6%BA%90%E6%9C%AA%E9%85%8D%E7%BD%AE",
              children: "1021400001"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The knowledge source is not configured."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/data-augmentation-api/dataaugmentation-arkts/dataaugmentation-error-code/dataaugmentation-error-code#section1021400002-%E7%9F%A5%E8%AF%86schema%E6%96%87%E4%BB%B6%E4%B8%8D%E5%AD%98%E5%9C%A8",
              children: "1021400002"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The knowledge schema file is not found."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/data-augmentation-api/dataaugmentation-arkts/dataaugmentation-error-code/dataaugmentation-error-code#section1021400003-%E7%9F%A5%E8%AF%86schema%E5%86%85%E5%AE%B9%E4%B8%8D%E5%90%88%E6%B3%95",
              children: "1021400003"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The knowledge schema content is invalid."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/data-augmentation-api/dataaugmentation-arkts/dataaugmentation-error-code/dataaugmentation-error-code#section1021400004-%E6%93%8D%E4%BD%9Crdb%E6%95%B0%E6%8D%AE%E6%BA%90%E6%97%B6%E5%8F%91%E7%94%9F%E9%94%99%E8%AF%AF",
              children: "1021400004"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "An error occurred during operations on the RDB source."
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
        children: "import { knowledgeProcessor } from '@kit.DataAugmentationKit';\nimport { common } from '@kit.AbilityKit';\nimport { relationalStore } from '@kit.ArkData';\n\nconst storeName: string = \"testmail_store.db\";\nconst storeConfig: relationalStore.StoreConfig = {\n  name: storeName, // 已触发知识加工的数据库名\n  securityLevel: relationalStore.SecurityLevel.S3,\n  tokenizer: relationalStore.Tokenizer.CUSTOM_TOKENIZER,\n};\nconst knowledgeSourceConfig: knowledgeProcessor.KnowledgeSourceConfig = {\n  rdbSource: storeConfig,\n};\nconst knowledgeProcessorConfig: knowledgeProcessor.KnowledgeProcessorConfig = {\n  sourceConfig: knowledgeSourceConfig,\n};\n// 获取知识加工器的异步函数\nasync function getProcessor() {\n  const context = AppStorage.get<common.UIAbilityContext>(\"Context\") as common.UIAbilityContext;\n  try {\n    // 获取知识加工对象\n    const processor = await knowledgeProcessor.getKnowledgeProcessor(context, knowledgeProcessorConfig);\n    return processor;\n  } catch (err) {\n    console.error(\"Error: \" + err.message + \" code: \" + err.code);\n    return undefined;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cleanknowledgedata",
      children: "cleanKnowledgeData"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cleanKnowledgeData(context: common.BaseContext, config: KnowledgeProcessorConfig): Promise<void>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据入参中的知识加工配置获取对应知识库信息，将对应知识库进行清空。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在schema升级场景下，首次开库或调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#getknowledgeprocessor",
        children: "getKnowledgeProcessor"
      }), "接口前调用cleanKnowledgeData接口，其他场景调用可能会导致知识库数据丢失或者数据损坏。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.DataAugmentation.KnowledgeProcessor"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.1.0(23)"]
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
            children: "context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-basecontext/js-apis-inner-application-basecontext",
              children: "common.BaseContext"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "知识加工对象的上下文。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "config"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#knowledgeprocessorconfig",
              children: "KnowledgeProcessorConfig"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "知识加工配置。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/data-augmentation-api/dataaugmentation-arkts/dataaugmentation-error-code/dataaugmentation-error-code#section1021400001-%E7%9F%A5%E8%AF%86%E6%BA%90%E6%9C%AA%E9%85%8D%E7%BD%AE",
              children: "1021400001"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The knowledge source is not configured."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/data-augmentation-api/dataaugmentation-arkts/dataaugmentation-error-code/dataaugmentation-error-code#section1021400002-%E7%9F%A5%E8%AF%86schema%E6%96%87%E4%BB%B6%E4%B8%8D%E5%AD%98%E5%9C%A8",
              children: "1021400002"
            }), "  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/data-augmentation-api/dataaugmentation-arkts/dataaugmentation-error-code/dataaugmentation-error-code#section1021400003-%E7%9F%A5%E8%AF%86schema%E5%86%85%E5%AE%B9%E4%B8%8D%E5%90%88%E6%B3%95",
              children: "1021400003"
            }), "  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/data-augmentation-api/dataaugmentation-arkts/dataaugmentation-error-code/dataaugmentation-error-code#section1021400004-%E6%93%8D%E4%BD%9Crdb%E6%95%B0%E6%8D%AE%E6%BA%90%E6%97%B6%E5%8F%91%E7%94%9F%E9%94%99%E8%AF%AF",
              children: "1021400004"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The knowledge schema file is not found.  The knowledge schema content is invalid.  An error occurred during operations on the RDB source."
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
        children: "import { knowledgeProcessor } from '@kit.DataAugmentationKit';\nimport { common } from '@kit.AbilityKit';\nimport { relationalStore } from '@kit.ArkData';\n\nconst storeName: string = \"testmail_store.db\";\nconst storeConfig: relationalStore.StoreConfig = {\n  name: storeName, // 已触发知识加工的数据库名\n  securityLevel: relationalStore.SecurityLevel.S3,\n  tokenizer: relationalStore.Tokenizer.CUSTOM_TOKENIZER,\n};\nconst knowledgeSourceConfig: knowledgeProcessor.KnowledgeSourceConfig = {\n  rdbSource: storeConfig,\n};\nconst knowledgeProcessorConfig: knowledgeProcessor.KnowledgeProcessorConfig = {\n  sourceConfig: knowledgeSourceConfig,\n};\n// 清理知识库的异步函数\nasync function cleanKnowledgeData() {\n  const context = AppStorage.get<common.UIAbilityContext>(\"Context\") as common.UIAbilityContext;\n  try {\n    // 清理知识库\n    await knowledgeProcessor.cleanKnowledgeData(context, knowledgeProcessorConfig);\n  } catch (err) {\n    console.error(\"Error: \" + err.message + \" code: \" + err.code);\n    return undefined;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "knowledgeprocessorconfig",
      children: "KnowledgeProcessorConfig"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "管理知识加工对象的配置。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.DataAugmentation.KnowledgeProcessor"]
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
            children: "sourceConfig"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#knowledgesourceconfig",
              children: "KnowledgeSourceConfig"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前知识加工数据源配置。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "knowledgesourceconfig",
      children: "KnowledgeSourceConfig"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "管理知识数据源配置。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.DataAugmentation.KnowledgeProcessor"]
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
            children: "mode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "relationalStore.StoreConfig"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["RDB数据库配置。加工数据源为RDB数据库时配置，当前版本仅支持RDB数据源，若不填该参数，接口返回错误码", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/data-augmentation-api/dataaugmentation-arkts/dataaugmentation-error-code/dataaugmentation-error-code#section1021400001-%E7%9F%A5%E8%AF%86%E6%BA%90%E6%9C%AA%E9%85%8D%E7%BD%AE",
              children: "1021400001"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "knowledgeprocessconfig",
      children: "KnowledgeProcessConfig"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "知识加工配置。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.DataAugmentation.KnowledgeProcessor"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.1.0(23)"]
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
            children: "mode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#knowledgeprocessormode",
              children: "KnowledgeProcessorMode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "知识加工参数。倒排或者倒排+向量两种加工模式."
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "knowledgeprocessormode",
      children: "KnowledgeProcessorMode"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "知识加工模式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.DataAugmentation.KnowledgeProcessor"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.1.0(23)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "INVERTED_INDEX"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "倒排加工模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "INVERTED_INDEX_VECTORIZATION"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "倒排＋向量加工模式。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "knowledgeprocessor",
      children: "KnowledgeProcessor"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "知识加工对象，用于获取知识加工状态等操作。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.DataAugmentation.KnowledgeProcessor"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getstatus",
      children: "getStatus"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getStatus(): Promise<ProcessorStatus>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取知识加工状态。使用promise异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.DataAugmentation.KnowledgeProcessor"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
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
              href: "#processorstatus",
              children: "ProcessorStatus"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise对象，返回知识加工状态。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "错误码ID"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "错误信息"
              })
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/data-augmentation-api/dataaugmentation-arkts/dataaugmentation-error-code/dataaugmentation-error-code#section1021400000-%E5%86%85%E9%83%A8%E9%94%99%E8%AF%AF",
              children: "1021400000"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal error."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/data-augmentation-api/dataaugmentation-arkts/dataaugmentation-error-code/dataaugmentation-error-code#section1021400004-%E6%93%8D%E4%BD%9Crdb%E6%95%B0%E6%8D%AE%E6%BA%90%E6%97%B6%E5%8F%91%E7%94%9F%E9%94%99%E8%AF%AF",
              children: "1021400004"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "An error occurred during operations on the RDB source."
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
        children: "import { knowledgeProcessor } from '@kit.DataAugmentationKit';\nimport { common } from '@kit.AbilityKit';\nimport { relationalStore } from '@kit.ArkData';\n\nconst storeName: string = \"testmail_store.db\";\nconst storeConfig: relationalStore.StoreConfig = {\n  name: storeName, // 已触发知识加工的数据库名\n  securityLevel: relationalStore.SecurityLevel.S3,\n  tokenizer: relationalStore.Tokenizer.CUSTOM_TOKENIZER,\n};\nconst knowledgeSourceConfig: knowledgeProcessor.KnowledgeSourceConfig = {\n  rdbSource: storeConfig,\n};\nconst knowledgeProcessorConfig: knowledgeProcessor.KnowledgeProcessorConfig = {\n  sourceConfig: knowledgeSourceConfig,\n};\n// 获取知识加工状态的异步函数\nasync function getStatus() {\n  const context = AppStorage.get<common.UIAbilityContext>(\"Context\") as common.UIAbilityContext;\n  try {\n    // 获取知识加工对象\n    const processor = await knowledgeProcessor.getKnowledgeProcessor(context, knowledgeProcessorConfig);\n    // 获取知识加工状态\n    const status: knowledgeProcessor.ProcessorStatus = await processor.getStatus();\n    return status;\n  } catch (err) {\n    console.error(\"Error: \" + err.message + \" code: \" + err.code);\n    return undefined;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "startprocess",
      children: "startProcess"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "startProcess(config: KnowledgeProcessConfig): Promise<void>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据入参的配置，启动知识加工。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.DataAugmentation.KnowledgeProcessor"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.1.0(23)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/errorcode-universal/errorcode-universal#section801-%E8%AF%A5%E8%AE%BE%E5%A4%87%E4%B8%8D%E6%94%AF%E6%8C%81%E6%AD%A4api",
              children: "801"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Device type error."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/data-augmentation-api/dataaugmentation-arkts/dataaugmentation-error-code/dataaugmentation-error-code#section1021400000-%E5%86%85%E9%83%A8%E9%94%99%E8%AF%AF",
              children: "1021400000"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal error."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/data-augmentation-api/dataaugmentation-arkts/dataaugmentation-error-code/dataaugmentation-error-code#section1021400005-%E9%87%8D%E5%A4%8D%E5%90%AF%E5%8A%A8%E7%9F%A5%E8%AF%86%E5%8A%A0%E5%B7%A5",
              children: "1021400005"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Feature already active. Function called repeatedly."
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
        children: "import { knowledgeProcessor } from '@kit.DataAugmentationKit';\nimport { common } from '@kit.AbilityKit';\nimport { relationalStore } from '@kit.ArkData';\n\nconst storeName: string = \"testmail_store.db\";\nconst storeConfig: relationalStore.StoreConfig = {\n  name: storeName, // 已触发知识加工的数据库名\n  securityLevel: relationalStore.SecurityLevel.S3,\n  tokenizer: relationalStore.Tokenizer.CUSTOM_TOKENIZER,\n};\nconst knowledgeSourceConfig: knowledgeProcessor.KnowledgeSourceConfig = {\n  rdbSource: storeConfig,\n};\nconst knowledgeProcessorConfig: knowledgeProcessor.KnowledgeProcessorConfig = {\n  sourceConfig: knowledgeSourceConfig,\n};\n// 启动知识加工的异步函数\nasync function startProcess() {\n  const context = AppStorage.get<common.UIAbilityContext>(\"Context\") as common.UIAbilityContext;\n  try {\n    // 获取知识加工对象\n    const processor = await knowledgeProcessor.getKnowledgeProcessor(context, knowledgeProcessorConfig);\n    // 启动知识加工\n    let processMode: knowledgeProcessor.KnowledgeProcessMode = knowledgeProcessor.KnowledgeProcessMode.INVERTED_INDEX;\n    let config: knowledgeProcessor.KnowledgeProcessConfig = {\n      mode: processMode,\n    };\n    await processor.startProcess(config);\n  } catch (err) {\n    console.error(\"Error: \" + err.message + \" code: \" + err.code);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "stopprocess",
      children: "stopProcess"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "stopProcess(): Promise<void>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "停止当前知识加工。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.DataAugmentation.KnowledgeProcessor"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.1.0(23)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { knowledgeProcessor } from '@kit.DataAugmentationKit';\nimport { common } from '@kit.AbilityKit';\nimport { relationalStore } from '@kit.ArkData';\n\nconst storeName: string = \"testmail_store.db\";\nconst storeConfig: relationalStore.StoreConfig = {\n  name: storeName, // 已触发知识加工的数据库名\n  securityLevel: relationalStore.SecurityLevel.S3,\n  tokenizer: relationalStore.Tokenizer.CUSTOM_TOKENIZER,\n};\nconst knowledgeSourceConfig: knowledgeProcessor.KnowledgeSourceConfig = {\n  rdbSource: storeConfig,\n};\nconst knowledgeProcessorConfig: knowledgeProcessor.KnowledgeProcessorConfig = {\n  sourceConfig: knowledgeSourceConfig,\n};\n// 停止知识加工的异步函数\nasync function stopProcess() {\n  const context = AppStorage.get<common.UIAbilityContext>(\"Context\") as common.UIAbilityContext;\n  try {\n    // 获取知识加工对象\n    const processor = await knowledgeProcessor.getKnowledgeProcessor(context, knowledgeProcessorConfig);\n    // 停止知识加工\n    await processor.stopProcess();\n  } catch (err) {\n    console.error(\"Error: \" + err.message + \" code: \" + err.code);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "processorstatus",
      children: "ProcessorStatus"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "知识加工状态。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.DataAugmentation.KnowledgeProcessor"]
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
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DATA_REMAINING_TO_PROCESS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "存在待加工的数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DATA_PROCESSING_IN_PROGRESS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数据正在进行知识加工中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DATA_PROCESSING_COMPLETE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "所有数据已完成加工。"
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