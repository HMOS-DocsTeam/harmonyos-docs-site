"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["653567"], {
220534(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_form_kit_arkts_ui_arkts_ui_liveform_arkts_ui_liveform_funinteraction_development_arkts_ui_liveform_funinteraction_development_md_307_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-form-kit-arkts-ui-arkts-ui-liveform-arkts-ui-liveform-funinteraction-development-arkts-ui-liveform-funinteraction-development-md-307.json
var site_docs_form_kit_arkts_ui_arkts_ui_liveform_arkts_ui_liveform_funinteraction_development_arkts_ui_liveform_funinteraction_development_md_307_namespaceObject = JSON.parse('{"id":"form-kit/arkts-ui/arkts-ui-liveform/arkts-ui-liveform-funinteraction-development/arkts-ui-liveform-funinteraction-development","title":"趣味交互类型互动卡片开发指导","description":"趣味交互类型互动卡片当前仅支持基于快游戏开发的卡片小游戏，互动卡片默认处于非激活态，当用户点击卡片时，卡片切换为激活态，并开始游戏。在游戏过程中，用户可以点击“暂停”按钮进入暂停态。在暂停态，用户可以通过“继续游戏”和“停止游戏”按钮选择返回激活态继续游戏，或者结束游戏。","source":"@site/docs/form-kit/arkts-ui/arkts-ui-liveform/arkts-ui-liveform-funinteraction-development/arkts-ui-liveform-funinteraction-development.md","sourceDirName":"form-kit/arkts-ui/arkts-ui-liveform/arkts-ui-liveform-funinteraction-development","slug":"/form-kit/arkts-ui/arkts-ui-liveform/arkts-ui-liveform-funinteraction-development/","permalink":"/harmonyos-docs-site/form-kit/arkts-ui/arkts-ui-liveform/arkts-ui-liveform-funinteraction-development/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"趣味交互类型互动卡片开发指导","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-ui-liveform-funinteraction-development","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"互动卡片概述","permalink":"/harmonyos-docs-site/form-kit/arkts-ui/arkts-ui-liveform/arkts-ui-liveform-overview/"},"next":{"title":"场景动效类型互动卡片概述","permalink":"/harmonyos-docs-site/form-kit/arkts-ui/arkts-ui-liveform/arkts-ui-liveform-sceneanimation/arkts-ui-liveform-sceneanimation-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/form-kit/arkts-ui/arkts-ui-liveform/arkts-ui-liveform-funinteraction-development/arkts-ui-liveform-funinteraction-development.md


const frontMatter = {
	title: '趣味交互类型互动卡片开发指导',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-ui-liveform-funinteraction-development',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '趣味交互类型互动卡片开发指导';

const assets = {

};



const toc = [{
  "value": "基本概念",
  "id": "基本概念",
  "level": 2
}, {
  "value": "激活态",
  "id": "激活态",
  "level": 3
}, {
  "value": "暂停态",
  "id": "暂停态",
  "level": 3
}, {
  "value": "非激活态",
  "id": "非激活态",
  "level": 3
}, {
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 2
}, {
  "value": "开发指导",
  "id": "开发指导",
  "level": 2
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
    strong: "strong",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "趣味交互类型互动卡片开发指导",
        children: "趣味交互类型互动卡片开发指导"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["趣味交互类型互动卡片当前仅支持基于", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/quickApp-Guides/quickgame-interact-card-0000002045917828",
        children: "快游戏"
      }), "开发的卡片小游戏，互动卡片默认处于非激活态，当用户点击卡片时，卡片切换为激活态，并开始游戏。在游戏过程中，用户可以点击“暂停”按钮进入暂停态。在暂停态，用户可以通过“继续游戏”和“停止游戏”按钮选择返回激活态继续游戏，或者结束游戏。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "趣味交互类型互动卡片主要包含三个状态：激活态、暂停态和非激活态，分别对应游戏进行、游戏暂停、游戏结束。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "激活态",
      children: "激活态"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在此状态下，卡片UI由卡片提供方基于快游戏所开发的卡片小游戏页面承载。此时系统支持游戏内容渲染到卡片自身渲染区域之外的“破框”效果。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1"
        })
      }), " 趣味交互类型互动卡片激活态"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(187118)/* ["default"] */.A) + "",
        width: "328",
        height: "362"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "暂停态",
      children: "暂停态"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在此状态下，卡片UI由卡片提供方widgetCard.ets中的内容所承载。同时系统在卡片上默认展示“继续游戏”和“停止游戏”按钮。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图2"
        })
      }), " 趣味交互类型互动卡片暂停态"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(684723)/* ["default"] */.A) + "",
        width: "327",
        height: "343"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "非激活态",
      children: "非激活态"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "即普通卡片状态，在此状态下，卡片与普通卡片行为无异，遵循既有的卡片开发规范，卡片UI由卡片提供方widgetCard.ets中的内容所承载。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图3"
        })
      }), " 趣味交互类型互动卡片非激活态"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(349704)/* ["default"] */.A) + "",
        width: "323",
        height: "343"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "用户与卡片交互时，例如点击、长按、拖拽等，卡片的交互响应热区始终与卡片自身渲染区域等大。即使动效渲染区域大于卡片自身渲染区域，超出部分也仅做UI呈现，不响应交互事件。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "激活态时，卡片自身渲染区域范围内交互事件由卡片提供方开发的卡片小游戏页面响应；其他状态下交互事件由卡片提供方开发的普通卡片响应。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "同一时刻，全局只支持一个卡片进行趣味交互，即仅支持一个卡片处于激活态或暂停态。用户点击卡片，切换卡片进入激活态时，其他趣味交互类型互动卡片强制切换为非激活态。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["其他设计规范和约束请参考创新互动卡片", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/quickApp-Guides/quickgame-interact-card-dev-0000002045919412",
          children: "开发指导"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发指导",
      children: "开发指导"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["游戏内容具体开发可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/quickApp-Guides/quickgame-interact-card-dev-0000002045919412",
        children: "互动卡片小游戏开发指导"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["端侧卡片配置开发可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/form-kit/arkts-ui/arkts-ui-widget-configuration#funinteractionparams%E6%A0%87%E7%AD%BE",
        children: "趣味交互类型互动卡片配置"
      }), "。"]
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
349704(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798660-f34759e4b4f5b8ada8a89be7dabc900f.jpg");

},
187118(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958308-0d0e8016ae210649f9dea173346bdd92.gif");

},
684723(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478309-9548eff3973041968bc54c032d089d18.jpg");

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