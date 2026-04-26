"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["315468"], {
130950(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_system_security_api_asset_store_api_asset_store_c_asset_store_headerfile_capi_asset_api_h_capi_asset_api_h_md_b73_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-system-security-api-asset-store-api-asset-store-c-asset-store-headerfile-capi-asset-api-h-capi-asset-api-h-md-b73.json
var site_docs_ref_system_security_api_asset_store_api_asset_store_c_asset_store_headerfile_capi_asset_api_h_capi_asset_api_h_md_b73_namespaceObject = JSON.parse('{"id":"system-security-api/asset-store-api/asset-store-c/asset-store-headerfile/capi-asset-api-h/capi-asset-api-h","title":"asset_api.h","description":"概述","source":"@site/docs-ref/system-security-api/asset-store-api/asset-store-c/asset-store-headerfile/capi-asset-api-h/capi-asset-api-h.md","sourceDirName":"system-security-api/asset-store-api/asset-store-c/asset-store-headerfile/capi-asset-api-h","slug":"/system-security-api/asset-store-api/asset-store-c/asset-store-headerfile/capi-asset-api-h/capi-asset-api-h","permalink":"/harmonyos-docs-site/ref/system-security-api/asset-store-api/asset-store-c/asset-store-headerfile/capi-asset-api-h/capi-asset-api-h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"asset_api.h","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-asset-api-h","kit":"系统","last_updated":"2026-04-22","slug":"capi-asset-api-h"},"sidebar":"ref","previous":{"title":"AssetType","permalink":"/harmonyos-docs-site/ref/system-security-api/asset-store-api/asset-store-c/asset-store-module/capi-assettype/capi-assettype"},"next":{"title":"asset_type.h","permalink":"/harmonyos-docs-site/ref/system-security-api/asset-store-api/asset-store-c/asset-store-headerfile/capi-asset-type-h/capi-asset-type-h"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/system-security-api/asset-store-api/asset-store-c/asset-store-headerfile/capi-asset-api-h/capi-asset-api-h.md


const frontMatter = {
	title: 'asset_api.h',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-asset-api-h',
	kit: '系统',
	last_updated: '2026-04-22',
	slug: 'capi-asset-api-h'
};
const contentTitle = 'asset_api.h';

const assets = {

};



const toc = [{
  "value": "概述",
  "id": "概述",
  "level": 2
}, {
  "value": "汇总",
  "id": "汇总",
  "level": 2
}, {
  "value": "函数",
  "id": "函数",
  "level": 3
}, {
  "value": "函数说明",
  "id": "函数说明",
  "level": 2
}, {
  "value": "OH_Asset_Add()",
  "id": "oh_asset_add",
  "level": 3
}, {
  "value": "OH_Asset_Remove()",
  "id": "oh_asset_remove",
  "level": 3
}, {
  "value": "OH_Asset_Update()",
  "id": "oh_asset_update",
  "level": 3
}, {
  "value": "OH_Asset_PreQuery()",
  "id": "oh_asset_prequery",
  "level": 3
}, {
  "value": "OH_Asset_Query()",
  "id": "oh_asset_query",
  "level": 3
}, {
  "value": "OH_Asset_PostQuery()",
  "id": "oh_asset_postquery",
  "level": 3
}, {
  "value": "OH_Asset_QuerySyncResult()",
  "id": "oh_asset_querysyncresult",
  "level": 3
}, {
  "value": "OH_Asset_ParseAttr()",
  "id": "oh_asset_parseattr",
  "level": 3
}, {
  "value": "OH_Asset_FreeBlob()",
  "id": "oh_asset_freeblob",
  "level": 3
}, {
  "value": "OH_Asset_FreeResultSet()",
  "id": "oh_asset_freeresultset",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
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
        id: "asset_apih",
        children: "asset_api.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "声明用于访问关键资产的接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <asset/asset_api.h>"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "库："
        })
      }), " libasset_ndk.z.so"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Security.Asset"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "相关模块："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-security-api/asset-store-api/asset-store-c/asset-store-module/capi-assetapi/capi-assetapi",
        children: "AssetApi"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "函数",
      children: "函数"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_asset_add",
              children: "int32_t OH_Asset_Add(const Asset_Attr *attributes, uint32_t attrCnt)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["新增一条关键资产。  如果要设置", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/asset-store-api/asset-store-c/asset-store-headerfile/capi-asset-type-h/capi-asset-type-h#asset_tag",
              children: "Asset_Tag"
            }), ".ASSET_TAG_IS_PERSISTENT属性，需要申请ohos.permission.STORE_PERSISTENT_DATA权限。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_asset_remove",
              children: "int32_t OH_Asset_Remove(const Asset_Attr *query, uint32_t queryCnt)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "删除符合条件的一条或多条关键资产。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_asset_update",
              children: "int32_t OH_Asset_Update(const Asset_Attr *query, uint32_t queryCnt, const Asset_Attr *attributesToUpdate, uint32_t updateCnt)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "更新符合条件的一条关键资产。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_asset_prequery",
              children: "int32_t OH_Asset_PreQuery(const Asset_Attr *query, uint32_t queryCnt, Asset_Blob *challenge)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询的预处理，用于需要用户认证的关键资产。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_asset_query",
              children: "int32_t OH_Asset_Query(const Asset_Attr *query, uint32_t queryCnt, Asset_ResultSet *resultSet)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询一条或多条符合条件的关键资产。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_asset_postquery",
              children: "int32_t OH_Asset_PostQuery(const Asset_Attr *handle, uint32_t handleCnt)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询的后置处理，用于需要用户认证的关键资产。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_asset_querysyncresult",
              children: "int32_t OH_Asset_QuerySyncResult(const Asset_Attr *query, uint32_t queryCnt, Asset_SyncResult *syncResult)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询关键资产的同步结果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_asset_parseattr",
              children: "Asset_Attr *OH_Asset_ParseAttr(const Asset_Result *result, Asset_Tag tag)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "解析查询结果，并获取指定的属性值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_asset_freeblob",
              children: "void OH_Asset_FreeBlob(Asset_Blob *blob)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "释放挑战值所占用的内存。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_asset_freeresultset",
              children: "void OH_Asset_FreeResultSet(Asset_ResultSet *resultSet)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "释放查询结果所占用的内存。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数说明",
      children: "函数说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_asset_add",
      children: "OH_Asset_Add()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_Asset_Add(const Asset_Attr *attributes, uint32_t attrCnt)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "新增一条关键资产。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果要设置", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-security-api/asset-store-api/asset-store-c/asset-store-headerfile/capi-asset-type-h/capi-asset-type-h#asset_tag",
        children: "Asset_Tag"
      }), ".ASSET_TAG_IS_PERSISTENT属性，需要申请ohos.permission.STORE_PERSISTENT_DATA权限。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
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
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/asset-store-api/asset-store-c/asset-store-struct/capi-assettype-asset-attr/capi-assettype-asset-attr",
              children: "Asset_Attr"
            }), " *attributes"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "待新增关键资产的属性集合。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t attrCnt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "待新增关键资产的属性数量。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/asset-store-api/asset-store-c/asset-store-headerfile/capi-asset-type-h/capi-asset-type-h#asset_resultcode",
              children: "Asset_ResultCode"
            }), ":  ASSET_SUCCESS = 0：操作成功。  ASSET_PERMISSION_DENIED = 201：调用方不是一个系统应用。  ASSET_INVALID_ARGUMENT = 401：参数错误。 可能原因:  1. 必选参数未指定。  2. 参数类型错误。  3. 参数校验失败。  ASSET_SERVICE_UNAVAILABLE = 24000001：关键资产服务不可用。  ASSET_DUPLICATED = 24000003：关键资产已存在。  ASSET_STATUS_MISMATCH = 24000005：锁屏状态不匹配。  ASSET_OUT_OF_MEMORY = 24000006：系统内存不足。  ASSET_DATA_CORRUPTED = 24000007：关键资产损坏。  ASSET_DATABASE_ERROR = 24000008：数据库操作失败。  ASSET_CRYPTO_ERROR = 24000009：算法库操作失败。  ASSET_IPC_ERROR = 24000010：进程通信错误。  ASSET_BMS_ERROR = 24000011：包管理服务异常。  ASSET_ACCOUNT_ERROR = 24000012：账号系统服务异常。  ASSET_ACCESS_TOKEN_ERROR = 24000013：访问控制服务异常。  ASSET_FILE_OPERATION_ERROR = 24000014：文件操作失败。  ASSET_GET_SYSTEM_TIME_ERROR = 24000015：获取系统时间失败。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_asset_remove",
      children: "OH_Asset_Remove()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_Asset_Remove(const Asset_Attr *query, uint32_t queryCnt)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "删除符合条件的一条或多条关键资产。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
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
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/asset-store-api/asset-store-c/asset-store-struct/capi-assettype-asset-attr/capi-assettype-asset-attr",
              children: "Asset_Attr"
            }), " *query"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "待删除关键资产的搜索条件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t queryCnt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "待删除关键资产搜索条件的个数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/asset-store-api/asset-store-c/asset-store-headerfile/capi-asset-type-h/capi-asset-type-h#asset_resultcode",
              children: "Asset_ResultCode"
            }), ":  ASSET_SUCCESS = 0：操作成功。  ASSET_INVALID_ARGUMENT = 401：参数错误。 可能原因:  1. 参数类型错误。  2. 参数校验失败。  ASSET_SERVICE_UNAVAILABLE = 24000001：关键资产服务不可用。  ASSET_NOT_FOUND = 24000002：未找到关键资产。  ASSET_OUT_OF_MEMORY = 24000006：系统内存不足。  ASSET_DATA_CORRUPTED = 24000007：关键资产损坏。  ASSET_DATABASE_ERROR = 24000008：数据库操作失败。  ASSET_IPC_ERROR = 24000010：进程通信错误。  ASSET_BMS_ERROR = 24000011：包管理服务异常。  ASSET_ACCOUNT_ERROR = 24000012：账号系统服务异常。  ASSET_ACCESS_TOKEN_ERROR = 24000013：访问控制服务异常。  ASSET_GET_SYSTEM_TIME_ERROR = 24000015：获取系统时间失败。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_asset_update",
      children: "OH_Asset_Update()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_Asset_Update(const Asset_Attr *query, uint32_t queryCnt,const Asset_Attr *attributesToUpdate, uint32_t updateCnt)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "更新符合条件的一条关键资产。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/asset-store-api/asset-store-c/asset-store-struct/capi-assettype-asset-attr/capi-assettype-asset-attr",
              children: "Asset_Attr"
            }), " *query"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "待更新关键资产的搜索条件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t queryCnt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "待更新关键资产搜索条件的个数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/asset-store-api/asset-store-c/asset-store-struct/capi-assettype-asset-attr/capi-assettype-asset-attr",
              children: "Asset_Attr"
            }), " *attributesToUpdate"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "待更新关键资产的属性集合。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t updateCnt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "待更新关键资产的属性数量。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/asset-store-api/asset-store-c/asset-store-headerfile/capi-asset-type-h/capi-asset-type-h#asset_resultcode",
              children: "Asset_ResultCode"
            }), ":  ASSET_SUCCESS = 0：操作成功。  ASSET_INVALID_ARGUMENT = 401：参数错误。 可能原因:  1. 必选参数未指定。  2. 参数类型错误。  3. 参数校验失败。  ASSET_SERVICE_UNAVAILABLE = 24000001：关键资产服务不可用。  ASSET_NOT_FOUND = 24000002：未找到关键资产。  ASSET_STATUS_MISMATCH = 24000005：锁屏状态不匹配。  ASSET_OUT_OF_MEMORY = 24000006：系统内存不足。  ASSET_DATA_CORRUPTED = 24000007：关键资产损坏。  ASSET_DATABASE_ERROR = 24000008：数据库操作失败。  ASSET_CRYPTO_ERROR = 24000009：算法库操作失败。  ASSET_IPC_ERROR = 24000010：进程通信错误。  ASSET_BMS_ERROR = 24000011：包管理服务异常。  ASSET_ACCOUNT_ERROR = 24000012：账号系统服务异常。  ASSET_ACCESS_TOKEN_ERROR = 24000013：访问控制服务异常。  ASSET_GET_SYSTEM_TIME_ERROR = 24000015：获取系统时间失败。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_asset_prequery",
      children: "OH_Asset_PreQuery()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_Asset_PreQuery(const Asset_Attr *query, uint32_t queryCnt, Asset_Blob *challenge)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查询的预处理，用于需要用户认证的关键资产。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/asset-store-api/asset-store-c/asset-store-struct/capi-assettype-asset-attr/capi-assettype-asset-attr",
              children: "Asset_Attr"
            }), " *query"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "关键资产的查询条件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t queryCnt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "关键资产查询条件的个数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/asset-store-api/asset-store-c/asset-store-struct/capi-assettype-asset-blob/capi-assettype-asset-blob",
              children: "Asset_Blob"
            }), " *challenge"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["挑战值，在后续调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_asset_query",
              children: "OH_Asset_Query"
            }), "时使用。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/asset-store-api/asset-store-c/asset-store-headerfile/capi-asset-type-h/capi-asset-type-h#asset_resultcode",
              children: "Asset_ResultCode"
            }), ":  ASSET_SUCCESS = 0：操作成功。  ASSET_INVALID_ARGUMENT = 401：参数错误。 可能原因:  1. 参数类型错误。  2. 参数校验失败。  ASSET_SERVICE_UNAVAILABLE = 24000001：关键资产服务不可用。  ASSET_NOT_FOUND = 24000002：未找到关键资产。  ASSET_STATUS_MISMATCH = 24000005：锁屏状态不匹配。  ASSET_OUT_OF_MEMORY = 24000006：系统内存不足。  ASSET_DATA_CORRUPTED = 24000007：关键资产损坏。  ASSET_DATABASE_ERROR = 24000008：数据库操作失败。  ASSET_CRYPTO_ERROR = 24000009：算法库操作失败。  ASSET_IPC_ERROR = 24000010：进程通信错误。  ASSET_BMS_ERROR = 24000011：包管理服务异常。  ASSET_ACCOUNT_ERROR = 24000012：账号系统服务异常。  ASSET_ACCESS_TOKEN_ERROR = 24000013：访问控制服务异常。  ASSET_LIMIT_EXCEEDED = 24000016：缓存数量超限。  ASSET_UNSUPPORTED = 24000017：该子功能不支持。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_asset_query",
      children: "OH_Asset_Query()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_Asset_Query(const Asset_Attr *query, uint32_t queryCnt, Asset_ResultSet *resultSet)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查询一条或多条符合条件的关键资产。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/asset-store-api/asset-store-c/asset-store-struct/capi-assettype-asset-attr/capi-assettype-asset-attr",
              children: "Asset_Attr"
            }), " *query"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "关键资产的查询条件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t queryCnt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "关键资产查询条件的个数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/asset-store-api/asset-store-c/asset-store-struct/capi-assettype-asset-resultset/capi-assettype-asset-resultset",
              children: "Asset_ResultSet"
            }), " *resultSet"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询结果列表。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/asset-store-api/asset-store-c/asset-store-headerfile/capi-asset-type-h/capi-asset-type-h#asset_resultcode",
              children: "Asset_ResultCode"
            }), ":  ASSET_SUCCESS = 0：操作成功。  ASSET_INVALID_ARGUMENT = 401：参数错误。 可能原因:  1. 参数类型错误。  2. 参数校验失败。  ASSET_SERVICE_UNAVAILABLE = 24000001：关键资产服务不可用。  ASSET_NOT_FOUND = 24000002：未找到关键资产。  ASSET_ACCESS_DENIED = 24000004：访问被拒绝。  ASSET_STATUS_MISMATCH = 24000005：锁屏状态不匹配。  ASSET_OUT_OF_MEMORY = 24000006：系统内存不足。  ASSET_DATA_CORRUPTED = 24000007：关键资产损坏。  ASSET_DATABASE_ERROR = 24000008：数据库操作失败。  ASSET_CRYPTO_ERROR = 24000009：算法库操作失败。  ASSET_IPC_ERROR = 24000010：进程通信错误。  ASSET_BMS_ERROR = 24000011：包管理服务异常。  ASSET_ACCOUNT_ERROR = 24000012：账号系统服务异常。  ASSET_ACCESS_TOKEN_ERROR = 24000013：访问控制服务异常。  ASSET_UNSUPPORTED = 24000017：该子功能不支持。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_asset_postquery",
      children: "OH_Asset_PostQuery()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_Asset_PostQuery(const Asset_Attr *handle, uint32_t handleCnt)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查询的后置处理，用于需要用户认证的关键资产。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
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
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/asset-store-api/asset-store-c/asset-store-struct/capi-assettype-asset-attr/capi-assettype-asset-attr",
              children: "Asset_Attr"
            }), " *handle"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["待处理的查询句柄，当前包含", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_asset_prequery",
              children: "OH_Asset_PreQuery"
            }), "执行成功返回的挑战值。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t handleCnt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "句柄属性集合中元素的个数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/asset-store-api/asset-store-c/asset-store-headerfile/capi-asset-type-h/capi-asset-type-h#asset_resultcode",
              children: "Asset_ResultCode"
            }), ":  ASSET_SUCCESS = 0：操作成功。  ASSET_INVALID_ARGUMENT = 401：参数错误。 可能原因:  1. 必选参数未指定。  2. 参数类型错误。  3. 参数校验失败。  ASSET_SERVICE_UNAVAILABLE = 24000001：关键资产服务不可用。  ASSET_OUT_OF_MEMORY = 24000006：系统内存不足。  ASSET_IPC_ERROR = 24000010：进程通信错误。  ASSET_BMS_ERROR = 24000011：包管理服务异常。  ASSET_ACCOUNT_ERROR = 24000012：账号系统服务异常。  ASSET_ACCESS_TOKEN_ERROR = 24000013：访问控制服务异常。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_asset_querysyncresult",
      children: "OH_Asset_QuerySyncResult()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_Asset_QuerySyncResult(const Asset_Attr *query, uint32_t queryCnt, Asset_SyncResult *syncResult)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查询关键资产的同步结果。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/asset-store-api/asset-store-c/asset-store-struct/capi-assettype-asset-attr/capi-assettype-asset-attr",
              children: "Asset_Attr"
            }), " *query"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "关键资产同步结果的查询条件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t queryCnt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "关键资产同步结果的查询条件个数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/asset-store-api/asset-store-c/asset-store-struct/capi-assettype-asset-syncresult/capi-assettype-asset-syncresult",
              children: "Asset_SyncResult"
            }), " *syncResult"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询到的关键资产同步结果。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/asset-store-api/asset-store-c/asset-store-headerfile/capi-asset-type-h/capi-asset-type-h#asset_resultcode",
              children: "Asset_ResultCode"
            }), "：  ASSET_SUCCESS = 0：操作成功。  ASSET_SERVICE_UNAVAILABLE = 24000001：关键资产服务不可用。  ASSET_OUT_OF_MEMORY = 24000006：系统内存不足。  ASSET_IPC_ERROR = 24000010：进程通信错误。  ASSET_BMS_ERROR = 24000011：包管理服务异常。  ASSET_ACCOUNT_ERROR = 24000012：账号系统服务异常。  ASSET_ACCESS_TOKEN_ERROR = 24000013：访问控制服务异常。  ASSET_FILE_OPERATION_ERROR = 24000014：文件操作失败。  ASSET_PARAM_VERIFICATION_FAILED = 24000018：参数校验失败。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_asset_parseattr",
      children: "OH_Asset_ParseAttr()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Asset_Attr *OH_Asset_ParseAttr(const Asset_Result *result, Asset_Tag tag)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "解析查询结果，并获取指定的属性值。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
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
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/asset-store-api/asset-store-c/asset-store-struct/capi-assettype-asset-result/capi-assettype-asset-result",
              children: "Asset_Result"
            }), " *result"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_asset_query",
              children: "OH_Asset_Query"
            }), "中获取的查询结果。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/asset-store-api/asset-store-c/asset-store-headerfile/capi-asset-type-h/capi-asset-type-h#asset_tag",
              children: "Asset_Tag"
            }), " tag"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "待获取的属性标签。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/asset-store-api/asset-store-c/asset-store-struct/capi-assettype-asset-attr/capi-assettype-asset-attr",
              children: "Asset_Attr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "如果操作成功，则以Asset_Attr的形式返回属性，该属性不需要业务进行释放；否则返回NULL。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_asset_freeblob",
      children: "OH_Asset_FreeBlob()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_Asset_FreeBlob(Asset_Blob *blob)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "释放挑战值所占用的内存。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/asset-store-api/asset-store-c/asset-store-struct/capi-assettype-asset-blob/capi-assettype-asset-blob",
              children: "Asset_Blob"
            }), " *blob"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_asset_prequery",
              children: "OH_Asset_PreQuery"
            }), "获取的挑战值。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_asset_freeresultset",
      children: "OH_Asset_FreeResultSet()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_Asset_FreeResultSet(Asset_ResultSet *resultSet)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "释放查询结果所占用的内存。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/asset-store-api/asset-store-c/asset-store-struct/capi-assettype-asset-resultset/capi-assettype-asset-resultset",
              children: "Asset_ResultSet"
            }), " *resultSet"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_asset_query",
              children: "OH_Asset_Query"
            }), "得到的查询结果列表。"]
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