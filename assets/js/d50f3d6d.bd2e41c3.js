"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["305652"], {
515907(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_cann_kit_guide_cannkit_model_optimization_cannkit_lightweight_tool_instructions_cannkit_large_language_model_cannkit_external_lora_fine_tuning_cannkit_external_lora_fine_tuning_md_d50_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cann-kit-guide-cannkit-model-optimization-cannkit-lightweight-tool-instructions-cannkit-large-language-model-cannkit-external-lora-fine-tuning-cannkit-external-lora-fine-tuning-md-d50.json
var site_docs_cann_kit_guide_cannkit_model_optimization_cannkit_lightweight_tool_instructions_cannkit_large_language_model_cannkit_external_lora_fine_tuning_cannkit_external_lora_fine_tuning_md_d50_namespaceObject = JSON.parse('{"id":"cann-kit-guide/cannkit-model-optimization/cannkit-lightweight-tool-instructions/cannkit-large-language-model/cannkit-external-lora-fine-tuning/cannkit-external-lora-fine-tuning","title":"量化基模外挂LoRA微调","description":"简介","source":"@site/docs/cann-kit-guide/cannkit-model-optimization/cannkit-lightweight-tool-instructions/cannkit-large-language-model/cannkit-external-lora-fine-tuning/cannkit-external-lora-fine-tuning.md","sourceDirName":"cann-kit-guide/cannkit-model-optimization/cannkit-lightweight-tool-instructions/cannkit-large-language-model/cannkit-external-lora-fine-tuning","slug":"/cann-kit-guide/cannkit-model-optimization/cannkit-lightweight-tool-instructions/cannkit-large-language-model/cannkit-external-lora-fine-tuning/","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-model-optimization/cannkit-lightweight-tool-instructions/cannkit-large-language-model/cannkit-external-lora-fine-tuning/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"量化基模外挂LoRA微调","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-external-lora-fine-tuning","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"插件式量化","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-model-optimization/cannkit-lightweight-tool-instructions/cannkit-large-language-model/cannkit-plug-in-quantification/"},"next":{"title":"网络结构搜索训练","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-model-optimization/cannkit-lightweight-tool-instructions/cannkit-network-structure-search-training/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/cann-kit-guide/cannkit-model-optimization/cannkit-lightweight-tool-instructions/cannkit-large-language-model/cannkit-external-lora-fine-tuning/cannkit-external-lora-fine-tuning.md


const frontMatter = {
	title: '量化基模外挂LoRA微调',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-external-lora-fine-tuning',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = '量化基模外挂LoRA微调';

const assets = {

};



const toc = [{
  "value": "简介",
  "id": "简介",
  "level": 2
}, {
  "value": "修改基模配置文件",
  "id": "修改基模配置文件",
  "level": 2
}, {
  "value": "插件式接口使用",
  "id": "插件式接口使用",
  "level": 2
}, {
  "value": "微调模型",
  "id": "微调模型",
  "level": 2
}, {
  "value": "导出量化参数",
  "id": "导出量化参数",
  "level": 2
}, {
  "value": "导出ONNX模型",
  "id": "导出onnx模型",
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
    ol: "ol",
    p: "p",
    pre: "pre",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "量化基模外挂lora微调",
        children: "量化基模外挂LoRA微调"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "简介",
      children: "简介"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Transform结构作为基模完成量化后，可支持基模结构挂载LoRA分支进行特定场景训练。即量化基模+浮点LoRA的结构微调，作用于量化损失修复和下游场景任务续训。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "微调准备："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "浮点模型:Huggingface开源形式加载即可"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "量化策略文件: 基于基模量化，需要新增LoRA config配置"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "量化基模权重: 基于基模量化保存的trained.pth"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "微调框架：Transform Trainer库架构，或者用户自定义训练架构"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "微调步骤："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "修改基模量化策略文件，增加LoRA相关配置"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "使用插件式接口进行模型改造"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "微调模型"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "保存训练后模型参数"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "导出量化参数"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "导出ONNX模型"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "修改基模配置文件",
      children: "修改基模配置文件"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n    \"layer_strategy\": {\n        \"time_embedding.linear_1\": {\n            \"type\": \"<class 'torch.nn.modules.linear.Linear'>\",\n            \"quant_strategy\": \"XXX\",  ### 基模策略\n            ### 新增外挂lora，追加以下内容\n            \"lora_config\": {\n                \"rank\": 32,\n                \"alpha\": 32,\n                \"quant_state\": false\n            }\n        }\n}\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "quant_state为LoRA结构的量化使能标志，训练时建议使用false，即使用浮点LoRA训练。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "插件式接口使用",
      children: "插件式接口使用"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import os\nimport torch\nfrom dopt.dopt_lm.do_opt import (\n    generate_config_file,\n    optimize_model,\n    set_trainable_lora\n)\n### dopt lora ####\ndopt_config = \"dopt_config_withlora.json\"\nmodel = \"your model define\"\nif not os.path.exists(dopt_config):\n    generate_config_file(model, dopt_config)\n    exit()\nmodel = optimize_model(model, dopt_config)     ### 基于基模策略文件，已经完成添加lora配置\nmodel.load_state_dict(torch.load('xxx.pth'))   ### 基模量化权重trained.pth  strict=False\nmodel = set_trainable_lora(model, initia_method='gaussian')\n## 即可获得外挂浮点lora+量化基模的torch模型，且支持lora参数可学习，其余参数冻结，支持lora微调。\n## initia_method：初始化方法可选：\"kaiming\", \"gaussian\", \"pissa\" , 或者不传参默认全0构造。\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "微调模型",
      children: "微调模型"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "简单示例：可根据自己需求设计训练框架。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import torch\nfrom datasets import load_dataset\nfrom transformers import (\n    AutoModelForCausalLM, # 或 AutoModelForSequenceClassification, etc.\n    AutoTokenizer,\n    TrainingArguments,\n    Trainer,\n    DataCollatorForLanguageModeling\n)\nfrom dopt.dopt_lm.do_opt import (\n    optimize_model,\n    set_trainable_lora\n)\n# -------------------- 1. 定义模型和分词器 --------------------\n# 这是一个用于文本生成的 LLM 示例，您可以替换为任何其他任务的模型\nMODEL_NAME = \"facebook/opt-125m\" # 替换为您想微调的模型\nOUTPUT_DIR = \"./opt_lora_finetuned\"\nMAX_SEQ_LENGTH = 128\ntokenizer = AutoTokenizer.from_pretrained(MODEL_NAME)\n# 很多 LLM 没有 pad_token，需要在 LoRA/PEFT 训练中设置\nif tokenizer.pad_token is None:\n    tokenizer.pad_token = tokenizer.eos_token\n# 加载基座模型\nmodel = AutoModelForCausalLM.from_pretrained(\n    MODEL_NAME,\n    device_map=\"auto\"\n)\n# -------------------- 2. LoRA使能 --------------------\n## 基于基模策略文件，已经完成添加lora配置\ndopt_config = \"dopt_config.json\"\nmodel = optimize_model(model, dopt_config)\n## 基模量化权重 trained.pth  strict=False\nmodel.load_state_dict(torch.load('xxx.pth'), strict=False)\nmodel = set_trainable_lora(model, initia_method='gaussian')\n# -------------------- 3. 数据集准备和预处理 --------------------\n# 示例：加载一个简单的文本数据集\ndataset = load_dataset(\"Abirate/english_quotes\", split=\"train\")\ndef preprocess_function(examples):\n    # 简单的格式化：将 quote 和 author 连接起来\n    texts = [f\"Quote: {q}\\nAuthor: {a}\" for q, a in zip(examples[\"quote\"], examples[\"author\"])]\n    # 使用 tokenizer 进行编码\n    return tokenizer(texts,\n                     padding=\"max_length\",\n                     truncation=True,\n                     max_length=MAX_SEQ_LENGTH)\n# 应用预处理\ntokenized_dataset = dataset.map(\n    preprocess_function,\n    batched=True,\n    remove_columns=[\"quote\", \"author\"]\n)\n# 分割训练集和验证集 (可选)\ntokenized_dataset = tokenized_dataset.train_test_split(test_size=0.1)\ntrain_dataset = tokenized_dataset[\"train\"]\neval_dataset = tokenized_dataset[\"test\"]\n# Data Collator: 对于 LLM 训练，使用 DataCollatorForLanguageModeling\ndata_collator = DataCollatorForLanguageModeling(\n    tokenizer=tokenizer,\n    mlm=False # Causal LM (GPT-style) 训练设置为 False\n)\n# -------------------- 4. 训练参数和 Trainer --------------------\ntraining_args = TrainingArguments(\n    output_dir=OUTPUT_DIR,\n    per_device_train_batch_size=4,\n    gradient_accumulation_steps=4, # 模拟更大的 batch size (4 * 4 = 16)\n    warmup_steps=100,\n    max_steps=500, # 限制训练步数，以加快演示速度\n    learning_rate=2e-4, # LoRA 通常可以使用更高的学习率\n    logging_steps=50,\n    save_strategy=\"steps\",\n    save_steps=500,\n    do_eval=True,\n    evaluation_strategy=\"steps\",\n    eval_steps=500,\n    fp16=True, # 启用混合精度训练以提高速度\n)\n# 初始化 Trainer\ntrainer = Trainer(\n    model=model,\n    args=training_args,\n    train_dataset=train_dataset,\n    eval_dataset=eval_dataset,\n    tokenizer=tokenizer,\n    data_collator=data_collator,\n)\n# -------------------- 5. 开始训练 --------------------\nprint(\"\\n\" + \"=\"*20 + \" 开始 LoRA 训练 \" + \"=\"*20)\ntrainer.train()\nprint(\"=\"*20 + \" 训练完成 \" + \"=\"*20)\n# -------------------- 6. 保存 LoRA 适配器 --------------------\ntorch.save(model.state_dict(), 'trained_lora.pth')\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "导出量化参数",
      children: "导出量化参数"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/cann-kit-guide/cannkit-model-optimization/cannkit-lightweight-tool-instructions/cannkit-large-language-model/cannkit-plug-in-quantification#%E9%87%8F%E5%8C%96%E5%8F%82%E6%95%B0%E6%8F%90%E5%8F%96%E5%AF%BC%E5%87%BA",
        children: "量化参数提取导出"
      }), "。量化参数导出的作用是输出量化文件和导出onnx所用的fake_quant_weight.pth。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "导出onnx模型",
      children: "导出ONNX模型"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import os\nimport sys\nimport onnx\nimport torch\nimport tempfile\nfrom onnxsim import simplify\nsys.path.append('path/to/dopt_tool')\nfrom dopt.common_utils.onnx_helper import OnnxHelper\nfrom dopt.dopt_lm.do_opt import (\n    optimize_model,\n    set_quant_state\n)\ndef aigc_model_save(onnx_model, save_path):\n    model_size = onnx_model.ByteSize()\n    file_name = os.path.basename(save_path)\n    if model_size > 2 * 1024 * 1024 * 1024:\n        logging.info(f\"Current ONNX model size is over than 2GB\")\n        onnx.save(onnx_model, save_path, save_as_external_data=True,\n                        all_tensors_to_one_file=True, location=f'{file_name}.data',\n                        size_threshold=1024, convert_attribute=False\n        )\n    else:\n        from onnx.shape_inference import infer_shapes\n        onnx_model = infer_shapes(onnx_model)\n        onnx.save(onnx_model, save_path)\ntransformer_model = \"your model define\"\ntransformer_model = optimize_model(transformer_model, './dopt_config.json')\ntransformer_model.load_state_dict(torch.load('trained_lora.pth'))\nset_quant_state(transformer_model, False, False)\n## 根据模型输入，随机生成导出onnx所用的输入。\ndummy_input = ()\ntransformer_model(*dummy_input) ### 检查模型前向推理\n## set you onnx input and output node name\ninput_names=[\"in0_name\", \"in1_name\", \"...\"]\noutput_names=[\"out0_name\", \"out1_name\", \"...\"]\nonnx_save_path = './xxx.onnx'\nwith torch.no_grad():\n    with tempfile.NamedTemporaryFile() as f:\n        onnx_1 = f.name\n        torch.onnx.export(\n            transformer_model,\n            dummy_input,\n            onnx_1,\n            input_names=input_names,\n            output_names=output_names,\n            opset_version=17,\n            do_constant_folding=True\n        )\n        onnx_model = onnx.load(onnx_1)\n    with tempfile.TemporaryDirectory() as temp_dir:\n        onnx_2 = temp_dir + '/tmp.onnx'\n        aigc_model_save(onnx_model, onnx_2)\n        onnx_model = onnx.load(onnx_2)\n        onnx_rename = OnnxHelper(onnx_model).onnx_model\n    onnx_simed,_ = simplify(\n        onnx_rename,\n        skipped_optimizers=[\n            'fuse_qkv',\n            'fuse_matmul_add_bias_into_gemm',\n            'eliminate_duplicate_initializer'\n        ]\n    )\n    aigc_model_save(onnx_simed, onnx_save_path)\n"
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