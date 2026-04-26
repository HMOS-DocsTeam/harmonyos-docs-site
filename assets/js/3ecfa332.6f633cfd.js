"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["978620"], {
979326(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_list_and_grid_arkts_list_grid_development_overview_arkts_list_grid_development_overview_md_3ec_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-list-and-grid-arkts-list-grid-development-overview-arkts-list-grid-development-overview-md-3ec.json
var site_docs_arkui_arkts_ui_development_arkts_list_and_grid_arkts_list_grid_development_overview_arkts_list_grid_development_overview_md_3ec_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-list-and-grid/arkts-list-grid-development-overview/arkts-list-grid-development-overview","title":"列表与网格概述","description":"许多应用存在滚动展示同类项目集合的需求，例如显示图片、视频、音乐、新闻、商品等。此类场景可以根据项目排列方式分别选择List、Grid、WaterFlow实现，在圆形屏幕推荐使用ArcList。","source":"@site/docs/arkui/arkts-ui-development/arkts-list-and-grid/arkts-list-grid-development-overview/arkts-list-grid-development-overview.md","sourceDirName":"arkui/arkts-ui-development/arkts-list-and-grid/arkts-list-grid-development-overview","slug":"/arkui/arkts-ui-development/arkts-list-and-grid/arkts-list-grid-development-overview/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-list-and-grid/arkts-list-grid-development-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"列表与网格概述","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-list-grid-development-overview","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"开发应用沉浸式效果","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-layout-development/arkts-develop-apply-immersive-effects/"},"next":{"title":"创建列表 (List)","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-list-and-grid/arkts-layout-development-create-list/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-list-and-grid/arkts-list-grid-development-overview/arkts-list-grid-development-overview.md


const frontMatter = {
	title: '列表与网格概述',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-list-grid-development-overview',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '列表与网格概述';

const assets = {

};



const toc = [{
  "value": "列表",
  "id": "列表",
  "level": 2
}, {
  "value": "网格",
  "id": "网格",
  "level": 2
}, {
  "value": "瀑布流",
  "id": "瀑布流",
  "level": 2
}, {
  "value": "弧形列表",
  "id": "弧形列表",
  "level": 2
}, {
  "value": "能力对比",
  "id": "能力对比",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
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
        id: "列表与网格概述",
        children: "列表与网格概述"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["许多应用存在滚动展示同类项目集合的需求，例如显示图片、视频、音乐、新闻、商品等。此类场景可以根据项目排列方式分别选择", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-list-and-grid/arkts-layout-development-create-list",
        children: "List"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-list-and-grid/arkts-layout-development-create-grid",
        children: "Grid"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-list-and-grid/arkts-layout-development-create-waterflow",
        children: "WaterFlow"
      }), "实现，在圆形屏幕推荐使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-list-and-grid/arkts-layout-development-create-arclist",
        children: "ArcList"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "列表",
      children: "列表"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "List适合单列和多列宽度相同的场景，如通讯录、音乐列表、购物清单等。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["直播评论、即时聊天等应用场景需要在列表底部插入数据时，内容应自动向上滚动，以展示新插入的节点，此功能可通过配置", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-list/ts-container-list#stackfromend19",
        children: "List从尾部开始布局"
      }), "实现。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(586525)/* ["default"] */.A) + "",
        width: "1036",
        height: "334"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "网格",
      children: "网格"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "网格布局由“行”和“列”分割的单元格组成，通过指定“项目”所在单元格实现多种布局，应用场景包括九宫格图片展示、日历、计算器等。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["对于部分项目占用多行或多列的场景，可以通过在创建Grid时传入合适的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-grid/ts-container-grid#gridlayoutoptions10%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
        children: "GridLayoutOptions"
      }), "来实现。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(995432)/* ["default"] */.A) + "",
        width: "2025",
        height: "465"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "瀑布流",
      children: "瀑布流"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "瀑布流布局是一种多列等宽但高度不等的布局方式，适用于需要错落排列的场景，如图片和视频展示、商品推荐等。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["同一个页面内有不同列数分段混合布局的场景，可以通过设置", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-waterflow/ts-container-waterflow#waterflowoptions%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
        children: "WaterFlowSections"
      }), "实现。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(44008)/* ["default"] */.A) + "",
        width: "377",
        height: "779"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "弧形列表",
      children: "弧形列表"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "弧形列表是一种专为圆形屏幕设备设计的特殊列表，支持列表项在接近屏幕上下两端自动缩放的效果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(33179)/* ["default"] */.A) + "",
        width: "266",
        height: "270"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "能力对比",
      children: "能力对比"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "业务场景"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "List"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Grid"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "WaterFlow"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "ArcList"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "滚动通用能力"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "项目分组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-listitemgroup/ts-container-listitemgroup",
              children: "ListItemGroup"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-grid/ts-container-grid#gridlayoutoptions10%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "GridLayoutOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-waterflow/ts-container-waterflow#waterflowoptions%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "WaterFlowSections"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "指定项目吸顶"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["支持通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-list/ts-container-list#sticky9",
              children: "sticky"
            }), "属性实现吸顶"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "项目拖拽排序"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["支持", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/interaction-property/ts-universal-attributes-drag-sorting/ts-universal-attributes-drag-sorting",
              children: "拖拽排序"
            }), "，包括内置动画和拖动到边缘自动滚动"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["仅所有项目都占1行1列时", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-grid/ts-container-grid#supportanimation8",
              children: "支持内置动画"
            }), "，且不支持拖动到边缘自动滚动"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "项目横滑"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["支持通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-listitem/ts-container-listitem#swipeaction9",
              children: "swipeAction"
            }), "属性实现横滑"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "项目间距"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "项目分割线"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持"
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
995432(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437809-c913f3e9fc8fa4bf2f1b17b18788848a.png");

},
586525(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
33179(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477765-995a798d2fbc9bf42f1a24ac98b483d7.png");

},
44008(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957764-039b5528823c6b7cd42a6cb987ffd55c.png");

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