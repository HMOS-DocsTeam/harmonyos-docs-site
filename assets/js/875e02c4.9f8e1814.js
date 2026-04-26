"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["244830"], {
615783(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkdata_uniform_data_definition_uniform_data_structure_uniform_data_structure_md_875_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkdata-uniform-data-definition-uniform-data-structure-uniform-data-structure-md-875.json
var site_docs_arkdata_uniform_data_definition_uniform_data_structure_uniform_data_structure_md_875_namespaceObject = JSON.parse('{"id":"arkdata/uniform-data-definition/uniform-data-structure/uniform-data-structure","title":"标准化数据结构 (ArkTS)","description":"场景介绍","source":"@site/docs/arkdata/uniform-data-definition/uniform-data-structure/uniform-data-structure.md","sourceDirName":"arkdata/uniform-data-definition/uniform-data-structure","slug":"/arkdata/uniform-data-definition/uniform-data-structure/","permalink":"/harmonyos-docs-site/arkdata/uniform-data-definition/uniform-data-structure/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"标准化数据结构 (ArkTS)","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/uniform-data-structure","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"标准化数据类型 (C/C++)","permalink":"/harmonyos-docs-site/arkdata/uniform-data-definition/uniform-data-type-descriptors-c/"},"next":{"title":"标准化数据结构 (C/C++)","permalink":"/harmonyos-docs-site/arkdata/uniform-data-definition/uniform-data-structure-c/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkdata/uniform-data-definition/uniform-data-structure/uniform-data-structure.md


const frontMatter = {
	title: '标准化数据结构 (ArkTS)',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/uniform-data-structure',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '标准化数据结构 (ArkTS)';

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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "标准化数据结构-arkts",
        children: "标准化数据结构 (ArkTS)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["针对", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-uniformtypedescriptor/js-apis-data-uniformtypedescriptor#uniformdatatype",
        children: "UTD标准化数据类型"
      }), "中的部分常见类型，为了方便业务使用，我们按照不同的数据类型提供了标准化数据结构，例如系统定义的桌面图标类型（对应的标准化数据类型标识为'openharmony.app-item'），我们明确定义了该数据结构对应的相关描述信息。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["某些业务场景下应用可以直接使用我们具体定义的UTD标准化数据结构，例如跨应用拖拽场景。拖出方应用可以按照标准化数据结构将拖拽数据写入", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/interaction-events/ts-universal-events-drag-drop/ts-universal-events-drag-drop#dragevent7",
        children: "拖拽事件"
      }), "，拖入方应用从拖拽事件中读取拖拽数据并按照标准化数据结构进行数据的解析。这使得不同应用间的数据交互遵从相同的标准定义，有效减少了跨应用数据交互的开发工作量。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "UDMF针对部分标准化数据类型定义的标准化数据结构如下所示："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "数据结构"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "数据类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-uniformdatastruct/js-apis-data-uniformdatastruct#plaintext",
              children: "PlainText"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'general.plain-text'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "纯文本。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-uniformdatastruct/js-apis-data-uniformdatastruct#hyperlink",
              children: "Hyperlink"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'general.hyperlink'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "超链接。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-uniformdatastruct/js-apis-data-uniformdatastruct#html",
              children: "HTML"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'general.html'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "富文本。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-uniformdatastruct/js-apis-data-uniformdatastruct#openharmonyappitem",
              children: "OpenHarmonyAppItem"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'openharmony.app-item'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图标。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-uniformdatastruct/js-apis-data-uniformdatastruct#contentform14",
              children: "ContentForm"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'general.content-form'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "内容卡片。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以使用标准化数据结构定义数据内容（包含超链接、纯文本两条数据记录）为例，提供基本的开发步骤。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "数据提供方可通过UDMF提供的addRecord()接口，使用getRecords()接口获取当前数据对象内的所有数据记录。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入对应模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 1. 导入unifiedDataChannel和uniformTypeDescriptor模块。\nimport { uniformDataStruct, uniformTypeDescriptor, unifiedDataChannel } from '@kit.ArkData';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建超链接数据记录。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建数据记录并添加到统一数据对象中。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建统一数据对象实例。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "添加plainText数据记录。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "添加并获取当前UnifiedData对象内的所有数据记录。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "遍历每条记录，判断该记录的数据类型，转换为子类对象并得到原数据记录。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 2. 创建超链接数据记录。\nlet hyperlinkDetails: Record<string, string> = {\n  'attr1': 'value1',\n  'attr2': 'value2'\n}\nlet hyperlink: uniformDataStruct.Hyperlink = {\n  uniformDataType: 'general.hyperlink',\n  url: 'www.XXX.com',\n  description: 'This is the description of this hyperlink',\n  details: hyperlinkDetails\n}\n\n// 修改hyperlink属性description\nhyperlink.description = '...';\n\n// 访问对象属性。\nhilog.info(0xFF00, '[Sample_Udmf]', `hyperlink.url = ${hyperlink.url}`);\n\n// 3. 创建纯文本数据类型记录，将其添加到刚才创建的UnifiedData对象。\nlet plainTextDetails: Record<string, string> = {\n  'attr1': 'value1',\n  'attr2': 'value2'\n}\nlet plainText: uniformDataStruct.PlainText = {\n  uniformDataType: 'general.plain-text',\n  textContent: 'This is plainText textContent example',\n  abstract: 'this is abstract',\n  details: plainTextDetails\n}\n// 4. 创建一个统一数据对象实例。\nlet unifiedData = new unifiedDataChannel.UnifiedData();\nlet hyperlinkRecord =\n  new unifiedDataChannel.UnifiedRecord(uniformTypeDescriptor.UniformDataType.HYPERLINK, hyperlink);\nlet plainTextRecord =\n  new unifiedDataChannel.UnifiedRecord(uniformTypeDescriptor.UniformDataType.PLAIN_TEXT, plainText);\n\n// 5. 添加plainText数据记录。\nunifiedData.addRecord(hyperlinkRecord);\nunifiedData.addRecord(plainTextRecord);\n\n// 6. 记录添加完成后，可获取当前UnifiedData对象内的所有数据记录。\nlet records = unifiedData.getRecords();\n\n// 7. 遍历每条记录，判断该记录的数据类型，转换为子类对象，得到原数据记录。\nfor (let i = 0; i < records.length; i++) {\n  let unifiedDataRecord = records[i] as unifiedDataChannel.UnifiedRecord;\n  let record = unifiedDataRecord.getValue() as object;\n  if (record != undefined) {\n    // 读取该数据记录的类型\n    let type: string = record['uniformDataType'];\n    switch (type) {\n      case uniformTypeDescriptor.UniformDataType.HYPERLINK:\n        Object.keys(record).forEach(key => {\n          hilog.info(0xFF00, '[Sample_Udmf]', `show records: ${key} + , value: ${record[key]}`);\n        });\n        break;\n      case uniformTypeDescriptor.UniformDataType.PLAIN_TEXT:\n        Object.keys(record).forEach(key => {\n          hilog.info(0xFF00, '[Sample_Udmf]', `show records: ${key} + , value: ${record[key]}`);\n        });\n        break;\n      default:\n        break;\n    }\n  }\n}\n"
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