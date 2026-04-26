"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["350990"], {
294994(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_audio_kit_audio_call_audio_call_overview_audio_call_overview_md_285_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-audio-kit-audio-call-audio-call-overview-audio-call-overview-md-285.json
var site_docs_audio_kit_audio_call_audio_call_overview_audio_call_overview_md_285_namespaceObject = JSON.parse('{"id":"audio-kit/audio-call/audio-call-overview/audio-call-overview","title":"音频通话开发概述","description":"常用的音频通话模式包括VoIP通话和蜂窝通话。","source":"@site/docs/audio-kit/audio-call/audio-call-overview/audio-call-overview.md","sourceDirName":"audio-kit/audio-call/audio-call-overview","slug":"/audio-kit/audio-call/audio-call-overview/","permalink":"/harmonyos-docs-site/audio-kit/audio-call/audio-call-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"音频通话开发概述","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/audio-call-overview","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"响应输出设备变更时合理暂停","permalink":"/harmonyos-docs-site/audio-kit/audio-device/audio-output-device-change/"},"next":{"title":"开发音频通话功能","permalink":"/harmonyos-docs-site/audio-kit/audio-call/audio-call-development/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/audio-kit/audio-call/audio-call-overview/audio-call-overview.md


const frontMatter = {
	title: '音频通话开发概述',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/audio-call-overview',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '音频通话开发概述';

const assets = {

};



const toc = [{
  "value": "音频场景模式",
  "id": "音频场景模式",
  "level": 2
}, {
  "value": "铃声模式",
  "id": "铃声模式",
  "level": 2
}, {
  "value": "通话场景音频设备切换",
  "id": "通话场景音频设备切换",
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
        id: "音频通话开发概述",
        children: "音频通话开发概述"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "常用的音频通话模式包括VoIP通话和蜂窝通话。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "VoIP通话："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "VoIP（Voice over Internet Protocol）通话是指基于互联网协议（IP）进行通讯的一种语音通话技术。VoIP通话会将通话信息打包成数据包，通过网络进行传输，因此VoIP通话对网络要求较高，通话质量与网络连接速度紧密相关。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "蜂窝通话（仅对系统应用开放）："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "蜂窝通话是指传统的电话功能，由运营商提供服务，目前仅对系统应用开放，未向第三方应用提供开发接口。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在开发音频通话相关功能时，开发者可以根据实际情况，检查当前的", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E9%9F%B3%E9%A2%91%E5%9C%BA%E6%99%AF%E6%A8%A1%E5%BC%8F",
        children: "音频场景模式"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E9%93%83%E5%A3%B0%E6%A8%A1%E5%BC%8F",
        children: "铃声模式"
      }), "，以使用相应的音频处理策略。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "音频场景模式",
      children: "音频场景模式"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用使用音频通话相关功能时，系统会切换至与通话相关的音频场景模式（", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-e/arkts-apis-audio-e#audioscene8",
        children: "AudioScene"
      }), "），当前预置了多种音频场景，包括响铃、通话、语音聊天等，在不同的场景下，系统会采用不同的策略来处理音频。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如在通话场景中会更注重人声的清晰度。系统会使用3A算法对音频数据进行预处理，抑制通话回声，消除背景噪音，调整音量范围，从而达到清晰人声的效果。3A算法，指声学回声消除（Acoustic Echo Cancellation, AEC）、背景噪声抑制（Active Noise Control, ANC）、自动增益控制（Automatic Gain Control, AGC）三种音频处理算法。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前预置的音频场景："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "AUDIO_SCENE_DEFAULT：默认音频场景，音频通话之外的场景均可使用。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "AUDIO_SCENE_VOICE_CHAT：语音聊天音频场景，VoIP通话时使用。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用可通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-audiomanager/arkts-apis-audio-audiomanager",
        children: "AudioManager"
      }), "的getAudioScene来获取当前的音频场景模式。当应用开始或结束使用音频通话相关功能时，可通过此方法检查系统是否已切换为合适的音频场景模式。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "铃声模式",
      children: "铃声模式"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在用户进入到音频通话时，应用可以使用铃声或振动来提示用户。系统通过调整铃声模式（", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-e/arkts-apis-audio-e#audioringmode",
        children: "AudioRingMode"
      }), "），实现便捷地管理铃声音量，并调整设备的振动模式。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前预置的三种铃声模式："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RINGER_MODE_SILENT：静音模式，此模式下铃声音量为零（即静音）。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RINGER_MODE_VIBRATE：振动模式，此模式下铃声音量为零，设备振动开启（即响铃时静音，触发振动）。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RINGER_MODE_NORMAL：响铃模式，此模式下铃声音量正常。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用可以调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-audiovolumegroupmanager/arkts-apis-audio-audiovolumegroupmanager",
        children: "AudioVolumeGroupManager"
      }), "中的getRingerMode获取当前的铃声模式，以便采取合适的提示策略。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果应用希望及时获取铃声模式的变化情况，可以通过AudioVolumeGroupManager中的on('ringerModeChange')监听铃声模式变化事件，使应用在铃声模式发生变化时及时收到通知，方便应用做出相应的调整。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "通话场景音频设备切换",
      children: "通话场景音频设备切换"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在通话场景下，系统会根据默认优先级选择合适的音频设备。应用可以根据需要，切换音频设备。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["切换方式可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/avsession-kit/distributed-avsession/using-switch-call-devices",
        children: "AVSession Kit使用通话设备切换组件"
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