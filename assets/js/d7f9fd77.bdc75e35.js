"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["651844"], {
818588(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_debug_app_ide_code_debugging_ide_debug_arkts_ide_debug_arkts_debug_ide_debug_arkts_debug_md_d7f_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-debug-app-ide-code-debugging-ide-debug-arkts-ide-debug-arkts-debug-ide-debug-arkts-debug-md-d7f.json
var site_docs_ide_debug_app_ide_code_debugging_ide_debug_arkts_ide_debug_arkts_debug_ide_debug_arkts_debug_md_d7f_namespaceObject = JSON.parse('{"id":"ide-debug-app/ide-code-debugging/ide-debug-arkts/ide-debug-arkts-debug/ide-debug-arkts-debug","title":"debug启动调试","description":"可以按照如下方式启动调试会话。","source":"@site/docs/ide-debug-app/ide-code-debugging/ide-debug-arkts/ide-debug-arkts-debug/ide-debug-arkts-debug.md","sourceDirName":"ide-debug-app/ide-code-debugging/ide-debug-arkts/ide-debug-arkts-debug","slug":"/ide-debug-app/ide-code-debugging/ide-debug-arkts/ide-debug-arkts-debug/","permalink":"/harmonyos-docs-site/ide-debug-app/ide-code-debugging/ide-debug-arkts/ide-debug-arkts-debug/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"debug启动调试","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-debug-arkts-debug","kit":"devtools/write-debug","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"调试场景说明","permalink":"/harmonyos-docs-site/ide-debug-app/ide-code-debugging/ide-debug-arkts/ide-debug-arkts-worker-taskpool/"},"next":{"title":"attach启动调试","permalink":"/harmonyos-docs-site/ide-debug-app/ide-code-debugging/ide-debug-arkts/ide-debug-arkts-attach/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-debug-app/ide-code-debugging/ide-debug-arkts/ide-debug-arkts-debug/ide-debug-arkts-debug.md


const frontMatter = {
	title: 'debug启动调试',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-debug-arkts-debug',
	kit: 'devtools/write-debug',
	last_updated: '2026-04-24'
};
const contentTitle = 'debug启动调试';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
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
        id: "debug启动调试",
        children: "debug启动调试"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可以按照如下方式启动调试会话。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["如果需要设置断点调试，找到需要暂停的代码片段，点击该代码行的左侧边线，或将光标置于该行上并按Ctrl + F8（macOS为Command+F8）。如果无法添加断点，请查看FAQ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-app-debugging-1",
            children: "调试过程中无法添加断点"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(412817)/* ["default"] */.A) + "",
            width: "435",
            height: "373"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置断点后，调试能够在正确的断点处中断，并高亮显示该行。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在设备选择框中，选择调试的设备。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(774586)/* ["default"] */.A) + "",
            width: "257",
            height: "287"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["选择启动调试的配置，在模块选择框中选择需要调试的模块。也可以通过Edit Configurations", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ide-debug-app/ide-run-debug-configurations",
            children: "配置调试参数"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(931967)/* ["default"] */.A) + "",
            width: "218",
            height: "207"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在工具栏中，单击Debug", (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(305692)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "16",
            height: "18"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(527964)/* ["default"] */.A) + "",
            width: "303",
            height: "34"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "或者在工具栏中Run中选择Debug。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(822858)/* ["default"] */.A) + "",
            width: "311",
            height: "170"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["启动调试后，开发者可以通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ide-debug-app/ide-code-debugging/ide-debug-arkts-debugger",
            children: "调试器"
          }), "进行代码调试。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如有断点会在断点处高亮，并展示当前断点处的Frames和Variables。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(976617)/* ["default"] */.A) + "",
            width: "1040",
            height: "882"
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
976617(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530912926-ade4754860121ae0f97e4518b2db76e6.png");

},
527964(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
774586(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530752928-6ceabba33db180d462dda8c57eb69747.png");

},
305692(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAABmklEQVQ4jaWUO4gTURSGvzxIViSJwS1EJQElKdbCQvABglUshAQrCysL0U7BxsLaYmHZYrZR2UFstBAEERSxE0HCFIEgmIcxMpBdTTKTZBITJpnHNmZgmImr5JTn3vPx/ZfDDWiaZrNEBZcZ9gXo5hRBEqmrTadXV5sIkohuTvcHqJM+8qCFIIlUlQY19TuCJCIPWqiTvgcQ8HuDb70fbHx+RDgYAmBmGdw9e5O11cy/GYilF9jYzCyDmWUAsF16jqztLDbYLD4BoDNWfFUBYpGDHI0dAeDeuVsAhOeH3bGKYRkM9KHvMMBw+pvW8CfRUMRrAPClU2FLegrAg4t3SMWPASBrLR5+EgC4fuoql9IXHIBj8Kb+gV+jjnPwUS6SiMYAXFbl9le06Yh8Juc2uP32/kJ1v3p8Zd0NUCY9qkqDZ+WXf41QyOQ4f/wMhw8k3RG6YxXTMveNYP+5OwcsHcExuHH6GgC6ofOq8s6z96FAkEL2MomVuKvvu8q7ozava++pKg1My+JkMkU+m+PEobTHxBfwP7X0f7AH2+vOyhjvf3AAAAAASUVORK5CYII=");

},
412817(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530912932-2ced799b80184f807500e8a6d9174df4.png");

},
931967(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530752940-fbb51b413befccf30dd25116ed7ce824.png");

},
822858(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561832855-8a0f7350ab19db01541ec4f70af7ef40.png");

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