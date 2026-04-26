"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["327453"], {
596868(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_custom_operator_development_cannkit_deploying_operators_cannkit_ai_framework_operator_adaptation_cannkit_onnx_framework_cannkit_onnx_framework_md_7bf_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cann-kit-guide-cannkit-ascendc-operator-development-cannkit-custom-operator-development-cannkit-deploying-operators-cannkit-ai-framework-operator-adaptation-cannkit-onnx-framework-cannkit-onnx-framework-md-7bf.json
var site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_custom_operator_development_cannkit_deploying_operators_cannkit_ai_framework_operator_adaptation_cannkit_onnx_framework_cannkit_onnx_framework_md_7bf_namespaceObject = JSON.parse('{"id":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-deploying-operators/cannkit-ai-framework-operator-adaptation/cannkit-onnx-framework/cannkit-onnx-framework","title":"ONNX框架","description":"适配插件开发","source":"@site/docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-deploying-operators/cannkit-ai-framework-operator-adaptation/cannkit-onnx-framework/cannkit-onnx-framework.md","sourceDirName":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-deploying-operators/cannkit-ai-framework-operator-adaptation/cannkit-onnx-framework","slug":"/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-deploying-operators/cannkit-ai-framework-operator-adaptation/cannkit-onnx-framework/","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-deploying-operators/cannkit-ai-framework-operator-adaptation/cannkit-onnx-framework/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"ONNX框架","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-onnx-framework","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"AI框架算子适配概述","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-deploying-operators/cannkit-ai-framework-operator-adaptation/cannkit-overview-of-ai-framework-operator/"},"next":{"title":"Tensor基本概念","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-featured-topics/cannkit-tensor-basics/cannkit-basic-concepts-of-tensor/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-deploying-operators/cannkit-ai-framework-operator-adaptation/cannkit-onnx-framework/cannkit-onnx-framework.md


const frontMatter = {
	title: 'ONNX框架',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-onnx-framework',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = 'ONNX框架';

const assets = {

};



const toc = [{
  "value": "适配插件开发",
  "id": "适配插件开发",
  "level": 2
}, {
  "value": "调用样例",
  "id": "调用样例",
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
        id: "onnx框架",
        children: "ONNX框架"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "适配插件开发",
      children: "适配插件开发"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者可以参考本章节进行算子适配插件的开发，将ONNX框架的算子映射成适配Kirin AI处理器的算子（下文简称AscendC算子），从而完成从ONNX框架调用AscendC自定义算子的过程。如下样例展示了一个基础的开发流程："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include \"register/register.h\"\n#include \"nlohmann/json.hpp\"\nnamespace domi {\n    Status ParseParamByOpFunc(const ge::Operator& op_src, ge::Operator& op_dest) {\n        // ...\n    }\n    REGISTER_CUSTOM_OP(\"OpType\")    // 映射的自定义算子类型\n        .FrameworkType(ONNX)\n        .OriginOpType(\"OriginOpType\")  // ONNX模型中的算子类型\n        .ParseParamsByOperatorFn(ParseParamByOpFunc);   // 用来注册解析算子属性的函数\n   }\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "包含所需头文件。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "register.h，存储在DDK软件安装后文件存储路径的\"ddk/ai_ddk_lib/include/register\"目录下，包含该头文件，可使用算子注册相关类，调用算子注册相关的接口。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["json.hpp，用于进行ONNX数据定义的解析，将String类型的算子参数定义转换为json格式。若样例工程中未提供\"json.hpp\"文件，开发者可以自行下载，并将\"json.hpp\"放在工程可以找到的任意路径下，然后包含此头文件即可，推荐放在DDK安装目录的\"tools/tools_ascendc/json-develop\"下，按如下目录放置。下载路径可参见", (0,jsx_runtime.jsx)(_components.a, {
                href: "https://github.com/nlohmann/json/blob/develop/single_include/nlohmann/json.hpp",
                children: "json.hpp"
              }), "。"]
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "json-develop\n├── include\n│   └── nlohmann\n│       └── json.hpp\n└── README.md\n"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用REGISTER_CUSTOM_OP宏，完成DDK算子和ONNX框架的算子映射关系注册。使用方法如下。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["REGISTER_CUSTOM_OP：注册自定义算子，OpType为算子类型名称，需要与", (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-operator-implementation/cannkit-project-based-operator-development/cannkit-operator-based-on-engineering/cannkit-operator-prototype-definition",
              children: "算子原型定义实现"
            }), "中的OpType保持一致。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-opregistrationdata/cannkit-frameworktype",
              children: "FrameworkType"
            }), "：ONNX代表原始框架为ONNX。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-opregistrationdata/cannkit-originoptype",
              children: "OriginOpType"
            }), "：算子在原始框架中的类型。例如自定义算子OpTypeA，对应ONNX算子库版本opset_version=11，应传入\"ai.onnx::11::OpTypeA\"，当前支持的ONNX版本范围为9~15。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-opregistrationdata/cannkit-parseparamsbyoperatorfn",
              children: "ParseParamsByOperatorFn"
            }), "(ParseParamByOpFunc)：用来注册解析算子参数实现映射关系的回调函数，需要开发者自定义实现", (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-opregistrationdata/cannkit-parseparamsbyoperatorfn",
              children: "ParseParamsByOperatorFn"
            }), "。具体实现方式参考步骤3。"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "实现回调函数ParseParamByOpFunc。其函数声明如下所示："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Status ParseParamByOpFunc(const ge::Operator& op_src, ge::Operator& op_dest)\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "ParseParamByOpFunc：函数名称，开发者自定义。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "op_src：ONNX框架定义的Operator类对象，包含ONNX模型中自定义的算子属性信息，定义来源于ONNX框架的原始模型文件。"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["op_dest：DDK算子数据结构，保存算子信息，Operator类的详细描述请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-ge-operator/cannkit-operator-construction-and-destructor",
              children: "Operator"
            }), "。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "开发者需要在回调函数中实现属性的解析和映射，具体实现方式如下。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["ONNX原始模型中，属性为repeated message类型，对于repeated message类型的参数，可使用", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "GetAttr(const char *name, ge::AscendString &attr_value)"
            })
          }), " 接口获取其属性值，然后将AscendString类型的属性值转换为String类型，再将其转换为json格式进行属性字段的解析。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "实现如下所示："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "SStatus ParseParamAddCustom(const ge::Operator& op_src, ge::Operator& op_dest) {\nge::AscendString attrs_string;\n// 使用固定属性名称“attribute”获取ONNX算子中的属性，并赋值给AscendString类型对象\n    if (ge::GRAPH_SUCCESS == op_src.GetAttr(\"attribute\", attrs_string)) {\n        nlohmann::json attrs = nlohmann::json::parse(attrs_string.GetString());\n        for (nlohmann::json attr : attrs[\"attribute\"]) {\n            if (attr[\"name\"] == \"bias\") {\n                int64_t bias  = attr[\"i\"];\n                op_dest.SetAttr(\"bias\", bias);\n            }\n        }\n    }\n    return SUCCESS;\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "开发者也可以使用自动解析和映射的回调函数AutoMappingByOpFn，使用方式如下。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include \"register/register.h\"\nnamespace domi {\n    REGISTER_CUSTOM_OP(\"OpType\")\n        .FrameworkType(ONNX)\n        .OriginOpType(\"OriginOpType\")\n        .ParseParamsByOperatorFn(AutoMappingByOpFn);   // 用来注册解析算子属性的函数\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(553575)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "当前版本GetAttr与SetAttr接口不支持对原始文件中数据类型为double和uint64的字段进行解析。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "使用omg工具执行模型转换时，对属性的获取情况不会进行强校验。所以进行算子适配插件实现时，若开发者调用GetAttr失败，建议根据算子实际情况增加相应的处理逻辑，例如，针对必选属性，可返回失败，针对可选属性，可设置默认值。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "对于float32的非常量输入，如果算子注册只支持float16, 框架会自动插入cast算子将float32的输入转成float16的输入，计算完成后通过cast算子将输出转回float32的输出。对于float32的常量输入，框架不会自动转换，需要开发者自行修改权重格式、类型，以匹配算子的输入。"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "调用样例",
      children: "调用样例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "完成了ONNX框架的适配插件开发后，即可实现从ONNX框架调用AscendC自定义算子。下面以一个仅包含AddCustom算子的ONNX框架网络为例（该网络中的AddCustom算子通过适配插件映射为自定义的AddCustom算子），呈现一个使用推理工具进行推理的过程，目的在于让开发者快速体验推理场景下网络中自定义算子调用的过程。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在完成如下步骤之前，开发者需要先参考上文内容完成自定义AddCustom算子kernel侧和host侧的开发、ONNX适配插件的开发，并完成算子的编译部署。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["完整样例请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/HarmonyOS_Samples/cannkit_samplecode_add_custom_cpp",
        children: "AddCustom算子实现"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/HarmonyOS_Samples/cannkit_samplecode_add_custom_cpp/blob/master/FrameworkLaunch/Onnx/create_addcustom_onnx.py",
        children: "ONNX框架调用示例"
      }), " 。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过pytorch代码生成该自定义算子。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import os\nimport numpy as np\nimport onnx\nfrom onnx import helper\nfrom onnx import TensorProto\n\n\ndef create_model():\n    AddCustom = helper.make_node(\n        \"AddCustom\",\n        inputs = [\"input1\", \"input2\"],\n        outputs = [\"output\"],\n        name = \"add\",\n        bias = 1\n    )\n\n    input1_input = helper.make_tensor_value_info(\"input1\", TensorProto.FLOAT, [8, 2048])\n    input2_input = helper.make_tensor_value_info(\"input2\", TensorProto.FLOAT, [8, 2048])\n    add_output = helper.make_tensor_value_info('output', TensorProto.FLOAT, [8, 2048])\n\n    graph = helper.make_graph(\n        nodes = [AddCustom],\n        name = 'custom_graph',\n        inputs = [input1_input, input2_input],\n        outputs = [add_output]\n    )\n\n    model = helper.make_model(graph, producer_name='onnx-example')\n    model.opset_import[0].version = 11\n    model.ir_version = 6\n\n    return model\n\nmodel = create_model()\nprint(onnx.helper.printable_graph(model.graph))\nonnx.save(model, \"./add_custom.onnx\")\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在%{DDK_INSTALL_PATH}/tools/tools_omg执行如下命令生成离线模型。（如下命令中使用的目录以及文件均为样例，请以实际为准）"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "./omg --model ./add_custom.onnx --framework 5 --output out/custom_graph --target=omc\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "关键参数的解释如下。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "--model：ONNX框架网络模型文件（*.onnx）的路径。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "--framework：原始框架类型。5表示ONNX。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "--output：转换后的离线模型的路径以及文件名。请注意，记录保存该omc模型文件的路径，后续开发应用时需要使用。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "--target：转换后的模型类型，自定义算子场景仅支持omc。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "--platform：omc模型为硬件相关模型，指定omc模型运行的芯片平台。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(837437)/* ["default"] */.A) + "",
                width: "102",
                height: "38"
              })
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["模型转换命令相关参数参考", (0,jsx_runtime.jsx)(_components.a, {
                href: "https://developer.huawei.com/consumer/cn/doc/hiai-Guides/offline-model-conversion-0000001053807006",
                children: "离线模型转换"
              }), "。"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "若提示有出现如下信息，则说明进入了AscendC自定义算子编译流程且模型转换成功。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// ...\n\"the node AddCustom is custom node\"\n// ...\n\"OMG generate offline model success.\"\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "成功执行命令后，在--output参数指定的路径下，可查看离线模型（如：leaky_relu.om）。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-deploying-operators/cannkit-operator-development-in-graph-mode/cannkit-graph-compilation-and-execution#%E7%94%9F%E6%88%90%E8%BE%93%E5%85%A5%E6%95%B0%E6%8D%AE",
            children: "生成输入数据"
          }), "准备符合模型输入要求的*.bin格式的输入数据。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-deploying-operators/cannkit-operator-development-in-graph-mode/cannkit-graph-compilation-and-execution#app%E9%9B%86%E6%88%90%E4%BB%A3%E7%A0%81",
            children: "APP集成代码"
          }), "，完成模型集成。"]
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
553575(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
837437(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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