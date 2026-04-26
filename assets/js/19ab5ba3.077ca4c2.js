"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["413690"], {
368125(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_health_service_kit_guide_health_harmonyos_health_data_type_health_samplepoint_health_emotion_health_emotion_md_19a_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-health-service-kit-guide-health-harmonyos-health-data-type-health-samplepoint-health-emotion-health-emotion-md-19a.json
var site_docs_health_service_kit_guide_health_harmonyos_health_data_type_health_samplepoint_health_emotion_health_emotion_md_19a_namespaceObject = JSON.parse('{"id":"health-service-kit-guide/health-harmonyos/health-data-type/health-samplepoint/health-emotion/health-emotion","title":"情绪","description":"此数据记录用户在某时刻的情绪数据。","source":"@site/docs/health-service-kit-guide/health-harmonyos/health-data-type/health-samplepoint/health-emotion/health-emotion.md","sourceDirName":"health-service-kit-guide/health-harmonyos/health-data-type/health-samplepoint/health-emotion","slug":"/health-service-kit-guide/health-harmonyos/health-data-type/health-samplepoint/health-emotion/","permalink":"/harmonyos-docs-site/health-service-kit-guide/health-harmonyos/health-data-type/health-samplepoint/health-emotion/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":9,"frontMatter":{"title":"情绪","sidebar_position":9,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/health-emotion","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"身高","permalink":"/harmonyos-docs-site/health-service-kit-guide/health-harmonyos/health-data-type/health-samplepoint/health-height/"},"next":{"title":"心率变异性","permalink":"/harmonyos-docs-site/health-service-kit-guide/health-harmonyos/health-data-type/health-samplepoint/ide-heart-rate-variability/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/health-service-kit-guide/health-harmonyos/health-data-type/health-samplepoint/health-emotion/health-emotion.md


const frontMatter = {
	title: '情绪',
	sidebar_position: 9,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/health-emotion',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '情绪';

const assets = {

};



const toc = [{
  "value": "OAuth权限",
  "id": "oauth权限",
  "level": 2
}, {
  "value": "采样明细数据",
  "id": "采样明细数据",
  "level": 2
}, {
  "value": "明细字段说明",
  "id": "明细字段说明",
  "level": 3
}, {
  "value": "数据开放说明",
  "id": "数据开放说明",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    p: "p",
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
        id: "情绪",
        children: "情绪"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此数据记录用户在某时刻的情绪数据。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Harmony SDK类型常量：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-samplepointhelper/health-api-samplepointhelper#%E5%B8%B8%E9%87%8F-4",
        children: "samplePointHelper.emotion.DATA_TYPE"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "oauth权限",
      children: "OAuth权限"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "联盟卡片申请的权限名称：健康数据 > 情绪数据"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "采样明细数据",
      children: "采样明细数据"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "明细字段说明",
      children: "明细字段说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["字段定义：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/health-service-api/health-api-arkts/health-api-constants-and-models/health-api-samplepointhelper/health-api-samplepointhelper#fields-4",
        children: "samplePointHelper.emotion.Fields"
      })]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.th, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "字段"
              })
            }), "列表"]
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "类型"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选/必选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "单位"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "取值范围"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "emotionStatus"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "情绪状态"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "M"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0, 100)  当前运动健康App仅展示以下值：  1：不愉悦  2：平静  3：愉悦"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
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
              href: "/ref/health-service-api/health-api-arkts/health-api-healthstore/health-api-healthstore#healthstorereaddata",
              children: "healthStore.readData"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "小时级"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "手表、手环等"
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