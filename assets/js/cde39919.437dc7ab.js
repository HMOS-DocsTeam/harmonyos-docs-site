"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["190591"], {
954250(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkdata_api_arkdata_c_arkdata_headerfile_capi_oh_data_values_buckets_h_capi_oh_data_values_buckets_h_md_cde_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkdata-api-arkdata-c-arkdata-headerfile-capi-oh-data-values-buckets-h-capi-oh-data-values-buckets-h-md-cde.json
var site_docs_ref_arkdata_api_arkdata_c_arkdata_headerfile_capi_oh_data_values_buckets_h_capi_oh_data_values_buckets_h_md_cde_namespaceObject = JSON.parse('{"id":"arkdata-api/arkdata-c/arkdata-headerfile/capi-oh-data-values-buckets-h/capi-oh-data-values-buckets-h","title":"oh_data_values_buckets.h","description":"概述","source":"@site/docs-ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-oh-data-values-buckets-h/capi-oh-data-values-buckets-h.md","sourceDirName":"arkdata-api/arkdata-c/arkdata-headerfile/capi-oh-data-values-buckets-h","slug":"/arkdata-api/arkdata-c/arkdata-headerfile/capi-oh-data-values-buckets-h/capi-oh-data-values-buckets-h","permalink":"/harmonyos-docs-site/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-oh-data-values-buckets-h/capi-oh-data-values-buckets-h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":9,"frontMatter":{"title":"oh_data_values_buckets.h","sidebar_position":9,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-data-values-buckets-h","kit":"应用框架","last_updated":"2026-04-22","slug":"capi-oh-data-values-buckets-h"},"sidebar":"ref","previous":{"title":"oh_data_values.h","permalink":"/harmonyos-docs-site/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-oh-data-values-h/capi-oh-data-values-h"},"next":{"title":"oh_predicates.h","permalink":"/harmonyos-docs-site/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-oh-predicates-h/capi-oh-predicates-h"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-oh-data-values-buckets-h/capi-oh-data-values-buckets-h.md


const frontMatter = {
	title: 'oh_data_values_buckets.h',
	sidebar_position: 9,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-data-values-buckets-h',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'capi-oh-data-values-buckets-h'
};
const contentTitle = 'oh_data_values_buckets.h';

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
  "value": "函数",
  "id": "函数",
  "level": 3
}, {
  "value": "函数说明",
  "id": "函数说明",
  "level": 2
}, {
  "value": "OH_VBuckets_Create()",
  "id": "oh_vbuckets_create",
  "level": 3
}, {
  "value": "OH_VBuckets_Destroy()",
  "id": "oh_vbuckets_destroy",
  "level": 3
}, {
  "value": "OH_VBuckets_PutRow()",
  "id": "oh_vbuckets_putrow",
  "level": 3
}, {
  "value": "OH_VBuckets_PutRows()",
  "id": "oh_vbuckets_putrows",
  "level": 3
}, {
  "value": "OH_VBuckets_RowCount()",
  "id": "oh_vbuckets_rowcount",
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
        id: "oh_data_values_bucketsh",
        children: "oh_data_values_buckets.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "提供与存储数据值相关的结构定义、函数和枚举。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <database/data/oh_data_values_buckets.h>"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "库："
        })
      }), " libnative_rdb_ndk.z.so"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.DistributedDataManager.RelationalStore.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 18"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "相关模块："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-module/capi-rdb/capi-rdb",
        children: "RDB"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "结构体",
      children: "结构体"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-data-vbuckets/capi-rdb-oh-data-vbuckets",
              children: "OH_Data_VBuckets"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Data_VBuckets"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义OH_Data_VBuckets结构类型。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "函数",
      children: "函数"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "#oh_vbuckets_create",
              children: "OH_Data_VBuckets *OH_VBuckets_Create(void)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建OH_Data_VBuckets实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_vbuckets_destroy",
              children: "int OH_VBuckets_Destroy(OH_Data_VBuckets *buckets)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁OH_Data_VBuckets对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_vbuckets_putrow",
              children: "int OH_VBuckets_PutRow(OH_Data_VBuckets *buckets, const OH_VBucket *row)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "添加OH_VBucket类型数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_vbuckets_putrows",
              children: "int OH_VBuckets_PutRows(OH_Data_VBuckets *buckets, const OH_Data_VBuckets *rows)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "添加OH_Data_VBuckets类型数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_vbuckets_rowcount",
              children: "int OH_VBuckets_RowCount(OH_Data_VBuckets *buckets, size_t *count)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取OH_Data_VBuckets中OH_VBucket的行数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数说明",
      children: "函数说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_vbuckets_create",
      children: "OH_VBuckets_Create()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_Data_VBuckets *OH_VBuckets_Create(void)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建OH_Data_VBuckets实例。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 18"]
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
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-data-vbuckets/capi-rdb-oh-data-vbuckets",
              children: "OH_Data_VBuckets"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["执行成功时返回指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-data-vbuckets/capi-rdb-oh-data-vbuckets",
              children: "OH_Data_VBuckets"
            }), "实例的指针。否则返回nullptr。  使用完成后，必须通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-oh-data-values-buckets-h/capi-oh-data-values-buckets-h#oh_vbuckets_destroy",
              children: "OH_VBuckets_Destroy"
            }), "接口释放内存。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_vbuckets_destroy",
      children: "OH_VBuckets_Destroy()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_VBuckets_Destroy(OH_Data_VBuckets *buckets)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "销毁OH_Data_VBuckets对象。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 18"]
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
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-data-vbuckets/capi-rdb-oh-data-vbuckets",
              children: "OH_Data_VBuckets"
            }), " *buckets"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-data-vbuckets/capi-rdb-oh-data-vbuckets",
              children: "OH_Data_VBuckets"
            }), "实例的指针。"]
          })]
        })
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
            children: "int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回错误码。  返回RDB_OK表示成功。  返回RDB_E_INVALID_ARGS表示无效参数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_vbuckets_putrow",
      children: "OH_VBuckets_PutRow()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_VBuckets_PutRow(OH_Data_VBuckets *buckets, const OH_VBucket *row)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "添加OH_VBucket类型数据。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 18"]
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-data-vbuckets/capi-rdb-oh-data-vbuckets",
              children: "OH_Data_VBuckets"
            }), " *buckets"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-data-vbuckets/capi-rdb-oh-data-vbuckets",
              children: "OH_Data_VBuckets"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-vbucket/capi-rdb-oh-vbucket",
              children: "OH_VBucket"
            }), " *row"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-vbucket/capi-rdb-oh-vbucket",
              children: "OH_VBucket"
            }), "实例的指针。"]
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
            children: "int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回错误码。  返回RDB_OK表示成功。  返回RDB_E_INVALID_ARGS表示无效参数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_vbuckets_putrows",
      children: "OH_VBuckets_PutRows()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_VBuckets_PutRows(OH_Data_VBuckets *buckets, const OH_Data_VBuckets *rows)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "添加OH_Data_VBuckets类型数据。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 18"]
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-data-vbuckets/capi-rdb-oh-data-vbuckets",
              children: "OH_Data_VBuckets"
            }), " *buckets"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-data-vbuckets/capi-rdb-oh-data-vbuckets",
              children: "OH_Data_VBuckets"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-data-vbuckets/capi-rdb-oh-data-vbuckets",
              children: "OH_Data_VBuckets"
            }), " *rows"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-data-vbuckets/capi-rdb-oh-data-vbuckets",
              children: "OH_Data_VBuckets"
            }), "实例的指针。"]
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
            children: "int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回错误码。  返回RDB_OK表示成功。  返回RDB_E_INVALID_ARGS表示无效参数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_vbuckets_rowcount",
      children: "OH_VBuckets_RowCount()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_VBuckets_RowCount(OH_Data_VBuckets *buckets, size_t *count)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取OH_Data_VBuckets中OH_VBucket的行数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 18"]
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-data-vbuckets/capi-rdb-oh-data-vbuckets",
              children: "OH_Data_VBuckets"
            }), " *buckets"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-data-vbuckets/capi-rdb-oh-data-vbuckets",
              children: "OH_Data_VBuckets"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "size_t *count"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["一个输出参数，表示", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-data-vbuckets/capi-rdb-oh-data-vbuckets",
              children: "OH_Data_VBuckets"
            }), "中", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-vbucket/capi-rdb-oh-vbucket",
              children: "OH_VBucket"
            }), "的个数。"]
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
            children: "int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回错误码。  返回RDB_OK表示成功。  返回RDB_E_INVALID_ARGS表示无效参数。"
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