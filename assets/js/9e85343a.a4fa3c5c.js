"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["924922"], {
789985(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_rendering_control_arkts_rendering_control_overview_arkts_rendering_control_overview_md_9e8_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-rendering-control-arkts-rendering-control-overview-arkts-rendering-control-overview-md-9e8.json
var site_docs_arkui_arkts_ui_development_arkts_rendering_control_arkts_rendering_control_overview_arkts_rendering_control_overview_md_9e8_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-rendering-control/arkts-rendering-control-overview/arkts-rendering-control-overview","title":"渲染控制概述","description":"ArkUI通过自定义组件的build()函数和@Builder装饰器中的声明式UI描述语句构建相应的UI。在声明式描述语句中开发者除了使用系统组件外，还可以使用渲染控制组件来辅助UI的构建，这些渲染控制组件包括控制组件是否显示的条件渲染组件和基于数组数据快速生成组件的循环渲染组件。","source":"@site/docs/arkui/arkts-ui-development/arkts-rendering-control/arkts-rendering-control-overview/arkts-rendering-control-overview.md","sourceDirName":"arkui/arkts-ui-development/arkts-rendering-control/arkts-rendering-control-overview","slug":"/arkui/arkts-ui-development/arkts-rendering-control/arkts-rendering-control-overview/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-rendering-control/arkts-rendering-control-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"渲染控制概述","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-rendering-control-overview","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"状态变量改变不触发组件刷新问题常用定位方法","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-faq/troubleshooting-state-manage/"},"next":{"title":"if/else：条件渲染","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-rendering-control/arkts-rendering-control-ifelse/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-rendering-control/arkts-rendering-control-overview/arkts-rendering-control-overview.md


const frontMatter = {
	title: '渲染控制概述',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-rendering-control-overview',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '渲染控制概述';

const assets = {

};



const toc = [{
  "value": "基本概念",
  "id": "基本概念",
  "level": 2
}, {
  "value": "全量加载&amp;懒加载介绍",
  "id": "全量加载懒加载介绍",
  "level": 2
}, {
  "value": "最佳实践",
  "id": "最佳实践",
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
        id: "渲染控制概述",
        children: "渲染控制概述"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ArkUI通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-create-custom-components",
        children: "自定义组件"
      }), "的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-create-custom-components#build%E5%87%BD%E6%95%B0",
        children: "build()函数"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-builder",
        children: "@Builder装饰器"
      }), "中的声明式UI描述语句构建相应的UI。在声明式描述语句中开发者除了使用系统组件外，还可以使用渲染控制组件来辅助UI的构建，这些渲染控制组件包括控制组件是否显示的条件渲染组件和基于数组数据快速生成组件的循环渲染组件。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基本概念",
      children: "基本概念"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名词"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "含义"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "条件渲染"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据给定的条件，判断是否渲染指定的UI组件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "循环渲染"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据给定的数据源，渲染出一系列相似的UI组件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "条件渲染组件"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["能够实现条件渲染的语法组件：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-rendering-control/arkts-rendering-control-ifelse",
              children: "if-else"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "循环渲染组件"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["能够实现循环渲染的语法组件：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-rendering-control/arkts-rendering-control-foreach",
              children: "ForEach"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-rendering-control/arkts-rendering-control-lazyforeach",
              children: "LazyForEach"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-rendering-control/arkts-new-rendering-control-repeat",
              children: "Repeat"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "滚动容器组件"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-list/ts-container-list",
              children: "List"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-listitemgroup/ts-container-listitemgroup",
              children: "ListItemGroup"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-grid/ts-container-grid",
              children: "Grid"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-swiper/ts-container-swiper",
              children: "Swiper"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-waterflow/ts-container-waterflow",
              children: "WaterFlow"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "预加载区域"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["懒加载模式下紧邻容器组件显示范围的区域。该区域内的子组件会在系统空闲时提前创建并布局。其大小由容器组件的cachedCount属性设定。  以List为例，设置", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-list/ts-container-list#cachedcount",
              children: "cachedCount"
            }), "属性后，显示区域外上下各会预加载并布局cachedCount行", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-listitem/ts-container-listitem",
              children: "ListItem"
            }), "。cachedCount默认值等于显示区域中节点的数量。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "全量加载懒加载介绍",
      children: "全量加载&懒加载介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "循环渲染数组数据，通常有以下两种方式：全量加载和懒加载（配合滚动容器组件）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(287962)/* ["default"] */.A) + "",
        width: "812",
        height: "568"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "全量加载场景下，组合（Composition）阶段会一次性将所有子组件节点都挂载到UI树上，后续渲染（Rendering）阶段绘制全部子组件。长列表场景下，加载所有节点会导致页面卡顿、高内存占用，尤其是当列表数据高频刷新时，非常影响页面使用体验。首次加载耗时长，但滑动时性能较好，适合数据较少的场景。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "相比之下，懒加载场景只加载“列表显示区域+预加载区域”的子组件节点。滚动容器组件获取需要构建的组件的索引范围，创建需要的节点并计算布局，在列表滑动或数据更新时再次刷新索引范围。首次加载性能提升，滑动时创建节点，性能降低。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用开发者应该根据实际业务情况选择适合的场景。当明确数据列表长度固定，且长度小于某个值（取决于容器组件区域显示子组件的个数），可以考虑使用全量加载方式。除此之外的其他场景，都推荐使用懒加载方式渲染列表数据。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ArkUI框架为鸿蒙应用开发者提供了", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-rendering-control/arkts-rendering-control-foreach",
        children: "ForEach"
      }), "组件（全量加载）和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-rendering-control/arkts-rendering-control-lazyforeach",
        children: "LazyForEach"
      }), "组件（懒加载）对列表数据循环渲染。除此之外，", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-rendering-control/arkts-new-rendering-control-repeat",
        children: "Repeat"
      }), "组件同时支持两种开发场景，并且默认具备组件复用能力。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "组件"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "懒加载能力"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "复用能力"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "推荐使用场景"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ForEach"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "×"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "×"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "适用于数据量较少的短列表场景。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LazyForEach"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "×"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "适用于长列表、网格等需要滚动浏览大量数据的场景。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Repeat"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "适用于长列表、网格等需要滚动浏览大量数据的场景，并且其复用能力有助于优化渲染性能。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "最佳实践",
      children: "最佳实践"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-lazyforeach-optimization",
          children: "懒加载优化性能-界面渲染性能优化-性能场景优化案例"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-best-practices-long-list",
          children: "长列表加载丢帧优化-界面渲染性能优化-性能场景优化案例"
        })
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
287962(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437687-730c201ddda3dc9ed194815c1b6f2ac0.png");

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