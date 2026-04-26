"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["219552"], {
579407(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_asset_store_kit_asset_arkts_asset_js_add_asset_js_add_md_aa7_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-asset-store-kit-asset-arkts-asset-js-add-asset-js-add-md-aa7.json
var site_docs_system_security_asset_store_kit_asset_arkts_asset_js_add_asset_js_add_md_aa7_namespaceObject = JSON.parse('{"id":"system-security/asset-store-kit/asset-arkts/asset-js-add/asset-js-add","title":"新增关键资产(ArkTS)","description":"接口介绍","source":"@site/docs/system-security/asset-store-kit/asset-arkts/asset-js-add/asset-js-add.md","sourceDirName":"system-security/asset-store-kit/asset-arkts/asset-js-add","slug":"/system-security/asset-store-kit/asset-arkts/asset-js-add/","permalink":"/harmonyos-docs-site/system-security/asset-store-kit/asset-arkts/asset-js-add/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"新增关键资产(ArkTS)","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/asset-js-add","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"保护需要用户认证的密码类数据","permalink":"/harmonyos-docs-site/system-security/asset-store-kit/asset-scenarios/asset-scenario2/"},"next":{"title":"删除关键资产(ArkTS)","permalink":"/harmonyos-docs-site/system-security/asset-store-kit/asset-arkts/asset-js-remove/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/asset-store-kit/asset-arkts/asset-js-add/asset-js-add.md


const frontMatter = {
	title: '新增关键资产(ArkTS)',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/asset-js-add',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '新增关键资产(ArkTS)';

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
        id: "新增关键资产arkts",
        children: "新增关键资产(ArkTS)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口介绍",
      children: "接口介绍"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者可以查阅API文档，获取关键资产新增接口的详细说明：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-security-api/asset-store-api/asset-store-arkts/js-apis-asset/js-apis-asset#assetadd",
        children: "add(attributes: AssetMap)"
      }), "、同步接口", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-security-api/asset-store-api/asset-store-arkts/js-apis-asset/js-apis-asset#assetaddsync12",
        children: "addSync(attributes: AssetMap)"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在新增关键资产时，关键资产属性的内容（AssetMap）参数如下表所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(980871)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下表中“ALIAS”和名称包含“DATA_LABEL”的关键资产属性，用于存储业务自定义信息，其内容不会被加密，请勿存放敏感个人数据。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "SECRET"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "类型为Uint8Array，长度为1-1024字节。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "关键资产明文。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ALIAS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "类型为Uint8Array，长度为1-256字节。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必选"
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
            children: "基于锁屏状态的访问控制，默认值为DEVICE_FIRST_UNLOCKED，即首次解锁后可访问。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "REQUIRE_PASSWORD_SET"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "类型为boolean。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否仅在设置了锁屏密码的情况下，可访问关键资产。为true时，表示仅在用户设置了锁屏密码的情况下，关键资产才允许被访问；为false时，表示无论用户是否设置锁屏密码，关键资产均允许被访问。默认值为false。"
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
            children: "访问关键资产所需的用户认证类型，默认值为NONE，即访问关键资产前无需用户认证。"
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
            children: "关键资产支持的同步类型，默认值为NEVER，即不允许同步该关键资产。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IS_PERSISTENT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "类型为boolean。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["在应用卸载时是否需要保留关键资产。为true时表示应用卸载后，应用存储的关键资产将被保留；为false时表示应用卸载后，应用存储的关键资产将被删除。默认值为false。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "注意："
              })
            }), " 设置此属性时，需", (0,jsx_runtime.jsx)(_components.a, {
              href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions",
              children: "申请权限"
            }), "ohos.permission.STORE_PERSISTENT_DATA。"]
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
            children: "CONFLICT_RESOLUTION"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["类型为number，取值范围详见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/asset-store-api/asset-store-arkts/js-apis-asset/js-apis-asset#conflictresolution",
              children: "ConflictResolution"
            }), "。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "新增关键资产时的冲突（如：别名相同）处理策略，默认值为THROW_ERROR，即抛出异常，由业务进行后续处理。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "REQUIRE_ATTR_ENCRYPTED14+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "类型为boolean。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否加密业务自定义附属信息。为true时表示业务自定义附属信息加密存储，为false时表示业务自定义附属信息不加密存储。默认值为false。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GROUP_ID18+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "类型为Uint8Array，长度为7-127字节。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "待新增的关键资产所属群组，默认新增不属于任何群组的关键资产。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "WRAP_TYPE18+"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["类型为number，取值范围详见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/asset-store-api/asset-store-arkts/js-apis-asset/js-apis-asset#wraptype18",
              children: "WrapType"
            }), "。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "关键资产支持的加密导入导出类型，默认值为NEVER，即不允许加密导入导出关键资产。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束和限制",
      children: "约束和限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "基于别名的访问"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "关键资产以密文的形式存储在ASSET数据库中，以业务身份 + 别名作为唯一索引。故业务需要保证每条关键资产的别名唯一。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "业务自定义数据存储"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ASSET为业务预留了12个关键资产自定义属性，名称以\"DATA_LABEL\"开头。对于超过12个自定义属性的情况，业务可以将多段数据按照一定的格式（如JSON）拼接到同一个ASSET属性中。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ASSET对部分属性会进行完整性保护，这部分属性名称以\"DATA_LABEL_CRITICAL\"开头，写入后不支持更新。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "代码示例",
      children: "代码示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(546198)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本模块提供了异步和同步两套接口，以下为异步接口的使用示例，同步接口详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-security-api/asset-store-api/asset-store-arkts/js-apis-asset/js-apis-asset",
        children: "@ohos.security.asset (关键资产存储服务)"
      }), "API文档。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在指定群组中新增一条关键资产的使用示例详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/asset-store-kit/asset-arkts/asset-js-group-access-control#%E6%96%B0%E5%A2%9E%E7%BE%A4%E7%BB%84%E5%85%B3%E9%94%AE%E8%B5%84%E4%BA%A7",
        children: "新增群组关键资产"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "新增一条密码是demo_pwd，别名是demo_alias，附属信息是demo_label的关键资产，该关键资产在用户首次解锁设备后可被访问。"
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
            children: "let attr: asset.AssetMap = new Map();\nattr.set(asset.Tag.SECRET, stringToArray('demo_pwd'));\nattr.set(asset.Tag.ALIAS, stringToArray('demo_alias'));\nattr.set(asset.Tag.ACCESSIBILITY, asset.Accessibility.DEVICE_FIRST_UNLOCKED);\nattr.set(asset.Tag.DATA_LABEL_NORMAL_1, stringToArray('demo_label'));\ntry {\n  asset.add(attr).then(() => {\n    console.info(`Succeeded in adding Asset.`);\n    // ...\n  }).catch((err: BusinessError) => {\n    console.error(`Failed to add Asset. Code is ${err.code}, message is ${err.message}`);\n    // ...\n  })\n} catch (error) {\n  let err = error as BusinessError;\n  console.error(`Failed to add Asset. Code is ${err.code}, message is ${err.message}`);\n  // ...\n}\n"
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
546198(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
980871(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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