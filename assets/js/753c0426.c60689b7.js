"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["420846"], {
8071(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_custom_operator_development_cannkit_operator_development_cannkit_operator_development_md_753_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cann-kit-guide-cannkit-ascendc-operator-development-cannkit-custom-operator-development-cannkit-operator-development-cannkit-operator-development-md-753.json
var site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_custom_operator_development_cannkit_operator_development_cannkit_operator_development_md_753_namespaceObject = JSON.parse('{"id":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-operator-development/cannkit-operator-development","title":"快速入门","description":"本节以一个简单算子为例，带开发者体验从算子工程创建、代码编写、编译部署到运行验证的开发全流程，让开发者对算子开发工程有个宏观的认识，此处我们以输入是动态shape的Add算子实现为例，为了与内置Add算子区分，定义算子类型为AddCustom。","source":"@site/docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-operator-development/cannkit-operator-development.md","sourceDirName":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-operator-development","slug":"/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-operator-development/","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-operator-development/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"快速入门","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-operator-development","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"环境准备","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-environment-preparation/"},"next":{"title":"基本架构","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-basic-concepts/cannkit-hardware-architecture/cannkit-basic-architecture/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-operator-development/cannkit-operator-development.md


const frontMatter = {
	title: '快速入门',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-operator-development',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = '快速入门';

const assets = {

};



const toc = [{
  "value": "工程创建",
  "id": "工程创建",
  "level": 2
}, {
  "value": "算子核函数实现",
  "id": "算子核函数实现",
  "level": 2
}, {
  "value": "Host侧算子实现",
  "id": "host侧算子实现",
  "level": 2
}, {
  "value": "算子工程编译部署",
  "id": "算子工程编译部署",
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
        id: "快速入门",
        children: "快速入门"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本节以一个简单算子为例，带开发者体验从算子工程创建、代码编写、编译部署到运行验证的开发全流程，让开发者对算子开发工程有个宏观的认识，此处我们以输入是动态shape的Add算子实现为例，为了与内置Add算子区分，定义算子类型为AddCustom。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "工程创建",
      children: "工程创建"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DDK软件包中提供了工程创建工具msOpGen，开发者可以输入算子原型定义文件生成AscendC算子开发工程。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编写AddCustom算子的原型定义json文件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "假设AddCustom算子的原型定义文件命名为add_custom.json，存储路径为: $HOME/sample，文件内容如下。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "[\n    {\n        \"op\": \"AddCustom\",\n        \"input_desc\": [\n            {\n                \"name\": \"x\",\n                \"param_type\": \"required\",\n                \"format\": [\n                    \"ND\"\n                ],\n                \"type\": [\n                    \"fp16\"\n                ]\n            },\n            {\n                \"name\": \"y\",\n                \"param_type\": \"required\",\n                \"format\": [\n                    \"ND\"\n                ],\n                \"type\": [\n                    \"fp16\"\n                ]\n            }\n        ],\n        \"output_desc\": [\n            {\n                \"name\": \"z\",\n                \"param_type\": \"required\",\n                \"format\": [\n                    \"ND\"\n                ],\n                \"type\": [\n                    \"fp16\"\n                ]\n            }\n        ]\n    }\n]\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["注意先设置环境变量，执行", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "source ${install_path}/ddk/"
            })
          }), " ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "tools/tools_ascendc/set_ascendc_env.sh"
            })
          }), "命令，其中${install_path}为tools包的解压目录。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用msOpGen工具生成AddCustom算子的开发工程。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "msopgen gen -i $HOME/sample/add_custom.json -c ai_core-<soc_version> -out   $HOME/sample/AddCustom\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "-i：算子原型定义文件add_custom.json所在路径。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "-c：ai_core-<soc_version>代表算子在AI Core上执行，<soc_version>为Kirin AI处理器的型号，可在运行环境通过命令进行查询:"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "hdc -t ${target} shell param get ohos.boot.chiptype\n"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "target：设备的SN码，可以通过hdc list targets获取当前运行环境上所有设备的SN码。"
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "样例："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "msopgen gen -i ./add_custom.json -c ai_core-kirin9020 -out ./AddCustom\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "基于同系列的AI处理器型号创建的算子工程，其基础能力通用。命令执行完后，会在$HOME/sample目录下生成算子工程目录AddCustom，工程中包含算子实现的模板文件，编译脚本等，如下所示。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "AddCustom\n├── build_devices.sh // 开发者无需关注，在线编译场景预留，编译device侧交付件脚本\n├── build.sh         // 编译入口脚本\n├── cmake\n│   ├── config.cmake\n│   ├── util        // 算子工程编译所需脚本及公共编译文件存放目录\n├── CMakeLists.txt   // 算子工程的CMakeLists.txt\n├── CMakePresets.json // 编译配置项\n├── framework        // 算子插件实现文件目录，单算子模型文件的生成不依赖算子适配插件，无需关注\n├── op_host                      // host侧实现文件\n│   ├── add_custom_tiling.h    // 算子tiling定义文件\n│   ├── add_custom.cpp         // 算子原型注册、shape推导、信息库、tiling实现等内容文件\n│   ├── CMakeLists.txt\n├── op_kernel                   // kernel侧实现文件\n│   ├── CMakeLists.txt\n│   ├── add_custom.cpp        // 算子核函数实现文件\n├── scripts                     // 自定义算子工程打包相关脚本所在目录\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(705048)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "上述目录结构中的粗体文件op_host/add_custom_tiling.h、op_host/add_custom.cpp、op_kernel/add_custom.cpp为后续算子开发过程中需要修改的文件，其他文件无需修改。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "算子核函数实现",
      children: "算子核函数实现"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在工程存储目录的\"AddCustom/op_kernel/add_custom.cpp\"文件中实现算子的核函数，完整的样例代码开发者可以在", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/HarmonyOS_Samples/cannkit_samplecode_add_custom_cpp/blob/master/FrameworkLaunch/AddCustom/op_kernel/add_custom.cpp",
        children: "add_custom.cpp"
      }), "中查看，下面介绍关键实现代码。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "算子核函数实现代码的内部调用关系示意图如下。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1"
        })
      }), " 核函数调用关系图"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(40423)/* ["default"] */.A) + "",
        width: "528",
        height: "146"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["由此可见除了Init函数完成初始化外，Process中完成了对流水任务 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "："
        })
      }), " 搬入、计算、搬出的调用，开发者可以重点关注三个流水任务的实现。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["进行", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "核函数的定义，"
            })
          }), " 并在核函数中调用算子类的Init和Process函数。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "extern \"C\" __global__ __aicore__ void add_custom(GM_ADDR x, GM_ADDR y, GM_ADDR z, GM_ADDR workspace, GM_ADDR tiling)\n{\n    // 获取Host侧传入的Tiling参数\n    GET_TILING_DATA(tiling_data, tiling);\n    // 初始化算子类\n    KernelAdd op;\n    // 算子类的初始化函数，完成内存初始化相关工作\n    op.Init(x, y, z, tiling_data.totalLength, tiling_data.tileNum);\n    // 完成算子实现的核心逻辑\n    op.Process();\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "定义KernelAdd算子类，其具体成员及成员函数实现如下。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include \"kernel_operator.h\"\nconstexpr int32_t BUFFER_NUM = 2;\nclass KernelAdd {\npublic:\n    __aicore__ inline KernelAdd() {}\n    // 初始化函数，完成内存初始化相关操作\n    __aicore__ inline void Init(GM_ADDR x, GM_ADDR y, GM_ADDR z, uint32_t totalLength, uint32_t tileNum)\n    {\n        // 使用获取到的TilingData计算得到singleCoreSize(每个核上总计算数据大小)、tileNum（每个核上分块个数）、singleTileLength（每个分块大小）等变量\n        this->blockLength = totalLength / AscendC::GetBlockNum();\n        this->tileNum = tileNum;\n        this->tileLength = this->blockLength / tileNum / BUFFER_NUM;\n         \n        // 获取当前核的起始索引\n        xGm.SetGlobalBuffer((__gm__ DTYPE_X*)x + this->blockLength * AscendC::GetBlockIdx(), this->blockLength);\n        yGm.SetGlobalBuffer((__gm__ DTYPE_Y*)y + this->blockLength * AscendC::GetBlockIdx(), this->blockLength);\n        zGm.SetGlobalBuffer((__gm__ DTYPE_Z*)z + this->blockLength * AscendC::GetBlockIdx(), this->blockLength);\n        // 通过Pipe内存管理对象为输入输出Queue分配内存\n        pipe.InitBuffer(inQueueX, BUFFER_NUM, this->tileLength * sizeof(DTYPE_X));\n        pipe.InitBuffer(inQueueY, BUFFER_NUM, this->tileLength * sizeof(DTYPE_Y));\n        pipe.InitBuffer(outQueueZ, BUFFER_NUM, this->tileLength * sizeof(DTYPE_Z));\n    }\n    // 核心处理函数，实现算子逻辑，调用私有成员函数CopyIn、Compute、CopyOut完成矢量算子的三级流水操作\n    __aicore__ inline void Process()\n    {\n        int32_t loopCount = this->tileNum * BUFFER_NUM;\n        for (int32_t i = 0; i < loopCount; i++) {\n            CopyIn(i);\n            Compute(i);\n            CopyOut(i);\n        }\n    }\n \n \nprivate:\n    // 搬入函数，完成CopyIn阶段的处理，被核心Process函数调用\n    __aicore__ inline void CopyIn(int32_t progress)\n    {\n        // 从Queue中分配输入Tensor\n        AscendC::LocalTensor<DTYPE_X> xLocal = inQueueX.AllocTensor<DTYPE_X>();\n        AscendC::LocalTensor<DTYPE_Y> yLocal = inQueueY.AllocTensor<DTYPE_Y>();\n         // 将GlobalTensor数据拷贝到LocalTensor\n        AscendC::DataCopy(xLocal, xGm[progress * this->tileLength], this->tileLength);\n        AscendC::DataCopy(yLocal, yGm[progress * this->tileLength], this->tileLength);\n        // 将LocalTensor放入VECIN（代表矢量编程中搬入数据的逻辑存放位置）的Queue中\n        inQueueX.EnQue(xLocal);\n        inQueueY.EnQue(yLocal);\n    }\n    // 计算函数，完成Compute阶段的处理，被核心Process函数调用\n    __aicore__ inline void Compute(int32_t progress)\n    {\n        // 将Tensor从队列中取出，用于后续计算\n        AscendC::LocalTensor<DTYPE_X> xLocal = inQueueX.DeQue<DTYPE_X>();\n        AscendC::LocalTensor<DTYPE_Y> yLocal = inQueueY.DeQue<DTYPE_Y>();\n        // 从Queue中分配输出Tensor\n        AscendC::LocalTensor<DTYPE_Z> zLocal = outQueueZ.AllocTensor<DTYPE_Z>();\n        // 调用Add接口进行计算\n        AscendC::Add(zLocal, xLocal, yLocal, this->tileLength);\n        // 将计算结果LocalTensor放入到VecOut的Queue中\n        outQueueZ.EnQue<DTYPE_Z>(zLocal);\n        // 释放输入Tensor\n        inQueueX.FreeTensor(xLocal);\n        inQueueY.FreeTensor(yLocal);\n    }\n    // 搬出函数，完成CopyOut阶段的处理，被核心Process函数调用\n    __aicore__ inline void CopyOut(int32_t progress)\n    {\n        // 从VecOut的Queue中取出输出Tensor\n        AscendC::LocalTensor<DTYPE_Z> zLocal = outQueueZ.DeQue<DTYPE_Z>();\n        // 将输出Tensor拷贝到GlobalTensor中\n        AscendC::DataCopy(zGm[progress * this->tileLength], zLocal, this->tileLength);\n        // 将不再使用的LocalTensor释放\n        outQueueZ.FreeTensor(zLocal);\n    }\n \n \nprivate:\n    // Pipe内存管理对象\n    AscendC::TPipe pipe;\n    // 输入数据Queue队列管理对象，QuePosition为VECIN\n    AscendC::TQue<AscendC::QuePosition::VECIN, 1> inQueueX, inQueueY;\n    // 输出数据Queue队列管理对象，QuePosition为VECOUT\n    AscendC::TQue<AscendC::QuePosition::VECOUT, 1> outQueueZ;\n    // 管理输入输出Global Memory内存地址的对象，其中xGm, yGm为输入，zGm为输出\n    AscendC::GlobalTensor<DTYPE_X> xGm;\n    AscendC::GlobalTensor<DTYPE_Y> yGm;\n    AscendC::GlobalTensor<DTYPE_Z> zGm;\n    // 每个核上总计算数据大小\n    uint32_t blockLength;\n    // 每个核上总计算数据分块个数\n    uint32_t tileNum;\n    // 每个分块大小\n    uint32_t tileLength;\n};\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "host侧算子实现",
      children: "Host侧算子实现"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["核函数开发并验证完成后，下一步就是进行Host侧的实现，对应“AddCustom/op_host”目录下的add_custom_tiling.h文件与add_custom.cpp文件。下面简要介绍下两个文件的关键实现，完整的样例代码可参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/HarmonyOS_Samples/cannkit_samplecode_add_custom_cpp/blob/master/FrameworkLaunch/AddCustom/op_host/add_custom_tiling.h",
        children: "add_custom_tiling.h"
      }), "与", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/HarmonyOS_Samples/cannkit_samplecode_add_custom_cpp/blob/master/FrameworkLaunch/AddCustom/op_host/add_custom.cpp",
        children: "add_custom.cpp"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "修改“add_custom_tiling.h”文件，在此文件中增加粗体部分的代码，进行Tiling参数的定义。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#ifndef ADD_CUSTOM_TILING_H\n#define ADD_CUSTOM_TILING_H\n#include \"register/tilingdata_base.h\"\nnamespace optiling {\nBEGIN_TILING_DATA_DEF(AddCustomTilingData)\n  // AddCustom算子使用了2个tiling参数：totalLength与tileNum\n  TILING_DATA_FIELD_DEF(uint32_t, totalLength);     // 总计算数据量\n  TILING_DATA_FIELD_DEF(uint32_t, tileNum);         // 每个核上总计算数据分块个数\nEND_TILING_DATA_DEF;\n \n// 注册tiling数据到对应的算子\nREGISTER_TILING_DATA_CLASS(AddCustom, AddCustomTilingData)\n}\n#endif // ADD_CUSTOM_TILING_H\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "修改“add_custom.cpp”文件，进行Tiling的实现。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "修改“TilingFunc”函数，实现Tiling上下文的获取，并通过上下文获取输入输出shape信息，并根据shape信息设置TilingData，序列化保存TilingData，并设置TilingKey。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "namespace optiling {\nconst uint32_t BLOCK_DIM = 1;\nconst uint32_t TILE_NUM = 8;\nstatic ge::graphStatus TilingFunc(gert::TilingContext* context)\n{\n    AddCustomTilingData tiling;\n    uint32_t totalLength = context->GetInputShape(0)->GetOriginShape().GetShapeSize();\n    context->SetBlockDim(BLOCK_DIM);\n    tiling.set_totalLength(totalLength);\n    tiling.set_tileNum(TILE_NUM);\n    tiling.SaveToBuffer(context->GetRawTilingData()->GetData(), context->GetRawTilingData()->GetCapacity());\n    context->GetRawTilingData()->SetDataSize(tiling.GetDataSize());\n    size_t *currentWorkspace = context->GetWorkspaceSizes(1);\n    currentWorkspace[0] = 0;\n    return ge::GRAPH_SUCCESS;\n}\n} // namespace optiling\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在“add_custom.cpp”文件中实现AddCustom算子的shape推导。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Add算子的输出shape等于输入shape，所以直接将输入shape赋给输出shape，当前msOpGen工具生成的代码“InferShape”函数无需修改。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "修改“add_custom.cpp”文件中的算子原型注册，此函数为入口函数。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "namespace ops {\nclass AddCustom : public OpDef {\npublic:\n    explicit AddCustom(const char* name) : OpDef(name)\n    {\n        // Add算子的第一个输入\n        this->Input(\"x\")\n            .ParamType(REQUIRED)    // 代表输入必选\n            .DataType({ ge::DT_FLOAT16, ge::DT_FLOAT, ge::DT_INT32 })   // 输入支持的数据类型\n            .Format({ ge::FORMAT_ND, ge::FORMAT_ND, ge::FORMAT_ND });   // 输入支持的数据格式\n        // Add算子的第二个输入\n        this->Input(\"y\")\n            .ParamType(REQUIRED)\n            .DataType({ ge::DT_FLOAT16, ge::DT_FLOAT, ge::DT_INT32 })\n            .Format({ ge::FORMAT_ND, ge::FORMAT_ND, ge::FORMAT_ND });\n        this->Output(\"z\")\n            .ParamType(REQUIRED)\n            .DataType({ ge::DT_FLOAT16, ge::DT_FLOAT, ge::DT_INT32 })\n            .Format({ ge::FORMAT_ND, ge::FORMAT_ND, ge::FORMAT_ND });\n        // 关联InferShape函数\n        this->SetInferShape(ge::InferShape);\n        // 关联Tiling函数\n        this->AICore()\n            .SetTiling(optiling::TilingFunc);\n        // 注册算子支持的AI处理器型号，请替换为实际支持的AI处理器型号,如kirin9020\n        this->AICore().AddConfig(\"kirinxxx\");\n    }\n};\n// 结束算子注册\nOP_ADD(AddCustom);\n} // namespace ops\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "算子工程编译部署",
      children: "算子工程编译部署"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "编译AddCustom工程，生成自定义算子安装包，并将其安装到算子库中。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编译自定义算子工程，构建生成自定义算子包。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在算子工程AddCustom目录下执行如下命令，进行算子工程编译。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "./build.sh\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编译成功后，会在当前目录下创建build_out目录，在build_out/autogen目录下生成自定义算子交付件。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "自定义算子安装包部署。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在执行编译的同时，会将交付件安装到DDK安装目录${DDK_INSTALL_PATH}下的指定目录。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "${DDK_INSTALL_PATH}/tools/platform\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "查看部署后的目录结构，如下所示："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "platform                            // 平台插件目录\n├── kirin9020                       // Kirin AI处理器类型\n│   ├── config\n│   │   └── npu_custom_opinfo.json  // 算子信息库\n│   ├── lib64\n│   │   └── libcustom_op.so         // host侧二进制文件\n│   ├── ops\n│   │   └── impl\n│   │       ├── custom              // kernel交付件\n│   │       │   ├── add_custom.cpp\n│   │       │   ├── add_custom.py\n│   │       │   └── op_proto.h\n│   │       └── impl\n│   └── simulator\n└── README.md\n"
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
705048(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
40423(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959224-0630d1e9f7a9c0b77b28d89973b809ce.png");

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