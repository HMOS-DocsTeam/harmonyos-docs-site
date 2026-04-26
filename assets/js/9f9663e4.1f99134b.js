"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["293074"], {
433452(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_use_animation_arkts_animation_transition_arkts_rotation_transition_animation_arkts_rotation_transition_animation_md_9f9_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-use-animation-arkts-animation-transition-arkts-rotation-transition-animation-arkts-rotation-transition-animation-md-9f9.json
var site_docs_arkui_arkts_ui_development_arkts_use_animation_arkts_animation_transition_arkts_rotation_transition_animation_arkts_rotation_transition_animation_md_9f9_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-use-animation/arkts-animation-transition/arkts-rotation-transition-animation/arkts-rotation-transition-animation","title":"旋转屏动画","description":"旋转屏动画主要分为两类：布局切换的旋转屏动画和透明度变化的旋转屏动画，旨在实现屏幕显示方向变化时的自然过渡。布局切换的旋转屏动画实现较为简便，例如在module.json5中配置自动旋转（或设置窗口显示方向）即可实现。而透明度变化的旋转屏动画则需在module.json5配置的基础上，预备两套视图，在屏幕旋转时，通过视图切换，使消失的视图呈现渐隐效果，新出现的视图则渐显，从而营造流畅的视觉体验。","source":"@site/docs/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-transition/arkts-rotation-transition-animation/arkts-rotation-transition-animation.md","sourceDirName":"arkui/arkts-ui-development/arkts-use-animation/arkts-animation-transition/arkts-rotation-transition-animation","slug":"/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-transition/arkts-rotation-transition-animation/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-transition/arkts-rotation-transition-animation/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"旋转屏动画","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-rotation-transition-animation","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"共享元素转场 (一镜到底)","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-transition/arkts-shared-element-transition/"},"next":{"title":"页面转场动画 (不推荐)","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-transition/arkts-page-transition-animation/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-transition/arkts-rotation-transition-animation/arkts-rotation-transition-animation.md


const frontMatter = {
	title: '旋转屏动画',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-rotation-transition-animation',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '旋转屏动画';

const assets = {

};



const toc = [{
  "value": "布局切换的旋转屏动画",
  "id": "布局切换的旋转屏动画",
  "level": 2
}, {
  "value": "透明度变化的旋转屏动画",
  "id": "透明度变化的旋转屏动画",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    p: "p",
    pre: "pre",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "旋转屏动画",
        children: "旋转屏动画"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["旋转屏动画主要分为两类：", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%B8%83%E5%B1%80%E5%88%87%E6%8D%A2%E7%9A%84%E6%97%8B%E8%BD%AC%E5%B1%8F%E5%8A%A8%E7%94%BB",
        children: "布局切换的旋转屏动画"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E9%80%8F%E6%98%8E%E5%BA%A6%E5%8F%98%E5%8C%96%E7%9A%84%E6%97%8B%E8%BD%AC%E5%B1%8F%E5%8A%A8%E7%94%BB",
        children: "透明度变化的旋转屏动画"
      }), "，旨在实现屏幕显示方向变化时的自然过渡。布局切换的旋转屏动画实现较为简便，例如在module.json5中配置自动旋转（或设置窗口显示方向）即可实现。而透明度变化的旋转屏动画则需在module.json5配置的基础上，预备两套视图，在屏幕旋转时，通过视图切换，使消失的视图呈现渐隐效果，新出现的视图则渐显，从而营造流畅的视觉体验。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "布局切换的旋转屏动画",
      children: "布局切换的旋转屏动画"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "布局切换时的旋转屏动画，是在屏幕显示方向改变时，为窗口与应用视图同步旋转而设计的大小和位置过渡动画。这种布局切换的旋转屏动画是系统默认的，便于开发者实现。当屏幕显示方向变化时，系统会生成窗口旋转动画，并自动调整窗口大小以匹配旋转后的尺寸。在此过程中，窗口会通知对应的应用，要求其根据新的窗口大小重新布局，产生与窗口旋转动画参数相同的布局动画。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "切换屏幕方向即可实现布局切换的旋转屏动画效果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct rotation {\n  build() {\n    Stack() {\n      // 请将$r('app.media.tree')替换为实际资源文件\n      Image($r('app.media.tree'))\n        .position({ x: 0, y: 0 })\n        .size({ width: 100, height: 100 })\n        .id('image1')\n    }\n    .backgroundColor(Color.White)\n    .size({ width: '100%', height: '100%' })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "需要在项目的module.json5文件中的abilities列表里添加\"orientation\"，指定为\"auto_rotation\"。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\"orientation\": \"auto_rotation\",\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "布局切换的旋转屏动画，会对同步旋转的窗口与应用视图做大小和位置的过渡。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(148242)/* ["default"] */.A) + "",
        width: "288",
        height: "342"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "透明度变化的旋转屏动画",
      children: "透明度变化的旋转屏动画"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["透明度变化的旋转屏动画在屏幕显示方向变化时启用，当窗口进行旋转动画时，为旋转过程中新增或删除的组件添加默认透明度转场，以实现组件的优雅出现和消失。此功能通过监听窗口旋转事件，在事件中切换组件的视图效果，如果消失视图的根节点和新出现视图的根节点未设置转场效果，会为其自动添加默认透明度转场（即", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/animation/ts-transition-animation-component/ts-transition-animation-component#transitioneffect10%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
        children: "TransitionEffect"
      }), ".OPACITY），展现出透明度的渐隐和渐显效果。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { display } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct rotation {\n\n  // 获取通过监听窗口的windowsSizeChange事件得到的屏幕显示方向\n  @StorageLink('orientation') myOrientation: display.Orientation = display.Orientation.PORTRAIT;\n\n  build() {\n    Stack() {\n\n      // 当屏幕显示方向变化时，切换组件的视图效果\n      if (this.myOrientation == display.Orientation.PORTRAIT || this.myOrientation == display.Orientation.PORTRAIT_INVERTED) {\n        // 请将$r('app.media.sky')替换为实际资源文件\n        Image($r('app.media.sky'))\n          .size({ width: 100, height: 100 })\n          .id('image1')\n\n        // 开发者也可以通过自行设置transition的TransitionEffect.OPACITY转场效果来实现旋转屏动画的透明度变化\n        // .transition(TransitionEffect.OPACITY)\n      } else {\n        // 请将$r('app.media.tree')替换为实际资源文件\n        Image($r('app.media.tree'))\n          .position({ x: 0, y: 0 })\n          .size({ width: 200, height: 200 })\n          .id('image2')\n\n        // 开发者也可以通过自行设置transition的TransitionEffect.OPACITY来实现旋转屏动画的透明度变化\n        // .transition(TransitionEffect.OPACITY)\n      }\n    }\n    .backgroundColor(Color.White)\n    .size({ width: '100%', height: '100%' })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["监听窗口旋转的同步事件windowSizeChange来实现视图的切换。例如可在EntryAbility.ets文件的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability#onwindowstagecreate",
        children: "onWindowStageCreate"
      }), "方法中添加处理逻辑以获取屏幕的显示方向。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { display, window } from '@kit.ArkUI';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst DOMAIN = 0x0000;\nconst TAG: string = 'EntryAbility';\n// ...\n  onWindowStageCreate(windowStage: window.WindowStage): void {\n    // ...\n    hilog.info(DOMAIN, TAG, '%{public}s', 'Ability onWindowStageCreate');\n    let mainWindow: window.Window;\n    try {\n      mainWindow = windowStage.getMainWindowSync();\n      let displayClass: display.Display = display.getDefaultDisplaySync();\n      AppStorage.setOrCreate('orientation', displayClass.orientation);\n      // 监听窗口的windowsSizeChange事件，旋转屏时会触发该事件\n      mainWindow.on('windowSizeChange', (data) => {\n        hilog.info(DOMAIN, TAG, 'Succeeded in enabling the listener for window size changes. Data: ' + data);\n        let displayClass: display.Display | null = null;\n        try {\n          displayClass = display.getDefaultDisplaySync();\n          hilog.info(DOMAIN, TAG, 'display orientation is ' + displayClass.orientation);\n          // 获取屏幕的显示方向\n          AppStorage.set('orientation', displayClass.orientation);\n        } catch {\n          return;\n        }\n      })\n    } catch {\n      hilog.error(DOMAIN, TAG, '%{public}s', 'error');\n      return;\n    }\n    // ...\n\n    windowStage.loadContent('pages/Index', (err) => {\n      if (err.code) {\n        hilog.error(DOMAIN, TAG, 'Failed to load the content. Cause: %{public}s', JSON.stringify(err) ?? '');\n        return;\n      }\n      hilog.info(DOMAIN, TAG, 'Succeeded in loading the content.');\n    });\n  }\n\n  // ...\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "需要在项目的module.json5文件中的abilities列表里添加\"orientation\"，指定为\"auto_rotation\"。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\"orientation\": \"auto_rotation\",\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "透明度变化的旋转屏动画，会对窗口做大小和位置的过渡，并同时对应用视图做切换过渡，且为消失隐藏的应用视图做渐隐效果，对新出现的视图做渐显的效果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(35653)/* ["default"] */.A) + "",
        width: "220",
        height: "416"
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
148242(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477991-d3428c0e9d5335d442cbdf2cb61cd61c.gif");

},
35653(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798342-371e24152b7e1eea5b2cbed155ddfc8d.gif");

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