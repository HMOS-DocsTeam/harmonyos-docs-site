"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["365945"], {
81786(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkdata_uniform_data_definition_uniform_data_type_descriptors_c_uniform_data_type_descriptors_c_md_ea0_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkdata-uniform-data-definition-uniform-data-type-descriptors-c-uniform-data-type-descriptors-c-md-ea0.json
var site_docs_arkdata_uniform_data_definition_uniform_data_type_descriptors_c_uniform_data_type_descriptors_c_md_ea0_namespaceObject = JSON.parse('{"id":"arkdata/uniform-data-definition/uniform-data-type-descriptors-c/uniform-data-type-descriptors-c","title":"标准化数据类型 (C/C++)","description":"场景介绍","source":"@site/docs/arkdata/uniform-data-definition/uniform-data-type-descriptors-c/uniform-data-type-descriptors-c.md","sourceDirName":"arkdata/uniform-data-definition/uniform-data-type-descriptors-c","slug":"/arkdata/uniform-data-definition/uniform-data-type-descriptors-c/","permalink":"/harmonyos-docs-site/arkdata/uniform-data-definition/uniform-data-type-descriptors-c/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"标准化数据类型 (C/C++)","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/uniform-data-type-descriptors-c","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"标准化数据类型 (ArkTS)","permalink":"/harmonyos-docs-site/arkdata/uniform-data-definition/uniform-data-type-descriptors/"},"next":{"title":"标准化数据结构 (ArkTS)","permalink":"/harmonyos-docs-site/arkdata/uniform-data-definition/uniform-data-structure/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkdata/uniform-data-definition/uniform-data-type-descriptors-c/uniform-data-type-descriptors-c.md


const frontMatter = {
	title: '标准化数据类型 (C/C++)',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/uniform-data-type-descriptors-c',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '标准化数据类型 (C/C++)';

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
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "添加动态链接库",
  "id": "添加动态链接库",
  "level": 2
}, {
  "value": "引用头文件",
  "id": "引用头文件",
  "level": 2
}, {
  "value": "通过不同方式获取不同类型数据并且比较它们之间的关系",
  "id": "通过不同方式获取不同类型数据并且比较它们之间的关系",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
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
        id: "标准化数据类型-cc",
        children: "标准化数据类型 (C/C++)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "统一数据管理框架（UDMF）提供数据跨应用、跨设备交互标准，定义数据交互过程中的数据语言，提升数据交互效率。它提供安全、标准化的数据流通路径，支持不同级别的数据访问权限和生命周期管理策略，实现高效的数据共享。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "标准化数据类型"
          })
        }), "：Uniform Type Descriptor，简称UTD。主要针对同一种数据类型，提供统一定义，即标准数据类型描述符，定义了包括标识数据类型的ID、类型归属关系等相关信息，用于解决HarmonyOS系统中的类型模糊问题。一般用于过滤或者识别某一种数据类型的场景，比如文件预览、文件分享等。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["详细的接口说明请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-utd-h/capi-utd-h",
        children: "UTD接口文档"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "OH_Utd* OH_Utd_Create(const char* typeId)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个指向统一数据类型描述符OH_Utd的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void OH_Utd_Destroy(OH_Utd* pThis)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁指向统一数据类型描述符OH_Utd的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char** OH_Utd_GetTypesByFilenameExtension(const char* extension, unsigned int* count)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过文件后缀名获取标准化数据类型ID。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char** OH_Utd_GetTypesByMimeType(const char* mimeType, unsigned int* count)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过MIME类型获取标准化数据类型ID。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bool OH_Utd_Equals(OH_Utd* utd1, OH_Utd* utd2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断两种标准化数据类型是否相等。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void OH_Utd_DestroyStringList(const char** list, unsigned int count)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁字符串列表数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bool OH_Utd_BelongsTo (const char *srcTypeId, const char *destTypeId)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断两个标准化数据描述类型是否存在归属关系。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bool OH_Utd_IsLower (const char* srcTypeId, const char* destTypeId )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断原标准化数据类型是否是目标标准化数据类型的低层级类型。 例如TYPE_SCRIPT为SOURCE_CODE的低层级类型，TYPE_SCRIPT和SOURCE_CODE为PLAIN_TEXT的低层级类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bool OH_Utd_IsHigher (const char* srcTypeId, const char* destTypeId )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断原标准化数据类型是否是目标标准化数据类型的高层级类型。 例如SOURCE_CODE为TYPE_SCRIPT的高层级类型，PLAIN_TEXT为SOURCE_CODE和TYPE_SCRIPT的高层级类型。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "添加动态链接库",
      children: "添加动态链接库"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CMakeLists.txt中添加以下库。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "libudmf.so, libhilog_ndk.z.so\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "引用头文件",
      children: "引用头文件"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include <cstdio>\n#include <cstring>\n#include <database/udmf/utd.h>\n#include <database/udmf/uds.h>\n#include <database/udmf/udmf.h>\n#include <database/udmf/udmf_meta.h>\n#include <database/udmf/udmf_err_code.h>\n#include <hilog/log.h>\n\n#undef LOG_TAG\n#define LOG_TAG \"MY_LOG\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "通过不同方式获取不同类型数据并且比较它们之间的关系",
      children: "通过不同方式获取不同类型数据并且比较它们之间的关系"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下面以获取纯文本数据的查询场景为例，说明如何使用UTD。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "通过后缀名“.txt”获取UTD的typeId。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "通过MIME类型“text/plain”获取UTD的typeId。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "使用以上两个步骤获取到的typeId创建UTD实例对象。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "比较UTD实例对象是否相等。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "比较两种方式获取到的typeId是否存在归属关系。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "比较两种方式获取到的typeIds1[0]是否是typeIds2[0]的低层级类型。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "比较两种方式获取到的typeIds1[0]是否是typeIds2[0]的高层级类型。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "使用结束后，删除上述步骤中产生的指针。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 1. 通过文件后缀名获取纯文本类型的UTD的typeId\nunsigned int typeIds1Count = 0;\nconst char **typeIds1 = OH_Utd_GetTypesByFilenameExtension(\".txt\", &typeIds1Count);\nOH_LOG_INFO(LOG_APP, \"the count of typeIds1 is %{public}u\", typeIds1Count);\n// 2. 通过MIME类型获取typeId\nunsigned int typeIds2Count = 0;\nconst char **typeIds2 = OH_Utd_GetTypesByMimeType(\"text/plain\", &typeIds2Count);\nOH_LOG_INFO(LOG_APP, \"the count of typeIds2 is %{public}u\", typeIds2Count);\n// 3. 使用以上两个步骤获取到的typeId创建UTD实例对象。\nOH_Utd *utd1 = OH_Utd_Create(typeIds1[0]);\nOH_Utd *utd2 = OH_Utd_Create(typeIds2[0]);\n// 4. 比较两种方式获取到的typeId对应的UTD是否相同\nbool isEquals = OH_Utd_Equals(utd1, utd2);\nif (isEquals) {\n    OH_LOG_INFO(LOG_APP, \"utd1 == utd2\");\n} else {\n    OH_LOG_INFO(LOG_APP, \"utd1 != utd2\");\n}\n// 5. 比较两种方式获取到的typeId是否存在归属关系\nbool isBelongsTo = OH_Utd_BelongsTo(typeIds1[0], typeIds2[0]);\nif (isBelongsTo) {\n    OH_LOG_INFO(LOG_APP, \"typeIds1[0] belongs to typeIds2[0]\");\n} else {\n    OH_LOG_INFO(LOG_APP, \"typeIds1[0] doesn't belong to typeIds2[0]\");\n}\n// 6. 比较两种方式获取到的typeIds1[0]是否是typeIds2[0]的低层级类型\nbool isLower = OH_Utd_IsLower(typeIds1[0], typeIds2[0]);\nif (isLower) {\n    OH_LOG_INFO(LOG_APP, \"typeIds1[0] is lower typeIds2[0]\");\n} else {\n    OH_LOG_INFO(LOG_APP, \"typeIds1[0] is not lower typeIds2[0]\");\n}\n// 7. 比较两种方式获取到的typeIds1[0]是否是typeIds2[0]的高层级类型\nbool isHigher = OH_Utd_IsHigher(typeIds1[0], typeIds2[0]);\nif (isHigher) {\n    OH_LOG_INFO(LOG_APP, \"typeIds1[0] is higher typeIds2[0]\");\n} else {\n    OH_LOG_INFO(LOG_APP, \"typeIds1[0] is not higher typeIds2[0]\");\n}\n// 8. 销毁OH_Utd_GetTypesByFilenameExtension与OH_Utd_GetTypesByMimeType函数获取到的指针，同时销毁UTD指针\nOH_Utd_DestroyStringList(typeIds1, typeIds1Count);\nOH_Utd_DestroyStringList(typeIds2, typeIds2Count);\nOH_Utd_Destroy(utd1);\nOH_Utd_Destroy(utd2);\n"
      })
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