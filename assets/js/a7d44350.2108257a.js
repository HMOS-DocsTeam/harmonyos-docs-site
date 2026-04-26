"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["891848"], {
651243(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkdata_aip_data_intelligence_embedding_aip_data_intelligence_embedding_md_a7d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkdata-aip-data-intelligence-embedding-aip-data-intelligence-embedding-md-a7d.json
var site_docs_arkdata_aip_data_intelligence_embedding_aip_data_intelligence_embedding_md_a7d_namespaceObject = JSON.parse('{"id":"arkdata/aip-data-intelligence-embedding/aip-data-intelligence-embedding","title":"应用数据向量化 (ArkTS)","description":"场景介绍","source":"@site/docs/arkdata/aip-data-intelligence-embedding/aip-data-intelligence-embedding.md","sourceDirName":"arkdata/aip-data-intelligence-embedding","slug":"/arkdata/aip-data-intelligence-embedding/","permalink":"/harmonyos-docs-site/arkdata/aip-data-intelligence-embedding/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"title":"应用数据向量化 (ArkTS)","sidebar_position":7,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/aip-data-intelligence-embedding","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"通过标准化数据通路实现数据共享 (C/C++)","permalink":"/harmonyos-docs-site/arkdata/cross-app-data-share/many-to-many-data-share/unified-data-channels-c/"},"next":{"title":"preferences数据库调试工具指导","permalink":"/harmonyos-docs-site/arkdata/arkdata-debug-tool/preferences-debug-tool/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkdata/aip-data-intelligence-embedding/aip-data-intelligence-embedding.md


const frontMatter = {
	title: '应用数据向量化 (ArkTS)',
	sidebar_position: 7,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/aip-data-intelligence-embedding',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '应用数据向量化 (ArkTS)';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "基本概念",
  "id": "基本概念",
  "level": 2
}, {
  "value": "向量化",
  "id": "向量化",
  "level": 3
}, {
  "value": "多模态嵌入模型",
  "id": "多模态嵌入模型",
  "level": 3
}, {
  "value": "文本分块",
  "id": "文本分块",
  "level": 3
}, {
  "value": "实现机制",
  "id": "实现机制",
  "level": 2
}, {
  "value": "运作机制",
  "id": "运作机制",
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
  "value": "文本向量化开发步骤",
  "id": "文本向量化开发步骤",
  "level": 2
}, {
  "value": "图像向量化开发步骤",
  "id": "图像向量化开发步骤",
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
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
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
        id: "应用数据向量化-arkts",
        children: "应用数据向量化 (ArkTS)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在数字化向智能化演进的关键阶段，构建智慧化服务已成为应用开发者提升产品竞争力的必然选择。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前，系统提供ArkData智慧数据平台（ArkData Intelligence Platform，AIP），提供端侧数据智慧化构建，使应用数据向量化，通过嵌入模型将非结构化的文本、图像等多模态数据，转换成具有语义的向量。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 15开始，支持应用数据向量化。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在智慧化数据构建过程中，涉及以下基本概念，请先了解相关含义。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "向量化",
      children: "向量化"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "向量化主要是指通过嵌入模型将高维非结构化数据（如文字、图像）映射为低维连续向量的嵌入技术。嵌入技术通过模型捕捉数据之间的语义关系，将抽象概念转化为可计算的数学表示，使计算机能够理解非结构化数据。目前，嵌入技术广泛应用于自然语言处理（语义搜索）、图像识别（特征提取）、推荐系统（用户/物品表征）等领域。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "多模态嵌入模型",
      children: "多模态嵌入模型"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用数据向量化，主要通过嵌入模型实现。当前支持多模态嵌入模型，能将文本和图像这两种不同数据模态转换到同一个向量空间，支持单模态（文搜文、图搜图）和跨模态（文搜图、图搜文）的语义表征能力。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "文本分块",
      children: "文本分块"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "数据向量化时，文本数据长度受限，可通过AIP分块接口切分文本，高效实现数据向量化。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "实现机制",
      children: "实现机制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用可借助智慧数据平台能力，实现智慧化数据的构建，将应用数据转化为可计算的向量，相关能力均运行在应用进程内，数据不出应用，保证隐私安全。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "运作机制",
      children: "运作机制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用数据向量化，将应用原数据向量化并存储在向量数据库中。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束限制",
      children: "约束限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "考虑到数据向量化处理的计算量和资源占用较大，当前仅支持在2in1设备上使用。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "嵌入模型的推理过程可使用NPU加速。与NPU计算相比，纯CPU的计算在时延和功耗上都有较大差距，建议采用NPU加速。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "模型推理单次可处理的文本长度上限为512个字符，支持中英文。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "模型推理单次可处理的图像大小小于20MB。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下是智慧数据向量化功能的相关接口。更多接口及使用方式请见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-intelligence/js-apis-data-intelligence",
        children: "智慧数据平台"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "getTextEmbeddingModel(config: ModelConfig): Promise<TextEmbedding>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取文本嵌入模型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "loadModel(): Promise<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "加载文本嵌入模型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "splitText(text: string, config: SplitConfig): Promise<Array<string>>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取文本的分块。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "getEmbedding(text: string): Promise<Array<number>>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定文本的嵌入向量。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "getEmbedding(batchTexts: Array<string>): Promise<Array<Array<number>>>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定批次文本的嵌入向量。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "releaseModel(): Promise<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "释放文本嵌入模型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "getImageEmbeddingModel(config: ModelConfig): Promise<ImageEmbedding>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取图像嵌入模型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "loadModel(): Promise<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "加载图像嵌入模型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "getEmbedding(image: Image): Promise<Array<number>>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定图像的嵌入向量。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "releaseModel(): Promise<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "释放图像嵌入模型。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "文本向量化开发步骤",
      children: "文本向量化开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { intelligence } from '@kit.ArkData';\nimport { BusinessError } from '@kit.BasicServicesKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取文本嵌入模型。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用getTextEmbeddingModel方法，获取文本嵌入模型。示例代码如下所示："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let textConfig:intelligence.ModelConfig = {\n  version:intelligence.ModelVersion.BASIC_MODEL,\n  isNpuAvailable:false,\n  cachePath:\"/data\"\n}\nlet textEmbedding:intelligence.TextEmbedding;\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "intelligence.getTextEmbeddingModel(textConfig)\n  .then((data:intelligence.TextEmbedding) => {\n    console.info('Succeeded in getting TextModel');\n    textEmbedding = data;\n    // ...\n  })\n  .catch((err:BusinessError) => {\n    console.error('Failed to get TextModel and code is ' + err.code);\n    // ...\n  })\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "加载文本嵌入模型。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用loadModel方法，加载文本嵌入模型。示例代码如下所示："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "textEmbedding.loadModel()\n  .then(() => {\n    console.info('Succeeded in loading Model');\n    // ...\n  })\n  .catch((err:BusinessError) => {\n    console.error('Failed to load Model and code is ' + err.code);\n    // ...\n  })\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取文本的分块。当数据长度超过限定时，使用splitText()接口将其分块，然后再进行数据向量化。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用splitText方法，获取文本的分块结果。示例代码如下所示："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let splitConfig:intelligence.SplitConfig = {\n  size:10,\n  overlapRatio:0.1\n}\nlet splitText = 'text';\n\nintelligence.splitText(splitText, splitConfig)\n  .then((data:Array<string>) => {\n    console.info('Succeeded in splitting Text');\n    // ...\n  })\n  .catch((err:BusinessError) => {\n    console.error('Failed to split Text and code is ' + err.code);\n    // ...\n  })\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取给定文本的嵌入向量。给定的文本数据可以是单个文本或文本集合。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用getEmbedding方法，获取给定单个文本或文本集合的嵌入向量。示例代码如下所示："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let text = 'text';\ntextEmbedding.getEmbedding(text)\n  .then((data:Array<number>) => {\n    console.info('Succeeded in getting Embedding');\n    // ...\n  })\n  .catch((err:BusinessError) => {\n    console.error('Failed to get Embedding and code is ' + err.code);\n    // ...\n  })\n\nlet batchTexts = ['text1','text2'];\ntextEmbedding.getEmbedding(batchTexts)\n  .then((data:Array<Array<number>>) => {\n    console.info('Succeeded in getting Embedding');\n    // ...\n  })\n  .catch((err:BusinessError) => {\n    console.error('Failed to get Embedding and code is ' + err.code);\n    // ...\n  })\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "释放文本嵌入模型。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用releaseModel方法，释放文本嵌入模型。示例代码如下所示："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "textEmbedding.releaseModel()\n  .then(() => {\n    console.info('Succeeded in releasing Model');\n    // ...\n  })\n  .catch((err:BusinessError) => {\n    console.error('Failed to release Model and code is ' + err.code);\n    // ...\n  })\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "图像向量化开发步骤",
      children: "图像向量化开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { intelligence } from '@kit.ArkData';\nimport { BusinessError } from '@kit.BasicServicesKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取图像嵌入模型。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用getImageEmbeddingModel方法，获取图像嵌入模型。示例代码如下所示："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let imageConfig:intelligence.ModelConfig = {\n  version:intelligence.ModelVersion.BASIC_MODEL,\n  isNpuAvailable:false,\n  cachePath:\"/data\"\n}\nlet imageEmbedding:intelligence.ImageEmbedding;\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "intelligence.getImageEmbeddingModel(imageConfig)\n  .then((data:intelligence.ImageEmbedding) => {\n    console.info('Succeeded in getting ImageModel');\n    imageEmbedding = data;\n    // ...\n  })\n  .catch((err:BusinessError) => {\n    console.error('Failed to get ImageModel and code is ' + err.code);\n    // ...\n  })\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "加载图像嵌入模型。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用loadModel方法，加载图像嵌入模型。示例代码如下所示："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "imageEmbedding.loadModel()\n  .then(() => {\n    console.info('Succeeded in loading Model');\n    // ...\n  })\n  .catch((err:BusinessError) => {\n    console.error('Failed to load Model and code is ' + err.code);\n    // ...\n  })\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取给定图像的嵌入向量。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用getEmbedding方法，获取给定图像的嵌入向量。示例代码如下所示："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let image = 'file://<packageName>/data/storage/el2/base/haps/entry/files/xxx.jpg';\nimageEmbedding.getEmbedding(image)\n  .then((data:Array<number>) => {\n    console.info('Succeeded in getting Embedding');\n    // ...\n  })\n  .catch((err:BusinessError) => {\n    console.error('Failed to get Embedding and code is ' + err.code);\n    // ...\n  })\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "释放图像嵌入模型。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用releaseModel方法，释放图像嵌入模型。示例代码如下所示："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "imageEmbedding.releaseModel()\n  .then(() => {\n    console.info('Succeeded in releasing Model');\n    // ...\n  })\n  .catch((err:BusinessError) => {\n    console.error('Failed to release Model and code is ' + err.code);\n    // ...\n  })\n"
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