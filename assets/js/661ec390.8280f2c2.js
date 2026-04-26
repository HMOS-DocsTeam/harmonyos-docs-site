"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["395657"], {
550156(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_user_defined_capabilities_arkts_user_defined_composition_arkts_user_defined_composition_md_661_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-user-defined-capabilities-arkts-user-defined-composition-arkts-user-defined-composition-md-661.json
var site_docs_arkui_arkts_ui_development_arkts_user_defined_capabilities_arkts_user_defined_composition_arkts_user_defined_composition_md_661_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-user-defined-composition/arkts-user-defined-composition","title":"自定义组合","description":"概述","source":"@site/docs/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-user-defined-composition/arkts-user-defined-composition.md","sourceDirName":"arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-user-defined-composition","slug":"/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-user-defined-composition/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-user-defined-composition/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"自定义组合","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-user-defined-composition","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"自定义能力概述","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-user-defined/"},"next":{"title":"自定义节点概述","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-nodes/arkts-user-defined-node/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-user-defined-composition/arkts-user-defined-composition.md


const frontMatter = {
	title: '自定义组合',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-user-defined-composition',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '自定义组合';

const assets = {

};



const toc = [{
  "value": "概述",
  "id": "概述",
  "level": 2
}, {
  "value": "基本概念",
  "id": "基本概念",
  "level": 2
}, {
  "value": "自定义组合的典型场景",
  "id": "自定义组合的典型场景",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
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
        id: "自定义组合",
        children: "自定义组合"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "自定义组合提供组件粒度的自定义能力，开发者可通过自定义组件组合已有组件来构建特定的符合业务逻辑的高级组件。组件组合的过程中可以使用布局容器和通用布局属性来对子组件进行自定义的位置排布，可以使用Canvas组件完成纯自绘，也可以使用Shape类组件，通过形状的组合，构建几何图形，实现带交互的图形动画。动画模块可针对不同类型的属性，实现灵活的动画效果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "自定义封装：将多个基础组件组合成具有特定功能的复合组件。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "自定义布局：在对多个组件进行组合的过程中，各个组件的位置、尺寸都应该符合业务场景，因此开发者需要对各个子组件进行自定义的排布。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "自定义绘制：通过组合各类组件，组合成能达成各种绘制效果的高级组件。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "自定义动画：组合的各类组件可以通过不同的方式定义动画，实现组件位置、尺寸、样式或绘制内容随时间变化的效果。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "自定义组合的典型场景",
      children: "自定义组合的典型场景"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "场景"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "使用@Component装饰器构建自定义组件"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["自定义封装的代表性方法是", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-create-custom-components#component",
              children: "@Component"
            }), "装饰器，可以通过将已有的自定义组件和基础组件进行组装，构成新的自定义组件。通常用于有内部成员方法、状态变量的部件，例如：视频列表里面的每一个视频卡片，卡片内部有自己的视频组件、文本组件、点击事件、跳转链接等等。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "使用@Builder装饰器构建可复用的UI结构"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["相比于", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-create-custom-components#component",
              children: "@Component"
            }), "装饰器，", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-builder",
              children: "@Builder"
            }), "装饰器更加轻量级，可以将纯粹的UI结构封装成方法，在各个自定义组件的build方法中进行调用，达成UI结构复用的目的。相当于将", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-create-custom-components#component",
              children: "@Component"
            }), "里面的build部分单独抽出来，本身不包含状态变量。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "使用Stack容器对子组件进行自定义布局"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["对于子组件明确、结构相对简单的布局场景，可以使用层叠布局，通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-layout-development/arkts-build-layout/arkts-layout-development-stack-layout",
              children: "Stack"
            }), "容器，结合", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-size/ts-universal-attributes-size",
              children: "尺寸"
            }), "和", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-location/ts-universal-attributes-location",
              children: "位置"
            }), "的通用属性，来控制子组件的布局。", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-layout-development/arkts-build-layout/arkts-layout-development-stack-layout",
              children: "Stack"
            }), "组件中的子元素依次入栈，通过顺序来控制遮盖效果，具有较强的页面层叠能力，常用于实现卡片层叠等效果。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "结合自定义组件的布局生命周期回调方法进行自定义布局"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["对于子组件组成是动态的场景，可结合布局生命周期回调方法实现", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-page-custom-components-layout",
              children: "自定义组件的自定义布局"
            }), "，随子组件的动态变化，动态调整子组件的尺寸和位置，形成特定的布局算法。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "组合基础图形实现自定义绘制效果"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["如果高级组件的UI效果是较为规则化的，例如：矩形、圆形、多边形等基础的图形，以及基础图形组合成的自定义图形，可通过基础的图形类组件（", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/graphic-drawing/ts-drawing-components-rect/ts-drawing-components-rect",
              children: "Rect"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/graphic-drawing/ts-drawing-components-path/ts-drawing-components-path",
              children: "Path"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/graphic-drawing/ts-drawing-components-circle/ts-drawing-components-circle",
              children: "Circle"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/graphic-drawing/ts-drawing-components-ellipse/ts-drawing-components-ellipse",
              children: "Ellipse"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/graphic-drawing/ts-drawing-components-polyline/ts-drawing-components-polyline",
              children: "Polyline"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/graphic-drawing/ts-drawing-components-polygon/ts-drawing-components-polygon",
              children: "Polygon"
            }), "）组合完成。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "使用Canvas组件实现高自由度的自定义绘制"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["如果高级组件的UI效果是非常复杂或者定制化的，例如存在图像或文本等内容，可通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-draw/arkts-drawing-customization-on-canvas",
              children: "Canvas"
            }), "组件实现更自由的自定义绘制效果，其接口和W3C标准的Canvas接口相近，适用于移植基于W3C标准的Canvas的绘制库。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "通过属性动画能力实现动画效果"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["可动画属性在", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-attribute/arkts-attribute-animation-apis",
              children: "animation"
            }), "属性前调用，改变该属性的值，可以使animation属性的动画效果生效，比如height、width、backgroundColor等。", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-attribute/arkts-attribute-animation-apis",
              children: "属性动画"
            }), "是最基础易懂的动画，针对不同的场景，根据需要做动画的属性的数量、动画参数的异同、动画的阶段数量，可以使用不同的动画接口完成对应的效果。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "通过@AnimatableExtend装饰器实现动画效果"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["不可动画属性无法通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-attribute/arkts-attribute-animation-apis",
              children: "属性动画"
            }), "实现动画效果。可通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-animatable-extend",
              children: "@AnimatableExtend"
            }), "装饰器实现动画效果，如果该属性是number类型，那只要将该属性放置在用@AnimatableExtend全局定义的方法里面，就可以将其转变为一个可接受animation控制的可动画属性；而对于非number类型的属性，可通过实现", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-animatable-extend",
              children: "AnimatableArithmetic"
            }), "的子类，实现plus、subtract、multiply、equals方法，然后就可以使用@AnimatableExtend装饰器实现动画效果。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "通过@ohos.animator动画接口实现动画效果"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["更加灵活的是帧动画，通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-animator/js-apis-animator",
              children: "@ohos.animator"
            }), "动画接口实现逐帧方法回调，在回调中对节点的属性进行修改，或者结合自定义绘制的能力来调整绘制内容，可以实现帧动画的效果。"]
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