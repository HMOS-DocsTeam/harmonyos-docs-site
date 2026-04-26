"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["288547"], {
771424(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_ascendc_operator_interface_cannkit_basic_data_structure_and_apis_cannkit_ge_namespace_cannkit_prototype_definition_derivative_api_cannkit_prototype_definition_derivative_api_245_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cann-kit-guide-cannkit-ascendc-operator-development-cannkit-ascendc-operator-interface-cannkit-basic-data-structure-and-apis-cannkit-ge-namespace-cannkit-prototype-definition-derivative-api-cannkit-prototype-definition-derivative-api--245.json
var site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_ascendc_operator_interface_cannkit_basic_data_structure_and_apis_cannkit_ge_namespace_cannkit_prototype_definition_derivative_api_cannkit_prototype_definition_derivative_api_245_namespaceObject = JSON.parse('{"id":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-prototype-definition-derivative-api/cannkit-prototype-definition-derivative-api","title":"原型定义衍生接口说明","description":"算子原型定义的相关接口会自动生成对应的衍生接口，可用于IR模型构建。","source":"@site/docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-prototype-definition-derivative-api/cannkit-prototype-definition-derivative-api.md","sourceDirName":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-prototype-definition-derivative-api","slug":"/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-prototype-definition-derivative-api/","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-prototype-definition-derivative-api/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":54,"frontMatter":{"title":"原型定义衍生接口说明","sidebar_position":54,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-prototype-definition-derivative-api","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"原型定义接口（REG_OP）","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-prototype-definition-api/"},"next":{"title":"VERIFY_FUNC_REG","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-verify-func-reg/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-prototype-definition-derivative-api/cannkit-prototype-definition-derivative-api.md


const frontMatter = {
	title: '原型定义衍生接口说明',
	sidebar_position: 54,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-prototype-definition-derivative-api',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = '原型定义衍生接口说明';

const assets = {

};



const toc = [{
  "value": "REG_OP",
  "id": "reg_op",
  "level": 2
}, {
  "value": "INPUT",
  "id": "input",
  "level": 2
}, {
  "value": "OPTIONAL_INPUT",
  "id": "optional_input",
  "level": 2
}, {
  "value": "DYNAMIC_INPUT",
  "id": "dynamic_input",
  "level": 2
}, {
  "value": "OUTPUT",
  "id": "output",
  "level": 2
}, {
  "value": "DYNAMIC_OUTPUT",
  "id": "dynamic_output",
  "level": 2
}, {
  "value": "REQUIRED_ATTR",
  "id": "required_attr",
  "level": 2
}, {
  "value": "ATTR",
  "id": "attr",
  "level": 2
}, {
  "value": "GRAPH",
  "id": "graph",
  "level": 2
}, {
  "value": "DYNAMIC_GRAPH",
  "id": "dynamic_graph",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    li: "li",
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
        id: "原型定义衍生接口说明",
        children: "原型定义衍生接口说明"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "算子原型定义的相关接口会自动生成对应的衍生接口，可用于IR模型构建。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "reg_op",
      children: "REG_OP"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注册算子类型后，会自动生成算子类型的两个构造函数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["例如，注册算子的类型名称Conv2D，可调用REG_OP(Conv2D)接口，调用该接口后，定义了算子的类型名称Conv2D，同时产生Conv2D的两个构造函数，其中，", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Conv2D(const AscendString& name)"
        })
      }), " 需指定算子名称，Conv2D()使用默认算子名称。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class Conv2D : public Operator {\n    typedef Conv2D _THIS_TYPE;\npublic:\n    explicit Conv2D(const char *name);\n    explicit Conv2D();\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "input",
      children: "INPUT"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注册算子输入信息成功后，自动生成算子输入的相关接口，用于获取算子输入的名称、设置算子输入的对应描述等。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["例如，注册算子输入x，算子输入支持的数据类型为TensorType{DT_FLOAT}，可调用", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "INPUT(x, TensorType{DT_FLOAT})"
        })
      }), " 接口，注册算子输入成功后，自动生成以下相关接口："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "static const string name_in_x(); // 返回输入的名称，即“x”\n_THIS_TYPE &set_input_x(Operator& v, const string& srcName); // 指定输入x与算子对象v的输出srcName存在连接关系，返回算子对象本身\n_THIS_TYPE &set_input_x_by_name(Operator& v, const char *srcName);   // 指定输入x与算子对象v的输出srcName存在连接关系，返回算子对象本身\n_THIS_TYPE &set_input_x(Operator &v, uint32_t index); // 指定输入x与算子对象v的索引为index的输出存在连接关系，返回算子对象本身\n_THIS_TYPE &set_input_x(Operator& v); // 指定输入x与算子对象v的索引0的输出存在连接关系，返回算子对象本身\nTensorDesc get_input_desc_x(); // 返回输入x对应的描述\ngraphStatus update_input_desc_x(const TensorDesc& tensorDesc);// 设置输入x对应的描述，包括Shape、DataType、Format等信息，graphStatus即uint32_t类型，返回非0表示出错\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "optional_input",
      children: "OPTIONAL_INPUT"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注册可选算子输入信息成功后，自动生成算子输入的相关接口，用于获取算子输入的名称、设置算子输入的对应描述等。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["例如，注册算子输入b，算子输入支持的数据类型为TensorType{DT_FLOAT}，可调用", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "OPTIONAL_INPUT(b, TensorType{DT_FLOAT})"
        })
      }), " 接口，注册算子输入成功后，自动生成以下相关接口："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "static const string name_in_b(); // 返回输入的名称，即“b”\n_THIS_TYPE& set_input_b(Operator& v, const string& srcName);// 指定输入b与算子对象v的输出srcName存在连接关系，返回算子对象本身\n_THIS_TYPE& set_input_b_by_name(Operator& v, const char *srcName);// 指定输入b与算子对象v的输出srcName存在连接关系，返回算子对象本身\n_THIS_TYPE& set_input_b(Operator& v); // 指定输入b与算子对象v的索引0的输出存在连接关系，返回算子对象本身\nTensorDesc get_input_desc_b(); // 返回输入b对应的描述\ngraphStatus update_input_desc_b(const TensorDesc& tensorDesc);// 设置输入b对应的描述，包括Shape、DataType、Format等信息\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "dynamic_input",
      children: "DYNAMIC_INPUT"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注册动态算子输入信息成功后，自动生成算子输入的相关接口，用于创建动态输入、设置算子输入的对应描述等。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["例如，注册算子的动态输入d，算子输入支持的数据类型为TensorType{DT_FLOAT}，可调用", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "DYNAMIC_INPUT(d, TensorType{DT_FLOAT})"
        })
      }), " 接口，注册算子的动态输入成功后，自动生成以下相关接口："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "_THIS_TYPE& create_dynamic_input_d(unsigned int num); // 创建动态输入d，包括num个输入，并且把这个输入做为算子最后的输入\n_THIS_TYPE &create_dynamic_input_byindex_d(unsigned int num, size_t index) // 创建动态输入d，包括num个输入，插入到索引为index的位置，和create_dynamic_input_d不能同时使用\nTensorDesc get_dynamic_input_desc_d(unsigned int index);// 返回动态输入d第index个描述，包括Shape、DataType、Format等信息\ngraphStatus update_dynamic_input_desc_d(unsigned int index, const TensorDesc& tensorDesc);// 更新动态输入d的第index个描述\n_THIS_TYPE& set_dynamic_input_d(unsigned int dstIndex, Operator &v); // 设置输入d的第dstIndex个输入与算子对象v的索引0的输出存在连接关系，返回算子对象本身\n_THIS_TYPE& set_dynamic_input_d(unsigned int dstIndex, Operator &v, const string &srcName); // 指定动态输入d的第dstIndex个输入与算子对象v的输出srcName存在连接关系，返回算子对象本身\n_THIS_TYPE& set_dynamic_input_d(unsigned int dstIndex, Operator &v, const char *srcName); // 指定动态输入d的第dstIndex个输入与算子对象v的输出srcName存在连接关系，返回算子对象本身\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "output",
      children: "OUTPUT"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注册算子输出信息成功后，自动生成算子输出的相关接口，开发者获取算子输出的名称、获取算子输出的描述、设置算子输出的描述。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["例如，注册算子输出y，算子输出支持的数据类型为TensorType{DT_FLOAT}，可调用", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "OUTPUT(y, TensorType{DT_FLOAT})"
        })
      }), " 接口，注册算子输出成功后，自动生成以下相关接口："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "static const string name_out_y();// 返回输出的名称，即“y”\nTensorDesc get_output_desc_y();// 返回输出y对应的描述\ngraphStatus update_output_desc_y(const TensorDesc& tensorDesc); // 设置输出y对应的描述，包括Shape、DataType、Format等信息\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "dynamic_output",
      children: "DYNAMIC_OUTPUT"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注册动态算子输出信息成功后，自动生成动态算子输出的相关接口，包括用于创建动态输出、设置算子输出的对应描述等。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["例如，注册动态算子输出d，算子输出支持的数据类型为TensorType{DT_FLOAT}，可调用", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "DYNAMIC_OUTPUT(d, TensorType{DT_FLOAT})"
        })
      }), " 接口，注册动态算子输出成功后，自动生成以下相关接口："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "_THIS_TYPE& create_dynamic_output_d(unsigned int num); // 创建动态输出d，包括num个输出\nTensorDesc get_dynamic_output_desc_d(unsigned int index);// 返回动态输出d第index个描述，包括Shape、DataType、Format等信息\ngraphStatus update_dynamic_output_desc_d(unsigned int index, const TensorDesc& tensorDesc);// 更新动态输出d的第index个描述\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "required_attr",
      children: "REQUIRED_ATTR"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注册算子属性成功后，自动生成算子属性的3个对外接口，用于获取属性的名称、获取属性的值、设置属性的值。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["例如，注册类型为int64_t的属性mode，可调用", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "REQUIRED_ATTR(mode, Int)"
        })
      }), " 接口，注册算子属性成功后，会自动生成如下接口："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "static const string name_attr_mode(); // 返回属性的名称，即“mode”\nstatic const void name_attr_mode(AscendString &attr_name);// 出参获取属性的名称，即“mode”\nOpInt get_attr_mode() const; // 返回mode属性的值，OpInt即int64_t\n_THIS_TYPE& set_attr_mode(const OpInt& v); // 设置mode属性的值，返回算子对象本身\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "attr",
      children: "ATTR"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注册算子属性成功后，自动生成算子属性的3个对外接口，用于获取属性的名称、获取属性的值、设置属性的值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下面以注册类型为int64_t的属性、类型为int64_t列表两种场景为例，说明所生成的算子属性接口："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用ATTR(mode, Int, 1)接口，注册属性mode，属性类型为int64_t，默认值为1。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "注册属性成功后，自动生成以下接口："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "static const string name_attr_mode(); // 返回属性的名称，即“mode”\n static const void name_attr_mode(AscendString &attr_name);// 出参获取属性的名称，即“mode”\n OpInt get_attr_mode() const; // 返回mode属性的值，OpInt即int64_t\n _THIS_TYPE& set_attr_mode(const OpInt& v); // 设置mode属性的值，返回算子对象本身\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用ATTR(pad, ListInt, {0, 0, 0, 0})接口，注册属性pad，属性类型为int64_t列表，默认值为{0,0,0,0}。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "注册属性成功后，自动生成以下接口："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "static const string name_attr_pad(); // 返回属性的名称，即“pad”\n static const void name_attr_pad(AscendString &attr_name);// 出参获取属性的名称，即“pad”\n OpListInt get_attr_pad() const;  // 返回属性pad的值，OpListInt即vector<int64_t> \n _THIS_TYPE& set_attr_pad(const OpListInt& v); // 设置属性pad的值，返回算子对象本身\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下面以注册类型为string属性场景为例，说明所生成的算子属性接口："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "调用ATTR(data_format, String, \"NHWC\")接口，注册属性data_format，属性类型为string。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "static const string name_attr_data_format(); // 返回属性的名称，即“data_format”\nstatic const void name_attr_data_format(AscendString &attr_name);// 出参获取属性的名称，即“data_format”\nOpString get_attr_data_format() const; // 返回data_format属性的值，OpString即string\ngraphStatus get_attr_data_format(AscendString &val);// 出参返回data_format属性的值\n_THIS_TYPE& set_attr_data_format(const string& v); // 设置data_format属性的值，返回算子对象本身\n_THIS_TYPE& set_attr_data_format(const char* v); // 设置data_format属性的值，返回算子对象本身\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "graph",
      children: "GRAPH"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注册算子子图信息成功后，自动生成算子子图的相关接口，开发者获取算子子图的名称、获取算子子图的描述、设置算子子图的描述。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["例如，注册算子子图y，可调用", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "GRAPH(y)"
        })
      }), " 接口，注册算子子图成功后，自动生成以下相关接口："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "static const string name_graph_y();// 返回算子子图的名称，即“y”\nSubgraphBuilder get_subgraph_builder_y() const;// 返回子图y对应的构建函数对象\n_THIS_TYPE &set_subgraph_builder_y(const SubgraphBuilder &v);// 设置子图y对应的构建函数对象\nGraph get_subgraph_y() const;// 获取子图y对应的graph对象\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "dynamic_graph",
      children: "DYNAMIC_GRAPH"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注册动态算子子图信息成功后，自动生成动态算子子图的相关接口，包括用于创建动态子图、设置算子子图的对应描述等。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["例如，注册动态算子子图branches，可调用", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "DYNAMIC_GRAPH(branches)"
        })
      }), " 接口，注册动态算子子图成功后，自动生成以下相关接口："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "_THIS_TYPE& create_dynamic_subgraph_branches(unsigned int num); // 创建动态子图branches，包括num个子图\nSubgraphBuilder get_dynamic_subgraph_builder_branches(unsigned int index) ;// 返回动态输子图第index个子图构建函数对象\nGraph get_dynamic_subgraph_branches(unsigned int index) ;// 返回动态输子图第index个子图对象\n_THIS_TYPE &set_dynamic_subgraph_builder_branches(unsigned int index,const SubgraphBuilder &v);// 设置动态子图branches的第index个子图构建函数对象\n"
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