"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["107356"], {
722410(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_custom_operator_development_cannkit_operator_implementation_cannkit_vector_programming_cannkit_vector_programming_md_533_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cann-kit-guide-cannkit-ascendc-operator-development-cannkit-custom-operator-development-cannkit-operator-implementation-cannkit-vector-programming-cannkit-vector-programming-md-533.json
var site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_custom_operator_development_cannkit_operator_implementation_cannkit_vector_programming_cannkit_vector_programming_md_533_namespaceObject = JSON.parse('{"id":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-operator-implementation/cannkit-vector-programming/cannkit-vector-programming","title":"矢量编程","description":"算子实现流程概述","source":"@site/docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-operator-implementation/cannkit-vector-programming/cannkit-vector-programming.md","sourceDirName":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-operator-implementation/cannkit-vector-programming","slug":"/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-operator-implementation/cannkit-vector-programming/","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-operator-implementation/cannkit-vector-programming/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"矢量编程","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-vector-programming","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"算子实现概述","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-operator-implementation/cannkit-operator-implementation-overview/"},"next":{"title":"基础知识","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-operator-implementation/cannkit-matrix-programming-high-level-api/cannkit-basic-knowledge/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-operator-implementation/cannkit-vector-programming/cannkit-vector-programming.md


const frontMatter = {
	title: '矢量编程',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-vector-programming',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = '矢量编程';

const assets = {

};



const toc = [{
  "value": "算子实现流程概述",
  "id": "算子实现流程概述",
  "level": 2
}, {
  "value": "算子分析",
  "id": "算子分析",
  "level": 3
}, {
  "value": "核函数定义",
  "id": "核函数定义",
  "level": 3
}, {
  "value": "算子类实现",
  "id": "算子类实现",
  "level": 3
}, {
  "value": "运行验证",
  "id": "运行验证",
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
        id: "矢量编程",
        children: "矢量编程"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "算子实现流程概述",
      children: "算子实现流程概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "基于AscendC方式实现矢量算子的流程如图1所示。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1"
        })
      }), " 矢量算子实现流程"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(904064)/* ["default"] */.A) + "",
        width: "528",
        height: "218"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "算子分析：分析算子的数学表达式、输入、输出以及计算逻辑的实现，明确需要调用的AscendC接口。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "核函数定义：定义AscendC算子入口函数。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "根据矢量编程范式实现算子类：完成核函数的内部实现。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["下文以ElemWise(Add)算子为例，对上述步骤进行详细介绍。本样例中介绍的算子完整代码参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/HarmonyOS_Samples/cannkit_samplecode_add_custom_cpp/blob/master/FrameworkLaunch/AddCustom/op_kernel/add_custom.cpp",
        children: "add_custom.cpp"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "算子分析",
      children: "算子分析"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在开发算子代码之前需要分析算子的数学表达式、输入、输出以及计算逻辑的实现，明确需要调用的AscendC接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "明确算子的数学表达式及计算逻辑。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Add算子的数学表达式为："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "z = x + y\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["计算逻辑是：AscendC提供的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-vector-calculation-monocular/cannkit-vector-calculation-exp",
            children: "矢量计算"
          }), "接口的操作元素都为LocalTensor，输入数据需要先搬运进片上存储，然后使用计算接口完成两个输入参数相加，得到最终结果，再搬出到外部存储上。AscendC Add算子的计算逻辑如下图所示。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "图2"
            })
          }), " 算子计算逻辑"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(310547)/* ["default"] */.A) + "",
            width: "229",
            height: "275"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "明确输入和输出。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Add算子有两个输入：x与y，输出为z。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "本样例中算子的输入支持的数据类型为half(float16)，算子输出的数据类型与输入数据类型相同。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "算子输入支持shape(8，2048)，输出shape与输入shape相同。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "算子输入支持的format为：ND。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "确定核函数名称和参数。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "开发者可以自定义核函数名称，本样例中核函数命名为add_custom。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "根据对算子输入输出的分析，确定核函数有3个参数x，y，z；x，y为输入在Global Memory上的内存地址，z为输出在Global Memory上的内存地址。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "确定算子实现所需接口。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["实现涉及外部存储和内部存储间的数据搬运，查看AscendC API参考中的数据搬移接口，需要使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vectorcalculation-data-movement/cannkit-datacopy/cannkit-common-data-movement",
              children: "DataCopy"
            }), "来实现数据搬移。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["本样例只涉及矢量计算的加法操作，通过查看AscendC API参考中的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-vector-calculation-monocular/cannkit-vector-calculation-exp",
              children: "矢量计算"
            }), "接口定义，初步分析可使用双目指令", (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-vector-calculation-binocular/cannkit-add",
              children: "Add"
            }), "接口实现x+y。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["计算中使用到的Tensor数据结构，使用Queue队列进行管理，会使用到", (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-memory-management-and-synchronization/cannkit-tque/cannkit-tque-enque",
              children: "EnQue"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-memory-management-and-synchronization/cannkit-tque/cannkit-tque-deque",
              children: "DeQue"
            }), "等接口。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过以上分析，得到AscendC Add算子的设计规格如下。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "算子类型(OpType)："
              })
            }), " Add"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "算子输入输出："
              })
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "name:"
                  })
                }), " x（输入）、y（输入）、z（输出）"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "shape:"
                  })
                }), " (8, 2048)"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "data type:"
                  })
                }), " half"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "format:"
                  })
                }), " ND"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "核函数名称："
              })
            }), " add_custom"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "使用的主要接口："
              })
            }), " DataCopy：数据搬移接口；Add：矢量双目指令接口；EnQue、DeQue等接口：Queue队列管理接口。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "算子实现文件名称："
              })
            }), " add_custom.cpp"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "核函数定义",
      children: "核函数定义"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["根据", (0,jsx_runtime.jsx)(_components.a, {
        href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-basic-concepts/cannkit-programming-model/cannkit-kernel-function#%E6%A0%B8%E5%87%BD%E6%95%B0%E5%AE%9A%E4%B9%89",
        children: "核函数定义"
      }), "中介绍的规则进行核函数的定义。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "函数原型定义"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["本样例中，函数名为add_custom（核函数名称可自定义），根据", (0,jsx_runtime.jsx)(_components.a, {
            href: "#%E7%AE%97%E5%AD%90%E5%88%86%E6%9E%90",
            children: "算子分析"
          }), "中对算子输入输出的分析，确定有3个参数x，y，z，其中x，y为输入内存，z为输出内存。根据", (0,jsx_runtime.jsx)(_components.a, {
            href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-basic-concepts/cannkit-programming-model/cannkit-kernel-function#%E6%A0%B8%E5%87%BD%E6%95%B0%E5%AE%9A%E4%B9%89",
            children: "核函数定义"
          }), "核函数的规则介绍，函数原型定义如下所示：使用__global__函数类型限定符来标识它是一个核函数；使用__aicore__函数类型限定符来标识该核函数在设备端aicore上执行；为方便起见，统一使用GM_ADDR宏修饰入参，GM_ADDR宏定义请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-basic-concepts/cannkit-programming-model/cannkit-kernel-function",
            children: "核函数"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "extern \"C\" __global__ __aicore__ void add_custom(GM_ADDR x, GM_ADDR y, GM_ADDR z)\n{\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用算子类的Init和Process函数。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["算子类的Init函数，完成内存初始化相关工作，Process函数完成算子实现的核心逻辑，具体介绍参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "#%E7%AE%97%E5%AD%90%E7%B1%BB%E5%AE%9E%E7%8E%B0",
            children: "算子类实现"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "extern \"C\" __global__ __aicore__ void add_custom(GM_ADDR x, GM_ADDR y, GM_ADDR z)\n{\n    KernelAdd op;\n    op.Init(x, y, z);\n    op.Process();\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "算子类实现",
      children: "算子类实现"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据上一节介绍，核函数中会调用算子类的Init和Process函数，本节具体讲解如何基于编程范式实现算子类。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["根据矢量编程范式对Add算子的实现流程进行设计的思路如下，矢量编程范式请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-basic-concepts/cannkit-programming-model/cannkit-programming-paradigm#vector%E7%BC%96%E7%A8%8B%E8%8C%83%E5%BC%8F",
        children: "Vector编程范式"
      }), "，设计完成后得到的Add算子实现流程图参见图3："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add算子的实现流程分为3个基本任务：CopyIn，Compute，CopyOut。CopyIn任务负责将Global Memory上的输入Tensor xGm和yGm搬运至Local Memory，分别存储在xLocal，yLocal，Compute任务负责对xLocal，yLocal执行加法操作，计算结果存储在zLocal中，CopyOut任务负责将输出数据从zLocal搬运至Global Memory上的输出Tensor zGm中。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CopyIn，Compute任务间通过VECIN队列inQueueX，inQueueY进行通信和同步，Compute，CopyOut任务间通过VECOUT队列outQueueZ进行通信和同步。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "任务间交互使用到的内存、临时变量使用到的内存统一使用pipe内存管理对象进行管理。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图3"
        })
      }), " Add算子实现流程"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(927125)/* ["default"] */.A) + "",
        width: "528",
        height: "227"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "算子类中主要实现上述流程，包含对外开放的初始化Init函数和核心处理函数Process，Process函数中会对上图中的三个基本任务进行调用；同时包括一些算子实现中会用到的私有成员，比如上图中的Global Tensor和VECIN、VECOUT队列等。KernelAdd算子类具体成员如下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class KernelAdd {\npublic:\n    __aicore__ inline KernelAdd() {}\n    // Initialization function, which initializes the memory\n    __aicore__ inline void Init(GM_ADDR x, GM_ADDR y, GM_ADDR z){}\n    // Core processing function, which implements the operator logic and calls the private member functions\n    // CopyIn, Compute, and CopyOut to complete the three-stage pipelined execution of the vector operator\n    __aicore__ inline void Process(){}\n \nprivate:\n    // CopyIn function, which completes the processing in the CopyIn phase and is called by the Process function\n    __aicore__ inline void CopyIn(int32_t progress){}\n    // Compute function, which completes the processing in the Compute phase and is called by Process function\n    __aicore__ inline void Compute(int32_t progress){}\n    // CopyOut function, which completes the processing in the CopyOut phase and is called by the Process function\n    __aicore__ inline void CopyOut(int32_t progress){}\n \nprivate:\n    AscendC::TPipe pipe;  // Pipe memory management object.\n    AscendC::TQue<AscendC::QuePosition::VECIN, 1> inQueueX, inQueueY;  // Input data queue management object. QuePosition is VECIN.\n    AscendC::TQue<AscendC::QuePosition::VECOUT, 1> outQueueZ;  // Output data queue management object. QuePosition is VECOUT.\n    AscendC::GlobalTensor<half> xGm;  // Object for managing the input and output global memory addresses. xGm and yGm are inputs, and zGm is the output.\n    AscendC::GlobalTensor<half> yGm;\n    AscendC::GlobalTensor<half> zGm;\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "初始化函数主要完成以下内容："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置输入输出Global Tensor的Global Memory内存地址。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "本样例中使用多核并行计算，即把数据进行分片，分配到多个核上进行处理。AscendC核函数是在一个核上的处理函数，所以只处理部分数据，需要在初始化函数中获取该核函数需要处理的输入输出在Global Memory上的内存偏移地址，并将该偏移地址设置在Global Tensor中。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "以获取输入x在Global Memory上的内存偏移地址为例："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "xGm.SetGlobalBuffer((__gm__ half*)x + BLOCK_LENGTH * GetBlockIdx(), BLOCK_LENGTH);\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["本样例中的分配方案是：数据整体长度TOTAL_LENGTH为8 * 2048，平均分配到8个核上运行，每个核上处理的数据大小BLOCK_LENGTH为2048字节。x + BLOCK_LENGTH * GetBlockIdx()即为单核处理程序中x在Global Memory上的内存偏移地址，获取偏移地址后，使用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-data-type-definition/cannkit-globaltensor",
            children: "GlobalTensor"
          }), "类的接口设定该核上Global Memory的起始地址以及长度。具体示意图请参考图4。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "图4"
            })
          }), " 多核并行处理示意图"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(155021)/* ["default"] */.A) + "",
            width: "528",
            height: "133"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过Pipe内存管理对象为输入输出Queue分配内存。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "比如，为输入x的Queue分配内存，可以通过如下代码段实现："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "pipe.InitBuffer(inQueueX, BUFFER_NUM, TILE_LENGTH * sizeof(half))\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "对于单核上的处理数据，可以进行数据切块(Tiling)，在本示例中，将数据切分成8块（并不意味着8块就是性能最优）仅作为参考。切分后的每个数据块再次切分成2块，即可开启double buffer，实现流水线之间的并行。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "这样单核上的数据（2048个数）被切分成16块，每块TILE_LENGTH(128)个数据。上文代码表示Pipe为inQueueX分配了两块大小为TILE_LENGTH * sizeof(half)个字节的内存块，每个内存块能容纳TILE_LENGTH(128)个half类型数据。数据切分示意图如图5所示。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "图5"
            })
          }), " 单核数据切分示意图"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(252225)/* ["default"] */.A) + "",
            width: "528",
            height: "185"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Kirin9020/KirinX90系列处理器支持的核数为1，具体的初始化函数代码如下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "constexpr int32_t TOTAL_LENGTH = 8 * 2048;                            // total length of data\nconstexpr int32_t USE_CORE_NUM = 1;                                   // num of core used\nconstexpr int32_t BLOCK_LENGTH = TOTAL_LENGTH / USE_CORE_NUM;         // length computed of each core\nconstexpr int32_t TILE_NUM = 8;                                       // split data into 8 tiles for each core\nconstexpr int32_t BUFFER_NUM = 2;                                     // tensor num for each queue\nconstexpr int32_t TILE_LENGTH = BLOCK_LENGTH / TILE_NUM / BUFFER_NUM; // separate to 2 parts, due to double buffer\n__aicore__ inline void Init(GM_ADDR x, GM_ADDR y, GM_ADDR z)\n{\n    // get start index for current core, core parallel\n    xGm.SetGlobalBuffer((__gm__ half*)x + BLOCK_LENGTH * AscendC::GetBlockIdx(), BLOCK_LENGTH);\n    yGm.SetGlobalBuffer((__gm__ half*)y + BLOCK_LENGTH * AscendC::GetBlockIdx(), BLOCK_LENGTH);\n    zGm.SetGlobalBuffer((__gm__ half*)z + BLOCK_LENGTH * AscendC::GetBlockIdx(), BLOCK_LENGTH);\n    // pipe alloc memory to queue, the unit is Bytes\n    pipe.InitBuffer(inQueueX, BUFFER_NUM, TILE_LENGTH * sizeof(half));\n    pipe.InitBuffer(inQueueY, BUFFER_NUM, TILE_LENGTH * sizeof(half));\n    pipe.InitBuffer(outQueueZ, BUFFER_NUM, TILE_LENGTH * sizeof(half));\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "基于矢量编程范式，将核函数的实现分为3个基本任务：CopyIn，Compute，CopyOut。Process函数中通过如下方式调用这三个函数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "    __aicore__ inline void Process()\n    {\n        // loop count need to be doubled, due to double buffer\n        constexpr int32_t loopCount = TILE_NUM * BUFFER_NUM;\n        // tiling strategy, pipeline parallel\n        for (int32_t i = 0; i < loopCount; i++) {\n            CopyIn(i);\n            Compute(i);\n            CopyOut(i);\n        }\n    }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据编程范式上面的算法分析，将整个计算拆分成三个Stage，开发者单独编写每个Stage的代码，三阶段流程示意图参见图3，具体流程如下。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "CopyIn函数实现。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vectorcalculation-data-movement/cannkit-datacopy/cannkit-common-data-movement",
              children: "DataCopy"
            }), "接口将GlobalTensor数据拷贝到LocalTensor。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-memory-management-and-synchronization/cannkit-tque/cannkit-tque-enque",
              children: "EnQue"
            }), "将LocalTensor放入VecIn的Queue中。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "__aicore__ inline void CopyIn(int32_t progress)\n    {\n        // alloc tensor from queue memory\n        AscendC::LocalTensor<half> xLocal = inQueueX.AllocTensor<half>();\n        AscendC::LocalTensor<half> yLocal = inQueueY.AllocTensor<half>();\n        // copy progress_th tile from global tensor to local tensor\n        AscendC::DataCopy(xLocal, xGm[progress * TILE_LENGTH], TILE_LENGTH);\n        AscendC::DataCopy(yLocal, yGm[progress * TILE_LENGTH], TILE_LENGTH);\n        // enque input tensors to VECIN queue\n        inQueueX.EnQue(xLocal);\n        inQueueY.EnQue(yLocal);\n    }\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Compute函数实现。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-memory-management-and-synchronization/cannkit-tque/cannkit-tque-deque",
              children: "DeQue"
            }), "从VecIn中取出LocalTensor。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-vector-calculation-binocular/cannkit-add",
              children: "Add"
            }), "接口完成矢量计算。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-memory-management-and-synchronization/cannkit-tque/cannkit-tque-enque",
              children: "EnQue"
            }), "将计算结果LocalTensor放入到VecOut的Queue中。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-memory-management-and-synchronization/cannkit-tque/cannkit-tque-freetensor",
              children: "FreeTensor"
            }), "释放不再使用的LocalTensor。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "__aicore__ inline void Compute(int32_t progress)\n{\n    // deque input tensors from VECIN queue\n    AscendC::LocalTensor<half> xLocal = inQueueX.DeQue<half>();\n    AscendC::LocalTensor<half> yLocal = inQueueY.DeQue<half>();\n    AscendC::LocalTensor<half> zLocal = outQueueZ.AllocTensor<half>();\n    // call Add instr for computation\n    AscendC::Add(zLocal, xLocal, yLocal, TILE_LENGTH);\n    // enque the output tensor to VECOUT queue\n    outQueueZ.EnQue<half>(zLocal);\n    // free input tensors for reuse\n    inQueueX.FreeTensor(xLocal);\n    inQueueY.FreeTensor(yLocal);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "CopyOut函数实现。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-memory-management-and-synchronization/cannkit-tque/cannkit-tque-deque",
              children: "DeQue"
            }), "接口从VecOut的Queue中取出LocalTensor。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vectorcalculation-data-movement/cannkit-datacopy/cannkit-common-data-movement",
              children: "DataCopy"
            }), "接口将LocalTensor拷贝到GlobalTensor上。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-memory-management-and-synchronization/cannkit-tque/cannkit-tque-freetensor",
              children: "FreeTensor"
            }), "将不再使用的LocalTensor进行回收。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: " __aicore__ inline void CopyOut(int32_t progress)\n{\n    // deque output tensor from VECOUT queue\n    AscendC::LocalTensor<half> zLocal = outQueueZ.DeQue<half>();\n    // copy progress_th tile from local tensor to global tensor\n    AscendC::DataCopy(zGm[progress * TILE_LENGTH], zLocal, TILE_LENGTH);\n    // free output tensor for reuse\n    outQueueZ.FreeTensor(zLocal);\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "运行验证",
      children: "运行验证"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "核函数即算子kernel程序开发完成后，即可编写host侧的核函数调用程序，实现从host侧的APP程序调用算子，进行运行验证。"
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
252225(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799592-0a09e27d689a873aa13233b1545d4f39.png");

},
927125(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959240-83a971a4c3766ce6aaa1a4532af101a3.png");

},
155021(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479241-744e7f7ee802a72a15aaa61ef6661b1f.png");

},
904064(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799590-a78569eaa281fcee06b14a6314a8ee75.png");

},
310547(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439285-3a5be90b004d179b57439d9e336f6e38.png");

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