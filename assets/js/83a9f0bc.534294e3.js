"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["449402"], {
446149(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_ascendc_operator_interface_cannkit_basic_data_structure_and_apis_cannkit_basic_data_structure_and_api_list_cannkit_basic_data_structure_and_api_list_md_83a_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cann-kit-guide-cannkit-ascendc-operator-development-cannkit-ascendc-operator-interface-cannkit-basic-data-structure-and-apis-cannkit-basic-data-structure-and-api-list-cannkit-basic-data-structure-and-api-list-md-83a.json
var site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_ascendc_operator_interface_cannkit_basic_data_structure_and_apis_cannkit_basic_data_structure_and_api_list_cannkit_basic_data_structure_and_api_list_md_83a_namespaceObject = JSON.parse('{"id":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-basic-data-structure-and-api-list/cannkit-basic-data-structure-and-api-list","title":"基础数据结构和接口列表","description":"本文档提供了进行算子开发和图开发时依赖的基础数据结构和接口说明，按照命名空间进行分类：","source":"@site/docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-basic-data-structure-and-api-list/cannkit-basic-data-structure-and-api-list.md","sourceDirName":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-basic-data-structure-and-api-list","slug":"/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-basic-data-structure-and-api-list/","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-basic-data-structure-and-api-list/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"基础数据结构和接口列表","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-basic-data-structure-and-api-list","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"ICPU_SET_TILING_KEY","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-operator-debugging-apis/cannkit-icpu-set-tiling-key/"},"next":{"title":"简介","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-gert-namespace/cannkit-anchorinstanceinfo/cannkit-anchorinstanceinfo-introduction/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-basic-data-structure-and-api-list/cannkit-basic-data-structure-and-api-list.md


const frontMatter = {
	title: '基础数据结构和接口列表',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-basic-data-structure-and-api-list',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = '基础数据结构和接口列表';

const assets = {

};



const toc = [{
  "value": "gert命名空间",
  "id": "gert命名空间",
  "level": 2
}, {
  "value": "ge命名空间",
  "id": "ge命名空间",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
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
        id: "基础数据结构和接口列表",
        children: "基础数据结构和接口列表"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本文档提供了进行算子开发和图开发时依赖的基础数据结构和接口说明，按照命名空间进行分类："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ge（Graph Engine）"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ge是Graph Engine的缩写，代表一个通用的命名空间，专注于构图和图编译处理。此命名空间提供了一套丰富的API，用于构建和管理复杂的图结构。它的核心优势在于其通用性和灵活性，能够满足各种图处理需求，无论是在设计阶段还是在编译过程中。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "gert（GE Runtime）"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "gert是GE Runtime的缩写，这个命名空间专门为运行时环境而设计，提供了一系列的高性能数据结构，以确保在执行时能够提供最佳性能。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "gert命名空间",
      children: "gert命名空间"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表1"
        })
      }), " gert命名空间"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "分类"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "数据结构/接口名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "功能描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "类和结构体"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-gert-namespace/cannkit-anchorinstanceinfo/cannkit-anchorinstanceinfo-introduction",
              children: "AnchorInstanceInfo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用来描述一个算子的IR定义原型的输入信息与实际输入之间的关系。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "类和结构体"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-gert-namespace/cannkit-compiletimetensordesc/cannkit-compiletimetensordesc-constructor",
              children: "CompileTimeTensorDesc"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于描述编译时的Tensor描述信息，包含dtype信息以及format信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "类和结构体"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-gert-namespace/cannkit-computenodeinfo/cannkit-computenodeinfo-introduction",
              children: "ComputeNodeInfo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于将算子的相关编译信息进行序列化保存，以便可以在图执行阶段能够高效地获取这些信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "类和结构体"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-gert-namespace/cannkit-continuousvectorvector/cannkit-continuousvectorvector-introduction",
              children: "ContinuousVectorVector"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在内存中开辟一块连续的空间，用于存储数据的描述信息以及实际的数据元素，元素类型为ContinuousVector结构。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "类和结构体"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-gert-namespace/cannkit-continuousvector/cannkit-continuousvector-introduction",
              children: "ContinuousVector"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "本类是一个POD类，在内存中开辟一块连续的空间用于存储描述信息以及实际内存数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "类和结构体"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-gert-namespace/cannkit-expanddimstype/cannkit-expanddimstype-introduction",
              children: "ExpandDimsType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ExpandDimsType类基于补维后的shape，描述了补维规则。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "类和结构体"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-gert-namespace/cannkit-extendedkernelcontext/cannkit-getinputdesc",
              children: "ExtendedKernelContext"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-gert-namespace/cannkit-infershapecontext/cannkit-infershapecontext-getinputshape",
              children: "InferShapeContext"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-gert-namespace/cannkit-tilingcontext/cannkit-getinputshape",
              children: "TilingContext"
            }), "等的基类，ExtendedKernelContext中提供的方法如获取算子type、name、属性等接口均可以在InferShape、Tiling时调用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "类和结构体"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-gert-namespace/cannkit-inferdatatypecontext/cannkit-getinputdatatype",
              children: "InferDataTypeContext"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于datatype推导的上下文结构。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "类和结构体"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-gert-namespace/cannkit-infershapecontext/cannkit-infershapecontext-getinputshape",
              children: "InferShapeContext"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于shape推导的上下文结构。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "类和结构体"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-gert-namespace/cannkit-infershaperangecontext/cannkit-getinputshaperange",
              children: "InferShapeRangeContext"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于shape range推导的上下文结构。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "类和结构体"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-gert-namespace/cannkit-opimpiregisterv2/cannkit-opimpiregisterv2-construction",
              children: "OpImplRegisterV2"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OpImplRegisterV2类作为注册接口类，提供了一系列算子原型注册接口，供开发者注册指定算子类型的Tiling函数、Infershape函数、私有属性等信息。开发者调用算子原型注册接口进行注册时会间接使用到该类。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "类和结构体"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-gert-namespace/cannkit-range/cannkit-range-introduction",
              children: "Range"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Range类用于描述一个对象的上下界。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "类和结构体"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-gert-namespace/cannkit-runtimeattrs/cannkit-constructor",
              children: "RuntimeAttrs"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于保存算子属性。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "类和结构体"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-gert-namespace/cannkit-shape/cannkit-shape-introduction",
              children: "Shape"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shape结构体用于描述一个tensor的shape。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "类和结构体"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-gert-namespace/cannkit-storageformat/cannkit-storageformat-constructor",
              children: "StorageFormat"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "StorageFormat格式包括原始格式、运行时格式、补维规则。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "类和结构体"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-gert-namespace/cannkit-storageshape/cannkit-storageshape-introduction",
              children: "StorageShape"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该类描述了tensor的shape，包含两个信息：origin_shape以及storage_shape。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "类和结构体"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-gert-namespace/cannkit-tilingdata/cannkit-tilingdata-constructor",
              children: "TilingData"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于存储Tensor数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "类和结构体"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-gert-namespace/cannkit-tensorplacementutils",
              children: "TensorPlacementUtils"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "提供一组函数，用于判断TensorPlacement的位置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "类和结构体"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-gert-namespace/cannkit-tensor/cannkit-tensor-constructor",
              children: "Tensor"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tensor类用来描述一个tensor对象的信息以及行为，包含：shape信息、format信息、datatype信息以及tensor数据内容tensordata。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "类和结构体"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-gert-namespace/cannkit-tilingcontext/cannkit-getinputshape",
              children: "TilingContext"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于算子Tiling的上下文结构。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "类和结构体"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-gert-namespace/cannkit-tilingdata/cannkit-tilingdata-constructor",
              children: "TilingData"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于存储Tiling数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "类和结构体"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-gert-namespace/cannkit-typedcontinuousvector/cannkit-typedcontinuousvector-introduction",
              children: "TypedContinuousVector"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "本类继承自ContinuousVector类，与ContinuousVector类不同的是MutableData和GetData返回的是指定类型的地址，而不是void *。因此称为Typed。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "枚举"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-gert-namespace/cannkit-tensorplacement",
              children: "TensorPlacement"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表达Tensor存储位置的枚举值。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ge命名空间",
      children: "ge命名空间"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表2"
        })
      }), " ge命名空间"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "分类"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "数据结构/接口名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "功能描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "类和结构体"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-allocator/cannkit-allocator-construction-and-destructor",
              children: "Allocator"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持使用开发者注册的外置allocator功能，所在头文件位于CANN软件安装后文件存储路径下的“include/ge/ge_allocator.h”路径。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "类和结构体"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-ascendstring/cannkit-ascendstring-construction-and-destructor",
              children: "AscendString"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于存储字符串。  - 头文件位于CANN软件安装后文件存储路径下的include/graph/ascend_string.h  - 库文件：libgraph.so"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "类和结构体"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-attrvalue/cannkit-attrvalue-construction-and-destructor",
              children: "AttrValue"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于存储属性值。  - 头文件位于CANN软件安装后文件存储路径下的include/graph/attr_value.h  - 库文件：libgraph_base.so"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "类和结构体"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-automappingsubgraphioindexfuncregister",
              children: "AutoMappingSubgraphIOIndexFuncRegister"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "内部关联接口，插件适配API调用时间接调用，开发者不直接感知。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "类和结构体"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-frameworkregistry/cannkit-frameworkregistry-construction",
              children: "FrameworkRegistry"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "内部关联接口，插件适配API调用时间接调用，开发者不直接感知。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "类和结构体"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-inferencecontext/cannkit-inferencecontext-construction",
              children: "InferenceContext"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取推理上下文对象，并设置相应对象的形状和数据类型，主要用于资源类算子。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "类和结构体"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-inferformatfuncregister",
              children: "InferFormatFuncRegister"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "算子InferFormat函数注册接口，此接口被其他头文件引用，一般不用由算子开发者直接调用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "类和结构体"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-infershapefuncregister",
              children: "InferShapeFuncRegister"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "算子InferShape函数注册接口，此接口被其他头文件引用，一般不用由算子开发者直接调用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "类和结构体"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-infervaluerangefuncregister",
              children: "InferValueRangeFuncRegister"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "算子InferValueRangeFuncRegister函数注册接口，此接口被其他头文件引用，一般不由算子开发者直接调用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "类和结构体"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-listtensortype",
              children: "ListTensorType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ListTensorType类用以定义输入或者输出支持的数据类型，是TensorType的封装，用于标识支持多个数据类型的情况。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "类和结构体"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-memblock/cannkit-memblock-construction-and-destructor",
              children: "MemBlock"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["配合", (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-allocator/cannkit-allocator-construction-and-destructor",
              children: "Allocator"
            }), "类使用，支持使用开发者注册的外置allocator功能，所在头文件位于CANN软件安装后文件存储路径下的“include/ge/ge_allocator.h”路径。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "类和结构体"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-operatorcreatorregister",
              children: "OperatorCreatorRegister"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "算子注册接口，注册一个算子原型，此接口被其他头文件引用，一般不用由算子开发者直接调用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "类和结构体"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-operatorfactory/cannkit-createoperator",
              children: "OperatorFactory"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "内部关联接口，此接口被其他头文件引用，一般不用由算子开发者直接调用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "类和结构体"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-ge-operator/cannkit-operator-construction-and-destructor",
              children: "Operator"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "算子类。  - 头文件位于CANN软件安装后文件存储路径下的include/graph/operator.h  - 库文件：libgraph.so"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "类和结构体"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-opreceiver",
              children: "OpReceiver"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于算子编写适配插件进行AI框架适配时，进行映射关系注册。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "类和结构体"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-opregistrationdata/cannkit-general-description",
              children: "OpRegistrationData"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于算子编写适配插件进行AI框架适配时，进行映射关系注册。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "类和结构体"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-promote",
              children: "Promote"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promote类用于表示输出数据类型为输入或属性指定的数据类型间的提升类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "类和结构体"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-shapeandtype/cannkit-shapeandtype-construction-and-destructor",
              children: "ShapeAndType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可设置、获取相应对象的形状和数据类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "类和结构体"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-ge-shape/cannkit-shape-construction-and-destructor",
              children: "Shape"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于存储Tensor的shape信息。  - 头文件位于CANN软件安装后文件存储路径下的include/graph/tensor.h  - 库文件：libgraph_base.so"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "类和结构体"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-tensordescinfo",
              children: "TensorDescInfo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "存储Tensor描述信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "类和结构体"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-tensordesc/cannkit-tensordesc-construction-and-destructor",
              children: "TensorDesc"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于存取、管理Tensor描述信息。  - 头文件位于CANN软件安装后文件存储路径下的include/graph/tensor.h  - 库文件：libgraph_base.so"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "类和结构体"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-tensortype",
              children: "TensorType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TensorType类用以定义输入或者输出支持的数据类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "类和结构体"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-ge-tensor/cannkit-tensor-construction-and-destructor",
              children: "Tensor"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tensor结构。  - 头文件位于CANN软件安装后文件存储路径下的include/graph/tensor.h  - 库文件：libgraph_base.so"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "类和结构体"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-typeutils/cannkit-datatypetoascendstring",
              children: "TypeUtils"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "类型转换工具类。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "类和结构体"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-verifyfuncregister",
              children: "VerifyFuncRegister"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "算子verifyFunc函数注册接口，此接口被其他头文件引用，一般不用由算子开发者直接调用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "函数"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-converttoascendstring",
              children: "ConvertToAscendString"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模板函数，接受一个模板参数T，并将其转换为AscendString类型。这个函数的主要功能是将不同类型的字符串转换为AscendString类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "函数"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-converttolistascendstring",
              children: "ConvertToListAscendString"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义了一个模板函数ConvertToListAscendString，用于将不同类型的字符串列表转换为AscendString类型的列表。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "函数"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-getc0format",
              children: "GetC0Format"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据实际format获取C0 format的值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "函数"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-getc0value",
              children: "GetC0Value"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从实际format中解析出c0 format信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "函数"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-getformatfromc0",
              children: "GetFormatFromC0"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据传入的format和c0format信息得到实际的format。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "函数"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-getformatfromsub",
              children: "GetFormatFromSub"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据传入的主format和子format信息得到实际的format。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "函数"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-getformatfromsubandc0",
              children: "GetFormatFromSubAndC0"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据传入的主format，子format和c0format信息得到实际的format。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "函数"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-getformatname",
              children: "GetFormatName"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据传入的format类型，获取format的字符串描述。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "函数"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-getprimaryformat",
              children: "GetPrimaryFormat"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从实际format中解析出主format信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "函数"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-getsizebydatatype",
              children: "GetSizeByDataType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据传入的data_type，获取该data_type所占用的内存大小。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "函数"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-getsizeinbytes",
              children: "GetSizeInBytes"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据传入的element_count和data_type，获取element_count个该data_type所占用的内存总大小。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "函数"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-getsubformat",
              children: "GetSubFormat"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从实际format中解析出子format信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "函数"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-hasc0format",
              children: "HasC0Format"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断实际format中是否包含C0 format。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "函数"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-hassubformat",
              children: "HasSubFormat"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断实际format中是否包含子format。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "类型定义"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-gegraphstatus",
              children: "ge::graphStatus"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回码状态说明。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "枚举"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-ge-datatype",
              children: "DataType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数据类型枚举值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "枚举"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-ge-format",
              children: "Format"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数据格式枚举值"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "宏"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-broadcast-infer",
              children: "BROADCAST_INFER"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "提供公共函数宏封装，供算子开发者开发InferShape函数。该函数基于2个输入的shape，设置输出的shape。该宏只是设置shape，未设置dtype。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "宏"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-common-infer-func-reg",
              children: "COMMON_INFER_FUNC_REG"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册算子的InferShape函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "宏"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-declare-errorno",
              children: "DECLARE_ERRORNO"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "错误码及描述注册宏。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "宏"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-elmtwise-infer-shapeandtype",
              children: "ELMTWISE_INFER_SHAPEANDTYPE"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "提供公共函数宏封装，供算子开发者开发InferShape函数。该函数基于输入的shape和dtype，设置输出的shape和dtype。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "宏"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-implemt-common-inferfunc",
              children: "IMPLEMT_COMMON_INFERFUNC"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "封装算子的Common_InferShape函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "宏"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-implemt-inferformat-func",
              children: "IMPLEMT_INFERFORMAT_FUNC"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "封装算子的inferFormat函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "宏"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-implemt-inferfunc",
              children: "IMPLEMT_INFERFUNC"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "封装算子的InferShape函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "宏"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-implemt-verifier",
              children: "IMPLEMT_VERIFIER"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "封装算子的Verify函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "宏"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-infer-format-func-reg",
              children: "INFER_FORMAT_FUNC_REG"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册算子的InferFormat实现。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "宏"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-infer-func-reg",
              children: "INFER_FUNC_REG"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册算子的InferShape函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "宏"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-prototype-definition-api",
              children: "原型定义接口（REG_OP）"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "原型定义接口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "宏"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-prototype-definition-derivative-api",
              children: "原型定义衍生接口说明"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "原型定义衍生接口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "宏"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-verify-func-reg",
              children: "VERIFY_FUNC_REG"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册算子的Verify函数。"
          })]
        })]
      })]
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