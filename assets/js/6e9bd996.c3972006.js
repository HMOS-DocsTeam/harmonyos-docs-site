"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["937342"], {
606657(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkdata_api_arkdata_c_arkdata_headerfile_capi_oh_values_bucket_h_capi_oh_values_bucket_h_md_6e9_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkdata-api-arkdata-c-arkdata-headerfile-capi-oh-values-bucket-h-capi-oh-values-bucket-h-md-6e9.json
var site_docs_ref_arkdata_api_arkdata_c_arkdata_headerfile_capi_oh_values_bucket_h_capi_oh_values_bucket_h_md_6e9_namespaceObject = JSON.parse('{"id":"arkdata-api/arkdata-c/arkdata-headerfile/capi-oh-values-bucket-h/capi-oh-values-bucket-h","title":"oh_values_bucket.h","description":"概述","source":"@site/docs-ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-oh-values-bucket-h/capi-oh-values-bucket-h.md","sourceDirName":"arkdata-api/arkdata-c/arkdata-headerfile/capi-oh-values-bucket-h","slug":"/arkdata-api/arkdata-c/arkdata-headerfile/capi-oh-values-bucket-h/capi-oh-values-bucket-h","permalink":"/harmonyos-docs-site/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-oh-values-bucket-h/capi-oh-values-bucket-h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":15,"frontMatter":{"title":"oh_values_bucket.h","sidebar_position":15,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-values-bucket-h","kit":"应用框架","last_updated":"2026-04-22","slug":"capi-oh-values-bucket-h"},"sidebar":"ref","previous":{"title":"oh_value_object.h","permalink":"/harmonyos-docs-site/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-oh-value-object-h/capi-oh-value-object-h"},"next":{"title":"relational_store.h","permalink":"/harmonyos-docs-site/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-relational-store-h/capi-relational-store-h"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-oh-values-bucket-h/capi-oh-values-bucket-h.md


const frontMatter = {
	title: 'oh_values_bucket.h',
	sidebar_position: 15,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-values-bucket-h',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'capi-oh-values-bucket-h'
};
const contentTitle = 'oh_values_bucket.h';

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
  "value": "OH_VBucket_PutAsset()",
  "id": "oh_vbucket_putasset",
  "level": 3
}, {
  "value": "OH_VBucket_PutAssets()",
  "id": "oh_vbucket_putassets",
  "level": 3
}, {
  "value": "OH_VBucket_PutFloatVector()",
  "id": "oh_vbucket_putfloatvector",
  "level": 3
}, {
  "value": "OH_VBucket_PutUnlimitedInt()",
  "id": "oh_vbucket_putunlimitedint",
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
        id: "oh_values_bucketh",
        children: "oh_values_bucket.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于存储键值对的类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <database/rdb/oh_values_bucket.h>"]
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
      }), " 10"]
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
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-vbucket/capi-rdb-oh-vbucket",
              children: "OH_VBucket"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_VBucket"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于存储键值对的类型。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "函数",
      children: "函数"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "#oh_vbucket_putasset",
              children: "int OH_VBucket_PutAsset(OH_VBucket *bucket, const char *field, Data_Asset *value)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["将", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-data-asset/capi-rdb-data-asset",
              children: "Data_Asset"
            }), " 类型的对象放入给定列名的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-vbucket/capi-rdb-oh-vbucket",
              children: "OH_VBucket"
            }), "对象中。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_vbucket_putassets",
              children: "int OH_VBucket_PutAssets(OH_VBucket *bucket, const char *field, Data_Asset **value, uint32_t count)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["将", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-data-asset/capi-rdb-data-asset",
              children: "Data_Asset"
            }), " 类型的对象数组放入给定列名的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-vbucket/capi-rdb-oh-vbucket",
              children: "OH_VBucket"
            }), "对象中。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_vbucket_putfloatvector",
              children: "int OH_VBucket_PutFloatVector(OH_VBucket *bucket, const char *field, const float *vec, size_t len)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["将float数组类型对象放入给定列名的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-vbucket/capi-rdb-oh-vbucket",
              children: "OH_VBucket"
            }), "对象中。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_vbucket_putunlimitedint",
              children: "int OH_VBucket_PutUnlimitedInt(OH_VBucket *bucket, const char *field, int sign, const uint64_t *trueForm, size_t len)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["将任意长度的整数类型对象放入给定列名的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-vbucket/capi-rdb-oh-vbucket",
              children: "OH_VBucket"
            }), "对象中。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数说明",
      children: "函数说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_vbucket_putasset",
      children: "OH_VBucket_PutAsset()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_VBucket_PutAsset(OH_VBucket *bucket, const char *field, Data_Asset *value)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["将", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-data-asset/capi-rdb-data-asset",
        children: "Data_Asset"
      }), " 类型的对象放入给定列名的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-vbucket/capi-rdb-oh-vbucket",
        children: "OH_VBucket"
      }), "对象中。"]
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-vbucket/capi-rdb-oh-vbucket",
              children: "OH_VBucket"
            }), " *bucket"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-vbucket/capi-rdb-oh-vbucket",
              children: "OH_VBucket"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char *field"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数据库表中的列名。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-data-asset/capi-rdb-data-asset",
              children: "Data_Asset"
            }), " *value"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数据库表中指定列名对应的值。"
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
            children: "返回操作是否成功，出错时返回对应的错误码。  RDB_OK 表示成功。  RDB_E_INVALID_ARGS 表示无效参数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_vbucket_putassets",
      children: "OH_VBucket_PutAssets()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_VBucket_PutAssets(OH_VBucket *bucket, const char *field, Data_Asset **value, uint32_t count)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["将", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-data-asset/capi-rdb-data-asset",
        children: "Data_Asset"
      }), " 类型的对象数组放入给定列名的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-vbucket/capi-rdb-oh-vbucket",
        children: "OH_VBucket"
      }), "对象中。"]
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-vbucket/capi-rdb-oh-vbucket",
              children: "OH_VBucket"
            }), " *bucket"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-vbucket/capi-rdb-oh-vbucket",
              children: "OH_VBucket"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char *field"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数据库表中的列名。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-data-asset/capi-rdb-data-asset",
              children: "Data_Asset"
            }), " **value"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数据库表中指定列名对应的值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t count"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示传入的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-data-asset/capi-rdb-data-asset",
              children: "Data_Asset"
            }), "对象数组元素的个数."]
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
            children: "返回操作是否成功，出错时返回对应的错误码。  RDB_OK 表示成功。  RDB_E_INVALID_ARGS 表示无效参数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参考："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "OH_VBucket"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_vbucket_putfloatvector",
      children: "OH_VBucket_PutFloatVector()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_VBucket_PutFloatVector(OH_VBucket *bucket, const char *field, const float *vec, size_t len)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["将float数组类型对象放入给定列名的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-vbucket/capi-rdb-oh-vbucket",
        children: "OH_VBucket"
      }), "对象中。"]
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-vbucket/capi-rdb-oh-vbucket",
              children: "OH_VBucket"
            }), " *bucket"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-vbucket/capi-rdb-oh-vbucket",
              children: "OH_VBucket"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char *field"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数据库表中的列名。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const float *vec"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向float数组的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "size_t len"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示float数组的大小。"
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
            children: "返回操作是否成功，出错时返回对应的错误码。  RDB_OK 表示成功。  RDB_E_INVALID_ARGS 表示无效参数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参考："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "OH_VBucket"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_vbucket_putunlimitedint",
      children: "OH_VBucket_PutUnlimitedInt()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_VBucket_PutUnlimitedInt(OH_VBucket *bucket, const char *field, int sign, const uint64_t *trueForm, size_t len)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["将任意长度的整数类型对象放入给定列名的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-vbucket/capi-rdb-oh-vbucket",
        children: "OH_VBucket"
      }), "对象中。"]
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-vbucket/capi-rdb-oh-vbucket",
              children: "OH_VBucket"
            }), " *bucket"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-vbucket/capi-rdb-oh-vbucket",
              children: "OH_VBucket"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char *field"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数据库表中的列名。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int sign"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示整数类型对象是正数还是负数，0表示正数，1表示负数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const uint64_t *trueForm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向整数类型数组的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "size_t len"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示整数数组的大小。"
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
            children: "返回操作是否成功，出错时返回对应的错误码。  RDB_OK 表示成功。  RDB_E_INVALID_ARGS 表示无效参数。"
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