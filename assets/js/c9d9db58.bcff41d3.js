"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["470980"], {
983303(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_state_management_arkts_state_management_faq_troubleshooting_state_manage_troubleshooting_state_manage_md_c9d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-state-management-arkts-state-management-faq-troubleshooting-state-manage-troubleshooting-state-manage-md-c9d.json
var site_docs_arkui_arkts_ui_development_arkts_state_management_arkts_state_management_faq_troubleshooting_state_manage_troubleshooting_state_manage_md_c9d_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-state-management/arkts-state-management-faq/troubleshooting-state-manage/troubleshooting-state-manage","title":"状态变量改变不触发组件刷新问题常用定位方法","description":"在声明式UI编程框架中，状态管理的主要职责是：当状态变量改变时，触发其关联组件的刷新。所以在使用状态变量的过程中，最常见的问题就是组件不刷新。本文主要针对开发者在使用状态变量时遇到的不刷新问题，阐述以下两个方面。","source":"@site/docs/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-faq/troubleshooting-state-manage/troubleshooting-state-manage.md","sourceDirName":"arkui/arkts-ui-development/arkts-state-management/arkts-state-management-faq/troubleshooting-state-manage","slug":"/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-faq/troubleshooting-state-manage/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-faq/troubleshooting-state-manage/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"状态变量改变不触发组件刷新问题常用定位方法","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/troubleshooting-state-manage","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"应用内状态管理和其他常见问题","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-faq/arkts-state-management-faq-application-and-others/"},"next":{"title":"渲染控制概述","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-rendering-control/arkts-rendering-control-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-faq/troubleshooting-state-manage/troubleshooting-state-manage.md


const frontMatter = {
	title: '状态变量改变不触发组件刷新问题常用定位方法',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/troubleshooting-state-manage',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '状态变量改变不触发组件刷新问题常用定位方法';

const assets = {

};



const toc = [{
  "value": "定位状态变量不刷新问题的主要方法",
  "id": "定位状态变量不刷新问题的主要方法",
  "level": 2
}, {
  "value": "第一步：状态变量收集依赖",
  "id": "第一步状态变量收集依赖",
  "level": 3
}, {
  "value": "第二步：状态变量发生改变",
  "id": "第二步状态变量发生改变",
  "level": 3
}, {
  "value": "第三步：状态变量的赋值是否可被观察",
  "id": "第三步状态变量的赋值是否可被观察",
  "level": 3
}, {
  "value": "第四步：数据源和被同步的对象是否有关联关系",
  "id": "第四步数据源和被同步的对象是否有关联关系",
  "level": 3
}, {
  "value": "第五步：是否执行组件的更新函数",
  "id": "第五步是否执行组件的更新函数",
  "level": 3
}, {
  "value": "总结",
  "id": "总结",
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
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "状态变量改变不触发组件刷新问题常用定位方法",
        children: "状态变量改变不触发组件刷新问题常用定位方法"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在声明式UI编程框架中，状态管理的主要职责是：当状态变量改变时，触发其关联组件的刷新。所以在使用状态变量的过程中，最常见的问题就是组件不刷新。本文主要针对开发者在使用状态变量时遇到的不刷新问题，阐述以下两个方面。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如何定位状态变量不刷新的问题。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "不刷新问题常见案例。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "定位状态变量不刷新问题的主要方法",
      children: "定位状态变量不刷新问题的主要方法"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "状态变量触发UI刷新主要分为两步："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "收集依赖：收集状态变量关联组件ID。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "触发更新：标记需要更新的节点，触发需要更新的节点的更新。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["这部分的原理在本篇文档中仅做简要说明，详情见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-introduce",
        children: "状态管理原理介绍"
      }), "。基于上面的状态变量触发UI刷新的流程，在定位不刷新问题时，可以分为以下五步来定位。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "第一步状态变量收集依赖",
      children: "第一步：状态变量收集依赖"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "基于状态管理的更新流程，状态变量触发UI组件更新的前提是，当前状态变量已经收集到UI组件的依赖，具体来说也就是在组件初始化的过程，触发了状态变量的“读”操作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查状态变量是否收集到组件的ID可通过以下工具："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["使用DevEco Studio的ArkUI Inspector。具体使用方法见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/ui-debug-optimize/ui-inspector-profiler#%E7%8A%B6%E6%80%81%E7%AE%A1%E7%90%86inspector%E8%B0%83%E8%AF%95%E8%83%BD%E5%8A%9B",
          children: "状态管理Inspector调试能力"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-debug-optimize/debugging-commands/hidumper-tool/hidumper",
          children: "hidumper"
        }), "工具。具体使用方法见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/ui-debug-optimize/ui-inspector-profiler#%E7%8A%B6%E6%80%81%E7%AE%A1%E7%90%86hidumper%E8%83%BD%E5%8A%9B",
          children: "状态管理hidumper能力"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "第二步状态变量发生改变",
      children: "第二步：状态变量发生改变"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在给状态变量赋值时，状态管理框架会检查当前被赋值的状态变量的值是否有变化，如果没有变化，则会直接返回，不做任何操作。最简单的排查手段是分别打印修改状态变量前后的值，检查是否有变化。如以下示例。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct Index {\n  @State message: string = 'Hello World';\n\n  build() {\n    Column() {\n      Text(this.message)\n        .onClick(() => {\n          console.info(`message set before ${this.message}`);\n          this.message = 'Welcome';\n          console.info(`message set after ${this.message}`);\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "观察日志输出this.message前后发生改变，日志输出如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "message set before Hello World\nmessage set after Welcome\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "第三步状态变量的赋值是否可被观察",
      children: "第三步：状态变量的赋值是否可被观察"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "状态管理V1"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在状态管理V1中，若开发者确认赋值前后值已发生变化却未能触发UI刷新，应检查当前赋值操作是否可被观察（从API version 23开始，开发者可以使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-new-canbeobserved",
        children: "canBeObserved"
      }), "接口来判断对象是否可被观察）。示例如下。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在下面的示例中，开发者对this.inner.value的赋值无法触发Text(", (0,jsx_runtime.jsx)(_components.code, {
        children: "Child: inner value: ${this.inner.value}"
      }), ")组件的刷新，在遇到这个问题时，应该从以下方面排查当前赋值操作是否是可被观察。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-watch",
          children: "@Watch"
        }), "的监听函数是否执行。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["如果状态变量为复杂类型且需要观察其属性的赋值变化，开发者还可以通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-uiutils/arkts-new-gettarget",
          children: "getTarget"
        }), "来判断当前变量是否可观察。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["使用DevEco Studio的Profiler工具观察此次赋值是否有状态变量变化的上报，具体使用方法见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/ui-debug-optimize/ui-inspector-profiler#%E7%8A%B6%E6%80%81%E7%AE%A1%E7%90%86profiler%E8%B0%83%E4%BC%98%E8%83%BD%E5%8A%9B",
          children: "状态管理profiler调优能力"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { UIUtils } from '@kit.ArkUI';\n\nclass Outer {\n  value: string = 'outer';\n  inner: Inner = new Inner();\n}\n\nclass Inner {\n  value: string = 'inner';\n}\n\n@Entry\n@Component\nstruct Index {\n  @State outer: Outer = new Outer();\n\n  build() {\n    Column() {\n      Text(`Index: outer value: ${this.outer.value}`)\n      Child({ inner: this.outer.inner })\n    }\n  }\n}\n\n@Component\nstruct Child {\n  // 写法错误：@ObjectLink初始化的变量不是@Observed装饰的类的实例\n  // 状态管理会打印error日志提醒开发者：\n  // FIX THIS APPLICATION ERROR: @ObjectLink inner owned by @Component Child set/init (method setValueInternal): assigned value is not be decorated by @Observed. Value changes will not be observed and UI will not update.\n  @ObjectLink @Watch('onChange') inner: Inner;\n\n  aboutToAppear(): void {\n    // 通过getTarget获取状态变量的原始对象，如果两者相等，即原始对象和该对象是同一个对象，则其不是一个可观察的数据\n    // 如果两者不相等，则其为可观察的对象\n    // 因为Inner缺少@Observed装饰器装饰，所以下面日志输出为：\n    // inner is not observed object\n    console.info(`inner is ${UIUtils.getTarget(this.inner) === this.inner ? 'not observed object' :\n      'observed object'}`);\n  }\n\n  onChange() {\n    console.info(`inner property has been changed ${this.inner.value}`);\n  }\n\n  build() {\n    Column() {\n      Text(`Child: inner value: ${this.inner.value}`)\n        .onClick(() => {\n          this.inner.value += '!';\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在上面的示例中，Inner没有被", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-observed-and-objectlink",
        children: "@Observed"
      }), "装饰，所以其属性value的赋值无法被观察："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "@Watch('onChange')函数没有执行。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "日志提示inner is not observed object。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ArkUI State泳道没有状态变量变化的上报信息。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(377755)/* ["default"] */.A) + "",
            width: "1901",
            height: "561"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["需要注意，并非所有的类对象都需要被@Observed装饰。", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-state",
        children: "@State"
      }), "装饰器会默认对复杂对象包装第一层代理，而对嵌套对象，则需要在内层对象的类声明上增加@Observed装饰。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "正确示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { UIUtils } from '@kit.ArkUI';\n\nclass Outer {\n  value: string = 'outer';\n  inner: Inner = new Inner();\n}\n\n@Observed\nclass Inner {\n  value: string = 'inner';\n}\n\n@Entry\n@Component\nstruct Index {\n  @State outer: Outer = new Outer();\n\n  build() {\n    Column() {\n      Text(`Index: outer value: ${this.outer.value}`)\n      Child({ inner: this.outer.inner })\n    }\n  }\n}\n\n@Component\nstruct Child {\n  @ObjectLink @Watch('onChange') inner: Inner;\n\n  aboutToAppear(): void {\n    // 日志输出：inner is observed object\n    console.info(`inner is ${UIUtils.getTarget(this.inner) === this.inner ? 'not observed object' :\n      'observed object'}`);\n  }\n\n  onChange() {\n    console.info(`inner property has been changed ${this.inner.value}`)\n  }\n\n  build() {\n    Column() {\n      Text(`Child: inner value: ${this.inner.value}`)\n        .onClick(() => {\n          this.inner.value += '!';\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在正确的示例中："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "@Watch监听函数被正常触发。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "日志提示inner is observed object。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ArkUI State泳道有状态变量变化的上报信息。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(122114)/* ["default"] */.A) + "",
            width: "1893",
            height: "753"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "状态管理V2"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "状态管理V2中，对复杂对象的观察分以下两种情况："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "普通类："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "与状态管理V1不同，在状态管理V2观察普通类时，框架不会为其实例创建代理对象，因此无法通过getTarget来判断其是否为代理对象。开发者可以通过以下方式判断："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["通过检查要观察的属性是否是", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-data-object-state/arkts-new-observedv2-and-trace",
              children: "@Trace"
            }), "装饰。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["观察ArkUI State泳道是否有状态变量变化信息上报，具体使用方法见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/ui-debug-optimize/ui-inspector-profiler#%E7%8A%B6%E6%80%81%E7%AE%A1%E7%90%86profiler%E8%B0%83%E4%BC%98%E8%83%BD%E5%8A%9B",
              children: "状态管理profiler调优能力"
            }), "。"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "内置类型（Built-in Types）："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在状态管理V2中，Array、Map、Set会包装代理对象，开发者可以通过调用getTarget来判断当前类型是否为代理数据。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "具体示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { UIUtils } from '@kit.ArkUI';\n\n@ObservedV2\nclass Info {\n  @Trace value: string = 'info';\n  @Trace numberArr: number[] = [];\n  count: number = 0;\n\n  constructor(val: string) {\n    this.value = val;\n    this.numberArr = [0, 1, 2];\n  }\n}\n\n@Entry\n@ComponentV2\nstruct Index {\n  info: Info = new Info('info');\n\n  aboutToAppear(): void {\n    // 日志输出：this.info.numberArr is observed array\n    console.info(`this.info.numberArr is ${UIUtils.getTarget(this.info.numberArr) === this.info.numberArr ?\n      'not observed array' :\n      'observed array'}`);\n  }\n\n  build() {\n    Column() {\n      Text(`Index: info value: ${this.info.value}`)\n      Text(`Index: info numberArr length: ${this.info.numberArr.length}`)\n      Text(`Index: info count: ${this.info.count}`)\n\n      Button('change info property').onClick(() => {\n        this.info.value = 'new info';\n        this.info.numberArr.push(3);\n        this.info.count++;\n      })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "基于上面的示例，观察ArkUI State泳道，有两次状态变量的变化上报，即this.info.value和this.info.numberArr。count不是@Trace装饰的，所以不会被观察到变化，也不会在Profiler上报状态变量的变化。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(882695)/* ["default"] */.A) + "",
        width: "1894",
        height: "699"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "第四步数据源和被同步的对象是否有关联关系",
      children: "第四步：数据源和被同步的对象是否有关联关系"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "状态管理中，数据源会通过双向或单向机制通知同步对象。如果开发者遇到数据源改变，但其同步对象没有被通知的情况，可以按下面的方式排查。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "状态管理V1"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "状态管理V1存在下面两类同步方式："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["同步对象(sync peer)：如@State和", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-link",
          children: "@Link"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-provide-and-consume",
          children: "@Provide"
        }), "和", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-provide-and-consume",
          children: "@Consume"
        }), "。开发者可以通过DevEco Studio的ArkUI Inspector来查看数据源和同步对象之间是否存在同步关系，具体见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/ui-debug-optimize/ui-inspector-profiler#%E7%8A%B6%E6%80%81%E7%AE%A1%E7%90%86inspector%E8%B0%83%E8%AF%95%E8%83%BD%E5%8A%9B",
          children: "状态管理Inspector调试能力"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["依赖其所属组件的更新函数：如@State通知@Prop变化、@State通知@ObjectLink变化。开发者可以使用断点调试工具，或者", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkts-api/arkts-arkts/js-apis-util/js-apis-util#utilgethash12",
          children: "getHash接口"
        }), "来判断数据源和同步对象是否为同一个对象的引用(hashcode并不固定，以开发者自己打印的为准)。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "状态管理V2"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["状态管理V2没有同步对象(sync peer)的概念。", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-component-state/arkts-new-local",
        children: "@Local"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-component-state/arkts-new-param",
        children: "@Param"
      }), "的同步方式是依赖@Param组件所属组件的更新函数。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["这类问题中，常见的场景是和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-rendering-control/arkts-rendering-control-foreach",
        children: "ForEach"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-rendering-control/arkts-rendering-control-lazyforeach",
        children: "LazyForEach"
      }), "联用导致数据源和其同步对象断链。如以下示例。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { UIUtils } from '@kit.ArkUI';\nimport { util } from '@kit.ArkTS';\n\n@Observed\nclass Info {\n  value: string = 'info';\n}\n\n@Entry\n@Component\nstruct Index {\n  @State infos: Info[] = [new Info()];\n\n  build() {\n    Column() {\n      // 第一步：点击该Button\n      // 触发ForEach的刷新，ForEach对比前后key值没有改变，没有触发Child的更新，所以@ObjectLink info还是指向之前的Info的实例\n      // 出现@State infos和@ObjectLink info断链\n      Button('change first item value').onClick(() => {\n        this.infos[0] = new Info();\n      })\n\n      // 第二步：点击该Button，@ObjectLink info的@Watch的函数没有被触发\n      // 日志打印：this.infos[0] hashcode: 993656661\n      // this.infos[0]和@ObjectLink info不是同一个对象的引用，@State无法通知@ObjectLink刷新\n      Button('change first item value').onClick(() => {\n        this.infos[0].value += '1';\n        console.info(`this.infos[0] hashcode: ${util.getHash(this.infos[0])}`);\n      })\n      ForEach(this.infos, (item: Info) => {\n        Child({ info: item })\n      })\n    }\n  }\n}\n\n@Component\nstruct Child {\n  @ObjectLink @Watch('onChange') info: Info;\n\n  aboutToAppear(): void {\n    // 日志输出:\n    // info is observed object, hashcode: 1806047025\n    // hashcode并不固定，根据开发者自己打印的为准\n    console.info(`info is ${UIUtils.getTarget(this.info) === this.info ? 'not observed object' :\n      'observed object'}, hashcode: ${util.getHash(this.info)}`);\n  }\n\n  onChange() {\n    console.info(`info property has been changed ${this.info.value}`);\n  }\n\n  build() {\n    Column() {\n      Text(`Child: info value: ${this.info.value}`)\n        .onClick(() => {\n          this.info.value += '2';\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "正确示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { UIUtils } from '@kit.ArkUI';\nimport { util } from '@kit.ArkTS';\n\n@Observed\nclass Info {\n  value: string = 'info';\n}\n\n@Entry\n@Component\nstruct Index {\n  @State infos: Info[] = [new Info()];\n\n  build() {\n    Column() {\n      // 第一步：点击该Button\n      // 触发ForEach的刷新，ForEach对比前后key值改变，触发Child的重建，@ObjectLink info指向新的Info的实例\n      Button('change first item value').onClick(() => {\n        this.infos[0] = new Info();\n      })\n\n      // 第二步：点击该Button，@ObjectLink info的@Watch的函数被触发\n      // 日志打印：this.infos[0] hashcode: 358024053\n      Button('change first item value').onClick(() => {\n        this.infos[0].value += '1';\n        console.info(`this.infos[0] hashcode: ${util.getHash(this.infos[0])}`);\n      })\n\n      ForEach(this.infos, (item: Info) => {\n        Child({ info: item })\n      }, (item: Info) => {\n        // 随机数key值\n        return item.value + Math.random().toString();\n      })\n    }\n  }\n}\n\n@Component\nstruct Child {\n  @ObjectLink @Watch('onChange') info: Info;\n\n  aboutToAppear(): void {\n    // 日志输出:\n    // 首次创建： info is observed object, hashcode: 2026693567\n    // 点击Button('change first item value')，触发Child重建：info is observed object, hashcode: 358024053\n    console.info(`info is ${UIUtils.getTarget(this.info) === this.info ? 'not observed object' :\n      'observed object'}, hashcode: ${util.getHash(this.info)}`);\n  }\n\n  onChange() {\n    console.info(`info property has been changed ${this.info.value}`);\n  }\n\n  build() {\n    Column() {\n      Text(`Child: info value: ${this.info.value}`)\n        .onClick(() => {\n          this.info.value += '2';\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "第五步是否执行组件的更新函数",
      children: "第五步：是否执行组件的更新函数"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在检查了前四步后，如果发现UI依旧没有刷新，这就要检查最后一步，没有刷新的组件是否执行了更新函数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["这类问题常发生于，开发者在组件的同步回调里改变了状态变量，导致当前正在刷新的组件再次被加入到了待刷新的组件列表里，从而使状态管理框架忽略了这个组件的刷新。以", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/images-and-videos/ts-basic-components-image/ts-basic-components-image",
        children: "Image组件"
      }), "的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/images-and-videos/ts-basic-components-image/ts-basic-components-image#oncomplete",
        children: "onComplete"
      }), "接口为例。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者可以通过封装获取组件属性方法来观察当前组件是否发生重新渲染。如下面示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct Page {\n  @State widthValue: number = 100;\n  @State flag: boolean = true;\n\n  // 封装getHeightValue方法观察Image是否发生重新渲染\n  getHeightValue(): number {\n    console.info('Image render');\n    return 500;\n  }\n\n  build() {\n    Column() {\n      Image(this.flag ? $r('app.media.startIcon') : $r('app.media.background'))\n        .width(this.widthValue)\n        .height(this.getHeightValue())\n        .backgroundColor(Color.Pink)\n        .onComplete((event) => {\n          this.widthValue = 200;\n          console.info(`Image onComplete ${this.widthValue} load status: ${event?.loadingStatus}`);\n        })\n\n      Button('change resource').onClick(() => {\n        // 第一步：改变flag，使得两个Resource变量都进入Image组件的缓存\n        // 第三步：再次改变Image的Resource，此时onComplete为同步回调\n        // onComplete的回调中同步修改widthValue为200\n        // 打印状态管理的错误日志：FIX THIS APPLICATION ERROR: @Component 'Page: State variable 'widthValue' has changed during render! It's illegal to change @Component state while build (initial render or re-render) is on-going. Application error!\n        // 没有打印Image render日志，Image宽度没有发生改变\n        this.flag = !this.flag;\n      })\n\n      Button('change widthValue').onClick(() => {\n        // 第二步：改变image宽度为100\n        this.widthValue = 100;\n      })\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "第三步点击Button('change resource')后，输出日志如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Image render\nFIX THIS APPLICATION ERROR: @Component 'Page: State variable 'widthValue' has changed during render! It's illegal to change @Component state while build (initial render or re-render) is on-going. Application error!\nImage onComplete 200 load status: 0\nImage onComplete 200 load status: 1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可以看到在onComplete改变状态变量widthValue后，没有触发Image render日志，这次状态变量的改变没有触发Image组件的刷新。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "正确示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可以将组件的同步回调中对状态变量的赋值通过setTimeout转换为异步执行，示例如下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct Page {\n  @State widthValue: number = 100;\n  @State flag: boolean = true;\n\n  getHeightValue(): number {\n    console.info('Image render');\n    return 500;\n  }\n\n  build() {\n    Column() {\n      Image(this.flag ? $r('app.media.startIcon') : $r('app.media.background'))\n        .width(this.widthValue)\n        .height(this.getHeightValue())\n        .backgroundColor(Color.Pink)\n        .onComplete((event) => {\n          setTimeout(() =>{\n            this.widthValue = 200;\n            console.info(`Image onComplete ${this.widthValue} load status: ${event?.loadingStatus}`);\n          });\n        })\n\n      Button('change resource').onClick(() => {\n        // 第一步：改变flag，使得两个Resource变量都进入Image组件的缓存\n        // 第三步：再次改变Image的Resource，此时onComplete为同步回调\n        // onComplete的回调中异步修改widthValue为200\n        // Image宽度刷新为200\n        this.flag = !this.flag;\n      })\n\n      Button('change widthValue').onClick(() => {\n        // 第二步：改变image宽度为100\n        this.widthValue = 100;\n      })\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "第三步点击Button('change resource')后，输出日志如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Image render\nImage onComplete 200 load status: 0\nImage onComplete 200 load status: 1\nImage render\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可以看到在onComplete内的setTimeout改变状态变量widthValue后，触发Image render日志，Image宽度刷新为200。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "总结",
      children: "总结"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "基于上述流程与示例，可以总结出定位不刷新问题的核心思路如下。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "状态变量是否收集到了需要触发刷新组件的ID。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "状态变量的赋值是否为可观察的变化。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "需要刷新的组件是否执行了更新函数。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者在遇到不刷新的问题的时候，可以依据上面的定位流程，或者带着这三点疑问来排查代码，提高定位问题的效率。"
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
377755(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957640-7925a99ded01cd7532b7a0dda313736c.png");

},
882695(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552797992-a26e4b14225c6749756b0373b9015e0a.png");

},
122114(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477641-829f11f9d88dd1f82b0237ff84616a99.png");

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