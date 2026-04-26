"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["181380"], {
871997(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_arkts_ui_js_apis_arkui_uicontext_arkts_apis_uicontext_cursorcontroller_arkts_apis_uicontext_cursorcontroller_md_488_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-arkts-ui-js-apis-arkui-uicontext-arkts-apis-uicontext-cursorcontroller-arkts-apis-uicontext-cursorcontroller-md-488.json
var site_docs_ref_arkui_api_arkui_arkts_ui_js_apis_arkui_uicontext_arkts_apis_uicontext_cursorcontroller_arkts_apis_uicontext_cursorcontroller_md_488_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-cursorcontroller/arkts-apis-uicontext-cursorcontroller","title":"Class (CursorController)","description":"提供光标样式设置的能力。","source":"@site/docs-ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-cursorcontroller/arkts-apis-uicontext-cursorcontroller.md","sourceDirName":"arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-cursorcontroller","slug":"/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-cursorcontroller/arkts-apis-uicontext-cursorcontroller","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-cursorcontroller/arkts-apis-uicontext-cursorcontroller","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"Class (CursorController)","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-uicontext-cursorcontroller","kit":"应用框架","last_updated":"2026-04-22","slug":"arkts-apis-uicontext-cursorcontroller"},"sidebar":"ref","previous":{"title":"Class (ContextMenuController)","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-contextmenucontroller/arkts-apis-uicontext-contextmenucontroller"},"next":{"title":"Class (DragController)","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-dragcontroller/arkts-apis-uicontext-dragcontroller"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-cursorcontroller/arkts-apis-uicontext-cursorcontroller.md


const frontMatter = {
	title: 'Class (CursorController)',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-uicontext-cursorcontroller',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'arkts-apis-uicontext-cursorcontroller'
};
const contentTitle = 'Class (CursorController)';

const assets = {

};



const toc = [{
  "value": "restoreDefault12+",
  "id": "restoredefault12",
  "level": 2
}, {
  "value": "setCursor12+",
  "id": "setcursor12",
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
        id: "class-cursorcontroller",
        children: "Class (CursorController)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "提供光标样式设置的能力。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(688001)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "本模块首批接口从API version 10开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "本Class首批接口从API version 12开始支持。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["以下API需先使用UIContext中的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext#getcursorcontroller12",
          children: "getCursorController()"
        }), "方法获取CursorController实例，再通过此实例调用对应方法。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "restoredefault12",
      children: "restoreDefault12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "restoreDefault(): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "恢复默认的光标样式。"
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
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当光标移出绿框时，通过CursorController的restoreDefault方法恢复默认光标样式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { pointer } from '@kit.InputKit';\nimport { UIContext, CursorController } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct CursorControlExample {\n  @State text: string = '';\n  cursorCustom: CursorController = this.getUIContext().getCursorController();\n\n  build() {\n    Column() {\n      Row().height(200).width(200).backgroundColor(Color.Green).position({x: 150 ,y:70})\n        .onHover((flag) => {\n          if (flag) {\n            this.cursorCustom.setCursor(pointer.PointerStyle.EAST);\n          } else {\n            console.info(\"restoreDefault\");\n            this.cursorCustom.restoreDefault();\n          }\n        })\n    }.width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(543490)/* ["default"] */.A) + "",
        width: "200",
        height: "172"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "setcursor12",
      children: "setCursor12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "setCursor(value: PointerStyle): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "更改当前的鼠标光标样式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(453848)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该接口调用后不会立即生效，而是在下一帧改变鼠标光标样式。"
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
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-t/arkts-apis-uicontext-t#pointerstyle12",
              children: "PointerStyle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "光标样式。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当光标进入蓝框时，通过CursorController的setCursor方法修改光标样式为PointerStyle.WEST。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { pointer } from '@kit.InputKit';\nimport { UIContext, CursorController } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct CursorControlExample {\n  @State text: string = '';\n  cursorCustom: CursorController = this.getUIContext().getCursorController();\n\n  build() {\n    Column() {\n      Row().height(200).width(200).backgroundColor(Color.Blue).position({x: 100 ,y:70})\n        .onHover((flag) => {\n          if (flag) {\n            this.cursorCustom.setCursor(pointer.PointerStyle.WEST);\n          } else {\n            this.cursorCustom.restoreDefault();\n          }\n        })\n    }.width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(902489)/* ["default"] */.A) + "",
        width: "199",
        height: "163"
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
688001(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
453848(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
902489(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/gif;base64,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");

},
543490(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479407-dc34dcacea133fe8f8389058e279d6c8.gif");

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