"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["954858"], {
726079(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_state_management_arkts_state_management_uiutils_arkts_new_addmonitor_clearmonitor_arkts_new_addmonitor_clearmonitor_md_c61_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-state-management-arkts-state-management-uiutils-arkts-new-addmonitor-clearmonitor-arkts-new-addmonitor-clearmonitor-md-c61.json
var site_docs_arkui_arkts_ui_development_arkts_state_management_arkts_state_management_uiutils_arkts_new_addmonitor_clearmonitor_arkts_new_addmonitor_clearmonitor_md_c61_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-state-management/arkts-state-management-uiutils/arkts-new-addmonitor-clearmonitor/arkts-new-addmonitor-clearmonitor","title":"addMonitor/clearMonitor接口：动态添加/取消监听","description":"为了动态添加或删除状态管理V2的状态变量的监听函数，开发者可以使用addMonitor或clearMonitor。","source":"@site/docs/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-uiutils/arkts-new-addmonitor-clearmonitor/arkts-new-addmonitor-clearmonitor.md","sourceDirName":"arkui/arkts-ui-development/arkts-state-management/arkts-state-management-uiutils/arkts-new-addmonitor-clearmonitor","slug":"/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-uiutils/arkts-new-addmonitor-clearmonitor/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-uiutils/arkts-new-addmonitor-clearmonitor/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"addMonitor/clearMonitor接口：动态添加/取消监听","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-new-addmonitor-clearmonitor","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"makeObserved接口：将非观察数据变为可观察数据","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-uiutils/arkts-new-makeobserved/"},"next":{"title":"applySync/flushUpdates/flushUIUpdates接口：同步刷新","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-uiutils/arkts-new-applysync-flushupdates-flushuiupdates/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-uiutils/arkts-new-addmonitor-clearmonitor/arkts-new-addmonitor-clearmonitor.md


const frontMatter = {
	title: 'addMonitor/clearMonitor接口：动态添加/取消监听',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-new-addmonitor-clearmonitor',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'addMonitor/clearMonitor接口：动态添加/取消监听';

const assets = {

};



const toc = [{
  "value": "概述",
  "id": "概述",
  "level": 2
}, {
  "value": "使用规则",
  "id": "使用规则",
  "level": 2
}, {
  "value": "限制条件",
  "id": "限制条件",
  "level": 2
}, {
  "value": "addMonitor监听变化的规则",
  "id": "addmonitor监听变化的规则",
  "level": 2
}, {
  "value": "使用场景",
  "id": "使用场景",
  "level": 2
}, {
  "value": "监听@ObservedV2类中@Trace修饰属性和@ComponentV2组件中状态变量的变化",
  "id": "监听observedv2类中trace修饰属性和componentv2组件中状态变量的变化",
  "level": 3
}, {
  "value": "监听数组类型状态变量的下标和length的变化",
  "id": "监听数组类型状态变量的下标和length的变化",
  "level": 3
}, {
  "value": "独立监听Path",
  "id": "独立监听path",
  "level": 3
}, {
  "value": "监听变量从可访问到不访问和从不可访问到可访问",
  "id": "监听变量从可访问到不访问和从不可访问到可访问",
  "level": 3
}, {
  "value": "配置同步监听函数",
  "id": "配置同步监听函数",
  "level": 3
}, {
  "value": "监听构造函数中同步修改的状态变量的变化",
  "id": "监听构造函数中同步修改的状态变量的变化",
  "level": 3
}, {
  "value": "动态取消@ObservedV2/@ComponentV2实例的监听",
  "id": "动态取消observedv2componentv2实例的监听",
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
        id: "addmonitorclearmonitor接口动态添加取消监听",
        children: "addMonitor/clearMonitor接口：动态添加/取消监听"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为了动态添加或删除状态管理V2的状态变量的监听函数，开发者可以使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-statemanagement/js-apis-statemanagement#addmonitor20",
        children: "addMonitor"
      }), "或", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-statemanagement/js-apis-statemanagement#clearmonitor20",
        children: "clearMonitor"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在阅读本文档前，建议提前阅读：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-data-object-state/arkts-new-observedv2-and-trace",
        children: "@ObservedV2/@Trace"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-data-object-state/arkts-new-monitor",
        children: "@Monitor"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(825339)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 20开始，开发者可以使用UIUtils中的addMonitor/clearMonitor接口动态给状态管理V2的状态变量添加或删除监听函数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["装饰器", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-data-object-state/arkts-new-monitor",
        children: "@Monitor"
      }), "如果声明在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-data-object-state/arkts-new-observedv2-and-trace",
        children: "@ObservedV2"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-create-custom-components#componentv2",
        children: "@ComponentV2"
      }), "中，会使得开发者构造出的所有的@ObservedV2和@ComponentV2的实例，都默认有同样的@Monitor的监听回调，且无法取消或删除对应的监听回调。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果开发者希望动态给@ObservedV2和@ComponentV2实例添加或者删除监听函数，则可以使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-statemanagement/js-apis-statemanagement#addmonitor20",
        children: "addMonitor"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-statemanagement/js-apis-statemanagement#clearmonitor20",
        children: "clearMonitor"
      }), "接口。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用addMonitor/clearMonitor接口需要导入UIUtils工具。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { UIUtils } from '@kit.ArkUI';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "仅支持监听状态管理V2的状态变量的变化。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "clearMonitor仅可以删除addMonitor添加的监听函数，无法删除@Monitor的监听函数。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用规则",
      children: "使用规则"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "addMonitor/clearMonitor可以传入数组一次性给多个状态变量添加或删除回调函数。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { UIUtils } from '@kit.ArkUI';\n\n@ObservedV2\nclass User {\n  @Trace age: number = 0;\n  @Trace name: string = 'Jack';\n\n  onChange1(mon: IMonitor) {\n    mon.dirty.forEach((path: string) => {\n      console.info(`onChange1: User property ${path} change from ${mon.value(path)?.before} to ${mon.value(path)?.now}`);\n    });\n  }\n\n  constructor() {\n    UIUtils.addMonitor(this, ['age', 'name'], this.onChange1);\n  }\n}\n\n@Entry\n@ComponentV2\nstruct Page {\n  user: User = new User();\n\n  build() {\n    Column() {\n      Text(`User name ${this.user.name}`)\n        .fontSize(20)\n        .onClick(() => {\n          // 改变name，回调onChange1监听函数\n          this.user.name += '!';\n        })\n      Text(`User age ${this.user.age}`)\n        .fontSize(20)\n        .onClick(() => {\n          // age自增，回调onChange1监听函数\n          this.user.age++;\n        })\n      Button('clear name and age monitor fun')\n        .onClick(() => {\n          // 删除age和name的onChange1监听函数\n          // 再次点击Text组件改变name和age，无监听函数回调\n          UIUtils.clearMonitor(this.user, ['age', 'name'], this.user.onChange1);\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "addMonitor可以给path对应的状态变量添加多个监听函数，但是需要注意，如果开发者添加同名的监听函数，则会添加失败，打印错误日志。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { UIUtils } from '@kit.ArkUI';\n\n@ObservedV2\nclass User {\n  @Trace age: number = 0;\n\n  onChange1(mon: IMonitor) {\n    mon.dirty.forEach((path: string) => {\n      console.info(`onChange1: User property ${path} change from ${mon.value(path)?.before} to ${mon.value(path)?.now}`);\n    });\n  }\n\n  onChange2(mon: IMonitor) {\n    mon.dirty.forEach((path: string) => {\n      console.info(`onChange2: User property ${path} change from ${mon.value(path)?.before} to ${mon.value(path)?.now}`);\n    });\n  }\n\n  constructor() {\n    // 正确用法，给age注册监听函数onChange1\n    UIUtils.addMonitor(this, 'age', this.onChange1);\n    // 正确用法，给age注册监听函数onChange2\n    UIUtils.addMonitor(this, 'age', this.onChange2);\n  }\n}\n\n@Entry\n@ComponentV2\nstruct Page {\n  user: User = new User();\n\n  onChange1(mon: IMonitor) {\n    mon.dirty.forEach((path: string) => {\n      console.info(`onChange1 in View: User property ${path} change from ${mon.value(path)?.before} to ${mon.value(path)?.now}`);\n    });\n  }\n\n  aboutToAppear(): void {\n    // 错误用法，已经给age注册过方法名为onChange1的函数，无法重复注册相同函数名的监听函数\n    // 打印错误日志提示添加失败：FIX THIS APPLICATION ERROR: AddMonitor 'onChange1' owned by 'User' path: 'age' - failed when adding duplicate path\n    UIUtils.addMonitor(this.user, 'age', this.onChange1);\n  }\n\n  build() {\n    Column() {\n      Text(`User age ${this.user.age}`)\n        .fontSize(20)\n        .onClick(() => {\n          // age自增，回调User中的onChange1和onChange2方法\n          this.user.age++;\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["addMonitor设置", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-arkts/ui/js-apis-statemanagement/js-apis-statemanagement#monitoroptions20",
          children: "isSynchronous"
        }), "仅第一次有效，即其不能被更改，如果开发者更改isSynchronous，则会打印错误日志。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { UIUtils } from '@kit.ArkUI';\n\n@ObservedV2\nclass User {\n  @Trace age: number = 0;\n\n  onChange1(mon: IMonitor) {\n    mon.dirty.forEach((path: string) => {\n      console.info(`onChange1: User property ${path} change from ${mon.value(path)?.before} to ${mon.value(path)?.now}`);\n    });\n  }\n\n  constructor() {\n    // 正确用法，给a注册监听函数onChange1，没有设置options默认为异步监听回调\n    UIUtils.addMonitor(this, 'age', this.onChange1);\n    // 错误用法，不能改变this.onChange1的监听回调的方式\n    // 打印错误日志提示： FIX THIS APPLICATION ERROR: addMonitor failed, current function onChange1 has already register as async, cannot change to sync anymore\n    UIUtils.addMonitor(this, 'age', this.onChange1, { isSynchronous: true });\n  }\n}\n\n@Entry\n@ComponentV2\nstruct Page {\n  user: User = new User();\n\n  build() {\n    Column() {\n      Text(`User age ${this.user.age}`)\n        .fontSize(20)\n        .onClick(() => {\n          // age自增，回调onChange1，回调方式为异步回调\n          // 监听回调的日志：onChange1: User property age change from 0 to 2\n          this.user.age++;\n          this.user.age++;\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "clearMonitor可以删除path对应的状态变量的监听函数，开发者可以通过传入监听回调函数来指定删除具体的监听函数，也可以不指定具体的监听函数，删除当前path对应状态变量的所有监听回调函数。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "需要注意：当调用clearMonitor时，如果发现当前回调函数没有在path对应的状态变量上注册过，或者当前状态变量没有任何监听函数，都会打印告警日志提示开发者删除失败。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "监听函数被删除后，状态变量的改变不会再回调对应的监听函数。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { UIUtils } from '@kit.ArkUI';\n\n@ObservedV2\nclass User {\n  @Trace age: number = 0;\n  @Trace name: string = 'Jack';\n\n  onChange1(mon: IMonitor) {\n    mon.dirty.forEach((path: string) => {\n      console.info(`onChange1: User property ${path} change from ${mon.value(path)?.before} to ${mon.value(path)?.now}`);\n    });\n  }\n\n  onChange2(mon: IMonitor) {\n    mon.dirty.forEach((path: string) => {\n      console.info(`onChange2: User property ${path} change from ${mon.value(path)?.before} to ${mon.value(path)?.now}`);\n    });\n  }\n\n  onChange3(mon: IMonitor) {\n    mon.dirty.forEach((path: string) => {\n      console.info(`onChange3: User property ${path} change from ${mon.value(path)?.before} to ${mon.value(path)?.now}`);\n    });\n  }\n\n  constructor() {\n    UIUtils.addMonitor(this, 'age', this.onChange1);\n    UIUtils.addMonitor(this, 'age', this.onChange2);\n    UIUtils.addMonitor(this, 'age', this.onChange3);\n  }\n}\n\n@Entry\n@ComponentV2\nstruct Page {\n  user: User = new User();\n\n  build() {\n    Column() {\n      Text(`User age ${this.user.age}`)\n        .fontSize(20)\n        .onClick(() => {\n          // step1：点击age，回调onChange1，onChange2，onChange3\n          this.user.age++;\n        })\n      Button('clear age onChange1').onClick(() => {\n        // step2：第一次点击该Button。删除onChange1，删除成功。此时点击User age，仅会回调onChange2，onChange3\n        // step3：再次点击该Button。再次删除onChange1，onChange1已经被删除，此次删除失败\n        // 打印错误日志：FIX THIS APPLICATION ERROR: cannot clear path age for onChange1 because it was never registered with addMonitor\n        UIUtils.clearMonitor(this.user, 'age', this.user.onChange1);\n      })\n      Button('clear age monitors').onClick(() => {\n        // step4：删除age所有添加的监听函数。再次点击User age，无监听函数回调\n        UIUtils.clearMonitor(this.user, 'age');\n      })\n      Button('clear name monitors').onClick(() => {\n        // step5：删除name添加的监听方法。因为name无任何监听回调，删除失败\n        // 打印错误日志：FIX THIS APPLICATION ERROR: cannot clear path name for current target User because no Monitor function for this path was registered\n        UIUtils.clearMonitor(this.user, 'name');\n      })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "限制条件",
      children: "限制条件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "addMonitor/clearMonitor仅支持对@ComponentV2和@ObservedV2装饰（至少有一个@Trace装饰的变量）的实例添加/取消回调，否则会有运行时报错，错误码为130000。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "下面为addMonitor的例子，clearMonitor同理。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { UIUtils } from '@kit.ArkUI';\n\n@ObservedV2\nclass A {\n  @Trace a: number = 0;\n\n  onChange(mon: IMonitor) {\n    mon.dirty.forEach((path: string) => {\n      console.info(`A property ${path} change from ${mon.value(path)?.before} to ${mon.value(path)?.now}`);\n    });\n  }\n\n  constructor() {\n    // 正确用法\n    UIUtils.addMonitor(this, 'a', this.onChange);\n  }\n}\n\n@Observed\nclass B {\n  @Track b: number = 0;\n\n  onChange(mon: IMonitor) {\n    mon.dirty.forEach((path: string) => {\n      console.info(`B property ${path} change from ${mon.value(path)?.before} to ${mon.value(path)?.now}`);\n    });\n  }\n\n  constructor() {\n    // 目标对象非法入参，当前this为@Observed装饰的对象\n    // Error code: 130000\n    UIUtils.addMonitor(this, 'b', this.onChange);\n  }\n}\n\nclass C {\n  @Track c: number = 0;\n\n  onChange(mon: IMonitor) {\n    mon.dirty.forEach((path: string) => {\n      console.info(`C property ${path} change from ${mon.value(path)?.before} to ${mon.value(path)?.now}`);\n    });\n  }\n\n  constructor() {\n    // 错误用法：目标对象非法入参，当前this为普通class\n    // Error code: 130000\n    UIUtils.addMonitor(this, 'c', this.onChange);\n    // 错误用法：目标对象非法入参undefined\n    // Error code: 130000\n    UIUtils.addMonitor(undefined, 'c', this.onChange);\n  }\n}\n\nlet a: A = new A();\nlet b: B = new B();\nlet c: C = new C();\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "addMonitor/clearMonitor观察路径必须为string或者为数组，如果开发者传入不支持的类型，则会有运行时报错，错误码为130001。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "下面为addMonitor的例子，clearMonitor同理。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { UIUtils } from '@kit.ArkUI';\n\n@ObservedV2\nclass A {\n  @Trace a: number = 0;\n  @Trace b: number = 0;\n  invalidPath: number | string = 0;\n\n  onChange(mon: IMonitor) {\n    mon.dirty.forEach((path: string) => {\n      console.info(`A property ${path} change from ${mon.value(path)?.before} to   ${mon.value(path)?.now}`);\n    });\n  }\n\n  constructor() {\n    // 正确用法\n    UIUtils.addMonitor(this, 'a', this.onChange);\n    // 正确用法\n    UIUtils.addMonitor(this, ['a', 'b'], this.onChange);\n    // 错误用法，path必须为string或数组，会发生运行时校验，错误码为130001\n    UIUtils.addMonitor(this, this.invalidPath as string, this.onChange);\n    // 错误用法，path必须为string或数组，会发生运行时校验，错误码为130001\n    UIUtils.addMonitor(this, undefined, this.onChange);\n  }\n}\n\nlet a: A = new A();\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "addMonitor的回调函数必须存在，类型必须为方法类型，且不能为匿名函数，如果开发者传入不支持的类型，则会有运行时报错，错误码为130002。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "clearMonitor开发者可以不设置回调函数，如果设置了，其类型必须为function类型，且不能为匿名函数。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { UIUtils } from '@kit.ArkUI';\n\n@ObservedV2\nclass A {\n  @Trace a: number = 0;\n  @Trace b: number = 0;\n  invalidFunc: Function | number = 0;\n\n  onChange1(mon: IMonitor) {\n    mon.dirty.forEach((path: string) => {\n      console.info(`A property ${path} change from ${mon.value(path)?.before} to   ${mon.value(path)?.now}`);\n    });\n  }\n\n  onChange2(mon: IMonitor) {\n    mon.dirty.forEach((path: string) => {\n      console.info(`A property ${path} change from ${mon.value(path)?.before} to   ${mon.value(path)?.now}`);\n    });\n  }\n\n  constructor() {\n    // 正确用法，给变量a添加函数onChange1\n    UIUtils.addMonitor(this, 'a', this.onChange1);\n    // 正确用法，给变量a添加函数onChange2\n    UIUtils.addMonitor(this, 'a', this.onChange2);\n    // 正确用法，给变量b添加函数onChange1\n    UIUtils.addMonitor(this, 'b', this.onChange1);\n    // 错误用法。传入的回调函数为非function类型，错误码130002\n    UIUtils.addMonitor(this, 'a', undefined);\n    // 错误用法，传入的回调函数为匿名函数，错误码130002\n    UIUtils.addMonitor(this, 'a', (mon: IMonitor) => {});\n    // 错误用法，绕过编译器检查，传入的回调函数为非Function类型，错误码130002\n    UIUtils.addMonitor(this, 'a', this.invalidFunc as (mon: IMonitor) => void);\n  }\n}\n\nlet a: A = new A();\n// 正确用法，删除a注册的监听函数onChange1\nUIUtils.clearMonitor(a, 'a', a.onChange1);\n// 正确用法，删除a所有的监听函数\nUIUtils.clearMonitor(a, 'a');\n// 正确用法。等于不传参数，删除b所有的监听函数\nUIUtils.clearMonitor(a, 'a', undefined);\n// 错误用法，传入的回调函数为匿名函数，错误码130002\nUIUtils.clearMonitor(a, 'a', (mon: IMonitor) => {});\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "addmonitor监听变化的规则",
      children: "addMonitor监听变化的规则"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["addMonitor和装饰器", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-data-object-state/arkts-new-monitor",
        children: "@Monitor"
      }), "监听变化的主要规则大体保持一致，对比如下表："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "场景"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "addMonitor"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "@Monitor"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E7%9B%91%E5%90%ACobservedv2%E7%B1%BB%E4%B8%ADtrace%E4%BF%AE%E9%A5%B0%E5%B1%9E%E6%80%A7%E5%92%8Ccomponentv2%E7%BB%84%E4%BB%B6%E4%B8%AD%E7%8A%B6%E6%80%81%E5%8F%98%E9%87%8F%E7%9A%84%E5%8F%98%E5%8C%96",
              children: "监听@ObservedV2类中@Trace修饰属性的变化"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E7%9B%91%E5%90%ACobservedv2%E7%B1%BB%E4%B8%ADtrace%E4%BF%AE%E9%A5%B0%E5%B1%9E%E6%80%A7%E5%92%8Ccomponentv2%E7%BB%84%E4%BB%B6%E4%B8%AD%E7%8A%B6%E6%80%81%E5%8F%98%E9%87%8F%E7%9A%84%E5%8F%98%E5%8C%96",
              children: "监听@ComponentV2组件中状态变量的变化"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E7%9B%91%E5%90%AC%E6%95%B0%E7%BB%84%E7%B1%BB%E5%9E%8B%E7%8A%B6%E6%80%81%E5%8F%98%E9%87%8F%E7%9A%84%E4%B8%8B%E6%A0%87%E5%92%8Clength%E7%9A%84%E5%8F%98%E5%8C%96",
              children: "监听数组类型状态变量的下标和length的变化"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "监听Map、Set、Date类型状态变量变化"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E7%8B%AC%E7%AB%8B%E7%9B%91%E5%90%ACpath",
              children: "独立监听path变化"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E7%9B%91%E5%90%AC%E5%8F%98%E9%87%8F%E4%BB%8E%E5%8F%AF%E8%AE%BF%E9%97%AE%E5%88%B0%E4%B8%8D%E8%AE%BF%E9%97%AE%E5%92%8C%E4%BB%8E%E4%B8%8D%E5%8F%AF%E8%AE%BF%E9%97%AE%E5%88%B0%E5%8F%AF%E8%AE%BF%E9%97%AE",
              children: "监听变量从可访问到不访问和从不可访问到可访问"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E9%85%8D%E7%BD%AE%E5%90%8C%E6%AD%A5%E7%9B%91%E5%90%AC%E5%87%BD%E6%95%B0",
              children: "配置同步监听函数"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E7%9B%91%E5%90%AC%E6%9E%84%E9%80%A0%E5%87%BD%E6%95%B0%E4%B8%AD%E5%90%8C%E6%AD%A5%E4%BF%AE%E6%94%B9%E7%9A%84%E7%8A%B6%E6%80%81%E5%8F%98%E9%87%8F%E7%9A%84%E5%8F%98%E5%8C%96",
              children: "监听构造函数中同步修改的状态变量的变化"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%8A%A8%E6%80%81%E5%8F%96%E6%B6%88observedv2componentv2%E5%AE%9E%E4%BE%8B%E7%9A%84%E7%9B%91%E5%90%AC",
              children: "动态取消@ObservedV2/@ComponentV2实例的监听"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用场景",
      children: "使用场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "监听observedv2类中trace修饰属性和componentv2组件中状态变量的变化",
      children: "监听@ObservedV2类中@Trace修饰属性和@ComponentV2组件中状态变量的变化"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在下面的例子中："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在User的构造函数中添加对age和name的监听函数onChange。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在自定义组件Page的aboutToAppear的生命周期中，添加对user的监听函数onChangeInView。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["点击Text(", (0,jsx_runtime.jsx)(_components.code, {
          children: "User name ${this.user.name}"
        }), ")，改变name的值，触发onChange方法。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["点击Text(", (0,jsx_runtime.jsx)(_components.code, {
          children: "User age ${this.user.age}"
        }), ")，改变age的值，触发onChange方法。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["点击Text(", (0,jsx_runtime.jsx)(_components.code, {
          children: "reset User"
        }), ")，对user整体赋值，触发onChangeInView方法。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { UIUtils } from '@kit.ArkUI';\n\n@ObservedV2\nclass User {\n  @Trace age: number = 0;\n  @Trace name: string = 'Jack';\n\n  onChange(mon: IMonitor) {\n    mon.dirty.forEach((path: string) => {\n      console.info(`onChange: User property ${path} change from ${mon.value(path)?.before} to ${mon.value(path)?.now}`);\n    });\n  }\n\n  constructor() {\n    UIUtils.addMonitor(this, ['age', 'name'], this.onChange);\n  }\n}\n\n@Entry\n@ComponentV2\nstruct Page {\n  @Local user: User = new User();\n\n  onChangeInView(mon: IMonitor) {\n    mon.dirty.forEach((path: string) => {\n      console.info(`onChange in View: View property ${path} change from ${JSON.stringify(mon.value(path)?.before)} to ${JSON.stringify(mon.value(path)?.now)}`);\n    });\n  }\n\n  aboutToAppear(): void {\n    UIUtils.addMonitor(this, 'user', this.onChangeInView);\n  }\n\n  build() {\n    Column() {\n      Text(`User name ${this.user.name}`)\n        .fontSize(20)\n        .onClick(() => {\n          // 改变name，回调onChange监听函数\n          this.user.name += '!';\n        })\n      Text(`User age ${this.user.age}`)\n        .fontSize(20)\n        .onClick(() => {\n          // age自增，回调onChange监听函数\n          this.user.age++;\n        })\n      Text(`reset User`)\n        .fontSize(20)\n        .onClick(() => {\n          // user整体赋值，回调onChangeInView监听函数\n          this.user = new User();\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "监听数组类型状态变量的下标和length的变化",
      children: "监听数组类型状态变量的下标和length的变化"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下面的例子展示了对Array数组下标和length的监听。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { UIUtils } from '@kit.ArkUI';\n\n@Entry\n@ComponentV2\nstruct Page {\n  @Local arr: string[] = ['a', 'b', 'c']\n\n  onChange(mon: IMonitor) {\n    mon.dirty.forEach((path: string) => {\n      console.info(`onChange: View property ${path} change from ${JSON.stringify(mon.value(path)?.before)} to ${JSON.stringify(mon.value(path)?.now)}`);\n    });\n  }\n\n  aboutToAppear(): void {\n    // 添加对数组index为0,1,2和数组length的监听回调onChange\n    UIUtils.addMonitor(this, ['arr.0', 'arr.1', 'arr.2', 'arr.length'], this.onChange);\n  }\n\n  build() {\n    Column() {\n      Text(`len ${this.arr.length}`).fontSize(20)\n      Text(`${this.arr[0]}`).fontSize(20).onClick(() => {\n        // 改变数组index为0的数组项\n        // onChange回调：onChange: View property arr.0 change from \"a\" to \"az\"\n        this.arr[0] += 'z';\n      })\n      Text(`${this.arr[1]}`).fontSize(20).onClick(() => {\n        // 改变数组index为1的数组项\n        // onChange回调：onChange: View property arr.1 change from \"b\" to \"bz\"\n        this.arr[1] += 'z';\n      })\n      Text(`${this.arr[2]}`).fontSize(20).onClick(() => {\n        // 改变数组index为2的数组项\n        // onChange回调：onChange: View property arr.2 change from \"c\" to \"cz\"\n        this.arr[2] += 'z';\n      })\n      Text(`push`).fontSize(20).onClick(() => {\n        // 在数组末尾push新数组项'd'，其index为4，index为4没有被监听\n        // 数组长度改变，length被监听\n        // onChange回调：onChange: View property arr.length change from 3 to 4\n        this.arr.push('d');\n      })\n      Text(`shift`).fontSize(20).onClick(() => {\n        // 删除数组第一个元素\n        // 0: az -> bz\n        // 1: bz -> cz\n        // 2: cz -> d\n        // length: 4 -> 3\n        // onChange回调：\n        // onChange: View property arr.0 change from \"az\" to \"bz\"\n        // onChange: View property arr.1 change from \"bz\" to \"cz\"\n        // onChange: View property arr.2 change from \"cz\" to \"d\"\n        // onChange: View property arr.length change from 4 to 3\n        this.arr.shift();\n      })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "独立监听path",
      children: "独立监听Path"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["@Monitor没有对path独立监听，所以需要依赖开发者正确传入@Monitor入参，", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-data-object-state/arkts-new-monitor#%E6%AD%A3%E7%A1%AE%E8%AE%BE%E7%BD%AEmonitor%E5%85%A5%E5%8F%82",
        children: "传入非状态变量时会造成被连带监听的情况"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对于addMonitor，对不同path采取了独立监听的机制，如下面的例子，点击Button('change age&name')，会输出以下日志："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "property path:age change from 24 to 25\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { UIUtils } from '@kit.ArkUI';\n\n@ObservedV2\nclass Info {\n  name: string = 'John';\n  @Trace age: number = 24;\n\n  onPropertyChange(monitor: IMonitor) {\n    monitor.dirty.forEach((path: string) => {\n      console.info(`property path:${path} change from ${monitor.value(path)?.before} to ${monitor.value(path)?.now}`);\n    });\n  }\n\n  constructor() {\n    UIUtils.addMonitor(this, ['age', 'name'], this.onPropertyChange);\n  }\n}\n\n@Entry\n@ComponentV2\nstruct Index {\n  info: Info = new Info();\n  build() {\n    Column() {\n      Button('change age&name')\n        .onClick(() => {\n          this.info.age = 25; // 同时改变状态变量age和非状态变量name\n          this.info.name = 'Johny';\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "监听变量从可访问到不访问和从不可访问到可访问",
      children: "监听变量从可访问到不访问和从不可访问到可访问"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-data-object-state/arkts-new-monitor#%E6%97%A0%E6%B3%95%E7%9B%91%E5%90%AC%E5%8F%98%E9%87%8F%E4%BB%8E%E5%8F%AF%E8%AE%BF%E9%97%AE%E5%8F%98%E4%B8%BA%E4%B8%8D%E5%8F%AF%E8%AE%BF%E9%97%AE%E5%92%8C%E4%BB%8E%E4%B8%8D%E5%8F%AF%E8%AE%BF%E9%97%AE%E5%8F%98%E4%B8%BA%E5%8F%AF%E8%AE%BF%E9%97%AE",
        children: "@Monitor不会记录状态变量不可访问时的状态"
      }), "，所以其无法监听变量从可访问到不访问和从不可访问到可访问。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "addMonitor会记录变量不可访问的状态，所以可以监听变量从可访问到不访问和从不可访问到可访问。例子如下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { UIUtils } from '@kit.ArkUI';\n\n@ObservedV2\nclass User {\n  @Trace age: number = 10;\n}\n\n@Entry\n@ComponentV2\nstruct Page {\n  @Local user: User | undefined | null = new User();\n\n  onChange(mon: IMonitor) {\n    mon.dirty.forEach((path: string) => {\n      console.info(`onChange: User property ${path} change from ${mon.value(path)?.before} to ${mon.value(path)?.now}`);\n    });\n  }\n\n  aboutToAppear() {\n    UIUtils.addMonitor(this, ['user.age'], this.onChange);\n  }\n\n  build() {\n    Column() {\n      Text(`User age ${this.user?.age}`).fontSize(20)\n      Button('set user to undefined').onClick(() => {\n          // age可访问->不可访问\n          // 触发onChange监听回调：onChange: User property user.age change from 10 to undefined\n          this.user = undefined;\n        })\n      Button('set user to User').onClick(() => {\n        // age不可访问->可访问\n        // 触发onChange监听回调：onChange: User property user.age change from undefined to 10\n        this.user = new User();\n      })\n      Button('set user to null').onClick(() => {\n        // age可访问->不可访问\n        // 触发onChange监听回调：onChange: User property user.age change from 10 to undefined\n        this.user = null;\n      })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "配置同步监听函数",
      children: "配置同步监听函数"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["和@Monitor仅支持异步监听不同，addMonitor可支持配置成同步监听函数，在下面的例子中，点击Text(", (0,jsx_runtime.jsx)(_components.code, {
        children: "User age ${this.user.age}"
      }), ")，触发两次age的自增，回调两次onChange函数，日志打印如下："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "onChange: User property user.age change from 10 to 11\nonChange: User property user.age change from 11 to 12\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { UIUtils } from '@kit.ArkUI';\n\n@ObservedV2\nclass User {\n  @Trace age: number = 10;\n}\n\n@Entry\n@ComponentV2\nstruct Page {\n  @Local user: User = new User();\n\n  onChange(mon: IMonitor) {\n    mon.dirty.forEach((path: string) => {\n      console.info(`onChange: User property ${path} change from ${mon.value(path)?.before} to ${mon.value(path)?.now}`);\n    });\n  }\n\n  aboutToAppear(): void {\n    UIUtils.addMonitor(this, 'user.age', this.onChange, { isSynchronous: true })\n  }\n\n  build() {\n    Column() {\n      Text(`User age ${this.user.age}`).fontSize(20).onClick(() => {\n        this.user.age++;\n        this.user.age++;\n      })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果将上面的例子改成@Monitor，仅会打印一次回调，日志如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "onChange: User property user.age change from 10 to 12\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@ObservedV2\nclass User {\n  @Trace age: number = 10;\n}\n\n@Entry\n@ComponentV2\nstruct Page {\n  @Local user: User = new User();\n\n  @Monitor('user.age')\n  onChange(mon: IMonitor) {\n    mon.dirty.forEach((path: string) => {\n      console.info(`onChange: User property ${path} change from ${mon.value(path)?.before} to ${mon.value(path)?.now}`);\n    });\n  }\n\n  build() {\n    Column() {\n      Text(`User age ${this.user.age}`).fontSize(20).onClick(() => {\n        this.user.age++;\n        this.user.age++;\n      })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "监听构造函数中同步修改的状态变量的变化",
      children: "监听构造函数中同步修改的状态变量的变化"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-data-object-state/arkts-new-monitor#%E7%B1%BB%E4%B8%ADmonitor%E5%AF%B9%E5%8F%98%E9%87%8F%E7%9B%91%E5%90%AC%E7%9A%84%E7%94%9F%E6%95%88%E5%8F%8A%E5%A4%B1%E6%95%88%E6%97%B6%E9%97%B4",
        children: "@Monitor异步构造"
      }), "不同，addMonitor是同步构造的，所以在开发者调用完UIUtils.addMonitor(this, 'message', this.onMessageChange);后就完成了对message添加监听函数this.onMessageChange。在下面的例子中："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "拉起页面，构造Info的实例，回调onMessageChange监听函数。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "点击Button('change message')，回调onMessageChange监听函数。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "日志输出如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "message change from not initialized to initialized\nmessage change from initialized to Index aboutToAppear\nmessage change from Index aboutToAppear to Index click to change message\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { UIUtils } from '@kit.ArkUI';\n\n@ObservedV2\nclass Info {\n  @Trace message: string = 'not initialized';\n\n  constructor() {\n    UIUtils.addMonitor(this, 'message', this.onMessageChange);\n    this.message = 'initialized';\n  }\n  onMessageChange(monitor: IMonitor) {\n    console.info(`message change from ${monitor.value()?.before} to ${monitor.value()?.now}`);\n  }\n}\n\n@Entry\n@ComponentV2\nstruct Page {\n  info: Info = new Info();\n\n  aboutToAppear(): void {\n    this.info.message = 'Index aboutToAppear';\n  }\n\n  build() {\n    Column() {\n      Button('change message')\n        .onClick(() => {\n          this.info.message = 'Index click to change message';\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "动态取消observedv2componentv2实例的监听",
      children: "动态取消@ObservedV2/@ComponentV2实例的监听"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "和@Monitor不同，addMonitor/clearMonitor可以对不同的@ObservedV2/@ComponentV2实例动态添加监听函数。例子如下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { UIUtils } from '@kit.ArkUI';\n\n@ObservedV2\nclass User {\n  @Trace age: number = 10;\n\n  onChange(mon: IMonitor) {\n    mon.dirty.forEach((path: string) => {\n      console.info(`onChange: User property ${path} change from ${mon.value(path)?.before} to ${mon.value(path)?.now}`);\n    });\n  }\n\n  constructor(needMonitor: boolean) {\n    if (needMonitor) {\n      UIUtils.addMonitor(this, 'age', this.onChange);\n    }\n  }\n}\n\n@Entry\n@ComponentV2\nstruct Page {\n  @Local user1: User = new User(true);\n  @Local user2: User = new User(false);\n  @Local count: number = 10;\n\n  build() {\n    Column() {\n      Text(`user1 age ${this.user1.age}`).fontSize(20).onClick(() => {\n        // 有Monitor回调\n        this.user1.age++;\n      })\n      Text(`user2 age ${this.user2.age}`).fontSize(20).onClick(() => {\n        // 无Monitor回调\n        this.user2.age++;\n      })\n      Button(`remove user1 monitor`).onClick(() => {\n        UIUtils.clearMonitor(this.user1, 'age', this.user1.onChange);\n      })\n\n      Button(`change count`).onClick(() => {\n        this.count++;\n      })\n\n      Child({ needMonitor: true, count: this.count })\n      Child({ needMonitor: false, count: this.count })\n    }\n  }\n}\n\n@ComponentV2\nstruct Child {\n  @Param needMonitor: boolean = false;\n  @Param count: number = 0;\n\n  onChange(mon: IMonitor) {\n    mon.dirty.forEach((path: string) => {\n      console.info(`Child needMonitor ${this.needMonitor} onChange: property ${path} change from ${mon.value(path)?.before} to ${mon.value(path)?.now}`);\n    });\n  }\n\n  aboutToAppear(): void {\n    if (this.needMonitor) {\n      UIUtils.addMonitor(this, 'count', this.onChange);\n    }\n  }\n\n  build() {\n    Column() {\n      Text(`${this.count}`).fontSize(20)\n    }\n  }\n}\n"
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
825339(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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