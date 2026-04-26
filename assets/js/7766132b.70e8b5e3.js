"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["428550"], {
354885(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_coding_memory_management_purgeable_memory_guidelines_purgeable_memory_guidelines_md_776_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-coding-memory-management-purgeable-memory-guidelines-purgeable-memory-guidelines-md-776.json
var site_docs_coding_memory_management_purgeable_memory_guidelines_purgeable_memory_guidelines_md_776_namespaceObject = JSON.parse('{"id":"coding/memory-management/purgeable-memory-guidelines/purgeable-memory-guidelines","title":"内存管理purgeable内存开发指导","description":"Purgeable Memory指可以随时丢弃的内存，此内存区域用于存放那些很容易通过重新计算构建出来的数据，该数据在系统低内存时可以被直接释放，用户访问的时候再重新构建。Purgeable Memory适用于存放大块（至少4K）且恢复代价较小的数据，它在系统压力较大时优先回收（这里指对匿名页采用类似文件页的drop的形式，而不是压缩），再次使用时需要用户自己恢复数据再使用。","source":"@site/docs/coding/memory-management/purgeable-memory-guidelines/purgeable-memory-guidelines.md","sourceDirName":"coding/memory-management/purgeable-memory-guidelines","slug":"/coding/memory-management/purgeable-memory-guidelines/","permalink":"/harmonyos-docs-site/coding/memory-management/purgeable-memory-guidelines/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"内存管理purgeable内存开发指导","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/purgeable-memory-guidelines","kit":"ndk","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"格物开发指导","permalink":"/harmonyos-docs-site/coding/thread-scheduling/gewu-ndk-api-guidelines/"},"next":{"title":"NativeBundle开发指导","permalink":"/harmonyos-docs-site/coding/bundle-management/native-bundle-guidelines/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/coding/memory-management/purgeable-memory-guidelines/purgeable-memory-guidelines.md


const frontMatter = {
	title: '内存管理purgeable内存开发指导',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/purgeable-memory-guidelines',
	kit: 'ndk',
	last_updated: '2026-04-22'
};
const contentTitle = '内存管理purgeable内存开发指导';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "Purgeable Memory应用开发步骤",
  "id": "purgeable-memory应用开发步骤",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
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
        id: "内存管理purgeable内存开发指导",
        children: "内存管理purgeable内存开发指导"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Purgeable Memory指可以随时丢弃的内存，此内存区域用于存放那些很容易通过重新计算构建出来的数据，该数据在系统低内存时可以被直接释放，用户访问的时候再重新构建。Purgeable Memory适用于存放大块（至少4K）且恢复代价较小的数据，它在系统压力较大时优先回收（这里指对匿名页采用类似文件页的drop的形式，而不是压缩），再次使用时需要用户自己恢复数据再使用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HarmonyOS提供Purgeable Memory内存管理机制，开发者可以使用相关接口创建PurgeableMemory对象，从而管理purgeable内存。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者可以通过本指导了解在HarmonyOS应用中，如何使用Native层相关接口操作purgeable内存。功能包括purgeable内存的申请、释放等。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "针对Purgeable Memory内存管理机制，常见的开发场景如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "通过该机制提供的NAPI接口申请管理PurgeableMemory对象，并将数据内容写入该对象。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "使用完毕后释放。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_PurgeableMemory *OH_PurgeableMemory_Create(size_t size, OH_PurgeableMemory_ModifyFunc func, void *funcPara)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建PurgeableMemory对象，每次调用都会产生一个新的PurgeableMemory对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bool OH_PurgeableMemory_Destroy(OH_PurgeableMemory *purgObj)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对PurgeableMemory对象进行析构操作。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bool OH_PurgeableMemory_BeginRead(OH_PurgeableMemory *purgObj)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对PurgeableMemory对象进行读访问。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void OH_PurgeableMemory_EndRead(OH_PurgeableMemory *purgObj)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "读操作结束，将PurgeableMemory对象的引用计数减1，当引用计数为0的时候， 该PurgeableMemory对象可以被系统回收。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bool OH_PurgeableMemory_BeginWrite(OH_PurgeableMemory *purgObj)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对PurgeableMemory对象进行写访问。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void OH_PurgeableMemory_EndWrite(OH_PurgeableMemory *purgObj)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "写操作结束，将PurgeableMemory对象的引用计数减1，当引用计数为0的时候，该PurgeableMemory对象可以被系统回收。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void *OH_PurgeableMemory_GetContent(OH_PurgeableMemory *purgObj)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取PurgeableMemory对象内存数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "size_t OH_PurgeableMemory_ContentSize(OH_PurgeableMemory *purgObj)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取PurgeableMemory对象内存数据大小。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bool OH_PurgeableMemory_AppendModify(OH_PurgeableMemory *purgObj, OH_PurgeableMemory_ModifyFunc func, void *funcPara)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "添加PurgeableMemory对象的修改方法。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "purgeable-memory应用开发步骤",
      children: "Purgeable Memory应用开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下步骤描述了在", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "HarmonyOS"
        })
      }), "中如何使用Purgeable Memory提供的NAPI接口，申请PurgeableMemory对象，并将内容写入PurgeableMemory对象后，对相应对象进行读写访问。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "声明PurgeableMemory对象创建规则。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 声明构建函数的参数\nstruct ParaData{\n    int start;\n    int end;\n};\n\n// 声明一个使用ModifyFunc\nbool FactorialFunc(void* data, size_t size, void* param){\n    bool ret = true;\n    ParaData *pdata = (ParaData*) param;\n    int* oriData = (int*)data;\n    int i = pdata->start;\n    while (i < pdata->end) {\n        *oriData *= i;\n        i++;\n    }\n    return ret;\n}\n\n// 声明修改PurgeableMemory对象扩展函数的参数\nstruct AppendParaData{\n    int newPara;\n};\n\n// 声明修改PurgeableMemory对象的扩展函数\nbool AddFunc(void* data, size_t size, void* param){\n    bool ret = true;\n    int *oriDatap = (int*) data;\n    AppendParaData* apData = (AppendParaData*)param;\n    *oriDatap += apData->newPara;\n    return ret;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建PurgeableMemory对象。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 声明一个4MB的PurgeableMemory对象大小\n#define DATASIZE (4 * 1024 * 1024)\n\n// 声明创建函数的参数\nstruct ParaData pdata = {1,2};\n\n// 创建一个PurgeableMemory对象\nOH_PurgeableMemory* pPurgmem = OH_PurgeableMemory_Create(DATASIZE, FactorialFunc, &pdata);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "读访问PurgeableMemory对象。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "//业务定义对象类型\nclass ReqObj;\n\n// 读取对象\nif(OH_PurgeableMemory_BeginRead(pPurgmem)) {\n    // 获取PurgeableMemory对象大小\n    size_t size = OH_PurgeableMemory_ContentSize(pPurgmem);\n\n    // 获取PurgeableMemory对象内容\n    ReqObj* pReqObj = (ReqObj*) OH_PurgeableMemory_GetContent(pPurgmem);\n\n    // 读取PurgeableMemory对象结束\n    OH_PurgeableMemory_EndRead(pPurgmem);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "写访问PurgeableMemory对象。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: " //业务定义对象类型\nclass ReqObj;\n\n// 修改PurgeableMemory对象\nif(OH_PurgeableMemory_BeginWrite(pPurgmem)) {\n    // 获取PurgeableMemory对象数据\n    ReqObj* pReqObj = (ReqObj*) OH_PurgeableMemory_GetContent(pPurgmem);\n\n    // 声明扩展创建函数的参数\n    struct AppendParaData apdata = {1};\n\n    // 更新PurgeableMemory对象重建规则\n    OH_PurgeableMemory_AppendModify(pPurgmem, AddFunc, &apdata);\n\n    // 修改PurgeableMemory对象结束\n    OH_PurgeableMemory_EndWrite(pPurgmem);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "销毁PurgeableMemory对象。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 销毁对象\nOH_PurgeableMemory_Destroy(pPurgmem);\n// 置空指针防止UAF\npPurgmem = nullptr;\n"
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