"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["296283"], {
661413(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_media_kit_media_kit_intro_media_kit_intro_md_397_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-media-kit-media-kit-intro-media-kit-intro-md-397.json
var site_docs_media_kit_media_kit_intro_media_kit_intro_md_397_namespaceObject = JSON.parse('{"id":"media-kit/media-kit-intro/media-kit-intro","title":"Media Kit简介","description":"Media Kit（媒体服务）用于开发音视频播放或录制的各类功能。在Media Kit的开发指导中，将详细介绍音视频多个模块的开发方式，指导开发者如何使用系统提供的音视频API实现对应功能。比如使用SoundPool实现简单的提示音，当设备接收到新消息时，会发出短促的“滴滴”声；使用AVPlayer实现音乐播放器，循环播放一首音乐。","source":"@site/docs/media-kit/media-kit-intro/media-kit-intro.md","sourceDirName":"media-kit/media-kit-intro","slug":"/media-kit/media-kit-intro/","permalink":"/harmonyos-docs-site/media-kit/media-kit-intro/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Media Kit简介","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/media-kit-intro","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"图片接收","permalink":"/harmonyos-docs-site/image-kit/image-native-js-objects/image-receiver-native/"},"next":{"title":"使用AVPlayer播放音频(ArkTS)","permalink":"/harmonyos-docs-site/media-kit/media-kit-dev--arkts/media-playback-arkts/using-avplayer-for-playback/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/media-kit/media-kit-intro/media-kit-intro.md


const frontMatter = {
	title: 'Media Kit简介',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/media-kit-intro',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = 'Media Kit简介';

const assets = {

};



const toc = [{
  "value": "亮点/特征",
  "id": "亮点特征",
  "level": 2
}, {
  "value": "开发说明",
  "id": "开发说明",
  "level": 2
}, {
  "value": "AVPlayer",
  "id": "avplayer",
  "level": 2
}, {
  "value": "音频播放",
  "id": "音频播放",
  "level": 3
}, {
  "value": "视频播放",
  "id": "视频播放",
  "level": 3
}, {
  "value": "支持的格式与协议",
  "id": "支持的格式与协议",
  "level": 3
}, {
  "value": "SoundPool",
  "id": "soundpool",
  "level": 2
}, {
  "value": "支持的格式与协议",
  "id": "支持的格式与协议-1",
  "level": 3
}, {
  "value": "AVRecorder",
  "id": "avrecorder",
  "level": 2
}, {
  "value": "支持的格式",
  "id": "支持的格式",
  "level": 3
}, {
  "value": "AVScreenCapture",
  "id": "avscreencapture",
  "level": 2
}, {
  "value": "支持的格式",
  "id": "支持的格式-1",
  "level": 3
}, {
  "value": "AVMetadataExtractor",
  "id": "avmetadataextractor",
  "level": 2
}, {
  "value": "支持的格式",
  "id": "支持的格式-2",
  "level": 3
}, {
  "value": "AVImageGenerator",
  "id": "avimagegenerator",
  "level": 2
}, {
  "value": "支持的格式",
  "id": "支持的格式-3",
  "level": 3
}, {
  "value": "AVTranscoder",
  "id": "avtranscoder",
  "level": 2
}, {
  "value": "支持的格式",
  "id": "支持的格式-4",
  "level": 3
}, {
  "value": "模拟器支持情况",
  "id": "模拟器支持情况",
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
    ol: "ol",
    p: "p",
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
        id: "media-kit简介",
        children: "Media Kit简介"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Media Kit（媒体服务）用于开发音视频播放或录制的各类功能。在Media Kit的开发指导中，将详细介绍音视频多个模块的开发方式，指导开发者如何使用系统提供的音视频API实现对应功能。比如使用SoundPool实现简单的提示音，当设备接收到新消息时，会发出短促的“滴滴”声；使用AVPlayer实现音乐播放器，循环播放一首音乐。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Media Kit提供的模块有："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "#avplayer",
          children: "AVPlayer"
        }), "：播放音视频"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "#soundpool",
          children: "SoundPool"
        }), "：播放短音频"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "#avrecorder",
          children: "AVRecorder"
        }), "：录制音视频"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "#avscreencapture",
          children: "AVScreenCapture"
        }), "：录制屏幕"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "#avmetadataextractor",
          children: "AVMetadataExtractor"
        }), "：获取音视频元数据"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "#avimagegenerator",
          children: "AVImageGenerator"
        }), "：获取视频缩略图"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "#avtranscoder",
          children: "AVTranscoder"
        }), "：视频转码"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "亮点特征",
      children: "亮点/特征"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用轻量媒体引擎"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用较少的系统资源（线程、内存），可支持音视频播放/录制，支持pipeline灵活拼装，支持插件化扩展source/demuxer/codec。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "支持HDR视频"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "系统数据结构与接口支持hdr vivid的采集与播放，方便三方应用在业务中使用系统的HDR能力，为用户带来更炫彩的体验。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "支持音频池"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "针对开发中常用的短促音效播放场景，如相机快门音效、系统通知音效等，应用可调用SoundPool，实现一次加载，多次低时延播放。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发说明",
      children: "开发说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本开发指导仅针对音视频播放或录制本身，由media模块提供相关能力，不涉及UI界面、图形处理、媒体存储或其他相关领域功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在开发音乐、视频播放功能之前，建议了解流媒体播放的相关概念包括但不限于："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "播放过程：网络协议 > 容器格式 > 音视频编解码 > 图形/音频渲染"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "网络协议：比如HLS、HTTP-FLV、HTTP/HTTPS"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "容器格式：比如mp4、mkv、mpeg-ts"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "编码格式：比如h264/h265"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["详细流媒体开发流程请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/media-kit/media-kit-dev--arkts/media-playback-arkts/streaming-media-playback-development-guide",
        children: "流媒体播放开发指导"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "avplayer",
      children: "AVPlayer"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AVPlayer主要工作是将Audio/Video媒体资源（比如mp4/mp3/mkv/mpeg-ts等）转码为可供渲染的图像和可听见的音频模拟信号，并通过输出设备进行播放。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AVPlayer提供功能完善一体化播放能力，应用只需要提供流媒体来源，不负责数据解析和解码就可达成播放效果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "音频播放",
      children: "音频播放"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当使用AVPlayer开发音乐应用播放音频时，AVPlayer与外部模块的交互关系如图所示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(800413)/* ["default"] */.A) + "",
        width: "1246",
        height: "785"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "音乐类应用通过调用JS接口层提供的AVPlayer接口实现相应功能时，框架层会通过播放服务（Player Framework）将资源解析成音频数据流（PCM），音频数据流经过软件解码后输出至音频服务（Audio Framework），由音频服务输出至音频驱动渲染，实现音频播放功能。完整的音频播放需要应用、Player Framework、Audio Framework、音频HDI共同实现。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "上图中，数字标注表示需要数据与外部模块的传递。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "音乐应用将媒体资源传递给AVPlayer接口。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Player Framework将音频PCM数据流输出给Audio Framework，再由Audio Framework输出给音频HDI。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "视频播放",
      children: "视频播放"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当使用AVPlayer开发视频应用播放视频时，AVPlayer与外部模块的交互关系如图所示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(724966)/* ["default"] */.A) + "",
        width: "1469",
        height: "787"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用通过调用JS接口层提供的AVPlayer接口实现相应功能时，框架层会通过播放服务（Player Framework）解析成单独的音频数据流和视频数据流，音频数据流经过软件解码后输出至音频服务（Audio Framework），再至硬件接口层的音频HDI，实现音频播放功能。视频数据流经过硬件（推荐）/软件解码后输出至图形渲染服务（Graphic Framework），再输出至硬件接口层的显示HDI，完成图形渲染。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "完整的视频播放需要：应用、XComponent、Player Framework、Graphic Framework、Audio Framework、显示HDI和音频HDI共同实现。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "图中的数字标注表示需要数据与外部模块的传递。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["应用从XComponent组件获取窗口SurfaceID，获取方式参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/rendering-drawing/ts-basic-components-xcomponent/ts-basic-components-xcomponent",
          children: "XComponent"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用把媒体资源、SurfaceID传递给AVPlayer接口。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Player Framework把视频ES数据流输出给解码HDI，解码获得视频帧（NV12/NV21/RGBA）。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Player Framework把音频PCM数据流输出给Audio Framework，Audio Framework输出给音频HDI。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Player Framework把视频帧（NV12/NV21/RGBA）输出给Graphic Framework，Graphic Framework输出给显示HDI。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "支持的格式与协议",
      children: "支持的格式与协议"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "推荐使用以下主流的播放格式，音视频容器、音视频编码属于内容创作者所掌握的专业领域，不建议应用开发者自制码流进行测试，以免产生无法播放、卡顿、花屏等兼容性问题。若发生此类问题不会影响系统，退出播放即可。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "支持的协议如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "协议类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "协议描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "本地点播"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "协议格式：支持file descriptor，禁止file path"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "网络点播"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "协议格式：支持http/https/hls/dash"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "网络直播"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "协议格式：支持hls/http-flv"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "支持的音频播放格式如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "音频容器规格"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "规格描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "m4a"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "音频格式：AAC"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "aac"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "音频格式：AAC"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "mp3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "音频格式：MP3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ogg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "音频格式：VORBIS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "wav"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "音频格式：PCM"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "flac"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "音频格式：FLAC"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "amr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "音频格式：AMR"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ape"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "音频格式：APE"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "支持的视频播放格式和主流分辨率如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "视频容器规格"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "规格描述"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "分辨率"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "mp4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "视频格式：H26510+/H264  音频格式：AAC/MP3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "主流分辨率，如4K/1080P/720P/480P/270P"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "mkv"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "视频格式：H26510+/H264  音频格式：AAC/MP3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "主流分辨率，如4K/1080P/720P/480P/270P"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "视频格式：H26510+/H264  音频格式：AAC/MP3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "主流分辨率，如4K/1080P/720P/480P/270P"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "支持的字幕格式如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "字幕容器规格"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "支持的协议"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "支持的加载方式"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "srt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "本地点播（fd）/网络点播（http/https/hls/dash）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "外挂字幕"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "vtt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "本地点播（fd）/网络点播（http/https/hls/dash）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "外挂字幕"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "webvtt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "网络点播（dash协议）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "内置字幕"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(359393)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当dash协议存在内置字幕时，不支持添加外挂字幕。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "soundpool",
      children: "SoundPool"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SoundPool主要工作是将音频媒体资源（比如mp3/m4a/wav等）转码为音频模拟信号，并通过输出设备进行播放。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SoundPool提供短音频的播放能力，应用只需要提供音频资源来源，不负责数据解析和解码就可达成播放效果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当使用SoundPool开发应用播放音频时，SoundPool与外部模块的交互关系如图所示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(258846)/* ["default"] */.A) + "",
        width: "1469",
        height: "787"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "音乐类应用通过调用JS接口层提供的SoundPool接口实现相应功能时，框架层会通过播放服务（Player Framework）将资源解析成音频数据流（PCM），音频数据流经过软件解码后输出至音频服务（Audio Framework），由音频服务输出至音频驱动渲染，实现音频播放功能。完整的音频播放需要应用、Player Framework、Audio Framework、音频HDI共同实现。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "图中的数字标注表示需要数据与外部模块的传递。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "音乐应用将媒体资源传递给SoundPool接口。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Player Framework将音频PCM数据流输出给Audio Framework，再由Audio Framework输出给音频HDI。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "支持的格式与协议-1",
      children: "支持的格式与协议"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "推荐使用以下主流的播放格式，音视频容器、音频编码属于内容创作者所掌握的专业领域，不建议应用开发者自制码流进行测试，以免产生无法播放、卡顿等兼容性问题。若发生此类问题不会影响系统，退出播放即可。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "支持的协议如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "协议类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "协议描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "本地点播"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "协议格式：支持file descriptor，禁止file path"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "支持的音频播放格式如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "音频容器规格"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "规格描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "m4a"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "音频格式：AAC"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "aac"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "音频格式：AAC"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "mp3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "音频格式：MP3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ogg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "音频格式：VORBIS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "wav"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "音频格式：PCM"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "avrecorder",
      children: "AVRecorder"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AVRecorder主要工作是捕获音频信号，接收视频信号，完成音视频编码并保存到文件中，帮助开发者轻松实现音视频录制功能，包括开始录制、暂停录制、恢复录制、停止录制、释放资源等功能控制。它允许调用者指定录制的编码格式、封装格式、文件路径等参数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当使用AVRecorder开发应用录制视频时，AVRecorder与外部模块的交互关系如图所示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(742641)/* ["default"] */.A) + "",
        width: "1542",
        height: "771"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "音频录制：应用通过调用JS接口层提供的AVRecorder接口实现音频录制时，框架层会通过录制服务（Player Framework），调用音频服务（Audio Framework）通过音频HDI捕获音频数据，通过软件编码封装后保存至文件中，实现音频录制功能。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "视频录制：应用通过调用JS接口层提供的AVRecorder接口实现视频录制时，先通过Camera接口调用相机服务（Camera Framework）通过视频HDI捕获图像数据送至框架层的录制服务，录制服务将图像数据通过视频编码HDI编码，再将编码后的图像数据封装至文件中，实现视频录制功能。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过音视频录制组合，可分别实现纯音频录制、纯视频录制、音视频录制。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "图中的数字标注表示需要数据与外部模块的传递。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用通过AVRecorder接口从录制服务获取SurfaceID。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用将SurfaceID设置给相机服务，相机服务可以通过SurfaceID获取到Surface。相机服务通过视频HDI捕获图像数据送至框架层的录制服务。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "相机服务通过Surface将视频数据传递给录制服务。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "录制服务通过视频编码HDI模块将视频数据编码。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "录制服务将音频参数设置给音频服务，并从音频服务获取到音频数据。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "支持的格式",
      children: "支持的格式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "支持的音频源如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "音频源类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "mic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "系统麦克风作为音频源输入。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "支持的视频源如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "视频源类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "surface_yuv"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入surface中携带的是raw data。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "surface_es"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入surface中携带的是ES data。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "支持的音视频编码格式如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "音视频编码格式"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "audio/mp4a-latm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "音频/mp4a-latm类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "video/hevc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "视频/hevc类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "video/avc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "视频/avc类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "audio/mpeg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "音频/mpeg类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "audio/g711mu"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "音频/g711-mulaw类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "audio/3gpp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "音频/amr-nb类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "audio/amr-wb"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "音频/amr-wb类型。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "支持的输出文件格式如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "输出文件格式"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "mp4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "视频的容器格式，MP4。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "m4a"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "音频的容器格式，M4A。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "mp3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "音频的容器格式，MP3。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "wav"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "音频的容器格式，WAV。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "amr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "音频的容器格式，AMR。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "avscreencapture",
      children: "AVScreenCapture"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AVScreenCapture主要工作是捕获音频信号、视频信号，并通过音视频编码将屏幕信息保存到文件中，帮助开发者轻松实现屏幕录制功能，主要包括录屏存文件和录屏取码流两套接口，它允许调用者指定屏幕录制的编码格式、封装格式和文件路径等参数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当使用AVScreenCapture开发应用录制屏幕时，AVScreenCapture与外部模块的交互关系如图所示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(279721)/* ["default"] */.A) + "",
        width: "1469",
        height: "787"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "音频录制：应用通过调用JS/Native接口层提供的AVScreenCapture接口实现音频录制时，框架层会通过录屏框架，调用音频服务（Audio Framework）通过音频捕获音频数据，通过软件编码封装后保存至文件中，实现音频录制功能。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "屏幕录制：应用通过调用JS/Native接口层提供的AVScreenCapture接口实现屏幕录制时，框架层会通过录屏框架，调用图形图像服务通过视频捕获屏幕数据，通过软件编码封装后保存至文件中，实现屏幕录制功能。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "支持的格式-1",
      children: "支持的格式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "支持的音频源如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "音频源类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MIC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "系统麦克风作为音频源输入。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ALL_PLAYBACK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "系统内录使用作为音频源输入。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "支持的视频源如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "视频源类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SURFACE_RGBA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输出Buffer是rgba data。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "支持的音频编码格式如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "音频编码格式"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AAC_LC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AAC_LC类型。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "支持的视频编码格式如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "视频编码格式"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "H264"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "H264类型。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "支持的输出文件格式如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "输出文件格式"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "mp4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "视频的容器格式，MP4。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "m4a"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "纯音频的容器格式，M4A。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "avmetadataextractor",
      children: "AVMetadataExtractor"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AVMetadataExtractor 主要用于获取音视频元数据。通过使用 AVMetadataExtractor，开发者可以从原始媒体资源中提取出丰富的元数据信息。以音频资源为例，我们可以获取到关于该音频的标题、艺术家、专辑名称、时长等详细信息。视频资源的元数据获取流程与音频类似，由于视频没有专辑封面，所以无法获取视频资源的专辑封面。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取音频资源的元数据的全流程包含：创建AVMetadataExtractor，设置资源，获取元数据，获取专辑封面（可选），销毁资源。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "支持的格式-2",
      children: "支持的格式"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["支持的音视频源参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/avcodec-kit/file-muxing-demuxing/audio-video-demuxer",
        children: "媒体数据解析"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "avimagegenerator",
      children: "AVImageGenerator"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AVImageGenerator 主要用于获取视频缩略图。通过使用 AVImageGenerator，开发者可以实现从原始媒体资源中获取视频指定时间的视频帧。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "支持的格式-3",
      children: "支持的格式"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["支持的视频源参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/avcodec-kit/audio-video-codec/video-decoding",
        children: "视频解码"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "avtranscoder",
      children: "AVTranscoder"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AVTranscoder主要用于将已压缩编码的视频文件按照指定参数转换为另一种格式的视频。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "支持的格式-4",
      children: "支持的格式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前版本AVTranscoder提供以下转码服务："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "支持修改源视频文件的编码参数（格式、码率）和封装格式。源视频的音视频编码和封装格式为系统AVCodec支持的解码和解封装格式，目标视频的音视频编码和封装格式为系统AVCodec支持的编码和封装格式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "支持将HDR VIVID/HLG/HDR10视频转换为SDR视频，以及SDR视频的转码。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "支持转码时降低视频分辨率。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "原视频分辨率不高于4K，且目标视频分辨率不低于240p。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["目标视频宽、高不能大于源视频宽、高，且不能设置为奇数，详情请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/avcodec-kit/audio-video-codec/obtain-supported-codecs#%E8%AE%BE%E7%BD%AE%E6%AD%A3%E7%A1%AE%E7%9A%84%E8%A7%86%E9%A2%91%E5%AE%BD%E9%AB%98",
            children: "设置正确的视频宽高"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "支持的源视频格式："
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["当前转码支持的源视频格式依赖于系统解码器和解封装支持的格式，详细情况请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/avcodec-kit/avcodec-support-formats#%E5%AA%92%E4%BD%93%E6%95%B0%E6%8D%AE%E8%A7%A3%E6%9E%90",
            children: "AVCodec支持的格式"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "支持的目标视频格式："
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "封装格式"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "视频编码类型"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "音频编码类型"
              })]
            })
          }), (0,jsx_runtime.jsx)(_components.tbody, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "mp4"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "AVC（H.264）、HEVC（H.265）"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "AAC"
              })]
            })
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "支持的轨道数："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "不支持字幕轨。若原视频存在字幕轨，转码后字幕轨将被丢弃。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "仅支持输出一条视频轨。若原视频存在多条视频轨，默认选择第一条视频轨进行转码。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "仅支持输出一条音频轨。若原视频存在多条音频轨，默认选择第一条音频轨进行转码。"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "模拟器支持情况",
      children: "模拟器支持情况"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本Kit支持模拟器，但与真机存在部分能力差异，具体差异如下。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["通用差异：请参见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ide-run-emulator/ide-emulator-overview/ide-emulator-specification#section18112195514315",
          children: "模拟器与真机的差异"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "模拟器仅支持播放h264文件格式、RGBA像素格式的视频文件。"
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
279721(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478595-24991f20e6049fc1254b0ecea13f6e28.png");

},
742641(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958594-b06c9047d1b26f86e16ee6a7bab73c81.png");

},
258846(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438639-568ba1513b69a4ebfa27adc5c7d7b564.png");

},
359393(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
724966(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798944-bc25d686618814052636de269e902060.png");

},
800413(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478593-4f495f350b2560dd89cf8bc65b5e4bd0.png");

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