"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["897838"], {
332428(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_ascendc_operator_interface_cannkit_ascend_c_api_cannkit_advanced_apis_cannkit_activation_cannkit_activation_sigmoid_cannkit_activation_sigmoid_md_670_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cann-kit-guide-cannkit-ascendc-operator-development-cannkit-ascendc-operator-interface-cannkit-ascend-c-api-cannkit-advanced-apis-cannkit-activation-cannkit-activation-sigmoid-cannkit-activation-sigmoid-md-670.json
var site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_ascendc_operator_interface_cannkit_ascend_c_api_cannkit_advanced_apis_cannkit_activation_cannkit_activation_sigmoid_cannkit_activation_sigmoid_md_670_namespaceObject = JSON.parse('{"id":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-advanced-apis/cannkit-activation/cannkit-activation-sigmoid/cannkit-activation-sigmoid","title":"Sigmoid","description":"功能说明","source":"@site/docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-advanced-apis/cannkit-activation/cannkit-activation-sigmoid/cannkit-activation-sigmoid.md","sourceDirName":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-advanced-apis/cannkit-activation/cannkit-activation-sigmoid","slug":"/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-advanced-apis/cannkit-activation/cannkit-activation-sigmoid/","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-advanced-apis/cannkit-activation/cannkit-activation-sigmoid/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"Sigmoid","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-activation-sigmoid","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"SoftmaxFlashV2","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-advanced-apis/cannkit-activation/cannkit-activation-softmaxflashv2/"},"next":{"title":"数据填充","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-advanced-apis/cannkit-high-data-filling/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-advanced-apis/cannkit-activation/cannkit-activation-sigmoid/cannkit-activation-sigmoid.md


const frontMatter = {
	title: 'Sigmoid',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-activation-sigmoid',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = 'Sigmoid';

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
  "value": "返回值",
  "id": "返回值",
  "level": 2
}, {
  "value": "支持的型号",
  "id": "支持的型号",
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
        id: "sigmoid",
        children: "Sigmoid"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "功能说明",
      children: "功能说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "按元素做逻辑回归Sigmoid，计算公式如下，其中PAR表示矢量计算单元一个迭代能够处理的元素个数 ："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(160478)/* ["default"] */.A) + "",
        width: "708",
        height: "59"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(186190)/* ["default"] */.A) + "",
        width: "383",
        height: "60"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数原型",
      children: "函数原型"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过sharedTmpBuffer入参传入临时空间"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "源操作数Tensor全部/部分参与计算"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "template <typename T, bool isReuseSource = false>\n__aicore__ inline void Sigmoid(const LocalTensor<T>& dstTensor, const LocalTensor<T>& srcTensor, const LocalTensor<uint8_t>& sharedTmpBuffer, const uint32_t calCount)\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "源操作数Tensor全部参与计算"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "template <typename T, bool isReuseSource = false>\n__aicore__ inline void Sigmoid(const LocalTensor<T>& dstTensor, const LocalTensor<T>& srcTensor, const LocalTensor<uint8_t>& sharedTmpBuffer)\n"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "接口框架申请临时空间"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "源操作数Tensor全部/部分参与计算"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "template <typename T, bool isReuseSource = false>\n__aicore__ inline void Sigmoid(const LocalTensor<T>& dstTensor, const LocalTensor<T>& srcTensor, const uint32_t calCount)\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "源操作数Tensor全部参与计算"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "template <typename T, bool isReuseSource = false>\n__aicore__ inline void Sigmoid(const LocalTensor<T>& dstTensor, const LocalTensor<T>& srcTensor)\n"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "由于该接口的内部实现中涉及复杂的数学计算，需要额外的临时空间来存储计算过程中的中间变量。临时空间支持开发者通过sharedTmpBuffer入参传入和接口框架申请两种方式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "通过sharedTmpBuffer入参传入，使用该tensor作为临时空间进行处理，接口框架不再申请。该方式开发者可以自行管理sharedTmpBuffer内存空间，并在接口调用完成后，复用该部分内存，内存不会反复申请释放，灵活性较高，内存利用率也较高。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "接口框架申请临时空间，开发者无需申请，但是需要预留临时空间的大小。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过sharedTmpBuffer传入的情况，开发者需要为tensor申请空间；接口框架申请的方式，开发者需要预留临时空间。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "参数说明",
      children: "参数说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表1"
        })
      }), " 模板参数说明"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "操作数的数据类型。支持的数据类型为：half/float。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "isReuseSource"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否允许修改源操作数。该参数预留，传入默认值false即可。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表2"
        })
      }), " 接口参数说明"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "输入/输出"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dstTensor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输出"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["目的操作数。  类型为", (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-data-type-definition/cannkit-localtensor",
              children: "LocalTensor"
            }), "，支持的TPosition为VECIN/VECCALC/VECOUT。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "srcTensor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["源操作数。  类型为", (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-data-type-definition/cannkit-localtensor",
              children: "LocalTensor"
            }), "，支持的TPosition为VECIN/VECCALC/VECOUT。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sharedTmpBuffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["临时缓存。  类型为", (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-data-type-definition/cannkit-localtensor",
              children: "LocalTensor"
            }), "，支持的TPosition为VECIN/VECCALC/VECOUT。  用于Sigmoid内部复杂计算时存储中间变量，由开发者提供。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "calCount"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "实际计算数据元素个数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "返回值",
      children: "返回值"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "无"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "支持的型号",
      children: "支持的型号"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Kirin9020系列处理器"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "KirinX90系列处理器"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束说明",
      children: "约束说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["操作数地址偏移对齐要求请参见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-general-constraints",
          children: "通用约束"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "输入输出操作数参与计算的数据长度要求32B对齐。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "调用示例",
      children: "调用示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AscendC::TPipe pipe;\nAscendC::TQue<AscendC::TPosition::VECCALC, 1> tmpQue;\npipe.InitBuffer(tmpQue, 1, bufferSize);  // bufferSize 通过Host侧tiling参数获取\nAscendC::LocalTensor<uint8_t> sharedTmpBuffer = tmpQue.AllocTensor<uint8_t>();\n// 输入shape信息为1024Bytes, 算子输入的数据类型为half, 实际计算个数为512Bytes\nAscendC::Sigmoid(dstLocal, srcLocal, sharedTmpBuffer, 512);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "结果示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "输入数据(srcLocal): [1.762616 7.9542747 ... 7.8306146 6.3167496]\n输出数据(dstLocal):  [0.853537 0.996489 ... 0.996027 0.998197]\n"
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
160478(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959290-93a396645490a7fe30f55baa5af34219.png");

},
186190(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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