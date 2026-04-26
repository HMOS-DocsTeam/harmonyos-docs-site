"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["931508"], {
917417(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_avcodec_kit_avcodec_kit_intro_avcodec_kit_intro_md_5d5_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-avcodec-kit-avcodec-kit-intro-avcodec-kit-intro-md-5d5.json
var site_docs_avcodec_kit_avcodec_kit_intro_avcodec_kit_intro_md_5d5_namespaceObject = JSON.parse('{"id":"avcodec-kit/avcodec-kit-intro/avcodec-kit-intro","title":"AVCodec Kit简介","description":"AVCodec Kit（Audio & Video Codec Kit，音视频编解码，封装解析）是媒体系统中的音视频的编解码、媒体文件的解析、封装、媒体数据输入等原子能力。","source":"@site/docs/avcodec-kit/avcodec-kit-intro/avcodec-kit-intro.md","sourceDirName":"avcodec-kit/avcodec-kit-intro","slug":"/avcodec-kit/avcodec-kit-intro/","permalink":"/harmonyos-docs-site/avcodec-kit/avcodec-kit-intro/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"AVCodec Kit简介","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/avcodec-kit-intro","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用OpenSL ES开发音频录制功能(C/C++)","permalink":"/harmonyos-docs-site/audio-kit/not-recommended/using-opensl-es-for-recording/"},"next":{"title":"AVCodec支持的格式","permalink":"/harmonyos-docs-site/avcodec-kit/avcodec-support-formats/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/avcodec-kit/avcodec-kit-intro/avcodec-kit-intro.md


const frontMatter = {
	title: 'AVCodec Kit简介',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/avcodec-kit-intro',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = 'AVCodec Kit简介';

const assets = {

};



const toc = [{
  "value": "能力范围",
  "id": "能力范围",
  "level": 2
}, {
  "value": "亮点/特征",
  "id": "亮点特征",
  "level": 2
}, {
  "value": "基础概念",
  "id": "基础概念",
  "level": 2
}, {
  "value": "使用方式",
  "id": "使用方式",
  "level": 2
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
    header: "header",
    img: "img",
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "avcodec-kit简介",
        children: "AVCodec Kit简介"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AVCodec Kit（Audio & Video Codec Kit，音视频编解码，封装解析）是媒体系统中的音视频的编解码、媒体文件的解析、封装、媒体数据输入等原子能力。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "基于性能考虑，AVCodec Kit仅提供C接口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "能力范围",
      children: "能力范围"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "媒体数据输入：媒体应用可以传入文件fd、或者流媒体url，进行后续的媒体信息解析等处理。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["媒体基础能力（Media Foundation）：提供媒体数据处理的公共基础类型，包括", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avbuffer-h/capi-native-avbuffer-h",
          children: "AVBuffer"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avformat-h/capi-native-avformat-h",
          children: "AVFormat"
        }), "等。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "音频编码：音频类应用（比如音频通话、音频录制等）可以将未压缩的音频数据送到音频编码器进行编码，应用可以设置编码要用到的编码格式、码率、采样率等参数，控制编码的输出，达到压缩音频文件的目的。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "视频编码：视频类应用（比如视频通话、视频录制等）可以将未压缩的视频数据送到视频编码器进行编码，应用可以设置编码要用到的编码格式、码率、帧率等参数，控制编码的输出，达到压缩视频文件的目的。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "音频解码：音频类应用（比如音频通话、音频播放器等）将音频码流通过音频解码器解码，解码后的数据可以送到音频设备播放。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "视频解码：视频类应用（比如视频通话、视频播放器等）将视频码流通过视频解码器解码，解码后的图像数据可以送到视频显示设备显示。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "媒体文件解析：在媒体应用（音视频播放器等），将本地或者网络接收到的媒体文件解析，获得音视频的码流、音视频的呈现时间、编码格式、文件的一些基本属性信息等。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "媒体文件封装：在媒体应用（音视频录制等），将音视频编码器编码后的码流数据封装成媒体文件（mp4、m4a），将音视频的码流、音视频的呈现时间、编码格式、文件的一些基本属性信息等按照文件格式写入应用指定的文件中。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "亮点特征",
      children: "亮点/特征"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "系统内部数据零拷贝：在视频解码过程，AVCodec通过回调函数提供AVBuffer给应用，由应用将要解码的sample数据写入AVBuffer，在AVCodec中数据不再需要从内存拷入硬件解码器，而是直接送入解码器解码，实现系统内数据零拷贝。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "视频编码、解码支持硬件加速：支持H.264、H.265、H.265 10bit的硬件编解码。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基础概念",
      children: "基础概念"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "媒体文件：携带有音视频、字幕等媒体数据的文件，如.mp4、.m4a。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "流媒体：可以边下载，边播放的媒体传输形式，下载协议如HTTP/HTTPS、HLS协议。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "音视频编码：将未压缩原序列音视频数据转换为另一种格式数据，如H.264、AAC。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "音视频解码：将一种数据格式转换为未压缩状态的原序列音视频数据，如YUV、PCM。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "媒体文件封装：将音频、视频、字幕等数据以及描述信息，按照某种格式要求，写入到同一个文件中，如.mp4。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "媒体文件解封装：将文件中的音频、视频、字幕等媒体数据读出，解析出媒体的描述信息。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "sample：有相同时间属性的一组数据。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "对于音视频，通常是有相同解码时间戳的压缩数据。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "对于字幕，通常包含对应时间点的字幕内容。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "所有的轨道结尾数据都为空。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用方式",
      children: "使用方式"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "视频编解码"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "视频编码的输入和视频解码的输出支持Surface模式。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在编码和解码过程中，通过回调函数通知应用数据处理的情况；如编码过程通过回调通知应用，完成一帧编码，输出编码结果AVBuffer；在解码过程通过回调通知应用输入一帧码流到解码器解码，当解码完成也会通过回调通知应用解码完成，应用可以对数据做后续处理。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "视频编解码的逻辑如图所示。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(140327)/* ["default"] */.A) + "",
            width: "1199",
            height: "345"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["具体开发指导请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/avcodec-kit/audio-video-codec/video-decoding#surface%E6%A8%A1%E5%BC%8F",
            children: "视频解码Surface模式"
          }), "、", (0,jsx_runtime.jsx)(_components.a, {
            href: "/avcodec-kit/audio-video-codec/video-encoding#surface%E6%A8%A1%E5%BC%8F",
            children: "视频编码Surface模式"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "音频编解码"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "音频编码的输入和音频解码的输出为PCM格式。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在编码和解码过程中，通过回调函数通知应用数据处理的情况；如编码过程通过回调通知应用，完成一帧编码，输出编码结果AVBuffer；在解码过程通过回调通知应用输入一帧码流到解码器解码，当解码完成也会通过回调通知应用解码完成，应用可以对数据做后续处理。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "音频编解码逻辑如图所示。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(831616)/* ["default"] */.A) + "",
            width: "1199",
            height: "345"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["具体开发指导请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/avcodec-kit/audio-video-codec/audio-decoding",
            children: "音频解码"
          }), "、", (0,jsx_runtime.jsx)(_components.a, {
            href: "/avcodec-kit/audio-video-codec/audio-encoding",
            children: "音频编码"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "文件解析封装"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在文件封装环节，应用将AVBuffer送入Codec对应的接口，执行数据封装，AVBuffer可以是由上述编码输出的AVBuffer，也可以是应用创建的AVBuffer，AVBuffer中要携带有效的码流数据和相关的时间描述等信息。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在文件解析环节，应用从Codec对应的接口获得携带有码流数据的AVBuffer，该AVBuffer可以送入上述视频和音频编解码对应接口。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "文件封装解封装逻辑如图所示。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(770224)/* ["default"] */.A) + "",
            width: "796",
            height: "345"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["具体开发指导请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/avcodec-kit/file-muxing-demuxing/audio-video-demuxer",
            children: "媒体数据解析"
          }), "、", (0,jsx_runtime.jsx)(_components.a, {
            href: "/avcodec-kit/file-muxing-demuxing/audio-video-muxer",
            children: "媒体数据封装"
          }), "。"]
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
          href: "/ide-run-emulator/ide-emulator-overview/ide-emulator-specification#section1227613205203",
          children: "模拟器与真机的差异"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["媒体数据解析支持模拟器，具体规格参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/avcodec-kit/avcodec-support-formats#%E5%AA%92%E4%BD%93%E6%95%B0%E6%8D%AE%E8%A7%A3%E6%9E%90",
          children: "解封装格式"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["媒体数据封装支持模拟器，具体规格参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/avcodec-kit/avcodec-support-formats#%E5%AA%92%E4%BD%93%E6%95%B0%E6%8D%AE%E5%B0%81%E8%A3%85",
          children: "封装格式"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["视频编解码仅软件解码支持模拟器（h265格式除外），具体规格参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/avcodec-kit/avcodec-support-formats#%E8%A7%86%E9%A2%91%E8%A7%A3%E7%A0%81",
          children: "视频解码"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["音频编解码支持模拟器，具体规格参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/avcodec-kit/avcodec-support-formats#%E9%9F%B3%E9%A2%91%E8%A7%A3%E7%A0%81",
          children: "音频编解码"
        }), "。"]
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
770224(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438585-da0c5785785a4c82ecb43089647b0dc8.png");

},
831616(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798890-e9a6548223679331224dd9e6d0bfb692.png");

},
140327(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478539-c5cb56bb52354fc8d4e26b62f7c8b7dc.png");

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