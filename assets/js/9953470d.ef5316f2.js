"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["508079"], {
574814(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_ascendc_operator_interface_cannkit_basic_data_structure_and_apis_cannkit_gert_namespace_cannkit_opimpiregisterv_2_cannkit_privateattr_cannkit_privateattr_md_995_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cann-kit-guide-cannkit-ascendc-operator-development-cannkit-ascendc-operator-interface-cannkit-basic-data-structure-and-apis-cannkit-gert-namespace-cannkit-opimpiregisterv-2-cannkit-privateattr-cannkit-privateattr-md-995.json
var site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_ascendc_operator_interface_cannkit_basic_data_structure_and_apis_cannkit_gert_namespace_cannkit_opimpiregisterv_2_cannkit_privateattr_cannkit_privateattr_md_995_namespaceObject = JSON.parse('{"id":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-gert-namespace/cannkit-opimpiregisterv2/cannkit-privateattr/cannkit-privateattr","title":"PrivateAttr","description":"函数功能","source":"@site/docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-gert-namespace/cannkit-opimpiregisterv2/cannkit-privateattr/cannkit-privateattr.md","sourceDirName":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-gert-namespace/cannkit-opimpiregisterv2/cannkit-privateattr","slug":"/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-gert-namespace/cannkit-opimpiregisterv2/cannkit-privateattr/","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-gert-namespace/cannkit-opimpiregisterv2/cannkit-privateattr/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"PrivateAttr","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-privateattr","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Tiling","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-gert-namespace/cannkit-opimpiregisterv2/cannkit-tiling/"},"next":{"title":"TilingParse","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-gert-namespace/cannkit-opimpiregisterv2/cannkit-tilingparse/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-gert-namespace/cannkit-opimpiregisterv2/cannkit-privateattr/cannkit-privateattr.md


const frontMatter = {
	title: 'PrivateAttr',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-privateattr',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = 'PrivateAttr';

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
  "value": "返回值",
  "id": "返回值",
  "level": 2
}, {
  "value": "约束说明",
  "id": "约束说明",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
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
        id: "privateattr",
        children: "PrivateAttr"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数功能",
      children: "函数功能"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于注册算子的私有属性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "算子的属性包含属性名以及属性值。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通常情况下，注册算子的私有属性时开发者需要同时指定私有属性的名字", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "private_attr"
        })
      }), "以及该属性的值", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "private_attr_val"
        })
      }), "，此处称为场景一。但是考虑到算子可能已经存在某个属性的场景，因此也支持开发者在设置该属性时只设置属性名的做法，称为场景二。所以提供了两种类型的注册函数，分别对应上述两种场景。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对于场景一，若算子已存在某个属性，且开发者重新设置了该属性值，那么该算子的已有属性值将被开发者注册的属性覆盖。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对于场景二，如果算子不存在某个属性，且开发者仅设置了属性名，那么在后续获取算子私有属性列表流程时会存在该属性无法找到的错误。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数原型",
      children: "函数原型"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 仅设置私有属性名的接口\nOpImplRegisterV2 &PrivateAttr(const ge::char_t *private_attr);\n// 同时设置属性名以及属性值的接口\nOpImplRegisterV2 &PrivateAttr(const ge::char_t *private_attr, int64_t private_attr_val);\nOpImplRegisterV2 &PrivateAttr(const ge::char_t *private_attr, const std::vector<int64_t> &private_attr_val);\nOpImplRegisterV2 &PrivateAttr(const ge::char_t *private_attr, const ge::char_t *private_attr_val);\nOpImplRegisterV2 &PrivateAttr(const ge::char_t *private_attr, ge::float32_t private_attr_val);\nOpImplRegisterV2 &PrivateAttr(const ge::char_t *private_attr, bool private_attr_val);\nOpImplRegisterV2 &PrivateAttr(const ge::char_t *private_attr, const std::vector<ge::float32_t> &private_attr_val);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "参数说明",
      children: "参数说明"
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
            children: "private_attr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要注册的私有属性名。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "private_attr_val"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要注册的私有属性名对应的属性值。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "返回值",
      children: "返回值"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "返回算子的OpImplRegisterV2对象，该对象新增注册了私有属性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束说明",
      children: "约束说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "无"
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