"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["117639"], {
586944(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_napi_napi_md_c79_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-napi-napi-md-c79.json
var site_docs_ref_napi_napi_md_c79_namespaceObject = JSON.parse('{"id":"napi/napi","title":"Node-API","description":"简介","source":"@site/docs-ref/napi/napi.md","sourceDirName":"napi","slug":"/napi/napi","permalink":"/harmonyos-docs-site/ref/napi/napi","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"Node-API","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/napi","kit":"标准库","last_updated":"2026-04-22","slug":"napi"},"sidebar":"ref","previous":{"title":"c++标准库","permalink":"/harmonyos-docs-site/ref/cpp/cpp"},"next":{"title":"libuv","permalink":"/harmonyos-docs-site/ref/libuv/libuv"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/napi/napi.md


const frontMatter = {
	title: 'Node-API',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/napi',
	kit: '标准库',
	last_updated: '2026-04-22',
	slug: 'napi'
};
const contentTitle = 'Node-API';

const assets = {

};



const toc = [{
  "value": "简介",
  "id": "简介",
  "level": 2
}, {
  "value": "支持的能力",
  "id": "支持的能力",
  "level": 2
}, {
  "value": "引入Node-API能力",
  "id": "引入node-api能力",
  "level": 2
}, {
  "value": "已从Node-API组件标准库中导出的符号列表",
  "id": "已从node-api组件标准库中导出的符号列表",
  "level": 2
}, {
  "value": "已导出符号列表与标准库对应符号的差异",
  "id": "已导出符号列表与标准库对应符号的差异",
  "level": 2
}, {
  "value": "napi_throw_error",
  "id": "napi_throw_error",
  "level": 3
}, {
  "value": "napi_throw_type_error",
  "id": "napi_throw_type_error",
  "level": 3
}, {
  "value": "napi_throw_range_error",
  "id": "napi_throw_range_error",
  "level": 3
}, {
  "value": "napi_create_error",
  "id": "napi_create_error",
  "level": 3
}, {
  "value": "napi_create_type_error",
  "id": "napi_create_type_error",
  "level": 3
}, {
  "value": "napi_create_range_error",
  "id": "napi_create_range_error",
  "level": 3
}, {
  "value": "napi_create_reference",
  "id": "napi_create_reference",
  "level": 3
}, {
  "value": "napi_delete_reference",
  "id": "napi_delete_reference",
  "level": 3
}, {
  "value": "napi_create_symbol",
  "id": "napi_create_symbol",
  "level": 3
}, {
  "value": "napi_create_typedarray",
  "id": "napi_create_typedarray",
  "level": 3
}, {
  "value": "napi_create_dataview",
  "id": "napi_create_dataview",
  "level": 3
}, {
  "value": "napi_get_typedarray_info",
  "id": "napi_get_typedarray_info",
  "level": 3
}, {
  "value": "napi_coerce_to_object",
  "id": "napi_coerce_to_object",
  "level": 3
}, {
  "value": "napi_instanceof",
  "id": "napi_instanceof",
  "level": 3
}, {
  "value": "napi_is_typedarray",
  "id": "napi_is_typedarray",
  "level": 3
}, {
  "value": "napi_get_property_names",
  "id": "napi_get_property_names",
  "level": 3
}, {
  "value": "napi_set_property",
  "id": "napi_set_property",
  "level": 3
}, {
  "value": "napi_get_property",
  "id": "napi_get_property",
  "level": 3
}, {
  "value": "napi_has_property",
  "id": "napi_has_property",
  "level": 3
}, {
  "value": "napi_delete_property",
  "id": "napi_delete_property",
  "level": 3
}, {
  "value": "napi_has_own_property",
  "id": "napi_has_own_property",
  "level": 3
}, {
  "value": "napi_set_named_property",
  "id": "napi_set_named_property",
  "level": 3
}, {
  "value": "napi_get_named_property",
  "id": "napi_get_named_property",
  "level": 3
}, {
  "value": "napi_has_named_property",
  "id": "napi_has_named_property",
  "level": 3
}, {
  "value": "napi_set_element",
  "id": "napi_set_element",
  "level": 3
}, {
  "value": "napi_get_element",
  "id": "napi_get_element",
  "level": 3
}, {
  "value": "napi_has_element",
  "id": "napi_has_element",
  "level": 3
}, {
  "value": "napi_delete_element",
  "id": "napi_delete_element",
  "level": 3
}, {
  "value": "napi_define_properties",
  "id": "napi_define_properties",
  "level": 3
}, {
  "value": "napi_type_tag_object",
  "id": "napi_type_tag_object",
  "level": 3
}, {
  "value": "napi_check_object_type_tag",
  "id": "napi_check_object_type_tag",
  "level": 3
}, {
  "value": "napi_call_function",
  "id": "napi_call_function",
  "level": 3
}, {
  "value": "napi_new_instance",
  "id": "napi_new_instance",
  "level": 3
}, {
  "value": "napi_define_class",
  "id": "napi_define_class",
  "level": 3
}, {
  "value": "napi_wrap",
  "id": "napi_wrap",
  "level": 3
}, {
  "value": "napi_unwrap",
  "id": "napi_unwrap",
  "level": 3
}, {
  "value": "napi_remove_wrap",
  "id": "napi_remove_wrap",
  "level": 3
}, {
  "value": "napi_create_async_work",
  "id": "napi_create_async_work",
  "level": 3
}, {
  "value": "napi_delete_async_work",
  "id": "napi_delete_async_work",
  "level": 3
}, {
  "value": "napi_queue_async_work",
  "id": "napi_queue_async_work",
  "level": 3
}, {
  "value": "napi_cancel_async_work",
  "id": "napi_cancel_async_work",
  "level": 3
}, {
  "value": "napi_async_init",
  "id": "napi_async_init",
  "level": 3
}, {
  "value": "napi_make_callback",
  "id": "napi_make_callback",
  "level": 3
}, {
  "value": "napi_async_destroy",
  "id": "napi_async_destroy",
  "level": 3
}, {
  "value": "napi_get_node_version",
  "id": "napi_get_node_version",
  "level": 3
}, {
  "value": "napi_resolve_deferred",
  "id": "napi_resolve_deferred",
  "level": 3
}, {
  "value": "napi_reject_deferred",
  "id": "napi_reject_deferred",
  "level": 3
}, {
  "value": "napi_create_threadsafe_function",
  "id": "napi_create_threadsafe_function",
  "level": 3
}, {
  "value": "napi_call_threadsafe_function",
  "id": "napi_call_threadsafe_function",
  "level": 3
}, {
  "value": "napi_release_threadsafe_function",
  "id": "napi_release_threadsafe_function",
  "level": 3
}, {
  "value": "napi_ref_threadsafe_function",
  "id": "napi_ref_threadsafe_function",
  "level": 3
}, {
  "value": "napi_unref_threadsafe_function",
  "id": "napi_unref_threadsafe_function",
  "level": 3
}, {
  "value": "napi_create_date",
  "id": "napi_create_date",
  "level": 3
}, {
  "value": "napi_create_bigint_words",
  "id": "napi_create_bigint_words",
  "level": 3
}, {
  "value": "napi_get_value_bigint_words",
  "id": "napi_get_value_bigint_words",
  "level": 3
}, {
  "value": "napi_create_buffer",
  "id": "napi_create_buffer",
  "level": 3
}, {
  "value": "napi_create_buffer_copy",
  "id": "napi_create_buffer_copy",
  "level": 3
}, {
  "value": "napi_create_external_buffer",
  "id": "napi_create_external_buffer",
  "level": 3
}, {
  "value": "napi_get_buffer_info",
  "id": "napi_get_buffer_info",
  "level": 3
}, {
  "value": "napi_detach_arraybuffer",
  "id": "napi_detach_arraybuffer",
  "level": 3
}, {
  "value": "napi_add_env_cleanup_hook",
  "id": "napi_add_env_cleanup_hook",
  "level": 3
}, {
  "value": "napi_add_finalizer",
  "id": "napi_add_finalizer",
  "level": 3
}, {
  "value": "napi_fatal_exception",
  "id": "napi_fatal_exception",
  "level": 3
}, {
  "value": "napi_get_uv_event_loop",
  "id": "napi_get_uv_event_loop",
  "level": 3
}, {
  "value": "napi_create_array_with_length",
  "id": "napi_create_array_with_length",
  "level": 3
}, {
  "value": "napi_create_arraybuffer",
  "id": "napi_create_arraybuffer",
  "level": 3
}, {
  "value": "未从Node-API组件标准库中导出的符号列表",
  "id": "未从node-api组件标准库中导出的符号列表",
  "level": 2
}, {
  "value": "Node-API组件扩展的符号列表",
  "id": "node-api组件扩展的符号列表",
  "level": 2
}, {
  "value": "napi_qos_t",
  "id": "napi_qos_t",
  "level": 3
}, {
  "value": "napi_event_mode",
  "id": "napi_event_mode",
  "level": 3
}, {
  "value": "napi_queue_async_work_with_qos",
  "id": "napi_queue_async_work_with_qos",
  "level": 3
}, {
  "value": "napi_run_script_path",
  "id": "napi_run_script_path",
  "level": 3
}, {
  "value": "napi_load_module",
  "id": "napi_load_module",
  "level": 3
}, {
  "value": "napi_create_object_with_properties",
  "id": "napi_create_object_with_properties",
  "level": 3
}, {
  "value": "napi_create_object_with_named_properties",
  "id": "napi_create_object_with_named_properties",
  "level": 3
}, {
  "value": "napi_coerce_to_native_binding_object",
  "id": "napi_coerce_to_native_binding_object",
  "level": 3
}, {
  "value": "napi_create_ark_runtime",
  "id": "napi_create_ark_runtime",
  "level": 3
}, {
  "value": "napi_destroy_ark_runtime",
  "id": "napi_destroy_ark_runtime",
  "level": 3
}, {
  "value": "napi_run_event_loop",
  "id": "napi_run_event_loop",
  "level": 3
}, {
  "value": "napi_stop_event_loop",
  "id": "napi_stop_event_loop",
  "level": 3
}, {
  "value": "napi_load_module_with_info",
  "id": "napi_load_module_with_info",
  "level": 3
}, {
  "value": "napi_serialize",
  "id": "napi_serialize",
  "level": 3
}, {
  "value": "napi_deserialize",
  "id": "napi_deserialize",
  "level": 3
}, {
  "value": "napi_delete_serialization_data",
  "id": "napi_delete_serialization_data",
  "level": 3
}, {
  "value": "napi_call_threadsafe_function_with_priority",
  "id": "napi_call_threadsafe_function_with_priority",
  "level": 3
}, {
  "value": "napi_is_sendable",
  "id": "napi_is_sendable",
  "level": 3
}, {
  "value": "napi_define_sendable_class",
  "id": "napi_define_sendable_class",
  "level": 3
}, {
  "value": "napi_create_sendable_object_with_properties",
  "id": "napi_create_sendable_object_with_properties",
  "level": 3
}, {
  "value": "napi_create_sendable_array",
  "id": "napi_create_sendable_array",
  "level": 3
}, {
  "value": "napi_create_sendable_array_with_length",
  "id": "napi_create_sendable_array_with_length",
  "level": 3
}, {
  "value": "napi_create_sendable_arraybuffer",
  "id": "napi_create_sendable_arraybuffer",
  "level": 3
}, {
  "value": "napi_create_sendable_typedarray",
  "id": "napi_create_sendable_typedarray",
  "level": 3
}, {
  "value": "napi_wrap_sendable",
  "id": "napi_wrap_sendable",
  "level": 3
}, {
  "value": "napi_wrap_sendable_with_size",
  "id": "napi_wrap_sendable_with_size",
  "level": 3
}, {
  "value": "napi_unwrap_sendable",
  "id": "napi_unwrap_sendable",
  "level": 3
}, {
  "value": "napi_remove_wrap_sendable",
  "id": "napi_remove_wrap_sendable",
  "level": 3
}, {
  "value": "napi_wrap_enhance",
  "id": "napi_wrap_enhance",
  "level": 3
}, {
  "value": "napi_create_ark_context",
  "id": "napi_create_ark_context",
  "level": 3
}, {
  "value": "napi_switch_ark_context",
  "id": "napi_switch_ark_context",
  "level": 3
}, {
  "value": "napi_destroy_ark_context",
  "id": "napi_destroy_ark_context",
  "level": 3
}, {
  "value": "napi_open_critical_scope",
  "id": "napi_open_critical_scope",
  "level": 3
}, {
  "value": "napi_close_critical_scope",
  "id": "napi_close_critical_scope",
  "level": 3
}, {
  "value": "napi_get_buffer_string_utf16_in_critical_scope",
  "id": "napi_get_buffer_string_utf16_in_critical_scope",
  "level": 3
}, {
  "value": "napi_create_strong_reference",
  "id": "napi_create_strong_reference",
  "level": 3
}, {
  "value": "napi_delete_strong_reference",
  "id": "napi_delete_strong_reference",
  "level": 3
}, {
  "value": "napi_get_strong_reference_value",
  "id": "napi_get_strong_reference_value",
  "level": 3
}, {
  "value": "napi_finalize回调函数说明",
  "id": "napi_finalize回调函数说明",
  "level": 3
}, {
  "value": "napi_finalize_callback回调函数说明",
  "id": "napi_finalize_callback回调函数说明",
  "level": 3
}, {
  "value": "napi_create_external_string_utf16",
  "id": "napi_create_external_string_utf16",
  "level": 3
}, {
  "value": "napi_create_external_string_ascii",
  "id": "napi_create_external_string_ascii",
  "level": 3
}, {
  "value": "napi_create_strong_sendable_reference",
  "id": "napi_create_strong_sendable_reference",
  "level": 3
}, {
  "value": "napi_delete_strong_sendable_reference",
  "id": "napi_delete_strong_sendable_reference",
  "level": 3
}, {
  "value": "napi_get_strong_sendable_reference_value",
  "id": "napi_get_strong_sendable_reference_value",
  "level": 3
}, {
  "value": "napi_throw_business_error",
  "id": "napi_throw_business_error",
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
        id: "node-api",
        children: "Node-API"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "简介",
      children: "简介"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Node-API是用于封装JavaScript能力为Native插件的API，独立于底层JavaScript，并作为Node.js的一部分。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "支持的能力",
      children: "支持的能力"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Node-API可以去除底层的JavaScript引擎的差异，提供一套稳定的接口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HarmonyOS的Node-API组件对Node-API的接口进行了重新实现，底层对接了ArkJS等引擎。当前支持Node-API标准库中的部分接口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "引入node-api能力",
      children: "引入Node-API能力"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果开发者需要使用Node-API相关功能，首先请添加头文件："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include <napi/native_api.h>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "其次在CMakeLists.txt中添加以下动态链接库："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "libace_napi.z.so\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "已从node-api组件标准库中导出的符号列表",
      children: "已从Node-API组件标准库中导出的符号列表"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从Node-API标准库导出的接口，其使用方法及行为基于", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://nodejs.org/docs/latest-v12.x/api/n-api.html",
        children: "Node.js"
      }), "，并进行了部分", (0,jsx_runtime.jsx)(_components.a, {
        href: "#node-api%E7%BB%84%E4%BB%B6%E6%89%A9%E5%B1%95%E7%9A%84%E7%AC%A6%E5%8F%B7%E5%88%97%E8%A1%A8",
        children: "能力拓展"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "符号类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "符号名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "起始支持API版本"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_module_register"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi native模块注册接口。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_last_error_info"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取napi_extended_error_info结构体，其中包含最近一次出现的error信息。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_throw"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "抛出一个js value。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_throw_error"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "抛出一个带文本信息的js Error。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_throw_type_error"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "抛出一个带文本信息的js TypeError。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_throw_range_error"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "抛出一个带文本信息的js RangeError。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_is_error"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断napi_value是否表示为一个error对象。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_error"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建并获取一个带文本信息的js Error。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_type_error"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建并获取一个带文本信息的js TypeError。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_range_error"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建并获取一个带文本信息的js RangeError。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_and_clear_last_exception"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取并清除最近一次出现的异常。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_is_exception_pending"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断是否出现了异常。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_fatal_error"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "引发致命错误以立即终止进程。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_open_handle_scope"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个上下文环境使用。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_close_handle_scope"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "关闭传入的上下文环境，关闭后，所有在其中声明的引用都将被关闭。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_open_escapable_handle_scope"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建出一个可逃逸的handle scope，可将范围内声明的值返回到父作用域。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_close_escapable_handle_scope"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "关闭传入的可逃逸的handle scope。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_escape_handle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "提升传入的js object的生命周期到其父作用域。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_reference"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为Object创建一个reference，以延长其生命周期。调用者需要自己管理reference生命周期。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_delete_reference"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "删除传入的reference。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_reference_ref"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "增加传入的reference的引用计数，并获取该计数。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_reference_unref"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "减少传入的reference的引用计数，并获取该计数。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_reference_value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取与reference相关联的js Object。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_array"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建并获取一个js Array。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_array_with_length"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建并获取一个指定长度的js Array。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_arraybuffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建并获取一个指定大小的js ArrayBuffer。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_external"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "分配一个附加有外部数据的js value。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_external_arraybuffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "分配一个附加有外部数据的js ArrayBuffer。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个默认的js Object。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_symbol"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个js Symbol。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_typedarray"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过现有的ArrayBuffer创建一个js TypeArray。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_dataview"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过现有的ArrayBuffer创建一个js DataView。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_int32"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过一个C的int32_t数据创建js Number。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_uint32"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过一个C的uint32_t数据创建js Number。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_int64"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过一个C的int64_t数据创建js Number。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_double"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过一个C的double数据创建js Number。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_string_latin1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过ISO-8859-1编码的C字符串数据创建js String。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_string_utf8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过UTF8编码的C字符串数据创建js String。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_string_utf16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过UTF16编码的C字符串数据创建js String。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_array_length"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取array的length。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_arraybuffer_info"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取ArrayBuffer的底层data buffer及其长度。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_prototype"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定js Object的prototype。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_typedarray_info"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定TypedArray的各种属性。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_dataview_info"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定DataView的各种属性。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_value_bool"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定js Boolean对应的C bool值。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_value_double"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定js Number对应的C double值。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_value_external"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取先前通过napi_create_external()传递的外部数据指针。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_value_int32"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定js Number对应的C int32值。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_value_int64"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定js Number对应的C int64值。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_value_string_latin1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定js value对应的ISO-8859-1编码的字符串。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_value_string_utf8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定js value对应的UTF8编码的字符串。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_value_string_utf16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定js value对应的UTF16编码的字符串。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_value_uint32"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定js Number对应的C uint32值。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据给定的C boolean值，获取js bool对象。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_global"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取global对象。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_null"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取null对象。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_undefined"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取undefined对象。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_coerce_to_bool"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将给定的js value强转成js Boolean。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_coerce_to_number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将给定的js value强转成js Number。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_coerce_to_object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将给定的js value强转成js Object。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_coerce_to_string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将给定的js value强转成js String。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_typeof"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定js value的js type。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_instanceof"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断给定object是否为给定constructor的实例。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_is_array"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断给定js value是否为array。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_is_arraybuffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断给定js value是否为ArrayBuffer。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_is_typedarray"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断给定js value是否表示一个TypedArray。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_is_dataview"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断给定js value是否表示一个DataView。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_is_date"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断给定js value是否为js Date对象。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_strict_equals"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断给定的两个js value是否严格相等。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_property_names"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "以字符串数组的形式获取对象的可枚举属性的名称。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_set_property"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对给定Object设置属性。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_property"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定Object的给定属性。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_has_property"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断给定对象中是否存在给定属性。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_delete_property"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "尝试从给定Object中删除给定key属性。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_has_own_property"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断给定Object中是否有名为key的own property。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_set_named_property"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对给定Object设置一个给定名称的属性。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_named_property"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定Object中指定名称的属性。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_has_named_property"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断给定Object中是否有给定名称的属性。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_set_element"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在给定Object的指定索引处，设置元素。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_element"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定Object指定索引处的元素。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_has_element"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "若给定Object的指定索引处拥有属性，获取该元素。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_delete_element"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "尝试删除给定Object的指定索引处的元素。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_define_properties"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "批量的向给定Object中定义属性。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_type_tag_object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将tag指针的值与Object关联。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_check_object_type_tag"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断给定的tag指针是否被关联到了js Object上。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_call_function"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在Native方法中调用js function，即native call js。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_function"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建native方法给js使用，以便于js call native。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_cb_info"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从给定的callback info中获取有关调用的详细信息，如参数和this指针。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_new_target"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取构造函数调用的new.target。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_new_instance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过给定的构造函数，构建一个实例。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_define_class"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义与C++类相对应的JavaScript类。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_wrap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在js object上绑定一个native对象实例。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_unwrap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从js object上获取先前绑定的native对象实例。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_remove_wrap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从js object上获取先前绑定的native对象实例，并解除绑定。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_async_work"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个异步工作对象。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_delete_async_work"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "释放先前创建的异步工作对象。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_queue_async_work"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将异步工作对象加到队列，由底层去调度执行。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_cancel_async_work"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消入队的异步任务。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_async_init"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个异步资源上下文环境（不支持与async_hook相关能力）。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_make_callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在异步资源上下文环境中回调JS函数(不支持与async_hook相关能力)。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_async_destroy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁先前创建的异步资源上下文环境（不支持与async_hook相关能力）。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_open_callback_scope"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个回调作用域（不支持与async_hook相关能力）。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_close_callback_scope"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "关闭先前创建的回调作用域（不支持与async_hook相关能力）。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_node_version"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取node的版本信息。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_version"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取Node运行时支持的最高 N-API 版本。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_promise"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个延迟对象和js promise。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_resolve_deferred"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "resolve与js promise对象关联的延迟函数。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_reject_deferred"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "reject与js promise对象关联的延迟函数。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_is_promise"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断给定js value是否为promise对象。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_uv_event_loop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取当前libuv loop实例。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_threadsafe_function"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建线程安全函数。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_threadsafe_function_context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取线程安全函数中的context。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_call_threadsafe_function"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "调用线程安全函数。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_acquire_threadsafe_function"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指示线程安全函数可以开始使用。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_release_threadsafe_function"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指示线程安全函数将停止使用。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_ref_threadsafe_function"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指示在主线程上运行的事件循环在线程安全函数被销毁之前不应退出。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_unref_threadsafe_function"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指示在主线程上运行的事件循环可能会在线程安全函数被销毁之前退出。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_date"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过一个C的double数据创建js Date。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_date_value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定js Date对应的C double值。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_bigint_int64"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过一个C的int64数据创建js BigInt。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_bigint_uint64"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过一个C的uint64数据创建js BigInt。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_bigint_words"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过一个C的uint64数组创建单个js BigInt。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_value_bigint_int64"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定js BigInt对应的C int64值。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_value_bigint_uint64"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定js BigInt对应的C uint64值。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_value_bigint_words"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定js BigInt对应的信息，包括符号位、64位小端序数组和数组中的元素个数。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_buffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建并获取一个指定大小的js Buffer。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_buffer_copy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建并获取一个指定大小的js Buffer，并以给定数据进行初始化。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_external_buffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建并获取一个指定大小的js Buffer，并以给定数据进行初始化，该接口可为Buffer附带额外数据。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_buffer_info"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取js Buffer底层data及其长度。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_is_buffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断给定js value是否为Buffer对象。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_object_freeze"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "冻结给定的对象。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_object_seal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "密封给定的对象。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_all_property_names"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取一个数组，其中包含此对象过滤后的属性名称。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_detach_arraybuffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "分离给定ArrayBuffer的底层数据。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_is_detached_arraybuffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断给定的ArrayBuffer是否已被分离过。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_run_script"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将给定对象作为js代码运行。当前接口实际为空实现，可使用系统拓展接口napi_run_script_path接口，提升安全性。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_set_instance_data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "绑定与当前运行的环境相关联的数据项。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_instance_data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "检索与当前运行的环境相关联的数据项。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_add_env_cleanup_hook"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册环境清理钩子函数。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_remove_env_cleanup_hook"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消环境清理钩子函数。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_add_async_cleanup_hook"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册清理异步钩子函数。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_remove_async_cleanup_hook"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消清理异步钩子函数。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "node_api_get_module_file_name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于获取加载项加载位置的绝对路径。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_add_finalizer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当js Object中的对象被垃圾回收时调用注册的napi_finalize回调。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_fatal_exception"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "向js抛出 UncaughtException。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "已导出符号列表与标准库对应符号的差异",
      children: "已导出符号列表与标准库对应符号的差异"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_throw_error",
      children: "napi_throw_error"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当code为空指针时，标准库会返回napi_invalid_arg，而HarmonyOS中未做判断。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "该导出接口允许code属性设置失败。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_throw_type_error",
      children: "napi_throw_type_error"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当code为空指针时，标准库会返回napi_invalid_arg，而HarmonyOS中未做判断。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "该导出接口允许code属性设置失败。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_throw_range_error",
      children: "napi_throw_range_error"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当code为空指针时，标准库会返回napi_invalid_arg，而HarmonyOS中未做判断。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "该导出接口允许code属性设置失败。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_create_error",
      children: "napi_create_error"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "code: 该导出接口支持String或Number类型。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当code类型不匹配时，该导出接口返回napi_invalid_arg。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "该导出接口允许code属性设置失败。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_create_type_error",
      children: "napi_create_type_error"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "code: HarmonyOS中支持String或Number类型,但标准库接口的code类型仅支持String类型。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当code类型不匹配时，HarmonyOS接口返回napi_invalid_arg，标准库接口返回napi_string_expected。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "HarmonyOS的导出接口允许code属性设置失败，标准库接口会判断设置执行情况，若设置失败，返回napi_generic_failure。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "HarmonyOS中创建的错误类型为Error，标准库创建的错误类型为TypeError。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_create_range_error",
      children: "napi_create_range_error"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "code: HarmonyOS中支持String或Number类型,但标准库接口的code类型仅支持String类型。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当code类型不匹配时，HarmonyOS接口返回napi_invalid_arg，标准库接口返回napi_string_expected。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "HarmonyOS的导出接口允许code属性设置失败，标准库接口会判断设置执行情况，若设置失败，返回napi_generic_failure。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "HarmonyOS中创建的错误类型为Error，标准库创建的错误类型为RangeError。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_create_reference",
      children: "napi_create_reference"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "value: HarmonyOS接口对value的类型没有限制，而标准库中仅支持Object、Function、Symbol类型。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_delete_reference",
      children: "napi_delete_reference"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "说明："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在HarmonyOS中，如果创建强引用时注册了napi_finalize回调函数，调用该接口的时候会触发该napi_finalize回调。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_create_symbol",
      children: "napi_create_symbol"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当入参description不为空且不是String对象时，该导出接口返回napi_invalid_arg。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_create_typedarray",
      children: "napi_create_typedarray"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当入参arraybuffer不为空且不为ArrayBuffer对象时，该导出接口返回napi_arraybuffer_expected。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_create_dataview",
      children: "napi_create_dataview"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当入参arraybuffer不为空且不为ArrayBuffer对象时，该导出接口返回napi_arraybuffer_expected。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果byte_offset与byte_length的和大于arraybuffer的大小，该导出接口将会抛出RangeError异常，并返回napi_pending_exception。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_get_typedarray_info",
      children: "napi_get_typedarray_info"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["object: 该导出接口支持TypedArray或Sendable TypedArray（", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkts-api/arkts-arkts/js-apis-arkts-collections/arkts-apis-arkts-collections-int8array/arkts-apis-arkts-collections-int8array",
          children: "Int8Array"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkts-api/arkts-arkts/js-apis-arkts-collections/arkts-apis-arkts-collections-uint8array/arkts-apis-arkts-collections-uint8array",
          children: "Uint8Array"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkts-api/arkts-arkts/js-apis-arkts-collections/arkts-apis-arkts-collections-int16array/arkts-apis-arkts-collections-int16array",
          children: "Int16Array"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkts-api/arkts-arkts/js-apis-arkts-collections/arkts-apis-arkts-collections-uint16array/arkts-apis-arkts-collections-uint16array",
          children: "Uint16Array"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkts-api/arkts-arkts/js-apis-arkts-collections/arkts-apis-arkts-collections-int32array/arkts-apis-arkts-collections-int32array",
          children: "Int32Array"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkts-api/arkts-arkts/js-apis-arkts-collections/arkts-apis-arkts-collections-uint32array/arkts-apis-arkts-collections-uint32array",
          children: "Uint32Array"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkts-api/arkts-arkts/js-apis-arkts-collections/arkts-apis-arkts-collections-uint8clampedarray/arkts-apis-arkts-collections-uint8clampedarray",
          children: "Uint8ClampedArray"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkts-api/arkts-arkts/js-apis-arkts-collections/arkts-apis-arkts-collections-float32array/arkts-apis-arkts-collections-float32array",
          children: "Float32Array"
        }), "）类型。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "标准库接口中出参length返回typedarray的元素数量，而HarmonyOS的该导出接口返回typedarray中元素的字节长度。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_coerce_to_object",
      children: "napi_coerce_to_object"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当value为undefined或null时，该导出接口返回napi_ok，出参result为undefined。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_instanceof",
      children: "napi_instanceof"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当参数object不是Object对象时，该导出接口直接返回napi_object_expected，result不做处理。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当参数constructor不是Function对象时，该导出接口不会抛出异常，接口返回napi_function_expected。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_is_typedarray",
      children: "napi_is_typedarray"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["value: 该导出接口额外支持Sendable TypedArray（", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkts-api/arkts-arkts/js-apis-arkts-collections/arkts-apis-arkts-collections-int8array/arkts-apis-arkts-collections-int8array",
          children: "Int8Array"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkts-api/arkts-arkts/js-apis-arkts-collections/arkts-apis-arkts-collections-uint8array/arkts-apis-arkts-collections-uint8array",
          children: "Uint8Array"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkts-api/arkts-arkts/js-apis-arkts-collections/arkts-apis-arkts-collections-int16array/arkts-apis-arkts-collections-int16array",
          children: "Int16Array"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkts-api/arkts-arkts/js-apis-arkts-collections/arkts-apis-arkts-collections-uint16array/arkts-apis-arkts-collections-uint16array",
          children: "Uint16Array"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkts-api/arkts-arkts/js-apis-arkts-collections/arkts-apis-arkts-collections-int32array/arkts-apis-arkts-collections-int32array",
          children: "Int32Array"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkts-api/arkts-arkts/js-apis-arkts-collections/arkts-apis-arkts-collections-uint32array/arkts-apis-arkts-collections-uint32array",
          children: "Uint32Array"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkts-api/arkts-arkts/js-apis-arkts-collections/arkts-apis-arkts-collections-uint8clampedarray/arkts-apis-arkts-collections-uint8clampedarray",
          children: "Uint8ClampedArray"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkts-api/arkts-arkts/js-apis-arkts-collections/arkts-apis-arkts-collections-float32array/arkts-apis-arkts-collections-float32array",
          children: "Float32Array"
        }), "）类型。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_get_property_names",
      children: "napi_get_property_names"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当参数object不是Object或Function对象时，该导出接口返回napi_object_expected。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_set_property",
      children: "napi_set_property"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当参数object不是Object或Function对象时，该导出接口返回napi_object_expected。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_get_property",
      children: "napi_get_property"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当参数object不是Object或Function对象时，该导出接口返回napi_object_expected。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_has_property",
      children: "napi_has_property"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当参数object不是Object或Function对象时，该导出接口返回napi_object_expected。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_delete_property",
      children: "napi_delete_property"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当参数object不是Object或Function对象时，该导出接口返回napi_object_expected。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_has_own_property",
      children: "napi_has_own_property"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当参数object不是Object或Function对象时，该导出接口返回napi_object_expected。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_set_named_property",
      children: "napi_set_named_property"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当参数object不是Object或Function对象时，该导出接口返回napi_object_expected。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_get_named_property",
      children: "napi_get_named_property"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当参数object不是Object或Function对象时，该导出接口返回napi_object_expected。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_has_named_property",
      children: "napi_has_named_property"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当参数object不是Object或Function对象时，该导出接口返回napi_object_expected。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_set_element",
      children: "napi_set_element"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当参数object不是Object或Function对象时，该导出接口返回napi_object_expected。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当设置的index超大的时候，标准库中会直接抛出异常并中断进程，HarmonyOS中会尝试分配内存，若分配失败则不对object进行修改。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_get_element",
      children: "napi_get_element"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当参数object不是Object或Function对象时，该导出接口返回napi_object_expected。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_has_element",
      children: "napi_has_element"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当参数object不是Object或Function对象时，该导出接口返回napi_object_expected。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_delete_element",
      children: "napi_delete_element"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当参数object不是Object或Function对象时，该导出接口返回napi_object_expected。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_define_properties",
      children: "napi_define_properties"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当参数object不是Object或Function对象时，该导出接口返回napi_object_expected。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "若在遍历设置属性的过程中触发异常，标准库中会直接将异常抛出，HarmonyOS中会清除异常继续执行。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_type_tag_object",
      children: "napi_type_tag_object"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当参数js_object不是Object或Function对象时，该导出接口返回napi_object_expected。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_check_object_type_tag",
      children: "napi_check_object_type_tag"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当参数js_object不是Object或Function对象时，该导出接口返回napi_object_expected。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_call_function",
      children: "napi_call_function"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "该导出接口不会去校验参数recv是否为nullptr。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当参数func不是Function对象时，该导出接口返回napi_function_expected。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_new_instance",
      children: "napi_new_instance"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当参数constructor不是Function对象时，该导出接口返回napi_function_expected。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_define_class",
      children: "napi_define_class"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当length不为NAPI_AUTO_LENGTH且大于INT_MAX时，该导出接口返回napi_object_expected。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_wrap",
      children: "napi_wrap"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "finalize_cb: 标准库允许为空， HarmonyOS在该参数为空时，返回napi_invalid_arg。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "result: 标准库返回弱引用， HarmonyOS在result不为空时返回强引用。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "参数js_object不为Object或Function对象时，该导出接口返回napi_object_expected。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_unwrap",
      children: "napi_unwrap"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "参数js_object不为Object或Function对象时，该导出接口返回napi_object_expected。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_remove_wrap",
      children: "napi_remove_wrap"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "参数js_object不为Object或Function对象时，该导出接口返回napi_object_expected。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "说明："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果封装中关联有finalize回调，HarmonyOS中该导出接口将在移除封装前调用它。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_create_async_work",
      children: "napi_create_async_work"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "该导出接口暂时不支持async_hooks资源管理机制。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "该导出接口不会校验入参async_resource_name是否为String类型对象，入参async_resource_name推荐传入String对象，用于描述创建的异步工作对象。入参async_resource_name为String时，trace信息将包含该描述，反之传入非String对象，trace信息将不包含该描述。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "由于当前暂不支持async_hooks资源管理机制，入参async_resource暂时也不做处理。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_delete_async_work",
      children: "napi_delete_async_work"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "该导出接口暂时不支持async_hooks资源管理机制。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_queue_async_work",
      children: "napi_queue_async_work"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "该导出接口暂时不支持async_hooks资源管理机制。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_cancel_async_work",
      children: "napi_cancel_async_work"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "若因为底层uv导致取消任务失败，标准库会根据失败原因，返回napi_generic_failure或napi_invalid_arg或napi_cancelled，而在HarmonyOS上该导出接口不会去校验uv的返回值，开发者可以根据相关的日志去排查任务是否取消失败。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_async_init",
      children: "napi_async_init"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "说明："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "HarmonyOS暂不支持async_hooks资源管理机制。目前未实现与async_hooks交互的内容，该接口调用后并不会有async_hooks的相关操作。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_make_callback",
      children: "napi_make_callback"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "说明："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "HarmonyOS暂不支持async_hooks资源管理机制。目前未实现与async_hooks交互的内容，该接口调用后并不会有async_hooks的相关操作。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_async_destroy",
      children: "napi_async_destroy"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "说明："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "HarmonyOS暂不支持async_hooks资源管理机制。目前未实现与async_hooks交互的内容，接口调用后并不会有async_hooks的相关操作。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_get_node_version",
      children: "napi_get_node_version"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "说明："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "HarmonyOS不需要获取node的版本，故当前该导出接口为空实现。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_resolve_deferred",
      children: "napi_resolve_deferred"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "说明："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "promise的then方法的resolve或者reject回调中出现异常时，如果promise没有catch块，代码会继续执行不会崩溃；如果promise有catch块，则异常会被该catch块捕获。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_reject_deferred",
      children: "napi_reject_deferred"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "说明："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "promise的then方法的resolve或者reject回调中出现异常时，如果promise没有catch块，代码会继续执行不会崩溃；如果promise有catch块，则异常会被该catch块捕获。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_create_threadsafe_function",
      children: "napi_create_threadsafe_function"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "initial_thread_count: HarmonyOS中上限为128。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "async_resource: HarmonyOS中不做类型限制。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "async_resource_name: HarmonyOS中不做类型限制。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "func: HarmonyOS中不做类型限制。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "说明："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "HarmonyOS中，创建线程安全函数的过程中没有注册cleanup hook方法，如有需要可以调用napi_add_env_cleanup_hook。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_call_threadsafe_function",
      children: "napi_call_threadsafe_function"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "说明："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "HarmonyOS调用uv_async_send接口前会检查env是否存活。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "调用uv_async_send接口失败时，HarmonyOS中会返回napi_generic_failure。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_release_threadsafe_function",
      children: "napi_release_threadsafe_function"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "说明："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "HarmonyOS调用uv_async_send接口前会检查env是否存活。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ThreadCount为0时，HarmonyOS中会返回napi_generic_failure。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_ref_threadsafe_function",
      children: "napi_ref_threadsafe_function"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "说明："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "HarmonyOS中有校验func和env是否为同一ArkTS线程的过程，若不是同一线程则会返回napi_generic_failure。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_unref_threadsafe_function",
      children: "napi_unref_threadsafe_function"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "说明："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "HarmonyOS中有校验func和env是否为同一ArkTS线程的过程，若不是同一线程则会返回napi_generic_failure。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_create_date",
      children: "napi_create_date"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当入参正常但date创建失败时，标准库中返回napi_generic_failure，而HarmonyOS中将会抛出异常，并且接口返回napi_pending_exception。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_create_bigint_words",
      children: "napi_create_bigint_words"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当入参正常但bigInt创建失败时，标准库中返回napi_generic_failure，而HarmonyOS中将会抛出异常，并且接口返回napi_pending_exception。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_get_value_bigint_words",
      children: "napi_get_value_bigint_words"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当参数value不是BigInt对象时，HarmonyOS中返回napi_object_expected。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_create_buffer",
      children: "napi_create_buffer"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "HarmonyOS中创建的buffer类型为ArrayBufferLike。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "HarmonyOS中，size小于等于0时返回napi_invalid_arg。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "HarmonyOS中，size大于2097152时返回napi_invalid_arg并打印错误日志。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "HarmonyOS中，data为nullptr时返回napi_invalid_arg。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "标准库中，进入或退出接口前若有异常将直接返回napi_pending_exception，HarmonyOS中没有对此做校验。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_create_buffer_copy",
      children: "napi_create_buffer_copy"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "HarmonyOS中创建的buffer类型为ArrayBufferLike。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "HarmonyOS中，length小于等于0时返回napi_invalid_arg。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "HarmonyOS中，length大于2097152时返回napi_invalid_arg并打印错误日志。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "HarmonyOS中，data为nullptr时返回napi_invalid_arg。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "标准库中，进入或退出接口前若有异常将直接返回napi_pending_exception，HarmonyOS中没有对此做校验。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_create_external_buffer",
      children: "napi_create_external_buffer"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "HarmonyOS中创建的buffer类型为ArrayBufferLike。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "HarmonyOS中，length小于等于0时返回napi_invalid_arg。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "HarmonyOS中，length大于2097152时返回napi_invalid_arg并打印错误日志。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "标准库中，因未知原因导致创建失败时将返回napi_generic_failure，HarmonyOS中返回napi_pending_exception。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_get_buffer_info",
      children: "napi_get_buffer_info"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "HarmonyOS会对value是否属于buffer进行判断，若不属于则返回napi_arraybuffer_expected。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_detach_arraybuffer",
      children: "napi_detach_arraybuffer"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当入参arraybuffer不为Object对象时，该导出接口返回napi_object_expected；当arraybuffer是Object对象但不为ArrayBuffer对象时，该导出接口返回napi_invalid_arg。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_add_env_cleanup_hook",
      children: "napi_add_env_cleanup_hook"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "说明："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "data已注册到env中时，HarmonyOS仅打印异常日志。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_add_finalizer",
      children: "napi_add_finalizer"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "入参js_object不是Object对象时，HarmonyOS中该导出接口返回napi_object_expected。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "说明："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "HarmonyOS在强引用delete的时候直接回调，标准库是在对象析构时候才会回调。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "回调主动抛出异常时，HarmonyOS会触发JSCrash，标准库不会触发crash。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "HarmonyOS在result非空时创建强引用，标准库则创建弱引用。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_fatal_exception",
      children: "napi_fatal_exception"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "err: HarmonyOS中仅支持Error类型，类型不匹配将返回napi_invalid_arg。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_get_uv_event_loop",
      children: "napi_get_uv_event_loop"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "参数env不是有效的napi_env（例如此env已被释放）时，该导出接口返回napi_generic_failure。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_create_array_with_length",
      children: "napi_create_array_with_length"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当length数值过大时，标准库中会直接抛出异常并中断进程，HarmonyOS中会尝试分配内存，若分配失败则抛出异常并返回长度为0的array。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_create_arraybuffer",
      children: "napi_create_arraybuffer"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当length数值过大时，标准库中会直接抛出异常并中断进程，HarmonyOS中会尝试分配内存，若分配失败则抛出异常并返回undefined。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "未从node-api组件标准库中导出的符号列表",
      children: "未从Node-API组件标准库中导出的符号列表"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "符号类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "符号名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_adjust_external_memory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "调整js Object持有的外部内存。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "node-api组件扩展的符号列表",
      children: "Node-API组件扩展的符号列表"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "符号类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "符号名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "起始支持API版本"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_queue_async_work_with_qos"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将异步工作对象加到队列，由底层根据传入的qos优先级去调度执行。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_run_script_path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "运行abc文件。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_load_module"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将abc文件作为模块加载，返回模块的命名空间。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_object_with_properties"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用给定的napi_property_descriptor创建js Object。descriptor的键名必须为 string，且不可转为number。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_object_with_named_properties"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用给定的napi_value和键名创建js Object。键名必须为 string，且不可转为number。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_coerce_to_native_binding_object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "强制将js Object和Native对象绑定。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_ark_runtime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建基础运行时环境。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_destroy_ark_runtime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁基础运行时环境。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_run_event_loop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "触发底层的事件循环。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_stop_event_loop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "停止底层的事件循环。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_load_module_with_info"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将abc文件作为模块加载，返回模块的命名空间。可在新创建的ArkTS基础运行时环境中使用。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_serialize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将ArkTS对象转换为native数据。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_deserialize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将native数据转为ArkTS对象。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_delete_serialization_data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "删除序列化数据。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_call_threadsafe_function_with_priority"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将指定优先级和入队方式的任务投递到ArkTS主线程。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_is_sendable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断给定JS value是否是Sendable的。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_define_sendable_class"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个Sendable类。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_sendable_object_with_properties"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用给定的napi_property_descriptor创建一个Sendable对象。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_sendable_array"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个Sendable数组。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_sendable_array_with_length"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个指定长度的Sendable数组。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_sendable_arraybuffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个Sendable ArrayBuffer。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_sendable_typedarray"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个Sendable TypedArray。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_wrap_sendable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "封装一个native实例到ArkTS对象中。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_wrap_sendable_with_size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "封装一个native实例到ArkTS对象中并指定大小。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_unwrap_sendable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取ArkTS对象包裹的native实例。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_remove_wrap_sendable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "移除并获取ArkTS对象包裹的native实例，移除后回调将不再触发，需手动delete释放内存。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_wrap_enhance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在ArkTS对象上绑定一个native对象实例并指定实例大小，运行时会统计传入的实例大小并将其累加，当累计大小达到GC触发阈值时，运行时会启动垃圾回收流程。开发者可以指定绑定的回调函数是否异步执行，如果是异步执行，回调函数必须保证是线程安全的。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "18"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_ark_context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个新的运行时上下文环境。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_switch_ark_context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "切换到指定的运行时上下文环境。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_destroy_ark_context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁通过接口napi_create_ark_context创建的一个上下文环境。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_open_critical_scope"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "打开临界区作用域。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "21"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_close_critical_scope"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "关闭临界区作用域。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "21"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_buffer_string_utf16_in_critical_scope"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取ArkTS String的UTF-16编码内存缓冲区数据。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "21"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_strong_reference"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建指向ArkTS对象的强引用。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "21"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_delete_strong_reference"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "删除强引用。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "21"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_strong_reference_value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据强引用获取其关联的ArkTS对象值。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "21"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_external_string_utf16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要通过外部UTF-16编码的字符串缓冲区创建ArkTS字符串值且避免内存拷贝时使用此函数。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "22"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_external_string_ascii"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要通过外部ASCII编码的字符串缓冲区创建ArkTS字符串值且避免内存拷贝时使用此函数。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "22"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_strong_sendable_reference"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建指向Sendable ArkTS对象的Sendable强引用。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "22"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_delete_strong_sendable_reference"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "删除Sendable强引用。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "22"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_strong_sendable_reference_value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据Sendable强引用获取其关联的ArkTS对象值。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "22"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FUNC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_throw_business_error"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "抛出一个带文本信息的ArkTS Error, 其错误对象的code属性类型为number类型。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "23"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "说明："
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["有关Sendable特性的介绍，详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/sendable-object/arkts-sendable",
        children: "Sendable开发指导"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_qos_t",
      children: "napi_qos_t"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef enum {\n    napi_qos_background = 0,      // 低等级，用户不可见任务，例如数据同步、备份。\n    napi_qos_utility = 1,         // 中低等级，不需要立即看到响应效果的任务，例如下载或导入数据。\n    napi_qos_default = 2,         // 默认\n    napi_qos_user_initiated = 3,  // 高等级，用户触发并且可见进展，例如打开文档。\n} napi_qos_t;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "表示QoS的枚举值，QoS决定了线程调度的优先级。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_event_mode",
      children: "napi_event_mode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef enum {\n    napi_event_mode_default = 0,  // 阻塞式的运行底层事件循环，直到循环中没有任何任务时退出事件循环。\n    napi_event_mode_nowait = 1,   // 非阻塞式的运行底层事件循环，尝试去处理一个任务，处理完之后退出事件循环；如果事件循环中没有任务，立刻退出事件循环。\n} napi_event_mode;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于运行事件循环的事件模式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_queue_async_work_with_qos",
      children: "napi_queue_async_work_with_qos"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "napi_status napi_queue_async_work_with_qos(napi_env env,\n                                           napi_async_work work,\n                                           napi_qos_t qos);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将异步工作对象加到队列，由底层根据传入的qos优先级去调度执行。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[in] env: Node-API的环境对象，表示当前的执行环境。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[in] work: 一个表示异步工作项的对象。这个对象通常是通过napi_create_async_work函数创建的。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[in] qos: 决定了线程调度的优先级。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果API成功，则返回napi_ok。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_run_script_path",
      children: "napi_run_script_path"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "napi_status napi_run_script_path(napi_env env,\n                                 const char* abcPath,\n                                 napi_value* result);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "运行指定abc文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[in] env: Node-API的环境对象，表示当前的执行环境。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[in] abcPath: 要运行的脚本的JavaScript路径。这是一个字符串，指定了要运行的脚本文件的位置。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[out] result: 一个指向napi_value类型的指针，用于存储运行脚本的结果。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果API成功，则返回napi_ok。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_load_module",
      children: "napi_load_module"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "napi_status napi_load_module(napi_env env,\n                             const char* path,\n                             napi_value* result);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "加载系统模块或开发者自定义的模块，返回模块的命名空间。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[in] env: Node-API的环境对象，表示当前的执行环境。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[in] path: 要加载的系统模块的名称或开发者自定义模块的路径。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[out] result: 一个指向napi_value类型的指针，用于存储加载模块的结果。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果API成功，则返回napi_ok。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_create_object_with_properties",
      children: "napi_create_object_with_properties"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "napi_status napi_create_object_with_properties(napi_env env,\n                                               napi_value* result,\n                                               size_t property_count,\n                                               const napi_property_descriptor* properties);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "属性描述符napi_property_descriptor用于描述一个属性，它包括属性的名称获取和设置方法、属性特性等信息。通过传入这些描述符，可以在创建对象时就定义属性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用给定的napi_property_descriptor创建js Object。descriptor的键名必须为string，且不可转为number。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[in] env: Node-API的环境对象，表示当前的执行环境。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[out] result: 一个指向napi_value类型的指针，用于存储创建的对象。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[in] property_count: 要添加到对象中的属性的数量。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[in] properties: 一个指向napi_property_descriptor数组的指针，描述了要添加到对象中的属性的信息。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果API成功，则返回napi_ok。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_create_object_with_named_properties",
      children: "napi_create_object_with_named_properties"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "napi_status napi_create_object_with_named_properties(napi_env env,\n                                                     napi_value* result,\n                                                     size_t property_count,\n                                                     const char** keys,\n                                                     const napi_value* values);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用给定的napi_value和键名创建js Object。键名必须为string，且不可转为number。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[in] env: Node-API的环境对象，表示当前的执行环境。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[out] result: 一个指向napi_value类型的指针，用于存储创建的对象。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[in] property_count: 要添加到对象中的属性的数量。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[in] keys: 一个指向const char*数组的指针，表示属性的名称。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[in] values: 一个指向napi_value数组的指针，表示属性的值，与属性名称一一对应。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果API成功，则返回napi_ok。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_coerce_to_native_binding_object",
      children: "napi_coerce_to_native_binding_object"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "napi_status napi_coerce_to_native_binding_object(napi_env env,\n                                                 napi_value js_object,\n                                                 napi_native_binding_detach_callback detach_cb,\n                                                 napi_native_binding_attach_callback attach_cb,\n                                                 void* native_object,\n                                                 void* hint);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于给JS Object绑定回调和回调所需的参数，转成携带Native信息的JS Object。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[in] env: Node-API的环境对象，表示当前的执行环境。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[in] js_object: 要转换的JavaScript对象。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[in] detach_cb: 解绑回调，一般在序列化时调用，可在对象解绑时执行一些清理操作。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[in] attach_cb: 绑定回调，一般在序列化时调用。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[in] native_object: 需要传递给回调的参数，不能为空。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[in] hint: 一个指针，可以用于传递附加的信息给回调函数。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果API成功，则返回napi_ok。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_create_ark_runtime",
      children: "napi_create_ark_runtime"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "napi_status napi_create_ark_runtime(napi_env *env)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["创建基础运行时环境，一个进程最多创建64个，并满足与", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkts/arkts-concurrency/multithread-concurrency/worker-introduction",
        children: "Worker"
      }), "创建的子线程总数不超过80个。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[in] env: Node-API的环境对象，表示当前的执行环境。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果API成功，则返回napi_ok。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_destroy_ark_runtime",
      children: "napi_destroy_ark_runtime"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "napi_status napi_destroy_ark_runtime(napi_env *env)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "销毁基础运行时环境。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[in] env: Node-API的环境对象，表示当前的执行环境。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果API成功，则返回napi_ok。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_run_event_loop",
      children: "napi_run_event_loop"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "napi_status napi_run_event_loop(napi_env env, napi_event_mode mode)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "触发底层的事件循环。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[in] env: Node-API的环境对象，表示当前的执行环境。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[in] mode: 用于运行事件循环的事件模式。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果API成功，则返回napi_ok。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_stop_event_loop",
      children: "napi_stop_event_loop"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "napi_status napi_stop_event_loop(napi_env env)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "停止底层的事件循环。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[in] env: Node-API的环境对象，表示当前的执行环境。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果API成功，则返回napi_ok。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_load_module_with_info",
      children: "napi_load_module_with_info"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "napi_status napi_load_module_with_info(napi_env env,\n                                       const char* path,\n                                       const char* module_info,\n                                       napi_value* result)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将abc文件作为模块加载，返回模块的命名空间。可在新创建的ArkTS基础运行时环境中使用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[in] env: Node-API的环境对象，表示当前的执行环境。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[in] path: 要加载的模块的路径。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[in] module_info: 模块信息。这是一个包含模块信息字符串。模块信息可以用于指定模块的版本、作者、描述等详细信息。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[out] result: 指向napi_value的指针，用于接收模块的结果。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果API成功，则返回napi_ok。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_serialize",
      children: "napi_serialize"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "napi_status napi_serialize(napi_env env,\n                           napi_value object,\n                           napi_value transfer_list,\n                           napi_value clone_list,\n                           void** result)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将ArkTS对象转换为native数据。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[in] env: Node-API的环境对象，表示当前的执行环境。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[in] object: 要序列化的JavaScript对象。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[in] transfer_list: 传输列表，包含需要在序列化过程中转移的JavaScript对象。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[in] clone_list: 克隆列表，包含需要在序列化过程中克隆的JavaScript对象。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[out] result: 用于接收序列化结果的指针。在调用完成后，指向实际结果的指针会存储在此位置。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果API成功，则返回napi_ok。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_deserialize",
      children: "napi_deserialize"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "napi_status napi_deserialize(napi_env env, void* buffer, napi_value* object)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将native数据转为ArkTS对象。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[in] env: Node-API的环境对象，表示当前的执行环境。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[in] buffer: 指向包含二进制数据的指针。这些二进制数据需要被反序列化为JavaScript对象。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[out] object: 用于接收反序列化后的JavaScript对象。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果API成功，则返回napi_ok。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_delete_serialization_data",
      children: "napi_delete_serialization_data"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "napi_status napi_delete_serialization_data(napi_env env, void* buffer)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "删除序列化数据。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[in] env: Node-API的环境对象，表示当前的执行环境。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[in] buffer: 指向包含序列化数据的内存缓冲区的指针。这些数据在序列化完成后不再需要，并且可以通过调用此函数来释放相应的内存。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果API成功，则返回napi_ok。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_call_threadsafe_function_with_priority",
      children: "napi_call_threadsafe_function_with_priority"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "napi_status napi_call_threadsafe_function_with_priority(napi_threadsafe_function func,\n                                                        void *data,\n                                                        napi_task_priority priority,\n                                                        bool isTail)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将指定优先级和入队方式的任务投递到ArkTS主线程。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[in] func: 线程安全函数对象，在创建线程安全函数时返回。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[in] data: 传递给 JavaScript 回调函数的参数数据。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[in] priority: 指定调用 JavaScript 回调函数的任务优先级。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[in] isTail: 一个布尔值，指示调用是否应该排队等待在事件循环的尾部执行。如果为 true，则调用将在事件循环的尾部执行；如果为 false，则调用将立即执行，不会排队等待。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果API成功，则返回napi_ok。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_is_sendable",
      children: "napi_is_sendable"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "napi_status napi_is_sendable(napi_env env, napi_value value, bool* result)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "判断给定JS value是否是Sendable的。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[in] env: Node-API的环境对象，表示当前的执行环境。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[in] value: 一个napi_value类型的参数，是需要判断的值。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[out] result: 一个bool类型的指针，用于存储判断结果。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果API成功，则返回napi_ok。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_define_sendable_class",
      children: "napi_define_sendable_class"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "napi_status napi_define_sendable_class(napi_env env,\n                                       const char* utf8name,\n                                       size_t length,\n                                       napi_callback constructor,\n                                       void* data,\n                                       size_t property_count,\n                                       const napi_property_descriptor* properties,\n                                       napi_value parent,\n                                       napi_value* result)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建一个Sendable类。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[in] env: Node-API的环境对象，表示当前的执行环境。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[in] utf8name：一个const char*类型的参数，表示类的名称。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[in] length：一个size_t类型的参数，表示类名称的字节数。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[in] constructor：一个napi_callback类型的参数，表示类的构造函数。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[in] data：[可选]一个void*类型的参数，表示构造函数的附加数据。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[in] property_count：一个size_t类型的参数，表示类的属性数量。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[in] properties：[可选]一个const napi_property_descriptor*类型的参数，表示类的属性描述符数组。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[in] parent：[可选]一个napi_value类型的参数，表示父类。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[out] result：一个napi_value类型的指针，用于存储创建的对象。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果API成功，则返回napi_ok。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_create_sendable_object_with_properties",
      children: "napi_create_sendable_object_with_properties"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "napi_status napi_create_sendable_object_with_properties(napi_env env,\n                                                        size_t property_count,\n                                                        const napi_property_descriptor* properties,\n                                                        napi_value* result)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用给定的napi_property_descriptor创建一个Sendable对象。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[in] env: Node-API的环境对象，表示当前的执行环境。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[in] property_count：一个size_t类型的参数，表示属性数量。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[in] properties：一个const napi_property_descriptor*类型的参数，表示属性描述符数组。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[out] result：一个napi_value类型的指针，用于存储创建的对象。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果API成功，则返回napi_ok。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_create_sendable_array",
      children: "napi_create_sendable_array"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "napi_status napi_create_sendable_array(napi_env env, napi_value* result)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建一个Sendable数组。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[in] env: Node-API的环境对象，表示当前的执行环境。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[out] result：一个napi_value类型的指针，用于存储创建的数组。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果API成功，则返回napi_ok。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_create_sendable_array_with_length",
      children: "napi_create_sendable_array_with_length"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "napi_status napi_create_sendable_array_with_length(napi_env env, size_t length, napi_value* result)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建一个指定长度的Sendable数组。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[in] env: Node-API的环境对象，表示当前的执行环境。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[in] length：一个size_t类型的参数，表示数组的长度。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[out] result：一个napi_value类型的指针，用于存储创建的数组。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果API成功，则返回napi_ok。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_create_sendable_arraybuffer",
      children: "napi_create_sendable_arraybuffer"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "napi_status napi_create_sendable_arraybuffer(napi_env env, size_t byte_length, void** data, napi_value* result)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建一个Sendable ArrayBuffer。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[in] env: Node-API的环境对象，表示当前的执行环境。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[in] byte_length：要创建的ArrayBuffer的大小。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[in] data：指向底层字节缓冲区的指针。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[out] result：一个napi_value类型的指针，用于存储创建的ArrayBuffer。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果API成功，则返回napi_ok。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_create_sendable_typedarray",
      children: "napi_create_sendable_typedarray"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "napi_status napi_create_sendable_typedarray(napi_env env,\n                                            napi_typedarray_type type,\n                                            size_t length,\n                                            napi_value arraybuffer,\n                                            size_t byte_offset,\n                                            napi_value* result);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建一个Sendable TypedArray。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[in] env: Node-API的环境对象，表示当前的执行环境。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[in] type：TypedArray 的类型。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[in] length：TypedArray 的长度。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[in] arraybuffer：一个 ArrayBuffer 实例。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[in] byte_offset：ArrayBuffer 的偏移量。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[out] result：一个napi_value类型的指针，用于存储创建的TypedArray。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果API成功，则返回napi_ok。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_wrap_sendable",
      children: "napi_wrap_sendable"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "napi_status napi_wrap_sendable(napi_env env,\n                               napi_value js_object,\n                               void* native_object,\n                               napi_finalize finalize_cb,\n                               void* finalize_hint);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "封装一个native实例到ArkTS对象中。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[in] env: Node-API的环境对象，表示当前的执行环境。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[in] js_object：ArkTS对象。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[in] native_object：将被包裹在ArkTS对象中的native实例。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[in] napi_finalize：[可选]ArkTS对象被销毁时调用的回调函数。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[in] finalize_hint：[可选]上下文提示，会传递给回调函数。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果API成功，则返回napi_ok。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_wrap_sendable_with_size",
      children: "napi_wrap_sendable_with_size"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "napi_status napi_wrap_sendable_with_size(napi_env env,\n                                         napi_value js_object,\n                                         void* native_object,\n                                         napi_finalize finalize_cb,\n                                         void* finalize_hint,\n                                         size_t native_binding_size);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "封装一个native实例到ArkTS对象中并指定大小。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[in] env: Node-API的环境对象，表示当前的执行环境。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[in] js_object：ArkTS对象。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[in] native_object：将被包裹在ArkTS对象中的native实例。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[in] napi_finalize：[可选]ArkTS对象被销毁时调用的回调函数。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[in] finalize_hint：[可选]上下文提示，会传递给回调函数。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[in] native_binding_size：[可选]绑定的native实例的大小。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果API成功，则返回napi_ok。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_unwrap_sendable",
      children: "napi_unwrap_sendable"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "napi_status napi_unwrap_sendable(napi_env env, napi_value js_object, void** result)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取ArkTS对象封装的native实例。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[in] env: Node-API的环境对象，表示当前的执行环境。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[in] js_object：ArkTS对象。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[out] result：包裹在ArkTS对象中的native实例。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果API成功，则返回napi_ok。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_remove_wrap_sendable",
      children: "napi_remove_wrap_sendable"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "napi_status napi_remove_wrap_sendable(napi_env env, napi_value js_object, void** result)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "移除并获取ArkTS对象封装的native实例，移除后回调将不再触发，需手动delete释放内存。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[in] env: Node-API的环境对象，表示当前的执行环境。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[in] js_object：ArkTS对象。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[out] result：包裹在ArkTS对象中的native实例。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果API成功，则返回napi_ok。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_wrap_enhance",
      children: "napi_wrap_enhance"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "napi_status napi_wrap_enhance(napi_env env,\n                              napi_value js_object,\n                              void* native_object,\n                              napi_finalize finalize_cb,\n                              bool async_finalizer,\n                              void* finalize_hint,\n                              size_t native_binding_size,\n                              napi_ref* result);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在ArkTS对象上绑定一个native对象实例并指定实例大小，运行时会统计传入的实例大小并将其累加，当累计大小达到GC触发阈值时，运行时会启动垃圾回收流程。开发者可以指定绑定的回调函数是否异步执行，如果是异步执行，回调函数必须保证是线程安全的。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[in] env：Node-API的环境对象，表示当前的执行环境。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[in] js_object：ArkTS对象。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[in] native_object：将被包裹在ArkTS对象中的native实例。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["[in] finalize_cb：[可选]ArkTS对象被销毁时调用的回调函数，详情请参见", (0,jsx_runtime.jsx)(_components.a, {
          href: "#napi_finalize%E5%9B%9E%E8%B0%83%E5%87%BD%E6%95%B0%E8%AF%B4%E6%98%8E",
          children: "napi_finalize回调函数说明"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[in] async_finalizer：一个布尔值，表示ArkTS对象被销毁时调用的回调函数是否异步执行。如果为true，表示异步执行，需确保线程安全；如果为false，则表示同步执行。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[in] finalize_hint：[可选]上下文提示，会传递给回调函数。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[in] native_binding_size：[可选]绑定的native实例的大小，运行时根据传入的大小将其累加，当累计大小达到GC触发阈值时，运行时会启动垃圾回收流程。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[out] result：[可选]接收ArkTS对象引用的指针。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "napi_ok：如果API成功，则返回napi_ok。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "napi_invalid_arg：参数env、js_object或native_object为空时返回。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "napi_object_expected：参数js_object不是ArkTS对象或函数时返回。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "napi_pending_exception：如果有未捕获的异常或执行过程中发生异常时返回。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_create_ark_context",
      children: "napi_create_ark_context"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "napi_status napi_create_ark_context(napi_env env, napi_env* newEnv);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建一个新的运行时上下文环境。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用该接口需要注意以下几点："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "只支持通过最初的上下文环境创建新的上下文环境，禁止通过该接口创建的上下文环境去创建新的上下文环境。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当前该接口不支持在非主线程的ArkTS线程中调用。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "调用该接口前，调用者需要保证当前上下文环境不存在异常，否则会导致该接口调用失败。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "该接口创建的上下文环境暂时只支持加载部分ArkUI的native so文件，对于加载应用自带的native so和加载公共基础库的native so暂时不支持。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "多上下文运行时环境不支持sendable特性。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "通过napi_create_ark_context接口创建的运行时上下文环境暂时不支持console、timer等模块能力。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[in] env：Node-API的环境对象，表示当前的执行环境。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[out] newEnv：新创建的运行时上下文环境。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果API成功，则返回napi_ok。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_switch_ark_context",
      children: "napi_switch_ark_context"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "napi_status napi_switch_ark_context(napi_env env)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "切换到指定的运行时上下文环境。使用该接口需要注意以下几点："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当前该接口不支持在非主线程的ArkTS线程中调用。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "调用该接口前，调用者需要保证当前上下文环境不存在异常，否则会导致该接口调用失败。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[in] env：指定的运行时上下文环境。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果API成功，则返回napi_ok。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_destroy_ark_context",
      children: "napi_destroy_ark_context"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "napi_status napi_destroy_ark_context(napi_env env)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "销毁通过接口napi_create_ark_context创建的一个上下文环境。使用该接口需要注意以下几点："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当前该接口不支持在非主线程的ArkTS线程中调用。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "该接口只能销毁通过napi_create_ark_context接口创建的运行时上下文环境。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "不能通过该接口去销毁正在运行的上下文环境。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[in] env：要销毁的运行时上下文环境。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果API成功，则返回napi_ok。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_open_critical_scope",
      children: "napi_open_critical_scope"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "napi_status napi_open_critical_scope(napi_env env, napi_critical_scope* scope);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "打开临界区作用域。使用该接口需要注意以下几点："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "不能重复打开临界区作用域，必须在关闭当前作用域后才能再次打开。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在临界区作用域内，不能调用非临界区接口。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[in] env：Node-API的环境对象，表示当前的执行环境。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[out] scope：一个napi_critical_scope的指针，用于表示打开的临界区作用域。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果API成功，则返回napi_ok。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_close_critical_scope",
      children: "napi_close_critical_scope"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "napi_status napi_close_critical_scope(napi_env env, napi_critical_scope scope);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "关闭临界区作用域。使用该接口需要注意以下几点："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "不能重复关闭临界区作用域，必须确保作用域已经打开且未被关闭。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "关闭临界区作用域后，请勿使用临界接口及其返回结果，否则可能导致程序崩溃或数据损坏。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[in] env：Node-API的环境对象，表示当前的执行环境。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[in] scope：表示需要被关闭的临界区作用域。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果API成功，则返回napi_ok。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_get_buffer_string_utf16_in_critical_scope",
      children: "napi_get_buffer_string_utf16_in_critical_scope"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "napi_status napi_get_buffer_string_utf16_in_critical_scope(napi_env env,\n                                                           napi_value value,\n                                                           const char16_t** buffer,\n                                                           size_t* length);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取ArkTS String的UTF-16编码内存缓冲区数据。使用该接口需要注意以下几点："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当ArkTS String以UTF-16编码存储时，napi_get_buffer_string_utf16_in_critical_scope才能正确获取其内存缓冲区，否则该函数返回错误。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[in] env：Node-API的环境对象，表示当前的执行环境。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[in] value：ArkTS String对象。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[out] buffer：接收UTF-16编码内存缓冲区数据的指针。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[out] length：接收字符串长度的指针。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果API成功，则返回napi_ok。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_create_strong_reference",
      children: "napi_create_strong_reference"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "napi_status napi_create_strong_reference(napi_env env, napi_value value, napi_strong_ref* result);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建指向ArkTS对象的强引用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[in] env：Node-API的环境对象，表示当前的执行环境。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[in] value：ArkTS对象。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[out] result：接收强引用的指针。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果API成功，则返回napi_ok。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_delete_strong_reference",
      children: "napi_delete_strong_reference"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "napi_status napi_delete_strong_reference(napi_env env, napi_value value, napi_strong_ref ref);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "删除强引用。使用该接口需要注意以下几点："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "不能重复删除同一个强引用。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[in] env：Node-API的环境对象，表示当前的执行环境。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[in] value：ArkTS对象。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[in] ref：要删除的强引用。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果API成功，则返回napi_ok。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_get_strong_reference_value",
      children: "napi_get_strong_reference_value"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "napi_status napi_get_strong_reference_value(napi_env env, napi_strong_ref ref, napi_value* result)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据强引用获取其关联的ArkTS对象值。使用该接口需要注意以下几点："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "不能使用已删除的强引用去获取ArkTS对象值，否则可能预期外的错误。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[in] env：Node-API的环境对象，表示当前的执行环境。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[in] ref：强引用。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[out] result：接收ArkTS对象值的指针。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果API成功，则返回napi_ok。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_finalize回调函数说明",
      children: "napi_finalize回调函数说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void (*napi_finalize)(napi_env env,\n                              void* finalize_data,\n                              void* finalize_hint);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于定义在Node-API对象生命周期结束时触发的回调函数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[in] env：Node-API的环境对象，表示当前的执行环境。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[in] finalize_data：指向需要清理的用户数据的指针。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[in] finalize_hint：上下文提示，用于辅助清理过程。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "void：此回调函数无返回值。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_finalize_callback回调函数说明",
      children: "napi_finalize_callback回调函数说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void (*napi_finalize_callback)(void* finalize_data,\n                                       void* finalize_hint);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于定义通过接口napi_create_external_string_utf16和napi_create_external_string_ascii创建出的ArkTS string对象生命周期结束时触发的回调函数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[in] finalize_data：指向需要清理的用户数据的指针。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[in] finalize_hint：上下文提示，用于辅助清理过程。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "void：此回调函数无返回值。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_create_external_string_utf16",
      children: "napi_create_external_string_utf16"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "napi_status napi_create_external_string_utf16(napi_env env,\n                                              const char16_t* str,\n                                              size_t length,\n                                              napi_finalize_callback finalize_callback,\n                                              void* finalize_hint,\n                                              napi_value* result);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过UTF-16编码的外部字符串数据创建ArkTS字符串。使用该接口需要注意以下几点："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "传入的字符串数据必须是UTF-16编码格式，否则可能导致字符串内容异常。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "传入的字符串数据在ArkTS字符串对象生命周期内必须保持有效，否则可能导致不可预期的行为。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果提供了finalize_callback回调函数，当ArkTS字符串对象被销毁时，该回调函数将被调用。finalize_hint参数可以用于传递上下文信息给回调函数。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果传入的length参数为NAPI_AUTO_LENGTH，接口内部自动查找到'\\0'处计算字符串实际长度。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[in] env：Node-API的环境对象，表示当前的执行环境。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[in] str：指向外部字符串的指针。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[in] length：字符串长度。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["[in] finalize_callback：[可选]字符串对象被销毁时调用的回调函数，详情请参见", (0,jsx_runtime.jsx)(_components.a, {
          href: "#napi_finalize_callback%E5%9B%9E%E8%B0%83%E5%87%BD%E6%95%B0%E8%AF%B4%E6%98%8E",
          children: "napi_finalize_callback回调函数说明"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[in] finalize_hint：[可选]上下文提示，会传递给回调函数。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[out] result：接收ArkTS字符串对象引用的指针。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果API成功，则返回napi_ok。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_create_external_string_ascii",
      children: "napi_create_external_string_ascii"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "napi_status napi_create_external_string_ascii(napi_env env,\n                                              const char* str,\n                                              size_t length,\n                                              napi_finalize_callback finalize_callback,\n                                              void* finalize_hint,\n                                              napi_value* result);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过ASCII编码的外部字符串数据创建ArkTS字符串。使用该接口需要注意以下几点："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "传入的字符串数据必须是ASCII编码格式，否则可能导致字符串内容异常。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "传入的字符串数据在ArkTS字符串对象生命周期内必须保持有效，否则可能导致不可预期的行为。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果提供了finalize_callback回调函数，当ArkTS字符串对象被销毁时，该回调函数将被调用。finalize_hint参数可以用于传递上下文信息给回调函数。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果传入的length参数为NAPI_AUTO_LENGTH，接口内部自动查找到'\\0'处计算字符串实际长度。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "传入的字符串在指定的length长度范围内不得包含'\\0'字符，否则可能导致异常行为。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[in] env：Node-API的环境对象，表示当前的执行环境。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[in] str：指向外部字符串的指针。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[in] length：字符串长度。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["[in] finalize_callback：[可选]字符串对象被销毁时调用的回调函数，详情请参见", (0,jsx_runtime.jsx)(_components.a, {
          href: "#napi_finalize_callback%E5%9B%9E%E8%B0%83%E5%87%BD%E6%95%B0%E8%AF%B4%E6%98%8E",
          children: "napi_finalize_callback回调函数说明"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[in] finalize_hint：[可选]上下文提示，会传递给回调函数。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[out] result：接收ArkTS字符串对象引用的指针。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果API成功，则返回napi_ok。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_create_strong_sendable_reference",
      children: "napi_create_strong_sendable_reference"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "napi_status napi_create_strong_sendable_reference(napi_env env,\n                                                  napi_value value,\n                                                  napi_sendable_ref* result);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建指向Sendable ArkTS对象的Sendable强引用。使用该接口需要注意以下几点："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["只能为", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/sendable-object/arkts-sendable#sendable%E6%94%AF%E6%8C%81%E7%9A%84%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B",
          children: "Sendable对象"
        }), "创建napi_sendable_ref。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "napi_sendable_ref可跨ArkTS线程使用，在多线程操作时，调用者需自己保证释放时机，防止出现释放后使用的问题。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "同一进程内，同时存活的napi_sendable_ref最大数量为51200个。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用者需要保证传入的env参数是当前调用接口的ArkTS线程环境对象，避免将其他ArkTS线程的env作为参数传入导致出现", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-stability-ark-runtime-detection#section19357830121120",
          children: "多线程安全问题"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[in] env：Node-API的环境对象，表示当前的执行环境。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[in] value：被引用的Sendable ArkTS对象。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[out] result：创建出的Sendable强引用。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果API成功，则返回napi_ok。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_delete_strong_sendable_reference",
      children: "napi_delete_strong_sendable_reference"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "napi_status napi_delete_strong_sendable_reference(napi_env env, napi_sendable_ref ref);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "删除Sendable强引用。使用该接口需要注意以下几点："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "不可将napi_ref、napi_strong_ref等其他引用强转成napi_sendable_ref作为本接口入参。napi_delete_strong_sendable_reference接口仅允许接收由napi_create_strong_sendable_reference创建的napi_sendable_ref。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用者需要保证传入的env参数是当前调用接口的ArkTS线程环境对象，避免将其他ArkTS线程的env作为参数传入导致出现", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-stability-ark-runtime-detection#section19357830121120",
          children: "多线程安全问题"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[in] env：Node-API的环境对象，表示当前的执行环境。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[in] ref：被删除的引用。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果API成功，则返回napi_ok。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_get_strong_sendable_reference_value",
      children: "napi_get_strong_sendable_reference_value"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "napi_status napi_get_strong_sendable_reference_value(napi_env env,\n                                                     napi_sendable_ref ref,\n                                                     napi_value* result);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据Sendable强引用获取其关联的ArkTS对象值。使用该接口需要注意以下几点："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "不可将napi_ref、napi_strong_ref等其他引用强转成napi_sendable_ref作为本接口入参。napi_get_strong_sendable_reference_value接口仅允许接收由napi_create_strong_sendable_reference创建的napi_sendable_ref。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用者需要保证传入的env参数是当前调用接口的ArkTS线程环境对象，避免将其他ArkTS线程的env作为参数传入导致出现", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-stability-ark-runtime-detection#section19357830121120",
          children: "多线程安全问题"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[in] env：Node-API的环境对象，表示当前的执行环境。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[in] ref：Sendable强引用。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[out] result：从入参ref中获取的Sendable ArkTS对象。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果API成功，则返回napi_ok。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_throw_business_error",
      children: "napi_throw_business_error"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "napi_status napi_throw_business_error(napi_env env,\n                                      int32_t errorCode,\n                                      const char* msg);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "抛出一个带文本信息的ArkTS Error, 指定错误码为int32_t类型，错误信息为字符串类型。使用该接口需要注意以下几点："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "入参env和msg不可以为nullptr，否则会返回napi_invalid_arg。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当前上下文中存在ArkTS Error的时候，调用接口会返回napi_pending_exception。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[in] env：Node-API的环境对象，表示当前的执行环境。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[in] errorCode：int32_t类型的错误码，用于设置在错误对象上。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[in] msg：表示要与错误关联的文本的C字符串。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果API成功，则返回napi_ok。"
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