"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["4251"], {
377501(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_debug_app_ide_code_debugging_ide_debug_arkts_ide_debug_arkts_attach_to_process_ide_debug_arkts_attach_to_process_md_b0b_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-debug-app-ide-code-debugging-ide-debug-arkts-ide-debug-arkts-attach-to-process-ide-debug-arkts-attach-to-process-md-b0b.json
var site_docs_ide_debug_app_ide_code_debugging_ide_debug_arkts_ide_debug_arkts_attach_to_process_ide_debug_arkts_attach_to_process_md_b0b_namespaceObject = JSON.parse('{"id":"ide-debug-app/ide-code-debugging/ide-debug-arkts/ide-debug-arkts-attach-to-process/ide-debug-arkts-attach-to-process","title":"等待调试","description":"开发者可以通过将某个应用设置为“等待调试模式”，然后当开发者需要对应用进行调试时，拉起应用即可快速进入调试。","source":"@site/docs/ide-debug-app/ide-code-debugging/ide-debug-arkts/ide-debug-arkts-attach-to-process/ide-debug-arkts-attach-to-process.md","sourceDirName":"ide-debug-app/ide-code-debugging/ide-debug-arkts/ide-debug-arkts-attach-to-process","slug":"/ide-debug-app/ide-code-debugging/ide-debug-arkts/ide-debug-arkts-attach-to-process/","permalink":"/harmonyos-docs-site/ide-debug-app/ide-code-debugging/ide-debug-arkts/ide-debug-arkts-attach-to-process/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"等待调试","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-debug-arkts-attach-to-process","kit":"devtools/write-debug","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"attach启动调试","permalink":"/harmonyos-docs-site/ide-debug-app/ide-code-debugging/ide-debug-arkts/ide-debug-arkts-attach/"},"next":{"title":"使用断点","permalink":"/harmonyos-docs-site/ide-debug-app/ide-code-debugging/ide-debug-arkts/ide-debug-arkts-breakpoint/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-debug-app/ide-code-debugging/ide-debug-arkts/ide-debug-arkts-attach-to-process/ide-debug-arkts-attach-to-process.md


const frontMatter = {
	title: '等待调试',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-debug-arkts-attach-to-process',
	kit: 'devtools/write-debug',
	last_updated: '2026-04-24'
};
const contentTitle = '等待调试';

const assets = {

};



const toc = [{
  "value": "操作步骤",
  "id": "操作步骤",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "等待调试",
        children: "等待调试"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者可以通过将某个应用设置为“等待调试模式”，然后当开发者需要对应用进行调试时，拉起应用即可快速进入调试。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(477014)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用设置为“等待调试模式”后，此时如果启动普通的debug调试，将会取消当前的等待调试模式。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "设置“等待调试模式”前，需要将应用安装到设备上。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "操作步骤",
      children: "操作步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在设备选择框中选择调试的设备，并单击Run > Attach to Process by Name。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(368034)/* ["default"] */.A) + "",
            width: "318",
            height: "421"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["选择需要设置为“等待调试模式”的应用（默认为当前工程），选择需要进行调试的调试类型。然后单击", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Attach"
            })
          }), "，即可将该应用设置为“等待调试模式”。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(561439)/* ["default"] */.A) + "",
            width: "468",
            height: "224"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "此时会在DevEco Studio底部显示一个等待进度条，在应用被拉起之前，将一直处于等待状态。可通过进度条右侧的取消按钮进行取消。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(896443)/* ["default"] */.A) + "",
            width: "325",
            height: "41"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "拉起设备端应用，此时将会进入调试。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(904875)/* ["default"] */.A) + "",
            width: "850",
            height: "233"
          })
        }), "\n"]
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
477014(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
368034(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561753735-686c360de781210a1d3678427916875d.png");

},
904875(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530753796-bb9d7a51e5b7e2f54a93ad0802231de3.png");

},
561439(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561753733-9a907e7c58e741b387e2182b6c50e66e.png");

},
896443(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

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