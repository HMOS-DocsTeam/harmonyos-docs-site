"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["874563"], {
97259(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_ascendc_operator_interface_cannkit_ascend_c_api_cannkit_advanced_apis_cannkit_matmul_cannkit_matmul_1_cannkit_template_parameters_cannkit_template_parameters_md_566_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cann-kit-guide-cannkit-ascendc-operator-development-cannkit-ascendc-operator-interface-cannkit-ascend-c-api-cannkit-advanced-apis-cannkit-matmul-cannkit-matmul-1-cannkit-template-parameters-cannkit-template-parameters-md-566.json
var site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_ascendc_operator_interface_cannkit_ascend_c_api_cannkit_advanced_apis_cannkit_matmul_cannkit_matmul_1_cannkit_template_parameters_cannkit_template_parameters_md_566_namespaceObject = JSON.parse('{"id":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-advanced-apis/cannkit-matmul/cannkit-matmul1/cannkit-template-parameters/cannkit-template-parameters","title":"Matmul模板参数","description":"功能说明","source":"@site/docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-advanced-apis/cannkit-matmul/cannkit-matmul1/cannkit-template-parameters/cannkit-template-parameters.md","sourceDirName":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-advanced-apis/cannkit-matmul/cannkit-matmul1/cannkit-template-parameters","slug":"/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-advanced-apis/cannkit-matmul/cannkit-matmul1/cannkit-template-parameters/","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-advanced-apis/cannkit-matmul/cannkit-matmul1/cannkit-template-parameters/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"Matmul模板参数","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-template-parameters","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用说明","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-advanced-apis/cannkit-matmul/cannkit-matmul1/cannkit-matmul-usage-description/"},"next":{"title":"MatmulConfig","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-advanced-apis/cannkit-matmul/cannkit-matmul1/cannkit-matmulconfig/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-advanced-apis/cannkit-matmul/cannkit-matmul1/cannkit-template-parameters/cannkit-template-parameters.md


const frontMatter = {
	title: 'Matmul模板参数',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-template-parameters',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = 'Matmul模板参数';

const assets = {

};



const toc = [{
  "value": "功能说明",
  "id": "功能说明",
  "level": 2
}, {
  "value": "实现原理",
  "id": "实现原理",
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
  "value": "注意事项",
  "id": "注意事项",
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
        id: "matmul模板参数",
        children: "Matmul模板参数"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "功能说明",
      children: "功能说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建Matmul对象时需要传入："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "A、B、C、Bias的参数类型信息，类型信息通过MatmulType来定义，包括：内存逻辑位置、数据格式、数据类型、是否转置、数据排布和是否使能L1复用。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "MatmulConfig信息（可选），用于配置Matmul模板信息以及相关的配置参数。不配置默认使能Norm模板。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "针对Kirin9020系列处理器，当前只支持使能默认的MDL模板。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "MatmulCallBack回调函数信息（可选），用于配置左右矩阵从GM拷贝到L1、计算结果从CO1拷贝到GM的自定义函数。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "MatmulPolicy信息（可选），预留参数。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "实现原理",
      children: "实现原理"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以输入矩阵A (GM, ND, half)、矩阵B(GM, ND, half)，输出矩阵C (GM, ND, float)，无Bias场景为例，其中(GM, ND, half)表示数据存放在GM上，数据格式为ND，数据类型为half，描述Matmul高阶API典型场景的内部算法框图，如下图所示。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1"
        })
      }), " Matmul算法框图"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(458987)/* ["default"] */.A) + "",
        width: "525",
        height: "515"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "计算过程分为如下几步："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "数据从GM搬到A1：DataCopy每次从矩阵A，搬出一个stepM*baseM*stepKa*baseK的矩阵块a1，循环多次完成矩阵A的搬运；数据从GM搬到B1：DataCopy每次从矩阵B，搬出一个stepKb*baseK*stepN*baseN的矩阵块b1，循环多次完成矩阵B的搬运。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "数据从A1搬到A2：LoadData每次从矩阵块a1，搬出一个baseM * baseK的矩阵块a0；数据从B1搬到B2，并完成转置：LoadData每次从矩阵块b1，搬出一个baseK * baseN的矩阵块，并将其转置为baseN * baseK的矩阵块b0。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "矩阵乘：每次完成一个矩阵块a0 * b0的计算，得到baseM * baseN的矩阵块co1。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "数据从矩阵块co1搬到矩阵块co2： DataCopy每次搬运一块baseM * baseN的矩阵块co1到singleCoreM * singleCoreN的矩阵块co2中。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "重复2-4步骤，完成矩阵块a1 * b1的计算。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "数据从矩阵块co2搬到矩阵块C：DataCopy每次搬运一块singleCoreM * singleCoreN的矩阵块co2到矩阵块C中。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "重复1-6步骤，完成矩阵A * B = C的计算。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数原型",
      children: "函数原型"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "template <class A_TYPE, class B_TYPE, class C_TYPE, class BIAS_TYPE = C_TYPE, const MatmulConfig& MM_CFG = CFG_NORM, class MM_CB = MatmulCallBackFunc<nullptr, nullptr, nullptr>, MATMUL_POLICY_DEFAULT_OF(MatmulPolicy)> \nusing Matmul = matmul::MatmulImpl<A_TYPE, B_TYPE, C_TYPE, BIAS_TYPE, MM_CFG, MM_CB, MATMUL_POLICY>;\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["A_TYPE、B_TYPE、C_TYPE类型信息通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-advanced-apis/cannkit-matmul/cannkit-matmul1/cannkit-matmul-usage-description",
            children: "使用说明"
          }), "表1来定义。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "MatmulConfig（可选），参数说明见表2。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "该参数可选取提供的模板默认值之一，当前提供的MatmulConfig模板取值范围为[CFG_NORM、CFG_MDL、CFG_IBSHARE_NORM、MM_CFG_BB]，分别对应默认的Norm、MDL、IBShare、BasicBlock模板。各模板的介绍请参考表3。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "该参数可以通过MatmulConfig章节中介绍的获取模板的接口，自定义模板参数配置。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "另外，MatmulConfig可拆分为表5、表6、表7、表8二级子Config，使用GetMMConfig接口，设置需要的二级子Config和表4，可以更加灵活的获取自定义的模板参数配置MatmulConfig。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "MM_CB（可选），用于支持不同的搬入搬出需求，实现定制化的搬入搬出功能，如非连续搬入或针对搬出设置不同的数据片段间隔等。MM_CB中3个函数指针分别对应计算结果从CO1拷贝到GM、左矩阵从GM拷贝到L1、右矩阵从GM拷贝到L1的回调函数指针，各个功能回调函数接口定义及参数释义见表9。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "MATMUL_POLICY_DEFAULT_OF(MatmulPolicy)（可选），当前为预留参数，无须配置。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#define MATMUL_POLICY_DEFAULT_OF(DEFAULT)      \\\ntemplate <const auto& = MM_CFG, typename ...> class MATMUL_POLICY = DEFAULT\n"
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
      }), " MatmulType参数说明"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "POSITION"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "内存逻辑位置  Kirin9020系列处理器：  - A矩阵可设置为TPosition::GM，TPosition::TSCM。  - B矩阵可设置为TPosition::GM，TPosition::TSCM。  - C矩阵可设置为TPosition::GM。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CubeFormat"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kirin9020系列处理器：  - A矩阵在GM时，支持CubeFormat::ND。  - A矩阵在TSCM时，支持CubeFormat::NZ/CubeFormat::VECTOR。  - B矩阵在GM时，支持CubeFormat::ND/CubeFormat::NZ。  - B矩阵在TSCM时支持CubeFormat::NZ。  - C矩阵在GM时，支持CubeFormat::ND。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TYPE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kirin9020系列处理器：  - A矩阵可设置为half。  - B矩阵可设置为half。  - C矩阵可设置为half。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ISTRANS"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["是否开启使能矩阵转置的功能。当前不支持转置，只支持设为false。  false为不开启使能矩阵转置的功能，通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-advanced-apis/cannkit-matmul/cannkit-matmul1/cannkit-settensora",
              children: "SetTensorA"
            }), "和", (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-advanced-apis/cannkit-matmul/cannkit-matmul1/cannkit-settensorb",
              children: "SetTensorB"
            }), "不能设置A、B矩阵是否转置。Matmul会认为A矩阵形状为[M, K]，B矩阵形状为[K, N]。  默认为false不使能转置。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LAYOUT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表征数据的排布。  NONE：默认值，表示不使用BatchMatmul，其他选项表示使用BatchMatmul。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表2"
        })
      }), " MatmulConfig参数说明"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "支持模板：Norm, MDL, SpecialMDL, IBShare, BasicBlock"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "doNorm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使能Norm模板。参数取值如下。  - true：使能Norm模板  - false：不使能Norm模板  不指定模板的情况默认使能Norm模板。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Norm"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "doMultiDataLoad"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使能MDL模板。参数取值如下。  - true：使能MDL模板  - false：不使能MDL模板"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MDL"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "doSpecialMDL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使能SpecialMDL模板。参数取值如下。  - true：使能SpecialMDL模板  - false：不使能SpecialMDL模板  本质上也是MDL模板。MDL模板Matmul K方向不全载时（singleCoreK/baseK > stepKb），仅支持stepN设置为1，开启后支持stepN=2。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SpecialMDL"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "doIBShareNorm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使能IBShare模板。参数取值如下。  - false：不使能IBShare（默认值）  - true：使能IBShare  IBShare的功能是能够复用L1上相同的A矩阵或B矩阵数据，开启后在数据复用场景能够避免重复搬运数据到L1。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IBShare"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "intrinsicsLimit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当左矩阵或右矩阵在单核上内轴（即尾轴）大于等于65535时，是否使能循环执行数据的搬入。例如，左矩阵A[M, K]，单核上的内轴数据singleCoreK大于65535，配置该参数为true后，API内部通过循环执行数据的搬入。参数取值如下。  - false：当左矩阵或右矩阵在单核上内轴大于等于65535时，不使能循环执行数据的搬入（默认值）  - true：当左矩阵或右矩阵在单核上内轴大于等于65535时，使能数循环执行数据的搬入"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "所有模板"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "batchLoop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否多Batch输入多Batch输出。参数取值如下。  - false：不使能多Batch（默认值）  - true：使能多Batch  仅对BatchMatmul有效。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "所有模板"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "isVecND2NZ"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使能通过vector进行ND2NZ。参数取值如下。  - false：不使能通过vector进行ND2NZ（默认值）  - true：使能通过vector进行ND2NZ  使能时需要设置SetLocalWorkspace。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "所有模板"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "enableInit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否启用Init函数，不使能Init函数能够提升常量传播效果，优化性能。默认使能。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "所有模板"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bmmMode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Layout类型为NORMAL时，设置BatchMatmul输入A/B矩阵的多batch数据总和与L1 Buffer的大小关系。参数取值如下。  - BatchMode::BATCH_LESS_THAN_L1：多batch数据总和<L1 Buffer Size。  - BatchMode::BATCH_LARGE_THAN_L1：多batch数据总和>L1 Buffer Size。  - BatchMode::SINGLE_LARGE_THAN_L1：单batch数据总和>L1 Buffer Size。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Norm, IBShare"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "enUnitFlag"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使能unitflag功能，使计算与搬运流水并行，提高性能。Norm, IBShare下默认使能，MDL下默认不使能。参数取值如下。  - false：不使能unitflag功能  - true：使能unitflag功能"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MDL, Norm, IBShare"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "isPerTensor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A矩阵half类型输入且B矩阵int8类型输入场景，使能B矩阵量化时是否为per tensor，true为per tensor，false为per channel。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MDL, SpecialMDL"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hasAntiQuantOffset"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A矩阵half类型输入且B矩阵int8类型输入场景，使能B矩阵量化时是否使用offset系数。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MDL, SpecialMDL"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "doMTE2Preload"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在MTE2流水间隙较大，且M/N数值较大时可通过该参数开启对应M/N方向的预加载功能，开启后能减小MTE2间隙，提升性能。预加载功能仅在MDL模板有效。参数取值如下。  0：不开启（默认值）  1：开启M方向preload  2：开启N方向preload  注意，开启M/N预加载功能时需保证K全载，且M/N开启Double Buffer。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MDL, SpecialMDL"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "isMsgReuse"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SetSelfDefineData函数设置的回调函数中的dataPtr是否直接传递计算数据。参数取值如下。  - true：直接传递计算数据，仅限单个值  - false：传递GM上存储的数据地址信息"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Norm, MDL"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "enableUBReuse"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否使能UB复用。参数取值如下。  - true：使能UB复用  - false：不使能UB复用"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MDL"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "enableL1CacheUB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否使能L1缓存UB计算块。参数取值如下。  - true：使能L1缓存UB计算块  - false：不使能L1缓存UB计算块  若要使能L1缓存UB计算块，必须在tiling实现中调用SetMatmulConfigParams接口配置相关信息。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MDL"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "isDoubleCache"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开启IBShare模板后，在L1上是否同时缓存两块数据。注意，需要控制base块大小，防止两块缓存超过L1大小限制。参数取值如下。  - false：L1上同时缓存一块数据（默认值）  - true：使能L1上同时缓存两块数据"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IBShare"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IterateOrder"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Matmul做矩阵运算的循环迭代顺序，与", (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-advanced-apis/cannkit-matmul/cannkit-matmul-tiling-class/cannkit-tcubetiling-structure",
              children: "TCubeTiling结构体"
            }), "表1中的iterateOrder参数含义相同。当ScheduleType参数取值为ScheduleType::OUTER_PRODUCT或1时，本参数生效。参数取值如下。  - ORDER_M = 0, // 先往M轴方向偏移再往N轴方向偏移  - ORDER_N, // 先往N轴方向偏移再往M轴方向偏移  - UNDEF, // 当前无效  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " MDL模板使用时，若IterateOrder取值ORDER_M，", (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-advanced-apis/cannkit-matmul/cannkit-matmul-tiling-class/cannkit-tcubetiling-structure",
              children: "TCubeTiling结构体"
            }), "表1中的stepN需要大于1，IterateOrder取值ORDER_N时，TCubeTiling结构中的stepM需要大于1。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Norm、MDL"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ScheduleType"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["配置Matmul数据搬运模式。参数取值如下。  - ScheduleType::INNER_PRODUCT或0：默认模式，在K方向上做MTE1的循环搬运。  - ScheduleType::OUTER_PRODUCT或1：在M或N方向上做MTE1的循环搬运。使能后，需要与IterateOrder参数配合使用。该配置当前只在Norm模板的Batch Matmul场景、MDL模板生效。  - 若IterateOrder取值ORDER_M，则N方向循环搬运（在singleCoreN大于baseN场景可能有性能提升），即B矩阵的MTE1搬运并行。  - 若IterateOrder取值ORDER_N，则M方向循环搬运（在singleCoreM大于baseM场景可能有性能提升），即A矩阵的MTE1搬运并行。  - 不能同时使能M方向和N方向循环搬运。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  - singleCoreK>baseK的场景，不能使能ScheduleType::OUTER_PRODUCT取值，需使用默认模式。  - MDL模板仅在调用IterateAll计算的场景支持配置ScheduleType::OUTER_PRODUCT或1。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Norm、MDL"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "isBiasBatch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "批量多Batch的Matmul场景，即BatchMatmul场景，Bias的大小是否带有Batch轴。参数取值如下。  - true：Bias带有Batch轴，Bias大小为Batch * N（默认值）。  - false：Bias不带Batch轴，Bias大小为N，多Batch计算Matmul时，会复用Bias。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Norm"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "doBasicBlock"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["是否使能BasicBlock模板。模板参数取值如下。  - true：使能BasicBlock模板  - false：不使能BasicBlock模板  调用GetBasicConfig接口获取BasicBlock模板时，该参数被置为true。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  - BasicBlock模板暂不支持输入为int8，int4数据类型的A、B矩阵，支持half/float/bfloat16_t数据类型的A、B矩阵。  - BasicBlock模板暂不支持A矩阵的格式为标量数据Scalar或向量数据Vector。  - BasicBlock模板暂不支持ScheduleType::OUTER_PRODUCT的数据搬运模式。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BasicBlock"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "basicM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "相当于baseM。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BasicBlock"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "basicN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "相当于baseN。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BasicBlock"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "basicK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "相当于baseK。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BasicBlock"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "doSpecialBasicBlock"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使能SpecialBasicBlock模板。参数取值如下。  - true：使能SpecialBasicBlock模板。  - false：不使能SpecialBasicBlock模板。  本质上也是BasicBlock模板，但消除了头开销scalar计算。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "预留参数"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "singleCoreM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "单核内M轴shape大小，以元素为单位。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "预留参数"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "singleCoreN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "单核内N轴shape大小，以元素为单位。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "预留参数"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "singleCoreK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "单核内K轴shape大小，以元素为单位。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "预留参数"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "stepM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "左矩阵在A1中缓存的bufferM方向上baseM的倍数。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "预留参数"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "stepN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "右矩阵在B1中缓存的bufferN方向上baseN的倍数。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "预留参数"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "baseMN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "baseM*baseN的大小。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "预留参数"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "singleCoreMN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "singleCoreM*singleCoreN的大小。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "预留参数"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表3"
        })
      }), " 模板特性"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "模板"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "实现"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "优点"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "推荐使用场景"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Norm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持L1缓存多个基本块，MTE2分多次从GM搬运基本块到L1，每次搬运一份基本块，已搬的基本块不清空。（举例说明：depthA1=6，代表搬入6份A矩阵基本块到L1，1次搬运一份基本块，MTE2进行6次搬运）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可以提前启动MTE1流水（因为搬1份基本块就可以做MTE1后面的运算）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认使能Norm模板"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MDL，SpecialMDL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持L1缓存多个基本块，MTE2从GM到L1的搬运为一次性\"大包\"搬运。（举例说明：depthA1=6，代表一次性搬入6份A矩阵基本块到L1，MTE2进行1次搬运）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对于一般的大shape场景，可以减少MTE2的循环搬运，提升性能"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "大shape场景"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IBShare"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MIX场景下，多个AIV的A矩阵或B矩阵GM地址相同的时候，通过共享L1 Buffer，减少MTE2搬运。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "减少MTE2搬运，提升性能"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MIX场景多个AIV的A矩阵或B矩阵GM地址相同"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BasicBlock"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在无尾块的场景，base块大小确定的情况下，通过GetBasicConfig接口配置输入的基本块大小，固定MTE1每次搬运的矩阵大小及Mmad每次计算的矩阵大小，减少参数计算量。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "减少MTE1矩阵搬运和Mmad矩阵计算过程中的参数计算开销"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无尾块，base块(baseM, baseN)大小确定"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表4"
        })
      }), " MatmulConfigMode参数说明"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CONFIG_NORM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示设置MatmulConfig默认值为Norm模板。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CONFIG_MDL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示设置MatmulConfig默认值为MDL模板。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CONFIG_SPECIALMDL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示设置MatmulConfig默认值为SpecialMDL模板。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CONFIG_IBSHARE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示设置MatmulConfig默认值为IBShare模板。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表5"
        })
      }), " MatmulShapeParams参数说明"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "数据类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "singleCoreM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "单核内M轴shape大小，以元素为单位。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "singleCoreN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "单核内N轴shape大小，以元素为单位。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "singleCoreK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "单核内K轴shape大小，以元素为单位。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "basicM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "相当于baseM。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "basicN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "相当于baseN。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "basicK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "相当于baseK。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表6"
        })
      }), " MatmulQuantParams参数说明"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "数据类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "isPerTensor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "bool"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A矩阵half类型输入且B矩阵int8类型输入场景，使能B矩阵量化时是否为per tensor，true为per tensor，false为per channel。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hasAntiQuantOffset"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "bool"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A矩阵half类型输入且B矩阵int8类型输入场景，使能B矩阵量化时是否使用offset系数，true为使用offset系数，false为不使用offset系数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表7"
        })
      }), " MatmulBatchParams参数说明"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "数据类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "batchLoop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "bool"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否多Batch输入多Batch输出。参数取值如下。  - false：不使能多Batch（默认值）  - true：使能多Batch  仅对BatchMatmul有效。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bmmMode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BatchMode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Layout类型为NORMAL时，设置BatchMatmul输入A/B矩阵的多batch数据总和与L1 Buffer的大小关系。参数取值如下。  - BatchMode::BATCH_LESS_THAN_L1：多batch数据总和<L1 Buffer Size。  - BatchMode::BATCH_LARGE_THAN_L1：多batch数据总和>L1 Buffer Size。  - BatchMode::SINGLE_LARGE_THAN_L1：单batch数据总和>L1 Buffer Size。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "isBiasBatch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "bool"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "批量多Batch的Matmul场景，即BatchMatmul场景，Bias的大小是否带有Batch轴。参数取值如下。  - true：Bias带有Batch轴，Bias大小为Batch * N（默认值）  - false：Bias不带Batch轴，Bias大小为N，多Batch计算Matmul时，会复用Bias。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表8"
        })
      }), " MatmulFuncParams参数说明"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "数据类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "intrinsicsLimit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "bool"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "进行芯片指令搬运地址偏移量校验，影响性能。参数取值如下。  - false：不进行芯片指令搬运地址偏移量校验（默认值）  - true：进行芯片指令搬运地址偏移量校验"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "enVecND2NZ"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "bool"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使能通过vector进行ND2NZ。参数取值如下。  - false：不使能通过vector进行ND2NZ（默认值）  - true：使能通过vector进行ND2NZ  使能时需要设置SetLocalWorkspace。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "doMTE2Preload"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在MTE2流水间隙较大，且M/N数值较大时可通过该参数开启对应M/N方向的预加载功能，开启后能减小MTE2间隙，提升性能。预加载功能仅在MDL模板有效。参数取值如下。  0：不开启（默认值）  1：开启M方向preload  2：开启N方向preload  注意，开启M/N预加载功能时需保证K全载，且M/N开启Double Buffer。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "enableReuse"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "bool"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SetSelfDefineData函数设置的回调函数中的dataPtr是否直接传递计算数据。参数取值如下。  - true：直接传递计算数据，仅限单个值  - false：传递GM上存储的数据地址信息"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "enableUBReuse"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "bool"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否使能UB复用。参数取值如下。  - true：使能UB复用  - false：不使能UB复用"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "enableL1CacheUB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "bool"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否使能L1缓存UB计算块。参数取值如下。  - true：使能L1缓存UB计算块  - false：不使能L1缓存UB计算块  若要使能L1缓存UB计算块，必须在tiling实现中调用SetMatmulConfigParams接口配置相关信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "iterateOrder"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IterateOrder"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Matmul做矩阵运算的循环迭代顺序，与", (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-advanced-apis/cannkit-matmul/cannkit-matmul-tiling-class/cannkit-tcubetiling-structure",
              children: "TCubeTiling结构体"
            }), "表1中的iterateOrder参数含义相同。当ScheduleType参数取值为ScheduleType::OUTER_PRODUCT或1时，本参数生效。参数取值如下。  - ORDER_M = 0, // 先往M轴方向偏移再往N轴方向偏移  - ORDER_N, // 先往N轴方向偏移再往M轴方向偏移  - UNDEF, // 当前无效  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " MDL模板使用时，若IterateOrder取值ORDER_M，", (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-advanced-apis/cannkit-matmul/cannkit-matmul-tiling-class/cannkit-tcubetiling-structure",
              children: "TCubeTiling结构体"
            }), "表1中的stepN需要大于1，IterateOrder取值ORDER_N时，TCubeTiling结构中的stepM需要大于1。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "scheduleType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ScheduleType"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["配置Matmul数据搬运模式。参数取值如下。  - ScheduleType::INNER_PRODUCT或0：默认模式，在K方向上做MTE1的循环搬运。  - ScheduleType::OUTER_PRODUCT或1：在M或N方向上做MTE1的循环搬运。使能后，需要与IterateOrder参数配合使用。该配置当前只在Norm模板的Batch Matmul场景、MDL模板生效。  - 若IterateOrder取值ORDER_M，则N方向循环搬运（在singleCoreN大于baseN场景可能有性能提升），即B矩阵的MTE1搬运并行。  - 若IterateOrder取值ORDER_N，则M方向循环搬运（在singleCoreM大于baseM场景可能有性能提升），即A矩阵的MTE1搬运并行。  - 不能同时使能M方向和N方向循环搬运。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  - singleCoreK>baseK的场景，不能使能ScheduleType::OUTER_PRODUCT取值，需使用默认模式。  - MDL模板仅在调用IterateAll计算的场景支持配置ScheduleType::OUTER_PRODUCT或1。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "enableDoubleCache"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "bool"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开启IBShare模板后，在L1上是否同时缓存两块数据。注意，需要控制base块大小，防止两块缓存超过L1大小限制。参数取值如下。  - false：L1上同时缓存一块数据（默认值）。  - true：使能L1上同时缓存两块数据。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表9"
        })
      }), " MatmulCallBackFunc回调函数接口及参数说明"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "回调函数功能"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "回调函数接口"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "参数说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "可自定义设置不同的搬出数据片段数目等参数，实现将Matmul计算结果从CO1搬出到GM的功能"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["void DataCopyOut(const ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "gm"
              })
            }), " void *gm, const LocalTensor<int8_t> &co1Local, const void *dataCopyOutParams, const uint64_t tilingPtr, const uint64_t dataPtr)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "gm：输出的GM地址。  co1Local：CO1上的计算结果。  dataCopyOutParams：  Matmul定义的DataCopyOutParams结构体指针，供开发者参考使用。  - uint16_t cBurstNum：传输数据片段数目  - uint16_t burstLen：连续传输数据片段长度  - int16_t srcStride：源tensor相邻连续数据片段间隔  - uint32_t dstStride：目的tensor相邻连续数据片段间隔  - uint16_t oriNSize：NZ转ND时，源tensorN方向大小  - bool enUnitFlag：是否使能UnitFlag  - uint64_t quantScalar：量化场景下量化Scalar的值  - uint64_t cbufWorkspaceAddr：量化场景下量化Tensor地址  tilingPtr：开发者使用SetUserDefInfo设置的tiling参数地址。  dataPtr：开发者使用SetSelfDefineData设置的计算数据地址。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "可自定义左矩阵搬入首地址、搬运块位置、搬运块大小，实现左矩阵从GM搬入L1的功能"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["void CopyA1(const LocalTensor<int8_t> &aMatrix, const ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "gm"
              })
            }), " void *gm, int row, int col, int useM, int useK, const uint64_t tilingPtr, const uint64_t dataPtr)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "aMatrix：目标L1Buffer地址。  gm：左矩阵GM首地址。  row、col：搬运块左上角坐标在左矩阵中的位置。  useM、useK：搬运块M、K方向大小。  tilingPtr：开发者使用SetUserDefInfo设置的tiling参数地址。  dataPtr：开发者使用SetSelfDefineData设置的计算数据地址。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "可自定义右矩阵搬入首地址、搬运块位置、搬运块大小，实现右矩阵从GM搬入L1的功能"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["void CopyB1(const LocalTensor<int8_t> &bMatrix, const ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "gm"
              })
            }), " void *gm, int row, int col, int useK, int useN, const uint64_t tilingPtr, const uint64_t dataPtr)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "bMatrix：目标L1Buffer地址。  gm：右矩阵GM首地址。  row、col：搬运块左上角坐标在右矩阵中的位置。  useK、useN：搬运块K、N方向大小。  tilingPtr：开发者使用SetUserDefInfo设置的tiling参数地址。  dataPtr：开发者使用SetSelfDefineData设置的计算数据地址。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表10"
        })
      }), " MatmulApiStaticTiling常量化Tiling参数说明"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "数据类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "M, N, Ka, Kb,  singleCoreM, singleCoreN, singleCoreK,  baseM, baseN, baseK,  depthA1, depthB1,  stepM， stepN，stepKa，stepKb,  isBias,  transLength,  iterateOrder,  dbL0A, dbL0B,  dbL0C,  shareMode,  shareL1Size,  shareL0CSize,  shareUbSize,  batchM,  batchN,  singleBatchM,  singleBatchN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "与TCubeTiling结构体结构体中各同名参数含义一致。本结构体中的参数是常量化后的常数值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "cfg"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E",
              children: "参数说明"
            }), "下的表2"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Matmul模板的参数配置。"
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
      id: "注意事项",
      children: "注意事项"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "无"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "调用示例",
      children: "调用示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 开发者自定义回调函数\nvoid DataCopyOut(const __gm__ void *gm, const LocalTensor<int8_t> &co1Local, const void *dataCopyOutParams, const uint64_t tilingPtr, const uint64_t dataPtr);\nvoid CopyA1(const AscendC::LocalTensor<int8_t> &aMatrix, const __gm__ void *gm, int row, int col, int useM, int useK, const uint64_t tilingPtr, const uint64_t dataPtr);\nvoid CopyB1(const AscendC::LocalTensor<int8_t> &bMatrix, const __gm__ void *gm, int row, int col, int useK, int useN, const uint64_t tilingPtr, const uint64_t dataPtr);\n \ntypedef matmul::MatmulType<AscendC::TPosition::GM, CubeFormat::ND, half> aType;\ntypedef matmul::MatmulType<AscendC::TPosition::GM, CubeFormat::ND, half> bType;\ntypedef matmul::MatmulType<AscendC::TPosition::GM, CubeFormat::ND, float> cType;\ntypedef matmul::MatmulType<AscendC::TPosition::GM, CubeFormat::ND, float> biasType;\nmatmul::Matmul<aType, bType, cType, biasType, CFG_MDL> mm1;\nmatmul::MatmulConfig mmConfig{false, true, false, 128, 128, 64};\nmmConfig.enUnitFlag = false;\nmatmul::Matmul<aType, bType, cType, biasType, mmConfig> mm2;\nmatmul::Matmul<aType, bType, cType, biasType, CFG_NORM, matmul::MatmulCallBackFunc<DataCopyOut, CopyA1, CopyB1>> mm3;\n"
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
458987(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479287-b44f2f8bdace414219659a710eca50a1.png");

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