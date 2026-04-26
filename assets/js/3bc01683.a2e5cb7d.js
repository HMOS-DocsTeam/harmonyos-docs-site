"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["166488"], {
440310(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_ui_js_dev_ui_js_building_ui_ui_js_building_ui_event_ui_js_building_ui_event_md_3bc_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-ui-js-dev-ui-js-building-ui-ui-js-building-ui-event-ui-js-building-ui-event-md-3bc.json
var site_docs_arkui_ui_js_dev_ui_js_building_ui_ui_js_building_ui_event_ui_js_building_ui_event_md_3bc_namespaceObject = JSON.parse('{"id":"arkui/ui-js-dev/ui-js-building-ui/ui-js-building-ui-event/ui-js-building-ui-event","title":"手势事件","description":"手势表示由单个或多个事件识别的语义动作（例如：触摸、点击和长按）。一个完整的手势也可能由多个事件组成，对应手势的生命周期。支持的事件有：","source":"@site/docs/arkui/ui-js-dev/ui-js-building-ui/ui-js-building-ui-event/ui-js-building-ui-event.md","sourceDirName":"arkui/ui-js-dev/ui-js-building-ui/ui-js-building-ui-event","slug":"/arkui/ui-js-dev/ui-js-building-ui/ui-js-building-ui-event/","permalink":"/harmonyos-docs-site/arkui/ui-js-dev/ui-js-building-ui/ui-js-building-ui-event/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"手势事件","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-js-building-ui-event","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"动画","permalink":"/harmonyos-docs-site/arkui/ui-js-dev/ui-js-building-ui/ui-js-building-ui-animation/"},"next":{"title":"页面路由","permalink":"/harmonyos-docs-site/arkui/ui-js-dev/ui-js-building-ui/ui-js-building-ui-routes/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/ui-js-dev/ui-js-building-ui/ui-js-building-ui-event/ui-js-building-ui-event.md


const frontMatter = {
	title: '手势事件',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-js-building-ui-event',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '手势事件';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    header: "header",
    img: "img",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "手势事件",
        children: "手势事件"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "手势表示由单个或多个事件识别的语义动作（例如：触摸、点击和长按）。一个完整的手势也可能由多个事件组成，对应手势的生命周期。支持的事件有："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "触摸"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "touchstart：手指触摸动作开始。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "touchmove：手指触摸后移动。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "touchcancel：手指触摸动作被打断，如来电提醒、弹窗。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "touchend：手指触摸动作结束。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "点击"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "click：用户快速轻敲屏幕。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "长按"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "longpress：用户在相同位置长时间保持与屏幕接触。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "具体的使用示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<div class=\"container\">\n  <div class=\"text-container\" onclick=\"click\">\n    <text class=\"text-style\">{{onClick}}</text>\n  </div>\n  <div class=\"text-container\" ontouchstart=\"touchStart\">\n    <text class=\"text-style\">{{touchstart}}</text>\n  </div>\n  <div class=\"text-container\" ontouchmove=\"touchMove\">\n    <text class=\"text-style\">{{touchmove}}</text>\n  </div>\n  <div class=\"text-container\" ontouchend=\"touchEnd\">\n    <text class=\"text-style\">{{touchend}}</text>\n  </div>\n  <div class=\"text-container\" ontouchcancel=\"touchCancel\">\n    <text class=\"text-style\">{{touchcancel}}</text>\n  </div>\n  <div class=\"text-container\" onlongpress=\"longPress\">\n    <text class=\"text-style\">{{onLongPress}}</text>\n  </div>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* xxx.css */\n.container {\n  width: 100%;\n  height: 100%;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.text-container {\n  margin-top: 30px;\n  flex-direction: column;\n  width: 600px;\n  height: 70px;\n  background-color: #0000FF;\n}\n.text-style {\n  width: 100%;\n  line-height: 50px;\n  text-align: center;\n  font-size: 24px;\n  color: #ffffff;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.js\nexport default {\n    data: {\n        touchstart: 'touchstart',\n        touchmove: 'touchmove',\n        touchend: 'touchend',\n        touchcancel: 'touchcancel',\n        onClick: 'onclick',\n        onLongPress: 'onLongPress',\n    },\n    touchCancel: function (event) {\n        console.info('event is', JSON.stringify(event));\n        this.touchcancel = 'canceled';\n    },\n    touchEnd: function(event) {\n        console.info('event is', JSON.stringify(event));\n        this.touchend = 'ended';\n    },\n    touchMove: function(event) {\n        console.info('event is', JSON.stringify(event));\n        this.touchmove = 'moved';\n    },\n    touchStart: function(event) {\n        console.info('event is', JSON.stringify(event));\n        this.touchstart = 'touched';\n    },\n    longPress: function() {\n        this.onLongPress = 'longPressed';\n    },\n    click: function() {\n        this.onClick = 'clicked';\n    },\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(983802)/* ["default"] */.A) + "",
        width: "299",
        height: "525"
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
983802(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958084-62cf263c5138687694a1937de5e0fe61.gif");

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