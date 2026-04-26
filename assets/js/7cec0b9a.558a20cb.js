"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["475086"], {
191123(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_avcodec_kit_audio_video_codec_video_variable_refreshrate_video_variable_refreshrate_md_7ce_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-avcodec-kit-audio-video-codec-video-variable-refreshrate-video-variable-refreshrate-md-7ce.json
var site_docs_avcodec_kit_audio_video_codec_video_variable_refreshrate_video_variable_refreshrate_md_7ce_namespaceObject = JSON.parse('{"id":"avcodec-kit/audio-video-codec/video-variable-refreshrate/video-variable-refreshrate","title":"视频可变帧率","description":"从API version 15开始，支持视频可变帧率。","source":"@site/docs/avcodec-kit/audio-video-codec/video-variable-refreshrate/video-variable-refreshrate.md","sourceDirName":"avcodec-kit/audio-video-codec/video-variable-refreshrate","slug":"/avcodec-kit/audio-video-codec/video-variable-refreshrate/","permalink":"/harmonyos-docs-site/avcodec-kit/audio-video-codec/video-variable-refreshrate/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":15,"frontMatter":{"title":"视频可变帧率","sidebar_position":15,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/video-variable-refreshrate","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"创建视频解码器和NativeWindow初始化并行","permalink":"/harmonyos-docs-site/avcodec-kit/audio-video-codec/parallel-decoding-nativewindow/"},"next":{"title":"Audio Vivid能力介绍","permalink":"/harmonyos-docs-site/avcodec-kit/audio-video-codec/audiovivid/audiovivid-intro/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/avcodec-kit/audio-video-codec/video-variable-refreshrate/video-variable-refreshrate.md


const frontMatter = {
	title: '视频可变帧率',
	sidebar_position: 15,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/video-variable-refreshrate',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '视频可变帧率';

const assets = {

};



const toc = [{
  "value": "适用场景",
  "id": "适用场景",
  "level": 2
}, {
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
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
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "视频可变帧率",
        children: "视频可变帧率"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 15开始，支持视频可变帧率。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本模块提供视频可变帧率功能的CAPI接口，通过调用本接口，可以在视频播放过程中根据视频内容动态调整屏幕刷新率，在保障视频播放流畅度的基础上节省屏幕显示功耗。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "适用场景",
      children: "适用场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "具有高帧率（>30fps）视频源的播放场景；视频帧率小于或等于30的场景建议以30Hz的刷新率运行。下图以播放一段60fps的视频为例，算法根据视频内容实时调整屏幕刷新率，调节过程中，当刷新率小于视频帧率时，显示前会丢弃部分视频帧以节省功耗。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(223377)/* ["default"] */.A) + "",
        width: "1371",
        height: "635"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "只支持硬件解码后直接送显的视频播放场景。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "屏幕整体刷新率会被调整，建议在全屏播放、无弹幕、无动效的场景使用，否则会影响弹幕、动效的流畅度体验。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "依赖解码帧率配置，使用前需要正确配置OH_MD_KEY_FRAME_RATE属性。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "与硬件平台能力相关，当平台不支持时，接口不报错，内部能力不生效，不影响正常解码播放流程。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["基础解码功能请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/avcodec-kit/audio-video-codec/video-decoding",
        children: "视频解码开发指南"
      }), "，下面仅针对于基础视频解码过程中存在的区别做具体说明。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "解码器配置阶段，添加视频可变帧率使能开关。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "示例中的变量说明如下："
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["• videoDec：视频解码器实例的指针。创建方式参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/avcodec-kit/audio-video-codec/video-decoding#surface%E6%A8%A1%E5%BC%8F",
            children: "Surface模式下创建解码器实例对象"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "OH_AVFormat *format = OH_AVFormat_Create();\nint32_t width = 1280; // 视频帧宽度。\nint32_t height = 720; // 视频帧高度。\nint32_t fps = 60; // 视频帧率。\nOH_AVFormat_SetIntValue(format, OH_MD_KEY_WIDTH, width);\nOH_AVFormat_SetIntValue(format, OH_MD_KEY_HEIGHT, height);\nOH_AVFormat_SetIntValue(format, OH_MD_KEY_FRAME_RATE, fps);\nOH_AVFormat_SetIntValue(format, OH_MD_KEY_VIDEO_DECODER_OUTPUT_ENABLE_VRR, 1);\nint32_t ret = OH_VideoDecoder_Configure(videoDec, format);\nif (ret != AV_ERR_OK) {\n    // 异常处理。\n}\nOH_AVFormat_Destroy(format);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（可选）视频播放过程中，动态开关视频可变帧率。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如果用户在播放中开启了弹幕，为了避免本模块输出最终未在屏幕刷新率调节过程中生效，导致计算资源的浪费，可以动态关闭本模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "动态关闭如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "OH_AVFormat *format = OH_AVFormat_Create();\nOH_AVFormat_SetIntValue(format, OH_MD_KEY_VIDEO_DECODER_OUTPUT_ENABLE_VRR, 0);\nOH_VideoDecoder_SetParameter(videoDec, format);\nOH_AVFormat_Destroy(format);\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "动态开启如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "OH_AVFormat *format = OH_AVFormat_Create();\nOH_AVFormat_SetIntValue(format, OH_MD_KEY_FRAME_RATE, fps);\nOH_AVFormat_SetIntValue(format, OH_MD_KEY_VIDEO_DECODER_OUTPUT_ENABLE_VRR, 1);\nOH_VideoDecoder_SetParameter(videoDec, format);\nOH_AVFormat_Destroy(format);\n"
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
223377(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958552-8b5645c35a16ff89c8f98d9bea31b917.png");

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