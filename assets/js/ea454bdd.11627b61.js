"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["725923"], {
768767(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_custom_operator_development_cannkit_deploying_operators_cannkit_operator_development_in_graph_mode_cannkit_graph_compilation_and_execution_cannkit_graph_compilation_and_execu_ea4_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cann-kit-guide-cannkit-ascendc-operator-development-cannkit-custom-operator-development-cannkit-deploying-operators-cannkit-operator-development-in-graph-mode-cannkit-graph-compilation-and-execution-cannkit-graph-compilation-and-execu-ea4.json
var site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_custom_operator_development_cannkit_deploying_operators_cannkit_operator_development_in_graph_mode_cannkit_graph_compilation_and_execution_cannkit_graph_compilation_and_execu_ea4_namespaceObject = JSON.parse('{"id":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-deploying-operators/cannkit-operator-development-in-graph-mode/cannkit-graph-compilation-and-execution/cannkit-graph-compilation-and-execution","title":"图编译和图执行","description":"单算子模型执行是指基于图IR执行算子，先编译算子（例如，使用OMG工具将Ascend IR定义的单算子描述文件编译成算子omc模型文件），再调用模型加载推理接口执行单算子网络。下文仅提供单算子模型执行的样例和基础内容讲解，详细内容请参考端侧部署章节。","source":"@site/docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-deploying-operators/cannkit-operator-development-in-graph-mode/cannkit-graph-compilation-and-execution/cannkit-graph-compilation-and-execution.md","sourceDirName":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-deploying-operators/cannkit-operator-development-in-graph-mode/cannkit-graph-compilation-and-execution","slug":"/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-deploying-operators/cannkit-operator-development-in-graph-mode/cannkit-graph-compilation-and-execution/","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-deploying-operators/cannkit-operator-development-in-graph-mode/cannkit-graph-compilation-and-execution/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"图编译和图执行","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-graph-compilation-and-execution","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"开发流程","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-deploying-operators/cannkit-operator-development-in-graph-mode/cannkit-development-process/"},"next":{"title":"AI框架算子适配概述","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-deploying-operators/cannkit-ai-framework-operator-adaptation/cannkit-overview-of-ai-framework-operator/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-deploying-operators/cannkit-operator-development-in-graph-mode/cannkit-graph-compilation-and-execution/cannkit-graph-compilation-and-execution.md


const frontMatter = {
	title: '图编译和图执行',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-graph-compilation-and-execution',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = '图编译和图执行';

const assets = {

};



const toc = [{
  "value": "环境要求",
  "id": "环境要求",
  "level": 2
}, {
  "value": "准备验证代码工程",
  "id": "准备验证代码工程",
  "level": 2
}, {
  "value": "生成单算子离线模型文件",
  "id": "生成单算子离线模型文件",
  "level": 2
}, {
  "value": "生成输入数据",
  "id": "生成输入数据",
  "level": 2
}, {
  "value": "APP集成代码",
  "id": "app集成代码",
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
        id: "图编译和图执行",
        children: "图编译和图执行"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["单算子模型执行是指基于图IR执行算子，先编译算子（例如，使用OMG工具将Ascend IR定义的单算子描述文件编译成算子omc模型文件），再调用模型加载推理接口执行单算子网络。下文仅提供单算子模型执行的样例和基础内容讲解，详细内容请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/cann-kit-guide/cannkit-on-device-deployment/cannkit-whole-deployment-process",
        children: "端侧部署"
      }), "章节。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(301025)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["HarmonyOS Next暂不支持图编译与图执行，仅支持通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-deploying-operators/cannkit-ai-framework-operator-adaptation/cannkit-overview-of-ai-framework-operator",
        children: "AI框架算子适配"
      }), "方式集成自定义算子，以下步骤仅供参考。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "环境要求",
      children: "环境要求"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["已参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-environment-preparation",
            children: "环境准备"
          }), "，完成DDK驱动和软件的安装，配置DDK软件所需基本环境变量。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["安装DDK软件后，使用DDK运行开发者进行编译、运行时，需要以DDK运行开发者登录环境，执行", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "source ${install_path}/ddk/tools/tools_ascendc/set_ascendc_env.sh"
            })
          }), "命令设置环境变量。其中${install_path}为DDK软件的安装目录，例如：/home。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "已参考完成算子的开发和部署。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "准备验证代码工程",
      children: "准备验证代码工程"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在执行NPU调试命令时，例如："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ascendebug kernel --backend npu  --chip-version kirin9020 --repo-type customize --json-file ./temp.json --core-type AiCore\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["命令行参数详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-featured-topics/cannkit-commissioning-tool-parameter/cannkit-cli-parameters#npu%E8%B0%83%E6%B5%8B%E5%8F%82%E6%95%B0",
        children: "NPU调测参数"
      }), "，会在${debug_workspace} /${op_type} /npu/src下生成验证样例工程，代码工程目录结构如下。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "src\n├── BuildIRGraph.cpp  // 生成单算子图源文件\n├── BuildIRGraph.h    // 单算子图入口：CreateCustomIRGraph\n├── build.sh            // omc 模型编译脚本\n├── CMakeLists.txt\n├── custom_graph.omc // 编译后得到的omc模型\n└── op_proto.h         // 算子编译输出的算子原型定义头文件\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "生成单算子离线模型文件",
      children: "生成单算子离线模型文件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "执行验证样例工程下的build.sh。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "./build.sh\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以上命令执行后，会在当前路径下生成custom_graph.omc的离线模型文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "生成输入数据",
      children: "生成输入数据"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在样例工程目录下，执行如下命令："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "python3 scripts/gen_data.py\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "会在input目录下生成两个shape为(8,2048)，数据类型为float16的数据文件input_0.bin与input_1.bin，用于进行AddCustom算子的验证。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "代码样例如下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import numpy as np\na = np.random.randint(100, size=(8, 2048,)).astype(np.float16)\nb = np.random.randint(100, size=(8, 2048,)).astype(np.float16)\na.tofile('input_0.bin')\nb.tofile('input_1.bin')\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "app集成代码",
      children: "APP集成代码"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者可以参考如下样例编写模型加载、执行的代码逻辑。完整集成流程请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/hiai-Guides/app-dev-0000001052605540",
        children: "应用开发"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下是关键步骤的代码示例，不可以直接拷贝编译运行，仅供参考，调用接口后，需增加异常处理的分支，并记录报错日志、提示日志，此处不一一列举。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int RunModel(void* modelData, size_t modelSize)\n{\n    // 1.加载omc模型\n    auto modelDescV1 = std::make_shared<hiai::AiModelDescription>(\"model\", 3, 0, 0, 0);\n    modelDescV1->SetModelBuffer(modelData, modelSize);\n\n    std::vector<std::shared_ptr<hiai::AiModelDescription>> modelDescVec;\n    modelDescVec.push_back(modelDescV1);\n    auto clientV1 = std::make_shared<hiai::AiModelMngerClient>();\n    if (clientV1->Init(nullptr) != hiai::SUCCESS) {\n        LOGE(\"client Init() failed.\");\n        return FAILURE;\n    }\n\n    if (clientV1->Load(modelDescVec) != hiai::SUCCESS) {\n        LOGE(\"client Load() failed.\");\n        return FAILURE;\n    }\n    LOGI(\"load model success\");\n    std::vector<hiai::TensorDimension> inDimVecV1;\n    std::vector<hiai::TensorDimension> outDimVecV1;\n    std::vector<std::shared_ptr<hiai::AiTensor>> inTensorVecV1;\n    std::vector<std::shared_ptr<hiai::AiTensor>> outTensorVecV1;\n\n    if (clientV1->GetModelIOTensorDim(modelDescV1->GetName(), inDimVecV1, outDimVecV1) != hiai::SUCCESS) {\n        LOGE(\"client GetModelIOTensorDim() failed.\");\n        clientV1->UnLoadModel();\n        return FAILURE;\n    }\n    // 2、设置模型输入、输出\n    for (size_t i = 0; i < INPUT_NUM &&  i < inDimVecV1.size(); ++i) {\n        void *data = nullptr;\n        size_t size = 0;\n        LOGI(\"open input file  inputFile: %s \", INPUT_LIST[i].c_str());\n        if (!ReadData(INPUT_LIST[i], &data, size)) {\n            LOGE(\"open input file failed! inputFile: %s \", INPUT_LIST[i].c_str());\n            clientV1->UnLoadModel();\n            return FAILURE;\n        }\n\n        auto inputV1 = std::make_shared<hiai::AiTensor>();\n\n        inputV1->Init(&inDimVecV1[i], INPUT_TYPE);\n        if (inputV1->GetSize() != size) {\n            LOGE(\"inputSize: %d != fileSize: %zu \", inputV1->GetSize(), size);\n            clientV1->UnLoadModel();\n            free(data);\n            data = nullptr;\n            return FAILURE;\n        }\n        memcpy(inputV1->GetBuffer(), data, size);\n        inTensorVecV1.push_back(inputV1);\n        free(data);\n        data = nullptr;\n    }\n    LOGI(\"load input success\");\n\n    for (size_t i = 0; i < outDimVecV1.size(); i++) {\n        auto outputV1 = std::make_shared<hiai::AiTensor>();\n        outputV1->Init(&outDimVecV1[i], OUTPUT_TYPE);\n        outTensorVecV1.push_back(outputV1);\n    }\n    LOGI(\"init output success\");\n\n    // 3、进行模型推理\n    hiai::AiContext context;\n    context.AddPara(\"model_name\", \"model\");\n    int32_t istamp = 0;\n\n    auto retCode = clientV1->Process(context, inTensorVecV1, outTensorVecV1, 1000, istamp);\n    if (retCode != hiai::SUCCESS) {\n        LOGE(\"process failed.\");\n        clientV1->UnLoadModel();\n        return retCode;\n    }\n    LOGI(\"process success\");\n\n    for (size_t i = 0; i < outTensorVecV1.size(); i++) {\n        char* data = reinterpret_cast<char*>(outTensorVecV1[i]->GetBuffer());\n        DumpBufferToFile(data, outTensorVecV1[i]->GetSize(), OUTPUT_PATH);\n    }\n    LOGI(\"dump output success\");\n\n    // 4、模型卸载\n    clientV1->UnLoadModel();\n    return retCode;\n}\n"
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
301025(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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