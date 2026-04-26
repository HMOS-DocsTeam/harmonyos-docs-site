"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["245095"], {
960556(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_declarative_comp_ts_component_general_attributes_basic_property_ts_universal_attributes_visibility_ts_universal_attributes_visibility_md_dcd_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-declarative-comp-ts-component-general-attributes-basic-property-ts-universal-attributes-visibility-ts-universal-attributes-visibility-md-dcd.json
var site_docs_ref_arkui_api_arkui_declarative_comp_ts_component_general_attributes_basic_property_ts_universal_attributes_visibility_ts_universal_attributes_visibility_md_dcd_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-declarative-comp/ts-component-general-attributes/basic-property/ts-universal-attributes-visibility/ts-universal-attributes-visibility","title":"显隐控制","description":"控制组件是否可见。","source":"@site/docs-ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/basic-property/ts-universal-attributes-visibility/ts-universal-attributes-visibility.md","sourceDirName":"arkui-api/arkui-declarative-comp/ts-component-general-attributes/basic-property/ts-universal-attributes-visibility","slug":"/arkui-api/arkui-declarative-comp/ts-component-general-attributes/basic-property/ts-universal-attributes-visibility/ts-universal-attributes-visibility","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/basic-property/ts-universal-attributes-visibility/ts-universal-attributes-visibility","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"显隐控制","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-visibility","kit":"应用框架","last_updated":"2026-04-22","slug":"ts-universal-attributes-visibility"},"sidebar":"ref","previous":{"title":"分布式迁移标识","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/basic-property/ts-universal-attributes-restoreid/ts-universal-attributes-restoreid"},"next":{"title":"背景设置","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/basic-property/ts-universal-attributes-background/ts-universal-attributes-background"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/basic-property/ts-universal-attributes-visibility/ts-universal-attributes-visibility.md


const frontMatter = {
	title: '显隐控制',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-visibility',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'ts-universal-attributes-visibility'
};
const contentTitle = '显隐控制';

const assets = {

};



const toc = [{
  "value": "visibility",
  "id": "visibility",
  "level": 2
}, {
  "value": "示例",
  "id": "示例",
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
    p: "p",
    pre: "pre",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "显隐控制",
        children: "显隐控制"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "控制组件是否可见。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(407570)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 7开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "visibility",
      children: "visibility"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "visibility(value: Visibility): T"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "控制组件的显示或隐藏。当未设置visibility时，组件默认为显示。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
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
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#visibility",
              children: "Visibility"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["控制当前组件显示或隐藏。根据具体场景需要可使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-rendering-control/arkts-rendering-control-ifelse",
              children: "条件渲染"
            }), "代替。"]
          })]
        })
      })]
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
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回当前组件。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例",
      children: "示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例通过配置visibility的不同值，实现不同的显隐控制效果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct VisibilityExample {\n  build() {\n    Column() {\n      Column() {\n        // 隐藏不参与占位\n        Text('None').fontSize(9).width('90%').fontColor(0xCCCCCC)\n        Row().visibility(Visibility.None).width('90%').height(80).backgroundColor(0xAFEEEE)\n\n        // 隐藏参与占位\n        Text('Hidden').fontSize(9).width('90%').fontColor(0xCCCCCC)\n        Row().visibility(Visibility.Hidden).width('90%').height(80).backgroundColor(0xAFEEEE)\n\n        // 正常显示，组件默认的显示模式\n        Text('Visible').fontSize(9).width('90%').fontColor(0xCCCCCC)\n        Row().visibility(Visibility.Visible).width('90%').height(80).backgroundColor(0xAFEEEE)\n      }.width('90%').border({ width: 1 })\n    }.width('100%').margin({ top: 5 })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(333479)/* ["default"] */.A) + "",
        width: "556",
        height: "347"
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
407570(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
333479(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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ewQLAADoHsECAAC6R7AAAIDuESwAAKB7BAsAAOgewQIAALpHsAAAgO4RLAAAoHsECwAA6B7BAgAAukewAACA7hEsAACgewQLAADoHsECAAC6R7AAAIDuESwAAKB7BAsAAOgewQIAALpHsAAAgO4RLAAAoHsECwAA6B7BAgAAukewAACA7hEsAACgewQLAADoHsECAAC6R7AAAIDuESwAAKB7BAsAAOgewQIAALpHsAAAgO4RLAAAoHsECwAA6B7BAgAAukewAACA7hEsAACgewQLAADoHsECAAC6R7AAAIDuESwAAKB7BAsAAOgewQIAALpHsAAAgO4RLAAAoHsECwAA6B7BAgAAukewAACA7hEsAACgewQLAADoHsECAAC6R7AAAIDuESwAAKB7BAsAAOgewQIAALpHsAAAgO4RLAAAoHsECwAA6B7BAgAAukewAACA7hEsAACgewQLAADoHsECAAC6R7AAAIDuESwAAKB7BAsAAOgewQIAALpHsAAAgO4RLAAAoHsECwAA6B7BAgAAukewAACA7hEsAACgewQLAADoHsECAAC6R7AAAIDuESwAAKB7BAsAAOgewQIAALpHsAAAgO4RLAAAoHsECwAA6B7BAgAAukewAACA7hEsAACgewQLAADoHsECAAC6R7AAAIDuESwAAKB7BMtD5MqVKzcf3SIHMkw/Uz7vVge45gMAgNsRLA+Zev/5TNODmwOa5/VaUcvV6wAA4E6m50jB8oDUwcy0wmR6IPO8rNfrcZHnAADgdqbnR8HyEKgICTmIoZ7XZ6tlYn3Weg4AAO5keo6cqWDJ/SYXL168+ewWdUDy2uXLlzce54DcKyiyXG1zcXGxffrpp+3SpUvjelevXh3nh4qW5eXl9uGHH47L1PwpWeZe+wQAYBaYng9nKljm5ubGWNi8rzzPh//ggw/a6dOnx7B5//3329dff31HPEyfZ7033nijHT58eJy/srIybj9MYyXk9Xj+/Plx2zUSE+q1WEwfAwAwi0zPhTMVLBk9ee+999rRo0fH5xUV2ff6+voYLDWqkrCoqNgcD3le8xI39U2hpaWlcfvT9Wq57COPs5+Kpq2WC7W96TwAAGaN6Xlw5u5hOXLkyEYwVCjk8VdffdW++OKLjXknTpxoq6urG68vLCy0Q4cOjetnfq1/7Nix8bWQyz0ff/zxeIno5MmT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");

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