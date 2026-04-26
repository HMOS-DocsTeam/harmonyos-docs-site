"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["699429"], {
455437(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkdata_api_arkdata_arkts_js_apis_data_relationalstore_arkts_apis_data_relationalstore_e_arkts_apis_data_relationalstore_e_md_66d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkdata-api-arkdata-arkts-js-apis-data-relationalstore-arkts-apis-data-relationalstore-e-arkts-apis-data-relationalstore-e-md-66d.json
var site_docs_ref_arkdata_api_arkdata_arkts_js_apis_data_relationalstore_arkts_apis_data_relationalstore_e_arkts_apis_data_relationalstore_e_md_66d_namespaceObject = JSON.parse('{"id":"arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-e/arkts-apis-data-relationalstore-e","title":"Enums","description":"本模块首批接口从API version 9开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。","source":"@site/docs-ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-e/arkts-apis-data-relationalstore-e.md","sourceDirName":"arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-e","slug":"/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-e/arkts-apis-data-relationalstore-e","permalink":"/harmonyos-docs-site/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-e/arkts-apis-data-relationalstore-e","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":9,"frontMatter":{"title":"Enums","sidebar_position":9,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-data-relationalstore-e","kit":"应用框架","last_updated":"2026-04-22","slug":"arkts-apis-data-relationalstore-e"},"sidebar":"ref","previous":{"title":"Class (RdbPredicates)","permalink":"/harmonyos-docs-site/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-rdbpredicates/arkts-apis-data-relationalstore-rdbpredicates"},"next":{"title":"Types","permalink":"/harmonyos-docs-site/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-t/arkts-apis-data-relationalstore-t"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-e/arkts-apis-data-relationalstore-e.md


const frontMatter = {
	title: 'Enums',
	sidebar_position: 9,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-data-relationalstore-e',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'arkts-apis-data-relationalstore-e'
};
const contentTitle = 'Enums';

const assets = {

};



const toc = [{
  "value": "SecurityLevel",
  "id": "securitylevel",
  "level": 2
}, {
  "value": "EncryptionAlgo14+",
  "id": "encryptionalgo14",
  "level": 2
}, {
  "value": "HmacAlgo14+",
  "id": "hmacalgo14",
  "level": 2
}, {
  "value": "KdfAlgo14+",
  "id": "kdfalgo14",
  "level": 2
}, {
  "value": "Tokenizer17+",
  "id": "tokenizer17",
  "level": 2
}, {
  "value": "AssetStatus10+",
  "id": "assetstatus10",
  "level": 2
}, {
  "value": "SyncMode",
  "id": "syncmode",
  "level": 2
}, {
  "value": "Origin11+",
  "id": "origin11",
  "level": 2
}, {
  "value": "Field11+",
  "id": "field11",
  "level": 2
}, {
  "value": "SubscribeType",
  "id": "subscribetype",
  "level": 2
}, {
  "value": "RebuildType12+",
  "id": "rebuildtype12",
  "level": 2
}, {
  "value": "ChangeType10+",
  "id": "changetype10",
  "level": 2
}, {
  "value": "DistributedType10+",
  "id": "distributedtype10",
  "level": 2
}, {
  "value": "ConflictResolution10+",
  "id": "conflictresolution10",
  "level": 2
}, {
  "value": "Progress10+",
  "id": "progress10",
  "level": 2
}, {
  "value": "ProgressCode10+",
  "id": "progresscode10",
  "level": 2
}, {
  "value": "TransactionType14+",
  "id": "transactiontype14",
  "level": 2
}, {
  "value": "ColumnType18+",
  "id": "columntype18",
  "level": 2
}, {
  "value": "DistributedTableType23+",
  "id": "distributedtabletype23",
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
        id: "enums",
        children: "Enums"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(100235)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本模块首批接口从API version 9开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "securitylevel",
      children: "SecurityLevel"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "数据库的安全级别枚举。请使用枚举名称而非枚举值。数据库的安全等级仅支持由低向高设置，不支持由高向低设置。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(945032)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["若需要进行同步操作，数据库安全等级应不高于对端设备安全等级，具体可见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkdata/distributed-data-sync/sync-app-data-across-devices-overview#%E8%B7%A8%E8%AE%BE%E5%A4%87%E5%90%8C%E6%AD%A5%E8%AE%BF%E9%97%AE%E6%8E%A7%E5%88%B6%E6%9C%BA%E5%88%B6",
        children: "跨设备同步访问控制机制"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.DistributedDataManager.RelationalStore.Core"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "S1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示数据库的安全级别为低级别，当数据泄露时会产生较低影响。例如，包含壁纸等系统数据的数据库。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "S2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示数据库的安全级别为中级别，当数据泄露时会产生较大影响。例如，包含录音、视频等用户生成数据或通话记录等信息的数据库。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "S3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示数据库的安全级别为高级别，当数据泄露时会产生重大影响。例如，包含用户运动、健康、位置等信息的数据库。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "S4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示数据库的安全级别为关键级别，当数据泄露时会产生严重影响。例如，包含认证凭据、财务数据等信息的数据库。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "encryptionalgo14",
      children: "EncryptionAlgo14+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "数据库的加密方式枚举。请使用枚举名称而非枚举值。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.DistributedDataManager.RelationalStore.Core"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AES_256_GCM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数据库使用AES_256_GCM加密。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AES_256_CBC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数据库使用AES_256_CBC加密。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PLAIN_TEXT22+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数据库不进行加密。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hmacalgo14",
      children: "HmacAlgo14+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "数据库的HMAC算法枚举。请使用枚举名称而非枚举值。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.DistributedDataManager.RelationalStore.Core"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHA1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HMAC_SHA1算法。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHA256"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HMAC_SHA256算法。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHA512"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HMAC_SHA512算法。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "kdfalgo14",
      children: "KdfAlgo14+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "数据库的PBKDF2算法枚举。请使用枚举名称而非枚举值。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.DistributedDataManager.RelationalStore.Core"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KDF_SHA1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PBKDF2_HMAC_SHA1算法。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KDF_SHA256"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PBKDF2_HMAC_SHA256算法。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KDF_SHA512"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PBKDF2_HMAC_SHA512算法。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "tokenizer17",
      children: "Tokenizer17+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "描述fts（全文搜索）场景下使用的分词器枚举。请使用枚举名称而非枚举值。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.DistributedDataManager.RelationalStore.Core"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NONE_TOKENIZER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不使用分词器。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ICU_TOKENIZER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示使用icu分词器，支持中文以及多国语言。指定icu分词器时，可指定使用哪种语言，例如zh_CN表示中文，tr_TR表示土耳其语等。详细支持的语言种类，请查阅", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://gitcode.com/openharmony/third_party_icu/blob/master/icu4c/source/data/lang/zh.txt",
              children: "ICU分词器"
            }), "。详细的语言缩写，请查阅该目录（", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://gitcode.com/openharmony/third_party_icu/tree/master/icu4c/source/data/locales",
              children: "ICU支持的语言缩写"
            }), "）下的文件名。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CUSTOM_TOKENIZER18+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示使用自研分词器，可支持中文（简体、繁体）、英文、阿拉伯数字。CUSTOM_TOKENIZER相比ICU_TOKENIZER在分词准确率、常驻内存占用上更有优势。自研分词器支持默认分词模式和短词分词模式（short_words）两种，使用参数cut_mode可指定模式，不指定模式时使用默认模式。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在使用不同的分词器时，使用的创表语句会有所区别。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["示例代码中this.context定义见Stage模型的应用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context",
        children: "Context"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用ICU_TOKENIZER分词器时，创建表的示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { relationalStore } from '@kit.ArkData'; // 导入模块\nimport { UIAbility } from '@kit.AbilityKit';\nimport { window } from '@kit.ArkUI';\n\n// 此处示例在Stage模式、Ability中实现，使用者也可以在其他合理场景中使用\nclass EntryAbility extends UIAbility {\n  async onWindowStageCreate(windowStage: window.WindowStage) {\n    let store: relationalStore.RdbStore | undefined = undefined;\n    const STORE_CONFIG: relationalStore.StoreConfig = {\n      name: \"MyStore.db\",\n      securityLevel: relationalStore.SecurityLevel.S3,\n      tokenizer: relationalStore.Tokenizer.ICU_TOKENIZER\n    };\n    store = await relationalStore.getRdbStore(this.context, STORE_CONFIG);\n\n    const SQL_CREATE_TABLE = \"CREATE VIRTUAL TABLE example USING fts4(name, content, tokenize=icu zh_CN)\";\n    if (store != undefined) {\n      (store as relationalStore.RdbStore).executeSql(SQL_CREATE_TABLE, (err) => {\n        if (err) {\n          console.error(`ExecuteSql failed, code is ${err.code},message is ${err.message}`);\n          return;\n        }\n        console.info('create virtual table done.');\n      });\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用CUSTOM_TOKENIZER分词器时，创建表的示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { relationalStore } from '@kit.ArkData'; // 导入模块\nimport { UIAbility } from '@kit.AbilityKit';\nimport { window } from '@kit.ArkUI';\n\n// 此处示例在Stage模式、Ability中实现，使用者也可以在其他合理场景中使用\nclass EntryAbility extends UIAbility {\n  async onWindowStageCreate(windowStage: window.WindowStage) {\n    let store: relationalStore.RdbStore | undefined = undefined;\n    const STORE_CONFIG: relationalStore.StoreConfig = {\n      name: \"MyStore.db\",\n      securityLevel: relationalStore.SecurityLevel.S3,\n      tokenizer: relationalStore.Tokenizer.CUSTOM_TOKENIZER\n    };\n    store = await relationalStore.getRdbStore(this.context, STORE_CONFIG);\n\n    const SQL_CREATE_TABLE = \"CREATE VIRTUAL TABLE example USING fts5(name, content, tokenize='customtokenizer')\";\n    if (store != undefined) {\n      (store as relationalStore.RdbStore).executeSql(SQL_CREATE_TABLE, (err) => {\n        if (err) {\n          console.error(`ExecuteSql failed, code is ${err.code},message is ${err.message}`);\n          return;\n        }\n        console.info('create virtual table done.');\n      });\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用CUSTOM_TOKENIZER分词器，并指定分词模式时，创建表的示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { relationalStore } from '@kit.ArkData'; // 导入模块\nimport { UIAbility } from '@kit.AbilityKit';\nimport { window } from '@kit.ArkUI';\n\nexport default class EntryAbility extends UIAbility {\n  async onWindowStageCreate(windowStage: window.WindowStage) {\n    console.info('custom tokenizer example: window stage create begin.');\n    let store: relationalStore.RdbStore | undefined = undefined;\n    const storeConfig: relationalStore.StoreConfig = {\n      name: \"MyStore.db\",\n      securityLevel: relationalStore.SecurityLevel.S3\n    };\n    let customType = relationalStore.Tokenizer.CUSTOM_TOKENIZER;\n    let customTypeSupported = relationalStore.isTokenizerSupported(customType);\n    if (customTypeSupported) {\n      storeConfig.tokenizer = customType;\n    } else {\n      console.info('custom tokenizer example: not support custom tokenizer.');\n      return;\n    }\n    store = await relationalStore.getRdbStore(this.context, storeConfig);\n\n    const sqlCreateTable =\n      \"CREATE VIRTUAL TABLE example USING fts5(name, content, tokenize='customtokenizer cut_mode short_words')\";\n    if (store != undefined) {\n      (store as relationalStore.RdbStore).executeSql(sqlCreateTable, (err) => {\n        if (err) {\n          console.error(`custom tokenizer example: ExecuteSql failed, code is ${err.code},message is ${err.message}`);\n          return;\n        }\n        console.info('custom tokenizer example: create virtual table done.');\n      });\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "assetstatus10",
      children: "AssetStatus10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "描述资产附件的状态枚举。请使用枚举名称而非枚举值。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.DistributedDataManager.RelationalStore.Core"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ASSET_NORMAL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示资产状态正常。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ASSET_INSERT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示资产需要插入到云端。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ASSET_UPDATE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示资产需要更新到云端。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ASSET_DELETE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示资产需要在云端删除。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ASSET_ABNORMAL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示资产状态异常。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ASSET_DOWNLOADING"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示资产正在下载到本地设备。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "syncmode",
      children: "SyncMode"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "指数据库同步模式。请使用枚举名称而非枚举值。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SYNC_MODE_PUSH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示数据从本地设备推送到远程设备。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.DistributedDataManager.RelationalStore.Core"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SYNC_MODE_PULL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示数据从远程设备拉至本地设备。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.DistributedDataManager.RelationalStore.Core"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SYNC_MODE_TIME_FIRST10+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示数据从修改时间较近的一端同步到修改时间较远的一端。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.DistributedDataManager.CloudSync.Client"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SYNC_MODE_NATIVE_FIRST10+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示数据从本地设备同步到云端。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.DistributedDataManager.CloudSync.Client"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SYNC_MODE_CLOUD_FIRST10+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示数据从云端同步到本地设备。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.DistributedDataManager.CloudSync.Client"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "origin11",
      children: "Origin11+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "表示数据来源。请使用枚举名称而非枚举值。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.DistributedDataManager.CloudSync.Client"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LOCAL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示本地数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CLOUD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示云端同步的数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "REMOTE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示端端同步的数据。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "field11",
      children: "Field11+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于谓词查询条件的特殊字段。请使用枚举名称而非枚举值。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.DistributedDataManager.CloudSync.Client"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CURSOR_FIELD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'#_cursor'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于cursor查找的字段名。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ORIGIN_FIELD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'#_origin'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于cursor查找时指定数据来源的字段名。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DELETED_FLAG_FIELD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'#_deleted_flag'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于cursor查找的结果集返回时填充的字段，表示云端删除的数据同步到本地后数据是否清理。  返回的结果集中，该字段对应的value为false表示数据未清理，true表示数据已清理。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DATA_STATUS_FIELD12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'#_data_status'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于cursor查找的结果集返回时填充的字段，返回的结果集中，该字段对应的0表示正常数据，1表示退出账号保留数据，2表示云侧同步删除，3表示退出账户删除数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OWNER_FIELD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'#_cloud_owner'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于共享表中查找owner时，返回的结果集中填充的字段，表示当前共享记录的共享发起者。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PRIVILEGE_FIELD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'#_cloud_privilege'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于共享表中查找共享数据权限时，返回的结果集中填充的字段，表示当前共享记录的允许的操作权限。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHARING_RESOURCE_FIELD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'#_sharing_resource_field'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于数据共享查找共享数据的共享资源时，返回的结果集中填充的字段，表示共享数据的共享资源标识。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "subscribetype",
      children: "SubscribeType"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "描述订阅类型。请使用枚举名称而非枚举值。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SUBSCRIBE_TYPE_REMOTE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["订阅远程数据更改。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.DistributedDataManager.RelationalStore.Core"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SUBSCRIBE_TYPE_CLOUD10+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["订阅云端数据更改。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.DistributedDataManager.CloudSync.Client"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SUBSCRIBE_TYPE_CLOUD_DETAILS10+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["订阅云端数据更改详情。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.DistributedDataManager.CloudSync.Client"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SUBSCRIBE_TYPE_LOCAL_DETAILS12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["订阅本地数据更改详情。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.DistributedDataManager.RelationalStore.Core"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "rebuildtype12",
      children: "RebuildType12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "描述数据库重建类型的枚举。请使用枚举名称而非枚举值。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.DistributedDataManager.RelationalStore.Core"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NONE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示数据库未进行重建。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "REBUILT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示数据库进行了重建并且生成了空数据库，需要应用重新建表和恢复数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "REPAIRED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示数据库进行了修复，恢复了未损坏的数据，当前只有向量数据库（在", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-i/arkts-apis-data-relationalstore-i#storeconfig",
              children: "StoreConfig"
            }), "中配置vector为true）具备该能力。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "changetype10",
      children: "ChangeType10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "描述数据变更类型的枚举。请使用枚举名称而非枚举值。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.DistributedDataManager.RelationalStore.Core"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DATA_CHANGE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示是数据发生变更。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ASSET_CHANGE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示是资产附件发生了变更。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "distributedtype10",
      children: "DistributedType10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "描述表的分布式类型的枚举。请使用枚举名称而非枚举值。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DISTRIBUTED_DEVICE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示在不同设备之间分布式的数据库表。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.DistributedDataManager.RelationalStore.Core"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DISTRIBUTED_CLOUD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示在设备和云端之间分布式的数据库表。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统能力："
              })
            }), " SystemCapability.DistributedDataManager.CloudSync.Client"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "conflictresolution10",
      children: "ConflictResolution10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "插入和修改接口的冲突解决模式。请使用枚举名称而非枚举值。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.DistributedDataManager.RelationalStore.Core"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ON_CONFLICT_NONE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示当冲突发生时，不做任何处理。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ON_CONFLICT_ROLLBACK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示当冲突发生时，中止SQL语句并回滚当前事务。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ON_CONFLICT_ABORT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示当冲突发生时，中止当前SQL语句，并撤销当前 SQL 语句所做的任何更改，但是由同一事务中先前的 SQL 语句引起的更改被保留并且事务保持活动状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ON_CONFLICT_FAIL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示当冲突发生时，中止当前 SQL 语句。但它不会撤销失败的 SQL 语句的先前更改，也不会结束事务。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ON_CONFLICT_IGNORE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示当冲突发生时，跳过包含违反约束的行并继续处理 SQL 语句的后续行。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ON_CONFLICT_REPLACE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示当冲突发生时，在插入或更新当前行之前删除导致约束违例的预先存在的行，并且命令会继续正常执行。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "progress10",
      children: "Progress10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "描述端云同步过程的枚举。请使用枚举名称而非枚举值。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.DistributedDataManager.RelationalStore.Core"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SYNC_BEGIN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示端云同步过程开始。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SYNC_IN_PROGRESS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示正在端云同步过程中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SYNC_FINISH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示端云同步过程已完成。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "progresscode10",
      children: "ProgressCode10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "表示端云同步过程的状态。请使用枚举名称而非枚举值。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.DistributedDataManager.RelationalStore.Core"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SUCCESS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示端云同步过程成功。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UNKNOWN_ERROR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示端云同步过程遇到未知错误。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NETWORK_ERROR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示端云同步过程遇到网络错误。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CLOUD_DISABLED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示云端不可用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LOCKED_BY_OTHERS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示有其他设备正在端云同步，本设备无法进行端云同步。  请确保无其他设备占用云端资源后，再使用本设备进行端云同步任务。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RECORD_LIMIT_EXCEEDED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示本次端云同步需要同步的条目或大小超出最大值。由云端配置最大值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NO_SPACE_FOR_ASSET"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示云空间剩余空间小于待同步的资产大小。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BLOCKED_BY_NETWORK_STRATEGY12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示端云同步被网络策略限制。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "transactiontype14",
      children: "TransactionType14+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "描述创建事务对象的枚举。请使用枚举名称而非枚举值。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.DistributedDataManager.RelationalStore.Core"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DEFERRED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示创建一个DEFERRED类型的事务对象，该类型的事务对象在创建时只会关闭自动提交而不会真正开始事务，只有在首次读或写操作时会真正开始一个读或写事务。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMMEDIATE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示创建一个IMMEDIATE类型的事务对象，该类型的事务对象在创建时会真正开始一个写事务；如果有别的写事务未提交，则会创建失败，返回错误码14800024。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EXCLUSIVE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示创建一个EXCLUSIVE类型的事务对象，该类型的事务在WAL模式下和IMMEDIATE相同，但在其他日志模式下能够防止事务期间有其他连接读取数据库。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "columntype18",
      children: "ColumnType18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "描述数据库列存储类型的枚举。请使用枚举名称而非枚举值。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.DistributedDataManager.RelationalStore.Core"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NULL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示列数据类型为NULL。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "INTEGER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示列数据类型为64位整数。可用于保存8位（包括布尔值）、16位、32位、64位整数。如果64位整数大于2^53或小于-2^53，需使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-resultset/arkts-apis-data-relationalstore-resultset#getstring",
              children: "getString"
            }), "将64位整数转换为字符串。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "REAL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示列类型为浮点数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TEXT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示列类型为字符串。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BLOB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示列类型为Uint8Array。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ASSET"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示列类型为", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-i/arkts-apis-data-relationalstore-i#asset10",
              children: "Asset"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ASSETS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示列类型为", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-t/arkts-apis-data-relationalstore-t#assets10",
              children: "Assets"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FLOAT_VECTOR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示列类型为Float32Array。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UNLIMITED_INT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示列类型为bigint。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "distributedtabletype23",
      children: "DistributedTableType23+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "分布式表类型的枚举。请使用枚举名称而非枚举值。此配置项为数据库级配置，如果数据库中有多张分布式表，则所有表必须使用相同的分布式表类型，且不支持切换升级。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.DistributedDataManager.RelationalStore.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下可用。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DEVICE_COLLABORATION"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "多设备协同表，各设备的数据将被隔离存储在独立的分布式表中，而非写入本地表，分布式表名为在原来表名前拼接对端设备的DeviceID标识符。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SINGLE_VERSION"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "单版本表，数据通过分布式数据管理框架直接写入对端设备的本地表中。"
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
100235(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
945032(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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