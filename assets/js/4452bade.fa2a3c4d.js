"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["574685"], {
503859(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_opensles_opensles_md_445_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-opensles-opensles-md-445.json
var site_docs_ref_opensles_opensles_md_445_namespaceObject = JSON.parse('{"id":"opensles/opensles","title":"OpenSL ES","description":"HarmonyOS上的OpenSL ES接口，是早期SDK8版本开始提供，用于支持应用Native层音频开发的接口。但随着版本演进，接口定义的可扩展性不足，不再能满足音频系统的能力拓展，因此当前已不再推荐应用开发者继续使用此接口进行音频功能开发。请开发者从OpenSL ES切换到OHAudio。","source":"@site/docs-ref/opensles/opensles.md","sourceDirName":"opensles","slug":"/opensles/opensles","permalink":"/harmonyos-docs-site/ref/opensles/opensles","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"OpenSL ES","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/opensles","kit":"标准库","last_updated":"2026-04-22","slug":"opensles"},"sidebar":"ref","previous":{"title":"libuv","permalink":"/harmonyos-docs-site/ref/libuv/libuv"},"next":{"title":"OpenGL ES","permalink":"/harmonyos-docs-site/ref/opengles/opengles"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/opensles/opensles.md


const frontMatter = {
	title: 'OpenSL ES',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/opensles',
	kit: '标准库',
	last_updated: '2026-04-22',
	slug: 'opensles'
};
const contentTitle = 'OpenSL ES';

const assets = {

};



const toc = [{
  "value": "简介",
  "id": "简介",
  "level": 2
}, {
  "value": "引入OpenSL ES能力",
  "id": "引入opensl-es能力",
  "level": 2
}, {
  "value": "支持的API",
  "id": "支持的api",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
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
        id: "opensl-es",
        children: "OpenSL ES"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(185747)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["HarmonyOS上的OpenSL ES接口，是早期SDK8版本开始提供，用于支持应用Native层音频开发的接口。但随着版本演进，接口定义的可扩展性不足，不再能满足音频系统的能力拓展，因此当前已不再推荐应用开发者继续使用此接口进行音频功能开发。请开发者", (0,jsx_runtime.jsx)(_components.a, {
        href: "/audio-kit/not-recommended/replace-opensles-by-ohaudio",
        children: "从OpenSL ES切换到OHAudio"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "简介",
      children: "简介"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["OpenSL ES（Open Sound Library for Embedded System）即嵌入式音频加速标准。为开发者提供了标准化、高性能以及低响应时间的音频功能开发的对象和接口。相对于开源免费的OpenSL ES，HarmonyOS基于", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://www.khronos.org/opensles/",
        children: "OpenSL ES"
      }), " 1.0.1 API规范实现了部分Native API，相关接口开放情况如表", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E6%94%AF%E6%8C%81%E7%9A%84api",
        children: "支持的API"
      }), "所示。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "引入opensl-es能力",
      children: "引入OpenSL ES能力"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果开发者需要使用OpenSL ES相关功能，首先请添加头文件："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include <SLES/OpenSLES.h>\n#include <SLES/OpenSLES_OpenHarmony.h>\n#include <SLES/OpenSLES_Platform.h>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "其次在CMakeLists.txt中添加以下链接动态库："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "libOpenSLES.so\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "支持的api",
      children: "支持的API"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "对象"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "对外接口"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "接口调用详情"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "是否支持"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SLEngineItf"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CreateAudioPlayer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CreateAudioPlayer(SLEngineItf self, SLObjectItf *pPlayer, SLDataSource *pAudioSrc, SLDataSink *pAudioSnk, SLuint32 numInterfaces, const SLInterfaceID *pInterfaceIds, const SLboolean *pInterfaceRequired)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建音频播放机。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SLEngineItf"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CreateAudioRecorder"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CreateAudioRecorder(SLEngineItf self, SLObjectItf *pRecorder, SLDataSource *pAudioSrc, SLDataSink *pAudioSnk, SLuint32 numInterfaces, const SLInterfaceID *pInterfaceIds, const SLboolean *pInterfaceRequired)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建音频录制器。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SLEngineItf"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CreateAudioOutputMix"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CreateOutputMix(SLEngineItf self, SLObjectItf *pMix, SLuint32 numInterfaces, const SLInterfaceID *pInterfaceIds, const SLboolean *pInterfaceRequired)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建混音器。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SLObjectItf"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Realize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Realize(SLObjectItf self, SLboolean async)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建音频播放机。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SLObjectItf"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "getState"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GetState(SLObjectItf self, SLuint32 *pState)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SLObjectItf"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "getInterface"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GetInterface(SLObjectItf self, const SLInterfaceID iid, void *pInterface)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取接口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SLObjectItf"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Destroy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Destroy(SLObjectItf self)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SLOHBufferQueueItf"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enqueue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enqueue(SLOHBufferQueueItf self, const void *pBuffer, SLuint32 size)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将buffer加入实际队列中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SLOHBufferQueueItf"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "clear"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Clear(SLOHBufferQueueItf self)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "释放buffer队列"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SLOHBufferQueueItf"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "getState"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GetState(SLOHBufferQueueItf self, SLOHBufferQueueState *pState)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取BufferQueue状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SLOHBufferQueueItf"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "getBuffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GetBuffer(SLOHBufferQueueItf self, SLuint8 **buffer, SLuint32 *size)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取buffer。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SLOHBufferQueueItf"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RegisterCallback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RegisterCallback(SLOHBufferQueueItf self, SlOHBufferQueueCallback callback, void *pContext)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SLPlayItf"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SetPlayState"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SetPlayState(SLPlayItf self, SLuint32 state)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置播放状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SLPlayItf"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GetPlayState"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GetPlayState(SLPlayItf self, SLuint32 *pState)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取播放状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SLRecordItf"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SetRecordState"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SetRecordState(SLRecordItf self, SLuint32 state)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置录制状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SLRecordItf"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GetRecordState"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GetRecordState(SLRecordItf self, SLuint32 *pState)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取录制状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SLVolumeItf"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SetVolumeLevel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SetVolumeLevel(SLVolumeItf self, SLmillibel level)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置音量。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SLVolumeItf"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GetVolumeLevel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GetVolumeLevel(SLVolumeItf self, SLmillibel *pLevel)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取音量。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SLVolumeItf"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GetMaxVolumeLevel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GetMaxVolumeLevel(SLVolumeItf self, SLmillibel *pMaxLevel)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取最大音量。"
          })]
        })]
      })]
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
185747(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

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