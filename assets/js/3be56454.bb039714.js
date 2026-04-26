"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["983828"], {
221419(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_health_service_kit_guide_health_harmonyos_health_data_type_health_exercisesequence_health_exercisesequence_summary_health_exercisesequence_summary_md_3be_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-health-service-kit-guide-health-harmonyos-health-data-type-health-exercisesequence-health-exercisesequence-summary-health-exercisesequence-summary-md-3be.json
var site_docs_health_service_kit_guide_health_harmonyos_health_data_type_health_exercisesequence_health_exercisesequence_summary_health_exercisesequence_summary_md_3be_namespaceObject = JSON.parse('{"id":"health-service-kit-guide/health-harmonyos/health-data-type/health-exercisesequence/health-exercisesequence-summary/health-exercisesequence-summary","title":"简介","description":"用户一段持续时间的锻炼记录数据，由运动类型、应用信息、时间范围、关联的详情数据、关联的统计数据等组成，如跑步、跳绳等锻炼记录。","source":"@site/docs/health-service-kit-guide/health-harmonyos/health-data-type/health-exercisesequence/health-exercisesequence-summary/health-exercisesequence-summary.md","sourceDirName":"health-service-kit-guide/health-harmonyos/health-data-type/health-exercisesequence/health-exercisesequence-summary","slug":"/health-service-kit-guide/health-harmonyos/health-data-type/health-exercisesequence/health-exercisesequence-summary/","permalink":"/harmonyos-docs-site/health-service-kit-guide/health-harmonyos/health-data-type/health-exercisesequence/health-exercisesequence-summary/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"简介","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/health-exercisesequence-summary","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"心率变异性","permalink":"/harmonyos-docs-site/health-service-kit-guide/health-harmonyos/health-data-type/health-samplepoint/ide-heart-rate-variability/"},"next":{"title":"跑步","permalink":"/harmonyos-docs-site/health-service-kit-guide/health-harmonyos/health-data-type/health-exercisesequence/health-running/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/health-service-kit-guide/health-harmonyos/health-data-type/health-exercisesequence/health-exercisesequence-summary/health-exercisesequence-summary.md


const frontMatter = {
	title: '简介',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/health-exercisesequence-summary',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '简介';

const assets = {

};



const toc = [{
  "value": "OAuth权限",
  "id": "oauth权限",
  "level": 2
}, {
  "value": "数据开放说明",
  "id": "数据开放说明",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    li: "li",
    p: "p",
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
        id: "简介",
        children: "简介"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用户一段持续时间的锻炼记录数据，由运动类型、应用信息、时间范围、关联的详情数据、关联的统计数据等组成，如跑步、跳绳等锻炼记录。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#healthstorereaddata-1",
        children: "锻炼记录数据查询"
      }), "接口获取华为运动健康App“运动记录”卡片中的数据。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["锻炼记录数据模型组成参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#exercisesequence",
        children: "ExerciseSequence"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["锻炼记录类型常量：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-exercisedequencehelper/health-api-exercisedequencehelper#%E5%B8%B8%E9%87%8F",
        children: "exerciseSequenceHelper.DATA_TYPE"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "oauth权限",
      children: "OAuth权限"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "联盟卡片申请的权限名称："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "锻炼记录 > 锻炼记录概要"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "锻炼记录 > 锻炼记录详情数据"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "锻炼记录 > 锻炼记录位置详情数据"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(191178)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如需读/写锻炼记录，请申请锻炼记录概要的读/写权限。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如需读/写锻炼记录且关联对应的详情数据，则需同时申请锻炼记录概要读/写权限、锻炼记录详情数据的读/写权限。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如需读/写锻炼记录且关联的详情数据包含位置详情，则需同时申请锻炼记录概要读/写权限、锻炼记录详情数据读/写、锻炼记录位置详情数据的读/写权限。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "数据开放说明",
      children: "数据开放说明"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "开放API"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "查询及时性"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "数据源"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#healthstorereaddata-1",
              children: "healthStore.readData"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "分钟级"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "手机、手表、手环等"
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
191178(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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