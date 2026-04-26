"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["282641"], {
378306(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_multimedia_development_overview_multimedia_development_overview_md_398_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-multimedia-development-overview-multimedia-development-overview-md-398.json
var site_docs_multimedia_development_overview_multimedia_development_overview_md_398_namespaceObject = JSON.parse('{"id":"multimedia-development-overview/multimedia-development-overview","title":"媒体开发概览","description":"HarmonyOS提供丰富的一站式媒体业务开放能力，开发者能够在系统上快速开发主流的媒体业务，满足常规高频使用场景，并提供优秀的性能表现。","source":"@site/docs/multimedia-development-overview/multimedia-development-overview.md","sourceDirName":"multimedia-development-overview","slug":"/multimedia-development-overview/","permalink":"/harmonyos-docs-site/multimedia-development-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"媒体开发概览","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/multimedia-development-overview","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"二进制签名工具","permalink":"/harmonyos-docs-site/system-debug-optimize/debugging-commands/binary-sign-tool/"},"next":{"title":"使用HDR Vivid特性开发媒体应用","permalink":"/harmonyos-docs-site/multimedia-hdr-vivid/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/multimedia-development-overview/multimedia-development-overview.md


const frontMatter = {
	title: '媒体开发概览',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/multimedia-development-overview',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '媒体开发概览';

const assets = {

};



const toc = [{
  "value": "媒体系统架构",
  "id": "媒体系统架构",
  "level": 2
}, {
  "value": "媒体应用开发综述",
  "id": "媒体应用开发综述",
  "level": 2
}, {
  "value": "相机预览",
  "id": "相机预览",
  "level": 3
}, {
  "value": "相机拍照",
  "id": "相机拍照",
  "level": 3
}, {
  "value": "视频播放",
  "id": "视频播放",
  "level": 3
}, {
  "value": "视频录制",
  "id": "视频录制",
  "level": 3
}, {
  "value": "视频投播",
  "id": "视频投播",
  "level": 3
}, {
  "value": "音频播放",
  "id": "音频播放",
  "level": 3
}, {
  "value": "音频采集",
  "id": "音频采集",
  "level": 3
}, {
  "value": "音频录制",
  "id": "音频录制",
  "level": 3
}, {
  "value": "媒体资源的选择和保存",
  "id": "媒体资源的选择和保存",
  "level": 3
}, {
  "value": "隐私安全",
  "id": "隐私安全",
  "level": 3
}, {
  "value": "更多资源",
  "id": "更多资源",
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
        id: "媒体开发概览",
        children: "媒体开发概览"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HarmonyOS提供丰富的一站式媒体业务开放能力，开发者能够在系统上快速开发主流的媒体业务，满足常规高频使用场景，并提供优秀的性能表现。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "媒体系统架构",
      children: "媒体系统架构"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(960652)/* ["default"] */.A) + "",
        width: "800",
        height: "546"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "媒体系统架构提供用户视觉、听觉信息的处理能力，例如音视频信息的采集、编码存储、解码播放等。操作系统实现中，根据不同的媒体信息处理内容，将媒体划分为不同的模块，包括音频、视频、图片等。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "媒体系统面向应用开发提供音视频应用、图库应用、相机应用的编程框架接口；面向设备开发提供对接不同硬件芯片的适配加速功能；中间以服务形式提供媒体核心功能和管理机制。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "音频服务（Audio Kit）：提供场景化音频播放和录制接口，助力开发者快速构建音频高清采集及沉浸式播放能力。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "音视频编解码服务（AVCodec Kit）：提供音视频编解码、媒体文件解析、封装及媒体数据输入等原子能力。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "音视频播控服务（AVSession Kit）：提供系统级音视频管控服务，统一管理系统中所有音视频行为。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "相机服务（Camera Kit）：提供场景化相机控制管理接口，实现预览图像显示、拍照图片保存及视频录制功能。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "数字版权保护服务（DRM Kit）：提供DRM加密音视频解密，支持设备DRM证书管理、许可证管理及内容解密功能。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "图片处理服务（Image Kit）：提供全面图片处理能力，帮助开发者实现图片的解码、编码、编辑、元数据处理和图片接收等功能。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "媒体服务（Media Kit）：提供端到端播放原始媒体资源，音视频录制与屏幕录制，获取媒体资源元数据、缩略图，视频转码等功能。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "媒体文件管理服务（Media Library Kit）：提供管理相册和媒体文件的能力，包括照片和视频。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "铃声服务（Ringtone Kit）：提供铃声设置功能，为用户提供简单一致、安全高品质的铃声设置体验。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "统一扫码服务（Scan Kit）：提供系统级的扫码服务。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "媒体应用开发综述",
      children: "媒体应用开发综述"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "相机预览",
      children: "相机预览"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "相机预览是启动相机后实时的图像显示，通常在拍照和录像前执行。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "指南"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/camera-kit/camera-dev-arkts/camera-preview",
          children: "预览(ArkTS)"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/camera-kit/camera-dev-arkts/camera-dual-channel-preview",
          children: "双路预览(ArkTS)"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/camera-kit/camera-dev-arkts/camera-framerate",
          children: "动态调整预览帧率(ArkTS)"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/camera-kit/camera-dev-arkts/camera-rotation/camera-rotation-angle-adaptation",
          children: "适配相机旋转角度(ArkTS)"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/camera-kit/camera-dev-native/native-camera-preview",
          children: "预览(C/C++)"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/camera-kit/camera-dev-native/native-camera-preview-imagereceiver",
          children: "预览流二次处理(C/C++)"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/camera-kit/camera-dev-native/camera-setframerate-native",
          children: "动态调整预览帧率(C/C++)"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/camera-kit/camera-dev-native/camera-rotation-native/camera-rotation-angle-adaptation-native",
          children: "适配相机旋转角度(C/C++)"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "API参考"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["ArkTS API：", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/camera-api/camera-arkts/js-apis-camera/js-apis-camera",
          children: "camera"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["C API：", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/camera-api/camera-c/camera-module/capi-oh-camera/capi-oh-camera",
          children: "OH_Camera"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "最佳实践"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-deal-stride-solution",
          children: "相机预览花屏解决方案"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "相机拍照",
      children: "相机拍照"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "拍照是相机的最重要功能之一，Camera Kit提供多种拍照方式，开发者可以直接拉起系统相机拍照、采用系统预配置简化应用开发流程，或是根据开放接口开发一个专业的相机应用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "指南"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/camera-kit/camera-dev-arkts/camera-picker",
          children: "通过系统相机拍照和录像(CameraPicker)"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/camera-kit/camera-dev-arkts/camera-shooting",
          children: "拍照(ArkTS)"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/camera-kit/camera-dev-arkts/camera-deferred-capture",
          children: "分段式拍照(ArkTS)"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/camera-kit/camera-dev-arkts/camera-moving-photo",
          children: "动态照片拍摄(ArkTS)"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/camera-kit/camera-dev-arkts/camera-preconfig",
          children: "使用相机预配置(ArkTS)"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/camera-kit/camera-dev-arkts/camera-hdr-shooting",
          children: "HDR Vivid相机拍照(ArkTS)"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/camera-kit/camera-dev-arkts/camera-rotation/camera-rotation-angle-adaptation",
          children: "适配相机旋转角度(ArkTS)"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/camera-kit/camera-dev-native/native-camera-shooting",
          children: "拍照(C/C++)"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/camera-kit/camera-dev-native/native-camera-deferred-capture",
          children: "分段式拍照(C/C++)"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/camera-kit/camera-dev-native/camera-preconfig-native",
          children: "使用相机预配置(C/C++)"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/camera-kit/camera-dev-native/camera-rotation-native/camera-rotation-angle-adaptation-native",
          children: "适配相机旋转角度(C/C++)"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "API参考"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["ArkTS API：", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/camera-api/camera-arkts/js-apis-camera/js-apis-camera",
          children: "camera"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["ArkTS组件：", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/camera-api/camera-arkts/js-apis-camerapicker/js-apis-camerapicker",
          children: "cameraPicker"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["C API：", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/camera-api/camera-c/camera-module/capi-oh-camera/capi-oh-camera",
          children: "OH_Camera"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "最佳实践"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-camera-shot2see",
          children: "相机分段式拍照性能优化实践"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例代码"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://gitcode.com/HarmonyOS_Samples/camera-picker",
          children: "基于系统相机实现拍照功能"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://gitcode.com/HarmonyOS_Samples/camera",
          children: "实现相机数据采集保存功能"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://gitcode.com/HarmonyOS_Samples/camera-data-collection",
          children: "实现相机数据采集保存功能（C++）"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "视频播放",
      children: "视频播放"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AVPlayer提供功能齐全的一体化播放能力，支持多种音视频格式和流媒体协议。应用使用AVPlayer不仅可以实现基础的播放控制，还可以通过外挂字幕、画中画、自定义UI控件、内容版权保护等功能，为用户提供优良的影音体验。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "指南"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/media-kit/media-kit-intro#avplayer",
          children: "AVPlayer简介（含支持的格式与协议）"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/media-kit/media-kit-dev--arkts/media-playback-arkts/video-playback",
          children: "使用AVPlayer播放视频(ArkTS)"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/media-kit/media-kit-dev--arkts/media-playback-arkts/playback-url-setting-method",
          children: "使用AVPlayer设置播放URL(ArkTS)"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/media-kit/media-kit-dev--arkts/media-playback-arkts/streaming-media-playback-development-guide",
          children: "使用AVPlayer播放流媒体(ArkTS)"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/media-kit/media-kit-dev--arkts/media-playback-arkts/video-subtitle",
          children: "使用AVPlayer添加视频外挂字幕(ArkTS)"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/media-kit/media-kit-dev--c/media-playback-c/using-ndk-avplayer-for-video-playback",
          children: "使用AVPlayer播放视频(C/C++)"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/avcodec-kit/audio-video-codec/hdr-vivid-capability/hdr-vivid-video-player",
          children: "HDR Vivid视频播放"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/background-task-kit/continuous-task",
          children: "接入Background Tasks Kit长时任务实现后台播放"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/avsession-kit/local-avsession/avsession-access-scene",
          children: "应用接入AVSession"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/playback-control-access-selfcheck",
          children: "应用接入播控自检"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/drm-kit/drm-avplayer-arkts-integration",
          children: "基于AVPlayer播放DRM节目(ArkTS)"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/media-transcoder-arkts",
          children: "视频转码(ArkTS)"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/window-pipwindow",
          children: "在应用程序中使用画中画功能"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "API参考"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["ArkTS API：", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/media-api/media-arkts/js-apis-media/arkts-apis-media-avplayer/arkts-apis-media-avplayer",
          children: "AVPlayer"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["C API：", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/media-api/media-c/media-module/capi-avplayer/capi-avplayer",
          children: "AVPlayer"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "最佳实践"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-online-video-playback-lags-practice",
          children: "在线视频播放卡顿优化实践"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-audio-video-synchronization",
          children: "音画同步最佳实践"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-video-thumbnail",
          children: "基于系统能力获取视频缩略图"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例代码"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://gitcode.com/HarmonyOS_Samples/video-play",
          children: "实现视频播放功能"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://gitcode.com/HarmonyOS_Samples/video-cache",
          children: "实现视频边缓存边播放功能"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://gitcode.com/HarmonyOS_Samples/video-player",
          children: "实现视频流畅播放且支持后台与焦点打断功能"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://gitcode.com/HarmonyOS_Samples/VideoThumbnail",
          children: "基于系统能力获取视频缩略图"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://gitcode.com/HarmonyOS_Samples/SmoothSwitchShortVideos",
          children: "实现流畅切换短视频"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://gitcode.com/HarmonyOS_Samples/AudioToVideoSync",
          children: "实现音画同步播放效果"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设计体验"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/design-guides/broadcasting-control-0000001957017133",
          children: "播控中心"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/design-guides/pip-0000001927422624",
          children: "画中画"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "视频录制",
      children: "视频录制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AVRecorder提供音视频录制的能力，AVScreenCapture提供屏幕录制的能力，支持多源输入，可灵活配置录制参数，帮助开发者轻松实现音视频录制功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "指南"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/media-kit/media-kit-intro#avrecorder",
          children: "AVRecorder简介（含支持的格式）"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/media-kit/media-kit-dev--arkts/media-recording-arkts/video-recording",
          children: "使用AVRecorder录制视频(ArkTS)"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/media-kit/media-kit-intro#avscreencapture",
          children: "AVScreenCapture简介（含支持的格式）"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/media-kit/media-kit-dev--arkts/media-recording-arkts/using-avscreencapture-arkts",
          children: "使用AVScreenCaptureRecorder录屏写文件(ArkTS)"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/using-avscreencapture-for-buffer",
          children: "使用AVScreenCapture录屏取码流(C/C++)"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/media-kit/media-kit-dev--c/media-recording-c/using-avscreencapture-for-file",
          children: "使用AVScreenCapture录屏写文件(C/C++)"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/camera-kit/camera-dev-arkts/camera-hdr-recording",
          children: "HDR Vivid相机录像"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/avcodec-kit/audio-video-codec/hdr-vivid-capability/hdr-vivid-video-recorder",
          children: "HDR Vivid视频录制"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/camera-kit/camera-dev-arkts/camera-recording",
          children: "使用Camera Kit录像(ArkTS)"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "API参考"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["ArkTS API：", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/media-api/media-arkts/js-apis-media/arkts-apis-media-avrecorder/arkts-apis-media-avrecorder",
          children: "AVRecorder"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["C API：", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/media-api/media-c/media-module/capi-avrecorder/capi-avrecorder",
          children: "AVRecorder"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["ArkTS API：", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/media-api/media-arkts/js-apis-media/arkts-apis-media-avscreencapturerecorder/arkts-apis-media-avscreencapturerecorder",
          children: "AVScreenCaptureRecorder"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["C API：", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/media-api/media-c/media-module/capi-avscreencapture/capi-avscreencapture",
          children: "AVScreenCapture"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例代码"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://gitcode.com/HarmonyOS_Samples/camera-kit-avrecorder",
          children: "基于CameraKit通过AVRecorder录像"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "视频投播",
      children: "视频投播"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用媒体播控，可以简单高效地将音视频投放到其他HarmonyOS设备上播放，如在手机上播放的音视频，可以投到2in1设备上继续播放。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "指南"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/avsession-kit/distributed-avsession/using-switch-call-devices",
          children: "使用通话设备切换组件"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/avsession-kit/distributed-avsession/distributed-playback/distributed-playback-guide",
          children: "投播组件开发指导"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/avsession-kit/distributed-avsession/distributed-playback/avsession-extended-screen",
          children: "扩展屏投播开发指导"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "API参考"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["ArkTS API：", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/avsession-api/avsession-arkts/js-apis-avsession/js-apis-avsession",
          children: "avsession"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["ArkTS组件：", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/avsession-api/avsession-comp/ohos-multimedia-avcastpicker/ohos-multimedia-avcastpicker",
          children: "AVCastPicker"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例代码"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://gitcode.com/HarmonyOS_Samples/VideoCast",
          children: "实现视频投播功能"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "音频播放",
      children: "音频播放"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者可以使用AVPlayer播放媒体资源，如mp4/mp3/mkv/mpeg-ts等，也可以使用AudioRenderer播放PCM音频数据。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "AVPlayer指南"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/media-kit/media-kit-dev--arkts/media-playback-arkts/using-avplayer-for-playback",
          children: "使用AVPlayer播放音频(ArkTS)"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/media-kit/media-kit-dev--arkts/media-playback-arkts/playback-url-setting-method",
          children: "使用AVPlayer设置播放URL(ArkTS)"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/media-kit/media-kit-dev--arkts/media-playback-arkts/streaming-media-playback-development-guide",
          children: "使用AVPlayer播放流媒体(ArkTS)"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/media-kit/media-kit-dev--arkts/media-playback-arkts/using-soundpool-for-playback",
          children: "使用SoundPool播放短音频(ArkTS)"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/media-kit/media-kit-dev--c/media-playback-c/using-ndk-avplayer-for-playback",
          children: "使用AVPlayer播放音频(C/C++)"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "AVPlayer API参考"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["ArkTS API：", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/media-api/media-arkts/js-apis-media/arkts-apis-media-avplayer/arkts-apis-media-avplayer",
          children: "AVPlayer"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["C API：", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/media-api/media-c/media-module/capi-avplayer/capi-avplayer",
          children: "AVPlayer"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "AudioRenderer指南"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/audio-kit/audio-playback/using-audiorenderer-for-playback",
          children: "使用AudioRenderer开发音频播放功能"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/audio-kit/audio-device/audio-output-device-change",
          children: "响应音频流输出设备变更"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/audio-kit/audio-playback/using-ohaudio-for-playback",
          children: "使用OHAudio开发音频播放功能(C/C++)"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/audio-kit/audio-playback/using-audiohaptic-for-playback",
          children: "使用AudioHaptic开发音振协同播放功能"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "AudioRenderer API参考"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["ArkTS API：", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-audiorenderer/arkts-apis-audio-audiorenderer",
          children: "AudioRenderer"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["ArkTS API：", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/audio-api/audio-arkts/js-apis-audiohaptic/js-apis-audiohaptic",
          children: "audioHaptic"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["C API：", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/audio-api/audio-c/audio-module/capi-ohaudio/capi-ohaudio",
          children: "OHAudio"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "通用指南"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/background-task-kit/continuous-task",
          children: "接入Background Tasks Kit长时任务实现后台播放"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/avsession-kit/local-avsession/avsession-access-scene",
          children: "应用接入AVSession"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/playback-control-access-selfcheck",
          children: "应用接入播控自检"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/audio-kit/using-right-streamusage-and-sourcetype",
          children: "使用合适的音频流类型"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/audio-kit/audio-session/audio-playback-concurrency",
          children: "音频焦点和音频会话介绍"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/audio-kit/audio-session/audio-session-management",
          children: "使用AudioSession管理应用音频焦点(ArkTS)"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/audio-kit/audio-session/using-ohaudio-for-session",
          children: "使用AudioSession管理应用音频焦点(C/C++)"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "最佳实践"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-audio-focus-management",
          children: "音频焦点管理解决方案"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-music-card",
          children: "音乐服务卡片"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例代码"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://gitcode.com/HarmonyOS_Samples/media-provider",
          children: "实现音频应用作为媒体会话提供方接入媒体会话"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://gitcode.com/HarmonyOS_Samples/audio-native",
          children: "实现音频低时延录制与播放"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://gitcode.com/HarmonyOS_Samples/audio-interaction",
          children: "基于AudioRenderer的音频播控和多场景交互"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设计体验"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/design-guides/broadcasting-control-0000001957017133",
          children: "播控中心"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "音频采集",
      children: "音频采集"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AudioCapture提供了音频采集能力，为开发者提供PCM原始数据。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "指南"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/audio-kit/audio-recording/using-audiocapturer-for-recording",
          children: "使用AudioCapturer开发音频录制功能"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/audio-kit/audio-recording/using-ohaudio-for-recording",
          children: "使用OHAudio开发音频录制功能(C/C++)"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "API参考"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["ArkTS API：", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-audiocapturer/arkts-apis-audio-audiocapturer",
          children: "AudioCapturer"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["C API：", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/audio-api/audio-c/audio-module/capi-ohaudio/capi-ohaudio",
          children: "OHAudio"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例代码"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://gitcode.com/HarmonyOS_Samples/audio-native",
          children: "实现音频低时延录制与播放"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://gitcode.com/HarmonyOS_Samples/audio-interaction",
          children: "基于AudioRenderer的音频播控和多场景交互"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "音频录制",
      children: "音频录制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AVRecorder提供音频录制的能力，帮助开发者录制纯音频文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "指南"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/media-kit/media-kit-dev--arkts/media-recording-arkts/using-avrecorder-for-recording",
          children: "使用AVRecorder录制音频(ArkTS)"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "API参考"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["ArkTS API：", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/media-api/media-arkts/js-apis-media/arkts-apis-media-avrecorder/arkts-apis-media-avrecorder",
          children: "AVRecorder"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["C API：", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/media-api/media-c/media-module/capi-avrecorder/capi-avrecorder",
          children: "AVRecorder"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "媒体资源的选择和保存",
      children: "媒体资源的选择和保存"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "指南"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/medialibrary-kit/photoaccesshelper-photoviewpicker",
          children: "使用Picker选择媒体库资源"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/medialibrary-kit/component-guidelines-photoviewpicker",
          children: "使用PhotoPicker组件访问图片/视频"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/medialibrary-kit/photoaccesshelper-savebutton",
          children: "保存媒体库资源"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "API参考"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["ArkTS API：", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/js-apis-photoaccesshelper",
          children: "photoAccessHelper"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["ArkTS组件：", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/media-library-api/media-library-comp/ohos-file-albumpickercomponent/ohos-file-albumpickercomponent",
          children: "AlbumPickerComponent"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["ArkTS组件：", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/media-library-api/media-library-comp/ohos-file-photopickercomponent/ohos-file-photopickercomponent",
          children: "PhotoPickerComponent"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["ArkTS组件：", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/media-library-api/media-library-comp/ohos-file-recentphotocomponent/ohos-file-recentphotocomponent",
          children: "RecentPhotoComponent"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "最佳实践"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-image_get_and_save",
          children: "图片获取与保存实践"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例代码"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://gitcode.com/HarmonyOS_Samples/ImageGetAndSave",
          children: "实现图片获取与保存功能"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://gitcode.com/HarmonyOS_Samples/SmartPhotoPicker",
          children: "基于PhotoPicker实现图片推荐功能"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "隐私安全",
      children: "隐私安全"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在进行媒体应用开发过程中，应用需要访问个人数据（如用户照片、视频、音频文件等）和设备数据（如相机、麦克风等）。这些资源受系统保护，使用时需通过Picker或申请相关权限。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "访问个人数据"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/medialibrary-kit/photoaccesshelper-photoviewpicker",
          children: "使用Picker选择媒体库资源"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/medialibrary-kit/photoaccesshelper-savebutton",
          children: "保存资源到媒体库"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/core-file-kit/user-files/select-save-user-file/select-user-file#%E9%80%89%E6%8B%A9%E9%9F%B3%E9%A2%91%E7%B1%BB%E6%96%87%E4%BB%B6",
          children: "选择音频类文件"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/core-file-kit/user-files/select-save-user-file/save-user-file#%E4%BF%9D%E5%AD%98%E9%9F%B3%E9%A2%91%E7%B1%BB%E6%96%87%E4%BB%B6",
          children: "保存音频类文件"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用需要克隆、备份或同步图片/视频类文件时，可", (0,jsx_runtime.jsx)(_components.a, {
        href: "/medialibrary-kit/restricted-open-capabilities/photoaccesshelper-preparation#%E7%94%B3%E8%AF%B7%E7%9B%B8%E5%86%8C%E7%AE%A1%E7%90%86%E6%A8%A1%E5%9D%97%E5%8A%9F%E8%83%BD%E7%9B%B8%E5%85%B3%E6%9D%83%E9%99%90",
        children: "申请受限权限读写媒体库"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "访问设备数据"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["麦克风权限ohos.permission.MICROPHONE、相机权限ohos.permission.CAMERA、媒体地理位置信息权限ohos.permission.MEDIA_LOCATION，均为用户授权权限，申请方式见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/request-user-authorization",
        children: "向用户申请授权"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "更多资源",
      children: "更多资源"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Audio Kit"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "分类"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "资源链接"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "音频焦点"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["- 开发指南：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/audio-kit/using-right-streamusage-and-sourcetype",
              children: "使用合适的音频流类型"
            }), "  - 开发指南：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/audio-kit/audio-session/audio-playback-concurrency",
              children: "音频焦点和音频会话"
            }), "  - ArkTS API参考：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-audiosessionmanager/arkts-apis-audio-audiosessionmanager",
              children: "AudioSession"
            }), "  - ArkTS API参考：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-e/arkts-apis-audio-e#streamusage",
              children: "StreamUsage"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "音频通话"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["- 开发指南：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/audio-kit/audio-call/audio-call-development#%E4%BD%BF%E7%94%A8audiorenderer%E6%92%AD%E6%94%BE%E5%AF%B9%E7%AB%AF%E7%9A%84%E9%80%9A%E8%AF%9D%E5%A3%B0%E9%9F%B3",
              children: "使用AudioRenderer播放对端的通话声音"
            }), "  - 开发指南：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/audio-kit/audio-call/audio-call-development#%E4%BD%BF%E7%94%A8audiocapturer%E5%BD%95%E5%88%B6%E6%9C%AC%E7%AB%AF%E7%9A%84%E9%80%9A%E8%AF%9D%E5%A3%B0%E9%9F%B3",
              children: "使用AudioCapturer录制本端的通话声音"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "更多"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/audio-kit",
              children: "Audio Kit开发指南"
            }), "  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-api",
              children: "Audio Kit API参考"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "AVCodec Kit"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "分类"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "资源链接"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "音频编解码"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["- 开发指南：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/avcodec-kit/audio-video-codec/audio-encoding",
              children: "音频编码"
            }), "  - 开发指南：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/avcodec-kit/audio-video-codec/audio-decoding",
              children: "音频解码"
            }), "  - 示例代码：", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://gitcode.com/HarmonyOS_Samples/AVCodecVideo/blob/master/entry/src/main/cpp/capbilities/AudioEncoder.cpp",
              children: "AudioEncoder（音频编码）"
            }), "  - 示例代码：", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://gitcode.com/HarmonyOS_Samples/AVCodecVideo/blob/master/entry/src/main/cpp/capbilities/AudioDecoder.cpp",
              children: "AudioDecoder（音频解码）"
            }), "  - C API参考：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-audiocodec-h/capi-native-avcodec-audiocodec-h",
              children: "AudioCodec（音频编解码）"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "视频编解码"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["- 开发指南：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/avcodec-kit/audio-video-codec/video-encoding",
              children: "视频编码"
            }), "  - 示例代码：", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://gitcode.com/openharmony/applications_app_samples/blob/master/code/BasicFeature/Media/AVCodec/entry/src/main/cpp/capbilities/video_encoder.cpp",
              children: "VideoEncoder（视频编码）"
            }), "  - C API参考：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-videoencoder-h/capi-native-avcodec-videoencoder-h",
              children: "VideoEncoder（视频编码）"
            }), "  - 开发指南：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/avcodec-kit/audio-video-codec/video-decoding",
              children: "视频解码"
            }), "  - 示例代码：", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://gitcode.com/openharmony/applications_app_samples/blob/master/code/BasicFeature/Media/AVCodec/entry/src/main/cpp/capbilities/video_decoder.cpp",
              children: "VideoDecoder（视频解码）"
            }), "  - C API参考：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-videodecoder-h/capi-native-avcodec-videodecoder-h",
              children: "VideoDecoder（视频解码）"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "更多"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/avcodec-kit",
              children: "AVCodec Kit开发指南"
            }), "  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-api",
              children: "AVCodec Kit API参考"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "AVSession Kit"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "分类"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "资源链接"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "本地媒体会话"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["- ArkTS API参考：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avsession-api/avsession-arkts/js-apis-avsession/js-apis-avsession",
              children: "媒体会话管理"
            }), "  - 开发指南：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/avsession-kit/local-avsession/avsession-access-scene",
              children: "应用接入AVSession场景介绍"
            }), "  - 示例代码：", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://gitcode.com/HarmonyOS_Samples/media-provider",
              children: "基于AVPlayer实现播放接入"
            }), "  - 示例代码：", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://gitcode.com/HarmonyOS_Samples/audio-interaction",
              children: "基于AudioRenderer实现播放接入"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "更多"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/avsession-kit",
              children: "AVSession Kit开发指南"
            }), "  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avsession-api/avsession-api",
              children: "AVSession Kit API参考"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Camera Kit"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "分类"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "资源链接"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "视频录制"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["- ArkTS API参考：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/camera-api/camera-arkts/js-apis-camera/js-apis-camera",
              children: "Camera API(相机管理)"
            }), "  - 开发指南：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/camera-kit/camera-dev-arkts/camera-recording",
              children: "录像(ArkTS)"
            }), "  - 开发指南：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/camera-kit/camera-dev-native/native-camera-recording",
              children: "录像(C/C++)"
            }), "  - 示例实现：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/camera-kit/camera-dev-arkts/camera-recording-case",
              children: "录像实践(ArkTS)"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "安全相机"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["- ArkTS API参考：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-securesession/arkts-apis-camera-securesession",
              children: "SecureSession"
            }), "  - 开发指南：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/camera-kit/camera-dev-arkts/camera-secure-photo",
              children: "安全相机(ArkTS)"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "更多"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/camera-kit",
              children: "Camera Kit开发指南"
            }), "  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/camera-api/camera-api",
              children: "Camera Kit API参考"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "DRM Kit"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "分类"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "资源链接"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AVPlayer播放DRM节目"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["- ArkTS API参考：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/drm-api/drm-arkts/js-apis-drm/js-apis-drm",
              children: "DRM"
            }), "  - 开发指南：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/drm-kit/drm-arkts-dev-guide",
              children: "数字版权保护(ArkTS)"
            }), "  - 示例实现：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/drm-kit/drm-avplayer-arkts-integration",
              children: "基于AVPlayer播放DRM节目(ArkTS)"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AVCodec播放DRM节目"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["- C API参考：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/drm-api/drm-c/drm-module/capi-drm/capi-drm",
              children: "数字版权保护API(C/C++)"
            }), "  - 开发指南：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/drm-kit/drm-c-dev-guide",
              children: "数字版权保护(C/C++)"
            }), "  - 示例实现：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/drm-kit/drm-avcodec-integration",
              children: "基于AVCodec播放DRM节目(C/C++)"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "更多"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/drm-kit",
              children: "DRM Kit开发指南"
            }), "  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/drm-api/drm-api",
              children: "DRM Kit API参考"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Image Kit"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "分类"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "资源链接"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "图片解码"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["支持HEIF、JPEG、PNG、WebP、GIF、BMP、SVG、ICO、DNG格式图片的解码。  - ArkTS指南：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/image-kit/image-arkts-dev/image-decoding-arts/image-decoding",
              children: "使用ImageSource完成图片解码"
            }), "  - C/C++指南：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/image-kit/image-native/image-decoding-c/image-source-c",
              children: "使用Image_NativeModule完成图片解码"
            }), "  支持自定义申请内存类型，优化解码效率。  - ArkTS指南：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/image-kit/image-arkts-dev/image-decoding-arts/image-allocator-type",
              children: "申请图片解码内存(ArkTS)"
            }), "  - C/C++指南：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/image-kit/image-native/image-decoding-c/image-allocator-type-c",
              children: "申请图片解码内存(C/C++)"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "图片编码"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["支持编码为HEIF、JPEG、PNG、WebP、GIF格式图片。  - ArkTS指南：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/image-kit/image-arkts-dev/image-encoding-arts/image-encoding",
              children: "使用ImagePacker完成图片编码"
            }), "  - C/C++指南：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/image-kit/image-native/image-encoding-c/image-packer-c",
              children: "使用Image_NativeModule完成图片编码"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "图片接收"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["支持作为消费者接收和处理图片。  - ArkTS指南：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/image-kit/image-arkts-dev/image-receiving-arkts/image-receiver",
              children: "使用ImageReceiver完成图片接收"
            }), "  - C/C++指南：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/image-kit/image-native/image-receiving-c/image-receiver-c",
              children: "使用Image_NativeModule完成图片接收"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "图片编辑和处理"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["支持裁剪、缩放、偏移、旋转、翻转、设置透明度等图像变换，以及对图片部分区域做像素数据写入的位图操作。  - ArkTS指南：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/image-kit/image-arkts-dev/image-editing-arkts/image-transformation",
              children: "使用PixelMap完成图像变换"
            }), "  - ArkTS指南：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/image-kit/image-arkts-dev/image-editing-arkts/image-pixelmap-operation",
              children: "使用PixelMap完成位图操作"
            }), "  - C/C++指南：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/image-kit/image-native/image-editing-c/pixelmap-c",
              children: "使用Image_NativeModule完成位图操作"
            }), "  支持读取和编辑图片的EXIF信息。  - ArkTS指南：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/image-kit/image-arkts-dev/image-editing-arkts/image-tool",
              children: "编辑图片EXIF信息"
            }), "  - C/C++指南：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/image-kit/image-native/image-editing-c/image-tool-c",
              children: "使用Image_NativeModule编辑图片EXIF信息"
            }), "  支持为图片添加个性化的滤镜效果。  - C/C++指南：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/image-kit/image-native/image-editing-c/image-effect-guidelines",
              children: "使用ImageEffect编辑图片"
            }), "  支持对图片做清晰度增强、色彩空间转换、HDR效果转换。  - C/C++指南：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/image-kit/image-native/image-editing-c/image-processing/image-scaling",
              children: "图片缩放"
            }), "  - C/C++指南：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/image-kit/image-native/image-editing-c/image-processing/image-csc",
              children: "图片色彩空间转换"
            }), "  - C/C++指南：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/image-kit/image-native/image-editing-c/image-processing/image-dynamic-metadata-generation",
              children: "图片动态元数据生成"
            }), "  - C/C++指南：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/image-kit/image-native/image-editing-c/image-processing/hdr-single-to-dual",
              children: "单层HDR图片转换双层"
            }), "  - C/C++指南：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/image-kit/image-native/image-editing-c/image-processing/hdr-dual-to-single",
              children: "双层HDR图片转换单层"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "更多"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/image-kit",
              children: "Image Kit开发指南"
            }), "  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-api",
              children: "Image Kit API参考"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Media Kit"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "分类"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "资源链接"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "视频转码"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["- ArkTS API参考：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-arkts/js-apis-media/arkts-apis-media-avtranscoder/arkts-apis-media-avtranscoder",
              children: "AVTranscoder"
            }), "  - 开发指南：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/media-kit/media-kit-dev--arkts/media-transcoder-arkts/using-avtranscoder-for-transcodering",
              children: "使用AVTranscoder实现视频转码(ArkTS)"
            }), "  - 开发指南：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/media-kit/media-kit-dev--arkts/media-transcoder-arkts/avtranscoder-practice",
              children: "创建异步线程执行AVTranscoder视频转码(ArkTS)"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "元数据"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["- ArkTS API参考：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-arkts/js-apis-media/arkts-apis-media-avmetadataextractor/arkts-apis-media-avmetadataextractor",
              children: "AVMetadataExtractor"
            }), "  - C API参考：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-module/capi-avmetadataextractor/capi-avmetadataextractor",
              children: "AVMetadataExtractor"
            }), "  - 开发指南：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/media-kit/media-kit-dev--arkts/media-info-arkts/avmetadataextractor",
              children: "使用AVMetadataExtractor提取音视频元数据信息(ArkTS)"
            }), "  - 开发指南：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/media-kit/media-kit-dev--c/media-info-c/using-ndk-avmetadataextractor-for-media",
              children: "使用AVMetadataExtractor获取元数据(C/C++)"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "缩略图"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["- ArkTS API参考：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-arkts/js-apis-media/arkts-apis-media-avimagegenerator/arkts-apis-media-avimagegenerator",
              children: "AVImageGenerator"
            }), "  - C API参考：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-module/capi-avimagegenerator/capi-avimagegenerator",
              children: "AVImageGenerator"
            }), "  - 开发指南：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/media-kit/media-kit-dev--arkts/media-info-arkts/avimagegenerator",
              children: "使用AVImageGenerator提取视频指定时间图像(ArkTS)"
            }), "  - 开发指南：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/media-kit/media-kit-dev--c/media-info-c/using-ndk-avimagegenerator-for-video",
              children: "使用AVImageGenerator获取视频帧(C/C++)"
            }), "  - 最佳实践：", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-video-thumbnail",
              children: "基于系统能力获取视频缩略图"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "更多"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/media-kit",
              children: "Media Kit开发指南"
            }), "  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-api",
              children: "Media Kit API参考"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Media Library Kit"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "分类"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "资源链接"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "管理动态照片"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["- 指南：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/medialibrary-kit/movingphoto/photoaccesshelper-movingphoto",
              children: "访问和管理动态照片资源"
            }), "  - 指南：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/medialibrary-kit/movingphoto/movingphotoview-guidelines",
              children: "使用MovingPhotoView播放动态照片"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "更多"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/medialibrary-kit",
              children: "Media Library Kit开发指南"
            }), "  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-library-api/media-library-api",
              children: "Media Library Kit API参考"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Ringtone Kit"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "分类"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "资源链接"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "铃声设置服务"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["- ArkTS API参考：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ringtone-api/ringtone-arkts/ringtone-ringtone/ringtone-ringtone",
              children: "铃声服务"
            }), "  - 指南：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ringtone-kit-guide/ringtone-preparations",
              children: "设置铃声"
            })]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Scan Kit"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "分类"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "资源链接"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "默认界面扫码"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["- ArkTS API参考：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/scan-api/scan-arkts/scan-scanbarcode-api/scan-scanbarcode-api",
              children: "默认界面扫码"
            }), "  - 指南：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/scan-kit-guide/scan-scanbarcode",
              children: "默认界面扫码"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "自定义界面扫码"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["- ArkTS API参考：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/scan-api/scan-arkts/scan-customscan-api/scan-customscan-api",
              children: "自定义界面扫码"
            }), "  - 指南：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/scan-kit-guide/scan-customscan",
              children: "自定义界面扫码"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "图像识码"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["- ArkTS API参考：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/scan-api/scan-arkts/scan-imagedecode/scan-imagedecode",
              children: "图像识码"
            }), "  - 指南：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/scan-kit-guide/scan-imagerecognition/scan-detectbarcode",
              children: "识别本地图片"
            }), "  - 指南：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/scan-kit-guide/scan-imagerecognition/scan-decodeimage",
              children: "识别图像数据"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "码图生成"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["- ArkTS API参考：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/scan-api/scan-arkts/scan-generatebarcode/scan-generatebarcode",
              children: "码图生成"
            }), "  - 指南：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/scan-kit-guide/scan-generate/scan-barcodegenerate",
              children: "通过文本生成码图"
            }), "  - 指南：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/scan-kit-guide/scan-generate/scan-generatearray",
              children: "通过字节数组生成码图"
            })]
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
960652(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958526-f70ae4ccc6b1823f4b357e94e9dc2499.png");

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