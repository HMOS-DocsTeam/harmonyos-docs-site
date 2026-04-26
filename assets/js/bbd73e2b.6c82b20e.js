"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["183421"], {
98376(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_arkts_ui_js_apis_statemanagement_js_apis_statemanagement_md_bbd_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-arkts-ui-js-apis-statemanagement-js-apis-statemanagement-md-bbd.json
var site_docs_ref_arkui_api_arkui_arkts_ui_js_apis_statemanagement_js_apis_statemanagement_md_bbd_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-arkts/ui/js-apis-statemanagement/js-apis-statemanagement","title":"@ohos.arkui.StateManagement (状态管理)","description":"状态管理模块提供了应用程序的数据存储能力、持久化数据管理能力、UIAbility数据存储能力和应用程序需要的环境状态、工具。","source":"@site/docs-ref/arkui-api/arkui-arkts/ui/js-apis-statemanagement/js-apis-statemanagement.md","sourceDirName":"arkui-api/arkui-arkts/ui/js-apis-statemanagement","slug":"/arkui-api/arkui-arkts/ui/js-apis-statemanagement/js-apis-statemanagement","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-arkts/ui/js-apis-statemanagement/js-apis-statemanagement","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":14,"frontMatter":{"title":"@ohos.arkui.StateManagement (状态管理)","sidebar_position":14,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-statemanagement","kit":"应用框架","last_updated":"2026-04-22","slug":"js-apis-statemanagement"},"sidebar":"ref","previous":{"title":"@ohos.arkui.uiExtension (uiExtension)","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uiextension/js-apis-arkui-uiextension"},"next":{"title":"@ohos.curves (插值计算)","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-arkts/ui/js-apis-curve/js-apis-curve"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-arkts/ui/js-apis-statemanagement/js-apis-statemanagement.md


const frontMatter = {
	title: '@ohos.arkui.StateManagement (状态管理)',
	sidebar_position: 14,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-statemanagement',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'js-apis-statemanagement'
};
const contentTitle = '@ohos.arkui.StateManagement (状态管理)';

const assets = {

};



const toc = [{
  "value": "导入模块",
  "id": "导入模块",
  "level": 2
}, {
  "value": "AppStorageV2",
  "id": "appstoragev2",
  "level": 2
}, {
  "value": "connect",
  "id": "connect",
  "level": 3
}, {
  "value": "remove",
  "id": "remove",
  "level": 3
}, {
  "value": "keys",
  "id": "keys",
  "level": 3
}, {
  "value": "PersistenceV2",
  "id": "persistencev2",
  "level": 2
}, {
  "value": "globalConnect18+",
  "id": "globalconnect18",
  "level": 3
}, {
  "value": "globalConnect23+",
  "id": "globalconnect23",
  "level": 3
}, {
  "value": "save",
  "id": "save",
  "level": 3
}, {
  "value": "notifyOnError",
  "id": "notifyonerror",
  "level": 3
}, {
  "value": "ConnectOptions18+",
  "id": "connectoptions18",
  "level": 2
}, {
  "value": "ConnectOptionsCollections23+",
  "id": "connectoptionscollections23",
  "level": 2
}, {
  "value": "CollectionType23+",
  "id": "collectiontype23",
  "level": 2
}, {
  "value": "ObservedResult23+",
  "id": "observedresult23",
  "level": 2
}, {
  "value": "DecoratorInfo23+",
  "id": "decoratorinfo23",
  "level": 2
}, {
  "value": "ElementInfo23+",
  "id": "elementinfo23",
  "level": 2
}, {
  "value": "UIUtils",
  "id": "uiutils",
  "level": 2
}, {
  "value": "getTarget",
  "id": "gettarget",
  "level": 3
}, {
  "value": "getLifecycle23+",
  "id": "getlifecycle23",
  "level": 3
}, {
  "value": "canBeObserved23+",
  "id": "canbeobserved23",
  "level": 3
}, {
  "value": "makeObserved",
  "id": "makeobserved",
  "level": 3
}, {
  "value": "enableV2Compatibility19+",
  "id": "enablev2compatibility19",
  "level": 3
}, {
  "value": "makeV1Observed19+",
  "id": "makev1observed19",
  "level": 3
}, {
  "value": "makeBinding20+",
  "id": "makebinding20",
  "level": 3
}, {
  "value": "makeBinding20+",
  "id": "makebinding20-1",
  "level": 3
}, {
  "value": "addMonitor20+",
  "id": "addmonitor20",
  "level": 3
}, {
  "value": "clearMonitor20+",
  "id": "clearmonitor20",
  "level": 3
}, {
  "value": "applySync22+",
  "id": "applysync22",
  "level": 3
}, {
  "value": "flushUpdates22+",
  "id": "flushupdates22",
  "level": 3
}, {
  "value": "flushUIUpdates22+",
  "id": "flushuiupdates22",
  "level": 3
}, {
  "value": "TaskCallback22+",
  "id": "taskcallback22",
  "level": 2
}, {
  "value": "MonitorOptions20+",
  "id": "monitoroptions20",
  "level": 2
}, {
  "value": "MonitorCallback20+",
  "id": "monitorcallback20",
  "level": 2
}, {
  "value": "StorageDefaultCreator&lt;T&gt;",
  "id": "storagedefaultcreatort",
  "level": 2
}, {
  "value": "TypeConstructorWithArgs&lt;T&gt;",
  "id": "typeconstructorwithargst",
  "level": 2
}, {
  "value": "new",
  "id": "new",
  "level": 3
}, {
  "value": "PersistenceErrorCallback",
  "id": "persistenceerrorcallback",
  "level": 2
}, {
  "value": "TypeConstructor&lt;T&gt;",
  "id": "typeconstructort",
  "level": 2
}, {
  "value": "new",
  "id": "new-1",
  "level": 3
}, {
  "value": "TypeDecorator",
  "id": "typedecorator",
  "level": 2
}, {
  "value": "GetterCallback20+",
  "id": "gettercallback20",
  "level": 2
}, {
  "value": "SetterCallback20+",
  "id": "settercallback20",
  "level": 2
}, {
  "value": "Binding&lt;T&gt;20+",
  "id": "bindingt20",
  "level": 2
}, {
  "value": "value20+",
  "id": "value20",
  "level": 3
}, {
  "value": "MutableBinding&lt;T&gt;20+",
  "id": "mutablebindingt20",
  "level": 2
}, {
  "value": "value20+",
  "id": "value20-1",
  "level": 3
}, {
  "value": "value20+",
  "id": "value20-2",
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
    s: "s",
    strong: "strong",
    t: "t",
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
        id: "ohosarkuistatemanagement-状态管理",
        children: "@ohos.arkui.StateManagement (状态管理)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "状态管理模块提供了应用程序的数据存储能力、持久化数据管理能力、UIAbility数据存储能力和应用程序需要的环境状态、工具。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(351228)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本模块首批接口从API version 12开始支持，后续版本的新增接口，采用上角标单独标记接口的起始版本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本文中T和S的含义如下："
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
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Class，number，boolean，string和这些类型的数组形式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "S"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number，boolean，string。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "导入模块",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { AppStorageV2, PersistenceV2, UIUtils } from '@kit.ArkUI';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "appstoragev2",
      children: "AppStorageV2"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["AppStorageV2具体UI使用说明，详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-application-state/arkts-new-appstoragev2",
        children: "AppStorageV2(应用全局的UI状态存储)"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "connect",
      children: "connect"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "static connect<T extends object>("
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type: TypeConstructorWithArgs<T>,"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "keyOrDefaultCreator?: string | StorageDefaultCreator<T>,"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "defaultCreator?: StorageDefaultCreator<T>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "): T | undefined"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["将键值对数据储存在应用内存中。如果给定的key已经存在于", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-application-state/arkts-new-appstoragev2",
        children: "AppStorageV2"
      }), "中，返回对应的值；否则，通过获取默认值的构造器构造默认值，并返回。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
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
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#typeconstructorwithargst",
              children: "TypeConstructorWithArgs<T>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定的类型，若未指定key，则使用type的name作为key。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "keyOrDefaultCreator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#storagedefaultcreatort",
              children: "StorageDefaultCreator<T>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "defaultCreator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "StorageDefaultCreator<T>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取默认值的构造器。默认值为undefined。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(631272)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1、若未指定key，使用第二个参数作为默认构造器；否则使用第三个参数作为默认构造器（第二个参数非法也使用第三个参数作为默认构造器）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "2、确保数据已经存储在AppStorageV2中，可省略默认构造器，获取存储的数据；否则必须指定默认构造器，不指定将导致应用异常。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "3、同一个key，connect不同类型的数据会导致应用异常，应用需要确保类型匹配。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "4、key建议使用有意义的值，长度不超过255，使用非法字符或空字符的行为是未定义的。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
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
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { AppStorageV2 } from '@kit.ArkUI';\n\n@ObservedV2\nclass SampleClass {\n  @Trace p: number = 0;\n}\n\n// 将key为SampleClass、value为new SampleClass()对象的键值对存储到内存中，并赋值给as1\nconst as1: SampleClass | undefined = AppStorageV2.connect(SampleClass, () => new SampleClass());\n\n// 将key为key_as2、value为new SampleClass()对象的键值对存储到内存中，并赋值给as2\nconst as2: SampleClass = AppStorageV2.connect(SampleClass, 'key_as2', () => new SampleClass())!;\n\n// key为SampleClass已经在AppStorageV2中，将key为SampleClass的值返回给as3\nconst as3: SampleClass = AppStorageV2.connect(SampleClass) as SampleClass;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "remove",
      children: "remove"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "static remove<T>(keyOrType: string | TypeConstructorWithArgs<T>): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["将指定的键值对数据从", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-application-state/arkts-new-appstoragev2",
        children: "AppStorageV2"
      }), "里面删除。如果指定的键值不存在于AppStorageV2中，将删除失败。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
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
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "keyOrType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#typeconstructorwithargst",
              children: "TypeConstructorWithArgs"
            }), (0,jsx_runtime.jsx)(_components.t, {})]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(26456)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "删除AppStorageV2中不存在的key会报警告。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 假设AppStorageV2中存在key为key_as2的键，从AppStorageV2中删除该键值对数据\nAppStorageV2.remove('key_as2');\n\n// 假设AppStorageV2中存在key为SampleClass的键，从AppStorageV2中删除该键值对数据\nAppStorageV2.remove(SampleClass);\n\n// 假设AppStorageV2中不存在key为key_as1的键，报警告\nAppStorageV2.remove('key_as1');\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "keys",
      children: "keys"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "static keys(): Array<string>"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["获取", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-application-state/arkts-new-appstoragev2",
        children: "AppStorageV2"
      }), "中的所有key。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
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
            children: "Array<string>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "所有AppStorageV2中的key。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(551365)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "key在Array中的顺序是无序的，与key插入到AppStorageV2中的顺序无关。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 假设AppStorageV2中存在两个key（key_as1、key_as2），返回[key_as1、key_as2]赋值给keys\nconst keys: Array<string> = AppStorageV2.keys();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "persistencev2",
      children: "PersistenceV2"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["继承自", (0,jsx_runtime.jsx)(_components.a, {
        href: "#appstoragev2",
        children: "AppStorageV2"
      }), "，PersistenceV2具体UI使用说明，详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-application-state/arkts-new-persistencev2",
        children: "PersistenceV2(持久化存储UI状态)"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "globalconnect18",
      children: "globalConnect18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "static globalConnect<T extends object>(type: ConnectOptions<T>): T | undefined"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["将键值对数据储存在应用磁盘中。如果给定的key已经存在于", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-application-state/arkts-new-persistencev2",
        children: "PersistenceV2"
      }), "中，返回对应的值；否则，会通过获取默认值的构造器构造默认值，并返回。如果globalConnect的是", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-data-object-state/arkts-new-observedv2-and-trace",
        children: "@ObservedV2"
      }), "对象，该对象", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-data-object-state/arkts-new-observedv2-and-trace",
        children: "@Trace"
      }), "属性的变化，会触发整个关联对象的自动刷新；非@Trace属性变化则不会，如有必要，可调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#save",
        children: "PersistenceV2.save"
      }), "接口手动存储。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 18开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
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
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#connectoptions18",
              children: "ConnectOptions<T>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "传入的connect参数，详细说明见ConnectOptions参数说明。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
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
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(892500)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1、若未指定key，使用第二个参数作为默认构造器；否则使用第三个参数作为默认构造器（第二个参数非法也使用第三个参数作为默认构造器）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "2、确保数据已经存储在PersistenceV2中，可省略默认构造器，获取存储的数据；否则必须指定默认构造器，不指定将导致应用异常。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "3、同一个key，globalConnect不同类型的数据会导致应用异常，应用需要确保类型匹配。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "4、key建议使用有意义的值，可由字母、数字、下划线组成，长度不超过255，使用非法字符或空字符的行为是未定义的。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["5、关联", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-observed-and-objectlink",
        children: "@Observed"
      }), "对象时，因为该类型的name属性未定义，需要指定key或者自定义name属性。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "6、数据的存储路径为应用级别，不同module使用相同的key和相同的加密分区进行globalConnect，存储的数据副本应用仅有一份。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "7、globalConnect使用同一个key但设置了不同的加密级别，数据为第一个使用globalConnect的加密级别，并且PersistenceV2中的数据也会存入最先使用key的加密级别。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "8、connect和globalConnect不建议混用，因为数据副本路径不同，如果混用，则key不可以一样，否则会crash。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["9、EL5加密要想生效，需要开发者在module.json中配置字段ohos.permission.PROTECT_SCREEN_LOCK_DATA，使用说明见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions",
        children: "声明权限"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "仅供开发者了解globalConnect用法，完整使用需开发者自己写出@Entry组件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { PersistenceV2, Type } from '@kit.ArkUI';\nimport { contextConstant } from '@kit.AbilityKit';\n\n@ObservedV2\nclass SampleChild {\n  @Trace childId: number = 0;\n  groupId: number = 1;\n}\n\n@ObservedV2\nexport class Sample {\n  // 对于复杂对象需要@Type修饰，确保序列化成功\n  @Type(SampleChild)\n  @Trace father: SampleChild = new SampleChild();\n}\n\n// key不传入尝试用为type的name作为key，加密参数不传入默认加密等级为EL2\nconst p: Sample = PersistenceV2.globalConnect({ type: Sample, defaultCreator: () => new Sample() })!;\n\n// 使用key:global1连接，传入加密等级为EL1\nconst p1: Sample = PersistenceV2.globalConnect({\n  type: Sample,\n  key: 'global1',\n  defaultCreator: () => new Sample(),\n  areaMode: contextConstant.AreaMode.EL1\n})!;\n\n// 使用key:global2连接，使用构造函数形式，加密参数不传入默认加密等级为EL2\nconst p2: Sample = PersistenceV2.globalConnect({ type: Sample, key: 'global2', defaultCreator: () => new Sample() })!;\n\n// 使用key:global3连接，直接写加密数值，范围只能在0-4，否则运行会crash,例如加密设置为EL3\nconst p3: Sample = PersistenceV2.globalConnect({\n  type: Sample,\n  key: 'global3',\n  defaultCreator: () => new Sample(),\n  areaMode: 3\n})!;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "globalconnect23",
      children: "globalConnect23+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "static globalConnect<T extends CollectionType<S>, S extends object>("
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type: ConnectOptionsCollections<T, S> | ConnectOptions<T>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "): T | undefined"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["将键值对数据储存在应用磁盘中。支持集合类型", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-application-state/arkts-new-persistencev2#globalconnect%E6%94%AF%E6%8C%81%E9%9B%86%E5%90%88%E7%9A%84%E7%B1%BB%E5%9E%8B",
        children: "Array，Map，Set，Date，collections.Array, collections.Map, collections.Set类型的持久化"
      }), "。注意在持久化Array<ClassA>类型的数据时，需要调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#makeobserved",
        children: "makeObserved"
      }), "使返回的对象被观察到。不支持多个嵌套集合，例如不支持Array<Array<ClassA>>的持久化。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 23开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
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
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#connectoptionscollections23",
              children: "ConnectOptionsCollections<T, S>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#connectoptions18",
              children: "ConnectOptions<T>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当开发者在globalConnect中使用defaultSubCreator选项时，必须要提供defaultCreator。且defaultSubCreator函数的返回类型必须与defaultCreator返回的集合项类型相同。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当globalConnect持久化Array<ClassA>类型的数据时，开发者需要使用defaultSubCreator选项去告诉状态管理框架创建ClassA类的一个实例。如下是globalConnect持久化Array<ClassA>类型的数据的示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class ClassA {\n  propA: number;\n  // ...\n}\n\n@ComponentV2\nstruct Page1 {\n  // 顶层持久化数据类型为Array<ClassA>\n  @Local arr: Array<ClassA> = PersistenceV2.globalConnect({\n    type: Array<ClassA>,\n    defaultCreator: () => UIUtils.makeObserved(new Array<ClassA>()),\n    // 添加defaultSubCreator，通知状态管理框架如何创建ClassA对象\n    // 另外持久化后的数据需要加上makeObserved，否则会持久化失败\n    defaultSubCreator: () => UIUtils.makeObserved(new ClassA())\n  })!\n  // ...\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
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
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如下展示globalConnect持久化Map类型的示例代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { PersistenceV2, ConnectOptions } from '@kit.ArkUI';\n\n@Entry\n@ComponentV2\nstruct Page1 {\n  // globalConnect支持持久化Map类型的数据\n  @Local map: Map<number, number> = PersistenceV2.globalConnect({\n    type: Map<number, number>, defaultCreator: () => new Map<number, number>()\n  })!\n  output: string[] = [];\n\n  // 启动应用，第一次进入，展示restored Map.size=0, map.get(0)=undefined, map.get(1)=undefined, map.get(2)=undefined\n  // 关闭应用，第二次进入，展示restored Map.size=1, map.get(0)=0, map.get(1)=undefined, map.get(2)=undefined\n  // 关闭应用，第三次进入，展示restored Map.size=2, map.get(0)=0, map.get(1)=1, map.get(2)=undefined\n  // 关闭应用，第四次进入，展示restored Map.size=3, map.get(0)=0, map.get(1)=1, map.get(2)=2\n  aboutToAppear(): void {\n    const restoredMapSize = this.map.size;\n    this.output.push(`restored Map.size=${restoredMapSize}, map.get(0)=${this.map.get(0)}, map.get(1)=${this.map.get(1)}, map.get(2)=${this.map.get(2)}`);\n    this.map.set(restoredMapSize, restoredMapSize);\n    // 需要手工持久化\n    PersistenceV2.save('Map');\n  }\n\n  build() {\n    Column() {\n      Row() {\n        Text(this.output.join('\\n\\n'))\n          .fontSize(24)\n      }\n    }\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "save",
      children: "save"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "static save<T>(keyOrType: string | TypeConstructorWithArgs<T>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将指定的键值对数据持久化一次。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
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
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "keyOrType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#typeconstructorwithargst",
              children: "TypeConstructorWithArgs<T>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(854237)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["由于非", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-data-object-state/arkts-new-observedv2-and-trace",
        children: "@Trace"
      }), "的数据改变不会触发", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-application-state/arkts-new-persistencev2",
        children: "PersistenceV2"
      }), "的自动持久化，如有必要，可调用该接口持久化对应key的数据。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "手动持久化当前内存中不处于connect状态的key是无意义的。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@ObservedV2\nclass SampleClass {\n  @Trace p: number = 0;\n}\n\n// 假设PersistenceV2中存在key为key_as2的键，持久化该键值对数据\nPersistenceV2.save('key_as2');\n\n// 假设PersistenceV2中存在key为SampleClass的键，持久化该键值对数据\nPersistenceV2.save(SampleClass);\n\n// 假设PersistenceV2中不存在key为key_as1的键，无意义的操作\nPersistenceV2.save('key_as1');\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "notifyonerror",
      children: "notifyOnError"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "static notifyOnError(callback: PersistenceErrorCallback | undefined): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在持久化失败时调用。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
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
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#persistenceerrorcallback",
              children: "PersistenceErrorCallback"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 持久化失败时调用\nPersistenceV2.notifyOnError((key: string, reason: string, msg: string) => {\n  console.error(`error key: ${key}, reason: ${reason}, message: ${msg}`);\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "connectoptions18",
      children: "ConnectOptions18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "globalConnect参数类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 18开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#typeconstructorwithargst",
              children: "TypeConstructorWithArgs<T>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定的类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "key"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "传入的key，不传则使用type的名字作为key。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "defaultCreator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#storagedefaultcreatort",
              children: "StorageDefaultCreator<T>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认数据的构造器，建议传递，如果globalConnect是第一次连接key，不传会报错。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "areaMode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-contextconstant/js-apis-app-ability-contextconstant#areamode",
              children: "contextConstant.AreaMode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["加密级别：EL1-EL5，详见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ability-kit/stage-model-development/stage-model-application-components/application-context-stage#%E8%8E%B7%E5%8F%96%E5%92%8C%E4%BF%AE%E6%94%B9%E5%8A%A0%E5%AF%86%E5%88%86%E5%8C%BA",
              children: "加密级别"
            }), "，对应数值：0-4，不传时默认为EL2，不同加密级别对应不同的加密分区，即不同的存储路径，传入的加密等级数值不在0-4会直接运行crash。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "connectoptionscollections23",
      children: "ConnectOptionsCollections23+"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "#globalconnect23",
        children: "globalConnect"
      }), "接口参数类型，ConnectOptionsCollections继承自", (0,jsx_runtime.jsx)(_components.a, {
        href: "#connectoptions18",
        children: "ConnectOptions"
      }), "。当开发者需要持久化容器类型数据（如Array", (0,jsx_runtime.jsx)(_components.s, {
        children: "）时，需要使用ConnectOptionsCollections入参。"
      })]
    }), (0,jsx_runtime.jsxs)(_components.s, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "元服务API："
          })
        }), " 从API version 23开始，该接口支持在元服务中使用。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "系统能力："
          })
        }), " SystemCapability.ArkUI.ArkUI.Full"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "模型约束："
          })
        }), " 此接口仅可在Stage模型下使用。"]
      }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "名称"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "类型"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "只读"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "可选"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "说明"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "defaultCreator"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.a, {
                href: "#storagedefaultcreatort",
                children: "StorageDefaultCreator<T>"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "否"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "是"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "用于持久化容器类型数据，当提供默认defaultSubCreator时，则需要同时提供默认创建器defaultCreator，不提供默认创建器，会导致无法持久化容器类型数据。集合项类型S必须与defaultSubCreator的返回类型相同。如果提供defaultSubCreator，没有提供defaultCreator，会导致持久化失败。"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "defaultSubCreator"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.a, {
                href: "#storagedefaultcreatort",
                children: "StorageDefaultCreator<S>"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "否"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "是"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "使用该集合项默认构造函数，用于持久化容器类数据。如果defaultSubCreator返回的是undefined或null，会导致持久化失败。 当持久化用户自定义class类集合（如Array<ClassA>）时，defaultCreator中的泛型类型T为Array<ClassA>，则defaultSubCreator中的泛型类型S为ClassA。"
            })]
          })]
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["如下展示StorageDefaultCreator<T>和StorageDefaultCreator", (0,jsx_runtime.jsx)(_components.s, {
          children: "示例："
        })]
      }), (0,jsx_runtime.jsxs)(_components.s, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "示例："
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "class ClassA {\n  propA: number;\n  // ...\n}\n\n@ComponentV2\nstruct Page {\n  // StorageDefaultCreator<T>默认创建器为`() => UIUtils.makeObserved(new Array<ClassA>())`, 其中`T`的类型是指`Array<ClassA>`\n  // StorageDefaultCreator<S> 默认创建器为`() =>UIUtils.makeObserved(new ClassA())`，其中，`S`的类型是指`ClassA`\n  @Local arr: Array<ClassA> = PersistenceV2.globalConnect({\n    type: Array<ClassA>,\n    defaultCreator: () => UIUtils.makeObserved(new Array<ClassA>()),\n    // 添加defaultSubCreator，通知状态管理框架如何创建ClassA对象\n    // 另外持久化后的数据需要加上makeObserved，否则会持久化失败\n    defaultSubCreator: () => UIUtils.makeObserved(new ClassA())\n  })!\n  // ...\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["当StorageDefaultCreator", (0,jsx_runtime.jsxs)(_components.s, {
            children: ["返回值为undefined或null时，持久化会失败。当StorageDefaultCreator", (0,jsx_runtime.jsxs)(_components.s, {
              children: ["直接设置为undefined或null时,状态管理框架会按照原始的类型（如Object类型）进行持久化，但是会丢失class对象中的方法。在如下示例中，StorageDefaultCreator", (0,jsx_runtime.jsx)(_components.s, {
                children: "直接被设置为undefined或null时，持久化过程中ClassA对象中的report方法将被丢失。"
              })]
            })]
          })]
        }), (0,jsx_runtime.jsx)(_components.s, {
          children: (0,jsx_runtime.jsx)(_components.s, {
            children: (0,jsx_runtime.jsxs)(_components.s, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.pre, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "import { PersistenceV2, UIUtils } from '@kit.ArkUI';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\n@ObservedV2\nclass ClassA {\n  @Trace public propA: string = '';\n  @Trace public propB: string = '';\n\n  public report(): string {\n    return `${this.propA} - ${this.propB}`;\n  }\n}\n\n@Entry\n@ComponentV2\nstruct Comp {\n  // 持久化顶层数据类型为`Array<ClassA>`的数据。\n  @Local arr: Array<ClassA> = PersistenceV2.globalConnect({\n    type: Array<ClassA>,\n    defaultCreator: () => UIUtils.makeObserved(new Array<ClassA>()),\n    // defaultSubCreator的返回的值被设置为`undefined`或`null` (defaultSubCreator: () => undefined)，持久化失败。\n    // defaultSubCreator被直接设置为`undefined`或`null` (defaultSubCreator: undefined))，持久化会丢失`ClassA`中的方法。\n    defaultSubCreator: undefined\n  })!;\n\n  aboutToAppear(): void {\n    if (this.arr.length) {\n      // 步骤3：再次进入应用，持久化过程中丢失`ClassA中`的方法，当调用`ClassA`对象中的`report`方法，会报`undefined is not callable`的错误。\n      hilog.info(0xFF00, 'testTag', '%{public}s', this.arr[0].report());\n    }\n  }\n  build() {\n    Column() {\n      Repeat(this.arr)\n        .each(ri => {\n          Row() {\n            Text(`propA '${ri.item.propA}'`)\n            Text(`propB '${ri.item.propB}'`)\n            Text(`report?.() '${ri.item.report?.()}'`)\n          }\n        })\n      // 步骤1：点击'add item'，显示`propA 'a' propB 'b'report?.'a' - 'b'`。\n      // 步骤2：关闭应用。\n      Button('add item')\n        .onClick(() => {\n          let temp: ClassA = new ClassA();\n          temp.propA = 'a';\n          temp.propB = 'b';\n          this.arr.push(temp);\n        })\n    }\n  }\n}\n"
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                id: "collectiontype23",
                children: "CollectionType23+"
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["type CollectionType", (0,jsx_runtime.jsxs)(_components.s, {
                  children: [" = Array", (0,jsx_runtime.jsx)(_components.s, {
                    children: " | Map<string | number, S> |"
                  })]
                })]
              }), (0,jsx_runtime.jsx)(_components.s, {
                children: (0,jsx_runtime.jsxs)(_components.s, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                    children: ["Set", (0,jsx_runtime.jsxs)(_components.s, {
                      children: [" | collections.Array", (0,jsx_runtime.jsxs)(_components.s, {
                        children: [" | collections.Map<string | number, S> | collections.Set", (0,jsx_runtime.jsx)(_components.s, {})]
                      })]
                    })]
                  }), (0,jsx_runtime.jsx)(_components.s, {
                    children: (0,jsx_runtime.jsx)(_components.s, {
                      children: (0,jsx_runtime.jsxs)(_components.s, {
                        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "globalConnect的入参泛型，用于定义globalConnect支持的持久化集合数据类型。"
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "元服务API："
                            })
                          }), " 从API version 23开始，该接口支持在元服务中使用。"]
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "系统能力："
                            })
                          }), " SystemCapability.ArkUI.ArkUI.Full"]
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "模型约束："
                            })
                          }), " 此接口仅可在Stage模型下使用。"]
                        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
                                children: "Array<S>"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "表示值类型为Array类型。"
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "Map<string"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "number, S>"
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "Set<S>"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "表示值类型为Set类型。"
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsxs)(_components.td, {
                                children: [(0,jsx_runtime.jsx)(_components.a, {
                                  href: "/ref/arkts-api/arkts-arkts/js-apis-arkts-collections/arkts-apis-arkts-collections-array/arkts-apis-arkts-collections-array",
                                  children: "collections.Array"
                                }), (0,jsx_runtime.jsx)(_components.s, {})]
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "表示值类型为collections.Array类型。"
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsxs)(_components.td, {
                                children: [(0,jsx_runtime.jsx)(_components.a, {
                                  href: "/ref/arkts-api/arkts-arkts/js-apis-arkts-collections/arkts-apis-arkts-collections-map/arkts-apis-arkts-collections-map",
                                  children: "collections.Map"
                                }), "<string"]
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "number, S>"
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsxs)(_components.td, {
                                children: [(0,jsx_runtime.jsx)(_components.a, {
                                  href: "/ref/arkts-api/arkts-arkts/js-apis-arkts-collections/arkts-apis-arkts-collections-set/arkts-apis-arkts-collections-set",
                                  children: "collections.Set"
                                }), (0,jsx_runtime.jsx)(_components.s, {})]
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "表示值类型为collections.Set类型。"
                              })]
                            })]
                          })]
                        }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                          id: "observedresult23",
                          children: "ObservedResult23+"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "对象是否可被观察的结果。"
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "元服务API："
                            })
                          }), " 从API version 23开始，该接口支持在元服务中使用。"]
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
                          }), " SystemCapability.ArkUI.ArkUI.Full"]
                        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                          children: [(0,jsx_runtime.jsx)(_components.thead, {
                            children: (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.th, {
                                children: "名称"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "类型"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "只读"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "可选"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "说明"
                              })]
                            })
                          }), (0,jsx_runtime.jsxs)(_components.tbody, {
                            children: [(0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "isObserved"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "boolean"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "否"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "否"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "对象是否可被观察。  true：表示是可被观察对象。  false：表示不是可被观察对象。"
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "reason"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "string"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "否"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "否"
                              }), (0,jsx_runtime.jsxs)(_components.td, {
                                children: ["对象是否可被观察的原因。  不可被观察原因：对象本身是不可被观察的。  可被观察原因或使用场景：  1. V1对象被", (0,jsx_runtime.jsx)(_components.a, {
                                  href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-observed-and-objectlink",
                                  children: "@Observed"
                                }), "装饰器装饰或对象是被", (0,jsx_runtime.jsx)(_components.a, {
                                  href: "#makev1observed19",
                                  children: "makeV1Observed"
                                }), "方法转换的。  2. V1对象被", (0,jsx_runtime.jsx)(_components.a, {
                                  href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-observed-and-objectlink",
                                  children: "@Observed"
                                }), "装饰器装饰或对象是被", (0,jsx_runtime.jsx)(_components.a, {
                                  href: "#makev1observed19",
                                  children: "makeV1Observed"
                                }), "方法转换的，但对象没有被UI组件使用。  3. V1对象被", (0,jsx_runtime.jsx)(_components.a, {
                                  href: "#enablev2compatibility19",
                                  children: "enableV2Compatibility"
                                }), "方法转换后传入V2组件。  4. V1对象被", (0,jsx_runtime.jsx)(_components.a, {
                                  href: "#enablev2compatibility19",
                                  children: "enableV2Compatibility"
                                }), "方法转换后传入V2组件，但没有被V2组件使用。  5. V2对象是被", (0,jsx_runtime.jsx)(_components.a, {
                                  href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-data-object-state/arkts-new-observedv2-and-trace",
                                  children: "@ObservedV2/@Trace"
                                }), "装饰的。  6. V2对象是被", (0,jsx_runtime.jsx)(_components.a, {
                                  href: "#makeobserved",
                                  children: "makeObserved"
                                }), "方法转换的。  7. V2对象属于Array/Map/Set/Date类型。  8. V2对象是被", (0,jsx_runtime.jsx)(_components.a, {
                                  href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-data-object-state/arkts-new-observedv2-and-trace",
                                  children: "@ObservedV2/@Trace"
                                }), "装饰的，但对象没有被UI组件使用。  9. V2对象是被", (0,jsx_runtime.jsx)(_components.a, {
                                  href: "#makeobserved",
                                  children: "makeObserved"
                                }), "方法转换的，但没有被UI组件使用。  10. V2对象属于Array/Map/Set/Date类型，但没有被UI组件使用。"]
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "decoratorInfo"
                              }), (0,jsx_runtime.jsxs)(_components.td, {
                                children: ["Array<", (0,jsx_runtime.jsx)(_components.a, {
                                  href: "#decoratorinfo23",
                                  children: "DecoratorInfo"
                                }), ">"]
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "否"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "否"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "对象可被观察时，数组中内容为对象关联的装饰器和组件信息。对象不可被观察时，此数组为空。"
                              })]
                            })]
                          })]
                        }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                          id: "decoratorinfo23",
                          children: "DecoratorInfo23+"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "可被观察对象关联的装饰器和组件信息。"
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "元服务API："
                            })
                          }), " 从API version 23开始，该接口支持在元服务中使用。"]
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
                          }), " SystemCapability.ArkUI.ArkUI.Full"]
                        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                          children: [(0,jsx_runtime.jsx)(_components.thead, {
                            children: (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.th, {
                                children: "名称"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "类型"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "只读"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "可选"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "说明"
                              })]
                            })
                          }), (0,jsx_runtime.jsxs)(_components.tbody, {
                            children: [(0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "decoratorName"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "string"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "否"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "否"
                              }), (0,jsx_runtime.jsxs)(_components.td, {
                                children: ["当对象是V1对象时，值是对象关联的装饰器名称。  当V1对象使用", (0,jsx_runtime.jsx)(_components.a, {
                                  href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-data-object-state-management/arkts-track",
                                  children: "@Track"
                                }), "时，值为：'@Track'。  当V2对象使用", (0,jsx_runtime.jsx)(_components.a, {
                                  href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-data-object-state/arkts-new-observedv2-and-trace",
                                  children: "@Trace"
                                }), "时，值为：'@Trace'。  当V2对象使用", (0,jsx_runtime.jsx)(_components.a, {
                                  href: "#makeobserved",
                                  children: "makeObserved"
                                }), "时，值为：'MakeObserved'。  当V2对象使用", (0,jsx_runtime.jsx)(_components.a, {
                                  href: "#enablev2compatibility19",
                                  children: "enableV2Compatibility"
                                }), "时，值为：'EnableV2Compatible'。  当V2对象使用built-in类型数据时，值为：'ProxyObservedV2'。"]
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "stateVariableName"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "string"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "否"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "否"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "被装饰器装饰的属性名称。"
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "owningComponentOrClassName"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "string"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "否"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "否"
                              }), (0,jsx_runtime.jsxs)(_components.td, {
                                children: ["V1对象返回被使用的组件名称。  V1对象有属性使用", (0,jsx_runtime.jsx)(_components.a, {
                                  href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-data-object-state-management/arkts-track",
                                  children: "@Track"
                                }), "装饰器时返回对象名称。  V2对象返回对象名称。"]
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "owningComponentId"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "number"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "否"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "否"
                              }), (0,jsx_runtime.jsxs)(_components.td, {
                                children: ["V1对象返回被使用的组件id。  ", (0,jsx_runtime.jsx)(_components.strong, {
                                  children: (0,jsx_runtime.jsxs)(_components.strong, {
                                    children: ["V1对象有属性使用", (0,jsx_runtime.jsx)(_components.a, {
                                      href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-data-object-state-management/arkts-track",
                                      children: "@Track"
                                    }), "装饰器时和V2对象返回的是对象名称，无组件id，返回-1。"]
                                  })
                                })]
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "dependentInfo"
                              }), (0,jsx_runtime.jsxs)(_components.td, {
                                children: ["Array<", (0,jsx_runtime.jsx)(_components.a, {
                                  href: "#elementinfo23",
                                  children: "ElementInfo"
                                }), ">"]
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "否"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "否"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "使用该可观察对象的组件信息。若对象没有用在任何UI上，则返回空数组。"
                              })]
                            })]
                          })]
                        }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                          id: "elementinfo23",
                          children: "ElementInfo23+"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "可被观察对象关联的组件信息，包含系统组件和自定义组件。"
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "元服务API："
                            })
                          }), " 从API version 23开始，该接口支持在元服务中使用。"]
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
                          }), " SystemCapability.ArkUI.ArkUI.Full"]
                        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                          children: [(0,jsx_runtime.jsx)(_components.thead, {
                            children: (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.th, {
                                children: "名称"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "类型"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "只读"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "可选"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "说明"
                              })]
                            })
                          }), (0,jsx_runtime.jsxs)(_components.tbody, {
                            children: [(0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "elementName"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "string"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "否"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "否"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "组件的名称。"
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "elementId"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "number"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "否"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "否"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "组件的ID。"
                              })]
                            })]
                          })]
                        }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                          id: "uiutils",
                          children: "UIUtils"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "UIUtils提供一些方法，用于处理状态管理相关的数据转换。"
                        }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                          id: "gettarget",
                          children: "getTarget"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "static getTarget<T extends object>(source: T): T"
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: ["从状态管理框架包裹的代理对象中获取原始对象。详见", (0,jsx_runtime.jsx)(_components.a, {
                            href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-uiutils/arkts-new-gettarget",
                            children: "getTarget接口：获取状态管理框架代理前的原始对象"
                          }), "。"]
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "元服务API："
                            })
                          }), " 从API version 12开始，该接口支持在元服务中使用。"]
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "系统能力："
                            })
                          }), " SystemCapability.ArkUI.ArkUI.Full"]
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
                                children: "参数名"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "类型"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "必填"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "说明"
                              })]
                            })
                          }), (0,jsx_runtime.jsx)(_components.tbody, {
                            children: (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "source"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "T"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "是"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "数据源对象。"
                              })]
                            })
                          })]
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: (0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "返回值："
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
                                children: "T"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "数据源对象去除状态管理框架所加代理后的原始对象。"
                              })]
                            })
                          })]
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: (0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "示例："
                            })
                          })
                        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                          children: (0,jsx_runtime.jsx)(_components.code, {
                            children: "import { UIUtils } from '@kit.ArkUI';\n\nclass NonObservedClass {\n  name: string = 'Tom';\n}\n\nlet nonObservedClass: NonObservedClass = new NonObservedClass();\n\n@Entry\n@Component\nstruct Index {\n  @State someClass: NonObservedClass = nonObservedClass;\n\n  build() {\n    Column() {\n      Text(`this.someClass === nonObservedClass: ${this.someClass === nonObservedClass}`) // false\n      Text(`UIUtils.getTarget(this.someClass) === nonObservedClass: ${UIUtils.getTarget(this.someClass) ===\n        nonObservedClass}`) // true\n    }\n  }\n}\n"
                          })
                        }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                          id: "getlifecycle23",
                          children: "getLifecycle23+"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "static getLifecycle<T extends BaseCustomComponent>(customComponent: T): CustomComponentLifecycle"
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: ["getLifecycle用于获取", (0,jsx_runtime.jsx)(_components.a, {
                            href: "/ref/arkui-api/arkui-declarative-comp/custom-comp/ts-custom-component-new-lifecycle/ts-custom-component-new-lifecycle",
                            children: "自定义组件的生命周期"
                          }), "实例。"]
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "元服务API："
                            })
                          }), " 从API version 23开始，该接口支持在元服务中使用。"]
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "系统能力："
                            })
                          }), " SystemCapability.ArkUI.ArkUI.Full"]
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "模型约束："
                            })
                          }), " 此接口仅可在Stage模型下使用。"]
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
                                children: "参数名"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "类型"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "必填"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "说明"
                              })]
                            })
                          }), (0,jsx_runtime.jsx)(_components.tbody, {
                            children: (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "customComponent"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "T"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "是"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "自定义组件实例。"
                              })]
                            })
                          })]
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: (0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "返回值："
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
                                  href: "/ref/arkui-api/arkui-declarative-comp/custom-comp/ts-custom-component-new-lifecycle/ts-custom-component-new-lifecycle#customcomponentlifecycle",
                                  children: "CustomComponentLifecycle"
                                })
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "自定义组件的生命周期实例。"
                              })]
                            })
                          })]
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: (0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "示例："
                            })
                          })
                        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                          children: (0,jsx_runtime.jsx)(_components.code, {
                            children: "import { UIUtils, ComponentAppear } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct Index {\n  @State lifecycleState: number = -1;\n\n  @ComponentAppear\n  myAppear() {\n    // UIUtils.getLifecycle获得自定义组件的生命周期实例，getCurrentState查询自定义组件当前生命周期。\n    // 预期查询到的生命周期为CustomComponentLifecycleState.APPEARED = 1。\n    this.lifecycleState = UIUtils.getLifecycle(this).getCurrentState();\n  }\n\n  build() {\n    Text(`${this.lifecycleState}`)\n  }\n}\n"
                          })
                        }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                          id: "canbeobserved23",
                          children: "canBeObserved23+"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "static canBeObserved<T extends object>(source: T): ObservedResult"
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: ["判断数据对象是否为可观察对象，并返回观察结果。详见", (0,jsx_runtime.jsx)(_components.a, {
                            href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-new-canbeobserved",
                            children: "canBeObserved接口：判断对象是否为可被观察对象"
                          }), "。"]
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "元服务API："
                            })
                          }), " 从API version 23开始，该接口支持在元服务中使用。"]
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
                          }), " SystemCapability.ArkUI.ArkUI.Full"]
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
                                children: "参数名"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "类型"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "必填"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "说明"
                              })]
                            })
                          }), (0,jsx_runtime.jsx)(_components.tbody, {
                            children: (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "source"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "T"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "是"
                              }), (0,jsx_runtime.jsxs)(_components.td, {
                                children: ["输入一个数据对象，判断其是否可被观察。支持Array、Map、Set和Date类型数据。  具体使用规则，详见", (0,jsx_runtime.jsx)(_components.a, {
                                  href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-new-canbeobserved",
                                  children: "canBeObserved接口：判断对象是否为可被观察对象"
                                }), "。"]
                              })]
                            })
                          })]
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: (0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "返回值："
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
                                  href: "#observedresult23",
                                  children: "ObservedResult"
                                })
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "返回对象是否可被观察的结果。"
                              })]
                            })
                          })]
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: (0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "示例："
                            })
                          })
                        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                          children: (0,jsx_runtime.jsx)(_components.code, {
                            children: "import { UIUtils } from '@kit.ArkUI';\nimport { DecoratorInfo, ElementInfo } from '@ohos.arkui.StateManagement';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst TAG = 'CanBeObserved';\n\nclass Student {\n  public name?: string;\n\n  constructor(name?: string) {\n    this.name = name ?? '';\n  }\n\n  // 在对象中提供判断该对象是否为可被观察对象的方法\n  test(): void {\n    const result = UIUtils.canBeObserved(this);\n    // 对象是否可被观察\n    const isObserved = result.isObserved;\n    hilog.info(0x00, TAG, `isObserved: ${JSON.stringify(isObserved)}`);\n    // 对象是否可被观察的原因\n    const reason = result.reason;\n    hilog.info(0x00, TAG, `reason: ${reason}`);\n    // 对象可被观察时，对象关联的装饰器信息\n    const decoratorInfoArr = result.decoratorInfo;\n    decoratorInfoArr.forEach((decorator: DecoratorInfo) => {\n      // 装饰器名称\n      const decoratorName = decorator.decoratorName;\n      hilog.info(0x00, TAG, `decoratorName: ${decoratorName}`);\n      // 装饰器装饰的属性名称\n      const stateVariableName = decorator.stateVariableName;\n      hilog.info(0x00, TAG, `stateVariableName: ${stateVariableName}`);\n      // 装饰器所在的组件名称\n      const owningName = decorator.owningComponentOrClassName;\n      hilog.info(0x00, TAG, `owningComponentOrClassName: ${owningName}`);\n      // 装饰器所在的组件id\n      const owningId = decorator.owningComponentId;\n      hilog.info(0x00, TAG, `owningComponentId: ${owningId}`);\n      // 装饰器关联的组件信息\n      const dependentInfo = decorator.dependentInfo;\n      dependentInfo.forEach((elementInfo: ElementInfo) => {\n        // 装饰器关联的组件名称\n        const eleName = elementInfo.elementName;\n        hilog.info(0x00, TAG, `elementName: ${eleName}`);\n        // 装饰器关联的组件id\n        const eleId = elementInfo.elementId;\n        hilog.info(0x00, TAG, `elementId: ${eleId}`);\n      })\n    })\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  @State student: Student = new Student('LiMei');\n\n  build() {\n    Column({ space: 20 }) {\n      Classroom({ student: this.student })\n      Home({ student: this.student })\n      Button('test')\n        .onClick(() => {\n          // 开发者可以在任意页面中使用接口来判断当前对象是否为可被观察对象\n          this.student.test();\n        })\n    }\n    .height('100%')\n    .width('100%')\n    .justifyContent(FlexAlign.Center)\n    .alignItems(HorizontalAlign.Center)\n  }\n}\n\n@Component\nexport struct Classroom {\n  @State student: Student = new Student();\n\n  build() {\n    Column() {\n      Text('Classroom ' + this.student.name)\n      School({ student: this.student })\n    }\n  }\n}\n\n@Component\nexport struct Home {\n  @State student: Student = new Student();\n\n  build() {\n    Column() {\n      Text('Home ' + this.student.name)\n    }\n  }\n}\n\n@Component\nexport struct School {\n  @State student: Student = new Student();\n\n  build() {\n    Column() {\n      Text('School ' + this.student.name)\n    }\n  }\n}\n"
                          })
                        }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                          id: "makeobserved",
                          children: "makeObserved"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "static makeObserved<T extends object>(source: T): T"
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: ["将普通不可观察数据变为可观察数据。详见", (0,jsx_runtime.jsx)(_components.a, {
                            href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-uiutils/arkts-new-makeobserved",
                            children: "makeObserved接口：将非观察数据变为可观察数据"
                          }), "。"]
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "元服务API："
                            })
                          }), " 从API version 12开始，该接口支持在元服务中使用。"]
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "系统能力："
                            })
                          }), " SystemCapability.ArkUI.ArkUI.Full"]
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
                                children: "参数名"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "类型"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "必填"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "说明"
                              })]
                            })
                          }), (0,jsx_runtime.jsx)(_components.tbody, {
                            children: (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "source"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "T"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "是"
                              }), (0,jsx_runtime.jsxs)(_components.td, {
                                children: ["数据源对象。支持非@Observed和@ObservedV2装饰的class，JSON.parse返回的Object和@Sendable修饰的class。  支持Array、Map、Set和Date。  支持collections.Array, collections.Set和collections.Map。  具体使用规则，详见", (0,jsx_runtime.jsx)(_components.a, {
                                  href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-uiutils/arkts-new-makeobserved",
                                  children: "makeObserved接口：将非观察数据变为可观察数据"
                                }), "。"]
                              })]
                            })
                          })]
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: (0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "返回值："
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
                                children: "T"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "可观察的数据。"
                              })]
                            })
                          })]
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: (0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "示例："
                            })
                          })
                        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                          children: (0,jsx_runtime.jsx)(_components.code, {
                            children: "import { UIUtils } from '@kit.ArkUI';\n\nclass NonObservedClass {\n  name: string = 'Tom';\n}\n\n@Entry\n@ComponentV2\nstruct Index {\n  observedClass: NonObservedClass = UIUtils.makeObserved(new NonObservedClass());\n  nonObservedClass: NonObservedClass = new NonObservedClass();\n\n  build() {\n    Column() {\n      Text(`observedClass: ${this.observedClass.name}`)\n        .onClick(() => {\n          this.observedClass.name = 'Jane'; // 刷新\n        })\n      Text(`observedClass: ${this.nonObservedClass.name}`)\n        .onClick(() => {\n          this.nonObservedClass.name = 'Jane'; // 不刷新\n        })\n    }\n  }\n}\n"
                          })
                        }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                          id: "enablev2compatibility19",
                          children: "enableV2Compatibility19+"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "static enableV2Compatibility<T extends object>(source: T): T"
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: ["使V1的状态变量能够在@ComponentV2中观察，主要应用于状态管理V1、V2混用场景。详见", (0,jsx_runtime.jsx)(_components.a, {
                            href: "/arkui/arkts-ui-development/arkts-state-management/arkts-v1-v2-guide/v1v2-mixing/arkts-v1-v2-mixusage",
                            children: "状态管理V1和V2混用指导（API version 19及之后）"
                          }), "。"]
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "元服务API："
                            })
                          }), " 从API version 19开始，该接口支持在元服务中使用。"]
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "系统能力："
                            })
                          }), " SystemCapability.ArkUI.ArkUI.Full"]
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
                                children: "参数名"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "类型"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "必填"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "说明"
                              })]
                            })
                          }), (0,jsx_runtime.jsx)(_components.tbody, {
                            children: (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "source"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "T"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "是"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "数据源，仅支持V1状态数据。"
                              })]
                            })
                          })]
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: (0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "返回值："
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
                                children: "T"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "如果数据源是V1的状态数据，则返回能够在@ComponentV2中观察的数据。否则返回数据源本身。"
                              })]
                            })
                          })]
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: (0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "示例："
                            })
                          })
                        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                          children: (0,jsx_runtime.jsx)(_components.code, {
                            children: "import { UIUtils } from '@kit.ArkUI';\n\n@Observed\nclass ObservedClass {\n  name: string = 'Tom';\n}\n\n@Entry\n@Component\nstruct CompV1 {\n  @State observedClass: ObservedClass = new ObservedClass();\n\n  build() {\n    Column() {\n      Text(`@State observedClass: ${this.observedClass.name}`)\n        .onClick(() => {\n          this.observedClass.name = 'State'; // 刷新\n        })\n      // 将V1的状态变量使能V2的观察能力\n      CompV2({ observedClass: UIUtils.enableV2Compatibility(this.observedClass) })\n    }\n  }\n}\n\n@ComponentV2\nstruct CompV2 {\n  @Param observedClass: ObservedClass = new ObservedClass();\n\n  build() {\n    // V1状态变量在使能V2观察能力后，可以在V2观察第一层的变化\n    Text(`@Param observedClass: ${this.observedClass.name}`)\n      .onClick(() => {\n        this.observedClass.name = 'Param'; // 刷新\n      })\n  }\n}\n"
                          })
                        }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                          id: "makev1observed19",
                          children: "makeV1Observed19+"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "static makeV1Observed<T extends object>(source: T): T"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "将不可观察的对象包装成状态管理V1可观察的对象，其能力等同于@Observed，可初始化@ObjectLink。"
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: ["该接口可搭配", (0,jsx_runtime.jsx)(_components.a, {
                            href: "#enablev2compatibility19",
                            children: "enableV2Compatibility"
                          }), "应用于状态管理V1和V2混用场景，详见", (0,jsx_runtime.jsx)(_components.a, {
                            href: "/arkui/arkts-ui-development/arkts-state-management/arkts-v1-v2-guide/v1v2-mixing/arkts-v1-v2-mixusage",
                            children: "状态管理V1和V2混用指导（API version 19及之后）"
                          }), "。"]
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "元服务API："
                            })
                          }), " 从API version 19开始，该接口支持在元服务中使用。"]
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "系统能力："
                            })
                          }), " SystemCapability.ArkUI.ArkUI.Full"]
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
                                children: "参数名"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "类型"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "必填"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "说明"
                              })]
                            })
                          }), (0,jsx_runtime.jsx)(_components.tbody, {
                            children: (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "source"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "T"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "是"
                              }), (0,jsx_runtime.jsxs)(_components.td, {
                                children: ["数据源。支持普通class、Array、Map、Set、Date类型。  不支持", (0,jsx_runtime.jsx)(_components.a, {
                                  href: "/ref/arkts-api/arkts-arkts/js-apis-arkts-collections/arkts-apis-arkts-collections/arkts-apis-arkts-collections",
                                  children: "collections类型"
                                }), "和", (0,jsx_runtime.jsx)(_components.a, {
                                  href: "/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/sendable-object/arkts-sendable",
                                  children: "@Sendable"
                                }), "修饰的class。  不支持undefined和null。不支持状态管理V2的数据和", (0,jsx_runtime.jsx)(_components.a, {
                                  href: "#makeobserved",
                                  children: "makeObserved"
                                }), "的返回值。"]
                              })]
                            })
                          })]
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: (0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "返回值："
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
                                children: "T"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "对于支持的入参类型，返回状态管理V1的观察数据。对于不支持的入参类型，返回数据源对象本身。"
                              })]
                            })
                          })]
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: (0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "示例："
                            })
                          })
                        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                          children: (0,jsx_runtime.jsx)(_components.code, {
                            children: "import { UIUtils } from '@kit.ArkUI';\n\nclass Outer {\n  outerValue: string = 'outer';\n  inner: Inner;\n\n  constructor(inner: Inner) {\n    this.inner = inner;\n  }\n}\n\nclass Inner {\n  interValue: string = 'inner';\n}\n\n@Entry\n@Component\nstruct Index {\n  @State outer: Outer = new Outer(UIUtils.makeV1Observed(new Inner()));\n\n  build() {\n    Column() {\n      // makeV1Observed的返回值可初始化@ObjectLink\n      Child({ inner: this.outer.inner })\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n\n@Component\nstruct Child {\n  @ObjectLink inner: Inner;\n\n  build() {\n    Text(`${this.inner.interValue}`)\n      .onClick(() => {\n        this.inner.interValue += '!';\n      })\n  }\n}\n"
                          })
                        }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                          id: "makebinding20",
                          children: "makeBinding20+"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "static makeBinding<T>(getter: GetterCallback<T>): Binding<T>"
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: ["创建只读的单向数据绑定实例，用于构建", (0,jsx_runtime.jsx)(_components.a, {
                            href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-builder",
                            children: "@Builder"
                          }), "函数中参数类型为Binding的对应实参。"]
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "元服务API："
                            })
                          }), " 从API version 20开始，该接口支持在元服务中使用。"]
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "系统能力："
                            })
                          }), " SystemCapability.ArkUI.ArkUI.Full"]
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
                                children: "参数名"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "类型"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "必填"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "说明"
                              })]
                            })
                          }), (0,jsx_runtime.jsx)(_components.tbody, {
                            children: (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "getter"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: (0,jsx_runtime.jsx)(_components.a, {
                                  href: "#gettercallback20",
                                  children: "GetterCallback<T>"
                                })
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "是"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "获取值的回调函数，每次访问值都会重新执行函数，获取最新值。"
                              })]
                            })
                          })]
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: (0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "返回值："
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
                                  href: "#bindingt20",
                                  children: "Binding<T>"
                                })
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "仅包含一个value属性，用于获取当前绑定的值。只能读取值，不能直接修改。"
                              })]
                            })
                          })]
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: (0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "示例："
                            })
                          })
                        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                          children: (0,jsx_runtime.jsx)(_components.code, {
                            children: "import { Binding, MutableBinding, UIUtils } from '@kit.ArkUI';\n\n@Builder\nfunction CustomButton(num1: Binding<number>) {\n  Row() {\n    Button(`Custom Button: ${num1.value}`)\n      .onClick(() => {\n        // num1.value += 1; 会报错，Binding类型不支持修改\n      })\n  }\n}\n\n@Entry\n@ComponentV2\nstruct CompV2 {\n  @Local number1: number = 5;\n  @Local number2: number = 10;\n\n  build() {\n    Column() {\n      Text('parent component')\n\n      CustomButton(\n        /**\n         * 创建只读绑定实例\n         * @param getter - 返回this.number1的函数\n         * @returns 只读的Binding<number>对象\n         *\n         * 特点：\n         * 1. 每次访问.value时重新计算\n         * 2. 不能直接修改值\n         */\n        UIUtils.makeBinding<number>(\n          () => this.number1 // GetterCallback\n        )\n      )\n    }\n  }\n}\n"
                          })
                        }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                          id: "makebinding20-1",
                          children: "makeBinding20+"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "static makeBinding<T>(getter: GetterCallback<T>, setter: SetterCallback<T>): MutableBinding<T>"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "创建可修改的双向数据绑定实例，用于构建@Builder函数中参数类型为MutableBinding的对应实参。"
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "元服务API："
                            })
                          }), " 从API version 20开始，该接口支持在元服务中使用。"]
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "系统能力："
                            })
                          }), " SystemCapability.ArkUI.ArkUI.Full"]
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: (0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "参数："
                            })
                          })
                        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                          children: [(0,jsx_runtime.jsx)(_components.thead, {
                            children: (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.th, {
                                children: "参数名"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "类型"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "必填"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "说明"
                              })]
                            })
                          }), (0,jsx_runtime.jsxs)(_components.tbody, {
                            children: [(0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "getter"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: (0,jsx_runtime.jsx)(_components.a, {
                                  href: "#gettercallback20",
                                  children: "GetterCallback<T>"
                                })
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "是"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "获取值的回调函数，每次访问值都会重新执行函数，获取最新值。"
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "setter"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: (0,jsx_runtime.jsx)(_components.a, {
                                  href: "#settercallback20",
                                  children: "SetterCallback<T>"
                                })
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "是"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "定义如何更新值，当.value被修改时自动调用此函数。"
                              })]
                            })]
                          })]
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: (0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "返回值："
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
                                  href: "#mutablebindingt20",
                                  children: "MutableBinding<T>"
                                })
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "包含一个value属性，支持通过.value读取和修改数据，设置值时会检查类型是否匹配泛型T。"
                              })]
                            })
                          })]
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: (0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "示例："
                            })
                          })
                        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                          children: (0,jsx_runtime.jsx)(_components.code, {
                            children: "import { Binding, MutableBinding, UIUtils } from '@kit.ArkUI';\n\n@Builder\nfunction CustomButton(num2: MutableBinding<number>) {\n  Row() {\n    Button(`Custom Button: ${num2.value}`)\n      .onClick(() => {\n        // MutableBinding类型支持修改\n        num2.value += 1;\n      })\n  }\n}\n\n@Entry\n@ComponentV2\nstruct CompV2 {\n  @Local number1: number = 5;\n  @Local number2: number = 10;\n\n  build() {\n    Column() {\n      Text('parent component')\n\n      CustomButton(\n        /**\n         * 创建可变绑定\n         * @param getter - 返回this.number2的函数\n         * @param setter - 当绑定值修改时调用的回调\n         * @returns 可变的MutableBinding<number>对象\n         *\n         * 特点：\n         * 1. 支持读取和写入操作\n         * 2. 修改.value时会自动调用setter回调\n         */\n        UIUtils.makeBinding<number>(\n          () => this.number2, // GetterCallback\n          (val: number) => {\n            this.number2 = val;\n          }) // SetterCallback\n      )\n    }\n  }\n}\n"
                          })
                        }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                          id: "addmonitor20",
                          children: "addMonitor20+"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "static addMonitor(target: object, path: string | string[], monitorCallback: MonitorCallback, options?: MonitorOptions): void"
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: ["给状态管理V2的状态变量动态添加监听方法，详见", (0,jsx_runtime.jsx)(_components.a, {
                            href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-uiutils/arkts-new-addmonitor-clearmonitor",
                            children: "addMonitor/clearMonitor"
                          }), "。"]
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "元服务API："
                            })
                          }), " 从API version 20开始，该接口支持在元服务中使用。"]
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "系统能力："
                            })
                          }), " SystemCapability.ArkUI.ArkUI.Full"]
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: (0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "参数："
                            })
                          })
                        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                          children: [(0,jsx_runtime.jsx)(_components.thead, {
                            children: (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.th, {
                                children: "参数名"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "类型"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "必填"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "说明"
                              })]
                            })
                          }), (0,jsx_runtime.jsxs)(_components.tbody, {
                            children: [(0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "target"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "object"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "是"
                              }), (0,jsx_runtime.jsxs)(_components.td, {
                                children: ["目标对象，仅支持", (0,jsx_runtime.jsx)(_components.a, {
                                  href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-create-custom-components#componentv2",
                                  children: "@ComponentV2"
                                }), "和", (0,jsx_runtime.jsx)(_components.a, {
                                  href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-data-object-state/arkts-new-observedv2-and-trace",
                                  children: "@ObservedV2"
                                }), "实例。  对于不支持的类型，会抛出运行时错误，错误码见表格。"]
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "path"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "string"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "string[]"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "是"
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "monitorCallback"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: (0,jsx_runtime.jsx)(_components.a, {
                                  href: "#monitorcallback20",
                                  children: "MonitorCallback"
                                })
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "是"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "给对应的状态变量注册的监听函数，即path路径对应的状态变量改变时，会回调对应的函数。  对于不支持的类型，会抛出运行时错误，错误码见表格。"
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "options"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: (0,jsx_runtime.jsx)(_components.a, {
                                  href: "#monitoroptions20",
                                  children: "MonitorOptions"
                                })
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "否"
                              }), (0,jsx_runtime.jsxs)(_components.td, {
                                children: ["监听函数的配置项，具体可见", (0,jsx_runtime.jsx)(_components.a, {
                                  href: "#monitoroptions20",
                                  children: "MonitorOptions"
                                }), "。默认为异步回调。"]
                              })]
                            })]
                          })]
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: (0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "错误码："
                            })
                          })
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
                            href: "/ref/arkui-api/arkui-arkts-errcode/arkui-ui-arkts-errcode/errorcode-statemanagement/errorcode-statemanagement",
                            children: "状态管理错误码"
                          }), "。"]
                        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                          children: [(0,jsx_runtime.jsx)(_components.thead, {
                            children: (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.th, {
                                children: "错误码ID"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "错误信息"
                              })]
                            })
                          }), (0,jsx_runtime.jsxs)(_components.tbody, {
                            children: [(0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "130000"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "The target is not a custom component instance or V2 class instance."
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "130001"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "The path is invalid."
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "130002"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "monitorCallback is not a function or an anonymous function."
                              })]
                            })]
                          })]
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: (0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "示例："
                            })
                          })
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "下面的示例："
                        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
                          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                            children: "在ObservedClass的构造方法里，添加对name属性的同步监听回调onChange。"
                          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                            children: "点击Text组件，将name改为Jack和Jane，触发两次onChange回调，打印日志如下。"
                          }), "\n"]
                        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                          children: (0,jsx_runtime.jsx)(_components.code, {
                            children: "ObservedClass property name change from Tom to Jack\nObservedClass property name change from Jack to Jane\n"
                          })
                        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                          children: (0,jsx_runtime.jsx)(_components.code, {
                            children: "import { UIUtils } from '@kit.ArkUI';\n\n@ObservedV2\nclass ObservedClass {\n  @Trace name: string = 'Tom';\n\n  onChange(mon: IMonitor) {\n    mon.dirty.forEach((path: string) => {\n      console.info(`ObservedClass property ${path} change from ${mon.value(path)?.before} to ${mon.value(path)?.now}`);\n    });\n  }\n\n  constructor() {\n    // 给当前ObservedClass的实例this添加对属性name的监听回调this.onChange，且当前监听回调是同步监听\n    UIUtils.addMonitor(this, 'name', this.onChange, { isSynchronous: true });\n  }\n}\n\n@Entry\n@ComponentV2\nstruct Index {\n  @Local observedClass: ObservedClass = new ObservedClass();\n\n  build() {\n    Column() {\n      Text(`name: ${this.observedClass.name}`)\n        .fontSize(20)\n        .onClick(() => {\n          this.observedClass.name = 'Jack';\n          this.observedClass.name = 'Jane';\n        })\n    }\n  }\n}\n"
                          })
                        }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                          id: "clearmonitor20",
                          children: "clearMonitor20+"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "static clearMonitor(target: object, path: string | string[], monitorCallback?: MonitorCallback): void"
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: ["删除通过", (0,jsx_runtime.jsx)(_components.a, {
                            href: "#addmonitor20",
                            children: "addMonitor"
                          }), "给状态管理V2的状态变量添加的监听方法，详见", (0,jsx_runtime.jsx)(_components.a, {
                            href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-uiutils/arkts-new-addmonitor-clearmonitor",
                            children: "addMonitor/clearMonitor"
                          }), "。"]
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "元服务API："
                            })
                          }), " 从API version 20开始，该接口支持在元服务中使用。"]
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "系统能力："
                            })
                          }), " SystemCapability.ArkUI.ArkUI.Full"]
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
                                children: "参数名"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "类型"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "必填"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "说明"
                              })]
                            })
                          }), (0,jsx_runtime.jsxs)(_components.tbody, {
                            children: [(0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "target"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "object"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "是"
                              }), (0,jsx_runtime.jsxs)(_components.td, {
                                children: ["目标对象，仅支持", (0,jsx_runtime.jsx)(_components.a, {
                                  href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-create-custom-components#componentv2",
                                  children: "@ComponentV2"
                                }), "和", (0,jsx_runtime.jsx)(_components.a, {
                                  href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-data-object-state/arkts-new-observedv2-and-trace",
                                  children: "@ObservedV2"
                                }), "实例。  对于不支持的类型，会抛出运行时错误，错误码见表格。"]
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "path"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "string"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "string[]"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "是"
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "monitorCallback"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: (0,jsx_runtime.jsx)(_components.a, {
                                  href: "#monitorcallback20",
                                  children: "MonitorCallback"
                                })
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "否"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "指定被删除的监听函数。  当开发者不传此参数时，将删除path对应变量注册的所有监听函数。  对于不支持的类型，会抛出运行时错误，错误码见表格。"
                              })]
                            })]
                          })]
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: (0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "错误码："
                            })
                          })
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
                            href: "/ref/arkui-api/arkui-arkts-errcode/arkui-ui-arkts-errcode/errorcode-statemanagement/errorcode-statemanagement",
                            children: "状态管理错误码"
                          }), "。"]
                        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                          children: [(0,jsx_runtime.jsx)(_components.thead, {
                            children: (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.th, {
                                children: "错误码ID"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "错误信息"
                              })]
                            })
                          }), (0,jsx_runtime.jsxs)(_components.tbody, {
                            children: [(0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "130000"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "The target is not a custom component instance or V2 class instance."
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "130001"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "The path is invalid."
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "130002"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "monitorCallback is not a function or an anonymous function."
                              })]
                            })]
                          })]
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: (0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "示例："
                            })
                          })
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "在下面的示例中："
                        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
                          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                              children: "在ObservedClass的构造方法中，添加对age属性的同步监听回调onChange。"
                            }), "\n"]
                          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                              children: "点击Text组件，触发age自增，onChange的监听回调函数被触发。打印日志如下。"
                            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                              children: (0,jsx_runtime.jsx)(_components.code, {
                                children: "ObservedClass property age change from 10 to 11\n"
                              })
                            }), "\n"]
                          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                              children: "点击clear monitor，删除age的监听函数onChange。"
                            }), "\n"]
                          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                              children: "再次点击Text组件，触发age自增，onChange不会被触发。"
                            }), "\n"]
                          }), "\n"]
                        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                          children: (0,jsx_runtime.jsx)(_components.code, {
                            children: "import { UIUtils } from '@kit.ArkUI';\n\n@ObservedV2\nclass ObservedClass {\n  @Trace age: number = 10;\n\n  onChange(mon: IMonitor) {\n    mon.dirty.forEach((path: string) => {\n      console.info(`ObservedClass property ${path} change from ${mon.value(path)?.before} to ${mon.value(path)?.now}`);\n    });\n  }\n\n  constructor() {\n    // 给当前ObservedClass的实例this添加对属性age的监听回调this.onChange，且当前监听回调是同步监听\n    UIUtils.addMonitor(this, 'age', this.onChange);\n  }\n}\n\n@Entry\n@ComponentV2\nstruct Index {\n  @Local observedClass: ObservedClass = new ObservedClass();\n\n  build() {\n    Column() {\n      Text(`age: ${this.observedClass.age}`)\n        .fontSize(20)\n        .onClick(() => {\n          // 点击触发age++，触发onChange回调\n          this.observedClass.age++;\n        })\n      Button('clear monitor')\n        .onClick(() => {\n          // 点击clearMonitor，删除this.observedClass中age的监听函数onChange\n          // 再次点击触发age++，没有触发监听函数onChange\n          UIUtils.clearMonitor(this.observedClass, 'age', this.observedClass.onChange);\n        })\n    }\n  }\n}\n"
                          })
                        }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                          id: "applysync22",
                          children: "applySync22+"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "static applySync<T>(task: TaskCallback): T"
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: ["同步刷新指定的状态变量，该接口接收一个闭包函数，仅刷新闭包函数内的修改，包括更新", (0,jsx_runtime.jsx)(_components.a, {
                            href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-data-object-state/arkts-new-computed",
                            children: "@Computed计算"
                          }), "、", (0,jsx_runtime.jsx)(_components.a, {
                            href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-data-object-state/arkts-new-monitor",
                            children: "@Monitor回调"
                          }), "以及重新渲染UI节点，详见", (0,jsx_runtime.jsx)(_components.a, {
                            href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-uiutils/arkts-new-applysync-flushupdates-flushuiupdates",
                            children: "applySync/flushUpdates/flushUIUpdates接口：同步刷新"
                          }), "。"]
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "元服务API："
                            })
                          }), " 从API version 22开始，该接口支持在元服务中使用。"]
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "系统能力："
                            })
                          }), " SystemCapability.ArkUI.ArkUI.Full"]
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
                                children: "参数名"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "类型"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "必填"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "说明"
                              })]
                            })
                          }), (0,jsx_runtime.jsx)(_components.tbody, {
                            children: (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "task"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: (0,jsx_runtime.jsx)(_components.a, {
                                  href: "#taskcallback22",
                                  children: "TaskCallback"
                                })
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "是"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "闭包函数，该闭包中产生的状态变量修改会同步执行。"
                              })]
                            })
                          })]
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: (0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "返回值："
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
                                children: "T"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "闭包函数执行得到的返回值。"
                              })]
                            })
                          })]
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: (0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "错误码："
                            })
                          })
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
                            href: "/ref/arkui-api/arkui-arkts-errcode/arkui-ui-arkts-errcode/errorcode-statemanagement/errorcode-statemanagement",
                            children: "状态管理错误码"
                          }), "。"]
                        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                          children: [(0,jsx_runtime.jsx)(_components.thead, {
                            children: (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.th, {
                                children: "错误码ID"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "错误信息"
                              })]
                            })
                          }), (0,jsx_runtime.jsx)(_components.tbody, {
                            children: (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "140001"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "The function is not allowed to be called in @Computed."
                              })]
                            })
                          })]
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: (0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "示例："
                            })
                          })
                        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                          children: (0,jsx_runtime.jsx)(_components.code, {
                            children: "import { UIUtils } from '@kit.ArkUI';\n\n@Entry\n@ComponentV2\nstruct Index {\n  @Local w: number = 50; // 宽度\n  @Local h: number = 50; // 高度\n  @Local message: string = 'Hello';\n\n  build() {\n    Column() {\n      Button('change size')\n        .margin(20)\n        .onClick(() => {\n          // 在执行动画前，存在额外的修改\n          UIUtils.applySync(() => {\n            this.w = 100;\n            this.h = 100;\n            this.message = 'Hello World';\n          });\n          // 动画在1s内，Column方框的尺寸由（100*100）渐变为（200*200），方框内的文本变为Hello ArkUI\n          this.getUIContext().animateTo({\n            duration: 1000\n          }, () => {\n            console.info(`animateTo-in, w=${this.w}, h=${this.h}`);\n            this.w = 200;\n            this.h = 200;\n            this.message = 'Hello ArkUI';\n            console.info(`animateTo-out, w=${this.w}, h=${this.h}`);\n          });\n        })\n      // Column方框\n      Column() {\n        Text(`${this.message}`)\n      }\n      .backgroundColor('#ff17a98d')\n      .width(this.w)\n      .height(this.h)\n    }\n  }\n}\n"
                          })
                        }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                          id: "flushupdates22",
                          children: "flushUpdates22+"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "static flushUpdates(): void"
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: ["同步刷新在调用该函数之前所有的状态变量修改，包括更新@Computed计算、@Monitor回调以及重新渲染UI节点，详见", (0,jsx_runtime.jsx)(_components.a, {
                            href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-uiutils/arkts-new-applysync-flushupdates-flushuiupdates",
                            children: "applySync/flushUpdates/flushUIUpdates接口：同步刷新"
                          }), "。"]
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "元服务API："
                            })
                          }), " 从API version 22开始，该接口支持在元服务中使用。"]
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "系统能力："
                            })
                          }), " SystemCapability.ArkUI.ArkUI.Full"]
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: (0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "错误码："
                            })
                          })
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
                            href: "/ref/arkui-api/arkui-arkts-errcode/arkui-ui-arkts-errcode/errorcode-statemanagement/errorcode-statemanagement",
                            children: "状态管理错误码"
                          }), "。"]
                        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                          children: [(0,jsx_runtime.jsx)(_components.thead, {
                            children: (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.th, {
                                children: "错误码ID"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "错误信息"
                              })]
                            })
                          }), (0,jsx_runtime.jsxs)(_components.tbody, {
                            children: [(0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "140001"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "The function is not allowed to be called in @Computed."
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "140002"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "The function is not allowed to be called in @Monitor."
                              })]
                            })]
                          })]
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: (0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "示例："
                            })
                          })
                        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                          children: (0,jsx_runtime.jsx)(_components.code, {
                            children: "import { UIUtils } from '@kit.ArkUI';\n\n@Entry\n@ComponentV2\nstruct Index {\n  @Local w: number = 50; // 宽度\n  @Local h: number = 50; // 高度\n  @Local message: string = 'Hello';\n\n  build() {\n    Column() {\n      Button('change size')\n        .margin(20)\n        .onClick(() => {\n          // 在执行动画前，存在额外的修改\n          this.w = 100;\n          this.h = 100;\n          this.message = 'Hello World';\n          UIUtils.flushUpdates();\n          // 动画在1s内，Column方框的尺寸由（100*100）渐变为（200*200），方框内的文本变为Hello ArkUI\n          this.getUIContext().animateTo({\n            duration: 1000\n          }, () => {\n            console.info(`animateTo-in, w=${this.w}, h=${this.h}`);\n            this.w = 200;\n            this.h = 200;\n            this.message = 'Hello ArkUI';\n            console.info(`animateTo-out, w=${this.w}, h=${this.h}`);\n          });\n        })\n      // Column方框\n      Column() {\n        Text(`${this.message}`)\n      }\n      .backgroundColor('#ff17a98d')\n      .width(this.w)\n      .height(this.h)\n    }\n  }\n}\n"
                          })
                        }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                          id: "flushuiupdates22",
                          children: "flushUIUpdates22+"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "static flushUIUpdates(): void"
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: ["立即处理在调用该函数之前所有的状态变量修改，同步", (0,jsx_runtime.jsx)(_components.a, {
                            href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-introduce#%E8%A7%A6%E5%8F%91%E6%9B%B4%E6%96%B0",
                            children: "标脏"
                          }), "对应的UI节点，但不会同步执行@Computed计算和@Monitor回调，详见", (0,jsx_runtime.jsx)(_components.a, {
                            href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-uiutils/arkts-new-applysync-flushupdates-flushuiupdates",
                            children: "applySync/flushUpdates/flushUIUpdates接口：同步刷新"
                          }), "。"]
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "元服务API："
                            })
                          }), " 从API version 22开始，该接口支持在元服务中使用。"]
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "系统能力："
                            })
                          }), " SystemCapability.ArkUI.ArkUI.Full"]
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: (0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "错误码："
                            })
                          })
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
                            href: "/ref/arkui-api/arkui-arkts-errcode/arkui-ui-arkts-errcode/errorcode-statemanagement/errorcode-statemanagement",
                            children: "状态管理错误码"
                          }), "。"]
                        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                          children: [(0,jsx_runtime.jsx)(_components.thead, {
                            children: (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.th, {
                                children: "错误码ID"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "错误信息"
                              })]
                            })
                          }), (0,jsx_runtime.jsxs)(_components.tbody, {
                            children: [(0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "140001"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "The function is not allowed to be called in @Computed."
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "140002"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "The function is not allowed to be called in @Monitor."
                              })]
                            })]
                          })]
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: (0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "示例："
                            })
                          })
                        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                          children: (0,jsx_runtime.jsx)(_components.code, {
                            children: "import { UIUtils } from '@kit.ArkUI';\n\n@Entry\n@ComponentV2\nstruct Index {\n  @Local w: number = 50; // 宽度\n  @Local h: number = 50; // 高度\n  @Local message: string = 'Hello';\n\n  build() {\n    Column() {\n      Button('change size')\n        .margin(20)\n        .onClick(() => {\n          // 在执行动画前，存在额外的修改\n          this.w = 100;\n          this.h = 100;\n          this.message = 'Hello World';\n          UIUtils.flushUIUpdates();\n          // 动画在1s内，Column方框的尺寸由（100*100）渐变为（200*200），方框内的文本变为Hello ArkUI\n          this.getUIContext().animateTo({\n            duration: 1000\n          }, () => {\n            console.info(`animateTo-in, w=${this.w}, h=${this.h}`);\n            this.w = 200;\n            this.h = 200;\n            this.message = 'Hello ArkUI';\n            console.info(`animateTo-out, w=${this.w}, h=${this.h}`);\n          });\n        })\n      // Column方框\n      Column() {\n        Text(`${this.message}`)\n      }\n      .backgroundColor('#ff17a98d')\n      .width(this.w)\n      .height(this.h)\n    }\n  }\n}\n"
                          })
                        }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                          id: "taskcallback22",
                          children: "TaskCallback22+"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "type TaskCallback = () => T"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "同步执行的回调方法。"
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "元服务API："
                            })
                          }), " 从API version 22开始，该接口支持在元服务中使用。"]
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "系统能力："
                            })
                          }), " SystemCapability.ArkUI.ArkUI.Full"]
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: (0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "返回值："
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
                                children: "T"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "闭包函数执行得到的返回值。"
                              })]
                            })
                          })]
                        }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                          id: "monitoroptions20",
                          children: "MonitorOptions20+"
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.a, {
                            href: "#addmonitor20",
                            children: "addMonitor"
                          }), "的可选参数，用于配置回调类型。"]
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "元服务API："
                            })
                          }), " 从API version 20开始，该接口支持在元服务中使用。"]
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "系统能力："
                            })
                          }), " SystemCapability.ArkUI.ArkUI.Full"]
                        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                          children: [(0,jsx_runtime.jsx)(_components.thead, {
                            children: (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.th, {
                                children: "名称"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "类型"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "只读"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "可选"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "说明"
                              })]
                            })
                          }), (0,jsx_runtime.jsx)(_components.tbody, {
                            children: (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "isSynchronous"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "boolean"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "否"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "是"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "配置当前回调函数否是为同步回调。true为同步回调。默认值为false，即异步回调。"
                              })]
                            })
                          })]
                        }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                          id: "monitorcallback20",
                          children: "MonitorCallback20+"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "type MonitorCallback = (monitorValue: IMonitor) => void"
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: ["参数为", (0,jsx_runtime.jsx)(_components.a, {
                            href: "/ref/arkui-api/arkui-declarative-comp/state-management-and-rendering-control/ts-state-management-watch-monitor/ts-state-management-watch-monitor#imonitor12",
                            children: "IMonitor"
                          }), "类型的监听回调函数。"]
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "元服务API："
                            })
                          }), " 从API version 20开始，该接口支持在元服务中使用。"]
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "系统能力："
                            })
                          }), " SystemCapability.ArkUI.ArkUI.Full"]
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
                                children: "参数名"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "类型"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "必填"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "说明"
                              })]
                            })
                          }), (0,jsx_runtime.jsx)(_components.tbody, {
                            children: (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "monitorValue"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "IMonitor"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "是"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "回调函数传入的变化信息。"
                              })]
                            })
                          })]
                        }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                          id: "storagedefaultcreatort",
                          children: "StorageDefaultCreator<T>"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "type StorageDefaultCreator<T> = () => T"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "返回默认构造器的函数。"
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "元服务API："
                            })
                          }), " 从API version 12开始，该接口支持在元服务中使用。"]
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "系统能力："
                            })
                          }), " SystemCapability.ArkUI.ArkUI.Full"]
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: (0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "返回值："
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
                                children: "T"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "默认构造器执行得到的返回值。"
                              })]
                            })
                          })]
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: (0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "示例："
                            })
                          })
                        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                          children: (0,jsx_runtime.jsx)(_components.code, {
                            children: "import { PersistenceV2 } from '@kit.ArkUI';\n\n@ObservedV2\nclass SampleClass {\n  @Trace id: number = 0;\n  count: number = 1;\n}\n\n@ObservedV2\nclass FatherSampleClass {\n  @Trace sampleClass: SampleClass = new SampleClass();\n}\n\n// 将key为SampleClass、value为new SampleClass()对象的键值对持久化，并赋值给source\n// StorageDefaultCreator 指的是 () => new FatherSampleClass()\nconst source: FatherSampleClass | undefined = PersistenceV2.connect(FatherSampleClass, () => new FatherSampleClass());\n\n@Entry\n@Component\nstruct SampleComp {\n  data: FatherSampleClass | undefined = source;\n\n  build() {\n    Column() {\n      Text(`${this.data?.sampleClass.id}`)\n    }\n  }\n}\n"
                          })
                        }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                          id: "typeconstructorwithargst",
                          children: "TypeConstructorWithArgs<T>"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "含有任意入参的类构造器。"
                        }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                          id: "new",
                          children: "new"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "new(...args: any): T"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "创建并返回一个指定类型T的实例。"
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "元服务API："
                            })
                          }), " 从API version 12开始，该接口支持在元服务中使用。"]
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "系统能力："
                            })
                          }), " SystemCapability.ArkUI.ArkUI.Full"]
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
                                children: "参数名"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "类型"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "必填"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "说明"
                              })]
                            })
                          }), (0,jsx_runtime.jsx)(_components.tbody, {
                            children: (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "...args"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "any"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "否"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "函数入参。"
                              })]
                            })
                          })]
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: (0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "返回值："
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
                                children: "T"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "T类型的实例。"
                              })]
                            })
                          })]
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: (0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "示例："
                            })
                          })
                        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                          children: (0,jsx_runtime.jsx)(_components.code, {
                            children: "import { PersistenceV2 } from '@kit.ArkUI';\n\n@ObservedV2\n  // TypeConstructorWithArgs 指的是 SampleClass\nclass SampleClass {\n  @Trace id: number = 0;\n  count: number = 1;\n}\n\n@ObservedV2\nclass FatherSampleClass {\n  @Trace sampleClass: SampleClass = new SampleClass();\n}\n\n// 将key为SampleClass、value为new SampleClass()对象的键值对持久化，并赋值给source\nconst source: FatherSampleClass | undefined = PersistenceV2.connect(FatherSampleClass, () => new FatherSampleClass());\n\n@Entry\n@Component\nstruct SampleComp {\n  data: FatherSampleClass | undefined = source;\n\n  build() {\n    Column() {\n      Text(`${this.data?.sampleClass.id}`)\n    }\n  }\n}\n"
                          })
                        }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                          id: "persistenceerrorcallback",
                          children: "PersistenceErrorCallback"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "type PersistenceErrorCallback = (key: string, reason: 'quota' | 'serialization' | 'unknown', message: string) => void"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "持久化失败时返回错误原因的回调。"
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "元服务API："
                            })
                          }), " 从API version 12开始，该接口支持在元服务中使用。"]
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "系统能力："
                            })
                          }), " SystemCapability.ArkUI.ArkUI.Full"]
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
                                children: "参数名"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "类型"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "必填"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "说明"
                              })]
                            })
                          }), (0,jsx_runtime.jsxs)(_components.tbody, {
                            children: [(0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "key"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "string"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "是"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "出错的键值。"
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "reason"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "'quota'"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "'serialization'"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "'unknown'"
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "message"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "string"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "是"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "出错的更多消息。"
                              })]
                            })]
                          })]
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: (0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "示例："
                            })
                          })
                        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                          children: (0,jsx_runtime.jsx)(_components.code, {
                            children: "import { PersistenceV2, Type } from '@kit.ArkUI';\n\n@ObservedV2\nclass SampleChild {\n  @Trace id: number = 0;\n  count: number = 10;\n}\n\n@ObservedV2\nexport class Sample {\n  // 对于复杂对象需要@Type修饰，确保序列化成功\n  @Type(SampleChild)\n  @Trace sampleChild: SampleChild = new SampleChild();\n}\n\n// 接受序列化失败的回调\n// PersistenceErrorCallback 指的是 (key: string, reason: string, msg: string) => {console.error(`error key: ${key}, reason: ${reason}, message: ${msg}`);}\nPersistenceV2.notifyOnError((key: string, reason: string, msg: string) => {\n  console.error(`error key: ${key}, reason: ${reason}, message: ${msg}`);\n});\n\n@Entry\n@ComponentV2\nstruct Index {\n  // 在PersistenceV2中创建一个key为Sample的键值对（如果存在，则返回PersistenceV2中的数据），并且和data关联\n  // 对于需要换connect对象的data属性，需要加@Local修饰（不建议对属性换connect的对象）\n  @Local data: Sample = PersistenceV2.connect(Sample, () => new Sample())!;\n  pageStack: NavPathStack = new NavPathStack();\n\n  build() {\n    Text(`Index add 1 to data.id: ${this.data.sampleChild.id}`)\n      .fontSize(30)\n      .onClick(() => {\n        this.data.sampleChild.id++;\n      })\n  }\n}\n"
                          })
                        }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                          id: "typeconstructort",
                          children: "TypeConstructor<T>"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "类构造函数。"
                        }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                          id: "new-1",
                          children: "new"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "new(): T"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "创建并返回一个指定类型T的实例。"
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "元服务API："
                            })
                          }), " 从API version 12开始，该接口支持在元服务中使用。"]
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "系统能力："
                            })
                          }), " SystemCapability.ArkUI.ArkUI.Full"]
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: (0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "返回值："
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
                                children: "T"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "T类型的实例。"
                              })]
                            })
                          })]
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: (0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "示例："
                            })
                          })
                        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                          children: (0,jsx_runtime.jsx)(_components.code, {
                            children: "import { PersistenceV2, Type } from '@kit.ArkUI';\n\n@ObservedV2\nclass SampleChild {\n  @Trace id: number = 0;\n  count: number = 10;\n}\n\n@ObservedV2\nexport class Sample {\n  // 对于复杂对象需要@Type修饰，确保序列化成功\n  // TypeConstructor 指的是 SampleChild\n  @Type(SampleChild)\n  @Trace sampleChild: SampleChild = new SampleChild();\n}\n\n@Entry\n@ComponentV2\nstruct Index {\n  data: Sample = PersistenceV2.connect(Sample, () => new Sample())!;\n\n  build() {\n    Column() {\n      Text(`Index add 1 to data.id: ${this.data.sampleChild.id}`)\n        .fontSize(30)\n        .onClick(() => {\n          this.data.sampleChild.id++;\n        })\n    }\n  }\n}\n"
                          })
                        }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                          id: "typedecorator",
                          children: "TypeDecorator"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "type TypeDecorator = <T>(type: TypeConstructor<T>) => PropertyDecorator"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "属性装饰器。"
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "元服务API："
                            })
                          }), " 从API version 12开始，该接口支持在元服务中使用。"]
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "系统能力："
                            })
                          }), " SystemCapability.ArkUI.ArkUI.Full"]
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
                                children: "参数名"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "类型"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "必填"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "说明"
                              })]
                            })
                          }), (0,jsx_runtime.jsx)(_components.tbody, {
                            children: (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "type"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: (0,jsx_runtime.jsx)(_components.a, {
                                  href: "#typeconstructort",
                                  children: "TypeConstructor<T>"
                                })
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "是"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "标记类属性的类型。"
                              })]
                            })
                          })]
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: (0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "返回值："
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
                                children: "PropertyDecorator"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "属性装饰器。"
                              })]
                            })
                          })]
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: (0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "示例："
                            })
                          })
                        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                          children: (0,jsx_runtime.jsx)(_components.code, {
                            children: "import { PersistenceV2, Type } from '@kit.ArkUI';\n\n@ObservedV2\nclass SampleChild {\n  @Trace id: number = 0;\n  count: number = 10;\n}\n\n@ObservedV2\nexport class Sample {\n  // 对于复杂对象需要@Type修饰，确保序列化成功\n  // TypeDecorator 指的是 @Type\n  @Type(SampleChild)\n  @Trace sampleChild: SampleChild = new SampleChild();\n}\n\n@Entry\n@ComponentV2\nstruct Index {\n  data: Sample = PersistenceV2.connect(Sample, () => new Sample())!;\n\n  build() {\n    Column() {\n      Text(`Index add 1 to data.id: ${this.data.sampleChild.id}`)\n        .fontSize(30)\n        .onClick(() => {\n          this.data.sampleChild.id++;\n        })\n    }\n  }\n}\n"
                          })
                        }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                          id: "gettercallback20",
                          children: "GetterCallback20+"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "type GetterCallback<T> = () => T"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "获取值的回调方法。"
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "元服务API："
                            })
                          }), " 从API version 20开始，该接口支持在元服务中使用。"]
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "系统能力："
                            })
                          }), " SystemCapability.ArkUI.ArkUI.Full"]
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: (0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "返回值："
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
                                children: "T"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "T类型的值。"
                              })]
                            })
                          })]
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: (0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "示例："
                            })
                          })
                        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                          children: (0,jsx_runtime.jsx)(_components.code, {
                            children: "import { Binding, UIUtils } from '@kit.ArkUI';\n\n@Builder\nfunction CustomButton(num1: Binding<number>) {\n  Row() {\n    Button(`Custom Button: ${num1.value}`)\n      .onClick(() => {\n        // num1.value += 1; 会报错，Binding类型不支持修改\n      })\n  }\n}\n\n@Entry\n@ComponentV2\nstruct CompV2 {\n  @Local number1: number = 5;\n  @Local number2: number = 10;\n\n  build() {\n    Column() {\n      Text('parent component')\n\n      CustomButton(\n        // 对于UIUtils.makeBinding函数的第一个参数需要传入GetterCallback\n        UIUtils.makeBinding<number>(\n          () => this.number1 // GetterCallback\n        )\n      )\n    }\n  }\n}\n"
                          })
                        }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                          id: "settercallback20",
                          children: "SetterCallback20+"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "type SetterCallback<T> = (newValue: T) => void"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "设置值的回调方法。"
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "元服务API："
                            })
                          }), " 从API version 20开始，该接口支持在元服务中使用。"]
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "系统能力："
                            })
                          }), " SystemCapability.ArkUI.ArkUI.Full"]
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
                                children: "参数名"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "类型"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "必填"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "说明"
                              })]
                            })
                          }), (0,jsx_runtime.jsx)(_components.tbody, {
                            children: (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "newValue"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "T"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "是"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "类型为T的参数。"
                              })]
                            })
                          })]
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: (0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "示例："
                            })
                          })
                        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                          children: (0,jsx_runtime.jsx)(_components.code, {
                            children: "import { MutableBinding, UIUtils } from '@kit.ArkUI';\n\n@Builder\nfunction CustomButton(num2: MutableBinding<number>) {\n  Row() {\n    Button(`Custom Button: ${num2.value}`)\n      .onClick(() => {\n        // MutableBinding支持可变，可以修改num2.value\n        num2.value += 1;\n      })\n  }\n}\n\n@Entry\n@ComponentV2\nstruct CompV2 {\n  @Local number1: number = 5;\n  @Local number2: number = 10;\n\n  build() {\n    Column() {\n      Text('parent component')\n\n      CustomButton(\n        // 对于UIUtils.makeBinding函数的第二个参数需要传入SetterCallback\n        UIUtils.makeBinding<number>(\n          () => this.number2, // GetterCallback\n          (val: number) => {\n            this.number2 = val;\n          }) // SetterCallback 必须提供，否则触发时会造成运行时错误\n      )\n    }\n  }\n}\n"
                          })
                        }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                          id: "bindingt20",
                          children: "Binding<T>20+"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "只读数据绑定的泛型类，可以绑定任意类型的数据。"
                        }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                          id: "value20",
                          children: "value20+"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "get value(): T"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "提供get访问器，用于获取绑定的值。"
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "元服务API："
                            })
                          }), " 从API version 20开始，该接口支持在元服务中使用。"]
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "系统能力："
                            })
                          }), " SystemCapability.ArkUI.ArkUI.Full"]
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: (0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "返回值："
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
                                children: "T"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "返回值类型为泛型参数T，与Binding<T>定义的类型一致。"
                              })]
                            })
                          })]
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: (0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "示例："
                            })
                          })
                        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                          children: (0,jsx_runtime.jsx)(_components.code, {
                            children: "import { Binding, UIUtils } from '@kit.ArkUI';\n\n@Builder\nfunction CustomButton(num1: Binding<number>) {\n  // CustomButton的第一个参数为Binding，一个只读数据绑定的泛型类\n  Row() {\n    // num1.value Binding类可以使用绑定的值\n    Button(`Custom Button: ${num1.value}`)\n      .onClick(() => {\n        // num1.value += 1; 会报错，只读数据绑定的泛型类不能修改值\n      })\n  }\n}\n\n@Entry\n@ComponentV2\nstruct CompV2 {\n  @Local number1: number = 5;\n  @Local number2: number = 10;\n\n  build() {\n    Column() {\n      Text('parent component')\n\n      CustomButton(\n        UIUtils.makeBinding<number>(\n          () => this.number1 // GetterCallback\n        )\n      )\n    }\n  }\n}\n"
                          })
                        }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                          id: "mutablebindingt20",
                          children: "MutableBinding<T>20+"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "可变数据绑定的泛型类，允许对绑定值进行读写操作，提供完整的get和set访问器。"
                        }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                          id: "value20-1",
                          children: "value20+"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "set value(newValue: T)"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "提供set访问器，用于设置当前绑定值的值。构造MutableBinding类实例时必须提供set访问器，否则触发set访问器会造成运行时错误。"
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "元服务API："
                            })
                          }), " 从API version 20开始，该接口支持在元服务中使用。"]
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "系统能力："
                            })
                          }), " SystemCapability.ArkUI.ArkUI.Full"]
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
                                children: "参数名"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "类型"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "必填"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "说明"
                              })]
                            })
                          }), (0,jsx_runtime.jsx)(_components.tbody, {
                            children: (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "newValue"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "T"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "是"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "参数类型为泛型参数T，与MutableBinding<T>定义的类型一致。"
                              })]
                            })
                          })]
                        }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                          id: "value20-2",
                          children: "value20+"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "get value(): T"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "提供get访问器，用于获取当前绑定值。"
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "元服务API："
                            })
                          }), " 从API version 20开始，该接口支持在元服务中使用。"]
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "系统能力："
                            })
                          }), " SystemCapability.ArkUI.ArkUI.Full"]
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: (0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "返回值："
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
                                children: "T"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "返回值类型为泛型参数T，与Binding<T>定义的类型一致。"
                              })]
                            })
                          })]
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: (0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "示例："
                            })
                          })
                        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                          children: (0,jsx_runtime.jsx)(_components.code, {
                            children: "import { MutableBinding, UIUtils } from '@kit.ArkUI';\n\n@Builder\nfunction CustomButton(num2: MutableBinding<number>) {\n  // CustomButton的第二个参数为MutableBinding，一个可变数据绑定的泛型类\n  Row() {\n    Button(`Custom Button: ${num2.value}`)\n      .onClick(() => {\n        // 可变数据绑定的泛型类可以修改绑定的值\n        num2.value += 1;\n      })\n  }\n}\n\n@Entry\n@ComponentV2\nstruct CompV2 {\n  @Local number1: number = 5;\n  @Local number2: number = 10;\n\n  build() {\n    Column() {\n      Text('parent component')\n\n      CustomButton(\n        UIUtils.makeBinding<number>(\n          () => this.number2, // GetterCallback\n          (val: number) => {\n            this.number2 = val;\n          }) // SetterCallback 必须提供，否则触发时会造成运行时错误\n      )\n    }\n  }\n}\n"
                          })
                        }), "\n"]
                      })
                    })
                  })]
                })
              })]
            })
          })
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
631272(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
551365(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
26456(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
854237(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
892500(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
351228(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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