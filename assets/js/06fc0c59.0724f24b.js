"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["644906"], {
888285(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_custom_operator_development_cannkit_deploying_operators_cannkit_operator_development_in_graph_mode_cannkit_development_process_cannkit_development_process_md_06f_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cann-kit-guide-cannkit-ascendc-operator-development-cannkit-custom-operator-development-cannkit-deploying-operators-cannkit-operator-development-in-graph-mode-cannkit-development-process-cannkit-development-process-md-06f.json
var site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_custom_operator_development_cannkit_deploying_operators_cannkit_operator_development_in_graph_mode_cannkit_development_process_cannkit_development_process_md_06f_namespaceObject = JSON.parse('{"id":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-deploying-operators/cannkit-operator-development-in-graph-mode/cannkit-development-process/cannkit-development-process","title":"开发流程","description":"该开发流程以工程化算子开发为基础，除了需要提供算子实现中的算子实现文件外，还需要额外交付算子入图的代码文件。本节仅提供算子入图代码文件的开发指导。","source":"@site/docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-deploying-operators/cannkit-operator-development-in-graph-mode/cannkit-development-process/cannkit-development-process.md","sourceDirName":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-deploying-operators/cannkit-operator-development-in-graph-mode/cannkit-development-process","slug":"/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-deploying-operators/cannkit-operator-development-in-graph-mode/cannkit-development-process/","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-deploying-operators/cannkit-operator-development-in-graph-mode/cannkit-development-process/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"开发流程","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-development-process","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"算子入图概述","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-deploying-operators/cannkit-operator-development-in-graph-mode/cannkit-overview-of-operators-into-the-graph/"},"next":{"title":"图编译和图执行","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-deploying-operators/cannkit-operator-development-in-graph-mode/cannkit-graph-compilation-and-execution/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-deploying-operators/cannkit-operator-development-in-graph-mode/cannkit-development-process/cannkit-development-process.md


const frontMatter = {
	title: '开发流程',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-development-process',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = '开发流程';

const assets = {

};



const toc = [{
  "value": "datatype推导",
  "id": "datatype推导",
  "level": 2
}, {
  "value": "shape推导",
  "id": "shape推导",
  "level": 2
}, {
  "value": "InferShape时获取属性、输入",
  "id": "infershape时获取属性输入",
  "level": 2
}, {
  "value": "数据依赖",
  "id": "数据依赖",
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
        id: "开发流程",
        children: "开发流程"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该开发流程以", (0,jsx_runtime.jsx)(_components.a, {
        href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-operator-implementation/cannkit-project-based-operator-development/cannkit-overview-of-engineering-operator",
        children: "工程化算子开发"
      }), "为基础，除了需要提供", (0,jsx_runtime.jsx)(_components.a, {
        href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-operator-implementation/cannkit-project-based-operator-development/cannkit-operator-based-on-engineering/cannkit-operator-prototype-definition",
        children: "算子实现"
      }), "中的算子实现文件外，还需要额外交付算子入图的代码文件。本节仅提供算子入图代码文件的开发指导。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "假设下图是我们需要使用的网络模型，开发者可能会想直接逐个算子调用，根据输入tensor得到输出tensor就可以完成网络的运行，但在图模式场景下，实际的网络模型生成过程中，会先进行tensor shape以及datatype的推导。这样可以让我们在图执行之前，就知道各tensor的数据类型和形状，提前校验其正确性；同时提前推导出算子的输出张量描述，包括张量的形状、数据类型及数据排布格式等信息，算子构图准备阶段就可以为所有的张量静态分配内存，避免动态内存分配带来的开销。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下面的网络模型经过shape和datatype推导之后，可以得到灰色底纹框中的推导信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1"
        })
      }), " shape与datatype推导示意图"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(266149)/* ["default"] */.A) + "",
        width: "528",
        height: "465"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "除了tiling实现外，算子入图时需要额外提供的实现代码有以下几种："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "datatype推导：根据算子的输入datatype、算子逻辑及算子属性等信息，推理出算子的输出张量datatype。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "shape推导：根据算子的输入shape、算子逻辑及算子属性等信息，推理出算子的输出张量shape。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "声明数据依赖：部分算子在InferShape时，需要依赖某个输入的具体值才可以进行，这类算子被称为“数据依赖算子”，对应的输入被称为“数据依赖输入”。该类算子在注册时，需要声明其数据依赖输入。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下表列出了不同类型的算子对上述实现代码的要求。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表1"
        })
      }), " 不同的类型的算子对入图实现代码的要求"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "分类"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "对入图实现代码的要求"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "根据输入shape可以推导出输出shape。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "- shape推导  - datatype推导"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "依赖输入的value才能推导出输出shape，即数据依赖算子。 如Reshape算子，依赖shape输入的value才能推导出输出shape。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "- shape推导  - datatype推导  - 声明数据依赖"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["实际开发时通过固定的datatype和shape推导原型实现推导函数，然后再通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-host-api/cannkit-prototype-registration-and-management/cannkit-opdef/cannkit-setinfershape",
        children: "SetInferShape"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-host-api/cannkit-prototype-registration-and-management/cannkit-opdef/cannkit-setinferdatatype",
        children: "SetInferDataType"
      }), "接口来关联对应的shape推导函数，样例如下。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "namespace ge {\nstatic graphStatus InferShape(gert::InferShapeContext *context)\n{\n    // ...\n    return GRAPH_SUCCESS;\n}\n \nstatic graphStatus InferDataType(gert::InferDataTypeContext *context)\n{\n    // ...\n    return ge::GRAPH_SUCCESS;\n}\n} // namespace ge\n \n \nnamespace ops {\nclass AddCustom : public OpDef {\npublic:\n    AddCustom(const char* name) : OpDef(name)\n    {\n        this->Input(\"x\")\n            .ParamType(REQUIRED)\n            .DataType({ge::DT_FLOAT16, ge::DT_FLOAT, ge::DT_INT32})\n            .Format({ge::FORMAT_ND, ge::FORMAT_ND, ge::FORMAT_ND});\n        this->Input(\"y\")\n            .ParamType(REQUIRED)\n            .DataType({ge::DT_FLOAT16, ge::DT_FLOAT, ge::DT_INT32})\n            .Format({ge::FORMAT_ND, ge::FORMAT_ND, ge::FORMAT_ND});\n        this->Output(\"z\")\n            .ParamType(REQUIRED)\n            .DataType({ge::DT_FLOAT16, ge::DT_FLOAT, ge::DT_INT32})\n            .Format({ge::FORMAT_ND, ge::FORMAT_ND, ge::FORMAT_ND});\n        // 根据开发者的算子调用方式决定需不需要注册 图模式调用方式下需要\n        this->SetInferShape(ge::InferShape);\n       this->SetInferDataType(ge::InferDataType);\n        this->AICore()\n            .SetTiling(optiling::TilingFunc);\n        // 请替换为实际的Kirin AI处理器型号\n        this->AICore().AddConfig(\"ascendxxx\");\n    }\n};\nOP_ADD(AddCustom);\n} // namespace ops\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "datatype推导",
      children: "datatype推导"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以AddCustom算子为例，InferDataType的实现如下所示。该样例中输出tensor的数据类型与输入tensor的数据类型相同，所以直接将任意一个输入tensor的数据类型赋给输出tensor即可。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "namespace ge {\nstatic graphStatus InferDataType(gert::InferDataTypeContext* context)\n{\n    const auto inputDataType = context->GetInputDataType(0);\n    context->SetOutputDataType(0, inputDataType);\n    return ge::GRAPH_SUCCESS;\n}\n} // namespace ge\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如下示例则给出了更灵活的datatype推导样例，当输入的数据类型为DT_INT4时，其输出的数据类型为DT_INT32。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ge::graphStatus InferDataTypeForFoo(gert::InferDataTypeContext* context) {\n \n    if (context->GetInputDataType(0) == DT_INT4) {\n        context->SetOutputDataType(0, DT_INT32);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "shape推导",
      children: "shape推导"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["简单的shape推导逻辑可以使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-host-api/cannkit-prototype-registration-and-management/cannkit-opparamdef/cannkit-follow",
        children: "Follow"
      }), "接口来表达，比如输出shape和输入shape相同的情况。示例如下。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "输出“y1”Follow输入“x1”场景，指定Follow模式为SHAPE，此时“y1”的shape将会和“x1”保持一致。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "this->Input(\"x1\")\n    .ParamType(REQUIRED)\n    .DataType({ge::DT_FLOAT, ge::DT_FLOAT})\n    .Format({ge::FORMAT_ND, ge::FORMAT_ND});\nthis->Input(\"x2\")\n    .ParamType(REQUIRED)\n    .DataType({ge::DT_FLOAT, ge::DT_FLOAT})\n    .Format({ge::FORMAT_ND, ge::FORMAT_ND});\nthis->Output(\"y1\")\n    .ParamType(REQUIRED)\n    .DataType({ge::DT_FLOAT, ge::DT_FLOAT})\n    .Format({ge::FORMAT_ND, ge::FORMAT_ND})\n    .Follow(\"x1\", FollowType::SHAPE);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["无法在原型定义中通过Follow表达的情况需要开发者编写InferShape函数，其原型是确定的，接受一个", (0,jsx_runtime.jsx)(_components.a, {
        href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-gert-namespace/cannkit-infershapecontext/cannkit-infershapecontext-getinputshape",
        children: "InferShapeContext"
      }), "作为输入，从此context上可以获取到输入、输出的shape指针等内容。输入shape为const类型，因此InferShape时，输入shape是只读、不允许修改的。InferShape成功后，返回ge::GRAPH_SUCCESS，其他返回值被认为推导失败。推导失败后，执行过程结束退出。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以Reshape算子为例，InferShape的实现如下所示。根据第1个输入（shape输入）的值，Reshape算子将第0个输入（x输入）的shape做变换，并输出到其第0个输出（y输出）上。Reshape的InferShape实现为："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ge::graphStatus InferShapeForReshape(InferShapeContext *context) {\nconst gert::Shape *x_shape = context->GetInputShape(0);        // 获取第0个输入的shape\nconst gert::Tensor *shape_tensor = context->GetInputTensor(1); // 获取第1个输入的tensor\ngert::Shape *output_shape = context->GetOutputShape(0);\nif (x_shape == nullptr || shape_tensor == nullptr || output_shape == nullptr) {\n    // 防御式编程，不应该出现的场景，打印错误并返回失败\n    return ge::GRAPH_FAILED;\n}\n \nauto reshape_size = static_cast<int32_t>(shape_tensor->GetShapeSize());\nif (reshape_size < 1) {\n    // 防御式编程，不应该出现的场景，打印错误并返回失败\n    return ge::GRAPH_FAILED;\n}\n \n// 根据原型信息，Reshape的shape输入支持INT32与INT64两类，根据不同的类型进入对应的模板函数中做真正的shape变换操作\nif (shape_tensor->GetDataType() == ge::DT_INT32) {\n    int32_t *reshape_data = shape_tensor->GetData<int32_t>();\n    return ReshapeInferShapeImpl<int32_t>(reshape_data, *x_shape, *output_shape, reshape_size);\n} else {\n    int64_t *reshape_data = shape_tensor->GetData<int64_t>();\n    return ReshapeInferShapeImpl<int64_t>(reshape_data, *x_shape, *output_shape, reshape_size);\n}\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-gert-namespace/cannkit-infershapecontext/cannkit-infershapecontext-getinputshape",
        children: "InferShapeContext"
      }), " public继承自", (0,jsx_runtime.jsx)(_components.a, {
        href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-gert-namespace/cannkit-extendedkernelcontext/cannkit-getinputdesc",
        children: "ExtendedKernelContext"
      }), "，因此ExtendedKernelContext中提供的方法如获取算子type、name、属性等接口均可以在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-gert-namespace/cannkit-infershapecontext/cannkit-infershapecontext-getinputshape",
        children: "InferShapeContext"
      }), "实例中调用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(265778)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "InferShape推导函数和使用Follow接口去Follow shape不能混用，即不支持部分输出采用InferShape推导、部分输出采用Follow推导的情况。若开发者同时使用了InferShape函数和Follow接口，以开发者的InferShape函数为准，需要保证在InferShape函数中能够推导出所有的输出shape。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["为了效率考虑，调用InferShape函数时，框架不会为输出shape做初始化，因此，在InferShape函数中，可以认为输出是", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "未初始化"
          })
        }), "的状态。如果在InferShape时，希望通过Append方式操作输出shape，需要先将输出shape的DimNum清零，以防止出现未定义行为。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "infershape时获取属性输入",
      children: "InferShape时获取属性、输入"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在InferShape、Tiling时，可以通过context实例获取算子IR属性值，所谓IR属性，是指在IR注册时定义的属性，以TransData算子为例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "namespace ops {\nclass TransData : public OpDef {\npublic:\n    explicit TransData(const char *name) : OpDef(name)\n    {\n        this->Input(\"src\")\n             // ...\n        this->Output(\"dst\")\n             // ...\n        this->Attr(\"src_format\")\n            .AttrType(REQUIRED)\n            .String();\n        this->Attr(\"dst_format\")\n            .AttrType(REQUIRED)\n            .String();\n        this->Attr(\"group\")\n            .AttrType(OPTIONAL)\n           .Int(1);\n        // ...\n    }\n};\nOP_ADD(TransData);\n} // namespace ops\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "其原型定义中声明了src_format、dst_format、group三个属性，可以通过如下方式获取算子属性："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ge::graphStatus ExampleGetTransDataAttr(TilingContext *context) {\n  // 获取所有属性\n  const RuntimeAttrs *attrs = context->GetAttrs();\n  ASSERT_NOT_NULL(attrs);\n   \n  // 按照在原型定义中的顺序，使用index获取属性，index从0开始计数\n  const char *src_format = attrs->GetAttrPointer<char>(0);  // 获取src_format，src_format是第一个属性，因此index为0\n  const char *dst_format = attrs->GetAttrPointer<char>(1);  // 获取dst_format，dst_format是第二个属性，因此index为1\n  const int64_t group = attrs->GetAttrPointer<int64_t>(2);  // 获取group，group是第三个属性，因此index为2\n   \n  return ge::GRAPH_SUCCESS;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "数据依赖",
      children: "数据依赖"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["一般来说，具备输入shape后，算子可以通过InferShape推导出输出shape。然而部分算子在InferShape时，需要依赖某个输入的具体值才可以进行，这类算子被称为“数据依赖算子”，对应的输入被称为“数据依赖输入”。以Reshape算子为例，其依据shape输入的描述，对输入的shape做调整，因此Reshape算子依赖shape输入的值。这类算子需要在原型定义时通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-host-api/cannkit-prototype-registration-and-management/cannkit-opparamdef/cannkit-valuedepend",
        children: "ValueDepend"
      }), "接口声明对应的输入为数据依赖输入项。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "namespace ops {\nclass Reshape : public OpDef {\npublic:\n    explicit Reshape(const char *name) : OpDef(name)\n    {\n        // ...\n        this->Input(\"shape\")\n             .ParamType(REQUIRED)\n             // ...\n             .ValueDepend(REQUIRED) // 声明 ReShape算子的shape输入为数据依赖输入\n        // ...\n    }\n};\nOP_ADD(Reshape);\n} // namespace ops\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据第1个输入（shape输入）的值，Reshape算子将第0个输入（x输入）的shape做变换，并输出到其第0个输出（y输出）上。Reshape的InferShape实现为："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ge::graphStatus InferShapeForReshape(InferShapeContext *context) {\nconst gert::Shape *x_shape = context->GetInputShape(0);        // 获取第0个输入的shape\nconst gert::Tensor *shape_tensor = context->GetInputTensor(1); // 获取第1个输入的tensor\ngert::Shape *output_shape = context->GetOutputShape(0);\nif (x_shape == nullptr || shape_tensor == nullptr || output_shape == nullptr) {\n    // 防御式编程，不应该出现的场景，打印错误并返回失败\n    return ge::GRAPH_FAILED;\n}\n \nauto reshape_size = static_cast<int32_t>(shape_tensor->GetShapeSize());\nif (reshape_size < 1) {\n    // 防御式编程，不应该出现的场景，打印错误并返回失败\n    return ge::GRAPH_FAILED;\n}\n \n// 根据原型信息，Reshape的shape输入支持INT32与INT64两类，根据不同的类型进入对应的模板函数中做真正的shape变换操作\nif (shape_tensor->GetDataType() == ge::DT_INT32) {\n    int32_t *reshape_data = shape_tensor->GetData<int32_t>();\n    return ReshapeInferShapeImpl<int32_t>(reshape_data, *x_shape, *output_shape, reshape_size);\n} else {\n    int64_t *reshape_data = shape_tensor->GetData<int64_t>();\n    return ReshapeInferShapeImpl<int64_t>(reshape_data, *x_shape, *output_shape, reshape_size);\n}\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(851916)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "只有声明过数据依赖的输入，才可以在InferShape时调用GetInputTensor等获取tensor的接口获取其对应的tensor数据。若对一个未声明数据依赖的输入调用GetInputTensor等获取tensor的接口，只能在tensor中获取到正确的shape、format、datatype信息，无法获取到真实的tensor数据地址（获取到的地址为nullptr）。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "从tensor中获取tensor_data时(GetData<int32_t>或GetData<int64_t>)，使用者需要保证获取的数据类型是正确的，否则行为是未定义的。"
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
851916(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
266149(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799602-fb1d3fdb1d8d2f5f9ca816594779a5dd.png");

},
265778(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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