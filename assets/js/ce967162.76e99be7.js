"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["725887"], {
177937(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkdata_data_reliability_security_access_control_by_device_and_data_level_access_control_by_device_and_data_level_md_ce9_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkdata-data-reliability-security-access-control-by-device-and-data-level-access-control-by-device-and-data-level-md-ce9.json
var site_docs_arkdata_data_reliability_security_access_control_by_device_and_data_level_access_control_by_device_and_data_level_md_ce9_namespaceObject = JSON.parse('{"id":"arkdata/data-reliability-security/access-control-by-device-and-data-level/access-control-by-device-and-data-level","title":"基于设备分类和数据分级的访问控制 (ArkTS)","description":"基本概念","source":"@site/docs/arkdata/data-reliability-security/access-control-by-device-and-data-level/access-control-by-device-and-data-level.md","sourceDirName":"arkdata/data-reliability-security/access-control-by-device-and-data-level","slug":"/arkdata/data-reliability-security/access-control-by-device-and-data-level/","permalink":"/harmonyos-docs-site/arkdata/data-reliability-security/access-control-by-device-and-data-level/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"基于设备分类和数据分级的访问控制 (ArkTS)","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/access-control-by-device-and-data-level","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"数据库加密 (C/C++)","permalink":"/harmonyos-docs-site/arkdata/data-reliability-security/native-data-encryption/"},"next":{"title":"基于设备分类和数据分级的访问控制 (C/C++)","permalink":"/harmonyos-docs-site/arkdata/data-reliability-security/native-access-control-by-device-and-data-level/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkdata/data-reliability-security/access-control-by-device-and-data-level/access-control-by-device-and-data-level.md


const frontMatter = {
	title: '基于设备分类和数据分级的访问控制 (ArkTS)',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/access-control-by-device-and-data-level',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '基于设备分类和数据分级的访问控制 (ArkTS)';

const assets = {

};



const toc = [{
  "value": "基本概念",
  "id": "基本概念",
  "level": 2
}, {
  "value": "数据安全标签",
  "id": "数据安全标签",
  "level": 3
}, {
  "value": "设备安全等级",
  "id": "设备安全等级",
  "level": 3
}, {
  "value": "跨设备同步访问控制机制",
  "id": "跨设备同步访问控制机制",
  "level": 2
}, {
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "使用键值型数据库实现数据分级",
  "id": "使用键值型数据库实现数据分级",
  "level": 2
}, {
  "value": "使用关系型数据库实现数据分级",
  "id": "使用关系型数据库实现数据分级",
  "level": 2
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
    p: "p",
    pre: "pre",
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
        id: "基于设备分类和数据分级的访问控制-arkts",
        children: "基于设备分类和数据分级的访问控制 (ArkTS)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "分布式数据管理对数据实施分类分级保护，提供基于数据安全标签以及设备安全等级的访问控制机制。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "数据安全标签和设备安全等级越高，加密措施和访问控制措施越严格，数据安全性越高。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "数据安全标签",
      children: "数据安全标签"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "按照数据分类分级规范要求，可将数据分为S1、S2、S3、S4四个安全等级。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "风险等级"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "风险标准"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "定义"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "样例"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "严重"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "业界法律法规定义的特殊数据类型，涉及个人的最私密领域的信息或一旦泄露、篡改、破坏、销毁可能会给个人或组织造成重大的不利影响的数据。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "政治观点、宗教和哲学信仰、工会成员资格、基因数据、生物信息、健康和性生活状况，性取向等或设备认证鉴权、个人信用卡等财务信息等。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "高"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数据的泄露、篡改、破坏、销毁可能会给个人或组织导致严峻的不利影响。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "个人实时精确定位信息、运动轨迹等。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "中"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数据的泄露、篡改、破坏、销毁可能会给个人或组织导致严重的不利影响。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "个人的详细通信地址、姓名昵称等。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "低"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数据的泄露、篡改、破坏、销毁可能会给个人或组织导致有限的不利影响。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "性别、国籍、用户申请记录等。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "设备安全等级",
      children: "设备安全等级"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据设备安全能力，比如是否有TEE、是否有安全存储芯片等，将设备安全等级分为SL1、SL2、SL3、SL4、SL5五个等级。例如，手表通常为低安全的SL1设备，手机、平板通常为高安全的SL4设备。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在设备组网时可以通过hidumper -s 3511查看设备安全等级。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "跨设备同步访问控制机制",
      children: "跨设备同步访问控制机制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "数据跨设备同步时，基于数据安全标签和设备安全等级进行访问控制。数据库的数据安全标签不高于对端设备的设备安全等级时，数据才能同步。具体访问控制矩阵如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "设备安全级别"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可同步的数据安全标签"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SL1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SL2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S1~S2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SL3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S1~S3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SL4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S1~S4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SL5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S1~S4"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "例如，手表通常为低安全的SL1设备。若创建数据安全标签为S1的数据库，则此数据库数据可以在这些设备间同步；若创建的数据库标签为S2-S4，则不能在这些设备间同步。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "分布式数据库的访问控制机制确保了数据存储和同步时的安全能力。在创建数据库时，应当基于数据分类分级规范合理地设置数据库的安全标签，确保数据库内容和数据标签的一致性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用键值型数据库实现数据分级",
      children: "使用键值型数据库实现数据分级"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["键值型数据库，通过securityLevel参数设置数据库的安全等级，安全等级具体可见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-arkts/js-apis-distributedkvstore/js-apis-distributedkvstore#securitylevel",
        children: "SecurityLevel"
      }), "枚举。此处以创建安全等级为S3的数据库为例。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["具体接口及功能，可见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-arkts/js-apis-distributedkvstore/js-apis-distributedkvstore",
        children: "分布式键值数据库"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(572429)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在单设备使用场景下，KV数据库支持修改securityLevel开库参数进行安全等级升级。数据库安全等级升级操作需要注意以下几点："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "该操作不支持需要进行跨设备同步的数据库，不同安全等级的数据库之间不能进行数据同步，需要跨设备同步的数据库如果要升级安全等级，建议重新创建更高安全等级的数据库。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "该操作需在关闭当前数据库之后，通过修改securityLevel开库参数重新设置数据库的安全等级，再进行开库操作。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "该操作只支持升级，不支持降级。例如支持S2->S3的升级，不支持S3->S2的降级。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 导入模块\n// 在pages目录下新建KvStoreInterface.ets\nimport { distributedKVStore } from '@kit.ArkData';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport EntryAbility from '../entryability/EntryAbility';\n// Logger为hilog封装后实现的打印功能\nimport Logger from '../common/Logger';\n\nlet kvManager: distributedKVStore.KVManager | undefined = undefined;\nlet kvStore: distributedKVStore.SingleKVStore | undefined = undefined;\nlet appId: string = 'com.example.kvstoresamples';\nlet storeId: string = 'storeId';\nconst context = EntryAbility.getContext();\n\n// 下面所有接口的代码都实现在KvInterface中\nexport class KvInterface {\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "public CreateKvManager = (() => {\n  Logger.info('CreateKvManager start');\n  if (typeof (kvManager) === 'undefined') {\n    const kvManagerConfig: distributedKVStore.KVManagerConfig = {\n      bundleName: appId,\n      context: context\n    };\n    try {\n      // 创建KVManager实例\n      kvManager = distributedKVStore.createKVManager(kvManagerConfig);\n      Logger.info('Succeeded in creating KVManager.');\n    } catch (err) {\n      Logger.error(`Failed to create KVManager. Code:${err.code},message:${err.message}`);\n    }\n  } else {\n    Logger.info ('KVManager has created');\n  }\n})\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "public GetKvStore = (() => {\n  Logger.info('GetKvStore start');\n  if (kvManager === undefined) {\n    Logger.info('KvManager not initialized');\n    return;\n  }\n  try {\n    let child1 = new distributedKVStore.FieldNode('id');\n    child1.type = distributedKVStore.ValueType.INTEGER;\n    child1.nullable = false;\n    child1.default = '1';\n    let child2 = new distributedKVStore.FieldNode('name');\n    child2.type = distributedKVStore.ValueType.STRING;\n    child2.nullable = false;\n    child2.default = 'zhangsan';\n\n    let schema = new distributedKVStore.Schema();\n    schema.root.appendChild(child1);\n    schema.root.appendChild(child2);\n    schema.indexes = ['$.id', '$.name'];\n    // 0表示COMPATIBLE模式，1表示STRICT模式。\n    schema.mode = 1;\n    // 支持在检查Value时，跳过skip指定的字节数，且取值范围为[0,4M-2]。\n    schema.skip = 0;\n\n    const options: distributedKVStore.Options = {\n      createIfMissing: true,\n      // 设置数据库加密\n      encrypt: true,\n      backup: false,\n      autoSync: false,\n      // kvStoreType不填时，默认创建多设备协同数据库\n      kvStoreType: distributedKVStore.KVStoreType.SINGLE_VERSION,\n      // 多设备协同数据库：kvStoreType: distributedKVStore.KVStoreType.DEVICE_COLLABORATION,\n      schema: schema,\n      // schema未定义可以不填，定义方法请参考上方schema示例。\n      securityLevel: distributedKVStore.SecurityLevel.S3\n    };\n    kvManager.getKVStore<distributedKVStore.SingleKVStore>(storeId, options,\n      (err, store: distributedKVStore.SingleKVStore) => {\n        if (err) {\n          Logger.error(`Failed to get KVStore: Code:${err.code},message:${err.message}`);\n          return;\n        }\n        Logger.info('Succeeded in getting KVStore.');\n        kvStore = store;\n        // 请确保获取到键值数据库实例后，再进行相关数据操作\n      });\n  } catch (e) {\n    let error = e as BusinessError;\n    Logger.error(`An unexpected error occurred. Code:${error.code},message:${error.message}`);\n  }\n})\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用关系型数据库实现数据分级",
      children: "使用关系型数据库实现数据分级"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["关系型数据库，通过securityLevel参数设置数据库的安全等级，安全等级具体可见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-e/arkts-apis-data-relationalstore-e#securitylevel",
        children: "SecurityLevel"
      }), "枚举。此处以创建安全等级为S3的数据库为例。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["具体接口及功能，可见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore/arkts-apis-data-relationalstore",
        children: "@ohos.data.relationalStore (关系型数据库)"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { relationalStore } from '@kit.ArkData';\nimport { UIContext } from '@kit.ArkUI';\nimport { common } from '@kit.AbilityKit';\n\nlet store: relationalStore.RdbStore | undefined = undefined;\n\nexport async function accessControlByDeviceAndDataLevel() {\n  /* context为应用的上下文信息，由调用方自行获取，此处仅为示例。 */\n  const context = new UIContext().getHostContext() as common.UIAbilityContext;\n  try {\n    const STORE_CONFIG: relationalStore.StoreConfig = {\n      name: 'RdbTest.db',\n      // 设置数据库安全级别为S3\n      securityLevel: relationalStore.SecurityLevel.S3\n    };\n    store = await relationalStore.getRdbStore(context, STORE_CONFIG);\n    console.info('Succeeded in getting RdbStore.')\n  } catch (err) {\n    console.error(`Failed to get RdbStore. Code:${err.code}, message:${err.message}`);\n  }\n}\n"
      })
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
572429(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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