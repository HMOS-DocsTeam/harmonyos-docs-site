"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["206444"], {
287157(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_audio_kit_audio_recording_audio_recording_concurrency_audio_recording_concurrency_md_c3c_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-audio-kit-audio-recording-audio-recording-concurrency-audio-recording-concurrency-md-c3c.json
var site_docs_audio_kit_audio_recording_audio_recording_concurrency_audio_recording_concurrency_md_c3c_namespaceObject = JSON.parse('{"id":"audio-kit/audio-recording/audio-recording-concurrency/audio-recording-concurrency","title":"录音并发策略说明","description":"音频输入的音频源通常是由内置麦克风、外接设备或远端分布式设备的采集的音频数据，但也可能是其他应用发送到系统以供播放的音频数据。根据音频源的不同，音频输入可分为两类：内录型音频输入和外录型音频输入。","source":"@site/docs/audio-kit/audio-recording/audio-recording-concurrency/audio-recording-concurrency.md","sourceDirName":"audio-kit/audio-recording/audio-recording-concurrency","slug":"/audio-kit/audio-recording/audio-recording-concurrency/","permalink":"/harmonyos-docs-site/audio-kit/audio-recording/audio-recording-concurrency/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"title":"录音并发策略说明","sidebar_position":7,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/audio-recording-concurrency","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"查询和监听其他应用录制状态","permalink":"/harmonyos-docs-site/audio-kit/audio-recording/audio-recording-stream-management/"},"next":{"title":"实现音频耳返","permalink":"/harmonyos-docs-site/audio-kit/audio-recording/audio-ear-monitor/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/audio-kit/audio-recording/audio-recording-concurrency/audio-recording-concurrency.md


const frontMatter = {
	title: '录音并发策略说明',
	sidebar_position: 7,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/audio-recording-concurrency',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '录音并发策略说明';

const assets = {

};



const toc = [{
  "value": "录音并发",
  "id": "录音并发",
  "level": 2
}, {
  "value": "优先级调控方案",
  "id": "优先级调控方案",
  "level": 3
}, {
  "value": "录音并发策略",
  "id": "录音并发策略",
  "level": 3
}, {
  "value": "使用建议",
  "id": "使用建议",
  "level": 2
}, {
  "value": "录音并发的局限性",
  "id": "录音并发的局限性",
  "level": 3
}, {
  "value": "对开发者的建议",
  "id": "对开发者的建议",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "录音并发策略说明",
        children: "录音并发策略说明"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "音频输入的音频源通常是由内置麦克风、外接设备或远端分布式设备的采集的音频数据，但也可能是其他应用发送到系统以供播放的音频数据。根据音频源的不同，音频输入可分为两类：内录型音频输入和外录型音频输入。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "内录型音频输入：是指以系统内部音频数据作为音频源的输入类型，简称为内录，对应的流称为内录流。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "常见的内录音频包括录屏时录制的其他应用播放的音频数据、投播到其他设备上播放的音频数据。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "外录型音频输入：是指通过音频接口将系统外部的声音采集进来作为音频源的输入类型，简称为外录，对应的流称为外录流。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "常见的外录示例有录音机的音频录制、语音助手的语音唤醒和识别、以及在VoIP通话中传输给对端的音频录制。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通常，当应用请求录音时，它是独占音频输入的。然而，在某些情况下，可能会有两个或多个应用同时或先后请求录音，在同一时间段内都希望从音频输入中获得数据，这种情况称为录音并发，录音并发又细分为：录音并存和录音并行。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["录音并存是指一个或多个应用创建的不同录音客户端（", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-audiocapturer/arkts-apis-audio-audiocapturer",
          children: "AudioCapturer"
        }), "）在同一时间段内同时存在的状态。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "录音并行是指在录音并存的基础上，不同录音客户端（AudioCapturer）启动的录音流在同一时间段内同时处于运行（Running）状态，即同时进行音频录制。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当录音并发发生时，每个请求录音的应用都希望能够获得音频输入数据，但此时会面临将同一音频源同时传输给多个应用的问题。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "录音并发",
      children: "录音并发"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["此前，系统不支持不同应用程序间不同录音流类型的录音并发，会受到严格的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/audio-kit/audio-session/audio-playback-concurrency#%E9%9F%B3%E9%A2%91%E7%84%A6%E7%82%B9%E7%AD%96%E7%95%A5",
        children: "音频焦点策略管控"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "内录型与外录型音频输入之间的并发录音在安全隐私策略允许下不受此限制，例如在录屏应用中启用内录流时，可以同时使用录音机录音或语音助手进行语音识别。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前系统版本虽已放宽了部分录音流类型之间的并行录音限制，允许多个录音流同时获取音频数据，但由于这些数据来源于同一音频输入，音频效果相同，可能只能满足部分并行录音需求。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "优先级调控方案",
      children: "优先级调控方案"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "大多数情况下，音频数据的效果依赖于系统对音频输入数据的优化处理策略。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用发起录音时，系统会依据应用下发的录音流类型等相关参数识别音频场景，并选择合适的策略处理输入数据。例如，当应用发起VoIP通话时，系统会对VoIP录音流进行降低噪声、增强人声等优化处理。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["一些录音流类型的音频录制仅需获取音频输入数据即可，但另一些录音流类型的音频录制则高度依赖于系统的优化处理，不当的处理可能会导致不良体验。因此，对于这类录音流类型的音频录制，在并发录音时需确保系统仍能配置适当的优化处理策略。为此，系统为这些录音流类型配置了优先级，并在原有的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/audio-kit/audio-session/audio-playback-concurrency#%E9%9F%B3%E9%A2%91%E7%84%A6%E7%82%B9%E7%AD%96%E7%95%A5",
        children: "音频焦点策略"
      }), "管控方案上增加了优先级调控方案。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["其调控原则是", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "优先采用高优先级录音流类型对应的优化策略处理音频输入数据"
        })
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "录音并发策略",
      children: "录音并发策略"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前录音并发策略整体遵循如下原则："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["在并发录音时，是否能同时获取音频输入数据取决于各录音流类型的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/audio-kit/audio-session/audio-playback-concurrency#%E9%9F%B3%E9%A2%91%E7%84%A6%E7%82%B9%E7%AD%96%E7%95%A5",
          children: "音频焦点策略"
        }), "，开发人员需确保焦点适配良好。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "音频输入数据的效果将根据系统依据当前优先级调控方案选择的优化处理策略来决定，建议开发人员在并发录音时告知用户录音数据的效果可能受到影响。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用建议",
      children: "使用建议"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当前系统通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/audio-kit/audio-session/audio-playback-concurrency#%E9%9F%B3%E9%A2%91%E7%84%A6%E7%82%B9%E7%AD%96%E7%95%A5",
        children: "音频焦点策略"
      }), "与优先级调控的双重机制，针对录音并发场景做了初步管理。尽管系统已经允许个别不同录音流类型的流实现有限并行录音，但仍需注意以下关键点："]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "录音并发的局限性",
      children: "录音并发的局限性"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "音频效果不可控：并发录音时，多条录音流的音频输入数据来自同一音频输入，可能影响音频效果。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "系统开销：并发录音可能增加系统开销。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "对开发者的建议",
      children: "对开发者的建议"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["了解", (0,jsx_runtime.jsx)(_components.a, {
            href: "/audio-kit/audio-session/audio-playback-concurrency#%E9%9F%B3%E9%A2%91%E7%84%A6%E7%82%B9%E7%AD%96%E7%95%A5",
            children: "音频焦点策略"
          }), "，做好焦点适配，及时", (0,jsx_runtime.jsx)(_components.a, {
            href: "/audio-kit/audio-session/audio-playback-concurrency#%E5%A4%84%E7%90%86%E9%9F%B3%E9%A2%91%E7%84%A6%E7%82%B9%E5%8F%98%E5%8C%96",
            children: "处理音频焦点变化"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "尽量避免并发录音场景，在应用设计时尽量避免与其他录音任务重叠。如需要，可以在界面中提示用户“当前存在其他录音任务”。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如果必须进行并发录音，建议在界面上明确告知用户音频质量可能会受到影响。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["不同的录音流类型对应着不同的系统优化处理策略，建议开发者根据需求选择合适的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-e/arkts-apis-audio-e#sourcetype8",
            children: "SourceType"
          }), "，具体可参考指南：", (0,jsx_runtime.jsx)(_components.a, {
            href: "/audio-kit/using-right-streamusage-and-sourcetype",
            children: "使用合适的音频流类型"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在没有录音需求时，应及时停止并释放录音资源，避免对其他录音流产生影响，并减少不必要的系统开销。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用实现不应过度依赖固定的录音并发规则，而应根据系统接口返回的状态进行自适应处理。"
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