"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["527419"], {
146431(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_set_navigation_routing_arkts_navigation_introduction_arkts_navigation_introduction_md_ce5_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-set-navigation-routing-arkts-navigation-introduction-arkts-navigation-introduction-md-ce5.json
var site_docs_arkui_arkts_ui_development_arkts_set_navigation_routing_arkts_navigation_introduction_arkts_navigation_introduction_md_ce5_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-set-navigation-routing/arkts-navigation-introduction/arkts-navigation-introduction","title":"组件导航和页面路由概述","description":"页面是指由布局、组件、交互逻辑等构成的可视化交互单元，承载着特定功能逻辑与信息展示，是用户与应用进行操作交互的核心界面载体。一个完整的应用往往由多个页面组成，组件导航（Navigation）和页面路由（@ohos.router）均提供了应用内的页面跳转能力。","source":"@site/docs/arkui/arkts-ui-development/arkts-set-navigation-routing/arkts-navigation-introduction/arkts-navigation-introduction.md","sourceDirName":"arkui/arkts-ui-development/arkts-set-navigation-routing/arkts-navigation-introduction","slug":"/arkui/arkts-ui-development/arkts-set-navigation-routing/arkts-navigation-introduction/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-set-navigation-routing/arkts-navigation-introduction/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"组件导航和页面路由概述","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-navigation-introduction","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"@Env：环境变量","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-env-property/arkts-env-system-property/"},"next":{"title":"组件导航(Navigation) (推荐)","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-set-navigation-routing/arkts-navigation-navigation/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-set-navigation-routing/arkts-navigation-introduction/arkts-navigation-introduction.md


const frontMatter = {
	title: '组件导航和页面路由概述',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-navigation-introduction',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '组件导航和页面路由概述';

const assets = {

};



const toc = [{
  "value": "架构差异",
  "id": "架构差异",
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
    li: "li",
    ol: "ol",
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
        id: "组件导航和页面路由概述",
        children: "组件导航和页面路由概述"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "页面是指由布局、组件、交互逻辑等构成的可视化交互单元，承载着特定功能逻辑与信息展示，是用户与应用进行操作交互的核心界面载体。一个完整的应用往往由多个页面组成，组件导航（Navigation）和页面路由（@ohos.router）均提供了应用内的页面跳转能力。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在组件导航（Navigation）框架下，“页面”通过NavDestination组件承载，特指一个NavDestination组件包含的内容。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在页面路由（@ohos.router）框架下，“页面”特指@Entry装饰的自定义组件。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "相较而言，组件导航（Navigation）将页面放在Navigation组件内部进行跳转，具备更强的一次开发多端部署能力，可以进行更加灵活的页面栈操作，同时支持更丰富的动效和生命周期。因此，推荐使用组件导航（Navigation）来实现页面跳转以及组件内的跳转，以获得更佳的使用体验。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "架构差异",
      children: "架构差异"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从ArkUI组件树层级上来看，原先由Router管理的page在页面栈管理节点stage的下面。Navigation作为导航容器组件，可以挂载在单个page节点下，也可以叠加、嵌套。Navigation管理了标题栏、内容区和工具栏，内容区用于显示用户自定义页面的内容，并支持页面的路由能力。Navigation的这种设计上有如下优势："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(661403)/* ["default"] */.A) + "",
        width: "1429",
        height: "714"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "接口上显式区分标题栏、内容区和工具栏，实现更加灵活的管理和UX动效能力；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "显式提供路由容器概念，由开发者决定路由容器的位置，支持在全模态、半模态、弹窗中显示；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "整合UX设计和一次开发多端部署能力，默认提供统一的标题显示、页面切换和单双栏适配能力；"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["基于通用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-builder",
          children: "UIBuilder"
        }), "能力，由开发者决定页面别名和页面UI对应关系，提供更加灵活的页面配置能力；"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "基于组件属性动效和共享元素动效能力，将页面切换动效转换为组件属性动效实现，提供更加丰富和灵活的切换动效；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "开放了页面栈对象，开发者可以继承，能更好的管理页面显示。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "能力对比",
      children: "能力对比"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "业务场景"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Navigation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Router"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "一次开发多端部署能力"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持，Auto模式自适应单栏和双栏显示。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "跳转指定页面"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "pushPath & pushDestination"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "pushUrl & pushNameRoute"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "跳转HSP中页面"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "跳转HAR中页面"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "跳转传参"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "获取指定页面参数"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "传参类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "传参为对象形式。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "传参为对象形式，对象中暂不支持方法变量。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "跳转结果回调"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "跳转单例页面"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "页面返回"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "页面返回传参"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "返回指定路由"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "页面返回弹窗"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持，通过路由拦截实现。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "showAlertBeforeBackPage"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "路由替换"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "replacePath & replacePathByName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "replaceUrl & replaceNameRoute"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "路由栈清理"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "clear"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "clear"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "清理指定路由"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "removeByIndexes & removeByName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "转场动画"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "自定义转场动画"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持，动画类型受限。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "屏蔽转场动画"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持全局和单次。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持，设置pageTransition方法duration为0。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "geometryTransition共享元素动画"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持（NavDestination之间共享）。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "页面生命周期监听"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UIObserver.on('navDestinationUpdate')"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UIObserver.on('routerPageUpdate')"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "获取页面栈对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "路由拦截"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持通过setInterception做路由拦截 。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "路由栈信息查询"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "getState() & getLength()"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "路由栈move操作"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "moveToTop & moveIndexToTop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "沉浸式页面"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持，需通过window配置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "设置页面标题栏（titlebar）和工具栏（toolbar）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "模态嵌套路由"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
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
661403(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477677-d9b81eecd692a2e1d4b89f8604ea95fd.png");

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