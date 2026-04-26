"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["894719"], {
753040(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_ascendc_operator_interface_cannkit_ascend_c_api_cannkit_host_api_cannkit_tiling_data_structure_registration_cannkit_tilingdata_structure_registration_cannkit_tilingdata_struc_272_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cann-kit-guide-cannkit-ascendc-operator-development-cannkit-ascendc-operator-interface-cannkit-ascend-c-api-cannkit-host-api-cannkit-tiling-data-structure-registration-cannkit-tilingdata-structure-registration-cannkit-tilingdata-struc-272.json
var site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_ascendc_operator_interface_cannkit_ascend_c_api_cannkit_host_api_cannkit_tiling_data_structure_registration_cannkit_tilingdata_structure_registration_cannkit_tilingdata_struc_272_namespaceObject = JSON.parse('{"id":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-host-api/cannkit-tiling-data-structure-registration/cannkit-tilingdata-structure-registration/cannkit-tilingdata-structure-registration","title":"TilingData结构注册","description":"函数功能","source":"@site/docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-host-api/cannkit-tiling-data-structure-registration/cannkit-tilingdata-structure-registration/cannkit-tilingdata-structure-registration.md","sourceDirName":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-host-api/cannkit-tiling-data-structure-registration/cannkit-tilingdata-structure-registration","slug":"/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-host-api/cannkit-tiling-data-structure-registration/cannkit-tilingdata-structure-registration/","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-host-api/cannkit-tiling-data-structure-registration/cannkit-tilingdata-structure-registration/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"TilingData结构注册","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-tilingdata-structure-registration","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"TilingData结构定义","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-host-api/cannkit-tiling-data-structure-registration/cannkit-tilingdata-structure-definition/"},"next":{"title":"简介","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-host-api/cannkit-platformascendc/cannkit-platformascendc-introduction/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-host-api/cannkit-tiling-data-structure-registration/cannkit-tilingdata-structure-registration/cannkit-tilingdata-structure-registration.md


const frontMatter = {
	title: 'TilingData结构注册',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-tilingdata-structure-registration',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = 'TilingData结构注册';

const assets = {

};



const toc = [{
  "value": "函数功能",
  "id": "函数功能",
  "level": 2
}, {
  "value": "函数原型",
  "id": "函数原型",
  "level": 2
}, {
  "value": "参数说明",
  "id": "参数说明",
  "level": 2
}, {
  "value": "约束说明",
  "id": "约束说明",
  "level": 2
}, {
  "value": "调用示例",
  "id": "调用示例",
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
        id: "tilingdata结构注册",
        children: "TilingData结构注册"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数功能",
      children: "函数功能"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["注册定义的TilingData结构体并和自定义算子绑定。具体使用说明请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E8%B0%83%E7%94%A8%E7%A4%BA%E4%BE%8B",
        children: "调用示例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数原型",
      children: "函数原型"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "REGISTER_TILING_DATA_CLASS(op_type, class_name)\n#define REGISTER_TILING_DATA_CLASS(op_type, class_name)\n  class op_type##class_name##Helper {\n  public:\n    op_type##class_name##Helper() {\n      CTilingDataClassFactory::RegisterTilingData(#op_type, op_type##class_name##Helper::CreateTilingDataInstance);\n    }\n    static std::shared_ptr<TilingDef> CreateTilingDataInstance() {\n      return std::make_shared<class_name>();\n    }\n  };\n  op_type##class_name##Helper g_tilingdata_##op_type##class_name##helper;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "参数说明",
      children: "参数说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表1"
        })
      }), " 参数说明"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "输入/输出"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "op_type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册的算子名。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "class_name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "tiling结构体名，与c++变量命名要求一致。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束说明",
      children: "约束说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "使用时需要包含头文件register/tilingdata_base.h。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["中间结构体和定制tilingkey结构体需注意op_type命名规则，具体见", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E8%B0%83%E7%94%A8%E7%A4%BA%E4%BE%8B",
          children: "调用示例"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "算子定制tilingkey结构体需保证必须注册op_type默认结构体。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "tiling结构体是全局属性，需注意应通过结构体名作为全局唯一标记，不同算子若注册同名不同结构tiling结构体则会发生未定义行为。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "调用示例",
      children: "调用示例"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "注册算子Tiling结构体"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include \"register/tilingdata_base.h\"\n\n// 定义tilingdata类\nnamespace optiling {\nBEGIN_TILING_DATA_DEF(AddCustomTilingData)    // 注册一个tiling的类，以tiling的名字作为入参\n  TILING_DATA_FIELD_DEF(uint32_t, blkDim);    // 添加tiling字段，参与计算核数\n  TILING_DATA_FIELD_DEF(uint32_t, totalSize); // 添加tiling字段，总计算数据量-输入shape大小\n  TILING_DATA_FIELD_DEF(uint32_t, splitTile); // 添加tiling字段，每个core处理的数据分块计算\nEND_TILING_DATA_DEF;                          // 定义结束\n// 注册算子tilingdata类到对应的AddCustom算子\nREGISTER_TILING_DATA_CLASS(AddCustom, AddCustomTilingData)\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "注册中间结构体。当开发者有结构体嵌套场景时，嵌套的结构体称为中间结构体。因为一个算子名只能注册一个Tiling结构体，为使得框架能够检测中间结构体信息，需要构造\"虚拟算子名\"（结构体名+Op）并通过REGISTER_TILING_DATA_CLASS接口注册中间结构体，注册方式如下。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "BEGIN_TILING_DATA_DEF(Matmul)\n  TILING_DATA_FIELD_DEF(uint16_t, mmVar);\n  TILING_DATA_FIELD_DEF_ARR(uint16_t, 3, mmArr);\nEND_TILING_DATA_DEF;\n// 注册中间结构体，第一个参数固定为struct_name#Op，第二个参数即struct_name, 如struct_name为Matmul，第一参数为MatmulOp，第二个参数为Matmul\nREGISTER_TILING_DATA_CLASS(MatmulOp, Matmul)      // 注册中间结构体\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "定制tiling_key注册不同Tiling结构体"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// REGISTER_TILING_DATA_CLASS中第一个参数为${op_type} + ‘_’ + tiling_key。若tiling_key未注册匹配的tiling结构体，则会使用默认的结构体。如下面两种方式，tiling_key不指定或者非1情况，tiling结构体为AddStruct；tiling_key等于1的时候，tiling结构体为AddStructSample1\n\n// 以op_type为Add为例，默认tiling结构体注册如下\nBEGIN_TILING_DATA_DEF(AddStruct)\n  TILING_DATA_FIELD_DEF(uint16_t, mmVar);\n  TILING_DATA_FIELD_DEF_ARR(uint16_t, 3, mmArr);\nEND_TILING_DATA_DEF;\nREGISTER_TILING_DATA_CLASS(Add, AddStruct)\n\n// TilingKey等于1时注册结构体如下\nBEGIN_TILING_DATA_DEF(AddStructSample1)\n  TILING_DATA_FIELD_DEF(uint16_t, mmVar);\n  TILING_DATA_FIELD_DEF_ARR(uint16_t, 3, mmArr);\nEND_TILING_DATA_DEF;\nREGISTER_TILING_DATA_CLASS(Add_1, AddStructSample1)\n"
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