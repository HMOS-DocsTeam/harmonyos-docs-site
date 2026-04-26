"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["101948"], {
175580(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_system_security_api_asset_store_api_asset_store_c_asset_store_headerfile_capi_asset_type_h_capi_asset_type_h_md_2b9_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-system-security-api-asset-store-api-asset-store-c-asset-store-headerfile-capi-asset-type-h-capi-asset-type-h-md-2b9.json
var site_docs_ref_system_security_api_asset_store_api_asset_store_c_asset_store_headerfile_capi_asset_type_h_capi_asset_type_h_md_2b9_namespaceObject = JSON.parse('{"id":"system-security-api/asset-store-api/asset-store-c/asset-store-headerfile/capi-asset-type-h/capi-asset-type-h","title":"asset_type.h","description":"概述","source":"@site/docs-ref/system-security-api/asset-store-api/asset-store-c/asset-store-headerfile/capi-asset-type-h/capi-asset-type-h.md","sourceDirName":"system-security-api/asset-store-api/asset-store-c/asset-store-headerfile/capi-asset-type-h","slug":"/system-security-api/asset-store-api/asset-store-c/asset-store-headerfile/capi-asset-type-h/capi-asset-type-h","permalink":"/harmonyos-docs-site/ref/system-security-api/asset-store-api/asset-store-c/asset-store-headerfile/capi-asset-type-h/capi-asset-type-h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"asset_type.h","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-asset-type-h","kit":"系统","last_updated":"2026-04-22","slug":"capi-asset-type-h"},"sidebar":"ref","previous":{"title":"asset_api.h","permalink":"/harmonyos-docs-site/ref/system-security-api/asset-store-api/asset-store-c/asset-store-headerfile/capi-asset-api-h/capi-asset-api-h"},"next":{"title":"Asset_Blob","permalink":"/harmonyos-docs-site/ref/system-security-api/asset-store-api/asset-store-c/asset-store-struct/capi-assettype-asset-blob/capi-assettype-asset-blob"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/system-security-api/asset-store-api/asset-store-c/asset-store-headerfile/capi-asset-type-h/capi-asset-type-h.md


const frontMatter = {
	title: 'asset_type.h',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-asset-type-h',
	kit: '系统',
	last_updated: '2026-04-22',
	slug: 'capi-asset-type-h'
};
const contentTitle = 'asset_type.h';

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
  "value": "结构体",
  "id": "结构体",
  "level": 3
}, {
  "value": "枚举",
  "id": "枚举",
  "level": 3
}, {
  "value": "宏定义",
  "id": "宏定义",
  "level": 3
}, {
  "value": "枚举类型说明",
  "id": "枚举类型说明",
  "level": 2
}, {
  "value": "Asset_TagType",
  "id": "asset_tagtype",
  "level": 3
}, {
  "value": "Asset_Tag",
  "id": "asset_tag",
  "level": 3
}, {
  "value": "Asset_ResultCode",
  "id": "asset_resultcode",
  "level": 3
}, {
  "value": "Asset_Accessibility",
  "id": "asset_accessibility",
  "level": 3
}, {
  "value": "Asset_AuthType",
  "id": "asset_authtype",
  "level": 3
}, {
  "value": "Asset_SyncType",
  "id": "asset_synctype",
  "level": 3
}, {
  "value": "Asset_WrapType",
  "id": "asset_wraptype",
  "level": 3
}, {
  "value": "Asset_ConflictResolution",
  "id": "asset_conflictresolution",
  "level": 3
}, {
  "value": "Asset_ReturnType",
  "id": "asset_returntype",
  "level": 3
}, {
  "value": "Asset_OperationType",
  "id": "asset_operationtype",
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
        id: "asset_typeh",
        children: "asset_type.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义关键资产存储服务中通用的枚举值、数据结构和错误码。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <asset/asset_type.h>"]
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
        href: "/ref/system-security-api/asset-store-api/asset-store-c/asset-store-module/capi-assettype/capi-assettype",
        children: "AssetType"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "结构体",
      children: "结构体"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "typedef关键字"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/asset-store-api/asset-store-c/asset-store-struct/capi-assettype-asset-blob/capi-assettype-asset-blob",
              children: "Asset_Blob"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Asset_Blob"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "二进制数组类型，即不定长的字节数组。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/asset-store-api/asset-store-c/asset-store-struct/capi-assettype-asset-value/capi-assettype-asset-value",
              children: "Asset_Value"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Asset_Value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "关键资产属性内容。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/asset-store-api/asset-store-c/asset-store-struct/capi-assettype-asset-attr/capi-assettype-asset-attr",
              children: "Asset_Attr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Asset_Attr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "关键资产属性。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/asset-store-api/asset-store-c/asset-store-struct/capi-assettype-asset-result/capi-assettype-asset-result",
              children: "Asset_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Asset_Result"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "关键资产查询结果，用于定义一条关键资产。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/asset-store-api/asset-store-c/asset-store-struct/capi-assettype-asset-resultset/capi-assettype-asset-resultset",
              children: "Asset_ResultSet"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Asset_ResultSet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "关键资产查询结果集合，用于定义多条关键资产。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/asset-store-api/asset-store-c/asset-store-struct/capi-assettype-asset-syncresult/capi-assettype-asset-syncresult",
              children: "Asset_SyncResult"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Asset_SyncResult"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "关键资产同步结果。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "枚举",
      children: "枚举"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "typedef关键字"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#asset_tagtype",
              children: "Asset_TagType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Asset_TagType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "关键资产属性的类型定义。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#asset_tag",
              children: "Asset_Tag"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Asset_Tag"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "关键资产属性的名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#asset_resultcode",
              children: "Asset_ResultCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Asset_ResultCode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "调用ASSET返回的结果码。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#asset_accessibility",
              children: "Asset_Accessibility"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Asset_Accessibility"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "基于锁屏状态的访问控制类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#asset_authtype",
              children: "Asset_AuthType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Asset_AuthType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "关键资产支持的用户认证类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#asset_synctype",
              children: "Asset_SyncType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Asset_SyncType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "关键资产支持的同步类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#asset_wraptype",
              children: "Asset_WrapType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Asset_WrapType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "关键资产支持的加密导入导出类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#asset_conflictresolution",
              children: "Asset_ConflictResolution"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Asset_ConflictResolution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "新增关键资产时的冲突（如：别名相同）处理策略。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#asset_returntype",
              children: "Asset_ReturnType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Asset_ReturnType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "关键资产查询返回的结果类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#asset_operationtype",
              children: "Asset_OperationType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Asset_OperationType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "附属的操作类型。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "宏定义",
      children: "宏定义"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ASSET_TAG_TYPE_MASK (0xF << 28)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["用于获取关键资产属性类型的掩码。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 11"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "枚举类型说明",
      children: "枚举类型说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "asset_tagtype",
      children: "Asset_TagType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum Asset_TagType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "关键资产属性的类型定义。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ASSET_TYPE_BOOL = 0x1 << 28"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识关键资产属性的类型是bool。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ASSET_TYPE_NUMBER = 0x2 << 28"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识关键资产属性的类型是uint32_t。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ASSET_TYPE_BYTES = 0x3 << 28"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识关键资产属性的类型是byte数组。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "asset_tag",
      children: "Asset_Tag"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum Asset_Tag\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "关键资产属性的名称。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ASSET_TAG_SECRET = ASSET_TYPE_BYTES"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x01"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ASSET_TAG_ALIAS = ASSET_TYPE_BYTES"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x02"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ASSET_TAG_ACCESSIBILITY = ASSET_TYPE_NUMBER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x03"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ASSET_TAG_REQUIRE_PASSWORD_SET = ASSET_TYPE_BOOL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x04"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ASSET_TAG_AUTH_TYPE = ASSET_TYPE_NUMBER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x05"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ASSET_TAG_AUTH_VALIDITY_PERIOD = ASSET_TYPE_NUMBER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x06"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ASSET_TAG_AUTH_CHALLENGE = ASSET_TYPE_BYTES"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x07"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ASSET_TAG_AUTH_TOKEN = ASSET_TYPE_BYTES"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x08"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ASSET_TAG_SYNC_TYPE = ASSET_TYPE_NUMBER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ASSET_TAG_IS_PERSISTENT = ASSET_TYPE_BOOL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x11"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ASSET_TAG_DATA_LABEL_CRITICAL_1 = ASSET_TYPE_BYTES"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x20"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ASSET_TAG_DATA_LABEL_CRITICAL_2 = ASSET_TYPE_BYTES"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x21"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ASSET_TAG_DATA_LABEL_CRITICAL_3 = ASSET_TYPE_BYTES"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x22"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ASSET_TAG_DATA_LABEL_CRITICAL_4 = ASSET_TYPE_BYTES"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x23"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ASSET_TAG_DATA_LABEL_NORMAL_1 = ASSET_TYPE_BYTES"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x30"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ASSET_TAG_DATA_LABEL_NORMAL_2 = ASSET_TYPE_BYTES"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x31"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ASSET_TAG_DATA_LABEL_NORMAL_3 = ASSET_TYPE_BYTES"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x32"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ASSET_TAG_DATA_LABEL_NORMAL_4 = ASSET_TYPE_BYTES"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x33"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ASSET_TAG_DATA_LABEL_NORMAL_LOCAL_1 = ASSET_TYPE_BYTES"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x34"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ASSET_TAG_DATA_LABEL_NORMAL_LOCAL_2 = ASSET_TYPE_BYTES"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x35"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ASSET_TAG_DATA_LABEL_NORMAL_LOCAL_3 = ASSET_TYPE_BYTES"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x36"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ASSET_TAG_DATA_LABEL_NORMAL_LOCAL_4 = ASSET_TYPE_BYTES"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x37"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ASSET_TAG_RETURN_TYPE = ASSET_TYPE_NUMBER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x40"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ASSET_TAG_RETURN_LIMIT = ASSET_TYPE_NUMBER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x41"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ASSET_TAG_RETURN_OFFSET = ASSET_TYPE_NUMBER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x42"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ASSET_TAG_RETURN_ORDERED_BY = ASSET_TYPE_NUMBER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x43"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ASSET_TAG_CONFLICT_RESOLUTION = ASSET_TYPE_NUMBER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x44"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ASSET_TAG_UPDATE_TIME = ASSET_TYPE_BYTES"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x45"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ASSET_TAG_OPERATION_TYPE = ASSET_TYPE_NUMBER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x46"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ASSET_TAG_REQUIRE_ATTR_ENCRYPTED = ASSET_TYPE_BOOL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x47"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ASSET_TAG_GROUP_ID = ASSET_TYPE_BYTES"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x48"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ASSET_TAG_WRAP_TYPE = ASSET_TYPE_NUMBER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x49"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "asset_resultcode",
      children: "Asset_ResultCode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum Asset_ResultCode\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "调用ASSET返回的结果码。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ASSET_SUCCESS = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示操作成功。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ASSET_PERMISSION_DENIED = 201"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示调用者没有权限。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ASSET_INVALID_ARGUMENT = 401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示参数错误。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ASSET_SERVICE_UNAVAILABLE = 24000001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示关键资产服务不可用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ASSET_NOT_FOUND = 24000002"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示未找到关键资产。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ASSET_DUPLICATED = 24000003"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示关键资产已存在。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ASSET_ACCESS_DENIED = 24000004"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示访问被拒绝。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ASSET_STATUS_MISMATCH = 24000005"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示锁屏状态不匹配。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ASSET_OUT_OF_MEMORY = 24000006"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示系统内存不足。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ASSET_DATA_CORRUPTED = 24000007"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示关键资产损坏。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ASSET_DATABASE_ERROR = 24000008"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示数据库操作失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ASSET_CRYPTO_ERROR = 24000009"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示算法库操作失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ASSET_IPC_ERROR = 24000010"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示进程通信错误。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ASSET_BMS_ERROR = 24000011"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示包管理服务异常。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ASSET_ACCOUNT_ERROR = 24000012"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示账号系统服务异常。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ASSET_ACCESS_TOKEN_ERROR = 24000013"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示访问控制服务异常。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ASSET_FILE_OPERATION_ERROR = 24000014"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示文件操作失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ASSET_GET_SYSTEM_TIME_ERROR = 24000015"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示获取系统时间失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ASSET_LIMIT_EXCEEDED = 24000016"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示缓存数量超限。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ASSET_UNSUPPORTED = 24000017"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示该子功能不支持。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ASSET_PARAM_VERIFICATION_FAILED = 24000018"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示参数校验失败。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 20"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "asset_accessibility",
      children: "Asset_Accessibility"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum Asset_Accessibility\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "基于锁屏状态的访问控制类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ASSET_ACCESSIBILITY_DEVICE_POWERED_ON = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开机后可访问。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ASSET_ACCESSIBILITY_DEVICE_FIRST_UNLOCKED = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "首次解锁后可访问。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ASSET_ACCESSIBILITY_DEVICE_UNLOCKED = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "解锁时可访问。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "asset_authtype",
      children: "Asset_AuthType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum Asset_AuthType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "关键资产支持的用户认证类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ASSET_AUTH_TYPE_NONE = 0x00"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "访问关键资产前无需用户认证。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ASSET_AUTH_TYPE_ANY = 0xFF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "任意一种用户认证方式（PIN码、人脸、指纹等）通过后，均可访问关键资产。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "asset_synctype",
      children: "Asset_SyncType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum Asset_SyncType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "关键资产支持的同步类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ASSET_SYNC_TYPE_NEVER = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不允许同步关键资产。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ASSET_SYNC_TYPE_THIS_DEVICE = 1 << 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "只在本设备进行同步，如仅在本设备还原的备份场景。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ASSET_SYNC_TYPE_TRUSTED_DEVICE = 1 << 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "只在可信设备间进行同步，如克隆场景。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ASSET_SYNC_TYPE_TRUSTED_ACCOUNT = 1 << 2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["只在登录可信账号的设备间进行同步，如云同步场景。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "asset_wraptype",
      children: "Asset_WrapType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum Asset_WrapType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "关键资产支持的加密导入导出类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 18"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ASSET_WRAP_TYPE_NEVER = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不允许加密导入导出关键资产。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ASSET_WRAP_TYPE_TRUSTED_ACCOUNT = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "只在登录可信账号的设备进行加密导入导出关键资产。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "asset_conflictresolution",
      children: "Asset_ConflictResolution"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum Asset_ConflictResolution\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "新增关键资产时的冲突（如：别名相同）处理策略。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ASSET_CONFLICT_OVERWRITE = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "覆盖原本的关键资产。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ASSET_CONFLICT_THROW_ERROR = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "抛出异常，由业务进行后续处理。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "asset_returntype",
      children: "Asset_ReturnType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum Asset_ReturnType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "关键资产查询返回的结果类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ASSET_RETURN_ALL = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回关键资产明文及属性。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ASSET_RETURN_ATTRIBUTES = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回关键资产属性，不含关键资产明文。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "asset_operationtype",
      children: "Asset_OperationType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum Asset_OperationType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "附属的操作类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ASSET_NEED_SYNC = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要进行同步操作。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ASSET_NEED_LOGOUT = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要进行登出操作。"
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