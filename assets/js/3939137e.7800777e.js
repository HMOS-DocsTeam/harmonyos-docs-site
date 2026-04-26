"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["132472"], {
274113(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_ascendc_operator_interface_cannkit_ascend_c_api_cannkit_advanced_apis_cannkit_matmul_cannkit_matmul_tiling_class_cannkit_matmul_tiling_constructor_cannkit_matmul_tiling_const_393_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cann-kit-guide-cannkit-ascendc-operator-development-cannkit-ascendc-operator-interface-cannkit-ascend-c-api-cannkit-advanced-apis-cannkit-matmul-cannkit-matmul-tiling-class-cannkit-matmul-tiling-constructor-cannkit-matmul-tiling-const-393.json
var site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_ascendc_operator_interface_cannkit_ascend_c_api_cannkit_advanced_apis_cannkit_matmul_cannkit_matmul_tiling_class_cannkit_matmul_tiling_constructor_cannkit_matmul_tiling_const_393_namespaceObject = JSON.parse('{"id":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-advanced-apis/cannkit-matmul/cannkit-matmul-tiling-class/cannkit-matmul-tiling-constructor/cannkit-matmul-tiling-constructor","title":"构造函数","description":"功能说明","source":"@site/docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-advanced-apis/cannkit-matmul/cannkit-matmul-tiling-class/cannkit-matmul-tiling-constructor/cannkit-matmul-tiling-constructor.md","sourceDirName":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-advanced-apis/cannkit-matmul/cannkit-matmul-tiling-class/cannkit-matmul-tiling-constructor","slug":"/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-advanced-apis/cannkit-matmul/cannkit-matmul-tiling-class/cannkit-matmul-tiling-constructor/","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-advanced-apis/cannkit-matmul/cannkit-matmul-tiling-class/cannkit-matmul-tiling-constructor/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"构造函数","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-matmul-tiling-constructor","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用说明","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-advanced-apis/cannkit-matmul/cannkit-matmul-tiling-class/cannkit-matmul-tiling-usage-description/"},"next":{"title":"TCubeTiling结构体","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-advanced-apis/cannkit-matmul/cannkit-matmul-tiling-class/cannkit-tcubetiling-structure/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-advanced-apis/cannkit-matmul/cannkit-matmul-tiling-class/cannkit-matmul-tiling-constructor/cannkit-matmul-tiling-constructor.md


const frontMatter = {
	title: '构造函数',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-matmul-tiling-constructor',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = '构造函数';

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
  "value": "注意事项",
  "id": "注意事项",
  "level": 2
}, {
  "value": "使用样例",
  "id": "使用样例",
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
        id: "构造函数",
        children: "构造函数"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "功能说明",
      children: "功能说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于创建一个Matmul单核Tiling对象，或者多核Tiling对象，或者BatchMatmul Tiling对象。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数原型",
      children: "函数原型"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "带参构造函数，需要传入硬件平台信息，推荐使用这类构造函数来获得更好的兼容性。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "使用PlatformAscendC类传入信息"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "explicit MatmulApiTiling(const platform_ascendc::PlatformAscendC& ascendcPlatform)\nexplicit MultiCoreMatmulTiling(const platform_ascendc::PlatformAscendC& ascendcPlatform)\nexplicit BatchMatmulTiling(const platform_ascendc::PlatformAscendC &ascendcPlatform)\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "使用PlatformInfo传入信息"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "当platform_ascendc::PlatformAscendC无法在Tiling运行时获取时，需要开发者自己构造PlatformInfo结构体，透传给MatmulApiTiling构造函数。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "explicit MatmulApiTiling(const PlatformInfo& platform)\nexplicit MultiCoreMatmulTiling(const PlatformInfo &platform)\n"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "无参构造函数"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "支持如下产品型号："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Kirin9020系列处理器"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "MatmulApiTiling()\nMultiCoreMatmulTiling()\nBatchMatmulTiling()\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "基类构造函数"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "MatmulApiTiling、MultiCoreMatmulTiling和BatchMatmulTiling都继承自基类MatmulApiTilingBase，其构造函数如下。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "MatmulApiTilingBase()\nexplicit MatmulApiTilingBase(const platform_ascendc::PlatformAscendC& ascendcPlatform)\nexplicit MatmulApiTilingBase(const PlatformInfo& platform)\n"
          })
        }), "\n"]
      }), "\n"]
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
            children: "ascendcPlatform"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["传入硬件平台的信息，PlatformAscendC定义请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-host-api/cannkit-platformascendc/cannkit-platformascendc-introduction",
              children: "PlatformAscendC类简介"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "platform"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["传入硬件版本以及AI Core中各个硬件单元提供的内存大小。PlatformInfo构造时通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-host-api/cannkit-platformascendc/cannkit-platformascendc-introduction",
              children: "PlatformAscendC类简介"
            }), "获取。  PlatformInfo结构定义参数如下，socVersion通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-host-api/cannkit-platformascendc/cannkit-getsocversion",
              children: "GetSocVersion"
            }), "获取并透传，各类硬件存储空间大小通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-host-api/cannkit-platformascendc/cannkit-getcorememsize",
              children: "GetCoreMemSize"
            }), "获取并透传。  - platform_ascendc::SocVersion socVersion;  - uint64_t l1Size = 0;  - uint64_t l0CSize = 0;  - uint64_t ubSize = 0;  - uint64_t l0ASize = 0;  - uint64_t l0BSize = 0;  不推荐通过直接填值构造PlatformInfo的方式调用构造函数，例如PlatformInfo(, 1024, 1024, ..);"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在实现Host侧的Tiling函数时，platform_ascendc::PlatformAscendC用于获取一些硬件平台的信息，来支撑Tiling的计算，比如获取硬件平台的核数等信息。PlatformAscendC类提供获取这些平台信息的功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "和platform_ascendc::PlatformAscendC不同的是，PlatformInfo则用于获取芯片版本以及AI Core中各个硬件单元提供的内存大小等只针对单个AI Core的信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "注意事项",
      children: "注意事项"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "无"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用样例",
      children: "使用样例"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "无参构造函数"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 单核Tiling\nmatmul_tiling::MatmulApiTiling tiling;\ntiling.SetAType(matmul_tiling::TPosition::GM, matmul_tiling::CubeFormat::ND, matmul_tiling::DataType::DT_FLOAT16);\n// ...\noptiling::TCubeTiling tilingData;\nint ret = tiling.GetTiling(tilingData);    // if ret = -1, gen tiling failed\n\n// 多核Tiling\nmatmul_tiling::MultiCoreMatmulTiling tiling;\ntiling.SetDim(1);\n// ...\noptiling::TCubeTiling tilingData;\nint ret = tiling.GetTiling(tilingData);    // if ret = -1, gen tiling failed\n\n// BatchMatmul Tiling\nmatmul_tiling::BatchMatmulTiling bmmTiling;\nbmmTiling.SetAType(matmul_tiling::TPosition::GM, matmul_tiling::CubeFormat::ND, matmul_tiling::DataType::DT_FLOAT16);\n// ...\noptiling::TCubeTiling tilingData;\nint ret = bmmTiling.GetTiling(tilingData);    // if ret = -1, gen tiling failed\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "带参构造函数"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 单核Tiling\nauto ascendcPlatform = platform_ascendc::PlatformAscendC(context->GetPlatformInfo());\nmatmul_tiling::MatmulApiTiling tiling(ascendcPlatform);\ntiling.SetAType(matmul_tiling::TPosition::GM, matmul_tiling::CubeFormat::ND, matmul_tiling::DataType::DT_FLOAT16);\n// ...\noptiling::TCubeTiling tilingData;\nint ret = tiling.GetTiling(tilingData);    // if ret = -1, gen tiling failed\n\n// 多核Tiling\nauto ascendcPlatform = platform_ascendc::PlatformAscendC(context->GetPlatformInfo());\nmatmul_tiling::MultiCoreMatmulTiling tiling(ascendcPlatform);\ntiling.SetDim(1);\n// ...\noptiling::TCubeTiling tilingData;\nint ret = tiling.GetTiling(tilingData);    // if ret = -1, gen tiling failed\n\n// BatchMatmul Tiling\nauto ascendcPlatform = platform_ascendc::PlatformAscendC(context->GetPlatformInfo());\nmatmul_tiling::BatchMatmulTiling bmmTiling(ascendcPlatform);\nbmmTiling.SetAType(matmul_tiling::TPosition::GM, matmul_tiling::CubeFormat::ND, matmul_tiling::DataType::DT_FLOAT16);\n// ...\noptiling::TCubeTiling tilingData;\nint ret = tiling.GetTiling(tilingData);    // if ret = -1, gen tiling failed\n"
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