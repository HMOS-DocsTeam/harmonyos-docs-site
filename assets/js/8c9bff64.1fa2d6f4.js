"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["482476"], {
615338(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkdata_data_reliability_security_native_backup_and_restore_native_backup_and_restore_md_8c9_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkdata-data-reliability-security-native-backup-and-restore-native-backup-and-restore-md-8c9.json
var site_docs_arkdata_data_reliability_security_native_backup_and_restore_native_backup_and_restore_md_8c9_namespaceObject = JSON.parse('{"id":"arkdata/data-reliability-security/native-backup-and-restore/native-backup-and-restore","title":"数据库备份与恢复 (C/C++)","description":"场景介绍","source":"@site/docs/arkdata/data-reliability-security/native-backup-and-restore/native-backup-and-restore.md","sourceDirName":"arkdata/data-reliability-security/native-backup-and-restore","slug":"/arkdata/data-reliability-security/native-backup-and-restore/","permalink":"/harmonyos-docs-site/arkdata/data-reliability-security/native-backup-and-restore/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"数据库备份与恢复 (C/C++)","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/native-backup-and-restore","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"数据库备份与恢复 (ArkTS)","permalink":"/harmonyos-docs-site/arkdata/data-reliability-security/data-backup-and-restore/"},"next":{"title":"数据库加密 (ArkTS)","permalink":"/harmonyos-docs-site/arkdata/data-reliability-security/data-encryption/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkdata/data-reliability-security/native-backup-and-restore/native-backup-and-restore.md


const frontMatter = {
	title: '数据库备份与恢复 (C/C++)',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/native-backup-and-restore',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '数据库备份与恢复 (C/C++)';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "数据库备份与恢复-cc",
        children: "数据库备份与恢复 (C/C++)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果操作或存储的过程中出现问题，开发者可以使用恢复功能，将数据库恢复到之前的状态，重新对数据库进行操作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在数据库被篡改、删除、或者设备断电场景下，数据库可能会因为数据丢失、数据损坏、脏数据等而不可用，可以通过数据库的备份恢复能力将数据库恢复至可用状态。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前仅支持使用关系型数据库（C/C++）进行备份与恢复。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "数据库操作或者存储过程中，有可能会因为各种原因发生非预期的数据库异常的情况，可以根据需要使用关系型数据库的备份能力，以便在数据库异常时，可靠高效地恢复数据保证业务数据正常使用。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "CMakeLists.txt中添加以下lib。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "libnative_rdb_ndk.z.so\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入头文件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include <cstring>\n#include \"database/rdb/relational_store.h\"\n#include \"hilog/log.h\"\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用OH_Rdb_Backup接口实现数据库备份。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "OH_Rdb_ConfigV2 *config = OH_Rdb_CreateConfig();\nOH_Rdb_SetDatabaseDir(config, \"/data/storage/el2/database\");\nOH_Rdb_SetArea(config, RDB_SECURITY_AREA_EL2);\nOH_Rdb_SetStoreName(config, \"RdbTest.db\");\nOH_Rdb_SetSecurityLevel(config, OH_Rdb_SecurityLevel::S3);\nOH_Rdb_SetBundleName(config, \"com.example.nativedemo\");\nint errCode = 0;\nOH_Rdb_Store *store = OH_Rdb_CreateOrOpen(config, &errCode);\n// 备份数据库\nint result = OH_Rdb_Backup(store, \"/data/storage/el2/database/RdbTest_bak.db\");\nOH_Rdb_CloseStore(store);\nstore = nullptr;\nOH_Rdb_DestroyConfig(config);\nconfig = nullptr;\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用OH_Rdb_Restore接口实现数据库恢复。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "OH_Rdb_ConfigV2 *config = OH_Rdb_CreateConfig();\nOH_Rdb_SetDatabaseDir(config, \"/data/storage/el2/database\");\nOH_Rdb_SetArea(config, RDB_SECURITY_AREA_EL2);\nOH_Rdb_SetStoreName(config, \"RdbRestoreTest.db\");\nOH_Rdb_SetSecurityLevel(config, OH_Rdb_SecurityLevel::S3);\nOH_Rdb_SetBundleName(config, \"com.example.nativedemo\");\nint errCode = 0;\nOH_Rdb_Store *store = OH_Rdb_CreateOrOpen(config, &errCode);\n// 恢复数据库\nint result2 =\n    OH_Rdb_Restore(store, \"/data/storage/el2/database/RdbTest_bak.db\");\nOH_Rdb_CloseStore(store);\nstore = nullptr;\nOH_Rdb_DestroyConfig(config);\nconfig = nullptr;\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用OH_Rdb_RegisterCorruptedHandler接口注册数据库异常处理。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "从API version 22开始，支持注册数据库异常处理，开发者可根据需要调用OH_Rdb_RegisterCorruptedHandler接口注册数据库异常处理。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 数据库异常后处理的回调函数。\n// context为OH_Rdb_RegisterCorruptedHandler调用时传入的指针，生命周期由业务自身管理\n// config为OH_Rdb_RegisterCorruptedHandler调用时拷贝的临时变量，不可在回调函数外部使用\n// store为发生异常的DB句柄，如果DB无法打开则为空指针，注意判空。该指针由系统产生，回调函数结束后即刻释放，不可在回调函数外部使用\nvoid CorruptedHandler(void *context, OH_Rdb_ConfigV2 *config, OH_Rdb_Store *store)\n{\n    const char* restorePath = \"/data/storage/el2/database/RdbTest_bak.db\";\n    // store为空代表非DB文件或者DB文件彻底异常无法打开\n    if (store == nullptr) {\n        OH_Rdb_DeleteStoreV2(config);\n        // 重新创建数据库，如果有备库可以重建后调用恢复接口\n        return;\n    }\n    // 通过store句柄使用备库进行数据库恢复\n    int errCode = OH_Rdb_Restore(store, restorePath);\n    // restore在有其它接口占用写链接时会失败，建议等待其它调用结束后再调用\n    if (errCode != 0) {\n        OH_LOG_ERROR(LOG_APP, \"restore failed! errCode is: %{public}d\", errCode);\n        // 等待其它线程调用结束，进行重试。不建议重试次数过多或等待时间过长，避免占用太多系统资源。\n        errCode = OH_Rdb_Restore(store, restorePath);\n        // 或采用标记的方式标记数据库异常，后续在进程重启或业务空闲时进行恢复\n    }\n}\nOH_Rdb_ConfigV2* config3 = OH_Rdb_CreateConfig();\nOH_Rdb_SetDatabaseDir(config3, \"/data/storage/el2/database\");\nOH_Rdb_SetArea(config3, RDB_SECURITY_AREA_EL2);\nOH_Rdb_SetStoreName(config3, \"RdbRestoreTest.db\");\nOH_Rdb_SetSecurityLevel(config3, OH_Rdb_SecurityLevel::S3);\nOH_Rdb_SetBundleName(config3, \"com.example.nativedemo\");\nint errCode3 = 0;\nOH_Rdb_Store *store3 = OH_Rdb_CreateOrOpen(config3, &errCode3);\n\n// 备份数据库\nint result = OH_Rdb_Backup(store3, \"/data/storage/el2/database/RdbTest_bak.db\");\n\nvoid *context = nullptr;\nRdb_CorruptedHandler handler = CorruptedHandler;\n// 注册数据库异常处理\nOH_Rdb_RegisterCorruptedHandler(config3, context, handler);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用OH_Rdb_UnregisterCorruptedHandler接口取消注册数据库异常处理。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "从API version 22开始，支持取消注册数据库异常处理，开发者可根据需要调用OH_Rdb_UnregisterCorruptedHandler接口取消注册数据库异常处理。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "OH_Rdb_ConfigV2* config4 = OH_Rdb_CreateConfig();\nOH_Rdb_SetDatabaseDir(config4, \"/data/storage/el2/database\");\nOH_Rdb_SetArea(config4, RDB_SECURITY_AREA_EL2);\nOH_Rdb_SetStoreName(config4, \"RdbRestoreTest.db\");\nOH_Rdb_SetSecurityLevel(config4, OH_Rdb_SecurityLevel::S3);\nOH_Rdb_SetBundleName(config4, \"com.example.nativedemo\");\nint errCode4 = 0;\nOH_Rdb_Store *store4 = OH_Rdb_CreateOrOpen(config4, &errCode4);\n\nvoid *context = nullptr;\nRdb_CorruptedHandler handler = CorruptedHandler;\n// 取消注册数据库异常处理，handler和context必须要和订阅时保持一致，否则取消失败\nOH_Rdb_UnregisterCorruptedHandler(config4, context, handler);\n"
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