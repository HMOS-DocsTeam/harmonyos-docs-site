"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["822532"], {
790694(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_state_management_arkts_state_management_v_1_arkts_v_1_application_state_management_arkts_persiststorage_arkts_persiststorage_md_5a9_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-state-management-arkts-state-management-v-1-arkts-v-1-application-state-management-arkts-persiststorage-arkts-persiststorage-md-5a9.json
var site_docs_arkui_arkts_ui_development_arkts_state_management_arkts_state_management_v_1_arkts_v_1_application_state_management_arkts_persiststorage_arkts_persiststorage_md_5a9_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-persiststorage/arkts-persiststorage","title":"PersistentStorage：持久化存储UI状态","description":"PersistentStorage是应用程序中的可选单例对象。此对象的作用是持久化存储选定的AppStorage属性，以确保这些属性在应用程序重新启动时的值与应用程序关闭时的值相同。","source":"@site/docs/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-persiststorage/arkts-persiststorage.md","sourceDirName":"arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-persiststorage","slug":"/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-persiststorage/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-persiststorage/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"PersistentStorage：持久化存储UI状态","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-persiststorage","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"AppStorage：应用全局的UI状态存储","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-appstorage/"},"next":{"title":"Environment：设备环境查询","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-environment/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-persiststorage/arkts-persiststorage.md


const frontMatter = {
	title: 'PersistentStorage：持久化存储UI状态',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-persiststorage',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'PersistentStorage：持久化存储UI状态';

const assets = {

};



const toc = [{
  "value": "概述",
  "id": "概述",
  "level": 2
}, {
  "value": "限制条件",
  "id": "限制条件",
  "level": 2
}, {
  "value": "使用场景",
  "id": "使用场景",
  "level": 2
}, {
  "value": "从AppStorage中访问PersistentStorage初始化的属性",
  "id": "从appstorage中访问persistentstorage初始化的属性",
  "level": 3
}, {
  "value": "在PersistentStorage之前访问AppStorage中的属性",
  "id": "在persistentstorage之前访问appstorage中的属性",
  "level": 3
}, {
  "value": "在PersistentStorage之后访问AppStorage中的属性",
  "id": "在persistentstorage之后访问appstorage中的属性",
  "level": 3
}, {
  "value": "持久化联合类型变量",
  "id": "持久化联合类型变量",
  "level": 3
}, {
  "value": "持久化Date类型变量",
  "id": "持久化date类型变量",
  "level": 3
}, {
  "value": "持久化Map类型变量",
  "id": "持久化map类型变量",
  "level": 3
}, {
  "value": "持久化Set类型变量",
  "id": "持久化set类型变量",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "persistentstorage持久化存储ui状态",
        children: "PersistentStorage：持久化存储UI状态"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "PersistentStorage是应用程序中的可选单例对象。此对象的作用是持久化存储选定的AppStorage属性，以确保这些属性在应用程序重新启动时的值与应用程序关闭时的值相同。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["PersistentStorage提供状态变量持久化的能力，但是需要注意，其持久化和读回UI的能力都需要依赖AppStorage。在阅读本文档前，建议提前阅读：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-appstorage",
        children: "AppStorage"
      }), "，", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/state-management-and-rendering-control/ts-state-management/ts-state-management#persistentstorage",
        children: "PersistentStorage API文档"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "PersistentStorage将选定的AppStorage属性保留在设备磁盘上。应用程序通过API，以决定哪些属性应借助PersistentStorage持久化。PersistentStorage和AppStorage中的属性建立了双向同步，UI和业务逻辑不直接访问PersistentStorage中的属性，所有属性访问都是对AppStorage的访问，AppStorage中的更改会自动同步到PersistentStorage。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "PersistentStorage的存储路径为module级别，即哪个module调用了PersistentStorage，数据副本存入对应module的持久化文件中。如果多个module使用相同的key，则数据归属到最先使用PersistentStorage的module里。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "PersistentStorage的存储路径在应用第一个ability启动时就已确定，为该ability所属的module。如果一个ability调用了PersistentStorage，并且该ability能被不同的module拉起，那么ability存在多少种启动方式，就会有多少份数据副本。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["PersistentStorage功能上耦合了AppStorage，并且数据在不同module中使用也会有问题，因此推荐开发者使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-application-state/arkts-new-persistencev2",
        children: "PersistenceV2"
      }), "的globalConnect接口替换掉PersistentStorage的persistProp接口。PersistentStorage向PersistenceV2迁移的方案见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-v1-v2-guide/arkts-state-management-v1-v2-migration-guide/arkts-v1-v2-migration-application#persistentstorage-persistencev2",
        children: "PersistentStorage->PersistenceV2"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "限制条件",
      children: "限制条件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "PersistentStorage允许的类型和值有："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "number，string，boolean，enum 等简单类型。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "可以被JSON.stringify()和JSON.parse()重构的对象（但是对象中的成员方法不支持持久化）。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["API version 12及以上支持Map类型，可以观察到Map整体的赋值，同时可通过调用Map的接口set、clear、delete 更新Map的值，且更新的值被持久化存储。详见", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E6%8C%81%E4%B9%85%E5%8C%96map%E7%B1%BB%E5%9E%8B%E5%8F%98%E9%87%8F",
          children: "持久化Map类型变量"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["API version 12及以上支持Set类型，可以观察到Set整体的赋值，同时可通过调用Set的接口add、clear、delete 更新Set的值，且更新的值被持久化存储。详见", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E6%8C%81%E4%B9%85%E5%8C%96set%E7%B1%BB%E5%9E%8B%E5%8F%98%E9%87%8F",
          children: "持久化Set类型变量"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["API version 12及以上支持Date类型，可以观察到Date整体的赋值，同时可通过调用Date的接口setFullYear、setMonth、setDate、setHours、setMinutes、setSeconds、setMilliseconds、setTime、setUTCFullYear、setUTCMonth、setUTCDate、setUTCHours、setUTCMinutes、setUTCSeconds、setUTCMilliseconds 更新Date的属性，且更新的值被持久化存储。详见", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E6%8C%81%E4%B9%85%E5%8C%96date%E7%B1%BB%E5%9E%8B%E5%8F%98%E9%87%8F",
          children: "持久化Date类型变量"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "API version 12及以上支持undefined 和 null。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["API version 12及以上", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E6%8C%81%E4%B9%85%E5%8C%96%E8%81%94%E5%90%88%E7%B1%BB%E5%9E%8B%E5%8F%98%E9%87%8F",
          children: "支持联合类型"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "PersistentStorage不允许的类型和值有："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "嵌套对象（对象数组，对象的属性是对象等）。因为目前框架无法检测AppStorage中嵌套对象（包括数组）值的变化，所以无法写回到PersistentStorage中。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "持久化数据是一个相对缓慢的操作，应用程序应避免以下情况："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "持久化大型数据集。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "持久化经常变化的变量。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["PersistentStorage的持久化变量最好是小于2kb的数据，不要大量的数据持久化，因为PersistentStorage写入磁盘是在UI线程同步执行的，大量数据本地读写会影响UI渲染性能。如果开发者需要存储大量的数据，建议使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore/arkts-apis-data-relationalstore",
        children: "@ohos.data.relationalStore (关系型数据库)"
      }), "相关接口。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["PersistentStorage和UI实例相关联，持久化操作需要在UI实例初始化成功后（即", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-windowstage/arkts-apis-window-windowstage#loadcontent9",
        children: "loadContent"
      }), "传入的回调被调用时）才可以被调用，早于该时机调用会导致持久化失败。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// EntryAbility.ets\nonWindowStageCreate(windowStage: window.WindowStage): void {\n  windowStage.loadContent('pages/PageOneMessageStorage', (err) => {\n    if (err.code) {\n      return;\n    }\n    PersistentStorage.persistProp('aProp', 47);\n  });\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用场景",
      children: "使用场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "从appstorage中访问persistentstorage初始化的属性",
      children: "从AppStorage中访问PersistentStorage初始化的属性"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "初始化PersistentStorage："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "PersistentStorage.persistProp('aProp', 47);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在AppStorage获取对应属性："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "AppStorage.get<number>('aProp'); // returns 47\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "或在组件内部定义："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@StorageLink('aProp') aProp: number = 48;\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "完整代码如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "PersistentStorage.persistProp('aProp', 47);\n\n@Entry\n@Component\nstruct TestPageOne {\n  @State message: string = 'Hello World';\n  @StorageLink('aProp') aProp: number = 48;\n\n  build() {\n    Row() {\n      Column() {\n        Text(this.message)\n        // 应用退出时会保存当前结果。重新启动后，会显示上一次的保存结果\n        // 未修改时默认值为47\n        Text(`${this.aProp}`)\n          .onClick(() => {\n            this.aProp += 1;\n          })\n      }\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "新应用安装后首次启动运行："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "调用persistProp初始化PersistentStorage，首先查询在PersistentStorage本地文件中是否存在“aProp”，查询结果为不存在，因为应用是第一次安装。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "接着查询属性“aProp”在AppStorage中是否存在，依旧不存在。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "在AppStorage中创建名为“aProp”的number类型属性，属性初始值是定义的默认值47。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "PersistentStorage将属性“aProp”和值47写入磁盘，AppStorage中“aProp”对应的值和其后续的更改将被持久化。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "在TestPageOne组件中创建状态变量@StorageLink('aProp') aProp，和AppStorage中“aProp”双向绑定，在创建的过程中会在AppStorage中查找，成功找到“aProp”，所以使用其在AppStorage找到的值47。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "图1"
            })
          }), " PersistProp初始化流程"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(216980)/* ["default"] */.A) + "",
            width: "1558",
            height: "807"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "触发点击事件后："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "状态变量@StorageLink('aProp') aProp改变，触发Text组件重新刷新。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "@StorageLink装饰的变量是和AppStorage中建立双向同步的，所以@StorageLink('aProp') aProp的变化会被同步回AppStorage中。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "AppStorage中“aProp”属性的改变会同步到所有绑定该“aProp”的单向或者双向变量，在本示例中没有其他的绑定“aProp”的变量。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "因为“aProp”对应的属性已经被持久化，所以在AppStorage中“aProp”的改变会触发PersistentStorage，将新的改变写入本地磁盘。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "后续启动应用："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "执行PersistentStorage.persistProp('aProp', 47)，首先在PersistentStorage本地文件查询“aProp”属性，成功查询到。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "将在PersistentStorage查询到的值写入AppStorage中。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "在TestPageOne组件里，@StorageLink绑定的“aProp”为PersistentStorage写入AppStorage中的值，即为上一次退出应用存入的值。"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "在persistentstorage之前访问appstorage中的属性",
      children: "在PersistentStorage之前访问AppStorage中的属性"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例为反例。在调用PersistentStorage.persistProp或者persistProps之前使用接口访问AppStorage中的属性是错误的，因为这样的调用顺序会丢失上一次应用程序运行中的属性值："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let aProp = AppStorage.setOrCreate('aProp', 47);\nPersistentStorage.persistProp('aProp', 48);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用在非首次运行时，先执行AppStorage.setOrCreate('aProp', 47)：属性“aProp”在AppStorage中创建，其类型为number，其值设置为指定的默认值47。“aProp”是持久化的属性，所以会被写回PersistentStorage磁盘中，PersistentStorage存储的上次退出应用的值被覆盖。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "PersistentStorage.persistProp('aProp', 48)：在PersistentStorage中查找到“aProp”，值为刚刚使用AppStorage接口写入的47。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "在persistentstorage之后访问appstorage中的属性",
      children: "在PersistentStorage之后访问AppStorage中的属性"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者可以先判断是否需要覆盖上一次保存在PersistentStorage中的值，如果需要覆盖，再调用AppStorage的接口进行修改，如果不需要覆盖，则不调用AppStorage的接口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "const MAX_NUM: number = 50;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "PersistentStorage.persistProp('aProp', 48);\nif ((AppStorage.get<number>('aProp') ?? 0) > MAX_NUM) {\n  // 如果PersistentStorage存储的值超过50，设置为47\n  AppStorage.setOrCreate('aProp', 47);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例代码在读取PersistentStorage存储的数据后，判断“aProp”的值是否大于50，如果大于50，则使用AppStorage的接口将其设置为47。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "持久化联合类型变量",
      children: "持久化联合类型变量"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "PersistentStorage支持联合类型和undefined和null，在下面的示例中，使用persistProp方法初始化“P”为undefined。通过@StorageLink('P')绑定变量p，类型为number | undefined | null，点击Button改变P的值，视图会随之刷新。且P的值被持久化存储。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 定义常量替代魔法值，明确数值含义\nconst DEFAULT_NUMBER: number = 10; // 默认数字值\nconst FONT_SIZE_LARGE: number = 50; // 大字体尺寸\n\n// 初始化持久化属性，键名使用常量定义（若有多处使用可提取）\nconst STORAGE_KEY_P: string = 'P';\nPersistentStorage.persistProp(STORAGE_KEY_P, undefined);\n\n@Entry\n@Component\nstruct TestCase6 {\n  // 使用常量作为默认值，类型明确\n  @StorageLink(STORAGE_KEY_P) p: number | undefined | null = DEFAULT_NUMBER;\n\n  build() {\n    Row() {\n      Column() {\n        Text(this.p + '')\n          .fontSize(FONT_SIZE_LARGE)\n          .fontWeight(FontWeight.Bold)\n        Button('changeToNumber').onClick(() => {\n          this.p = DEFAULT_NUMBER;\n        })\n        Button('changeTo undefined').onClick(() => {\n          this.p = undefined;\n        })\n        Button('changeTo null').onClick(() => {\n          this.p = null;\n        })\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "持久化date类型变量",
      children: "持久化Date类型变量"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在下面的示例中，@StorageLink装饰的persistedDate类型为Date，点击Button改变persistedDate的值，视图会随之刷新。且persistedDate的值被持久化存储。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "PersistentStorage.persistProp('persistedDate', new Date());\n\n@Entry\n@Component\nstruct PersistedDate {\n  @StorageLink('persistedDate') persistedDate: Date = new Date();\n\n  updateDate() {\n    this.persistedDate = new Date();\n  }\n\n  build() {\n    List() {\n      ListItem() {\n        Column() {\n          Text(`Persisted Date is ${this.persistedDate.toString()}`)\n            .margin(20)\n\n          Text(`Persisted Date year is ${this.persistedDate.getFullYear()}`)\n            .margin(20)\n\n          Text(`Persisted Date hours is ${this.persistedDate.getHours()}`)\n            .margin(20)\n\n          Text(`Persisted Date minutes is ${this.persistedDate.getMinutes()}`)\n            .margin(20)\n\n          Text(`Persisted Date time is ${this.persistedDate.toLocaleTimeString()}`)\n            .margin(20)\n\n          Button() {\n            Text('Update Date')\n              .fontSize(25)\n              .fontWeight(FontWeight.Bold)\n              .fontColor(Color.White)\n          }\n          .type(ButtonType.Capsule)\n          .margin({\n            top: 20\n          })\n          .backgroundColor('#0D9FFB')\n          .width('60%')\n          .height('5%')\n          .onClick(() => {\n            this.updateDate();\n          })\n\n        }.width('100%')\n      }\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "持久化map类型变量",
      children: "持久化Map类型变量"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在下面的示例中，@StorageLink装饰的persistedMapString类型为Map<number, string>，点击Button改变persistedMapString的值，视图会随之刷新。且persistedMapString的值被持久化存储。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "PersistentStorage.persistProp('persistedMapString', new Map<number, string>([]));\n\n@Entry\n@Component\nstruct PersistedMap {\n  @StorageLink('persistedMapString') persistedMapString: Map<number, string> = new Map<number, string>([]);\n\n  persistMapString() {\n    this.persistedMapString = new Map<number, string>([[3, 'one'], [6, 'two'], [9, 'three']]);\n  }\n\n  build() {\n    List() {\n      ListItem() {\n        Column() {\n          Text(`Persisted Map String is `)\n            .margin(20)\n          ForEach(Array.from(this.persistedMapString.entries()), (item: [number, string]) => {\n            Text(`${item[0]} ${item[1]}`)\n          })\n\n          Button() {\n            Text('Persist Map String')\n              .fontSize(20)\n              .fontWeight(FontWeight.Bold)\n              .fontColor(Color.White)\n          }\n          .type(ButtonType.Capsule)\n          .margin({\n            top: 20\n          })\n          .backgroundColor('#0D9FFB')\n          .width('60%')\n          .height('5%')\n          .onClick(() => {\n            this.persistMapString();\n          })\n\n        }.width('100%')\n      }\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "持久化set类型变量",
      children: "持久化Set类型变量"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在下面的示例中，@StorageLink装饰的persistedSet类型为Set<number>，点击Button改变persistedSet的值，视图会随之刷新。且persistedSet的值被持久化存储。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "PersistentStorage.persistProp('persistedSet', new Set<number>([]));\n\n@Entry\n@Component\nstruct PersistedSet {\n  @StorageLink('persistedSet') persistedSet: Set<number> = new Set<number>([]);\n\n  persistSet() {\n    this.persistedSet = new Set<number>([33, 1, 3]);\n  }\n\n  clearSet() {\n    this.persistedSet.clear();\n  }\n\n  build() {\n    List() {\n      ListItem() {\n        Column() {\n          Text(`Persisted Set is `)\n            .margin(20)\n          ForEach(Array.from(this.persistedSet.entries()), (item: [number, number]) => {\n            Text(`${item[1]}`)\n          })\n\n          Button() {\n            Text('Persist Set')\n              .fontSize(25)\n              .fontWeight(FontWeight.Bold)\n              .fontColor(Color.White)\n          }\n          .type(ButtonType.Capsule)\n          .margin({\n            top: 20\n          })\n          .backgroundColor('#0D9FFB')\n          .width('60%')\n          .height('5%')\n          .onClick(() => {\n            this.persistSet();\n          })\n\n          Button() {\n            Text('Persist Clear')\n              .fontSize(25)\n              .fontWeight(FontWeight.Bold)\n              .fontColor(Color.White)\n          }\n          .type(ButtonType.Capsule)\n          .margin({\n            top: 20\n          })\n          .backgroundColor('#0D9FFB')\n          .width('60%')\n          .height('5%')\n          .onClick(() => {\n            this.clearSet();\n          })\n\n        }\n        .width('100%')\n      }\n    }\n  }\n}\n"
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
216980(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477613-2aa5e1a58771f5125db5324efe80ea7e.png");

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