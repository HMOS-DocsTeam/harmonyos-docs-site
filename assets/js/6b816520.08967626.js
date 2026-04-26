"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["619724"], {
216089(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_harmonyos_ask_ide_code_analyse_ide_code_analyse_md_6b8_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-harmonyos-ask-ide-code-analyse-ide-code-analyse-md-6b8.json
var site_docs_ide_harmonyos_ask_ide_code_analyse_ide_code_analyse_md_6b8_namespaceObject = JSON.parse('{"id":"ide-harmonyos-ask/ide-code-analyse/ide-code-analyse","title":"代码分析","description":"CodeGenie支持在*对话框中*输入对代码段和代码文件分析要求，帮助开发者快速理解代码逻辑、代码功能、技术细节和潜在问题等，提升开发效率。","source":"@site/docs/ide-harmonyos-ask/ide-code-analyse/ide-code-analyse.md","sourceDirName":"ide-harmonyos-ask/ide-code-analyse","slug":"/ide-harmonyos-ask/ide-code-analyse/","permalink":"/harmonyos-docs-site/ide-harmonyos-ask/ide-code-analyse/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"代码分析","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-analyse","kit":"devtools/ai-coding","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"知识问答","permalink":"/harmonyos-docs-site/ide-harmonyos-ask/ide-code-generation/"},"next":{"title":"代码生成","permalink":"/harmonyos-docs-site/ide-harmonyos-act/ide--code-generation/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-harmonyos-ask/ide-code-analyse/ide-code-analyse.md


const frontMatter = {
	title: '代码分析',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-analyse',
	kit: 'devtools/ai-coding',
	last_updated: '2026-04-24'
};
const contentTitle = '代码分析';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    header: "header",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "代码分析",
        children: "代码分析"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["CodeGenie支持在", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "对话框中"
        })
      }), "输入对代码段和代码文件分析要求，帮助开发者快速理解代码逻辑、代码功能、技术细节和潜在问题等，提升开发效率。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["DevEco Studio 6.0.2 Beta1之前版本，分析代码文件时需要通过", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Files"
        })
      }), "入口选中文件；分析代码片段时，选中代码段后需点击", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(165805)/* ["default"] */.A) + "",
        width: "20",
        height: "14"
      }), "图标开启光标上下文功能。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在DevEco Studio 6.0.2 Beta1版本，分析代码文件时，支持在对话框输入要分析的代码文件或直接分析当前文件；分析代码片段时，选中代码段后直接分析，无需开启", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(190898)/* ["default"] */.A) + "",
        width: "20",
        height: "14"
      }), "图标。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从DevEco Studio 6.0.2 Release版本开始，使用HarmonyOS Ask智能体分析代码文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以DevEco Studio 6.1.0 Release和DevEco Studio 6.0.1 Beta1版本为例说明，操作如下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "DevEco Studio 6.1.0 Release版本"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["选择HarmonyOS Ask智能体，在对话框中输入****@", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "符号选择"
          })
        }), "Files****，或点击****@****", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Add Context"
          })
        }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Files"
          })
        }), "，选择需要分析的代码文件，或在对话框输入文件路径指定需要分析的代码文件，或分析当前代码文件。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["在对话框输入描述，点击", (0,jsx_runtime.jsx)(_components.img, {
          src: (__webpack_require__(208298)/* ["default"] */.A) + "",
          width: "17",
          height: "16"
        }), "发送后等待回复。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(4806)/* ["default"] */.A) + "",
        width: "1378",
        height: "978"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "DevEco Studio 6.0.1 Beta1版本"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["分析代码文件：在对话框中输入****@", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "符号选择"
        })
      }), "Files****，或点击****@****", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Add Context"
        })
      }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Files"
        })
      }), "，可对单个或多个代码文件进行分析。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["分析代码片段：选中代码段，点击", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(879248)/* ["default"] */.A) + "",
        width: "20",
        height: "14"
      }), "图标开启光标上下文功能，在对话框内描述，开始分析。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(180712)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1373",
        height: "918"
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
180712(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561752637-4bc2db22cb41cde23568ff311526bfe5.gif");

},
190898(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAIAAACgpqunAAABb0lEQVQ4EaXR/2/BQBQAcP+6Lb5MDaXtqnSmG/F1GOnCfC1a8aVqTEms58L9H0tT6egsWSy5H9699z53l3s2ANHFy3axBBCdYG27f2uKdCSF+dlrF4X5WTqaqrckbbs/e8c3lpWlLxiLxLJCb9zujgovdb4qdLoj9iEXCMWV99VPf8A9cYL5WXEwNTqWq89AKG53EDjJqWutL8lePysNFYvX8XSmur3MbL4+ruWLNbuDsDuIRLoMIJKVpd6zOOnRsS8Y46sCgEjb7pudgXFEIl02sBtjjEyFb+Mkd3yBjpn7TJlvAYg22s7poZ9LtUz+9cpJGtjuIDbaDkBUqjSisawVL9SNCwv3JRlAhJOcaYwgSD0CiLrixOUJf6gbKwYQiYPpzW2k3R0K/bEF9yS50R64vcz5DzMOm87UABGnmCQdTZmeYdPE3RNOcsr891GZjxlNFrlClQonnR6aYpL5Ym0sL8yqJTjM2ZL94/Zf+AuhyZ7rp+8lgwAAAABJRU5ErkJggg==");

},
208298(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAQCAIAAAB/UwMIAAACW0lEQVR4AVxRS09aQRQ+c5Fbq4nKo8ZoYqOISnUlDxMpO01cyaaaENry04q7mhRowgaopUBNfAANtYRuikUjKU1NeYREipc7/eYSWTj5cuacb857JFXtqaqiCqn2evdQ1J7C1R4gXqDfA7wqEXEipoEYbtKOUMBTt3tXrVbPz78eHn44OvoMZ/hInDMNmiuRoii12q9i8Vvy08eDg7f7+8FYLFGpXA4PP76+rtZqv4mYxBhrNBqlUimVSodC4WDwTTKZRO7x8Qmny/Vid/fV65eL1oWlJaui3BmNRpSSEBCNRm9u/pjN5vX19UAg4Pf7t7e37Xb73Nxco1E/PT2xWC3HJ8cOp0N+JBMjqdvtMkbT09OrqyszMzOyLJN22u12IhGv/60/d3suyhfE2fKSDRKQJiefbGxs5PP5cDiCljgnbK9QKLyPRGzLtrU1e6fz7+ws53a7kZoxLIZjB3x+fn5vb9dmW06nU/F4LBR6V/5R9nq9s7NPOef5fM5isZhMZqTTOiCxA0RLkoQYn883MWFgJO3seMfGxokIc1YqP51OB4rA7AN1oOA7kJEYk5AS2tCQHiyQyWRcLtdgSDAA/pRQlHOEweRGg6HVamKhML6XSjrdkNW6yDEFbLBcOIsYmGgPDBSdTjcyMtpsNm9vO7n8F4/Hg64APEH2IWKg9SlIwGAwNputbDa7sIDR8YngRPpBNREzMMQjkclkKhaLV1eXDoejzzyQ2BtpdTAPIF5XVp7Jsn5zc1Ov1yMdAFbzwS0KijpChS4GZcRodHRka2trampK4x8Kxug/AAAA//9ZpphIAAAABklEQVQDAHIWIrbqT4wiAAAAAElFTkSuQmCC");

},
879248(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAIAAACgpqunAAABb0lEQVQ4EaXR/2/BQBQAcP+6Lb5MDaXtqnSmG/F1GOnCfC1a8aVqTEms58L9H0tT6egsWSy5H9699z53l3s2ANHFy3axBBCdYG27f2uKdCSF+dlrF4X5WTqaqrckbbs/e8c3lpWlLxiLxLJCb9zujgovdb4qdLoj9iEXCMWV99VPf8A9cYL5WXEwNTqWq89AKG53EDjJqWutL8lePysNFYvX8XSmur3MbL4+ruWLNbuDsDuIRLoMIJKVpd6zOOnRsS8Y46sCgEjb7pudgXFEIl02sBtjjEyFb+Mkd3yBjpn7TJlvAYg22s7poZ9LtUz+9cpJGtjuIDbaDkBUqjSisawVL9SNCwv3JRlAhJOcaYwgSD0CiLrixOUJf6gbKwYQiYPpzW2k3R0K/bEF9yS50R64vcz5DzMOm87UABGnmCQdTZmeYdPE3RNOcsr891GZjxlNFrlClQonnR6aYpL5Ym0sL8yqJTjM2ZL94/Zf+AuhyZ7rp+8lgwAAAABJRU5ErkJggg==");

},
4806(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530752696-79fded00dd05bded8e450f507ff04258.gif");

},
165805(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAIAAACgpqunAAABb0lEQVQ4EaXR/2/BQBQAcP+6Lb5MDaXtqnSmG/F1GOnCfC1a8aVqTEms58L9H0tT6egsWSy5H9699z53l3s2ANHFy3axBBCdYG27f2uKdCSF+dlrF4X5WTqaqrckbbs/e8c3lpWlLxiLxLJCb9zujgovdb4qdLoj9iEXCMWV99VPf8A9cYL5WXEwNTqWq89AKG53EDjJqWutL8lePysNFYvX8XSmur3MbL4+ruWLNbuDsDuIRLoMIJKVpd6zOOnRsS8Y46sCgEjb7pudgXFEIl02sBtjjEyFb+Mkd3yBjpn7TJlvAYg22s7poZ9LtUz+9cpJGtjuIDbaDkBUqjSisawVL9SNCwv3JRlAhJOcaYwgSD0CiLrixOUJf6gbKwYQiYPpzW2k3R0K/bEF9yS50R64vcz5DzMOm87UABGnmCQdTZmeYdPE3RNOcsr891GZjxlNFrlClQonnR6aYpL5Ym0sL8yqJTjM2ZL94/Zf+AuhyZ7rp+8lgwAAAABJRU5ErkJggg==");

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