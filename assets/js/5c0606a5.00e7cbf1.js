"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["173094"], {
994128(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_custom_operator_development_cannkit_operator_implementation_cannkit_project_based_operator_development_cannkit_operator_based_on_engineering_cannkit_tiling_implementation_on_5c0_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cann-kit-guide-cannkit-ascendc-operator-development-cannkit-custom-operator-development-cannkit-operator-implementation-cannkit-project-based-operator-development-cannkit-operator-based-on-engineering-cannkit-tiling-implementation-on--5c0.json
var site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_custom_operator_development_cannkit_operator_implementation_cannkit_project_based_operator_development_cannkit_operator_based_on_engineering_cannkit_tiling_implementation_on_5c0_namespaceObject = JSON.parse('{"id":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-operator-implementation/cannkit-project-based-operator-development/cannkit-operator-based-on-engineering/cannkit-tiling-implementation-on-the-host/cannkit-tiling-implementation-on-the-host","title":"Host侧Tiling实现","description":"在算子实现章节已经介绍了host侧tiling核心的实现方法，本章节侧重于介绍接入DDK框架时编程模式和API的使用。","source":"@site/docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-operator-implementation/cannkit-project-based-operator-development/cannkit-operator-based-on-engineering/cannkit-tiling-implementation-on-the-host/cannkit-tiling-implementation-on-the-host.md","sourceDirName":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-operator-implementation/cannkit-project-based-operator-development/cannkit-operator-based-on-engineering/cannkit-tiling-implementation-on-the-host","slug":"/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-operator-implementation/cannkit-project-based-operator-development/cannkit-operator-based-on-engineering/cannkit-tiling-implementation-on-the-host/","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-operator-implementation/cannkit-project-based-operator-development/cannkit-operator-based-on-engineering/cannkit-tiling-implementation-on-the-host/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"Host侧Tiling实现","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-tiling-implementation-on-the-host","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Kernel侧算子实现","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-operator-implementation/cannkit-project-based-operator-development/cannkit-operator-based-on-engineering/cannkit-operator-implementation-on-the/"},"next":{"title":"算子工程编译","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-operator-implementation/cannkit-project-based-operator-development/cannkit-compilation-and-deployment/cannkit-operator-project-compilation/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-operator-implementation/cannkit-project-based-operator-development/cannkit-operator-based-on-engineering/cannkit-tiling-implementation-on-the-host/cannkit-tiling-implementation-on-the-host.md


const frontMatter = {
	title: 'Host侧Tiling实现',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-tiling-implementation-on-the-host',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = 'Host侧Tiling实现';

const assets = {

};



const toc = [{
  "value": "基本概念",
  "id": "基本概念",
  "level": 2
}, {
  "value": "TilingData",
  "id": "tilingdata",
  "level": 3
}, {
  "value": "BlockDim",
  "id": "blockdim",
  "level": 3
}, {
  "value": "TilingKey（可选）",
  "id": "tilingkey可选",
  "level": 3
}, {
  "value": "WorkspaceSize（可选）",
  "id": "workspacesize可选",
  "level": 3
}, {
  "value": "Tiling实现基本流程",
  "id": "tiling实现基本流程",
  "level": 2
}, {
  "value": "Tiling参数设计更多样例-属性信息通过TilingData传递",
  "id": "tiling参数设计更多样例-属性信息通过tilingdata传递",
  "level": 2
}, {
  "value": "Tiling参数设计更多样例-使用高阶API时配套的Tiling",
  "id": "tiling参数设计更多样例-使用高阶api时配套的tiling",
  "level": 2
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
        id: "host侧tiling实现",
        children: "Host侧Tiling实现"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-operator-implementation/cannkit-operator-implementation-overview",
        children: "算子实现"
      }), "章节已经介绍了host侧tiling核心的实现方法，本章节侧重于介绍接入DDK框架时编程模式和API的使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["大多数情况下，Local Memory的存储，无法完整的容纳算子的输入与输出，需要每次搬运一部分输入进行计算然后搬出，再搬运下一部分输入进行计算，直到得到完整的最终结果，这个数据切分、分块计算的过程称之为", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Tiling"
        })
      }), "。根据算子的shape等信息来确定数据切分算法相关参数（比如每次搬运的块大小，以及总共循环多少次）的计算程序，称之为", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Tiling实现"
        })
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tiling实现完成后，获取到的Tiling切分算法相关参数，会传递给kernel侧，用于指导并行数据的切分。由于Tiling实现中完成的均为标量计算，AI Core并不擅长，所以我们将其独立出来放在host CPU上执行。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1"
        })
      }), " Tiling实现的输入输出"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(789744)/* ["default"] */.A) + "",
        width: "220",
        height: "297"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如上图所示，Tiling实现即为根据算子shape等信息来确定切分算法相关参数的过程，这里的算子shape等信息可以理解为是", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Tiling实现的输入"
        })
      }), "，切分算法相关参数可以理解为是", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Tiling实现的输出"
        })
      }), "。输入和输出都通过Tiling函数的参数（TilingContext* context上下文结构）来承载。也就是说，开发者可以从上下文结构中获取算子的输入、输出以及属性信息，也就是", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Tiling实现的输入"
        })
      }), "，经过Tiling计算后，获取到TilingData数据结构（切分算法相关参数）、BlockDim变量、用于选择不同的kernel实现分支的TilingKey、算子workspace的大小，也就是", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Tiling实现的输出"
        })
      }), "，并将这些输出设置到上下文结构中。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "TilingData、BlockDim、TilingKey、workspace这些概念的具体解释如下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tilingdata",
      children: "TilingData"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "切分算法相关参数，比如每次搬运的块大小，以及总共循环多少次，通过结构体存储，由开发者自行设计。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "TilingData结构定义支持单结构定义方法，也支持结构体嵌套："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "单结构定义方法，以平铺的形式定义："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "namespace optiling {\n BEGIN_TILING_DATA_DEF(MyAddTilingData)  // 声明tiling结构名字\n   TILING_DATA_FIELD_DEF(uint32_t, field1);   // 结构成员的类型和名字\n   TILING_DATA_FIELD_DEF(uint32_t, field2);\n   TILING_DATA_FIELD_DEF(uint32_t, field3);\n END_TILING_DATA_DEF;\n   \n REGISTER_TILING_DATA_CLASS(MyAdd, MyAddTilingData)  // tiling结构注册给算子\n }\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "支持结构体嵌套："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "namespace optiling {\n TILING_DATA_FIELD_DEF_STRUCT(MyStruct1)  // 声明结构1名字\n   TILING_DATA_FIELD_DEF(uint32_t, field1);   // 结构成员的类型和名字\n   TILING_DATA_FIELD_DEF(uint32_t, field2);   // 结构成员的类型和名字\n END_TILING_DATA_DEF;\n REGISTER_TILING_DATA_CLASS(MyStruct1Op, MyStruct1) // 注册结构体到<op_type>Op\n  \n TILING_DATA_FIELD_DEF_STRUCT(MyStruct2)  // 声明结构2名字\n   TILING_DATA_FIELD_DEF(uint32_t, field3);   // 结构成员的类型和名字\n   TILING_DATA_FIELD_DEF(uint32_t, field4);   // 结构成员的类型和名字\n END_TILING_DATA_DEF;\n REGISTER_TILING_DATA_CLASS(MyStruct2Op, MyStruct2) // 注册结构体到<op_type>Op\n  \n BEGIN_TILING_DATA_DEF(MyAddTilingData)  // 声明tiling结构名字\n   TILING_DATA_FIELD_DEF_STRUCT(MyStruct1, st1);   // 结构成员的引用结构体\n   TILING_DATA_FIELD_DEF_STRUCT(MyStruct2, st2);   // 结构成员的引用结构体\n END_TILING_DATA_DEF;\n REGISTER_TILING_DATA_CLASS(MyAdd, MyAddTilingData)  // tiling结构注册给算子\n }\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Tiling实现函数中对tiling结构成员赋值的方式如下。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "MyAddTilingData myTiling;\nmyTiling.st1.set_field1(1);\nmyTiling.st1.set_field2(2);\nmyTiling.st2.set_field3(3);\nmyTiling.st2.set_field4(4);\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "blockdim",
      children: "BlockDim"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "规定了核函数将会在几个核上执行。例如，需要计算8M的数据，每个核上计算1M的数据，BlockDim设置为8，但是为了充分利用硬件资源，一般将BlockDim设置为硬件平台的核数，根据核数进行数据切分。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "BlockDim是逻辑核的概念，取值范围为[1, 65535]。为了充分利用硬件资源，一般设置为物理核的核数或其倍数。对于耦合架构和分离架构，BlockDim在运行时的意义和设置规则有一些区别，具体说明如下。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["耦合架构：由于其Vector、Cube单元是集成在一起的，BlockDim用于设置启动多个AICore核实例执行，不区分Vector、Cube。AI Core的核数可以通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-host-api/cannkit-platformascendc/cannkit-getcorenumaic",
            children: "GetCoreNumAic"
          }), "或者", (0,jsx_runtime.jsx)(_components.a, {
            href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-host-api/cannkit-platformascendc/cannkit-getcorenumaiv",
            children: "GetCoreNumAiv"
          }), "获取。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "分离架构："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "针对仅包含Vector计算的算子，BlockDim用于设置启动多少个Vector(AIV)实例执行，比如某款AI处理器上有40个Vector核，建议设置为40。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "针对仅包含Cube计算的算子，BlockDim用于设置启动多少个Cube(AIC)实例执行，比如某款AI处理器上有20个Cube核，建议设置为20。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "针对Vector/Cube融合计算的算子，启动时，按照AIV和AIC组合启动，BlockDim用于设置启动多少个组合执行，比如某款AI处理器上有40个Vector核和20个Cube核，一个组合是2个Vector核和1个Cube核，建议设置为20，此时会启动20个组合，即40个Vector核和20个Cube核。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(960165)/* ["default"] */.A) + "",
                width: "102",
                height: "38"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "该场景下，设置的BlockDim逻辑核的核数不能超过物理核（2个Vector核和1个Cube核组合为1个物理核）的核数。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["AIC/AIV的核数分别通过", (0,jsx_runtime.jsx)(_components.a, {
                href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-host-api/cannkit-platformascendc/cannkit-getcorenumaic",
                children: "GetCoreNumAic"
              }), "和", (0,jsx_runtime.jsx)(_components.a, {
                href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-host-api/cannkit-platformascendc/cannkit-getcorenumaiv",
                children: "GetCoreNumAiv"
              }), "接口获取。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Kirin9020/KirinX90仅支持BlockDim设为1。"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tilingkey可选",
      children: "TilingKey（可选）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "TilingKey是一个算子内为了区分不同的实现而将kernel代码进行区分的方法，该方法类似于C++的Template模板机制，可减少不必要的icache miss以及scalar耗时，有助于优化单次调用kernel的性能。不同的kernel实现分支可以通过TilingKey来标识，host侧设置TilingKey后，可以选择对应的分支。例如，一个算子在不同的shape下，有不同的算法逻辑，kernel侧可以通过TilingKey来选择不同的算法逻辑，在host侧Tiling算法也有差异，host/kernel侧通过相同的TilingKey进行关联。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "假如有如下kernel代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "if (condition) {\n   ProcessA();\n } else {\n   ProcessB();\n }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果函数ProcessA、ProcessB两个函数是个非常大的函数，那么上述代码在编译后会变得更大，而每次kernel运行只会选择1个分支，条件的判断和跳转在代码大到一定程度（16-32K，不同芯片存在差异）后会出现icache miss。通过TilingKey可以对这种情况进行优化，给2个kernel的处理函数设置不同的TilingKey 1和2："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "if (TILING_KEY_IS(1)) {\n   ProcessA();\n } else if (TILING_KEY_IS(2)) {\n   ProcessB();\n }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "这样device kernel编译时会自动识别到2个TilingKey并编译2个kernel入口函数，将条件判断进行常量折叠。同时需要和host tiling函数配合，判断走ProcessA的场景设置TilingKey为1，走ProcessB的场景设置TilingKey为2："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "static ge::graphStatus TilingFunc(gert::TilingContext* context)\n {\n     // To do sth\n     if (condition) {\n         context->SetTilingKey(1);\n     } else {\n         context->SetTilingKey(2);\n     }\n     return ge::GRAPH_SUCCESS;\n }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(494146)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["编译时，可以通过设置", (0,jsx_runtime.jsx)(_components.a, {
        href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-operator-implementation/cannkit-project-based-operator-development/cannkit-compilation-and-deployment/cannkit-operator-project-compilation",
        children: "--tiling_keys"
      }), "编译选项指定TilingKey，编译时只编译指定TilingKey相关的kernel代码，用于加速编译过程。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "workspacesize可选",
      children: "WorkspaceSize（可选）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "workspace是设备侧Global Memory上的一块内存。在Tiling函数中可以设置workspace的大小，框架侧会为其在申请对应大小的设备侧Global Memory，在对应的算子kernel侧实现时可以使用这块workspace内存。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "workspace内存分为两部分：AscendC API需要的workspace内存和算子实现使用到的workspace内存（按需）。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "AscendC API需要预留workspace内存"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["API在计算过程需要一些workspace内存作为缓存，因此算子Tiling函数需要为API预留workspace内存，预留内存大小通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-host-api/cannkit-platformascendc/cannkit-getlibapiworkspacesize",
            children: "GetLibApiWorkSpaceSize"
          }), "接口获取。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "算子实现使用到的workspace内存（按需）"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "算子内部需要通过额外的device内存进行数据交换或者缓存的时候才需要分配，根据算子计算的空间自行分配。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "整体的workspace内存就是上述两部分之和，在Tiling函数中设置方法如下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "auto workspaceSizes = context->GetWorkspaceSizes(1); // 只使用1块workspace\nworkspaceSizes[0] = sysWorkspaceSize + usrWorkspaceSize;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "tiling实现基本流程",
      children: "Tiling实现基本流程"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tiling实现开发的流程图如下。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图2"
        })
      }), " Tiling开发流程图"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(624187)/* ["default"] */.A) + "",
        width: "488",
        height: "602"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下面将从一个简单的Add算子为例介绍Tiling的实现流程。本样例中待处理数据的Shape大小可以平均分配到每个核上，并且可以对齐到一个datablock(32B)的大小。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "首先"
        })
      }), "完成算子TilingData结构定义头文件的编写，该文件命名为_“算子名称_tiling.h”_，位于算子工程的op_host目录下。样例代码如下。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#ifndef ADD_CUSTOM_TILING_H\n#define ADD_CUSTOM_TILING_H\n#include \"register/tilingdata_base.h\"\n \nnamespace optiling {\nBEGIN_TILING_DATA_DEF(TilingData)               // 注册一个tiling的类，以tiling的名字作为入参\n  TILING_DATA_FIELD_DEF(uint32_t, totalLength); // 添加tiling字段，总计算数据量\n  TILING_DATA_FIELD_DEF(uint32_t, tileNum);     // 添加tiling字段，每个核上总计算数据分块个数\nEND_TILING_DATA_DEF;\n// 注册算子tilingdata类到对应的AddCustom算子\nREGISTER_TILING_DATA_CLASS(AddCustom, TilingData)\n}\n#endif // ADD_CUSTOM_TILING_H\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "具体的编写步骤如下。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "代码框架编写，需要增加#ifndef...的判断条件，防止头文件的重复包含；需要包含register/tilingdata_base.h头文件，tilingdata_base.h中定义了多个用于tilingdata注册的宏。样例代码如下。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#ifndef ADD_CUSTOM_TILING_H\n#define ADD_CUSTOM_TILING_H\n#include \"register/tilingdata_base.h\"\n \nnamespace optiling {\n// tiling结构定义和注册代码\n// ...\n}\n#endif // ADD_CUSTOM_TILING_H\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "TilingData参数设计，TilingData参数本质上是和并行数据切分相关的参数，本示例算子使用了2个tiling参数：totalLength、tileNum。totalLength是指需要计算的数据量大小，tileNum是指每个核上总计算数据分块个数。比如，totalLength这个参数传递到kernel侧后，可以通过除以参与计算的核数，得到每个核上的计算量，这样就完成了多核数据的切分。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["TilingData结构定义，通过BEGIN_TILING_DATA_DEF接口定义一个TilingData的类，通过TILING_DATA_FIELD_DEF接口增加TilingData的两个字段totalLength、tileNum，通过END_TILING_DATA_DEF接口结束TilingData定义。相关接口的详细说明请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-host-api/cannkit-tiling-data-structure-registration/cannkit-tilingdata-structure-definition",
            children: "TilingData结构定义"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "BEGIN_TILING_DATA_DEF(TilingData)               // 注册一个tiling的类，以tiling的名字作为入参\n  TILING_DATA_FIELD_DEF(uint32_t, totalLength); // 添加tiling字段，总计算数据量\n  TILING_DATA_FIELD_DEF(uint32_t, tileNum);     // 添加tiling字段，每个核上总计算数据分块个数\nEND_TILING_DATA_DEF;\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["注册TilingData结构，通过REGISTER_TILING_DATA_CLASS接口，注册TilingData类，和自定义算子相关联。REGISTER_TILING_DATA_CLASS第一个参数为op_type（算子类型），本样例中传入AddCustom，第二个参数为TilingData的类名。REGISTER_TILING_DATA_CLASS接口介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-host-api/cannkit-tiling-data-structure-registration/cannkit-tilingdata-structure-registration",
            children: "TilingData结构注册"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 注册算子tilingdata类到对应的AddCustom算子\nREGISTER_TILING_DATA_CLASS(AddCustom, TilingData)\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "然后"
        })
      }), "完成算子host实现cpp文件中Tiling函数实现，该文件命名为“算子名称.cpp”，位于算子工程的op_host目录下。样例代码如下。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "namespace optiling {\nconst uint32_t BLOCK_DIM = 1;\nconst uint32_t TILE_NUM = 8;\nstatic ge::graphStatus TilingFunc(gert::TilingContext *context)\n{\n    TilingData tiling;\n    uint32_t totalLength = context->GetInputShape(0)->GetOriginShape().GetShapeSize();\n    context->SetBlockDim(BLOCK_DIM);\n    tiling.set_totalLength(totalLength);\n    tiling.set_tileNum(TILE_NUM);\n    tiling.SaveToBuffer(context->GetRawTilingData()->GetData(), context->GetRawTilingData()->GetCapacity());\n    context->GetRawTilingData()->SetDataSize(tiling.GetDataSize());\n    size_t *currentWorkspace = context->GetWorkspaceSizes(1);\n    currentWorkspace[0] = 0;\n    return ge::GRAPH_SUCCESS;\n}\n} // namespace optiling\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "具体步骤如下。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取TilingContext的上下文，即Tiling函数的入参gert::TilingContext* context。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置TilingData。上文步骤3中，定义了TilingData的类，此时可以用TilingData定义一个具体的实例，通过调用TilingData类的set_+field_name接口来设置TilingData的字段值，通过调用TilingData类的SaveToBuffer接口完成TilingData的序列化和保存。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["通过上下文获取输入输出shape信息。本样例中通过TilingContext的", (0,jsx_runtime.jsx)(_components.a, {
                href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-gert-namespace/cannkit-tilingcontext/cannkit-getinputshape",
                children: "GetInputShape"
              }), "接口获取输入的shape大小。"]
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "// 获取输入shape信息\nuint32_t totalLength = context->GetInputShape(0)->GetOriginShape().GetShapeSize();\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "设置TilingData。通过调用set_+field_name方法来设置TilingData的字段值。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "// 用TilingData定义一个具体的实例\nTilingData tiling;\n// 设置TilingData\ntiling.set_totalLength(totalLength);\ntiling.set_tileNum(TILE_NUM);\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["调用TilingData类的SaveToBuffer接口完成序列化并保存至TilingContext上下文。SaveToBuffer的第一个参数为存储Buffer的首地址，第二个参数为Buffer的长度。通过调用", (0,jsx_runtime.jsx)(_components.a, {
                href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-gert-namespace/cannkit-tilingcontext/cannkit-getrawtilingdata",
                children: "GetRawTilingData"
              }), "获取无类型的TilingData的地址，再通过", (0,jsx_runtime.jsx)(_components.a, {
                href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-gert-namespace/cannkit-tilingdata/cannkit-tilingdata-getdata",
                children: "GetData"
              }), "获取数据指针，作为Buffer的首地址；通过调用", (0,jsx_runtime.jsx)(_components.a, {
                href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-gert-namespace/cannkit-tilingcontext/cannkit-getrawtilingdata",
                children: "GetRawTilingData"
              }), "获取无类型的TilingData的地址，再通过", (0,jsx_runtime.jsx)(_components.a, {
                href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-gert-namespace/cannkit-tilingdata/cannkit-getcapacity",
                children: "GetCapacity"
              }), "获取TilingData的长度，作为Buffer的长度。完成SaveToBuffer操作后需要通过", (0,jsx_runtime.jsx)(_components.a, {
                href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-gert-namespace/cannkit-tilingdata/cannkit-setdatasize",
                children: "SetDataSize"
              }), "设置TilingData的长度，该长度通过TilingData类的", (0,jsx_runtime.jsx)(_components.a, {
                href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-gert-namespace/cannkit-tilingdata/cannkit-getdatasize",
                children: "GetDataSize"
              }), "接口获取。"]
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "// 序列化并保存\ntiling.SaveToBuffer(context->GetRawTilingData()->GetData(), context->GetRawTilingData()->GetCapacity());\ncontext->GetRawTilingData()->SetDataSize(tiling.GetDataSize());\n"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-gert-namespace/cannkit-tilingcontext/cannkit-setblockdim",
            children: "SetBlockDim"
          }), "接口设置BlockDim。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "context->SetBlockDim(BLOCK_DIM);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["（可选）通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-gert-namespace/cannkit-tilingcontext/cannkit-settilingkey",
            children: "SetTilingKey"
          }), "设置TilingKey。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "context->SetTilingKey(1);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["（可选）通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-gert-namespace/cannkit-tilingcontext/cannkit-getworkspacesizes",
            children: "GetWorkspaceSizes"
          }), "获取workspace size指针，并设置size大小。此处仅作为举例，设置workspace的大小为0。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "size_t *currentWorkspace = context->GetWorkspaceSizes(1);\ncurrentWorkspace[0] = 0;\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "tiling参数设计更多样例-属性信息通过tilingdata传递",
      children: "Tiling参数设计更多样例-属性信息通过TilingData传递"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果算子包含属性信息，该属性信息可以通过TilingData传递到kernel侧，参与kernel侧算子核函数的计算。以ReduceMaxCustom算子为例，该算子用于对输入数据按维度dim返回最大值，并且返回索引。ReduceMaxCustom算子有两个属性，reduceDim和isKeepDim，reduceDim表示按照哪一个维度进行reduce操作；isKeepDim表示是否需要保持输出的维度与输入一样。本样例仅支持对最后一维做reduce操作，输入数据类型为half。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ReduceMaxCustom算子TilingData的定义如下。这里我们重点关注reduceAxisLen。参数reduceAxisLen表示获取reduceDim轴的长度，这里也就是最后一维的长度。该参数后续会通过TilingData传递到kernel侧参与计算。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#ifndef REDUCE_MAX_CUSTOM_TILING_H\n#define REDUCE_MAX_CUSTOM_TILING_H\n#include \"register/tilingdata_base.h\"\nnamespace optiling {\nBEGIN_TILING_DATA_DEF(ReduceMaxTilingData)\n  TILING_DATA_FIELD_DEF(uint32_t, reduceAxisLen); // 添加tiling字段，reduceDim轴的长度\n  // 其他TilingData参数的定义\n  // ...\nEND_TILING_DATA_DEF;\n// 注册算子tilingdata类到对应的ReduceMaxCustom算子\nREGISTER_TILING_DATA_CLASS(ReduceMaxCustom, ReduceMaxTilingData)\n}\n#endif // REDUCE_MAX_CUSTOM_TILING_H\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ReduceMaxCustom算子的Tiling实现如下。这里我们重点关注属性信息通过TilingData传递的过程：首先通过TilingContext上下文从attr获取reduceDim属性值；然后根据reduceDim属性值获取reduceDim轴的长度并设置到TilingData中。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "namespace optiling {\nstatic ge::graphStatus TilingFunc(gert::TilingContext *context)\n{\n    ReduceMaxTilingData tiling;\n    // 从attr获取reduceDim属性值，因为reduceDim是第一个属性，所以GetAttrPointer传入的索引值为获取reduceDim轴的长度\n    const gert::StorageShape *xShapePtr = context->GetInputShape(0);\n    const gert::Shape &xShape = xShapePtr->GetStorageShape();\n    const uint32_t reduceAxisLen = xShape.GetDim(*reduceDim);\n    // 计算TilingData中除了reduceAxisLen之外其他成员变量的值\n    // ...\n    // 将reduceAxisLen设置到tiling结构体中，传递到kernel函数使用\n    tiling.set_reduceAxisLen(reduceAxisLen);\n    // 设置TilingData中除了reduceAxisLen之外其他成员变量的值\n    // ...\n    // TilingData序列化保存\n    tiling.SaveToBuffer(context->GetRawTilingData()->GetData(), context->GetRawTilingData()->GetCapacity());\n    context->GetRawTilingData()->SetDataSize(tiling.GetDataSize());\n    // ...\n    return ge::GRAPH_SUCCESS;\n}\n}  // namespace optiling\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "tiling参数设计更多样例-使用高阶api时配套的tiling",
      children: "Tiling参数设计更多样例-使用高阶API时配套的Tiling"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "首先进行tiling结构定义："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "namespace optiling {\nBEGIN_TILING_DATA_DEF(MyAddTilingData)  // 声明tiling结构名字\n  TILING_DATA_FIELD_DEF_STRUCT(TCubeTiling, cubeTilingData);   // 引用高阶API的tiling结构体\n  TILING_DATA_FIELD_DEF(uint32_t, field);   // 结构成员的引用结构体\nEND_TILING_DATA_DEF;\nREGISTER_TILING_DATA_CLASS(MyAdd, MyAddTilingData)  // tiling结构注册给算子\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过高阶API配套的tiling函数对tiling结构初始化："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "static ge::graphStatus TilingFunc(gert::TilingContext* context) {\n     int32_t M = 1024;\n     int32_t N = 640;\n     int32_t K = 256;\n     int32_t baseM = 128;\n     int32_t baseN = 128;\n     auto ascendcPlatform = platform_ascendc::PlatformAscendC(context->GetPlatformInfo());\n     MultiCoreMatmulTiling cubeTiling(ascendcPlatform);\n     cubeTiling.SetDim(2);\n     cubeTiling.SetAType(TPosition::GM, CubeFormat::ND, matmul_tiling::DataType::DT_FLOAT16);\n     cubeTiling.SetBType(TPosition::GM, CubeFormat::ND, matmul_tiling::DataType::DT_FLOAT16);\n     cubeTiling.SetCType(TPosition::LCM, CubeFormat::ND, matmul_tiling::DataType::DT_FLOAT);\n     cubeTiling.SetBiasType(TPosition::GM, CubeFormat::ND, matmul_tiling::DataType::DT_FLOAT);\n     cubeTiling.SetShape(M, N, K);\n     cubeTiling.SetOrgShape(M, N, K);\n     cubeTiling.SetFixSplit(baseM, baseN, -1);\n     cubeTiling.SetBias(true);\n     cubeTiling.SetBufferSpace(-1, -1, -1);\n     MyAddTilingData tiling;\n     if (cubeTiling.GetTiling(tiling.cubeTilingData) == -1){\n         return ge::GRAPH_FAILED;\n     }\n     // To do sth\n }\n"
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
960165(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
494146(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
789744(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439293-b0e4e466a22ec5fa0aa278d42e0701a9.png");

},
624187(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959248-dd1baff09293d3226f259d6297ac8d69.png");

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