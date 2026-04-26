"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["441459"], {
637981(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_cann_kit_guide_cannkit_model_optimization_cannkit_lightweight_tool_instructions_cannkit_large_language_model_cannkit_large_language_one_stop_cannkit_large_language_one_stop_md_bc8_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cann-kit-guide-cannkit-model-optimization-cannkit-lightweight-tool-instructions-cannkit-large-language-model-cannkit-large-language-one-stop-cannkit-large-language-one-stop-md-bc8.json
var site_docs_cann_kit_guide_cannkit_model_optimization_cannkit_lightweight_tool_instructions_cannkit_large_language_model_cannkit_large_language_one_stop_cannkit_large_language_one_stop_md_bc8_namespaceObject = JSON.parse('{"id":"cann-kit-guide/cannkit-model-optimization/cannkit-lightweight-tool-instructions/cannkit-large-language-model/cannkit-large-language-one-stop/cannkit-large-language-one-stop","title":"LLM模型一站式量化","description":"简介","source":"@site/docs/cann-kit-guide/cannkit-model-optimization/cannkit-lightweight-tool-instructions/cannkit-large-language-model/cannkit-large-language-one-stop/cannkit-large-language-one-stop.md","sourceDirName":"cann-kit-guide/cannkit-model-optimization/cannkit-lightweight-tool-instructions/cannkit-large-language-model/cannkit-large-language-one-stop","slug":"/cann-kit-guide/cannkit-model-optimization/cannkit-lightweight-tool-instructions/cannkit-large-language-model/cannkit-large-language-one-stop/","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-model-optimization/cannkit-lightweight-tool-instructions/cannkit-large-language-model/cannkit-large-language-one-stop/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"LLM模型一站式量化","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-large-language-one-stop","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"插件式量化","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-model-optimization/cannkit-lightweight-tool-instructions/cannkit-plugin-based-quantization/"},"next":{"title":"插件式量化","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-model-optimization/cannkit-lightweight-tool-instructions/cannkit-large-language-model/cannkit-plug-in-quantification/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/cann-kit-guide/cannkit-model-optimization/cannkit-lightweight-tool-instructions/cannkit-large-language-model/cannkit-large-language-one-stop/cannkit-large-language-one-stop.md


const frontMatter = {
	title: 'LLM模型一站式量化',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-large-language-one-stop',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = 'LLM模型一站式量化';

const assets = {

};



const toc = [{
  "value": "简介",
  "id": "简介",
  "level": 2
}, {
  "value": "量化前准备工作",
  "id": "量化前准备工作",
  "level": 2
}, {
  "value": "config.yaml示例",
  "id": "configyaml示例",
  "level": 3
}, {
  "value": "config.yaml配置参数说明",
  "id": "configyaml配置参数说明",
  "level": 3
}, {
  "value": "执行三段式量化",
  "id": "执行三段式量化",
  "level": 2
}, {
  "value": "run.sh示例",
  "id": "runsh示例",
  "level": 3
}, {
  "value": "dopt_config.json量化配置文件说明",
  "id": "dopt_configjson量化配置文件说明",
  "level": 3
}, {
  "value": "量化工具输出件",
  "id": "量化工具输出件",
  "level": 2
}, {
  "value": "量化仿真",
  "id": "量化仿真",
  "level": 2
}, {
  "value": "插件方法",
  "id": "插件方法",
  "level": 3
}, {
  "value": "qwen2模型量化仿真推理demo",
  "id": "qwen2模型量化仿真推理demo",
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
        id: "llm模型一站式量化",
        children: "LLM模型一站式量化"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "简介",
      children: "简介"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本工具提供大语言模型（Large Language Model，以下简称LLM）的4bit低位量化能力，采用标准的三段式量化流程：权重量化、激活量化和量化参数提取。三段式量化流程说明如下表所示。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表1"
        })
      }), " 大语言模型4bit低位量化三阶段流程"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "阶段"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "输入"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "输出"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "阶段一（权重量化）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "- 开发者提供  - JSON数据集（text字段作为prompt）  - HuggingFace模型路径（开发者浮点模型）  - 量化配置及执行文件  - config.yaml  - run.sh"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["- dopt_config.json：开发者需完成该文件的量化策略配置后，重新执行此阶段  - trained_quant_weight.pth：权重量化参数  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 开发者需根据阶段一生成的dopt_config.json文件手动进行量化策略配置后，再次执行该阶段。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "阶段二（激活量化）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "- 开发者提供  - JSON数据集（text字段作为prompt）  - HuggingFace模型路径（开发者浮点模型）  - 量化配置及执行文件  - config.yaml  - run.sh"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "trained.pth：用于阶段三加载或量化仿真验证"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "阶段三（量化参数提取）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "- 开发者提供  - JSON数据集（text字段作为prompt）  - HuggingFace模型路径（开发者浮点模型）  - 量化配置及执行文件  - config.yaml  - run.sh"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "- fake_quant_weight.pth：用于ONNX模型导出  - quant_params_file：权重及激活量化参数"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "量化前准备工作",
      children: "量化前准备工作"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "HuggingFace浮点模型"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "JSON格式数据集，使用“text”字段作为prompt关键字"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["量化配置文件", (0,jsx_runtime.jsx)(_components.a, {
          href: "#configyaml%E7%A4%BA%E4%BE%8B",
          children: "config.yaml"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "#runsh%E7%A4%BA%E4%BE%8B",
          children: "run.sh"
        }), "执行脚本"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(22396)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "LLM在量化过程中使用AutoModelForCausalLM以及AutoTokenizer加载，所以开发者的HuggingFace浮点模型需要满足该加载方式约束。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "run.sh执行脚本环境须与开发者推理或者训练环境保持一致，否则模型加载或推理失败。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "configyaml示例",
      children: "config.yaml示例"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["config.yaml用于模型量化配置，开发者可根据实际需要进行配置。以下示例可供参考，主要参数说明请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "#configyaml%E9%85%8D%E7%BD%AE%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E",
        children: "config.yaml配置参数说明"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "kd:\n  enable: False\n  loss: mse\n  micro_batch_size: 2\n  gradient_accumulation_steps: 4\n  weight_decay: 0.0\n  warmup_steps: 10\n  num_epochs: 3\n  learning_rate: !!float 1e-4\n  eval_step: 1\n  logging_step: 50\n  lr_scheduler_type: cosine\n  trainable_keys:\n    - quant_alpha\n    - norm\n  no_split_module_classes:\n    - Qwen2DecoderLayer\n    - GlmDecoderLayer\n    - LlamaDecoderLayer\n    - HunYuanDecoderLayer\ndataset:\n  train_files: dataset.json\n  train_samples: 1024\n  ptq_samples: 1024\nextra_training_config:\n  fp16: True\ncutoff_len: 128\nnum_samples: 256\nquant_param_2: False\nembedding_separate: True\nlm_head_size:\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "configyaml配置参数说明",
      children: "config.yaml配置参数说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下为config.yaml文件的关键配置参数，具体说明如下表所示。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "默认取值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "kd：量化蒸馏相关"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "enable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "False"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "- True：使用蒸馏量化策略  - False：使用无训练量化策略，速度快，效果较稳定"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "kd：量化蒸馏相关"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "loss"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "mse"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "量化蒸馏损失函数，仅支持mse"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "kd：量化蒸馏相关"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "micro_batch_size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "单卡batch"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "kd：量化蒸馏相关"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "gradient_accumulation_steps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "梯度累计步数"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "kd：量化蒸馏相关"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "weight_decay"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "权重衰减系数"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "kd：量化蒸馏相关"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "warmup_steps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "预热步数"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "kd：量化蒸馏相关"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "num_epochs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "训练迭代次数"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "kd：量化蒸馏相关"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "learning_rate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1e-4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "学习率"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "kd：量化蒸馏相关"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "logging_step"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "log打印步数"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "kd：量化蒸馏相关"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "lr_scheduler_type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "cosine"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "学习率调整策略。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "kd：量化蒸馏相关"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "trainable_keys"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "配置可训练参数。  - quant_alpha：量化层的可训练参数  - norm：layer_norm层的可训练参数"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "kd：量化蒸馏相关"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "no_split_module_classes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "多卡切分时，选择切分粒度。  - Qwen2DecoderLayer  - GlmDecoderLayer  - LlamaDecoderLayer  - HunYuanDecoderLayer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dataset"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "train_files"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JSON格式训练数据文件，dataset.json"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dataset"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "train_samples"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1024"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "kd使能为True时， 训练集样本数，缺省默认全量数据集"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dataset"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ptq_samples"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1024"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PTQ优化样本数，缺省默认全量数据集"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dataset"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "extra_training_config"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "fp16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "训练数据类型，仅支持fp16"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dataset"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "cutoff_len"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "128"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "激活量化样本序列长度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dataset"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "num_samples"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "256"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "激活量化校准样本数"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dataset"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "quant_param_2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "False"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "- True：Kirin9020  - False：KirinX90"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dataset"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "embedding_separate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "True"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "- True：单独保存为bin文件  - False: 导出embedding的量化参数到量化文件，合并形态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dataset"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "lm_head_size:"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可指定lmhead长度，硬件对齐。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "执行三段式量化",
      children: "执行三段式量化"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["按以下步骤执行run.sh文件，stagex为传入参数，具体可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#runsh%E7%A4%BA%E4%BE%8B",
        children: "run.sh示例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "权重量化。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "选配量化策略。"
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["生成插件式量化配置文件", (0,jsx_runtime.jsx)(_components.a, {
                href: "#dopt_configjson%E9%87%8F%E5%8C%96%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E8%AF%B4%E6%98%8E",
                children: "dopt_config.json"
              }), "。"]
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "bash run.sh stage1\n"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "量化策略可选配置为："
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "Quant_act_weight_eco   decode层策略\nQuant_lm_head          lm_head层策略\nQuant_Embed_MinMax     embedding层策略\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "进行权重量化。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: " bash run.sh stage1\n"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "激活量化。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "bash run.sh stage2\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "提取量化参数。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "bash run.sh stage3\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "runsh示例",
      children: "run.sh示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#!/bin/bash\nset -e\nqlibs='path/to/dopt_pytorch_py3'\nexport WANDB_DISABLED=true\nexport HF_DATASETS_OFFLINE=0\nexport PYTHONPATH=${qlibs}:$PYTHONPATH\n# 设置为cuda或npu模式，二选一\n# cuda模式\nexport DEVICE=cuda\nexport CUDA_VISIBLE_DEVICES=1\n# npu模式\n# export DEVICE=npu\n# export ASCEND_RT_VISIBLE_DEVICES=2,3\nROOT=.\ntestcase='output_dir'\nRUN_FILE=${qlibs}/dopt/dopt_lm/opt_main.py\noutput_dir=${ROOT}/${testcase}/train_output\nmkdir -p ${output_dir}\ncp ${ROOT}/config.yaml $output_dir\nmodel_path='path/to/model'\ndopt_config=./${testcase}/dopt_config.json\nquant_stage=$1\nblock_size=128\npython -u \\\n    ${RUN_FILE} --model-path $model_path \\\n    --dopt-config $dopt_config \\\n    --optimize-config ${ROOT}/config.yaml \\\n    --quant-stage $quant_stage \\\n    --block-size $block_size \\\n    --output-dir ${output_dir} 2>&1 | tee ${output_dir}/logs.log\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dopt_configjson量化配置文件说明",
      children: "dopt_config.json量化配置文件说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "工具支持开发者插件式自定义LLM量化规格："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "逐层权重量化位宽(bit)和分组大小(group_size)。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "逐层激活量化位宽(bit)。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "量化策略：decoder层使用\"Quant_act_weight_eco\"，lm_head层使用\"Quant_lm_head\"，embedding层使用\"Quant_Embed_MinMax\"。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n     \"layer_strategy\": {\n         \"model.layers.0.self_attn.q_proj\": {\n             \"type\": \"<class 'torch.nn.modules.linear.Linear'>\",\n             \"quant_strategy\": \"Quant_act_weight_eco\",\n             \"weight\":{\n                 \"bit\": 4,\n                 \"group_size\": 64\n             }\n             \"input\":{\n                 \"bit\": 16\n             }\n         }\n }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "量化工具输出件",
      children: "量化工具输出件"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "trained.pth            ### 量化仿真可使用该文件\nfake_quant_weight.pth  ### 导出onnx文件使用该权重\ntrained_quant_weight.pth ### 阶段一的输出，阶段二的输入\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "量化仿真",
      children: "量化仿真"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["量化完成后，开发者可进行量化仿真推理，通过对比量化模型与原始浮点模型的输出结果，来评估量化模型精度是否满足要求。量化仿真推理工程可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#qwen2%E6%A8%A1%E5%9E%8B%E9%87%8F%E5%8C%96%E4%BB%BF%E7%9C%9F%E6%8E%A8%E7%90%86demo",
        children: "qwen2模型量化仿真推理demo"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(971997)/* ["default"] */.A) + "",
        width: "525",
        height: "146"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "插件方法",
      children: "插件方法"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["浮点模型完成加载和初始化后，使用以下接口将浮点模型转换为量化模型，模型推理逻辑不变，可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#qwen2%E6%A8%A1%E5%9E%8B%E9%87%8F%E5%8C%96%E4%BB%BF%E7%9C%9F%E6%8E%A8%E7%90%86demo",
        children: "qwen2模型量化仿真推理demo"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import sys\nsys.path.append(\"path/to/dopt\")\ndef get_quanted_model(base_model, dopt_config, quanted_ckpt):\n     from dopt.dopt_lm.do_opt import(\n         optimize_model,\n         set_quant_state,\n         set_calibrate_state,\n         set_run_mode,\n     )\n     model = optimize_model(base_model, dopt_config)\n     model.load_state_dict(torch.load(quanted_ckpt, map_location=torch.device('cpu')), strict=True)\n     set_quant_state(model, weight_state=True, input_state=True)\n     set_calibrate_state(model, False)\n     model.eval()\n     return model\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "base_model：开发者浮点模型（使用transformers库AutoModelForCausalLM类进行加载）。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "dopt_config：量化配置文件。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "quanted_ckpt：量化后pth文件。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "qwen2模型量化仿真推理demo",
      children: "qwen2模型量化仿真推理demo"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import os\nimport sys\nimport torch\nfrom transformers import AutoModelForCausalLM, AutoTokenizer\nsys.path.append('path/to/dopt')\nos.environ[\"CUDA_VISIBLE_DEVICES\"] = \"0\"\ndef get_quanted_model(base_model, dopt_config, quanted_ckpt):\n    \"\"\"\n    加载量化模型核心函数\n    :param base_model: 原始HF模型对象\n    :param dopt_config: 量化配置文件路径（dopt_config.json）\n    :param quanted_ckpt: 量化权重路径（trained.pth）\n    :return: 量化后的模型\n    \"\"\"\n    from dopt.dopt_lm.do_opt import(\n        optimize_model,\n        set_quant_state,\n        set_calibrate_state,\n        set_run_mode,\n    )\n    # 模型量化优化（根据配置文件应用4bit量化策略）\n    model = optimize_model(base_model, dopt_config)\n    # 加载量化权重（强制CPU加载避免显存冲突）\n    model.load_state_dict(torch.load(quanted_ckpt, map_location=torch.device('cpu')), strict=True)\n    # 设置量化状态\n    set_quant_state(model, weight_state=True, input_state=True)  # 启用权重和激活量化\n    set_calibrate_state(model, False)  # 关闭校准模式\n    model.eval()\n    return model\ndef generate(prompt = \"Give me a short introduction to large language model.\"):\n    \"\"\"\n    量化模型推理函数\n    :param prompt: 输入文本（默认示例prompt）\n    :return: 模型生成的响应\n    \"\"\"\n    # 构建Qwen2专用对话模板\n    messages = [\n        {\"role\": \"system\", \"content\": \"You are Qwen, created by Alibaba Cloud...\"},\n        {\"role\": \"user\", \"content\": prompt}\n    ]\n    # 应用模板并tokenize\n    text = tokenizer.apply_chat_template(\n        messages,\n        tokenize=False,\n        add_generation_prompt=True\n    )\n    model_inputs = tokenizer([text], return_tensors=\"pt\").to(model.device)\n    # 执行生成\n    generated_ids = model.generate(\n        **model_inputs,\n        max_new_tokens=512,  # 控制最大生成长度\n    )\n    # 后处理：去除输入部分\n    generated_ids = [\n        output_ids[len(input_ids):]\n        for input_ids, output_ids in zip(model_inputs.input_ids, generated_ids)\n    ]\n    return tokenizer.batch_decode(generated_ids, skip_special_tokens=True)[0]\nif __name__ == '__main__':\n    # === 1. 加载原始模型 ===\n    model_name = \"path/to/model\"  # 需替换为实际模型路径\n    model = AutoModelForCausalLM.from_pretrained(\n        model_name,\n        torch_dtype=torch.float16,  # 半精度加载\n        device_map=\"auto\"           # 自动分配GPU\n    )\n    tokenizer = AutoTokenizer.from_pretrained(model_name)\n    # === 2. 加载量化模型 ===\n    quant_res_root = 'dsr1_qwen7b_ptq'  # 量化结果目录\n    dopt_config = f\"./{quant_res_root}/dopt_config.json\"    # 阶段一生成的配置文件\n    quanted_ckpt = f\"./{quant_res_root}/train_output/trained.pth\"  # 阶段二生成的权重\n    model = get_quanted_model(\n        model,\n        dopt_config,  # 需确保已正确配置量化参数\n        quanted_ckpt   # 需与当前模型架构匹配\n    )\n    # === 3. 执行推理测试 ===\n    prompt = \"who are you?\"\n    response = generate(prompt)\n    print(\"量化模型推理结果：\", response)\n    \"\"\"\n    预期输出示例：\n    \"Hi, I am Qwen, ...\"\n    \"\"\"\n"
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
971997(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799560-7fcdf658f477a2c9b9fe633e46648492.jpg");

},
22396(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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