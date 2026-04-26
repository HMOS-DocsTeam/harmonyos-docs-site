"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["832100"], {
490014(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_app_test_ide_app_analyzer_appendix_ide_app_analyzer_rules_ide_quick_completion_for_boot_ide_quick_completion_for_boot_md_0e4_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-app-test-ide-app-analyzer-appendix-ide-app-analyzer-rules-ide-quick-completion-for-boot-ide-quick-completion-for-boot-md-0e4.json
var site_docs_ide_app_test_ide_app_analyzer_appendix_ide_app_analyzer_rules_ide_quick_completion_for_boot_ide_quick_completion_for_boot_md_0e4_namespaceObject = JSON.parse('{"id":"ide-app-test/ide-app-analyzer-appendix/ide-app-analyzer-rules/ide-quick-completion-for-boot/ide-quick-completion-for-boot","title":"启动加载完成快","description":"DevEco Studio 6.0.1 Beta1及以上版本","source":"@site/docs/ide-app-test/ide-app-analyzer-appendix/ide-app-analyzer-rules/ide-quick-completion-for-boot/ide-quick-completion-for-boot.md","sourceDirName":"ide-app-test/ide-app-analyzer-appendix/ide-app-analyzer-rules/ide-quick-completion-for-boot","slug":"/ide-app-test/ide-app-analyzer-appendix/ide-app-analyzer-rules/ide-quick-completion-for-boot/","permalink":"/harmonyos-docs-site/ide-app-test/ide-app-analyzer-appendix/ide-app-analyzer-rules/ide-quick-completion-for-boot/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":11,"frontMatter":{"title":"启动加载完成快","sidebar_position":11,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-quick-completion-for-boot","kit":"devtools/write-debug","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"节点数超过500过多","permalink":"/harmonyos-docs-site/ide-app-test/ide-app-analyzer-appendix/ide-app-analyzer-rules/ide-render-node-limit-0430/"},"next":{"title":"场景化体检","permalink":"/harmonyos-docs-site/ide-app-test/ide-app-analyzer-appendix/ide-app-analyzer-scenes/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-app-test/ide-app-analyzer-appendix/ide-app-analyzer-rules/ide-quick-completion-for-boot/ide-quick-completion-for-boot.md


const frontMatter = {
	title: '启动加载完成快',
	sidebar_position: 11,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-quick-completion-for-boot',
	kit: 'devtools/write-debug',
	last_updated: '2026-04-24'
};
const contentTitle = '启动加载完成快';

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
    a: "a",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    img: "img",
    p: "p",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "启动加载完成快",
        children: "启动加载完成快"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "deveco-studio-601-beta1及以上版本",
      children: "DevEco Studio 6.0.1 Beta1及以上版本"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "规则详情",
      children: "规则详情"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "各类应用的冷启动首帧完成时延应 ≤ 1100毫秒；时间起点：桌面图标点击离手；时间终点：应用首页铺满全屏并且所有占位符加载完成。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "检测逻辑",
      children: "检测逻辑"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["启动后，缓存本次冷启动过程中的截图，检测启动过程中的广告页面和加载完成页面。广告页面通过使用真实应用训练的广告检测AI模型进行检测，页面加载检测逻辑参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-app-test/ide-app-analyzer-appendix/ide-app-analyzer-rules/ide-quick-completion-for-click-0404#section15922054151911",
        children: "DevEco Studio 6.0.1 Beta1及以上版本的点击操作完成快"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(81308)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果首页内容加载需要网络请求，请确保网络连接已开启。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "计算逻辑",
      children: "计算逻辑"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以首帧页面铺满屏幕作为开始时刻，冷启动完成时延等于应用首页加载完成耗时减去广告时间。若冷启动完成时延小于等于1100ms，则检测通过；若大于1100ms，小于等于6300ms，则检测告警；若大于6300ms，则检测失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(548783)/* ["default"] */.A) + "",
        width: "1099",
        height: "187"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "deveco-studio-601-beta1以下版本",
      children: "DevEco Studio 6.0.1 Beta1以下版本"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "规则详情-1",
      children: "规则详情"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "各类应用的冷启动首帧完成时延应 ≤ 1100毫秒；时间起点：桌面图标点击离手；时间终点：应用首页铺满全屏并且所有占位符加载完成。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "检测逻辑-1",
      children: "检测逻辑"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["启动后，缓存本次冷启动过程中的截图，检测启动过程中的广告页面和加载完成页面。广告页面通过使用真实应用训练的广告检测AI模型进行检测，页面加载检测逻辑参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-app-test/ide-app-analyzer-appendix/ide-app-analyzer-rules/ide-quick-completion-for-click-0404#section191984031815",
        children: "DevEco Studio 6.0.1 Beta1以下版本的点击操作完成快"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "计算逻辑-1",
      children: "计算逻辑"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以首帧页面铺满屏幕作为开始时刻，冷启动完成时延等于应用首页加载完成耗时减去广告时间。若冷启动完成时延小于等于1100ms，则检测通过；若大于1100ms，小于等于6300ms，则检测告警；若大于6300ms，则检测失败。"
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
81308(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
548783(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561833549-62e558c421b2db14473e9081337710ba.png");

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