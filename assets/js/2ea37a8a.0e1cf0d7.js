"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["66006"], {
219614(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_previewer_01_ide_previewer_inspector_ide_previewer_inspector_md_2ea_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-previewer-01-ide-previewer-inspector-ide-previewer-inspector-md-2ea.json
var site_docs_ide_previewer_01_ide_previewer_inspector_ide_previewer_inspector_md_2ea_namespaceObject = JSON.parse('{"id":"ide-previewer-01/ide-previewer-inspector/ide-previewer-inspector","title":"Inspector双向预览","description":"DevEco Studio提供HarmonyOS应用/元服务的UI预览界面与源代码文件间的双向预览功能，支持ets文件与预览器界面的双向预览。使用双向预览功能时，需要在预览器界面单击图标打开双向预览功能。","source":"@site/docs/ide-previewer-01/ide-previewer-inspector/ide-previewer-inspector.md","sourceDirName":"ide-previewer-01/ide-previewer-inspector","slug":"/ide-previewer-01/ide-previewer-inspector/","permalink":"/harmonyos-docs-site/ide-previewer-01/ide-previewer-inspector/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"title":"Inspector双向预览","sidebar_position":7,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-previewer-inspector","kit":"devtools/write-debug","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"查看多端设备预览效果","permalink":"/harmonyos-docs-site/ide-previewer-01/ide-previewer-multi-profile/"},"next":{"title":"预览数据模拟","permalink":"/harmonyos-docs-site/ide-previewer-01/ide-previewer-mock/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-previewer-01/ide-previewer-inspector/ide-previewer-inspector.md


const frontMatter = {
	title: 'Inspector双向预览',
	sidebar_position: 7,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-previewer-inspector',
	kit: 'devtools/write-debug',
	last_updated: '2026-04-24'
};
const contentTitle = 'Inspector双向预览';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
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
        id: "inspector双向预览",
        children: "Inspector双向预览"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["DevEco Studio提供HarmonyOS应用/元服务的UI预览界面与源代码文件间的双向预览功能，支持ets文件与预览器界面的双向预览。使用双向预览功能时，需要在预览器界面单击", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(29279)/* ["default"] */.A) + "",
        width: "20",
        height: "20"
      }), "图标打开双向预览功能。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(92795)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "不支持服务卡片的双向预览功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(669043)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "826",
        height: "63"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开启双向预览功能后，支持代码编辑器、UI界面和Component Tree组件树三者之间的联动："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "选中预览器UI界面中的组件，则组件树上对应的组件将被选中，同时代码编辑器中的布局文件中对应的代码块高亮显示。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "选中布局文件中的代码块，则在UI界面会高亮显示，组件树上的组件节点也会呈现被选中的状态。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "选中组件树中的组件，则对应的代码块和UI界面也会高亮显示。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(59270)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1613",
        height: "932"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在预览界面还可以通过组件的属性面板修改可修改的属性或样式，在预览界面修改后，预览器会自动同步到代码编辑器中修改源码，并实时的刷新UI界面；同样的，如果在代码编辑器中修改源码，也会实时刷新UI界面，并更新组件树信息及组件属性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(371987)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果组件有做数据绑定，则其属性不支持在属性面板修改。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果界面有使用动画效果或者带动画效果组件，则其属性不支持在属性面板修改。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "多设备预览时，不支持双向预览。"
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
59270(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530912970-c1f980e8b6cf3d34ae578e14cc9adb46.png");

},
92795(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
669043(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
29279(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAeElEQVQ4Ee2UQQoAIQhFO6ZX8WoezY2Dix/iTJNBswhmIZrp45tQU1XbaW0nzFnfAZnZKjabqCvMMCIyt5wvA3MhQDk/O3eFufA8IBSPPCYsjxxBTwtbBqLBPeAxh7isEA0/8PZTHfyGImJucbuI3+6GI6N51W8HXksarjKFOkHGAAAAAElFTkSuQmCC");

},
371987(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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