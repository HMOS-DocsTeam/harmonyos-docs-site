"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["105037"], {
858982(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_cann_kit_guide_cannkit_appendixes_cannkit_visualization_tool_usage_cannkit_visualization_tool_usage_md_aa8_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cann-kit-guide-cannkit-appendixes-cannkit-visualization-tool-usage-cannkit-visualization-tool-usage-md-aa8.json
var site_docs_cann_kit_guide_cannkit_appendixes_cannkit_visualization_tool_usage_cannkit_visualization_tool_usage_md_aa8_namespaceObject = JSON.parse('{"id":"cann-kit-guide/cannkit-appendixes/cannkit-visualization-tool-usage/cannkit-visualization-tool-usage","title":"可视化工具","description":"概述","source":"@site/docs/cann-kit-guide/cannkit-appendixes/cannkit-visualization-tool-usage/cannkit-visualization-tool-usage.md","sourceDirName":"cann-kit-guide/cannkit-appendixes/cannkit-visualization-tool-usage","slug":"/cann-kit-guide/cannkit-appendixes/cannkit-visualization-tool-usage/","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-appendixes/cannkit-visualization-tool-usage/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"可视化工具","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-visualization-tool-usage","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"支持的算子","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-appendixes/cannkit-supported-operators/"},"next":{"title":"Core Speech Kit简介","permalink":"/harmonyos-docs-site/core-speech-kit-guide/core-speech-introduction/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/cann-kit-guide/cannkit-appendixes/cannkit-visualization-tool-usage/cannkit-visualization-tool-usage.md


const frontMatter = {
	title: '可视化工具',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-visualization-tool-usage',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = '可视化工具';

const assets = {

};



const toc = [{
  "value": "概述",
  "id": "概述",
  "level": 2
}, {
  "value": "功能描述",
  "id": "功能描述",
  "level": 2
}, {
  "value": "使用可视化工具",
  "id": "使用可视化工具",
  "level": 2
}, {
  "value": "安装工具",
  "id": "安装工具",
  "level": 3
}, {
  "value": "查看子图",
  "id": "查看子图",
  "level": 3
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "可视化工具",
        children: "可视化工具"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/lutzroeder/netron/tags",
        children: "Netron"
      }), "是一个神经网络模型可视化工具，支持许多主流AI框架模型的可视化。", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/lutzroeder/netron/tags",
        children: "Netron"
      }), " 5.1.6版本开始支持.om模型可视化。如下图所示，使用Netron工具加载.om模型后，可以展示模型的拓扑结构、图、节点的信息等。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(718793)/* ["default"] */.A) + "",
        width: "1785",
        height: "1262"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "功能描述",
      children: "功能描述"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "支持加载.om模型。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "支持展示拓扑结构和数据流shape。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "支持查看模型的format、input和output等参数。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "支持查看编译后模型的子图和算子设备信息。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "支持查看节点的NODE PROPERTIES、ATTRIBUTES、INPUTS和OUTPUTS等信息。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "支持保存可视化结果导出为图片。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用可视化工具",
      children: "使用可视化工具"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "安装工具",
      children: "安装工具"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["下载最新的", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://github.com/lutzroeder/netron/tags",
            children: "Netron"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "安装Netron。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "macOS: 下载.dmg文件或者执行brew cask install netron。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Linux: 下载.AppImage文件或者执行snap install netron。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Windows: 下载.exe文件或者执行winget install netron。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Python服务器：执行pip install netron安装Netron，然后通过netron [FILE]或netron.start('[FILE]')加载模型。"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["浏览器：无需安装，直接打开网页端", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://netron.app/",
              children: "Netron"
            }), "可使用。"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "安装完成后，将模型拖入窗口即可打开。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "查看子图",
      children: "查看子图"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对于编译后有子图的模型，可按照如下操作查看。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["将编译后的模型拖入", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://netron.app/",
            children: "Netron"
          }), "工具，即可打开。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "点击子图节点，在右侧查找\"ATTRIBUTES->subgraph\"，点击\"subgraph\"的属性值。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(848914)/* ["default"] */.A) + "",
            width: "651",
            height: "621"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "查看子图节点的NODE PROPERTIES、ATTRIBUTES、INPUTS和OUTPUTS等信息。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(338177)/* ["default"] */.A) + "",
            width: "527",
            height: "748"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "点击左上角箭头，返回主图。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(797187)/* ["default"] */.A) + "",
            width: "386",
            height: "574"
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
338177(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479305-76770b7186768abe0399b9d5ad1b99c4.png");

},
718793(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439349-d6ddc95b25dc0f04784da878cb47f47e.png");

},
797187(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799656-e6418ee2c36fb13bc518f47a62c464cf.png");

},
848914(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959304-05b54ce66c85bb4b46d09910acf21db0.png");

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