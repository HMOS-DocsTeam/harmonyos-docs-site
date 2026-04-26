"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["64990"], {
801508(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_ascendc_operator_interface_cannkit_ascend_c_api_cannkit_advanced_apis_cannkit_matmul_cannkit_matmul_tiling_class_cannkit_matmul_tiling_usage_description_cannkit_matmul_tiling_b50_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cann-kit-guide-cannkit-ascendc-operator-development-cannkit-ascendc-operator-interface-cannkit-ascend-c-api-cannkit-advanced-apis-cannkit-matmul-cannkit-matmul-tiling-class-cannkit-matmul-tiling-usage-description-cannkit-matmul-tiling-b50.json
var site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_ascendc_operator_interface_cannkit_ascend_c_api_cannkit_advanced_apis_cannkit_matmul_cannkit_matmul_tiling_class_cannkit_matmul_tiling_usage_description_cannkit_matmul_tiling_b50_namespaceObject = JSON.parse('{"id":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-advanced-apis/cannkit-matmul/cannkit-matmul-tiling-class/cannkit-matmul-tiling-usage-description/cannkit-matmul-tiling-usage-description","title":"使用说明","description":"AscendC提供一组Matmul Tiling API，方便开发者获取Matmul kernel计算时所需的Tiling参数。开发者只需要传入A/B/C矩阵等信息，调用API接口，即可获取到Init中TCubeTiling结构体中的相关参数。","source":"@site/docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-advanced-apis/cannkit-matmul/cannkit-matmul-tiling-class/cannkit-matmul-tiling-usage-description/cannkit-matmul-tiling-usage-description.md","sourceDirName":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-advanced-apis/cannkit-matmul/cannkit-matmul-tiling-class/cannkit-matmul-tiling-usage-description","slug":"/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-advanced-apis/cannkit-matmul/cannkit-matmul-tiling-class/cannkit-matmul-tiling-usage-description/","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-advanced-apis/cannkit-matmul/cannkit-matmul-tiling-class/cannkit-matmul-tiling-usage-description/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"使用说明","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-matmul-tiling-usage-description","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"End","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-advanced-apis/cannkit-matmul/cannkit-matmul1/cannkit-end/"},"next":{"title":"构造函数","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-advanced-apis/cannkit-matmul/cannkit-matmul-tiling-class/cannkit-matmul-tiling-constructor/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-advanced-apis/cannkit-matmul/cannkit-matmul-tiling-class/cannkit-matmul-tiling-usage-description/cannkit-matmul-tiling-usage-description.md


const frontMatter = {
	title: '使用说明',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-matmul-tiling-usage-description',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = '使用说明';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
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
        id: "使用说明",
        children: "使用说明"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AscendC提供一组Matmul Tiling API，方便开发者获取Matmul kernel计算时所需的Tiling参数。开发者只需要传入A/B/C矩阵等信息，调用API接口，即可获取到Init中TCubeTiling结构体中的相关参数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Matmul Tiling API分为Matmul单核Tiling接口、多核Tiling接口和BatchMatmul Tiling接口。获取Tiling参数的流程如下。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "创建一个单核Tiling对象，或多核Tiling对象，或BatchMatmul Tiling对象。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "设置A、B、C、Bias的参数类型信息，M、N、Ka、Kb形状信息等。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "调用GetTiling接口，获取Tiling信息。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用Matmul单核Tiling接口、多核Tiling接口和BatchMatmul Tiling接口获取Tiling参数的样例如下。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Matmul单核Tiling"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "auto ascendcPlatform = platform_ascendc::PlatformAscendC(context->GetPlatformInfo());\nmatmul_tiling::MatmulApiTiling tiling(ascendcPlatform);\ntiling.SetAType(matmul_tiling::TPosition::GM, matmul_tiling::CubeFormat::ND, matmul_tiling::DataType::DT_FLOAT16);\ntiling.SetBType(matmul_tiling::TPosition::GM, matmul_tiling::CubeFormat::ND, matmul_tiling::DataType::DT_FLOAT16);\ntiling.SetCType(matmul_tiling::TPosition::GM, matmul_tiling::CubeFormat::ND, matmul_tiling::DataType::DT_FLOAT);\ntiling.SetBiasType(matmul_tiling::TPosition::GM, matmul_tiling::CubeFormat::ND, matmul_tiling::DataType::DT_FLOAT);\ntiling.SetShape(1024, 1024, 1024);\ntiling.SetOrgShape(1024, 1024, 1024); // 或Ka,Kb不等长，如tiling.SetOrgShape(1024, 1024, 1024, 1280)\ntiling.SetBias(true);\ntiling.SetBufferSpace(-1, -1, -1);  // 设定允许使用的空间，缺省使用该AI处理器所有空间\noptiling::TCubeTiling tilingData;\nint ret = tiling.GetTiling(tilingData);    // if ret = -1, get tiling failed\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "多核Tiling"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "auto ascendcPlatform = platform_ascendc::PlatformAscendC(context->GetPlatformInfo());\nmatmul_tiling::MultiCoreMatmulTiling tiling(ascendcPlatform);\ntiling.SetDim(1);\ntiling.SetAType(matmul_tiling::TPosition::GM, matmul_tiling::CubeFormat::ND, matmul_tiling::DataType::DT_FLOAT16);\ntiling.SetBType(matmul_tiling::TPosition::GM, matmul_tiling::CubeFormat::ND, matmul_tiling::DataType::DT_FLOAT16);\ntiling.SetCType(matmul_tiling::TPosition::GM, matmul_tiling::CubeFormat::ND, matmul_tiling::DataType::DT_FLOAT);\ntiling.SetBiasType(matmul_tiling::TPosition::GM, matmul_tiling::CubeFormat::ND, matmul_tiling::DataType::DT_FLOAT);\ntiling.SetShape(1024, 1024, 1024);\ntiling.SetSingleShape(1024, 1024, 1024);\ntiling.SetOrgShape(1024, 1024, 1024);\ntiling.SetBias(true);\ntiling.SetBufferSpace(-1, -1, -1);  // 设定允许使用的空间，缺省使用该AI处理器所有空间\noptiling::TCubeTiling tilingData;\nint ret = tiling.GetTiling(tilingData);    // if ret = -1, get tiling failed\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "BatchMatmul Tiling"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "auto ascendcPlatform = platform_ascendc::PlatformAscendC(context->GetPlatformInfo());\nmatmul_tiling::BatchMatmulTiling bmmTiling(ascendcPlatform);\nbmmTiling.SetDim(1);\nbmmTiling.SetAType(matmul_tiling::TPosition::GM, matmul_tiling::CubeFormat::ND, matmul_tiling::DataType::DT_FLOAT16);\nbmmTiling.SetBType(matmul_tiling::TPosition::GM, matmul_tiling::CubeFormat::ND, matmul_tiling::DataType::DT_FLOAT16);\nbmmTiling.SetCType(matmul_tiling::TPosition::GM, matmul_tiling::CubeFormat::ND, matmul_tiling::DataType::DT_FLOAT);\nbmmTiling.SetBiasType(matmul_tiling::TPosition::GM, matmul_tiling::CubeFormat::ND, matmul_tiling::DataType::DT_FLOAT);\nbmmTiling.SetBias(true);\nbmmTiling.SetShape(1024, 1024, 1024);\nbmmTiling.SetSingleShape(1024, 1024, 1024);\nbmmTiling.SetOrgShape(1024, 1024, 1024);\nbmmTiling.SetBufferSpace(-1, -1, -1);  // 设定允许使用的空间，缺省使用该AI处理器所有空间\noptiling::TCubeTiling tilingData;\nint ret = bmmTiling.GetTiling(tilingData);    // if ret = -1, get tiling failed\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口列表如下。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表1"
        })
      }), " MatmulApiTiling/MultiCoreMatmulTiling/BatchMatmulTiling共有接口列表"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "功能"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SetAType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置A矩阵的位置，数据格式，数据类型，是否转置等信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SetBType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置B矩阵的位置，数据格式，数据类型，是否转置等信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SetCType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置C矩阵的位置，数据格式，数据类型等信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SetBiasType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置Bias的位置，数据格式，数据类型等信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SetShape"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置Matmul单次计算的形状singleM、singleN、singleK，单位为元素个数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SetOrgShape"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置Matmul计算时的原始完整的形状M、N、Ka、Kb，单位为元素个数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SetBias"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置Bias是否参与运算。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SetFixSplit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置固定的baseM、baseN、baseK，单位为元素个数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SetBufferSpace"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置Matmul计算时可用的L1/L0C/UB空间大小，单位为字节。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SetTraverse"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置遍历方式，M轴优先还是N轴优先。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SetMadType"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置是否使能HF32模式。", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "当前版本暂不支持。"
              })
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SetSplitRange"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置baseM/baseN/baseK的最大值和最小值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SetDoubleBuffer"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置A/B/C/Bias是否使能double buffer功能，以及是否需要做ND2NZ或者NZ2ND的转换。", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "该接口为预留接口，当前版本暂不支持。"
              })
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GetBaseM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取baseM值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GetBaseN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取baseN值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GetBaseK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取baseK值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GetTiling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取Tiling参数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表2"
        })
      }), " MultiCoreMatmulTiling其他接口"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "功能"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SetDim"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置多核Matmul时，可以参与运算的核数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SetSingleRange"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置singleCoreM/singleCoreN/singleCoreK的最大值与最小值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SetSingleShape"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置Matmul单核计算的形状singleCoreM、singleCoreN、singleCoreK，单位为元素个数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GetSingleShape"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取计算后的singleCoreM/singleCoreN/singleCoreK。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SetAlignSplit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置多核切分时singleCoreM/singleCoreN/singleCoreK的对齐值"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GetCoreNum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获得多核切分后，使用的blockDim。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SetSplitK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "多核场景，使能切K轴。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表3"
        })
      }), " BatchMatmulTiling其他接口"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "功能"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GetCoreNum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获得多核切分后，使用的blockDim。"
          })]
        })
      })]
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