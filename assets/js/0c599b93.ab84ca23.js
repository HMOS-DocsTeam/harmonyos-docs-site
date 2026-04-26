"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["80532"], {
64445(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_use_animation_arkts_animation_arkts_animation_md_0c5_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-use-animation-arkts-animation-arkts-animation-md-0c5.json
var site_docs_arkui_arkts_ui_development_arkts_use_animation_arkts_animation_arkts_animation_md_0c5_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-use-animation/arkts-animation/arkts-animation","title":"动画概述","description":"UI（用户界面）是用户与设备进行交互的界面，包含各种可视化组件（如按钮、列表等）。属性作为接口，用于控制组件的行为，属性值的变化会引起UI的变化。动画可在UI发生改变时，添加流畅的过渡效果，使属性值从起始状态逐渐变化到终点状态，避免因瞬间变化造成的突兀感，保持用户的视觉焦点。","source":"@site/docs/arkui/arkts-ui-development/arkts-use-animation/arkts-animation/arkts-animation.md","sourceDirName":"arkui/arkts-ui-development/arkts-use-animation/arkts-animation","slug":"/arkui/arkts-ui-development/arkts-use-animation/arkts-animation/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-use-animation/arkts-animation/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"动画概述","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-animation","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"支持焦点处理","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/arkts-common-events-focus-event/"},"next":{"title":"属性动画概述","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-attribute/arkts-attribute-animation-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-use-animation/arkts-animation/arkts-animation.md


const frontMatter = {
	title: '动画概述',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-animation',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '动画概述';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
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
        id: "动画概述",
        children: "动画概述"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "UI（用户界面）是用户与设备进行交互的界面，包含各种可视化组件（如按钮、列表等）。属性作为接口，用于控制组件的行为，属性值的变化会引起UI的变化。动画可在UI发生改变时，添加流畅的过渡效果，使属性值从起始状态逐渐变化到终点状态，避免因瞬间变化造成的突兀感，保持用户的视觉焦点。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(769246)/* ["default"] */.A) + "",
        width: "521",
        height: "435"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "动画的目的包括："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "使界面的过渡自然流畅。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "增强用户从界面获得的反馈感和互动感。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在内容加载等场景中，增加用户的耐心，缓解等待带来的不适感。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "引导用户了解和操作设备。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在需要为UI变化添加过渡的场景，都可以使用动画，如开机、应用启动退出、下拉进入控制中心等。这些动画可向用户提供关于其操作的反馈，并有助于让用户始终关注界面。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ArkUI中提供多种动画接口（", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-attribute/arkts-attribute-animation-overview",
        children: "属性动画"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-transition/arkts-transition-overview",
        children: "转场动画"
      }), "等），用于驱动属性值按照设定的动画参数，从起始值逐渐变化到终点值。尽管变化过程中参数值并非绝对的连续，而是具有一定的离散性。但由于人眼会产生视觉暂留，所以最终看到的就是一个“连续”的动画。UI的一次改变称为一个动画帧，对应一次屏幕刷新。决定动画流畅度的一个重要指标就是帧率FPS（Frames Per Second），即每秒的动画帧数，帧率越高则动画就会越流畅。ArkUI中，动画参数包含了如动画时长、动画曲线等参数。", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-curve/arkts-traditional-curve",
        children: "动画曲线"
      }), "作为主要因素，决定了属性值变化的规律。以线性动画曲线为例，在动画时长内，属性值将从起点值匀速变化到终点值。属性过快或过慢的变化，都可能带来不好的视觉感受，影响用户体验。因此动画参数特别是动画曲线，需要结合场景和曲线特点进行设计和调整。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "动画接口驱动属性值按照动画参数决定的规律，从原来的状态连续过渡到新的状态，进而在UI上产生连续的视觉效果。本文将按照如下结构，提供各种动画的使用方法和注意事项，使开发者快速学习动画。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-attribute/arkts-attribute-animation-overview",
            children: "属性动画"
          }), "：最基础的动画类型，按照动画参数逐帧驱动属性的变化，产生一帧帧的动画效果。除其中的自定义属性动画外，动画过程的驱动由系统完成，应用侧不感知动画过程。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-transition/arkts-transition-overview",
            children: "转场动画"
          }), "：为组件在出现和消失时添加过渡动画。为了保证动画一致性，部分接口动画曲线已内置，不支持开发者自定义。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["不建议在应用内使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability",
              children: "UIAbility"
            }), "组合所有的界面：UIAbility是一个任务，会在多任务界面独立显示为一个卡片，UIAbility之间的跳转相当于任务之间的跳转。以应用内查看大图场景为例，不建议调用图库的UIAbility来打开图片查看大图，因为这会导致任务的跳转，图库的UIAbility也会加入多任务界面中。正确的方式是应用内构建大图组件，通过模态转场去调起大图组件，一个任务内的所有的界面都在一个UIAbility内闭环。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["导航转场中，应使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-basic-components-navigation/ts-basic-components-navigation",
              children: "Navigation"
            }), "组件实现转场动画。过去的page+", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-router/js-apis-router",
              children: "router"
            }), "方式在实现导航转场过程中，因为page和page之间相互独立，其联动动画效果受限。不仅容易导致页面之间的割裂，并且不支持一次开发多端部署。"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "/arkui/arkts-ui-development/arkts-use-animation/arkts-particle-animation",
            children: "粒子动画"
          }), "：介绍粒子动画的原理及使用方法。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "/arkui/arkts-ui-development/arkts-use-animation/arkts-component-animation",
            children: "组件动画"
          }), "：组件提供默认动效（如", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-list/ts-container-list",
            children: "List"
          }), "的滑动动效）便于开发者使用，同时部分组件还支持定制化动效。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-curve/arkts-traditional-curve",
            children: "动画曲线"
          }), "：介绍传统曲线和弹簧曲线的特点和使用方式。动画曲线影响属性值的运动规律，进而决定界面的动画效果。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-smoothing",
            children: "动画衔接"
          }), "：介绍如何实现动画与动画之间、手势与动画之间的自然过渡。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-effects/arkts-blur-effect",
            children: "动画效果"
          }), "：介绍模糊、大阴影和颜色渐变等高阶效果接口的使用方法。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "/arkui/arkts-ui-development/arkts-use-animation/arkts-animator",
            children: "帧动画"
          }), "：系统侧提供在动画过程中的插值结果，由开发者每帧修改属性值产生动画，相比于属性动画，有可实现暂停的优点，但性能不如属性动画。"]
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
769246(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438025-318368d18cf345b3649cd661c41cf985.gif");

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