"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["517688"], {
268408(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ability_kit_fa_model_development_fa_model_application_components_dataability_create_dataability_create_dataability_md_c57_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ability-kit-fa-model-development-fa-model-application-components-dataability-create-dataability-create-dataability-md-c57.json
var site_docs_ability_kit_fa_model_development_fa_model_application_components_dataability_create_dataability_create_dataability_md_c57_namespaceObject = JSON.parse('{"id":"ability-kit/fa-model-development/fa-model-application-components/dataability/create-dataability/create-dataability","title":"创建DataAbility","description":"实现DataAbility中Insert、Query、Update、Delete接口的业务内容。保证能够满足数据库存储业务的基本需求。BatchInsert与ExecuteBatch接口已经在系统中实现遍历逻辑，依赖Insert、Query、Update、Delete接口逻辑，来实现数据的批量处理。","source":"@site/docs/ability-kit/fa-model-development/fa-model-application-components/dataability/create-dataability/create-dataability.md","sourceDirName":"ability-kit/fa-model-development/fa-model-application-components/dataability/create-dataability","slug":"/ability-kit/fa-model-development/fa-model-application-components/dataability/create-dataability/","permalink":"/harmonyos-docs-site/ability-kit/fa-model-development/fa-model-application-components/dataability/create-dataability/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"创建DataAbility","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/create-dataability","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"DataAbility的生命周期","permalink":"/harmonyos-docs-site/ability-kit/fa-model-development/fa-model-application-components/dataability/dataability-lifecycle/"},"next":{"title":"启动DataAbility","permalink":"/harmonyos-docs-site/ability-kit/fa-model-development/fa-model-application-components/dataability/start-dataability/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ability-kit/fa-model-development/fa-model-application-components/dataability/create-dataability/create-dataability.md


const frontMatter = {
	title: '创建DataAbility',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/create-dataability',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '创建DataAbility';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    header: "header",
    p: "p",
    pre: "pre",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "创建dataability",
        children: "创建DataAbility"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "实现DataAbility中Insert、Query、Update、Delete接口的业务内容。保证能够满足数据库存储业务的基本需求。BatchInsert与ExecuteBatch接口已经在系统中实现遍历逻辑，依赖Insert、Query、Update、Delete接口逻辑，来实现数据的批量处理。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建DataAbility的代码示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import featureAbility from '@ohos.ability.featureAbility';\nimport type common from '@ohos.app.ability.common';\nimport type Want from '@ohos.app.ability.Want';\nimport type { AsyncCallback, BusinessError } from '@ohos.base';\nimport dataAbility from '@ohos.data.dataAbility';\nimport rdb from '@ohos.data.rdb';\nimport hilog from '@ohos.hilog';\n\nlet TABLE_NAME = 'book';\nlet STORE_CONFIG: rdb.StoreConfig = { name: 'book.db' };\nlet SQL_CREATE_TABLE = 'CREATE TABLE IF NOT EXISTS book(id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, introduction TEXT NOT NULL)';\nlet rdbStore: rdb.RdbStore | undefined = undefined;\nconst TAG: string = '[Sample_FAModelAbilityDevelop]';\nconst domain: number = 0xFF00;\n\nclass DataAbility {\n  onInitialized(want: Want): void {\n    hilog.info(domain, TAG, 'DataAbility onInitialized, abilityInfo:' + want.bundleName);\n    let context: common.BaseContext = { stageMode: featureAbility.getContext().stageMode };\n    rdb.getRdbStore(context, STORE_CONFIG, 1, (err, store) => {\n      hilog.info(domain, TAG, 'DataAbility getRdbStore callback');\n      store.executeSql(SQL_CREATE_TABLE, []);\n      rdbStore = store;\n    });\n  }\n\n  insert(uri: string, valueBucket: rdb.ValuesBucket, callback: AsyncCallback<number>): void {\n    hilog.info(domain, TAG, 'DataAbility insert start');\n    if (rdbStore) {\n      rdbStore.insert(TABLE_NAME, valueBucket, callback);\n    }\n  }\n\n  batchInsert(uri: string, valueBuckets: Array<rdb.ValuesBucket>, callback: AsyncCallback<number>): void {\n    hilog.info(domain, TAG, 'DataAbility batch insert start');\n    if (rdbStore) {\n      for (let i = 0; i < valueBuckets.length; i++) {\n        hilog.info(domain, TAG, 'DataAbility batch insert i=' + i);\n        if (i < valueBuckets.length - 1) {\n          rdbStore.insert(TABLE_NAME, valueBuckets[i], (err: BusinessError, num: number) => {\n            hilog.info(domain, TAG, 'DataAbility batch insert ret=' + num);\n          });\n        } else {\n          rdbStore.insert(TABLE_NAME, valueBuckets[i], callback);\n        }\n      }\n    }\n  }\n\n  query(uri: string, columns: Array<string>, predicates: dataAbility.DataAbilityPredicates, callback: AsyncCallback<rdb.ResultSet>): void {\n    hilog.info(domain, TAG, 'DataAbility query start');\n    let rdbPredicates = dataAbility.createRdbPredicates(TABLE_NAME, predicates);\n    if (rdbStore) {\n      rdbStore.query(rdbPredicates, columns, callback);\n    }\n  }\n\n  update(uri: string, valueBucket: rdb.ValuesBucket, predicates: dataAbility.DataAbilityPredicates, callback: AsyncCallback<number>): void {\n    hilog.info(domain, TAG, 'DataAbility update start');\n    let rdbPredicates = dataAbility.createRdbPredicates(TABLE_NAME, predicates);\n    if (rdbStore) {\n      rdbStore.update(valueBucket, rdbPredicates, callback);\n    }\n  }\n\n  delete(uri: string, predicates: dataAbility.DataAbilityPredicates, callback: AsyncCallback<number>): void {\n    hilog.info(domain, TAG, 'DataAbility delete start');\n    let rdbPredicates = dataAbility.createRdbPredicates(TABLE_NAME, predicates);\n    if (rdbStore) {\n      rdbStore.delete(rdbPredicates, callback);\n    }\n  }\n}\n\nexport default new DataAbility();\n"
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