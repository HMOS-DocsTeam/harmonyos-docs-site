"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["122586"], {
534298(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_data_augmentation_kit_guide_dataaugmentation_introduction_dataaugmentation_introduction_md_de9_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-data-augmentation-kit-guide-dataaugmentation-introduction-dataaugmentation-introduction-md-de9.json
var site_docs_data_augmentation_kit_guide_dataaugmentation_introduction_dataaugmentation_introduction_md_de9_namespaceObject = JSON.parse('{"id":"data-augmentation-kit-guide/dataaugmentation-introduction/dataaugmentation-introduction","title":"Data Augmentation Kit简介","description":"Data Augmentation Kit（数据增强套件）提供知识库、知识检索、RAG（检索增强生成）、端侧问答模型能力，打造个性化智慧数据平台，实现个性化智慧体验。","source":"@site/docs/data-augmentation-kit-guide/dataaugmentation-introduction/dataaugmentation-introduction.md","sourceDirName":"data-augmentation-kit-guide/dataaugmentation-introduction","slug":"/data-augmentation-kit-guide/dataaugmentation-introduction/","permalink":"/harmonyos-docs-site/data-augmentation-kit-guide/dataaugmentation-introduction/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Data Augmentation Kit简介","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/dataaugmentation-introduction","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"跨设备文件拷贝","permalink":"/harmonyos-docs-site/core-file-kit/distributed-fs/file-copy-across-devices/"},"next":{"title":"RAG概述","permalink":"/harmonyos-docs-site/data-augmentation-kit-guide/dataaugmentation-rag/data-augmentation-rag-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/data-augmentation-kit-guide/dataaugmentation-introduction/dataaugmentation-introduction.md


const frontMatter = {
	title: 'Data Augmentation Kit简介',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/dataaugmentation-introduction',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'Data Augmentation Kit简介';

const assets = {

};



const toc = [{
  "value": "能力范围",
  "id": "能力范围",
  "level": 2
}, {
  "value": "优势/亮点",
  "id": "优势亮点",
  "level": 2
}, {
  "value": "RAG（检索增强生成）",
  "id": "rag检索增强生成",
  "level": 3
}, {
  "value": "智慧化数据检索",
  "id": "智慧化数据检索",
  "level": 3
}, {
  "value": "接入端侧问答模型",
  "id": "接入端侧问答模型",
  "level": 3
}, {
  "value": "基本概念",
  "id": "基本概念",
  "level": 2
}, {
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 2
}, {
  "value": "支持的国家/地区",
  "id": "支持的国家地区",
  "level": 3
}, {
  "value": "支持的设备",
  "id": "支持的设备",
  "level": 3
}, {
  "value": "模拟器支持情况",
  "id": "模拟器支持情况",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    li: "li",
    p: "p",
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
        id: "data-augmentation-kit简介",
        children: "Data Augmentation Kit简介"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Data Augmentation Kit（数据增强套件）提供知识库、知识检索、RAG（检索增强生成）、端侧问答模型能力，打造个性化智慧数据平台，实现个性化智慧体验。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "能力范围",
      children: "能力范围"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Data Augmentation Kit提供以下能力："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/data-augmentation-kit-guide/dataaugmentation-rag/data-augmentation-rag-overview",
          children: "RAG（检索增强生成）"
        }), "：提供一种结合检索与生成技术的自然语言处理技术，通过动态从外部知识库中检索相关信息，辅助生成更准确、可靠的文本内容。其核心目标是弥补传统生成模型依赖静态知识的不足，实现“知识实时调用”与“内容灵活生成”的融合。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/data-augmentation-kit-guide/dataaugmentation-retrieval",
          children: "智慧化数据检索"
        }), "：基于多路召回和重排序，提供了一套知识检索框架。在提供基于倒排索引的传统文本检索的同时，也提供了基于向量索引的语义检索能力。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/data-augmentation-kit-guide/dataaugmentation-localchatmodel",
          children: "端侧问答模型"
        }), "：提供接入端侧模型问答的方法，以及使用鸿蒙AI模型管家对接LLM，对用户问题进行处理的过程，实现数据不出端智能问答的效果。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "优势亮点",
      children: "优势/亮点"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rag检索增强生成",
      children: "RAG（检索增强生成）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "知识实时性：无需重新训练模型即可动态更新知识库，适用于新闻、政策等高频变化领域。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "可信度增强：生成内容基于检索结果，减少模型“幻觉”（虚构信息），支持答案溯源。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "灵活适配：同一模型可快速切换不同领域知识库，降低跨场景部署成本。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "长尾问题覆盖：通过外挂知识库补充模型未训练到的细分领域知识。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "智慧化数据检索",
      children: "智慧化数据检索"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "智慧化数据构建：将应用数据通过加工转换为知识，加工后的知识存储在倒排数据库、向量数据库、图数据库等存储引擎中。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "智慧化数据检索：针对图片、文本等多种数据或多种数据库的融合查询，支持条件过滤、语义理解的复杂数据检索场景。通过多路召回和重排两个阶段实现。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "基于RAG的知识问答：将检索和大模型生成技术结合，通过动态检索外部知识库中的信息，提高大模型回答问题的准确性，降低大模型的“幻觉”（虚构信息）。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "接入端侧问答模型",
      children: "接入端侧问答模型"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "接入端侧问答模型：应用可以选择使用端侧问答模型，可实现数据处理不出端，用户安全隐私有保障。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "LLM：Large Language Model（大语言模型）是一种基于深度学习的人工智能模型，通过在海量文本数据上训练，掌握语言规律，能够理解和生成人类语言。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "chunk：chunk是知识加工时，文本被拆分后的逻辑或结构单元，目前一个chunk默认包含3072个字符（1个字符指1个汉字或1个英文字母）。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检索召回：通过一种特定的策略或算法从海量数据中快速筛选出候选结果集。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "支持的国家地区",
      children: "支持的国家/地区"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Data Augmentation Kit仅支持中国境内（香港特别行政区、澳门特别行政区、中国台湾除外）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "支持的设备",
      children: "支持的设备"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本Kit适用设备情况如下。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "能力"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "约束"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RAG（检索增强生成）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持PC/2in1设备类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "智慧化数据检索"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持Phone、PC/2in1、Tablet设备类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "端侧问答模型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持PC/2in1设备类型。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "模拟器支持情况",
      children: "模拟器支持情况"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本Kit暂不支持模拟器。"
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