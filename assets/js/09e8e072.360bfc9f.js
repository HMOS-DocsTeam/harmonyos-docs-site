"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["670870"], {
916019(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_state_management_arkts_v_1_v_2_guide_arkts_state_management_v_1_v_2_migration_guide_arkts_v_1_v_2_migration_application_arkts_v_1_v_2_migration_application_md_09e_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-state-management-arkts-v-1-v-2-guide-arkts-state-management-v-1-v-2-migration-guide-arkts-v-1-v-2-migration-application-arkts-v-1-v-2-migration-application-md-09e.json
var site_docs_arkui_arkts_ui_development_arkts_state_management_arkts_v_1_v_2_guide_arkts_state_management_v_1_v_2_migration_guide_arkts_v_1_v_2_migration_application_arkts_v_1_v_2_migration_application_md_09e_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-state-management/arkts-v1-v2-guide/arkts-state-management-v1-v2-migration-guide/arkts-v1-v2-migration-application/arkts-v1-v2-migration-application","title":"应用内状态变量迁移","description":"本文档主要介绍应用内状态变量迁移，包含以下场景。","source":"@site/docs/arkui/arkts-ui-development/arkts-state-management/arkts-v1-v2-guide/arkts-state-management-v1-v2-migration-guide/arkts-v1-v2-migration-application/arkts-v1-v2-migration-application.md","sourceDirName":"arkui/arkts-ui-development/arkts-state-management/arkts-v1-v2-guide/arkts-state-management-v1-v2-migration-guide/arkts-v1-v2-migration-application","slug":"/arkui/arkts-ui-development/arkts-state-management/arkts-v1-v2-guide/arkts-state-management-v1-v2-migration-guide/arkts-v1-v2-migration-application/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-state-management/arkts-v1-v2-guide/arkts-state-management-v1-v2-migration-guide/arkts-v1-v2-migration-application/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"应用内状态变量迁移","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-v1-v2-migration-application","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"数据对象状态变量迁移","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-state-management/arkts-v1-v2-guide/arkts-state-management-v1-v2-migration-guide/arkts-v1-v2-migration-inner-class/"},"next":{"title":"组件复用迁移","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-state-management/arkts-v1-v2-guide/arkts-state-management-v1-v2-migration-guide/arkts-v1-v2-migration-reusable/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-state-management/arkts-v1-v2-guide/arkts-state-management-v1-v2-migration-guide/arkts-v1-v2-migration-application/arkts-v1-v2-migration-application.md


const frontMatter = {
	title: '应用内状态变量迁移',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-v1-v2-migration-application',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '应用内状态变量迁移';

const assets = {

};



const toc = [{
  "value": "LocalStorage-&gt;@ObservedV2/@Trace",
  "id": "localstorage-observedv2trace",
  "level": 2
}, {
  "value": "基本场景",
  "id": "基本场景",
  "level": 3
}, {
  "value": "自定义组件接收LocalStorage实例场景",
  "id": "自定义组件接收localstorage实例场景",
  "level": 3
}, {
  "value": "多实例场景LocalStorage的迁移",
  "id": "多实例场景localstorage的迁移",
  "level": 3
}, {
  "value": "AppStorage-&gt;AppStorageV2",
  "id": "appstorage-appstoragev2",
  "level": 2
}, {
  "value": "Environment-&gt;调用Ability接口直接获取系统环境变量",
  "id": "environment-调用ability接口直接获取系统环境变量",
  "level": 2
}, {
  "value": "PersistentStorage-&gt;PersistenceV2",
  "id": "persistentstorage-persistencev2",
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
    li: "li",
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
        id: "应用内状态变量迁移",
        children: "应用内状态变量迁移"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本文档主要介绍应用内状态变量迁移，包含以下场景。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "V1装饰器名称/场景"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "迁移方案"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-localstorage",
              children: "LocalStorage"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-data-object-state/arkts-new-observedv2-and-trace",
              children: "@ObservedV2"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-data-object-state/arkts-new-observedv2-and-trace",
              children: "@Trace"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-appstorage",
              children: "AppStorage"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-application-state/arkts-new-appstoragev2",
              children: "AppStorageV2"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-environment",
              children: "Environment"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiabilitycontext/js-apis-inner-application-uiabilitycontext#uiabilitycontext-1",
              children: "UIAbilityContext"
            }), "的config属性获取系统环境变量"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-persiststorage",
              children: "PersistentStorage"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-application-state/arkts-new-persistencev2",
              children: "PersistenceV2"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "存量迁移场景"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["@ObservedV2、@Trace、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-data-object-state/arkts-new-monitor",
              children: "@Monitor"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "localstorage-observedv2trace",
      children: "LocalStorage->@ObservedV2/@Trace"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "迁移规则"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "LocalStorage的目的是实现页面间的状态变量共享。由于V1状态变量和View层耦合，开发者难以自主实现页面间状态变量的共享，因此框架提供了该能力。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "状态管理V2将状态变量的观察能力内嵌到数据本身，不再和View层耦合。因此，不再需要类似LocalStorage的能力，可以使用创建@ObservedV2和@Trace装饰类的实例，开发者需自行import和export，实现状态变量的页面间共享。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "基本场景",
      children: "基本场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "V1:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过windowStage.", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-window/arkts-apis-window-window#loadcontent9",
        children: "loadContent"
      }), "和this.getUIContext().", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext#getsharedlocalstorage12",
        children: "getSharedLocalStorage"
      }), "接口实现页面间的状态变量共享。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { UIAbility } from '@kit.AbilityKit';\nimport { window } from '@kit.ArkUI';\n\nexport default class EntryAbility extends UIAbility {\n  public para: Record<string, number> = { 'count': 47 };\n  public storage: LocalStorage = new LocalStorage(this.para);\n\n  onWindowStageCreate(windowStage: window.WindowStage): void {\n    windowStage.loadContent('pages/Page1', this.storage);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在下面的示例中，使用@LocalStorageLink，可以将开发者本地的修改同步回LocalStorage中。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Page1.ets\n// 预览器上不支持获取页面共享的LocalStorage实例。\n@Entry({ useSharedStorage: true })\n@Component\nstruct Page1 {\n  @LocalStorageLink('count') count: number = 0;\n  pageStack: NavPathStack = new NavPathStack();\n\n  build() {\n    Navigation(this.pageStack) {\n      Column() {\n        Text(`${this.count}`)\n          .fontSize(50)\n          .onClick(() => {\n            this.count++;\n          })\n        Button('push to Page2')\n          .onClick(() => {\n            this.pageStack.pushPathByName('Page2', null);\n          })\n      }\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Page2.ets\n@Builder\nexport function Page2Builder() {\n  Page2()\n}\n\n// Page2组件获得了父亲Page1组件的LocalStorage实例\n@Component\nstruct Page2 {\n  @LocalStorageLink('count') count: number = 0;\n  pathStack: NavPathStack = new NavPathStack();\n\n  build() {\n    NavDestination() {\n      Column() {\n        Text(`${this.count}`)\n          .fontSize(50)\n          .onClick(() => {\n            this.count++;\n          })\n        Button('change')\n          .fontSize(50)\n          .onClick(() => {\n            const storage = this.getUIContext().getSharedLocalStorage();\n            if (storage) {\n              storage.set('count', 20);\n            }\n          })\n      }\n    }\n    .onReady((context: NavDestinationContext) => {\n      this.pathStack = context.pathStack;\n    })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用Navigation时，需要添加配置系统路由表文件src/main/resources/base/profile/route_map.json，并替换pageSourceFile为Page2页面的路径，并且在module.json5中添加：\"routerMap\": \"$profile:route_map\"。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"routerMap\": [\n    {\n      \"name\": \"Page2\",\n      \"pageSourceFile\": \"src/main/ets/pages/Page2.ets\",\n      \"buildFunction\": \"Page2Builder\",\n      \"data\": {\n        \"description\": \"LocalStorage example\"\n      }\n    }\n  ]\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "V2:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "声明@ObservedV2装饰的MyStorage类，并import到需要使用的页面中。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "声明被@Trace的属性作为页面间共享的可观察的数据。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@ObservedV2\nexport class MyStorage {\n  public static singleton_: MyStorage;\n\n  static instance() {\n    if (!MyStorage.singleton_) {\n      MyStorage.singleton_ = new MyStorage();\n    }\n    return MyStorage.singleton_;\n  }\n  @Trace public count: number = 47;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Page1.ets\nimport { MyStorage } from './storage';\n\n@Entry\n@ComponentV2\nstruct Page1 {\n  storage: MyStorage = MyStorage.instance();\n  pageStack: NavPathStack = new NavPathStack();\n\n  build() {\n    Navigation(this.pageStack) {\n      Column() {\n        Text(`${this.storage.count}`)\n          .fontSize(50)\n          .onClick(() => {\n            this.storage.count++;\n          })\n        Button('push to Page2')\n          .onClick(() => {\n            this.pageStack.pushPathByName('Page2', null);\n          })\n      }\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Page2.ets\nimport { MyStorage } from './storage';\n\n@Builder\nexport function Page2Builder() {\n  Page2()\n}\n\n@ComponentV2\nstruct Page2 {\n  storage: MyStorage = MyStorage.instance();\n  pathStack: NavPathStack = new NavPathStack();\n\n  build() {\n    NavDestination() {\n      Column() {\n        Text(`${this.storage.count}`)\n          .fontSize(50)\n          .onClick(() => {\n            this.storage.count++;\n          })\n      }\n    }\n    .onReady((context: NavDestinationContext) => {\n      this.pathStack = context.pathStack;\n    })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用Navigation时，需要添加配置系统路由表文件src/main/resources/base/profile/route_map.json，并替换pageSourceFile为Page2页面的路径，并且在module.json5中添加：\"routerMap\": \"$profile:route_map\"。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"routerMap\": [\n    {\n      \"name\": \"Page2\",\n      \"pageSourceFile\": \"src/main/ets/pages/Page2.ets\",\n      \"buildFunction\": \"Page2Builder\",\n      \"data\": {\n        \"description\" : \"LocalStorage example\"\n      }\n    }\n  ]\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果开发者需要实现类似于@LocalStorageProp的效果，但希望本地的修改不同步回LocalStorage中，可参考以下示例："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在Page1中改变count值，由于count被@LocalStorageProp装饰的，因此其更改仅在本地生效，不会同步到LocalStorage。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "点击push to Page2按钮，跳转到Page2。由于在Page1中改变count值不会同步到LocalStorage，因此Page2中的Text组件仍显示初始值47。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "点击change Storage Count按钮，调用LocalStorage的setOrCreate，改变count对应的值，并通知所有绑定该key的变量。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Page1.ets\nexport let storage: LocalStorage = new LocalStorage();\n\nstorage.setOrCreate('count', 47);\n\n@Entry(storage)\n@Component\nstruct Page1 {\n  @LocalStorageProp('count') count: number = 0;\n  pageStack: NavPathStack = new NavPathStack();\n\n  build() {\n    Navigation(this.pageStack) {\n      Column() {\n        Text(`${this.count}`)\n          .fontSize(50)\n          .onClick(() => {\n            this.count++;\n          })\n        Button('change Storage Count')\n          .onClick(() => {\n            storage.setOrCreate('count', storage.get<number>('count') as number + 100);\n          })\n        Button('push to Page2')\n          .onClick(() => {\n            this.pageStack.pushPathByName('Page2', null);\n          })\n      }\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Page2.ets\nimport { storage } from './Page1'\n\n@Builder\nexport function Page2Builder() {\n  Page2()\n}\n\n// Page2组件获得了父亲Page1组件的LocalStorage实例\n@Component\nstruct Page2 {\n  @LocalStorageProp('count') count: number = 0;\n  pathStack: NavPathStack = new NavPathStack();\n\n  build() {\n    NavDestination() {\n      Column() {\n        Text(`${this.count}`)\n          .fontSize(50)\n          .onClick(() => {\n            this.count++;\n          })\n        Button('change Storage Count')\n          .onClick(() => {\n            storage.setOrCreate('count', storage.get<number>('count') as number + 100);\n          })\n      }\n    }\n    .onReady((context: NavDestinationContext) => {\n      this.pathStack = context.pathStack;\n    })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在V2中，可以借助@Local和@Monitor实现类似的效果。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "@Local装饰的count变量为组件本地的值，其改变不会同步回storage。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "@Monitor监听storage.count的变化，当storage.count改变时，在@Monitor的回调里改变本地@Local的值。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Page1.ets\nimport { MyStorage } from './storage';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst DOMAIN = 0x0000;\n\n@Entry\n@ComponentV2\nstruct Page1 {\n  storage: MyStorage = MyStorage.instance();\n  pageStack: NavPathStack = new NavPathStack();\n  @Local count: number = this.storage.count;\n\n  @Monitor('storage.count')\n  onCountChange(mon: IMonitor) {\n    hilog.info(DOMAIN, 'testTag', '%{public}s', `Page1 ${mon.value()?.before} to ${mon.value()?.now}`);\n    this.count = this.storage.count;\n  }\n\n  build() {\n    Navigation(this.pageStack) {\n      Column() {\n        Text(`${this.count}`)\n          .fontSize(50)\n          .onClick(() => {\n            this.count++;\n          })\n        Button('change Storage Count')\n          .onClick(() => {\n            this.storage.count += 100;\n          })\n        Button('push to Page2')\n          .onClick(() => {\n            this.pageStack.pushPathByName('Page2', null);\n          })\n      }\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Page2.ets\nimport { MyStorage } from './storage';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst DOMAIN = 0x0000;\n\n@Builder\nexport function Page2Builder() {\n  Page2()\n}\n\n@ComponentV2\nstruct Page2 {\n  storage: MyStorage = MyStorage.instance();\n  pathStack: NavPathStack = new NavPathStack();\n  @Local count: number = this.storage.count;\n\n  @Monitor('storage.count')\n  onCountChange(mon: IMonitor) {\n    hilog.info(DOMAIN, 'testTag', '%{public}s', `Page2 ${mon.value()?.before} to ${mon.value()?.now}`);\n    this.count = this.storage.count;\n  }\n\n  build() {\n    NavDestination() {\n      Column() {\n        Text(`${this.count}`)\n          .fontSize(50)\n          .onClick(() => {\n            this.count++;\n          })\n        Button('change Storage Count')\n          .onClick(() => {\n            this.storage.count += 100;\n          })\n      }\n    }\n    .onReady((context: NavDestinationContext) => {\n      this.pathStack = context.pathStack;\n    })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "自定义组件接收localstorage实例场景",
      children: "自定义组件接收LocalStorage实例场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为了配合Navigation的场景，LocalStorage支持作为自定义组件的入参，传递给以当前自定义组件为根节点的所有子自定义组件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对于该场景，V2可以使用创建多个全局@ObservedV2和@Trace装饰类的实例进行替代。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "V1:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let localStorageA: LocalStorage = new LocalStorage();\nlocalStorageA.setOrCreate('propA', 'propA');\n\nlet localStorageB: LocalStorage = new LocalStorage();\nlocalStorageB.setOrCreate('propB', 'propB');\n\nlet localStorageC: LocalStorage = new LocalStorage();\nlocalStorageC.setOrCreate('propC', 'propC');\n\n@Entry\n@Component\nstruct MyNavigationTestStack {\n  @Provide('pageInfo') pageInfo: NavPathStack = new NavPathStack();\n\n  @Builder\n  PageMap(name: string) {\n    if (name === 'pageOne') {\n      // 传递不同的LocalStorage实例\n      PageOneStack({}, localStorageA)\n    } else if (name === 'pageTwo') {\n      PageTwoStack({}, localStorageB)\n    } else if (name === 'pageThree') {\n      PageThreeStack({}, localStorageC)\n    }\n  }\n\n  build() {\n    Column({ space: 5 }) {\n      Navigation(this.pageInfo) {\n        Column() {\n          Button('Next Page', { stateEffect: true, type: ButtonType.Capsule })\n            .width('80%')\n            .height(40)\n            .margin(20)\n            .onClick(() => {\n              this.pageInfo.pushPath({ name: 'pageOne' }); // 将name指定的NavDestination页面信息入栈\n            })\n        }\n      }.title('NavIndex')\n      .navDestination(this.PageMap)\n      .mode(NavigationMode.Stack)\n      .borderWidth(1)\n    }\n  }\n}\n\n@Component\nstruct PageOneStack {\n  @Consume('pageInfo') pageInfo: NavPathStack;\n  @LocalStorageLink('propA') propA: string = 'Hello World';\n\n  build() {\n    NavDestination() {\n      Column() {\n        // 显示'propA'\n        NavigationContentMsgStack()\n        // 显示'propA'\n        Text(`${this.propA}`)\n        Button('Next Page', { stateEffect: true, type: ButtonType.Capsule })\n          .width('80%')\n          .height(40)\n          .margin(20)\n          .onClick(() => {\n            this.pageInfo.pushPathByName('pageTwo', null);\n          })\n      }.width('100%').height('100%')\n    }.title('pageOne')\n    .onBackPressed(() => {\n      this.pageInfo.pop();\n      return true;\n    })\n  }\n}\n\n@Component\nstruct PageTwoStack {\n  @Consume('pageInfo') pageInfo: NavPathStack;\n  @LocalStorageLink('propB') propB: string = 'Hello World';\n\n  build() {\n    NavDestination() {\n      Column() {\n        // 显示'Hello'，当前LocalStorage实例localStorageB没有propA对应的值，使用本地默认值'Hello'\n        NavigationContentMsgStack()\n        // 显示'propB'\n        Text(`${this.propB}`)\n        Button('Next Page', { stateEffect: true, type: ButtonType.Capsule })\n          .width('80%')\n          .height(40)\n          .margin(20)\n          .onClick(() => {\n            this.pageInfo.pushPathByName('pageThree', null);\n          })\n\n      }.width('100%').height('100%')\n    }.title('pageTwo')\n    .onBackPressed(() => {\n      this.pageInfo.pop();\n      return true;\n    })\n  }\n}\n\n@Component\nstruct PageThreeStack {\n  @Consume('pageInfo') pageInfo: NavPathStack;\n  @LocalStorageLink('propC') propC: string = 'pageThreeStack';\n\n  build() {\n    NavDestination() {\n      Column() {\n        // 显示'Hello'，当前LocalStorage实例localStorageC没有propA对应的值，使用本地默认值'Hello'\n        NavigationContentMsgStack()\n        // 显示'propC'\n        Text(`${this.propC}`)\n        Button('Next Page', { stateEffect: true, type: ButtonType.Capsule })\n          .width('80%')\n          .height(40)\n          .margin(20)\n          .onClick(() => {\n            this.pageInfo.pushPathByName('pageOne', null);\n          })\n\n      }.width('100%').height('100%')\n    }.title('pageThree')\n    .onBackPressed(() => {\n      this.pageInfo.pop();\n      return true;\n    })\n  }\n}\n\n@Component\nstruct NavigationContentMsgStack {\n  @LocalStorageLink('propA') propA: string = 'Hello';\n\n  build() {\n    Column() {\n      Text(`${this.propA}`)\n        .fontSize(30)\n        .fontWeight(FontWeight.Bold)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "V2："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "声明@ObservedV2装饰的class代替LocalStorage。其中LocalStorage的key可以用@Trace装饰的属性代替。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@ObservedV2\nexport class MyStorageA {\n  @Trace public propA: string = 'Hello';\n\n  constructor(propA?: string) {\n    this.propA = propA ? propA : this.propA;\n  }\n}\n\n@ObservedV2\nexport class MyStorageB extends MyStorageA {\n  @Trace public propB: string = 'Hello';\n\n  constructor(propB: string) {\n    super();\n    this.propB = propB;\n  }\n}\n\n@ObservedV2\nexport class MyStorageC extends MyStorageA {\n  @Trace public propC: string = 'Hello';\n\n  constructor(propC: string) {\n    super();\n    this.propC = propC;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在PageOneStack、PageTwoStack和PageThreeStack组件内分别创建MyStorageA、MyStorageB、MyStorageC的实例，并通过@Param传递给其子组件NavigationContentMsgStack，从而实现类似LocalStorage实例在子组件树上共享的能力。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Index.ets\nimport { MyStorageA, MyStorageB, MyStorageC } from './storage';\n\n@Entry\n@ComponentV2\nstruct MyNavigationTestStack {\n  pageInfo: NavPathStack = new NavPathStack();\n\n  @Builder\n  PageMap(name: string) {\n    if (name === 'pageOne') {\n      PageOneStack()\n    } else if (name === 'pageTwo') {\n      PageTwoStack()\n    } else if (name === 'pageThree') {\n      PageThreeStack()\n    }\n  }\n\n  build() {\n    Column({ space: 5 }) {\n      Navigation(this.pageInfo) {\n        Column() {\n          Button('Next Page', { stateEffect: true, type: ButtonType.Capsule })\n            .width('80%')\n            .height(40)\n            .margin(20)\n            .onClick(() => {\n              this.pageInfo.pushPath({ name: 'pageOne' }); // 将name指定的NavDestination页面信息入栈\n            })\n        }\n      }.title('NavIndex')\n      .navDestination(this.PageMap)\n      .mode(NavigationMode.Stack)\n      .borderWidth(1)\n    }\n  }\n}\n\n@ComponentV2\nstruct PageOneStack {\n  pageInfo: NavPathStack = new NavPathStack();\n  @Local storageA: MyStorageA = new MyStorageA('PropA');\n\n  build() {\n    NavDestination() {\n      Column() {\n        // 显示'PropA'\n        NavigationContentMsgStack({ storage: this.storageA })\n        // 显示'PropA'\n        Text(`${this.storageA.propA}`)\n        Button('Next Page', { stateEffect: true, type: ButtonType.Capsule })\n          .width('80%')\n          .height(40)\n          .margin(20)\n          .onClick(() => {\n            this.pageInfo.pushPathByName('pageTwo', null);\n          })\n      }.width('100%').height('100%')\n    }.title('pageOne')\n    .onBackPressed(() => {\n      this.pageInfo.pop();\n      return true;\n    })\n    .onReady((context: NavDestinationContext) => {\n      this.pageInfo = context.pathStack;\n    })\n  }\n}\n\n@ComponentV2\nstruct PageTwoStack {\n  pageInfo: NavPathStack = new NavPathStack();\n  @Local storageB: MyStorageB = new MyStorageB('PropB');\n\n  build() {\n    NavDestination() {\n      Column() {\n        // 显示'Hello'\n        NavigationContentMsgStack({ storage: this.storageB })\n        // 显示'PropB'\n        Text(`${this.storageB.propB}`)\n        Button('Next Page', { stateEffect: true, type: ButtonType.Capsule })\n          .width('80%')\n          .height(40)\n          .margin(20)\n          .onClick(() => {\n            this.pageInfo.pushPathByName('pageThree', null);\n          })\n\n      }.width('100%').height('100%')\n    }.title('pageTwo')\n    .onBackPressed(() => {\n      this.pageInfo.pop();\n      return true;\n    })\n    .onReady((context: NavDestinationContext) => {\n      this.pageInfo = context.pathStack;\n    })\n  }\n}\n\n@ComponentV2\nstruct PageThreeStack {\n  pageInfo: NavPathStack = new NavPathStack();\n  @Local storageC: MyStorageC = new MyStorageC('PropC');\n\n  build() {\n    NavDestination() {\n      Column() {\n        // 显示'Hello'\n        NavigationContentMsgStack({ storage: this.storageC })\n        // 显示'PropC'\n        Text(`${this.storageC.propC}`)\n        Button('Next Page', { stateEffect: true, type: ButtonType.Capsule })\n          .width('80%')\n          .height(40)\n          .margin(20)\n          .onClick(() => {\n            this.pageInfo.pushPathByName('pageOne', null);\n          })\n\n      }.width('100%').height('100%')\n    }.title('pageThree')\n    .onBackPressed(() => {\n      this.pageInfo.pop();\n      return true;\n    })\n    .onReady((context: NavDestinationContext) => {\n      this.pageInfo = context.pathStack;\n    })\n  }\n}\n\n@ComponentV2\nstruct NavigationContentMsgStack {\n  @Require @Param storage: MyStorageA;\n\n  build() {\n    Column() {\n      Text(`${this.storage.propA}`)\n        .fontSize(30)\n        .fontWeight(FontWeight.Bold)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "多实例场景localstorage的迁移",
      children: "多实例场景LocalStorage的迁移"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为了解决不同Ability之间数据的共享，LocalStorage支持跨Ability存取数据。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["对于该场景，V2可结合@ObservedV2+@Trace创建可观测的全局单例对象，定义Map类型存储不同Ability页面的数据，从而实现不同Ability之间数据共享。启动Ability可以参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-launch-type#specified%E5%90%AF%E5%8A%A8%E6%A8%A1%E5%BC%8F",
        children: "specified启动模式"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "主页面"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Index.ets\nimport { common, Want } from '@kit.AbilityKit';\n\n@Entry\n@Component\nstruct Index {\n  private context = this.getUIContext().getHostContext() as common.UIAbilityContext;\n\n  build() {\n    Column() {\n      Text('使用文件管理器，使用本应用打开多个PDF')\n        .fontSize($r('app.float.page_text_font_size'))\n        .fontWeight(FontWeight.Bold)\n        .alignRules({\n          center: { anchor: '__container__', align: VerticalAlign.Center },\n          middle: { anchor: '__container__', align: HorizontalAlign.Center }\n        })\n      Button('Jump to PDF_A').onClick(() => {\n        let wantInfo: Want = {\n          bundleName: 'com.samples.paradigmstatemanagement',\n          abilityName: 'PdfEntryAbility',\n          uri: 'PDF_A',\n          parameters: {\n            key: 'PDF_A',\n            value: 'PDF_A-1111111111',\n          }\n        };\n        this.context.startAbility(wantInfo);\n      })\n      Button('Jump to PDF_B').onClick(() => {\n        let wantInfo: Want = {\n          bundleName: 'com.samples.paradigmstatemanagement',\n          abilityName: 'PdfEntryAbility',\n          uri: 'PDF_B',\n          parameters: {\n            key: 'PDF_B',\n            value: 'PDF_B-22222222222',\n          }\n        };\n        this.context.startAbility(wantInfo);\n      })\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "V2:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用@ObservedV2+@Trace定义全局可观测单例，通过全局的map对象进行数据关联，这种方式需要开发者自行建立唯一的key和value关系。注意单例单独封装存放。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// model/PDFData.ets\n@ObservedV2\nexport default class PDFData {\n  // 单例实例\n  private static instance_: PDFData | null = null;\n  @Trace private data: Map<string, string> = new Map();\n  @Trace private flag: string = '';\n\n  private constructor() {\n  }\n\n  static getInstance(): PDFData {\n    if (!PDFData.instance_) {\n      PDFData.instance_ = new PDFData();\n    }\n    return PDFData.instance_;\n  }\n\n  setData(key: string, value: string) {\n    this.data.set(key, value);\n  }\n\n  getData() {\n    return this.data;\n  }\n\n  setFlage(value: string) {\n    this.flag = value;\n  }\n\n  getFlag() {\n    return this.flag;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { UIAbility, Want } from '@kit.AbilityKit';\nimport { window } from '@kit.ArkUI';\nimport PDFData from './model/PDFData';\n\nexport default class PDFAbility extends UIAbility {\n  onWindowStageCreate(windowStage: window.WindowStage): void {\n    // 用单例存储数据\n    const data = this.launchWant.parameters as Record<string, string>;\n    PDFData.getInstance().setData(data.key, data.value);\n    PDFData.getInstance().setFlage(this.launchWant.uri || '');\n    windowStage.loadContent('pages/internalmigrate/LocalStorageMultiInstance/PDF').catch();\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// PDF.ets\nimport PDFData from './model/PDFData';\n\n@Entry\n@ComponentV2\nstruct PDF {\n  @Local message: string = 'uri';\n\n  build() {\n    Column() {\n      Text(this.message)\n        .fontSize($r('app.float.page_text_font_size'))\n        .fontWeight(FontWeight.Bold)\n    }\n    .backgroundColor(Color.Pink)\n    .height('100%')\n    .width('100%')\n  }\n\n  aboutToAppear(): void {\n    // 此处只做简略显示uri，实际功能为打开渲染PDF文件\n    const key: string = PDFData.getInstance().getFlag();\n    // 根据唯一标识，从单例中获取页面对应数据\n    this.message = PDFData.getInstance().getData().get(key) || '';\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "appstorage-appstoragev2",
      children: "AppStorage->AppStorageV2"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "上一小节中，对于创建全局@ObserveV2和@Trace装饰实例的改造不适用于跨Ability的数据共享，可以使用AppStorageV2替代。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "V1:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["AppStorage与应用进程绑定，支持跨", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-ability/js-apis-app-ability-ability",
        children: "Ability"
      }), "数据共享。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在下面的示例中，使用@StorageLink，可以使得开发者本地的修改同步回AppStorage中。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// EntryAbility Index.ets\nimport { common, Want } from '@kit.AbilityKit';\n\n@Entry\n@Component\nstruct Index {\n  @StorageLink('count') count: number = 0;\n  private context = this.getUIContext().getHostContext() as common.UIAbilityContext;\n\n  build() {\n    Column() {\n      Text(`EntryAbility count: ${this.count}`)\n        .fontSize(50)\n        .onClick(() => {\n          this.count++;\n        })\n      Button('Jump to EntryAbility1').onClick(() => {\n        let wantInfo: Want = {\n          bundleName: 'com.example.myapplication', // 替换成AppScope/app.json5里的bundleName\n          abilityName: 'EntryAbility1'\n        };\n        this.context.startAbility(wantInfo);\n      })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// EntryAbility1 Index1.ets\nimport { common, Want } from '@kit.AbilityKit';\n\n@Entry\n@Component\nstruct Index1 {\n  @StorageLink('count') count: number = 0;\n  private context = this.getUIContext().getHostContext() as common.UIAbilityContext;\n\n  build() {\n    Column() {\n      Text(`EntryAbility1 count: ${this.count}`)\n        .fontSize(50)\n        .onClick(() => {\n          this.count++;\n        })\n      Button('Jump to EntryAbility').onClick(() => {\n        let wantInfo: Want = {\n          bundleName: 'com.example.myapplication', // 替换成AppScope/app.json5里的bundleName\n          abilityName: 'EntryAbility'\n        };\n        this.context.startAbility(wantInfo);\n      })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "V2:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可以使用AppStorageV2实现跨Ability共享。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如下面示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { common, Want } from '@kit.AbilityKit';\nimport { AppStorageV2 } from '@kit.ArkUI';\n\n@ObservedV2\nexport class MyStorage {\n  @Trace public count: number = 0;\n}\n\n@Entry\n@ComponentV2\nstruct Index {\n  @Local storage: MyStorage = AppStorageV2.connect(MyStorage, 'storage', () => new MyStorage())!;\n  private context = this.getUIContext().getHostContext() as common.UIAbilityContext;\n\n  build() {\n    Column() {\n      Text(`EntryAbility1 count: ${this.storage.count}`)\n        .fontSize(50)\n        .onClick(() => {\n          this.storage.count++;\n        })\n      Button('Jump to EntryAbility1').onClick(() => {\n        let wantInfo: Want = {\n          bundleName: 'com.example.myapplication', // 替换成AppScope/app.json5里的bundleName\n          abilityName: 'EntryAbility1'\n        };\n        this.context.startAbility(wantInfo);\n      })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { common, Want } from '@kit.AbilityKit';\nimport { AppStorageV2 } from '@kit.ArkUI';\n\n@ObservedV2\nexport class MyStorage {\n  @Trace public count: number = 0;\n}\n\n@Entry\n@ComponentV2\nstruct Index1 {\n  @Local storage: MyStorage = AppStorageV2.connect(MyStorage, 'storage', () => new MyStorage())!;\n  private context = this.getUIContext().getHostContext() as common.UIAbilityContext;\n\n  build() {\n    Column() {\n      Text(`EntryAbility1 count: ${this.storage.count}`)\n        .fontSize(50)\n        .onClick(() => {\n          this.storage.count++;\n        })\n      Button('Jump to EntryAbility').onClick(() => {\n        let wantInfo: Want = {\n          bundleName: 'com.example.myapplication', // 替换成AppScope/app.json5里的bundleName\n          abilityName: 'EntryAbility'\n        };\n        this.context.startAbility(wantInfo);\n      })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果开发者需要实现类似于@StorageProp的效果，希望本地的修改不同步回AppStorage，而AppStorage的变化能够通知到使用@StorageProp装饰器的组件，可以参考以下示例对比。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "V1："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// EntryAbility Index.ets\nimport { common, Want } from '@kit.AbilityKit';\n\n@Entry\n@Component\nstruct Index {\n  @StorageProp('count') count: number = 0;\n  private context = this.getUIContext().getHostContext() as common.UIAbilityContext;\n\n  build() {\n    Column() {\n      Text(`EntryAbility count: ${this.count}`)\n        .fontSize(25)\n        .onClick(() => {\n          this.count++;\n        })\n      Button('change Storage Count')\n        .onClick(() => {\n          AppStorage.setOrCreate('count', AppStorage.get<number>('count') as number + 100);\n        })\n      Button('Jump to EntryAbility1').onClick(() => {\n        let wantInfo: Want = {\n          bundleName: 'com.example.myapplication', // 替换成AppScope/app.json5里的bundleName\n          abilityName: 'EntryAbility1'\n        };\n        this.context.startAbility(wantInfo);\n      })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// EntryAbility1 Index1.ets\nimport { common, Want } from '@kit.AbilityKit';\n\n@Entry\n@Component\nstruct Index1 {\n  @StorageProp('count') count: number = 0;\n  private context = this.getUIContext().getHostContext() as common.UIAbilityContext;\n\n  build() {\n    Column() {\n      Text(`EntryAbility1 count: ${this.count}`)\n        .fontSize(50)\n        .onClick(() => {\n          this.count++;\n        })\n      Button('change Storage Count')\n        .onClick(() => {\n          AppStorage.setOrCreate('count', AppStorage.get<number>('count') as number + 100);\n        })\n      Button('Jump to EntryAbility').onClick(() => {\n        let wantInfo: Want = {\n          bundleName: 'com.example.myapplication', // 替换成AppScope/app.json5里的bundleName\n          abilityName: 'EntryAbility'\n        };\n        this.context.startAbility(wantInfo);\n      })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "V2:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者可以使用@Monitor和@Local实现类似效果，示例如下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { common, Want } from '@kit.AbilityKit';\nimport { AppStorageV2 } from '@kit.ArkUI';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst DOMAIN = 0x0000;\n\n@ObservedV2\nexport class MyStorage {\n  @Trace public count: number = 0;\n}\n\n@Entry\n@ComponentV2\nstruct Index {\n  @Local storage: MyStorage = AppStorageV2.connect(MyStorage, 'storage', () => new MyStorage())!;\n  @Local count: number = this.storage.count;\n  private context = this.getUIContext().getHostContext() as common.UIAbilityContext;\n\n  @Monitor('storage.count')\n  onCountChange(mon: IMonitor) {\n    hilog.info(DOMAIN, 'testTag', '%{public}s', `Index1 ${mon.value()?.before} to ${mon.value()?.now}`);\n    this.count = this.storage.count;\n  }\n\n  build() {\n    Column() {\n      Text(`EntryAbility1 count: ${this.count}`)\n        .fontSize(25)\n        .onClick(() => {\n          this.count++;\n        })\n      Button('change Storage Count')\n        .onClick(() => {\n          this.storage.count += 100;\n        })\n      Button('Jump to EntryAbility1').onClick(() => {\n        let wantInfo: Want = {\n          bundleName: 'com.example.myapplication', // 替换成AppScope/app.json5里的bundleName\n          abilityName: 'EntryAbility1'\n        };\n        this.context.startAbility(wantInfo);\n      })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { common, Want } from '@kit.AbilityKit';\nimport { AppStorageV2 } from '@kit.ArkUI';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst DOMAIN = 0x0000;\n\n@ObservedV2\nexport class MyStorage {\n  @Trace public count: number = 0;\n}\n\n@Entry\n@ComponentV2\nstruct Index1 {\n  @Local storage: MyStorage = AppStorageV2.connect(MyStorage, 'storage', () => new MyStorage())!;\n  @Local count: number = this.storage.count;\n  private context = this.getUIContext().getHostContext() as common.UIAbilityContext;\n\n  @Monitor('storage.count')\n  onCountChange(mon: IMonitor) {\n    hilog.info(DOMAIN, 'testTag', '%{public}s', `Index1 ${mon.value()?.before} to ${mon.value()?.now}`);\n    this.count = this.storage.count;\n  }\n\n  build() {\n    Column() {\n      Text(`EntryAbility1 count: ${this.count}`)\n        .fontSize(25)\n        .onClick(() => {\n          this.count++;\n        })\n      Button('change Storage Count')\n        .onClick(() => {\n          this.storage.count += 100;\n        })\n      Button('Jump to EntryAbility').onClick(() => {\n        let wantInfo: Want = {\n          bundleName: 'com.example.myapplication', // 替换成AppScope/app.json5里的bundleName\n          abilityName: 'EntryAbility'\n        };\n        this.context.startAbility(wantInfo);\n      })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "environment-调用ability接口直接获取系统环境变量",
      children: "Environment->调用Ability接口直接获取系统环境变量"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "V1中，开发者可以通过Environment来获取环境变量，但Environment获取的结果无法直接使用，需要配合AppStorage才能得到对应环境变量的值。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在切换V2的过程中，开发者无需再通过Environment来获取环境变量，可以直接通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiabilitycontext/js-apis-inner-application-uiabilitycontext#uiabilitycontext-1",
        children: "UIAbilityContext的config属性"
      }), "获取系统环境变量。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "V1:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以languageCode为例。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 将设备languageCode存入AppStorage中\nEnvironment.envProp('languageCode', 'en');\n\n@Entry\n@Component\nstruct Index {\n  @StorageProp('languageCode') languageCode: string = 'en';\n\n  build() {\n    Row() {\n      Column() {\n        // 输出当前设备的languageCode\n        Text(this.languageCode)\n      }\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "V2:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "封装Env类型来传递多个系统环境变量。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Env.ets\nimport { ConfigurationConstant } from '@kit.AbilityKit';\n\nexport class Env {\n  public language: string | undefined;\n  public colorMode: ConfigurationConstant.ColorMode | undefined;\n  // 字体大小缩放的倍数\n  public fontSizeScale: number | undefined;\n  // 字体粗细缩放的倍数\n  public fontWeightScale: number | undefined;\n}\n\nexport let env: Env = new Env();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在onCreate里获取需要的系统环境变量。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';\nimport { window } from '@kit.ArkUI';\nimport { env } from '../pages/Env';\n\nexport default class EntryAbility extends UIAbility {\n  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {\n    env.language = this.context.config.language;\n    env.colorMode = this.context.config.colorMode;\n    env.fontSizeScale = this.context.config.fontSizeScale;\n    env.fontWeightScale = this.context.config.fontWeightScale;\n  }\n\n  onWindowStageCreate(windowStage: window.WindowStage): void {\n    windowStage.loadContent('pages/Index');\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在页面中获取当前Env的值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Index.ets\nimport { env } from '../pages/Env';\n\n@Entry\n@ComponentV2\nstruct Index {\n  build() {\n    Row() {\n      Column() {\n        // 输出当前设备的环境变量\n        Text(`languageCode: ${env.language}`).fontSize(20)\n        Text(`colorMode: ${env.colorMode}`).fontSize(20)\n        Text(`fontSizeScale: ${env.fontSizeScale}`).fontSize(20)\n        Text(`fontWeightScale: ${env.fontWeightScale}`).fontSize(20)\n      }\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "persistentstorage-persistencev2",
      children: "PersistentStorage->PersistenceV2"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "V1中PersistentStorage提供了持久化UI数据的能力，而V2则提供了更加方便使用的PersistenceV2接口来替代它。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PersistentStorage持久化的触发时机依赖AppStorage的观察能力，且与AppStorage耦合，开发者无法自主选择写入或读取持久化数据的时机。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PersistentStorage使用序列化和反序列化，并没有传入类型，所以在持久化后，会丢失其类型，且对象的属性方法不能持久化。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对于PersistenceV2："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "与PersistenceV2关联的@ObservedV2对象，其@Trace属性的变化，会触发整个关联对象的自动持久化。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["开发者也可以调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-arkts/ui/js-apis-statemanagement/js-apis-statemanagement#save",
          children: "PersistenceV2.save()"
        }), "和", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-application-state/arkts-new-persistencev2#%E4%BD%BF%E7%94%A8globalconnect%E5%AD%98%E5%82%A8%E6%95%B0%E6%8D%AE",
          children: "PersistenceV2.globalConnect()"
        }), "来手动触发持久化写入和读取。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "V1:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class Data {\n  public name: string = 'ZhangSan';\n  public id: number = 0;\n}\n\nPersistentStorage.persistProp('numProp', 47);\nPersistentStorage.persistProp('dataProp', new Data());\n\n@Entry\n@Component\nstruct Index {\n  @StorageLink('numProp') numProp: number = 48;\n  @StorageLink('dataProp') dataProp: Data = new Data();\n\n  build() {\n    Column() {\n      // 应用退出时会保存当前结果。重新启动后，会显示上一次的保存结果\n      Text(`numProp: ${this.numProp}`)\n        .onClick(() => {\n          this.numProp += 1;\n        })\n        .fontSize(30)\n\n      // 应用退出时会保存当前结果。重新启动后，会显示上一次的保存结果\n      Text(`dataProp.name: ${this.dataProp.name}`)\n        .onClick(() => {\n          this.dataProp.name += 'a';\n        })\n        .fontSize(30)\n      // 应用退出时会保存当前结果。重新启动后，会显示上一次的保存结果\n      Text(`dataProp.id: ${this.dataProp.id}`)\n        .onClick(() => {\n          this.dataProp.id += 1;\n        })\n        .fontSize(30)\n\n    }\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "V2:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下面的案例展示了："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "将PersistentStorage的持久化数据迁移到V2的PersistenceV2中。V2对被@Trace标记的数据可以自动持久化，对于非@Trace数据，需要手动调用save进行持久化。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "示例中的move函数和需要显示的组件放在了一个ets中，开发者可以定义自己的move函数，并放入合适的位置进行统一迁移操作。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 迁移到globalConnect\nimport { PersistenceV2, Type } from '@kit.ArkUI';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst DOMAIN = 0x0000;\n// 接受序列化失败的回调\nPersistenceV2.notifyOnError((key: string, reason: string, msg: string) => {\n  hilog.error(DOMAIN, 'testTag', '%{public}s', `error key: ${key}, reason: ${reason}, message: ${msg}`);\n});\n\nclass Data {\n  public name: string = 'ZhangSan';\n  public id: number = 0;\n}\n\n@ObservedV2\nclass V2Data {\n  @Trace public name: string = '';\n  @Trace public id: number = 1;\n}\n\n@ObservedV2\nexport class Sample {\n  // 对于复杂对象需要@Type修饰，确保序列化成功\n  @Type(V2Data)\n  @Trace public num: number = 1;\n  @Trace public V2: V2Data = new V2Data();\n}\n\n// 用于判断是否完成数据迁移的辅助数据\n@ObservedV2\nclass StorageState {\n  @Trace public isCompleteMoving: boolean = false;\n}\n\nfunction move() {\n  let movingState = PersistenceV2.globalConnect({ type: StorageState, defaultCreator: () => new StorageState() })!;\n  if (!movingState.isCompleteMoving) {\n    PersistentStorage.persistProp('numProp', 47);\n    PersistentStorage.persistProp('dataProp', new Data());\n    let num = AppStorage.get<number>('numProp')!;\n    let v1Data = AppStorage.get<Data>('dataProp')!;\n    PersistentStorage.deleteProp('numProp');\n    PersistentStorage.deleteProp('dataProp');\n\n    // V2创建对应数据\n    let migrate = PersistenceV2.globalConnect({\n      type: Sample,\n      key: 'connect2',\n      defaultCreator: () => new Sample()\n    })!; // 使用默认构造函数也可以\n    // 赋值数据，@Trace修饰的会自动保存，对于非@Trace对象，也可以调用save保存，如：PersistenceV2.save('connect2');\n    migrate.num = num;\n    migrate.V2.name = v1Data.name;\n    migrate.V2.id = v1Data.id;\n\n    // 将迁移标志设置为true\n    movingState.isCompleteMoving = true;\n  }\n}\n\nmove();\n\n@Entry\n@ComponentV2\nstruct Page1 {\n  @Local refresh: number = 0;\n  // 使用key:connect2存入数据\n  @Local p: Sample =\n    PersistenceV2.globalConnect({ type: Sample, key: 'connect2', defaultCreator: () => new Sample() })!;\n\n  build() {\n    Column({ space: 5 }) {\n      // 应用退出时会保存当前结果。重新启动后，会显示上一次的保存结果\n      Text(`numProp: ${this.p.num}`)\n        .onClick(() => {\n          this.p.num += 1;\n        })\n        .fontSize(30)\n\n      // 应用退出时会保存当前结果。重新启动后，会显示上一次的保存结果\n      Text(`dataProp.name: ${this.p.V2.name}`)\n        .onClick(() => {\n          this.p.V2.name += 'a';\n        })\n        .fontSize(30)\n      // 应用退出时会保存当前结果。重新启动后，会显示上一次的保存结果\n      Text(`dataProp.id: ${this.p.V2.id}`)\n        .onClick(() => {\n          this.p.V2.id += 1;\n        })\n        .fontSize(30)\n    }\n    .width('100%')\n  }\n}\n"
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