"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["591941"], {
330362(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_ascendc_operator_interface_cannkit_ascend_c_api_cannkit_data_type_definition_cannkit_globaltensor_cannkit_globaltensor_md_573_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cann-kit-guide-cannkit-ascendc-operator-development-cannkit-ascendc-operator-interface-cannkit-ascend-c-api-cannkit-data-type-definition-cannkit-globaltensor-cannkit-globaltensor-md-573.json
var site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_ascendc_operator_interface_cannkit_ascend_c_api_cannkit_data_type_definition_cannkit_globaltensor_cannkit_globaltensor_md_573_namespaceObject = JSON.parse('{"id":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-data-type-definition/cannkit-globaltensor/cannkit-globaltensor","title":"GlobalTensor","description":"功能说明","source":"@site/docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-data-type-definition/cannkit-globaltensor/cannkit-globaltensor.md","sourceDirName":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-data-type-definition/cannkit-globaltensor","slug":"/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-data-type-definition/cannkit-globaltensor/","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-data-type-definition/cannkit-globaltensor/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"GlobalTensor","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-globaltensor","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"LocalTensor","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-data-type-definition/cannkit-localtensor/"},"next":{"title":"ShapeInfo","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-data-type-definition/cannkit-shapeinfo/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-data-type-definition/cannkit-globaltensor/cannkit-globaltensor.md


const frontMatter = {
	title: 'GlobalTensor',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-globaltensor',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = 'GlobalTensor';

const assets = {

};



const toc = [{
  "value": "功能说明",
  "id": "功能说明",
  "level": 2
}, {
  "value": "定义原型",
  "id": "定义原型",
  "level": 2
}, {
  "value": "函数说明",
  "id": "函数说明",
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
        id: "globaltensor",
        children: "GlobalTensor"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "功能说明",
      children: "功能说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "GlobalTensor用来存放Global Memory（外部存储）的全局数据。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "定义原型",
      children: "定义原型"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "template <typename T> class GlobalTensor : public BaseGlobalTensor<T> {\npublic:\n    using PrimType = PrimT<T>;\n    __aicore__ inline GlobalTensor<T>() {}\n    __aicore__ inline void SetGlobalBuffer(__gm__ PrimType* buffer, uint64_t bufferSize);  // 传入全局数据的指针，并手动设置一个buffer size，初始化GlobalTensor\n    __aicore__ inline void SetGlobalBuffer(__gm__ PrimType* buffer);  // 传入全局数据的指针，初始化GlobalTensor,可以不传入buffer size,但此时使用GetSize获取的长度是随机值\n    __aicore__ inline const __gm__ PrimType* GetPhyAddr() const;   // 返回全局数据的地址\n    __aicore__ inline __gm__ PrimType* GetPhyAddr(const uint64_t offset) const;  // 返回全局数据(指定偏移offset个元素)的地址\n    __aicore__ inline __inout_pipe__(S) PrimType GetValue(const uint64_t offset) const;  // 获取Tensor的相应偏移位置的值\n    __aicore__ inline __inout_pipe__(S) __gm__ PrimType& operator()(const uint64_t offset) const;   // 返回某个index位置的元素的引用\n    __aicore__ inline void SetValue(const uint64_t offset, PrimType value);  // 设置Tensor相应偏移位置的值。\n    __aicore__ inline uint64_t GetSize() const;  // 返回Tensor中的element个数\n    __aicore__ inline GlobalTensor operator[](const uint64_t offset) const;  // 指定偏移返回一个GlobalTensor，offset单位为element\n    __aicore__ inline void SetShapeInfo(const ShapeInfo& shapeInfo);\n    __aicore__ inline ShapeInfo GetShapeInfo() const;\n    template<CacheRwMode rwMode = CacheRwMode::RW> \n    __aicore__ inline void SetL2CacheHint(CacheMode mode);   // 设置Tensor写入L2 Cache的模式（允许/禁止）\n    // ...\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数说明",
      children: "函数说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "类型T支持基础数据类型，但需要遵循使用此GlobalTensor的指令的数据类型支持情况。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表1"
        })
      }), " 函数说明"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "函数名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "入参说明"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "含义"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GetValue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "offset：偏移量，单位为element"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取GlobalTensor中的某个值，返回T类型的立即数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SetGlobalBuffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "buffer：主机侧传入的全局数据指针  bufferSize：所包含的类型为T的数据个数，单位为element，需自行保证不会超出实际数据的长度"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置GlobalTensor的存储位置：buffer指向外部存储的起始地址，bufferSize为Tensor所占外部存储的大小，如指向的外部存储有连续256个int32_t，则其bufferSize为256。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GetPhyAddr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回GlobalTensor的地址，如果传入offset，则表示偏移offset个元素。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GetSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回GlobalTensor的element个数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "operator[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "offset：开发者指定的偏移位置"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据输入的offset偏移返回新的Tensor，offset的单位为element的个数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "operator()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "index: 下标索引"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取本GlobalTensor的第index个变量的引用。与", (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-data-type-definition/cannkit-localtensor",
              children: "LocalTensor"
            }), "的operator()类似。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SetShapeInfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "shapeInfo：ShapeInfo结构体"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置GlobalTensor的shapeInfo。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GetShapeInfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取GlobalTensor的shapeInfo。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " Shape信息没有默认值，只有通过SetShapeInfo设置过Shape信息后，才可以调用该接口获取正确的ShapeInfo。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "调用示例",
      children: "调用示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void Init(__gm__ uint8_t *src_gm, __gm__ uint8_t *dst_gm)\n{\n    uint64_t dataSize = 256; //设置input_global的大小为256\n \n    AscendC::GlobalTensor<int32_t> inputGlobal; // 类型为int32_t\n    inputGlobal.SetGlobalBuffer(reinterpret_cast<__gm__ int32_t *>(src_gm), dataSize); // 设置源操作数在Global Memory上的起始地址为src_gm，所占外部存储的大小为256个int32_t\n \n    AscendC::LocalTensor<int32_t> inputLocal = inQueueX.AllocTensor<int32_t>();\n    AscendC::DataCopy(inputLocal, inputGlobal, dataSize); // 将Global Memory上的inputGlobal拷贝到Local Memory的inputLocal上\n    // ...\n}\n"
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