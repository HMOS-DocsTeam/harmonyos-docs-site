"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["236139"], {
712781(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ability_kit_fa_model_development_fa_model_application_components_dataability_access_dataability_access_dataability_md_407_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ability-kit-fa-model-development-fa-model-application-components-dataability-access-dataability-access-dataability-md-407.json
var site_docs_ability_kit_fa_model_development_fa_model_application_components_dataability_access_dataability_access_dataability_md_407_namespaceObject = JSON.parse('{"id":"ability-kit/fa-model-development/fa-model-application-components/dataability/access-dataability/access-dataability","title":"访问DataAbility","description":"访问DataAbility需导入基础依赖包，以及获取与DataAbility子模块通信的URI字符串。","source":"@site/docs/ability-kit/fa-model-development/fa-model-application-components/dataability/access-dataability/access-dataability.md","sourceDirName":"ability-kit/fa-model-development/fa-model-application-components/dataability/access-dataability","slug":"/ability-kit/fa-model-development/fa-model-application-components/dataability/access-dataability/","permalink":"/harmonyos-docs-site/ability-kit/fa-model-development/fa-model-application-components/dataability/access-dataability/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"访问DataAbility","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/access-dataability","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"启动DataAbility","permalink":"/harmonyos-docs-site/ability-kit/fa-model-development/fa-model-application-components/dataability/start-dataability/"},"next":{"title":"DataAbility权限控制","permalink":"/harmonyos-docs-site/ability-kit/fa-model-development/fa-model-application-components/dataability/dataability-permission-control/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ability-kit/fa-model-development/fa-model-application-components/dataability/access-dataability/access-dataability.md


const frontMatter = {
	title: '访问DataAbility',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/access-dataability',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '访问DataAbility';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    header: "header",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "访问dataability",
        children: "访问DataAbility"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "访问DataAbility需导入基础依赖包，以及获取与DataAbility子模块通信的URI字符串。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "其中，基础依赖包包括："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "@ohos.ability.featureAbility"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "@ohos.data.dataAbility"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "访问DataAbility的示例代码如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建工具接口类对象。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import featureAbility from '@ohos.ability.featureAbility';\nimport ohos_data_ability from '@ohos.data.dataAbility';\nimport ability from '@ohos.ability.ability';\n// 作为参数传递的URI,与config中定义的URI的区别是多了一个\"/\",有三个\"/\"\nlet uri: string = 'dataability:///com.samples.famodelabilitydevelop.DataAbility';\nlet DAHelper: ability.DataAbilityHelper = featureAbility.acquireDataAbilityHelper(uri);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "构建数据库相关的RDB数据。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import ohos_data_ability from '@ohos.data.dataAbility';\nimport rdb from '@ohos.data.rdb';\nlet valuesBucket_insert: rdb.ValuesBucket = { name: 'Rose', introduction: 'insert' };\nlet valuesBucket_update: rdb.ValuesBucket = { name: 'Rose', introduction: 'update' };\nlet crowd = new Array({ name: 'Rose', introduction: 'batchInsert_one' } as rdb.ValuesBucket,\n  { name: 'Rose', introduction: 'batchInsert_two' } as rdb.ValuesBucket);\nlet columnArray = new Array('id', 'name', 'introduction');\nlet predicates = new ohos_data_ability.DataAbilityPredicates();\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["注：关于DataAbilityPredicates的详细内容，请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-ability/js-apis-data-ability",
            children: "DataAbility谓词"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用insert方法向指定的DataAbility子模块插入数据。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import ability from '@ohos.ability.ability';\nimport featureAbility from '@ohos.ability.featureAbility';\nimport { BusinessError } from '@ohos.base';\nimport ohos_data_ability from '@ohos.data.dataAbility';\nimport rdb from '@ohos.data.rdb';\nimport promptAction from '@ohos.promptAction';\nimport hilog from '@ohos.hilog';\n\nconst TAG: string = 'PageDataAbility';\n\n// callback方式调用:\nconst domain: number = 0xFF00;\n\n@Entry\n@Component\nstruct PageDataAbility {\n  private valuesBucket_insert: rdb.ValuesBucket = { name: 'Rose', introduction: 'insert' };\n  private uri = 'dataability:///com.samples.famodelabilitydevelop.DataAbility';\n  private DAHelper = featureAbility.acquireDataAbilityHelper(this.uri);\n\n  build() {\n    Column() {\n      // ...\n      List({ initialIndex: 0 }) {\n        // ...\n        ListItemGroup() {\n          ListItem() {\n            Flex({ justifyContent: FlexAlign.SpaceBetween, alignContent: FlexAlign.Center }) {\n              // ...\n            }\n            .onClick(() => {\n              // callback方式调用:\n              this.DAHelper.insert(this.uri, this.valuesBucket_insert, (error: BusinessError, data: number) => {\n                if (error && error.code !== 0) {\n                  promptAction.showToast({\n                    message: 'insert_failed_toast'\n                  });\n                } else {\n                  promptAction.showToast({\n                    message: 'insert_success_toast'\n                  });\n                }\n                hilog.info(domain, TAG, 'DAHelper insert result: ' + data + ', error: ' + JSON.stringify(error));\n              }\n              );\n            })\n          }\n          // ...\n        }\n        // ...\n      }\n      // ...\n    }\n    // ...\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import ability from '@ohos.ability.ability';\nimport featureAbility from '@ohos.ability.featureAbility';\nimport { BusinessError } from '@ohos.base';\nimport ohos_data_ability from '@ohos.data.dataAbility';\nimport rdb from '@ohos.data.rdb';\nimport promptAction from '@ohos.promptAction';\nimport hilog from '@ohos.hilog';\n\nconst TAG: string = 'PageDataAbility';\nconst domain: number = 0xFF00;\n\n@Entry\n@Component\nstruct PageDataAbility {\n  private valuesBucket_insert: rdb.ValuesBucket = { name: 'Rose', introduction: 'insert' };\n  private uri = 'dataability:///com.samples.famodelabilitydevelop.DataAbility';\n  private DAHelper = featureAbility.acquireDataAbilityHelper(this.uri);\n\n  build() {\n    Column() {\n      // ...\n      List({ initialIndex: 0 }) {\n        // ...\n        ListItemGroup() {\n          ListItem() {\n            Flex({ justifyContent: FlexAlign.SpaceBetween, alignContent: FlexAlign.Center }) {\n              // ...\n            }\n            .onClick(() => {\n              // promise方式调用(await需要在async方法中使用):\n              this.DAHelper.insert(this.uri, this.valuesBucket_insert).then((datainsert) => {\n                promptAction.showToast({\n                  message: 'insert_success_toast'\n                });\n                hilog.info(domain, TAG, 'DAHelper insert result: ' + datainsert);\n              }).catch((error: BusinessError) => {\n                promptAction.showToast({\n                  message: 'insert_failed_toast'\n                });\n                hilog.error(domain, TAG, `DAHelper insert failed. Cause: ${error.message}`);\n              });\n            })\n          }\n          // ...\n        }\n        // ...\n      }\n      // ...\n    }\n    // ...\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用delete方法删除DataAbility子模块中指定的数据。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import ability from '@ohos.ability.ability';\nimport featureAbility from '@ohos.ability.featureAbility';\nimport { BusinessError } from '@ohos.base';\nimport ohos_data_ability from '@ohos.data.dataAbility';\nimport rdb from '@ohos.data.rdb';\nimport promptAction from '@ohos.promptAction';\nimport hilog from '@ohos.hilog';\n\nconst TAG: string = 'PageDataAbility';\nconst domain: number = 0xFF00;\n\n@Entry\n@Component\nstruct PageDataAbility {\n  private predicates = new ohos_data_ability.DataAbilityPredicates();\n  private uri = 'dataability:///com.samples.famodelabilitydevelop.DataAbility';\n  private DAHelper = featureAbility.acquireDataAbilityHelper(this.uri);\n\n  build() {\n    Column() {\n      // ...\n      List({ initialIndex: 0 }) {\n        // ...\n        ListItemGroup() {\n          ListItem() {\n            Flex({ justifyContent: FlexAlign.SpaceBetween, alignContent: FlexAlign.Center }) {\n              // ...\n            }\n            .onClick(() => {\n              // callback方式调用:\n              this.DAHelper.delete(this.uri, this.predicates, (error, data) => {\n                if (error && error.code !== 0) {\n                  promptAction.showToast({\n                    message: 'delete_failed_toast'\n                  });\n                } else {\n                  promptAction.showToast({\n                    message: 'delete_success_toast'\n                  });\n                }\n                hilog.info(domain, TAG, 'DAHelper delete result: ' + data + ', error: ' + JSON.stringify(error));\n              }\n              );\n            })\n          }\n          // ...\n        }\n        // ...\n      }\n      // ...\n    }\n    // ...\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import ability from '@ohos.ability.ability';\nimport featureAbility from '@ohos.ability.featureAbility';\nimport { BusinessError } from '@ohos.base';\nimport ohos_data_ability from '@ohos.data.dataAbility';\nimport rdb from '@ohos.data.rdb';\nimport promptAction from '@ohos.promptAction';\nimport hilog from '@ohos.hilog';\n\nconst TAG: string = 'PageDataAbility';\nconst domain: number = 0xFF00;\n\n@Entry\n@Component\nstruct PageDataAbility {\n  private predicates = new ohos_data_ability.DataAbilityPredicates();\n  private uri = 'dataability:///com.samples.famodelabilitydevelop.DataAbility';\n  private DAHelper = featureAbility.acquireDataAbilityHelper(this.uri);\n\n  build() {\n    Column() {\n      // ...\n      List({ initialIndex: 0 }) {\n        // ...\n        ListItemGroup() {\n          ListItem() {\n            Flex({ justifyContent: FlexAlign.SpaceBetween, alignContent: FlexAlign.Center }) {\n              // ...\n            }\n            .onClick(() => {\n              // promise方式调用(await需要在async方法中使用):\n              this.DAHelper.delete(this.uri, this.predicates).then((datadelete) => {\n                promptAction.showToast({\n                  message: 'delete_success_toast'\n                });\n                hilog.info(domain, TAG, 'DAHelper delete result: ' + datadelete);\n              }).catch((error: BusinessError) => {\n                promptAction.showToast({\n                  message: 'delete_failed_toast'\n                });\n                hilog.error(domain, TAG, `DAHelper delete failed. Cause: ${error.message}`);\n              });\n            })\n          }\n          // ...\n        }\n        // ...\n      }\n      // ...\n    }\n    // ...\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用update方法更新指定DataAbility子模块中的数据。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import ability from '@ohos.ability.ability';\nimport featureAbility from '@ohos.ability.featureAbility';\nimport { BusinessError } from '@ohos.base';\nimport ohos_data_ability from '@ohos.data.dataAbility';\nimport rdb from '@ohos.data.rdb';\nimport promptAction from '@ohos.promptAction';\nimport hilog from '@ohos.hilog';\n\nconst TAG: string = 'PageDataAbility';\nconst domain: number = 0xFF00;\n\n@Entry\n@Component\nstruct PageDataAbility {\n  private valuesBucket_update: rdb.ValuesBucket = { name: 'Rose', introduction: 'update' };\n  private predicates = new ohos_data_ability.DataAbilityPredicates();\n  private uri = 'dataability:///com.samples.famodelabilitydevelop.DataAbility';\n  private DAHelper = featureAbility.acquireDataAbilityHelper(this.uri);\n\n  build() {\n    Column() {\n      // ...\n      List({ initialIndex: 0 }) {\n        // ...\n        ListItemGroup() {\n          ListItem() {\n            Flex({ justifyContent: FlexAlign.SpaceBetween, alignContent: FlexAlign.Center }) {\n              // ...\n            }\n            .onClick(() => {\n              // callback方式调用:\n              this.predicates.equalTo('name', 'Rose');\n              this.DAHelper.update(this.uri, this.valuesBucket_update, this.predicates, (error, data) => {\n                if (error && error.code !== 0) {\n                  promptAction.showToast({\n                    message: 'update_failed_toast'\n                  });\n                } else {\n                  promptAction.showToast({\n                    message: 'update_success_toast'\n                  });\n                }\n                hilog.info(domain, TAG, 'DAHelper update result: ' + data + ', error: ' + JSON.stringify(error));\n              }\n              );\n            })\n          }\n          // ...\n        }\n        // ...\n      }\n      // ...\n    }\n    // ...\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import ability from '@ohos.ability.ability';\nimport featureAbility from '@ohos.ability.featureAbility';\nimport { BusinessError } from '@ohos.base';\nimport ohos_data_ability from '@ohos.data.dataAbility';\nimport rdb from '@ohos.data.rdb';\nimport promptAction from '@ohos.promptAction';\nimport hilog from '@ohos.hilog';\n\nconst TAG: string = 'PageDataAbility';\nconst domain: number = 0xFF00;\n\n@Entry\n@Component\nstruct PageDataAbility {\n  private valuesBucket_update: rdb.ValuesBucket = { name: 'Rose', introduction: 'update' };\n  private predicates = new ohos_data_ability.DataAbilityPredicates();\n  private uri = 'dataability:///com.samples.famodelabilitydevelop.DataAbility';\n  private DAHelper = featureAbility.acquireDataAbilityHelper(this.uri);\n\n  build() {\n    Column() {\n      // ...\n      List({ initialIndex: 0 }) {\n        // ...\n        ListItemGroup() {\n          ListItem() {\n            Flex({ justifyContent: FlexAlign.SpaceBetween, alignContent: FlexAlign.Center }) {\n              // ...\n            }\n            .onClick(() => {\n              // promise方式调用(await需要在async方法中使用):\n              this.predicates.equalTo('name', 'Rose');\n              this.DAHelper.update(this.uri, this.valuesBucket_update, this.predicates).then((dataupdate) => {\n                promptAction.showToast({\n                  message: 'update_success_toast'\n                });\n                hilog.info(domain, TAG, 'DAHelper update result: ' + dataupdate);\n              }).catch((error: BusinessError) => {\n                promptAction.showToast({\n                  message: 'update_failed_toast'\n                });\n                hilog.error(domain, TAG, `DAHelper update failed. Cause: ${error.message}`);\n              });\n            })\n          }\n          // ...\n        }\n        // ...\n      }\n      // ...\n    }\n    // ...\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用query方法在指定的DataAbility子模块中查找数据。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import ability from '@ohos.ability.ability';\nimport featureAbility from '@ohos.ability.featureAbility';\nimport { BusinessError } from '@ohos.base';\nimport ohos_data_ability from '@ohos.data.dataAbility';\nimport rdb from '@ohos.data.rdb';\nimport promptAction from '@ohos.promptAction';\nimport hilog from '@ohos.hilog';\n\nconst TAG: string = 'PageDataAbility';\nconst domain: number = 0xFF00;\n\n@Entry\n@Component\nstruct PageDataAbility {\n  private columnArray = new Array('id', 'name', 'introduction');\n  private predicates = new ohos_data_ability.DataAbilityPredicates();\n  private uri = 'dataability:///com.samples.famodelabilitydevelop.DataAbility';\n  private DAHelper = featureAbility.acquireDataAbilityHelper(this.uri);\n\n  build() {\n    Column() {\n      // ...\n      List({ initialIndex: 0 }) {\n        // ...\n        ListItemGroup() {\n          ListItem() {\n            Flex({ justifyContent: FlexAlign.SpaceBetween, alignContent: FlexAlign.Center }) {\n              // ...\n            }\n            .onClick(() => {\n              // callback方式调用:\n              this.predicates.equalTo('name', 'Rose');\n              this.DAHelper.query(this.uri, this.columnArray, this.predicates, (error, data) => {\n                if (error && error.code !== 0) {\n                  promptAction.showToast({\n                    message: 'query_failed_toast'\n                  });\n                  hilog.error(domain, TAG, `DAHelper query failed. Cause: ${error.message}`);\n                } else {\n                  promptAction.showToast({\n                    message: 'query_success_toast'\n                  });\n                }\n                // ResultSet是一个数据集合的游标，默认指向第-1个记录，有效的数据从0开始。\n                while (data.goToNextRow()) {\n                  const id = data.getLong(data.getColumnIndex('id'));\n                  const name = data.getString(data.getColumnIndex('name'));\n                  const introduction = data.getString(data.getColumnIndex('introduction'));\n                  hilog.info(domain, TAG, `DAHelper query result:id = [${id}], name = [${name}], introduction = [${introduction}]`);\n                }\n                // 释放数据集的内存\n                data.close();\n              }\n              );\n            })\n          }\n          // ...\n        }\n        // ...\n      }\n      // ...\n    }\n    // ...\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import ability from '@ohos.ability.ability';\nimport featureAbility from '@ohos.ability.featureAbility';\nimport { BusinessError } from '@ohos.base';\nimport ohos_data_ability from '@ohos.data.dataAbility';\nimport rdb from '@ohos.data.rdb';\nimport promptAction from '@ohos.promptAction';\nimport hilog from '@ohos.hilog';\n\nconst TAG: string = 'PageDataAbility';\nconst domain: number = 0xFF00;\n\n@Entry\n@Component\nstruct PageDataAbility {\n  private columnArray = new Array('id', 'name', 'introduction');\n  private predicates = new ohos_data_ability.DataAbilityPredicates();\n  private uri = 'dataability:///com.samples.famodelabilitydevelop.DataAbility';\n  private DAHelper = featureAbility.acquireDataAbilityHelper(this.uri);\n\n  build() {\n    Column() {\n      // ...\n      List({ initialIndex: 0 }) {\n        // ...\n        ListItemGroup() {\n          ListItem() {\n            Flex({ justifyContent: FlexAlign.SpaceBetween, alignContent: FlexAlign.Center }) {\n              // ...\n            }\n            .onClick(() => {\n              // promise方式调用(await需要在async方法中使用):\n              this.predicates.equalTo('name', 'Rose');\n              this.DAHelper.query(this.uri, this.columnArray, this.predicates).then((dataquery) => {\n                promptAction.showToast({\n                  message: 'query_success_toast'\n                });\n                // ResultSet是一个数据集合的游标，默认指向第-1个记录，有效的数据从0开始。\n                while (dataquery.goToNextRow()) {\n                  const id = dataquery.getLong(dataquery.getColumnIndex('id'));\n                  const name = dataquery.getString(dataquery.getColumnIndex('name'));\n                  const introduction = dataquery.getString(dataquery.getColumnIndex('introduction'));\n                  hilog.info(domain, TAG, `DAHelper query result:id = [${id}], name = [${name}], introduction = [${introduction}]`);\n                }\n                // 释放数据集的内存\n                dataquery.close();\n              }).catch((error: BusinessError) => {\n                promptAction.showToast({\n                  message: 'query_failed_toast'\n                });\n                hilog.error(domain, TAG, `DAHelper query failed. Cause: ${error.message}`);\n              });\n            })\n          }\n          // ...\n        }\n        // ...\n      }\n      // ...\n    }\n    // ...\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用batchInsert方法向指定的DataAbility子模块批量插入数据。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import ability from '@ohos.ability.ability';\nimport featureAbility from '@ohos.ability.featureAbility';\nimport { BusinessError } from '@ohos.base';\nimport ohos_data_ability from '@ohos.data.dataAbility';\nimport rdb from '@ohos.data.rdb';\nimport promptAction from '@ohos.promptAction';\nimport hilog from '@ohos.hilog';\n\nconst TAG: string = 'PageDataAbility';\nconst domain: number = 0xFF00;\n\n@Entry\n@Component\nstruct PageDataAbility {\n  private crowd = new Array({ name: 'Rose', introduction: 'batchInsert_one' } as rdb.ValuesBucket,\n    { name: 'Rose', introduction: 'batchInsert_two' } as rdb.ValuesBucket);\n  private uri = 'dataability:///com.samples.famodelabilitydevelop.DataAbility';\n  private DAHelper = featureAbility.acquireDataAbilityHelper(this.uri);\n\n  build() {\n    Column() {\n      // ...\n      List({ initialIndex: 0 }) {\n        // ...\n        ListItemGroup() {\n          ListItem() {\n            Flex({ justifyContent: FlexAlign.SpaceBetween, alignContent: FlexAlign.Center }) {\n              // ...\n            }\n            .onClick(() => {\n              // callback方式调用:\n              this.DAHelper.batchInsert(this.uri, this.crowd, (error, data) => {\n                if (error && error.code !== 0) {\n                  promptAction.showToast({\n                    message: 'batchInsert_failed_toast'\n                  });\n                } else {\n                  promptAction.showToast({\n                    message: 'batchInsert_success_toast'\n                  });\n                }\n                hilog.info(domain, TAG, 'DAHelper batchInsert result: ' + data + ', error: ' + JSON.stringify(error));\n              }\n              );\n            })\n          }\n          // ...\n        }\n        // ...\n      }\n      // ...\n    }\n    // ...\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import ability from '@ohos.ability.ability';\nimport featureAbility from '@ohos.ability.featureAbility';\nimport { BusinessError } from '@ohos.base';\nimport ohos_data_ability from '@ohos.data.dataAbility';\nimport rdb from '@ohos.data.rdb';\nimport promptAction from '@ohos.promptAction';\nimport hilog from '@ohos.hilog';\n\nconst TAG: string = 'PageDataAbility';\nconst domain: number = 0xFF00;\n\n@Entry\n@Component\nstruct PageDataAbility {\n  private crowd = new Array({ name: 'Rose', introduction: 'batchInsert_one' } as rdb.ValuesBucket,\n    { name: 'Rose', introduction: 'batchInsert_two' } as rdb.ValuesBucket);\n  private uri = 'dataability:///com.samples.famodelabilitydevelop.DataAbility';\n  private DAHelper = featureAbility.acquireDataAbilityHelper(this.uri);\n\n  build() {\n    Column() {\n      // ...\n      List({ initialIndex: 0 }) {\n        // ...\n        ListItemGroup() {\n          ListItem() {\n            Flex({ justifyContent: FlexAlign.SpaceBetween, alignContent: FlexAlign.Center }) {\n              // ...\n            }\n            .onClick(() => {\n              // promise方式调用(await需要在async方法中使用):\n              this.DAHelper.batchInsert(this.uri, this.crowd).then((databatchInsert) => {\n                promptAction.showToast({\n                  message: 'batchInsert_success_toast'\n                });\n                hilog.info(domain, TAG, 'DAHelper batchInsert result: ' + databatchInsert);\n              }).catch((error: BusinessError) => {\n                promptAction.showToast({\n                  message: 'batchInsert_failed_toast'\n                });\n                hilog.error(domain, TAG, `DAHelper batchInsert failed. Cause: ${error.message}`);\n              });\n            })\n          }\n          // ...\n        }\n        // ...\n      }\n      // ...\n    }\n    // ...\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用executeBatch方法向指定的DataAbility子模块进行数据的批量处理。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import ability from '@ohos.ability.ability';\nimport featureAbility from '@ohos.ability.featureAbility';\nimport { BusinessError } from '@ohos.base';\nimport ohos_data_ability from '@ohos.data.dataAbility';\nimport rdb from '@ohos.data.rdb';\nimport promptAction from '@ohos.promptAction';\nimport hilog from '@ohos.hilog';\n\nconst TAG: string = 'PageDataAbility';\nconst domain: number = 0xFF00;\n\n@Entry\n@Component\nstruct PageDataAbility {\n  private predicates = new ohos_data_ability.DataAbilityPredicates();\n  private uri = 'dataability:///com.samples.famodelabilitydevelop.DataAbility';\n  private DAHelper = featureAbility.acquireDataAbilityHelper(this.uri);\n\n  build() {\n    Column() {\n      // ...\n      List({ initialIndex: 0 }) {\n        // ...\n        ListItemGroup() {\n          ListItem() {\n            Flex({ justifyContent: FlexAlign.SpaceBetween, alignContent: FlexAlign.Center }) {\n              // ...\n            }\n            .onClick(() => {\n              // callback方式调用:\n              let operations: Array<ability.DataAbilityOperation> = [{\n                uri: this.uri,\n                type: featureAbility.DataAbilityOperationType.TYPE_INSERT,\n                valuesBucket: { name: 'Rose', introduction: 'executeBatch' },\n                predicates: this.predicates,\n                expectedCount: 0,\n                predicatesBackReferences: undefined,\n                interrupted: true,\n              }];\n              this.DAHelper.executeBatch(this.uri, operations, (error, data) => {\n                if (error && error.code !== 0) {\n                  promptAction.showToast({\n                    message: 'executeBatch_failed_toast'\n                  });\n                } else {\n                  promptAction.showToast({\n                    message: 'executeBatch_success_toast'\n                  });\n                }\n                hilog.info(domain, TAG, `DAHelper executeBatch, result: ` + JSON.stringify(data) + ', error: ' + JSON.stringify(error));\n              });\n            })\n          }\n          // ...\n        }\n        // ...\n      }\n      // ...\n    }\n    // ...\n    }\n  }\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import ability from '@ohos.ability.ability';\nimport featureAbility from '@ohos.ability.featureAbility';\nimport { BusinessError } from '@ohos.base';\nimport ohos_data_ability from '@ohos.data.dataAbility';\nimport rdb from '@ohos.data.rdb';\nimport promptAction from '@ohos.promptAction';\nimport hilog from '@ohos.hilog';\n\nconst TAG: string = 'PageDataAbility';\nconst domain: number = 0xFF00;\n\n@Entry\n@Component\nstruct PageDataAbility {\n  private predicates = new ohos_data_ability.DataAbilityPredicates();\n  private uri = 'dataability:///com.samples.famodelabilitydevelop.DataAbility';\n  private DAHelper = featureAbility.acquireDataAbilityHelper(this.uri);\n\n  build() {\n    Column() {\n      // ...\n      List({ initialIndex: 0 }) {\n        // ...\n        ListItemGroup() {\n          ListItem() {\n            Flex({ justifyContent: FlexAlign.SpaceBetween, alignContent: FlexAlign.Center }) {\n              // ...\n            }\n            .onClick(() => {\n              // promise方式调用(await需要在async方法中使用):\n              let operations: Array<ability.DataAbilityOperation> = [{\n                uri: this.uri,\n                type: featureAbility.DataAbilityOperationType.TYPE_INSERT,\n                valuesBucket: { name: 'Rose', introduction: 'executeBatch' },\n                predicates: this.predicates,\n                expectedCount: 0,\n                predicatesBackReferences: undefined,\n                interrupted: true,\n              }];\n              this.DAHelper.executeBatch(this.uri, operations).then((dataquery) => {\n                promptAction.showToast({\n                  message: 'executeBatch_success_toast'\n                });\n                hilog.info(domain, TAG, 'DAHelper executeBatch result: ' + JSON.stringify(dataquery));\n              }).catch((error: BusinessError) => {\n                promptAction.showToast({\n                  message: 'executeBatch_failed_toast'\n                });\n                hilog.error(domain, TAG, `DAHelper executeBatch failed. Cause: ${error.message}`);\n              });\n            })\n          }\n          // ...\n        }\n        // ...\n      }\n      // ...\n    }\n    // ...\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["DataAbility的客户端的接口是由工具接口类对象DataAbilityHelper向外提供，相关接口可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability/js-apis-inner-ability-dataabilityhelper/js-apis-inner-ability-dataabilityhelper",
        children: "DataAbilityHelper模块"
      }), "。"]
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