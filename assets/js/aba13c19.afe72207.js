"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["628693"], {
593329(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_coding_using_napi_interaction_with_cpp_napi_status_introduction_napi_status_introduction_md_aba_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-coding-using-napi-interaction-with-cpp-napi-status-introduction-napi-status-introduction-md-aba.json
var site_docs_coding_using_napi_interaction_with_cpp_napi_status_introduction_napi_status_introduction_md_aba_namespaceObject = JSON.parse('{"id":"coding/using-napi-interaction-with-cpp/napi_status_introduction/napi_status_introduction","title":"Node-API接口返回状态码介绍","description":"概述","source":"@site/docs/coding/using-napi-interaction-with-cpp/napi_status_introduction/napi_status_introduction.md","sourceDirName":"coding/using-napi-interaction-with-cpp/napi_status_introduction","slug":"/coding/using-napi-interaction-with-cpp/napi_status_introduction/","permalink":"/harmonyos-docs-site/coding/using-napi-interaction-with-cpp/napi_status_introduction/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"Node-API接口返回状态码介绍","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/napi_status_introduction","kit":"ndk","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Node-API简介","permalink":"/harmonyos-docs-site/coding/using-napi-interaction-with-cpp/napi-introduction/"},"next":{"title":"Node-API支持的数据类型和接口","permalink":"/harmonyos-docs-site/coding/using-napi-interaction-with-cpp/napi-data-types-interfaces/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/coding/using-napi-interaction-with-cpp/napi_status_introduction/napi_status_introduction.md


const frontMatter = {
	title: 'Node-API接口返回状态码介绍',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/napi_status_introduction',
	kit: 'ndk',
	last_updated: '2026-04-22'
};
const contentTitle = 'Node-API接口返回状态码介绍';

const assets = {

};



const toc = [{
  "value": "概述",
  "id": "概述",
  "level": 2
}, {
  "value": "各Node-API接口返回的非napi_ok状态码介绍",
  "id": "各node-api接口返回的非napi_ok状态码介绍",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    h2: "h2",
    header: "header",
    p: "p",
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
        id: "node-api接口返回状态码介绍",
        children: "Node-API接口返回状态码介绍"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "绝大部分Node-API接口在执行结束后，会返回一个数据类型为napi_status的状态码枚举，表示操作成功与否的相关信息。本文将重点介绍Node-API接口返回的非napi_ok的状态码详情与修复建议。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "各node-api接口返回的非napi_ok状态码介绍",
      children: "各Node-API接口返回的非napi_ok状态码介绍"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "接口功能"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可能返回的非napi_ok状态码"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "原因"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "修复建议"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_module_register"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi native模块注册接口。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不涉及"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不涉及"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不涉及"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_last_error_info"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取napi_extended_error_info结构体，其中包含最近一次出现的error信息。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_last_error_info"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取napi_extended_error_info结构体，其中包含最近一次出现的error信息。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参result为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_throw"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "抛出一个ArkTS Error。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_throw"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "抛出一个ArkTS Error。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参error为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_throw"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "抛出一个ArkTS Error。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参error不为ArkTS Error类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_throw_error"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "抛出一个带文本信息的ArkTS Error。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_throw_error"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "抛出一个带文本信息的ArkTS Error。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参msg为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_throw_business_error"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "抛出一个带文本信息且错误对象的code属性类型为number类型的ArkTS Error对象。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_throw_business_error"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "抛出一个带文本信息且错误对象的code属性类型为number类型的ArkTS Error对象。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参msg为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_throw_business_error"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "抛出一个带文本信息且错误对象的code属性类型为number类型的ArkTS Error对象。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_pending_exception"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "调用该接口前或调用过程中出现未捕获的ArkTS Error"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据异常信息（hilog/crash栈）处理异常"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_throw_type_error"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "抛出一个带文本信息的ArkTS TypeError。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_throw_type_error"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "抛出一个带文本信息的ArkTS TypeError。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参msg为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_throw_range_error"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "抛出一个带文本信息的ArkTS RangeError。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_throw_range_error"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "抛出一个带文本信息的ArkTS RangeError。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参msg为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_is_error"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断napi_value是否表示为一个error对象。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_is_error"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断napi_value是否表示为一个error对象。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参value为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_is_error"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断napi_value是否表示为一个error对象。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参result为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_error"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建并获取一个带文本信息的ArkTS Error。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_error"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建并获取一个带文本信息的ArkTS Error。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参msg为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_error"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建并获取一个带文本信息的ArkTS Error。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参result为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_error"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建并获取一个带文本信息的ArkTS Error。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参code不为nullptr，但不为ArkTS String或ArkTS Number类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_error"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建并获取一个带文本信息的ArkTS Error。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参msg不为nullptr，但不为ArkTS String类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_type_error"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建并获取一个带文本信息的ArkTS TypeError。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_type_error"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建并获取一个带文本信息的ArkTS TypeError。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参msg为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_type_error"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建并获取一个带文本信息的ArkTS TypeError。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参result为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_type_error"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建并获取一个带文本信息的ArkTS TypeError。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参code不为nullptr，但不为ArkTS String或ArkTS Number类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_type_error"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建并获取一个带文本信息的ArkTS TypeError。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参msg不为nullptr，但不为ArkTS String类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_range_error"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建并获取一个带文本信息的ArkTS RangeError。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_range_error"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建并获取一个带文本信息的ArkTS RangeError。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参msg为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_range_error"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建并获取一个带文本信息的ArkTS RangeError。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参result为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_range_error"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建并获取一个带文本信息的ArkTS RangeError。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参code不为nullptr，但不为ArkTS String或ArkTS Number类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_range_error"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建并获取一个带文本信息的ArkTS RangeError。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参msg不为nullptr，但不为ArkTS String类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_and_clear_last_exception"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取并清除最近一次出现的异常。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_and_clear_last_exception"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取并清除最近一次出现的异常。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参result为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_is_exception_pending"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断是否出现了异常。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_is_exception_pending"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断是否出现了异常。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参result为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_fatal_error"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "引发致命错误以立即终止进程。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不涉及"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不涉及"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不涉及"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_open_handle_scope"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个上下文环境使用。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_open_handle_scope"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个上下文环境使用。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参result为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_close_handle_scope"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "关闭传入的上下文环境，关闭后，全部在其中声明的引用都将被关闭。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_close_handle_scope"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "关闭传入的上下文环境，关闭后，全部在其中声明的引用都将被关闭。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参scope为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_close_handle_scope"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "关闭传入的上下文环境，关闭后，全部在其中声明的引用都将被关闭。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_handle_scope_mismatch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_open_handle_scope调用次数小于napi_close_handle_scope"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_open_handle_scope和napi_close_handle_scope需要成对使用"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_open_escapable_handle_scope"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建出一个可逃逸的handle scope，可将范围内声明的值返回到父作用域。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_open_escapable_handle_scope"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建出一个可逃逸的handle scope，可将范围内声明的值返回到父作用域。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参result为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_close_escapable_handle_scope"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "关闭传入的可逃逸的handle scope。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_close_escapable_handle_scope"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "关闭传入的可逃逸的handle scope。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参scope为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_close_escapable_handle_scope"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "关闭传入的可逃逸的handle scope。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_handle_scope_mismatch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_open_escapable_handle_scope调用次数小于napi_close_escapable_handle_scope"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_open_escapable_handle_scope和napi_close_escapable_handle_scope需要成对使用"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_escape_handle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "提升传入的ArkTS object的生命周期到其父作用域。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_escape_handle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "提升传入的ArkTS object的生命周期到其父作用域。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参scope为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_escape_handle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "提升传入的ArkTS object的生命周期到其父作用域。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参escapee为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_escape_handle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "提升传入的ArkTS object的生命周期到其父作用域。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参result为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_escape_handle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "提升传入的ArkTS object的生命周期到其父作用域。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_escape_called_twice"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该scope已经调用过napi_escape_handle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请勿重复调用napi_escape_handle"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_reference"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为Object创建一个reference，以延长其生命周期。调用者需要自己管理reference生命周期。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_reference"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为Object创建一个reference，以延长其生命周期。调用者需要自己管理reference生命周期。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参value为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_reference"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为Object创建一个reference，以延长其生命周期。调用者需要自己管理reference生命周期。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参result为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_delete_reference"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "删除传入的reference。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_delete_reference"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "删除传入的reference。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参ref为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_reference_ref"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "增加传入的reference的引用计数，并获取该计数。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_reference_ref"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "增加传入的reference的引用计数，并获取该计数。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参ref为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_reference_unref"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "减少传入的reference的引用计数，并获取该计数。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_reference_unref"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "减少传入的reference的引用计数，并获取该计数。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参ref为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_reference_value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取与reference相关联的ArkTS Object。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_reference_value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取与reference相关联的ArkTS Object。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参ref为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_reference_value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取与reference相关联的ArkTS Object。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参result为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_array"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建并获取一个ArkTS Array。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_array"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建并获取一个ArkTS Array。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参result为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_array_with_length"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建并获取一个指定长度的ArkTS Array。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_array_with_length"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建并获取一个指定长度的ArkTS Array。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参result为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_arraybuffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建并获取一个指定大小的ArkTS ArrayBuffer。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_arraybuffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建并获取一个指定大小的ArkTS ArrayBuffer。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参data为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_arraybuffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建并获取一个指定大小的ArkTS ArrayBuffer。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参result为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_arraybuffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建并获取一个指定大小的ArkTS ArrayBuffer。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_pending_exception"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "调用该接口前或调用过程中出现未捕获的ArkTS异常"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据异常信息（hilog/crash栈）处理异常"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_external"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "分配一个附加有外部数据的ArkTS value。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_external"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "分配一个附加有外部数据的ArkTS value。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参result为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_external"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "分配一个附加有外部数据的ArkTS value。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_pending_exception"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "调用接口前有未捕获的ArkTS异常"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据异常信息（hilog/crash栈）处理异常"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_external_arraybuffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "分配一个附加有外部数据的ArkTS ArrayBuffer。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_external_arraybuffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "分配一个附加有外部数据的ArkTS ArrayBuffer。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参external_data为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_external_arraybuffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "分配一个附加有外部数据的ArkTS ArrayBuffer。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参finalize_cb为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_external_arraybuffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "分配一个附加有外部数据的ArkTS ArrayBuffer。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参result为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_external_arraybuffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "分配一个附加有外部数据的ArkTS ArrayBuffer。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_pending_exception"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "调用接口前有未捕获的ArkTS异常"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据异常信息（hilog/crash栈）处理异常"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个默认的ArkTS Object。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个默认的ArkTS Object。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参result为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_symbol"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个ArkTS Symbol。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_symbol"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个ArkTS Symbol。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参result为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_symbol"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个ArkTS Symbol。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参description不为nullptr，且不是ArkTS String类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_typedarray"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过现有的ArrayBuffer创建一个ArkTS TypeArray。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_typedarray"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过现有的ArrayBuffer创建一个ArkTS TypeArray。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参arraybuffer为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_typedarray"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过现有的ArrayBuffer创建一个ArkTS TypeArray。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参result为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_typedarray"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过现有的ArrayBuffer创建一个ArkTS TypeArray。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参type不为napi_typedarray_type类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_typedarray"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过现有的ArrayBuffer创建一个ArkTS TypeArray。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_arraybuffer_expected"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参arraybuffer不为ArkTS ArrayBuffer类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_typedarray"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过现有的ArrayBuffer创建一个ArkTS TypeArray。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_pending_exception"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "调用该接口前或调用过程中出现未捕获的ArkTS异常"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据异常信息（hilog/crash栈）处理异常"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_dataview"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过现有的ArrayBuffer创建一个ArkTS DataView。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_dataview"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过现有的ArrayBuffer创建一个ArkTS DataView。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参arraybuffer为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_dataview"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过现有的ArrayBuffer创建一个ArkTS DataView。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参result为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_dataview"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过现有的ArrayBuffer创建一个ArkTS DataView。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_arraybuffer_expected"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参arraybuffer不为ArkTS ArrayBuffer类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_dataview"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过现有的ArrayBuffer创建一个ArkTS DataView。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_pending_exception"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参length与入参byte_offset相加超过入参arraybuffer的byte长度"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要检查访问长度"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_dataview"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过现有的ArrayBuffer创建一个ArkTS DataView。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_pending_exception"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "调用该接口前或调用过程中出现未捕获的ArkTS异常"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据异常信息（hilog/crash栈）处理异常"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_int32"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过一个C的int32_t数据创建ArkTS Number。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_int32"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过一个C的int32_t数据创建ArkTS Number。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参result为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_uint32"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过一个C的uint32_t数据创建ArkTS Number。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_uint32"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过一个C的uint32_t数据创建ArkTS Number。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参result为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_int64"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过一个C的int64_t数据创建ArkTS Number。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_int64"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过一个C的int64_t数据创建ArkTS Number。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参result为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_double"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过一个C的double数据创建ArkTS Number。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_double"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过一个C的double数据创建ArkTS Number。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参result为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_string_latin1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过ISO-8859-1编码的C字符串数据创建ArkTS String。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_string_latin1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过ISO-8859-1编码的C字符串数据创建ArkTS String。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参str为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_string_latin1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过ISO-8859-1编码的C字符串数据创建ArkTS String。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参result为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_string_utf8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过UTF8编码的C字符串数据创建ArkTS String。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_string_utf8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过UTF8编码的C字符串数据创建ArkTS String。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参str为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_string_utf8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过UTF8编码的C字符串数据创建ArkTS String。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参result为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_string_utf16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过UTF16编码的C字符串数据创建ArkTS String。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_string_utf16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过UTF16编码的C字符串数据创建ArkTS String。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参str为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_string_utf16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过UTF16编码的C字符串数据创建ArkTS String。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参result为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_string_utf16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过UTF16编码的C字符串数据创建ArkTS String。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参length值不为NAPI_AUTO_LENGTH，但超过INT_MAX"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_array_length"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取array的length。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_array_length"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取array的length。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参value为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_array_length"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取array的length。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参result为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_array_length"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取array的length。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_array_expected"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参value既不是ArkTS Array类型，也不是SharedArray类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_array_length"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取array的length。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_pending_exception"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "调用接口前有未捕获的ArkTS异常"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据异常信息（hilog/crash栈）处理异常"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_arraybuffer_info"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取ArrayBuffer的底层data buffer及其长度。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_arraybuffer_info"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取ArrayBuffer的底层data buffer及其长度。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参arraybuffer为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_arraybuffer_info"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取ArrayBuffer的底层data buffer及其长度。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参byte_length为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_arraybuffer_info"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取ArrayBuffer的底层data buffer及其长度。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_arraybuffer_expected"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参arraybuffer既不是ArkTS ArrayBuffer类型，也不是SharedArrayBuffer类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_prototype"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定ArkTS Object的prototype。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_prototype"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定ArkTS Object的prototype。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参object为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_prototype"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定ArkTS Object的prototype。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参result为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_prototype"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定ArkTS Object的prototype。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_object_expected"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参object不为ArkTS Object类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_prototype"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定ArkTS Object的prototype。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_pending_exception"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "调用该接口前或调用过程中出现未捕获的ArkTS异常"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据异常信息（hilog/crash栈）处理异常"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_typedarray_info"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定TypedArray的各种属性。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_typedarray_info"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定TypedArray的各种属性。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参typedarray为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_typedarray_info"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定TypedArray的各种属性。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参typedarray既不是ArkTS TypedArray类型，也不是ShareTypedArray类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_dataview_info"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定DataView的各种属性。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_dataview_info"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定DataView的各种属性。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参dataview为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_dataview_info"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定DataView的各种属性。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参dataview不为ArkTS DataView类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_value_bool"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定ArkTS Boolean对应的C bool值。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_value_bool"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定ArkTS Boolean对应的C bool值。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参value为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_value_bool"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定ArkTS Boolean对应的C bool值。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参result为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_value_bool"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定ArkTS Boolean对应的C bool值。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_boolean_expected"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参value不为ArkTS Bool类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_value_double"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定ArkTS Number对应的C double值。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_value_double"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定ArkTS Number对应的C double值。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参value为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_value_double"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定ArkTS Number对应的C double值。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参result为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_value_double"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定ArkTS Number对应的C double值。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_number_expected"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参value不为ArkTS Number类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_value_external"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取先前通过napi_create_external()传递的外部数据指针。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_value_external"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取先前通过napi_create_external()传递的外部数据指针。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参value为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_value_external"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取先前通过napi_create_external()传递的外部数据指针。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参result为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_value_external"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取先前通过napi_create_external()传递的外部数据指针。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_object_expected"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参value不为external类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_value_int32"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定ArkTS Number对应的C int32值。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_value_int32"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定ArkTS Number对应的C int32值。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参value为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_value_int32"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定ArkTS Number对应的C int32值。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参result为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_value_int32"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定ArkTS Number对应的C int32值。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_number_expected"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参value不为ArkTS Number类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_value_int64"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定ArkTS Number对应的C int64值。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_value_int64"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定ArkTS Number对应的C int64值。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参value为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_value_int64"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定ArkTS Number对应的C int64值。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参result为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_value_int64"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定ArkTS Number对应的C int64值。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_number_expected"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参value不为ArkTS Number类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_value_string_latin1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定ArkTS value对应的ISO-8859-1编码的字符串。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_value_string_latin1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定ArkTS value对应的ISO-8859-1编码的字符串。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参value为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_value_string_latin1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定ArkTS value对应的ISO-8859-1编码的字符串。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参buf与result都为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_value_string_latin1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定ArkTS value对应的ISO-8859-1编码的字符串。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_string_expected"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参value不为ArkTS String类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_value_string_utf8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定ArkTS value对应的UTF8编码的字符串。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_value_string_utf8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定ArkTS value对应的UTF8编码的字符串。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参value为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_value_string_utf8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定ArkTS value对应的UTF8编码的字符串。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参buf与result都为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_value_string_utf8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定ArkTS value对应的UTF8编码的字符串。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_string_expected"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参value不为ArkTS String类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_value_string_utf16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定ArkTS value对应的UTF16编码的字符串。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_value_string_utf16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定ArkTS value对应的UTF16编码的字符串。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参value为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_value_string_utf16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定ArkTS value对应的UTF16编码的字符串。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参buf与result都为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_value_string_utf16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定ArkTS value对应的UTF16编码的字符串。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_string_expected"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参value不为ArkTS String类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_value_uint32"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定ArkTS Number对应的C uint32值。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_value_uint32"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定ArkTS Number对应的C uint32值。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参value为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_value_uint32"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定ArkTS Number对应的C uint32值。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参result为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_value_uint32"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定ArkTS Number对应的C uint32值。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_number_expected"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参value不为ArkTS Number类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据给定的C boolean值，获取ArkTS bool对象。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据给定的C boolean值，获取ArkTS bool对象。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参value为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_global"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取global对象。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_global"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取global对象。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参value为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_null"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取null对象。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_null"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取null对象。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参value为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_undefined"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取undefined对象。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_undefined"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取undefined对象。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参value为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_coerce_to_bool"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将给定的ArkTS value强转成ArkTS Boolean。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_coerce_to_bool"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将给定的ArkTS value强转成ArkTS Boolean。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参value为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_coerce_to_bool"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将给定的ArkTS value强转成ArkTS Boolean。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参result为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_coerce_to_bool"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将给定的ArkTS value强转成ArkTS Boolean。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_pending_exception"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "调用接口前有未捕获的ArkTS异常"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据异常信息（hilog/crash栈）处理异常"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_coerce_to_number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将给定的ArkTS value强转成ArkTS Number。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_coerce_to_number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将给定的ArkTS value强转成ArkTS Number。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参value为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_coerce_to_number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将给定的ArkTS value强转成ArkTS Number。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参result为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_coerce_to_object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将给定的ArkTS value强转成ArkTS Object。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_coerce_to_object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将给定的ArkTS value强转成ArkTS Object。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参value为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_coerce_to_object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将给定的ArkTS value强转成ArkTS Object。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参result为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_coerce_to_string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将给定的ArkTS value强转成ArkTS String。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_coerce_to_string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将给定的ArkTS value强转成ArkTS String。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参value为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_coerce_to_string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将给定的ArkTS value强转成ArkTS String。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参result为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_typeof"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定ArkTS value的ArkTS type。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_typeof"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定ArkTS value的ArkTS type。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参value为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_typeof"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定ArkTS value的ArkTS type。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参result为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_instanceof"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断给定object是否为给定constructor的实例。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_instanceof"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断给定object是否为给定constructor的实例。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参object为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_instanceof"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断给定object是否为给定constructor的实例。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参constructor为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_instanceof"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断给定object是否为给定constructor的实例。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参result为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_instanceof"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断给定object是否为给定constructor的实例。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_object_expected"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参object不为ArkTS Object类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_instanceof"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断给定object是否为给定constructor的实例。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_function_expected"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参constructor不为ArkTS Function类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_instanceof"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断给定object是否为给定constructor的实例。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_pending_exception"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "调用该接口前或调用过程中出现未捕获的ArkTS异常"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据异常信息（hilog/crash栈）处理异常"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_is_array"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断给定ArkTS value是否为array。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_is_array"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断给定ArkTS value是否为array。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参value为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_is_array"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断给定ArkTS value是否为array。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参result为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_is_arraybuffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断给定ArkTS value是否为ArrayBuffer。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_is_arraybuffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断给定ArkTS value是否为ArrayBuffer。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参value为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_is_arraybuffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断给定ArkTS value是否为ArrayBuffer。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参result为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_is_typedarray"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断给定ArkTS value是否表示一个TypedArray。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_is_typedarray"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断给定ArkTS value是否表示一个TypedArray。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参value为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_is_typedarray"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断给定ArkTS value是否表示一个TypedArray。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参result为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_is_dataview"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断给定ArkTS value是否表示一个DataView。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_is_dataview"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断给定ArkTS value是否表示一个DataView。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参value为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_is_dataview"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断给定ArkTS value是否表示一个DataView。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参result为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_is_date"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断给定ArkTS value是否为ArkTS Date对象。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_is_date"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断给定ArkTS value是否为ArkTS Date对象。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参value为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_is_date"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断给定ArkTS value是否为ArkTS Date对象。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参result为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_strict_equals"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断给定的两个ArkTS value是否严格相等。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_strict_equals"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断给定的两个ArkTS value是否严格相等。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参lhs为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_strict_equals"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断给定的两个ArkTS value是否严格相等。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参rhs为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_strict_equals"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断给定的两个ArkTS value是否严格相等。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参result为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_property_names"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "以字符串数组的形式获取对象的可枚举属性的名称。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_property_names"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "以字符串数组的形式获取对象的可枚举属性的名称。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参object为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_property_names"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "以字符串数组的形式获取对象的可枚举属性的名称。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参result为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_property_names"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "以字符串数组的形式获取对象的可枚举属性的名称。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_object_expected"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参object不为ArkTS Object类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_set_property"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对给定Object设置属性。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_set_property"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对给定Object设置属性。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参object为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_set_property"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对给定Object设置属性。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参key为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_set_property"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对给定Object设置属性。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参result为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_set_property"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对给定Object设置属性。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_object_expected"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参object不为ArkTS Object类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_set_property"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对给定Object设置属性。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_pending_exception"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "调用该接口前或调用过程中出现未捕获的ArkTS异常"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据异常信息（hilog/crash栈）处理异常"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_property"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定Object的给定属性。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_property"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定Object的给定属性。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参object为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_property"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定Object的给定属性。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参key为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_property"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定Object的给定属性。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参result为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_property"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定Object的给定属性。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_object_expected"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参object不为ArkTS Object类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_property"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定Object的给定属性。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_pending_exception"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "调用该接口前或调用过程中出现未捕获的ArkTS异常"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据异常信息（hilog/crash栈）处理异常"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_has_property"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断给定对象中是否存在给定属性。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_has_property"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断给定对象中是否存在给定属性。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参object为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_has_property"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断给定对象中是否存在给定属性。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参key为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_has_property"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断给定对象中是否存在给定属性。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参result为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_has_property"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断给定对象中是否存在给定属性。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_object_expected"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参object不为ArkTS Object类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_has_property"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断给定对象中是否存在给定属性。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_pending_exception"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "调用该接口前或调用过程中出现未捕获的ArkTS异常"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据异常信息（hilog/crash栈）处理异常"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_delete_property"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "尝试从给定Object中删除给定key属性。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_delete_property"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "尝试从给定Object中删除给定key属性。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参object为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_delete_property"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "尝试从给定Object中删除给定key属性。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参key为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_delete_property"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "尝试从给定Object中删除给定key属性。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_object_expected"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参object不为ArkTS Object类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_delete_property"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "尝试从给定Object中删除给定key属性。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_pending_exception"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "调用该接口前或调用过程中出现未捕获的ArkTS异常"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据异常信息（hilog/crash栈）处理异常"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_has_own_property"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断给定Object中是否有名为key的own property。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_has_own_property"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断给定Object中是否有名为key的own property。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参object为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_has_own_property"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断给定Object中是否有名为key的own property。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参key为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_has_own_property"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断给定Object中是否有名为key的own property。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参result为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_has_own_property"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断给定Object中是否有名为key的own property。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_object_expected"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参object不为ArkTS Object类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_has_own_property"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断给定Object中是否有名为key的own property。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_pending_exception"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "调用该接口前或调用过程中出现未捕获的ArkTS异常"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据异常信息（hilog/crash栈）处理异常"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_set_named_property"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对给定Object设置一个给定名称的属性。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_set_named_property"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对给定Object设置一个给定名称的属性。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参object为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_set_named_property"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对给定Object设置一个给定名称的属性。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参utf8name为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_set_named_property"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对给定Object设置一个给定名称的属性。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参result为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_set_named_property"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对给定Object设置一个给定名称的属性。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_object_expected"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参object不为ArkTS Object类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_set_named_property"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对给定Object设置一个给定名称的属性。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_pending_exception"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "调用该接口前或调用过程中出现未捕获的ArkTS异常"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据异常信息（hilog/crash栈）处理异常"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_named_property"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定Object中指定名称的属性。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_named_property"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定Object中指定名称的属性。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参object为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_named_property"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定Object中指定名称的属性。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参utf8name为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_named_property"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定Object中指定名称的属性。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参result为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_named_property"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定Object中指定名称的属性。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_object_expected"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参object不为ArkTS Object类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_named_property"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定Object中指定名称的属性。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_pending_exception"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "调用该接口前或调用过程中出现未捕获的ArkTS异常"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据异常信息（hilog/crash栈）处理异常"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_has_named_property"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断给定Object中是否有给定名称的属性。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_has_named_property"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断给定Object中是否有给定名称的属性。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参object为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_has_named_property"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断给定Object中是否有给定名称的属性。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参utf8name为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_has_named_property"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断给定Object中是否有给定名称的属性。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参result为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_has_named_property"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断给定Object中是否有给定名称的属性。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_object_expected"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参object不为ArkTS Object类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_has_named_property"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断给定Object中是否有给定名称的属性。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_pending_exception"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "调用该接口前或调用过程中出现未捕获的ArkTS异常"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据异常信息（hilog/crash栈）处理异常"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_set_element"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在给定Object的指定索引处，设置元素。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_set_element"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在给定Object的指定索引处，设置元素。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参object为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_set_element"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在给定Object的指定索引处，设置元素。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参value为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_set_element"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在给定Object的指定索引处，设置元素。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_object_expected"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参object不为ArkTS Object类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_set_element"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在给定Object的指定索引处，设置元素。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_pending_exception"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "调用该接口前或调用过程中出现未捕获的ArkTS异常"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据异常信息（hilog/crash栈）处理异常"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_element"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定Object指定索引处的元素。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_element"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定Object指定索引处的元素。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参object为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_element"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定Object指定索引处的元素。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参result为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_element"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定Object指定索引处的元素。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_object_expected"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参object不为ArkTS Object类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_element"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定Object指定索引处的元素。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_pending_exception"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "调用该接口前或调用过程中出现未捕获的ArkTS异常"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据异常信息（hilog/crash栈）处理异常"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_has_element"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "若给定Object的指定索引处拥有属性，获取该元素。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_has_element"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "若给定Object的指定索引处拥有属性，获取该元素。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参object为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_has_element"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "若给定Object的指定索引处拥有属性，获取该元素。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参result为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_has_element"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "若给定Object的指定索引处拥有属性，获取该元素。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_object_expected"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参object不为ArkTS Object类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_has_element"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "若给定Object的指定索引处拥有属性，获取该元素。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_pending_exception"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "调用该接口前或调用过程中出现未捕获的ArkTS异常"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据异常信息（hilog/crash栈）处理异常"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_delete_element"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "尝试删除给定Object的指定索引处的元素。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_delete_element"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "尝试删除给定Object的指定索引处的元素。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参object为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_delete_element"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "尝试删除给定Object的指定索引处的元素。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_object_expected"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参object不为ArkTS Object类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_delete_element"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "尝试删除给定Object的指定索引处的元素。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_pending_exception"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "调用该接口前或调用过程中出现未捕获的ArkTS异常"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据异常信息（hilog/crash栈）处理异常"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_define_properties"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "批量的向给定Object中定义属性。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_define_properties"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "批量的向给定Object中定义属性。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参object为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_define_properties"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "批量的向给定Object中定义属性。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参properties为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_define_properties"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "批量的向给定Object中定义属性。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_object_expected"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参object不为ArkTS Object类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_define_properties"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "批量的向给定Object中定义属性。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_name_expected"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参properties中的某个property没有设utf8name，且它的name既不是ArkTS String类型也不是ArkTS Symbol类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_define_properties"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "批量的向给定Object中定义属性。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_pending_exception"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "调用接口前有未捕获的ArkTS异常"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据异常信息（hilog/crash栈）处理异常"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_type_tag_object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将tag指针的值与Object关联。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_type_tag_object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将tag指针的值与Object关联。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参js_object为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_type_tag_object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将tag指针的值与Object关联。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参type_tag为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_type_tag_object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将tag指针的值与Object关联。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArkTS对象已被打过tag标记"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArkTS对象需未被打过标记"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_type_tag_object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将tag指针的值与Object关联。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "调用过程中出现未捕获的ArkTS异常"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据异常信息（hilog/crash栈）处理异常"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_type_tag_object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将tag指针的值与Object关联。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_object_expected"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参js_object不是ArkTS Object类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_type_tag_object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将tag指针的值与Object关联。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_pending_exception"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "调用接口前有未捕获的ArkTS异常"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据异常信息（hilog/crash栈）处理异常"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_check_object_type_tag"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断给定的tag指针是否被关联到了ArkTS Object上。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_check_object_type_tag"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断给定的tag指针是否被关联到了ArkTS Object上。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参js_object为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_check_object_type_tag"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断给定的tag指针是否被关联到了ArkTS Object上。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参type_tag为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_check_object_type_tag"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断给定的tag指针是否被关联到了ArkTS Object上。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参result为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_check_object_type_tag"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断给定的tag指针是否被关联到了ArkTS Object上。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_object_expected"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参js_object不是ArkTS Object类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_check_object_type_tag"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断给定的tag指针是否被关联到了ArkTS Object上。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_pending_exception"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "调用接口前有未捕获的ArkTS异常"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据异常信息（hilog/crash栈）处理异常"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_call_function"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在Native方法中调用ArkTS function，即native call ArkTS。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_call_function"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在Native方法中调用ArkTS function，即native call ArkTS。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参func为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_call_function"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在Native方法中调用ArkTS function，即native call ArkTS。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参argc大于0且argv为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_call_function"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在Native方法中调用ArkTS function，即native call ArkTS。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_function_expected"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参func不为ArkTS Function类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_call_function"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在Native方法中调用ArkTS function，即native call ArkTS。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_pending_exception"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "调用该接口前或调用过程中出现未捕获的ArkTS异常"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据异常信息（hilog/crash栈）处理异常"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_function"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建native方法给ArkTS使用，以便于ArkTS call native。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_function"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建native方法给ArkTS使用，以便于ArkTS call native。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参cb为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_function"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建native方法给ArkTS使用，以便于ArkTS call native。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参result为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_function"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建native方法给ArkTS使用，以便于ArkTS call native。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "new c++对象失败"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "内存不足，检查是否有c++内存泄漏"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_function"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建native方法给ArkTS使用，以便于ArkTS call native。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_pending_exception"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "调用该接口前或调用过程中出现未捕获的ArkTS异常"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据异常信息（hilog/crash栈）处理异常"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_cb_info"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从给定的callback info中获取有关调用的详细信息，如参数和this指针。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_cb_info"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从给定的callback info中获取有关调用的详细信息，如参数和this指针。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参cbinfo为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_new_target"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取构造函数调用的new.target。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_new_target"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取构造函数调用的new.target。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参cbinfo为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_new_target"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取构造函数调用的new.target。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参result为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_new_target"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取构造函数调用的new.target。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_pending_exception"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "调用该接口前或调用过程中出现未捕获的ArkTS异常"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据异常信息（hilog/crash栈）处理异常"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_new_instance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过给定的构造函数，构建一个实例。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_new_instance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过给定的构造函数，构建一个实例。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参constructor为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_new_instance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过给定的构造函数，构建一个实例。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参argc大于0且argv为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_new_instance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过给定的构造函数，构建一个实例。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参result为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_new_instance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过给定的构造函数，构建一个实例。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_function_expected"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参constructor不为ArkTS Function类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_new_instance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过给定的构造函数，构建一个实例。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_pending_exception"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "调用该接口前或调用过程中出现未捕获的ArkTS异常"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据异常信息（hilog/crash栈）处理异常"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_define_class"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义与C++类相对应的JavaScript类。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_define_class"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义与C++类相对应的JavaScript类。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参utf8name为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_define_class"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义与C++类相对应的JavaScript类。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参constructor为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_define_class"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义与C++类相对应的JavaScript类。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参property_count大于0且properties为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_define_class"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义与C++类相对应的JavaScript类。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参result为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_define_class"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义与C++类相对应的JavaScript类。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_object_expected"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参length值不为NAPI_AUTO_LENGTH，但超过INT_MAX"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_define_class"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义与C++类相对应的JavaScript类。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_pending_exception"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "调用该接口前或调用过程中出现未捕获的ArkTS异常"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据异常信息（hilog/crash栈）处理异常"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_wrap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在ArkTS object上绑定一个native对象实例。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_wrap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在ArkTS object上绑定一个native对象实例。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参js_object为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_wrap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在ArkTS object上绑定一个native对象实例。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参native_object为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_wrap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在ArkTS object上绑定一个native对象实例。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参finalize_cb为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_wrap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在ArkTS object上绑定一个native对象实例。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_object_expected"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参js_object不是ArkTS Object类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_wrap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在ArkTS object上绑定一个native对象实例。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_pending_exception"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "调用该接口前或调用过程中出现未捕获的ArkTS异常"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据异常信息（hilog/crash栈）处理异常"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_unwrap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从ArkTS object上获取先前绑定的native对象实例。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_unwrap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从ArkTS object上获取先前绑定的native对象实例。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参js_object为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_unwrap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从ArkTS object上获取先前绑定的native对象实例。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参result为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_unwrap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从ArkTS object上获取先前绑定的native对象实例。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_object_expected"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参js_object不是ArkTS Object类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_unwrap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从ArkTS object上获取先前绑定的native对象实例。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_pending_exception"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "调用该接口前或调用过程中出现未捕获的ArkTS异常"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据异常信息（hilog/crash栈）处理异常"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_remove_wrap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从ArkTS object上获取先前绑定的native对象实例，并解除绑定。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_remove_wrap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从ArkTS object上获取先前绑定的native对象实例，并解除绑定。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参js_object为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_remove_wrap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从ArkTS object上获取先前绑定的native对象实例，并解除绑定。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参result为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_remove_wrap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从ArkTS object上获取先前绑定的native对象实例，并解除绑定。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_object_expected"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参js_object不是ArkTS Object类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_remove_wrap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从ArkTS object上获取先前绑定的native对象实例，并解除绑定。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_pending_exception"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "调用该接口前或调用过程中出现未捕获的ArkTS异常"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据异常信息（hilog/crash栈）处理异常"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_async_work"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个异步工作对象。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_async_work"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个异步工作对象。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参async_resource_name为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_async_work"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个异步工作对象。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参execute为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_async_work"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个异步工作对象。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参complete为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_async_work"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个异步工作对象。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参result为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_delete_async_work"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "释放先前创建的异步工作对象。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_delete_async_work"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "释放先前创建的异步工作对象。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参work为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_queue_async_work"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将异步工作对象加到队列，由底层去调度执行。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_queue_async_work"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将异步工作对象加到队列，由底层去调度执行。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参work为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_cancel_async_work"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消入队的异步任务。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_cancel_async_work"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消入队的异步任务。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参work为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_async_init"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个异步资源上下文环境（不支持与async_hook相关功能）。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_async_init"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个异步资源上下文环境（不支持与async_hook相关功能）。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参async_resource_name为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_async_init"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个异步资源上下文环境（不支持与async_hook相关功能）。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参result为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_make_callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在异步资源上下文环境中回调ArkTS函数(不支持与async_hook相关功能)。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_make_callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在异步资源上下文环境中回调ArkTS函数(不支持与async_hook相关功能)。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参func为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_make_callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在异步资源上下文环境中回调ArkTS函数(不支持与async_hook相关功能)。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参recv为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_make_callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在异步资源上下文环境中回调ArkTS函数(不支持与async_hook相关功能)。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参argc大于0且argv为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_make_callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在异步资源上下文环境中回调ArkTS函数(不支持与async_hook相关功能)。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_object_expected"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参recv不为ArkTS Object类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_make_callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在异步资源上下文环境中回调ArkTS函数(不支持与async_hook相关功能)。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_function_expected"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参func不为ArkTS Function类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_make_callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在异步资源上下文环境中回调ArkTS函数(不支持与async_hook相关功能)。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_pending_exception"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "调用该接口前或调用过程中出现未捕获的ArkTS异常"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据异常信息（hilog/crash栈）处理异常"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_async_destroy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁先前创建的异步资源上下文环境（不支持与async_hook相关功能）。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_async_destroy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁先前创建的异步资源上下文环境（不支持与async_hook相关功能）。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参async_context为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_open_callback_scope"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个回调作用域（不支持与async_hook相关功能）。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_open_callback_scope"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个回调作用域（不支持与async_hook相关功能）。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参result为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_close_callback_scope"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "关闭先前创建的回调作用域（不支持与async_hook相关功能）。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_close_callback_scope"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "关闭先前创建的回调作用域（不支持与async_hook相关功能）。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参scope为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_close_callback_scope"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "关闭先前创建的回调作用域（不支持与async_hook相关功能）。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "new c++对象失败"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "内存不足，检查是否有c++内存泄漏"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_close_callback_scope"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "关闭先前创建的回调作用域（不支持与async_hook相关功能）。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_callback_scope_mismatch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_open_callback_scope调用次数小于napi_close_callback_scope"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_open_callback_scope和napi_close_callback_scope需要成对使用"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_node_version"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取node的版本信息。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不涉及"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不涉及"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不涉及"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_version"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取Node运行时支持的最高 N-API 版本。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_version"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取Node运行时支持的最高 N-API 版本。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参result为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_promise"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个延迟对象和ArkTS promise。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_promise"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个延迟对象和ArkTS promise。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参deferred为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_promise"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个延迟对象和ArkTS promise。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参promise为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_promise"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个延迟对象和ArkTS promise。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_pending_exception"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "调用接口前有未捕获的ArkTS异常"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据异常信息（hilog/crash栈）处理异常"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_resolve_deferred"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "resolve与ArkTS promise对象关联的延迟函数。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_resolve_deferred"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "resolve与ArkTS promise对象关联的延迟函数。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参deferred为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_resolve_deferred"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "resolve与ArkTS promise对象关联的延迟函数。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参resolution为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_resolve_deferred"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "resolve与ArkTS promise对象关联的延迟函数。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_pending_exception"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "调用该接口前或调用过程中出现未捕获的ArkTS异常"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据异常信息（hilog/crash栈）处理异常"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_reject_deferred"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "reject与ArkTS promise对象关联的延迟函数。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_reject_deferred"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "reject与ArkTS promise对象关联的延迟函数。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参deferred为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_reject_deferred"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "reject与ArkTS promise对象关联的延迟函数。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参rejection为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_reject_deferred"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "reject与ArkTS promise对象关联的延迟函数。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_pending_exception"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "调用该接口前或调用过程中出现未捕获的ArkTS异常"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据异常信息（hilog/crash栈）处理异常"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_is_promise"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断给定ArkTS value是否为promise对象。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_is_promise"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断给定ArkTS value是否为promise对象。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参value为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_is_promise"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断给定ArkTS value是否为promise对象。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参is_promise为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_uv_event_loop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取当前libuv loop实例。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_uv_event_loop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取当前libuv loop实例。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参loop为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_uv_event_loop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取当前libuv loop实例。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_generic_failure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env已销毁"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_threadsafe_function"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建线程安全函数。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_threadsafe_function"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建线程安全函数。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参async_resource_name为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_threadsafe_function"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建线程安全函数。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参initial_thread_count为0或者大于128"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_threadsafe_function"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建线程安全函数。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参result为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_threadsafe_function"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建线程安全函数。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参func与call_js_cb都为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_threadsafe_function"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建线程安全函数。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "new c++对象失败"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "内存不足，检查是否有c++内存泄漏"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_threadsafe_function"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建线程安全函数。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_generic_failure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uv_loop_t为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NA"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_threadsafe_function"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建线程安全函数。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_generic_failure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uv_async_init失败"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NA"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_threadsafe_function_context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取线程安全函数中的context。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参func为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_threadsafe_function_context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取线程安全函数中的context。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参result为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_call_threadsafe_function"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "调用线程安全函数。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参func为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_call_threadsafe_function"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "调用线程安全函数。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "threadsafe_function已关闭"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请勿在napi_release_threadsafe_function关闭了func后再调用本接口"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_call_threadsafe_function"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "调用线程安全函数。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_queue_full"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参is_blocking为napi_tsfn_nonblocking且queue已满"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "增大max_queue_size大小。或is_blocking改为napi_tsfn_blocking"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_call_threadsafe_function"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "调用线程安全函数。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_closing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "threadsafe_function正在关闭"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请勿在napi_release_threadsafe_function关闭了func后再调用本接口"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_call_threadsafe_function"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "调用线程安全函数。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_closing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env已销毁，且env地址又被新env复用"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请勿在env销毁后再使用本接口"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_call_threadsafe_function"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "调用线程安全函数。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_generic_failure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uv_async_send失败"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NA"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_call_threadsafe_function"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "调用线程安全函数。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_generic_failure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env已销毁"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请勿在env销毁后再使用本接口"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_acquire_threadsafe_function"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指示线程安全函数可以开始使用。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参func为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_acquire_threadsafe_function"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指示线程安全函数可以开始使用。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_generic_failure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "threadsafe_function正在关闭/已关闭"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请勿在napi_release_threadsafe_function关闭了func后再调用本接口"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_release_threadsafe_function"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指示线程安全函数将停止使用。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参func为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_release_threadsafe_function"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指示线程安全函数将停止使用。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_generic_failure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "threadsafe_function正在关闭/已关闭"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请勿在napi_release_threadsafe_function关闭了func后再调用本接口"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_release_threadsafe_function"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指示线程安全函数将停止使用。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_generic_failure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "调用本接口时，占用threadsafe_function的线程数是0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "release次数需要与initial_thread_count和acquire匹配"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_release_threadsafe_function"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指示线程安全函数将停止使用。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_generic_failure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uv_async_send失败"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NA"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_release_threadsafe_function"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指示线程安全函数将停止使用。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_generic_failure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env已销毁"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_ref_threadsafe_function"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指示在主线程上运行的事件循环在线程安全函数被销毁之前不应退出。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_ref_threadsafe_function"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指示在主线程上运行的事件循环在线程安全函数被销毁之前不应退出。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参func为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_ref_threadsafe_function"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指示在主线程上运行的事件循环在线程安全函数被销毁之前不应退出。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_generic_failure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前线程不是env所在线程"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该接口只能从env所在线程调用"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_unref_threadsafe_function"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指示在主线程上运行的事件循环可能会在线程安全函数被销毁之前退出。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_unref_threadsafe_function"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指示在主线程上运行的事件循环可能会在线程安全函数被销毁之前退出。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参func为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_unref_threadsafe_function"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指示在主线程上运行的事件循环可能会在线程安全函数被销毁之前退出。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_generic_failure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前线程不是env所在线程"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该接口只能从env所在线程调用"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_date"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过一个C的double数据创建ArkTS Date。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_date"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过一个C的double数据创建ArkTS Date。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参result为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_date"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过一个C的double数据创建ArkTS Date。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_pending_exception"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "调用接口前有未捕获的ArkTS异常"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据异常信息（hilog/crash栈）处理异常"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_date_value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定ArkTS Date对应的C double值。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_date_value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定ArkTS Date对应的C double值。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参value为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_date_value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定ArkTS Date对应的C double值。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参result为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_date_value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定ArkTS Date对应的C double值。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_date_expected"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参value不为ArkTS Date类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_date_value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定ArkTS Date对应的C double值。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_pending_exception"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "调用接口前有未捕获的ArkTS异常"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据异常信息（hilog/crash栈）处理异常"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_bigint_int64"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过一个C的int64数据创建ArkTS BigInt。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_bigint_int64"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过一个C的int64数据创建ArkTS BigInt。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参result为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_bigint_uint64"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过一个C的uint64数据创建ArkTS BigInt。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_bigint_uint64"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过一个C的uint64数据创建ArkTS BigInt。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参result为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_bigint_words"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过一个C的uint64数组创建单个ArkTS BigInt。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_bigint_words"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过一个C的uint64数组创建单个ArkTS BigInt。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参words为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_bigint_words"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过一个C的uint64数组创建单个ArkTS BigInt。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参result为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_bigint_words"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过一个C的uint64数组创建单个ArkTS BigInt。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参word_count大于等于INT_MAX"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_bigint_words"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过一个C的uint64数组创建单个ArkTS BigInt。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_pending_exception"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "调用接口前有未捕获的ArkTS异常"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据异常信息（hilog/crash栈）处理异常"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_bigint_words"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过一个C的uint64数组创建单个ArkTS BigInt。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_pending_exception"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参(word_count*2)>(1_MB/32)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_value_bigint_int64"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定ArkTS BigInt对应的C int64值。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_value_bigint_int64"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定ArkTS BigInt对应的C int64值。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参value为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_value_bigint_int64"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定ArkTS BigInt对应的C int64值。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参result为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_value_bigint_int64"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定ArkTS BigInt对应的C int64值。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参lossless为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_value_bigint_int64"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定ArkTS BigInt对应的C int64值。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_bigint_expected"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参value不为ArkTS BigInt类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_value_bigint_uint64"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定ArkTS BigInt对应的C uint64值。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_value_bigint_uint64"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定ArkTS BigInt对应的C uint64值。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参value为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_value_bigint_uint64"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定ArkTS BigInt对应的C uint64值。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参result为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_value_bigint_uint64"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定ArkTS BigInt对应的C uint64值。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参lossless为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_value_bigint_uint64"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定ArkTS BigInt对应的C uint64值。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_bigint_expected"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参value不为ArkTS BigInt类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_value_bigint_words"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定ArkTS BigInt对应的信息，包括符号位、64位小端序数组和数组中的元素个数。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_value_bigint_words"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定ArkTS BigInt对应的信息，包括符号位、64位小端序数组和数组中的元素个数。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参value为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_value_bigint_words"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定ArkTS BigInt对应的信息，包括符号位、64位小端序数组和数组中的元素个数。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参word_count为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_value_bigint_words"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定ArkTS BigInt对应的信息，包括符号位、64位小端序数组和数组中的元素个数。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_object_expected"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参value不为ArkTS BigInt类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_buffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建并获取一个指定大小的ArkTS Buffer。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_buffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建并获取一个指定大小的ArkTS Buffer。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参data为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_buffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建并获取一个指定大小的ArkTS Buffer。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参result为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_buffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建并获取一个指定大小的ArkTS Buffer。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参size为0或超过2MiB(2097152)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_buffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建并获取一个指定大小的ArkTS Buffer。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_pending_exception"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "调用接口前有未捕获的ArkTS异常"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据异常信息（hilog/crash栈）处理异常"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_buffer_copy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建并获取一个指定大小的ArkTS Buffer，并以给定数据进行初始化。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_buffer_copy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建并获取一个指定大小的ArkTS Buffer，并以给定数据进行初始化。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参data为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_buffer_copy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建并获取一个指定大小的ArkTS Buffer，并以给定数据进行初始化。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参result_data为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_buffer_copy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建并获取一个指定大小的ArkTS Buffer，并以给定数据进行初始化。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参result为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_buffer_copy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建并获取一个指定大小的ArkTS Buffer，并以给定数据进行初始化。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参size为0或超过2MiB(2097152)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_buffer_copy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建并获取一个指定大小的ArkTS Buffer，并以给定数据进行初始化。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_pending_exception"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "调用接口前有未捕获的ArkTS异常"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据异常信息（hilog/crash栈）处理异常"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_external_buffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建并获取一个指定大小的ArkTS Buffer，并以给定数据进行初始化，该接口可为Buffer附带额外数据。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_external_buffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建并获取一个指定大小的ArkTS Buffer，并以给定数据进行初始化，该接口可为Buffer附带额外数据。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参data为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_external_buffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建并获取一个指定大小的ArkTS Buffer，并以给定数据进行初始化，该接口可为Buffer附带额外数据。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参result为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_external_buffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建并获取一个指定大小的ArkTS Buffer，并以给定数据进行初始化，该接口可为Buffer附带额外数据。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参size为0或超过2MiB(2097152)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_external_buffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建并获取一个指定大小的ArkTS Buffer，并以给定数据进行初始化，该接口可为Buffer附带额外数据。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_pending_exception"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "调用该接口前或调用过程中出现未捕获的ArkTS异常"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据异常信息（hilog/crash栈）处理异常"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_buffer_info"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取ArkTS Buffer底层data及其长度。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_buffer_info"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取ArkTS Buffer底层data及其长度。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参result为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_buffer_info"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取ArkTS Buffer底层data及其长度。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_arraybuffer_expected"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参value不为ArkTS ArrayBuffer类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_is_buffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断给定ArkTS value是否为Buffer对象。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_is_buffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断给定ArkTS value是否为Buffer对象。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参value为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_is_buffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断给定ArkTS value是否为Buffer对象。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参result为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_object_freeze"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "冻结给定的对象。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_object_freeze"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "冻结给定的对象。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参object为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_object_freeze"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "冻结给定的对象。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_object_expected"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参object不为ArkTS Object类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_object_freeze"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "冻结给定的对象。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_pending_exception"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "调用该接口前或调用过程中出现未捕获的ArkTS异常"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据异常信息（hilog/crash栈）处理异常"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_object_seal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "密封给定的对象。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_object_seal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "密封给定的对象。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参object为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_object_seal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "密封给定的对象。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_object_expected"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参object不为ArkTS Object类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_object_seal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "密封给定的对象。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_pending_exception"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "调用该接口前或调用过程中出现未捕获的ArkTS异常"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据异常信息（hilog/crash栈）处理异常"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_all_property_names"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取一个数组，其中包含此对象过滤后的属性名称。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_all_property_names"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取一个数组，其中包含此对象过滤后的属性名称。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参object为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_all_property_names"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取一个数组，其中包含此对象过滤后的属性名称。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参result为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_all_property_names"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取一个数组，其中包含此对象过滤后的属性名称。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参key_mode不在napi_key_collection_mode枚举范围内"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_all_property_names"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取一个数组，其中包含此对象过滤后的属性名称。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参key_conversion不在napi_key_conversion枚举范围内"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_all_property_names"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取一个数组，其中包含此对象过滤后的属性名称。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_object_expected"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参object不为ArkTS Object类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_all_property_names"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取一个数组，其中包含此对象过滤后的属性名称。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_pending_exception"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "调用该接口前或调用过程中出现未捕获的ArkTS异常"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据异常信息（hilog/crash栈）处理异常"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_detach_arraybuffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "分离给定ArrayBuffer的底层数据。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_detach_arraybuffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "分离给定ArrayBuffer的底层数据。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参arraybuffer为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_detach_arraybuffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "分离给定ArrayBuffer的底层数据。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参arraybuffer是ArkTS Object类型，但不是ArkTS ArrayBuffer类型，也不是SharedArrayBuffer类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_detach_arraybuffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "分离给定ArrayBuffer的底层数据。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参arraybuffer已被detach过"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需arraybuffer未被detach过"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_detach_arraybuffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "分离给定ArrayBuffer的底层数据。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_object_expected"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参arraybuffer不为ArkTS Object类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_is_detached_arraybuffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断给定的ArrayBuffer是否已被分离过。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_is_detached_arraybuffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断给定的ArrayBuffer是否已被分离过。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参arraybuffer为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_is_detached_arraybuffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断给定的ArrayBuffer是否已被分离过。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参result为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_is_detached_arraybuffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断给定的ArrayBuffer是否已被分离过。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参arraybuffer不为ArkTS ArrayBuffer类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_run_script"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将给定对象作为ArkTS代码运行。当前接口实际为空实现，可使用系统拓展接口napi_run_script_path接口，提升安全性。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_run_script"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将给定对象作为ArkTS代码运行。当前接口实际为空实现，可使用系统拓展接口napi_run_script_path接口，提升安全性。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参script为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_run_script"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将给定对象作为ArkTS代码运行。当前接口实际为空实现，可使用系统拓展接口napi_run_script_path接口，提升安全性。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参result为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_set_instance_data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "绑定与当前运行的环境相关联的数据项。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_instance_data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "检索与当前运行的环境相关联的数据项。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_instance_data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "检索与当前运行的环境相关联的数据项。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参data为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_add_env_cleanup_hook"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册环境清理钩子函数。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_add_env_cleanup_hook"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册环境清理钩子函数。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参func为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_remove_env_cleanup_hook"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消环境清理钩子函数。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_remove_env_cleanup_hook"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消环境清理钩子函数。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参func为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_add_async_cleanup_hook"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册清理异步钩子函数。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_add_async_cleanup_hook"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册清理异步钩子函数。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参hook为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_remove_async_cleanup_hook"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消清理异步钩子函数。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参remove_handle为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "node_api_get_module_file_name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于获取加载项加载位置的绝对路径。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "node_api_get_module_file_name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于获取加载项加载位置的绝对路径。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参result为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_add_finalizer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当ArkTS Object中的对象被垃圾回收时调用注册的napi_finalize回调。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_add_finalizer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当ArkTS Object中的对象被垃圾回收时调用注册的napi_finalize回调。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参js_object为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_add_finalizer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当ArkTS Object中的对象被垃圾回收时调用注册的napi_finalize回调。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参finalize_cb为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_add_finalizer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当ArkTS Object中的对象被垃圾回收时调用注册的napi_finalize回调。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_object_expected"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参js_object不是ArkTS Object类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_fatal_exception"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "向ArkTS抛出 UncaughtException。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_fatal_exception"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "向ArkTS抛出 UncaughtException。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参err为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_fatal_exception"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "向ArkTS抛出 UncaughtException。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参error不为ArkTS Error类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_fatal_exception"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "向ArkTS抛出 UncaughtException。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_pending_exception"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "调用接口前有未捕获的ArkTS异常"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据异常信息（hilog/crash栈）处理异常"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_queue_async_work_with_qos"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将异步工作对象加到队列，由底层根据传入的qos优先级去调度执行。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_queue_async_work_with_qos"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将异步工作对象加到队列，由底层根据传入的qos优先级去调度执行。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参work为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_run_script_path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "运行abc文件。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_run_script_path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "运行abc文件。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参result为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_run_script_path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "运行abc文件。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_pending_exception"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "调用该接口前或调用过程中出现未捕获的ArkTS异常"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据异常信息（hilog/crash栈）处理异常"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_load_module"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将abc文件作为模块加载，返回模块的命名空间。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_load_module"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将abc文件作为模块加载，返回模块的命名空间。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参result为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_load_module"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将abc文件作为模块加载，返回模块的命名空间。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_pending_exception"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "调用该接口前或调用过程中出现未捕获的ArkTS异常"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据异常信息（hilog/crash栈）处理异常"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_object_with_properties"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用给定的napi_property_descriptor创建ArkTS Object。descriptor的键名必须为 string，且不可转为number。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_object_with_properties"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用给定的napi_property_descriptor创建ArkTS Object。descriptor的键名必须为 string，且不可转为number。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参result为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_object_with_named_properties"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用给定的napi_value和键名创建ArkTS Object。键名必须为 string，且不可转为number。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_object_with_named_properties"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用给定的napi_value和键名创建ArkTS Object。键名必须为 string，且不可转为number。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参result为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_coerce_to_native_binding_object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "强制将ArkTS Object和Native对象绑定。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_coerce_to_native_binding_object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "强制将ArkTS Object和Native对象绑定。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参js_object为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_coerce_to_native_binding_object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "强制将ArkTS Object和Native对象绑定。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参detach_cb为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_coerce_to_native_binding_object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "强制将ArkTS Object和Native对象绑定。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参attach_cb为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_coerce_to_native_binding_object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "强制将ArkTS Object和Native对象绑定。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参native_object为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_coerce_to_native_binding_object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "强制将ArkTS Object和Native对象绑定。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "new c++对象失败"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "内存不足，检查是否有c++内存泄漏"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_coerce_to_native_binding_object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "强制将ArkTS Object和Native对象绑定。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_object_expected"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "js_object不是ArkTS Object类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_coerce_to_native_binding_object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "强制将ArkTS Object和Native对象绑定。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_generic_failure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "调用该接口前或调用过程中出现未捕获的ArkTS异常"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据异常信息（hilog/crash栈）处理异常"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_ark_runtime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建基础运行时环境。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "g_createNapiEnvCallback为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NA"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_ark_runtime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建基础运行时环境。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_ark_runtime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建基础运行时环境。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_ark_runtime_only_one_env_per_thread"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前线程已创建过env"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "避免重复创建"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_ark_runtime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建基础运行时环境。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_ark_runtime_too_many_envs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "达到最大ArkRuntime数量（64）或ArkTS线程数超上限（80）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "避免滥用接口"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_ark_runtime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建基础运行时环境。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_generic_failure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建ark_runtime失败"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据hilog信息排查原因"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_destroy_ark_runtime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁基础运行时环境。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "g_createNapiEnvCallback为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NA"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_destroy_ark_runtime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁基础运行时环境。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_destroy_ark_runtime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁基础运行时环境。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_destroy_ark_runtime_env_not_exist"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "env未创建"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "与create接口配套使用"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_run_event_loop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "触发底层的事件循环。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_run_event_loop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "触发底层的事件循环。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参mode不为napi_event_mode枚举类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_run_event_loop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "触发底层的事件循环。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "env的loop为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_run_event_loop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "触发底层的事件循环。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_generic_failure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前线程不是native线程"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请使用napi_create_ark_runtime接口创建出来的env"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_stop_event_loop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "停止底层的事件循环。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_stop_event_loop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "停止底层的事件循环。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "env的loop为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_stop_event_loop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "停止底层的事件循环。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_generic_failure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前线程不是native线程"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请使用napi_create_ark_runtime接口创建出来的env"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_load_module_with_info"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将abc文件作为模块加载，返回模块的命名空间。可在新创建的ArkTS基础运行时环境中使用。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_load_module_with_info"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将abc文件作为模块加载，返回模块的命名空间。可在新创建的ArkTS基础运行时环境中使用。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参result为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_load_module_with_info"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将abc文件作为模块加载，返回模块的命名空间。可在新创建的ArkTS基础运行时环境中使用。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_generic_failure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模块加载失败"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据hilog信息排查原因"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_load_module_with_info"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将abc文件作为模块加载，返回模块的命名空间。可在新创建的ArkTS基础运行时环境中使用。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_pending_exception"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "调用接口前有未捕获的ArkTS异常"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据异常信息（hilog/crash栈）处理异常"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_serialize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将ArkTS对象转换为native数据。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_serialize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将ArkTS对象转换为native数据。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参object为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_serialize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将ArkTS对象转换为native数据。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参transfer_list为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_serialize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将ArkTS对象转换为native数据。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参clone_list为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_serialize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将ArkTS对象转换为native数据。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参result为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_serialize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将ArkTS对象转换为native数据。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参transfer_list既不是undefined，也不是ArkTS Array"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_serialize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将ArkTS对象转换为native数据。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参clone_list既不是undefined，也不是ArkTS Array"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_deserialize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将native数据转为ArkTS对象。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_deserialize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将native数据转为ArkTS对象。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参buffer为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_deserialize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将native数据转为ArkTS对象。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参object为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_delete_serialization_data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "删除序列化数据。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_delete_serialization_data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "删除序列化数据。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参buffer为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_call_threadsafe_function_with_priority"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将指定优先级和入队方式的任务投递到ArkTS主线程。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参func为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_call_threadsafe_function_with_priority"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将指定优先级和入队方式的任务投递到ArkTS主线程。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参priority不为napi_task_priority枚举类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_call_threadsafe_function_with_priority"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将指定优先级和入队方式的任务投递到ArkTS主线程。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_generic_failure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参func非法"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据hilog信息排查原因"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_call_threadsafe_function_with_priority"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将指定优先级和入队方式的任务投递到ArkTS主线程。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_generic_failure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EventHandler不支持或EventHandler执行失败"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据hilog信息排查原因"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_is_sendable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断给定ArkTS value是否是Sendable的。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_is_sendable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断给定ArkTS value是否是Sendable的。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参value为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_is_sendable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断给定ArkTS value是否是Sendable的。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参result为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_define_sendable_class"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个Sendable类。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_define_sendable_class"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个Sendable类。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参utf8name为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_define_sendable_class"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个Sendable类。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参constructor为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_define_sendable_class"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个Sendable类。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参property_count大于0且入参properties为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_define_sendable_class"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个Sendable类。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参result为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_define_sendable_class"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个Sendable类。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_object_expected"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参length值不为NAPI_AUTO_LENGTH，但超过INT_MAX"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_define_sendable_class"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个Sendable类。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_pending_exception"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "调用该接口前或调用过程中出现未捕获的ArkTS异常"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据异常信息（hilog/crash栈）处理异常"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_sendable_object_with_properties"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用给定的napi_property_descriptor创建一个Sendable对象。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_sendable_object_with_properties"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用给定的napi_property_descriptor创建一个Sendable对象。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参result为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_sendable_array"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个Sendable数组。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_sendable_array"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个Sendable数组。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参result为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_sendable_array_with_length"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个指定长度的Sendable数组。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_sendable_array_with_length"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个指定长度的Sendable数组。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参result为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_sendable_arraybuffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个Sendable ArrayBuffer。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_sendable_arraybuffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个Sendable ArrayBuffer。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参data为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_sendable_arraybuffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个Sendable ArrayBuffer。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参result为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_sendable_arraybuffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个Sendable ArrayBuffer。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_pending_exception"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "调用该接口前或调用过程中出现未捕获的ArkTS异常"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据异常信息（hilog/crash栈）处理异常"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_sendable_typedarray"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个Sendable TypedArray。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_sendable_typedarray"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个Sendable TypedArray。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参arraybuffer为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_sendable_typedarray"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个Sendable TypedArray。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参result为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_sendable_typedarray"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个Sendable TypedArray。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参type不为napi_typedarray_type类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_sendable_typedarray"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个Sendable TypedArray。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_object_expected"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参arraybuffer不为SharedArrayBuffer类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_sendable_typedarray"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个Sendable TypedArray。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_pending_exception"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "调用该接口前或调用过程中出现未捕获的ArkTS异常"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据异常信息（hilog/crash栈）处理异常"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_wrap_sendable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "包裹一个native实例到ArkTS对象中。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_wrap_sendable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "包裹一个native实例到ArkTS对象中。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参js_object为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_wrap_sendable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "包裹一个native实例到ArkTS对象中。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参native_object为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_wrap_sendable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "包裹一个native实例到ArkTS对象中。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_object_expected"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参js_object不是SendableObject类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_wrap_sendable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "包裹一个native实例到ArkTS对象中。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_pending_exception"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "调用该接口前或调用过程中出现未捕获的ArkTS异常"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据异常信息（hilog/crash栈）处理异常"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_wrap_sendable_with_size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "包裹一个native实例到ArkTS对象中并指定大小。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_wrap_sendable_with_size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "包裹一个native实例到ArkTS对象中并指定大小。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参js_object为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_wrap_sendable_with_size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "包裹一个native实例到ArkTS对象中并指定大小。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参native_object为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_wrap_sendable_with_size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "包裹一个native实例到ArkTS对象中并指定大小。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_object_expected"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参js_object不是SendableObject类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_wrap_sendable_with_size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "包裹一个native实例到ArkTS对象中并指定大小。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_pending_exception"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "调用该接口前或调用过程中出现未捕获的ArkTS异常"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据异常信息（hilog/crash栈）处理异常"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_unwrap_sendable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取ArkTS对象包裹的native实例。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_unwrap_sendable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取ArkTS对象包裹的native实例。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参js_object为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_unwrap_sendable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取ArkTS对象包裹的native实例。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参result为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_unwrap_sendable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取ArkTS对象包裹的native实例。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_object_expected"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参js_object不是SendableObject类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_unwrap_sendable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取ArkTS对象包裹的native实例。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_pending_exception"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "调用该接口前或调用过程中出现未捕获的ArkTS异常"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据异常信息（hilog/crash栈）处理异常"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_remove_wrap_sendable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "移除并获取ArkTS对象包裹的native实例。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_remove_wrap_sendable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "移除并获取ArkTS对象包裹的native实例。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参js_object为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_remove_wrap_sendable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "移除并获取ArkTS对象包裹的native实例。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参result为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_remove_wrap_sendable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "移除并获取ArkTS对象包裹的native实例。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_object_expected"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参js_object不是SendableObject类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_remove_wrap_sendable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "移除并获取ArkTS对象包裹的native实例。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_pending_exception"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "调用该接口前或调用过程中出现未捕获的ArkTS异常"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据异常信息（hilog/crash栈）处理异常"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_wrap_enhance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在ArkTS对象上绑定一个native对象实例并指定实例大小，运行时会统计传入的实例大小并将其累加，当累计大小达到GC触发阈值时，运行时会启动垃圾回收流程。开发者可以指定绑定的回调函数是否异步执行，如果是异步执行，回调函数必须保证是线程安全的。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_wrap_enhance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在ArkTS对象上绑定一个native对象实例并指定实例大小，运行时会统计传入的实例大小并将其累加，当累计大小达到GC触发阈值时，运行时会启动垃圾回收流程。开发者可以指定绑定的回调函数是否异步执行，如果是异步执行，回调函数必须保证是线程安全的。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参js_object为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_wrap_enhance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在ArkTS对象上绑定一个native对象实例并指定实例大小，运行时会统计传入的实例大小并将其累加，当累计大小达到GC触发阈值时，运行时会启动垃圾回收流程。开发者可以指定绑定的回调函数是否异步执行，如果是异步执行，回调函数必须保证是线程安全的。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参native_object为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_wrap_enhance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在ArkTS对象上绑定一个native对象实例并指定实例大小，运行时会统计传入的实例大小并将其累加，当累计大小达到GC触发阈值时，运行时会启动垃圾回收流程。开发者可以指定绑定的回调函数是否异步执行，如果是异步执行，回调函数必须保证是线程安全的。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_object_expected"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参js_object不是ArkTS Object类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_wrap_enhance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在ArkTS对象上绑定一个native对象实例并指定实例大小，运行时会统计传入的实例大小并将其累加，当累计大小达到GC触发阈值时，运行时会启动垃圾回收流程。开发者可以指定绑定的回调函数是否异步执行，如果是异步执行，回调函数必须保证是线程安全的。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_pending_exception"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "调用该接口前或调用过程中出现未捕获的ArkTS异常"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据异常信息（hilog/crash栈）处理异常"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_ark_context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个新的运行时上下文环境。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_ark_context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个新的运行时上下文环境。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_pending_exception"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "调用该接口前或调用过程中出现未捕获的ArkTS异常"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据异常信息（hilog/crash栈）处理异常"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_switch_ark_context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "切换到指定的运行时上下文环境。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_switch_ark_context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "切换到指定的运行时上下文环境。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_pending_exception"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "调用该接口前或调用过程中出现未捕获的ArkTS异常"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据异常信息（hilog/crash栈）处理异常"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_destroy_ark_context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁通过接口napi_create_ark_context创建的一个上下文环境。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_destroy_ark_context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁通过接口napi_create_ark_context创建的一个上下文环境。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_pending_exception"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "调用该接口前或调用过程中出现未捕获的ArkTS异常"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据异常信息（hilog/crash栈）处理异常"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_open_critical_scope"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "打开临界区作用域"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_open_critical_scope"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "打开临界区作用域"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参scope为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_close_critical_scope"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "关闭临界区作用域"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_close_critical_scope"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "关闭临界区作用域"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参scope为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_buffer_string_utf16_in_critical_scope"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取ArkTS String的UTF-16编码内存缓冲区数据"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_buffer_string_utf16_in_critical_scope"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取ArkTS String的UTF-16编码内存缓冲区数据"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参value为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_buffer_string_utf16_in_critical_scope"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取ArkTS String的UTF-16编码内存缓冲区数据"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参buffer为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_buffer_string_utf16_in_critical_scope"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取ArkTS String的UTF-16编码内存缓冲区数据"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参length为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_strong_reference"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建指向ArkTS对象的强引用"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_strong_reference"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建指向ArkTS对象的强引用"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参value为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_strong_reference"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建指向ArkTS对象的强引用"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参result为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_delete_strong_reference"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "删除强引用"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_delete_strong_reference"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "删除强引用"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参ref为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_strong_reference_value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据强引用对象获取其关联的ArkTS对象值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_strong_reference_value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据强引用对象获取其关联的ArkTS对象值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参ref为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_strong_reference_value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据强引用对象获取其关联的ArkTS对象值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参result为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_external_string_utf16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要通过外部UTF-16编码的字符串缓冲区创建ArkTS字符串值且避免内存拷贝时使用此函数。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_external_string_utf16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要通过外部UTF-16编码的字符串缓冲区创建ArkTS字符串值且避免内存拷贝时使用此函数。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参str为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_external_string_utf16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要通过外部UTF-16编码的字符串缓冲区创建ArkTS字符串值且避免内存拷贝时使用此函数。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参result为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_external_string_utf16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要通过外部UTF-16编码的字符串缓冲区创建ArkTS字符串值且避免内存拷贝时使用此函数。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参length不等于NAPI_AUTO_LENGTH或length大于INT_MAX"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参length等于NAPI_AUTO_LENGTH且length不大于INT_MAX"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_external_string_ascii"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要通过外部ASCII编码的字符串缓冲区创建ArkTS字符串值且避免内存拷贝时使用此函数。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_external_string_ascii"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要通过外部ASCII编码的字符串缓冲区创建ArkTS字符串值且避免内存拷贝时使用此函数。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参str为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_external_string_ascii"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要通过外部ASCII编码的字符串缓冲区创建ArkTS字符串值且避免内存拷贝时使用此函数。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参result为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_external_string_ascii"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要通过外部ASCII编码的字符串缓冲区创建ArkTS字符串值且避免内存拷贝时使用此函数。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参length不等于NAPI_AUTO_LENGTH或length大于INT_MAX"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参length等于NAPI_AUTO_LENGTH且length不大于INT_MAX"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_strong_sendable_reference"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建指向Sendable ArkTS对象的Sendable强引用。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_strong_sendable_reference"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建指向Sendable ArkTS对象的Sendable强引用。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参value为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_strong_sendable_reference"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建指向Sendable ArkTS对象的Sendable强引用。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参result为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_strong_sendable_reference"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建指向Sendable ArkTS对象的Sendable强引用。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env不是main context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_strong_sendable_reference"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建指向Sendable ArkTS对象的Sendable强引用。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_object_expected"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参value不是sendable的"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_delete_strong_sendable_reference"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "删除Sendable强引用。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_delete_strong_sendable_reference"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "删除Sendable强引用。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参ref为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_delete_strong_sendable_reference"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "删除Sendable强引用。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env不是main context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_delete_strong_sendable_reference"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "删除Sendable强引用。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_generic_failure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从napi_sendable_ref中获取的napi_value不是sendable的"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_strong_sendable_reference_value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据Sendable强引用获取其关联的ArkTS对象值。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_strong_sendable_reference_value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据Sendable强引用获取其关联的ArkTS对象值。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参ref为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_strong_sendable_reference_value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据Sendable强引用获取其关联的ArkTS对象值。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参result为nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_strong_sendable_reference_value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据Sendable强引用获取其关联的ArkTS对象值。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_invalid_arg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "入参env不是main context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_strong_sendable_reference_value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据Sendable强引用获取其关联的ArkTS对象值。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_generic_failure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从napi_sendable_ref中获取的napi_value不是sendable的"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确保入参正确"
          })]
        })]
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