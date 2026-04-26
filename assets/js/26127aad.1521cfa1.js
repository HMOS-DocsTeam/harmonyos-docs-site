"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["636186"], {
32548(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkdata_api_arkdata_arkts_js_apis_data_relationalstore_arkts_apis_data_relationalstore_t_arkts_apis_data_relationalstore_t_md_261_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkdata-api-arkdata-arkts-js-apis-data-relationalstore-arkts-apis-data-relationalstore-t-arkts-apis-data-relationalstore-t-md-261.json
var site_docs_ref_arkdata_api_arkdata_arkts_js_apis_data_relationalstore_arkts_apis_data_relationalstore_t_arkts_apis_data_relationalstore_t_md_261_namespaceObject = JSON.parse('{"id":"arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-t/arkts-apis-data-relationalstore-t","title":"Types","description":"本模块首批接口从API version 9开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。","source":"@site/docs-ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-t/arkts-apis-data-relationalstore-t.md","sourceDirName":"arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-t","slug":"/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-t/arkts-apis-data-relationalstore-t","permalink":"/harmonyos-docs-site/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-t/arkts-apis-data-relationalstore-t","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"title":"Types","sidebar_position":10,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-data-relationalstore-t","kit":"应用框架","last_updated":"2026-04-22","slug":"arkts-apis-data-relationalstore-t"},"sidebar":"ref","previous":{"title":"Enums","permalink":"/harmonyos-docs-site/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-e/arkts-apis-data-relationalstore-e"},"next":{"title":"@ohos.data.sendableRelationalStore (共享关系型数据库)","permalink":"/harmonyos-docs-site/ref/arkdata-api/arkdata-arkts/js-apis-data-sendablerelationalstore/js-apis-data-sendablerelationalstore"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-t/arkts-apis-data-relationalstore-t.md


const frontMatter = {
	title: 'Types',
	sidebar_position: 10,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-data-relationalstore-t',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'arkts-apis-data-relationalstore-t'
};
const contentTitle = 'Types';

const assets = {

};



const toc = [{
  "value": "Assets10+",
  "id": "assets10",
  "level": 2
}, {
  "value": "ValueType",
  "id": "valuetype",
  "level": 2
}, {
  "value": "ValuesBucket",
  "id": "valuesbucket",
  "level": 2
}, {
  "value": "PRIKeyType10+",
  "id": "prikeytype10",
  "level": 2
}, {
  "value": "UTCTime10+",
  "id": "utctime10",
  "level": 2
}, {
  "value": "ModifyTime10+",
  "id": "modifytime10",
  "level": 2
}, {
  "value": "RowData23+",
  "id": "rowdata23",
  "level": 2
}, {
  "value": "RowsData23+",
  "id": "rowsdata23",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
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
        id: "types",
        children: "Types"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(418679)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本模块首批接口从API version 9开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "assets10",
      children: "Assets10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type Assets = Asset[]"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["表示", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-i/arkts-apis-data-relationalstore-i#asset10",
        children: "Asset"
      }), "类型的数组。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.DistributedDataManager.RelationalStore.Core"]
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-i/arkts-apis-data-relationalstore-i#asset10",
              children: "Asset"
            }), "[]"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示Asset类型的数组。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "valuetype",
      children: "ValueType"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type ValueType = null | number | string | boolean | Uint8Array | Asset | Assets | Float32Array | bigint"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于表示允许的数据字段类型，接口参数具体类型根据其功能而定。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.DistributedDataManager.RelationalStore.Core"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "null10+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示值类型为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示值类型为数字。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示值类型为字符串。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示值类型为布尔值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Uint8Array10+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示值类型为Uint8类型的数组。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Asset10+"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示值类型为附件", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-i/arkts-apis-data-relationalstore-i#asset10",
              children: "Asset"
            }), "。  当字段类型是Asset时，在创建表的sql语句中，类型应当为：ASSET。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Assets10+"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示值类型为附件数组", (0,jsx_runtime.jsx)(_components.a, {
              href: "#assets10",
              children: "Assets"
            }), "。  当字段类型是Assets时，在创建表的sql语句中，类型应当为：ASSETS。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Float32Array12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示值类型为浮点数组。  当字段类型是Float32Array时，在创建表的sql语句中，类型应当为：floatvector(128)。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bigint12+"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示值类型为任意长度的整数。  当字段类型是bigint时，在创建表的sql语句中，类型应当为：UNLIMITED INT，详见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkdata/app-data-persistence/data-persistence-by-rdb-store",
              children: "通过关系型数据库实现数据持久化"
            }), "。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  bigint类型字段不能比较大小，不适用以下谓词操作：between、notBetween、greaterThan、lessThan、greaterThanOrEqualTo、lessThanOrEqualTo、orderByAsc、orderByDesc。  bigint类型字段的数据写入时，需通过BigInt()方法或在数据尾部添加'n'的方式明确为bigint类型，如'let data = BigInt(1234)'或'let data = 1234n'。  bigint字段如果写入number类型的数据，则查询该数据的返回类型为number，而非bigint。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "valuesbucket",
      children: "ValuesBucket"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type ValuesBucket = Record<string, ValueType>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于存储键值对的类型。不支持Sendable跨线程传递。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.DistributedDataManager.RelationalStore.Core"]
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Record<string, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#valuetype",
              children: "ValueType"
            }), ">"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示键值对类型。键的类型为string，值的类型为", (0,jsx_runtime.jsx)(_components.a, {
              href: "#valuetype",
              children: "ValueType"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prikeytype10",
      children: "PRIKeyType10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type PRIKeyType = number | string"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于表示数据库表某一行主键的数据类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.DistributedDataManager.RelationalStore.Core"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "主键的类型可以是number。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "主键的类型可以是string。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "utctime10",
      children: "UTCTime10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type UTCTime = Date"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于表示UTC类型时间的数据类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.DistributedDataManager.RelationalStore.Core"]
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
            children: "Date"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UTC类型的时间。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "modifytime10",
      children: "ModifyTime10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type ModifyTime = Map<PRIKeyType, UTCTime>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于存储数据库表的主键和修改时间的数据类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.DistributedDataManager.RelationalStore.Core"]
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Map<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#prikeytype10",
              children: "PRIKeyType"
            }), ", ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#utctime10",
              children: "UTCTime"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "键表示是数据库表某一行的主键，值表示该行的最后修改时间，用UTC格式表示。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "rowdata23",
      children: "RowData23+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type RowData = Array<ValueType>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于表示数据库表中的某一行数据。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.DistributedDataManager.RelationalStore.Core"]
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Array<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#valuetype",
              children: "ValueType"
            }), ">"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示", (0,jsx_runtime.jsx)(_components.a, {
              href: "#valuetype",
              children: "ValueType"
            }), "类型的数组。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "rowsdata23",
      children: "RowsData23+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type RowsData = Array<RowData>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于表示数据库表中的多行数据。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.DistributedDataManager.RelationalStore.Core"]
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Array<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rowdata23",
              children: "RowData"
            }), ">"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rowdata23",
              children: "RowData"
            }), "类型的数组。"]
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
418679(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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