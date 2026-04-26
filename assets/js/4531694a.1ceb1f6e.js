"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["520317"], {
67098(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkgraphics_2_d_text_text_overview_text_overview_md_453_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkgraphics-2-d-text-text-overview-text-overview-md-453.json
var site_docs_arkgraphics_2_d_text_text_overview_text_overview_md_453_namespaceObject = JSON.parse('{"id":"arkgraphics-2d/text/text-overview/text-overview","title":"文本开发概述","description":"应用在开发和布局时，经常需要针对文本元素和内容进行排版、测量、绘制和显示等。字体引擎开发框架提供了一系列接口能力用于支持应用布局文本和管理字体。","source":"@site/docs/arkgraphics-2d/text/text-overview/text-overview.md","sourceDirName":"arkgraphics-2d/text/text-overview","slug":"/arkgraphics-2d/text/text-overview/","permalink":"/harmonyos-docs-site/arkgraphics-2d/text/text-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"文本开发概述","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/text-overview","kit":"graphics","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"字块绘制（C/C++）","permalink":"/harmonyos-docs-site/arkgraphics-2d/graphic-drawing-and-display/primitive-drawing/textblock-drawing-c/"},"next":{"title":"使用主题字体（ArkTS）","permalink":"/harmonyos-docs-site/arkgraphics-2d/text/font-manager/theme-font-arkts/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkgraphics-2d/text/text-overview/text-overview.md


const frontMatter = {
	title: '文本开发概述',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/text-overview',
	kit: 'graphics',
	last_updated: '2026-04-22'
};
const contentTitle = '文本开发概述';

const assets = {

};



const toc = [{
  "value": "能力范围",
  "id": "能力范围",
  "level": 2
}, {
  "value": "实现流程",
  "id": "实现流程",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    h2: "h2",
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
        id: "文本开发概述",
        children: "文本开发概述"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用在开发和布局时，经常需要针对文本元素和内容进行排版、测量、绘制和显示等。字体引擎开发框架提供了一系列接口能力用于支持应用布局文本和管理字体。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "能力范围",
      children: "能力范围"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1"
        })
      }), " 字体引擎能力结构图"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(359663)/* ["default"] */.A) + "",
        width: "384",
        height: "673"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前字体引擎开发框架支持在应用中对文字、emoji表情、placeholder等文本元素进行塑形、排版、测量和绘制显示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者可以选择使用不同的ArkTS语言或者C/C++语言，来使用字体引擎的相关能力以实现对应场景。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "文本相关的能力场景主要分为以下几个方面具体展开："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "字体管理"
          })
        }), "：文本的绘制显示离不开字体的使用和管理，当前支持对各种字体资源的注册和使用。主要包括主题字体、自定义字体、系统字体。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "字体样式"
          })
        }), "：在进行文本排版前，可以为文本设置各种样式，以增强文本显示的效果。主要包括段落样式、文本样式，例如段落样式可以指定换行策略、文字对齐策略、行高等，文本样式可以指定文本颜色、文字大小、文字粗细、装饰线等。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "文本排版"
          })
        }), "：结合文本样式和文字内容，对文字进行塑形、排列、布局的过程。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "文本测量"
          })
        }), "：文本的绘制显示，除了依赖字体，也需要对文本进行准确的测量，便于对内容进行恰当的布局。当前支持对各种复杂样式文本进行测量，开发者可以通过相关接口获取文本的各种度量信息，比如：文本段落的长度、高度、行数、是否截断，每行文本的高度、宽度、文字个数等。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "文本绘制"
          })
        }), "：支持按照指定起始坐标或路径的方式进行文本绘制，同时也支持绘制不同装饰样式的上划线、下划线、删除线等。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "实现流程",
      children: "实现流程"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "实现文本绘制显示或文本测量的主要流程如下图所示，ArkTS侧和Native侧请注意使用对应的能力接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图2"
        })
      }), " 文本测量与文本绘制显示的实现流程"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(605949)/* ["default"] */.A) + "",
        width: "372",
        height: "792"
      })
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
359663(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799020-ecc1bd964163001577543aff7b382f6a.png");

},
605949(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438715-ed3914f055c969c3124f7ca963e72400.jpg");

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