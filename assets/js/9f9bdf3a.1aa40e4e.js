"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["142054"], {
830396(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_ascendc_operator_interface_cannkit_basic_data_structure_and_apis_cannkit_ge_namespace_cannkit_prototype_definition_api_cannkit_prototype_definition_api_md_9f9_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cann-kit-guide-cannkit-ascendc-operator-development-cannkit-ascendc-operator-interface-cannkit-basic-data-structure-and-apis-cannkit-ge-namespace-cannkit-prototype-definition-api-cannkit-prototype-definition-api-md-9f9.json
var site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_ascendc_operator_interface_cannkit_basic_data_structure_and_apis_cannkit_ge_namespace_cannkit_prototype_definition_api_cannkit_prototype_definition_api_md_9f9_namespaceObject = JSON.parse('{"id":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-prototype-definition-api/cannkit-prototype-definition-api","title":"原型定义接口（REG_OP）","description":"函数原型","source":"@site/docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-prototype-definition-api/cannkit-prototype-definition-api.md","sourceDirName":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-prototype-definition-api","slug":"/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-prototype-definition-api/","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-prototype-definition-api/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":53,"frontMatter":{"title":"原型定义接口（REG_OP）","sidebar_position":53,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-prototype-definition-api","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"INFER_FUNC_REG","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-infer-func-reg/"},"next":{"title":"原型定义衍生接口说明","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-prototype-definition-derivative-api/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-prototype-definition-api/cannkit-prototype-definition-api.md


const frontMatter = {
	title: '原型定义接口（REG_OP）',
	sidebar_position: 53,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-prototype-definition-api',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = '原型定义接口（REG_OP）';

const assets = {

};



const toc = [{
  "value": "函数原型",
  "id": "函数原型",
  "level": 2
}, {
  "value": "功能说明",
  "id": "功能说明",
  "level": 2
}, {
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "返回值",
  "id": "返回值",
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
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
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
        id: "原型定义接口reg_op",
        children: "原型定义接口（REG_OP）"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数原型",
      children: "函数原型"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "函数原型定义示例如下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "REG_OP(xxx)\n    .INPUT(x1, type)\n    .OPTIONAL_INPUT(x2, type)\n    .DYNAMIC_INPUT(x3, type)\n    .OUTPUT(y1, type)\n    .DYNAMIC_OUTPUT(y3, type)\n    .REQUIRED_ATTR(a, type)\n    .ATTR(b, type, default_value)\n    .GRAPH(z1)\n    .DYNAMIC_GRAPH(z2)\n    .OP_END_FACTORY_REG(xxx)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "功能说明",
      children: "功能说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义算子的原型，包括算子的输入、输出、属性以及对应的数据类型。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "进行如上算子原型定义后，即相当于向GE注册了该算子的原型，告知GE对应类型的算子应该具备哪些输入、输出与属性；同时相当于定义了一个op::xxx的Class，开发者可以include该原型头文件，然后实例化该Class进行IR模型构建，如下所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "conv = op::Conv2D()\nconv.set_input_x(feature_map_data)\nconv.set_input_filter(weight_data)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "接口名称"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "接口说明"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "衍生接口（可用于IR模型构建）"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "REG_OP(x)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义一个算子原型，算子类型为x。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-prototype-definition-derivative-api#reg_op",
              children: "REG_OP"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: ".INPUT(x, type)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["定义输入名称（x）和类型(type)。  类型为TensorType类型，例如：  - TensorType{DT_FLOAT}  - TensorType({DT_FLOAT, DT_INT8})  - TensorType::ALL()  关于TensorType类，请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-tensortype",
              children: "TensorType"
            }), "。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-prototype-definition-derivative-api#input",
              children: "INPUT"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: ".OPTIONAL_INPUT(x, type)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["定义可选输入的名称（x）和类型（type）。  类型为TensorType类型，例如：  - TensorType{DT_FLOAT}  - TensorType({DT_FLOAT, DT_INT8})  - TensorType::ALL()  关于TensorType类，请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-tensortype",
              children: "TensorType"
            }), "。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-prototype-definition-derivative-api#optional_input",
              children: "OPTIONAL_INPUT"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: ".DYNAMIC_INPUT(x, type)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["定义动态输入的名称（x）和类型（type）。  类型为TensorType类型，例如：  - TensorType{DT_FLOAT}  - TensorType({DT_FLOAT, DT_INT8})  - TensorType::ALL()  关于TensorType类，请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-tensortype",
              children: "TensorType"
            }), "。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-prototype-definition-derivative-api#dynamic_input",
              children: "DYNAMIC_INPUT"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: ".OUTPUT(x, type)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["定义输出的名称（x）和类型（type）。  类型为TensorType类型，例如：  - TensorType{DT_FLOAT}  - TensorType({DT_FLOAT, DT_INT8})  - TensorType::ALL()  关于TensorType类，请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-tensortype",
              children: "TensorType"
            }), "。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-prototype-definition-derivative-api#output",
              children: "OUTPUT"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: ".DYNAMIC_OUTPUT(x, type)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["定义动态输出的名称（x）和类型（type）。  类型为TensorType类型，例如：  - TensorType{DT_FLOAT}  - TensorType({DT_FLOAT, DT_INT8})  - TensorType::ALL()  关于TensorType类，请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-tensortype",
              children: "TensorType"
            }), "。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-prototype-definition-derivative-api#dynamic_output",
              children: "DYNAMIC_OUTPUT"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: ".REQUIRED_ATTR(x, type)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义必备属性的名称（x）和类型（type）。  type的可选值包括：  - Int，属性类型为int64_t  - Float, 属性类型为float  - String，属性类型为string  - Bool，属性类型为bool  - Tensor，属性类型为Tensor  - Type，属性为Type枚举定义  - NamedAttrs，属性类型为NamedAttrs  - AscendString，属性类型为AscendString  - ListInt，属性类型为vector<int64_t>, int64_t列表  - ListFloat, 属性类型为vector<float>, float列表  - ListString，属性类型为vector<string>，string列表  - ListBool，属性类型为vector<bool>，bool列表  - ListTensor，属性类型为vector<Tensor>，Tensor列表  - Bytes，属性类型为Buffer  - ListType，属性类型为vector<Type>，Type列表  - ListListInt，属性类型为vector<vector<int64_t>>，2维列表  - ListAscendString，属性类型为vector<AscendString>，AscendString列表  - ListNamedAttrs，属性类型为vector<NamedAttrs>，NamedAttrs列表"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-prototype-definition-derivative-api#required_attr",
              children: "REQUIRED_ATTR"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: ".ATTR(x, type, default_value)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义可选属性的名称、类型以及默认值。  当开发者不设置算子对象的属性时，会使用此处设置的默认值。  type的可选值包括：  - Int，属性类型为int64_t  - Float, 属性类型为float  - String，属性类型为string  - Bool，属性类型为bool  - Tensor，属性类型为Tensor  - Type，属性为Type枚举定义  - NamedAttrs，属性类型为NamedAttrs  - AscendString，属性类型为AscendString  - ListInt，属性类型为vector<int64_t>, int64_t列表  - ListFloat, 属性类型为vector<float>, float列表  - ListString，属性类型为vector<string>，string列表  - ListBool，属性类型为vector<bool>，bool列表  - ListTensor，属性类型为vector<Tensor>，Tensor列表  - Bytes，属性类型为Buffer  - ListType，属性类型为vector<Type>，Type列表  - ListListInt，属性类型为vector<vector<int64_t>>，2维列表  - ListAscendString，属性类型为vector<AscendString>，AscendString列表  - ListNamedAttrs，属性类型为vector<NamedAttrs>，NamedAttrs列表  定义示例：  - .ATTR(mode, Int, 1)  - .ATTR(pad, ListInt, {0, 0, 0, 0})"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-prototype-definition-derivative-api#attr",
              children: "ATTR"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: ".GRAPH(z1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册算子中包含的子图信息，输入z1为子图名称。  例如If算子注册的子图为：  .GRAPH(then_branch) .GRAPH(else_branch)  对于同一个算子，注册的算子子图名称需要保持唯一。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-prototype-definition-derivative-api#graph",
              children: "GRAPH"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: ".DYNAMIC_GRAPH(z2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册动态算子子图信息，输入z2为子图名称。  例如Case算子注册的子图为：  .DYNAMIC_GRAPH(branches)  对于同一个算子，注册的算子子图名称需要保持唯一。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-prototype-definition-derivative-api#dynamic_graph",
              children: "DYNAMIC_GRAPH"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: ".INFER_SHAPE_AND_TYPE()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该接口为历史遗留兼容性接口，当前版本开发者无需使用。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: ".OP_END_FACTORY_REG(x)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "与REG_OP配对，结束算子原型定义。  算子类型（x）与REG_OP(x)中的类型相同。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "OpReg类中的OpReg &N()接口的功能是为了开发者进行算子注册的时候，使用.**的方式调用OpReg类的接口，例如.INPUT(x, type)、.OUTPUT(x, type)，无其他含义。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "返回值",
      children: "返回值"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "无"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束说明",
      children: "约束说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "REG_OP的算子类型必须全局唯一。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "同一个算子的输入名称之间不能重复。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "同一个算子的输出名称之间不能重复。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "同一个算子的属性名称之间不能重复。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "调用示例",
      children: "调用示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "动态输入的算子原型定义示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "REG_OP(AddN)\n    .DYNAMIC_INPUT(x, TensorType::NumberType())\n    .OUTPUT(y, TensorType::NumberType())\n    .REQUIRED_ATTR(N, Int)\n    .OP_END_FACTORY_REG(AddN)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "多输入的算子原型定义示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "REG_OP(GreaterEqual)\n    .INPUT(x1, TensorType::RealNumberType())\n    .INPUT(x2, TensorType::RealNumberType())\n    .OUTPUT(y, TensorType({DT_BOOL}))\n    .OP_END_FACTORY_REG(GreaterEqual)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注册子图的算子原型定义示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "REG_OP(If)\n    .INPUT(cond, TensorType::ALL())\n    .DYNAMIC_INPUT(input, TensorType::ALL())\n    .DYNAMIC_OUTPUT(output, TensorType::ALL())\n    .GRAPH(then_branch)\n    .GRAPH(else_branch)\n    .OP_END_FACTORY_REG(If)\n"
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