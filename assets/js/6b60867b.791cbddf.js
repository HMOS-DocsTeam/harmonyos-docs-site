"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["737217"], {
233023(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkdata_uniform_data_definition_uniform_data_structure_c_uniform_data_structure_c_md_6b6_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkdata-uniform-data-definition-uniform-data-structure-c-uniform-data-structure-c-md-6b6.json
var site_docs_arkdata_uniform_data_definition_uniform_data_structure_c_uniform_data_structure_c_md_6b6_namespaceObject = JSON.parse('{"id":"arkdata/uniform-data-definition/uniform-data-structure-c/uniform-data-structure-c","title":"标准化数据结构 (C/C++)","description":"场景介绍","source":"@site/docs/arkdata/uniform-data-definition/uniform-data-structure-c/uniform-data-structure-c.md","sourceDirName":"arkdata/uniform-data-definition/uniform-data-structure-c","slug":"/arkdata/uniform-data-definition/uniform-data-structure-c/","permalink":"/harmonyos-docs-site/arkdata/uniform-data-definition/uniform-data-structure-c/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"标准化数据结构 (C/C++)","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/uniform-data-structure-c","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"标准化数据结构 (ArkTS)","permalink":"/harmonyos-docs-site/arkdata/uniform-data-definition/uniform-data-structure/"},"next":{"title":"基于标准化数据结构的控件 (ArkTS)","permalink":"/harmonyos-docs-site/arkdata/uniform-data-definition/components-based-on-uniform-data-structure/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkdata/uniform-data-definition/uniform-data-structure-c/uniform-data-structure-c.md


const frontMatter = {
	title: '标准化数据结构 (C/C++)',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/uniform-data-structure-c',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '标准化数据结构 (C/C++)';

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
  "value": "纯文本类型数据结构的使用",
  "id": "纯文本类型数据结构的使用",
  "level": 2
}, {
  "value": "fileUri类型的数据结构的使用",
  "id": "fileuri类型的数据结构的使用",
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
        id: "标准化数据结构-cc",
        children: "标准化数据结构 (C/C++)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["针对", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-utd-h/capi-utd-h",
        children: "UTD标准化数据类型"
      }), "中的部分常见类型，为了方便业务使用，提供了标准化数据结构。例如，系统定义的桌面图标类型（标准化数据类型标识为'OH_UdsAppItem'）明确定义了相关描述信息。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["某些业务场景下应用可以直接使用我们具体定义的UTD标准化数据结构，例如跨应用拖拽场景。拖出方应用可以按照标准化数据结构将拖拽数据写入", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-use-ndk/arkts-add-event/ndk-drag-event",
        children: "拖拽事件"
      }), "，拖入方应用从拖拽事件中读取拖拽数据并按照标准化数据结构进行数据的解析。这使得不同应用间的数据交互遵从相同的标准定义，有效减少了跨应用数据交互的开发工作量。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "标准化数据结构"
          })
        }), "：Unified Data Structure，简称UDS。主要针对部分标准化数据类型定义了统一的数据内容结构，并明确了对应的描述信息。应用间使用标准化数据结构进行数据交互后，将遵从统一的解析标准，可有效减少适配相关的工作量。一般用于跨应用跨设备间的数据交互，比如拖拽。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["详细的接口说明请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-uds-h/capi-uds-h",
        children: "标准化数据结构相关接口"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "OH_UdmfData* OH_UdmfData_Create()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建统一数据对象指针及实例对象"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_UdmfRecord* OH_UdmfRecord_Create()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建统一数据记录指针及实例对象"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_UdsPlainText* OH_UdsPlainText_Create()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建纯文本类型指针及实例对象"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int OH_UdmfRecord_GetPlainText(OH_UdmfRecord* pThis, OH_UdsPlainText* plainText)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从统一数据记录中获取纯文本类型"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int OH_UdsPlainText_SetContent(OH_UdsPlainText* pThis, const char* content)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置纯文本类型中的纯文本内容参数"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int OH_UdmfRecord_AddPlainText(OH_UdmfRecord* pThis, OH_UdsPlainText* plainText)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "添加纯文本类型数据至统一数据记录中"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int OH_UdmfData_AddRecord(OH_UdmfData* pThis, OH_UdmfRecord* record)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "添加一个数据记录到统一数据对象中"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_UdsFileUri* OH_UdsFileUri_Create()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建文件Uri类型指针及实例对象"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int OH_UdsFileUri_SetFileUri(OH_UdsFileUri* pThis, const char* fileUri)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置文件Uri类型对象的Uri信息"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int OH_UdsFileUri_SetFileType(OH_UdsFileUri* pThis, const char* fileType)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置文件Uri类型对象的文件类型"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int OH_UdmfRecord_AddFileUri(OH_UdmfRecord* pThis, OH_UdsFileUri* fileUri)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "增加文件Uri类型数据至统一数据记录中"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int OH_Udmf_SetUnifiedData(Udmf_Intention intention, OH_UdmfData* unifiedData,char* key, unsigned int keyLen)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从统一数据管理框架数据库中写入统一数据对象数据"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void OH_UdsPlainText_Destroy(OH_UdsPlainText* pThis)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁纯文本类型数据指针指向的实例对象"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void OH_UdmfData_Destroy(OH_UdmfData* pThis)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁统一数据对象指针指向的实例对象"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void OH_UdsFileUri_Destroy(OH_UdsFileUri* pThis)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁文件Uri类型的实例对象"
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
        children: "#include <database/udmf/uds.h>\n#include <database/udmf/udmf.h>\n#include <database/udmf/udmf_meta.h>\n#include <hilog/log.h>\n\n#undef LOG_TAG\n#define LOG_TAG \"MY_LOG\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "纯文本类型数据结构的使用",
      children: "纯文本类型数据结构的使用"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "创建PlainText对象指针。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "添加PlainText内容。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "获取数据。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "使用完成后销毁指针。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 1.创建PlainText对象指针\nOH_UdmfRecord *plainTextRecord = OH_UdmfRecord_Create();\nOH_UdsPlainText *plainText = OH_UdsPlainText_Create();\nchar content[] = \"hello world\";\n\n// 2.添加PlainText内容\nOH_UdsPlainText_SetContent(plainText, content);\nOH_UdmfRecord_AddPlainText(plainTextRecord, plainText);\n\n// 3.获取PlainText数据\nOH_UdsPlainText *plainText2 = OH_UdsPlainText_Create();\nOH_UdmfRecord_GetPlainText(plainTextRecord, plainText2);\nconst char *content2 = OH_UdsPlainText_GetContent(plainText2);\n\nOH_LOG_INFO(LOG_APP, \"content = %{public}s.\", content2);\n// 4.使用完成后销毁指针。\nOH_UdsPlainText_Destroy(plainText);\nOH_UdmfRecord_Destroy(plainTextRecord);\nOH_UdsPlainText_Destroy(plainText2);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fileuri类型的数据结构的使用",
      children: "fileUri类型的数据结构的使用"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "创建fileUri类型的数据结构。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "设置fileUri中的URL和描述信息。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "创建OH_UdmfRecord对象，并向OH_UdmfRecord中添加fileUri类型数据。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "获取fileUri数据。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "使用完成后销毁指针。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 1.创建fileUri类型的数据结构\nconst char *uri = \"https://xxx/xx/xx.jpg\";\nOH_UdsFileUri *fileUri = OH_UdsFileUri_Create();\n// 2. 设置fileUri中的URL和描述信息。\nOH_UdsFileUri_SetFileUri(fileUri, uri);\nOH_UdsFileUri_SetFileType(fileUri, UDMF_META_IMAGE);\n// 3. 创建OH_UdmfRecord对象，并向OH_UdmfRecord中添加fileUri类型数据。\nOH_UdmfRecord *record = OH_UdmfRecord_Create();\nOH_UdmfRecord_AddFileUri(record, fileUri);\n// 4. 获取fileUri数据。\nOH_UdsFileUri *fileUri1 = OH_UdsFileUri_Create();\nOH_UdmfRecord_GetFileUri(record, fileUri1);\nconst char *fileUriStr = OH_UdsFileUri_GetFileUri(fileUri1);\nOH_LOG_INFO(LOG_APP, \"fileUri1 = %{public}s.\", fileUriStr);\n// 5. 使用完成后销毁指针。\nOH_UdsFileUri_Destroy(fileUri);\nOH_UdmfRecord_Destroy(record);\nOH_UdsFileUri_Destroy(fileUri1);\n"
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