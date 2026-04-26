"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["309236"], {
648941(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_declarative_comp_state_management_and_rendering_control_ts_state_management_ts_state_management_md_531_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-declarative-comp-state-management-and-rendering-control-ts-state-management-ts-state-management-md-531.json
var site_docs_ref_arkui_api_arkui_declarative_comp_state_management_and_rendering_control_ts_state_management_ts_state_management_md_531_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-declarative-comp/state-management-and-rendering-control/ts-state-management/ts-state-management","title":"应用级变量的状态管理","description":"状态管理模块提供了应用程序的数据存储能力、持久化数据管理能力、UIAbility数据存储能力和应用程序需要的环境状态。","source":"@site/docs-ref/arkui-api/arkui-declarative-comp/state-management-and-rendering-control/ts-state-management/ts-state-management.md","sourceDirName":"arkui-api/arkui-declarative-comp/state-management-and-rendering-control/ts-state-management","slug":"/arkui-api/arkui-declarative-comp/state-management-and-rendering-control/ts-state-management/ts-state-management","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/state-management-and-rendering-control/ts-state-management/ts-state-management","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"应用级变量的状态管理","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-state-management","kit":"应用框架","last_updated":"2026-04-22","slug":"ts-state-management"},"sidebar":"ref","previous":{"title":"advanced.Counter","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-counter/ohos-arkui-advanced-counter"},"next":{"title":"状态管理V1装饰器参数","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/state-management-and-rendering-control/ts-state-management-v1-parameter/ts-state-management-v1-parameter"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-declarative-comp/state-management-and-rendering-control/ts-state-management/ts-state-management.md


const frontMatter = {
	title: '应用级变量的状态管理',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-state-management',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'ts-state-management'
};
const contentTitle = '应用级变量的状态管理';

const assets = {

};



const toc = [{
  "value": "AppStorage",
  "id": "appstorage",
  "level": 2
}, {
  "value": "ref12+",
  "id": "ref12",
  "level": 3
}, {
  "value": "setAndRef12+",
  "id": "setandref12",
  "level": 3
}, {
  "value": "link10+",
  "id": "link10",
  "level": 3
}, {
  "value": "setAndLink10+",
  "id": "setandlink10",
  "level": 3
}, {
  "value": "prop10+",
  "id": "prop10",
  "level": 3
}, {
  "value": "setAndProp10+",
  "id": "setandprop10",
  "level": 3
}, {
  "value": "has10+",
  "id": "has10",
  "level": 3
}, {
  "value": "get10+",
  "id": "get10",
  "level": 3
}, {
  "value": "set10+",
  "id": "set10",
  "level": 3
}, {
  "value": "setOrCreate10+",
  "id": "setorcreate10",
  "level": 3
}, {
  "value": "delete10+",
  "id": "delete10",
  "level": 3
}, {
  "value": "keys10+",
  "id": "keys10",
  "level": 3
}, {
  "value": "clear10+",
  "id": "clear10",
  "level": 3
}, {
  "value": "size10+",
  "id": "size10",
  "level": 3
}, {
  "value": "Link(deprecated)",
  "id": "linkdeprecated",
  "level": 3
}, {
  "value": "SetAndLink(deprecated)",
  "id": "setandlinkdeprecated",
  "level": 3
}, {
  "value": "Prop(deprecated)",
  "id": "propdeprecated",
  "level": 3
}, {
  "value": "SetAndProp(deprecated)",
  "id": "setandpropdeprecated",
  "level": 3
}, {
  "value": "Has(deprecated)",
  "id": "hasdeprecated",
  "level": 3
}, {
  "value": "Get(deprecated)",
  "id": "getdeprecated",
  "level": 3
}, {
  "value": "Set(deprecated)",
  "id": "setdeprecated",
  "level": 3
}, {
  "value": "SetOrCreate(deprecated)",
  "id": "setorcreatedeprecated",
  "level": 3
}, {
  "value": "Delete(deprecated)",
  "id": "deletedeprecated",
  "level": 3
}, {
  "value": "Keys(deprecated)",
  "id": "keysdeprecated",
  "level": 3
}, {
  "value": "staticClear(deprecated)",
  "id": "staticcleardeprecated",
  "level": 3
}, {
  "value": "Clear(deprecated)",
  "id": "cleardeprecated",
  "level": 3
}, {
  "value": "IsMutable(deprecated)",
  "id": "ismutabledeprecated",
  "level": 3
}, {
  "value": "Size(deprecated)",
  "id": "sizedeprecated",
  "level": 3
}, {
  "value": "LocalStorage9+",
  "id": "localstorage9",
  "level": 2
}, {
  "value": "constructor9+",
  "id": "constructor9",
  "level": 3
}, {
  "value": "getShared(deprecated)",
  "id": "getshareddeprecated",
  "level": 3
}, {
  "value": "has9+",
  "id": "has9",
  "level": 3
}, {
  "value": "get9+",
  "id": "get9",
  "level": 3
}, {
  "value": "set9+",
  "id": "set9",
  "level": 3
}, {
  "value": "setOrCreate9+",
  "id": "setorcreate9",
  "level": 3
}, {
  "value": "ref12+",
  "id": "ref12-1",
  "level": 3
}, {
  "value": "setAndRef12+",
  "id": "setandref12-1",
  "level": 3
}, {
  "value": "link9+",
  "id": "link9",
  "level": 3
}, {
  "value": "setAndLink9+",
  "id": "setandlink9",
  "level": 3
}, {
  "value": "prop9+",
  "id": "prop9",
  "level": 3
}, {
  "value": "setAndProp9+",
  "id": "setandprop9",
  "level": 3
}, {
  "value": "delete9+",
  "id": "delete9",
  "level": 3
}, {
  "value": "keys9+",
  "id": "keys9",
  "level": 3
}, {
  "value": "size9+",
  "id": "size9",
  "level": 3
}, {
  "value": "clear9+",
  "id": "clear9",
  "level": 3
}, {
  "value": "GetShared(deprecated)",
  "id": "getshareddeprecated-1",
  "level": 3
}, {
  "value": "AbstractProperty12+",
  "id": "abstractproperty12",
  "level": 2
}, {
  "value": "get12+",
  "id": "get12",
  "level": 3
}, {
  "value": "set12+",
  "id": "set12",
  "level": 3
}, {
  "value": "info12+",
  "id": "info12",
  "level": 3
}, {
  "value": "SubscribedAbstractProperty",
  "id": "subscribedabstractproperty",
  "level": 2
}, {
  "value": "get9+",
  "id": "get9-1",
  "level": 3
}, {
  "value": "set9+",
  "id": "set9-1",
  "level": 3
}, {
  "value": "aboutToBeDeleted10+",
  "id": "abouttobedeleted10",
  "level": 3
}, {
  "value": "info10+",
  "id": "info10",
  "level": 3
}, {
  "value": "PersistPropsOptions10+",
  "id": "persistpropsoptions10",
  "level": 2
}, {
  "value": "PersistentStorage",
  "id": "persistentstorage",
  "level": 2
}, {
  "value": "persistProp10+",
  "id": "persistprop10",
  "level": 3
}, {
  "value": "deleteProp10+",
  "id": "deleteprop10",
  "level": 3
}, {
  "value": "persistProps10+",
  "id": "persistprops10",
  "level": 3
}, {
  "value": "keys10+",
  "id": "keys10-1",
  "level": 3
}, {
  "value": "PersistProp(deprecated)",
  "id": "persistpropdeprecated",
  "level": 3
}, {
  "value": "DeleteProp(deprecated)",
  "id": "deletepropdeprecated",
  "level": 3
}, {
  "value": "PersistProps(deprecated)",
  "id": "persistpropsdeprecated",
  "level": 3
}, {
  "value": "Keys(deprecated)",
  "id": "keysdeprecated-1",
  "level": 3
}, {
  "value": "EnvPropsOptions10+",
  "id": "envpropsoptions10",
  "level": 2
}, {
  "value": "Environment",
  "id": "environment",
  "level": 2
}, {
  "value": "envProp10+",
  "id": "envprop10",
  "level": 3
}, {
  "value": "envProps10+",
  "id": "envprops10",
  "level": 3
}, {
  "value": "keys10+",
  "id": "keys10-2",
  "level": 3
}, {
  "value": "EnvProp(deprecated)",
  "id": "envpropdeprecated",
  "level": 3
}, {
  "value": "EnvProps(deprecated)",
  "id": "envpropsdeprecated",
  "level": 3
}, {
  "value": "Keys(deprecated)",
  "id": "keysdeprecated-2",
  "level": 3
}, {
  "value": "内置环境变量说明",
  "id": "内置环境变量说明",
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
    ol: "ol",
    p: "p",
    pre: "pre",
    s: "s",
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
        id: "应用级变量的状态管理",
        children: "应用级变量的状态管理"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "状态管理模块提供了应用程序的数据存储能力、持久化数据管理能力、UIAbility数据存储能力和应用程序需要的环境状态。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(54228)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本模块首批接口从API version 7开始支持，后续版本的新增接口，采用上角标单独标记接口的起始版本。"
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
      id: "appstorage",
      children: "AppStorage"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["AppStorage具体UI使用说明，详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-appstorage",
        children: "AppStorage(应用全局的UI状态存储)"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ref12",
      children: "ref12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "static ref<T>(propName: string): AbstractProperty<T> | undefined"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果给定的propName在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-appstorage",
        children: "AppStorage"
      }), "中存在，则返回AppStorage中propName对应属性的引用。否则，返回undefined。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["与", (0,jsx_runtime.jsx)(_components.a, {
        href: "#link10",
        children: "link"
      }), "的功能基本一致，但不需要手动释放返回的", (0,jsx_runtime.jsx)(_components.a, {
        href: "#abstractproperty12",
        children: "AbstractProperty"
      }), "类型的变量。"]
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
            children: "propName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AppStorage中的属性名。"
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
              href: "#abstractproperty12",
              children: "AbstractProperty<T>"
            })
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
        children: "AppStorage.setOrCreate('PropA', 47);\nlet refToPropA1: AbstractProperty<number> | undefined = AppStorage.ref('PropA');\nlet refToPropA2: AbstractProperty<number> | undefined = AppStorage.ref('PropA'); // refToPropA2.get() == 47\nrefToPropA1?.set(48); // 同步修改AppStorage: refToPropA1.get() == refToPropA2.get() == 48\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "setandref12",
      children: "setAndRef12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "static setAndRef<T>(propName: string, defaultValue: T): AbstractProperty<T>"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["与", (0,jsx_runtime.jsx)(_components.a, {
        href: "#ref12",
        children: "ref"
      }), "接口类似，如果给定的propName在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-appstorage",
        children: "AppStorage"
      }), "中存在，则返回AppStorage中propName对应属性的引用。如果不存在，则使用defaultValue在AppStorage中创建和初始化propName对应的属性，并返回其引用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["与", (0,jsx_runtime.jsx)(_components.a, {
        href: "#setandlink10",
        children: "setAndLink"
      }), "的功能基本一致，但不需要手动释放返回的", (0,jsx_runtime.jsx)(_components.a, {
        href: "#abstractproperty12",
        children: "AbstractProperty"
      }), "类型的变量。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(668414)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 12开始，AppStorage支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-appstorage#%E8%A3%85%E9%A5%B0map%E7%B1%BB%E5%9E%8B%E5%8F%98%E9%87%8F",
        children: "Map"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-appstorage#%E8%A3%85%E9%A5%B0set%E7%B1%BB%E5%9E%8B%E5%8F%98%E9%87%8F",
        children: "Set"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-appstorage#%E8%A3%85%E9%A5%B0date%E7%B1%BB%E5%9E%8B%E5%8F%98%E9%87%8F",
        children: "Date类型"
      }), "，支持null、undefined以及", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-appstorage#appstorage%E6%94%AF%E6%8C%81%E8%81%94%E5%90%88%E7%B1%BB%E5%9E%8B",
        children: "联合类型"
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
            children: "propName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AppStorage中的属性名。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "defaultValue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当propName在AppStorage中不存在时，使用defaultValue在AppStorage中初始化propName对应属性的值，defaultValue可以为null或undefined。"
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
              href: "#abstractproperty12",
              children: "AbstractProperty<T>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AbstractProperty<T>的实例，为AppStorage中propName对应属性的引用。"
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
        children: "AppStorage.setOrCreate('PropA', 47);\nlet ref1: AbstractProperty<number> = AppStorage.setAndRef('PropB', 49); // 用默认值49创建PropB\nlet ref2: AbstractProperty<number> = AppStorage.setAndRef('PropA', 50); // PropA已存在，值为47\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "link10",
      children: "link10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "static link<T>(propName: string): SubscribedAbstractProperty<T>"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["与", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-appstorage",
        children: "AppStorage"
      }), "中对应的propName建立双向数据绑定。如果给定的propName在AppStorage中存在，返回AppStorage中propName对应属性的双向绑定数据。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "双向绑定数据的修改会同步回AppStorage中，AppStorage会将变化同步到所有绑定该propName的数据和自定义组件中。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果AppStorage中不存在propName，则返回undefined。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
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
            children: "propName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AppStorage中的属性名。"
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
              href: "#subscribedabstractproperty",
              children: "SubscribedAbstractProperty<T>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回双向绑定的数据，如果AppStorage中不存在对应的propName，则返回undefined。"
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
        children: "AppStorage.setOrCreate('PropA', 47);\nlet linkToPropA1: SubscribedAbstractProperty<number> = AppStorage.link('PropA');\nlet linkToPropA2: SubscribedAbstractProperty<number> = AppStorage.link('PropA'); // linkToPropA2.get() == 47\nlinkToPropA1.set(48); // 双向同步: linkToPropA1.get() == linkToPropA2.get() == 48\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "setandlink10",
      children: "setAndLink10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "static setAndLink<T>(propName: string, defaultValue: T): SubscribedAbstractProperty<T>"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["与", (0,jsx_runtime.jsx)(_components.a, {
        href: "#link10",
        children: "link"
      }), "接口类似，如果给定的propName在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-appstorage",
        children: "AppStorage"
      }), "中存在，则返回该propName对应的属性的双向绑定数据。如果不存在，则使用defaultValue在AppStorage中创建和初始化propName对应的属性，返回其双向绑定数据。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(781349)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 12开始，AppStorage支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-appstorage#%E8%A3%85%E9%A5%B0map%E7%B1%BB%E5%9E%8B%E5%8F%98%E9%87%8F",
        children: "Map"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-appstorage#%E8%A3%85%E9%A5%B0set%E7%B1%BB%E5%9E%8B%E5%8F%98%E9%87%8F",
        children: "Set"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-appstorage#%E8%A3%85%E9%A5%B0date%E7%B1%BB%E5%9E%8B%E5%8F%98%E9%87%8F",
        children: "Date类型"
      }), "，支持null、undefined以及", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-appstorage#appstorage%E6%94%AF%E6%8C%81%E8%81%94%E5%90%88%E7%B1%BB%E5%9E%8B",
        children: "联合类型"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
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
            children: "propName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AppStorage中的属性名。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "defaultValue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当propName在AppStorage中不存在时，使用defaultValue在AppStorage中初始化propName对应属性的值，从API version 12开始，defaultValue可以为null或undefined。"
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
              href: "#subscribedabstractproperty",
              children: "SubscribedAbstractProperty<T>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SubscribedAbstractProperty<T>的实例，为AppStorage中propName对应属性的双向绑定的数据。"
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
        children: "AppStorage.setOrCreate('PropA', 47);\nlet link1: SubscribedAbstractProperty<number> = AppStorage.setAndLink('PropB', 49); // 用默认值49创建PropB\nlet link2: SubscribedAbstractProperty<number> = AppStorage.setAndLink('PropA', 50); // PropA已存在，值为47\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "prop10",
      children: "prop10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "static prop<T>(propName: string): SubscribedAbstractProperty<T>"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["与", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-appstorage",
        children: "AppStorage"
      }), "中对应的propName建立单向属性绑定。如果给定的propName在AppStorage中存在，则返回与AppStorage中propName对应属性的单向绑定数据。如果AppStorage中不存在propName，则返回undefined。单向绑定数据的修改不会被同步回AppStorage中。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
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
            children: "propName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AppStorage中的属性名。"
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
              href: "#subscribedabstractproperty",
              children: "SubscribedAbstractProperty<T>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回单向绑定的数据，如果AppStorage中不存在对应的propName，则返回undefined。"
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
        children: "AppStorage.setOrCreate('PropA', 47);\nlet prop1: SubscribedAbstractProperty<number> = AppStorage.prop('PropA');\nlet prop2: SubscribedAbstractProperty<number> = AppStorage.prop('PropA');\nprop1.set(1); // 单向同步：prop1.get()的值为1，prop2.get()的值为47\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "setandprop10",
      children: "setAndProp10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "static setAndProp<T>(propName: string, defaultValue: T): SubscribedAbstractProperty<T>"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["与", (0,jsx_runtime.jsx)(_components.a, {
        href: "#prop10",
        children: "prop"
      }), "接口类似。如果给定的propName在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-appstorage",
        children: "AppStorage"
      }), "中存在，则返回该propName对应的属性的单向绑定数据。如果不存在，则使用defaultValue在AppStorage中创建和初始化propName对应的属性，返回其单向绑定数据。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(393)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 12开始，AppStorage支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-appstorage#%E8%A3%85%E9%A5%B0map%E7%B1%BB%E5%9E%8B%E5%8F%98%E9%87%8F",
        children: "Map"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-appstorage#%E8%A3%85%E9%A5%B0set%E7%B1%BB%E5%9E%8B%E5%8F%98%E9%87%8F",
        children: "Set"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-appstorage#%E8%A3%85%E9%A5%B0date%E7%B1%BB%E5%9E%8B%E5%8F%98%E9%87%8F",
        children: "Date类型"
      }), "，支持null、undefined以及", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-appstorage#appstorage%E6%94%AF%E6%8C%81%E8%81%94%E5%90%88%E7%B1%BB%E5%9E%8B",
        children: "联合类型"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
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
            children: "propName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AppStorage中的属性名。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "defaultValue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当propName在AppStorage中不存在时，使用defaultValue在AppStorage中初始化propName对应属性的值，从API version 12开始，defaultValue可以为null或undefined。"
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
              href: "#subscribedabstractproperty",
              children: "SubscribedAbstractProperty<T>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SubscribedAbstractProperty<T>的实例。"
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
        children: "AppStorage.setOrCreate('PropA', 47);\nlet prop: SubscribedAbstractProperty<number> = AppStorage.setAndProp('PropB', 49); // PropA -> 47, PropB -> 49\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "has10",
      children: "has10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "static has(propName: string): boolean"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["判断propName对应的属性是否在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-appstorage",
        children: "AppStorage"
      }), "中存在。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
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
            children: "propName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AppStorage中的属性名。"
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
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "如果propName对应的属性在AppStorage中存在，则返回true。不存在则返回false。"
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
        children: "AppStorage.has('simpleProp');\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "get10",
      children: "get10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "static get<T>(propName: string): T | undefined"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["获取propName在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-appstorage",
        children: "AppStorage"
      }), "中对应的属性值。如果不存在则返回undefined。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
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
            children: "propName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AppStorage中的属性名。"
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
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AppStorage.setOrCreate('PropA', 47);\nlet value: number = AppStorage.get('PropA') as number; // 47\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "set10",
      children: "set10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "static set<T>(propName: string, newValue: T): boolean"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-appstorage",
        children: "AppStorage"
      }), "中设置propName对应属性的值。如果newValue的值和propName对应属性的值相同，即不需要做赋值操作，状态变量不会通知UI刷新propName对应属性的值。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(672800)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 12开始，AppStorage支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-appstorage#%E8%A3%85%E9%A5%B0map%E7%B1%BB%E5%9E%8B%E5%8F%98%E9%87%8F",
        children: "Map"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-appstorage#%E8%A3%85%E9%A5%B0set%E7%B1%BB%E5%9E%8B%E5%8F%98%E9%87%8F",
        children: "Set"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-appstorage#%E8%A3%85%E9%A5%B0date%E7%B1%BB%E5%9E%8B%E5%8F%98%E9%87%8F",
        children: "Date类型"
      }), "，支持null、undefined以及", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-appstorage#appstorage%E6%94%AF%E6%8C%81%E8%81%94%E5%90%88%E7%B1%BB%E5%9E%8B",
        children: "联合类型"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
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
            children: "propName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AppStorage中的属性名。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "newValue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "属性值，从API version 12开始可以为null或undefined。"
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
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "如果AppStorage中不存在propName对应的属性，或设值失败，则返回false。设置成功则返回true。"
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
        children: "AppStorage.setOrCreate('PropA', 48);\nlet res: boolean = AppStorage.set('PropA', 47) // true\nlet res1: boolean = AppStorage.set('PropB', 47) // false\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "setorcreate10",
      children: "setOrCreate10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "static setOrCreate<T>(propName: string, newValue: T): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果propName已经在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-appstorage",
        children: "AppStorage"
      }), "中存在，并且newValue和propName对应属性的值不同，则设置propName对应属性的值为newValue，否则状态变量不会通知UI刷新propName对应属性的值。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果propName不存在，则创建propName属性，值为newValue。setOrCreate只可以创建单个AppStorage的键值对，如果想创建多个AppStorage键值对，可以多次调用此方法。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(718174)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 12开始，AppStorage支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-appstorage#%E8%A3%85%E9%A5%B0map%E7%B1%BB%E5%9E%8B%E5%8F%98%E9%87%8F",
        children: "Map"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-appstorage#%E8%A3%85%E9%A5%B0set%E7%B1%BB%E5%9E%8B%E5%8F%98%E9%87%8F",
        children: "Set"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-appstorage#%E8%A3%85%E9%A5%B0date%E7%B1%BB%E5%9E%8B%E5%8F%98%E9%87%8F",
        children: "Date类型"
      }), "，支持null、undefined以及", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-appstorage#appstorage%E6%94%AF%E6%8C%81%E8%81%94%E5%90%88%E7%B1%BB%E5%9E%8B",
        children: "联合类型"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
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
            children: "propName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AppStorage中的属性名。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "newValue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "属性值，从API version 12开始可以为null或undefined。"
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
        children: "AppStorage.setOrCreate('simpleProp', 121);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "delete10",
      children: "delete10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "static delete(propName: string): boolean"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-appstorage",
        children: "AppStorage"
      }), "中删除propName对应的属性。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在AppStorage中删除该属性的前提是必须保证该属性没有订阅者。如果有订阅者，则返回false。如果没有订阅者，则删除成功并返回true。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "属性的订阅者为："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-appstorage#storagelink",
          children: "@StorageLink"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-appstorage#storageprop",
          children: "@StorageProp"
        }), "装饰的变量。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "#link10",
          children: "link"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "#prop10",
          children: "prop"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "#setandlink10",
          children: "setAndLink"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "#setandprop10",
          children: "setAndProp"
        }), "接口返回的", (0,jsx_runtime.jsx)(_components.a, {
          href: "#subscribedabstractproperty",
          children: "SubscribedAbstractProperty"
        }), "的实例。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果想要删除这些订阅者，可以通过以下方式："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["删除@StorageLink、@StorageProp所在的自定义组件。删除自定义组件请参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-page-custom-components-lifecycle#%E8%87%AA%E5%AE%9A%E4%B9%89%E7%BB%84%E4%BB%B6%E7%9A%84%E5%88%A0%E9%99%A4",
          children: "自定义组件的删除"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["对link、prop、setAndLink、setAndProp接口返回的SubscribedAbstractProperty的实例调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "#abouttobedeleted10",
          children: "aboutToBeDeleted"
        }), "接口。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
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
            children: "propName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AppStorage中的属性名。"
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
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "如果AppStorage中有对应的属性，且该属性已经没有订阅者，则删除成功，返回true。如果属性不存在，或者该属性还存在订阅者，则返回false。"
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
        children: "AppStorage.setOrCreate('PropA', 47);\nAppStorage.link<number>('PropA');\nlet res: boolean = AppStorage.delete('PropA'); // false，PropA 还存在订阅者\n\nAppStorage.setOrCreate('PropB', 48);\nlet res1: boolean = AppStorage.delete('PropB'); // true，PropB 已从AppStorage成功删除\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "keys10",
      children: "keys10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "static keys(): IterableIterator<string>"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["返回", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-appstorage",
        children: "AppStorage"
      }), "中所有的属性名。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
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
            children: "IterableIterator<string>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AppStorage中所有的属性名。"
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
        children: "AppStorage.setOrCreate('PropB', 48);\nlet keys: IterableIterator<string> = AppStorage.keys();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "clear10",
      children: "clear10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "static clear(): boolean"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["删除", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-appstorage",
        children: "AppStorage"
      }), "中所有属性。删除所有属性的前提是，AppStorage已经没有任何订阅者。如果有订阅者，clear将不会生效并返回false。如果没有订阅者，则删除成功，并返回true。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["订阅者的含义参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#delete10",
        children: "delete"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
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
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "如果AppStorage中的属性已经没有订阅者则删除成功，返回true；如果当前仍有订阅者，返回false。"
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
        children: "AppStorage.setOrCreate('PropA', 47);\nlet res: boolean = AppStorage.clear(); // true，已经没有订阅者\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "size10",
      children: "size10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "static size(): number"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["返回", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-appstorage",
        children: "AppStorage"
      }), "中的属性数量。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
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
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回AppStorage中属性的数量。"
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
        children: "AppStorage.setOrCreate('PropB', 48);\nlet res: number = AppStorage.size(); // 1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "linkdeprecated",
      children: "Link(deprecated)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "static Link(propName: string): any"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["与", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-appstorage",
        children: "AppStorage"
      }), "中对应的propName建立双向数据绑定。如果给定的propName在AppStorage中存在，返回与AppStorage中propName对应属性的双向绑定数据。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "双向绑定数据的修改会同步回AppStorage中，AppStorage会将变化同步到所有绑定该propName的数据和自定义组件中。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果AppStorage中不存在propName，则返回undefined。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(971761)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 7开始支持，从API version 10开始废弃，建议使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#link10",
        children: "link"
      }), "替代。"]
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
            children: "propName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AppStorage中的属性名。"
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
            children: "any"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回双向绑定的数据，如果AppStorage中不存在对应的propName，则返回undefined。"
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
        children: "AppStorage.SetOrCreate('PropA', 47);\nlet linkToPropA1: SubscribedAbstractProperty<number> = AppStorage.Link('PropA');\nlet linkToPropA2: SubscribedAbstractProperty<number> = AppStorage.Link('PropA'); // linkToPropA2.get() == 47\nlinkToPropA1.set(48); // 双向同步: linkToPropA1.get() == linkToPropA2.get() == 48\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "setandlinkdeprecated",
      children: "SetAndLink(deprecated)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "static SetAndLink<T>(propName: string, defaultValue: T): SubscribedAbstractProperty<T>"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["与", (0,jsx_runtime.jsx)(_components.a, {
        href: "#linkdeprecated",
        children: "Link"
      }), "接口类似，如果给定的propName在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-appstorage",
        children: "AppStorage"
      }), "中存在，则返回该propName对应的属性的双向绑定数据。如果不存在，则使用defaultValue在AppStorage中创建和初始化propName对应的属性，并返回其双向绑定数据。defaultValue必须为T类型，且不能为null或undefined。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(243802)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 7开始支持，从API version 10开始废弃，建议使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#setandlink10",
        children: "setAndLink"
      }), "替代。"]
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
            children: "propName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AppStorage中的属性名。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "defaultValue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当propName在AppStorage中不存在，使用defaultValue在AppStorage中初始化propName对应属性的值，defaultValue不能为null或undefined。"
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
              href: "#subscribedabstractproperty",
              children: "SubscribedAbstractProperty<T>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SubscribedAbstractProperty<T>的实例，和AppStorage中propName对应属性的双向绑定的数据。"
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
        children: "AppStorage.SetOrCreate('PropA', 47);\nlet link1: SubscribedAbstractProperty<number> = AppStorage.SetAndLink('PropB', 49); // 用默认值49创建PropB\nlet link2: SubscribedAbstractProperty<number> = AppStorage.SetAndLink('PropA', 50); // PropA已存在，值为47\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "propdeprecated",
      children: "Prop(deprecated)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "static Prop(propName: string): any"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["与", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-appstorage",
        children: "AppStorage"
      }), "中对应的propName建立单向属性绑定。如果给定的propName在AppStorage中存在，则返回与AppStorage中propName对应属性的单向绑定数据。如果AppStorage中不存在propName，则返回undefined。单向绑定数据的修改不会被同步回AppStorage中。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(209998)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Prop仅支持简单类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 7开始支持，从API version 10开始废弃，建议使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#prop10",
        children: "prop"
      }), "替代。"]
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
            children: "propName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AppStorage中的属性名。"
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
            children: "any"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回单向绑定的数据，如果AppStorage中不存在对应的propName，则返回undefined。"
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
        children: "AppStorage.SetOrCreate('PropA', 47);\nlet prop1: SubscribedAbstractProperty<number> = AppStorage.Prop('PropA');\nlet prop2: SubscribedAbstractProperty<number> = AppStorage.Prop('PropA');\nprop1.set(1); // 单向同步：prop1.get()的值为1，prop2.get()的值为47\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "setandpropdeprecated",
      children: "SetAndProp(deprecated)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["static SetAndProp", (0,jsx_runtime.jsxs)(_components.s, {
        children: ["(propName: string, defaultValue: S): SubscribedAbstractProperty", (0,jsx_runtime.jsx)(_components.s, {})]
      })]
    }), (0,jsx_runtime.jsx)(_components.s, {
      children: (0,jsx_runtime.jsxs)(_components.s, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["与", (0,jsx_runtime.jsx)(_components.a, {
            href: "#propdeprecated",
            children: "Prop"
          }), "接口类似。如果给定的propName在", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-appstorage",
            children: "AppStorage"
          }), "中存在，则返回该propName对应的属性的单向绑定数据。如果不存在，则使用defaultValue在AppStorage中创建和初始化propName对应的属性，返回其单向绑定数据。defaultValue必须为S类型，且不能为null或undefined。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(951720)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["从API version 7开始支持，从API version 10开始废弃，建议使用", (0,jsx_runtime.jsx)(_components.a, {
            href: "#setandprop10",
            children: "setAndProp"
          }), "替代。"]
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
                children: "propName"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "string"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "AppStorage中的属性名。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "defaultValue"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "S"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "当propName在AppStorage中不存在时，使用defaultValue在AppStorage中初始化propName对应属性的值，defaultValue不能为null或undefined。"
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
                  href: "#subscribedabstractproperty",
                  children: "SubscribedAbstractProperty<S>"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SubscribedAbstractProperty<S>的实例。"
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
            children: "AppStorage.SetOrCreate('PropA', 47);\nlet prop: SubscribedAbstractProperty<number> = AppStorage.SetAndProp('PropB', 49); // PropA -> 47, PropB -> 49\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
          id: "hasdeprecated",
          children: "Has(deprecated)"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "static Has(propName: string): boolean"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["判断propName对应的属性是否在", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-appstorage",
            children: "AppStorage"
          }), "中存在。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(502681)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["从API version 7开始支持，从API version 10开始废弃，建议使用", (0,jsx_runtime.jsx)(_components.a, {
            href: "#has10",
            children: "has"
          }), "替代。"]
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
                children: "propName"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "string"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "AppStorage中的属性名。"
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
                children: "boolean"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "如果propName对应的属性在AppStorage中存在，则返回true。不存在则返回false。"
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
            children: "AppStorage.Has('simpleProp');\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
          id: "getdeprecated",
          children: "Get(deprecated)"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "static Get<T>(propName: string): T | undefined"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["获取propName在", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-appstorage",
            children: "AppStorage"
          }), "中对应的属性值。如果不存在则返回undefined。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(258650)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["从API version 7开始支持，从API version 10开始废弃，建议使用", (0,jsx_runtime.jsx)(_components.a, {
            href: "#get10",
            children: "get"
          }), "替代。"]
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
                children: "propName"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "string"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "AppStorage中的属性名。"
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
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "示例："
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "AppStorage.SetOrCreate('PropA', 47);\nlet value: number = AppStorage.Get('PropA') as number; // 47\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
          id: "setdeprecated",
          children: "Set(deprecated)"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "static Set<T>(propName: string, newValue: T): boolean"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-appstorage",
            children: "AppStorage"
          }), "中设置propName对应属性的值，如果newValue的值和propName对应属性的值相同，即不需要做赋值操作，状态变量不会通知UI刷新propName对应属性的值，从API version 12开始，newValue可以为null或undefined。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(913608)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["从API version 7开始支持，从API version 10开始废弃，建议使用", (0,jsx_runtime.jsx)(_components.a, {
            href: "#set10",
            children: "set"
          }), "替代。"]
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
                children: "propName"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "string"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "AppStorage中的属性名。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "newValue"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "T"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "属性值，从API version 12开始可以为null或undefined。"
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
                children: "boolean"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "如果AppStorage中不存在propName对应的属性，返回false。设置成功则返回true。"
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
            children: "AppStorage.SetOrCreate('PropA', 48);\nlet res: boolean = AppStorage.Set('PropA', 47) // true\nlet res1: boolean = AppStorage.Set('PropB', 47) // false\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
          id: "setorcreatedeprecated",
          children: "SetOrCreate(deprecated)"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "static SetOrCreate<T>(propName: string, newValue: T): void"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["如果propName已经在", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-appstorage",
            children: "AppStorage"
          }), "中存在，则设置propName对应的属性值为newValue。如果不存在，则创建propName属性，值为newValue。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "newValue不能为null或undefined。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(625114)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["从API version 7开始支持，从API version 10开始废弃，建议使用", (0,jsx_runtime.jsx)(_components.a, {
            href: "#setorcreate10",
            children: "setOrCreate"
          }), "替代。"]
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
                children: "propName"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "string"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "AppStorage中的属性名。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "newValue"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "T"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "属性值，不能为null或undefined。"
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
            children: "AppStorage.SetOrCreate('simpleProp', 121);\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
          id: "deletedeprecated",
          children: "Delete(deprecated)"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "static Delete(propName: string): boolean"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-appstorage",
            children: "AppStorage"
          }), "中删除propName对应的属性。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在AppStorage中删除该属性的前提是必须保证该属性没有订阅者。如果有订阅者，则返回false。如果没有订阅者则删除成功并返回true。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["属性的订阅者为", (0,jsx_runtime.jsx)(_components.a, {
            href: "#linkdeprecated",
            children: "Link"
          }), "、", (0,jsx_runtime.jsx)(_components.a, {
            href: "#propdeprecated",
            children: "Prop"
          }), "等接口绑定的propName，以及", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-appstorage#storagelink",
            children: "@StorageLink('propName')"
          }), "和", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-appstorage#storageprop",
            children: "@StorageProp('propName')"
          }), "。如果自定义组件中使用@StorageLink('propName')和@StorageProp('propName')或者SubscribedAbstractProperty实例依旧对propName有同步关系，则该属性不能从AppStorage中删除。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(964372)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["从API version 7开始支持，从API version 10开始废弃，建议使用", (0,jsx_runtime.jsx)(_components.a, {
            href: "#delete10",
            children: "delete"
          }), "替代。"]
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
                children: "propName"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "string"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "AppStorage中的属性名。"
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
                children: "boolean"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "如果AppStorage中有对应的属性，且该属性已经没有订阅者，则删除成功，返回true。如果属性不存在，或者该属性还存在订阅者，则返回false。"
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
            children: "AppStorage.SetOrCreate('PropA', 47);\nAppStorage.Link('PropA');\nlet res: boolean = AppStorage.Delete('PropA'); // false，PropA 还存在订阅者\n\nAppStorage.SetOrCreate('PropB', 48);\nlet res1: boolean = AppStorage.Delete('PropB'); // true，PropB 已从AppStorage成功删除\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
          id: "keysdeprecated",
          children: "Keys(deprecated)"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "static Keys(): IterableIterator<string>"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["返回", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-appstorage",
            children: "AppStorage"
          }), "中所有的属性名。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(308706)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["从API version 7开始支持，从API version 10开始废弃，建议使用", (0,jsx_runtime.jsx)(_components.a, {
            href: "#keys10",
            children: "keys"
          }), "替代。"]
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
                children: "IterableIterator<string>"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "AppStorage中所有的属性名。"
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
            children: "AppStorage.SetOrCreate('PropB', 48);\nlet keys: IterableIterator<string> = AppStorage.Keys();\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
          id: "staticcleardeprecated",
          children: "staticClear(deprecated)"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "static staticClear(): boolean"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "删除所有的属性。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(196201)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["从API version 7开始支持，从API version 9开始废弃，建议使用", (0,jsx_runtime.jsx)(_components.a, {
            href: "#clear10",
            children: "clear"
          }), "替代。"]
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
                children: "boolean"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "删除所有的属性。如果删除成功，返回true；如果当前有状态变量依旧引用此属性，返回false。"
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
            children: "let simple = AppStorage.staticClear();\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
          id: "cleardeprecated",
          children: "Clear(deprecated)"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "static Clear(): boolean"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["删除", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-appstorage",
            children: "AppStorage"
          }), "中所有属性。删除所有属性的前提是，AppStorage已经没有任何订阅者。如果有订阅者，Clear将不会生效并返回false。如果没有订阅者且删除成功则返回true。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["订阅者的含义参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "#delete10",
            children: "delete"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(262744)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["从API version 9开始支持，从API version 10开始废弃，建议使用", (0,jsx_runtime.jsx)(_components.a, {
            href: "#clear10",
            children: "clear"
          }), "替代。"]
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
                children: "boolean"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "如果AppStorage中的属性已经没有订阅者则删除成功，返回true。否则返回false。"
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
            children: "AppStorage.SetOrCreate('PropA', 47);\nlet res: boolean = AppStorage.Clear(); // true，已经没有订阅者\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
          id: "ismutabledeprecated",
          children: "IsMutable(deprecated)"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "static IsMutable(propName: string): boolean"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["返回", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-appstorage",
            children: "AppStorage"
          }), "中propName对应的属性是否是可变的。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(129312)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "从API version 7开始支持，从API version 10开始废弃。"
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
                children: "propName"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "string"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "AppStorage中的属性名。"
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
                children: "boolean"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "返回AppStorage中propName对应的属性是否是可变的。当前该返回值恒为true。"
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
            children: "AppStorage.SetOrCreate('PropA', 47);\nlet res: boolean = AppStorage.IsMutable('PropA');\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
          id: "sizedeprecated",
          children: "Size(deprecated)"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "static Size(): number"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["返回", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-appstorage",
            children: "AppStorage"
          }), "中的属性数量。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(344358)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["从API version 7开始支持，从API version 10开始废弃，建议使用", (0,jsx_runtime.jsx)(_components.a, {
            href: "#size10",
            children: "size"
          }), "替代。"]
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
                children: "number"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "返回AppStorage中属性的数量。"
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
            children: "AppStorage.SetOrCreate('PropB', 48);\nlet res: number = AppStorage.Size(); // 1\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
          id: "localstorage9",
          children: "LocalStorage9+"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["LocalStorage具体UI使用说明，详见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-localstorage",
            children: "LocalStorage(页面级UI状态存储)"
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
          id: "constructor9",
          children: "constructor9+"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "constructor(initializingProperties?: Object)"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["创建一个新的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-localstorage",
            children: "LocalStorage"
          }), "实例。使用Object.keys(initializingProperties)返回的属性和其数值，初始化LocalStorage实例。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "卡片能力："
            })
          }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "元服务API："
            })
          }), " 从API version 11开始，该接口支持在元服务中使用。"]
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
                children: "initializingProperties"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Object"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "否"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "用initializingProperties包含的属性和数值初始化LocalStorage。initializingProperties不能为undefined。默认值为空对象，即初始化时不在LocalStorage中新增属性。"
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
            children: "let para: Record<string, number> = { 'PropA': 47 };\nlet storage: LocalStorage = new LocalStorage(para);\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
          id: "getshareddeprecated",
          children: "getShared(deprecated)"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "static getShared(): LocalStorage"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["获取当前stage共享的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-localstorage",
            children: "LocalStorage"
          }), "实例。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(728006)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["从API version 10开始支持，从API version 18开始废弃，建议使用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext",
            children: "UIContext"
          }), "中的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext#getsharedlocalstorage12",
            children: "getSharedLocalStorage"
          }), "替代。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["从API version 12开始，可以通过使用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext",
            children: "UIContext"
          }), "中的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext#getsharedlocalstorage12",
            children: "getSharedLocalStorage"
          }), "来明确UI的执行上下文。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "卡片能力："
            })
          }), " 从API version 10开始，该接口支持在ArkTS卡片中使用。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "元服务API："
            })
          }), " 从API version 11开始，该接口支持在元服务中使用。"]
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
                  href: "#localstorage9",
                  children: "LocalStorage"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "返回LocalStorage实例。"
              })]
            })
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
          id: "has9",
          children: "has9+"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "has(propName: string): boolean"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["判断propName对应的属性是否在", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-localstorage",
            children: "LocalStorage"
          }), "中存在。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "卡片能力："
            })
          }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "元服务API："
            })
          }), " 从API version 11开始，该接口支持在元服务中使用。"]
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
                children: "propName"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "string"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "LocalStorage中的属性名。"
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
                children: "boolean"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "如果propName对应的属性在LocalStorage中存在，则返回true。不存在则返回false。"
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
            children: "let para: Record<string, number> = { 'PropA': 47 };\nlet storage: LocalStorage = new LocalStorage(para);\nstorage.has('PropA'); // true\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
          id: "get9",
          children: "get9+"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "get<T>(propName: string): T | undefined"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["获取propName在", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-localstorage",
            children: "LocalStorage"
          }), "中对应的属性值。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "卡片能力："
            })
          }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "元服务API："
            })
          }), " 从API version 11开始，该接口支持在元服务中使用。"]
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
                children: "propName"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "string"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "LocalStorage中的属性名。"
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
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "示例："
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let para: Record<string, number> = { 'PropA': 47 };\nlet storage: LocalStorage = new LocalStorage(para);\nlet value: number = storage.get('PropA') as number; // 47\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
          id: "set9",
          children: "set9+"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "set<T>(propName: string, newValue: T): boolean"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-localstorage",
            children: "LocalStorage"
          }), "中设置propName对应属性的值。如果newValue的值和propName对应属性的值相同，即不需要做赋值操作，状态变量不会通知UI刷新propName对应属性的值。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(504941)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["从API version 12开始，LocalStorage支持", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-localstorage#%E8%A3%85%E9%A5%B0map%E7%B1%BB%E5%9E%8B%E5%8F%98%E9%87%8F",
            children: "Map"
          }), "、", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-localstorage#%E8%A3%85%E9%A5%B0set%E7%B1%BB%E5%9E%8B%E5%8F%98%E9%87%8F",
            children: "Set"
          }), "、", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-localstorage#%E8%A3%85%E9%A5%B0date%E7%B1%BB%E5%9E%8B%E5%8F%98%E9%87%8F",
            children: "Date类型"
          }), "，支持null、undefined以及", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-localstorage#localstorage%E6%94%AF%E6%8C%81%E8%81%94%E5%90%88%E7%B1%BB%E5%9E%8B",
            children: "联合类型"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "卡片能力："
            })
          }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "元服务API："
            })
          }), " 从API version 11开始，该接口支持在元服务中使用。"]
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
                children: "propName"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "string"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "LocalStorage中的属性名。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "newValue"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "T"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "属性值，从API version 12开始可以为undefined或者null。"
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
                children: "boolean"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "如果LocalStorage中不存在propName对应的属性，返回false。设置成功返回true。"
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
            children: "let para: Record<string, number> = { 'PropA': 47 };\nlet storage: LocalStorage = new LocalStorage(para);\nlet res: boolean = storage.set('PropA', 47); // true\nlet res1: boolean = storage.set('PropB', 47); // false\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
          id: "setorcreate9",
          children: "setOrCreate9+"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "setOrCreate<T>(propName: string, newValue: T): boolean"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["如果propName已经在", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-localstorage",
            children: "LocalStorage"
          }), "中存在，并且newValue和propName对应属性的值不同，则设置propName对应属性的值为newValue，否则状态变量不会通知UI刷新propName对应属性的值。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如果propName不存在，则创建propName属性，值为newValue。setOrCreate只可以创建单个LocalStorage的键值对，如果想创建多个LocalStorage键值对，可以多次调用此方法。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(933158)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["从API version 12开始，LocalStorage支持", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-localstorage#%E8%A3%85%E9%A5%B0map%E7%B1%BB%E5%9E%8B%E5%8F%98%E9%87%8F",
            children: "Map"
          }), "、", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-localstorage#%E8%A3%85%E9%A5%B0set%E7%B1%BB%E5%9E%8B%E5%8F%98%E9%87%8F",
            children: "Set"
          }), "、", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-localstorage#%E8%A3%85%E9%A5%B0date%E7%B1%BB%E5%9E%8B%E5%8F%98%E9%87%8F",
            children: "Date类型"
          }), "，支持null、undefined以及", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-localstorage#localstorage%E6%94%AF%E6%8C%81%E8%81%94%E5%90%88%E7%B1%BB%E5%9E%8B",
            children: "联合类型"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "卡片能力："
            })
          }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "元服务API："
            })
          }), " 从API version 11开始，该接口支持在元服务中使用。"]
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
                children: "propName"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "string"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "LocalStorage中的属性名。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "newValue"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "T"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "属性值，从API version 12开始可以为undefined或者null。"
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
                children: "boolean"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "如果LocalStorage中存在propName，则更新其值为newValue，返回true。  如果LocalStorage中不存在propName，则创建propName，并初始化其值为newValue，返回true。"
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
            children: "let para: Record<string, number> = { 'PropA': 47 };\nlet storage: LocalStorage = new LocalStorage(para);\nlet res: boolean = storage.setOrCreate('PropA', 121); // true\nlet res1: boolean = storage.setOrCreate('PropB', 111); // true\nlet res2: boolean = storage.setOrCreate('PropB', null); // true (API12及之后返回true，API11及之前返回false)\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
          id: "ref12-1",
          children: "ref12+"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ref<T>(propName: string): AbstractProperty<T> | undefined"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["如果给定的propName在", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-localstorage",
            children: "LocalStorage"
          }), "中存在，则返回LocalStorage中propName对应属性的引用。否则，返回undefined。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["与", (0,jsx_runtime.jsx)(_components.a, {
            href: "#link9",
            children: "link"
          }), "的功能基本一致，但不需要手动释放返回的", (0,jsx_runtime.jsx)(_components.a, {
            href: "#abstractproperty12",
            children: "AbstractProperty"
          }), "类型的变量。"]
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
                children: "propName"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "string"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "LocalStorage中的属性名。"
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
                  href: "#abstractproperty12",
                  children: "AbstractProperty<T>"
                })
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
            children: "let para: Record<string, number> = { 'PropA': 47 };\nlet storage: LocalStorage = new LocalStorage(para);\nlet refToPropA1: AbstractProperty<number> | undefined = storage.ref('PropA');\nlet refToPropA2: AbstractProperty<number> | undefined = storage.ref('PropA'); // refToPropA2.get() == 47\nrefToPropA1?.set(48); // refToPropA1.get() == refToPropA2.get() == 48\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
          id: "setandref12-1",
          children: "setAndRef12+"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "setAndRef<T>(propName: string, defaultValue: T): AbstractProperty<T>"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["与", (0,jsx_runtime.jsx)(_components.a, {
            href: "#ref12-1",
            children: "ref"
          }), "接口类似，如果给定的propName在", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-localstorage",
            children: "LocalStorage"
          }), "中存在，则返回LocalStorage中propName对应属性的引用。如果不存在，则使用defaultValue在LocalStorage中创建和初始化propName对应的属性，并返回其引用。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["与", (0,jsx_runtime.jsx)(_components.a, {
            href: "#setandlink9",
            children: "setAndLink"
          }), "的功能基本一致，但不需要手动释放返回的", (0,jsx_runtime.jsx)(_components.a, {
            href: "#abstractproperty12",
            children: "AbstractProperty"
          }), "类型的变量。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(637985)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["从API version 12开始，LocalStorage支持", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-localstorage#%E8%A3%85%E9%A5%B0map%E7%B1%BB%E5%9E%8B%E5%8F%98%E9%87%8F",
            children: "Map"
          }), "、", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-localstorage#%E8%A3%85%E9%A5%B0set%E7%B1%BB%E5%9E%8B%E5%8F%98%E9%87%8F",
            children: "Set"
          }), "、", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-localstorage#%E8%A3%85%E9%A5%B0date%E7%B1%BB%E5%9E%8B%E5%8F%98%E9%87%8F",
            children: "Date类型"
          }), "，支持null、undefined以及", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-localstorage#localstorage%E6%94%AF%E6%8C%81%E8%81%94%E5%90%88%E7%B1%BB%E5%9E%8B",
            children: "联合类型"
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
                children: "propName"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "string"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "LocalStorage中的属性名。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "defaultValue"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "T"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "当propName在LocalStorage中不存在时，使用defaultValue在LocalStorage中初始化propName对应属性的值，defaultValue可以为null或undefined。"
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
                  href: "#abstractproperty12",
                  children: "AbstractProperty<T>"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "AbstractProperty<T>的实例，为LocalStorage中propName对应属性的引用。"
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
            children: "let para: Record<string, number> = { 'PropA': 47 };\nlet storage: LocalStorage = new LocalStorage(para);\nlet ref1: AbstractProperty<number> = storage.setAndRef('PropB', 49); // 用默认值49创建PropB\nlet ref2: AbstractProperty<number> = storage.setAndRef('PropA', 50); // PropA已存在，值为47\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
          id: "link9",
          children: "link9+"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "link<T>(propName: string): SubscribedAbstractProperty<T>"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["如果给定的propName在", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-localstorage",
            children: "LocalStorage"
          }), "实例中存在，则返回与LocalStorage中propName对应属性的双向绑定数据。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "双向绑定数据的修改会被同步回LocalStorage中，LocalStorage会将变化同步到所有绑定该propName的数据和Component中。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如果LocalStorage中不存在propName，则返回undefined。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "卡片能力："
            })
          }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "元服务API："
            })
          }), " 从API version 11开始，该接口支持在元服务中使用。"]
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
                children: "propName"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "string"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "LocalStorage中的属性名。"
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
                  href: "#subscribedabstractproperty",
                  children: "SubscribedAbstractProperty<T>"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SubscribedAbstractProperty<T>的实例，与LocalStorage中propName对应属性的双向绑定的数据，如果LocalStorage中不存在对应的propName，则返回undefined。"
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
            children: "let para: Record<string, number> = { 'PropA': 47 };\nlet storage: LocalStorage = new LocalStorage(para);\nlet linkToPropA1: SubscribedAbstractProperty<number> = storage.link('PropA');\nlet linkToPropA2: SubscribedAbstractProperty<number> = storage.link('PropA'); // linkToPropA2.get() == 47\nlinkToPropA1.set(48); // 双向同步: linkToPropA1.get() == linkToPropA2.get() == 48\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
          id: "setandlink9",
          children: "setAndLink9+"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "setAndLink<T>(propName: string, defaultValue: T): SubscribedAbstractProperty<T>"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["与", (0,jsx_runtime.jsx)(_components.a, {
            href: "#link9",
            children: "link"
          }), "接口类似，如果给定的propName在", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-localstorage",
            children: "LocalStorage"
          }), "中存在，则返回该propName对应的属性的双向绑定数据。如果不存在，则使用defaultValue在LocalStorage中创建和初始化propName对应的属性，返回其双向绑定数据。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(542738)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["从API version 12开始，LocalStorage支持", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-localstorage#%E8%A3%85%E9%A5%B0map%E7%B1%BB%E5%9E%8B%E5%8F%98%E9%87%8F",
            children: "Map"
          }), "、", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-localstorage#%E8%A3%85%E9%A5%B0set%E7%B1%BB%E5%9E%8B%E5%8F%98%E9%87%8F",
            children: "Set"
          }), "、", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-localstorage#%E8%A3%85%E9%A5%B0date%E7%B1%BB%E5%9E%8B%E5%8F%98%E9%87%8F",
            children: "Date类型"
          }), "，支持null、undefined以及", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-localstorage#localstorage%E6%94%AF%E6%8C%81%E8%81%94%E5%90%88%E7%B1%BB%E5%9E%8B",
            children: "联合类型"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "卡片能力："
            })
          }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "元服务API："
            })
          }), " 从API version 11开始，该接口支持在元服务中使用。"]
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
                children: "propName"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "string"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "LocalStorage中的属性名。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "defaultValue"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "T"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "当propName在LocalStorage中不存在时，使用defaultValue在LocalStorage中初始化propName对应属性的值，从API version 12开始defaultValue可以为null或undefined。"
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
                  href: "#subscribedabstractproperty",
                  children: "SubscribedAbstractProperty<T>"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SubscribedAbstractProperty<T>的实例，与LocalStorage中propName对应属性的双向绑定的数据。"
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
            children: "let para: Record<string, number> = { 'PropA': 47 };\nlet storage: LocalStorage = new LocalStorage(para);\nlet link1: SubscribedAbstractProperty<number> = storage.setAndLink('PropB', 49); // 用默认值49创建PropB\nlet link2: SubscribedAbstractProperty<number> = storage.setAndLink('PropA', 50); // PropA已存在，值为47\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
          id: "prop9",
          children: "prop9+"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["prop", (0,jsx_runtime.jsxs)(_components.s, {
            children: ["(propName: string): SubscribedAbstractProperty", (0,jsx_runtime.jsx)(_components.s, {})]
          })]
        }), (0,jsx_runtime.jsx)(_components.s, {
          children: (0,jsx_runtime.jsxs)(_components.s, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["如果给定的propName在", (0,jsx_runtime.jsx)(_components.a, {
                href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-localstorage",
                children: "LocalStorage"
              }), "中存在，则返回与LocalStorage中propName对应属性的单向绑定数据。如果LocalStorage中不存在propName，则返回undefined。单向绑定数据的修改不会被同步回LocalStorage中。"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "卡片能力："
                })
              }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "元服务API："
                })
              }), " 从API version 11开始，该接口支持在元服务中使用。"]
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
                    children: "propName"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "string"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "是"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "LocalStorage中的属性名。"
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
                      href: "#subscribedabstractproperty",
                      children: "SubscribedAbstractProperty<S>"
                    })
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "SubscribedAbstractProperty<S>的实例，和LocalStorage中propName对应属性的单向绑定的数据。如果LocalStorage中不存在对应的propName，则返回undefined。"
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
                children: "let para: Record<string, number> = { 'PropA': 47 };\nlet storage: LocalStorage = new LocalStorage(para);\nlet prop1: SubscribedAbstractProperty<number> = storage.prop('PropA');\nlet prop2: SubscribedAbstractProperty<number> = storage.prop('PropA');\nprop1.set(1); // 单向同步：prop1.get()的值为1，prop2.get()的值为47\n"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
              id: "setandprop9",
              children: "setAndProp9+"
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["setAndProp", (0,jsx_runtime.jsxs)(_components.s, {
                children: ["(propName: string, defaultValue: S): SubscribedAbstractProperty", (0,jsx_runtime.jsx)(_components.s, {})]
              })]
            }), (0,jsx_runtime.jsx)(_components.s, {
              children: (0,jsx_runtime.jsxs)(_components.s, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["与", (0,jsx_runtime.jsx)(_components.a, {
                    href: "#prop9",
                    children: "prop"
                  }), "接口类似。如果propName在", (0,jsx_runtime.jsx)(_components.a, {
                    href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-localstorage",
                    children: "LocalStorage"
                  }), "中存在，则返回该propName对应的属性的单向绑定数据。如果不存在，则使用defaultValue在LocalStorage中创建和初始化propName对应的属性，返回其单向绑定数据。"]
                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: (0,jsx_runtime.jsx)(_components.img, {
                    src: (__webpack_require__(457216)/* ["default"] */.A) + "",
                    width: "102",
                    height: "38"
                  })
                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["从API version 12开始，LocalStorage支持", (0,jsx_runtime.jsx)(_components.a, {
                    href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-localstorage#%E8%A3%85%E9%A5%B0map%E7%B1%BB%E5%9E%8B%E5%8F%98%E9%87%8F",
                    children: "Map"
                  }), "、", (0,jsx_runtime.jsx)(_components.a, {
                    href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-localstorage#%E8%A3%85%E9%A5%B0set%E7%B1%BB%E5%9E%8B%E5%8F%98%E9%87%8F",
                    children: "Set"
                  }), "、", (0,jsx_runtime.jsx)(_components.a, {
                    href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-localstorage#%E8%A3%85%E9%A5%B0date%E7%B1%BB%E5%9E%8B%E5%8F%98%E9%87%8F",
                    children: "Date类型"
                  }), "，支持null、undefined以及", (0,jsx_runtime.jsx)(_components.a, {
                    href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-localstorage#localstorage%E6%94%AF%E6%8C%81%E8%81%94%E5%90%88%E7%B1%BB%E5%9E%8B",
                    children: "联合类型"
                  }), "。"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: (0,jsx_runtime.jsx)(_components.strong, {
                      children: "卡片能力："
                    })
                  }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: (0,jsx_runtime.jsx)(_components.strong, {
                      children: "元服务API："
                    })
                  }), " 从API version 11开始，该接口支持在元服务中使用。"]
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
                        children: "propName"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "string"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "是"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "LocalStorage中的属性名。"
                      })]
                    }), (0,jsx_runtime.jsxs)(_components.tr, {
                      children: [(0,jsx_runtime.jsx)(_components.td, {
                        children: "defaultValue"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "S"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "是"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "当propName在LocalStorage中不存在，使用defaultValue在LocalStorage中初始化propName对应属性的值，从API version 12开始defaultValue可以为null或undefined。"
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
                          href: "#subscribedabstractproperty",
                          children: "SubscribedAbstractProperty<S>"
                        })
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "SubscribedAbstractProperty<S>的实例，和LocalStorage中propName对应属性的单向绑定的数据。"
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
                    children: "let para: Record<string, number> = { 'PropA': 47 };\nlet storage: LocalStorage = new LocalStorage(para);\nlet prop: SubscribedAbstractProperty<number> = storage.setAndProp('PropB', 49); // PropA -> 47, PropB -> 49\n"
                  })
                }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                  id: "delete9",
                  children: "delete9+"
                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "delete(propName: string): boolean"
                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["在", (0,jsx_runtime.jsx)(_components.a, {
                    href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-localstorage",
                    children: "LocalStorage"
                  }), "中删除propName对应的属性。在LocalStorage中删除属性的前提是该属性已经没有订阅者，如果有订阅者，则返回false。如果没有订阅者则删除成功并返回true。"]
                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "属性的订阅者为："
                }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                    children: [(0,jsx_runtime.jsx)(_components.a, {
                      href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-localstorage#localstoragelink",
                      children: "@LocalStorageLink"
                    }), "、", (0,jsx_runtime.jsx)(_components.a, {
                      href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-localstorage#localstorageprop",
                      children: "@LocalStorageProp"
                    }), "装饰的变量。"]
                  }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                    children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
                      href: "#link9",
                      children: "link"
                    }), "、", (0,jsx_runtime.jsx)(_components.a, {
                      href: "#prop9",
                      children: "prop"
                    }), "、", (0,jsx_runtime.jsx)(_components.a, {
                      href: "#setandlink9",
                      children: "setAndLink"
                    }), "、", (0,jsx_runtime.jsx)(_components.a, {
                      href: "#setandprop9",
                      children: "setAndProp"
                    }), "接口返回的", (0,jsx_runtime.jsx)(_components.a, {
                      href: "#subscribedabstractproperty",
                      children: "SubscribedAbstractProperty"
                    }), "的实例。"]
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "如果想要删除这些订阅者，可以通过以下方式："
                }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                    children: ["删除@LocalStorageLink、@LocalStorageProp所在的自定义组件。删除自定义组件请参考", (0,jsx_runtime.jsx)(_components.a, {
                      href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-page-custom-components-lifecycle#%E8%87%AA%E5%AE%9A%E4%B9%89%E7%BB%84%E4%BB%B6%E7%9A%84%E5%88%A0%E9%99%A4",
                      children: "自定义组件的删除"
                    }), "。"]
                  }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                    children: ["对link、prop、setAndLink、setAndProp接口返回的SubscribedAbstractProperty的实例调用", (0,jsx_runtime.jsx)(_components.a, {
                      href: "#abouttobedeleted10",
                      children: "aboutToBeDeleted"
                    }), "接口。"]
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: (0,jsx_runtime.jsx)(_components.strong, {
                      children: "卡片能力："
                    })
                  }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: (0,jsx_runtime.jsx)(_components.strong, {
                      children: "元服务API："
                    })
                  }), " 从API version 11开始，该接口支持在元服务中使用。"]
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
                        children: "propName"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "string"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "是"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "LocalStorage中的属性名。"
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
                        children: "boolean"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "如果LocalStorage中有对应的属性，且该属性已经没有订阅者，则删除成功，返回true。如果属性不存在，或者该属性还存在订阅者，则返回false。"
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
                    children: "let para: Record<string, number> = { 'PropA': 47 };\nlet storage: LocalStorage = new LocalStorage(para);\nstorage.link<number>('PropA');\nlet res: boolean = storage.delete('PropA'); // false，PropA 还存在订阅者\nlet res1: boolean = storage.delete('PropB'); // false，PropB 不存在于storage中\nstorage.setOrCreate('PropB', 48);\nlet res2: boolean = storage.delete('PropB'); // true，PropB 已从storage成功删除\n"
                  })
                }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                  id: "keys9",
                  children: "keys9+"
                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "keys(): IterableIterator<string>"
                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["返回", (0,jsx_runtime.jsx)(_components.a, {
                    href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-localstorage",
                    children: "LocalStorage"
                  }), "中所有的属性名。"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: (0,jsx_runtime.jsx)(_components.strong, {
                      children: "卡片能力："
                    })
                  }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: (0,jsx_runtime.jsx)(_components.strong, {
                      children: "元服务API："
                    })
                  }), " 从API version 11开始，该接口支持在元服务中使用。"]
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
                        children: "IterableIterator<string>"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "LocalStorage中所有的属性名。"
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
                    children: "let para: Record<string, number> = { 'PropA': 47 };\nlet storage: LocalStorage = new LocalStorage(para);\nlet keys: IterableIterator<string> = storage.keys();\n"
                  })
                }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                  id: "size9",
                  children: "size9+"
                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "size(): number"
                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["返回", (0,jsx_runtime.jsx)(_components.a, {
                    href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-localstorage",
                    children: "LocalStorage"
                  }), "中的属性数量。"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: (0,jsx_runtime.jsx)(_components.strong, {
                      children: "卡片能力："
                    })
                  }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: (0,jsx_runtime.jsx)(_components.strong, {
                      children: "元服务API："
                    })
                  }), " 从API version 11开始，该接口支持在元服务中使用。"]
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
                        children: "number"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "LocalStorage中属性的数量。"
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
                    children: "let para: Record<string, number> = { 'PropA': 47 };\nlet storage: LocalStorage = new LocalStorage(para);\nlet res: number = storage.size(); // 1\n"
                  })
                }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                  id: "clear9",
                  children: "clear9+"
                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "clear(): boolean"
                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["删除", (0,jsx_runtime.jsx)(_components.a, {
                    href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-localstorage",
                    children: "LocalStorage"
                  }), "中所有的属性。删除所有属性的前提是已经没有任何订阅者。如果有订阅者，clear不会生效并返回false。如果没有订阅者则删除成功并返回true。"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["订阅者的含义参考", (0,jsx_runtime.jsx)(_components.a, {
                    href: "#delete9",
                    children: "delete"
                  }), "。"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: (0,jsx_runtime.jsx)(_components.strong, {
                      children: "卡片能力："
                    })
                  }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: (0,jsx_runtime.jsx)(_components.strong, {
                      children: "元服务API："
                    })
                  }), " 从API version 11开始，该接口支持在元服务中使用。"]
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
                        children: "boolean"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "如果LocalStorage中的属性已经没有任何订阅者，则删除成功，并返回true。否则返回false。"
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
                    children: "let para: Record<string, number> = { 'PropA': 47 };\nlet storage: LocalStorage = new LocalStorage(para);\nlet res: boolean = storage.clear(); // true，已经没有订阅者\n"
                  })
                }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                  id: "getshareddeprecated-1",
                  children: "GetShared(deprecated)"
                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "static GetShared(): LocalStorage"
                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["获取当前stage共享的", (0,jsx_runtime.jsx)(_components.a, {
                    href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-localstorage",
                    children: "LocalStorage"
                  }), "实例。"]
                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: (0,jsx_runtime.jsx)(_components.img, {
                    src: (__webpack_require__(981682)/* ["default"] */.A) + "",
                    width: "102",
                    height: "38"
                  })
                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["从API version 9开始支持，从API version 10开始废弃，建议使用", (0,jsx_runtime.jsx)(_components.a, {
                    href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext",
                    children: "UIContext"
                  }), "中的", (0,jsx_runtime.jsx)(_components.a, {
                    href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext#getsharedlocalstorage12",
                    children: "getSharedLocalStorage"
                  }), "替代。"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: (0,jsx_runtime.jsx)(_components.strong, {
                      children: "卡片能力："
                    })
                  }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。"]
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
                          href: "#localstorage9",
                          children: "LocalStorage"
                        })
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "返回LocalStorage实例。"
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
                    children: "let storage: LocalStorage = LocalStorage.GetShared();\n"
                  })
                }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                  id: "abstractproperty12",
                  children: "AbstractProperty12+"
                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["AbstractProperty是", (0,jsx_runtime.jsx)(_components.a, {
                    href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-appstorage",
                    children: "AppStorage"
                  }), "/", (0,jsx_runtime.jsx)(_components.a, {
                    href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-localstorage",
                    children: "LocalStorage"
                  }), "中属性的引用。"]
                }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                  id: "get12",
                  children: "get12+"
                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "get(): T"
                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["读取", (0,jsx_runtime.jsx)(_components.a, {
                    href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-appstorage",
                    children: "AppStorage"
                  }), "/", (0,jsx_runtime.jsx)(_components.a, {
                    href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-localstorage",
                    children: "LocalStorage"
                  }), "中所引用属性的数据。"]
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
                        children: "AppStorage/LocalStorage中所引用属性的数据。"
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
                    children: "AppStorage.setOrCreate('PropA', 47);\nlet ref1: AbstractProperty<number> | undefined = AppStorage.ref('PropA');\nref1?.get(); //  ref1.get()=47\n"
                  })
                }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                  id: "set12",
                  children: "set12+"
                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "set(newValue: T): void"
                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["更新", (0,jsx_runtime.jsx)(_components.a, {
                    href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-appstorage",
                    children: "AppStorage"
                  }), "/", (0,jsx_runtime.jsx)(_components.a, {
                    href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-localstorage",
                    children: "LocalStorage"
                  }), "中所引用属性的数据，newValue必须是T类型，可以为null或undefined。"]
                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: (0,jsx_runtime.jsx)(_components.img, {
                    src: (__webpack_require__(684913)/* ["default"] */.A) + "",
                    width: "102",
                    height: "38"
                  })
                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "从API version 12开始，AppStorage/LocalStorage支持Map、Set、Date类型，支持null、undefined以及联合类型。"
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
                        children: "newValue"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "T"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "是"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "要更新的数据，可以为null或undefined。"
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
                    children: "AppStorage.setOrCreate('PropA', 47);\nlet ref1: AbstractProperty<number> | undefined = AppStorage.ref('PropA');\nref1?.set(1); //  ref1.get()=1\nlet a: Map<string, number> = new Map([['1', 0]]);\nlet ref2 = AppStorage.setAndRef('MapA', a);\nref2.set(a);\nlet b: Set<string> = new Set('1');\nlet ref3 = AppStorage.setAndRef('SetB', b);\nref3.set(b);\nlet c: Date = new Date('2024');\nlet ref4 = AppStorage.setAndRef('DateC', c);\nref4.set(c);\nref2.set(null);\nref3.set(undefined);\n"
                  })
                }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                  id: "info12",
                  children: "info12+"
                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "info(): string"
                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["读取", (0,jsx_runtime.jsx)(_components.a, {
                    href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-appstorage",
                    children: "AppStorage"
                  }), "/", (0,jsx_runtime.jsx)(_components.a, {
                    href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-localstorage",
                    children: "LocalStorage"
                  }), "中所引用属性的属性名。"]
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
                        children: "string"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "AppStorage/LocalStorage中所引用属性的属性名。"
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
                    children: "AppStorage.setOrCreate('PropA', 47);\nlet ref1: AbstractProperty<number> | undefined = AppStorage.ref('PropA');\nref1?.info(); //  ref1.info()='PropA'\n"
                  })
                }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                  id: "subscribedabstractproperty",
                  children: "SubscribedAbstractProperty"
                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["SubscribedAbstractProperty是", (0,jsx_runtime.jsx)(_components.a, {
                    href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-appstorage",
                    children: "AppStorage"
                  }), "/", (0,jsx_runtime.jsx)(_components.a, {
                    href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-localstorage",
                    children: "LocalStorage"
                  }), "中同步的属性。"]
                }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                  id: "get9-1",
                  children: "get9+"
                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "abstract get(): T"
                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["读取从", (0,jsx_runtime.jsx)(_components.a, {
                    href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-appstorage",
                    children: "AppStorage"
                  }), "/", (0,jsx_runtime.jsx)(_components.a, {
                    href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-localstorage",
                    children: "LocalStorage"
                  }), "同步属性的数据。"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: (0,jsx_runtime.jsx)(_components.strong, {
                      children: "卡片能力："
                    })
                  }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: (0,jsx_runtime.jsx)(_components.strong, {
                      children: "元服务API："
                    })
                  }), " 从API version 11开始，该接口支持在元服务中使用。"]
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
                        children: "AppStorage/LocalStorage同步属性的数据。"
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
                    children: "AppStorage.setOrCreate('PropA', 47);\nlet prop1: SubscribedAbstractProperty<number> = AppStorage.prop('PropA');\nprop1.get(); //  prop1.get()=47\n"
                  })
                }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                  id: "set9-1",
                  children: "set9+"
                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "abstract set(newValue: T): void"
                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["设置", (0,jsx_runtime.jsx)(_components.a, {
                    href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-appstorage",
                    children: "AppStorage"
                  }), "/", (0,jsx_runtime.jsx)(_components.a, {
                    href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-localstorage",
                    children: "LocalStorage"
                  }), "同步属性的数据，newValue必须是T类型，从API version 12开始可以为null或undefined。"]
                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: (0,jsx_runtime.jsx)(_components.img, {
                    src: (__webpack_require__(370322)/* ["default"] */.A) + "",
                    width: "102",
                    height: "38"
                  })
                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "从API version 12开始，AppStorage/LocalStorage支持Map、Set、Date类型，支持null、undefined以及联合类型。"
                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: (0,jsx_runtime.jsx)(_components.strong, {
                      children: "卡片能力："
                    })
                  }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: (0,jsx_runtime.jsx)(_components.strong, {
                      children: "元服务API："
                    })
                  }), " 从API version 11开始，该接口支持在元服务中使用。"]
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
                        children: "要设置的数据，从API version 12开始可以为null或undefined。"
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
                    children: "AppStorage.setOrCreate('PropA', 47);\nlet prop1: SubscribedAbstractProperty<number> = AppStorage.prop('PropA');\nprop1.set(1); //  prop1.get()=1\n// 从API12开始支持Map、Set、Date类型，支持null、undefined以及联合类型。\nlet a: Map<string, number> = new Map([['1', 0]]);\nlet prop2 = AppStorage.setAndProp('MapA', a);\nprop2.set(a);\nlet b: Set<string> = new Set('1');\nlet prop3 = AppStorage.setAndProp('SetB', b);\nprop3.set(b);\nlet c: Date = new Date('2024');\nlet prop4 = AppStorage.setAndProp('DateC', c);\nprop4.set(c);\nprop2.set(null);\nprop3.set(undefined);\n"
                  })
                }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                  id: "abouttobedeleted10",
                  children: "aboutToBeDeleted10+"
                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "abstract aboutToBeDeleted(): void"
                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["取消", (0,jsx_runtime.jsx)(_components.a, {
                    href: "#subscribedabstractproperty",
                    children: "SubscribedAbstractProperty"
                  }), "实例对", (0,jsx_runtime.jsx)(_components.a, {
                    href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-appstorage",
                    children: "AppStorage"
                  }), "/", (0,jsx_runtime.jsx)(_components.a, {
                    href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-localstorage",
                    children: "LocalStorage"
                  }), "的单/双向同步关系，并无效化SubscribedAbstractProperty实例，即当调用aboutToBeDeleted方法之后不能再使用SubscribedAbstractProperty实例调用", (0,jsx_runtime.jsx)(_components.a, {
                    href: "#set9-1",
                    children: "set"
                  }), "或", (0,jsx_runtime.jsx)(_components.a, {
                    href: "#get9-1",
                    children: "get"
                  }), "方法。"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: (0,jsx_runtime.jsx)(_components.strong, {
                      children: "元服务API："
                    })
                  }), " 从API version 11开始，该接口支持在元服务中使用。"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: (0,jsx_runtime.jsx)(_components.strong, {
                      children: "系统能力："
                    })
                  }), " SystemCapability.ArkUI.ArkUI.Full"]
                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: (0,jsx_runtime.jsx)(_components.strong, {
                      children: "示例："
                    })
                  })
                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                  children: (0,jsx_runtime.jsx)(_components.code, {
                    children: "AppStorage.setOrCreate('PropA', 47);\nlet link = AppStorage.setAndLink('PropB', 49); // PropA -> 47, PropB -> 49\nlink.aboutToBeDeleted();\n"
                  })
                }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                  id: "info10",
                  children: "info10+"
                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "info(): string"
                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "返回属性名称。"
                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: (0,jsx_runtime.jsx)(_components.strong, {
                      children: "元服务API："
                    })
                  }), " 从API version 11开始，该接口支持在元服务中使用。"]
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
                        children: "string"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "属性名称。"
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
                    children: "AppStorage.setOrCreate('PropA', 47);\nlet prop1: SubscribedAbstractProperty<number> = AppStorage.prop('PropA');\nprop1.info(); // prop1.info() = 'PropA'\n"
                  })
                }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                  id: "persistpropsoptions10",
                  children: "PersistPropsOptions10+"
                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["用于指定持久化属性及其默认值的键值对对象，作为", (0,jsx_runtime.jsx)(_components.a, {
                    href: "#persistprops10",
                    children: "persistProps"
                  }), "参数传入。"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: (0,jsx_runtime.jsx)(_components.strong, {
                      children: "元服务API："
                    })
                  }), " 从API version 11开始，该接口支持在元服务中使用。"]
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
                        children: "key"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "string"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "否"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "否"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "属性名。"
                      })]
                    }), (0,jsx_runtime.jsxs)(_components.tr, {
                      children: [(0,jsx_runtime.jsx)(_components.td, {
                        children: "defaultValue"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "number"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "string"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "boolean"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "Object"
                      })]
                    })]
                  })]
                }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                  id: "persistentstorage",
                  children: "PersistentStorage"
                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["PersistentStorage具体UI使用说明，详见", (0,jsx_runtime.jsx)(_components.a, {
                    href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-persiststorage",
                    children: "PersistentStorage(持久化存储UI状态)"
                  })]
                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: (0,jsx_runtime.jsx)(_components.img, {
                    src: (__webpack_require__(724142)/* ["default"] */.A) + "",
                    width: "102",
                    height: "38"
                  })
                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "从API version 12开始，PersistentStorage支持null、undefined。"
                }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                  id: "persistprop10",
                  children: "persistProp10+"
                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "static persistProp<T>(key: string, defaultValue: T): void"
                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["将", (0,jsx_runtime.jsx)(_components.a, {
                    href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-appstorage",
                    children: "AppStorage"
                  }), "中key对应的属性持久化到文件中。该接口的调用通常在访问AppStorage之前。"]
                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "确定属性的类型和值的顺序如下："
                }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                    children: ["如果", (0,jsx_runtime.jsx)(_components.a, {
                      href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-persiststorage",
                      children: "PersistentStorage"
                    }), "文件中存在key对应的属性，在AppStorage中创建对应的propName，并用在PersistentStorage中找到的key的属性初始化。"]
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "如果PersistentStorage文件中没有查询到key对应的属性，则在AppStorage中查找key对应的属性。如果找到key对应的属性，则将该属性持久化。"
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "如果AppStorage中也没查找到key对应的属性，则在AppStorage中创建key对应的属性。用defaultValue初始化其值，并将该属性持久化。"
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "根据上述的初始化流程，如果AppStorage中有该属性，则会使用其值，覆盖掉PersistentStorage文件中的值。由于AppStorage是内存内数据，该行为会导致数据丧失持久化能力。"
                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: (0,jsx_runtime.jsx)(_components.strong, {
                      children: "元服务API："
                    })
                  }), " 从API version 11开始，该接口支持在元服务中使用。"]
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
                        children: "key"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "string"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "是"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "属性名。"
                      })]
                    }), (0,jsx_runtime.jsxs)(_components.tr, {
                      children: [(0,jsx_runtime.jsx)(_components.td, {
                        children: "defaultValue"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "T"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "是"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "在PersistentStorage和AppStorage中未查询到时，则使用默认值进行初始化。从API version 12开始允许为null或undefined。"
                      })]
                    })]
                  })]
                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: (0,jsx_runtime.jsx)(_components.strong, {
                      children: "示例："
                    })
                  })
                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["persistProp具体使用，见", (0,jsx_runtime.jsx)(_components.a, {
                    href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-persiststorage#%E4%BB%8Eappstorage%E4%B8%AD%E8%AE%BF%E9%97%AEpersistentstorage%E5%88%9D%E5%A7%8B%E5%8C%96%E7%9A%84%E5%B1%9E%E6%80%A7",
                    children: "从AppStorage中访问PersistentStorage初始化的属性"
                  })]
                }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                  id: "deleteprop10",
                  children: "deleteProp10+"
                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "static deleteProp(key: string): void"
                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.a, {
                    href: "#persistprop10",
                    children: "persistProp"
                  }), "的逆向操作。将key对应的属性从PersistentStorage中删除，后续", (0,jsx_runtime.jsx)(_components.a, {
                    href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-appstorage",
                    children: "AppStorage"
                  }), "的操作，对", (0,jsx_runtime.jsx)(_components.a, {
                    href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-persiststorage",
                    children: "PersistentStorage"
                  }), "不会再有影响。该操作会将对应的key从持久化文件中删除，如果希望再次持久化，可以再次调用", (0,jsx_runtime.jsx)(_components.a, {
                    href: "#persistprop10",
                    children: "persistProp"
                  }), "接口。"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: (0,jsx_runtime.jsx)(_components.strong, {
                      children: "元服务API："
                    })
                  }), " 从API version 11开始，该接口支持在元服务中使用。"]
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
                        children: "key"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "string"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "是"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "PersistentStorage中的属性名。"
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
                    children: "PersistentStorage.deleteProp('highScore');\n"
                  })
                }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                  id: "persistprops10",
                  children: "persistProps10+"
                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "static persistProps(props: PersistPropsOptions[]): void"
                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["行为和", (0,jsx_runtime.jsx)(_components.a, {
                    href: "#persistprop10",
                    children: "persistProp"
                  }), "类似，不同在于可以一次性持久化多个数据，适合在应用启动的时候初始化。"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: (0,jsx_runtime.jsx)(_components.strong, {
                      children: "元服务API："
                    })
                  }), " 从API version 11开始，该接口支持在元服务中使用。"]
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
                        children: "props"
                      }), (0,jsx_runtime.jsxs)(_components.td, {
                        children: [(0,jsx_runtime.jsx)(_components.a, {
                          href: "#persistpropsoptions10",
                          children: "PersistPropsOptions"
                        }), "[]"]
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "是"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "持久化数组。"
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
                    children: "PersistentStorage.persistProps([{ key: 'highScore', defaultValue: '0' }, { key: 'wightScore', defaultValue: '1' }]);\n"
                  })
                }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                  id: "keys10-1",
                  children: "keys10+"
                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "static keys(): Array<string>"
                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "返回所有持久化属性的属性名的数组。"
                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: (0,jsx_runtime.jsx)(_components.strong, {
                      children: "元服务API："
                    })
                  }), " 从API version 11开始，该接口支持在元服务中使用。"]
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
                        children: "返回所有持久化属性的属性名的数组。"
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
                    children: "let keys: Array<string> = PersistentStorage.keys();\n"
                  })
                }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                  id: "persistpropdeprecated",
                  children: "PersistProp(deprecated)"
                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "static PersistProp<T>(key: string, defaultValue: T): void"
                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["将", (0,jsx_runtime.jsx)(_components.a, {
                    href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-appstorage",
                    children: "AppStorage"
                  }), "中key对应的属性持久化到文件中。该接口的调用通常在访问AppStorage之前。"]
                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "确定属性的类型和值的顺序如下："
                }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                    children: ["如果", (0,jsx_runtime.jsx)(_components.a, {
                      href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-persiststorage",
                      children: "PersistentStorage"
                    }), "文件中存在key对应的属性，在AppStorage中创建对应的propName，并用在PersistentStorage中找到的key的属性初始化。"]
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "如果PersistentStorage文件中没有查询到key对应的属性，则在AppStorage中查找key对应的属性。如果找到key对应的属性，则将该属性持久化。"
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "如果AppStorage也没查找到key对应的属性，则在AppStorage中创建key对应的属性。用defaultValue初始化其值，并将该属性持久化。"
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "根据上述的初始化流程，如果AppStorage中有该属性，则会使用其值，覆盖掉PersistentStorage文件中的值。由于AppStorage是内存内数据，该行为会导致数据丧失持久化能力。"
                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: (0,jsx_runtime.jsx)(_components.img, {
                    src: (__webpack_require__(127192)/* ["default"] */.A) + "",
                    width: "102",
                    height: "38"
                  })
                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["从API version 7开始支持，从API version 10开始废弃，建议使用", (0,jsx_runtime.jsx)(_components.a, {
                    href: "#persistprop10",
                    children: "persistProp"
                  }), "替代。"]
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
                        children: "key"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "string"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "是"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "属性名。"
                      })]
                    }), (0,jsx_runtime.jsxs)(_components.tr, {
                      children: [(0,jsx_runtime.jsx)(_components.td, {
                        children: "defaultValue"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "T"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "是"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "在PersistentStorage和AppStorage中未查询到时，则使用默认值进行初始化。不允许为null或undefined。"
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
                    children: "PersistentStorage.PersistProp('highScore', '0');\n"
                  })
                }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                  id: "deletepropdeprecated",
                  children: "DeleteProp(deprecated)"
                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "static DeleteProp(key: string): void"
                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.a, {
                    href: "#persistpropdeprecated",
                    children: "PersistProp"
                  }), "的逆向操作。将key对应的属性从", (0,jsx_runtime.jsx)(_components.a, {
                    href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-persiststorage",
                    children: "PersistentStorage"
                  }), "中删除，后续", (0,jsx_runtime.jsx)(_components.a, {
                    href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-appstorage",
                    children: "AppStorage"
                  }), "的操作，对PersistentStorage不会再有影响。"]
                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: (0,jsx_runtime.jsx)(_components.img, {
                    src: (__webpack_require__(213357)/* ["default"] */.A) + "",
                    width: "102",
                    height: "38"
                  })
                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["从API version 7开始支持，从API version 10开始废弃，建议使用", (0,jsx_runtime.jsx)(_components.a, {
                    href: "#deleteprop10",
                    children: "deleteProp"
                  }), "替代。"]
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
                        children: "key"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "string"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "是"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "PersistentStorage中的属性名。"
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
                    children: "PersistentStorage.DeleteProp('highScore');\n"
                  })
                }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                  id: "persistpropsdeprecated",
                  children: "PersistProps(deprecated)"
                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "static PersistProps(properties: {key: string; defaultValue: any;}[]): void"
                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["行为和", (0,jsx_runtime.jsx)(_components.a, {
                    href: "#persistpropdeprecated",
                    children: "PersistProp"
                  }), "类似，不同在于可以一次性持久化多个数据，适合在应用启动的时候初始化。"]
                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: (0,jsx_runtime.jsx)(_components.img, {
                    src: (__webpack_require__(680388)/* ["default"] */.A) + "",
                    width: "102",
                    height: "38"
                  })
                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["从API version 7开始支持，从API version 10开始废弃，建议使用", (0,jsx_runtime.jsx)(_components.a, {
                    href: "#persistprops10",
                    children: "persistProps"
                  }), "替代。"]
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
                        children: "properties"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "{key: string; defaultValue: any}[]"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "是"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "持久化数组，启动key为属性名，defaultValue为默认值。规则同PersistProp。"
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
                    children: "PersistentStorage.PersistProps([{ key: 'highScore', defaultValue: '0' }, { key: 'wightScore', defaultValue: '1' }]);\n"
                  })
                }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                  id: "keysdeprecated-1",
                  children: "Keys(deprecated)"
                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "static Keys(): Array<string>"
                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "返回所有持久化属性的属性名的数组。"
                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: (0,jsx_runtime.jsx)(_components.img, {
                    src: (__webpack_require__(539185)/* ["default"] */.A) + "",
                    width: "102",
                    height: "38"
                  })
                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["从API version 7开始支持，从API version 10开始废弃，建议使用", (0,jsx_runtime.jsx)(_components.a, {
                    href: "#keys10-1",
                    children: "keys"
                  }), "替代。"]
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
                        children: "返回所有持久化属性的属性名的数组。"
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
                    children: "let keys: Array<string> = PersistentStorage.Keys();\n"
                  })
                }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                  id: "envpropsoptions10",
                  children: "EnvPropsOptions10+"
                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["用于指定环境变量名称及其默认值的键值对对象，作为", (0,jsx_runtime.jsx)(_components.a, {
                    href: "#envprops10",
                    children: "envProps"
                  }), "参数传入。"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: (0,jsx_runtime.jsx)(_components.strong, {
                      children: "元服务API："
                    })
                  }), " 从API version 11开始，该接口支持在元服务中使用。"]
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
                        children: "key"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "string"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "否"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "否"
                      }), (0,jsx_runtime.jsxs)(_components.td, {
                        children: ["环境变量名称，支持的范围详见", (0,jsx_runtime.jsx)(_components.a, {
                          href: "#%E5%86%85%E7%BD%AE%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F%E8%AF%B4%E6%98%8E",
                          children: "内置环境变量说明"
                        }), "。"]
                      })]
                    }), (0,jsx_runtime.jsxs)(_components.tr, {
                      children: [(0,jsx_runtime.jsx)(_components.td, {
                        children: "defaultValue"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "number"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "string"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "boolean"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "否"
                      })]
                    })]
                  })]
                }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                  id: "environment",
                  children: "Environment"
                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["Environment具体使用说明，详见", (0,jsx_runtime.jsx)(_components.a, {
                    href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-environment",
                    children: "Environment(设备环境查询)"
                  })]
                }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                  id: "envprop10",
                  children: "envProp10+"
                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["static envProp", (0,jsx_runtime.jsx)(_components.s, {
                    children: "(key: string, value: S): boolean"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.s, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                    children: ["将", (0,jsx_runtime.jsx)(_components.a, {
                      href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-environment",
                      children: "Environment"
                    }), "的内置环境变量key存入", (0,jsx_runtime.jsx)(_components.a, {
                      href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-appstorage",
                      children: "AppStorage"
                    }), "中。如果系统中未查询到Environment环境变量key的值，则使用默认值value，存入成功，返回true。如果AppStorage中已经有对应的key，则返回false。"]
                  }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                    children: "所以建议在程序启动的时候调用该接口。"
                  }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                    children: "在没有调用envProp的情况下，就使用AppStorage读取环境变量是错误的。"
                  }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                    children: [(0,jsx_runtime.jsx)(_components.strong, {
                      children: (0,jsx_runtime.jsx)(_components.strong, {
                        children: "元服务API："
                      })
                    }), " 从API version 11开始，该接口支持在元服务中使用。"]
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
                          children: "key"
                        }), (0,jsx_runtime.jsx)(_components.td, {
                          children: "string"
                        }), (0,jsx_runtime.jsx)(_components.td, {
                          children: "是"
                        }), (0,jsx_runtime.jsxs)(_components.td, {
                          children: ["环境变量名称，支持的范围详见", (0,jsx_runtime.jsx)(_components.a, {
                            href: "#%E5%86%85%E7%BD%AE%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F%E8%AF%B4%E6%98%8E",
                            children: "内置环境变量说明"
                          }), "。"]
                        })]
                      }), (0,jsx_runtime.jsxs)(_components.tr, {
                        children: [(0,jsx_runtime.jsx)(_components.td, {
                          children: "value"
                        }), (0,jsx_runtime.jsx)(_components.td, {
                          children: "S"
                        }), (0,jsx_runtime.jsx)(_components.td, {
                          children: "是"
                        }), (0,jsx_runtime.jsx)(_components.td, {
                          children: "查询不到环境变量key时，则使用value作为默认值存入AppStorage中。"
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
                          children: "boolean"
                        }), (0,jsx_runtime.jsx)(_components.td, {
                          children: "如果key对应的属性在AppStorage中存在，则返回false。不存在则在AppStorage中用value作为默认值创建key对应的属性，返回true。"
                        })]
                      })
                    })]
                  }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                    children: (0,jsx_runtime.jsx)(_components.strong, {
                      children: (0,jsx_runtime.jsx)(_components.strong, {
                        children: "示例："
                      })
                    })
                  }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                    children: ["envProp具体使用，详见", (0,jsx_runtime.jsx)(_components.a, {
                      href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-environment#%E4%BB%8Eui%E4%B8%AD%E8%AE%BF%E9%97%AEenvironment%E5%8F%82%E6%95%B0",
                      children: "从UI中访问Environment参数"
                    }), "。"]
                  }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                    id: "envprops10",
                    children: "envProps10+"
                  }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                    children: "static envProps(props: EnvPropsOptions[]): void"
                  }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                    children: ["和", (0,jsx_runtime.jsx)(_components.a, {
                      href: "#envprop10",
                      children: "envProp"
                    }), "类似，不同点在于参数为数组，可以一次性初始化多个数据。建议在应用启动时调用，将系统环境变量批量存入", (0,jsx_runtime.jsx)(_components.a, {
                      href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-appstorage",
                      children: "AppStorage"
                    }), "中。"]
                  }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                    children: [(0,jsx_runtime.jsx)(_components.strong, {
                      children: (0,jsx_runtime.jsx)(_components.strong, {
                        children: "元服务API："
                      })
                    }), " 从API version 11开始，该接口支持在元服务中使用。"]
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
                          children: "props"
                        }), (0,jsx_runtime.jsxs)(_components.td, {
                          children: [(0,jsx_runtime.jsx)(_components.a, {
                            href: "#envpropsoptions10",
                            children: "EnvPropsOptions"
                          }), "[]"]
                        }), (0,jsx_runtime.jsx)(_components.td, {
                          children: "是"
                        }), (0,jsx_runtime.jsx)(_components.td, {
                          children: "系统环境变量和默认值的键值对的数组。"
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
                      children: "Environment.envProps([{ key: 'accessibilityEnabled', defaultValue: 'default' }, {\n  key: 'languageCode',\n  defaultValue: 'en'\n}, { key: 'prop', defaultValue: 'hhhh' }]);\n"
                    })
                  }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                    id: "keys10-2",
                    children: "keys10+"
                  }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                    children: "static keys(): Array<string>"
                  }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                    children: "返回环境变量的属性key的数组。"
                  }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                    children: [(0,jsx_runtime.jsx)(_components.strong, {
                      children: (0,jsx_runtime.jsx)(_components.strong, {
                        children: "元服务API："
                      })
                    }), " 从API version 11开始，该接口支持在元服务中使用。"]
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
                          children: "返回关联的系统项数组。"
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
                      children: "Environment.envProps([{ key: 'accessibilityEnabled', defaultValue: 'default' }, {\n  key: 'languageCode',\n  defaultValue: 'en'\n}, { key: 'prop', defaultValue: 'hhhh' }]);\n\nlet keys: Array<string> = Environment.keys(); // keys 包含 accessibilityEnabled，languageCode，prop\n"
                    })
                  }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                    id: "envpropdeprecated",
                    children: "EnvProp(deprecated)"
                  }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                    children: ["static EnvProp", (0,jsx_runtime.jsx)(_components.s, {
                      children: "(key: string, value: S): boolean"
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.s, {
                    children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                      children: ["将", (0,jsx_runtime.jsx)(_components.a, {
                        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-environment",
                        children: "Environment"
                      }), "的内置环境变量key存入", (0,jsx_runtime.jsx)(_components.a, {
                        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-appstorage",
                        children: "AppStorage"
                      }), "中。如果系统中未查询到Environment环境变量key的值，则使用默认值value，存入成功，返回true。如果AppStorage中已经有对应的key，则返回false。"]
                    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                      children: "所以建议在程序启动的时候调用该接口。"
                    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                      children: "在没有调用EnvProp的情况下，就使用AppStorage读取环境变量是错误的。"
                    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                      children: (0,jsx_runtime.jsx)(_components.img, {
                        src: (__webpack_require__(594005)/* ["default"] */.A) + "",
                        width: "102",
                        height: "38"
                      })
                    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                      children: ["从API version 7开始支持，从API version 10开始废弃，建议使用", (0,jsx_runtime.jsx)(_components.a, {
                        href: "#envprop10",
                        children: "envProp"
                      }), "替代。"]
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
                            children: "key"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "string"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "是"
                          }), (0,jsx_runtime.jsxs)(_components.td, {
                            children: ["环境变量名称，支持的范围详见", (0,jsx_runtime.jsx)(_components.a, {
                              href: "#%E5%86%85%E7%BD%AE%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F%E8%AF%B4%E6%98%8E",
                              children: "内置环境变量说明"
                            }), "。"]
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.td, {
                            children: "value"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "S"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "是"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "查询不到环境变量key，则使用value作为默认值存入AppStorage中。"
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
                            children: "boolean"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "如果key对应的属性在AppStorage中存在，则返回false。不存在则在AppStorage中用value作为默认值创建key对应的属性，返回true。"
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
                        children: "Environment.EnvProp('accessibilityEnabled', 'default');\n"
                      })
                    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                      id: "envpropsdeprecated",
                      children: "EnvProps(deprecated)"
                    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                      children: "static EnvProps(props: {key: string; defaultValue: any;}[]): void"
                    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                      children: ["和", (0,jsx_runtime.jsx)(_components.a, {
                        href: "#envpropdeprecated",
                        children: "EnvProp"
                      }), "类似，不同点在于参数为数组，可以一次性初始化多个数据。建议在应用启动时调用，将系统环境变量批量存入", (0,jsx_runtime.jsx)(_components.a, {
                        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-appstorage",
                        children: "AppStorage"
                      }), "中。"]
                    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                      children: (0,jsx_runtime.jsx)(_components.img, {
                        src: (__webpack_require__(684603)/* ["default"] */.A) + "",
                        width: "102",
                        height: "38"
                      })
                    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                      children: ["从API version 7开始支持，从API version 10开始废弃，建议使用", (0,jsx_runtime.jsx)(_components.a, {
                        href: "#envprops10",
                        children: "envProps"
                      }), "替代。"]
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
                            children: "props"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "{key: string; defaultValue: any}[]"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "是"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "系统环境变量和默认值的键值对的数组。"
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
                        children: "Environment.EnvProps([{ key: 'accessibilityEnabled', defaultValue: 'default' }, {\n  key: 'languageCode',\n  defaultValue: 'en'\n}, { key: 'prop', defaultValue: 'hhhh' }]);\n"
                      })
                    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                      id: "keysdeprecated-2",
                      children: "Keys(deprecated)"
                    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                      children: "static Keys(): Array<string>"
                    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                      children: "返回环境变量的属性key的数组。"
                    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                      children: (0,jsx_runtime.jsx)(_components.img, {
                        src: (__webpack_require__(712564)/* ["default"] */.A) + "",
                        width: "102",
                        height: "38"
                      })
                    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                      children: ["从API version 7开始支持，从API version 10开始废弃，建议使用", (0,jsx_runtime.jsx)(_components.a, {
                        href: "#keys10-2",
                        children: "keys"
                      }), "替代。"]
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
                            children: "返回关联的系统项数组。"
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
                        children: "Environment.EnvProps([{ key: 'accessibilityEnabled', defaultValue: 'default' }, {\n  key: 'languageCode',\n  defaultValue: 'en'\n}, { key: 'prop', defaultValue: 'hhhh' }]);\n\nlet keys: Array<string> = Environment.Keys(); // keys 包含 accessibilityEnabled，languageCode，prop\n"
                      })
                    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                      id: "内置环境变量说明",
                      children: "内置环境变量说明"
                    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                      children: [(0,jsx_runtime.jsx)(_components.thead, {
                        children: (0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.th, {
                            children: "key"
                          }), (0,jsx_runtime.jsx)(_components.th, {
                            children: "类型"
                          }), (0,jsx_runtime.jsx)(_components.th, {
                            children: "说明"
                          })]
                        })
                      }), (0,jsx_runtime.jsxs)(_components.tbody, {
                        children: [(0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.td, {
                            children: "accessibilityEnabled"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "string"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "无障碍屏幕朗读是否启用。当无法获取环境变量中的accessibilityEnabled的值时，将通过envProp、envProps等接口传入的开发者指定的默认值添加到AppStorage中。"
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.td, {
                            children: "colorMode"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: (0,jsx_runtime.jsx)(_components.a, {
                              href: "/ref/arkui-api/arkui-declarative-comp/state-management-and-rendering-control/ts-state-management-environment-variables/ts-state-management-environment-variables#colormode",
                              children: "ColorMode"
                            })
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "深浅色模式，可选值为：  - ColorMode.LIGHT：浅色模式；  - ColorMode.DARK：深色模式。"
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.td, {
                            children: "fontScale"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "number"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "字体大小比例。"
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.td, {
                            children: "fontWeightScale"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "number"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "字重比例。"
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.td, {
                            children: "layoutDirection"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: (0,jsx_runtime.jsx)(_components.a, {
                              href: "/ref/arkui-api/arkui-declarative-comp/state-management-and-rendering-control/ts-state-management-environment-variables/ts-state-management-environment-variables#layoutdirection",
                              children: "LayoutDirection"
                            })
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "布局方向类型，可选值为：  - LayoutDirection.LTR：从左到右；  - LayoutDirection.RTL：从右到左。  - Auto：跟随系统。"
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.td, {
                            children: "languageCode"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "string"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "当前系统语言，小写字母，例如zh。"
                          })]
                        })]
                      })]
                    }), "\n"]
                  })]
                })]
              })
            })]
          })
        })]
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
196201(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
370322(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
728006(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
680388(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
243802(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
542738(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
668414(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
684603(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
308706(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
129312(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
964372(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
262744(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
594005(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
913608(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
971761(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
502681(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
981682(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
504941(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
393(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
951720(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
684913(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
539185(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
213357(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
672800(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
718174(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
781349(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
258650(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
457216(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
54228(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
712564(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
127192(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
933158(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
724142(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
209998(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
637985(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
344358(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
625114(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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