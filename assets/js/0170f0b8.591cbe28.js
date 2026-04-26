"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["438344"], {
177163(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_multimedia_hdr_vivid_multimedia_hdr_vivid_md_017_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-multimedia-hdr-vivid-multimedia-hdr-vivid-md-017.json
var site_docs_multimedia_hdr_vivid_multimedia_hdr_vivid_md_017_namespaceObject = JSON.parse('{"id":"multimedia-hdr-vivid/multimedia-hdr-vivid","title":"使用HDR Vivid特性开发媒体应用","description":"HDR Vivid是UWA认证的动态HDR视频标准，在HarmonyOS平台上，开发者能够利用HDR Vivid的特性，开发媒体类应用，为用户呈现高动态范围和广色域的视觉体验。作为新一代高动态范围图像标准，HDR Vivid贯穿内容创作、平台支持和设备显示，为用户带来更宽广的色彩范围、更细腻的层次表现、更显著的明暗对比，以及更智能的动态元数据处理，助力用户领略世界的真实色彩。","source":"@site/docs/multimedia-hdr-vivid/multimedia-hdr-vivid.md","sourceDirName":"multimedia-hdr-vivid","slug":"/multimedia-hdr-vivid/","permalink":"/harmonyos-docs-site/multimedia-hdr-vivid/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"使用HDR Vivid特性开发媒体应用","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/multimedia-hdr-vivid","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"媒体开发概览","permalink":"/harmonyos-docs-site/multimedia-development-overview/"},"next":{"title":"Audio Kit简介","permalink":"/harmonyos-docs-site/audio-kit/audio-kit-intro/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/multimedia-hdr-vivid/multimedia-hdr-vivid.md


const frontMatter = {
	title: '使用HDR Vivid特性开发媒体应用',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/multimedia-hdr-vivid',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '使用HDR Vivid特性开发媒体应用';

const assets = {

};



const toc = [{
  "value": "HDR Vivid视频",
  "id": "hdr-vivid视频",
  "level": 2
}, {
  "value": "HDR Vivid图片",
  "id": "hdr-vivid图片",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    header: "header",
    p: "p",
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
        id: "使用hdr-vivid特性开发媒体应用",
        children: "使用HDR Vivid特性开发媒体应用"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "https://www.theuwa.com/standard?cate=3",
        children: "HDR Vivid"
      }), "是UWA认证的动态HDR视频标准，在HarmonyOS平台上，开发者能够利用HDR Vivid的特性，开发媒体类应用，为用户呈现高动态范围和广色域的视觉体验。作为新一代高动态范围图像标准，HDR Vivid贯穿内容创作、平台支持和设备显示，为用户带来更宽广的色彩范围、更细腻的层次表现、更显著的明暗对比，以及更智能的动态元数据处理，助力用户领略世界的真实色彩。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hdr-vivid视频",
      children: "HDR Vivid视频"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用只需调用媒体领域提供的API，即可接入HarmonyOS的HDR Vivid视频采集、转码和解码显示功能，基于HDR Vivid标准，制作出高质量的视频。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类别"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "开发指导"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "提供能力的Kit"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "采集"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/camera-kit/camera-dev-arkts/camera-hdr-recording",
              children: "HDR Vivid相机录像"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Camera Kit"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "编码"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/avcodec-kit/audio-video-codec/hdr-vivid-capability/hdr-vivid-video-recorder",
              children: "HDR Vivid视频录制"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AVCodec Kit"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "解码"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/avcodec-kit/audio-video-codec/hdr-vivid-capability/hdr-vivid-video-player",
              children: "HDR Vivid视频播放"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AVCodec Kit"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "转换"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/avcodec-kit/audio-video-codec/hdr-vivid-capability/hdrvivid2sdr",
              children: "视频解码支持HDRVivid2SDR"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AVCodec Kit"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "转换"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/media-kit/media-kit-dev--c/videoprocessing-guidelines/generate-video-dynamic-metadata",
              children: "HDR Vivid视频动态元数据生成"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Media Kit"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "转换"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/media-kit/media-kit-dev--c/videoprocessing-guidelines/video-csc",
              children: "HDR视频色彩空间转换"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Media Kit"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hdr-vivid图片",
      children: "HDR Vivid图片"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用只需调用媒体领域提供的API，即可接入HarmonyOS的HDR Vivid图片采集、转码和解码显示功能，基于HDR Vivid标准，制作出高质量的图片。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类别"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "开发指导"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "提供能力的Kit"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "采集"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/camera-kit/camera-dev-arkts/camera-hdr-shooting",
              children: "HDR Vivid相机拍照"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Camera Kit"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "编码"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/image-kit/image-native/image-encoding-c/image-packer-c",
              children: "HDR Vivid图片编码"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Image Kit"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "解码"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/image-kit/image-native/image-decoding-c/image-source-c",
              children: "HDR Vivid图片解码"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Image Kit"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "转换"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/image-kit/image-native/image-editing-c/image-processing/image-dynamic-metadata-generation",
              children: "HDR图片动态元数据生成"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Image Kit"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "转换"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/image-kit/image-native/image-editing-c/image-processing/image-csc",
              children: "HDR图片色彩空间转换"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Image Kit"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "转换"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/image-kit/image-native/image-editing-c/image-processing/hdr-single-to-dual",
              children: "单层HDR图片转换双层"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Image Kit"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "转换"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/image-kit/image-native/image-editing-c/image-processing/hdr-dual-to-single",
              children: "双层HDR图片转换单层"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Image Kit"
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