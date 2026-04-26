"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["424162"], {
444416(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_custom_operator_development_cannkit_basic_concepts_cannkit_programming_model_cannkit_programming_paradigm_cannkit_programming_paradigm_md_0db_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cann-kit-guide-cannkit-ascendc-operator-development-cannkit-custom-operator-development-cannkit-basic-concepts-cannkit-programming-model-cannkit-programming-paradigm-cannkit-programming-paradigm-md-0db.json
var site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_custom_operator_development_cannkit_basic_concepts_cannkit_programming_model_cannkit_programming_paradigm_cannkit_programming_paradigm_md_0db_namespaceObject = JSON.parse('{"id":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-basic-concepts/cannkit-programming-model/cannkit-programming-paradigm/cannkit-programming-paradigm","title":"编程范式","description":"编程范式描述了算子实现的固定流程，基于编程范式进行编程，可以快速搭建算子实现的代码框架。","source":"@site/docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-basic-concepts/cannkit-programming-model/cannkit-programming-paradigm/cannkit-programming-paradigm.md","sourceDirName":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-basic-concepts/cannkit-programming-model/cannkit-programming-paradigm","slug":"/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-basic-concepts/cannkit-programming-model/cannkit-programming-paradigm/","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-basic-concepts/cannkit-programming-model/cannkit-programming-paradigm/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"编程范式","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-programming-paradigm","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"硬件架构抽象","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-basic-concepts/cannkit-programming-model/cannkit-hardware-architecture-abstraction/"},"next":{"title":"接口概述","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-basic-concepts/cannkit-programming-apis/cannkit-api-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-basic-concepts/cannkit-programming-model/cannkit-programming-paradigm/cannkit-programming-paradigm.md


const frontMatter = {
	title: '编程范式',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-programming-paradigm',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = '编程范式';

const assets = {

};



const toc = [{
  "value": "Vector编程范式",
  "id": "vector编程范式",
  "level": 2
}, {
  "value": "Cube编程范式",
  "id": "cube编程范式",
  "level": 2
}, {
  "value": "融合算子编程范式",
  "id": "融合算子编程范式",
  "level": 2
}, {
  "value": "编程模型背后的奥秘",
  "id": "编程模型背后的奥秘",
  "level": 2
}, {
  "value": "EnQue/DeQue处理流程",
  "id": "enquedeque处理流程",
  "level": 3
}, {
  "value": "AllocTensor/FreeTensor处理流程",
  "id": "alloctensorfreetensor处理流程",
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
        id: "编程范式",
        children: "编程范式"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "编程范式描述了算子实现的固定流程，基于编程范式进行编程，可以快速搭建算子实现的代码框架。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["根据", (0,jsx_runtime.jsx)(_components.a, {
        href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-basic-concepts/cannkit-programming-model/cannkit-hardware-architecture-abstraction",
        children: "硬件架构抽象"
      }), "可以了解到，AI Core内部的执行单元异步并行地执行接收到的指令。如下图所示，从输入数据到输出数据需要经过3个阶段任务的处理（T1、T2、T3），多个执行单元并行处理，每个执行单元只会专注于一个任务的处理，会处理所有的数据分片。可以看出，流水线并行和工业生产中的流水线是类似的，每一个执行单元都可以看成是流水线上的节点，通过流水线并行的方式来提高计算效率：执行单元1完成对某个数据分片的处理后，将其加入到通信队列，执行单元2空闲时就会从队列中取出数据继续处理；可以类比为生产流水线中的工人只完成某一项固定工序，完成后就交由下一项工序负责人继续处理。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(146332)/* ["default"] */.A) + "",
        width: "528",
        height: "115"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["AscendC编程范式就是这样一种流水线式的编程范式，把算子核内的处理程序，分成多个", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "流水任务"
        })
      }), "，通过队列(Queue)完成", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "任务间通信和同步"
        })
      }), "，并通过统一的", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "资源管理"
        })
      }), "模块(Pipe)来统一管理内存、事件等资源。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "vector编程范式",
      children: "Vector编程范式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(114706)/* ["default"] */.A) + "",
        width: "528",
        height: "122"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如上图所示，Vector编程范式把算子的实现流程分为3个基本任务：CopyIn，Compute，CopyOut。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "CopyIn"
          })
        }), "负责搬入操作：将输入数据从Global Memory搬运到Local Memory（VECIN用于表达矢量计算搬入数据的存放位置），完成搬运后执行入队列操作。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Compute"
          })
        }), "负责矢量指令计算操作：完成队列出队后，从Local Memory获取数据并计算，计算完成后执行入队操作。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "CopyOut"
          })
        }), "负责搬出操作：完成队列出队后，将计算结果从Local Memory（VECOUT用于表达矢量计算搬出数据的存放位置）搬运到GM。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "上文中提到的VECIN/VECOUT是TPosition的概念。AscendC管理不同层级的物理内存时，用一种抽象的逻辑位置(TPosition)来表达各级别的存储，代替了片上物理存储的概念，达到隐藏硬件架构的目的。除了VECIN/VECOUT，矢量编程中还会使用到VECCALC，一般在定义临时变量时使用此位置。这些TPosition与物理内存的映射关系如下表。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表1"
        })
      }), " TPosition与物理内存映射关系"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "TPosition"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "物理内存"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Global Memory"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VECIN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unified Buffer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VECOUT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unified Buffer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VECCALC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unified Buffer"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从编程的角度来讲，具体流程（如下文的伪代码）和流程图如下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(745358)/* ["default"] */.A) + "",
        width: "528",
        height: "194"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AscendC::TPipe pipe;                                    // 创建全局的资源管理\nAscendC::TQue<AscendC::QuePosition::VecIn, 1> queIn;    // 创建CopyIn阶段的队列\nAscendC::TQue<AscendC::QuePosition::VecOut, 1> queOut;  // 创建CopyOut阶段的队列\n// Init 阶段：\npipe.InitBuffer(queIn, 2, 1024);                        // 开启double buffer,将待处理的数据一分为二,实现流水并行\nfor-loop {\n    // CopyIn 阶段{\n    auto tensor = queIn.AllocTensor<half>();            // 从Que上申请资源, 长度1024字节\n    AscendC::DataCopy(tensor, gm, len);                 // 搬运数据从GM到VECIN\n    queIn.EnQue(tensor);\n    // }\n    // Compute 阶段{\n    auto tensor = queIn.DeQue<half>();\n    auto tensorOut = queOut.AllocTensor<half>();\n    AscendC::Abs(tensorOut, tensor, 1024);\n    queIn.FreeTensor(tensor);\n    queOut.EnQue(tensorOut);\n    // }\n    // CopyOut 阶段{\n    auto tensor = queOut.DeQue<half>();\n    AscendC::DataCopy(gmOut, tensor, 1024);\n    queOut.FreeTensor(tensor);\n    // }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["任务间数据传递使用到的内存、事件等资源统一由管理模块Pipe进行管理。如下所示的内存管理示意图，TPipe通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-memory-management-and-synchronization/cannkit-tpipe/cannkit-tpipe-initbuffer",
        children: "InitBuffer"
      }), "接口对外提供Queue内存初始化功能，开发者可以通过该接口为指定的Queue分配内存。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Queue队列内存初始化完成后，需要使用内存时，通过调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-memory-management-and-synchronization/cannkit-tque/cannkit-tque-alloctensor",
        children: "AllocTensor"
      }), "来为LocalTensor分配内存，当创建的LocalTensor完成相关计算无需再使用时，再调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-memory-management-and-synchronization/cannkit-tque/cannkit-tque-freetensor",
        children: "FreeTensor"
      }), "来回收LocalTensor的内存。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(349397)/* ["default"] */.A) + "",
        width: "528",
        height: "180"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["编程过程中使用到的临时变量内存同样通过Pipe进行管理。临时变量可以使用TBuf数据结构来申请指定TPosition上的存储空间。使用TBuf申请的内存空间只能参与计算，无法执行Queue队列的入队出队操作。具体的接口使用说明请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-memory-management-and-synchronization/cannkit-tbuf/cannkit-tbuf-overview",
        children: "TBuf"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "按照上述编程范式进行编程即可实现单核上数据的并行处理。需要处理的数据被切分成n片，每个并行任务（Stage1、2、3）需要依次完成n个数据切片的处理。Stage间的箭头表达数据间的依赖关系，比如Stage1(CopyIn)处理完第一个数据分片之后，Stage2(Compute)才能对该分片进行处理。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(78826)/* ["default"] */.A) + "",
        width: "528",
        height: "143"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "上图中的流水任务运行起来的示意图如下，Progress1、2、3代表处理的数据分片，从运行图中可以看出，对于同一片数据，Stage1、Stage2、Stage3之间的处理具有依赖关系，需要串行处理。不同的数据切片，同一时间点，可以有多个任务在并行处理，由此达到任务并行、提升性能的目的。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(258801)/* ["default"] */.A) + "",
        width: "528",
        height: "192"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cube编程范式",
      children: "Cube编程范式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cube计算的典型数据流图如下所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(348119)/* ["default"] */.A) + "",
        width: "528",
        height: "229"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "和矢量编程范式一样，同样也使用逻辑位置(TPosition)来表达数据流，Cube编程范式中主要使用的逻辑位置定义如下。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "搬入数据的存放位置：A1，用于存放整块A矩阵，可类比CPU多级缓存中的二级缓存。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "搬入数据的存放位置：B1，用于存放整块B矩阵，可类比CPU多级缓存中的二级缓存。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "搬入数据的存放位置：A2，用于存放切分后的小块A矩阵，可类比CPU多级缓存中的一级缓存。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "搬入数据的存放位置：B2，用于存放切分后的小块B矩阵，可类比CPU多级缓存中的一级缓存。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "结果数据的存放位置：CO1，用于存放小块结果C矩阵，可理解为Cube Out。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "结果数据的存放位置：CO2，用于存放整块结果C矩阵，可理解为Cube Out。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "搬入数据的存放位置：VECIN，用于矢量计算，实际业务在数据搬入Vector计算单元时使用此位置。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "搬入数据的存放位置：VECCALC，用于矢量计算，实际业务一般在计算需要临时变量时使用此位置。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "搬出数据的存放位置：VECOUT，用于矢量计算，实际业务在将Vector计算单元结果搬出时使用此位置。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "上述TPosition与物理内存的映射关系如下。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表2"
        })
      }), " TPosition与物理内存映射关系"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "TPosition"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "物理内存"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Global Memory"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VECIN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unified Buffer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VECCALC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unified Buffer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VECOUT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unified Buffer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "A1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "L1 Buffer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "A2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "L0A Buffer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "B1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "L1 Buffer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "B2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "L0B Buffer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "C1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kirin9020系列产品，L1 Buffer。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "C2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kirin9020系列产品，BT Buffer。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CO1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "L0C Buffer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CO2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kirin9020系列产品，Global Memory。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cube计算流程同样也可以理解为CopyIn、Compute、CopyOut这几个阶段，因为流程相对复杂，Matmul高阶API提供对此的高阶封装，编程范式如下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(1472)/* ["default"] */.A) + "",
        width: "528",
        height: "229"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "图中线条表示数据流向"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "具体流程可参考如下示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 创建Matmul对象 创建对象时需要传入A、B、C、Bias的参数类型信息， 类型信息通过MatmulType来定义，包括：内存逻辑位置、数据格式、数据类型。\ntypedef MatmulType<TPosition::GM, CubeFormat::ND, half> aType;\ntypedef MatmulType<TPosition::GM, CubeFormat::ND, half> bType;\ntypedef MatmulType<TPosition::GM, CubeFormat::ND, float> cType;\ntypedef MatmulType<TPosition::GM, CubeFormat::ND, float> biasType;\nMatmul<aType, bType, cType, biasType> mm;\n \nREGIST_MATMUL_OBJ(&pipe, GetSysWorkSpacePtr(), mm, &tiling); // 初始化\n// CopyIn阶段：完成从GM到LocalMemory的搬运\nmm.SetTensorA(gm_a);    // 设置左矩阵A\nmm.SetTensorB(gm_b);    // 设置右矩阵B\nmm.SetBias(gm_bias);    // 设置Bias\n// Compute阶段：完成矩阵乘计算\nwhile (mm.Iterate()) {\n    // CopyOut阶段：完成从LocalMemory到GM的搬运\n    mm.GetTensorC(gm_c);\n}\n// 结束矩阵乘操作\nmm.End();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "融合算子编程范式",
      children: "融合算子编程范式"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["支持Vector与Cube混合计算的算子称之为融合算子。AscendC提供", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "融合算子的编程范式"
        })
      }), "，方便开发者基于该范式表达融合算子的数据流，快速实现自己的融合算子。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "融合算子数据流"
        })
      }), "指融合算子的输入输出在各存储位置间的流向。以一个典型的Cube和Vector融合算子为例，逻辑位置间的数据流向如下图所示（为了简化描述，没有列出bias）："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cube的输出可以作为Vector的输入：CO2->VECIN"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Vector的输出可以作为Cube的输入：VECOUT->A1->A2、VECOUT->B1->B2"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(283410)/* ["default"] */.A) + "",
        width: "528",
        height: "229"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "基于Matmul高阶API的融合算子编程范式，对上述数据流简化表达如下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(762962)/* ["default"] */.A) + "",
        width: "528",
        height: "224"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "初始化一个MatMul对象，将输入数据从Global Memory搬运到Cube核上。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "进行MatMul内部的计算。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "将MatMul的计算结果搬运到Vector核上。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "进行Vector矢量计算。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "将输出结果搬运到Global Memory上。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "整个过程的示例代码如下（伪代码）："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "template<typename aType, typename bType, typename cType, typename biasType> \n__aicore__ inline void MatmulLeakyKernel<aType, bType, cType, biasType>::Process()\n{\n    // 步骤1：初始化一个MatMul对象，将输入数据从Global Memory搬运到Cube核上。\n    uint32_t computeRound = 0;\n    REGIST_MATMUL_OBJ(&pipe, GetSysWorkSpacePtr(), matmulObj);\n    matmulObj.Init(&tiling);\n    matmulObj.SetTensorA(aGlobal);\n    matmulObj.SetTensorB(bGlobal);\n    matmulObj.SetBias(biasGlobal);\n     \n    while (matmulObj.template Iterate<true>()) { // 步骤2：进行MatMul内部的计算。\n        // 步骤3：将MatMul的计算结果搬运到Vector核上。\n        reluOutLocal = reluOutQueue_.AllocTensor<cType>();\n        matmulObj.template GetTensorC<true>(reluOutLocal, false, true);\n       // 步骤4：进行Vector矢量计算。\n        AscendC::LeakyRelu(reluOutLocal, reluOutLocal, (cType)alpha, tiling.baseM * tiling.baseN);\n        reluOutQueue_.EnQue(reluOutLocal);\n        // 步骤5：将输出结果搬运到Global Memory上\n        reluOutQueue_.DeQue<cType>();\n        // ...\n        AscendC::DataCopy(cGlobal[startOffset], reluOutLocal, copyParam);\n        reluOutQueue_.FreeTensor(reluOutLocal);\n \n        computeRound++;\n    }\n    matmulObj.End();\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "编程模型背后的奥秘",
      children: "编程模型背后的奥秘"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "由上文可知，AscendC的并行编程范式核心要素是：任务并行计算、队列管理通信和同步、自定义任务资源调度。本节介绍编程模型的实现原理，作为扩展阅读，便于开发者更好的理解编程模型的设计思路和优势，对于后续的深度开发也会有所帮助。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "每个并行任务Stage的编程范式如下。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["获取Local Memory的内存，调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-memory-management-and-synchronization/cannkit-tque/cannkit-tque-alloctensor",
          children: "AllocTensor"
        }), "申请内存，或者从上游队列", (0,jsx_runtime.jsx)(_components.a, {
          href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-memory-management-and-synchronization/cannkit-tque/cannkit-tque-deque",
          children: "DeQue"
        }), "一块内存数据。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "完成计算或者数据搬运。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["把上一步处理好的数据调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-memory-management-and-synchronization/cannkit-tque/cannkit-tque-enque",
          children: "EnQue"
        }), "入队。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-memory-management-and-synchronization/cannkit-tque/cannkit-tque-freetensor",
          children: "FreeTensor"
        }), "释放不再需要的内存。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以最简单的矢量编程范式为例，在调用上述接口时，实际上会给各执行单元下发一些指令，如下图所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(610079)/* ["default"] */.A) + "",
        width: "528",
        height: "330"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "enquedeque处理流程",
      children: "EnQue/DeQue处理流程"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "标量执行单元读取算子指令序列。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "把这些指令发射到对应的执行单元的指令队列。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "各个执行单元并行执行这些指令序列。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "EnQue/DeQue解决对内存的写后读问题。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "EnQue调用会发射同步指令set，发送信号激活wait。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "DeQue调用会发射同步指令wait，等待数据写入完成。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "wait需要等到set信号才能执行否则阻塞。"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(387216)/* ["default"] */.A) + "",
        width: "528",
        height: "527"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "由此可以看出，EnQue/DeQue主要解决了存在数据依赖时，并行执行单元的写后读同步控制问题。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(770182)/* ["default"] */.A) + "",
        width: "528",
        height: "146"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "alloctensorfreetensor处理流程",
      children: "AllocTensor/FreeTensor处理流程"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "标量执行单元读取算子指令序列。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "把这些指令发射到对应的执行单元的指令队列。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "各个执行单元并行执行这些指令序列。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "AllocTensor/FreeTensor，解决对内存的读后写问题。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "AllocTensor调用会发射同步指令wait等待内存被读完成。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "FreeTensor调用会发射同步指令set，通知内存释放，可以重复写。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "wait需要等到set信号才能执行否则阻塞。"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(549487)/* ["default"] */.A) + "",
        width: "528",
        height: "521"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "由此可以看出，AllocTensor/FreeTensor主要解决了存在数据依赖时，并行执行单元的读后写同步控制问题。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(567167)/* ["default"] */.A) + "",
        width: "528",
        height: "140"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过上文的详细说明，可以看出异步并行程序需要考虑复杂的同步控制，而AscendC编程模型将这些流程进行了封装，同时对外接口通过EnQue/DeQue/AllocTensor/FreeTensor这种开发者熟悉的资源控制方式来体现，同时达到了简化编程和易于理解的目的。"
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
387216(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439281-82c796dd510d3286497a350fedf4fcef.png");

},
283410(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959234-4200e2b5bffd9205e6124ad40ff5d04b.png");

},
549487(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479237-5ff13f097555bd83898caa20ae478148.png");

},
762962(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479235-360850999fbbe11caf2dcf4bb95fe406.png");

},
567167(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799588-c5f30c9534121facede17d7504176581.png");

},
770182(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959236-5542132c0fb47dd0ecdf0ac22b74a517.png");

},
349397(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439277-d4c321521cdb54c9e3e89740923b770a.png");

},
114706(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479231-4baecebee32576bb410bd424f4528233.png");

},
610079(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799586-09970a55328f4b3e95d467626ed36852.png");

},
146332(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959230-54e903df47abcce6ce3c69fa61bce7fb.png");

},
78826(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959232-81ad255f1695224db13dff4deccb5cce.png");

},
1472(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439279-1ce64f350d44a9fb5d67b71f89f21493.png");

},
745358(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799582-041046857f96120518ea4b9ea40cea9d.png");

},
348119(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799584-917fe48c5bd7fe0b638bd11973159d9e.png");

},
258801(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479233-1a4818af02e9320f7ab99ae87ca2164c.png");

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