"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["523740"], {
598133(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_ascendc_operator_interface_cannkit_basic_data_structure_and_apis_cannkit_gert_namespace_cannkit_internal_associated_apis_cannkit_internal_associated_apis_md_8ba_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cann-kit-guide-cannkit-ascendc-operator-development-cannkit-ascendc-operator-interface-cannkit-basic-data-structure-and-apis-cannkit-gert-namespace-cannkit-internal-associated-apis-cannkit-internal-associated-apis-md-8ba.json
var site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_ascendc_operator_interface_cannkit_basic_data_structure_and_apis_cannkit_gert_namespace_cannkit_internal_associated_apis_cannkit_internal_associated_apis_md_8ba_namespaceObject = JSON.parse('{"id":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-gert-namespace/cannkit-internal-associated-apis/cannkit-internal-associated-apis","title":"内部关联接口","description":"在进行算子原型注册、Tiling实现、shape推导过程中，使用到的外部开放接口中会调用到一些辅助数据结构和接口，称之为*内部关联接口*。开发者不会直接调用内部关联接口，此处仅作简单介绍。","source":"@site/docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-gert-namespace/cannkit-internal-associated-apis/cannkit-internal-associated-apis.md","sourceDirName":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-gert-namespace/cannkit-internal-associated-apis","slug":"/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-gert-namespace/cannkit-internal-associated-apis/","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-gert-namespace/cannkit-internal-associated-apis/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":24,"frontMatter":{"title":"内部关联接口","sidebar_position":24,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-internal-associated-apis","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"TensorPlacement","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-gert-namespace/cannkit-tensorplacement/"},"next":{"title":"构造函数和析构函数","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-allocator/cannkit-allocator-construction-and-destructor/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-gert-namespace/cannkit-internal-associated-apis/cannkit-internal-associated-apis.md


const frontMatter = {
	title: '内部关联接口',
	sidebar_position: 24,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-internal-associated-apis',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = '内部关联接口';

const assets = {

};



const toc = [{
  "value": "KernelContext类",
  "id": "kernelcontext类",
  "level": 2
}, {
  "value": "TilingParseContext类",
  "id": "tilingparsecontext类",
  "level": 2
}, {
  "value": "Chain类",
  "id": "chain类",
  "level": 2
}, {
  "value": "ContinuousBuffer类",
  "id": "continuousbuffer类",
  "level": 2
}, {
  "value": "KernelExtendInfo类",
  "id": "kernelextendinfo类",
  "level": 2
}, {
  "value": "TensorOperateType",
  "id": "tensoroperatetype",
  "level": 2
}, {
  "value": "StructSizeInfoBase类",
  "id": "structsizeinfobase类",
  "level": 2
}, {
  "value": "TilingDataStructBase类",
  "id": "tilingdatastructbase类",
  "level": 2
}, {
  "value": "数值计算校验相关接口",
  "id": "数值计算校验相关接口",
  "level": 2
}, {
  "value": "OpExecuteContext类",
  "id": "opexecutecontext类",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    p: "p",
    pre: "pre",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "内部关联接口",
        children: "内部关联接口"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在进行算子原型注册、Tiling实现、shape推导过程中，使用到的外部开放接口中会调用到一些辅助数据结构和接口，称之为", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "内部关联接口"
        })
      }), "。开发者不会直接调用内部关联接口，此处仅作简单介绍。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "kernelcontext类",
      children: "KernelContext类"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本类是对底层数据结构KernelRunContext的包装，包含kernel执行时所需的算子输入、输出个数信息以及输入输出数据信息、compute_node_info和kernel_extend_info。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表1"
        })
      }), " KernelContext类成员函数"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "接口功能"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GetInput"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取输入的Chain指针。Chain是一个可以用来保存任意类型数据的类。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GetInputNum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取kernel的输入数量。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GetInputPointer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取输入数据的指针，本函数首先获取输入Chain，然后从输入Chain中获取指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GetInputStrPointer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取输入字符串的指针，本函数首先获取输入Chain，然后从输入Chain中获取指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GetInputValue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取输入数据的值，本函数首先获取输入Chain，然后从输入Chain中获取值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GetOutput"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取输出的Chain指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GetOutput2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取输出的Chain指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GetOutputNum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取kernel的输出数量。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GetOutputPointer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取输出数据的指针，本函数首先获取输出Chain，然后从Chain中获取指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GetContext"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取底层的context结构体。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GetKernelExtend"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取kernel扩展信息的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GetComputeNodeExtend"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取计算节点信息的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MutableInput"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取输入的Chain指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MutableInputPointer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取输入数据的指针，本函数首先获取输入Chain，然后从输入Chain中获取指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IsInlineSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据数据的长度判断一个数据是否会被inline存储，所谓inline存储是指此数据保存在context中时不需要单独分配内存。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "tilingparsecontext类",
      children: "TilingParseContext类"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于TilingParse所需的信息保存在本类中，本类为编写算子的TilingParse函数时提供上下文信息，在TilingParse时可以从本类中获取所需的信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表2"
        })
      }), " TilingParseContext类成员函数"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "接口功能"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GetCompiledJson"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取算子编译产生的json字符串。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GetCompiledInfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取CompiledInfo实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GetPlatformInfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取fe::PlatFormInfos指针。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chain类",
      children: "Chain类"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Chain是一个可以用来保存任意类型数据的类。通过其Set接口保存数据，通过GetPointer或者GetValue方法获取保存的数据。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表3"
        })
      }), " Chain类成员函数"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "接口功能"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GetPointer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取指向Chain中保存数据的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GetValue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取Chain中保存的数据的值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Set"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将数据设置到Chain中。设置数据指针时，会尝试调用deleter将原有保存在Chain的数据删除。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SetWithDefaultDeleter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将数据设置到Chain中。设置数据指针时，会尝试调用deleter将原有保存在Chain的数据删除。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HasDeleter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断当前Chain中保存的数据是否有deleter。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "continuousbuffer类",
      children: "ContinuousBuffer类"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ContinuousBuffer类用于连续存储任意类型的数据，每个数据被转成uint8_t数组进行存储，每个存储单元称为一个buffer。ContinuousBuffer使用两个属性来描述被存储的数据，分别是存储buffer的个数以及每个buffer对应的内存偏移量offsets_。每个buffer在内存上是连续的。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表4"
        })
      }), " ContinuousBuffer类成员函数"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "接口功能"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GetNum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取buffer的数量。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GetTotalLength"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取本实例的总长度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Get"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取buffer指针、长度信息。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "kernelextendinfo类",
      children: "KernelExtendInfo类"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本类是用于保存的kernel运行时的额外信息，包括kernel的名字、类型、用于profiling注册的kernel type的index以及计算节点名的index。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表5"
        })
      }), " KernelExtendInfo类成员函数"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "接口功能"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GetKernelName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取kernel name。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SetKernelName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置kernel name。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GetKernelType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取kernel type。一个算子可以对应多个kernel，也就对应多个kernel type。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SetKernelType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置kernel type。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SetKernelTypeIdx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置kernel_type_idx_，用于profiling。profiling时设置的kernel type字符串对应的idx，用idx代替kernel type字符串作为标识，提升速度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SetNodeNameIdx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置compute_node_name_idx_，用于profiling。profiling时，用idx代替node name字符串作为标识，提升速度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GetNodeNameIdx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取compute_node_name_idx_，用于profiling。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GetKernelTypeIdx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取kernel_type_idx_，用于profiling。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "tensoroperatetype",
      children: "TensorOperateType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum TensorOperateType {\n  kGetTensorAddress,  // < 获取Tensor的地址\n  kFreeTensor,        // < 释放Tensor\n  kPlusShareCount,    // < 共享Tensor\n  kTensorOperateType\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "structsizeinfobase类",
      children: "StructSizeInfoBase类"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "StructSizeInfoBase类用来存放、获取AscendC高阶API和开发者自定义的tiling结构体大小，通过单例实现一个结构体信息库。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表6"
        })
      }), " StructSizeInfoBase类成员函数"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "函数名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "含义"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GetInstance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取StructSizeInfoBase类的单例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SetStructSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置高阶API/开发者自定义tiling结构大小。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GetStructSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取高阶API/开发者自定义tiling结构大小。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "tilingdatastructbase类",
      children: "TilingDataStructBase类"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "TilingDataStructBase的类，用于记录Tiling结构体构造过程信息。提供以下接口："
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表7"
        })
      }), " TilingDataStructBase类成员函数"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "函数名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "含义"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GetInstance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取TilingDataStructBase类的单例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RecordTilingStruct"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于框架检查不同算子注册同名不同结构tiling结构体情况，若出现则会打印warning信息。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "数值计算校验相关接口",
      children: "数值计算校验相关接口"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "框架内部使用的数值计算校验相关接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表8"
        })
      }), " 接口说明"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "函数名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "含义"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MulOverflow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断乘法数值运算是否溢出。其中溢出的判断条件为乘积后的数值大于ret类型TRet所能表示的最大值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AddOverflow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断加法数值运算是否溢出。其中溢出的判断条件为相加后的数值大于ret类型TRet所能表示的最大值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Compat"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断入参的数值是否超过指定类型T所能表示的数值范围。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "opexecutecontext类",
      children: "OpExecuteContext类"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本类用于保存图模式下调用单算子执行API场景下的上下文。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表9"
        })
      }), " OpExecuteContext类成员函数"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "函数名称含义"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "含义"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GetInputTensor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取指定索引输入的Tensor。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GetOptionalInputTensor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取指定索引的可选输入的Tensor。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GetDynamicInputTensor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取指定索引的动态个数输入的Tensor。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GetRequiredInputTensor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取指定索引的必选输入的Tensor。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GetOutputTensor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取指定索引输出的Tensor。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GetDynamicOutputTensor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取指定索引的动态个数输出的Tensor。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GetRequiredOutputTensor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取指定索引的必选输出的Tensor。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GetStream"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取下发算子的流信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GetOpExecuteFunc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取多kernel算子的执行回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MallocWorkspace"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "分配workspace内存。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FreeWorkspace"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "释放workspace内存。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GetDeterministic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取确定性计算配置选项。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GetAllowHf32"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取allow_hf32配置选项。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GetPrecisionMode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取精度模式配置选项。"
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