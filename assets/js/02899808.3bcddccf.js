"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["103604"], {
158288(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_media_kit_media_kit_dev_arkts_media_transcoder_arkts_avtranscoder_faq_avtranscoder_faq_md_028_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-media-kit-media-kit-dev-arkts-media-transcoder-arkts-avtranscoder-faq-avtranscoder-faq-md-028.json
var site_docs_media_kit_media_kit_dev_arkts_media_transcoder_arkts_avtranscoder_faq_avtranscoder_faq_md_028_namespaceObject = JSON.parse('{"id":"media-kit/media-kit-dev--arkts/media-transcoder-arkts/avtranscoder-faq/avtranscoder-faq","title":"转码常见问题","description":"应用发送视频进行转码，音频编码格式为什么变化","source":"@site/docs/media-kit/media-kit-dev--arkts/media-transcoder-arkts/avtranscoder-faq/avtranscoder-faq.md","sourceDirName":"media-kit/media-kit-dev--arkts/media-transcoder-arkts/avtranscoder-faq","slug":"/media-kit/media-kit-dev--arkts/media-transcoder-arkts/avtranscoder-faq/","permalink":"/harmonyos-docs-site/media-kit/media-kit-dev--arkts/media-transcoder-arkts/avtranscoder-faq/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"转码常见问题","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/avtranscoder-faq","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"创建异步线程执行AVTranscoder视频转码(ArkTS)","permalink":"/harmonyos-docs-site/media-kit/media-kit-dev--arkts/media-transcoder-arkts/avtranscoder-practice/"},"next":{"title":"使用AVPlayer播放音频(C/C++)","permalink":"/harmonyos-docs-site/media-kit/media-kit-dev--c/media-playback-c/using-ndk-avplayer-for-playback/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/media-kit/media-kit-dev--arkts/media-transcoder-arkts/avtranscoder-faq/avtranscoder-faq.md


const frontMatter = {
	title: '转码常见问题',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/avtranscoder-faq',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '转码常见问题';

const assets = {

};



const toc = [{
  "value": "应用发送视频进行转码，音频编码格式为什么变化",
  "id": "应用发送视频进行转码音频编码格式为什么变化",
  "level": 2
}, {
  "value": "转码是否支持HDR转SDR？为什么使用其他系统的设备录制HDR视频转码会失败",
  "id": "转码是否支持hdr转sdr为什么使用其他系统的设备录制hdr视频转码会失败",
  "level": 2
}, {
  "value": "按照原视频的比例缩放设置目标视频的分辨率，为何仍会报告参数错误",
  "id": "按照原视频的比例缩放设置目标视频的分辨率为何仍会报告参数错误",
  "level": 2
}, {
  "value": "为什么设置目标分辨率小于源视频分辨率，转码后生成的视频大小反而变大",
  "id": "为什么设置目标分辨率小于源视频分辨率转码后生成的视频大小反而变大",
  "level": 2
}, {
  "value": "为什么转码前播放的是横向视频，设置分辨率转码后生成的视频播放变为竖向",
  "id": "为什么转码前播放的是横向视频设置分辨率转码后生成的视频播放变为竖向",
  "level": 2
}, {
  "value": "调用系统提供的转码能力失败后如何处理",
  "id": "调用系统提供的转码能力失败后如何处理",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    header: "header",
    li: "li",
    ol: "ol",
    p: "p",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "转码常见问题",
        children: "转码常见问题"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "应用发送视频进行转码音频编码格式为什么变化",
      children: "应用发送视频进行转码，音频编码格式为什么变化"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在转码过程中，若未指定音频轨道格式，系统默认将其转换为AAC编码格式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "转码是否支持hdr转sdr为什么使用其他系统的设备录制hdr视频转码会失败",
      children: "转码是否支持HDR转SDR？为什么使用其他系统的设备录制HDR视频转码会失败"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当前转码仅支持HDR vivid至SDR视频的转换，其他HDR格式不支持。可以通过OH_VideoProcessing_IsColorSpaceConversionSupported接口查询当前设备是否支持，具体可以参考：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/media-kit/media-kit-dev--c/videoprocessing-guidelines/video-csc#%E8%A7%84%E6%A0%BC%E8%AF%B4%E6%98%8E",
        children: "VPE支持规格"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "按照原视频的比例缩放设置目标视频的分辨率为何仍会报告参数错误",
      children: "按照原视频的比例缩放设置目标视频的分辨率，为何仍会报告参数错误"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "需检查设置的目标视频分辨率是否低于240P，目标视频的宽度和高度不能超过源视频的宽度和高度，并且不能设置为奇数值。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["视频分辨率的设置方法可参考：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/avcodec-kit/audio-video-codec/obtain-supported-codecs#%E8%AE%BE%E7%BD%AE%E6%AD%A3%E7%A1%AE%E7%9A%84%E8%A7%86%E9%A2%91%E5%AE%BD%E9%AB%98",
        children: "获取支持的编解码能力-设置正确的视频宽高"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "为什么设置目标分辨率小于源视频分辨率转码后生成的视频大小反而变大",
      children: "为什么设置目标分辨率小于源视频分辨率，转码后生成的视频大小反而变大"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "未设置视频码率时，将采用默认的目标码率。此码率高于源视频的码率，因此转码后生成的视频文件大小反而增大了。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "为什么转码前播放的是横向视频设置分辨率转码后生成的视频播放变为竖向",
      children: "为什么转码前播放的是横向视频，设置分辨率转码后生成的视频播放变为竖向"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "源视频带有90°的旋转角度，播放的画面是计算旋转角度后的，故用户看到的视频是横向的，因此设置的目标分辨率宽度大于高度。按照设置的目标分辨率进行转码后，得到生成的目标视频。目标视频计算旋转角度后，此时宽度小于高度，播放视频变为竖向。建议通过元数据信息获取视频的宽度、高度，并据此设置目标分辨率的宽度、高度。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "调用系统提供的转码能力失败后如何处理",
      children: "调用系统提供的转码能力失败后如何处理"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "需要确认视频与设置的目标视频格式当前转码系统能力是否支持。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["当前转码能力支持情况：", (0,jsx_runtime.jsx)(_components.a, {
            href: "/media-kit/media-kit-intro#avtranscoder",
            children: "AVTranscoder支持的格式"
          }), "、", (0,jsx_runtime.jsx)(_components.a, {
            href: "/avcodec-kit/avcodec-support-formats",
            children: "AVCodec支持的格式"
          }), "、", (0,jsx_runtime.jsx)(_components.a, {
            href: "/media-kit/media-kit-dev--c/videoprocessing-guidelines/video-csc#%E8%A7%84%E6%A0%BC%E8%AF%B4%E6%98%8E",
            children: "VPE支持规格"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用在收到error事件后，建议发送原视频；应用在收到complete事件后，建议先调用release再对转码后的视频做发送、上云等操作。"
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