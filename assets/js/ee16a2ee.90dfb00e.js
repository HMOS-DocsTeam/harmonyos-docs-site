"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["32696"], {
538678(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_asset_store_kit_asset_arkts_asset_js_query_asset_js_query_md_ee1_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-asset-store-kit-asset-arkts-asset-js-query-asset-js-query-md-ee1.json
var site_docs_system_security_asset_store_kit_asset_arkts_asset_js_query_asset_js_query_md_ee1_namespaceObject = JSON.parse('{"id":"system-security/asset-store-kit/asset-arkts/asset-js-query/asset-js-query","title":"查询关键资产(ArkTS)","description":"接口介绍","source":"@site/docs/system-security/asset-store-kit/asset-arkts/asset-js-query/asset-js-query.md","sourceDirName":"system-security/asset-store-kit/asset-arkts/asset-js-query","slug":"/system-security/asset-store-kit/asset-arkts/asset-js-query/","permalink":"/harmonyos-docs-site/system-security/asset-store-kit/asset-arkts/asset-js-query/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"查询关键资产(ArkTS)","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/asset-js-query","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"更新关键资产(ArkTS)","permalink":"/harmonyos-docs-site/system-security/asset-store-kit/asset-arkts/asset-js-update/"},"next":{"title":"查询需要用户认证的关键资产(ArkTS)","permalink":"/harmonyos-docs-site/system-security/asset-store-kit/asset-arkts/asset-js-query-auth/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/asset-store-kit/asset-arkts/asset-js-query/asset-js-query.md


const frontMatter = {
	title: '查询关键资产(ArkTS)',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/asset-js-query',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '查询关键资产(ArkTS)';

const assets = {

};



const toc = [{
  "value": "接口介绍",
  "id": "接口介绍",
  "level": 2
}, {
  "value": "约束和限制",
  "id": "约束和限制",
  "level": 2
}, {
  "value": "代码示例",
  "id": "代码示例",
  "level": 2
}, {
  "value": "查询单条关键资产明文",
  "id": "查询单条关键资产明文",
  "level": 3
}, {
  "value": "查询单条关键资产属性",
  "id": "查询单条关键资产属性",
  "level": 3
}, {
  "value": "批量查询关键资产属性",
  "id": "批量查询关键资产属性",
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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "查询关键资产arkts",
        children: "查询关键资产(ArkTS)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口介绍",
      children: "接口介绍"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者可以查阅API文档，获取关键资产查询接口的详细说明：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-security-api/asset-store-api/asset-store-arkts/js-apis-asset/js-apis-asset#assetquery",
        children: "query(query: AssetMap)"
      }), "、同步接口", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-security-api/asset-store-api/asset-store-arkts/js-apis-asset/js-apis-asset#assetquerysync12",
        children: "querySync(query: AssetMap)"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在查询关键资产时，关键资产属性的内容（AssetMap）参数如下表所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(186144)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下表中“ALIAS”和名称包含“DATA_LABEL”的关键资产属性，用于存储业务自定义信息，其内容不会被加密，请勿存放敏感个人数据。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查询关键资产明文SECRET需要解密，查询时间较长，需要将RETURN_TYPE设置为ALL；只查询其他关键资产属性不需解密，查询时间较短，需要将RETURN_TYPE设置为ATTRIBUTES。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "属性名称（Tag）"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "属性内容（Value）"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "是否必选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ALIAS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "类型为Uint8Array，长度为1-256字节。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "关键资产别名，每条关键资产的唯一索引。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ACCESSIBILITY"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["类型为number，取值范围详见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/asset-store-api/asset-store-arkts/js-apis-asset/js-apis-asset#accessibility",
              children: "Accessibility"
            }), "。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "基于锁屏状态的访问控制。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "REQUIRE_PASSWORD_SET"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "类型为boolean。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否仅在设置了锁屏密码的情况下，可访问关键资产。为true时表示查询仅用户设置了锁屏密码才允许访问的关键资产；为false时表示查询无论用户是否设置锁屏密码，均可访问的关键资产。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUTH_TYPE"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["类型为number，取值范围详见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/asset-store-api/asset-store-arkts/js-apis-asset/js-apis-asset#authtype",
              children: "AuthType"
            }), "。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "访问关键资产所需的用户认证类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SYNC_TYPE"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["类型为number，取值范围详见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/asset-store-api/asset-store-arkts/js-apis-asset/js-apis-asset#synctype",
              children: "SyncType"
            }), "。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "关键资产支持的同步类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IS_PERSISTENT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "类型为boolean。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在应用卸载时是否需要保留关键资产。为true时表示查询应用卸载后会被保留的关键资产；为false时表示查询应用卸载后会被删除的关键资产。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DATA_LABEL_CRITICAL_1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "类型为Uint8Array，长度为1-2048字节。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["关键资产附属信息，内容由业务自定义且有完整性保护。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " API12前长度为1-512字节。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DATA_LABEL_CRITICAL_2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "类型为Uint8Array，长度为1-2048字节。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["关键资产附属信息，内容由业务自定义且有完整性保护。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " API12前长度为1-512字节。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DATA_LABEL_CRITICAL_3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "类型为Uint8Array，长度为1-2048字节。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["关键资产附属信息，内容由业务自定义且有完整性保护。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " API12前长度为1-512字节。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DATA_LABEL_CRITICAL_4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "类型为Uint8Array，长度为1-2048字节。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["关键资产附属信息，内容由业务自定义且有完整性保护。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " API12前长度为1-512字节。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DATA_LABEL_NORMAL_1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "类型为Uint8Array，长度为1-2048字节。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["关键资产附属信息，内容由业务自定义且无完整性保护。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " API12前长度为1-512字节。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DATA_LABEL_NORMAL_2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "类型为Uint8Array，长度为1-2048字节。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["关键资产附属信息，内容由业务自定义且无完整性保护。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " API12前长度为1-512字节。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DATA_LABEL_NORMAL_3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "类型为Uint8Array，长度为1-2048字节。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["关键资产附属信息，内容由业务自定义且无完整性保护。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " API12前长度为1-512字节。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DATA_LABEL_NORMAL_4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "类型为Uint8Array，长度为1-2048字节。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["关键资产附属信息，内容由业务自定义且无完整性保护。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " API12前长度为1-512字节。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DATA_LABEL_NORMAL_LOCAL_112+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "类型为Uint8Array，长度为1-2048字节。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "关键资产附属的本地信息，内容由业务自定义且无完整性保护，该项信息不会进行同步。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DATA_LABEL_NORMAL_LOCAL_212+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "类型为Uint8Array，长度为1-2048字节。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "关键资产附属的本地信息，内容由业务自定义且无完整性保护，该项信息不会进行同步。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DATA_LABEL_NORMAL_LOCAL_312+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "类型为Uint8Array，长度为1-2048字节。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "关键资产附属的本地信息，内容由业务自定义且无完整性保护，该项信息不会进行同步。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DATA_LABEL_NORMAL_LOCAL_412+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "类型为Uint8Array，长度为1-2048字节。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "关键资产附属的本地信息，内容由业务自定义且无完整性保护，该项信息不会进行同步。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RETURN_TYPE"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["类型为number，取值范围详见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/asset-store-api/asset-store-arkts/js-apis-asset/js-apis-asset#returntype",
              children: "ReturnType"
            }), "。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "关键资产查询返回的结果类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RETURN_LIMIT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "类型为number。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "关键资产查询返回的结果数量。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RETURN_OFFSET"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "类型为number，取值范围：1-65536。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["关键资产查询返回的结果偏移量。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 用于分批查询场景时，指定从第几个结果开始返回。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RETURN_ORDERED_BY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "类型为number，取值范围：asset.Tag.DATA_LABEL_xxx。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["关键资产查询返回的结果排序依据，仅支持按照附属信息排序。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 默认按照关键资产新增的顺序返回。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "REQUIRE_ATTR_ENCRYPTED14+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "类型为boolean。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否查询业务自定义附属信息被加密的数据。为true时表示查询业务自定义附属信息加密存储的数据，为false时表示查询业务自定义附属信息不加密存储的数据。默认值为false。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GROUP_ID18+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "类型为Uint8Array，长度为7-127字节。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "待查询的关键资产所属群组，默认查询不属于任何群组的关键资产。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束和限制",
      children: "约束和限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "批量查询的关键资产需要通过IPC通道传输给业务。由于IPC缓冲区大小的限制，建议当查询超过40条关键资产时，进行分批查询，每次查询数量不超过40条。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "代码示例",
      children: "代码示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(760352)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本模块提供了异步和同步两套接口，以下为异步接口的使用示例，同步接口详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-security-api/asset-store-api/asset-store-arkts/js-apis-asset/js-apis-asset",
        children: "@ohos.security.asset (关键资产存储服务)"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在指定群组中查询一条关键资产明文的使用示例详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/asset-store-kit/asset-arkts/asset-js-group-access-control#%E6%9F%A5%E8%AF%A2%E5%8D%95%E6%9D%A1%E7%BE%A4%E7%BB%84%E5%85%B3%E9%94%AE%E8%B5%84%E4%BA%A7%E6%98%8E%E6%96%87",
        children: "查询单条群组关键资产明文"
      }), "，在指定群组中查询一条关键资产属性的使用示例详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/asset-store-kit/asset-arkts/asset-js-group-access-control#%E6%9F%A5%E8%AF%A2%E5%8D%95%E6%9D%A1%E7%BE%A4%E7%BB%84%E5%85%B3%E9%94%AE%E8%B5%84%E4%BA%A7%E5%B1%9E%E6%80%A7",
        children: "查询单条群组关键资产属性"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在查询前，需确保已有关键资产，可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/asset-store-kit/asset-arkts/asset-js-add",
        children: "指南文档"
      }), "新增关键资产，否则将抛出NOT_FOUND错误（错误码24000002）。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "查询单条关键资产明文",
      children: "查询单条关键资产明文"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查询别名是demo_alias的关键资产明文。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "引用头文件，定义工具函数。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { asset } from '@kit.AssetStoreKit';\nimport { util } from '@kit.ArkTS';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nfunction stringToArray(str: string): Uint8Array {\n  let textEncoder = new util.TextEncoder();\n  return textEncoder.encodeInto(str);\n}\n\nfunction arrayToString(arr: Uint8Array): string {\n  let textDecoder = util.TextDecoder.create('utf-8', { ignoreBOM: true });\n  let str = textDecoder.decodeToString(arr, { stream: false });\n  return str;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "参考如下示例代码，进行业务功能开发。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let query: asset.AssetMap = new Map();\nquery.set(asset.Tag.ALIAS, stringToArray('demo_alias')); // 指定了关键资产别名，最多查询到一条满足条件的关键资产。\nquery.set(asset.Tag.RETURN_TYPE, asset.ReturnType.ALL); // 此处表示需要返回关键资产的所有信息，即属性+明文。返回明文需要解密，查询时间较长。\ntry {\n  asset.query(query).then((res: Array<asset.AssetMap>) => {\n    for (let i = 0; i < res.length; i++) {\n      // 解析secret。\n      let secret: Uint8Array = res[i].get(asset.Tag.SECRET) as Uint8Array;\n      // 将Uint8Array转为string类型。\n      let secretStr: string = arrayToString(secret);\n    }\n    // ...\n  }).catch((err: BusinessError) => {\n    console.error(`Failed to query Asset plaintext. Code is ${err.code}, message is ${err.message}`);\n    // ...\n  });\n} catch (error) {\n  let err = error as BusinessError;\n  console.error(`Failed to query Asset plaintext. Code is ${err.code}, message is ${err.message}`);\n  // ...\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "查询单条关键资产属性",
      children: "查询单条关键资产属性"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查询别名是demo_alias的关键资产属性。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "引用头文件，定义工具函数。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { asset } from '@kit.AssetStoreKit';\nimport { util } from '@kit.ArkTS';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nfunction stringToArray(str: string): Uint8Array {\n  let textEncoder = new util.TextEncoder();\n  return textEncoder.encodeInto(str);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "参考如下示例代码，进行业务功能开发。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let query: asset.AssetMap = new Map();\nquery.set(asset.Tag.ALIAS, stringToArray('demo_alias')); // 指定了关键资产别名，最多查询到一条满足条件的关键资产\nquery.set(asset.Tag.RETURN_TYPE, asset.ReturnType.ATTRIBUTES); // 此处表示仅返回关键资产属性，不包含关键资产明文\ntry {\n  asset.query(query).then((res: Array<asset.AssetMap>) => {\n    for (let i = 0; i < res.length; i++) {\n      // 解析属性。\n      let accessibility: number = res[i].get(asset.Tag.ACCESSIBILITY) as number;\n      console.info(`Succeeded in getting accessibility, which is: ${accessibility}.`);\n    }\n    // ...\n  }).catch((err: BusinessError) => {\n    console.error(`Failed to query Asset attribute. Code is ${err.code}, message is ${err.message}`);\n    // ...\n  });\n} catch (error) {\n  let err = error as BusinessError;\n  console.error(`Failed to query Asset attribute. Code is ${err.code}, message is ${err.message}`);\n  // ...\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "批量查询关键资产属性",
      children: "批量查询关键资产属性"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "批量查询标签为demo_label的关键资产属性，共返回10条符合条件的查询结果，结果按DATA_LABEL_NORMAL_1属性内容排序。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "引用头文件，定义工具函数。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { asset } from '@kit.AssetStoreKit';\nimport { util } from '@kit.ArkTS';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nfunction stringToArray(str: string): Uint8Array {\n  let textEncoder = new util.TextEncoder();\n  return textEncoder.encodeInto(str);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "参考如下示例代码，进行业务功能开发。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let query: asset.AssetMap = new Map();\nquery.set(asset.Tag.RETURN_TYPE, asset.ReturnType.ATTRIBUTES); // 此处表示仅返回关键资产属性，不包含关键资产明文。\nquery.set(asset.Tag.DATA_LABEL_NORMAL_1, stringToArray('demo_label'));\nquery.set(asset.Tag.RETURN_LIMIT, 10); // 此处表示查询10条满足条件的关键资产。\nquery.set(asset.Tag.RETURN_ORDERED_BY, asset.Tag.DATA_LABEL_NORMAL_1); // 此处查询结果以DATA_LABEL_NORMAL_1属性内容排序。\ntry {\n  asset.query(query).then((res: Array<asset.AssetMap>) => {\n    for (let i = 0; i < res.length; i++) {\n      // 解析属性。\n      let accessibility: number = res[i].get(asset.Tag.ACCESSIBILITY) as number;\n      console.info(`Succeeded in getting accessibility, which is: ${accessibility}.`);\n    }\n    // ...\n  }).catch((err: BusinessError) => {\n    console.error(`Failed to query batch Asset attributes. Code is ${err.code}, message is ${err.message}`);\n    // ...\n  });\n} catch (error) {\n  let err = error as BusinessError;\n  console.error(`Failed to query batch Asset attributes. Code is ${err.code}, message is ${err.message}`);\n  // ...\n}\n"
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
760352(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
186144(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

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