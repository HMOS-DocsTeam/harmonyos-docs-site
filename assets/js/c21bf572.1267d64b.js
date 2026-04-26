"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["581754"], {
792480(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_custom_operator_development_cannkit_operator_implementation_cannkit_project_based_operator_development_cannkit_operator_based_on_engineering_cannkit_operator_prototype_defini_c21_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cann-kit-guide-cannkit-ascendc-operator-development-cannkit-custom-operator-development-cannkit-operator-implementation-cannkit-project-based-operator-development-cannkit-operator-based-on-engineering-cannkit-operator-prototype-defini-c21.json
var site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_custom_operator_development_cannkit_operator_implementation_cannkit_project_based_operator_development_cannkit_operator_based_on_engineering_cannkit_operator_prototype_defini_c21_namespaceObject = JSON.parse('{"id":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-operator-implementation/cannkit-project-based-operator-development/cannkit-operator-based-on-engineering/cannkit-operator-prototype-definition/cannkit-operator-prototype-definition","title":"算子原型定义实现","description":"算子原型主要描述了算子的输入输出、属性等信息以及算子在AI处理器上相关实现信息，并关联Host侧Tiling实现等函数。算子原型通过自定义的算子类来承载，该算子类继承自OpDef。完成算子的原型定义等操作后，需要调用原型注册接口(OP\\\\_ADD)接口，传入算子类型（自定义算子类的类名），进行算子原型注册。下面是一个简单的Add算子原型定义和注册的例子。","source":"@site/docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-operator-implementation/cannkit-project-based-operator-development/cannkit-operator-based-on-engineering/cannkit-operator-prototype-definition/cannkit-operator-prototype-definition.md","sourceDirName":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-operator-implementation/cannkit-project-based-operator-development/cannkit-operator-based-on-engineering/cannkit-operator-prototype-definition","slug":"/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-operator-implementation/cannkit-project-based-operator-development/cannkit-operator-based-on-engineering/cannkit-operator-prototype-definition/","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-operator-implementation/cannkit-project-based-operator-development/cannkit-operator-based-on-engineering/cannkit-operator-prototype-definition/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"算子原型定义实现","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-operator-prototype-definition","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"创建算子工程","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-operator-implementation/cannkit-project-based-operator-development/cannkit-creating-an-operator-project/"},"next":{"title":"Kernel侧算子实现","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-operator-implementation/cannkit-project-based-operator-development/cannkit-operator-based-on-engineering/cannkit-operator-implementation-on-the/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-operator-implementation/cannkit-project-based-operator-development/cannkit-operator-based-on-engineering/cannkit-operator-prototype-definition/cannkit-operator-prototype-definition.md


const frontMatter = {
	title: '算子原型定义实现',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-operator-prototype-definition',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = '算子原型定义实现';

const assets = {

};



const toc = [{
  "value": "算子原型定义",
  "id": "算子原型定义",
  "level": 2
}, {
  "value": "AI处理器上相关实现信息",
  "id": "ai处理器上相关实现信息",
  "level": 2
}, {
  "value": "关联Tiling实现、Shape推导等函数",
  "id": "关联tiling实现shape推导等函数",
  "level": 2
}, {
  "value": "多硬件平台注册差异化的算子原型",
  "id": "多硬件平台注册差异化的算子原型",
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
        id: "算子原型定义实现",
        children: "算子原型定义实现"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["算子原型主要描述了算子的输入输出、属性等信息以及算子在AI处理器上相关实现信息，并关联", (0,jsx_runtime.jsx)(_components.a, {
        href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-operator-implementation/cannkit-project-based-operator-development/cannkit-operator-based-on-engineering/cannkit-tiling-implementation-on-the-host",
        children: "Host侧Tiling实现"
      }), "等函数。算子原型通过自定义的算子类来承载，该算子类继承自", (0,jsx_runtime.jsx)(_components.a, {
        href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-host-api/cannkit-prototype-registration-and-management/cannkit-opdef/cannkit-input",
        children: "OpDef"
      }), "。完成算子的原型定义等操作后，需要调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-host-api/cannkit-prototype-registration-and-management/cannkit-prototype-api-registration",
        children: "原型注册接口(OP_ADD)"
      }), "接口，传入算子类型（自定义算子类的类名），进行算子原型注册。下面是一个简单的Add算子原型定义和注册的例子。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "namespace ops {\nclass AddCustom : public OpDef {\npublic:\n    AddCustom(const char* name) : OpDef(name)\n    {\n        this->Input(\"x\")\n            .ParamType(REQUIRED)\n            .DataType({ge::DT_FLOAT16, ge::DT_FLOAT, ge::DT_INT32})\n            .Format({ge::FORMAT_ND, ge::FORMAT_ND, ge::FORMAT_ND});\n        this->Input(\"y\")\n            .ParamType(REQUIRED)\n            .DataType({ge::DT_FLOAT16, ge::DT_FLOAT, ge::DT_INT32})\n            .Format({ge::FORMAT_ND, ge::FORMAT_ND, ge::FORMAT_ND});\n        this->Output(\"z\")\n            .ParamType(REQUIRED)\n            .DataType({ge::DT_FLOAT16, ge::DT_FLOAT, ge::DT_INT32})\n            .Format({ge::FORMAT_ND, ge::FORMAT_ND, ge::FORMAT_ND});\n        // 根据开发者的算子调用方式决定需不需要注册 单算子API调用方式下不需要\n        this->SetInferShape(ge::InferShape);\n        this->SetInferDataType(ge::InferDataType);\n        this->AICore()\n            .SetTiling(optiling::TilingFunc);\n        // 请替换为实际的Kirin AI处理器型号\n        this->AICore().AddConfig(\"kirin9020\");\n    }\n};\nOP_ADD(AddCustom);\n} // namespace ops\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(397602)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注册算子类型后，框架会根据算子类型获取算子注册信息，同时在编译和运行时按照一定的规则匹配算子实现文件名称和kernel侧核函数名称。为了保证正确匹配，算子类型、算子实现文件名称和核函数名称需要遵循如下定义规则。通常情况下，开发者只需要保证创建算子工程时原型定义json文件中算子类型op的参数值为大驼峰命名方式即可，工程创建后自动生成的代码即满足该规则。在手动编写算子原型定义和算子实现文件时需要按照如下规则定义。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["算子类型需要采用", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "大驼峰"
            })
          }), "的命名方式，即采用大写字符区分不同的语义。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["算子实现文件名称、核函数名称需相同，均为算子类型转换为", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "下划线"
            })
          }), "命名方式后的值。下文描述了通过算子类型转换成算子实现文件名称和核函数名称的过程："]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "首字符的大写字符转换为小写字符。例如：Abc -> abc。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "大写字符的前一个字符为小写字符或数字，则在大写字符前插一个下划线“_”，并将该字符转换为小写字符。例如：AbcDef -> abc_def。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "大写字符前一个字符为大写字符且后一个字符是小写字符，则在大写字符前插一个下划线“_”，并将该字符转换为小写字符。例如：AbcAAc -> abc_a_ac。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "其他大写字符转换为小写字符，小写字符保持不变。"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "算子原型定义",
      children: "算子原型定义"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "算子原型定义描述了算子的输入输出、属性等信息。输入输出支持的datatype、format格式的数量需要一致，并保持一一对应的关系。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如下的代码片段呈现了Add算子输入x的描述信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "this->Input(\"x\")\n    .ParamType(REQUIRED)\n    .DataType({ge::DT_FLOAT16, ge::DT_FLOAT, ge::DT_INT32})\n    .Format({ge::FORMAT_ND, ge::FORMAT_ND, ge::FORMAT_ND});\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表1"
        })
      }), " 输入输出参数说明"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "原型定义"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "具体描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Input/Output"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ParamType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "参数类型，Option取值为：OPTIONAL（可选）、REQUIRED（必选）、DYNAMIC（动态输入）。  - 类似于上文中的Add样例，其输入输出是必选的。  - 有些算子的输入或者输出个数是动态的，例如AddN，将N个输入Tensor累加到一起，输出一个Tensor；SplitV，将一个Tensor在某个轴上，拆分为N个Tensor输出。  - 有些算子的输入是可选的，例如BatchNorm算子，在训练的时候没有均值和方差输入，在推理的时候有均值和方差的输入。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Input/Output"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DataType"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["算子输入输出支持的datatype。datatype的取值请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-ge-datatype",
              children: "DataType"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Input/Output"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Format"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["算子输入输出支持的format。format的取值请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-ge-format",
              children: "Format"
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从上文的原型定义中可以看出，列出了输入输出所有datatype和format的组合，保持一一对应。使用如下接口，可以达到简化这种代码逻辑的目的。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-host-api/cannkit-prototype-registration-and-management/cannkit-opparamdef/cannkit-follow",
        children: "Follow"
      }), "接口指定当前输入/输出的datatype/format/shape信息与之前定义过的某个输入一致。示例如下。输出“y1”Follow输入“x1”场景，此时“y1”的datatype、format以及shape都将会和“x1”保持一致。使用Follow接口指定shape一致时通常比", (0,jsx_runtime.jsx)(_components.a, {
        href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-deploying-operators/cannkit-operator-development-in-graph-mode/cannkit-development-process#shape%E6%8E%A8%E5%AF%BC",
        children: "shape推导"
      }), "函数逻辑更加简单，能用Follow表达的逻辑，建议使用Follow接口，则无需再编写注册InferShape函数。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "this->Input(\"x1\")\n     .ParamType(REQUIRED)\n     .DataType({ge::DT_FLOAT, ge::DT_FLOAT})\n     .Format({ge::FORMAT_ND, ge::FORMAT_ND});\n this->Input(\"x2\")\n     .ParamType(REQUIRED)\n     .DataType({ge::DT_FLOAT, ge::DT_FLOAT})\n     .Format({ge::FORMAT_ND, ge::FORMAT_ND});\n this->Output(\"y1\")\n     .ParamType(REQUIRED)\n     .Follow(\"x1\")\n     .OutputShapeDependOnCompute();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "原型定义中还包括算子属性信息，如下的代码片段呈现了ReduceMax算子的属性reduceDim和isKeepDim的描述信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "this->Attr(\"reduceDim\")\n    .AttrType(REQUIRED)\n    .Int();\nthis->Attr(\"isKeepDim\")\n    .AttrType(OPTIONAL)\n    .Int(1);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "具体参数说明如下。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表2"
        })
      }), " 属性参数说明"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "原型定义"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "注册方式"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "具体描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Attr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AttrType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置算子属性类型，取值为：OPTIONAL（可选）、REQUIRED（必选）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Attr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bool/Float/Int..."
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置算子属性数据类型为Bool/Float/Int...。具体说明请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-host-api/cannkit-prototype-registration-and-management/cannkit-opattrdef",
              children: "OpAttrDef"
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ai处理器上相关实现信息",
      children: "AI处理器上相关实现信息"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-host-api/cannkit-prototype-registration-and-management/cannkit-opaicoredef/cannkit-addconfig",
        children: "AddConfig"
      }), "注册算子支持的AI处理器型号以及相关的配置信息。AddConfig接口原型如下。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "soc参数表示AI处理器型号，aicore_config表示其他配置信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void AddConfig(const char *soc);\nvoid AddConfig(const char *soc, OpAICoreConfig &aicore_config);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过该接口注册AI处理器型号的样例如下，ascendxxx请替换为实际的AI处理器型号。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "this->AICore().AddConfig(\"ascendxxx\");\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "关联tiling实现shape推导等函数",
      children: "关联Tiling实现、Shape推导等函数"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-host-api/cannkit-prototype-registration-and-management/cannkit-opdef/cannkit-setinfershape",
        children: "SetInferShape"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-host-api/cannkit-prototype-registration-and-management/cannkit-opdef/cannkit-setinferdatatype",
        children: "SetInferDataType"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-host-api/cannkit-prototype-registration-and-management/cannkit-opaicoredef/cannkit-settiling",
        children: "SetTiling"
      }), "接口来关联对应的shape推导函数和Tiling函数，样例如下。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "this->SetInferShape(ge::InferShape);\nthis->SetInferDataType(ge::InferDataType);\nthis->AICore()\n    .SetTiling(optiling::TilingFunc);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "多硬件平台注册差异化的算子原型",
      children: "多硬件平台注册差异化的算子原型"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "算子类继承基类OpDef，使用Input、Output、Attr等注册算子原型信息，硬件平台支持相同的算子原型的情况下，直接通过AICore().AddConfig添加支持的AI处理器型号即可；不同的硬件形态算子原型定义不同的情况，可以通过新增OpAICoreConfig的方式，针对不同的AI处理器型号注册差异化的算子原型。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "差异化的算子原型生效规则如下。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "对于算子类的输入输出原型信息，OpAICoreConfig未配置的会继承OpDef定义的原型，比如算子类中定义了输出y，OpAICoreConfig中没有定义输出y，OpAICoreConfig会继承y的原型定义。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "对于算子类和新增OpAICoreConfig中定义的算子原型相同的情况，新增OpAICoreConfig中定义的算子原型信息会覆盖OpDef定义的原型信息，比如算子类中定义了输入x支持DT_FLOAT16数据类型，新增OpAICoreConfig中也定义了输入x，但是支持DT_FLOAT16、DT_BF16数据类型，则以OpAICoreConfig新增定义为准。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如下样例中kirinxxx1、kirinxxx2（AI处理器型号）使用相同的算子原型，算子类通过继承基类OpDef，使用Input、Output、Attr等注册算子原型信息，再通过AICore().AddConfig添加支持的AI处理器型号；对于ascendxxx3支持的算子原型需要定制化处理，新增了DT_BF16的类型，通过新增OpAICoreConfig的方式进行注册，x，y，z的定义会覆盖算子类中对应定义的原型信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "namespace ops {\nclass MyAdd : public OpDef {\npublic:\n    MyAdd(const char* name) : OpDef(name)\n    {\n        // ascendxxx1 ascendxxx2 AI处理器型号原型定义\n        this->Input(\"x\")\n            .ParamType(REQUIRED)\n            .DataType({ge::DT_FLOAT16})\n            .Format({ge::FORMAT_ND});\n        this->Input(\"y\")\n            .ParamType(OPTIONAL)\n            .DataType({ge::DT_INT64})\n            .ValueDepend(REQUIRED)\n            .Format({ge::FORMAT_ND});\n        this->Output(\"z\")\n            .ParamType(REQUIRED)\n            .DataType({ge::DT_FLOAT16})\n            .Format({ge::FORMAT_ND});\n        this->AICore()\n            .SetTiling(optiling::TilingFunc);\n        this->AICore().AddConfig(\"ascendxxx1\");\n        this->AICore().AddConfig(\"ascendxxx2\");\n        // ascendxxx3芯片定义OpAICoreConfig变量，定制化原型\n        OpAICoreConfig config;\n        config.Input(\"x\")\n            .ParamType(REQUIRED)\n            .DataType({ge::DT_FLOAT16, ge::DT_BF16})\n            .Format({ge::FORMAT_ND, ge::FORMAT_ND});\n        config.Input(\"y\")\n            .ParamType(REQUIRED)\n            .DataType({ge::DT_FLOAT16, ge::DT_BF16})\n            .Format({ge::FORMAT_ND, ge::FORMAT_ND});\n        config.Output(\"z\")\n            .ParamType(REQUIRED)\n            .DataType({ge::DT_FLOAT16, ge::DT_BF16})\n            .Format({ge::FORMAT_ND, ge::FORMAT_ND});\n        this->AICore().AddConfig(\"kirin9020\", config);\n    }\n};\nOP_ADD(MyAdd);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如下的样例中，只有几个参数原型信息在不同硬件平台不一致，开发者也可以通过OpAICoreConfig定制部分算子原型信息，复用OpDef定义的其他算子原型信息，达到部分原型信息硬件平台定制化的目的。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class AddCustom : public OpDef {\npublic:\n    AddCustom(const char* name) : OpDef(name)\n    {\n        this->Input(\"x\").DataType({ ge::DT_FLOAT16 }).ParamType(OPTIONAL);\n        this->Output(\"y\").DataType({ ge::DT_FLOAT16 });\n        OpAICoreConfig aicConfig1;\n        OpAICoreConfig aicConfig2;\n        aicConfig1.Input(\"x\")\n            .ParamType(OPTIONAL)\n            .DataType({ ge::DT_FLOAT })\n            .Format({ ge::FORMAT_ND });\n        aicConfig2.Input(\"x\")\n            .ParamType(REQUIRED)\n            .DataType({ ge::DT_INT32 })\n            .Format({ ge::FORMAT_ND });\n        this->AICore().AddConfig(\"kirinxxxx1\", aicConfig1);\n        this->AICore().AddConfig(\"kirinxxxx2\", aicConfig2);\n    }\n};\n"
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
397602(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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