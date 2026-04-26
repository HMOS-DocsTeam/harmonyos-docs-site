"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["984010"], {
439364(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_js_comp_arkui_js_full_comp_js_full_universal_comp_inform_js_components_common_atomic_layout_js_components_common_atomic_layout_md_bff_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-js-comp-arkui-js-full-comp-js-full-universal-comp-inform-js-components-common-atomic-layout-js-components-common-atomic-layout-md-bff.json
var site_docs_ref_arkui_api_arkui_js_comp_arkui_js_full_comp_js_full_universal_comp_inform_js_components_common_atomic_layout_js_components_common_atomic_layout_md_bff_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-universal-comp-inform/js-components-common-atomic-layout/js-components-common-atomic-layout","title":"原子布局","description":"从API version 5开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。","source":"@site/docs-ref/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-universal-comp-inform/js-components-common-atomic-layout/js-components-common-atomic-layout.md","sourceDirName":"arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-universal-comp-inform/js-components-common-atomic-layout","slug":"/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-universal-comp-inform/js-components-common-atomic-layout/js-components-common-atomic-layout","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-universal-comp-inform/js-components-common-atomic-layout/js-components-common-atomic-layout","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"title":"原子布局","sidebar_position":10,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-components-common-atomic-layout","kit":"应用框架","last_updated":"2026-04-22","slug":"js-components-common-atomic-layout"},"sidebar":"ref","previous":{"title":"自定义字体样式","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-universal-comp-inform/js-components-common-customizing-font/js-components-common-customizing-font"},"next":{"title":"badge","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-container-comp/js-components-container-badge/js-components-container-badge"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-universal-comp-inform/js-components-common-atomic-layout/js-components-common-atomic-layout.md


const frontMatter = {
	title: '原子布局',
	sidebar_position: 10,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-components-common-atomic-layout',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'js-components-common-atomic-layout'
};
const contentTitle = '原子布局';

const assets = {

};



const toc = [{
  "value": "隐藏能力",
  "id": "隐藏能力",
  "level": 2
}, {
  "value": "占比能力",
  "id": "占比能力",
  "level": 2
}, {
  "value": "固定比例",
  "id": "固定比例",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    p: "p",
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
        id: "原子布局",
        children: "原子布局"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(48943)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 5开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在屏幕形态和规格不同等情况下，布局效果需要实现自适应，因此系统提供了面向不同屏幕尺寸界面自适应适配的布局能力，称为原子布局。设计师可以考虑使用原子能力，定义元素在不同形态的尺寸界面上体现的自适应规则。开发者可以使用原子布局能力，快速实现让应用在多形态屏幕上有与设计效果相匹配的自适应效果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "隐藏能力",
      children: "隐藏能力"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在非折行flex布局基础上，增加了显示优先级标记，可以调整组件内元素水平/垂直方向的显示优先级，根据当前组件容器的可用空间来显示内容。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "样式"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "display-index"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "适用于div等支持flex布局的容器组件中的子组件，当容器组件在flex主轴上尺寸不足以显示全部内容时，按照display-index值从小到大的顺序进行隐藏，具有相同display-index值的组件同时隐藏。  默认值：0（表示不隐藏）"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "占比能力",
      children: "占比能力"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在非折行的flex布局中，定义了占比能力的组件，保证指定组件始终在容器的某一个比例空间中进行布局。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "样式"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "flex-weight"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指明当前元素在flex主轴方向上尺寸权值。如果容器组件中所有节点均设置此属性，当前元素尺寸为： 容器主轴尺寸 * 当前权值 / 所有子元素权值和。如果容器组件中某几个节点设置此属性，则容器会对其他未设置此属性的节点进行布局，再将剩余空间分配给设置了此属性的节点，如果未设置此属性的节点设置了超过父元素的宽度，那么将没有剩余空间分配给设置了此属性的节点。设置了此属性的节点的尺寸为：容器剩余空间 * 该元素权值 / 所有子元素权值和。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "固定比例",
      children: "固定比例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义了组件固定比例调整尺寸的能力。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "样式"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "aspect-ratio"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1. 接受任意大于0的浮点值，定义为该节点的宽度与高度比，设置该属性后，该元素尺寸宽高比按照此属性值进行调整。  2. 遵守最大值与最小值的限制。  3. 在flex布局中，主轴尺寸先进行调整，后根据该尺寸调整交叉轴。"
          })]
        })
      })]
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
48943(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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