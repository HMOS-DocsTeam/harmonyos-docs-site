"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["945701"], {
554477(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_audio_kit_not_recommended_replace_opensles_by_ohaudio_replace_opensles_by_ohaudio_md_b65_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-audio-kit-not-recommended-replace-opensles-by-ohaudio-replace-opensles-by-ohaudio-md-b65.json
var site_docs_audio_kit_not_recommended_replace_opensles_by_ohaudio_replace_opensles_by_ohaudio_md_b65_namespaceObject = JSON.parse('{"id":"audio-kit/not-recommended/replace-opensles-by-ohaudio/replace-opensles-by-ohaudio","title":"从OpenSL ES切换到OHAudio(C/C++)","description":"由于OpenSL ES无法满足音频系统的能力拓展，建议开发者使用OHAudio替代OpenSL ES开发音频业务。本文将介绍如何从使用OpenSL ES接口开发音频业务，切换为使用OHAudio接口。","source":"@site/docs/audio-kit/not-recommended/replace-opensles-by-ohaudio/replace-opensles-by-ohaudio.md","sourceDirName":"audio-kit/not-recommended/replace-opensles-by-ohaudio","slug":"/audio-kit/not-recommended/replace-opensles-by-ohaudio/","permalink":"/harmonyos-docs-site/audio-kit/not-recommended/replace-opensles-by-ohaudio/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"从OpenSL ES切换到OHAudio(C/C++)","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/replace-opensles-by-ohaudio","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"实时渲染(C/C++)","permalink":"/harmonyos-docs-site/audio-kit/audio-production-creation/audio-suite-real-time-rendering/"},"next":{"title":"使用OpenSL ES开发音频播放功能(C/C++)","permalink":"/harmonyos-docs-site/audio-kit/not-recommended/using-opensl-es-for-playback/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/audio-kit/not-recommended/replace-opensles-by-ohaudio/replace-opensles-by-ohaudio.md


const frontMatter = {
	title: '从OpenSL ES切换到OHAudio(C/C++)',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/replace-opensles-by-ohaudio',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '从OpenSL ES切换到OHAudio(C/C++)';

const assets = {

};



const toc = [{
  "value": "支持的功能差异",
  "id": "支持的功能差异",
  "level": 2
}, {
  "value": "开发模式差异",
  "id": "开发模式差异",
  "level": 2
}, {
  "value": "构造实例",
  "id": "构造实例",
  "level": 3
}, {
  "value": "状态切换",
  "id": "状态切换",
  "level": 3
}, {
  "value": "数据处理",
  "id": "数据处理",
  "level": 3
}, {
  "value": "资源释放",
  "id": "资源释放",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    p: "p",
    pre: "pre",
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
        id: "从opensl-es切换到ohaudiocc",
        children: "从OpenSL ES切换到OHAudio(C/C++)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "由于OpenSL ES无法满足音频系统的能力拓展，建议开发者使用OHAudio替代OpenSL ES开发音频业务。本文将介绍如何从使用OpenSL ES接口开发音频业务，切换为使用OHAudio接口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "支持的功能差异",
      children: "支持的功能差异"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "两者支持的功能范围略有差异，OHAudio增加支持低时延播放/录制、监听业务变化等功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "具体差异如下表所示。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "功能"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "OpenSL ES"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "OHAudio"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "音频流式播放"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "音频流式录制"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "音频低时延播放"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "×"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "音频低时延录制"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "×"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "播放对象状态切换"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "录制对象状态切换"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "获取音频流对象状态"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "清理播放缓存"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "×"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "监听音频打断事件"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "×"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "监听音频流事件"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "×"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "监听流异常事件"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "×"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "监听播放设备变化事件"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "×"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发模式差异",
      children: "开发模式差异"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此小节将结合开发步骤，对比介绍OHAudio和OpenSL ES在开发模式上的差异。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "音频播放和录制的实现类似，此处以音频播放为例说明。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "构造实例",
      children: "构造实例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "OpenSL ES:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过全局接口获取到Engine对象，基于Engine结合不同输入输出配置参数，构造出不同音频播放对象。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 生成Engine Interface对象。\nSLEngineItf engine;\n// ...\n\n// 按需配置音频输入slSource。\nSLDataSource slSource;\n// ...\n\n// 按需配置音频输出slSink。\nSLDataSink slSink;\n// ...\n\n// 生成音频播放对象。\nSLObjectItf playerObject;\n(*engine)->CreateAudioPlayer(engine,\n                             &playerObject,\n                             &slSource,\n                             &slSink,\n                             0,\n                             nullptr,\n                             nullptr);\n\n(*playerObject)->Realize(playerObject,\n                         SL_BOOLEAN_FALSE);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "OHAudio:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "采用建造器模式，通过建造器，配合自定义参数设置，生成音频播放对象。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 创建建造器。\nOH_AudioStreamBuilder *builder;\nOH_AudioStreamBuilder_Create(&builder, AUDIOSTREAM_TYPE_RENDERER);\n\n// 设置自定义参数，否则会使用默认参数。\nOH_AudioStreamBuilder_SetSamplingRate(builder, 48000);\nOH_AudioStreamBuilder_SetChannelCount(builder, 2);\nOH_AudioStreamBuilder_SetSampleFormat(builder, AUDIOSTREAM_SAMPLE_S16LE);\nOH_AudioStreamBuilder_SetEncodingType(builder, AUDIOSTREAM_ENCODING_TYPE_RAW);\n// 关键参数，仅OHAudio支持，根据音频用途设置，系统会根据此参数实现音频策略自适应。\nOH_AudioStreamBuilder_SetRendererInfo(builder, AUDIOSTREAM_USAGE_MUSIC);\n// ...\n\n// 生成音频播放对象。\nOH_AudioRenderer *audioRenderer;\nOH_AudioStreamBuilder_GenerateRenderer(builder, &audioRenderer);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "状态切换",
      children: "状态切换"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "OpenSL ES:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "基于Object获取状态切换Interface，使用Interface接口切换状态，只有SL_PLAYSTATE_STOPPED、SL_PLAYSTATE_PAUSED、SL_PLAYSTATE_PLAYING三种状态。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 基于播放对象，获取播放操作Interface。\nSLPlayItf playItf = nullptr;\n(*playerObject)->GetInterface(playerObject, SL_IID_PLAY, &playItf);\n// 状态切换。\n(*playItf)->SetPlayState(playItf, SL_PLAYSTATE_PLAYING);\n(*playItf)->SetPlayState(playItf, SL_PLAYSTATE_PAUSED);\n(*playItf)->SetPlayState(playItf, SL_PLAYSTATE_STOPPED);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "OHAudio:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "有独立的状态切换接口，基于状态机进行状态切换，共6个OH_AudioStream_State状态，主要在AUDIOSTREAM_STATE_PREPARED、AUDIOSTREAM_STATE_RUNNING、AUDIOSTREAM_STATE_STOPPED、AUDIOSTREAM_STATE_PAUSED、AUDIOSTREAM_STATE_RELEASED状态间切换。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 状态切换。\nOH_AudioRenderer_Start(audioRenderer);\nOH_AudioRenderer_Pause(audioRenderer);\nOH_AudioRenderer_Stop(audioRenderer);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "数据处理",
      children: "数据处理"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "OpenSL ES:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "基于扩展的OHBufferQueue接口，通过注册自定义的Callback函数，根据数据请求时机，将待播放数据填入系统内提供的缓冲区中。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "static void MyBufferQueueCallback(SLOHBufferQueueItf bufferQueueItf, void *pContext, SLuint32 size)\n{\n    SLuint8 *buffer = nullptr;\n    SLuint32 bufferSize;\n    // 获取系统内提供的buffer。\n    (*bufferQueueItf)->GetBuffer(bufferQueueItf, &buffer, &bufferSize);\n    // 将待播放音频数据写入buffer。\n    // ...\n    // 将buffer输入系统。\n    (*bufferQueueItf)->Enqueue(bufferQueueItf, buffer, bufferSize);\n}\n\n// 获取OHBufferQueue接口。\nSLOHBufferQueueItf bufferQueueItf;\n(*playerObject)->GetInterface(playerObject, SL_IID_OH_BUFFERQUEUE, &bufferQueueItf);\n// 可传入自定义的上下文信息，会在Callback内收到。\nvoid *pContext;\n(*bufferQueueItf)->RegisterCallback(bufferQueueItf, MyBufferQueueCallback, pContext);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "OHAudio:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "统一使用回调模式，在构造时注册数据输入回调，实现自定义的数据填充函数，在播放过程中会跟随系统调度和时延配置情况，自动在合适时机触发数据请求回调。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "static int32_t MyOnWriteData(\n    OH_AudioRenderer *renderer,\n    void *userData,\n    void *buffer,\n    int32_t bufferLen)\n{\n    // 将待播放数据按照请求的bufferLen长度，填入buffer。\n    // 函数返回后，系统会自动从buffer取出数据输出。\n}\n\nOH_AudioRenderer_Callbacks callbacks;\ncallbacks.OH_AudioRenderer_OnWriteData = MyOnWriteData;\n\n// 设置输出音频流的回调，在生成音频播放对象时自动注册。\nvoid *userData = nullptr;\nOH_AudioStreamBuilder_SetRendererCallback(builder, callbacks, userData);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "资源释放",
      children: "资源释放"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "OpenSL ES:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用SLObjectItf接口实现对象资源释放。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 释放播放对象资源。\n(*playerObject)->Destroy(playerObject);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "OHAudio:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用对应模块的释放接口实现对象资源释放。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 释放建造器资源。\nOH_AudioStreamBuilder_Destroy(builder);\n\n// 释放播放对象资源。\nOH_AudioRenderer_Release(audioRenderer);\n"
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