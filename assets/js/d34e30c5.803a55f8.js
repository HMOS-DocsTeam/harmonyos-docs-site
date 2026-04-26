"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["688933"], {
848791(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_custom_operator_development_cannkit_featured_topics_cannkit_commissioning_tool_parameter_cannkit_example_of_the_operator_json_cannkit_example_of_the_operator_json_md_d34_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cann-kit-guide-cannkit-ascendc-operator-development-cannkit-custom-operator-development-cannkit-featured-topics-cannkit-commissioning-tool-parameter-cannkit-example-of-the-operator-json-cannkit-example-of-the-operator-json-md-d34.json
var site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_custom_operator_development_cannkit_featured_topics_cannkit_commissioning_tool_parameter_cannkit_example_of_the_operator_json_cannkit_example_of_the_operator_json_md_d34_namespaceObject = JSON.parse('{"id":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-featured-topics/cannkit-commissioning-tool-parameter/cannkit-example-of-the-operator-json/cannkit-example-of-the-operator-json","title":"算子json配置文件样例","description":"样例1：NPU/CPU调测算子json配置文件样例","source":"@site/docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-featured-topics/cannkit-commissioning-tool-parameter/cannkit-example-of-the-operator-json/cannkit-example-of-the-operator-json.md","sourceDirName":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-featured-topics/cannkit-commissioning-tool-parameter/cannkit-example-of-the-operator-json","slug":"/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-featured-topics/cannkit-commissioning-tool-parameter/cannkit-example-of-the-operator-json/","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-featured-topics/cannkit-commissioning-tool-parameter/cannkit-example-of-the-operator-json/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"算子json配置文件样例","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-example-of-the-operator-json","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"数据生成脚本适配样例","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-featured-topics/cannkit-commissioning-tool-parameter/cannkit-data-generation-script-adaptation/"},"next":{"title":"精度比对结果输出样例","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-featured-topics/cannkit-commissioning-tool-parameter/cannkit-example-of-the-precision-comparison/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-featured-topics/cannkit-commissioning-tool-parameter/cannkit-example-of-the-operator-json/cannkit-example-of-the-operator-json.md


const frontMatter = {
	title: '算子json配置文件样例',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-example-of-the-operator-json',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = '算子json配置文件样例';

const assets = {

};



const toc = [{
  "value": "样例1：NPU/CPU调测算子json配置文件样例",
  "id": "样例1npucpu调测算子json配置文件样例",
  "level": 2
}, {
  "value": "样例2：tensor list json配置文件样例",
  "id": "样例2tensor-list-json配置文件样例",
  "level": 2
}, {
  "value": "样例3：tiling调测json配置文件样例",
  "id": "样例3tiling调测json配置文件样例",
  "level": 2
}, {
  "value": "样例4：kernel直调json配置样例",
  "id": "样例4kernel直调json配置样例",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "算子json配置文件样例",
        children: "算子json配置文件样例"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "样例1npucpu调测算子json配置文件样例",
      children: "样例1：NPU/CPU调测算子json配置文件样例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(791123)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在\"param_type\"：\"optional\"时， \"ignore\" : true，表示不需要该输入。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在\"param_type\"：\"required\"时，\"ignore\"不能配置为true。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"op_type\": \"FlashAttentionScore\",\n  \"data_script\": \"./flash_attention_score_golden.py\",\n  \"gen_data\": true,\n  \"inputs\": [\n    {\n      \"name\": \"query\",\n      \"dtype\": \"float16\",\n      \"format\": \"ND\",\n      \"ignore\": false,\n      \"shape\": [24,144,1280],\n      \"param_type\": \"required\",\n      \"data_file\": \"q.bin\"\n    },\n    {\n      \"name\": \"key\",\n      \"dtype\": \"float16\",\n      \"format\": \"ND\",\n      \"ignore\": false,\n      \"shape\": [24,144,1280],\n      \"param_type\": \"required\",\n      \"data_file\": \"k.bin\"\n    },\n    {\n      \"name\": \"value\",\n      \"dtype\": \"float16\",\n      \"format\": \"ND\",\n      \"ignore\": false,\n      \"shape\": [24,144,1280],\n      \"param_type\": \"required\",\n      \"data_file\": \"v.bin\"\n    },\n  ],\n  \"outputs\": [\n    {\n      \"name\": \"softmax_max\",\n      \"dtype\": \"float32\",\n      \"format\": \"ND\",\n      \"shape\": [24,20,144,8],\n      \"ignore\": false,\n      \"param_type\": \"required\",\n      \"data_file\": null\n    },\n    {\n      \"name\": \"softmax_sum\",\n      \"dtype\": \"float32\",\n      \"format\": \"ND\",\n      \"shape\": [24,20,144,8],\n      \"ignore\": false,\n      \"param_type\": \"required\",\n      \"data_file\": null\n    },\n    {\n      \"name\": \"softmax_out\",\n      \"dtype\": \"float16\",\n      \"format\": \"ND\",\n      \"shape\": [24,20,144,144],\n      \"ignore\": false,\n      \"param_type\": \"required\",\n      \"data_file\": null\n    },\n    {\n      \"name\": \"attention_out\",\n      \"dtype\": \"float16\",\n      \"format\": \"ND\",\n      \"shape\": [24,20,144,64],\n      \"ignore\": false,\n      \"param_type\": \"required\",\n      \"data_file\": \"attention_out.bin\"\n    }\n  ],\n  \"attrs\": [\n    {\n      \"name\": \"scale_value\",\n      \"dtype\": \"float\",\n      \"value\": 1.0\n    },\n    {\n      \"name\": \"keep_prob\",\n      \"dtype\": \"float\",\n      \"value\": 0.8\n    },\n    {\n      \"name\": \"pre_tokens\",\n      \"dtype\": \"int\",\n      \"value\": 2147483647\n    },\n    {\n      \"name\": \"next_tokens\",\n      \"dtype\": \"int\",\n      \"value\": 2147483647\n    },\n    {\n      \"name\": \"head_num\",\n      \"dtype\": \"int\",\n      \"value\": 20\n    },\n    {\n      \"name\": \"input_layout\",\n      \"dtype\": \"string\",\n      \"value\": \"BSH\"\n    },\n    {\n      \"name\": \"inner_precise\",\n      \"dtype\": \"int\",\n      \"value\": 0\n    }\n  ]\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "样例2tensor-list-json配置文件样例",
      children: "样例2：tensor list json配置文件样例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"op_type\": \"IncreFlashAttention\",\n  \"data_script\": \"\",\n  \"gen_data\": false,\n  \"inputs\": [\n      {\n          \"name\": \"query\",\n          \"dtype\": \"float16\",\n          \"format\": \"ND\",\n          \"ignore\": false,\n          \"shape\": [4, 5, 1, 128],\n          \"param_type\": \"required\",\n          \"data_file\": \"/home/data/input/q.bin\"\n      },\n      [{\n          \"name\": \"key0\",\n          \"dtype\": \"float16\",\n          \"format\": \"ND\",\n          \"ignore\": false,\n          \"shape\": [1,5,8192,128],\n          \"param_type\": \"required\",\n          \"data_file\": \"/home/data/input/k_0.bin\"\n      },{\n          \"name\": \"key1\",\n          \"dtype\": \"float16\",\n          \"format\": \"ND\",\n          \"ignore\": false,\n          \"shape\": [1,5,8192,128],\n          \"param_type\": \"required\",\n          \"data_file\": \"/home/data/input/k_1.bin\"\n      },{\n          \"name\": \"key2\",\n          \"dtype\": \"float16\",\n          \"format\": \"ND\",\n          \"ignore\": false,\n          \"shape\": [1,5,8192,128],\n          \"param_type\": \"required\",\n          \"data_file\": \"/home/data/input/k_2.bin\"\n      },{\n          \"name\": \"key3\",\n          \"dtype\": \"float16\",\n          \"format\": \"ND\",\n          \"ignore\": false,\n          \"shape\": [1,5,8192,128],\n          \"param_type\": \"required\",\n          \"data_file\": \"/home/data/input/k_3.bin\"\n      }],\n      [{\n          \"name\": \"value0\",\n          \"dtype\": \"float16\",\n          \"format\": \"ND\",\n          \"ignore\": false,\n          \"shape\": [1,5,8192,128],\n          \"param_type\": \"required\",\n          \"data_file\": \"/home/data/input/v_0.bin\"\n      },{\n          \"name\": \"value1\",\n          \"dtype\": \"float16\",\n          \"format\": \"ND\",\n          \"ignore\": false,\n          \"shape\": [1,5,8192,128],\n          \"param_type\": \"required\",\n          \"data_file\": \"/home/data/input/v_1.bin\"\n      },{\n          \"name\": \"value2\",\n          \"dtype\": \"float16\",\n          \"format\": \"ND\",\n          \"ignore\": false,\n          \"shape\": [1,5,8192,128],\n          \"param_type\": \"required\",\n          \"data_file\": \"/home/data/input/v_2.bin\"\n      },{\n          \"name\": \"value3\",\n          \"dtype\": \"float16\",\n          \"format\": \"ND\",\n          \"ignore\": false,\n          \"shape\": [1,5,8192,128],\n          \"param_type\": \"required\",\n          \"data_file\": \"/home/data/input/v_3.bin\"\n      }],\n      {\n          \"name\": \"padding_mask\",\n          \"dtype\": \"float16\",\n          \"format\": \"ND\",\n          \"ignore\": false,\n          \"shape\": null,\n          \"param_type\": \"optional\",\n          \"data_file\": null\n      },\n      {\n          \"name\": \"atten_mask\",\n          \"dtype\": \"float16\",\n          \"format\": \"ND\",\n          \"ignore\": false,\n          \"shape\": [4,1,8192],\n          \"param_type\": \"optional\",\n          \"data_file\": \"/home/data/input/attenMask.bin\"\n      },\n      {\n          \"name\": \"actual_seq_lengths\",\n          \"dtype\": \"int64\",\n          \"format\": \"ND\",\n          \"ignore\": false,\n          \"shape\": null,\n          \"param_type\": \"optional\",\n          \"data_file\": \"\"\n      },\n      {\n          \"name\": \"deq_scale1\",\n          \"dtype\": \"uint64\",\n          \"format\": \"ND\",\n          \"ignore\": false,\n          \"shape\": null,\n          \"param_type\": \"optional\",\n          \"data_file\": null\n      },\n      {\n          \"name\": \"quant_scale1\",\n          \"dtype\": \"float32\",\n          \"format\": \"ND\",\n          \"ignore\": false,\n          \"shape\": null,\n          \"param_type\": \"optional\",\n          \"data_file\": null\n      },\n      {\n          \"name\": \"deq_scale2\",\n          \"dtype\": \"uint64\",\n          \"format\": \"ND\",\n          \"ignore\": false,\n          \"shape\": null,\n          \"param_type\": \"optional\",\n          \"data_file\": null\n      },\n      {\n          \"name\": \"quant_scale2\",\n          \"dtype\": \"float32\",\n          \"format\": \"ND\",\n          \"ignore\": false,\n          \"shape\": null,\n          \"param_type\": \"optional\",\n          \"data_file\": null\n      },\n      {\n          \"name\": \"quant_offset2\",\n          \"dtype\": \"float32\",\n          \"format\": \"ND\",\n          \"ignore\": false,\n          \"shape\": null,\n          \"param_type\": \"optional\",\n          \"data_file\": null\n      }\n  ],\n  \"outputs\": [\n      {\n          \"name\": \"attention_out\",\n          \"dtype\": \"float16\",\n          \"format\": \"ND\",\n          \"shape\": [4, 5, 1, 128],\n          \"ignore\": false,\n          \"param_type\": \"required\",\n          \"data_file\": \"/home/data/output/y_add.bin\"\n      }\n  ],\n  \"attrs\": [\n      {\n          \"name\": \"num_heads\",\n          \"dtype\": \"int\",\n          \"value\": 5\n      },\n      {\n          \"name\": \"scale_value\",\n          \"dtype\": \"float\",\n          \"value\": 2.0\n      },\n      {\n          \"name\": \"input_layout\",\n          \"dtype\": \"string\",\n          \"value\": \"BNSD\"\n      },\n      {\n          \"name\": \"num_key_value_heads\",\n          \"dtype\": \"int\",\n          \"value\": 5\n      }\n  ]}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "样例3tiling调测json配置文件样例",
      children: "样例3：tiling调测json配置文件样例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"op_type\": \"FlashAttentionScore\",\n  \"data_script\": \"./flash_attention_score_golden.py\",\n  \"gen_data\": true,\n  \"inputs\": [\n    {\n      \"name\": \"query\",\n      \"dtype\": \"float16\",\n      \"format\": \"ND\",\n      \"ignore\": false,\n      \"shape\": [24,144,1280],\n      \"param_type\": \"required\",\n      \"data_file\": \"q.bin\"\n    },\n    {\n      \"name\": \"key\",\n      \"dtype\": \"float16\",\n      \"format\": \"ND\",\n      \"ignore\": false,\n      \"shape\": [24,144,1280],\n      \"param_type\": \"required\",\n      \"data_file\": \"k.bin\"\n    },\n    {\n      \"name\": \"value\",\n      \"dtype\": \"float16\",\n      \"format\": \"ND\",\n      \"ignore\": false,\n      \"shape\": [24,144,1280],\n      \"param_type\": \"required\",\n      \"data_file\": \"v.bin\"\n    },\n    {\n      \"name\": \"real_shift\",\n      \"dtype\": \"float16\",\n      \"format\": \"ND\",\n      \"ignore\": false,\n      \"shape\": null,\n      \"param_type\": \"optional\",\n      \"data_file\": null\n    },\n    {\n      \"name\": \"drop_mask\",\n      \"dtype\": \"uint8\",\n      \"format\": \"ND\",\n      \"ignore\": false,\n      \"shape\": [1244160],\n      \"param_type\": \"optional\",\n      \"data_file\": \"drop_mask.bin\"\n    },\n    {\n      \"name\": \"padding_mask\",\n      \"dtype\": \"float16\",\n      \"format\": \"ND\",\n      \"ignore\": false,\n      \"shape\": null,\n      \"param_type\": \"optional\",\n      \"data_file\": null\n    },\n    {\n      \"name\": \"atten_mask\",\n      \"dtype\": \"bool\",\n      \"format\": \"ND\",\n      \"ignore\": false,\n      \"shape\": null,\n      \"param_type\": \"optional\",\n      \"data_file\": null\n    },\n    {\n      \"name\": \"prefix\",\n      \"dtype\": \"int64\",\n      \"format\": \"ND\",\n      \"ignore\": false,\n      \"shape\": null,\n      \"param_type\": \"optional\",\n      \"data_file\": null\n    }\n  ],\n  \"outputs\": [\n    {\n      \"name\": \"softmax_max\",\n      \"dtype\": \"float32\",\n      \"format\": \"ND\",\n      \"shape\": [24,20,144,8],\n      \"ignore\": false,\n      \"param_type\": \"required\",\n      \"data_file\": null\n    },\n    {\n      \"name\": \"softmax_sum\",\n      \"dtype\": \"float32\",\n      \"format\": \"ND\",\n      \"shape\": [24,20,144,8],\n      \"ignore\": false,\n      \"param_type\": \"required\",\n      \"data_file\": null\n    },\n    {\n      \"name\": \"softmax_out\",\n      \"dtype\": \"float16\",\n      \"format\": \"ND\",\n      \"shape\": [24,20,144,144],\n      \"ignore\": false,\n      \"param_type\": \"required\",\n      \"data_file\": null\n    },\n    {\n      \"name\": \"attention_out\",\n      \"dtype\": \"float16\",\n      \"format\": \"ND\",\n      \"shape\": [24,20,144,64],\n      \"ignore\": false,\n      \"param_type\": \"required\",\n      \"data_file\": \"attention_out.bin\"\n    }\n  ],\n  \"attrs\": [\n    {\n      \"name\": \"scale_value\",\n      \"dtype\": \"float\",\n      \"value\": 1.0\n    },\n    {\n      \"name\": \"keep_prob\",\n      \"dtype\": \"float\",\n      \"value\": 0.8\n    },\n    {\n      \"name\": \"pre_tokens\",\n      \"dtype\": \"int\",\n      \"value\": 2147483647\n    },\n    {\n      \"name\": \"next_tokens\",\n      \"dtype\": \"int\",\n      \"value\": 2147483647\n    },\n    {\n      \"name\": \"head_num\",\n      \"dtype\": \"int\",\n      \"value\": 20\n    },\n    {\n      \"name\": \"input_layout\",\n      \"dtype\": \"string\",\n      \"value\": \"BSH\"\n    },\n    {\n      \"name\": \"inner_precise\",\n      \"dtype\": \"int\",\n      \"value\": 0\n    }\n  ]\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "样例4kernel直调json配置样例",
      children: "样例4：kernel直调json配置样例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n    \"op_type\": \"add_custom\",\n    \"data_script\": \"\",\n    \"gen_data\": false,\n    \"params\": [\n            {\n                \"name\": \"x\",\n                \"dtype\": \"float16\",\n                \"param_type\": \"input\",\n                \"shape\": [\n                    1,16384\n                ],\n                \"data_file\": \"input_x.bin\"\n            },\n            {\n                \"name\": \"y\",\n                \"dtype\": \"float16\",\n                \"param_type\": \"input\",\n                \"shape\": [\n                    1,16384\n                ],\n                \"data_file\": \"input_y.bin\"\n            },\n            {\n                \"name\": \"z\",\n                \"dtype\": \"float16\",\n                \"param_type\": \"output\",\n                \"shape\": [\n                    1,16384\n                ],\n                \"data_file\": \"golden.bin\"\n            },\n            {\n                \"name\": \"tileNumIn\",\n                \"dtype\": \"uint32\",\n                \"param_type\": \"input\",\n                \"shape\": null,\n                \"data_value\": 8\n            }\n    ],\n    \"kernel_info\": {\n        \"kernel_source\": [\"add_custom.cpp\"],\n        \"kernel_name\": \"add_custom\",\n        \"kernel_includes\": []\n    }\n \n}\n"
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
791123(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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