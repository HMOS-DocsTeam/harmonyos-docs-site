"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["832249"], {
771504(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_audio_kit_audio_recording_audio_recording_overview_audio_recording_overview_md_e69_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-audio-kit-audio-recording-audio-recording-overview-audio-recording-overview-md-e69.json
var site_docs_audio_kit_audio_recording_audio_recording_overview_audio_recording_overview_md_e69_namespaceObject = JSON.parse('{"id":"audio-kit/audio-recording/audio-recording-overview/audio-recording-overview","title":"音频录制开发概述","description":"如何选择音频录制开发方式","source":"@site/docs/audio-kit/audio-recording/audio-recording-overview/audio-recording-overview.md","sourceDirName":"audio-kit/audio-recording/audio-recording-overview","slug":"/audio-kit/audio-recording/audio-recording-overview/","permalink":"/harmonyos-docs-site/audio-kit/audio-recording/audio-recording-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"音频录制开发概述","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/audio-recording-overview","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"音频播放流管理","permalink":"/harmonyos-docs-site/audio-kit/audio-playback/audio-playback-stream-management/"},"next":{"title":"推荐使用OHAudio开发音频录制功能(C/C++)","permalink":"/harmonyos-docs-site/audio-kit/audio-recording/using-ohaudio-for-recording/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/audio-kit/audio-recording/audio-recording-overview/audio-recording-overview.md


const frontMatter = {
	title: '音频录制开发概述',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/audio-recording-overview',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '音频录制开发概述';

const assets = {

};



const toc = [{
  "value": "如何选择音频录制开发方式",
  "id": "如何选择音频录制开发方式",
  "level": 2
}, {
  "value": "开发音频录制应用须知",
  "id": "开发音频录制应用须知",
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
        id: "音频录制开发概述",
        children: "音频录制开发概述"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "如何选择音频录制开发方式",
      children: "如何选择音频录制开发方式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "系统提供了多样化的API，来帮助开发者完成音频录制的开发，不同的API适用于不同录音输出格式、音频使用场景或不同开发语言。因此，选择合适的音频录制API，有助于降低开发工作量，实现更佳的音频录制效果。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/audio-kit/audio-recording/using-audiocapturer-for-recording",
          children: "AudioCapturer"
        }), "：用于音频输入的ArkTS/JS API，仅支持PCM格式，需要应用持续读取音频数据进行工作。应用可以在音频输出后添加数据处理，要求开发者具备音频处理的基础知识，适用于更专业、更多样化的媒体录制应用开发。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/audio-kit/audio-recording/using-ohaudio-for-recording",
          children: "OHAudio"
        }), "：用于音频输入的Native API，此API在设计上实现归一，同时支持普通音频通路和低时延通路。仅支持PCM格式，适用于依赖Native层实现音频输入功能的场景。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "除上述方式外，也可以通过Media Kit中的AVRecorder实现音频录制。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/media-kit/media-kit-dev--arkts/media-recording-arkts/using-avrecorder-for-recording",
          children: "AVRecorder"
        }), "：用于音频录制的ArkTS/JS API，集成了音频输入录制、音频编码和媒体封装的功能。开发者可以直接调用设备硬件如麦克风录音，并生成m4a音频文件。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发音频录制应用须知",
      children: "开发音频录制应用须知"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["应用可以调用麦克风录制音频，但该行为属于隐私敏感行为，在调用麦克风前，需要先", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/request-user-authorization",
            children: "向用户申请授权"
          }), "：ohos.permission.MICROPHONE。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["如何使用和管理麦克风请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/audio-kit/audio-recording/mic-management",
            children: "管理麦克风静音状态"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["如果需要持续录制或后台录制，请申请长时任务避免进入挂起（Suspend）状态。具体参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/background-task-kit/continuous-task",
            children: "长时任务(ArkTS)"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "录制需要在前台启动，启动后可以退后台。在后台启动录制将会失败。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["应用录制音频时需要使用合适的录制流类型，请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/audio-kit/using-right-streamusage-and-sourcetype",
            children: "使用合适的音频流类型"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["如果开发者需要实现屏幕录制功能，可参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/media-kit/media-kit-dev--arkts/media-recording-arkts/using-avscreencapture-arkts",
            children: "使用AVScreenCaptureRecorder录屏写文件(ArkTS)"
          }), "和", (0,jsx_runtime.jsx)(_components.a, {
            href: "/media-kit/media-kit-dev--c/media-recording-c/using-avscreencapture-for-file",
            children: "使用AVScreenCapture录屏写文件(C/C++)"
          }), "。"]
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