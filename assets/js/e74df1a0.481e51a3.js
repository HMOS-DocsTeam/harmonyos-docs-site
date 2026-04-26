"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["6880"], {
365376(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_arkts_ui_js_apis_arkui_uicontext_arkts_apis_uicontext_dynamicsyncscene_arkts_apis_uicontext_dynamicsyncscene_md_e74_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-arkts-ui-js-apis-arkui-uicontext-arkts-apis-uicontext-dynamicsyncscene-arkts-apis-uicontext-dynamicsyncscene-md-e74.json
var site_docs_ref_arkui_api_arkui_arkts_ui_js_apis_arkui_uicontext_arkts_apis_uicontext_dynamicsyncscene_arkts_apis_uicontext_dynamicsyncscene_md_e74_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-dynamicsyncscene/arkts-apis-uicontext-dynamicsyncscene","title":"Class (DynamicSyncScene)","description":"提供组件自定义场景下相关帧率的配置。","source":"@site/docs-ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-dynamicsyncscene/arkts-apis-uicontext-dynamicsyncscene.md","sourceDirName":"arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-dynamicsyncscene","slug":"/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-dynamicsyncscene/arkts-apis-uicontext-dynamicsyncscene","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-dynamicsyncscene/arkts-apis-uicontext-dynamicsyncscene","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"title":"Class (DynamicSyncScene)","sidebar_position":7,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-uicontext-dynamicsyncscene","kit":"应用框架","last_updated":"2026-04-22","slug":"arkts-apis-uicontext-dynamicsyncscene"},"sidebar":"ref","previous":{"title":"Class (DragController)","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-dragcontroller/arkts-apis-uicontext-dragcontroller"},"next":{"title":"Class (FocusController)","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-focuscontroller/arkts-apis-uicontext-focuscontroller"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-dynamicsyncscene/arkts-apis-uicontext-dynamicsyncscene.md


const frontMatter = {
	title: 'Class (DynamicSyncScene)',
	sidebar_position: 7,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-uicontext-dynamicsyncscene',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'arkts-apis-uicontext-dynamicsyncscene'
};
const contentTitle = 'Class (DynamicSyncScene)';

const assets = {

};



const toc = [{
  "value": "setFrameRateRange12+",
  "id": "setframeraterange12",
  "level": 2
}, {
  "value": "getFrameRateRange12+",
  "id": "getframeraterange12",
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
        id: "class-dynamicsyncscene",
        children: "Class (DynamicSyncScene)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "提供组件自定义场景下相关帧率的配置。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(782837)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "本模块首批接口从API version 10开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "本Class首批接口从API version 12开始支持。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["以下接口需先使用UIContext中的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext#requiredynamicsyncscene12",
          children: "requireDynamicSyncScene"
        }), "方法获取DynamicSyncScene对象，再通过此实例调用对应方法。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "setframeraterange12",
      children: "setFrameRateRange12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "setFrameRateRange(range: ExpectedFrameRateRange): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置期望帧率范围。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "最终结果不一定是设置的帧率，会由系统能力做综合决策，尽量满足开发者的设置帧率。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "range"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/animation/ts-explicit-animation/ts-explicit-animation#expectedframeraterange11",
              children: "ExpectedFrameRateRange"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置期望的帧率范围。  默认值：{min:0, max:120, expected: 120}"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { SwiperDynamicSyncSceneType, SwiperDynamicSyncScene } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct Frame {\n  @State ANIMATION: ExpectedFrameRateRange = { min: 0, max: 120, expected: 90 };\n  @State GESTURE: ExpectedFrameRateRange = { min: 0, max: 120, expected: 30};\n  private scenes: SwiperDynamicSyncScene[] = [];\n\n  build() {\n    Column() {\n      Text(\"动画\"+ JSON.stringify(this.ANIMATION))\n      Text(\"跟手\"+ JSON.stringify(this.GESTURE))\n      Row(){\n        Swiper() {\n          Text(\"one\")\n          Text(\"two\")\n          Text(\"three\")\n        }\n        .width('100%')\n        .height('300vp')\n        .id(\"dynamicSwiper\")\n        .backgroundColor(Color.Blue)\n        .autoPlay(true)\n        .onAppear(()=>{\n          this.scenes = this.getUIContext().requireDynamicSyncScene(\"dynamicSwiper\") as SwiperDynamicSyncScene[];\n        })\n      }\n\n      Button(\"set frame\")\n        .onClick(() => {\n          this.scenes.forEach((scenes: SwiperDynamicSyncScene) => {\n\n            if (scenes.type == SwiperDynamicSyncSceneType.ANIMATION) {\n              scenes.setFrameRateRange(this.ANIMATION);\n            }\n\n            if (scenes.type == SwiperDynamicSyncSceneType.GESTURE) {\n              scenes.setFrameRateRange(this.GESTURE);\n            }\n          });\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "getframeraterange12",
      children: "getFrameRateRange12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getFrameRateRange(): ExpectedFrameRateRange"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取期望帧率范围。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/animation/ts-explicit-animation/ts-explicit-animation#expectedframeraterange11",
              children: "ExpectedFrameRateRange"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "期望帧率范围。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { SwiperDynamicSyncSceneType, SwiperDynamicSyncScene } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct Frame {\n  @State ANIMATION: ExpectedFrameRateRange = { min: 0, max: 120, expected: 90 };\n  @State GESTURE: ExpectedFrameRateRange = { min: 0, max: 120, expected: 30 };\n  private scenes: SwiperDynamicSyncScene[] = [];\n\n  build() {\n    Column() {\n      Text(\"动画\"+ JSON.stringify(this.ANIMATION))\n      Text(\"跟手\"+ JSON.stringify(this.GESTURE))\n      Row(){\n        Swiper() {\n          Text(\"one\")\n          Text(\"two\")\n          Text(\"three\")\n        }\n        .width('100%')\n        .height('300vp')\n        .id(\"dynamicSwiper\")\n        .backgroundColor(Color.Blue)\n        .autoPlay(true)\n        .onAppear(() => {\n          this.scenes = this.getUIContext().requireDynamicSyncScene(\"dynamicSwiper\") as SwiperDynamicSyncScene[];\n        })\n      }\n\n      Button(\"set frame\")\n        .onClick(() => {\n          this.scenes.forEach((scenes: SwiperDynamicSyncScene) => {\n\n            if (scenes.type == SwiperDynamicSyncSceneType.ANIMATION) {\n              scenes.setFrameRateRange(this.ANIMATION);\n              scenes.getFrameRateRange();\n            }\n\n            if (scenes.type == SwiperDynamicSyncSceneType.GESTURE) {\n              scenes.setFrameRateRange(this.GESTURE);\n              scenes.getFrameRateRange();\n            }\n          });\n        })\n      }\n  }\n}\n"
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
782837(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

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