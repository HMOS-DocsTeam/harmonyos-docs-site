"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["326683"], {
719388(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_custom_operator_development_cannkit_usage_of_the_commissioning_tool_cannkit_data_preparation_and_configuration_cannkit_operator_json_configuration_cannkit_operator_json_confi_f52_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cann-kit-guide-cannkit-ascendc-operator-development-cannkit-custom-operator-development-cannkit-usage-of-the-commissioning-tool-cannkit-data-preparation-and-configuration-cannkit-operator-json-configuration-cannkit-operator-json-confi-f52.json
var site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_custom_operator_development_cannkit_usage_of_the_commissioning_tool_cannkit_data_preparation_and_configuration_cannkit_operator_json_configuration_cannkit_operator_json_confi_f52_namespaceObject = JSON.parse('{"id":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-usage-of-the-commissioning-tool/cannkit-data-preparation-and-configuration/cannkit-operator-json-configuration/cannkit-operator-json-configuration","title":"params归一格式的算子json配置","description":"json配置说明","source":"@site/docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-usage-of-the-commissioning-tool/cannkit-data-preparation-and-configuration/cannkit-operator-json-configuration/cannkit-operator-json-configuration.md","sourceDirName":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-usage-of-the-commissioning-tool/cannkit-data-preparation-and-configuration/cannkit-operator-json-configuration","slug":"/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-usage-of-the-commissioning-tool/cannkit-data-preparation-and-configuration/cannkit-operator-json-configuration/","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-usage-of-the-commissioning-tool/cannkit-data-preparation-and-configuration/cannkit-operator-json-configuration/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"params归一格式的算子json配置","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-operator-json-configuration","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"固定输入/输出顺序的算子json配置","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-usage-of-the-commissioning-tool/cannkit-data-preparation-and-configuration/cannkit-json-configuration/"},"next":{"title":"Tiling调测功能","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-usage-of-the-commissioning-tool/cannkit-commissioning-functions/cannkit-tiling-tuning/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-usage-of-the-commissioning-tool/cannkit-data-preparation-and-configuration/cannkit-operator-json-configuration/cannkit-operator-json-configuration.md


const frontMatter = {
	title: 'params归一格式的算子json配置',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-operator-json-configuration',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = 'params归一格式的算子json配置';

const assets = {

};



const toc = [{
  "value": "json配置说明",
  "id": "json配置说明",
  "level": 2
}, {
  "value": "特殊格式输入",
  "id": "特殊格式输入",
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
        id: "params归一格式的算子json配置",
        children: "params归一格式的算子json配置"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "json配置说明",
      children: "json配置说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为了支持输入/输出参数交叉配置的场景，params归一配置格式应运而生，所有输入/输出参数均放在“params”配置项中。该算子json配置文件中参数可以按", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "输入/输出规则排布"
        })
      }), "，也可以按", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "输入/输出交叉排布"
        })
      }), "，只要保证参数顺序与Kernel入口函数的参数顺序保持一致即可。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(889230)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "调试工具暂不支持该配置"
          })
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "输入/输出规则排布"
          })
        }), "（所有输出参数排布在输入参数之后）：例如Kernel入口函数的参数排布为extern \"C\" __global__ __aicore__ void add_custom(GM_ADDR input1, GM_ADDR input2, GM_ADDR input3,", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "GM_ADDR output"
          })
        }), ")。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "输入/输出交叉排布"
          })
        }), "（输入/输出参数排布顺序有交叉）：例如Kernel入口函数的参数排布为extern \"C\" __global__ __aicore__ void add_custom(GM_ADDR input1, GM_ADDR input2, ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "GM_ADDR output"
          })
        }), ", GM_ADDR input3)，output参数排在input3之前。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "核函数直调工程场景"
          })
        }), "的开发人员一般按此方式配置。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以AddCustom算子为例，对应的json配置示例如下，参数说明参见表1。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n    \"op_type\": \"add_custom\",\n    \"data_script\": \"\",\n    \"gen_data\": false,\n    \"params\": [{\n                \"name\": \"x\",\n                \"dtype\": \"float16\",\n                \"param_type\": \"input\",\n                \"shape\": [1,16384],\n                \"data_file\": \"x.bin\"\n            },\n            {\n                \"name\": \"z\",\n                \"dtype\": \"float16\",\n                \"param_type\": \"output\",\n                \"shape\": [1,16384],\n                \"data_file\": \"golden_z.bin\"\n            },\n            {\n                \"name\": \"y\",\n                \"dtype\": \"float16\",\n                \"param_type\": \"input\",\n                \"shape\": [1,16384],\n                \"data_file\": \"y.bin\"\n            },\n    ],\n    \"kernel_info\": {\n        \"kernel_source\": \"add_custom.cpp\",\n        \"kernel_name\": \"add_custom\",\n        \"kernel_includes\": []\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表1"
        })
      }), " params归一格式的算子json全量参数说明"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "数据类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "参数说明"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "取值说明"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "是否必选"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "op_type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "算子名。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "与待调测算子严格匹配。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "data_script"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数据生成脚本(python)，用于生成输入和标杆数据。"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["根据实际情况设置，如\"/home/flash_attention_golden.py\"。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 若无数据生成脚本，填写空字符或null。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "gen_data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "bool"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否根据data_script生成输入和标杆数据。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "- true：采用脚本生成数据。  - false：不采用脚本生成数据，默认false。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "params"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "核函数输入/输出的参数名。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据实际情况设置。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "params"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "dtype"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入/输出的数据类型。"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["目前支持bool、int、int8、int16、int32、int64、uint8、uint16、uint32、uint64、float16、float32、float64、bfloat16。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 算子json配置时dtype仅允许输入一种数据类型，不支持多种数据类型。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "params"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "param_type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识该节点是输入或输出。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "- input：表示为输入节点。  - output：表示为输出节点。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "params"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "shape"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "list"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入/输出的shape。"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["根据算子实际shape填写，例如[24, 20, 144, 8]。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 当输入为Scalar时，shape填null。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "params"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "data_file"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "- 当param_type为input：指定输入数据bin文件。  - 当param_type为output：指定标杆数据bin文件。"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["根据实际情况设置数据bin文件路径，必须为绝对路径，例如\"/home/data.bin\"。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  - 当data_file设为空字符或null，表示不对运行输出作精度比对。  - 当输入为Scalar时，data_file字段删除，只需配置data_value。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "params"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "data_value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "由dtype确定"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入的Scalar值。"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["根据实际情况填写。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  - 仅当param_type为input才可以配置该参数。  - data_value与data_file互斥。若配置data_value则data_file必须删除，且shape必须为null，表示本节点是Scalar输入。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["kernel_info  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 仅", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "核函数直调工程场景"
              })
            }), "需要设置kernel文件相关的配置。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "kernel_source"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kernel入口源文件绝对路径，注意格式是“绝对路径+文件名”。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据开发的核函数信息填写。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "kernel_info"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "kernel_name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kernel入口函数名。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据开发的核函数信息填写。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "kernel_info"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "kernel_includes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "list"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kernel文件依赖的头文件所在的路径。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可为[]，也可填入多个路径。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "特殊格式输入",
      children: "特殊格式输入"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "场景1：支持Scalar格式的输入。"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当输入为Scalar格式，json中“params”配置项中删除data_file，param_type配为“input”，shape配为null，data_value配为指定的标量值。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n     \"op_type\": \"xxxx\",\n     \"data_script\": \"\",\n     \"gen_data\": false,\n     \"params\": [{\n                 \"name\": \"input_1\",\n                 \"dtype\": \"float16\",\n                 \"param_type\": \"input\",\n                 \"shape\": null,\n                 \"data_value\": 8\n             }\n     ]\n }\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "场景2：支持TensorList格式的输入。"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当输入为TensorList格式，该参数需要用[ ]表示，List中的每一项表示一个Tensor，示例如下。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n     \"op_type\": \"xxxx\",\n     \"data_script\": \"\",\n     \"gen_data\": false,\n     \"params\": [\n             [{\n                 \"name\": \"input_1\",\n                 \"dtype\": \"float16\",\n                 \"param_type\": \"input\",\n                 \"shape\": [1,16384],\n                 \"data_file\": \"input_1.bin\"\n             },\n             {\n                 \"name\": \"input_2\",\n                 \"dtype\": \"float16\",\n                 \"param_type\": \"input\",\n                 \"shape\": [1,16384],\n                 \"data_file\": \"input_2.bin\"\n             }],\n             {\n                 \"name\": \"output\",\n                 \"dtype\": \"float16\",\n                 \"param_type\": \"output\",\n                 \"shape\": [1,16384],\n                 \"data_file\": \"golden.bin\"\n             },\n     ],\n     \"kernel_info\": {\n         \"kernel_source\": \"add_custom.cpp\",\n         \"kernel_name\": \"add_custom\",\n         \"kernel_includes\": []\n     }\n }\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "场景3：支持原地算子格式的输入。"
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["当算子为", (0,jsx_runtime.jsx)(_components.a, {
            href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-usage-of-the-commissioning-tool/cannkit-commissioning-tools#%E5%9F%BA%E6%9C%AC%E6%A6%82%E5%BF%B5",
            children: "原地算子(in-place op)"
          }), "时，输入和输出地址一样，配置算子json时除了“param_type”和“data_file”不同，其他配置项均保持一致。配置示例如下。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "param_type：分别配为input、output。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "data_file：输入数据为x.bin，输出数据为标杆数据golden_x.bin。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n     \"op_type\": \"add_custom\",\n     \"data_script\": \"\",\n     \"gen_data\": false,\n     \"params\": [{\n                 \"name\": \"x\",\n                 \"dtype\": \"float16\",\n                 \"param_type\": \"input\",\n                 \"shape\": [1,16384],\n                 \"data_file\": \"x.bin\"\n             },\n             {\n                 \"name\": \"x\",\n                 \"dtype\": \"float16\",\n                 \"param_type\": \"output\",\n                 \"shape\": [1,16384],\n                 \"data_file\": \"golden_x.bin\"\n             },\n             {\n                 \"name\": \"y\",\n                 \"dtype\": \"float16\",\n                 \"param_type\": \"input\",\n                 \"shape\": [1,16384],\n                 \"data_file\": \"y.bin\"\n             },\n     ],\n     \"kernel_info\": {\n         \"kernel_source\": \"add_custom.cpp\",\n         \"kernel_name\": \"add_custom\",\n         \"kernel_includes\": []\n     }\n }\n"
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
889230(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

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