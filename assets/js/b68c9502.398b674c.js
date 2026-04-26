"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["825181"], {
262145(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_ascendc_operator_interface_cannkit_ascend_c_api_cannkit_basic_apis_cannkit_vectorcalculation_data_movement_cannkit_datacopypad_cannkit_datacopypad_md_b68_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cann-kit-guide-cannkit-ascendc-operator-development-cannkit-ascendc-operator-interface-cannkit-ascend-c-api-cannkit-basic-apis-cannkit-vectorcalculation-data-movement-cannkit-datacopypad-cannkit-datacopypad-md-b68.json
var site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_ascendc_operator_interface_cannkit_ascend_c_api_cannkit_basic_apis_cannkit_vectorcalculation_data_movement_cannkit_datacopypad_cannkit_datacopypad_md_b68_namespaceObject = JSON.parse('{"id":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vectorcalculation-data-movement/cannkit-datacopypad/cannkit-datacopypad","title":"DataCopyPad","description":"功能说明","source":"@site/docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vectorcalculation-data-movement/cannkit-datacopypad/cannkit-datacopypad.md","sourceDirName":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vectorcalculation-data-movement/cannkit-datacopypad","slug":"/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vectorcalculation-data-movement/cannkit-datacopypad/","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vectorcalculation-data-movement/cannkit-datacopypad/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"DataCopyPad","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-datacopypad","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"随路格式转换","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vectorcalculation-data-movement/cannkit-datacopy/cannkit-channel-associated-format-conversion/"},"next":{"title":"构造函数","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-memory-management-and-synchronization/cannkit-tpipe/cannkit-tpipe-constructor/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vectorcalculation-data-movement/cannkit-datacopypad/cannkit-datacopypad.md


const frontMatter = {
	title: 'DataCopyPad',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-datacopypad',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = 'DataCopyPad';

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
    code: "code",
    del: "del",
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
        id: "datacopypad",
        children: "DataCopyPad"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "功能说明",
      children: "功能说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该接口提供数据非对齐搬运的功能，支持的数据传输通路如下。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GM->VECIN/VECOUT"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "VECIN/VECOUT->GM"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "VECIN/VECOUT->TSCM"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "其中从GM->VECIN/VECOUT进行数据搬运时，可以根据开发者的需要自行填充数据。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数原型",
      children: "函数原型"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "dataCopyParams为DataCopyExtParams类型，相比于DataCopyParams类型，支持的操作数步长等参数取值范围更大"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "通路：GM->VECIN/VECOUT"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "template <typename T>\n__aicore__ inline  void DataCopyPad(const LocalTensor<T> &dstLocal, const GlobalTensor<T> &srcGlobal, const DataCopyExtParams &dataCopyParams, const DataCopyPadExtParams<T> &padParams)\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "通路：VECIN/VECOUT->GM"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "template <typename T>\n__aicore__ inline  void DataCopyPad(const GlobalTensor<T> &dstGlobal, const LocalTensor<T> &srcLocal, const DataCopyExtParams &dataCopyParams)\n"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "dataCopyParams为DataCopyParams类型"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "通路：GM->VECIN/VECOUT"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "template<typename T>\n__aicore__ inline void DataCopyPad(const LocalTensor<T>& dstLocal, const GlobalTensor<T>& srcGlobal, const DataCopyParams& dataCopyParams, const DataCopyPadParams& padParams)\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "通路：VECIN/VECOUT->GM"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "template<typename T>\n__aicore__ inline void DataCopyPad(const GlobalTensor<T>& dstGlobal, const LocalTensor<T>& srcLocal,const DataCopyParams& dataCopyParams)\n"
              })
            }), "\n"]
          }), "\n"]
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
      }), " 模板参数说明"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "操作数以及paddingValue（待填充数据值）的数据类型。  Kirin9020系列处理器，支持的数据类型为：int8_t/uint8_t/int16_t/uint16_t/int32_t/uint32_t/half/float  KirinX90系列处理器，支持的数据类型为：int8_t/uint8_t/int16_t/uint16_t/int32_t/uint32_t/half/float"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表2"
        })
      }), " 接口参数说明"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "dstLocal, dstGlobal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输出"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "目的操作数，类型为LocalTensor或GlobalTensor。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "srcLocal, srcGlobal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "源操作数，类型为LocalTensor或GlobalTensor。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dataCopyParams"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "搬运参数。  - DataCopyExtParams类型，具体参数说明请参考表3。  - DataCopyParams类型，具体参数说明请参考表4。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "padParams"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从GM->VECIN/VECOUT进行数据搬运时，可以根据开发者需要，在搬运数据左边或右边填充数据。padParams是用于控制数据填充过程的参数，DataCopyPadExtParams类型，具体参数请参考表5。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "nd2nzParams"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从VECIN/VECOUT->TSCM进行数据搬运时，可以进行ND到NZ的数据格式转换。nd2nzParams是用于控制数据格式转换的参数，Nd2NzParams类型，具体参数为：ndNum、nValue、dValue、srcNdMatrixStride、srcDValue、dstNzC0Stride、dstNzNStride、dstNzMatrixStride。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " Nd2NzParams的ndNum仅支持设置为1。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表3"
        })
      }), " DataCopyExtParams结构体参数定义"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "指定该指令包含的连续传输数据块个数，数据类型为uint16_t，取值范围：blockCount∈[1, 4095]。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "blockLen"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指定该指令每个连续传输数据块长度，", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "该指令支持非对齐搬运"
              })
            }), "，", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "每个连续传输数据块长度单位为Byte"
              })
            }), "。数据类型为uint32_t，blockLen不要超出该数据类型的取值范围。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "srcStride"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["源操作数，相邻连续数据块的间隔（前面一个数据块的尾与后面数据块的头的间隔），", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "如果源操作数的逻辑位置为VECIN/VECOUT，则单位为dataBlock(32Bytes), 如果源操作数的逻辑位置为GM,则单位为Byte"
              })
            }), "。数据类型为uint32_t，srcStride不要超出该数据类型的取值范围。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dstStride"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["目的操作数，相邻连续数据块间的间隔（前面一个数据块的尾与后面数据块的头的间隔），", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "如果目的操作数的逻辑位置为VECIN/VECOUT，则单位为dataBlock(32Bytes)，如果目的操作数的逻辑位置为GM，则单位为Byte"
              })
            }), "。数据类型为uint32_t，dstStride不要超出该数据类型的取值范围。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "rsv"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "保留字段。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表4"
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
            children: "指定该指令包含的连续传输数据块个数，数据类型为uint16_t，取值范围：blockCount∈[1, 4095]。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "blockLen"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指定该指令每个连续传输数据块长度，", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "该指令支持非对齐搬运"
              })
            }), "，", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "每个连续传输数据块长度单位为Byte"
              })
            }), "。数据类型为uint16_t，blockLen不要超出该数据类型的取值范围。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "srcStride"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["源操作数，相邻连续数据块的间隔（前面一个数据块的尾与后面数据块的头的间隔），", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "如果源操作数的逻辑位置为VECIN/VECOUT，则单位为dataBlock(32Bytes), 如果源操作数的逻辑位置为GM,则单位为Byte"
              })
            }), "。数据类型为uint16_t，srcStride不要超出该数据类型的取值范围。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dstStride"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["目的操作数，相邻连续数据块间的间隔（前面一个数据块的尾与后面数据块的头的间隔），", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "如果目的操作数的逻辑位置为VECIN/VECOUT，则单位为dataBlock(32Bytes)，如果目的操作数的逻辑位置为GM，则单位为Byte"
              })
            }), "。数据类型为uint16_t，dstStride不要超出该数据类型的取值范围。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表5"
        })
      }), " DataCopyPadExtParams结构体参数定义"]
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
            children: "isPad"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否需要填充开发者自定义的数据，取值范围：true，false。  true：填充padding value。  false：表示开发者不需要指定填充值，会默认填充随机值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "leftPadding"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["连续搬运数据块左侧需要补充的数据范围，单位为元素个数。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "leftPadding、rightPadding的字节数均不能超过32Bytes。"
              })
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "rightPadding"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["连续搬运数据块右侧需要补充的数据范围，单位为元素个数。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "leftPadding、rightPadding的字节数均不能超过32Bytes。"
              })
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "paddingValue"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["左右两侧需要填充的数据值，需要保证在数据占用字节范围内。  数据类型和源操作数保持一致，T数据类型。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "当数据类型长度为64位时，该参数只能设置为0。"
              })
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "GM"
            })
          }), "->", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "VECIN/VECOUT"
            })
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "参数解释"
            })
          }), "："]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "当blockLen+leftPadding+rightPadding满足32字节对齐时，isPad为false，左右两侧填充的数据值会默认为随机值，否则为paddingValue。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "当blockLen+leftPadding+rightPadding不满足32字节对齐时，框架会填充一些假数据dummy，保证左右填充的数据和blockLen、假数据为32字节对齐。若leftPadding、rightPadding都为0：dummy会默认填充待搬运数据块的第一个元素值。若leftPadding/rightPadding不为0：isPad为false，左右两侧填充的数据值和dummy值均为随机值，否则为paddingValue。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "配置示例1："
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "blockLen为64，每个连续传输数据块包含64Bytes。srcStride为1，因为源操作数的逻辑位置为GM，srcStride的单位为Byte，也就是说源操作数相邻数据块之间间隔1Byte；dstStride为1，因为目的操作数的逻辑位置为VECIN/VECOUT，dstStride的单位为dataBlock(32Bytes)，也就是说目的操作数相邻数据块之间间隔1个dataBlock。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "blockLen+leftPadding+rightPadding满足32字节对齐，isPad为false，左右两侧填充的数据值会默认为随机值，否则为paddingValue。此处示例中，leftPadding、rightPadding均为0，则不填充。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "blockLen+leftPadding+rightPadding不满足32字节对齐时，框架会填充一些假数据dummy，保证左右填充的数据和blockLen、假数据为32字节对齐。leftPadding/rightPadding不为0：若isPad为false，左右两侧填充的数据值和dummy值均为随机值，否则为paddingValue。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(999174)/* ["default"] */.A) + "",
                width: "525",
                height: "276"
              })
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "配置示例2："
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "blockLen为47，每个连续传输数据块包含47Bytes；srcStride为1，表示源操作数相邻数据块之间间隔1Byte；dstStride为1，表示目的操作数相邻数据块之间间隔1个dataBlock。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "blockLen+leftPadding+rightPadding不满足32字节对齐，leftPadding、rightPadding均为0：dummy会默认填充待搬运数据块的第一个元素值。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "blockLen+leftPadding+rightPadding不满足32字节对齐，leftPadding/rightPadding不为0：若isPad为false，左右两侧填充的数据值和dummy值均为随机值，否则为paddingValue。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(137385)/* ["default"] */.A) + "",
                width: "525",
                height: "270"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "VECIN/VECOUT"
            })
          }), "->", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "GM"
            })
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当每个连续传输数据块长度blockLen为32字节对齐时，下图呈现了需要传入的DataCopyParams示例，blockLen为64，每个连续传输数据块包含64Bytes；srcStride为1，因为源操作数的逻辑位置为VECIN/VECOUT，srcStride的单位为dataBlock(32Bytes)，也就是说源操作数相邻数据块之间间隔1个dataBlock；dstStride为1，因为目的操作数的逻辑位置为GM，dstStride的单位为Byte，也就是说目的操作数相邻数据块之间间隔1Byte。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(971190)/* ["default"] */.A) + "",
            width: "525",
            height: "143"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当每个连续传输数据块长度blockLen不满足32字节对齐，由于Unified Buffer要求32字节对齐，框架在搬出时会自动补充一些假数据来保证对齐，但在当搬到GM时会自动将填充的假数据丢弃掉。下图呈现了该场景下需要传入的DataCopyParams示例和假数据补齐的原理。blockLen为47，每个连续传输数据块包含47Bytes，不满足32字节对齐；srcStride为1，表示源操作数相邻数据块之间间隔1个dataBlock；dstStride为1，表示目的操作数相邻数据块之间间隔1Byte。框架在搬出时会自动补充17Bytes的假数据来保证对齐，搬到GM时再自动将填充的假数据丢弃掉。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(451274)/* ["default"] */.A) + "",
            width: "525",
            height: "149"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "VECIN/VECOUT->TSCM"
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["内部实现涉及AIC和AIV之间的通信，实际搬运路径为VECIN/VECOUT->GM->TSCM，", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "发送通信消息会有开销，性能会受到影响"
            })
          }), "。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["如下图所示，展示了从VECIN/VECOUT搬运到GM，再搬运到TSCM的过程：示例中数据类型为half，单个datablock（32B）含有16个half元素，源操作数中的 A1", (0,jsx_runtime.jsx)(_components.del, {
            children: "A6、B1"
          }), "B6、C1~C6为需要进行搬运的数据。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(739593)/* ["default"] */.A) + "",
            width: "525",
            height: "512"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "从VECIN/VECOUT->GM的搬运，数据存储格式没有发生转变，依然是ND。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "blockCount"
              })
            }), "为需要搬运的连续传输数据块个数，设置为3。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "blockLen"
              })
            }), "为一个连续传输数据块的大小(单位为Byte)，设置为6 * 32 = 192。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "srcStride"
              })
            }), "为源操作数相邻连续数据块的间隔（前面一个数据块的尾与后面数据块的头的间隔），源操作数逻辑位置为VECIN/VECOUT，其单位为datablock, 两个连续传输数据块（A1", (0,jsx_runtime.jsx)(_components.del, {
              children: "A6、B1"
            }), "B6）中间相隔1个A7，因此srcStride设置为1。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "dstStride"
              })
            }), "为目的操作数，相邻连续数据块间的间隔（前面一个数据块的尾与后面数据块的头的间隔），目的操作数逻辑位置为GM，其单位为Byte，两个连续传输数据块（A1", (0,jsx_runtime.jsx)(_components.del, {
              children: "A6、B1"
            }), "B6）中间相隔2个空白的datablock，因此dstStride设置为64Byte。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "从GM->TSCM的搬运，数据存储格式由ND转换为NZ。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "ndNum"
              })
            }), "固定为1，即A1", (0,jsx_runtime.jsx)(_components.del, {
              children: "A6、B1"
            }), "B6、C1~C6视作一整个ndMatrix。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "nValue"
              })
            }), "为ndMatrix的行数，即为3行。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "dValue"
              })
            }), "为ndMatrix中一行包含的元素个数，即为6 * 16 = 96个元素。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "srcNdMatrixStride"
              })
            }), "为相邻ndMatrix之间的距离，因为仅涉及1个ndMatrix，所以可填为0。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "srcDValue"
              })
            }), "表明ndMatrix的第x行和第x+1行所相隔的元素个数，如A1~B1的距离，即为8个datablock，8 * 16 = 128个元素。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "dstNzC0Stride"
              })
            }), "为src同一行的相邻datablock在NZ矩阵中相隔datablock数，如A1~A2的距离，即为7个datablock (A1 + 空白 + B1 + 空白 + C1 + 空白 * 2)。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "dstNzNStride"
              })
            }), "为src中ndMatrix的相邻行在NZ矩阵中相隔多少个datablock，如A1~B1的距离，即为2个datablock (A1 + 空白) 。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "dstNzMatrixStride"
              })
            }), "为相邻NZ矩阵之间的元素个数，因为仅涉及1个NZ矩阵，所以可以填为1。"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "返回值",
      children: "返回值"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "无"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "支持的型号",
      children: "支持的型号"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Kirin9020系列处理器。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "KirinX90系列处理器"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束说明",
      children: "约束说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "leftPadding、rightPadding的字节数均不能超过32Bytes。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "调用示例",
      children: "调用示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本示例实现了GM->VECIN->GM的非对齐搬运过程。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include \"kernel_operator.h\"\n\nclass TestDataCopyPad {\npublic:\n    __aicore__ inline TestDataCopyPad() {}\n    __aicore__ inline void Init(__gm__ uint8_t* srcGm, __gm__ uint8_t* dstGm)\n    {\n        srcGlobal.SetGlobalBuffer((__gm__ half *)srcGm);\n        dstGlobal.SetGlobalBuffer((__gm__ half *)dstGm);\n        pipe.InitBuffer(inQueueSrc, 1, 32 * sizeof(half));\n        pipe.InitBuffer(outQueueDst, 1, 32 * sizeof(half));\n    }\n    __aicore__ inline void Process()\n    {\n        CopyIn();\n        Compute();\n        CopyOut();\n    }\nprivate:\n    __aicore__ inline void CopyIn()\n    {\n        AscendC::LocalTensor<half> srcLocal = inQueueSrc.AllocTensor<half>();\n        AscendC::DataCopyExtParams copyParams{1, 20 * sizeof(half), 0, 0, 0}; // 结构体DataCopyExtParams最后一个参数是rsv保留位\n        AscendC::DataCopyPadExtParams<half> padParams{true, 0, 2, 0};\n        AscendC::DataCopyPad(srcLocal, srcGlobal, copyParams, padParams); // 从GM->VECIN搬运40Bytes\n        inQueueSrc.EnQue<half>(srcLocal);\n    }\n    __aicore__ inline void Compute()\n    {\n        AscendC::LocalTensor<half> srcLocal = inQueueSrc.DeQue<half>();\n        AscendC::LocalTensor<half> dstLocal = outQueueDst.AllocTensor<half>();\n        AscendC::Adds(dstLocal, srcLocal, scalar, 20);\n        outQueueDst.EnQue(dstLocal);\n        inQueueSrc.FreeTensor(srcLocal);\n    }\n    __aicore__ inline void CopyOut()\n    {\n        AscendC::LocalTensor<half> dstLocal = outQueueDst.DeQue<half>();\n        AscendC::DataCopyExtParams copyParams{1, 20 * sizeof(half), 0, 0, 0};\n        AscendC::DataCopyPad(dstGlobal, dstLocal, copyParams); // 从VECIN->GM搬运40Bytes\n        outQueueDst.FreeTensor(dstLocal);\n    }\nprivate:\n    AscendC::TPipe pipe;\n    AscendC::TQue<AscendC::QuePosition::VECIN, 1> inQueueSrc;\n    AscendC::TQue<AscendC::QuePosition::VECOUT, 1> outQueueDst;\n    AscendC::GlobalTensor<half> srcGlobal;\n    AscendC::GlobalTensor<half> dstGlobal;\n    AscendC::DataCopyPadExtParams<half> padParams;\n    AscendC::DataCopyExtParams copyParams;\n    half scalar = 0;\n};\n\nextern \"C\" __global__ __aicore__ void kernel_data_copy_pad_kernel(__gm__ uint8_t* src_gm, __gm__ uint8_t* dst_gm)\n{\n    TestDataCopyPad op;\n    op.Init(src_gm, dst_gm);\n    op.Process();\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "结果示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "输入数据(src0Global): [1 2 3 ... 32]\n输出数据(dstGlobal):[1 2 3 ... 20]\n"
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
739593(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479281-3d250c1420cc84315daf4a7b61fe66be.png");

},
137385(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799630-ef2cdca5ba8775befb0cb75f8de87eda.png");

},
451274(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959280-a46a9430d4c75282a201c6ebc7a9176f.png");

},
971190(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439325-5aa76af03bc6217fc7c5038837f3445d.png");

},
999174(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479279-e2d36d187f0bde7c5168f9db196a0efd.png");

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