"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["424585"], {
496656(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_ascendc_operator_interface_cannkit_ascend_c_api_cannkit_basic_apis_cannkit_vector_computation_cannkit_precision_conversion_instruction_cannkit_precision_conversion_instructio_501_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cann-kit-guide-cannkit-ascendc-operator-development-cannkit-ascendc-operator-interface-cannkit-ascend-c-api-cannkit-basic-apis-cannkit-vector-computation-cannkit-precision-conversion-instruction-cannkit-precision-conversion-instructio-501.json
var site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_ascendc_operator_interface_cannkit_ascend_c_api_cannkit_basic_apis_cannkit_vector_computation_cannkit_precision_conversion_instruction_cannkit_precision_conversion_instructio_501_namespaceObject = JSON.parse('{"id":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-precision-conversion-instruction/cannkit-precision-conversion-instruction","title":"精度转换指令","description":"Cast","source":"@site/docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-precision-conversion-instruction/cannkit-precision-conversion-instruction.md","sourceDirName":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-precision-conversion-instruction","slug":"/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-precision-conversion-instruction/","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-precision-conversion-instruction/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"精度转换指令","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-precision-conversion-instruction","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"更多样例","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-scalar-ternary-instruction/scalar-ternaryinstructions-more-examples/"},"next":{"title":"Transpose","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-data-conversion/cannkit-transpose/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-precision-conversion-instruction/cannkit-precision-conversion-instruction.md


const frontMatter = {
	title: '精度转换指令',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-precision-conversion-instruction',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = '精度转换指令';

const assets = {

};



const toc = [{
  "value": "Cast",
  "id": "cast",
  "level": 2
}, {
  "value": "函数功能",
  "id": "函数功能",
  "level": 3
}, {
  "value": "函数原型",
  "id": "函数原型",
  "level": 3
}, {
  "value": "参数说明",
  "id": "参数说明",
  "level": 3
}, {
  "value": "返回值",
  "id": "返回值",
  "level": 3
}, {
  "value": "支持的型号",
  "id": "支持的型号",
  "level": 3
}, {
  "value": "注意事项",
  "id": "注意事项",
  "level": 3
}, {
  "value": "调用示例",
  "id": "调用示例",
  "level": 3
}, {
  "value": "样例模板",
  "id": "样例模板",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
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
        id: "精度转换指令",
        children: "精度转换指令"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cast",
      children: "Cast"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "函数功能",
      children: "函数功能"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据源操作数和目的操作数Tensor的数据类型进行精度转换。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在了解精度转换规则之前，需要先了解浮点数的表示方式和二进制的舍入规则："
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "浮点数的表示方式"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "half共16bit，包括1bit符号位（S），5bit指数位（E）和10bit尾数位（M）。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当E不全为0或不全为1时，表示的结果为："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "(-1)S * 2E - 15 * (1 + M)"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当E全为0时，表示的结果为："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "(-1)S * 2-14 * M"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当E全为1时，若M全为0，表示的结果为±inf（取决于符号位）；若M不全为0，表示的结果为nan。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(838665)/* ["default"] */.A) + "",
            width: "360",
            height: "97"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "上图中S=0，E=15，M = 2-1 + 2-2，表示的结果为1.75。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "float共32bit，包括1bit符号位（S），8bit指数位（E）和23bit尾数位（M）。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当E不全为0或不全为1时，表示的结果为："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "(-1)S * 2E - 127 * (1 + M)"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当E全为0时，表示的结果为："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "(-1)S * 2-126 * M"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当E全为1时，若M全为0，表示的结果为±inf（取决于符号位）；若M不全为0，表示的结果为nan。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(521508)/* ["default"] */.A) + "",
            width: "525",
            height: "85"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "上图中S = 0，E = 127，M = 2-1 + 2-2，最终表示的结果为1.75 。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "bfloat16_t共16bit，包括1bit符号位（S），8bit指数位（E）和7bit尾数位（M）。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当E不全为0或不全为1时，表示的结果为："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "(-1)S * 2E - 127 * (1 + M)"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当E全为0时，表示的结果为："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "(-1)S * 2-126 * M"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当E全为1时，若M全为0，表示的结果为±inf（取决于符号位）；若M不全为0，表示的结果为nan。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(665271)/* ["default"] */.A) + "",
            width: "371",
            height: "106"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "上图中S = 0，E = 127，M = 2-1 + 2-2，最终表示的结果为1.75。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "二进制的舍入规则和十进制类似，具体如下。"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(769079)/* ["default"] */.A) + "",
        width: "525",
        height: "69"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CAST_RINT模式下，若待舍入部分的第一位为0，则不进位；若第一位为1且后续位不全为0，则进位；若第一位为1且后续位全为0，当M的最后一位为0则不进位，当M的最后一位为1则进位。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CAST_FLOOR模式下，若S为0，则不进位；若S为1，当待舍入部分全为0则不进位，否则，进位。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CAST_CEIL模式下，若S为1，则不进位；若S为0，当待舍入部分全为0则不进位；否则，进位。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CAST_ROUND模式下，若待舍入部分的第一位为0，则不进位；否则，进位。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CAST_TRUNC模式下，总是不进位。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CAST_ODD模式下，若待舍入部分全为0，则不进位；若待舍入部分不全为0，当M的最后一位为1则不进位，当M的最后一位为0则进位。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "精度转换规则如下表所示："
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表1"
        })
      }), " 精度转换规则"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "src类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "dst类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "精度转换规则介绍"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "float"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "float"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["将src按照round_mode（精度转换处理模式，参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E",
              children: "参数说明"
            }), "中的round_mode参数）取整，仍以float格式存入dst中。  示例：输入0.5，  CAST_RINT模式输出0.0，CAST_FLOOR模式输出0.0，CAST_CEIL模式输出1.0，CAST_ROUND模式输出1.0，CAST_TRUNC模式输出0.0。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "float"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "half"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将src按照round_mode取到half所能表示的数，以half格式（溢出默认按照饱和处理）存入dst中。  示例：输入0.5 + 2-12，写成float的表示形式：2-1 * (1 + 2-11)，因此E = -1 + 127 = 126，M = 2-11。    half的指数位可以表示出2-1，E = -1 + 15 = 14，但half只有10 bit尾数位，因此灰色部分要进行舍入。  CAST_RINT模式舍入得尾数0000000000，E = 14，M = 0，最终表示的结果为0.5。  CAST_FLOOR模式舍入得尾数0000000000，E = 14，M = 0，最终表示的结果为0.5。  CAST_CEIL模式舍入得尾数0000000001，E = 14，M = 2-10，最终表示的结果为0.5 + 2-11。  CAST_ROUND模式舍入得尾数0000000001，E = 14，M = 2-10，最终表示的结果为0.5 + 2-11。  CAST_TRUNC模式舍入得尾数0000000000，E = 14，M = 0，最终表示的结果为0.5。  CAST_ODD模式舍入得尾数0000000001，E = 14，M = 2-10，最终表示的结果为0.5 + 2-11 。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "float"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "int64_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将src按照round_mode取整，以int64_t格式（溢出默认按照饱和处理）存入dst中。  示例：输入222 + 0.5，  CAST_RINT模式输出222，CAST_FLOOR模式输出222，CAST_CEIL模式输出222 + 1，CAST_ROUND模式输出222 + 1，CAST_TRUNC模式输出222。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "float"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将src按照round_mode取整，以int32_t格式（溢出默认按照饱和处理）存入dst中。  示例：输入222 + 0.5，  CAST_RINT模式输出222，CAST_FLOOR模式输出222 ，CAST_CEIL模式输出222 + 1，CAST_ROUND模式输出222 + 1，CAST_TRUNC模式输出222。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "float"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "int16_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将src按照round_mode取整，以int16_t格式（溢出默认按照饱和处理）存入dst中。  示例：输入222 + 0.5，  CAST_RINT模式输出215 - 1（溢出处理），CAST_FLOOR模式输出215 - 1（溢出处理），CAST_CEIL模式输出215 - 1（溢出处理），CAST_ROUND模式输出215 - 1（溢出处理），CAST_TRUNC模式输出215 - 1（溢出处理）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "float"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "bfloat16_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将src按照round_mode取到bfloat16_t所能表示的数，以bfloat16_t格式（溢出默认按照饱和处理）存入dst中。  示例：输入0.5+ 2-9 + 2-11 , 写成float的表示形式：2-1 * (1 + 2-8 + 2-10)，因此E = -1 + 127 = 126，M = 2-8 + 2-10 。    bfloat16_t的指数位位数和float的相同，有E = 126，但bfloat16_t只有7bit尾数位，因此灰色部分要进行舍入。  CAST_RINT模式舍入得尾数0000001，E = 126，M = 2-7，最终表示的结果为0.5 + 2-8。  CAST_FLOOR模式舍入得尾数0000000，E = 126，M = 0，最终表示的结果为0.5。  CAST_CEIL模式舍入得尾数0000001，E = 126，M = 2-7，最终表示的结果为0.5 + 2-8。  CAST_ROUND模式舍入得尾数0000001，E = 126，M = 2-7，最终表示的结果为0.5 + 2-8。  CAST_TRUNC模式舍入得尾数0000000，E = 126，M = 0，最终表示的结果为0.5。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "half"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "float"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将src以float格式存入dst中，不存在精度转换问题，无舍入模式。  示例：输入1.5 - 2-10，输出1.5 - 2-10。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "half"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将src按照round_mode取整，以int32_t格式存入dst中。  示例：输入-1.5，  CAST_RINT模式输出-2，CAST_FLOOR模式输出-2，CAST_CEIL模式输出-1，CAST_ROUND模式输出-2，CAST_TRUNC模式输出-1。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "half"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "int16_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将src按照round_mode取整，以int16_t格式（溢出默认按照饱和处理）存入dst中。  示例：输入27 - 0.5，  CAST_RINT模式输出27，CAST_FLOOR模式输出27 - 1，CAST_CEIL模式输出27，CAST_ROUND模式输出27，CAST_TRUNC模式输出27 - 1。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "half"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "int8_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将src按照round_mode取整，以int8_t格式（溢出默认按照饱和处理）存入dst中。  示例：输入27 - 0.5，  CAST_RINT模式输出27 - 1（溢出处理），CAST_FLOOR模式输出27 - 1，CAST_CEIL模式输出27 - 1（溢出处理），CAST_ROUND模式输出27 - 1（溢出处理），CAST_TRUNC模式输出27 - 1。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "half"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uint8_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将src按照round_mode取整，以uint8_t格式（溢出默认按照饱和处理）存入dst中。  示例：输入1.75，  CAST_RINT模式输出2，CAST_FLOOR模式输出1，CAST_CEIL模式输出2，CAST_ROUND模式输出2，CAST_TRUNC模式输出1。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "half"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "int4b_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将src按照round_mode取整，以int4b_t格式（溢出默认按照饱和处理）存入dst中。  示例：输入1.5，  CAST_RINT模式输出2，CAST_FLOOR模式输出1，CAST_CEIL模式输出2，CAST_ROUND模式输出2，CAST_TRUNC模式输出1。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bfloat16_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "float"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将src以float格式存入dst中，不存在精度转换问题，无舍入模式。  示例：输入1.5 - 2-6，输出1.5 - 2-6。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bfloat16_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将src按照round_mode取整，以int32_t格式（溢出默认按照饱和处理）存入dst中。  示例：输入26 + 0.5  CAST_RINT模式输出26，CAST_FLOOR模式输出26 ，CAST_CEIL模式输出26 + 1，CAST_ROUND模式输出26 + 1，CAST_TRUNC模式输出26。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int4b_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "half"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将src以half格式存入dst中，不存在精度转换问题，无舍入模式。  示例：输入1，输出1.0。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint8_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "half"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将src以half格式存入dst中，不存在精度转换问题，无舍入模式。  示例：输入1，输出1.0。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int8_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "half"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将src以half格式存入dst中，不存在精度转换问题，无舍入模式。  示例：输入-1，输出-1.0。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int16_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "half"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将src按照round_mode取到half所能表示的数，以half格式存入dst中。  示例：输入212 + 2，写成half的表示形式：212 * (1 + 2-11)，要求E = 12 + 15 = 27，M = 2-11：    由于half只有10bit尾数位，因此灰色部分要进行舍入。  CAST_RINT模式舍入得尾数0000000000，E = 27，M = 0，最终表示的结果为212。  CAST_FLOOR模式舍入得尾数0000000000，E = 27，M = 0，最终表示的结果为212。  CAST_CEIL模式舍入得尾数0000000001，E = 27，M = 2-10，最终表示的结果为212 + 4。  CAST_ROUND模式舍入得尾数0000000001，E = 27，M = 2-10，最终表示的结果为212 + 4。  CAST_TRUNC模式舍入得尾数0000000000，E = 27，M = 0，最终表示的结果为212。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int16_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "float"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将src以float格式存入dst中，不存在精度转换问题，无舍入模式。  示例：输入215 - 1，输出215 - 1。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "float"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将src按照round_mode取到float所能表示的数，以float格式存入dst中。  示例：输入225 + 3，写成float的表示形式：225 * (1 + 2-24 + 2-25)，要求E = 25 + 127 = 152， M = 2-24 + 2-25。    由于float只有23bit尾数位，因此灰色部分要进行舍入。  CAST_RINT模式舍入得尾数00000000000000000000001，E = 152，M = 2-23，最终表示的结果为225 + 4。  CAST_FLOOR模式舍入得尾数00000000000000000000000，E = 152，M = 0，最终表示的结果为225。  CAST_CEIL模式舍入得尾数00000000000000000000001，E = 152，M = 2-23，最终表示的结果为225 + 4。  CAST_ROUND模式舍入得尾数00000000000000000000001，E = 152，M = 2-23，最终表示的结果为225 + 4。  CAST_TRUNC模式舍入得尾数00000000000000000000000，E = 152，M = 0，最终表示的结果为225 。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "int64_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将src以int64_t格式存入dst中，不存在精度转换问题，无舍入模式。  示例：输入231 - 1，输出231 - 1。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "int16_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将src以int16_t格式（溢出默认按照饱和处理）存入dst中，不存在精度转换问题，无舍入模式。  示例：输入231 - 1，输出215 - 1。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int64_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将src以int32_t格式（溢出默认按照饱和处理）存入dst中，不存在精度转换问题，无舍入模式。  示例：输入231，输出231 - 1。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int64_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "float"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将src按照round_mode取到float所能表示的数，以float格式存入dst中。  示例：输入235 + 212 + 211，写成float的表示形式：235 * (1 + 2-23 + 2-24)，要求E = 35 + 127 = 162，M = 2-23 + 2-24。    由于float只有23bit尾数位，因此灰色部分要进行舍入。  CAST_RINT模式舍入得尾数00000000000000000000010，E = 162，M = 2-22，最终表示的结果为235 + 213。  CAST_FLOOR模式舍入得尾数00000000000000000000001，E = 162，M = 2-23，最终表示的结果为225 + 212。  CAST_CEIL模式舍入得尾数00000000000000000000010，E = 162，M = 2-22，最终表示的结果为225 + 213。  CAST_ROUND模式舍入得尾数00000000000000000000010，E = 162，M = 2-22，最终表示的结果为225 + 213。  CAST_TRUNC模式舍入得尾数00000000000000000000001，E = 162，M = 2-23，最终表示的结果为225 + 212。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "函数原型",
      children: "函数原型"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "tensor前n个数据计算："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "template <typename T1, typename T2> \n  __aicore__ inline void Cast(const LocalTensor<T1>& dstLocal, const LocalTensor<T2>& srcLocal, const RoundMode& round_mode, const uint32_t calCount)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "参数说明",
      children: "参数说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表2"
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
            children: "T1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "目的操作数数据类型。  - Kirin9020支持的数据类型见表4。  - KirinX90支持的数据类型见表4。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "源操作数数据类型。  - Kirin9020支持的数据类型见表4。  - KirinX90支持的数据类型见表4。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表3"
        })
      }), " 参数说明"]
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
            children: "dstLocal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输出"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["目的操作数。  类型为", (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-data-type-definition/cannkit-localtensor",
              children: "LocalTensor"
            }), "，支持的TPosition为VECIN/VECCALC/VECOUT。  LocalTensor的起始地址需要32字节对齐。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "srcLocal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["源操作数。  类型为", (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-data-type-definition/cannkit-localtensor",
              children: "LocalTensor"
            }), "，支持的TPosition为VECIN/VECCALC/VECOUT。  LocalTensor的起始地址需要32字节对齐。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "round_mode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "精度转换处理模式，类型是RoundMode。  RoundMode为枚举类型，用以控制精度转换处理模式，具体取值为：CAST_NONE、CAST_RINT、CAST_FLOOR、CAST_CEIL、CAST_ROUND、CAST_TRUNC、CAST_ODD。  CAST_ROUND表示反向0取整，远离0，对正数x.y变成(x + 1)，对负数-x.y，变成-(x + 1)。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "calCount"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入数据元素个数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表4"
        })
      }), " Kirin系列产品Cast指令参数说明"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "src数据类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "dst数据类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "支持的roundMode"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "float"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "half"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "溢出部分按饱和处理。CAST_RINT/CAST_ODD/CAST_ROUND/CAST_FLOOR/CAST_CEIL/CAST_TRUNC/CAST_NONE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "float"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "int16_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "溢出部分按饱和处理。  CAST_RINT/CAST_ROUND/CAST_FLOOR/CAST_CEIL/CAST_TRUNC"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "float"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "溢出部分按饱和处理。  CAST_RINT/CAST_ROUND/CAST_FLOOR/CAST_CEIL/CAST_TRUNC/CAST_NONE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "float"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "float"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CAST_RINT/CAST_ROUND/CAST_FLOOR/CAST_CEIL/CAST_TRUNC"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "half"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "int8_t/uint8_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "溢出部分按饱和处理。  CAST_RINT/CAST_ROUND/CAST_FLOOR/CAST_CEIL/CAST_TRUNC/CAST_NONE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "half"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CAST_RINT/CAST_ROUND/CAST_FLOOR/CAST_CEIL/CAST_TRUNC"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "half"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "float"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CAST_NONE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "half"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "int16_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CAST_RINT"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int16_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "half/float"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CAST_NONE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "float"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CAST_NONE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "int16_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "溢出部分按饱和处理。CAST_NONE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint8_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "half"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CAST_NONE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int8_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "half"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CAST_NONE"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "返回值",
      children: "返回值"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "无"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "支持的型号",
      children: "支持的型号"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Kirin9020系列处理器"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "KirinX90系列处理器"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "注意事项",
      children: "注意事项"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["操作数地址偏移对齐要求请参见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-general-constraints",
          children: "通用约束"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "dst与src的应为不同Tensor，或同一Tensor的同一元素，不支持同一Tensor的不同元素。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "src为float，dst为float时，取整模式表示向整数取整（仍为float类型），其他情况表示向dst数据类型所能表示的数字取整。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "调用示例",
      children: "调用示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本样例中只展示Compute流程中的部分代码。本样例的srcLocal为half类型，dstLocal为int32_t类型，计算mask时以int32_t为准。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果开发者需要运行样例代码，请将该代码段拷贝并替换样例模板中Compute函数的部分代码即可。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "tensor前n个数据计算样例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AscendC::Cast(dstLocal, srcLocal, AscendC::RoundMode::CAST_CEIL, 512);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "结果示例如下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "输入数据(srcLocal):\n[29.5    83.6    16.75   45.1    40.62   69.06   47.6    96.5    72.7\n 57.56   61.25   69.7    29.27   91.2    70.1    14.484   9.625  21.58\n  9.336   3.125  63.72    9.9    17.28   73.2    75.7    29.81   98.8\n 99.06   72.94    3.785  24.94   25.56   39.1    58.94   39.6    78.4\n  5.43   25.48    9.58   60.8    77.56   29.7    70.3     6.312   4.047\n 87.1    81.6    76.56   59.28   55.66   81.75   73.56   76.9    54.38\n  7.254  37.84   11.08   77.6    83.6    89.2    93.06    2.96   76.56\n 62.16   76.25   95.44   86.6    86.75   29.83   82.2    55.03   64.9\n 56.44   12.89   87.06   39.34   72.25   43.06   63.4    51.72   63.9\n  0.703  47.84   27.73   99.     89.     97.3     1.277  58.44   14.05\n 78.9    98.5    28.55   44.8    41.03   40.75   74.2    74.06   10.51\n 69.2    25.83   35.8    85.5    25.12   82.25   95.3    36.75   55.88\n 90.9    57.47    7.13   18.1    40.97   31.     99.3    69.4    72.94\n 62.44   63.7    80.     37.94   11.11   37.     39.72   87.94   31.72\n 25.7    54.7    32.8    21.64   14.53   55.1     3.607  40.16   77.7\n 15.15   77.44   43.25   85.75   67.3    30.33   67.56   60.72   58.16\n 19.84   89.2    18.75   55.56   31.61    9.445   6.5    27.95   48.5\n 37.16    7.805  37.72   69.6    36.2    92.56   24.72   41.56   48.44\n 19.27   25.94   25.      8.836  55.75   77.8    25.84   46.16   71.7\n 63.62   33.28    3.719  55.22   45.97   35.8    27.86   42.22    3.078\n 92.06    0.805  51.97   76.4    32.03   74.56   28.1    91.2    35.38\n  0.2009 74.25   87.5    92.75   76.25   51.28   22.9    34.4    28.23\n 87.5    78.75   63.1    61.56   79.94    6.766  95.1    55.     56.75\n 39.66   94.75   24.19   29.83   72.6    99.9    12.43   46.56   51.9\n 92.3    42.66   91.8    95.8    35.2    13.08   60.7    22.22    6.055\n  2.23   13.875  71.3    99.56   91.94   92.     96.06   97.5    68.75\n  8.61    1.157  68.2    20.73   63.44   90.     38.78   64.4    88.9\n 20.75   14.03   97.06   66.8    57.9    86.94   28.5     0.2279 51.8\n 84.56   39.53   93.     15.66   15.23   71.75   11.44   45.28   57.38\n 82.5    88.7     9.74   90.4    61.56   68.56   11.22   69.3    40.28\n 24.78   84.44   23.92    8.4    20.88   48.2    17.42   59.84   93.2\n  2.191  95.94   93.06   54.53   76.5    37.     41.7    82.7    69.5\n 92.6     5.8    32.78   84.56   26.5    96.56    0.858  96.44   52.8\n 90.9    30.52    2.656  32.03   35.72    8.125  21.94   84.5    66.7\n 96.75   46.8     1.42   58.3    28.75   44.94   66.2    28.67   11.695\n 41.75   67.25   26.75   17.72   35.9     5.72   55.88   94.7    80.8\n 71.     86.06   36.78   81.06   56.8    61.34   11.42   74.     32.16\n 14.695  78.6    56.1    64.4    61.75   50.88   39.6    79.94   71.25\n 40.7     5.99   67.4    62.28   89.25   12.02   63.12   33.1    59.06\n 28.2    19.22   59.66   51.6    53.28   97.8    42.25   82.     39.7\n 50.6    95.06   20.64   26.62   54.9    55.     28.44   26.25   46.56\n 87.06   98.44   49.34   37.2    97.4    34.3    83.4    57.4    94.\n 29.31   79.44   19.72   54.9    50.25   58.75   92.5    17.3    17.88\n 44.7     6.047  50.78   75.3    21.66   71.5    97.75   35.8    93.6\n  4.367  31.02   66.5    48.25   34.     92.7    36.97   86.5    10.37\n 82.     29.39   10.63   40.72   72.5    31.56   96.5    70.44    6.074\n 37.34    7.58   21.72   44.97   77.6    14.22   18.62   47.97   54.6\n 99.56   81.7    35.75   44.22   28.64   91.56    1.005  44.      8.125\n 11.7    93.6    70.25   63.94   11.05   50.97   56.47   39.4    35.53\n 84.     10.21   42.66   62.12   87.7    71.25   87.75   56.03   60.88\n 31.81   68.1    91.1    67.3    53.6    96.06   43.75   27.86   46.6\n 87.7    29.47    2.174  88.4    49.53   63.53   84.9    91.75   48.53\n 91.94   88.44   58.3    88.44   23.11   91.56   71.4    59.66   93.44\n 28.56   93.3    59.94   90.     18.95   52.8    70.3    58.     21.47\n 93.7    45.03   84.25   34.06   23.86   38.4     5.566  41.5    35.1\n 34.8    32.8    81.44   74.75   95.9    23.56    3.562  48.72   92.7\n 43.88   83.75   69.06   85.8    22.84   63.78   90.94   52.78  ]\n输出数据(dstLocal):\n[ 30  84  17  46  41  70  48  97  73  58  62  70  30  92  71  15  10  22\n  10   4  64  10  18  74  76  30  99 100  73   4  25  26  40  59  40  79\n   6  26  10  61  78  30  71   7   5  88  82  77  60  56  82  74  77  55\n   8  38  12  78  84  90  94   3  77  63  77  96  87  87  30  83  56  65\n  57  13  88  40  73  44  64  52  64   1  48  28  99  89  98   2  59  15\n  79  99  29  45  42  41  75  75  11  70  26  36  86  26  83  96  37  56\n  91  58   8  19  41  31 100  70  73  63  64  80  38  12  37  40  88  32\n  26  55  33  22  15  56   4  41  78  16  78  44  86  68  31  68  61  59\n  20  90  19  56  32  10   7  28  49  38   8  38  70  37  93  25  42  49\n  20  26  25   9  56  78  26  47  72  64  34   4  56  46  36  28  43   4\n  93   1  52  77  33  75  29  92  36   1  75  88  93  77  52  23  35  29\n  88  79  64  62  80   7  96  55  57  40  95  25  30  73 100  13  47  52\n  93  43  92  96  36  14  61  23   7   3  14  72 100  92  92  97  98  69\n   9   2  69  21  64  90  39  65  89  21  15  98  67  58  87  29   1  52\n  85  40  93  16  16  72  12  46  58  83  89  10  91  62  69  12  70  41\n  25  85  24   9  21  49  18  60  94   3  96  94  55  77  37  42  83  70\n  93   6  33  85  27  97   1  97  53  91  31   3  33  36   9  22  85  67\n  97  47   2  59  29  45  67  29  12  42  68  27  18  36   6  56  95  81\n  71  87  37  82  57  62  12  74  33  15  79  57  65  62  51  40  80  72\n  41   6  68  63  90  13  64  34  60  29  20  60  52  54  98  43  82  40\n  51  96  21  27  55  55  29  27  47  88  99  50  38  98  35  84  58  94\n  30  80  20  55  51  59  93  18  18  45   7  51  76  22  72  98  36  94\n   5  32  67  49  34  93  37  87  11  82  30  11  41  73  32  97  71   7\n  38   8  22  45  78  15  19  48  55 100  82  36  45  29  92   2  44   9\n  12  94  71  64  12  51  57  40  36  84  11  43  63  88  72  88  57  61\n  32  69  92  68  54  97  44  28  47  88  30   3  89  50  64  85  92  49\n  92  89  59  89  24  92  72  60  94  29  94  60  90  19  53  71  58  22\n  94  46  85  35  24  39   6  42  36  35  33  82  75  96  24   4  49  93\n  44  84  70  86  23  64  91  53]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "样例模板",
      children: "样例模板"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为了方便开发者快速运行指令中的参考样例，本章节提供样例模板。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者可以将以下样例模板作为代码框架，只需将具体指令中的样例片段拷贝替换下文代码段中的加粗内容即可。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include \"kernel_operator.h\"\nclass KernelCast {\npublic:\n    __aicore__ inline KernelCast() {}\n    __aicore__ inline void Init(__gm__ uint8_t* srcGm, __gm__ uint8_t* dstGm)\n    {\n        srcGlobal.SetGlobalBuffer((__gm__ half*)srcGm);\n        dstGlobal.SetGlobalBuffer((__gm__ int32_t*)dstGm);\n        pipe.InitBuffer(inQueueSrc, 1, 512 * sizeof(half));\n        pipe.InitBuffer(outQueueDst, 1, 512 * sizeof(int32_t));\n    }\n    __aicore__ inline void Process()\n    {\n        CopyIn();\n        Compute();\n        CopyOut();\n    }\nprivate:\n    __aicore__ inline void CopyIn()\n    {\n        AscendC::LocalTensor<half> srcLocal = inQueueSrc.AllocTensor<half>();\n        AscendC::DataCopy(srcLocal, srcGlobal, 512);\n        inQueueSrc.EnQue(srcLocal);\n    }\n    __aicore__ inline void Compute()\n    {\n        AscendC::LocalTensor<half> srcLocal = inQueueSrc.DeQue<half>();\n        AscendC::LocalTensor<int32_t> dstLocal = outQueueDst.AllocTensor<int32_t>();\n  \n        AscendC::Cast(dstLocal, srcLocal, AscendC::RoundMode::CAST_CEIL, 512);\n  \n        outQueueDst.EnQue<int32_t>(dstLocal);\n        inQueueSrc.FreeTensor(srcLocal);\n    }\n    __aicore__ inline void CopyOut()\n    {\n        AscendC::LocalTensor<int32_t> dstLocal = outQueueDst.DeQue<int32_t>();\n        AscendC::DataCopy(dstGlobal, dstLocal, 512);\n        outQueueDst.FreeTensor(dstLocal);\n    }\nprivate:\n    AscendC::TPipe pipe;\n    AscendC::TQue<AscendC::QuePosition::VECIN, 1> inQueueSrc;\n    AscendC::TQue<AscendC::QuePosition::VECOUT, 1> outQueueDst;\n    AscendC::GlobalTensor<half> srcGlobal;\n    AscendC::GlobalTensor<int32_t> dstGlobal;\n};\nextern \"C\" __global__ __aicore__ void cast_simple_kernel(__gm__ uint8_t* srcGm, __gm__ uint8_t* dstGm)\n{\n    KernelCast op;\n    op.Init(srcGm, dstGm);\n    op.Process();\n}\n"
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
665271(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439317-28f7bf89f611847da25288e661a3d3b8.png");

},
521508(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799622-4abcc6dd21e8e663bd56d32defe5b039.png");

},
838665(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479271-2503394c5a20e32a11371e069f3172bd.png");

},
769079(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959272-2f38507d62ff18ef8d80065d35f2f670.png");

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