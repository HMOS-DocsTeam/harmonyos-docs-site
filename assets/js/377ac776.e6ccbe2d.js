"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["643777"], {
155228(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_custom_operator_development_cannkit_operator_implementation_cannkit_matrix_programming_high_level_api_cannkit_matrix_programming_operator_cannkit_matrix_programming_operator_377_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cann-kit-guide-cannkit-ascendc-operator-development-cannkit-custom-operator-development-cannkit-operator-implementation-cannkit-matrix-programming-high-level-api-cannkit-matrix-programming-operator-cannkit-matrix-programming-operator--377.json
var site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_custom_operator_development_cannkit_operator_implementation_cannkit_matrix_programming_high_level_api_cannkit_matrix_programming_operator_cannkit_matrix_programming_operator_377_namespaceObject = JSON.parse('{"id":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-operator-implementation/cannkit-matrix-programming-high-level-api/cannkit-matrix-programming-operator/cannkit-matrix-programming-operator","title":"矩阵编程算子实现","description":"实现流程","source":"@site/docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-operator-implementation/cannkit-matrix-programming-high-level-api/cannkit-matrix-programming-operator/cannkit-matrix-programming-operator.md","sourceDirName":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-operator-implementation/cannkit-matrix-programming-high-level-api/cannkit-matrix-programming-operator","slug":"/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-operator-implementation/cannkit-matrix-programming-high-level-api/cannkit-matrix-programming-operator/","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-operator-implementation/cannkit-matrix-programming-high-level-api/cannkit-matrix-programming-operator/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"矩阵编程算子实现","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-matrix-programming-operator","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"基础知识","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-operator-implementation/cannkit-matrix-programming-high-level-api/cannkit-basic-knowledge/"},"next":{"title":"工程化算子开发概述","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-operator-implementation/cannkit-project-based-operator-development/cannkit-overview-of-engineering-operator/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-operator-implementation/cannkit-matrix-programming-high-level-api/cannkit-matrix-programming-operator/cannkit-matrix-programming-operator.md


const frontMatter = {
	title: '矩阵编程算子实现',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-matrix-programming-operator',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = '矩阵编程算子实现';

const assets = {

};



const toc = [{
  "value": "实现流程",
  "id": "实现流程",
  "level": 2
}, {
  "value": "设置format格式",
  "id": "设置format格式",
  "level": 2
}, {
  "value": "设置Shape信息",
  "id": "设置shape信息",
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
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "矩阵编程算子实现",
        children: "矩阵编程算子实现"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "实现流程",
      children: "实现流程"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "上文介绍了Matmul矩阵乘的数据切分方案和数据流。AscendC提供一组Matmul高阶API，封装了这些常用的切分和数据搬运、计算的算法逻辑，方便开发者快速实现Matmul矩阵乘法的运算操作。开发者在host侧通过调用API自动获取Tiling参数，该参数传递到kernel侧后，在初始化操作时传入，通过几个简单的API即可完成矩阵乘操作。以下代码仅包含Matmul的关键步骤，不能直接运行。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(33038)/* ["default"] */.A) + "",
        width: "528",
        height: "274"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "host侧自动获取Tiling参数的关键步骤介绍如下。"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建Tiling对象。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "auto ascendcPlatform = platform_ascendc::PlatformAscendC(context->GetPlatformInfo());\nmatmul_tiling::MatmulApiTiling cubeTiling(ascendcPlatform);\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["创建对象时需要传入硬件平台信息，硬件平台信息可以通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-gert-namespace/cannkit-tilingcontext/cannkit-getplatforminfo",
            children: "GetPlatformInfo"
          }), "获取。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置A、B、Bias的数据类型和格式。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "cubeTiling.SetAType(AscendC::TPosition::GM, CubeFormat::ND, matmul_tiling::DataType::DT_FLOAT16);\ncubeTiling.SetBType(AscendC::TPosition::GM, CubeFormat::ND, matmul_tiling::DataType::DT_FLOAT16);\ncubeTiling.SetCType(AscendC::TPosition::GM, CubeFormat::ND, matmul_tiling::DataType::DT_FLOAT);\ncubeTiling.SetBiasType(AscendC::TPosition::GM, CubeFormat::ND, matmul_tiling::DataType::DT_FLOAT);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置矩阵shape信息。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "cubeTiling.SetShape(M, N, K);\ncubeTiling.SetOrgShape(M, N, K);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置可用空间大小信息。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "cubeTiling.SetBufferSpace(-1, -1, -1);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "按需设置其他参数，比如设置bias参与计算。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "cubeTiling.SetBias(true);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取Tiling参数。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "MatmulCustomTilingData tiling;\nif (cubeTiling.GetTiling(tiling.cubeTilingData) == -1){\n    return ge::GRAPH_FAILED;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Tiling参数的序列化保存等其他操作。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "kernel侧使用Matmul API矩阵乘运算的具体步骤如下。"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建Matmul对象。示例如下。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include \"lib/matmul_intf.h\"\ntypedef matmul::MatmulType<AscendC::TPosition::GM, CubeFormat::ND, half> aType;\ntypedef matmul::MatmulType<AscendC::TPosition::GM, CubeFormat::ND, half> bType;\ntypedef matmul::MatmulType<AscendC::TPosition::GM, CubeFormat::ND, float> cType;\ntypedef matmul::MatmulType<AscendC::TPosition::GM, CubeFormat::ND, float> biasType;\nmatmul::Matmul<aType, bType, cType, biasType> mm;\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建对象时需要传入A、B、C、Bias的参数类型信息， 类型信息通过MatmulType来定义，包括：内存逻辑位置、数据格式、数据类型。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "初始化操作。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "mm.Init(&tiling.cubeTilingData, &pipe); // 初始化\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置左矩阵A、右矩阵B、Bias。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "mm.SetTensorA(gm_a);    // 设置左矩阵A\nmm.SetTensorB(gm_b);    // 设置右矩阵B\nmm.SetBias(gm_bias);    // 设置Bias\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "完成矩阵乘操作。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "调用Iterate完成单次迭代计算，叠加while循环完成单核全量数据的计算。Iterate方式，可以自行控制迭代次数，完成所需数据量的计算，方式比较灵活。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "while (mm.Iterate()) {\n     mm.GetTensorC(gm_c);\n }\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "调用IterateAll完成单核上所有数据的计算。IterateAll方式，无需循环迭代，使用比较简单。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "mm.IterateAll(gm_c);\n"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "结束矩阵乘操作。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "mm.End();\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "设置format格式",
      children: "设置format格式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建Matmul对象时需要传入A、B、C、Bias的参数类型信息， 类型信息通过MatmulType来定义，包括：内存逻辑位置、数据格式、数据类型。示例如下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef matmul::MatmulType<AscendC::TPosition::GM, CubeFormat::ND, half> aType;\ntypedef matmul::MatmulType<AscendC::TPosition::GM, CubeFormat::ND, half> bType;\ntypedef matmul::MatmulType<AscendC::TPosition::GM, CubeFormat::ND, float> cType;\ntypedef matmul::MatmulType<AscendC::TPosition::GM, CubeFormat::ND, float> biasType;\nmatmul::Matmul<aType, bType, cType, biasType> mm;\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["针对数据格式，包括CubeFormat::ND, CubeFormat::NZ, CubeFormat::ND_ALIGN三种，ND和NZ格式在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-operator-implementation/cannkit-matrix-programming-high-level-api/cannkit-basic-knowledge#%E6%95%B0%E6%8D%AE%E6%A0%BC%E5%BC%8F",
        children: "数据格式"
      }), "章节已经介绍。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ND_ALIGN用于配置输出矩阵时按照一定的补齐规则进行输出。ND–>ND_ALIGN变换过程下图所示，矩阵数据类型为uint32_t，假设输出矩阵输出到UB，原矩阵N方向没有32字节对齐，设置ND_ALIGN则在其后补0，将其对齐到32字节。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(49721)/* ["default"] */.A) + "",
        width: "528",
        height: "357"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "设置shape信息",
      children: "设置Shape信息"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Host Tiling时可以设置Shape信息，用于Tiling计算；kernel侧运行时也可以修改部分shape信息，用于尾块设置、Matmul复用（多个Matmul计算复用一个Matmul对象）等场景。本节对涉及到的Shape概念进行介绍，并给出host侧和kernel侧设置Tiling信息的指导。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "orgShape：M、N、K"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "singleCoreShape：singleCoreM、singleCoreN、singleCoreK"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "singleShape：singleM、singleN、singleK"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "baseShape：baseM、baseN、baseK"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-operator-implementation/cannkit-matrix-programming-high-level-api/cannkit-basic-knowledge#%E6%95%B0%E6%8D%AE%E5%88%86%E5%9D%97tiling",
        children: "数据分块(Tiling)"
      }), "的介绍我们已经了解了orgShape(M、N、K)，singleCoreShape(singleCoreM、singleCoreN、singleCoreK)，baseShape(baseM、baseN、baseK)的概念，如下图所示："]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(408302)/* ["default"] */.A) + "",
        width: "528",
        height: "201"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "除此之外，单核的Matmul Tiling时，实际参与Matmul计算的shape可以是原始shape中的一部分，singleM, singleN, singleK用于表达实际参与Matmul计算的shape，如下图所示。在单核的情况下，singleM, singleN, singleK会透传给singleCoreM, singleCoreN, singleCoreK。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(685216)/* ["default"] */.A) + "",
        width: "441",
        height: "374"
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
408302(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439291-bfb292ec1b99e92eab306f1f7ba02af0.png");

},
49721(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799596-e4ee5ccdd873418f26d2c1f73d18577b.png");

},
685216(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959246-4076e1d81dd7e073837bcfc79fa5e99e.png");

},
33038(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479245-ca33599e2f83c3753c580a579fb5e0fe.png");

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