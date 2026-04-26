"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["680045"], {
198090(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_avcodec_kit_audio_video_codec_audiovivid_audiovivid_intro_audiovivid_intro_md_b0e_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-avcodec-kit-audio-video-codec-audiovivid-audiovivid-intro-audiovivid-intro-md-b0e.json
var site_docs_avcodec_kit_audio_video_codec_audiovivid_audiovivid_intro_audiovivid_intro_md_b0e_namespaceObject = JSON.parse('{"id":"avcodec-kit/audio-video-codec/audiovivid/audiovivid-intro/audiovivid-intro","title":"Audio Vivid能力介绍","description":"Audio Vivid（菁彩三维声）是全球首个基于AI技术的音频编解码标准，由世界超高清视频产业联盟（UWA联盟）与数字音视频编解码技术标准工作组（AVS）联合制定，共同发布。包含音频PCM数据以及元数据的音频格式，相比传统立体声音源，Audio Vivid包含音频内容源的元数据信息，能够还原物理和感知世界中的真实听感，打造极致的沉浸式听觉体验。","source":"@site/docs/avcodec-kit/audio-video-codec/audiovivid/audiovivid-intro/audiovivid-intro.md","sourceDirName":"avcodec-kit/audio-video-codec/audiovivid/audiovivid-intro","slug":"/avcodec-kit/audio-video-codec/audiovivid/audiovivid-intro/","permalink":"/harmonyos-docs-site/avcodec-kit/audio-video-codec/audiovivid/audiovivid-intro/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Audio Vivid能力介绍","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/audiovivid-intro","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"视频可变帧率","permalink":"/harmonyos-docs-site/avcodec-kit/audio-video-codec/video-variable-refreshrate/"},"next":{"title":"Audio Vivid解封装","permalink":"/harmonyos-docs-site/avcodec-kit/audio-video-codec/audiovivid/audiovivid-avdemuxer/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/avcodec-kit/audio-video-codec/audiovivid/audiovivid-intro/audiovivid-intro.md


const frontMatter = {
	title: 'Audio Vivid能力介绍',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/audiovivid-intro',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = 'Audio Vivid能力介绍';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    header: "header",
    p: "p",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "audio-vivid能力介绍",
        children: "Audio Vivid能力介绍"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Audio Vivid（菁彩三维声）是全球首个基于AI技术的音频编解码标准，由世界超高清视频产业联盟（UWA联盟）与数字音视频编解码技术标准工作组（AVS）联合制定，共同发布。包含音频PCM数据以及元数据的音频格式，相比传统立体声音源，Audio Vivid包含音频内容源的元数据信息，能够还原物理和感知世界中的真实听感，打造极致的沉浸式听觉体验。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HarmonyOS打造全链路高清空间音频系统，包含Audio Vivid编解码、空间音频渲染算法等关键能力，并在各类终端产品逐步构建全场景空间音频特性，从传统立体声升级到三维声，获得更好的音质、更沉浸的空间感。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HarmonyOS支持播放Audio Vivid格式音源，并在耳机实现双耳空间音频渲染重放，在手机、平板、PC等支持外放空间音频渲染重放。系统的空间音频渲染能力无感接入，不需要做特定适配。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "搭配HarmonyOS高清空间音频渲染能力，将音乐中的人声和各种乐器声作为独立的声音对象，重新定义各种声音对象的位置、移动轨迹和声音大小、远近等要素，实现声音在听众四周及上方全面萦绕，实现更佳的空间音频沉浸式体验，获得影院、音乐厅等的临场感与艺术体验。佩戴支持头动跟踪的耳机收听空间音频，还能实现动态头动跟踪，让声音围绕听众重新定位，还原逼真的临场感。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下主要介绍使用HarmonyOS进行Audio Vivid格式音源的端到端播放的流程。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Audio Vivid端到端播放包括调用系统编解码能力进行", (0,jsx_runtime.jsx)(_components.a, {
        href: "/avcodec-kit/audio-video-codec/audiovivid/audiovivid-avdemuxer",
        children: "解封装"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/avcodec-kit/audio-video-codec/audiovivid/audiovivid-audiodecoder",
        children: "解码"
      }), "，以及调用系统播放能力进行", (0,jsx_runtime.jsx)(_components.a, {
        href: "/avcodec-kit/audio-video-codec/audiovivid/audiovivid-audiorenderer",
        children: "渲染播放"
      }), "两个部分。"]
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