"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["403196"], {
902563(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_use_animation_arkts_animation_attribute_arkts_attribute_animation_overview_arkts_attribute_animation_overview_md_359_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-use-animation-arkts-animation-attribute-arkts-attribute-animation-overview-arkts-attribute-animation-overview-md-359.json
var site_docs_arkui_arkts_ui_development_arkts_use_animation_arkts_animation_attribute_arkts_attribute_animation_overview_arkts_attribute_animation_overview_md_359_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-use-animation/arkts-animation-attribute/arkts-attribute-animation-overview/arkts-attribute-animation-overview","title":"属性动画概述","description":"属性接口（以下简称属性）包含尺寸属性、布局属性、位置属性等多种类型，用于控制组件的行为。针对当前界面上的组件，其部分属性（如位置属性）的变化会引起UI的变化。添加动画可以让属性值从起点逐渐变化到终点，从而产生连续的动画效果。为保障动画起点和终点的正确性，属性动画会将当前在标脏队列内的所有节点进行刷新。如果发现当前动画时长较长时，需要确认当前是否有额外的节点刷新。根据变化时是否能够添加动画，可以将属性分为可动画属性和不可动画属性。判断一种属性是否适合作为可动画属性主要有两个标准：","source":"@site/docs/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-attribute/arkts-attribute-animation-overview/arkts-attribute-animation-overview.md","sourceDirName":"arkui/arkts-ui-development/arkts-use-animation/arkts-animation-attribute/arkts-attribute-animation-overview","slug":"/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-attribute/arkts-attribute-animation-overview/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-attribute/arkts-attribute-animation-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"属性动画概述","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-attribute-animation-overview","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"动画概述","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-use-animation/arkts-animation/"},"next":{"title":"实现属性动画","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-attribute/arkts-attribute-animation-apis/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-attribute/arkts-attribute-animation-overview/arkts-attribute-animation-overview.md


const frontMatter = {
	title: '属性动画概述',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-attribute-animation-overview',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '属性动画概述';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    header: "header",
    li: "li",
    ol: "ol",
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
        id: "属性动画概述",
        children: "属性动画概述"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "属性接口（以下简称属性）包含尺寸属性、布局属性、位置属性等多种类型，用于控制组件的行为。针对当前界面上的组件，其部分属性（如位置属性）的变化会引起UI的变化。添加动画可以让属性值从起点逐渐变化到终点，从而产生连续的动画效果。为保障动画起点和终点的正确性，属性动画会将当前在标脏队列内的所有节点进行刷新。如果发现当前动画时长较长时，需要确认当前是否有额外的节点刷新。根据变化时是否能够添加动画，可以将属性分为可动画属性和不可动画属性。判断一种属性是否适合作为可动画属性主要有两个标准："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["属性变化能够引起UI的变化。例如，", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/interaction-property/ts-universal-attributes-enable/ts-universal-attributes-enable#enabled",
          children: "enabled"
        }), "属性用于控制组件是否可以响应点击、触摸等事件，但enabled属性的变化不会引起UI的变化，因此不适合作为可动画属性。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["属性在变化时适合添加动画作为过渡。例如，", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/interaction-property/ts-universal-attributes-focus/ts-universal-attributes-focus#focusable",
          children: "focusable"
        }), "属性决定当前组件是否可以获得焦点，当focusable属性发生变化时，应立即切换到终点值以响应用户行为，不应该加入动画效果，因此不适合作为可动画属性。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "属性接口分类说明："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "可动画属性："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "系统可动画属性："
            }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
              children: [(0,jsx_runtime.jsx)(_components.thead, {
                children: (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.th, {
                    children: "分类"
                  }), (0,jsx_runtime.jsx)(_components.th, {
                    children: "说明"
                  })]
                })
              }), (0,jsx_runtime.jsxs)(_components.tbody, {
                children: [(0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "布局属性"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "位置、大小、内边距、外边距、对齐方式、权重等。"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "仿射变换"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "平移、旋转、缩放、锚点等。"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "背景"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "背景颜色、背景模糊等。"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "内容"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "文字大小、文字颜色，图片对齐方式、模糊等。"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "前景"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "前景颜色等。"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "Overlay"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "Overlay属性等。"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "外观"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "透明度、圆角、边框、阴影等。"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "..."
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "..."
                  })]
                })]
              })]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "自定义可动画属性：通过自定义属性动画机制抽象出的可动画属性。"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["不可动画属性：", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/basic-property/ts-universal-attributes-z-order/ts-universal-attributes-z-order#zindex",
            children: "zIndex"
          }), "、", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/interaction-property/ts-universal-attributes-focus/ts-universal-attributes-focus#focusable",
            children: "focusable"
          }), "等。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通常，可动画属性的参数数据类型必须具备连续性，即可以通过插值方法来填补数据点之间的空隙，达到视觉上的连续效果。但属性的参数数据类型是否能够进行插值并非决定属性是否可动画的关键因素。例如，对于设置元素水平方向布局的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-location/ts-universal-attributes-location#direction",
        children: "direction"
      }), "属性，其参数数据类型是枚举值。但是，由于位置属性是可动画属性，ArkUI同样支持在其属性值改变引起组件位置变化时添加动画。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对于可动画属性，系统不仅提供通用属性，还支持自定义可动画属性。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "系统可动画属性：组件自带的支持改变UI界面的属性接口，如位置、缩放、模糊等。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["自定义可动画属性：ArkUI提供", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-animatable-extend",
          children: "@AnimatableExtend装饰器"
        }), "用于自定义可动画属性。开发者可从自定义绘制的内容中抽象出可动画属性，用于控制每帧绘制的内容，如自定义绘制音量图标。通过自定义可动画属性，可以为ArkUI中部分原本不支持动画的属性添加动画。"]
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