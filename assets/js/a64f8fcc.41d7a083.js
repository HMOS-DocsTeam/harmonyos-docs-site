"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["380041"], {
747478(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_audio_kit_not_recommended_using_opensl_es_for_recording_using_opensl_es_for_recording_md_a64_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-audio-kit-not-recommended-using-opensl-es-for-recording-using-opensl-es-for-recording-md-a64.json
var site_docs_audio_kit_not_recommended_using_opensl_es_for_recording_using_opensl_es_for_recording_md_a64_namespaceObject = JSON.parse('{"id":"audio-kit/not-recommended/using-opensl-es-for-recording/using-opensl-es-for-recording","title":"使用OpenSL ES开发音频录制功能(C/C++)","description":"OpenSL ES全称为Open Sound Library for Embedded Systems，是一个嵌入式、跨平台、免费的音频处理库。为嵌入式移动多媒体设备上的应用开发者提供标准化、高性能、低延迟的API。HarmonyOS的Native API基于Khronos Group开发的OpenSL ES 1.0.1 API 规范实现，开发者可以通过&lt;OpenSLES.h&gt;和&lt;OpenSLES\\\\_OpenHarmony.h&gt;在HarmonyOS上使用相关API。","source":"@site/docs/audio-kit/not-recommended/using-opensl-es-for-recording/using-opensl-es-for-recording.md","sourceDirName":"audio-kit/not-recommended/using-opensl-es-for-recording","slug":"/audio-kit/not-recommended/using-opensl-es-for-recording/","permalink":"/harmonyos-docs-site/audio-kit/not-recommended/using-opensl-es-for-recording/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"使用OpenSL ES开发音频录制功能(C/C++)","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/using-opensl-es-for-recording","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用OpenSL ES开发音频播放功能(C/C++)","permalink":"/harmonyos-docs-site/audio-kit/not-recommended/using-opensl-es-for-playback/"},"next":{"title":"AVCodec Kit简介","permalink":"/harmonyos-docs-site/avcodec-kit/avcodec-kit-intro/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/audio-kit/not-recommended/using-opensl-es-for-recording/using-opensl-es-for-recording.md


const frontMatter = {
	title: '使用OpenSL ES开发音频录制功能(C/C++)',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/using-opensl-es-for-recording',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '使用OpenSL ES开发音频录制功能(C/C++)';

const assets = {

};



const toc = [{
  "value": "使用OHAudio替代OpenSL ES",
  "id": "使用ohaudio替代opensl-es",
  "level": 2
}, {
  "value": "HarmonyOS上的OpenSL ES",
  "id": "harmonyos上的opensl-es",
  "level": 2
}, {
  "value": "完整示例",
  "id": "完整示例",
  "level": 2
}, {
  "value": "在 CMake 脚本中链接动态库",
  "id": "在-cmake-脚本中链接动态库",
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
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
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
        id: "使用opensl-es开发音频录制功能cc",
        children: "使用OpenSL ES开发音频录制功能(C/C++)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["OpenSL ES全称为Open Sound Library for Embedded Systems，是一个嵌入式、跨平台、免费的音频处理库。为嵌入式移动多媒体设备上的应用开发者提供标准化、高性能、低延迟的API。HarmonyOS的Native API基于", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://www.khronos.org/",
        children: "Khronos Group"
      }), "开发的", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://www.khronos.org/opensles/",
        children: "OpenSL ES"
      }), " 1.0.1 API 规范实现，开发者可以通过<OpenSLES.h>和<OpenSLES_OpenHarmony.h>在HarmonyOS上使用相关API。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用ohaudio替代opensl-es",
      children: "使用OHAudio替代OpenSL ES"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HarmonyOS上的OpenSL ES接口，是早期SDK8版本开始提供，用于支持应用Native层音频开发的接口。但随着版本演进，接口定义的可扩展性不足，不再能满足音频系统的能力拓展，因此当前已不再推荐应用开发者继续使用此接口进行音频功能开发，会存在一些接口能力不足的缺陷。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在SDK10版本，HarmonyOS推出了OHAudio接口，并将系统具备的所有音频功能都通过此接口开放。OHAudio接口已能够覆盖OpenSL ES在HarmonyOS中已提供的所有能力，并拓展支持音频焦点事件，低时延等新版本特性。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["OHAudio的开发指南请参考：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/audio-kit/audio-recording/using-ohaudio-for-recording",
        children: "推荐使用OHAudio开发音频录制功能(C/C++)"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["考虑到一些接入HarmonyOS较早的应用开发者，这里提供了一份OpenSL ES接口切换到OHAudio的对照参考：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/audio-kit/not-recommended/replace-opensles-by-ohaudio",
        children: "从OpenSL ES切换到OHAudio(C/C++)"
      }), "，便于开发者能够更快的在新版本切换到使用新接口。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "harmonyos上的opensl-es",
      children: "HarmonyOS上的OpenSL ES"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["OpenSL ES中提供了以下的接口，HarmonyOS当前仅实现了部分", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/openharmony/third_party_opensles/blob/master/api/1.0.1/OpenSLES.h",
        children: "接口"
      }), "，可以实现音频录制的基础功能。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["调用未实现接口后会返回", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "SL_RESULT_FEATURE_UNSUPPORTED"
        })
      }), "，当前没有相关扩展可以使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下列表列举了HarmonyOS上已实现的OpenSL ES的接口，具体说明请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://www.khronos.org/opensles/",
        children: "OpenSL ES"
      }), "规范："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "HarmonyOS上支持的SLInterfaceID："
            })
          })
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "SLInterfaceID"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "说明"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "SL_IID_ENGINE"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "通用引擎，提供创建录音对象接口。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "SL_IID_RECORD"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "提供录音状态接口。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "SL_IID_OH_BUFFERQUEUE"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "提供音频录制流数据回调注册接口。"
              })]
            })]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "HarmonyOS上支持的Engine接口："
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "SLresult (*CreateAudioPlayer) (SLEngineItf self, SLObjectItf * pPlayer, SLDataSource *pAudioSrc, SLDataSink *pAudioSnk, SLuint32 numInterfaces, const SLInterfaceID * pInterfaceIds, const SLboolean * pInterfaceRequired)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "SLresult (*CreateAudioRecorder) (SLEngineItf self, SLObjectItf * pRecorder, SLDataSource *pAudioSrc, SLDataSink *pAudioSnk, SLuint32 numInterfaces, const SLInterfaceID * pInterfaceIds, const SLboolean * pInterfaceRequired)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "SLresult (*CreateOutputMix) (SLEngineItf self, SLObjectItf * pMix, SLuint32 numInterfaces, const SLInterfaceID * pInterfaceIds, const SLboolean * pInterfaceRequired)"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "HarmonyOS上支持的Object接口："
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "SLresult (*Realize) (SLObjectItf self, SLboolean async)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "SLresult (*GetState) (SLObjectItf self, SLuint32 * pState)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "SLresult (*GetInterface) (SLObjectItf self, const SLInterfaceID iid, void * pInterface)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "void (*Destroy) (SLObjectItf self)"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "HarmonyOS上支持的Recorder接口："
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "SLresult (*SetRecordState) (SLRecordItf self, SLuint32 state)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "SLresult (*GetRecordState) (SLRecordItf self,SLuint32 *pState)"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "HarmonyOS上支持的BufferQueue接口："
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "以下接口需引入<OpenSLES_OpenHarmony.h>使用。"
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "接口"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "说明"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "SLresult (*Enqueue) (SLOHBufferQueueItf self, const void *buffer, SLuint32 size)"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "根据情况将buffer加到相应队列中。  如果是播放操作，则将带有音频数据的buffer插入到filledBufferQ_队列中；如果是录音操作，则将录音使用后的空闲buffer插入到freeBufferQ_队列中。  self：表示调用该函数的BufferQueue接口对象。  buffer：播放时表示带有音频数据的buffer，录音时表示已存储完录音数据后的空闲buffer。  size：表示buffer的大小。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "SLresult (*Clear) (SLOHBufferQueueItf self)"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "释放BufferQueue接口对象。  self：表示调用该函数的BufferQueue接口对象将被释放。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "SLresult (*GetState) (SLOHBufferQueueItf self, SLOHBufferQueueState *state)"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "获取BufferQueue接口对象状态。  self：表示调用该函数的BufferQueue接口对象。  state：BufferQueue的当前状态。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "SLresult (*RegisterCallback) (SLOHBufferQueueItf self, SlOHBufferQueueCallback callback, void* pContext)"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "注册回调函数。  self：表示调用该函数的BufferQueue接口对象。  callback：播放/录音时注册的回调函数。  pContext：播放时传入待播放音频文件，录音时传入将要录制的音频文件。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "SLresult (*GetBuffer) (SLOHBufferQueueItf self, SLuint8** buffer, SLuint32* size)"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "根据情况获取相应的buffer。  如果是播放操作，则从freeBufferQ_队列中获取空闲buffer；如果是录音操作，则从filledBufferQ_队列中获取携带录音数据的buffer。  self：表示调用该函数的BufferQueue接口对象。  buffer：播放时表示空闲的buffer，录音时表示携带录音数据的buffer。  size：表示buffer的大小。"
              })]
            })]
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "完整示例",
      children: "完整示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "在-cmake-脚本中链接动态库",
      children: "在 CMake 脚本中链接动态库"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "target_link_libraries(sample PUBLIC libOpenSLES.so)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参考下列示例代码，完成音频录制。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "添加头文件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include \"SLES/OpenSLES.h\"\n#include \"SLES/OpenSLES_OpenHarmony.h\"\n#include \"SLES/OpenSLES_Platform.h\"\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用slCreateEngine接口创建引擎对象和实例化引擎对象engine。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "SLObjectItf engineObject = nullptr;\nslCreateEngine(&engineObject, 0, nullptr, 0, nullptr, nullptr);\n(*engineObject)->Realize(engineObject, SL_BOOLEAN_FALSE);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取接口SL_IID_ENGINE的引擎接口engineEngine实例。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "SLEngineItf engineItf = nullptr;\n(*engineObject)->GetInterface(engineObject, SL_IID_ENGINE, &engineItf);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "配置录音器信息（配置输入源audiosource、输出源audiosink），创建录音对象pcmCapturerObject。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "SLDataLocator_IODevice io_device = {\n    SL_DATALOCATOR_IODEVICE,\n    SL_IODEVICE_AUDIOINPUT,\n    SL_DEFAULTDEVICEID_AUDIOINPUT,\n    NULL\n};\nSLDataSource audioSource = {\n    &io_device,\n    NULL\n};\nSLDataLocator_BufferQueue buffer_queue = {\n    SL_DATALOCATOR_BUFFERQUEUE,\n    3\n};\n// 具体参数需要根据音频文件格式进行适配。\nSLDataFormat_PCM format_pcm = {\n    SL_DATAFORMAT_PCM,           // 输入的音频格式。\n    1,                           // 单声道。\n    SL_SAMPLINGRATE_44_1,        // 采样率: 44100HZ。\n    SL_PCMSAMPLEFORMAT_FIXED_16, // 音频采样格式, 小端, 带符号的16位整数。\n    16,\n    SL_SPEAKER_FRONT_LEFT,\n    SL_BYTEORDER_LITTLEENDIAN\n};\nSLDataSink audioSink = {\n    &buffer_queue,\n    &format_pcm\n};\n\nSLObjectItf pcmCapturerObject = nullptr;\n(*engineItf)->CreateAudioRecorder(engineItf, &pcmCapturerObject,\n    &audioSource, &audioSink, 0, nullptr, nullptr);\n(*pcmCapturerObject)->Realize(pcmCapturerObject, SL_BOOLEAN_FALSE);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取录音接口SL_IID_RECORD的recordItf接口实例。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "SLRecordItf  recordItf;\n(*pcmCapturerObject)->GetInterface(pcmCapturerObject, SL_IID_RECORD, &recordItf);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取接口SL_IID_OH_BUFFERQUEUE的bufferQueueItf实例。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "SLOHBufferQueueItf bufferQueueItf;\n(*pcmCapturerObject)->GetInterface(pcmCapturerObject, SL_IID_OH_BUFFERQUEUE, &bufferQueueItf);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "注册BufferQueueCallback回调。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "static void BufferQueueCallback(SLOHBufferQueueItf bufferQueueItf, void *pContext, SLuint32 size)\n{\n    // 可从pContext获取注册时传入的使用者信息。\n    SLuint8 *buffer = nullptr;\n    SLuint32 pSize = 0;\n    (*bufferQueueItf)->GetBuffer(bufferQueueItf, &buffer, &pSize);\n    if (buffer != nullptr) {\n        // 可从buffer内读取录音数据进行后续处理。\n        (*bufferQueueItf)->Enqueue(bufferQueueItf, buffer, size);\n    }\n}\nvoid *pContext; // 可传入自定义的上下文信息，会在Callback内收到。\n(*bufferQueueItf)->RegisterCallback(bufferQueueItf, BufferQueueCallback, pContext);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "开始录音。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "(*recordItf)->SetRecordState(recordItf, SL_RECORDSTATE_RECORDING);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "结束音频录制。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "(*recordItf)->SetRecordState(recordItf, SL_RECORDSTATE_STOPPED);\n(*pcmCapturerObject)->Destroy(pcmCapturerObject);\n(*engineObject)->Destroy(engineObject);\n"
          })
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