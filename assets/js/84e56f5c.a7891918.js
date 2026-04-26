"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["582986"], {
1909(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_app_test_ide_app_analyzer_appendix_ide_app_analyzer_rules_ide_quick_completion_for_click_0404_ide_quick_completion_for_click_0404_md_84e_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-app-test-ide-app-analyzer-appendix-ide-app-analyzer-rules-ide-quick-completion-for-click-0404-ide-quick-completion-for-click-0404-md-84e.json
var site_docs_ide_app_test_ide_app_analyzer_appendix_ide_app_analyzer_rules_ide_quick_completion_for_click_0404_ide_quick_completion_for_click_0404_md_84e_namespaceObject = JSON.parse('{"id":"ide-app-test/ide-app-analyzer-appendix/ide-app-analyzer-rules/ide-quick-completion-for-click-0404/ide-quick-completion-for-click-0404","title":"点击操作完成快","description":"DevEco Studio 6.0.1 Beta1及以上版本","source":"@site/docs/ide-app-test/ide-app-analyzer-appendix/ide-app-analyzer-rules/ide-quick-completion-for-click-0404/ide-quick-completion-for-click-0404.md","sourceDirName":"ide-app-test/ide-app-analyzer-appendix/ide-app-analyzer-rules/ide-quick-completion-for-click-0404","slug":"/ide-app-test/ide-app-analyzer-appendix/ide-app-analyzer-rules/ide-quick-completion-for-click-0404/","permalink":"/harmonyos-docs-site/ide-app-test/ide-app-analyzer-appendix/ide-app-analyzer-rules/ide-quick-completion-for-click-0404/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"点击操作完成快","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-quick-completion-for-click-0404","kit":"devtools/write-debug","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"点击操作响应快","permalink":"/harmonyos-docs-site/ide-app-test/ide-app-analyzer-appendix/ide-app-analyzer-rules/ide-quick-response-for-click-0403/"},"next":{"title":"滑动操作响应快","permalink":"/harmonyos-docs-site/ide-app-test/ide-app-analyzer-appendix/ide-app-analyzer-rules/ide-quick-response-for-swipe-0405/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-app-test/ide-app-analyzer-appendix/ide-app-analyzer-rules/ide-quick-completion-for-click-0404/ide-quick-completion-for-click-0404.md


const frontMatter = {
	title: '点击操作完成快',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-quick-completion-for-click-0404',
	kit: 'devtools/write-debug',
	last_updated: '2026-04-24'
};
const contentTitle = '点击操作完成快';

const assets = {

};



const toc = [{
  "value": "DevEco Studio 6.0.1 Beta1及以上版本",
  "id": "deveco-studio-601-beta1及以上版本",
  "level": 2
}, {
  "value": "规则详情",
  "id": "规则详情",
  "level": 3
}, {
  "value": "检测逻辑",
  "id": "检测逻辑",
  "level": 3
}, {
  "value": "计算逻辑",
  "id": "计算逻辑",
  "level": 3
}, {
  "value": "DevEco Studio 6.0.1 Beta1以下版本",
  "id": "deveco-studio-601-beta1以下版本",
  "level": 2
}, {
  "value": "规则详情",
  "id": "规则详情-1",
  "level": 3
}, {
  "value": "检测逻辑",
  "id": "检测逻辑-1",
  "level": 3
}, {
  "value": "计算逻辑",
  "id": "计算逻辑-1",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "点击操作完成快",
        children: "点击操作完成快"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "deveco-studio-601-beta1及以上版本",
      children: "DevEco Studio 6.0.1 Beta1及以上版本"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "规则详情",
      children: "规则详情"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用内点击操作完成时延应≤ 900毫秒；时间起点：点击离手；时间终点：转场页面所有占位符加载完成。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "检测逻辑",
      children: "检测逻辑"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "点击后，缓存本次操作与下次操作前的截图，检测图片中的页面是否加载完成。页面加载检测逻辑为："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "利用光流法对下次操作前的多张截图进行检测，判断出轮播区与视频区。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "检测非轮播区与非视频区是否加载完成：默认下一次操作前页面已经加载完成，并以下次操作前的最后一张截图为目标图片，利用二分法在缓存的图片中搜索。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(833049)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "若页面出现第二次刷新行为时，将以第二次刷新后呈现的页面作为加载完成页面（即目标图片），首次刷新结果不作为参考。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "如果检索图片的非轮播区与非视频区和目标图片不存在像素差异，则判断非轮播区与非视频区加载完成；"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "若存在像素差异，则进一步判断差异区域是否有内容填充，如果所有差异区域均有内容填充，则判断非轮播区与非视频区加载完成。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "若上一步判断非轮播区与非视频区加载完成，再根据是否有内容填充判断轮播区与视频区是否加载完成。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "若上一步判断轮播区与视频区加载完成，则该检索图片加载完成，利用二分法继续向前搜索，找到第一张加载完成的图片。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "计算逻辑",
      children: "计算逻辑"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以点击时刻为准，若第一张加载完成图片的时间小于等于900ms，则检测通过；若大于900ms，小于等于1600ms，则检测告警；若大于1600ms，则检测失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "deveco-studio-601-beta1以下版本",
      children: "DevEco Studio 6.0.1 Beta1以下版本"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "规则详情-1",
      children: "规则详情"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "时间起点：点击离手；时间终点：转场页面所有占位符加载完成；应用/元服务内点击操作完成时延应≤ 1600毫秒。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "检测逻辑-1",
      children: "检测逻辑"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "点击后，经过1600ms后截图，检测图片是否存在白块。白块检测逻辑为：AppAnalyzer通过真实应用训练的白块检测AI模型，进行页面白块识别。例如：如下左图输入到白块检测AI模型后，可以识别到白块位置，如下右图。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(41441)/* ["default"] */.A) + "",
        width: "379",
        height: "724"
      }), (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(651842)/* ["default"] */.A) + "",
        width: "375",
        height: "725"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "计算逻辑-1",
      children: "计算逻辑"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "点击后，经过1600ms后截图，截图页面查找白块数量为0，则检测通过。"
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
651842(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561833195-10e715be222f7196cee78d16b48af5d9.png");

},
833049(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
41441(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530753280-35ff42c728dcc55edb7903b430c6cee0.png");

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