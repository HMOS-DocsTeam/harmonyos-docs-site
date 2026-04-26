"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["39128"], {
146335(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_audio_kit_audio_playback_audio_playback_overview_audio_playback_overview_md_369_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-audio-kit-audio-playback-audio-playback-overview-audio-playback-overview-md-369.json
var site_docs_audio_kit_audio_playback_audio_playback_overview_audio_playback_overview_md_369_namespaceObject = JSON.parse('{"id":"audio-kit/audio-playback/audio-playback-overview/audio-playback-overview","title":"音频播放开发概述","description":"如何选择音频播放开发方式","source":"@site/docs/audio-kit/audio-playback/audio-playback-overview/audio-playback-overview.md","sourceDirName":"audio-kit/audio-playback/audio-playback-overview","slug":"/audio-kit/audio-playback/audio-playback-overview/","permalink":"/harmonyos-docs-site/audio-kit/audio-playback/audio-playback-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"音频播放开发概述","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/audio-playback-overview","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用OHAudio开发音频会话功能(C/C++)","permalink":"/harmonyos-docs-site/audio-kit/audio-session/using-ohaudio-for-session/"},"next":{"title":"推荐使用OHAudio开发音频播放功能(C/C++)","permalink":"/harmonyos-docs-site/audio-kit/audio-playback/using-ohaudio-for-playback/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/audio-kit/audio-playback/audio-playback-overview/audio-playback-overview.md


const frontMatter = {
	title: '音频播放开发概述',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/audio-playback-overview',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '音频播放开发概述';

const assets = {

};



const toc = [{
  "value": "如何选择音频播放开发方式",
  "id": "如何选择音频播放开发方式",
  "level": 2
}, {
  "value": "后台播放开发须知",
  "id": "后台播放开发须知",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    header: "header",
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "音频播放开发概述",
        children: "音频播放开发概述"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "如何选择音频播放开发方式",
      children: "如何选择音频播放开发方式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "系统提供了多样化的API，来帮助开发者完成音频播放的开发，不同的API适用于不同音频数据格式、音频资源来源、音频使用场景，甚至是不同开发语言。因此，选择合适的音频播放API，有助于降低开发工作量，实现更佳的音频播放效果。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/audio-kit/audio-playback/using-audiorenderer-for-playback",
          children: "AudioRenderer"
        }), "：用于音频输出的ArkTS/JS API，仅支持PCM格式，需要应用持续写入音频数据进行工作。应用可以在输入前添加数据预处理，如设定音频文件的采样率、位宽等，要求开发者具备音频处理的基础知识，适用于更专业、更多样化的媒体播放应用开发。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/audio-kit/audio-playback/using-audiohaptic-for-playback",
          children: "AudioHaptic"
        }), "：用于音振协同播放的ArkTS/JS API，适用于需要在播放音频时同步发起振动的场景，如来电铃声随振、键盘按键反馈、消息通知反馈等。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/audio-kit/audio-playback/using-ohaudio-for-playback",
          children: "OHAudio"
        }), "：用于音频输出的Native API，此API在设计上实现归一，同时支持普通音频通路和低时延通路。仅支持PCM格式，适用于依赖Native层实现音频输出功能的场景。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "除上述方式外，也可以通过Media Kit中的AVPlayer和SoundPool实现音频播放。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/media-kit/media-kit-dev--arkts/media-playback-arkts/using-avplayer-for-playback",
          children: "AVPlayer"
        }), "：用于音频播放的ArkTS/JS API，集成了流媒体和本地资源解析、媒体资源解封装、音频解码和音频输出功能。可用于直接播放mp3、m4a等格式的音频文件，不支持直接播放PCM格式文件。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/media-kit/media-kit-dev--arkts/media-playback-arkts/using-soundpool-for-playback",
          children: "SoundPool"
        }), "：低时延的短音播放ArkTS/JS API，适用于播放急促简短的音效，如相机快门音效、按键音效、游戏射击音效等。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "后台播放开发须知",
      children: "后台播放开发须知"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用如果需要实现在后台播放音频（包含熄屏播放音频），除了开发音频播放功能之外，还需要根据自身业务场景，选择", (0,jsx_runtime.jsx)(_components.a, {
        href: "/avsession-kit/local-avsession/avsession-access-scene",
        children: "接入AVSession"
      }), "或", (0,jsx_runtime.jsx)(_components.a, {
        href: "/background-task-kit/continuous-task",
        children: "申请长时任务"
      }), "，具体规则为："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当应用需要在后台播放媒体类型（流类型为STREAM_USAGE_MUSIC、STREAM_USAGE_MOVIE和STREAM_USAGE_AUDIOBOOK）和游戏类型（流类型为STREAM_USAGE_GAME）时，必须接入AVSession和申请长时任务。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["除了上述播放类型，针对用户可感知的其他播放任务，如果应用需要在后台长时间运行该任务，必须申请", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/background-tasks-api/background-tasks-arkts/js-apis-resourceschedule-backgroundtaskmanager/js-apis-resourceschedule-backgroundtaskmanager#backgroundmode",
          children: "AUDIO_PLAYBACK"
        }), "类型长时任务。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果应用不满足上述接入规范，退至后台播放时会被系统静音并冻结，无法在后台正常播放。直到应用重新切回前台时，才会被解除静音并恢复播放。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["详细的适配指南可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/avsession-kit/local-avsession/avsession-background-scene",
        children: "后台播放"
      }), "。"]
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