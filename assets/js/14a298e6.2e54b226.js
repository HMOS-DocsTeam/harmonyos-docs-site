"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["501872"], {
561039(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_ui_js_dev_ui_js_building_ui_ui_js_building_ui_animation_ui_js_building_ui_animation_md_14a_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-ui-js-dev-ui-js-building-ui-ui-js-building-ui-animation-ui-js-building-ui-animation-md-14a.json
var site_docs_arkui_ui_js_dev_ui_js_building_ui_ui_js_building_ui_animation_ui_js_building_ui_animation_md_14a_namespaceObject = JSON.parse('{"id":"arkui/ui-js-dev/ui-js-building-ui/ui-js-building-ui-animation/ui-js-building-ui-animation","title":"动画","description":"动画分为静态动画和连续动画。","source":"@site/docs/arkui/ui-js-dev/ui-js-building-ui/ui-js-building-ui-animation/ui-js-building-ui-animation.md","sourceDirName":"arkui/ui-js-dev/ui-js-building-ui/ui-js-building-ui-animation","slug":"/arkui/ui-js-dev/ui-js-building-ui/ui-js-building-ui-animation/","permalink":"/harmonyos-docs-site/arkui/ui-js-dev/ui-js-building-ui/ui-js-building-ui-animation/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"动画","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-js-building-ui-animation","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"添加交互","permalink":"/harmonyos-docs-site/arkui/ui-js-dev/ui-js-building-ui/ui-js-building-ui-interactions/"},"next":{"title":"手势事件","permalink":"/harmonyos-docs-site/arkui/ui-js-dev/ui-js-building-ui/ui-js-building-ui-event/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/ui-js-dev/ui-js-building-ui/ui-js-building-ui-animation/ui-js-building-ui-animation.md


const frontMatter = {
	title: '动画',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-js-building-ui-animation',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '动画';

const assets = {

};



const toc = [{
  "value": "静态动画",
  "id": "静态动画",
  "level": 2
}, {
  "value": "连续动画",
  "id": "连续动画",
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
        id: "动画",
        children: "动画"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["动画分为", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E9%9D%99%E6%80%81%E5%8A%A8%E7%94%BB",
        children: "静态动画"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E8%BF%9E%E7%BB%AD%E5%8A%A8%E7%94%BB",
        children: "连续动画"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "静态动画",
      children: "静态动画"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "静态动画的核心是transform样式，主要可以实现以下三种变换类型，一次样式设置只能实现一种类型变换。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "translate"
          })
        }), "：沿水平或垂直方向将指定组件移动所需距离。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "scale"
          })
        }), "：横向或纵向将指定组件缩小或放大到所需比例。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "rotate"
          })
        }), "：将指定组件沿横轴或纵轴或中心点旋转指定的角度。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["具体的使用示例如下，更多信息请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-universal-comp-inform/js-components-common-animation/js-components-common-animation",
        children: "动画样式"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<div class=\"container\">\n  <text class=\"translate\">hello</text>\n  <text class=\"rotate\">hello</text>\n  <text class=\"scale\">hello</text>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* xxx.css */\n.container {\n  width: 100%;\n  flex-direction: column;\n  align-items: center;\n}\n.translate {\n  height: 150px;\n  width: 300px;\n  margin: 50px;\n  font-size: 50px;\n  background-color: #008000;\n  transform: translate(200px);\n}\n.rotate {\n  height: 150px;\n  width: 300px;\n  margin: 50px;\n  font-size: 50px;\n  background-color: #008000;\n  transform-origin: 200px 100px;\n  transform: rotate(45deg);\n}\n.scale {\n  height: 150px;\n  width: 300px;\n  margin: 50px;\n  font-size: 50px;\n  background-color: #008000;\n  transform: scaleX(1.5);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1"
        })
      }), " 静态动画效果图"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(806531)/* ["default"] */.A) + "",
        width: "206",
        height: "215"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "连续动画",
      children: "连续动画"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "静态动画只有开始状态和结束状态，没有中间状态，如果需要设置中间的过渡状态和转换效果，需要使用连续动画实现。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "连续动画的核心是animation样式，它定义了动画的开始状态、结束状态以及时间和速度的变化曲线。通过animation样式可以实现的效果有："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "animation-name"
          })
        }), "：设置动画执行后应用到组件上的背景颜色、透明度、宽高和变换类型。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "animation-delay"
          })
        }), "和", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "animation-duration"
          })
        }), "：分别设置动画执行后元素延迟和持续的时间。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "animation-timing-function"
          })
        }), "：描述动画执行的速度曲线，使动画更加平滑。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "animation-iteration-count"
          })
        }), "：定义动画播放的次数。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "animation-fill-mode"
          })
        }), "：指定动画执行结束后是否恢复初始状态。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "animation样式需要在css文件中先定义keyframe，在keyframe中设置动画的过渡效果，并通过一个样式类型在hml文件中调用。animation-name的使用示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<div class=\"item-container\">\n    <div class=\"item {{colorParam}}\">\n        <text class=\"txt\">color</text>\n    </div>\n    <div class=\"item {{opacityParam}}\">\n        <text class=\"txt\">opacity</text>\n    </div>\n    <input class=\"button\" type=\"button\" name=\"\" value=\"show\" onclick=\"showAnimation\"/>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* xxx.css */\n.item-container {\n  margin: 60px;\n  flex-direction: column;\n}\n.item {\n  width: 80%;\n  background-color: #f76160;\n}\n.txt {\n  text-align: center;\n  width: 200px;\n  height: 100px;\n}\n.button {\n  width: 200px;\n  margin: 10px;\n  font-size: 30px;\n  background-color: #09ba07;\n}\n.color {\n  animation-name: Color;\n  animation-duration: 8000ms;\n}\n.opacity {\n  animation-name: Opacity;\n  animation-duration: 8000ms;\n}\n@keyframes Color {\n  from {\n    background-color: #f76160;\n  }\n  to {\n    background-color: #09ba07;\n  }\n}\n@keyframes Opacity {\n  from {\n    opacity: 0.9;\n  }\n  to {\n    opacity: 0.1;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.js\nexport default {\n  data: {\n    colorParam: '',\n    opacityParam: '',\n  },\n  showAnimation: function () {\n    this.colorParam = '';\n    this.opacityParam = '';\n    this.colorParam = 'color';\n    this.opacityParam = 'opacity';\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图2"
        })
      }), " 连续动画效果图"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(49046)/* ["default"] */.A) + "",
        width: "178",
        height: "194"
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
806531(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
49046(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438129-56098dfb65571b3c9cea7266186319bb.gif");

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