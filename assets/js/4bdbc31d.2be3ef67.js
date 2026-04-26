"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["202799"], {
783344(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_intents_kit_guide_intents_habit_rec_intents_habit_rec_introduction_intents_habit_rec_introduction_md_4bd_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-intents-kit-guide-intents-habit-rec-intents-habit-rec-introduction-intents-habit-rec-introduction-md-4bd.json
var site_docs_intents_kit_guide_intents_habit_rec_intents_habit_rec_introduction_intents_habit_rec_introduction_md_4bd_namespaceObject = JSON.parse('{"id":"intents-kit-guide/intents-habit-rec/intents-habit-rec-introduction/intents-habit-rec-introduction","title":"概述","description":"习惯推荐是HarmonyOS学习用户的行为习惯后做出的主动预测推荐。","source":"@site/docs/intents-kit-guide/intents-habit-rec/intents-habit-rec-introduction/intents-habit-rec-introduction.md","sourceDirName":"intents-kit-guide/intents-habit-rec/intents-habit-rec-introduction","slug":"/intents-kit-guide/intents-habit-rec/intents-habit-rec-introduction/","permalink":"/harmonyos-docs-site/intents-kit-guide/intents-habit-rec/intents-habit-rec-introduction/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"概述","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/intents-habit-rec-introduction","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Intents Kit接入流程","permalink":"/harmonyos-docs-site/intents-kit-guide/intents-access-flow/"},"next":{"title":"场景体验","permalink":"/harmonyos-docs-site/intents-kit-guide/intents-habit-rec/intents-habit-rec-scene-experience/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/intents-kit-guide/intents-habit-rec/intents-habit-rec-introduction/intents-habit-rec-introduction.md


const frontMatter = {
	title: '概述',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/intents-habit-rec-introduction',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = '概述';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    header: "header",
    li: "li",
    ol: "ol",
    p: "p",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "概述",
        children: "概述"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "习惯推荐是HarmonyOS学习用户的行为习惯后做出的主动预测推荐。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "开发者将用户在应用/元服务内的使用行为向HarmonyOS共享，使得HarmonyOS可以基于共享的数据学习用户的行为习惯。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在HarmonyOS学习到用户的行为习惯后，会给用户推荐相应功能，并且尝试补充详细功能参数，减少用户执行任务的步骤。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以听音乐为例，意图框架设计了统一的意图——播放歌单意图，该意图可以让应用/元服务与HarmonyOS交互。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当用户使用应用/元服务播放歌单时，应用/元服务可以向Intents Kit共享该意图，并提供一些用于学习的特征，例如播放开始/结束时间、播放时长、歌单名等。HarmonyOS会结合底层采集的时间、空间、设备状态等数据共同理解用户行为上下文。最后HarmonyOS结合应用/元服务历史上共享过的数据重建响应意图任务并进行预测推荐，例如在用户每天早上上车后，为其推荐“每日推荐”歌单卡片，用户点击实现一键播放。"
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