"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["620142"], {
885569(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_ascendc_operator_interface_cannkit_ascend_c_api_cannkit_advanced_apis_cannkit_matmul_cannkit_matmul_tiling_class_cannkit_tcubetiling_structure_cannkit_tcubetiling_structure_m_53f_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cann-kit-guide-cannkit-ascendc-operator-development-cannkit-ascendc-operator-interface-cannkit-ascend-c-api-cannkit-advanced-apis-cannkit-matmul-cannkit-matmul-tiling-class-cannkit-tcubetiling-structure-cannkit-tcubetiling-structure-m-53f.json
var site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_ascendc_operator_interface_cannkit_ascend_c_api_cannkit_advanced_apis_cannkit_matmul_cannkit_matmul_tiling_class_cannkit_tcubetiling_structure_cannkit_tcubetiling_structure_m_53f_namespaceObject = JSON.parse('{"id":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-advanced-apis/cannkit-matmul/cannkit-matmul-tiling-class/cannkit-tcubetiling-structure/cannkit-tcubetiling-structure","title":"TCubeTiling结构体","description":"TCubeTiling结构体包含Matmul Tiling切分算法的相关参数，被传递给Matmul kernel侧，用于Matmul的切块、搬运和计算过程等。TCubeTiling结构体的参数说明见表1。","source":"@site/docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-advanced-apis/cannkit-matmul/cannkit-matmul-tiling-class/cannkit-tcubetiling-structure/cannkit-tcubetiling-structure.md","sourceDirName":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-advanced-apis/cannkit-matmul/cannkit-matmul-tiling-class/cannkit-tcubetiling-structure","slug":"/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-advanced-apis/cannkit-matmul/cannkit-matmul-tiling-class/cannkit-tcubetiling-structure/","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-advanced-apis/cannkit-matmul/cannkit-matmul-tiling-class/cannkit-tcubetiling-structure/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"TCubeTiling结构体","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-tcubetiling-structure","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"构造函数","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-advanced-apis/cannkit-matmul/cannkit-matmul-tiling-class/cannkit-matmul-tiling-constructor/"},"next":{"title":"Tanh","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-advanced-apis/cannkit-math/cannkit-math-tanh/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-advanced-apis/cannkit-matmul/cannkit-matmul-tiling-class/cannkit-tcubetiling-structure/cannkit-tcubetiling-structure.md


const frontMatter = {
	title: 'TCubeTiling结构体',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-tcubetiling-structure',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = 'TCubeTiling结构体';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    header: "header",
    li: "li",
    p: "p",
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
        id: "tcubetiling结构体",
        children: "TCubeTiling结构体"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "TCubeTiling结构体包含Matmul Tiling切分算法的相关参数，被传递给Matmul kernel侧，用于Matmul的切块、搬运和计算过程等。TCubeTiling结构体的参数说明见表1。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表1"
        })
      }), " TCubeTiling结构说明"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "数据类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "usedCoreNum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用的AI处理器核数，请根据实际情况设置。取值范围为：[1, AI处理器最大核数]。该参数与shape相关参数的关系为：usedCoreNum = (M / singleCoreM) * (N / singleCoreN)。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "M, N, Ka, Kb"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "int"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["A、B、C矩阵原始输入的shape大小，以元素为单位。M, Ka为A矩阵原始输入的Shape, Kb, N为B矩阵原始输入的Shape。  - 大小约束  - 若A矩阵为ND格式，不进行转置时，Ka取值范围为[1, 65535]，M无大小限制；进行转置时，M取值范围为[1, 65535]，Ka无大小限制。  - 若B矩阵为ND格式，不进行转置时，N取值范围为[1, 65535]，Kb无大小限制；进行转置时，Kb取值范围为[1, 65535]，N无大小限制。  - 对齐约束  - 若A矩阵以NZ格式输入，则M需要以16个元素对齐，K需要以C0_size对齐；若B矩阵以NZ格式输入，则K需要以C0_size对齐，N需要以16个元素对齐。  - 若A、B矩阵为ND格式，无对齐约束。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " NZ格式的输入，half/bfloat16_t数据类型的C0_size为16，float数据类型的C0_size为8，int8_t数据类型的C0_size为32，int4_t数据类型的C0_size为64。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "singleCoreM, singleCoreN, singleCoreK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A、B、C矩阵单核内shape大小，以元素为单位。  singleCoreK = K，多核处理时不对K进行切分；singleCoreM <= M；singleCoreN <= N。  若A矩阵以NZ格式输入，则singleCoreM需要以16个元素对齐，singleCoreK需要以C0_size * fractal_num对齐；若B矩阵以NZ格式输入，则singleCoreK需要以C0_size * fractal_num对齐，singleCoreN需要以16个元素对齐。  NZ格式的输入，half/bfloat16_t数据类型的C0_size为16，float数据类型的C0_size为8，int8_t数据类型的C0_size为32，int4_t数据类型的C0_size为64。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "baseM, baseN, baseK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A、B、C矩阵参与一次矩阵乘指令的shape大小，以元素为单位。  - baseM * baseN * sizeof(l0c_dtype) <= L0C_size，其中l0c_dtype为int32_t或者float数据类型  - baseM * baseK * sizeof(Input_dtype) <= L0A_size  - baseK * baseN * sizeof(Input_dtype) <= L0B_size  A、B、C矩阵参与一次矩阵乘的shape大小需要按分形对齐，其含义请参考Mmad中的数据格式说明。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "depthA1, depthB1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A、B矩阵片全载A2/B2的份数，depthA1为baseM * baseK的整数倍，depthB1为baseN * baseK的整数倍。取值大于0。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "stepM， stepN，stepKa，stepKb"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "stepM为左矩阵在A1中缓存的bufferM方向上baseM的倍数。  stepN为右矩阵在B1中缓存的bufferN方向上baseN的倍数。  stepKa为左矩阵在A1中缓存的bufferKa方向上baseK的倍数。  stepKb为右矩阵在B1中缓存的bufferKb方向上baseK的倍数。  取值大于0。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "isBias"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否使能Bias，0代表不使能Bias，1代表使能Bias。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "transLength"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "max(A1Length, B1Length, C1Length, BiasLength)。其中，A1Length, B1Length, C1Length, BiasLength分别表示A/B/C/Bias矩阵在计算过程中需要临时占用的UB空间大小。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "iterateOrder"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "一次Iterate计算出[baseM, baseN]大小的C矩阵分片，Iterate完成后，Matmul会自动偏移下一次Iterate输出的C矩阵位置，iterateOrder表示自动偏移的顺序。参数取值如下。  - 0：先往M轴方向偏移再往N轴方向偏移  - 1：先往N轴方向偏移再往M轴方向偏移"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dbL0A, dbL0B,  dbL0C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MTE1是否开启double buffer。  dbL0A：左矩阵MTE1是否开启double buffer。dbL0B：右矩阵MTE1是否开启double buffer；dbL0C：Mmad是否开启double buffer。参数取值如下。  - 1：不开启double buffer  - 2：开启double buffer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "shareMode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该参数预留，开发者无需关注。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "shareL1Size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该参数预留，开发者无需关注。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "shareL0CSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该参数预留，开发者无需关注。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "shareUbSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该参数预留，开发者无需关注。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "batchM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该参数预留，开发者无需关注。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "batchN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该参数预留，开发者无需关注。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "singleBatchM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该参数预留，开发者无需关注。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "singleBatchN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该参数预留，开发者无需关注。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者通过调用GetTiling接口获取TCubeTiling结构体，具体流程请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-advanced-apis/cannkit-matmul/cannkit-matmul-tiling-class/cannkit-matmul-tiling-usage-description",
        children: "使用说明"
      }), "。若开发者需要修改调整Tiling，请参考如下TCubeTiling参数约束和性能调优推荐取值，进行参数的设置。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "TCubeTiling参数约束"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "TCubeTiling参数需要同时满足表1中的所有约束条件。若Matmul对象的MatmulConfig模板为MDL模板，除表1外，还同时需要满足表 MDL模板补充约束条件。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "表2"
            })
          }), " TCubeTiling约束条件"]
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "约束条件"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "说明"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "usedCoreNum <= aiCoreCnt"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "使用核数小于等于当前AI处理器的最大核数。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "baseM * baseK * sizeof(A_type) * dbL0A< l0a_size"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "A矩阵base块不超过l0a buffer大小。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "baseN * baseK * sizeof(B_type) * dbL0B < l0b_size"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "B矩阵base块不超过l0b buffer大小。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "baseM * baseN * sizeof(int32_t) * dbL0C < l0c_size"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "C矩阵base块不超过l0c buffer大小。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "baseN * sizeof(Bias_type) < biasT_size"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Bias的base块不超过BiasTable buffer大小。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "stepM * stepKa * db = depthA1  db这里表示为左矩阵MTE2是否开启double buffer，即L1是否开启double buffer，取值1（不开启double buffer）或2（开启double buffer）"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "depthA1的取值与stepM * stepKa * db相同。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "stepN * stepKb * db = depthB1  db这里表示为右矩阵MTE2是否开启double buffer，即L1是否开启double buffer，取值1（不开启double buffer）或2（开启double buffer）"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "depthB1的取值与stepN * stepKb * db相同。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "baseM * baseK * depthA1 * sizeof(A_type) + baseN * baseK * depthB1 * sizeof(B_type) <= L1_size"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "A矩阵和B矩阵在L1缓存块满足L1 buffer大小限制。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "baseM * baseK, baseK * baseN和baseM * baseN按照NZ格式的分形对齐"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["A矩阵、B矩阵、C矩阵的base块需要满足对齐约束：  baseM和baseN需要以16个元素对齐，baseK需要以C0_size对齐。  ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "说明："
                  })
                }), " half/bfloat16_t数据类型的C0_size为16，float数据类型的C0_size为8，int8_t数据类型的C0_size为32，int4_t数据类型的C0_size为64。"]
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "表3"
            })
          }), " MDL模板补充约束条件"]
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "约束条件"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "说明"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "Ka不全载时，即Ka / baseK > stepKa，stepM = 1"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "K方向非全载时，M方向只能逐块搬运。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "Kb不全载时，即Kb / baseK > stepKb，stepN = 1"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "K方向非全载时，N方向只能逐块搬运。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "kaStepIter_ % kbStepIter_ = 0或者kbStepIter_ % kaStepIter_ = 0  kaStepIter_ = CeilDiv(tiling_->singleCoreK_, tiling_->baseK * tiling_->stepKa)  kbStepIter_ = CeilDiv(tiling_->singleCoreK_, tiling_->baseK * tiling_->stepKb)"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MDL模板K方向循环搬运要求Ka和Kb方向迭代次数为倍数关系。  kaStepIter_ ：Ka方向循环搬运迭代次数。  kbStepIter_ ：Kb方向循环搬运迭代次数。"
              })]
            })]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "性能调优推荐取值"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "根据Tiling调优经验，部分TCubeTiling参数值或取值方式推荐如下。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "base块推荐(baseM, baseN, baseK)：(128, 256, 64)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "dbL0A / dbL0B = 2"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "depthA1 / (stepM * stepKa) = 2"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "depthB1 / (stepN * stepKb) = 2"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "优先设置参数stepKa/stepKb，使得K方向全载，再考虑M方向或N方向全载。"
          }), "\n"]
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