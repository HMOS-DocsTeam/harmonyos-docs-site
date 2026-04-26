"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["565292"], {
343389(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_cann_kit_guide_cannkit_model_optimization_cannkit_lightweight_tool_instructions_cannkit_large_language_model_cannkit_plug_in_quantification_cannkit_plug_in_quantification_md_448_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cann-kit-guide-cannkit-model-optimization-cannkit-lightweight-tool-instructions-cannkit-large-language-model-cannkit-plug-in-quantification-cannkit-plug-in-quantification-md-448.json
var site_docs_cann_kit_guide_cannkit_model_optimization_cannkit_lightweight_tool_instructions_cannkit_large_language_model_cannkit_plug_in_quantification_cannkit_plug_in_quantification_md_448_namespaceObject = JSON.parse('{"id":"cann-kit-guide/cannkit-model-optimization/cannkit-lightweight-tool-instructions/cannkit-large-language-model/cannkit-plug-in-quantification/cannkit-plug-in-quantification","title":"插件式量化","description":"简介","source":"@site/docs/cann-kit-guide/cannkit-model-optimization/cannkit-lightweight-tool-instructions/cannkit-large-language-model/cannkit-plug-in-quantification/cannkit-plug-in-quantification.md","sourceDirName":"cann-kit-guide/cannkit-model-optimization/cannkit-lightweight-tool-instructions/cannkit-large-language-model/cannkit-plug-in-quantification","slug":"/cann-kit-guide/cannkit-model-optimization/cannkit-lightweight-tool-instructions/cannkit-large-language-model/cannkit-plug-in-quantification/","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-model-optimization/cannkit-lightweight-tool-instructions/cannkit-large-language-model/cannkit-plug-in-quantification/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"插件式量化","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-plug-in-quantification","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"LLM模型一站式量化","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-model-optimization/cannkit-lightweight-tool-instructions/cannkit-large-language-model/cannkit-large-language-one-stop/"},"next":{"title":"量化基模外挂LoRA微调","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-model-optimization/cannkit-lightweight-tool-instructions/cannkit-large-language-model/cannkit-external-lora-fine-tuning/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/cann-kit-guide/cannkit-model-optimization/cannkit-lightweight-tool-instructions/cannkit-large-language-model/cannkit-plug-in-quantification/cannkit-plug-in-quantification.md


const frontMatter = {
	title: '插件式量化',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-plug-in-quantification',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = '插件式量化';

const assets = {

};



const toc = [{
  "value": "简介",
  "id": "简介",
  "level": 2
}, {
  "value": "插件式整体流程",
  "id": "插件式整体流程",
  "level": 2
}, {
  "value": "接口使用说明",
  "id": "接口使用说明",
  "level": 2
}, {
  "value": "量化参数优化-PTQ",
  "id": "量化参数优化-ptq",
  "level": 2
}, {
  "value": "量化参数优化-QAT",
  "id": "量化参数优化-qat",
  "level": 2
}, {
  "value": "量化参数提取导出",
  "id": "量化参数提取导出",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
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
        id: "插件式量化",
        children: "插件式量化"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "简介",
      children: "简介"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "插件式量化不区分模型类型，包含语言类视觉类，可以针对各种Transform结构的模型进行快速量化。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "插件式整体流程",
      children: "插件式整体流程"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "PTQ和QAT是两种量化参数优化策略，PTQ使用推理工程即可完成量化校准，QAT需要结合训练工程来进行量化感知训练。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(563860)/* ["default"] */.A) + "",
        width: "987",
        height: "720"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口使用说明",
      children: "接口使用说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import os\nimport sys\nsys.path.append('path/to/dopt_torch_py3')\n## 接口导入\nfrom dopt.dopt_lm.do_opt import (\n    generate_config_file,   ## 生成量化配置文件\n    optimize_model,         ## 使用生成和配置好的量化配置文件将浮点nn.module 转成插入量化算子的nn.module\n    set_quant_state,        ## 分别对激活和量化设置量化推理使能\n    set_calibrate_state,    ## 设置量化参数可更新状态\n    generate_quant_params,  ## 导出量化参数接口\n)\n## 量化算子插入  首次调用该接口会生成量化配置文件，完成配置后进行PTQ或者QAT\ndef get_quant_model(model, dopt_config):\n    ## model: nn.module实例对象 浮点模型定义\n    ## dopt_config: \"path/to/config.json\"  生成路径\n    if not os.path.exists(dopt_config):\n        generate_config_file(model, dopt_config)\n        exit()\n    model = optimize_model(model, dopt_config)\n    return model\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "量化策略配置："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n    \"layer_strategy\": {\n        \"node_name\": {\n            \"type\": \"<class 'torch.nn.modules.linear.Linear'>\",\n            \"quant_strategy\": \"need to set\",\n            \"weight\": {\n                \"bit\": 4,\n                \"group_size\": 128,\n                \"weight_algo\": \"group_min_max\",\n            },\n            \"input\" : {\n                \"bit\" : 8,\n                \"input_algo\":  \"min_max\",\n                \"unsigned_quant\": True\n            }\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "配置说明："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "quant_strategy 不同策略有默认的配置，可参考下表1进行配置修改，需要逐层配置。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表1"
        })
      }), " 配置参数说明"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "配置信息"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "配置信息"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "选项说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "quant_strategy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quant_aigc_ptq  Quant_aigc_qat  Quant_act_weight_eco  Quant_lm_head  Quant_Embed_MinMax"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PTQ量化策略，默认U8S8。量化器为minmax  QAT量化策略，默认U8S8。量化器为omni_minmax  16-4grouplinear 量化策略。默认groupsize128，针对llm大模型，QAT量化器  16-4grouplinear 量化策略。默认groupsize128，针对llm大模型，QAT量化器  8bit embedding量化"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "weight"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "bit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4, 8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "权重量化位宽"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "weight"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "group_size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "128 , 256"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "权重bit为4时，属于低比特量化范畴， 使用grouplinear量化，可配置此信息，否则请别配置该键值对"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "weight"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "weight_algo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "min_max  group_min_max  omni_min_max  omni_group_min_max"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "perchannel量化，最大最小值统计用于PTQ量化  pergroup量化，最大最小值统计，用于PTQ量化  QAT量化器， perchannel量化  QAT量化器， pergroup量化"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "input"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "bit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8, 16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "激活量化位宽"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "input"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "input_algo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "min_max  ema  omni_min_max"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "pertensor量化，最大最小值统计用于PTQ量化，clip误差小  pertensor量化，滑动平均统计用于PTQ量化，round误差小  pertensor量化，QAT量化器"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "input"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "unsigned_quant"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "True  False"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "非对称量化  对称量化"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "量化参数优化-ptq",
      children: "量化参数优化-PTQ"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "生成的quant_config中每一层默认都是float策略。需要将其改为Quant_aigc_ptq即可，高阶配置请参考上表。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请使用推理工程并选择合适数量的数据对get_quant_model接口返回的模型进行前向推理 即可完成对模型的量化优化如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "## 首次调用会生成config文件，需要手动配置量化策略\nmodel = get_quant_model(model, quant_config)\nmodel.eval()\n## 打开量化器\nset_quant_state(model, weight_state=True, input_state=True)\n## 打开量化参数可标定状态\nset_calibrate_state(model, True)\n## 使用实际推理数据进行推理 即量化标定###\nfor data in datasets:\n    model(data)\nset_calibrate_state(model, False)\ntorch.save(model.state_dict(), 'pth_save_path')\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "量化参数优化-qat",
      children: "量化参数优化-QAT"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "生成的quant_config中每一层默认都是float策略。需要将其改为Quant_aigc_qat，高阶配置请参考上表。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请使用训练工程对插有量化算子的模型进行训练。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "model = get_quant_model(model, quant_config)\nmodel.train()\nset_quant_state(model, weight_state=True, input_state=True)\nset_calibrate_state(model, True)\n\"\"\"\ndo training\n\"\"\"\nset_calibrate_state(model, False)\ntorch.save(model.state_dict(), 'pth_save_path')\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "量化参数提取导出",
      children: "量化参数提取导出"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "from dopt.dopt_lm.do_opt import generate_quant_params, optimize_model\n## model： 浮点 nn.module 实例对象， quant_config：量化配置文件\nmodel = optimize_model(model, quant_config)\n## 加载量化标定后保存的pth\nmodel.load_state_dict(\n    torch.load('pth_save_path', map_location=torch.device('cpu')),\n    strict=True,\n)\n## 关闭量化参数更新，导出量化参数\n## Tips：也可以在标定完成后直接到这一步，进行参数导出，步骤分离的目的是为了防止过程中有错误，导致前面步骤重来。\nset_quant_state(model, weight_state=True, input_state=True)\nset_calibrate_state(model, False)\ngenerate_quant_params(\n    model,\n    output_dir,\n    quant_param_2=False,\n    embedding_separate=True,\n)\n## output_dir 下会生成 fake_quant_weight.pth 以及量化参数文件， fake_quant_weight.pth 仅用作导出onnx图时替换权重\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ONNX 导出："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用torch.onnx.export 对浮点model进行导出（需要加载fake_quant_weight.pth），必要时完成ONNX模型简化，以及确保conv和linear算子名和torch定义名同步。"
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
563860(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439255-76c421b9bf007259ccce2db1802217a8.png");

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