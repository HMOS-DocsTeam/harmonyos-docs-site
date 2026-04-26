"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["29462"], {
532802(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_custom_operator_development_cannkit_featured_topics_cannkit_commissioning_tool_parameter_cannkit_data_generation_script_adaptation_cannkit_data_generation_script_adaptation_m_997_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cann-kit-guide-cannkit-ascendc-operator-development-cannkit-custom-operator-development-cannkit-featured-topics-cannkit-commissioning-tool-parameter-cannkit-data-generation-script-adaptation-cannkit-data-generation-script-adaptation-m-997.json
var site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_custom_operator_development_cannkit_featured_topics_cannkit_commissioning_tool_parameter_cannkit_data_generation_script_adaptation_cannkit_data_generation_script_adaptation_m_997_namespaceObject = JSON.parse('{"id":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-featured-topics/cannkit-commissioning-tool-parameter/cannkit-data-generation-script-adaptation/cannkit-data-generation-script-adaptation","title":"数据生成脚本适配样例","description":"","source":"@site/docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-featured-topics/cannkit-commissioning-tool-parameter/cannkit-data-generation-script-adaptation/cannkit-data-generation-script-adaptation.md","sourceDirName":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-featured-topics/cannkit-commissioning-tool-parameter/cannkit-data-generation-script-adaptation","slug":"/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-featured-topics/cannkit-commissioning-tool-parameter/cannkit-data-generation-script-adaptation/","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-featured-topics/cannkit-commissioning-tool-parameter/cannkit-data-generation-script-adaptation/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"数据生成脚本适配样例","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-data-generation-script-adaptation","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"算子工程创建工具参数说明","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-featured-topics/cannkit-creating-operator-project-msopgen/"},"next":{"title":"算子json配置文件样例","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-featured-topics/cannkit-commissioning-tool-parameter/cannkit-example-of-the-operator-json/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-featured-topics/cannkit-commissioning-tool-parameter/cannkit-data-generation-script-adaptation/cannkit-data-generation-script-adaptation.md


const frontMatter = {
	title: '数据生成脚本适配样例',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-data-generation-script-adaptation',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = '数据生成脚本适配样例';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    header: "header",
    pre: "pre",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "数据生成脚本适配样例",
        children: "数据生成脚本适配样例"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import sys\nimport os\nimport json\nimport logging\nfrom functools import reduce\nfrom dataclasses import dataclass\nimport numpy as np\nfrom numpy import array\nDTYPE = {\n    \"float16\": np.float16\n}\natol, rtol = 0.005, 0.005\ndef byte_2_bit(drop_mask, size):\n    print(len(drop_mask))\n    drop_mask_bit = np.zeros((int(size / 8),), dtype=np.uint8)\n    for i in range(int(size / 8)):\n        tmp = 0\n        for j in range(8):\n            tmp += drop_mask[i * 8 + j] * (2 ** j)\n        drop_mask_bit[i] = tmp\n    return drop_mask_bit\ndef get_input_attrs_content(input_json: str) -> dict:\n    content = {}\n    input_json = os.path.realpath(input_json)\n    with open(input_json, \"r\") as in_hadle:\n        try:\n            content = json.load(in_hadle)\n        except json.decoder.JSONDecodeError:\n            logging.error(\"json.decoder.JSONDecodeError\")\n        finally:\n            pass\n    return content\ndef softmax(x, axis=None):\n    x = x.astype(np.float32)\n    x_max = x.max(axis=-1, keepdims=True)\n    x_sub = x - x_max\n    y = np.exp(x_sub)\n    x_sum = y.sum(axis=-1, keepdims=True)\n    ans = y / x_sum\n    ans = ans.astype(np.float16)\n    x_max = x_max.astype(np.float16)\n    x_sum = x_sum.astype(np.float16)\n    return ans, x_max, x_sum\ndef attention_score(shape_info_tuple,\n                    input_path,\n                    output_path,\n                    need_new):\n    qkv_shape, drop_mask_shape, keep_prob, input_dtype, output_dtype = shape_info_tuple\n    if need_new:\n        q = np.random.uniform(-0.1, 0.1, qkv_shape).astype(input_dtype)\n        q_trans = q.transpose(0, 2, 1, 3)\n        q_trans.tofile(input_path[\"query\"])\n        k = np.random.uniform(-0.1, 0.1, qkv_shape).astype(input_dtype)\n        k_trans = k.transpose(0, 2, 1, 3)\n        k_trans.tofile(input_path[\"key\"])\n        v = np.random.uniform(-0.1, 0.1, qkv_shape).astype(input_dtype)\n        v_trans = v.transpose(0, 2, 1, 3)\n        v_trans.tofile(input_path[\"value\"])\n        if drop_mask_shape is not None:\n            drop_mask = np.random.uniform(0, 2, drop_mask_shape).astype(np.uint8)\n            size = reduce(lambda x, y: x * y, drop_mask_shape)\n            drop_mask_bit = byte_2_bit(\n                drop_mask, int(size)).reshape(qkv_shape[0], qkv_shape[1], qkv_shape[2], int(qkv_shape[2] / 8))\n            drop_mask_bit.tofile(input_path[\"drop_mask\"])\n    else:\n        q = np.fromfile(input_path[\"query\"], input_dtype).reshape(qkv_shape).astype(input_dtype)\n        k = np.fromfile(input_path[\"key\"], input_dtype).reshape(qkv_shape).astype(input_dtype)\n        v = np.fromfile(input_path[\"value\"], input_dtype).reshape(qkv_shape).astype(input_dtype)\n        drop_mask = np.fromfile(\n            input_path[\"drop_mask\"],\n            dtype=np.uint8).reshape(qkv_shape[0], qkv_shape[1], qkv_shape[2], int(qkv_shape[2] / 8))\n    qk = np.matmul(q, k.transpose(0, 1, 3, 2))\n    softmax_res, x_max, x_sum = softmax(qk)\n    drop_res = 1 / keep_prob * np.multiply(\n        softmax_res, drop_mask.reshape(qkv_shape[0], qkv_shape[1], qkv_shape[2], qkv_shape[2]))\n    y = np.matmul(drop_res, v)\n    y = y.transpose(0, 2, 1, 3)\n    y.astype(output_dtype).tofile(output_path[\"attention_out\"])\n    return\ndef gen_total_golden_output(shape_info, input_path, golden_path, need_new):\n    b_value, head_num, s_value, h_value = shape_info.shape_info\n    qkv_shape = [b_value, head_num, s_value, h_value // head_num]\n    drop_shape = [b_value * head_num * s_value * s_value]\n    attention_score((qkv_shape,\n                     drop_shape,\n                     shape_info.keep_prob,\n                     shape_info.input_dtype,\n                     shape_info.output_dtype),\n                    input_path,\n                    golden_path,\n                    need_new)\ndef get_data_file(res_path, contents):\n    data_files = {}\n    for content in contents:\n        if content[\"data_file\"] is None:\n            continue\n        data_files[content[\"name\"]] = os.path.join(res_path, content[\"data_file\"])\n    return data_files\n@dataclass\nclass InputOutputShapeInfo:\n    shape_info: tuple\n    keep_prob: int\n    input_dtype: np.dtype\n    output_dtype: np.dtype\ndef get_args():\n    \"\"\"\n    需要开发者按需配置\n    sys.argv[1]: input json file path\n    sys.argv[2]: output file path\n    sys.argv[3]: gen data type: input/output/all\n    \"\"\"\n    logging.info(f\"数据保存路径为: {sys.argv[2]}\")\n    input_file = sys.argv[1]\n    res_path = sys.argv[2]\n    content = get_input_attrs_content(input_file)\n    input_files = get_data_file(res_path, content.get(\"inputs\"))\n    output_files = get_data_file(res_path, content.get(\"outputs\"))\n    attrs = content.get(\"attrs\")\n    cmp_idx = 0\n    for attr in attrs:\n        if attr[\"name\"] == \"input_layout\":\n            input_layout = attr[\"value\"]\n            logging.info(f\"get input_layout:{input_layout}\")\n        if attr[\"name\"] == \"keep_prob\":\n            keep_prob = attr[\"value\"]\n            logging.info(f\"get keep_prob:{keep_prob}\")\n        if attr[\"name\"] == \"head_num\":\n            head_num = attr[\"value\"]\n            logging.info(f\"get head_num:{head_num}\")\n    shape = content.get(\"inputs\")[cmp_idx].get(\"shape\")\n    b_value = shape[input_layout.find(\"B\")]\n    s_value = shape[input_layout.find(\"S\")]\n    h_value = shape[input_layout.find(\"H\")]\n    input_dtype = DTYPE.get(content.get(\"inputs\")[cmp_idx].get(\"dtype\"), np.float16)\n    output_dtype = DTYPE.get(content.get(\"outputs\")[cmp_idx].get(\"dtype\"), np.float16)\n    shape_info = InputOutputShapeInfo(shape_info=(b_value, head_num, s_value, h_value),\n                                      keep_prob=keep_prob,\n                                      input_dtype=input_dtype,\n                                      output_dtype=output_dtype)\n    return shape_info, input_files, output_files\nif __name__ == '__main__':\n    \"\"\"\n    sys.argv[1]: input data file path\n    sys.argv[2]: output file path\n    sys.argv[3]: gen data type: input/output/all\n    \"\"\"\n    tensor_shape_info, input_file_list, output_file_list = get_args()\n    gen_total_golden_output(tensor_shape_info, input_file_list, output_file_list, need_new=True)\n"
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