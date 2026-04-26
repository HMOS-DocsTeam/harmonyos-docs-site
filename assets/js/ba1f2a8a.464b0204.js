"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["585808"], {
163589(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_debug_app_ide_code_debugging_ide_debug_native_ide_debug_native_so_ide_debug_native_so_md_ba1_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-debug-app-ide-code-debugging-ide-debug-native-ide-debug-native-so-ide-debug-native-so-md-ba1.json
var site_docs_ide_debug_app_ide_code_debugging_ide_debug_native_ide_debug_native_so_ide_debug_native_so_md_ba1_namespaceObject = JSON.parse('{"id":"ide-debug-app/ide-code-debugging/ide-debug-native/ide-debug-native-so/ide-debug-native-so","title":"so信息可视化","description":"在native调试窗口中，点击*Layout Settings，勾选Modules*，打开模块视图。","source":"@site/docs/ide-debug-app/ide-code-debugging/ide-debug-native/ide-debug-native-so/ide-debug-native-so.md","sourceDirName":"ide-debug-app/ide-code-debugging/ide-debug-native/ide-debug-native-so","slug":"/ide-debug-app/ide-code-debugging/ide-debug-native/ide-debug-native-so/","permalink":"/harmonyos-docs-site/ide-debug-app/ide-code-debugging/ide-debug-native/ide-debug-native-so/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":9,"frontMatter":{"title":"so信息可视化","sidebar_position":9,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-debug-native-so","kit":"devtools/write-debug","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"堆栈可视化","permalink":"/harmonyos-docs-site/ide-debug-app/ide-code-debugging/ide-debug-native/ide-debug-native-parallel-stacks/"},"next":{"title":"设置执行点","permalink":"/harmonyos-docs-site/ide-debug-app/ide-code-debugging/ide-debug-native/ide-debug-native-execution-point/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-debug-app/ide-code-debugging/ide-debug-native/ide-debug-native-so/ide-debug-native-so.md


const frontMatter = {
	title: 'so信息可视化',
	sidebar_position: 9,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-debug-native-so',
	kit: 'devtools/write-debug',
	last_updated: '2026-04-24'
};
const contentTitle = 'so信息可视化';

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
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "so信息可视化",
        children: "so信息可视化"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在native调试窗口中，点击", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Layout Settings"
        })
      }), (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(297524)/* ["default"] */.A) + "",
        width: "15",
        height: "12"
      }), "，勾选", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Modules"
        })
      }), "，打开模块视图。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在native调试期间，", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Modules"
        })
      }), "窗口会列出并显示有关应用使用的so信息。点击各属性可按升序/降序来排序，支持字符串匹配搜索。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(545902)/* ["default"] */.A) + "",
        width: "1917",
        height: "449"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "加载符号表文件"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["如果符号未加载，可右键点击模块，选择", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Load Modules"
            })
          }), "，加载本地携带符号信息的so文件。加载成功后，Symbol Status列会显示\"Symbols Loaded\"。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["如需将符号恢复为初始状态，可右键点击模块，选择", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Reset"
            })
          }), " ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Modules"
            })
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "添加源码地址映射"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["加载的符号表文件路径默认是编译时的路径，若与本地的源码文件路径不一致时，需要关联源码文件。右键点击模块，选择", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Set Source Mapping"
            })
          }), "，选择本地源码文件路径，映射成功后，Source Root Path列会显示映射后的路径。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["如需恢复为默认路径，可右键点击模块，选择", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Reset"
            })
          }), " ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Source Mapping********s"
            })
          }), "。"]
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
545902(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561753269-ad87cd45f353960a2ff65181459bb496.png");

},
297524(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAMCAIAAAAyIHCzAAAA2klEQVR4AUzR4Q6DIAwEYCR7bGCb+sDbfi+6D8uM5FKvdwVazO/354rXa6RIgPs5ljRPU7LasWot93sTW2sIq7UirZXYck553xUPTFPGxH3fIHjONwqo7DY1PCTAU4TTT0hHJ+xQSQHpSXCQjrMxGwJ4eAjFJQFp71tDyzLDPM/P50Nc11VkEymPYxm6n+1TSql98HK8QLGQ5kVKV3w9kUN7tTPcKMaNZyQCXYzeerWzSYFt+zIgiDqbWYiy0bccFEW8kuCqeyf+kE2mMRaYD5Zl/aNPzzVrSukHAAD//+JtT0AAAAAGSURBVAMAJonNlSPudUsAAAAASUVORK5CYII=");

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