"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["672920"], {
395811(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_state_management_arkts_state_management_v_2_arkts_v_2_manage_data_object_state_arkts_new_monitor_arkts_new_monitor_md_c9e_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-state-management-arkts-state-management-v-2-arkts-v-2-manage-data-object-state-arkts-new-monitor-arkts-new-monitor-md-c9e.json
var site_docs_arkui_arkts_ui_development_arkts_state_management_arkts_state_management_v_2_arkts_v_2_manage_data_object_state_arkts_new_monitor_arkts_new_monitor_md_c9e_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-data-object-state/arkts-new-monitor/arkts-new-monitor","title":"@Monitor装饰器：状态变量修改异步监听","description":"为了增强状态管理框架对状态变量变化的监听能力，开发者可以使用@Monitor装饰器对状态变量进行监听。","source":"@site/docs/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-data-object-state/arkts-new-monitor/arkts-new-monitor.md","sourceDirName":"arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-data-object-state/arkts-new-monitor","slug":"/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-data-object-state/arkts-new-monitor/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-data-object-state/arkts-new-monitor/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"@Monitor装饰器：状态变量修改异步监听","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-new-monitor","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"@ObservedV2装饰器和@Trace装饰器：类属性变化观测","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-data-object-state/arkts-new-observedv2-and-trace/"},"next":{"title":"@Computed装饰器：计算属性","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-data-object-state/arkts-new-computed/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-data-object-state/arkts-new-monitor/arkts-new-monitor.md


const frontMatter = {
	title: '@Monitor装饰器：状态变量修改异步监听',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-new-monitor',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '@Monitor装饰器：状态变量修改异步监听';

const assets = {

};



const toc = [{
  "value": "概述",
  "id": "概述",
  "level": 2
}, {
  "value": "状态管理V1版本@Watch装饰器的局限性",
  "id": "状态管理v1版本watch装饰器的局限性",
  "level": 2
}, {
  "value": "装饰器说明",
  "id": "装饰器说明",
  "level": 2
}, {
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "监听变化",
  "id": "监听变化",
  "level": 2
}, {
  "value": "在@ComponentV2装饰的自定义组件中使用@Monitor",
  "id": "在componentv2装饰的自定义组件中使用monitor",
  "level": 3
}, {
  "value": "在@ObservedV2装饰的类中使用@Monitor",
  "id": "在observedv2装饰的类中使用monitor",
  "level": 3
}, {
  "value": "通用监听能力",
  "id": "通用监听能力",
  "level": 3
}, {
  "value": "限制条件",
  "id": "限制条件",
  "level": 2
}, {
  "value": "@Monitor与@Watch对比",
  "id": "monitor与watch对比",
  "level": 2
}, {
  "value": "使用场景",
  "id": "使用场景",
  "level": 2
}, {
  "value": "监听深层属性变化",
  "id": "监听深层属性变化",
  "level": 3
}, {
  "value": "常见问题",
  "id": "常见问题",
  "level": 2
}, {
  "value": "自定义组件中@Monitor对变量监听的生效及失效时间",
  "id": "自定义组件中monitor对变量监听的生效及失效时间",
  "level": 3
}, {
  "value": "类中@Monitor对变量监听的生效及失效时间",
  "id": "类中monitor对变量监听的生效及失效时间",
  "level": 3
}, {
  "value": "正确设置@Monitor入参",
  "id": "正确设置monitor入参",
  "level": 3
}, {
  "value": "无法监听变量从可访问变为不可访问和从不可访问变为可访问",
  "id": "无法监听变量从可访问变为不可访问和从不可访问变为可访问",
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
        id: "monitor装饰器状态变量修改异步监听",
        children: "@Monitor装饰器：状态变量修改异步监听"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为了增强状态管理框架对状态变量变化的监听能力，开发者可以使用@Monitor装饰器对状态变量进行监听。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["@Monitor提供了对V2状态变量的监听。在阅读本文档前，建议提前阅读：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-create-custom-components#componentv2",
        children: "@ComponentV2"
      }), "，", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-data-object-state/arkts-new-observedv2-and-trace",
        children: "@ObservedV2和@Trace"
      }), "，", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-component-state/arkts-new-local",
        children: "@Local"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(27441)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "@Monitor装饰器从API version 12开始支持。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 12开始，该装饰器支持在元服务中使用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 23开始，该装饰器支持在ArkTS卡片中使用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "@Monitor装饰器用于监听状态变量修改，使得状态变量具有深度监听的能力："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["@Monitor装饰器支持在@ComponentV2装饰的自定义组件中使用，未被状态变量装饰器", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-component-state/arkts-new-local",
          children: "@Local"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-component-state/arkts-new-param",
          children: "@Param"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-component-state/arkts-new-provider-and-consumer",
          children: "@Provider"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-component-state/arkts-new-provider-and-consumer",
          children: "@Consumer"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-data-object-state/arkts-new-computed",
          children: "@Computed"
        }), "装饰的变量无法被@Monitor监听到变化。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["@Monitor装饰器支持在类中与", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-data-object-state/arkts-new-observedv2-and-trace",
          children: "@ObservedV2、@Trace"
        }), "配合使用，不允许在未被@ObservedV2装饰的类中使用@Monitor装饰器。未被@Trace装饰的属性无法被@Monitor监听到变化。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当观测的属性变化时，@Monitor装饰器定义的回调方法将被调用。判断属性是否变化使用的是严格相等（===），当严格相等判断的结果是false（即不相等）的情况下，就会触发@Monitor的回调。当在一次事件中多次改变同一个属性时，将会使用初始值和最终值进行比较以判断是否变化。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "单个@Monitor装饰器能够同时监听多个属性的变化，当这些属性在一次事件中共同变化时，只会触发一次@Monitor的回调方法。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "@Monitor装饰器具有深度监听的能力，能够监听嵌套类、多维数组、对象数组中指定项的变化。对于嵌套类、对象数组中成员属性变化的监听要求该类被@ObservedV2装饰且该属性被@Trace装饰。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当@Monitor监听整个数组时，更改数组的某一项不会被监听到。无法监听内置类型（Array、Map、Date、Set）的API调用引起的变化。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在继承类场景中，可以在父子组件中对同一个属性分别定义@Monitor进行监听，当属性变化时，父子组件中定义的@Monitor回调均会被调用。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["和", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-watch",
          children: "@Watch装饰器"
        }), "类似，开发者需要自己定义回调函数，区别在于@Watch装饰器将函数名作为参数，而@Monitor直接装饰回调函数。@Monitor与@Watch的对比可以查看", (0,jsx_runtime.jsx)(_components.a, {
          href: "#monitor%E4%B8%8Ewatch%E5%AF%B9%E6%AF%94",
          children: "@Monitor与@Watch的对比"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "状态管理v1版本watch装饰器的局限性",
      children: "状态管理V1版本@Watch装饰器的局限性"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "现有状态管理V1版本无法实现对对象、数组中某一单个属性或数组项变化的监听，且无法获取变化之前的值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\n\n@Observed\nclass Info {\n  public name: string = 'Tom';\n  public age: number = 25;\n}\n\n@Entry\n@Component\nstruct Index {\n  @State @Watch('onInfoChange') info: Info = new Info();\n  @State @Watch('onNumArrChange') numArr: number[] = [1, 2, 3, 4, 5];\n\n  onInfoChange() {\n    hilog.info(0xFF00, 'testTag', '%{public}s', `info after change name: ${this.info.name}, age: ${this.info.age} `);\n  }\n\n  onNumArrChange() {\n    hilog.info(0xFF00, 'testTag', '%{public}s', `numArr after change ${this.numArr}`);\n  }\n\n  build() {\n    Row() {\n      Column() {\n        Button('change info name')\n          .onClick(() => {\n            this.info.name = 'Jack';\n          })\n        Button('change info age')\n          .onClick(() => {\n            this.info.age = 30;\n          })\n        Button('change numArr[2]')\n          .onClick(() => {\n            this.numArr[2] = 5;\n          })\n        Button('change numArr[3]')\n          .onClick(() => {\n            this.numArr[3] = 6;\n          })\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "上述代码中，点击\"change info name\"更改info中的name属性或点击\"change info age\"更改age时，均会触发info注册的@Watch回调。点击\"change numArr[2]\"更改numArr中的第3个元素或点击\"change numArr[3]\"更改第4个元素时，均会触发numArr注册的@Watch回调。在这两个回调中，由于无法获取数据更改前的值，在业务逻辑更加复杂的场景下，无法准确知道是哪一个属性或元素发生了改变从而触发了@Watch事件，这不便于开发者对变量的更改进行准确监听。因此推出@Monitor装饰器实现对对象、数组中某一单个属性或数组项变化的监听，并且能够获取到变化之前的值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "装饰器说明",
      children: "装饰器说明"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "@Monitor属性装饰器"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "装饰器参数"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["字符串类型的对象属性名。可同时监听多个对象属性，每个属性以逗号隔开，例如@Monitor('prop1', 'prop2')。可监听深层的属性变化，如多维数组中的某一个元素，嵌套对象或对象数组中的某一个属性。详见", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E7%9B%91%E5%90%AC%E5%8F%98%E5%8C%96",
              children: "监听变化"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "装饰对象"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["@Monitor装饰成员方法。当监听的属性发生变化时，会触发该回调方法。该回调方法以", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/state-management-and-rendering-control/ts-state-management-watch-monitor/ts-state-management-watch-monitor#imonitor12",
              children: "IMonitor类型"
            }), "的变量作为参数，开发者可以从该参数中获取变化前后的相关信息。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["IMonitor类型和IMonitorValue<T>类型的接口说明参考API文档：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/state-management-and-rendering-control/ts-state-management-watch-monitor/ts-state-management-watch-monitor",
        children: "状态变量变化监听"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "监听变化",
      children: "监听变化"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "在componentv2装饰的自定义组件中使用monitor",
      children: "在@ComponentV2装饰的自定义组件中使用@Monitor"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用@Monitor监听的状态变量发生变化时，会触发@Monitor的回调方法。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "@Monitor监听的变量需要被@Local、@Param、@Provider、@Consumer、@Computed装饰，未被状态变量装饰器装饰的变量在变化时无法被监听。@Monitor可以同时监听多个状态变量，这些变量名之间用\",\"隔开。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { hilog } from '@kit.PerformanceAnalysisKit';\n\n@Entry\n@ComponentV2\nstruct Index {\n  @Local message: string = 'Hello World';\n  @Local name: string = 'Tom';\n  @Local age: number = 24;\n\n  @Monitor('message', 'name')\n  onStrChange(monitor: IMonitor) {\n    monitor.dirty.forEach((path: string) => {\n      hilog.info(0xFF00, 'testTag', '%{public}s',\n        `${path} changed from ${monitor.value(path)?.before} to ${monitor.value(path)?.now}`);\n    });\n  }\n\n  build() {\n    Column() {\n      Button('change string')\n        .onClick(() => {\n          this.message += '!';\n          this.name = 'Jack';\n        })\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "@Monitor监听的状态变量为类对象时，仅能监听对象整体的变化。监听类属性的变化需要类属性被@Trace装饰。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { hilog } from '@kit.PerformanceAnalysisKit';\n\nclass Info {\n  public name: string;\n  public age: number;\n\n  constructor(name: string, age: number) {\n    this.name = name;\n    this.age = age;\n  }\n}\n\n@Entry\n@ComponentV2\nstruct Index {\n  @Local info: Info = new Info('Tom', 25);\n\n  @Monitor('info')\n  infoChange(monitor: IMonitor) {\n    hilog.info(0xFF00, 'testTag', '%{public}s', `info change`);\n  }\n\n  @Monitor('info.name')\n  infoPropertyChange(monitor: IMonitor) {\n    hilog.info(0xFF00, 'testTag', '%{public}s', `info name change`);\n  }\n\n  build() {\n    Column() {\n      Text(`name: ${this.info.name}, age: ${this.info.age}`)\n      Button('change info')\n        .onClick(() => {\n          this.info = new Info('Lucy', 18); // 能够监听到\n        })\n      Button('change info.name')\n        .onClick(() => {\n          this.info.name = 'Jack'; // 监听不到\n        })\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "在observedv2装饰的类中使用monitor",
      children: "在@ObservedV2装饰的类中使用@Monitor"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用@Monitor监听的属性发生变化时，会触发@Monitor的回调方法。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "@Monitor监听的对象属性需要被@Trace装饰，未被@Trace装饰的属性的变化无法被监听。@Monitor可以同时监听多个属性，这些属性之间用\",\"隔开。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { hilog } from '@kit.PerformanceAnalysisKit';\n\n@ObservedV2\nclass Info {\n  @Trace public name: string = 'Tom';\n  @Trace public region: string = 'North';\n  @Trace public job: string = 'Teacher';\n  public age: number = 25;\n\n  // name被@Trace装饰，能够监听变化\n  @Monitor('name')\n  onNameChange(monitor: IMonitor) {\n    hilog.info(0xFF00, 'testTag', '%{public}s',\n      `name change from ${monitor.value()?.before} to ${monitor.value()?.now}`);\n  }\n\n  // age未被@Trace装饰，不能监听变化\n  @Monitor('age')\n  onAgeChange(monitor: IMonitor) {\n    hilog.info(0xFF00, 'testTag', '%{public}s',\n      `age change from ${monitor.value()?.before} to ${monitor.value()?.now}`);\n  }\n\n  // region与job均被@Trace装饰，能够监听变化\n  @Monitor('region', 'job')\n  onChange(monitor: IMonitor) {\n    monitor.dirty.forEach((path: string) => {\n      hilog.info(0xFF00, 'testTag', '%{public}s',\n        `${path} change from ${monitor.value(path)?.before} to ${monitor.value(path)?.now}`);\n    })\n  }\n}\n\n@Entry\n@ComponentV2\nstruct Index {\n  info: Info = new Info();\n\n  build() {\n    Column() {\n      Button('change name')\n        .onClick(() => {\n          this.info.name = 'Jack'; // 能够触发onNameChange方法\n        })\n      Button('change age')\n        .onClick(() => {\n          this.info.age = 26; // 不能够触发onAgeChange方法\n        })\n      Button('change region')\n        .onClick(() => {\n          this.info.region = 'South'; // 能够触发onChange方法\n        })\n      Button('change job')\n        .onClick(() => {\n          this.info.job = 'Driver'; // 能够触发onChange方法\n        })\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "@Monitor可以监听深层属性的变化，该深层属性需要被@Trace装饰。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { hilog } from '@kit.PerformanceAnalysisKit';\n\n@ObservedV2\nclass Inner {\n  @Trace public num: number = 0;\n}\n\n@ObservedV2\nclass Outer {\n  public inner: Inner = new Inner();\n\n  @Monitor('inner.num')\n  onChange(monitor: IMonitor) {\n    hilog.info(0xFF00, 'testTag', '%{public}s',\n      `inner.num change from ${monitor.value()?.before} to ${monitor.value()?.now}`);\n  }\n}\n\n@Entry\n@ComponentV2\nstruct Index {\n  outer: Outer = new Outer();\n\n  build() {\n    Column() {\n      Button('change num')\n        .onClick(() => {\n          this.outer.inner.num = 100; // 能够触发onChange方法\n        })\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在继承类场景下，可以在继承链中对同一个属性进行多次监听。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { hilog } from '@kit.PerformanceAnalysisKit';\n\n@ObservedV2\nclass Base {\n  @Trace public name: string;\n\n  // 基类监听name属性\n  @Monitor('name')\n  onBaseNameChange(monitor: IMonitor) {\n    hilog.info(0xFF00, 'testTag', '%{public}s', `Base Class name change`);\n  }\n\n  constructor(name: string) {\n    this.name = name;\n  }\n}\n\n@ObservedV2\nclass Derived extends Base {\n  // 继承类监听name属性\n  @Monitor('name')\n  onDerivedNameChange(monitor: IMonitor) {\n    hilog.info(0xFF00, 'testTag', '%{public}s', `Derived Class name change`);\n  }\n\n  constructor(name: string) {\n    super(name);\n  }\n}\n\n@Entry\n@ComponentV2\nstruct Index {\n  derived: Derived = new Derived('AAA');\n\n  build() {\n    Column() {\n      Button('change name')\n        .onClick(() => {\n          this.derived.name = 'BBB'; // 能够先后触发onBaseNameChange、onDerivedNameChange方法\n        })\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "通用监听能力",
      children: "通用监听能力"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "@Monitor还有一些通用的监听能力。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "@Monitor支持对数组中的项进行监听，包括多维数组，对象数组。@Monitor无法监听内置类型（Array、Map、Date、Set）的API调用引起的变化。当@Monitor监听数组整体时，只能观测到数组整体的赋值。可以通过监听数组的长度变化来判断数组是否有插入、删除等变化。当前仅支持使用\".\"的方式表达深层属性、数组项的监听。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { hilog } from '@kit.PerformanceAnalysisKit';\n\n@ObservedV2\nclass Info {\n  @Trace public name: string;\n  @Trace public age: number;\n\n  constructor(name: string, age: number) {\n    this.name = name;\n    this.age = age;\n  }\n}\n\n@ObservedV2\nclass ArrMonitor {\n  @Trace public dimensionTwo: number[][] = [[1, 1, 1], [2, 2, 2], [3, 3, 3]];\n  @Trace public dimensionThree: number[][][] = [[[1], [2], [3]], [[4], [5], [6]], [[7], [8], [9]]];\n  @Trace public infoArr: Info[] = [new Info('Jack', 24), new Info('Lucy', 18)];\n\n  // dimensionTwo为二维简单类型数组，且被@Trace装饰，能够观测里面的元素变化\n  @Monitor('dimensionTwo.0.0', 'dimensionTwo.1.1')\n  onDimensionTwoChange(monitor: IMonitor) {\n    monitor.dirty.forEach((path: string) => {\n      hilog.info(0xFF00, 'testTag', '%{public}s',\n        `dimensionTwo path: ${path} change from ${monitor.value(path)?.before} to ${monitor.value(path)?.now}`);\n    })\n  }\n\n  // dimensionThree为三维简单类型数组，且被@Trace装饰，能够观测里面的元素变化\n  @Monitor('dimensionThree.0.0.0', 'dimensionThree.1.1.0')\n  onDimensionThreeChange(monitor: IMonitor) {\n    monitor.dirty.forEach((path: string) => {\n      hilog.info(0xFF00, 'testTag', '%{public}s',\n        `dimensionThree path: ${path} change from ${monitor.value(path)?.before} to ${monitor.value(path)?.now}`);\n    })\n  }\n\n  // Info类中属性name、age均被@Trace装饰，能够监听到变化\n  @Monitor('infoArr.0.name', 'infoArr.1.age')\n  onInfoArrPropertyChange(monitor: IMonitor) {\n    monitor.dirty.forEach((path: string) => {\n      hilog.info(0xFF00, 'testTag', '%{public}s',\n        `infoArr path:${path} change from ${monitor.value(path)?.before} to ${monitor.value(path)?.now}`);\n    })\n  }\n\n  // infoArr被@Trace装饰，能够监听到infoArr整体赋值的变化\n  @Monitor('infoArr')\n  onInfoArrChange(monitor: IMonitor) {\n    hilog.info(0xFF00, 'testTag', '%{public}s', `infoArr whole change`);\n  }\n\n  // 能够监听到infoArr的长度变化\n  @Monitor('infoArr.length')\n  onInfoArrLengthChange(monitor: IMonitor) {\n    hilog.info(0xFF00, 'testTag', '%{public}s', `infoArr length change`);\n  }\n}\n\n@Entry\n@ComponentV2\nstruct Index {\n  arrMonitor: ArrMonitor = new ArrMonitor();\n\n  build() {\n    Column() {\n      Button('Change dimensionTwo')\n        .onClick(() => {\n          // 能够触发onDimensionTwoChange方法\n          this.arrMonitor.dimensionTwo[0][0]++;\n          this.arrMonitor.dimensionTwo[1][1]++;\n        })\n      Button('Change dimensionThree')\n        .onClick(() => {\n          // 能够触发onDimensionThreeChange方法\n          this.arrMonitor.dimensionThree[0][0][0]++;\n          this.arrMonitor.dimensionThree[1][1][0]++;\n        })\n      Button('Change info property')\n        .onClick(() => {\n          // 能够触发onInfoArrPropertyChange方法\n          this.arrMonitor.infoArr[0].name = 'Tom';\n          this.arrMonitor.infoArr[1].age = 19;\n        })\n      Button('Change whole infoArr')\n        .onClick(() => {\n          // 能够触发onInfoArrChange、onInfoArrPropertyChange、onInfoArrLengthChange方法\n          this.arrMonitor.infoArr = [new Info('Cindy', 8)];\n        })\n      Button('Push new info to infoArr')\n        .onClick(() => {\n          // 能够触发onInfoArrPropertyChange、onInfoArrLengthChange方法\n          this.arrMonitor.infoArr.push(new Info('David', 50));\n        })\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "对象整体改变，但监听的属性不变时，不触发@Monitor回调。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "下面的示例按照Step1-Step2-Step3的顺序点击，表现为代码注释中的行为。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如果只点击Step2或Step3，改变name、age的值，此时会触发onNameChange和onAgeChange方法。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { hilog } from '@kit.PerformanceAnalysisKit';\n\n@ObservedV2\nclass Info {\n  @Trace public person: Person;\n\n  @Monitor('person.name')\n  onNameChange(monitor: IMonitor) {\n    hilog.info(0xFF00, 'testTag', '%{public}s',\n      `name change from ${monitor.value()?.before} to ${monitor.value()?.now}`);\n  }\n\n  @Monitor('person.age')\n  onAgeChange(monitor: IMonitor) {\n    hilog.info(0xFF00, 'testTag', '%{public}s',\n      `age change from ${monitor.value()?.before} to ${monitor.value()?.now}`);\n  }\n\n  constructor(name: string, age: number) {\n    this.person = new Person(name, age);\n  }\n}\n\n@ObservedV2\nclass Person {\n  @Trace public name: string;\n  @Trace public age: number;\n\n  constructor(name: string, age: number) {\n    this.name = name;\n    this.age = age;\n  }\n}\n\n@Entry\n@ComponentV2\nstruct Index {\n  info: Info = new Info('Tom', 25);\n\n  build() {\n    Column() {\n      Button('Step1: Only change name')\n        .onClick(() => {\n          this.info.person = new Person('Jack', 25); // 能够触发onNameChange方法，不触发onAgeChange方法\n        })\n      Button('Step2: Only change age')\n        .onClick(() => {\n          this.info.person = new Person('Jack', 18); // 能够触发onAgeChange方法，不触发onNameChange方法\n        })\n      Button('Step3: Change name and age')\n        .onClick(() => {\n          this.info.person = new Person('Lucy', 19); // 能够触发onNameChange、onAgeChange方法\n        })\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在一次事件中多次改变被@Monitor监听的属性，以最后一次修改为准。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { hilog } from '@kit.PerformanceAnalysisKit';\n\n@ObservedV2\nclass Frequency {\n  @Trace public count: number = 0;\n\n  @Monitor('count')\n  onCountChange(monitor: IMonitor) {\n    hilog.info(0xFF00, 'testTag', '%{public}s',\n      `count change from ${monitor.value()?.before} to ${monitor.value()?.now}`);\n  }\n}\n\n@Entry\n@ComponentV2\nstruct Index {\n  frequency: Frequency = new Frequency();\n\n  build() {\n    Column() {\n      Button('change count to 1000')\n        .onClick(() => {\n          for (let i = 1; i <= 1000; i++) {\n            this.frequency.count = i;\n          }\n        })\n      Button('change count to 0 then to 1000')\n        .onClick(() => {\n          for (let i = 999; i >= 0; i--) {\n            this.frequency.count = i;\n          }\n          this.frequency.count = 1000; // 最终不触发onCountChange方法\n        })\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在点击按钮\"change count to 1000\"后，会触发一次onCountChange方法，并输出日志\"count change from 0 to 1000\"。在点击按钮\"change count to 0 then to 1000\"后，由于事件前后属性count的值并没有改变，都为1000，所以不触发onCountChange方法。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "限制条件",
      children: "限制条件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用@Monitor需要注意如下限制条件："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "不建议在一个类中对同一个属性进行多次@Monitor的监听。当一个类中存在对一个属性的多次监听时，只有最后一个定义的监听方法会生效。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { hilog } from '@kit.PerformanceAnalysisKit';\n\n@ObservedV2\nclass Info {\n  @Trace public name: string = 'Tom';\n\n  @Monitor('name')\n  onNameChange(monitor: IMonitor) {\n    hilog.info(0xFF00, 'testTag', '%{public}s', `onNameChange`);\n  }\n\n  @Monitor('name')\n  onNameChangeDuplicate(monitor: IMonitor) {\n    hilog.info(0xFF00, 'testTag', '%{public}s', `onNameChangeDuplicate`);\n  }\n}\n\n@Entry\n@ComponentV2\nstruct Index {\n  info: Info = new Info();\n\n  build() {\n    Column() {\n      Button('change name')\n        .onClick(() => {\n          this.info.name = 'Jack'; // 仅会触发onNameChangeDuplicate方法\n        })\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当@Monitor传入多个路径参数时，以参数的全拼接结果判断是否重复监听。全拼接时会在参数间加空格，以区分不同参数。例如，'ab', 'c'的全拼接结果为'ab c'，'a', 'bc'的全拼接结果为'a bc'，二者全拼接不相等。以下示例中，Monitor 1、Monitor 2与Monitor 3都监听了name属性的变化。由于Monitor 2与Monitor 3的入参全拼接相等（都为'name position'），因此Monitor 2不生效，仅Monitor 3生效。当name属性变化时，将同时触发onNameAgeChange与onNamePositionChangeDuplicate方法。但请注意，Monitor 2与Monitor 3的写法仍然被视作在一个类中对同一个属性进行多次@Monitor的监听，这是不建议的。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { hilog } from '@kit.PerformanceAnalysisKit';\n\n@ObservedV2\nclass Info {\n  @Trace public name: string = 'Tom';\n  @Trace public age: number = 25;\n  @Trace public position: string = 'North';\n\n  @Monitor('name', 'age') // Monitor 1\n  onNameAgeChange(monitor: IMonitor) {\n    monitor.dirty.forEach((path: string) => {\n      hilog.info(0xFF00, 'testTag', '%{public}s',\n        `onNameAgeChange path: ${path} change from ${monitor.value(path)?.before} to ${monitor.value(path)?.now}`);\n    });\n  }\n\n  @Monitor('name', 'position') // Monitor 2\n  onNamePositionChange(monitor: IMonitor) {\n    monitor.dirty.forEach((path: string) => {\n      hilog.info(0xFF00, 'testTag', '%{public}s',\n        `onNamePositionChange path: ${path} change from ${monitor.value(path)?.before} to ${monitor.value(path)?.now}`);\n    });\n  }\n\n  // 重复监听name、position，仅最后定义的生效\n  @Monitor('name', 'position') // Monitor3\n  onNamePositionChangeDuplicate(monitor: IMonitor) {\n    monitor.dirty.forEach((path: string) => {\n      hilog.info(0xFF00, 'testTag', '%{public}s',\n        `onNamePositionChangeDuplicate path: ${path} change from ${monitor.value(path)?.before} to ${monitor.value(path)?.now}`);\n    });\n  }\n}\n\n@Entry\n@ComponentV2\nstruct Index {\n  info: Info = new Info();\n\n  build() {\n    Column() {\n      Button('change name')\n        .onClick(() => {\n          this.info.name = 'Jack'; // 同时触发onNameAgeChange与onNamePositionChangeDuplicate方法\n        })\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "@Monitor的参数需要为监听属性名的字符串，仅可以使用字符串字面量、const常量、enum枚举值作为参数。如果使用变量作为参数，仅会监听@Monitor初始化时，变量值所对应的属性。当更改变量时，@Monitor无法实时改变监听的属性，即@Monitor监听的目标属性从初始化时便已经确定，无法动态更改。不建议开发者使用变量作为@Monitor的参数进行初始化。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst t2: string = 't2'; // const常量\n\nenum ENUM {\n  T3 = 't3' // enum枚举值\n};\nlet t4: string = 't4'; // 变量\n\n@ObservedV2\nclass Info {\n  @Trace public t1: number = 0;\n  @Trace public t2: number = 0;\n  @Trace public t3: number = 0;\n  @Trace public t4: number = 0;\n  @Trace public t5: number = 0;\n\n  // 字符串字面量\n  @Monitor('t1')\n  onT1Change(monitor: IMonitor) {\n    hilog.info(0xFF00, 'testTag', '%{public}s', `t1 change from ${monitor.value()?.before} to ${monitor.value()?.now}`);\n  }\n\n  @Monitor(t2)\n  onT2Change(monitor: IMonitor) {\n    hilog.info(0xFF00, 'testTag', '%{public}s', `t2 change from ${monitor.value()?.before} to ${monitor.value()?.now}`);\n  }\n\n  @Monitor(ENUM.T3)\n  onT3Change(monitor: IMonitor) {\n    hilog.info(0xFF00, 'testTag', '%{public}s', `t3 change from ${monitor.value()?.before} to ${monitor.value()?.now}`);\n  }\n\n  @Monitor(t4)\n  onT4Change(monitor: IMonitor) {\n    hilog.info(0xFF00, 'testTag', '%{public}s', `t4 change from ${monitor.value()?.before} to ${monitor.value()?.now}`);\n  }\n}\n\n@Entry\n@ComponentV2\nstruct Index {\n  info: Info = new Info();\n\n  build() {\n    Column() {\n      Button('Change t1')\n        .onClick(() => {\n          this.info.t1++; // 能够触发onT1Change方法\n        })\n      Button('Change t2')\n        .onClick(() => {\n          this.info.t2++; // 能够触发onT2Change方法\n        })\n      Button('Change t3')\n        .onClick(() => {\n          this.info.t3++; // 能够触发onT3Change方法\n        })\n      Button('Change t4')\n        .onClick(() => {\n          this.info.t4++; // 能够触发onT4Change方法\n        })\n      Button('Change var t4 to t5')\n        .onClick(() => {\n          t4 = 't5'; // 更改变量值为't5'\n        })\n      Button('Change t5')\n        .onClick(() => {\n          this.info.t5++; // onT4Change仍监听t4，不会触发\n        })\n      Button('Change t4 again')\n        .onClick(() => {\n          this.info.t4++; // 能够触发onT4Change方法\n        })\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "建议开发者避免在@Monitor中再次更改被监听的属性，这会导致无限循环。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@ObservedV2\nclass Info {\n  @Trace count: number = 0;\n  @Monitor('count')\n  onCountChange(monitor: IMonitor) {\n    this.count++; // 应避免这种写法，会导致无限循环\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "monitor与watch对比",
      children: "@Monitor与@Watch对比"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "@Monitor与@Watch的用法、功能对比如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "用法"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "@Watch"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "@Monitor"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "参数"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调方法名。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "监听状态变量名、属性名。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "监听目标数"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "只能监听单个状态变量。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "能同时监听多个状态变量。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "监听能力"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "跟随状态变量观察能力（一层）。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "跟随状态变量观察能力（深层）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "能否获取变化前的值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不能获取变化前的值。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "能获取变化前的值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "监听条件"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "监听对象为状态变量。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "监听对象为状态变量或为@Trace装饰的类成员属性。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "使用限制"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "仅能在@Component装饰的自定义组件中使用。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "能在@ComponentV2装饰的自定义组件中使用，也能在@ObservedV2装饰的类中使用。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用场景",
      children: "使用场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "监听深层属性变化",
      children: "监听深层属性变化"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "@Monitor可以监听深层属性的变化，并能够根据更改前后的值做分类处理。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下面的示例中监听了属性value的变化，并根据变化的幅度改变Text组件显示的样式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@ObservedV2\nclass Info {\n  @Trace public value: number = 50;\n}\n\n@ObservedV2\nclass UIStyle {\n  public info: Info = new Info();\n  @Trace public color: Color = Color.Black;\n  @Trace public fontSize: number = 45;\n\n  @Monitor('info.value')\n  onValueChange(monitor: IMonitor) {\n    let lastValue: number = monitor.value()?.before as number;\n    let curValue: number = monitor.value()?.now as number;\n    if (lastValue != 0) {\n      let diffPercent: number = (curValue - lastValue) / lastValue;\n      if (diffPercent > 0.1) {\n        this.color = Color.Red;\n        this.fontSize = 50;\n      } else if (diffPercent < -0.1) {\n        this.color = Color.Green;\n        this.fontSize = 40;\n      } else {\n        this.color = Color.Black;\n        this.fontSize = 45;\n      }\n    }\n  }\n}\n\n@Entry\n@ComponentV2\nstruct Index {\n  textStyle: UIStyle = new UIStyle();\n\n  build() {\n    Column() {\n      Text(`Important Value: ${this.textStyle.info.value}`)\n        .fontColor(this.textStyle.color)\n        .fontSize(this.textStyle.fontSize)\n      Button('change!')\n        .onClick(() => {\n          this.textStyle.info.value = Math.floor(Math.random() * 100) + 1;\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "常见问题",
      children: "常见问题"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "自定义组件中monitor对变量监听的生效及失效时间",
      children: "自定义组件中@Monitor对变量监听的生效及失效时间"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当@Monitor定义在@ComponentV2装饰的自定义组件中时，@Monitor会在状态变量初始化完成之后生效，并在组件销毁时失效。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\n\n@ObservedV2\nclass Info {\n  @Trace public message: string = 'not initialized';\n\n  constructor() {\n    hilog.info(0xFF00, 'testTag', '%{public}s', 'in constructor message change to initialized');\n    this.message = 'initialized';\n  }\n}\n\n@ComponentV2\nstruct Child {\n  @Param info: Info = new Info();\n\n  @Monitor('info.message')\n  onMessageChange(monitor: IMonitor) {\n    hilog.info(0xFF00, 'testTag', '%{public}s',\n      `Child message change from ${monitor.value()?.before} to ${monitor.value()?.now}`);\n  }\n\n  aboutToAppear(): void {\n    this.info.message = 'Child aboutToAppear';\n  }\n\n  aboutToDisappear(): void {\n    hilog.info(0xFF00, 'testTag', '%{public}s', 'Child aboutToDisappear');\n    this.info.message = 'Child aboutToDisappear';\n  }\n\n  build() {\n    Column() {\n      Text('Child')\n      Button('change message in Child')\n        .onClick(() => {\n          this.info.message = 'Child click to change Message';\n        })\n    }\n    .borderColor(Color.Red)\n    .borderWidth(2)\n\n  }\n}\n\n@Entry\n@ComponentV2\nstruct Index {\n  @Local info: Info = new Info();\n  @Local flag: boolean = false;\n\n  @Monitor('info.message')\n  onMessageChange(monitor: IMonitor) {\n    hilog.info(0xFF00, 'testTag', '%{public}s',\n      `Index message change from ${monitor.value()?.before} to ${monitor.value()?.now}`);\n  }\n\n  build() {\n    Column() {\n      Button('show/hide Child')\n        .onClick(() => {\n          this.flag = !this.flag\n        })\n      Button('change message in Index')\n        .onClick(() => {\n          this.info.message = 'Index click to change Message';\n        })\n      if (this.flag) {\n        Child({ info: this.info })\n      }\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在上面的例子中，可以通过创建和销毁Child组件来观察定义在自定义组件中的@Monitor的生效和失效时机。推荐按如下顺序进行操作："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当Index组件创建Info类实例时，日志输出in constructor message change to initialized。此时Index组件的@Monitor还未初始化成功，因此不会监听到message的变化。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当Index组件创建完成，页面加载完成后，点击按钮“change message in Index”，此时Index组件中的@Monitor能够监听到变化，日志输出Index message change from initialized to Index click to change Message。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "点击按钮“show/hide Child”，创建Child组件，在Child组件初始化@Param装饰的变量以及@Monitor之后，调用Child组件的aboutToAppear回调，改变message。此时Index组件与Child组件的@Monitor均能监听到变化，日志输出Index message change from Index click to change Message to Child aboutToAppear以及Child message change from Index click to change Message to Child aboutToAppear。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "点击按钮“change message in Child”，改变message。此时Index组件与Child组件的@Monitor均能监听到变化，日志输出Index message change from Child aboutToAppear to Child click to change Message以及Child message change from Child aboutToAppear to Child click to change Message。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "点击按钮”show/hide Child“，销毁Child组件，调用Child组件的aboutToDisappear回调，改变message。此时Index组件与Child组件的@Monitor均能监听到变化，日志输出Child aboutToDisappear，Index message change from Child click to change Message to Child aboutToDisappear以及Child message change from Child click to change Message to Child aboutToDisappear。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "点击按钮“change message in Index”，改变message。此时Child组件已销毁，其注册的@Monitor监听也被解注册，仅有Index组件的@Monitor能够监听到变化，日志输出Index message change from Child aboutToDisappear to Index click to change Message。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "这表明Child组件中定义的@Monitor监听随着Child组件的创建初始化生效，随着Child组件的销毁失效。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "类中monitor对变量监听的生效及失效时间",
      children: "类中@Monitor对变量监听的生效及失效时间"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当@Monitor定义在@ObservedV2装饰的类中时，@Monitor会在类的实例创建完成后生效，在类的实例销毁时失效。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\n\n@ObservedV2\nclass Info {\n  @Trace public message: string = 'not initialized';\n\n  constructor() {\n    this.message = 'initialized';\n  }\n\n  @Monitor('message')\n  onMessageChange(monitor: IMonitor) {\n    hilog.info(0xFF00, 'testTag', '%{public}s',\n      `message change from ${monitor.value()?.before} to ${monitor.value()?.now}`);\n  }\n}\n\n@Entry\n@ComponentV2\nstruct Index {\n  info: Info = new Info();\n\n  aboutToAppear(): void {\n    this.info.message = 'Index aboutToAppear';\n  }\n\n  build() {\n    Column() {\n      Button('change message')\n        .onClick(() => {\n          this.info.message = 'Index click to change message';\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "上面的例子中，@Monitor会在info创建完成后生效，这个时机晚于类的constructor，早于自定义组件的aboutToAppear。当界面加载完成后，点击“change message”，修改message变量。此时日志输出信息如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "message change from initialized to Index aboutToAppear\nmessage change from Index aboutToAppear to Index click to change message\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "类中定义的@Monitor随着类的销毁失效。而由于类的实际销毁释放依赖于垃圾回收机制，因此会出现即使所在自定义组件已经销毁，类却还未及时销毁，导致类中定义的@Monitor仍在监听变化的情况。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\n\n@ObservedV2\nclass InfoWrapper {\n  public info?: Info;\n\n  constructor(info: Info) {\n    this.info = info;\n  }\n\n  @Monitor('info.age')\n  onInfoAgeChange(monitor: IMonitor) {\n    hilog.info(0xFF00, 'testTag', '%{public}s',\n      `age change from ${monitor.value()?.before} to ${monitor.value()?.now}`);\n  }\n}\n\n@ObservedV2\nclass Info {\n  @Trace public age: number;\n\n  constructor(age: number) {\n    this.age = age;\n  }\n}\n\n@ComponentV2\nstruct Child {\n  @Param @Require infoWrapper: InfoWrapper;\n\n  aboutToDisappear(): void {\n    hilog.info(0xFF00, 'testTag', '%{public}s', 'Child aboutToDisappear', this.infoWrapper.info?.age);\n  }\n\n  build() {\n    Column() {\n      Text(`${this.infoWrapper.info?.age}`)\n    }\n  }\n}\n\n@Entry\n@ComponentV2\nstruct Index {\n  dataArray: Info[] = [];\n  @Local showFlag: boolean = true;\n\n  aboutToAppear(): void {\n    for (let i = 0; i < 5; i++) {\n      this.dataArray.push(new Info(i));\n    }\n  }\n\n  build() {\n    Column() {\n      Button('change showFlag')\n        .onClick(() => {\n          this.showFlag = !this.showFlag;\n        })\n      Button('change number')\n        .onClick(() => {\n          hilog.info(0xFF00, 'testTag', '%{public}s', 'click to change age');\n          this.dataArray.forEach((info: Info) => {\n            info.age += 100;\n          });\n        })\n      if (this.showFlag) {\n        Column() {\n          Text('Children')\n          ForEach(this.dataArray, (info: Info) => {\n            Child({ infoWrapper: new InfoWrapper(info) })\n          })\n        }\n        .borderColor(Color.Red)\n        .borderWidth(2)\n      }\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在上面的例子中，当点击“change showFlag”切换if组件的条件时，Child组件会被销毁。此时，点击“change number”修改age的值时，可以通过日志观察到InfoWrapper中定义的@Monitor回调仍然被触发了。这是因为此时自定义组件Child虽然执行了aboutToDisappear，但是其成员变量infoWrapper还没有被立刻回收，当变量发生变化时，依然能够调用到infoWrapper中定义的onInfoAgeChange方法，所以从现象上看@Monitor回调仍会被触发。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "借助垃圾回收机制去取消@Monitor的监听是不稳定的，开发者可以采用以下两种方式去管理@Monitor的失效时间："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1、将@Monitor定义在自定义组件中。由于自定义组件在销毁时，状态管理框架会手动取消@Monitor的监听，因此在自定义组件调用完aboutToDisappear，尽管自定义组件的数据不一定已经被释放，但@Monitor回调已不会再被触发。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\n\n@ObservedV2\nclass InfoWrapper {\n  public info?: Info;\n\n  constructor(info: Info) {\n    this.info = info;\n  }\n}\n\n@ObservedV2\nclass Info {\n  @Trace public age: number;\n\n  constructor(age: number) {\n    this.age = age;\n  }\n}\n\n@ComponentV2\nstruct Child {\n  @Param @Require infoWrapper: InfoWrapper;\n\n  @Monitor('infoWrapper.info.age')\n  onInfoAgeChange(monitor: IMonitor) {\n    hilog.info(0xFF00, 'testTag', '%{public}s',\n      `age change from ${monitor.value()?.before} to ${monitor.value()?.now}`);\n  }\n\n  aboutToDisappear(): void {\n    hilog.info(0xFF00, 'testTag', '%{public}s', 'Child aboutToDisappear', this.infoWrapper.info?.age);\n  }\n\n  build() {\n    Column() {\n      Text(`${this.infoWrapper.info?.age}`)\n    }\n  }\n}\n\n@Entry\n@ComponentV2\nstruct Index {\n  dataArray: Info[] = [];\n  @Local showFlag: boolean = true;\n\n  aboutToAppear(): void {\n    for (let i = 0; i < 5; i++) {\n      this.dataArray.push(new Info(i));\n    }\n  }\n\n  build() {\n    Column() {\n      Button('change showFlag')\n        .onClick(() => {\n          this.showFlag = !this.showFlag;\n        })\n      Button('change number')\n        .onClick(() => {\n          hilog.info(0xFF00, 'testTag', '%{public}s', 'click to change age');\n          this.dataArray.forEach((info: Info) => {\n            info.age += 100;\n          })\n        })\n      if (this.showFlag) {\n        Column() {\n          Text('Children')\n          ForEach(this.dataArray, (info: Info) => {\n            Child({ infoWrapper: new InfoWrapper(info) })\n          })\n        }\n        .borderColor(Color.Red)\n        .borderWidth(2)\n      }\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "2、主动置空监听的对象。当自定义组件即将销毁时，主动置空@Monitor的监听目标，这样@Monitor无法再监听原监听目标的变化，达到取消@Monitor监听的效果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\n\n@ObservedV2\nclass InfoWrapper {\n  public info?: Info;\n\n  constructor(info: Info) {\n    this.info = info;\n  }\n\n  @Monitor('info.age')\n  onInfoAgeChange(monitor: IMonitor) {\n    hilog.info(0xFF00, 'testTag', '%{public}s',\n      `age change from ${monitor.value()?.before} to ${monitor.value()?.now}`);\n  }\n}\n\n@ObservedV2\nclass Info {\n  @Trace public age: number;\n\n  constructor(age: number) {\n    this.age = age;\n  }\n}\n\n@ComponentV2\nstruct Child {\n  @Param @Require infoWrapper: InfoWrapper;\n\n  aboutToDisappear(): void {\n    hilog.info(0xFF00, 'testTag', '%{public}s', 'Child aboutToDisappear', this.infoWrapper.info?.age);\n    this.infoWrapper.info = undefined; // 使InfoWrapper对info.age的监听失效\n  }\n\n  build() {\n    Column() {\n      Text(`${this.infoWrapper.info?.age}`)\n    }\n  }\n}\n\n@Entry\n@ComponentV2\nstruct Index {\n  dataArray: Info[] = [];\n  @Local showFlag: boolean = true;\n\n  aboutToAppear(): void {\n    for (let i = 0; i < 5; i++) {\n      this.dataArray.push(new Info(i));\n    }\n  }\n\n  build() {\n    Column() {\n      Button('change showFlag')\n        .onClick(() => {\n          this.showFlag = !this.showFlag;\n        })\n      Button('change number')\n        .onClick(() => {\n          hilog.info(0xFF00, 'testTag', '%{public}s', 'click to change age');\n          this.dataArray.forEach((info: Info) => {\n            info.age += 100;\n          })\n        })\n      if (this.showFlag) {\n        Column() {\n          Text('Children')\n          ForEach(this.dataArray, (info: Info) => {\n            Child({ infoWrapper: new InfoWrapper(info) })\n          })\n        }\n        .borderColor(Color.Red)\n        .borderWidth(2)\n      }\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "正确设置monitor入参",
      children: "正确设置@Monitor入参"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 23起，增加了对@Monitor入参的编译时校验。当@Monitor的入参不符合监听条件时（如传入非状态变量、不存在的变量等），将会有编辑、编译告警，但@Monitor回调仍会被触发。开发者应正确传入@Monitor入参，避免监听非状态变量，防止功能异常或行为与预期不符。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "【反例1】"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\n\n@ObservedV2\nclass Info {\n  public name: string = 'John';\n  @Trace public age: number = 24;\n\n  // 同时监听状态变量age和非状态变量name\n  // 此时会编辑、编译告警，提示`The '@Monitor' decorator needs to monitor the state variables that exist.`\n  @Monitor('age', 'name')\n  onPropertyChange(monitor: IMonitor) {\n    monitor.dirty.forEach((path: string) => {\n      hilog.info(0xFF00, 'testTag', '%{public}s',\n        `property path:${path} change from ${monitor.value(path)?.before} to ${monitor.value(path)?.now}`);\n    })\n  }\n}\n\n@Entry\n@ComponentV2\nstruct Index {\n  info: Info = new Info();\n\n  build() {\n    Column() {\n      Button('change age&name')\n        .onClick(() => {\n          this.info.age = 25; // 同时改变状态变量age和非状态变量name\n          this.info.name = 'Johny';\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "上面的代码中，当点击按钮同时更改状态变量age和非状态变量name时，会输出以下日志："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "property path:age change from 24 to 25\nproperty path:name change from John to Johny\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "实际上name属性本身并不是可被观测的变量，不应被加入到@Monitor的入参当中。建议开发者去除对name属性的监听或者给name加上@Trace装饰成为状态变量。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "【正例1】"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\n\n@ObservedV2\nclass Info {\n  public name: string = 'John';\n  @Trace public age: number = 24;\n\n  // 仅监听状态变量age\n  @Monitor('age')\n  onPropertyChange(monitor: IMonitor) {\n    monitor.dirty.forEach((path: string) => {\n      hilog.info(0xFF00, 'testTag', '%{public}s',\n        `property path:${path} change from ${monitor.value(path)?.before} to ${monitor.value(path)?.now}`);\n    })\n  }\n}\n\n@Entry\n@ComponentV2\nstruct Index {\n  info: Info = new Info();\n\n  build() {\n    Column() {\n      Button('change age&name')\n        .onClick(() => {\n          this.info.age = 25; // 状态变量age改变\n          this.info.name = 'Johny';\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "【反例2】"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\n\n@ObservedV2\nclass Info {\n  public name: string = 'John';\n  @Trace public age: number = 24;\n\n  get myAge() {\n    return this.age; // age为状态变量\n  }\n\n  // 监听非@Computed装饰的getter访问器\n  @Monitor('myAge')\n  onPropertyChange() {\n    hilog.info(0xFF00, 'testTag', '%{public}s', 'age changed');\n  }\n}\n\n@Entry\n@ComponentV2\nstruct Index {\n  info: Info = new Info();\n\n  build() {\n    Column() {\n      Button('change age')\n        .onClick(() => {\n          this.info.age = 25; // 状态变量age改变\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "上面的代码中，@Monitor的入参为一个getter访问器的名字，但该getter访问器本身并未被@Computed装饰，不是一个可被监听的变量。但由于使用了状态变量参与了计算，在状态变量变化后，myAge也被认为发生了变化，因此触发了@Monitor回调。建议开发者给myAge添加@Computed装饰器或当getter访问器直接返回状态变量时，不监听getter访问器而是直接监听状态变量本身。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "【正例2】"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将myAge变为状态变量："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\n\n@ObservedV2\nclass Info {\n  public name: string = 'John';\n  @Trace public age: number = 24;\n\n  // 给myAge添加@Computed成为状态变量\n  @Computed\n  get myAge() {\n    return this.age;\n  }\n\n  // 监听@Computed装饰的getter访问器\n  @Monitor('myAge')\n  onPropertyChange() {\n    hilog.info(0xFF00, 'testTag', '%{public}s', 'age changed');\n  }\n}\n\n@Entry\n@ComponentV2\nstruct Index {\n  info: Info = new Info();\n\n  build() {\n    Column() {\n      Button('change age')\n        .onClick(() => {\n          this.info.age = 25; // 状态变量age改变\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "或直接监听状态变量本身："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\n\n@ObservedV2\nclass Info {\n  public name: string = 'John';\n  @Trace public age: number = 24;\n\n  // 监听状态变量age\n  @Monitor('age')\n  onPropertyChange() {\n    hilog.info(0xFF00, 'testTag', '%{public}s', 'age changed');\n  }\n}\n\n@Entry\n@ComponentV2\nstruct Index {\n  info: Info = new Info();\n\n  build() {\n    Column() {\n      Button('change age')\n        .onClick(() => {\n          this.info.age = 25; // 状态变量age改变\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "无法监听变量从可访问变为不可访问和从不可访问变为可访问",
      children: "无法监听变量从可访问变为不可访问和从不可访问变为可访问"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "@Monitor仅会保存变量可访问时的值，当状态变量变为不可访问的状态时，并不会记录其值的变化。在下面的例子中，点击三个Button，均不会触发onChange的回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 20开始，如果需要监听可访问到不可访问和不可访问到可访问的状态变化，可以使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-uiutils/arkts-new-addmonitor-clearmonitor#%E7%9B%91%E5%90%AC%E5%8F%98%E9%87%8F%E4%BB%8E%E5%8F%AF%E8%AE%BF%E9%97%AE%E5%88%B0%E4%B8%8D%E8%AE%BF%E9%97%AE%E5%92%8C%E4%BB%8E%E4%B8%8D%E5%8F%AF%E8%AE%BF%E9%97%AE%E5%88%B0%E5%8F%AF%E8%AE%BF%E9%97%AE",
        children: "addMonitor"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\n\n@ObservedV2\nclass User {\n  @Trace public age: number = 10;\n}\n\n@Entry\n@ComponentV2\nstruct Page {\n  @Local user: User | undefined | null = new User();\n\n  @Monitor('user.age')\n  onChange(mon: IMonitor) {\n    mon.dirty.forEach((path: string) => {\n      hilog.info(0xFF00, 'testTag', '%{public}s',\n        `onChange: User property ${path} change from ${mon.value(path)?.before} to ${mon.value(path)?.now}`);\n    });\n  }\n\n  build() {\n    Column() {\n      Text(`User age ${this.user?.age}`).fontSize(20)\n      Button('set user to undefined').onClick(() => {\n        // age：可访问 -> 不可访问\n        this.user = undefined;\n      })\n      Button('set user to User').onClick(() => {\n        // age：不可访问 ->可访问\n        this.user = new User();\n      })\n      Button('set user to null').onClick(() => {\n        // age：可访问->不可访问\n        this.user = null;\n      })\n    }\n  }\n}\n"
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
27441(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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