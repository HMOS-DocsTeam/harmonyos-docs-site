"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["296344"], {
548403(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_custom_operator_development_cannkit_usage_of_the_commissioning_tool_cannkit_data_preparation_and_configuration_cannkit_preparing_input_data_and_benchmark_cannkit_preparing_in_8b8_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cann-kit-guide-cannkit-ascendc-operator-development-cannkit-custom-operator-development-cannkit-usage-of-the-commissioning-tool-cannkit-data-preparation-and-configuration-cannkit-preparing-input-data-and-benchmark-cannkit-preparing-in-8b8.json
var site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_custom_operator_development_cannkit_usage_of_the_commissioning_tool_cannkit_data_preparation_and_configuration_cannkit_preparing_input_data_and_benchmark_cannkit_preparing_in_8b8_namespaceObject = JSON.parse('{"id":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-usage-of-the-commissioning-tool/cannkit-data-preparation-and-configuration/cannkit-preparing-input-data-and-benchmark/cannkit-preparing-input-data-and-benchmark","title":"输入数据和标杆数据准备","description":"使用AscendC调测工具进行算子调测前，必须提供算子的输入数据和标杆数据。","source":"@site/docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-usage-of-the-commissioning-tool/cannkit-data-preparation-and-configuration/cannkit-preparing-input-data-and-benchmark/cannkit-preparing-input-data-and-benchmark.md","sourceDirName":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-usage-of-the-commissioning-tool/cannkit-data-preparation-and-configuration/cannkit-preparing-input-data-and-benchmark","slug":"/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-usage-of-the-commissioning-tool/cannkit-data-preparation-and-configuration/cannkit-preparing-input-data-and-benchmark/","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-usage-of-the-commissioning-tool/cannkit-data-preparation-and-configuration/cannkit-preparing-input-data-and-benchmark/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"输入数据和标杆数据准备","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-preparing-input-data-and-benchmark","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"算子调试概述","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-usage-of-the-commissioning-tool/cannkit-commissioning-tools/"},"next":{"title":"算子json配置模板获取","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-usage-of-the-commissioning-tool/cannkit-data-preparation-and-configuration/cannkit-obtaining-the-json-configuration/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-usage-of-the-commissioning-tool/cannkit-data-preparation-and-configuration/cannkit-preparing-input-data-and-benchmark/cannkit-preparing-input-data-and-benchmark.md


const frontMatter = {
	title: '输入数据和标杆数据准备',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-preparing-input-data-and-benchmark',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = '输入数据和标杆数据准备';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    header: "header",
    li: "li",
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
        id: "输入数据和标杆数据准备",
        children: "输入数据和标杆数据准备"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用AscendC调测工具进行算子调测前，必须提供算子的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-usage-of-the-commissioning-tool/cannkit-commissioning-tools",
        children: "输入数据和标杆数据"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "输入数据（input数据）：固定shape算子运行时的输入数据，bin格式。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "标杆数据（golden数据）：根据输入数据计算出来的真值数据，用于与输出数据进行精度比对，bin格式。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本章节提供多种方式来准备数据，开发者可以根据实际情况选择合适的方式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "方式1：采用外部提供的input/golden数据。"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "开发者采用外部数据源进行算子调测，一般适合首次调测场景。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在算子信息json配置文件中，将gen_data配置为false，data_file配置为输入数据、标杆数据对应的路径（必须为绝对路径），示例如下。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n    \"gen_data\": false,\n    \"inputs\": [\n        {\n            \"data_file\": \"/path/to/input_data_q.bin\"\n        }\n    ],\n    \"outputs\": [\n        {\n            \"data_file\": \"/path/to/golden_data_out.bin\"\n        }\n    ]\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "若外部提供的数据是.pt文件，需要转换为.bin文件，以PyTorch为例："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import torch\nmodel = torch.load('model.pt')   # 加载.pt文件\ntorch.save(model, 'model.bin')   # 将模型参数保存为二进制文件\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "方式2：采用已生成过的input/golden数据，无需重新生成。"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当开发者需要多次重跑，建议直接使用历史生成的数据，避免重复生成，导致调测耗时过长。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在算子信息json配置文件中，将gen_data配置为false，data_file配置为输入数据、标杆数据对应的bin文件名（不含路径信息，默认在当前路径下查找数据文件），示例如下。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n    \"gen_data\": false,\n    \"inputs\": [\n        {\n            \"data_file\": \"input_data_q.bin\"\n        }\n    ],\n    \"outputs\": [\n        {\n            \"data_file\": \"golden_data_out.bin\"\n        }\n    ]\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "方式3：采用工具随机生成input数据。"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "开发者未准备任何数据，可采用工具随机生成的input数据，生成的bin数据文件默认在当前路径下的对应算子的data文件夹中。该场景下没有golden数据，因此不支持精度比对。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在算子信息json配置文件中，将gen_data配置为true，data_script配置为空字符串或null，data_file配置为输入数据、标杆数据对应的bin文件名（不含路径信息，默认在当前路径下查找数据文件），示例如下。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "\"data_script\": \"\",\n\"gen_data\": true,\n\n\"shape\": [1, 16384],\n\"data_file\": \"sample.bin\",\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "方式4：采用脚本生成input/golden数据。"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "开发者自行准备数据生成脚本（一般是.py文件），同时配置算子信息json配置文件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "将gen_data配置为true，data_script配为数据生成脚本路径（以FlashAttentionScore算子为例），data_file配置为输入数据、标杆数据对应的bin文件名（不含路径信息，默认在当前路径下查找数据文件），示例如下。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "\"data_script\": \"${fa_case_dir}/flash_attention_score_golden.py\",\n\"gen_data\": true,\n\n\"data_file\": \"sample.bin\",\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "生成数据时，会调用该脚本，并固定传入以下参数："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "sys.argv[1]：输入的算子json配置文件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "sys.argv[2]：输出bin文件路径（工作路径下的data文件夹，例如debug_workspace/FlashAttentionScore/data/）。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "开发者需要根据输入的sys.argv[1]读取算子json配置文件内容，获取生成数据所需的算子shape信息、数据文件的文件名，并在脚本中适配生成的文件名。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "开发者需要根据输入的sys.argv[2]设置存放input/output数据文件的路径，将生成的文件保存到该路径下。"
          }), "\n"]
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