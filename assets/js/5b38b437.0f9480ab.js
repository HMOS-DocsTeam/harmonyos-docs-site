"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["969156"], {
889056(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_window_manager_multi_window_guide_multi_window_adapt_multi_window_layout_adapt_multi_window_layout_adapt_md_5b3_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-window-manager-multi-window-guide-multi-window-adapt-multi-window-layout-adapt-multi-window-layout-adapt-md-5b3.json
var site_docs_arkui_window_manager_multi_window_guide_multi_window_adapt_multi_window_layout_adapt_multi_window_layout_adapt_md_5b3_namespaceObject = JSON.parse('{"id":"arkui/window-manager/multi-window-guide/multi-window-adapt/multi-window-layout-adapt/multi-window-layout-adapt","title":"应用布局适配智慧多窗","description":"应用布局适配智慧多窗的意义","source":"@site/docs/arkui/window-manager/multi-window-guide/multi-window-adapt/multi-window-layout-adapt/multi-window-layout-adapt.md","sourceDirName":"arkui/window-manager/multi-window-guide/multi-window-adapt/multi-window-layout-adapt","slug":"/arkui/window-manager/multi-window-guide/multi-window-adapt/multi-window-layout-adapt/","permalink":"/harmonyos-docs-site/arkui/window-manager/multi-window-guide/multi-window-adapt/multi-window-layout-adapt/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"应用布局适配智慧多窗","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/multi-window-layout-adapt","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"应用声明支持智慧多窗","permalink":"/harmonyos-docs-site/arkui/window-manager/multi-window-guide/multi-window-adapt/multi-window-support/"},"next":{"title":"顶部窗口控制条避让适配智慧多窗","permalink":"/harmonyos-docs-site/arkui/window-manager/multi-window-guide/multi-window-adapt/multi-window-controlbar-adapt/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/window-manager/multi-window-guide/multi-window-adapt/multi-window-layout-adapt/multi-window-layout-adapt.md


const frontMatter = {
	title: '应用布局适配智慧多窗',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/multi-window-layout-adapt',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '应用布局适配智慧多窗';

const assets = {

};



const toc = [{
  "value": "应用布局适配智慧多窗的意义",
  "id": "应用布局适配智慧多窗的意义",
  "level": 2
}, {
  "value": "悬浮窗的比例",
  "id": "悬浮窗的比例",
  "level": 3
}, {
  "value": "分屏的比例",
  "id": "分屏的比例",
  "level": 3
}, {
  "value": "应用布局适配智慧多窗的方案",
  "id": "应用布局适配智慧多窗的方案",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
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
        id: "应用布局适配智慧多窗",
        children: "应用布局适配智慧多窗"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "应用布局适配智慧多窗的意义",
      children: "应用布局适配智慧多窗的意义"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "由于应用从全屏进入智慧多窗（悬浮窗/分屏）模式后，窗口尺寸、宽高比例会发生变化，所以需要开发者适配应用窗口在不同尺寸、不同比例下的自适应布局，以确保应用窗口在各种形态下都能呈现出最佳的视觉效果，提供更好的用户体验。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "悬浮窗的比例",
      children: "悬浮窗的比例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "不同设备支持悬浮窗的比例如下所示："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "设备"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "竖向悬浮窗宽高比"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "横向悬浮窗宽高比"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "手机"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3:4.575"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16:9"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "折叠屏手机展开态"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9:16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16:9"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(694176)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "顶部窗口控制条的避让区域不包含在应用布局区域内，窗口高度去除避让区域的32vp为应用布局区域的高度。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "手机：悬浮窗模式下，应用窗口真实宽度为屏幕宽度。竖向时，高度根据宽高比3 : 4.575动态调整；横向时，高度根据宽高比16 : 9动态调整（该比例超出屏幕时，以当前全屏屏幕比例计算）。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "折叠屏手机展开态：悬浮窗模式下，应用窗口真实宽度为折叠屏手机折叠态时的屏幕宽度。竖向时，高度根据宽高比9 : 16动态调整；横向时，高度根据宽高比16 : 9动态调整。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "分屏的比例",
      children: "分屏的比例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "目前支持两种分屏样式：“上下分屏”和“左右分屏”。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(726359)/* ["default"] */.A) + "",
        width: "6480",
        height: "3351"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "分屏比例指的是分屏下两应用间尺寸的比例，调整分屏比例会调整应用窗口的大小。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "默认形成分屏后分屏比例为1:1，拖动中间的分屏条可以改变分屏比例档位。手机“上下分屏”可调节档位1:2、1:1、2:1，“左右分屏”可调节档位为1:1。手机折叠屏展开态可调节档位只有1:1。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "设备"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "默认分屏比例"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "分屏可调节档位"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "手机"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1:1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "“上下分屏”: 1:1, 1:2, 2:1  “左右分屏”: 1:1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "手机折叠屏展开态"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1:1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "“上下分屏”和 “左右分屏”: 1:1"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用布局可以通过自适应布局和响应式布局来更新自身布局，避免出现截断、挤压、堆叠等现象。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "应用布局适配智慧多窗的方案",
      children: "应用布局适配智慧多窗的方案"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "无论是悬浮窗还是分屏，当应用进入智慧多窗模式时，应用的窗口尺寸发生变化，所以应用需要根据不同的窗口尺寸调整自身布局。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["主要可以通过窗口的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-window/arkts-apis-window-window#onwindowsizechange7",
        children: "on('windowSizeChange')"
      }), "方法实现对窗口尺寸大小变化的监听。再根据窗口的尺寸变化，更新调整自身应用布局以实现适配。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "主要步骤和示例如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在onWindowStageCreate方法中，获取Window对象。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "通过getWindowProperties方法返回值中的windowRect获取窗口尺寸，写入AppStorage中用于UI侧窗口尺寸的首次初始化赋值。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "使用on('windowSizeChange')注册窗口尺寸变化时的监听，并写入AppStorage中供UI侧布局使用。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "UI侧通过@StorageLink绑定窗口尺寸后，AppStorage中属性key值对应的数据一旦改变，UI侧会同步修改。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "@StorageLink装饰的数据本身是状态变量，所以窗口尺寸发生变化时，会引起组件的重新渲染，开发者可以根据最新的窗口尺寸动态调整应用布局。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// EntryAbility.ets\nimport { UIAbility } from '@kit.AbilityKit';\nimport { window } from '@kit.ArkUI';\n\nexport default class EntryAbility extends UIAbility {\n  onWindowStageCreate(windowStage: window.WindowStage): void {\n    console.info('Ability onWindowStageCreate.');\n    windowStage.getMainWindow().then((windowClass) => {\n      // 获取窗口尺寸，存入AppStorage\n      AppStorage.setOrCreate('winWidth', windowClass.getWindowProperties().windowRect.width);\n      AppStorage.setOrCreate('winHeight', windowClass.getWindowProperties().windowRect.height);\n      // 监听窗口尺寸变化\n      windowClass.on('windowSizeChange', (windowSize) => {\n        AppStorage.setOrCreate('winWidth', windowSize.width);\n        AppStorage.setOrCreate('winHeight', windowSize.height);\n      });\n    });\n    windowStage.loadContent('pages/Index', (err) => {\n      if (err.code) {\n        console.error('Failed to load the content. Cause: ' + JSON.stringify(err));\n        return;\n      }\n      console.info('Succeeded in loading the content.');\n    });\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Index.ets\n@Entry\n@Component\nstruct Index {\n  // 初始化参数，这里会初始化为AppStorage中存储的值\n  @StorageLink('winWidth') winWidth: number = 1260;\n  @StorageLink('winHeight') winHeight: number = 2224;\n\n  aboutToAppear() {\n    console.info('Current window size. width: ' + this.winWidth + ', height: ' + this.winHeight);\n  }\n\n  build() {\n    Row() {\n      // 根据winWidth、winHeight动态调整应用布局\n      // ...\n    }\n    .size({\n      width: this.getUIContext().px2vp(this.winWidth),\n      height: this.getUIContext().px2vp(this.winHeight)\n    })\n    .backgroundColor('#fceaeaea')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(93866)/* ["default"] */.A) + "",
        width: "400",
        height: "420"
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
93866(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958198-8907aed58cb92ca0518c48fbfa80247c.gif");

},
694176(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
726359(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438243-ec2001572cee71c0da14d6e20b3dfa1d.jpg");

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