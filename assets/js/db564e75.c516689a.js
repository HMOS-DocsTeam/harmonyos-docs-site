"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["843502"], {
912209(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkdata_app_data_persistence_native_relational_store_guidelines_native_relational_store_guidelines_md_db5_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkdata-app-data-persistence-native-relational-store-guidelines-native-relational-store-guidelines-md-db5.json
var site_docs_arkdata_app_data_persistence_native_relational_store_guidelines_native_relational_store_guidelines_md_db5_namespaceObject = JSON.parse('{"id":"arkdata/app-data-persistence/native-relational-store-guidelines/native-relational-store-guidelines","title":"通过关系型数据库实现数据持久化 (C/C++)","description":"场景介绍","source":"@site/docs/arkdata/app-data-persistence/native-relational-store-guidelines/native-relational-store-guidelines.md","sourceDirName":"arkdata/app-data-persistence/native-relational-store-guidelines","slug":"/arkdata/app-data-persistence/native-relational-store-guidelines/","permalink":"/harmonyos-docs-site/arkdata/app-data-persistence/native-relational-store-guidelines/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"通过关系型数据库实现数据持久化 (C/C++)","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/native-relational-store-guidelines","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"通过关系型数据库实现数据持久化 (ArkTS)","permalink":"/harmonyos-docs-site/arkdata/app-data-persistence/data-persistence-by-rdb-store/"},"next":{"title":"通过向量数据库实现数据持久化 (ArkTS)","permalink":"/harmonyos-docs-site/arkdata/app-data-persistence/data-persistence-by-vector-store/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkdata/app-data-persistence/native-relational-store-guidelines/native-relational-store-guidelines.md


const frontMatter = {
	title: '通过关系型数据库实现数据持久化 (C/C++)',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/native-relational-store-guidelines',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '通过关系型数据库实现数据持久化 (C/C++)';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "基本概念",
  "id": "基本概念",
  "level": 2
}, {
  "value": "约束限制",
  "id": "约束限制",
  "level": 2
}, {
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
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
    ol: "ol",
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
        id: "通过关系型数据库实现数据持久化-cc",
        children: "通过关系型数据库实现数据持久化 (C/C++)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "RelationalStore提供了一套完整的对本地数据库进行管理的机制，对外提供了一系列的增、删、改、查等接口，也可以直接运行用户输入的SQL语句来满足复杂的场景需要。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "谓词"
          })
        }), "：数据库中用来代表数据实体的性质、特征或者数据实体之间关系的词项，主要用来定义数据库的操作条件。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "结果集"
          })
        }), "：指用户查询之后的结果集合，可以对数据进行访问。结果集提供了灵活的数据访问方式，可以更方便地拿到用户想要的数据。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束限制",
      children: "约束限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "系统默认日志方式是WAL（Write Ahead Log）模式，系统默认落盘方式是FULL模式。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "数据库中连接池的最大数量是4个，用以管理用户的读操作。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "为保证数据的准确性，数据库同一时间仅支持一个写操作。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当应用被卸载完成后，设备上的相关数据库文件及临时文件会被自动清除。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["详细的接口说明请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-module/capi-rdb/capi-rdb",
        children: "RDB"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Rdb_ConfigV2 *OH_Rdb_CreateConfig()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个OH_Rdb_ConfigV2实例，并返回指向该实例的指针。使用完毕后需要调用OH_Rdb_DestroyConfig释放内存。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int OH_Rdb_SetDatabaseDir(OH_Rdb_ConfigV2 *config, const char *databaseDir)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "给指定的数据库文件配置OH_Rdb_ConfigV2，设置数据库文件路径。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int OH_Rdb_SetStoreName(OH_Rdb_ConfigV2 *config, const char *storeName)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "给指定的数据库文件配置OH_Rdb_ConfigV2，设置数据库名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int OH_Rdb_SetBundleName(OH_Rdb_ConfigV2 *config, const char *bundleName)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "给指定的数据库文件配置OH_Rdb_ConfigV2，设置应用包名。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int OH_Rdb_SetModuleName(OH_Rdb_ConfigV2 *config, const char *moduleName)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "给指定的数据库文件配置OH_Rdb_ConfigV2，设置应用模块名。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int OH_Rdb_SetSecurityLevel(OH_Rdb_ConfigV2 *config, int securityLevel)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "给指定的数据库文件配置OH_Rdb_ConfigV2，设置数据库安全级别OH_Rdb_SecurityLevel。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int OH_Rdb_SetEncrypted(OH_Rdb_ConfigV2 *config, bool isEncrypted)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "给指定的数据库文件配置OH_Rdb_ConfigV2，设置数据库是否加密。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int OH_Rdb_SetArea(OH_Rdb_ConfigV2 *config, int area)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "给指定的数据库文件配置OH_Rdb_ConfigV2，设置数据库安全区域等级Rdb_SecurityArea。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Rdb_Store *OH_Rdb_CreateOrOpen(const OH_Rdb_ConfigV2 *config, int *errCode)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用数据库配置OH_Rdb_ConfigV2，获得一个对应的OH_Rdb_Store实例，用来操作关系型数据库。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Rdb_Execute(OH_Rdb_Store *store, const char *sql)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "执行包含指定参数但不返回值的SQL语句。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Rdb_Insert(OH_Rdb_Store *store, const char *table, OH_VBucket *valuesBucket)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "向目标表中插入一行数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int OH_Rdb_InsertWithConflictResolution(OH_Rdb_Store *store, const char *table, OH_VBucket *row, Rdb_ConflictResolution resolution, int64_t *rowId)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "向目标表中插入一行数据，支持配置冲突解决策略。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int OH_Rdb_UpdateWithConflictResolution(OH_Rdb_Store *store, OH_VBucket *row, OH_Predicates *predicates, Rdb_ConflictResolution resolution, int64_t *changes)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "向目标表中插入一行数据，支持配置冲突解决策略。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Rdb_Update(OH_Rdb_Store *store, OH_VBucket *valuesBucket, OH_Predicates *predicates)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据OH_Predicates的指定实例对象更新数据库中的数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Rdb_Delete(OH_Rdb_Store *store, OH_Predicates *predicates)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据OH_Predicates的指定实例对象从数据库中删除数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int OH_Predicates_NotLike(OH_Predicates *predicates, const char *field, const char *pattern)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置OH_Predicates以匹配数据类型为字符串且值不类似于指定值的字段。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int OH_Predicates_Glob(OH_Predicates *predicates, const char *field, const char *pattern)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置OH_Predicates以匹配指定字段（数据类型为字符串）且值包含通配符的字段。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int OH_Predicates_NotGlob(OH_Predicates *predicates, const char *field, const char *pattern)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置OH_Predicates以不匹配指定字段（数据类型为字符串）且值包含通配符的字段。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Rdb_Query(OH_Rdb_Store *store, OH_Predicates *predicates, const char *const *columnNames, int length)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据指定条件查询数据库中的数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Rdb_DeleteStore(const OH_Rdb_Config *config)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "删除数据库。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_VBucket_PutAsset(OH_VBucket *bucket, const char *field, Rdb_Asset *value)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "把Rdb_Asset类型的数据放到指定的OH_VBucket对象中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_VBucket_PutAssets(OH_VBucket *bucket, const char *field, Rdb_Asset *value, uint32_t count)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "把Rdb_Asset数组类型的数据放到指定的OH_VBucket对象中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Rdb_FindModifyTime(OH_Rdb_Store *store, const char *tableName, const char *columnName, OH_VObject *values)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取数据库指定表中指定列的数据的最后修改时间。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_RDB_TransOptions *OH_RdbTrans_CreateOptions(void)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个OH_RDB_TransOptions实例，配置事务对象。使用完毕后需要调用OH_RdbTrans_DestroyOptions释放内存。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Cursor *OH_RdbTrans_Query(OH_Rdb_Transaction *trans, const OH_Predicates *predicates, const char *columns[], int len)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据指定的条件查询数据库中的数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Data_Values *OH_Values_Create(void)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建OH_Data_Values实例。使用完毕后需要调用OH_Values_Destroy释放内存。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int OH_Data_Asset_SetName(Data_Asset *asset, const char *name)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为资产类型数据设置名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int OH_Data_Asset_SetUri(Data_Asset *asset, const char *uri)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为资产类型数据设置绝对路径。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int OH_Data_Asset_SetPath(Data_Asset *asset, const char *path)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为资产类型数据设置应用沙箱里的相对路径。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int OH_Data_Asset_SetCreateTime(Data_Asset *asset, int64_t createTime)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为资产类型数据设置创建时间。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int OH_Data_Asset_SetModifyTime(Data_Asset *asset, int64_t modifyTime)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为资产类型数据设置最后修改时间。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int OH_Data_Asset_SetSize(Data_Asset *asset, size_t size)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为资产类型数据设置占用空间大小。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int OH_Data_Asset_SetStatus(Data_Asset *asset, Data_AssetStatus status)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为资产类型数据设置状态码。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int OH_Data_Asset_GetName(Data_Asset *asset, char *name, size_t *length)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取资产类型数据的名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int OH_Data_Asset_GetUri(Data_Asset *asset, char *uri, size_t *length)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取资产类型数据的绝对路径。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int OH_Data_Asset_GetPath(Data_Asset *asset, char *path, size_t *length)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取资产类型数据在应用沙箱内的相对路径。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int OH_Data_Asset_GetCreateTime(Data_Asset *asset, int64_t *createTime)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取资产类型数据的创建时间。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int OH_Data_Asset_GetModifyTime(Data_Asset *asset, int64_t *modifyTime)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取资产类型数据的最后修改时间。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int OH_Data_Asset_GetSize(Data_Asset *asset, size_t *size)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取资产类型数据的占用空间大小。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int OH_Data_Asset_GetStatus(Data_Asset *asset, Data_AssetStatus *status)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取资产类型数据的状态码。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data_Asset *OH_Data_Asset_CreateOne()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个资产类型实例。使用完毕后需要调用OH_Data_Asset_DestroyOne释放内存。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int OH_Data_Asset_DestroyOne(Data_Asset *asset)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁一个资产类型实例并回收内存。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data_Asset **OH_Data_Asset_CreateMultiple(uint32_t count)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创造指定数量的资产类型实例。使用完毕后需要调用OH_Data_Asset_DestroyMultiple释放内存。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int OH_Data_Asset_DestroyMultiple(Data_Asset **assets, uint32_t count)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁指定数量的资产类型实例并回收内存。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int OH_Rdb_CreateTransaction(OH_Rdb_Store *store, const OH_RDB_TransOptions *options, OH_Rdb_Transaction **trans)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个相关的OH_Rdb_Transaction实例，开启事务。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int OH_RdbTransOption_SetType(OH_RDB_TransOptions *options, OH_RDB_TransType type)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置事务对象类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int OH_RdbTrans_Insert(OH_Rdb_Transaction *trans, const char *table, const OH_VBucket *row, int64_t *rowId)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "向目标表中插入一行数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int OH_RdbTrans_InsertWithConflictResolution(OH_Rdb_Transaction *trans, const char *table, const OH_VBucket *row, Rdb_ConflictResolution resolution, int64_t *rowId)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将一行数据插入到目标表中，支持冲突解决。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int OH_RdbTrans_UpdateWithConflictResolution(OH_Rdb_Transaction *trans, const OH_VBucket *row, const OH_Predicates *predicates, Rdb_ConflictResolution resolution, int64_t *changes)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据指定条件更新数据库中的数据，并支持冲突解决。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int OH_RdbTrans_Delete(OH_Rdb_Transaction *trans, const OH_Predicates *predicates, int64_t *changes)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据OH_Predicates的指定实例对象从数据库中删除数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int OH_Value_Destroy(OH_Data_Value *value)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁OH_Data_Value对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int OH_Values_Destroy(OH_Data_Values *values)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁OH_Values_Destroy对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int OH_RdbTrans_Execute(OH_Rdb_Transaction *trans, const char *sql, const OH_Data_Values *args, OH_Data_Value **result)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "执行包含指定参数的SQL语句。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int OH_RdbTrans_Commit(OH_Rdb_Transaction *trans)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "提交事务。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int OH_RdbTrans_Rollback(OH_Rdb_Transaction *trans)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回滚事务。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int OH_RdbTrans_Destroy(OH_Rdb_Transaction *trans)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁OH_Rdb_Transaction实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int OH_Rdb_Attach(OH_Rdb_Store *store, const OH_Rdb_ConfigV2 *config, const char *attachName, int64_t waitTime, size_t *attachedNumber)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将数据库文件附加到当前连接的数据库。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int OH_Rdb_Detach(OH_Rdb_Store *store, const char *attachName, int64_t waitTime, size_t *attachedNumber)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从当前数据库中分离指定的数据库。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int OH_Rdb_SetCustomDir(OH_Rdb_ConfigV2 *config, const char *customDir)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置数据库的自定义目录。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int OH_Rdb_SetLocale(OH_Rdb_Store *store, const char *locale)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持不同语言的排序规则。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int OH_Rdb_SetPlugins(OH_Rdb_ConfigV2 *config, const char **plugins, int32_t length)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置具有特定功能（如全文检索）的动态库。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "添加动态链接库"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CMakeLists.txt中添加以下lib。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "libnative_rdb_ndk.z.so, libhilog_ndk.z.so\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "头文件"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include <cstdlib>\n#include <database/data/data_asset.h>\n#include <database/rdb/oh_cursor.h>\n#include <database/rdb/oh_predicates.h>\n#include <database/rdb/oh_value_object.h>\n#include <database/rdb/oh_values_bucket.h>\n#include <database/rdb/relational_store.h>\n#include <database/rdb/relational_store_error_code.h>\n#include <hilog/log.h>\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["获取OH_Rdb_Store实例，创建数据库文件。其中dataBaseDir变量为应用沙箱路径，Stage模式下建议使用数据库目录，参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context",
            children: "Context"
          }), "的databaseDir属性。FA模式下，由于没有接口获取数据库沙箱路径，可使用应用程序的文件目录，可参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/fa-model/app/js-apis-inner-app-context/js-apis-inner-app-context",
            children: "Context"
          }), "的getFilesDir接口。area为数据库文件存放的安全区域，详见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-contextconstant/js-apis-app-ability-contextconstant",
            children: "contextConstant"
          }), "，开发时需要实现由AreaMode枚举值对Rdb_SecurityArea枚举值的转换。示例代码如下所示："]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 创建OH_Rdb_ConfigV2对象\nOH_Rdb_ConfigV2 *config = OH_Rdb_CreateConfig();\n// 该路径为应用沙箱路径\n// 数据库文件创建位置将位于沙箱路径 /data/storage/el3/database/rdb/RdbTest.db\nOH_Rdb_SetDatabaseDir(config, \"/data/storage/el3/database\");\n// 数据库文件存放的安全区域，与databaseDir参数中el路径对应\nOH_Rdb_SetArea(config, RDB_SECURITY_AREA_EL3);\n// 数据库文件名\nOH_Rdb_SetStoreName(config, \"RdbTest.db\");\n// 应用包名\nOH_Rdb_SetBundleName(config, \"com.samples.rdbstore\");\n// 应用模块名\nOH_Rdb_SetModuleName(config, \"entry\");\n// 数据库文件安全等级\nOH_Rdb_SetSecurityLevel(config, OH_Rdb_SecurityLevel::S3);\n// 数据库是否加密\nOH_Rdb_SetEncrypted(config, false);\n// ···\n\nint errCode = 0;\n// 获取OH_Rdb_Store实例\nOH_Rdb_Store *store_ = OH_Rdb_CreateOrOpen(config, &errCode);\nif (store_ == NULL) {\n    OH_LOG_ERROR(LOG_APP, \"Create store failed, errCode: %{public}d\", errCode);\n    OH_Rdb_DestroyConfig(config);\n    return;\n}\nif (errCode != OH_Rdb_ErrCode::RDB_OK) {\n    OH_LOG_ERROR(LOG_APP, \"Create attachStore failed, errCode: %{public}d\", errCode);\n    OH_Rdb_DestroyConfig(config);\n    OH_Rdb_CloseStore(store_);\n    return;\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如果需要设置自定义数据库路径，可在上述代码// ...处调用OH_Rdb_SetCustomDir接口设置。如果需要设置为只读模式打开数据库，可在上述代码// ...处可调用OH_Rdb_SetReadOnly接口设置。示例代码如下所示："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 可设置自定义数据库路径\n// 数据库文件创建位置将位于沙箱路径 /data/storage/el3/database/a/b/RdbTest.db\nOH_Rdb_SetCustomDir(config, \"../a/b\");\n// 可设置为只读模式打开数据库\nOH_Rdb_SetReadOnly(config, true);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取到OH_Rdb_Store后，调用OH_Rdb_Execute接口创建表，并调用OH_Rdb_Insert接口插入数据。示例代码如下所示："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "char createTableSql[] = \"CREATE TABLE IF NOT EXISTS EMPLOYEE (ID INTEGER PRIMARY KEY AUTOINCREMENT, \"\n    \"NAME TEXT NOT NULL, AGE INTEGER, SALARY REAL, CODES BLOB)\";\n// 执行建表语句\nOH_Rdb_Execute(store_, createTableSql);\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 创建键值对实例\nOH_VBucket *valueBucket = OH_Rdb_CreateValuesBucket();\nvalueBucket->putText(valueBucket, \"NAME\", \"Lisa\");\nvalueBucket->putInt64(valueBucket, \"AGE\", 18); // The value of AGE is 18\nvalueBucket->putReal(valueBucket, \"SALARY\", 100.5); // The value of SALARY is 100.5\nuint8_t arr[] = {1, 2, 3, 4, 5};\nint len = sizeof(arr) / sizeof(arr[0]);\nvalueBucket->putBlob(valueBucket, \"CODES\", arr, len);\n// 插入数据\nint rowId = OH_Rdb_Insert(store_, \"EMPLOYEE\", valueBucket);\n\nOH_VBucket *valueBucket2 = OH_Rdb_CreateValuesBucket();\nvalueBucket2->putInt64(valueBucket2, \"ID\", 2); // The value of ID is 2\nvalueBucket2->putText(valueBucket2, \"NAME\", \"zhangsan\");\nvalueBucket2->putInt64(valueBucket2, \"AGE\", 24); // The value of AGE is 24\nvalueBucket2->putReal(valueBucket2, \"SALARY\", 120.4); // The value of SALARY is 120.4\nint64_t rowId2 = -1;\n// 支持插入数据时配置冲突策略\nint result = OH_Rdb_InsertWithConflictResolution(store_, \"EMPLOYEE\", valueBucket2,\n    Rdb_ConflictResolution::RDB_CONFLICT_REPLACE, &rowId2);\n// 销毁键值对实例\nvalueBucket->destroy(valueBucket);\nvalueBucket2->destroy(valueBucket2);\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(702904)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "关系型数据库没有显式的flush操作实现持久化，数据插入即保存在持久化文件。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "根据谓词指定的实例对象，对数据进行修改或删除。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用OH_Rdb_Update方法修改数据，调用OH_Rdb_Delete方法删除数据。示例代码如下所示："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 创建valueBucket对象，用于存储要更新的新数据\nOH_VBucket *valueBucket = OH_Rdb_CreateValuesBucket();\nvalueBucket->putText(valueBucket, \"NAME\", \"Rose\");\nvalueBucket->putInt64(valueBucket, \"AGE\", 22); // The value of AGE is 22\nvalueBucket->putReal(valueBucket, \"SALARY\", 200.5); // The value of SALARY is 200.5\nuint8_t arr[] = {1, 2, 3, 4, 5};\nint len = sizeof(arr) / sizeof(arr[0]);\nvalueBucket->putBlob(valueBucket, \"CODES\", arr, len);\n// 创建谓词对象，指定更新条件：NAME为\"Lisa\"且SALARY为100.5\nOH_Predicates *predicates = OH_Rdb_CreatePredicates(\"EMPLOYEE\");\nif (predicates == NULL) {\n    OH_LOG_ERROR(LOG_APP, \"CreatePredicates failed.\");\n    valueBucket->destroy(valueBucket);\n    return;\n}\nOH_VObject *valueObject = OH_Rdb_CreateValueObject();\nconst char *name = \"Lisa\";\nvalueObject->putText(valueObject, name);\npredicates->equalTo(predicates, \"NAME\", valueObject)->andOperate(predicates);\nuint32_t count = 1;\ndouble salary = 100.5;\nvalueObject->putDouble(valueObject, &salary, count);\npredicates->equalTo(predicates, \"SALARY\", valueObject);\n// 执行更新操作，将符合条件的数据更新为valueBucket中的值\nint changeRows = OH_Rdb_Update(store_, valueBucket, predicates);\nOH_Predicates *predicates2 = OH_Rdb_CreatePredicates(\"EMPLOYEE\");\nif (predicates2 == NULL) {\n    OH_LOG_ERROR(LOG_APP, \"CreatePredicates failed.\");\n    valueObject->destroy(valueObject);\n    valueBucket->destroy(valueBucket);\n    return;\n}\nOH_VObject *valueObject2 = OH_Rdb_CreateValueObject();\nvalueObject2->putText(valueObject2, \"Rose\");\npredicates2->equalTo(predicates2, \"NAME\", valueObject2);\nvalueBucket->putInt64(valueBucket, \"ID\", 1); // The value of ID is 1\nvalueBucket->putText(valueBucket, \"NAME\", \"zhangsan\");\nint64_t changeRows2 = -1;\n\n// 支持更新数据时配置冲突策略\nint result = OH_Rdb_UpdateWithConflictResolution(store_, valueBucket, predicates2,\n    Rdb_ConflictResolution::RDB_CONFLICT_REPLACE, &changeRows2);\nvalueObject->destroy(valueObject);\nvalueObject2->destroy(valueObject2);\nvalueBucket->destroy(valueBucket);\npredicates->destroy(predicates);\npredicates2->destroy(predicates2);\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 删除数据\nOH_Predicates *predicates = OH_Rdb_CreatePredicates(\"EMPLOYEE\");\nif (predicates == NULL) {\n    OH_LOG_ERROR(LOG_APP, \"CreatePredicates failed.\");\n    return;\n}\nOH_VObject *valueObject = OH_Rdb_CreateValueObject();\nconst char *name = \"Lisa\";\nvalueObject->putText(valueObject, name);\npredicates->equalTo(predicates, \"NAME\", valueObject);\nint deleteRows = OH_Rdb_Delete(store_, predicates);\nvalueObject->destroy(valueObject);\npredicates->destroy(predicates);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "根据谓词指定的查询条件查找数据。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用OH_Rdb_Query方法查找数据，返回一个OH_Cursor结果集。示例代码如下所示："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "OH_Predicates *predicates = OH_Rdb_CreatePredicates(\"EMPLOYEE\");\nif (predicates == NULL) {\n    OH_LOG_ERROR(LOG_APP, \"CreatePredicates failed.\");\n    return;\n}\nconst char *columnNames[] = {\"NAME\", \"AGE\"};\nint len = sizeof(columnNames) / sizeof(columnNames[0]);\nOH_Cursor *cursor = OH_Rdb_Query(store_, predicates, columnNames, len);\nif (cursor == NULL) {\n    OH_LOG_ERROR(LOG_APP, \"Query failed.\");\n    predicates->destroy(predicates);\n    return;\n}\nint columnCount = 0;\ncursor->getColumnCount(cursor, &columnCount);\n\n// OH_Cursor是一个数据集合的游标，默认指向第-1个记录，有效的数据从0开始\nint64_t age;\nwhile (cursor->goToNextRow(cursor) == OH_Rdb_ErrCode::RDB_OK) {\n    int32_t ageColumnIndex = -1;\n    cursor->getColumnIndex(cursor, \"AGE\", &ageColumnIndex);\n    if (ageColumnIndex != -1) {\n        cursor->getInt64(cursor, ageColumnIndex, &age);\n    }\n}\n\n// 释放谓词实例\npredicates->destroy(predicates);\n// 释放结果集\ncursor->destroy(cursor);\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "配置谓词以LIKE模式或NOT LIKE模式匹配进行数据查询。示例代码如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "OH_Predicates *likePredicates = OH_Rdb_CreatePredicates(\"EMPLOYEE\");\nif (likePredicates == NULL) {\n    return;\n}\nOH_VObject *likePattern = OH_Rdb_CreateValueObject();\nlikePattern->putText(likePattern, \"zh%\");\n// 配置谓词以LIKE模式匹配\nlikePredicates->like(likePredicates, \"NAME\", likePattern);\n\nchar *colName[] = { \"NAME\", \"AGE\" };\nauto *likeQueryCursor = OH_Rdb_Query(store_, likePredicates, colName, 2); // the length of columnNamesis 2\nif (likeQueryCursor == NULL) {\n    likePredicates->destroy(likePredicates);\n    likePattern->destroy(likePattern);\n    return;\n}\nsize_t dataLength = 0;\nint colIndex = -1;\nwhile (likeQueryCursor->goToNextRow(likeQueryCursor) == OH_Rdb_ErrCode::RDB_OK) {\n    likeQueryCursor->getColumnIndex(likeQueryCursor, \"NAME\", &colIndex);\n    likeQueryCursor->getSize(likeQueryCursor, colIndex, &dataLength);\n    char *name = (char *)malloc((dataLength + 1) * sizeof(char));\n    likeQueryCursor->getText(likeQueryCursor, colIndex, name, dataLength + 1);\n    free(name);\n}\nlikeQueryCursor->destroy(likeQueryCursor);\nlikePredicates->destroy(likePredicates);\nlikePattern->destroy(likePattern);\n\nOH_Predicates *notLikePredicates = OH_Rdb_CreatePredicates(\"EMPLOYEE\");\nif (notLikePredicates == NULL) {\n    OH_LOG_ERROR(LOG_APP, \"CreatePredicates failed.\");\n    return;\n}\n// 配置谓词以NOT LIKE模式匹配\nOH_Predicates_NotLike(notLikePredicates, \"NAME\", \"zh%\");\nauto *notLikeQueryCursor = OH_Rdb_Query(store_, notLikePredicates, colName, 2); // the length ofcolumnNames is 2\nif (notLikeQueryCursor == NULL) {\n    notLikePredicates->destroy(notLikePredicates);\n    return;\n}\ndataLength = 0;\ncolIndex = -1;\nwhile (notLikeQueryCursor->goToNextRow(notLikeQueryCursor) == OH_Rdb_ErrCode::RDB_OK) {\n    notLikeQueryCursor->getColumnIndex(notLikeQueryCursor, \"NAME\", &colIndex);\n    notLikeQueryCursor->getSize(notLikeQueryCursor, colIndex, &dataLength);\n    char *name2 = (char *)malloc((dataLength + 1) * sizeof(char));\n    notLikeQueryCursor->getText(notLikeQueryCursor, colIndex, name2, dataLength + 1);\n    free(name2);\n}\n\nnotLikePredicates->destroy(notLikePredicates);\nnotLikeQueryCursor->destroy(notLikeQueryCursor);\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "配置谓词以GLOB模式或NOTGLOB模式匹配进行数据查询。示例代码如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "OH_Predicates *globPredicates = OH_Rdb_CreatePredicates(\"EMPLOYEE\");\nif (globPredicates == NULL) {\n    OH_LOG_ERROR(LOG_APP, \"CreatePredicates failed.\");\n    return;\n}\n// 配置谓词以GLOB模式匹配\nOH_Predicates_Glob(globPredicates, \"NAME\", \"zh*\");\n\nchar *colName[] = { \"NAME\", \"AGE\" };\nauto *globQueryCursor = OH_Rdb_Query(store_, globPredicates, colName, 2); // the length of columnNamesis 2\nif (globQueryCursor == NULL) {\n    OH_LOG_ERROR(LOG_APP, \"Query failed.\");\n    globPredicates->destroy(globPredicates);\n    return;\n}\nsize_t dataLength = 0;\nint colIndex = -1;\nwhile (globQueryCursor->goToNextRow(globQueryCursor) == OH_Rdb_ErrCode::RDB_OK) {\n    globQueryCursor->getColumnIndex(globQueryCursor, \"NAME\", &colIndex);\n    globQueryCursor->getSize(globQueryCursor, colIndex, &dataLength);\n    char *name = (char *)malloc((dataLength + 1) * sizeof(char));\n    globQueryCursor->getText(globQueryCursor, colIndex, name, dataLength + 1);\n    free(name);\n}\nglobQueryCursor->destroy(globQueryCursor);\nglobPredicates->destroy(globPredicates);\n\nOH_Predicates *notGlobPredicates = OH_Rdb_CreatePredicates(\"EMPLOYEE\");\nif (notGlobPredicates == NULL) {\n    OH_LOG_ERROR(LOG_APP, \"CreatePredicates failed.\");\n    return;\n}\n// 配置谓词以NOT GLOB模式匹配\nOH_Predicates_NotGlob(notGlobPredicates, \"NAME\", \"zh*\");\nauto *notGlobQueryCursor = OH_Rdb_Query(store_, notGlobPredicates, colName, 2); // the length ofcolumnNames is 2\nif (notGlobQueryCursor == NULL) {\n    OH_LOG_ERROR(LOG_APP, \"Query failed.\");\n    notGlobPredicates->destroy(notGlobPredicates);\n    return;\n}\ndataLength = 0;\ncolIndex = -1;\nwhile (notGlobQueryCursor->goToNextRow(notGlobQueryCursor) == OH_Rdb_ErrCode::RDB_OK) {\n    notGlobQueryCursor->getColumnIndex(notGlobQueryCursor, \"NAME\", &colIndex);\n    notGlobQueryCursor->getSize(notGlobQueryCursor, colIndex, &dataLength);\n    char *name2 = (char *)malloc((dataLength + 1) * sizeof(char));\n    notGlobQueryCursor->getText(notGlobQueryCursor, colIndex, name2, dataLength + 1);\n    free(name2);\n}\nnotGlobQueryCursor->destroy(notGlobQueryCursor);\nnotGlobPredicates->destroy(notGlobPredicates);\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如需指定排序时使用的语言规则，例如zh_CN表示中文，tr_TR表示土耳其语等。可调用OH_Rdb_SetLocale配置相应规则。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "OH_Rdb_SetLocale(store_, \"zh_CN\");\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如需配置fts（Full-Text Search，即全文搜索引擎）动态库，可使用OH_Rdb_SetPlugins接口进行配置。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["使用约束详见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-i/arkts-apis-data-relationalstore-i#storeconfig",
            children: "StoreConfig"
          }), "中pluginLibs配置项。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "const char *plugins[] = {\n    \"/data/storage/el1/bundle/libs/arm64/libtokenizer.so\"\n};\n\nint32_t count = sizeof(plugins) / sizeof(plugins[0]);\nauto setResult = OH_Rdb_SetPlugins(config, plugins, count);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用事务对象进行插入、删除或更新数据操作。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用OH_RdbTransOption_SetType方法，配置要创建的事务类型，支持配置的事务类型有DEFERRED、IMMEDIATE和EXCLUSIVE，默认为DEFERRED。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用OH_Rdb_CreateTransaction方法创建事务对象，使用该事务对象执行相应事务操作。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "OH_RDB_TransOptions *options = OH_RdbTrans_CreateOptions();\n// 配置事务类型\nOH_RdbTransOption_SetType(options, RDB_TRANS_DEFERRED);\nOH_Rdb_Transaction *trans = nullptr;\n// 创建事务对象\nint res = OH_Rdb_CreateTransaction(store_, options, &trans);\nOH_RdbTrans_DestroyOptions(options);\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "char transCreateTableSql[] =\n    \"CREATE TABLE IF NOT EXISTS transaction_table (id INTEGER PRIMARY KEY AUTOINCREMENT, data1 INTEGER, \"\n    \"data2 INTEGER, data3 FLOAT, data4 TEXT, data5 BLOB, data6 ASSET, data7 ASSETS, data8 UNLIMITED INT, \"\n    \"data9 FLOATVECTOR);\";\n\nauto *execResult = OH_Value_Create();\n\n// 通过事务对象执行创建数据库表SQL语句\nint ret = OH_RdbTrans_Execute(trans, transCreateTableSql, nullptr, &execResult);\n\n// 创建OH_Data_Values实例\nOH_Data_Values *values = OH_Values_Create();\nret = OH_Values_PutInt(values, 1); // The value of id is 1\nret = OH_Values_PutInt(values, 2); // The value of datat2 is 2\nret = OH_Values_PutReal(values, 1.1); // The value of datat3 is 1.1\nret = OH_Values_PutText(values, \"1\"); // The value of datat3 is 1\nunsigned char val[] = {1, 2};\nret = OH_Values_PutBlob(values, val, sizeof(val) / sizeof(val[0]));\n\nData_Asset *asset = OH_Data_Asset_CreateOne();\nret = OH_Data_Asset_SetName(asset, \"name\");\nret = OH_Values_PutAsset(values, asset);\nOH_Data_Asset_DestroyOne(asset);\n\nData_Asset **assets = OH_Data_Asset_CreateMultiple(2); // The number of created Data_Assets is 2\nret = OH_Data_Asset_SetName(assets[0], \"name1\");\nret = OH_Data_Asset_SetName(assets[1], \"name2\");\nret = OH_Values_PutAssets(values, assets, 2); // The number of Data_ Assets is 2\nret = OH_Data_Asset_DestroyMultiple(assets, 2); // The number of destroyed Data_Assets is 2\n\nuint64_t bigInt[] = {1, 2, 3, 4, 5};\nret = OH_Values_PutUnlimitedInt(values, 0, bigInt, sizeof(bigInt) / sizeof(bigInt[0]));\n\nconst char *insertSql = \"INSERT INTO transaction_table \"\n                        \"(data1, data2, data3, data4, data5, data6, data7, data8) VALUES (?, ?, ?, ?, ?, ?, ?, ?)\";\nOH_Data_Value *outValue = nullptr;\n\n// 通过事务对象执行数据插入SQL语句\nret = OH_RdbTrans_Execute(trans, insertSql, values, &outValue);\nOH_Value_Destroy(outValue);\nOH_Values_Destroy(values);\n\nOH_VBucket *transValueBucket = OH_Rdb_CreateValuesBucket();\ntransValueBucket->putInt64(transValueBucket, \"data1\", 1); // The value of datat1 is 1\ntransValueBucket->putInt64(transValueBucket, \"data2\", 2); // The value of datat2 is 2\ntransValueBucket->putReal(transValueBucket, \"data3\", 1.1); // The value of datat3 is 1.1\ntransValueBucket->putText(transValueBucket, \"data4\", \"1\"); // The value of datat4 is 1\ntransValueBucket->putBlob(transValueBucket, \"data5\", val, sizeof(val) / sizeof(val[0]));\nint64_t insertRowId = -1;\n// 通过事务对象执行OH_VBucket数据插入\nint insertRet = OH_RdbTrans_Insert(trans, \"transaction_table\", transValueBucket, &insertRowId);\ntransValueBucket->destroy(transValueBucket);\n\nOH_VBucket *transValueBucket2 = OH_Rdb_CreateValuesBucket();\ntransValueBucket2->putInt64(transValueBucket2, \"id\", 1); // The value of id is 1\ntransValueBucket2->putInt64(transValueBucket2, \"data2\", 2); // The value of datat2 is 2\ntransValueBucket2->putReal(transValueBucket2, \"data3\", 1.2); // The value of datat3 is 1.2\n\nint64_t transInsertRow = -1;\n// 支持插入数据时配置冲突策略\nint result = OH_RdbTrans_InsertWithConflictResolution(\n    trans, \"transaction_table\", transValueBucket2, Rdb_ConflictResolution::RDB_CONFLICT_REPLACE, &transInsertRow);\n\ntransValueBucket2->destroy(transValueBucket2);\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "OH_VBucket *transValueBucket3 = OH_Rdb_CreateValuesBucket();\ntransValueBucket3->putInt64(transValueBucket3, \"id\", 1); // The value of id is 1\ntransValueBucket3->putInt64(transValueBucket3, \"data2\", 3); // The value of data2 is 3\ntransValueBucket3->putReal(transValueBucket3, \"data3\", 1.2); // The value of data3 is 1.2\n\nOH_Predicates *transUpdatePredicates = OH_Rdb_CreatePredicates(\"transaction_table\");\nif (transUpdatePredicates == NULL) {\n    OH_LOG_ERROR(LOG_APP, \"CreatePredicates failed.\");\n    transValueBucket3->destroy(transValueBucket3);\n    return;\n}\nauto targetValue = OH_Rdb_CreateValueObject();\nint64_t two = 2;\ntargetValue->putInt64(targetValue, &two, 1); // The value of id is 1\ntransUpdatePredicates->equalTo(transUpdatePredicates, \"data2\", targetValue);\n\nint64_t updateRows = -1;\n// 支持更新数据时配置冲突策略\nOH_RdbTrans_UpdateWithConflictResolution(trans, transValueBucket3, transUpdatePredicates,\n                                         Rdb_ConflictResolution::RDB_CONFLICT_REPLACE, &updateRows);\ntargetValue->destroy(targetValue);\ntransValueBucket3->destroy(transValueBucket3);\ntransUpdatePredicates->destroy(transUpdatePredicates);\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "OH_Predicates *predicates = OH_Rdb_CreatePredicates(\"transaction_table\");\nif (predicates == NULL) {\n    OH_LOG_ERROR(LOG_APP, \"CreatePredicates failed.\");\n    return;\n}\nconst char *columns[] = {\"data1\", \"data2\", \"data3\"};\n// 通过事务对象执行数据查询\nOH_Cursor *cursor = OH_RdbTrans_Query(trans, predicates, columns, sizeof(columns) / sizeof(columns[0]));\nif (cursor == NULL) {\n    OH_LOG_ERROR(LOG_APP, \"Query failed.\");\n    predicates->destroy(predicates);\n    return;\n}\nint columnCount = 0;\ncursor->getColumnCount(cursor, &columnCount);\n\npredicates->destroy(predicates);\ncursor->destroy(cursor);\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "OH_Predicates *predicates2 = OH_Rdb_CreatePredicates(\"transaction_table\");\nif (predicates2 == NULL) {\n   OH_LOG_ERROR(LOG_APP, \"CreatePredicates failed.\");\n   return;\n}\nOH_VObject *valueObject = OH_Rdb_CreateValueObject();\nif (valueObject == NULL) {\n   OH_LOG_ERROR(LOG_APP, \"CreateValueObject failed.\");\n   predicates2->destroy(predicates2);\n   return;\n}\nvalueObject->putText(valueObject, \"1\"); // Change the text value of the object to 1\npredicates2->equalTo(predicates2, \"data4\", valueObject);\nint64_t changes = -1;\n// 通过事务对象执行数据删除\nint deleteRet = OH_RdbTrans_Delete(trans, predicates2, &changes);\npredicates2->destroy(predicates2);\nvalueObject->destroy(valueObject);\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 提交事务\nOH_RdbTrans_Commit(trans);\n// 销毁事务\nOH_RdbTrans_Destroy(trans);\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "OH_RDB_TransOptions *options2 = OH_RdbTrans_CreateOptions();\nOH_RdbTransOption_SetType(options2, RDB_TRANS_DEFERRED);\nOH_Rdb_Transaction *trans2 = nullptr;\nint transCreateRet = OH_Rdb_CreateTransaction(store_, options2, &trans2);\nOH_RdbTrans_DestroyOptions(options2);\n\n// 回滚事务\nOH_RdbTrans_Rollback(trans2);\nOH_RdbTrans_Destroy(trans2);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "附加数据库。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用OH_Rdb_Attach将一个数据库文件附加到当前数据库中，以便在SQL语句中可以直接访问附加数据库中的数据。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "此API不支持附加加密数据库。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用attach接口后，数据库切换为非WAL模式，性能会存在一定的劣化。切换模式需要确保所有的OH_Cursor都已经销毁，所有的写操作已经结束，否则会报错14800015。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "attach不能并发调用，可能出现未响应情况，报错14800015，需要重试。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当不再使用附加数据时，可调用OH_Rdb_Detach分离附加数据库。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "char attachStoreTableCreateSql[] = \"CREATE TABLE IF NOT EXISTS EMPLOYEE (ID INTEGER PRIMARY KEY AUTOINCREMENT, \"\n    \"NAME TEXT NOT NULL, AGE INTEGER, SALARY REAL, CODES BLOB)\";\nOH_Rdb_ConfigV2 *attachDbConfig = OH_Rdb_CreateConfig();\nif (attachDbConfig == NULL) {\n    OH_LOG_ERROR(LOG_APP, \"Create store config failed.\");\n    return;\n}\nOH_Rdb_SetModuleName(attachDbConfig, \"entry\");\nOH_Rdb_SetDatabaseDir(attachDbConfig, \"/data/storage/el3/database\");\nOH_Rdb_SetArea(attachDbConfig, RDB_SECURITY_AREA_EL3);\nOH_Rdb_SetStoreName(attachDbConfig, \"RdbAttach.db\");\nOH_Rdb_SetSecurityLevel(attachDbConfig, OH_Rdb_SecurityLevel::S3);\nOH_Rdb_SetBundleName(attachDbConfig, \"com.example.nativedemo\");\n\nint errCode1 = 0;\n// 创建附加示例数据库 RdbAttach.db\nOH_Rdb_Store *attachStore = OH_Rdb_CreateOrOpen(attachDbConfig, &errCode1);\n\nif (attachStore == NULL) {\n    OH_LOG_ERROR(LOG_APP, \"Create attachStore failed, errCode: %{public}d\", errCode1);\n    OH_Rdb_DestroyConfig(attachDbConfig);\n    return;\n}\n\nif (errCode1 != OH_Rdb_ErrCode::RDB_OK) {\n    OH_LOG_ERROR(LOG_APP, \"Create attachStore failed, errCode: %{public}d\", errCode1);\n    OH_Rdb_DestroyConfig(attachDbConfig);\n    OH_Rdb_CloseStore(attachStore);\n    return;\n}\nerrCode1 = OH_Rdb_Execute(attachStore, attachStoreTableCreateSql);\nif (errCode1 != OH_Rdb_ErrCode::RDB_OK) {\n    OH_LOG_ERROR(LOG_APP, \"Create table failed, errCode: %{public}d\", errCode1);\n    OH_Rdb_DestroyConfig(attachDbConfig);\n    OH_Rdb_CloseStore(attachStore);\n    return;\n}\nOH_VBucket *valueBucket = OH_Rdb_CreateValuesBucket();\nvalueBucket->putText(valueBucket, \"NAME\", \"Lisa\");\nvalueBucket->putInt64(valueBucket, \"AGE\", 18); // The value of AGE is 18\nvalueBucket->putReal(valueBucket, \"SALARY\", 100.5); // The value of AGE is 100.5\nuint8_t arr[] = {1, 2, 3, 4, 5};\nint len = sizeof(arr) / sizeof(arr[0]);\nvalueBucket->putBlob(valueBucket, \"CODES\", arr, len);\nint rowId = OH_Rdb_Insert(attachStore, \"EMPLOYEE\", valueBucket);\nOH_LOG_INFO(LOG_APP, \"Insert data result: %{public}d\", rowId);\nvalueBucket->destroy(valueBucket);\nOH_Rdb_CloseStore(attachStore);\n\n// 附加数据库\nsize_t attachedNumber = 0;\n// The maximum waiting time allowed for attaching databases is 10\nerrCode = OH_Rdb_Attach(store_, attachDbConfig, \"attach\", 10, &attachedNumber);\nOH_Rdb_DestroyConfig(attachDbConfig);\nif (errCode != OH_Rdb_ErrCode::RDB_OK) {\n    OH_LOG_ERROR(LOG_APP, \"Attach store failed, errCode: %{public}d\", errCode);\n    return;\n}\nOH_Predicates *predicates = OH_Rdb_CreatePredicates(\"attach.EMPLOYEE\");\nif (predicates == NULL) {\n    OH_LOG_ERROR(LOG_APP, \"CreatePredicates failed.\");\n    // The maximum waiting time allowed for detaching databases is 10\n    errCode = OH_Rdb_Detach(store_, \"attach\", 10, &attachedNumber);\n    OH_LOG_INFO(LOG_APP, \"Detach result: %{public}d\", errCode);\n    return;\n}\nchar *colName[] = {};\nint len = sizeof(colName) / sizeof(colName[0]);\nOH_Cursor *cursor = OH_Rdb_Query(store_, predicates, colName, len);\nif (cursor == NULL) {\n    OH_LOG_ERROR(LOG_APP, \"Query failed.\");\n    // The maximum waiting time allowed for detaching databases is 10\n    errCode = OH_Rdb_Detach(store_, \"attach\", 10, &attachedNumber);\n    OH_LOG_INFO(LOG_APP, \"Detach result: %{public}d\", errCode);\n    predicates->destroy(predicates);\n    return;\n}\nint rowCount = -1;\nerrCode = cursor->getRowCount(cursor, &rowCount);\nif (errCode != OH_Rdb_ErrCode::RDB_OK) {\n    OH_LOG_ERROR(LOG_APP, \"Get row count failed, errCode: %{public}d\", errCode);\n} else {\n    OH_LOG_INFO(LOG_APP, \"Query success, row count: %{public}d\", rowCount);\n}\ncursor->destroy(cursor);\npredicates->destroy(predicates);\n// 分离数据库\n// The maximum waiting time allowed for detaching databases is 10\nerrCode = OH_Rdb_Detach(store_, \"attach\", 10, &attachedNumber);\nOH_LOG_INFO(LOG_APP, \"Detach result: %{public}d\", errCode);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "向数据库表中插入资产类型数据。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 列的属性为单个资产类型时，sql语句中应指定为asset，多个资产类型应指定为assets。\nchar createAssetTableSql[] = \"CREATE TABLE IF NOT EXISTS asset_table (id INTEGER PRIMARY KEY AUTOINCREMENT,\"\n    \"data1 ASSET, data2 ASSETS );\";\nconst char *table = \"asset_table\";\nint errCode = OH_Rdb_Execute(store_, createAssetTableSql);\nOH_VBucket *valueBucket = OH_Rdb_CreateValuesBucket();\nData_Asset *asset = OH_Data_Asset_CreateOne();\nOH_Data_Asset_SetName(asset, \"name0\");\nOH_Data_Asset_SetUri(asset, \"uri0\");\nOH_Data_Asset_SetPath(asset, \"path0\");\nOH_Data_Asset_SetCreateTime(asset, 1); // Set the creation time of Data_Asset to 1\nOH_Data_Asset_SetModifyTime(asset, 1); // Set the modify time of Data_Asset to 1\nOH_Data_Asset_SetSize(asset, 1); // Set the size of the Data_Asset to 1\nOH_Data_Asset_SetStatus(asset, Data_AssetStatus::ASSET_NORMAL);\nerrCode = OH_VBucket_PutAsset(valueBucket, \"data1\", asset);\n\nData_Asset **assets = OH_Data_Asset_CreateMultiple(2);\n\nOH_Data_Asset_SetName(assets[0], \"name0\");\nOH_Data_Asset_SetUri(assets[0], \"uri0\");\nOH_Data_Asset_SetPath(assets[0], \"path0\");\nOH_Data_Asset_SetCreateTime(assets[0], 1); // Set the creation time of Data_Asset to 1\nOH_Data_Asset_SetModifyTime(assets[0], 1); // Set the modify time of Data_Asset to 1\nOH_Data_Asset_SetSize(assets[0], 1); // Set the size of the Data_Asset to 1\nOH_Data_Asset_SetStatus(assets[0], Data_AssetStatus::ASSET_NORMAL);\n\nOH_Data_Asset_SetName(assets[1], \"name1\");\nOH_Data_Asset_SetUri(assets[1], \"uri1\");\nOH_Data_Asset_SetPath(assets[1], \"path1\");\nOH_Data_Asset_SetCreateTime(assets[1], 1); // Set the creation time of Data_Asset to 1\nOH_Data_Asset_SetModifyTime(assets[1], 1); // Set the modify time of Data_Asset to 1\nOH_Data_Asset_SetSize(assets[1], 1); // Set the size of the Data_Asset to 1\nOH_Data_Asset_SetStatus(assets[1], Data_AssetStatus::ASSET_NORMAL);\n\nuint32_t assetsCount = 2;\nerrCode = OH_VBucket_PutAssets(valueBucket, \"data2\", assets, assetsCount);\nint rowID = OH_Rdb_Insert(store_, table, valueBucket);\n// 释放Data_Asset*和Data_Asset**\nOH_Data_Asset_DestroyMultiple(assets, assetsCount);\nOH_Data_Asset_DestroyOne(asset);\nvalueBucket->destroy(valueBucket);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "从结果集中读取资产类型数据。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "OH_Predicates *predicates = OH_Rdb_CreatePredicates(\"asset_table\");\nif (predicates == NULL) {\n    OH_LOG_ERROR(LOG_APP, \"CreatePredicates failed.\");\n    return;\n}\nOH_Cursor *cursor = OH_Rdb_Query(store_, predicates, NULL, 0);\nif (cursor == NULL) {\n    predicates->destroy(predicates);\n} else {\n    cursor->goToNextRow(cursor);\n    \n    uint32_t assetCount = 0;\n    // assetCount作为出参获取该列资产类型数据的数量\n    int errCode = cursor->getAssets(cursor, 2, nullptr, &assetCount); // Column index is 2\n    Data_Asset **assets = OH_Data_Asset_CreateMultiple(assetCount);\n    errCode = cursor->getAssets(cursor, 2, assets, &assetCount); // Column index is 2\n    // The number of Data_Assets is 2\n    if (assetCount < 2) {\n        predicates->destroy(predicates);\n        cursor->destroy(cursor);\n    } else {\n        Data_Asset *asset = assets[1];\n        char name[10] = \"\";\n        size_t nameLength = 10;\n        errCode = OH_Data_Asset_GetName(asset, name, &nameLength);\n        \n        char uri[10] = \"\";\n        size_t uriLength = 10;\n        errCode = OH_Data_Asset_GetUri(asset, uri, &uriLength);\n        \n        char path[10] = \"\";\n        size_t pathLength = 10;\n        errCode = OH_Data_Asset_GetPath(asset, path, &pathLength);\n        \n        int64_t createTime = 0;\n        errCode = OH_Data_Asset_GetCreateTime(asset, &createTime);\n        \n        int64_t modifyTime = 0;\n        errCode = OH_Data_Asset_GetModifyTime(asset, &modifyTime);\n        \n        size_t size = 0;\n        errCode = OH_Data_Asset_GetSize(asset, &size);\n        \n        Data_AssetStatus status = Data_AssetStatus::ASSET_NULL;\n        errCode = OH_Data_Asset_GetStatus(asset, &status);\n        \n        predicates->destroy(predicates);\n        OH_Data_Asset_DestroyMultiple(assets, assetCount);\n        cursor->destroy(cursor);\n    }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "查询数据的最后修改时间。调用OH_Rdb_FindModifyTime查询指定表中指定列的数据的最后修改时间，该接口返回一个有两列数据的OH_Cursor对象，第一列为传入的主键/RowId，第二列为最后修改时间。示例代码如下所示："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "constexpr uint32_t  tableCount = 1;\nconst char *table[tableCount];\ntable[0] = \"EMPLOYEE\";\nRdb_DistributedConfig distributedConfig{ .version = 1, .isAutoSync = true };\n// 设置分布式表\nOH_Rdb_SetDistributedTables(store_, table, tableCount, RDB_DISTRIBUTED_CLOUD, &distributedConfig);\n// 查询数据的最后修改时间\nOH_VObject *values = OH_Rdb_CreateValueObject();\nint64_t keys[] = { 1 };\nvalues->putInt64(values, keys, 1); // The value of keys is 1\nOH_Cursor *cursor = OH_Rdb_FindModifyTime(store_, \"EMPLOYEE\", \"ROWID\", values);\nif (cursor == NULL) {\n    return;\n}\nwhile (cursor->goToNextRow(cursor) == OH_Rdb_ErrCode::RDB_OK) {\n    int64_t rowId;\n    cursor->getInt64(cursor, 1, &rowId); // 1 is the column index\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "删除数据库。调用OH_Rdb_DeleteStoreV2方法，删除数据库及数据库相关文件。示例代码如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 释放数据库实例\nOH_Rdb_CloseStore(store_);\n// 删除数据库文件\nOH_Rdb_DeleteStoreV2(config);\n"
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
702904(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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