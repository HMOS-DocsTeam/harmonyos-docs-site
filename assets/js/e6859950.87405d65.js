"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["703151"], {
483026(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_ascendc_operator_interface_cannkit_ascend_c_api_cannkit_host_api_cannkit_platformascendc_internal_associated_cannkit_platformascendc_internal_associated_md_e68_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cann-kit-guide-cannkit-ascendc-operator-development-cannkit-ascendc-operator-interface-cannkit-ascend-c-api-cannkit-host-api-cannkit-platformascendc-internal-associated-cannkit-platformascendc-internal-associated-md-e68.json
var site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_ascendc_operator_interface_cannkit_ascend_c_api_cannkit_host_api_cannkit_platformascendc_internal_associated_cannkit_platformascendc_internal_associated_md_e68_namespaceObject = JSON.parse('{"id":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-host-api/cannkit-platformascendc-internal-associated/cannkit-platformascendc-internal-associated","title":"内部关联接口","description":"在进行算子原型注册、Tiling实现、shape推导过程中，使用到的外部开放接口中会调用到一些辅助数据结构和接口，称之为*内部关联接口*。开发者不会直接调用内部关联接口，此处仅作简单介绍。","source":"@site/docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-host-api/cannkit-platformascendc-internal-associated/cannkit-platformascendc-internal-associated.md","sourceDirName":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-host-api/cannkit-platformascendc-internal-associated","slug":"/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-host-api/cannkit-platformascendc-internal-associated/","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-host-api/cannkit-platformascendc-internal-associated/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"内部关联接口","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-platformascendc-internal-associated","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"GetLibApiWorkSpaceSize","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-host-api/cannkit-platformascendc/cannkit-getlibapiworkspacesize/"},"next":{"title":"GmAlloc","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-operator-debugging-apis/cannkit-gmalloc/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-host-api/cannkit-platformascendc-internal-associated/cannkit-platformascendc-internal-associated.md


const frontMatter = {
	title: '内部关联接口',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-platformascendc-internal-associated',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = '内部关联接口';

const assets = {

};



const toc = [{
  "value": "CTilingDataClassFactory",
  "id": "ctilingdataclassfactory",
  "level": 2
}, {
  "value": "OpDef相关接口",
  "id": "opdef相关接口",
  "level": 2
}, {
  "value": "Tiling定义辅助接口",
  "id": "tiling定义辅助接口",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
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
        id: "内部关联接口",
        children: "内部关联接口"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在进行算子原型注册、Tiling实现、shape推导过程中，使用到的外部开放接口中会调用到一些辅助数据结构和接口，称之为", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "内部关联接口"
        })
      }), "。开发者不会直接调用内部关联接口，此处仅作简单介绍。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ctilingdataclassfactory",
      children: "CTilingDataClassFactory"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["CTilingDataClassFactory类用于注册AscendC高阶API和开发者自定义tiling结构，通过单例实现的工厂类，在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-host-api/cannkit-tiling-data-structure-registration/cannkit-tilingdata-structure-registration",
        children: "TilingData结构注册"
      }), "中REGISTER_TILING_DATA_CLASS中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表1"
        })
      }), " CTilingDataClassFactory成员函数"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "函数名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "含义"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GetInstance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取CTilingDataClassFactory类的单例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RegisterTilingData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册op_type的tiling结构constructor至CTilingDataClassFactory工厂类。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CreateTilingDataInstance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据算子名获取tiling结构。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "opdef相关接口",
      children: "OpDef相关接口"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "原型注册相关类的一些非对外开放接口，包括OpDef、OpParamDef、OpAICoreConfig等，下述接口均为框架生成相关工程所需，开发者无需关心。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表2"
        })
      }), " OpDef相关类及其成员函数"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "接口名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "接口功能"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OpAICoreDef"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GetTiling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取Tiling信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OpDef"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GetInferShape"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取Shape推导函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OpDef"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GetInferDataType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取DataType推导函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OpDefFactory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OpDefRegister"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册算子。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "tiling定义辅助接口",
      children: "Tiling定义辅助接口"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下接口为Tiling定义辅助接口。AscendC提供了一系列Tiling类型定义宏，包含BEGIN_TILING_DATA_DEF、TILING_DATA_FIELD_DEF、TILING_DATA_FIELD_DEF_ARR、TILING_DATA_FIELD_DEF_STRUCT、REGISTER_TILING_DATA_CLASS。开发者调用该系列宏会调用以下接口对tiling信息进一步处理，包含结构信息保留、字节对齐等。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// TilingDef类\nvoid SaveToBuffer(void *pdata, size_t capacity);\nstd::vector<FieldInfo> GetFieldInfo() const;\nconst char *GetTilingClassName() const;\nsize_t GetDataSize() const;\nvoid SetDataPtr(void *dataPtr);\nvoid CheckAlignAndGenPlaceHolder(const char *name, size_t typeSize);\n// FieldInfo类\nFieldInfo(const char *dtype, const char *name)\nFieldInfo(const char *dtype, const char *name, size_t arrSize)\nFieldInfo(const char *dtype, const char *name, const char *structType,size_t structSize)\n"
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