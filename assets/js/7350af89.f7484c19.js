"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["886691"], {
530614(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_map_kit_guide_map_personal_privacy_map_personal_privacy_md_735_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-map-kit-guide-map-personal-privacy-map-personal-privacy-md-735.json
var site_docs_map_kit_guide_map_personal_privacy_map_personal_privacy_md_735_namespaceObject = JSON.parse('{"id":"map-kit-guide/map-personal-privacy/map-personal-privacy","title":"个人数据处理说明","description":"此文档针对华为作为最终用户数据处理者，开发者作为数据控制者的处理进行说明，包括：","source":"@site/docs/map-kit-guide/map-personal-privacy/map-personal-privacy.md","sourceDirName":"map-kit-guide/map-personal-privacy","slug":"/map-kit-guide/map-personal-privacy/","permalink":"/harmonyos-docs-site/map-kit-guide/map-personal-privacy/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":13,"frontMatter":{"title":"个人数据处理说明","sidebar_position":13,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/map-personal-privacy","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"场景化控件的language参数生效范围","permalink":"/harmonyos-docs-site/map-kit-guide/map-faq/map-faq-5/"},"next":{"title":"上架前准备-获取地图服务协议及资质证明","permalink":"/harmonyos-docs-site/map-kit-guide/preparations_before/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/map-kit-guide/map-personal-privacy/map-personal-privacy.md


const frontMatter = {
	title: '个人数据处理说明',
	sidebar_position: 13,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/map-personal-privacy',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '个人数据处理说明';

const assets = {

};



const toc = [{
  "value": "华为地图服务处理的个人数据清单",
  "id": "华为地图服务处理的个人数据清单",
  "level": 2
}, {
  "value": "指导开发者如何帮助最终用户实现对数据的控制",
  "id": "指导开发者如何帮助最终用户实现对数据的控制",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    h2: "h2",
    header: "header",
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
        id: "个人数据处理说明",
        children: "个人数据处理说明"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此文档针对华为作为最终用户数据处理者，开发者作为数据控制者的处理进行说明，包括："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "华为地图服务处理的个人数据清单"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "指导开发者如何帮助最终用户实现对数据的控制"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "华为地图服务处理的个人数据清单",
      children: "华为地图服务处理的个人数据清单"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "最后修改时间：2024/06/09"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "个人数据清单"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "使用目的"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "存留期"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["粗略位置或者", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "精确位置"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "地图组件API：开发者需要展示当前位置，Map Kit将从开发者应用进程里收集用户位置，如果收集成功，将在地图组件上显示表示用户位置的小蓝点。"
              })
            }), "  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "静态图API：开发者提供位置信息，Map Kit生成对应位置的地图图片。"
              })
            }), "  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "地点搜索API：开发者提供位置信息，Map Kit基于位置信息查找相关地点，提高地点搜索的准确率。"
              })
            }), "  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "路线规划API：开发者提供位置信息，Map Kit基于位置信息进行路线规划。"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不留存"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "精确位置"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "地图Picker：开发者调用地图Picker API，Map Kit会收集用户位置，在地图Picker上显示用户位置，或基于位置信息查找地点。"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不留存"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IP地址"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该信息用于地点搜索API，如果开发者没有提供位置信息，Map Kit根据当前用户的IP地址计算出粗略位置信息，用于提高地点搜索的准确率。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不留存"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "匿名搜索关键字"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该信息用于地点搜索API，开发者提供搜索关键字，Map Kit返回相关的搜索结果。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不留存"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "传感器信息（包含加速度计、重力传感器、旋转矢量传感器、屏幕方向传感器）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该信息用于定位蓝点按照设备方向旋转，并且跟随设备移动。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不留存"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "WiFi状态、WiFi参数、WiFi列表、SSID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该信息用于判断网络状态是否可用。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不留存"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "网络信息、应用基本信息、运营商信息、系统设置信息"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该信息用于联网获取地图数据。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不留存"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "指导开发者如何帮助最终用户实现对数据的控制",
      children: "指导开发者如何帮助最终用户实现对数据的控制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如何清除最终用户的数据"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "不存储用户个人数据。"
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