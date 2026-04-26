"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["698964"], {
985787(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_ascendc_operator_interface_cannkit_ascend_c_api_cannkit_basic_apis_cannkit_vectorcalculation_data_movement_cannkit_datacopy_cannkit_common_data_movement_cannkit_common_data_m_db1_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cann-kit-guide-cannkit-ascendc-operator-development-cannkit-ascendc-operator-interface-cannkit-ascend-c-api-cannkit-basic-apis-cannkit-vectorcalculation-data-movement-cannkit-datacopy-cannkit-common-data-movement-cannkit-common-data-m-db1.json
var site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_ascendc_operator_interface_cannkit_ascend_c_api_cannkit_basic_apis_cannkit_vectorcalculation_data_movement_cannkit_datacopy_cannkit_common_data_movement_cannkit_common_data_m_db1_namespaceObject = JSON.parse('{"id":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vectorcalculation-data-movement/cannkit-datacopy/cannkit-common-data-movement/cannkit-common-data-movement","title":"普通数据搬运","description":"函数功能","source":"@site/docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vectorcalculation-data-movement/cannkit-datacopy/cannkit-common-data-movement/cannkit-common-data-movement.md","sourceDirName":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vectorcalculation-data-movement/cannkit-datacopy/cannkit-common-data-movement","slug":"/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vectorcalculation-data-movement/cannkit-datacopy/cannkit-common-data-movement/","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vectorcalculation-data-movement/cannkit-datacopy/cannkit-common-data-movement/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"普通数据搬运","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-common-data-movement","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"数据分散/数据收集","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-data-distribution-collection/"},"next":{"title":"随路格式转换","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vectorcalculation-data-movement/cannkit-datacopy/cannkit-channel-associated-format-conversion/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vectorcalculation-data-movement/cannkit-datacopy/cannkit-common-data-movement/cannkit-common-data-movement.md


const frontMatter = {
	title: '普通数据搬运',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-common-data-movement',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = '普通数据搬运';

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
        id: "普通数据搬运",
        children: "普通数据搬运"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数功能",
      children: "函数功能"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "普通数据搬运接口，适用于连续和不连续数据搬运。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数原型",
      children: "函数原型"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "源操作数为GlobalTensor，目的操作数为LocalTensor"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 支持连续和不连续\ntemplate <typename T> \n__aicore__ inline void DataCopy(const LocalTensor<T>& dstLocal, const GlobalTensor<T>& srcGlobal, const DataCopyParams& repeatParams);\n \n// 支持连续\ntemplate <typename T> \n__aicore__ inline void DataCopy(const LocalTensor<T>& dstLocal, const GlobalTensor<T>& srcGlobal, const uint32_t calCount);\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "该原型接口支持的数据通路和数据类型如下所示："
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "表1"
            })
          }), " 数据通路和数据类型（源操作数为GlobalTensor，目的操作数为LocalTensor）"]
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "支持型号"
              }), (0,jsx_runtime.jsxs)(_components.th, {
                children: ["数据通路（通过", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-memory-management-and-synchronization/cannkit-tposition",
                  children: "TPosition"
                }), "章节中表1表达）"]
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "源操作数和目的操作数的数据类型 (两者保持一致)"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "Kirin9020系列处理器"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "GM->L1"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "int8_t/uint8_t/int16_t/uint16_t/int32_t/uint32_t/half/float"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "KirinX90系列处理器"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "GM->L1"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "int8_t/uint8_t/int16_t/uint16_t/int32_t/uint32_t/half/float"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "Kirin9020系列处理器"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "GM->UB"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "int8_t/uint8_t/int16_t/uint16_t/int32_t/uint32_t/half/float"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "KirinX90系列处理器"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "GM->UB"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "int8_t/uint8_t/int16_t/uint16_t/int32_t/uint32_t/half/float"
              })]
            })]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "源操作数和目的操作数都为LocalTensor"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 支持连续和不连续\n template <typename T> \n __aicore__ inline void DataCopy(const LocalTensor<T>& dstLocal, const LocalTensor<T>& srcGlobal, const DataCopyParams& repeatParams);\n  \n // 支持连续\n template <typename T> \n __aicore__ inline void DataCopy(const LocalTensor<T>& dstLocal, const LocalTensor<T>& srcGlobal, const uint32_t calCount);\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "该原型接口支持的数据通路和数据类型如下所示："
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "表2"
            })
          }), " 数据通路和数据类型（源操作数和目的操作数都为LocalTensor）"]
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "支持型号"
              }), (0,jsx_runtime.jsxs)(_components.th, {
                children: ["数据通路（通过", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-memory-management-and-synchronization/cannkit-tposition",
                  children: "TPosition"
                }), "章节中表1表达）"]
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "源操作数和目的操作数的数据类型 (两者保持一致)"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "Kirin9020系列处理器"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "L1->UB"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "int8_t/uint8_t/int16_t/uint16_t/int32_t/uint32_t/half/float"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "KirinX90系列处理器"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "L1->UB"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "int8_t/uint8_t/int16_t/uint16_t/int32_t/uint32_t/half/float"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "Kirin9020系列处理器"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "L1->BT"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "int8_t/uint8_t/int16_t/uint16_t/int32_t/uint32_t/half/float"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "KirinX90系列处理器"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "L1->BT"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "int8_t/uint8_t/int16_t/uint16_t/int32_t/uint32_t/half/float"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "Kirin9020系列处理器"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "L1->PT"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "int8_t/uint8_t/int16_t/uint16_t/int32_t/uint32_t/half/float"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "KirinX90系列处理器"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "L1->PT"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "int8_t/uint8_t/int16_t/uint16_t/int32_t/uint32_t/half/float"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "Kirin9020系列处理器"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "L1->FB"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "int8_t/uint8_t/int16_t/uint16_t/int32_t/uint32_t/half/float"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "KirinX90系列处理器"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "L1->FB"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "int8_t/uint8_t/int16_t/uint16_t/int32_t/uint32_t/half/float"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "Kirin9020系列处理器"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "UB->L1"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "int8_t/uint8_t/int16_t/uint16_t/int32_t/uint32_t/half/float"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "KirinX90系列处理器"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "UB->L1"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "int8_t/uint8_t/int16_t/uint16_t/int32_t/uint32_t/half/float"
              })]
            })]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "源操作数为LocalTensor，目的操作数为GlobalTensor"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 支持连续和不连续\ntemplate <typename T> \n__aicore__ inline void DataCopy(const GlobalTensor <T>& dstGlobal, const LocalTensor <T>& srcLocal, const DataCopyParams& repeatParams);\n// 支持连续\ntemplate <typename T> \n__aicore__ inline void DataCopy(const GlobalTensor <T>& dstGlobal, const LocalTensor <T>& srcLocal, const uint32_t calCount);\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "该原型接口支持的数据通路和数据类型如下所示："
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "表3"
            })
          }), " 数据通路和数据类型（源操作数为LocalTensor，目的操作数为GlobalTensor）"]
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "支持型号"
              }), (0,jsx_runtime.jsxs)(_components.th, {
                children: ["数据通路（通过", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-memory-management-and-synchronization/cannkit-tposition",
                  children: "TPosition"
                }), "章节中表1表达）"]
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "源操作数和目的操作数的数据类型 (两者保持一致)"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "Kirin9020系列处理器"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "L1->GM"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "int8_t/uint8_t/int16_t/uint16_t/int32_t/uint32_t/half/float"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "KirinX90系列处理器"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "L1->GM"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "int8_t/uint8_t/int16_t/uint16_t/int32_t/uint32_t/half/float"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "Kirin9020系列处理器"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "UB->GM"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "int8_t/uint8_t/int16_t/uint16_t/int32_t/uint32_t/half/float"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "KirinX90系列处理器"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "UB->GM"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "int8_t/uint8_t/int16_t/uint16_t/int32_t/uint32_t/half/float"
              })]
            })]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "源操作数和目的操作数都为LocalTensor，支持源操作数和目的操作数类型不一致"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "template <typename dst_T, typename src_T> \n__aicore__ inline void DataCopy(const LocalTensor<dst_T>& dstLocal, const LocalTensor<src_T>& srcLocal, const DataCopyParams& repeatParams);\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "参数说明",
      children: "参数说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表4"
        })
      }), " 普通数据搬运接口参数说明"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dstLocal，dstGlobal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输出"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["目的操作数，类型为LocalTensor或GlobalTensor。", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "当dstLocal位于C2时，起始地址要求64B对齐；dstLocal位于C2PIPE2GM时，起始地址要求128B对齐；其他情况均为32字节对齐。"
              })
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "srcLocal，srcGlobal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "源操作数，类型为LocalTensor或GlobalTensor。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "repeatParams"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "搬运参数，DataCopyParams类型，定义如下，具体参数说明请参考表5。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "calCount"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["参与搬运的元素个数。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " DataCopy的搬运量要求为32byte的倍数，因此使用普通数据搬运接口（连续数据搬运，包含calCount参数）时，calCount * sizeof(T)需要32byte对齐，若不对齐，搬运量将对32byte做向下取整。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表5"
        })
      }), " DataCopyParams结构体参数定义"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "含义"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "blockCount"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定该指令包含的连续传输数据块个数，取值范围：blockCount∈[1, 4095]。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "blockLen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定该指令每个连续传输数据块长度，单位为datablock(32Bytes)。取值范围：blockLen∈[1, 65535]。  特别的，当dstLocal位于C2PIPE2GM时，单位为128B；当dstLocal位于C2时，单位为64B。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "srcStride"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "源操作数，相邻连续数据块的间隔（前面一个数据块的尾与后面数据块的头的间隔），单位为datablock(32Bytes)。数据类型为uint16_t，srcStride不要超出该数据类型的取值范围。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dstStride"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "目的操作数，相邻连续数据块间的间隔（前面一个数据块的尾与后面数据块的头的间隔），单位为datablock(32Bytes)。数据类型为uint16_t，dstStride不要超出该数据类型的取值范围。  特别的，当dstLocal位于C2PIPE2GM时，单位为128B；当dstLocal位于C2时，单位为64B。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下面的样例呈现了DataCopyParams结构体参数的使用方法，样例中完成了2个连续传输数据块的搬运，每个数据块含有8个datablock，源操作数相邻数据块之间无间隔，目的操作数相邻数据块尾与头之间间隔1个datablock。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(304600)/* ["default"] */.A) + "",
        width: "529",
        height: "225"
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
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "硬件在执行数据搬运时会以datablock作为基本单位，而1 datablock = 32 Byte，故使用者可以尝试通过每次指令处理32Byte整数倍大小的数据来提高指令的执行效率。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果执行多个DataCopy指令时，需确保DataCopy的目的地址不存在重叠。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "调用示例",
      children: "调用示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include \"kernel_operator.h\"\nclass KernelDataCopy {\npublic:\n    __aicore__ inline KernelDataCopy() {}\n    __aicore__ inline void Init(__gm__ uint8_t* src0Gm, __gm__ uint8_t* src1Gm, __gm__ uint8_t* dstGm)\n    {\n        src0Global.SetGlobalBuffer((__gm__ half*)src0Gm);\n        src1Global.SetGlobalBuffer((__gm__ half*)src1Gm);\n        dstGlobal.SetGlobalBuffer((__gm__ half*)dstGm);\n        pipe.InitBuffer(inQueueSrc0, 1, 512 * sizeof(half));\n        pipe.InitBuffer(inQueueSrc1, 1, 512 * sizeof(half));\n        pipe.InitBuffer(outQueueDst, 1, 512 * sizeof(half));\n    }\n    __aicore__ inline void Process()\n    {\n        CopyIn();\n        Compute();\n        CopyOut();\n    }\nprivate:\n    __aicore__ inline void CopyIn()\n    {\n        AscendC::LocalTensor<half> src0Local = inQueueSrc0.AllocTensor<half>();\n        AscendC::LocalTensor<half> src1Local = inQueueSrc1.AllocTensor<half>();\n        AscendC::DataCopy(src0Local, src0Global, 512);\n        AscendC::DataCopy(src1Local, src1Global, 512);\n        inQueueSrc0.EnQue(src0Local);\n        inQueueSrc1.EnQue(src1Local);\n    }\n    __aicore__ inline void Compute()\n    {\n        AscendC::LocalTensor<half> src0Local = inQueueSrc0.DeQue<half>();\n        AscendC::LocalTensor<half> src1Local = inQueueSrc1.DeQue<half>();\n        AscendC::LocalTensor<half> dstLocal = outQueueDst.AllocTensor<half>();\n        AscendC::Add(dstLocal, src0Local, src1Local, 512);\n        outQueueDst.EnQue<half>(dstLocal);\n        inQueueSrc0.FreeTensor(src0Local);\n        inQueueSrc1.FreeTensor(src1Local);\n    }\n    __aicore__ inline void CopyOut()\n    {\n        AscendC::LocalTensor<half> dstLocal = outQueueDst.DeQue<half>();\n        AscendC::DataCopy(dstGlobal, dstLocal, 512);\n        outQueueDst.FreeTensor(dstLocal);\n    }\nprivate:\n    AscendC::TPipe pipe;\n    AscendC::TQue<AscendC::QuePosition::VECIN, 1> inQueueSrc0, inQueueSrc1;\n    AscendC::TQue<AscendC::QuePosition::VECOUT, 1> outQueueDst;\n    AscendC::GlobalTensor<half> src0Global, src1Global, dstGlobal;\n};\nextern \"C\" __global__ __aicore__ void data_copy_kernel(__gm__ uint8_t* src0Gm, __gm__ uint8_t* src1Gm, __gm__ uint8_t* dstGm)\n{\n    KernelDataCopy op;\n    op.Init(src0Gm, src1Gm, dstGm);\n    op.Process();\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "结果示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "输入数据(src0Global): [1 2 3 ... 512]\n输入数据(src1Global): [1 2 3 ... 512]\n输出数据(dstGlobal):[2 4 6 ... 1024]\n"
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
304600(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439323-ca0fd8049f7e418de2b47d79ba4fe7ce.png");

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