"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["258302"], {
568119(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ability_kit_fa_model_development_fa_model_application_components_dataability_dataability_lifecycle_dataability_lifecycle_md_790_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ability-kit-fa-model-development-fa-model-application-components-dataability-dataability-lifecycle-dataability-lifecycle-md-790.json
var site_docs_ability_kit_fa_model_development_fa_model_application_components_dataability_dataability_lifecycle_dataability_lifecycle_md_790_namespaceObject = JSON.parse('{"id":"ability-kit/fa-model-development/fa-model-application-components/dataability/dataability-lifecycle/dataability-lifecycle","title":"DataAbility的生命周期","description":"应用开发者可以根据业务场景实现data.js/data.ets中的生命周期相关接口。DataAbility生命周期接口说明见下表。","source":"@site/docs/ability-kit/fa-model-development/fa-model-application-components/dataability/dataability-lifecycle/dataability-lifecycle.md","sourceDirName":"ability-kit/fa-model-development/fa-model-application-components/dataability/dataability-lifecycle","slug":"/ability-kit/fa-model-development/fa-model-application-components/dataability/dataability-lifecycle/","permalink":"/harmonyos-docs-site/ability-kit/fa-model-development/fa-model-application-components/dataability/dataability-lifecycle/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"DataAbility的生命周期","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/dataability-lifecycle","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"DataAbility组件配置","permalink":"/harmonyos-docs-site/ability-kit/fa-model-development/fa-model-application-components/dataability/dataability-configuration/"},"next":{"title":"创建DataAbility","permalink":"/harmonyos-docs-site/ability-kit/fa-model-development/fa-model-application-components/dataability/create-dataability/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ability-kit/fa-model-development/fa-model-application-components/dataability/dataability-lifecycle/dataability-lifecycle.md


const frontMatter = {
	title: 'DataAbility的生命周期',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/dataability-lifecycle',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'DataAbility的生命周期';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
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
        id: "dataability的生命周期",
        children: "DataAbility的生命周期"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用开发者可以根据业务场景实现data.js/data.ets中的生命周期相关接口。DataAbility生命周期接口说明见下表。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表1"
        })
      }), " DataAbility相关生命周期API功能介绍"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onInitialized?(info: AbilityInfo): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在Ability初始化调用，通过此回调方法执行RDB等初始化操作。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "update?(uri: string, valueBucket: rdb.ValuesBucket, predicates: dataAbility.DataAbilityPredicates, callback: AsyncCallback<number>): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "更新数据库中的数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "query?(uri: string, columns: Array<string>, predicates: dataAbility.DataAbilityPredicates, callback: AsyncCallback<ResultSet>): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询数据库中的数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "delete?(uri: string, predicates: dataAbility.DataAbilityPredicates, callback: AsyncCallback<number>): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "删除一条或多条数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "normalizeUri?(uri: string, callback: AsyncCallback<string>): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对URI进行规范化。一个规范化的URI可以支持跨设备使用、持久化、备份和还原等，当上下文改变时仍然可以引用到相同的数据项。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "batchInsert?(uri: string, valueBuckets: Array<rdb.ValuesBucket>, callback: AsyncCallback<number>): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "向数据库中插入多条数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "denormalizeUri?(uri: string, callback: AsyncCallback<string>): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将一个由normalizeUri生成的规范化URI转换成非规范化的URI。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "insert?(uri: string, valueBucket: rdb.ValuesBucket, callback: AsyncCallback<number>): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "向数据中插入一条数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "openFile?(uri: string, mode: string, callback: AsyncCallback<number>): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "打开一个文件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "getFileTypes?(uri: string, mimeTypeFilter: string, callback: AsyncCallback<Array<string>>): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取文件的MIME类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "getType?(uri: string, callback: AsyncCallback<string>): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取URI指定数据相匹配的MIME类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "executeBatch?(ops: Array<DataAbilityOperation>, callback: AsyncCallback<Array<DataAbilityResult>>): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "批量操作数据库中的数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "call?(method: string, arg: string, extras: PacMap, callback: AsyncCallback<PacMap>): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自定义方法。"
          })]
        })]
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