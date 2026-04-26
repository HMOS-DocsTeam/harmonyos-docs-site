"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["655526"], {
43585(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_vision_kit_guide_vision_introduction_vision_introduction_md_3fa_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-vision-kit-guide-vision-introduction-vision-introduction-md-3fa.json
var site_docs_vision_kit_guide_vision_introduction_vision_introduction_md_3fa_namespaceObject = JSON.parse('{"id":"vision-kit-guide/vision-introduction/vision-introduction","title":"Vision Kit简介","description":"Vision Kit（场景化视觉服务）集成了视觉类AI能力，包括人脸活体检测（interactiveLiveness）能力、卡证识别（CardRecognition）能力、文档扫描（DocumentScanner）能力、AI识图控件（visionImageAnalyzer）能力。人脸活体检测能力便于用户与设备进行互动，验证用户是否为真实活体；卡证识别能力可提供身份证、行驶证、驾驶证、护照、银行卡等证件的结构化识别服务；文档扫描控件可提供拍摄文档并转换为高清扫描件的服务；AI识图控件可提供场景化的文本识别、主体分割、识图搜索功能。其中动作活体检测能力、卡证识别能力实施试用期免费的计费政策，试用期至2026年12月31日。开始正式收费前，华为将会提前通过正式途径发布计费调整通告。","source":"@site/docs/vision-kit-guide/vision-introduction/vision-introduction.md","sourceDirName":"vision-kit-guide/vision-introduction","slug":"/vision-kit-guide/vision-introduction/","permalink":"/harmonyos-docs-site/vision-kit-guide/vision-introduction/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Vision Kit简介","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/vision-introduction","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"AI字幕控件","permalink":"/harmonyos-docs-site/speech-kit-guide/speech-aicaption-guide/"},"next":{"title":"人脸活体检测","permalink":"/harmonyos-docs-site/vision-kit-guide/vision-interactiveliveness/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/vision-kit-guide/vision-introduction/vision-introduction.md


const frontMatter = {
	title: 'Vision Kit简介',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/vision-introduction',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = 'Vision Kit简介';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 2
}, {
  "value": "支持的设备",
  "id": "支持的设备",
  "level": 3
}, {
  "value": "支持的国家/地区",
  "id": "支持的国家地区",
  "level": 3
}, {
  "value": "能力限制",
  "id": "能力限制",
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
    li: "li",
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
        id: "vision-kit简介",
        children: "Vision Kit简介"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Vision Kit（场景化视觉服务）集成了视觉类AI能力，包括人脸活体检测（interactiveLiveness）能力、卡证识别（CardRecognition）能力、文档扫描（DocumentScanner）能力、AI识图控件（visionImageAnalyzer）能力。人脸活体检测能力便于用户与设备进行互动，验证用户是否为真实活体；卡证识别能力可提供身份证、行驶证、驾驶证、护照、银行卡等证件的结构化识别服务；文档扫描控件可提供拍摄文档并转换为高清扫描件的服务；AI识图控件可提供场景化的文本识别、主体分割、识图搜索功能。其中动作活体检测能力、卡证识别能力实施试用期免费的计费政策，试用期至2026年12月31日。开始正式收费前，华为将会提前通过正式途径发布计费调整通告。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Vision Kit提供了人脸活体检测能力、卡证识别能力、文档扫描能力和AI识图能力，具体如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/vision-kit-guide/vision-interactiveliveness",
          children: "人脸活体检测"
        }), "：通过动作活体检测，验证用户是否为真实活体。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/vision-kit-guide/vision-cardrecognition",
          children: "卡证识别"
        }), "：多证件的结构化识别服务。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/vision-kit-guide/vision-documentscanner",
          children: "文档扫描"
        }), "：提供拍摄文档并转换为高清扫描件的服务。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/vision-kit-guide/vision-imageanalyzer",
          children: "AI识图"
        }), "：提供场景化的文本识别、主体分割、识图搜索功能。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "支持的设备",
      children: "支持的设备"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "能力"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "支持的设备"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "人脸活体检测"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Phone、Tablet。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "卡证识别"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Phone、Tablet。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "文档扫描"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Phone、Tablet。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AI识图"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Phone、Tablet、PC/2in1。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "支持的国家地区",
      children: "支持的国家/地区"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "仅适用于中国境内（香港特别行政区、澳门特别行政区、中国台湾除外）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "能力限制",
      children: "能力限制"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "AI能力"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "约束"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "人脸活体检测"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "- 支持的文本语种类型：简体中文、繁体中文、英文、维吾尔文、藏文。  - 支持的播报语种类型：简体中文、英文。  - 人脸活体检测服务暂不支持横屏、分屏进行检测。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "卡证识别"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "- 支持的语种类型：简体中文、英文。  - 卡证识别暂时只支持中国二代身份证、中国国内银行卡、中国护照、中国驾驶证、中国行驶证（暂不支持中国港澳台地区及海外证件）。  - 卡证需要保持与真实证件一致的长宽比、没有形变、正向拍摄角度小于30度。  - 卡证图像清晰、完整。无摩尔纹、无遮挡、无反光、无卡套。  - 不允许被其他组件或窗口遮挡。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "文档扫描"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "- 支持的语种类型：简体中文、英文。  - 文档扫描暂时只支持phone、tablet设备。  - 不允许被其他组件或窗口遮挡。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AI识图"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["- 支持的文本语种类型：简体中文、繁体中文、英文、维吾尔文、藏文。  - 支持图片最小规格100*100分辨率。  - 分析图像要求是静态非矢量图，即svg、gif等图像类型不支持分析，支持传入", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-pixelmap/arkts-apis-image-pixelmap",
              children: "PixelMap"
            }), "进行分析，目前仅支持", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-e/arkts-apis-image-e#pixelmapformat7",
              children: "RGBA_8888"
            }), "类型。  - 支持翻译的图片宽高最小比例为1:3（高度小于宽度的3倍），支持文本识别的图片宽高最小比例为1:7（高度小于宽度的7倍）。  - 支持的设备情况请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/vision-kit-guide/vision-imageanalyzer#%E7%BA%A6%E6%9D%9F%E4%B8%8E%E9%99%90%E5%88%B6",
              children: "约束与限制"
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "模拟器支持情况",
      children: "模拟器支持情况"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本kit暂不支持模拟器。"
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