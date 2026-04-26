"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["283171"], {
204522(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_state_management_arkts_state_management_v_2_arkts_v_2_manage_application_state_arkts_new_persistencev_2_arkts_new_persistencev_2_md_b92_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-state-management-arkts-state-management-v-2-arkts-v-2-manage-application-state-arkts-new-persistencev-2-arkts-new-persistencev-2-md-b92.json
var site_docs_arkui_arkts_ui_development_arkts_state_management_arkts_state_management_v_2_arkts_v_2_manage_application_state_arkts_new_persistencev_2_arkts_new_persistencev_2_md_b92_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-application-state/arkts-new-persistencev2/arkts-new-persistencev2","title":"PersistenceV2: 持久化存储UI状态","description":"为了增强状态管理框架对持久化存储UI的能力，开发者可以使用PersistenceV2存储持久化的数据。","source":"@site/docs/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-application-state/arkts-new-persistencev2/arkts-new-persistencev2.md","sourceDirName":"arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-application-state/arkts-new-persistencev2","slug":"/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-application-state/arkts-new-persistencev2/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-application-state/arkts-new-persistencev2/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"PersistenceV2: 持久化存储UI状态","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-new-persistencev2","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"AppStorageV2: 应用全局UI状态存储","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-application-state/arkts-new-appstoragev2/"},"next":{"title":"getTarget接口：获取状态管理框架代理前的原始对象","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-uiutils/arkts-new-gettarget/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-application-state/arkts-new-persistencev2/arkts-new-persistencev2.md


const frontMatter = {
	title: 'PersistenceV2: 持久化存储UI状态',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-new-persistencev2',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'PersistenceV2: 持久化存储UI状态';

const assets = {

};



const toc = [{
  "value": "概述",
  "id": "概述",
  "level": 2
}, {
  "value": "使用说明",
  "id": "使用说明",
  "level": 2
}, {
  "value": "使用限制",
  "id": "使用限制",
  "level": 2
}, {
  "value": "globalConnect支持的类型",
  "id": "globalconnect支持的类型",
  "level": 2
}, {
  "value": "globalConnect顶层持久化数据类型及非顶层数据类型",
  "id": "globalconnect顶层持久化数据类型及非顶层数据类型",
  "level": 3
}, {
  "value": "globalConnect用户自定义class对象属性支持的类型",
  "id": "globalconnect用户自定义class对象属性支持的类型",
  "level": 3
}, {
  "value": "globalConnect支持集合的类型",
  "id": "globalconnect支持集合的类型",
  "level": 3
}, {
  "value": "使用场景",
  "id": "使用场景",
  "level": 2
}, {
  "value": "在两个页面之间存储数据",
  "id": "在两个页面之间存储数据",
  "level": 3
}, {
  "value": "使用globalConnect存储数据",
  "id": "使用globalconnect存储数据",
  "level": 3
}, {
  "value": "在不同的module中使用connect和globalConnect",
  "id": "在不同的module中使用connect和globalconnect",
  "level": 3
}, {
  "value": "使用建议",
  "id": "使用建议",
  "level": 2
}, {
  "value": "connect向globalConnect迁移实现",
  "id": "connect向globalconnect迁移实现",
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
        id: "persistencev2-持久化存储ui状态",
        children: "PersistenceV2: 持久化存储UI状态"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为了增强状态管理框架对持久化存储UI的能力，开发者可以使用PersistenceV2存储持久化的数据。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "PersistenceV2是应用程序中的可选单例对象。此对象的作用是持久化存储UI相关的数据，以确保这些属性在应用程序重新启动时的值与应用程序关闭时的值相同。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "PersistenceV2提供状态变量持久化能力，开发者可以通过connect或者globalConnect绑定同一个key，在状态变量变化和应用冷启动时，实现持久化能力。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在阅读本文档前，建议提前阅读：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-create-custom-components#componentv2",
        children: "@ComponentV2"
      }), "，", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-data-object-state/arkts-new-observedv2-and-trace",
        children: "@ObservedV2和@Trace"
      }), "，配合阅读：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-statemanagement/js-apis-statemanagement#persistencev2",
        children: "PersistenceV2-API文档"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(264384)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "PersistenceV2从API version 12开始支持。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["globalConnect从API version 18开始支持，行为和connect保持一致，唯一的区别为connect的底层存储路径为module级别的路径，而globalConnect的底层存储路径为应用级别，详细区别见使用场景", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%9C%A8%E4%B8%8D%E5%90%8C%E7%9A%84module%E4%B8%AD%E4%BD%BF%E7%94%A8connect%E5%92%8Cglobalconnect",
        children: "在不同的module中使用connect和globalConnect"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["globalConnect从API version 23开始支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "#globalconnect%E6%94%AF%E6%8C%81%E9%9B%86%E5%90%88%E7%9A%84%E7%B1%BB%E5%9E%8B",
        children: "集合类型"
      }), "（Array、Map、Set、Date、collections.Array、collections.Map、collections.Set）的持久化，支持在UI线程持久化@Sendable类型的数据持久化，支持持久化循环引用的对象，支持持久化单个key超过8k的数据。目前建议开发者使用API version 23的新增的globalConnect接口。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "PersistenceV2是在应用UI启动时会被创建的单例。它的目的是提供应用状态数据的中心存储，这些状态数据在应用级别都是可访问的。数据通过唯一的键值字符串访问。不同于AppStorageV2，PersistenceV2还将最新数据存储在设备磁盘上（持久化）。这意味着，应用退出再次启动后，依然能保存选定的结果。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["对于与PersistenceV2关联的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-data-object-state/arkts-new-observedv2-and-trace",
        children: "@ObservedV2"
      }), "对象，该对象的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-data-object-state/arkts-new-observedv2-and-trace",
        children: "@Trace"
      }), "属性的变化，会触发", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "整个关联对象的自动持久化"
        })
      }), "；非", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-data-object-state/arkts-new-observedv2-and-trace",
        children: "@Trace"
      }), "属性的变化则不会，如有必要，可调用PersistenceV2 API手动持久化。请注意：被PersistenceV2持久化的类属性必须要有初值，否则不支持持久化。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "PersistenceV2可以和UI组件同步，且可以在应用业务逻辑中被访问。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["PersistenceV2支持应用的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ability-kit/stage-model-development/thread-model-stage",
        children: "主线程"
      }), "内多个UIAbility实例间的状态共享。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["PersistenceV2继承自", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-statemanagement/js-apis-statemanagement#appstoragev2",
        children: "AppStorageV2"
      }), "，支持通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-statemanagement/js-apis-statemanagement#connect",
        children: "connect"
      }), "创建或获取存储的数据。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用说明",
      children: "使用说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "globalConnect：创建或获取存储的数据。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(852335)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["1、关联", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-observed-and-objectlink",
            children: "@Observed"
          }), "对象时，由于该类型的name属性未定义，需要指定key或者自定义name属性。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "2、 globalConnect为应用级别存储，对于一个key，整个应用在对应加密分区只有一份存储路径。使用PersistenceV2的connect存储的数据路径为module级别，即哪个module调用了connect，数据副本存入对应module的持久化文件中。如果多个module使用相同的key，则数据为最先使用connect的module，并且PersistenceV2中的数据也会存入最先使用connect的module里。因为存储路径在应用第一个ability启动时就已确定，为该ability所属的module。如果一个ability调用了connect，并且该ability能被不同的module拉起， 那么ability存在多少种启动方式，就会有多少份数据副本，因此，建议开发者使用globalConnect代替connect接口。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "remove：删除指定key的存储数据。删除PersistenceV2中不存在的key会报警告。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "keys：返回所有PersistenceV2中的key。包括module级别存储路径和应用级别存储路径中的所有key。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "save：手动持久化数据。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "notifyOnError：响应序列化或反序列化失败的回调。将数据存入磁盘时，需要对数据进行序列化；当某个key序列化失败时，错误是不可预知的；可调用该接口捕获异常。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以上接口详细描述请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-statemanagement/js-apis-statemanagement",
        children: "状态管理API指南"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用限制",
      children: "使用限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1、需要配合UI使用（UI线程），不能在其他线程使用。在API version 23以前，不支持@Sendable。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "从API version 23开始，提供globalConnect接口，支持在UI线程持久化@Sendable装饰的类对象，其成员属性的类型需为基础内置类型（string、number和boolean）。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "2、在API version 23以前，不支持collections.Set、collections.Map等类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["从API version 23开始， 提供globalConnect接口，支持", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkts-api/arkts-arkts/js-apis-arkts-collections/arkts-apis-arkts-collections-set/arkts-apis-arkts-collections-set",
            children: "collections.Set"
          }), "、", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkts-api/arkts-arkts/js-apis-arkts-collections/arkts-apis-arkts-collections-map/arkts-apis-arkts-collections-map",
            children: "collections.Map"
          }), "和", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkts-api/arkts-arkts/js-apis-arkts-collections/arkts-apis-arkts-collections-array/arkts-apis-arkts-collections-array",
            children: "collections.Array"
          }), "。collections.Set、collections.Map和collections.Array本身无法观察，在globalConnect接口使用defaultCreator时，需要使用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-arkts/ui/js-apis-statemanagement/js-apis-statemanagement#makeobserved",
            children: "UIUtils.makeObserved"
          }), "，才能在值变化时自动保存，如果不使用，开发者需要手动调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-arkts/ui/js-apis-statemanagement/js-apis-statemanagement#save",
            children: "PersistenceV2.save(key)"
          }), "保存变化的数据。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如下是新增接口globalConnect支持collections.Array的示例代码:"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { PersistenceV2, UIUtils } from '@kit.ArkUI';\nimport { collections } from '@kit.ArkTS';\n\n@Entry\n@ComponentV2\nstruct Page1 {\n  // 支持直接持久化collections.Array的类型\n  @Local array: collections.Array<number> = PersistenceV2.globalConnect({\n    // 定义持久化的数据类型\n    type: collections.Array<number>,\n    // 定义默认构造器，返回时需要调用makeObserved，才能实现自动持久化\n    defaultCreator: () => UIUtils.makeObserved(new collections.Array<number>(1,2))\n  })!;\n  // 基于collections.Array构建Repeat的数据源\n  toArray<T>(array: collections.Array<T>): Array<T> {\n    const result = new Array<T>();\n    array.forEach((item: T) => result.push(item));\n    return result;\n  }\n\n  build() {\n    Column({ space: 10 }) {\n      Column({ space: 0 }) {\n        Repeat(this.toArray(this.array))\n          .each(ri => {\n            Row() {\n              Text(`Item: `)\n              Text(`${ri.item}`)\n            }\n          })\n          .key((item: number, index: number) => `${index} - ${item}`)\n      }\n      Divider().width('100%')\n      // 点击'array.push(0)'，重启应用，Repeat数组项是：1, 2, 0\n      Button('array.push(0)')\n        .onClick(() => {\n          this.array.push(Math.round(0));\n        })\n        .fontSize(24)\n      // 点击'array.pop()'，重启应用，Repeat数组项是：1, 2\n      Button('array.pop()')\n        .onClick(() => {\n          this.array.pop();\n        })\n        .fontSize(24)\n      // 点击'array.splice(0)'，重启应用，Repeat数组项为空\n      Button('array.splice(0)')\n        .onClick(() => {\n          this.array.splice(0);\n        })\n        .fontSize(24)\n      // 点击'splice(1, 0, random)'，重启应用：Repeat组件再次显示相同的数组项\n      Button('array.splice(1, 0, random)')\n        .onClick(() => {\n          this.array.splice(1, 0, Math.round(100*Math.random()));\n        })\n        .fontSize(24)\n      // 点击'array.splice(0, 2, random, random)'，前两个数组项目被替换，记录下来\n      // 重启应用：Repeat组件再次显示数组项\n      Button('array.splice(0, 2, random, random)')\n        .onClick(() => {\n          this.array.splice(2, 2, Math.round(100*Math.random()), Math.round(100*Math.random()));\n        })\n        .fontSize(24)\n      // 点击'array.sort', 对数组项升序排列，重启应用，Repeat组件展示升序数组\n      Button('array.sort')\n        .onClick(() => {\n          this.array.sort((a, b) => a -b);\n        })\n        .fontSize(24)\n      // 点击'array.reverse', 对数组项降序排列，重启应用，Repeat组件展示降序数组\n      Button('array.reverse')\n        .onClick(() => {\n          this.array.reverse();\n        })\n        .fontSize(24)\n    }\n    .width('100%')\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["globalConnect在持久化多个相同", (0,jsx_runtime.jsx)(_components.a, {
            href: "#globalconnect%E6%94%AF%E6%8C%81%E9%9B%86%E5%90%88%E7%9A%84%E7%B1%BB%E5%9E%8B",
            children: "集合类型"
          }), "时，需要提供不同的key来区分持久化数据。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如下展示开发者持久化相同的Array<number>类型的部分示例代码片段："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Entry\n@ComponentV2\nstruct Page1 {\n  // 持久化相同容器类型的数据，建议开发者使用不同的key来区分持久化数据\n  @Local arr1: Array<number> = PersistenceV2.globalConnect({\n    type: Array<number>,\n    key: 'arr1',\n    defaultCreator: () => UIUtils.makeObserved(new Array<number>()),\n  })!;\n\n  @Local arr2: Array<number> = PersistenceV2.globalConnect({\n    type: Array<number>,\n    key: 'arr2',\n    defaultCreator: () => UIUtils.makeObserved(new Array<number>()),\n  })!;\n  // ...\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["3、不支持非built-in类型，如", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-pixelmap/arkts-apis-image-pixelmap",
        children: "PixelMap"
      }), "、NativePointer、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkts-api/arkts-arkts/js-apis-arraylist/js-apis-arraylist",
        children: "ArrayList"
      }), "等Native类型。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "4、在API version 23以前，单个key支持数据大小约8k，过大会导致持久化失败。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在API version 23开始，解除单个key只能持久化8K数据的限制，读取和写入持久化存储的数据会在UI线程中同步进行，但开发者需要注意，不建议开发者在UI线程存储大量的持久化数据，会导致界面卡顿。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["5、在API version 23以前，持久化的数据必须是class对象，不支持容器类型（如Array、Set、Map），不支持built-in的构造对象（如String、Number），不支持持久化基本类型（如string、number、boolean）。如果需要持久化非class对象，建议使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkdata/app-data-persistence/preferences-guidelines",
        children: "Preferences"
      }), "进行数据持久化。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在API version 23开始，支持持久化Class类型和容器类型（Array、Set、Map，Date）。支持built-in的构造对象类型（如String、Number）及基本类型（如string、number、boolean）作为class属性的持久化（String、Number是不可变的数据对象，没法直接作为", (0,jsx_runtime.jsx)(_components.a, {
            href: "#globalconnect%E9%A1%B6%E5%B1%82%E6%8C%81%E4%B9%85%E5%8C%96%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B%E5%8F%8A%E9%9D%9E%E9%A1%B6%E5%B1%82%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B",
            children: "顶层数据类型"
          }), "进行持久化）。对于不支持的类型，会抛出运行时报错，从API version 23开始，将返回错误码", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-arkts-errcode/arkui-ui-arkts-errcode/errorcode-statemanagement/errorcode-statemanagement#section140103-appstoragev2%E5%92%8Cpersistencev2%E4%BD%BF%E7%94%A8%E4%B8%8D%E6%94%AF%E6%8C%81%E7%9A%84%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B",
            children: "140103"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如下为新增globalConnect支持Array<ClassA>类型的持久化示例："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { PersistenceV2, UIUtils } from '@kit.ArkUI';\n\n@ObservedV2\nclass ClassA {\n  @Trace public propA: string = '';\n  @Trace public propB: string = '';\n\n  public report(): string {\n    return `${this.propA} - ${this.propB}`;\n  }\n}\n\n@Entry\n@ComponentV2\nstruct Comp {\n  // 持久化顶层数据类型为Array<ClassA>的数据\n  @Local arr: Array<ClassA> = PersistenceV2.globalConnect({\n    type: Array<ClassA>,\n    defaultCreator: () => UIUtils.makeObserved(new Array<ClassA>()),\n    // 添加defaultSubCreator，通知状态管理框架如何创建数组项\n    // 另外持久化的数据需要加上makeObserved，因为JSON对象本身没有观察能力，自动持久化会失败\n    defaultSubCreator: () => UIUtils.makeObserved(new ClassA())\n  })!;\n\n  build() {\n    Column() {\n      Repeat(this.arr)\n        .each(ri => {\n          Row() {\n            Text(`propA '${ri.item.propA}'`)\n            Text(`propB '${ri.item.propB}'`)\n            Text(`report?.() '${ri.item.report?.()}'`)\n          }\n        })\n      // 点击'add item',显示`propA 'a' propB 'b'report?.'a' - 'b'`, 杀掉应用，再次进入，会显示上次的结果\n      Button('add item')\n        .onClick(() => {\n          let temp: ClassA = new ClassA();\n          temp.propA = 'a';\n          temp.propB = 'b';\n          this.arr.push(temp);\n        })\n    }\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如下为globalConnect支持Date类型的持久化示例："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { PersistenceV2, UIUtils } from '@kit.ArkUI';\n\n@Entry\n@ComponentV2\nstruct Page1 {\n  // 支持直接持久化Date类型的数据\n  @Local date: Date = PersistenceV2.globalConnect({\n    type: Date,\n    defaultCreator: () => UIUtils.makeObserved(new Date())\n  })!;\n\n  build() {\n    Column({ space: 40 }) {\n      Text(`date: ${this.date.toISOString()}`)\n        .fontSize(24)\n      // 点击'date.setTime( Date.now() )', 杀掉应用，进入应用后，显示日期\n      Button('date.setTime( Date.now() )')\n        .onClick(() => {\n          this.date.setTime(Date.now());\n        })\n        .fontSize(24)\n    }\n    .width('100%')\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如下为globalConnect支持Number类型作为class子属性的持久化示例："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { PersistenceV2 } from '@kit.ArkUI';\n\n@ObservedV2 class NumberClass {\n  // Number类型不是顶层持久化数据类型，只能支持非顶层数据类型的持久化\n  @Trace public value: Number = new Number(Infinity);\n}\n\n@Entry\n@ComponentV2\nstruct Page1 {\n  // Number类型只能作为NumberClass的子属性去持久化\n  @Local number: NumberClass = PersistenceV2.globalConnect({\n    type: NumberClass,\n    defaultCreator: () => new NumberClass()\n  })!;\n  output: string[] = [];\n\n  aboutToAppear(): void {\n    this.output.push(`this.number.value: ${this.number.value}, is instanceof Number ${this.number.value instanceof Number}`);\n    this.number.value = new Number(-this.number.value);\n  }\n\n  build() {\n    Column() {\n      Row() {\n        // 第一次打开应用，界面显示'this.number.value: Infinity, is instanceof Number true'\n        // 第二次打开应用，界面显示'this.number.value: -Infinity, is instanceof Number true'\n        Text(this.output.join('\\n\\n'))\n          .fontSize(24)\n      }\n    }\n    .width('100%')\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "6、在API version 23以前，不支持循环引用对象的持久化。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在API version 23开始，提供globalConnect接口支持循环引用的对象持久化。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如下为globalConnect支持循环引用的对象的持久化示例："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { PersistenceV2 } from '@kit.ArkUI';\n\n@ObservedV2\nclass ClassA {\n  @Trace public value: string = 'a';\n  @Trace public refB: ClassB | undefined;\n}\n\n@ObservedV2\nclass ClassB {\n  @Trace public value: string = 'b';\n  @Trace public refA: ClassA | undefined;\n}\n\n@ObservedV2\nclass ClassC {\n  @Trace public value: string = 'c';\n  @Trace public objA: ClassA = new ClassA();\n  @Trace public objB: ClassB = new ClassB();\n\n  // ClassC是循环引用对象\n  constructor() {\n    this.objA.refB = this.objB;\n    this.objB.refA = this.objA;\n  }\n}\n\n@Entry\n@ComponentV2\nstruct Page1 {\n  @Local test: ClassC = PersistenceV2.globalConnect({\n    type: ClassC,\n    defaultCreator: () => new ClassC()\n  })!;\n  output: string[] = [];\n\n  aboutToAppear(): void {\n    const refAValue = this.test.objA?.refB?.refA?.value;\n    const refBValue = this.test.objB?.refA?.refB?.value;\n    this.output.push(`${refAValue}, ${refBValue}`);\n    this.test.objA.value += 'a';\n    this.test.objB.value += 'b';\n  }\n\n  build() {\n    Column() {\n      Row() {\n        // 第一次打开应用，界面显示'a, b'\n        // 第二次打开应用，界面显示'aa, bb'\n        Text(this.output.join('\\n\\n'))\n          .fontSize(24)\n      }\n    }\n    .width('100%')\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["7、只有", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-data-object-state/arkts-new-observedv2-and-trace",
        children: "@Trace"
      }), "的数据改变会触发自动持久化，如V1状态变量、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-observed-and-objectlink",
        children: "@Observed"
      }), "对象、普通数据的改变不会触发持久化。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["8、connect和globalConnect不建议混用，如果混用，key不能一样，否则应用crash，从API version 23开始，将返回错误码", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts-errcode/arkui-ui-arkts-errcode/errorcode-statemanagement/errorcode-statemanagement#section140105-persistencev2%E6%B7%B7%E7%94%A8connect%E5%92%8Cglobalconnect%E5%B9%B6%E4%BD%BF%E7%94%A8%E7%9B%B8%E5%90%8C%E7%9A%84key",
        children: "140105"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["9、PersistenceV2必须与UI实例关联，持久化操作需在UI实例初始化完成后调用（即", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-windowstage/arkts-apis-window-windowstage#loadcontent9",
        children: "loadContent"
      }), "回调触发后）。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// EntryAbility.ets\n// 以下为代码片段，需要开发者自己在EntryAbility.ets中补全\nimport { PersistenceV2 } from '@kit.ArkUI';\n\n// 在EntryAbility外部定义class\n@ObservedV2\nclass Storage {\n  @Trace isPersist: boolean = false;\n}\n\n// 在onWindowStageCreate的loadContent回调中调用PersistenceV2\nonWindowStageCreate(windowStage: window.WindowStage): void {\n  windowStage.loadContent('pages/Index', (err) => {\n    if (err.code) {\n      return;\n    }\n    PersistenceV2.connect(Storage, () => new Storage());\n  });\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["10、如果开发者对数据持久化能力有较强的诉求，例如持久化时机，建议使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkdata/app-data-persistence/preferences-guidelines",
        children: "Preferences"
      }), "进行数据持久化。注意：不允许混用PersistenceV2和Preferences，因为Preferences存储的数据不会有状态变量信息，反序列化的数据不能触发PersistenceV2的自动化存储。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["11、当开发者使用globalConnect持久化数据，从磁盘读取数据时，需要保证key数据在持久化前后类型一致。从API version 23开始，将返回错误码", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts-errcode/arkui-ui-arkts-errcode/errorcode-statemanagement/errorcode-statemanagement#section140107-appstoragev2%E5%92%8Cpersistencev2%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B%E4%B8%8D%E5%8C%B9%E9%85%8D",
        children: "140107"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["12、globalConnect仅支持设置EL1-EL5加密级别，否则会抛出运行时异常，从API version 23开始，将返回错误码", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts-errcode/arkui-ui-arkts-errcode/errorcode-statemanagement/errorcode-statemanagement#section140106-%E4%BD%BF%E7%94%A8persistencev2%E5%AD%98%E5%82%A8%E6%95%B0%E6%8D%AE%E5%88%B0%E4%B8%8D%E6%94%AF%E6%8C%81%E7%9A%84%E5%8A%A0%E5%AF%86%E7%BA%A7%E5%88%AB",
        children: "140106"
      }), "，示例见", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E4%BD%BF%E7%94%A8globalconnect%E5%AD%98%E5%82%A8%E6%95%B0%E6%8D%AE",
        children: "使用globalConnect存储数据"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "globalconnect支持的类型",
      children: "globalConnect支持的类型"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "globalconnect顶层持久化数据类型及非顶层数据类型",
      children: "globalConnect顶层持久化数据类型及非顶层数据类型"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在API version 23以前，持久化的顶层数据类型必须是用户自定义的class对象，不支持容器类型（如Array、Set、Map，Date）。在API version 23开始，持久化的顶层数据类型可以是用户自定义的class，也可以是容器类型。非顶层数据类型，是指定义在用户自定义class属性的类型。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如下示例中，Array<ClassA>是顶层持久化数据类型, 可作为globalConnect的直接返回值类型，collections.Map是CollectionMapClass类中属性的类型，属于非顶层持久化的数据类型。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class ClassA {\n  propA: number;\n\n}\n@Sendable\nclass CollectionMapClass {\n  // 用户自定义的class中属性类型为collections.Map，非顶层持久化数据类型\n  value = new collections.Map<number, number>([]);\n}\n\n@ComponentV2\nstruct Page1 {\n  // 顶层持久化数据类型为Array<ClassA>\n  @Local arr: Array<ClassA> = PersistenceV2.globalConnect({\n    type: Array<ClassA>,\n    defaultCreator: () => UIUtils.makeObserved(new Array<ClassA>()),\n    // 添加defaultSubCreator，通知状态管理框架如何创建数组项\n    // 另外持久化后的数据需要加上makeObserved，否则会持久化失败\n    defaultSubCreator: () => UIUtils.makeObserved(new ClassA())\n  })!;\n  \n  // 顶层持久化数据类型为用户自定义的class，collections.Map为非顶层持久化数据类型\n  collectionMap: CollectionMapClass = PersistenceV2.globalConnect({\n    type: CollectionMapClass,\n    defaultCreator: () => new CollectionMapClass()\n  })!\n  // ...\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "globalconnect用户自定义class对象属性支持的类型",
      children: "globalConnect用户自定义class对象属性支持的类型"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用户自定义class对象的属性可以使用以下类型：boolean、number、string、undefined、null、Object、Date、Number、Boolean、String以及自定义类class。还支持以下集合类型：Array、Map、Set。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 观察类的@Trace属性支持上述所有类型\n@ObservedV2\nclass ClassA {\n  // VType是上述列举的类型\n  @Trace propA: VType;\n}\n\n@ComponentV2 struct Comp {\n  @Local obsObj : ClassA = PersistenceV2.globalConnect({\n    type: ClassA,\n    defaultCreator: () => new ClassA()\n  })\n  // ...\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用户自定义class类型的属性必须使用@Type装饰器装饰，且其class属性值必须严格为@Type中指定类的实例。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class ClassA {\n  // ...\n}\nclass PersistClass {\n  @Type(ClassA)\n  propA: ClassA = new ClassA();\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "globalconnect支持集合的类型",
      children: "globalConnect支持集合的类型"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "集合类型是指Array<V>、Map<K, V>、Set<V>、collections.Array<V>、collections.Map<K, V>、collections.Set<V>。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "其中，Map<K, V>和collections.Map<k, V>中的key值类型（K）是指string或number类型。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Array<V>、Map<K, V>和 Set<V>中，V的类型包括：boolean、number、string、Date、Number、Boolean、String、interface类型和class类型。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "collections.Array<V>、collections.Map<K, V>、collections.Set<V>要求V的类型必须是@Sendable类型的数据（boolean、number、string类型）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如下展示globalConnect持久化Array<ClassA>的示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { PersistenceV2,  UIUtils } from '@kit.ArkUI';\n\nclass ClassA {\n  public propA: number = 0;\n  public classAToString() : string {\n    return this.propA.toString()\n  }\n}\n\n@Entry\n@ComponentV2\nstruct Page1 {\n  @Local arr: Array<ClassA> = PersistenceV2.globalConnect({\n    type: Array<ClassA>,\n    defaultCreator: () => UIUtils.makeObserved(new Array<ClassA>()),\n    // 添加defaultSubCreator，通知状态管理框架如何创建ClassA对象\n    // 另外持久化后的数据需要加上makeObserved，否则会持久化失败\n    defaultSubCreator: () => UIUtils.makeObserved(new ClassA())\n  })!;\n\n  build() {\n    Column({ space: 10 }) {\n      Column({ space: 0 }) {\n        Repeat(this.arr)\n          .each(ri => {\n            Row() {\n              Text(`Item: `)\n              Text(ri.item.classAToString ? ri.item.classAToString(): `classAToString() missing from object, propA: ${ri.item.propA}`)\n            }\n          })\n          .key((item: ClassA, index: number) => `${index} - ${item.propA}`)\n      }\n\n      Divider().width('100%')\n      // 点击'array.push(0)'，重启应用，Repeat数组项是：1, 2, 0\n      Button('array.push(0)')\n        .onClick(() => {\n          let temp = new ClassA();\n          temp.propA = 0;\n          this.arr.push(UIUtils.makeObserved(temp));\n        })\n        .fontSize(24)\n      // 点击'array.pop()'，重启应用，Repeat数组项是：1, 2\n      Button('array.pop()')\n        .onClick(() => {\n          this.arr.pop();\n        })\n        .fontSize(24)\n      // 点击'array.splice(0)'，重启应用，Repeat数组项为空\n      Button('array.splice(0)')\n        .onClick(() => {\n          this.arr.splice(0);\n        })\n        .fontSize(24)\n      // 点击'splice(1, 0, random)'，重启应用：Repeat组件再次显示相同的数组项\n      Button('array.splice(1, 0, random)')\n        .onClick(() => {\n          let temp = new ClassA();\n          temp.propA = Math.round(100 * Math.random());\n          this.arr.splice(1, 0, UIUtils.makeObserved(temp));\n        })\n        .fontSize(24)\n      // 点击'array.splice(0, 2, random, random)'，前两个数组项目被替换，记录下来\n      // 重启应用：Repeat组件再次显示数组项\n      Button('array.splice(0, 2, random, random)')\n        .onClick(() => {\n          let tempA = new ClassA();\n          tempA.propA = Math.round(100 * Math.random());\n          this.arr.splice(2, 2,\n            UIUtils.makeObserved(tempA),\n            UIUtils.makeObserved(tempA));\n        })\n        .fontSize(24)\n      // 点击'array.sort', 对数组项升序排列，重启应用，Repeat组件展示升序数组\n      Button('array.sort')\n        .onClick(() => {\n          this.arr.sort((tempA, tempB)=> tempA.propA - tempB.propA);\n        })\n        .fontSize(24)\n      // 点击'array.reverse', 对数组项降序排列，重启应用，Repeat组件展示降序数组\n      Button('array.reverse')\n        .onClick(() => {\n          this.arr.reverse();\n        })\n        .fontSize(24)\n    }\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用场景",
      children: "使用场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "在两个页面之间存储数据",
      children: "在两个页面之间存储数据"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "数据页面"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Sample.ets\nimport { Type } from '@kit.ArkUI';\n\n// 数据中心\n@ObservedV2\nclass SampleChild {\n  @Trace public p1: number = 0;\n  public p2: number = 10;\n}\n\n@ObservedV2\nexport class Sample {\n  // 对于复杂对象需要@Type修饰，确保序列化成功\n  @Type(SampleChild)\n  @Trace public f: SampleChild = new SampleChild();\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "页面1"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Page1.ets\nimport { PersistenceV2 } from '@kit.ArkUI';\nimport { Sample } from '../Sample';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst DOMAIN = 0x0000;\n\n// 接受序列化失败的回调\nPersistenceV2.notifyOnError((key: string, reason: string, msg: string) => {\n  hilog.error(DOMAIN, 'testTag', '%{public}s', `error key: ${key}, reason: ${reason}, message: ${msg}`);\n});\n\n@Entry\n@ComponentV2\nstruct Page1 {\n  // 在PersistenceV2中创建一个key为Sample的键值对（如果存在，则返回PersistenceV2中的数据），并且和prop关联\n  // 对于需要换connect对象的prop属性，需要加@Local修饰（不建议对属性换connect的对象）\n  @Local prop: Sample = PersistenceV2.connect(Sample, () => new Sample())!;\n  pageStack: NavPathStack = new NavPathStack();\n\n  build() {\n    Navigation(this.pageStack) {\n      Column() {\n        Button('Go to page2')\n          .onClick(() => {\n            this.pageStack.pushPathByName('Page2', null);\n          })\n\n        Button('Page1 connect the key Sample')\n          .onClick(() => {\n            // 在PersistenceV2中创建一个key为Sample的键值对（如果存在，则返回PersistenceV2中的数据），并且和prop关联\n            // 不建议对prop属性换connect的对象\n            this.prop = PersistenceV2.connect(Sample, 'Sample', () => new Sample())!;\n          })\n\n        Button('Page1 remove the key Sample')\n          .onClick(() => {\n            // 从PersistenceV2中删除后，prop将不会再与key为Sample的值关联\n            PersistenceV2.remove(Sample);\n          })\n\n        Button('Page1 save the key Sample')\n          .onClick(() => {\n            // 如果处于connect状态，持久化key为Sample的键值对\n            PersistenceV2.save(Sample);\n          })\n\n        Text(`Page1 add 1 to prop.p1: ${this.prop.f.p1}`)\n          .fontSize(30)\n          .onClick(() => {\n            this.prop.f.p1++;\n          })\n\n        Text(`Page1 add 1 to prop.p2: ${this.prop.f.p2}`)\n          .fontSize(30)\n          .onClick(() => {\n            // 页面不刷新，但是p2的值改变了\n            this.prop.f.p2++;\n          })\n\n        // 获取当前PersistenceV2里面的所有key\n        Text(`all keys in PersistenceV2: ${PersistenceV2.keys()}`)\n          .fontSize(30)\n      }\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "页面2"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Page2.ets\nimport { PersistenceV2 } from '@kit.ArkUI';\nimport { Sample } from '../Sample';\n\n@Builder\nexport function Page2Builder() {\n  Page2()\n}\n\n@ComponentV2\nstruct Page2 {\n  // 在PersistenceV2中创建一个key为Sample的键值对（如果存在，则返回PersistenceV2中的数据），并且和prop关联\n  // 对于需要换connect对象的prop属性，需要加@Local修饰（不建议对属性换connect的对象）\n  @Local prop: Sample = PersistenceV2.connect(Sample, () => new Sample())!;\n  pathStack: NavPathStack = new NavPathStack();\n\n  build() {\n    NavDestination() {\n      Column() {\n        Button('Page2 connect the key Sample1')\n          .onClick(() => {\n            // 在PersistenceV2中创建一个key为Sample1的键值对（如果存在，则返回PersistenceV2中的数据），并且和prop关联\n            // 不建议对prop属性换connect的对象\n            this.prop = PersistenceV2.connect(Sample, 'Sample1', () => new Sample())!;\n          })\n\n        Text(`Page2 add 1 to prop.p1: ${this.prop.f.p1}`)\n          .fontSize(30)\n          .onClick(() => {\n            this.prop.f.p1++;\n          })\n\n        Text(`Page2 add 1 to prop.p2: ${this.prop.f.p2}`)\n          .fontSize(30)\n          .onClick(() => {\n            // 页面不刷新，但是p2的值改变了；只有重新初始化才会改变\n            this.prop.f.p2++;\n          })\n\n        // 获取当前PersistenceV2里面的所有key\n        Text(`all keys in PersistenceV2: ${PersistenceV2.keys()}`)\n          .fontSize(30)\n      }\n    }\n    .onReady((context: NavDestinationContext) => {\n      this.pathStack = context.pathStack;\n    })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用Navigation时，需要添加配置系统路由表文件src/main/resources/base/profile/route_map.json，并替换pageSourceFile为Page2页面的路径，并且在module.json5中添加：\"routerMap\": \"$profile:route_map\"。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"routerMap\": [\n    {\n      \"name\": \"Page2\",\n      \"pageSourceFile\": \"src/main/ets/pages/Page2.ets\",\n      \"buildFunction\": \"Page2Builder\",\n      \"data\": {\n        \"description\" : \"PersistenceV2 example\"\n      }\n    }\n  ]\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用globalconnect存储数据",
      children: "使用globalConnect存储数据"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { PersistenceV2, Type, ConnectOptions } from '@kit.ArkUI';\nimport { contextConstant } from '@kit.AbilityKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst DOMAIN = 0x0000;\n// 接受序列化失败的回调\nPersistenceV2.notifyOnError((key: string, reason: string, msg: string) => {\n  hilog.error(DOMAIN, 'testTag', '%{public}s', `error key: ${key}, reason: ${reason}, message: ${msg}`);\n});\n\n@ObservedV2\nclass SampleChild {\n  @Trace public childId: number = 0;\n  public groupId: number = 1;\n}\n\n@ObservedV2\nexport class SampleGlobalConnect {\n  // 对于复杂对象需要@Type修饰，确保序列化成功\n  @Type(SampleChild)\n  @Trace public father: SampleChild = new SampleChild();\n}\n\n@Entry\n@ComponentV2\nstruct Page1 {\n  @Local refresh: number = 0;\n  // key不传入尝试用为type的name作为key，加密参数不传入默认加密等级为EL2\n  @Local p: SampleGlobalConnect =\n    PersistenceV2.globalConnect({ type: SampleGlobalConnect, defaultCreator: () => new SampleGlobalConnect() })!;\n  // 使用key:global1连接，传入加密等级为EL1\n  @Local p1: SampleGlobalConnect = PersistenceV2.globalConnect({\n    type: SampleGlobalConnect,\n    key: 'global1',\n    defaultCreator: () => new SampleGlobalConnect(),\n    areaMode: contextConstant.AreaMode.EL1\n  })!;\n  // 使用key:global2连接，使用构造函数形式，加密参数不传入默认加密等级为EL2\n  options: ConnectOptions<SampleGlobalConnect> =\n    { type: SampleGlobalConnect, key: 'global2', defaultCreator: () => new SampleGlobalConnect() };\n  @Local p2: SampleGlobalConnect = PersistenceV2.globalConnect(this.options)!;\n  // 使用key:global3连接，直接写加密数值，范围只能在0-4，否则运行会crash,例如加密设置为EL3\n  @Local p3: SampleGlobalConnect = PersistenceV2.globalConnect({\n    type: SampleGlobalConnect,\n    key: 'global3',\n    defaultCreator: () => new SampleGlobalConnect(),\n    areaMode: 3\n  })!;\n\n  build() {\n    Column() {\n      // 显示数据\n      // 被@Trace修饰的数据可以自动持久化进磁盘\n      Text('Key SampleGlobalConnect: ' + this.p.father.childId.toString())\n        .onClick(() => {\n          this.p.father.childId += 1;\n        })\n        .fontSize(25)\n        .fontColor(Color.Red)\n      Text('Key global1: ' + this.p1.father.childId.toString())\n        .onClick(() => {\n          this.p1.father.childId += 1;\n        })\n        .fontSize(25)\n        .fontColor(Color.Red)\n      Text('Key global2: ' + this.p2.father.childId.toString())\n        .onClick(() => {\n          this.p2.father.childId += 1;\n        })\n        .fontSize(25)\n        .fontColor(Color.Red)\n      Text('Key global3: ' + this.p3.father.childId.toString())\n        .onClick(() => {\n          this.p3.father.childId += 1;\n        })\n        .fontSize(25)\n        .fontColor(Color.Red)\n      // keys接口\n      // keys本身不会刷新，需要借助状态变量刷新\n      Text('Persist keys: ' + PersistenceV2.keys().toString() + ' refresh: ' + this.refresh)\n        .onClick(() => {\n          this.refresh += 1;\n        })\n        .fontSize(25)\n\n      // remove接口\n      Text('Remove key SampleGlobalConnect: ' + 'refresh: ' + this.refresh)\n        .onClick(() => {\n          // 删除这个key，会导致和p失去联系，之后即使reconnect，p也无法存储\n          PersistenceV2.remove(SampleGlobalConnect);\n          this.refresh += 1;\n        })\n        .fontSize(25)\n      Text('Remove key global1: ' + 'refresh: ' + this.refresh)\n        .onClick(() => {\n          // 删除这个key，会导致和p1失去联系，之后即使reconnect，p1也无法存储\n          PersistenceV2.remove('global1');\n          this.refresh += 1;\n        })\n        .fontSize(25)\n      Text('Remove key global2: ' + 'refresh: ' + this.refresh)\n        .onClick(() => {\n          // 删除这个key，会导致和p2失去联系，之后即使reconnect，p2也无法存储\n          PersistenceV2.remove('global2');\n          this.refresh += 1;\n        })\n        .fontSize(25)\n      Text('Remove key global3: ' + 'refresh: ' + this.refresh)\n        .onClick(() => {\n          // 删除这个key，会导致和p3失去联系，之后即使reconnect，p3也无法存储\n          PersistenceV2.remove('global3');\n          this.refresh += 1;\n        })\n        .fontSize(25)\n      // reConnect\n      // 重新连接也无法和之前的状态变量建立联系，因此无法保存数据\n      Text('ReConnect key global2: ' + 'refresh: ' + this.refresh)\n        .onClick(() => {\n          // 此时会重新存储一个key为global2的变量，但该变量与p2无关\n          PersistenceV2.globalConnect(this.options);\n          this.refresh += 1;\n        })\n        .fontSize(25)\n\n      // save接口\n      Text('not save key SampleGlobalConnect: ' + this.p.father.groupId.toString() + ' refresh: ' + this.refresh)\n        .onClick(() => {\n          // 未被@Trace保存的对象无法自动存储\n          this.p.father.groupId += 1;\n          this.refresh += 1;\n        })\n        .fontSize(25)\n      Text('save key SampleGlobalConnect: ' + this.p.father.groupId.toString() + ' refresh: ' + this.refresh)\n        .onClick(() => {\n          // 未被@Trace保存的对象无法自动存储，需要调用save存储\n          this.p.father.groupId += 1;\n          PersistenceV2.save(SampleGlobalConnect);\n          this.refresh += 1;\n        })\n        .fontSize(25)\n    }\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "在不同的module中使用connect和globalconnect",
      children: "在不同的module中使用connect和globalConnect"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "connect的存储路径需要注意以下两点："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1、connect使用module级别的存储路径，以最先启动的module的路径作为存储路径，从内存回写磁盘时会回写到第一个连接该module的路径。应用如果之后先从另一个module启动，则会以新module的路径作为存储路径。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "2、当不同module使用相同的key时，哪个module先启动，数据就为哪个module中保存的键值对，回写到对应的module中。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "globalConnect的存储路径需要注意："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "globalConnect虽然是应用级别的路径，但是可以设置不同的加密分区，不同加密分区即代表不同的存储路径。connect不支持设置加密分区，但是module自身切换加密级别时，module存储路径也会切换成对应加密分区路径。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例代码如下：开发者需要在项目基础上，新建一个module，并按照示例代码跳转到新module中。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 模块1\nimport { PersistenceV2, Type } from '@kit.ArkUI';\nimport { common, Want } from '@kit.AbilityKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { contextConstant } from '@kit.AbilityKit';\n\nconst DOMAIN = 0x0000;\n\n// 接受序列化失败的回调\nPersistenceV2.notifyOnError((key: string, reason: string, msg: string) => {\n  hilog.error(DOMAIN, 'testTag', '%{public}s', `error key: ${key}, reason: ${reason}, message: ${msg}`);\n});\n\n@ObservedV2\nclass SampleChild {\n  @Trace public childId: number = 0;\n  public groupId: number = 1;\n}\n\n@ObservedV2\nexport class Sample {\n  // 对于复杂对象需要@Type修饰，确保序列化成功\n  @Type(SampleChild)\n  @Trace public father: SampleChild = new SampleChild();\n}\n\n@Entry\n@ComponentV2\nstruct Page1 {\n  @Local refresh: number = 0;\n  // 使用key:globalConnect1连接，传入加密等级为EL1\n  @Local p1: Sample =\n    PersistenceV2.globalConnect({\n      type: Sample,\n      key: 'globalConnect1',\n      defaultCreator: () => new Sample(),\n      areaMode: contextConstant.AreaMode.EL1\n    })!;\n  // 使用key:connect2连接，使用构造函数形式，加密参数不传入默认加密等级为EL2\n  @Local p2: Sample = PersistenceV2.connect(Sample, 'connect2', () => new Sample())!;\n  private context = this.getUIContext().getHostContext() as common.UIAbilityContext;\n\n  build() {\n    Column() {\n      // 显示数据\n      Text('Key globalConnect1: ' + this.p1.father.childId.toString())\n        .onClick(() => {\n          this.p1.father.childId += 1;\n        })\n        .fontSize(25)\n        .fontColor(Color.Red)\n      Text('Key connect2: ' + this.p2.father.childId.toString())\n        .onClick(() => {\n          this.p2.father.childId += 1;\n        })\n        .fontSize(25)\n        .fontColor(Color.Red)\n\n      // 跳转\n      Button('Jump to newModule')\n        .onClick(() => { // 不同module之间使用，建议使用globalConnect\n          let want: Want = {\n            deviceId: '', // deviceId为空代表本设备\n            bundleName: 'com.samples.paradigmstatemanagement', // 在app.json5中查看\n            moduleName: 'demo', // 在需要跳转的module的module.json5中查看，非必选参数\n            abilityName: 'NewModuleAbility', // 跳转启动的ability，在需要跳转的module的module.json5中查看\n            uri: 'src/main/ets/pages/Index'\n          };\n          // context为调用方UIAbility的UIAbilityContext\n          this.context.startAbility(want).then(() => {\n            hilog.info(DOMAIN, 'testTag', '%{public}s', 'start ability success');\n          }).catch((err: Error) => {\n            hilog.error(DOMAIN, 'testTag', '%{public}s',\n              `start ability failed. code is ${err.name}, message is ${err.message}`);\n          });\n        })\n    }\n    .width('100%')\n    .borderWidth(3)\n    .borderColor(Color.Blue)\n    .margin({ top: 5, bottom: 5 })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 模块2\nimport { PersistenceV2, Type } from '@kit.ArkUI';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { contextConstant } from '@kit.AbilityKit';\n\nconst DOMAIN = 0x0000;\n// 接受序列化失败的回调\nPersistenceV2.notifyOnError((key: string, reason: string, msg: string) => {\n  hilog.error(DOMAIN, 'testTag', '%{public}s', `error key: ${key}, reason: ${reason}, message: ${msg}`);\n});\n\n@ObservedV2\nclass SampleChild {\n  @Trace public childId: number = 0;\n  public groupId: number = 1;\n}\n\n@ObservedV2\nexport class Sample {\n  // 对于复杂对象需要@Type修饰，确保序列化成功\n  @Type(SampleChild)\n  @Trace public father: SampleChild = new SampleChild();\n}\n\n@Entry\n@ComponentV2\nstruct Page1 {\n  @Local a: number = 0;\n  // 使用key:globalConnect1连接，传入加密等级为EL1\n  @Local p1: Sample =\n    PersistenceV2.globalConnect({ type: Sample, key: 'globalConnect1', defaultCreator: () => new Sample(), areaMode: contextConstant.AreaMode.EL1 })!;\n  // 使用key:connect2连接，使用构造函数形式，加密参数不传入默认加密等级为EL2\n  @Local p2: Sample = PersistenceV2.connect(Sample, 'connect2', () => new Sample())!;\n\n  build() {\n    Column() {\n      // 显示数据\n      Text('Key globalConnect1: ' + this.p1.father.childId.toString())\n        .onClick(() => {\n          this.p1.father.childId += 1;\n        })\n        .fontSize(25)\n        .fontColor(Color.Red)\n      Text('Key connect2: ' + this.p2.father.childId.toString())\n        .onClick(() => {\n          this.p2.father.childId += 1;\n        })\n        .fontSize(25)\n        .fontColor(Color.Red)\n    }\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当开发者对newModule使用不同启动方式会有以下现象："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "开发者直接启动newModule，分别修改globalConnect1和connect2绑定的变量，例如将childId都改成5。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用退出并清空后台，启动模块entry，通过跳转按键启动newModule，会发现globalConnect1值为5，而connect2值为0未修改。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "globalConnect为应用级别存储，对于一个key，整个应用在对应加密分区只有一份存储路径；connect为module级别的存储路径，会因为module的启动方式不同而在各自的加密分区对应不同的存储路径。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用建议",
      children: "使用建议"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "建议开发者使用新接口globalConnect创建和获取数据。globalConnect的存储规格和内存规格一致，对于应用只有一份，并且支持设置加密级别，不需要去切换ability的加密才能设置数据的加密级别。当然如果开发者应用不涉及多模块，保持使用connect也不会有影响。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "connect向globalconnect迁移实现",
      children: "connect向globalConnect迁移实现"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 使用connect存储数据\nimport { PersistenceV2, Type } from '@kit.ArkUI';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst DOMAIN = 0x0000;\n\n// 接受序列化失败的回调\nPersistenceV2.notifyOnError((key: string, reason: string, msg: string) => {\n  hilog.error(DOMAIN, 'testTag', '%{public}s', `error key: ${key}, reason: ${reason}, message: ${msg}`);\n});\n\n@ObservedV2\nclass SampleChild {\n  @Trace public childId: number = 0;\n  public groupId: number = 1;\n}\n\n@ObservedV2\nexport class Sample {\n  // 对于复杂对象需要@Type修饰，确保序列化成功\n  @Type(SampleChild)\n  @Trace public father: SampleChild = new SampleChild();\n}\n\n@Entry\n@ComponentV2\nstruct Page1 {\n  @Local refresh: number = 0;\n  // 使用key:connect3存储\n  @Local p: Sample = PersistenceV2.connect(Sample, 'connect3', () => new Sample())!;\n\n  build() {\n    Column({ space: 5 }) {\n      // 显示数据\n      Text('Key connect3: ' + this.p.father.childId.toString())\n        .onClick(() => {\n          this.p.father.childId += 1;\n        })\n        .fontSize(25)\n        .fontColor(Color.Red)\n\n      // save接口\n      // 未被@Trace装饰的变量需要借助状态变量refresh才能刷新\n      Text('save key connect3: ' + this.p.father.groupId.toString() + ' refresh:' + this.refresh)\n        .onClick(() => {\n          // 未被@Trace保存的对象无法自动存储，需要调用save存储\n          this.p.father.groupId += 1;\n          PersistenceV2.save('connect3');\n          this.refresh += 1;\n        })\n        .fontSize(25)\n    }\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 迁移到globalConnect\nimport { PersistenceV2, Type } from '@kit.ArkUI';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst DOMAIN = 0x0000;\n\n// 接受序列化失败的回调\nPersistenceV2.notifyOnError((key: string, reason: string, msg: string) => {\n  hilog.error(DOMAIN, 'testTag', '%{public}s', `error key: ${key}, reason: ${reason}, message: ${msg}`);\n});\n\n@ObservedV2\nclass SampleChild {\n  @Trace public childId: number = 0;\n  public groupId: number = 1;\n}\n\n@ObservedV2\nexport class Sample {\n  // 对于复杂对象需要@Type修饰，确保序列化成功\n  @Type(SampleChild)\n  @Trace public father: SampleChild = new SampleChild();\n}\n\n// 用于判断是否完成数据迁移的辅助数据\n@ObservedV2\nclass StorageState {\n  @Trace public isCompleteMoving: boolean = false;\n}\n\nfunction move() {\n  let movingState = PersistenceV2.globalConnect({ type: StorageState, defaultCreator: () => new StorageState() })!;\n  if (!movingState.isCompleteMoving) {\n    let p: Sample = PersistenceV2.connect(Sample, 'connect3', () => new Sample())!;\n    PersistenceV2.remove('connect3');\n    let p1 = PersistenceV2.globalConnect({ type: Sample, key: 'connect4', defaultCreator: () => p })!; // 使用默认构造函数也可以\n    // 赋值数据，@Trace修饰的会自动保存\n    p1.father = p.father;\n    // 将迁移标志设置为true\n    movingState.isCompleteMoving = true;\n  }\n}\n\nmove();\n\n@Entry\n@ComponentV2\nstruct Page1 {\n  @Local refresh: number = 0;\n  // 使用key:connect4存入数据\n  @Local p: Sample =\n    PersistenceV2.globalConnect({ type: Sample, key: 'connect4', defaultCreator: () => new Sample() })!;\n\n  build() {\n    Column({ space: 5 }) {\n      // 显示数据\n      Text('Key connect4: ' + this.p.father.childId.toString())\n        .onClick(() => {\n          this.p.father.childId += 1;\n        })\n        .fontSize(25)\n        .fontColor(Color.Red)\n\n      // save接口\n      // 未被@Trace装饰的变量需要借助状态变量refresh才能刷新\n      Text('save key connect4: ' + this.p.father.groupId.toString() + ' refresh:' + this.refresh)\n        .onClick(() => {\n          // 未被@Trace保存的对象无法自动存储，需要调用save存储\n          this.p.father.groupId += 1;\n          PersistenceV2.save('connect4');\n          this.refresh += 1;\n        })\n        .fontSize(25)\n    }\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "connect向globalConnect迁移，需要将key绑定的value赋值给globalConnect进行存储，之后当自定义组件使用globalConnect连接时，globalConnect绑定的数据即为之前使用connect保存的数据，开发者可以自定义move函数，并将其放在合适位置迁移即可。"
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
264384(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
852335(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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