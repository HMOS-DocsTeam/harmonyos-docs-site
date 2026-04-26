"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["436161"], {
976423(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_cann_kit_guide_cannkit_model_optimization_cannkit_lightweight_tool_instructions_cannkit_lightweight_tool_overview_cannkit_lightweight_tool_overview_md_567_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cann-kit-guide-cannkit-model-optimization-cannkit-lightweight-tool-instructions-cannkit-lightweight-tool-overview-cannkit-lightweight-tool-overview-md-567.json
var site_docs_cann_kit_guide_cannkit_model_optimization_cannkit_lightweight_tool_instructions_cannkit_lightweight_tool_overview_cannkit_lightweight_tool_overview_md_567_namespaceObject = JSON.parse('{"id":"cann-kit-guide/cannkit-model-optimization/cannkit-lightweight-tool-instructions/cannkit-lightweight-tool-overview/cannkit-lightweight-tool-overview","title":"概述","description":"简介","source":"@site/docs/cann-kit-guide/cannkit-model-optimization/cannkit-lightweight-tool-instructions/cannkit-lightweight-tool-overview/cannkit-lightweight-tool-overview.md","sourceDirName":"cann-kit-guide/cannkit-model-optimization/cannkit-lightweight-tool-instructions/cannkit-lightweight-tool-overview","slug":"/cann-kit-guide/cannkit-model-optimization/cannkit-lightweight-tool-instructions/cannkit-lightweight-tool-overview/","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-model-optimization/cannkit-lightweight-tool-instructions/cannkit-lightweight-tool-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"概述","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-lightweight-tool-overview","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Model Zoo","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-model-optimization/cannkit-model-zoo/"},"next":{"title":"无训练量化","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-model-optimization/cannkit-lightweight-tool-instructions/cannkit-no-training-and-quantization/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/cann-kit-guide/cannkit-model-optimization/cannkit-lightweight-tool-instructions/cannkit-lightweight-tool-overview/cannkit-lightweight-tool-overview.md


const frontMatter = {
	title: '概述',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-lightweight-tool-overview',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = '概述';

const assets = {

};



const toc = [{
  "value": "简介",
  "id": "简介",
  "level": 2
}, {
  "value": "支持范围",
  "id": "支持范围",
  "level": 2
}, {
  "value": "系统要求",
  "id": "系统要求",
  "level": 2
}, {
  "value": "开发者指引",
  "id": "开发者指引",
  "level": 2
}, {
  "value": "TensorFlow开发者",
  "id": "tensorflow开发者",
  "level": 3
}, {
  "value": "PyTorch开发者",
  "id": "pytorch开发者",
  "level": 3
}, {
  "value": "ONNX开发者",
  "id": "onnx开发者",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    img: "img",
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
        id: "概述",
        children: "概述"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "简介",
      children: "简介"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "轻量化工具是一款集模型压缩算法和网络结构搜索算法于一体的自动模型轻量化工具，针对NPU架构对深度神经网络模型进行深度的模型优化，可以帮助开发者自动地完成模型轻量化以及网络结构的生成任务。目前支持无训练模式、插件式量化模式、大语言模型低位量化和网络结构搜索训练。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "无训练量化：开发者可以直接输入模型，无需重训练，快速的完成模型轻量化。适用于快捷方便量化的开发者使用。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "插件式量化：为开发者提供模型量化API，在开发者训练工程中对浮点模型进行量化模型校准或量化模型重训练，易用性高，插件式重训练量化适用于较高精度要求的开发者。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "大语言模型低位量化：提供大语言模型的4bit低位量化支持。通过权重量化、激活量化和参数提取三段式执行流程，实现大模型压缩。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "网络结构搜索训练：支持分类网络、检测网络、分割网络三种网络类型。开发者配置相应的搜索参数和接口函数后，使用网络结构搜索工具进行搜索，在设定的算力约束下，得到优秀的网络模型。适用于需要自动生成网络结构的开发者。"
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "模式"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "支持的框架"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "支持的策略"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "支持的设备"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "无训练量化"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TensorFlow、PyTorch、ONNX"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quant_INT8-8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "同时支持CPU和GPU模式，GPU支持单机单卡。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "插件式量化"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TensorFlow、PyTorch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quant_INT8-8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持GPU，支持单机单卡。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "网络结构搜索训练"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TensorFlow、PyTorch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NASEA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持GPU，支持单机单卡和单机多卡。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "大语言模型低位量化"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PyTorch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quant_INT16-4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持GPU，量化蒸馏支持单机多卡。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(161768)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Quant_INT8-8：数据8bit量化，权重8bit量化。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Quant_INT16-4：数据16bit量化，权重4bit量化。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过模型轻量化以及网络结构搜索获得模型在NPU上的收益可以参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/cann-kit-guide/cannkit-model-optimization/cannkit-lightweight-tool-instructions/cannkit-model-benefits",
        children: "模型收益"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["经过轻量化工具小型化后的模型，可以使用OMG转换工具转为OM离线模型，使用方式可参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/cann-kit-guide/cannkit-model-conversion/cannkit-offline-model-conversion/cannkit-model-conversion-example#%E9%87%8F%E5%8C%96%E6%A8%A1%E5%9E%8B%E8%BD%AC%E6%8D%A2%E4%BB%A5caffe%E6%A8%A1%E5%9E%8B%E4%B8%BA%E4%BE%8B",
        children: "量化模型转换"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该轻量化工具位于\"tools_dopt\"目录下。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "目录文件"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "tools_dopt/dopt_tf_py3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TensorFlow框架无训练，插件式量化，网络结构搜索的工具入口以及demo。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "tools_dopt/dopt_pytorch_py3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PyTorch框架无训练，插件式，大语言模型量化，网络结构搜索的工具入口以及demo。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "tools_dopt/dopt_onnx_py3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ONNX框架无训练工具入口。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "支持范围",
      children: "支持范围"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "插件式支持GPU训练，单机单卡训练。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "无训练支持CPU和GPU量化。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "大语言模型低位量化支持GPU量化。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["网络结构搜索工具支持单机单卡和单机多卡，进行分类、检测、分割场景的骨架搜索，依赖运行环境参见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/cann-kit-guide/cannkit-model-optimization/cannkit-lightweight-tool-instructions/cannkit-network-structure-search-training#%E7%8E%AF%E5%A2%83%E5%87%86%E5%A4%87",
          children: "环境准备"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "系统要求",
      children: "系统要求"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "TensorFlow开发者使用本工具需同时满足下列环境要求："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Python 3.10"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Ubuntu 22.04"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Tensorflow 2.8.0"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "GPU需要使用支持CUDA的显卡（无训练量化可不配置）"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "PyTorch开发者使用本工具需同时满足下列环境要求："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Python 3.10"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Ubuntu 22.04"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "PyTorch 1.11"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "opencv-python"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "GPU需要使用支持CUDA的显卡（无训练量化可不配置）"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ONNX开发者使用本工具需同时满足下列环境要求："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Python 3.10"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Ubuntu 22.04"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "ONNX Runtime 1.15"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "ONNX 1.14"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发者指引",
      children: "开发者指引"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下面列举了不同开发者场景对应的步骤和工具链功能。开发者可以根据下表中列举的不同场景选择适宜的优化方式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tensorflow开发者",
      children: "TensorFlow开发者"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "开发者场景"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "使用依赖"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "工具链提供功能"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "建议使用工具"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "优势"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "- 缺少足量数据集和训练资源  - 追求高易用性"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "- 可运行TensorFlow环境  - 模型pb文件（需要开发者自行转换）  - 校准集"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quant_INT8-8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-model-optimization/cannkit-lightweight-tool-instructions/cannkit-no-training-and-quantization#tensorflow%E6%A8%A1%E5%9E%8B%E6%97%A0%E8%AE%AD%E7%BB%83%E9%87%8F%E5%8C%96",
              children: "TensorFlow无训练量化"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无需TensorFlow编写代码，新手开发者友好"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "- 对精度要求较高  - 有足够数据集和训练资源  - 有一定编程能力  - 持有模型训练工程"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "- 可运行TensorFlow环境  - 模型的ckpt文件  - 训练集  - 测试集  - 开发者需要在训练工程中调用轻量化工具API量化模型并进行重训练"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quant_INT8-8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-model-optimization/cannkit-lightweight-tool-instructions/cannkit-plugin-based-quantization#tensorflow%E6%8F%92%E4%BB%B6%E5%BC%8F%E9%87%8F%E5%8C%96",
              children: "TensorFlow插件式量化"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模型精度可保障"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "- 需要自动生成符合需求的网络结构"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["- ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-model-optimization/cannkit-lightweight-tool-instructions/cannkit-network-structure-search-training#%E7%8E%AF%E5%A2%83%E5%87%86%E5%A4%87",
              children: "环境准备"
            }), "  - 训练集  - 测试集  - 开发者需要根据说明书编写模型接口代码"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "搜索生成网络结构"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-model-optimization/cannkit-lightweight-tool-instructions/cannkit-network-structure-search-training",
              children: "网络结构搜索训练"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可根据开发者提供的配置信息自动搜索到在特定场景上表现优秀的网络结构"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pytorch开发者",
      children: "PyTorch开发者"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "开发者场景"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "使用依赖"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "工具链提供功能"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "建议使用工具"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "优势"
              })
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "- 缺少足量数据集和训练资源  - 追求高易用性"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "- 可运行PyTorch环境  - 模型参数文件pth  - python模型定义  - 校准集"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quant_INT8-8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-model-optimization/cannkit-lightweight-tool-instructions/cannkit-no-training-and-quantization#pytorch%E6%A8%A1%E5%9E%8B%E6%97%A0%E8%AE%AD%E7%BB%83%E9%87%8F%E5%8C%96",
              children: "PyTorch无训练量化"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无需PyTorch编写代码，新手开发者友好"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "- 对精度要求较高  - 有足够数据集和训练资源  - 有一定编程能力"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "- 可运行PyTorch环境  - 模型参数文件pth  - 训练集  - 测试集  - 开发者需要调用轻量化工具API量化模型并进行重训练"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quant_INT8-8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-model-optimization/cannkit-lightweight-tool-instructions/cannkit-plugin-based-quantization#pytorch%E6%8F%92%E4%BB%B6%E5%BC%8F%E9%87%8F%E5%8C%96",
              children: "PyTorch插件式量化"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模型精度可保障"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "- 需要自动生成符合需求的网络结构"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["- ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-model-optimization/cannkit-lightweight-tool-instructions/cannkit-network-structure-search-training#%E7%8E%AF%E5%A2%83%E5%87%86%E5%A4%87",
              children: "环境准备"
            }), "  - 训练集  - 测试集  - 开发者需要根据说明书编写模型接口代码"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "搜索生成网络结构"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-model-optimization/cannkit-lightweight-tool-instructions/cannkit-network-structure-search-training",
              children: "网络结构搜索训练"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可根据开发者提供的配置信息自动搜索到在特定场景上表现优秀的网络结构"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "- 需要对大语言模型进行4bit权重量化"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "- 训练集  - 开发者根据说明书生成配置文件和执行脚本  - 脚本执行量化"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quant_INT16-4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-model-optimization/cannkit-lightweight-tool-instructions/cannkit-large-language-model/cannkit-large-language-one-stop",
              children: "大语言模型低位量化"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "超大规模模型，权重压缩至4bit"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onnx开发者",
      children: "ONNX开发者"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "开发者场景"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "开发者需要准备"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "工具链提供功能"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "建议使用工具"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "优势"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "- 缺少足量数据集和训练资源  - 追求高易用性"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "- 可运行ONNX Runtime环境  - ONNX model  - 校准集"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quant_INT8-8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-model-optimization/cannkit-lightweight-tool-instructions/cannkit-no-training-and-quantization#onnx%E6%A8%A1%E5%9E%8B%E6%97%A0%E8%AE%AD%E7%BB%83%E9%87%8F%E5%8C%96",
              children: "ONNX模型无训练量化"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无需编写代码，新手开发者友好"
          })]
        })
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
161768(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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