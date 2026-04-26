"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["605839"], {
24064(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_intents_kit_guide_intents_habit_rec_intents_habit_rec_scene_experience_intents_habit_rec_scene_experience_md_48d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-intents-kit-guide-intents-habit-rec-intents-habit-rec-scene-experience-intents-habit-rec-scene-experience-md-48d.json
var site_docs_intents_kit_guide_intents_habit_rec_intents_habit_rec_scene_experience_intents_habit_rec_scene_experience_md_48d_namespaceObject = JSON.parse('{"id":"intents-kit-guide/intents-habit-rec/intents-habit-rec-scene-experience/intents-habit-rec-scene-experience","title":"场景体验","description":"典型场景","source":"@site/docs/intents-kit-guide/intents-habit-rec/intents-habit-rec-scene-experience/intents-habit-rec-scene-experience.md","sourceDirName":"intents-kit-guide/intents-habit-rec/intents-habit-rec-scene-experience","slug":"/intents-kit-guide/intents-habit-rec/intents-habit-rec-scene-experience/","permalink":"/harmonyos-docs-site/intents-kit-guide/intents-habit-rec/intents-habit-rec-scene-experience/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"场景体验","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/intents-habit-rec-scene-experience","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"概述","permalink":"/harmonyos-docs-site/intents-kit-guide/intents-habit-rec/intents-habit-rec-introduction/"},"next":{"title":"接入方案","permalink":"/harmonyos-docs-site/intents-kit-guide/intents-habit-rec/intents-habit-rec-access-programme/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/intents-kit-guide/intents-habit-rec/intents-habit-rec-scene-experience/intents-habit-rec-scene-experience.md


const frontMatter = {
	title: '场景体验',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/intents-habit-rec-scene-experience',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = '场景体验';

const assets = {

};



const toc = [{
  "value": "典型场景",
  "id": "典型场景",
  "level": 2
}, {
  "value": "卡片展示效果",
  "id": "卡片展示效果",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    p: "p",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "场景体验",
        children: "场景体验"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "典型场景",
      children: "典型场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前习惯推荐可在小艺建议入口分发，在不同垂域中，填充功能详细参数或内容的逻辑不同，主要典型场景可分为常用接续、常用复访、常用推新三类。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(709314)/* ["default"] */.A) + "",
        width: "3915",
        height: "901"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以常看视频续播为例，系统预测当前用户使用华为视频的播放视频功能概率较高，会选择用户最近观看且还没看完的视频内容来补充功能细节，在小艺建议中以模板卡形式推荐展示，用户点击卡片后，实现一步跳转进应用的视频播放页。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "卡片展示效果",
      children: "卡片展示效果"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "意图框架提供各垂域习惯推荐在小艺建议中展示使用的标准模板卡片，开发者无需开发展示卡片。在展示模板上，会展示应用/元服务名称与logo和内容必要信息，比如音乐名、音乐图片，这类参数需要开发者共享到系统。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下为播放歌曲-习惯推荐的卡片示例。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(863818)/* ["default"] */.A) + "",
        width: "1470",
        height: "437"
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
709314(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479311-231c15dcc253b4b84910ad47de0a4af4.png");

},
863818(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799662-4d40e68e0b0ee45ba0247610dcabf79c.png");

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