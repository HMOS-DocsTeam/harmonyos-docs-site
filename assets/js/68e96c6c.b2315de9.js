"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["432444"], {
182114(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_audio_kit_audio_kit_intro_audio_kit_intro_md_68e_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-audio-kit-audio-kit-intro-audio-kit-intro-md-68e.json
var site_docs_audio_kit_audio_kit_intro_audio_kit_intro_md_68e_namespaceObject = JSON.parse('{"id":"audio-kit/audio-kit-intro/audio-kit-intro","title":"Audio Kit简介","description":"Audio Kit（音频服务）旨在提供场景化的音频播放和录制接口，助力开发者迅速构建音频高清采集及沉浸式播放能力。","source":"@site/docs/audio-kit/audio-kit-intro/audio-kit-intro.md","sourceDirName":"audio-kit/audio-kit-intro","slug":"/audio-kit/audio-kit-intro/","permalink":"/harmonyos-docs-site/audio-kit/audio-kit-intro/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Audio Kit简介","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/audio-kit-intro","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用HDR Vivid特性开发媒体应用","permalink":"/harmonyos-docs-site/multimedia-hdr-vivid/"},"next":{"title":"使用合适的音频流类型","permalink":"/harmonyos-docs-site/audio-kit/using-right-streamusage-and-sourcetype/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/audio-kit/audio-kit-intro/audio-kit-intro.md


const frontMatter = {
	title: 'Audio Kit简介',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/audio-kit-intro',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = 'Audio Kit简介';

const assets = {

};



const toc = [{
  "value": "亮点/特征",
  "id": "亮点特征",
  "level": 2
}, {
  "value": "音频架构",
  "id": "音频架构",
  "level": 2
}, {
  "value": "开发说明",
  "id": "开发说明",
  "level": 2
}, {
  "value": "音频流介绍",
  "id": "音频流介绍",
  "level": 2
}, {
  "value": "音频流使用场景信息",
  "id": "音频流使用场景信息",
  "level": 3
}, {
  "value": "支持的音频格式",
  "id": "支持的音频格式",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    img: "img",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "audio-kit简介",
        children: "Audio Kit简介"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Audio Kit（音频服务）旨在提供场景化的音频播放和录制接口，助力开发者迅速构建音频高清采集及沉浸式播放能力。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "亮点特征",
      children: "亮点/特征"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "低时延播放"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "提供统一音频低时延/非低时延播放能力接口，通过垂直打通硬件，达成最低的音频输出时延。在游戏、提示/告警音、K歌等场景下，可以通过低时延接口，实现音频快速流畅播放。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "音效模式"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "提供系统音效模式设置，应用可以按需开/关系统音效，确保最佳音效输出体验。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "系统默认为音乐、听书、影院等不同场景进行相应音效处理，但应用内部自身也存在一些定制化音效，为确保最终音效不产生冲突，系统提供音效模式配置开关，允许应用按需开/关系统音效。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "音振协同"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "提供音振协同能力接口，实现音频及振动流的低时延同步控制。达成在输入法中开启音频和振动效果，打字输入时音振协同、节奏一致，来电铃声和振动同时响起，铃音和振动节奏同步一致的体验。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "音频架构",
      children: "音频架构"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者可以利用Audio Kit的接口，使用音频系统提供的播放、录音及音频策略管理能力，进而访问相应的音频硬件。音频架构定义了系统如何封装和管理音频硬件能力。音频架构图如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(422405)/* ["default"] */.A) + "",
        width: "492",
        height: "796"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Application"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用开发者通过Audio Kit提供的公开API接口，利用音频系统提供的软硬件能力，实现应用所需的播放和录音功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Napi"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过NAPI，一种Node.js推出的用于开发C++模块的接口，封装了操作系统底层能力并对外提供ArkTS接口。通过NAPI可实现ArkTS与C/C++代码互相访问。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Native framework"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在Native框架层，音频系统实现了播放、录音、音量控制、设备路由和音效处理等接口的框架实现，通过跨进程接口连接音频服务。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Native SystemAbility"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "音频服务进程audio_server承载了软件实现的音频系统功能组件，提供了丰富的音频策略管理和数据处理能力。组件通过HDI接口与HAL层连接，从而使用音频硬件能力。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "HAL"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HAL通过统一的HDI接口对外提供服务，不同的音频硬件开发人员实现HDI接口，使得音频服务可以通过不同类型的音频设备进行播放和录音。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Kernel"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "内核驱动程序负责与音频硬件交互，针对不同规模的操作系统，可以选择多种内核，如Linux、LiteOS、HarmonyOS内核等。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发说明",
      children: "开发说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在每个功能中，会介绍多种实现方式以应对不同的使用场景，以及该场景相关的子功能点。比如在音频播放功能内，会同时介绍音频的并发策略、音量管理和输出设备等在操作系统中的处理方式，帮助开发者能够开发出功能覆盖更全面的应用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本开发指导仅针对音频播放或录制本身，Audio Kit提供相关能力，不涉及UI界面、图形处理、媒体存储或其他相关领域功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在开发音频功能之前，尤其是要实现处理音频数据的功能前，建议开发者先了解声学相关的知识，帮助理解操作系统提供的API是如何控制音频系统，从而开发出更易用、体验更好的音视频类应用。建议了解的相关概念包括但不限于："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "音频量化的过程：采样 > 量化 > 编码。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "音频量化过程的相关概念：模拟信号和数字信号、采样率、声道、采样格式、位宽、码率、常见编码格式（如AAC、MP3、PCM、WMA等）、常见封装格式（如WAV、MPA、FLAC、AAC、OGG等）。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "音频流介绍",
      children: "音频流介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在开发音频应用之前，还需要了解什么是音频流，它是HarmonyOS音频系统中的关键概念，在之后的章节中会多次提及。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "音频流，是指音频系统中一个具备音频格式和音频使用场景信息的独立音频数据处理单元。可以表示播放，也可以表示录制，并且具备独立音量调节和音频设备路由切换能力。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["音频流基础信息通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-i/arkts-apis-audio-i#audiostreaminfo8",
        children: "AudioStreamInfo"
      }), "表示，包含采样、声道、位宽、编码信息，是创建音频播放或录制流的必要参数，描述了音频数据的基本属性。在配置时开发者需要保证基础信息与传输的音频数据相匹配，音频系统才能正确处理数据。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "音频流使用场景信息",
      children: "音频流使用场景信息"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "除了基本属性，音频流还需要具备使用场景信息。基础信息只能对音频数据进行描述，但在实际的使用过程中，不同的音频流，在音量大小、设备路由、并发策略上是有区别的。系统就是通过音频流所附带的使用场景信息，为不同的音频流制定合适的处理策略，以达到更好的音频用户体验。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "播放场景"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["音频播放场景的信息，通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-e/arkts-apis-audio-e#streamusage",
            children: "StreamUsage"
          }), "进行描述。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "StreamUsage指音频流本身的用途类型，包括媒体、语音通信、语音播报、通知、铃声等。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "录制场景"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["音频流录制场景的信息，通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-e/arkts-apis-audio-e#sourcetype8",
            children: "SourceType"
          }), "进行描述。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "SourceType指音频流中录音源的类型，包括麦克风音频源、语音识别音频源、语音通话音频源等。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/audio-kit/using-right-streamusage-and-sourcetype",
        children: "使用合适的音频流类型"
      }), "进行设置。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "支持的音频格式",
      children: "支持的音频格式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "audio模块下的接口支持PCM编码，包括AudioRenderer、AudioCapturer、TonePlayer、OpenSL ES等。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "音频格式说明："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["支持的音频采样率（Hz）：8000、11025、12000、16000、22050、24000、32000、44100、48000、64000、8820012+、96000，17640012+、19200012+具体参考枚举", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-e/arkts-apis-audio-e#audiosamplingrate8",
            children: "AudioSamplingRate"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "不同设备支持的采样率规格会存在差异。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["支持单声道、双声道，具体参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-e/arkts-apis-audio-e#audiochannel8",
            children: "AudioChannel"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["支持的采样格式：U8（无符号8位整数）、S16LE（带符号的16位整数，小尾数）、S24LE（带符号的24位整数，小尾数）、S32LE（带符号的32位整数，小尾数）、F32LE（带符号的32位浮点数，小尾数），具体参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-e/arkts-apis-audio-e#audiosampleformat8",
            children: "AudioSampleFormat"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "由于系统限制，S24LE、S32LE、F32LE仅部分设备支持，请根据实际情况使用。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "小尾数指的是小端模式，即数据的高字节保存在内存的高地址中，而数据的低字节保存在内存的低地址中。这种存储模式将地址的高低和数据的位权有效结合起来，高地址部分权值高，低地址部分权值低。"
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
422405(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478527-f3128b9647b13642520e7d54c793b989.png");

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