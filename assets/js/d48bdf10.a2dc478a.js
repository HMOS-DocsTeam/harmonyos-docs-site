"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["137453"], {
454748(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_ascendc_operator_interface_cannkit_ascend_c_api_cannkit_basic_apis_cannkit_memory_management_and_synchronization_cannkit_tquebind_cannkit_enque_cannkit_enque_md_d48_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cann-kit-guide-cannkit-ascendc-operator-development-cannkit-ascendc-operator-interface-cannkit-ascend-c-api-cannkit-basic-apis-cannkit-memory-management-and-synchronization-cannkit-tquebind-cannkit-enque-cannkit-enque-md-d48.json
var site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_ascendc_operator_interface_cannkit_ascend_c_api_cannkit_basic_apis_cannkit_memory_management_and_synchronization_cannkit_tquebind_cannkit_enque_cannkit_enque_md_d48_namespaceObject = JSON.parse('{"id":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-memory-management-and-synchronization/cannkit-tquebind/cannkit-enque/cannkit-enque","title":"EnQue","description":"功能说明","source":"@site/docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-memory-management-and-synchronization/cannkit-tquebind/cannkit-enque/cannkit-enque.md","sourceDirName":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-memory-management-and-synchronization/cannkit-tquebind/cannkit-enque","slug":"/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-memory-management-and-synchronization/cannkit-tquebind/cannkit-enque/","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-memory-management-and-synchronization/cannkit-tquebind/cannkit-enque/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"EnQue","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-enque","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"FreeTensor","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-memory-management-and-synchronization/cannkit-tquebind/cannkit-freetensor/"},"next":{"title":"DeQue","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-memory-management-and-synchronization/cannkit-tquebind/cannkit-deque/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-memory-management-and-synchronization/cannkit-tquebind/cannkit-enque/cannkit-enque.md


const frontMatter = {
	title: 'EnQue',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-enque',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = 'EnQue';

const assets = {

};



const toc = [{
  "value": "功能说明",
  "id": "功能说明",
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
  "value": "支持的型号",
  "id": "支持的型号",
  "level": 2
}, {
  "value": "注意事项",
  "id": "注意事项",
  "level": 2
}, {
  "value": "返回值",
  "id": "返回值",
  "level": 2
}, {
  "value": "调用示例",
  "id": "调用示例",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
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
        id: "enque",
        children: "EnQue"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "功能说明",
      children: "功能说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将Tensor push到队列。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数原型",
      children: "函数原型"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "template <typename T> \n__aicore__ inline bool EnQue(const LocalTensor<T>& tensor)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "参数说明",
      children: "参数说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表1"
        })
      }), " bool EnQue(LocalTensor<T>& tensor)原型定义参数说明"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "输入/输出"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "含义"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "tensor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定的Tensor。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1"
        })
      }), " 将LocalTensor通过EnQue放入A1/B1的Queue中"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(11056)/* ["default"] */.A) + "",
        width: "264",
        height: "64"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "支持的型号",
      children: "支持的型号"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Kirin9020系列处理器"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "KirinX90系列处理器"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "注意事项",
      children: "注意事项"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "无"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "返回值",
      children: "返回值"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "true：表示Tensor加入Queue成功。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "false：表示Queue已满，入队失败。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "调用示例",
      children: "调用示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 接口: EnQue Tensor\nAscendC::TPipe pipe;\nAscendC::TQueBind<AscendC::TPosition::VECOUT, AscendC::TPosition::GM, 4> que;\nint num = 4;\nint len = 1024;\npipe.InitBuffer(que, num, len);\nAscendC::LocalTensor<half> tensor1 = que.AllocTensor<half>();\nque.EnQue(tensor1);// 将tensor加入VECOUT的Queue中\n"
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
11056(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

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