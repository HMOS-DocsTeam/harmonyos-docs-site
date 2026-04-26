"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["632945"], {
477678(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_audio_kit_audio_recording_audio_fast_recording_audio_fast_recording_md_c31_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-audio-kit-audio-recording-audio-fast-recording-audio-fast-recording-md-c31.json
var site_docs_audio_kit_audio_recording_audio_fast_recording_audio_fast_recording_md_c31_namespaceObject = JSON.parse('{"id":"audio-kit/audio-recording/audio-fast-recording/audio-fast-recording","title":"低时延音频录制(C/C++)","description":"从API version 10开始支持低时延音频录制。","source":"@site/docs/audio-kit/audio-recording/audio-fast-recording/audio-fast-recording.md","sourceDirName":"audio-kit/audio-recording/audio-fast-recording","slug":"/audio-kit/audio-recording/audio-fast-recording/","permalink":"/harmonyos-docs-site/audio-kit/audio-recording/audio-fast-recording/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"低时延音频录制(C/C++)","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/audio-fast-recording","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用AudioCapturer开发音频录制功能(ArkTs)","permalink":"/harmonyos-docs-site/audio-kit/audio-recording/using-audiocapturer-for-recording/"},"next":{"title":"管理麦克风静音状态","permalink":"/harmonyos-docs-site/audio-kit/audio-recording/mic-management/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/audio-kit/audio-recording/audio-fast-recording/audio-fast-recording.md


const frontMatter = {
	title: '低时延音频录制(C/C++)',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/audio-fast-recording',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '低时延音频录制(C/C++)';

const assets = {

};



const toc = [{
  "value": "使用前提",
  "id": "使用前提",
  "level": 2
}, {
  "value": "开发指导",
  "id": "开发指导",
  "level": 2
}, {
  "value": "简介",
  "id": "简介",
  "level": 3
}, {
  "value": "设置低时延模式",
  "id": "设置低时延模式",
  "level": 3
}, {
  "value": "注意事项",
  "id": "注意事项",
  "level": 2
}, {
  "value": "低时延模式限制",
  "id": "低时延模式限制",
  "level": 3
}, {
  "value": "使用低时延流的场景",
  "id": "使用低时延流的场景",
  "level": 3
}, {
  "value": "确保数据及时读入",
  "id": "确保数据及时读入",
  "level": 3
}, {
  "value": "数据回调线程",
  "id": "数据回调线程",
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
    img: "img",
    li: "li",
    p: "p",
    pre: "pre",
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
        id: "低时延音频录制cc",
        children: "低时延音频录制(C/C++)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 10开始支持低时延音频录制。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "低时延音频录制是一种通过软硬芯协同设计实现的音频渲染方案。其核心机制是通过减少buffer大小、优化读写数据架构，使该模式下音频录制具有更低的时延。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用前提",
      children: "使用前提"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "支持低时延模式的音频输入设备。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["可通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiocapturer-h/capi-native-audiocapturer-h#oh_audiocapturer_getfaststatus",
          children: "OH_AudioCapturer_GetFastStatus()"
        }), "验证当前设备是否支持低时延模式。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发指导",
      children: "开发指导"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下各步骤示例为片段代码，可通过示例代码右下方链接获取", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/openharmony/applications_app_samples/blob/master/code/DocsSample/Media/Audio/AudioCapturerSampleC",
        children: "完整示例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "简介",
      children: "简介"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为使用低时延模式，开发者需要参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/audio-kit/audio-recording/using-ohaudio-for-recording",
        children: "推荐使用OHAudio开发音频录制功能(C/C++)"
      }), "进行音频开发。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前OHAudio支持两种模式：普通模式（AUDIOSTREAM_LATENCY_MODE_NORMAL）和低时延模式（AUDIOSTREAM_LATENCY_MODE_FAST）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "设置低时延模式",
      children: "设置低时延模式"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者通过调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiostreambuilder-h/capi-native-audiostreambuilder-h#oh_audiostreambuilder_setlatencymode",
        children: "OH_AudioStreamBuilder_SetLatencyMode()"
      }), "，设置", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiostream-base-h/capi-native-audiostream-base-h#oh_audiostream_latencymode",
        children: "OH_AudioStream_LatencyMode"
      }), "来决定音频流使用的模式。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置低时延模式开发示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AudioStream_LatencyMode latencyMode = AUDIOSTREAM_LATENCY_MODE_FAST;\nOH_AudioStreamBuilder_SetLatencyMode(builder, latencyMode);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "针对OHAudio开发音频录制，有以下相关实例可供参考："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "https://gitcode.com/openharmony/applications_app_samples/tree/master/code/DocsSample/Media/Audio/OHAudio",
          children: "OHAudio录制和播放"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "注意事项",
      children: "注意事项"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "低时延模式限制",
      children: "低时延模式限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在以下场景中，即使设置了低时延模式，系统仍会使用普通模式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当前设备不支持低时延模式。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当前流格式不支持低时延模式。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "系统低时延资源已被全部占用。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当前系统中存在更高优先级流（如：VOIP通话）。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 20开始，支持低时延相关查询接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["开发者通过调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiocapturer-h/capi-native-audiocapturer-h#oh_audiocapturer_getfaststatus",
          children: "OH_AudioCapturer_GetFastStatus()"
        }), "来获取音频录制流是否正在低时延状态下工作。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["在部分特殊场景（如：存在更高优先级流、当前连接设备不支持等）下，开发者可以通过调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiocapturer-h/capi-native-audiocapturer-h#oh_audiocapturer_onfaststatuschange",
          children: "OH_AudioCapturer_OnFastStatusChange()"
        }), "来获取低时延状态改变事件。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用低时延流的场景",
      children: "使用低时延流的场景"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "k歌、直播等对时延要求较高的场景，建议使用低时延模式。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "普通录音、录像、录屏等没有实时要求的场景，不建议使用低时延模式。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "确保数据及时读入",
      children: "确保数据及时读入"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "低时延模式下，应用读取数据的频次比普通录制模式高，如果获取数据不及时可能导致杂音等问题。开发者应避免在数据回调线程中做耗时操作，确保数据回调线程可以及时返回。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "数据回调线程",
      children: "数据回调线程"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["音频录制的音频数据需要通过回调接口读入。开发者要实现回调接口，使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiostreambuilder-h/capi-native-audiostreambuilder-h#oh_audiostreambuilder_setcapturerreaddatacallback",
        children: "OH_AudioStreamBuilder_SetCapturerReadDataCallback"
      }), "设置回调函数，在设置音频回调函数时，回调函数", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiocapturer-h/capi-native-audiocapturer-h#oh_audiocapturer_onreaddatacallback",
        children: "OH_AudioCapturer_OnReadDataCallback"
      }), "（从API version 12开始支持）用于读取音频数据。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发音频录制功能的示例代码请参考：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/audio-kit/audio-recording/using-ohaudio-for-recording",
        children: "推荐使用OHAudio开发音频录制功能(C/C++)"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置数据回调函数示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t MyOnReadData_Legacy(\n    OH_AudioCapturer* capturer,\n    void* userData,\n    void* buffer,\n    int32_t length)\n{\n    // 从buffer中取出length长度的录音数据。\n    return 0;\n}\n// ...\n    // 配置读入音频数据回调函数。\n    OH_AudioCapturer_OnReadDataCallback readDataCb = MyOnReadData_NewAPI;\n    OH_AudioStreamBuilder_SetCapturerReadDataCallback(builder, readDataCb, nullptr);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "为避免音频卡顿，禁止在回调方法OH_AudioCapturer_OnReadData中执行耗时操作。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "为保证OH_AudioCapturer_OnReadData与流状态控制逻辑独立正常运行，禁止在OH_AudioCapturer_OnReadData回调方法中调用音频流控制接口。"
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "音频流控制接口"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "说明"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "OH_AudioStream_Result OH_AudioCapturer_Start(OH_AudioCapturer* capturer)"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "开始录制。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "OH_AudioStream_Result OH_AudioCapturer_Pause(OH_AudioCapturer* capturer)"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "暂停录制。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "OH_AudioStream_Result OH_AudioCapturer_Stop(OH_AudioCapturer* capturer)"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "停止录制。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "OH_AudioStream_Result OH_AudioCapturer_Flush(OH_AudioCapturer* capturer)"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "释放缓存数据。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "OH_AudioStream_Result OH_AudioCapturer_Release(OH_AudioCapturer* capturer)"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "释放录制实例。"
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(920955)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "音频流控制接口执行会有耗时（例如OH_AudioCapturer_Stop接口单次执行普遍超过50ms），应避免在主线程中直接调用，以免造成界面显示卡顿。"
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
920955(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

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