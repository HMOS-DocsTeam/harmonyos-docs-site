"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["708779"], {
280952(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ut_arkxtest_guidelines_uitest_guidelines_uitest_guidelines_md_443_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ut-arkxtest-guidelines-uitest-guidelines-uitest-guidelines-md-443.json
var site_docs_ut_arkxtest_guidelines_uitest_guidelines_uitest_guidelines_md_443_namespaceObject = JSON.parse('{"id":"ut/arkxtest-guidelines/uitest-guidelines/uitest-guidelines","title":"UI测试框架使用指导","description":"概述","source":"@site/docs/ut/arkxtest-guidelines/uitest-guidelines/uitest-guidelines.md","sourceDirName":"ut/arkxtest-guidelines/uitest-guidelines","slug":"/ut/arkxtest-guidelines/uitest-guidelines/","permalink":"/harmonyos-docs-site/ut/arkxtest-guidelines/uitest-guidelines/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"UI测试框架使用指导","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/uitest-guidelines","kit":"testing","last_updated":"2026-04-21"},"sidebar":"docs","previous":{"title":"单元测试框架使用指导","permalink":"/harmonyos-docs-site/ut/arkxtest-guidelines/unittest-guidelines/"},"next":{"title":"白盒性能测试框架使用指导","permalink":"/harmonyos-docs-site/ut/arkxtest-guidelines/perftest-guideline/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ut/arkxtest-guidelines/uitest-guidelines/uitest-guidelines.md


const frontMatter = {
	title: 'UI测试框架使用指导',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/uitest-guidelines',
	kit: 'testing',
	last_updated: '2026-04-21'
};
const contentTitle = 'UI测试框架使用指导';

const assets = {

};



const toc = [{
  "value": "概述",
  "id": "概述",
  "level": 2
}, {
  "value": "功能全景",
  "id": "功能全景",
  "level": 2
}, {
  "value": "使用ArkTS接口进行UI测试",
  "id": "使用arkts接口进行ui测试",
  "level": 2
}, {
  "value": "UI测试示例",
  "id": "ui测试示例",
  "level": 3
}, {
  "value": "控件查找与操作",
  "id": "控件查找与操作",
  "level": 3
}, {
  "value": "模拟触摸屏手指操作",
  "id": "模拟触摸屏手指操作",
  "level": 3
}, {
  "value": "页面加载等待",
  "id": "页面加载等待",
  "level": 3
}, {
  "value": "模拟文本输入",
  "id": "模拟文本输入",
  "level": 3
}, {
  "value": "截图",
  "id": "截图",
  "level": 3
}, {
  "value": "UI事件监听",
  "id": "ui事件监听",
  "level": 3
}, {
  "value": "模拟键鼠操作",
  "id": "模拟键鼠操作",
  "level": 3
}, {
  "value": "窗口查找与操作",
  "id": "窗口查找与操作",
  "level": 3
}, {
  "value": "模拟触摸板操作",
  "id": "模拟触摸板操作",
  "level": 3
}, {
  "value": "模拟手写笔操作",
  "id": "模拟手写笔操作",
  "level": 3
}, {
  "value": "模拟表冠操作",
  "id": "模拟表冠操作",
  "level": 3
}, {
  "value": "屏幕显示操作",
  "id": "屏幕显示操作",
  "level": 3
}, {
  "value": "基于命令行进行UI测试",
  "id": "基于命令行进行ui测试",
  "level": 2
}, {
  "value": "环境要求",
  "id": "环境要求",
  "level": 3
}, {
  "value": "命令列表",
  "id": "命令列表",
  "level": 3
}, {
  "value": "获取截图",
  "id": "获取截图",
  "level": 3
}, {
  "value": "获取控件树",
  "id": "获取控件树",
  "level": 3
}, {
  "value": "录制界面操作",
  "id": "录制界面操作",
  "level": 3
}, {
  "value": "注入UI模拟操作",
  "id": "注入ui模拟操作",
  "level": 3
}, {
  "value": "获取版本信息",
  "id": "获取版本信息",
  "level": 3
}, {
  "value": "拉起UITest测试进程",
  "id": "拉起uitest测试进程",
  "level": 3
}, {
  "value": "常见问题",
  "id": "常见问题",
  "level": 2
}, {
  "value": "失败日志有“uitest-api does not allow calling concurrently”错误信息",
  "id": "失败日志有uitest-api-does-not-allow-calling-concurrently错误信息",
  "level": 3
}, {
  "value": "失败日志有“does not exist on current UI! Check if the UI has changed after you got the widget object”错误信息",
  "id": "失败日志有does-not-exist-on-current-ui-check-if-the-ui-has-changed-after-you-got-the-widget-object错误信息",
  "level": 3
}, {
  "value": "失败日志有“Cannot connect to AAMS, RET_ERR_CONNECTION_EXIST”错误信息",
  "id": "失败日志有cannot-connect-to-aams-ret_err_connection_exist错误信息",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    bundlename: "bundlename",
    code: "code",
    displayid: "displayid",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    savepath: "savepath",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    windowid: "windowid",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "ui测试框架使用指导",
        children: "UI测试框架使用指导"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "UI测试框架（UITest）为开发者提供UI界面查找和模拟操作能力，可覆盖UI自动化测试的关键场景，包括界面控件精准查找、UI交互操作（如点击、滑动、文本输入等）、外设行为模拟（如键盘输入、鼠标操作、触控板手势、手写笔动作等），助力开发者开发高效可靠的界面自动化测试用例。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "功能全景",
      children: "功能全景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "UITest支持采用ArkTS API与命令行两种方式，为界面自动化测试提供灵活高效的技术支撑，其中："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ArkTS脚本开发能力："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "提供简洁易用的API接口，满足各类测试场景需求，支持点击、双击、长按、滑动等常用UI交互操作，助力开发者快速开发基于界面交互逻辑的自动化测试脚本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "命令行测试能力："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "支持通过命令行直接实现多元化测试操作，包括获取当前界面截图、获取控件树、录制界面操作流程、便捷注入UI模拟事件等。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(345692)/* ["default"] */.A) + "",
        width: "858",
        height: "597"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "UITest分为客户端和服务端。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "· 客户端："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "包含跨语言通信层、IPC模块等，主要功能为对外导出API，为UI测试框架启动提供入口。客户端由测试应用加载，运行在应用进程。其中，跨语言通信层主要进行接口导出、JSON序列化对象处理、上层ArkTS接口与底层C++接口的转换、参数解析和校验。此外，由于本模块涉及C++层对ArkTS层回调函数的调用，跨语言通信层同时负责ArkTS回调函数的管理和调用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "· 服务端："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以独立进程运行，通过IPC与客户端进行通信。服务端启动后，通过广播与客户端建立连接，通过IPC通信确保连接不断开。服务端监听客户端进程状态，实现按需启停。服务端负责UI测试框架核心逻辑的处理，主要分为以下两部分："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "框架运行通用能力：进行IPC消息处理、进程管理、C++接口和错误码的管理，包括接口调用监听等。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "UI测试能力：解析无障碍节点构建页面控件树、控件匹配查找、操作事件构造、多模事件注入、UI事件监听、屏幕显示控制等。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用arkts接口进行ui测试",
      children: "使用ArkTS接口进行UI测试"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本章节介绍UI测试框架ArkTS API的具体使用方法。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["UI测试是在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ut/arkxtest-guidelines/unittest-guidelines",
        children: "单元测试"
      }), "基础上进行UITest接口调用，接口的详细定义与参数说明可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-debug-optimize-api/test-api/test-arkts/js-apis-uitest/js-apis-uitest",
        children: "API文档"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ui测试示例",
      children: "UI测试示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下面提供一个UI测试的简单示例，介绍如何在单元测试脚本基础上进行UI测试的增量开发，具体实现功能如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-debug-optimize-api/test-api/test-arkts/test-api-interface-depend/js-apis-inner-application-abilitydelegator/js-apis-inner-application-abilitydelegator",
          children: "程序框架服务"
        }), "能力，启动目标被测应用，并确认应用运行状态。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "调用UI测试框架能力，页面中执行点击操作。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ut/arkxtest-guidelines/unittest-guidelines#%E6%96%AD%E8%A8%80%E8%83%BD%E5%8A%9B",
          children: "添加断言"
        }), "，验证操作后当前页面的实际变化是否与预期结果一致。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发步骤如下:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在main > ets > pages文件夹下编写clickToAfter.ets页面代码，作为被测示例demo。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Entry\n@Component\nstruct Index {\n  @State message: string = 'Hello World';\n  @State text: string = '';\n\n  build() {\n    Row() {\n      Column() {\n        Text(this.message)\n          .fontSize(50)\n          .fontWeight(FontWeight.Bold)\n        Text('Next')\n          .fontSize(50)\n          .margin({ top: 20 })\n          .fontWeight(FontWeight.Bold)\n          .onClick((event?: ClickEvent) => {\n            if (event) {\n              this.text = 'after click';\n            }\n          })\n          .width('100%')\n        Text(this.text).margin(15)\n      }\n    }\n    .height('100%')\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在ohosTest > ets > test文件夹下新建测试文件，并编写具体测试代码。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { describe, expect, it, Level } from '@ohos/hypium';\n// 导入测试依赖kit\nimport { abilityDelegatorRegistry, Driver, ON } from '@kit.TestKit';\nimport { UIAbility, Want } from '@kit.AbilityKit';\n\nconst delegator: abilityDelegatorRegistry.AbilityDelegator = abilityDelegatorRegistry.getAbilityDelegator();\n\nexport default function abilityTest() {\n  describe('ActsAbilityTest', () => {\n    it('testUiExample', Level.LEVEL3, async (done: Function) => {\n      // 初始化Driver对象\n      const driver = Driver.create();\n      const bundleName = abilityDelegatorRegistry.getArguments().bundleName;\n      // 指定被测应用包名、ability名，请开发者替换为被测应用包名和ability名\n      const want: Want = {\n        bundleName: bundleName,\n        abilityName: 'EntryAbility'\n      }\n      // 拉起被测应用\n      await delegator.startAbility(want);\n      // 等待应用拉起完成\n      await driver.waitForIdle(4000, 5000);\n      // 确认当前应用顶部Ability为指定的ability\n      const ability: UIAbility = await delegator.getCurrentTopAbility();\n      expect(ability.context.abilityInfo.name).assertEqual('EntryAbility');\n\n      // 依据指定文本“Next”查找目标控件\n      const next = await driver.findComponent(ON.text('Next'));\n      // 点击目标控件\n      await next.click();\n      await driver.waitForIdle(4000, 5000);\n      // 通过断言文本为“after click”的控件存在，确认操作后页面变化符合预期\n      await driver.assertComponentExist(ON.text('after click'));\n      await driver.pressBack();\n      done();\n    })\n  })\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "控件查找与操作",
      children: "控件查找与操作"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["UITest支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-debug-optimize-api/test-api/test-arkts/js-apis-uitest/js-apis-uitest#on9",
        children: "依据多种属性构造匹配器"
      }), "进行控件查找；支持查找当前页面符合匹配条件的单个或多个目标控件，并返回控件对象；支持在滚动组件内部进行滚动查找目标控件；支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-debug-optimize-api/test-api/test-arkts/js-apis-uitest/js-apis-uitest#component9",
        children: "对控件对象进行操作或获取控件的属性信息"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如下给出控件查找与操作的示例，下面代码执行前请参考UI测试示例，实现对应的Index.ets页面代码。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { describe, it, TestType } from '@ohos/hypium';\n// 导入测试依赖kit\nimport { Component, Driver, ON, On } from '@kit.TestKit';\n\nexport default function abilityTest() {\n  describe('componentOperationTest', () => {\n    /**\n     * 查找类型为'Button'的控件，并进行控件点击操作\n     */\n    it('componentSearchAndOperation', TestType.FUNCTION, async () => {\n      let driver: Driver = Driver.create();\n      await driver.delayMs(1000);\n      let button: Component = await driver.findComponent(ON.type('Button'));\n      await button.click();\n    })\n\n    /**\n     * 利用相对位置查找控件，查找'Scroll'类型控件中文本内容为'123'的控件\n     */\n    it('relativePositioncomponentSearch', TestType.FUNCTION, async () => {\n      let driver: Driver = Driver.create();\n      let on: On = ON.text('123').within(ON.type('Scroll'));\n      let items: Array<Component> = await driver.findComponents(on);\n    })\n\n    /**\n     * 查找类型为'Image'的控件，并进行对其进行双指放大操作\n     */\n    it('componentPinch', TestType.FUNCTION, async () => {\n      let driver: Driver = Driver.create();\n      let image: Component = await driver.findComponent(ON.type('Image'));\n      await image.pinchOut(1.5);\n    })\n  })\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "模拟触摸屏手指操作",
      children: "模拟触摸屏手指操作"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "UITest支持模拟包括点击、双击、长按、滑动、拖拽、多指操作等事件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如下给出触摸屏坐标级的手指操作模拟的示例，下面代码执行前请参考UI测试示例，实现对应的Index.ets页面代码。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { describe, it, Level, Size, TestType } from '@ohos/hypium';\n// 导入测试依赖kit\nimport { Driver, PointerMatrix, UiDirection } from '@kit.TestKit';\n\nexport default function abilityTest() {\n  describe('touchScreen_sample', () => {\n    /**\n     * 基于坐标的触摸屏手指操作\n     */\n    it('touchScreenOperation', TestType.FUNCTION, async () => {\n      let driver: Driver = Driver.create();\n      // 单击\n      await driver.click(100, 100);\n      // 指定屏幕id进行单击，从API version 20开始支持\n      await driver.clickAt({ x: 100, y: 100, displayId: 0 });\n      // 滑动\n      await driver.swipe(100, 100, 200, 200, 600);\n      // 指定屏幕id进行滑动，从API version 20开始支持\n      await driver.swipeBetween({ x: 100, y: 100, displayId: 0 }, { x: 1000, y: 1000, displayId: 0 }, 800);\n      // 抛滑\n      await driver.fling({ x: 100, y: 100 }, { x: 200, y: 200 }, 5, 600);\n      // 指定方向的抛滑\n      await driver.fling(UiDirection.DOWN, 10000);\n      // 拖拽\n      await driver.drag(100, 100, 200, 200, 600);\n      // 指定屏幕id和拖拽移动前的长按时间，从API version 20开始支持\n      await driver.dragBetween({ x: 100, y: 100, displayId: 0 }, { x: 1000, y: 1000, displayId: 0 }, 800, 1500);\n      // 多指操作，指定使用两根手指，每根手指基于两个坐标点滑动\n      let pointers: PointerMatrix = PointerMatrix.create(2, 2);\n      pointers.setPoint(0, 0, { x: 100, y: 100 });\n      pointers.setPoint(0, 1, { x: 200, y: 100 });\n      pointers.setPoint(1, 0, { x: 100, y: 200 });\n      pointers.setPoint(1, 1, { x: 200, y: 200 });\n      await driver.injectMultiPointerAction(pointers);\n    })\n  })\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "页面加载等待",
      children: "页面加载等待"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在与页面进行交互后，可通过在指定时间内等待某控件的出现或等待页面空闲来判断页面跳转是否完成。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如下给出页面加载等待的示例，下面代码执行前请参考UI测试示例，实现对应的Index.ets页面代码。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { describe, it, Level, Size, TestType } from '@ohos/hypium';\n// 导入测试依赖kit\nimport { abilityDelegatorRegistry, Driver, ON } from '@kit.TestKit';\n\nconst delegator: abilityDelegatorRegistry.AbilityDelegator = abilityDelegatorRegistry.getAbilityDelegator();\n// 指定被测应用包名、ability名，请开发者替换为被测应用包名和ability名\nconst bundleName: string = 'com.uitestScene.acts';\nconst abilityName: string = 'com.uitestScene.acts.MainAbility';\n\nexport default function abilityTest() {\n  describe('waitForComp_sample', () => {\n    it('testWaitForComponent_static', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL3,\n      async (done: Function): Promise<void> => {\n        let driver = Driver.create();\n        // 拉起目标应用\n        await delegator.executeShellCommand(`aa start -b ${bundleName} -a ${abilityName}`).then(result => {\n        }).catch((err: Error) => {\n          done();\n        })\n        // 通过等待目标应用首页上的指定控件出现，判断应用拉起完成\n        let button = await driver.waitForComponent(ON.text('StartAbility Success!'), 1000);\n      })\n  })\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "模拟文本输入",
      children: "模拟文本输入"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["UITest支持向指定坐标点或指定控件输入文本内容，同时支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-debug-optimize-api/test-api/test-arkts/js-apis-uitest/js-apis-uitest#inputtextmode20",
        children: "指定输入方式"
      }), "：输入文本时是否以复制粘贴方式输入、是否以追加的方式进行输入。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如下给出文本输入的示例，包括基于控件的文本输入和基于坐标的文本输入两种方式。下面代码执行前请参考UI测试示例，实现对应的Index.ets页面代码。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { describe, it, Level, Size, TestType } from '@ohos/hypium';\n// 导入测试依赖kit\nimport { Driver, ON } from '@kit.TestKit';\n\nexport default function abilityTest() {\n  describe('inputTextTest', () => {\n    /**\n     * 基于控件的文本输入，调用接口会默认清空文本框中内容后输入指定文本\n     * 当输入文本中不包含中文、特殊字符，且文本长度不超过200字符时默认为逐字键入\n     */\n    it('componentInputText', TestType.FUNCTION, async () => {\n      let driver = Driver.create();\n      let input = await driver.findComponent(ON.type('TextInput'));\n      await input.inputText('abc');\n    })\n    /**\n     * 基于控件的文本输入，指定以复制粘贴方式注入输入指定文本\n     * 指定以追加方式输入，即在输入文本签不清空原有内容\n     */\n    it('componentInputTextAddition', TestType.FUNCTION, async () => {\n      let driver = Driver.create();\n      let input = await driver.findComponent(ON.type('TextInput'));\n      // 该接口从API version 20开始支持\n      await input.inputText('abc', { paste: true, addition: true });\n    })\n\n    /**\n     * 基于坐标的文本输入，点击指定位置使输入框获焦，并在光标处输入指定文本\n     * 当输入文本中不包含中文、特殊字符，且文本长度不超过200字符时默认为逐字键入\n     */\n    it('pointInputText', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL3, async () => {\n      let driver = Driver.create();\n      let input = await driver.findComponent(ON.type('TextInput'));\n      let center = await input.getBoundsCenter();\n      await driver.inputText(center, 'abc');\n    })\n\n    /**\n     * 基于坐标的文本输入，指定以复制粘贴方式注入输入指定文本\n     * 指定以追加方式输入，即点击指定位置使输入框获焦后将光标移动至原有文本末尾后输入\n     */\n    it('pointInputTextAddition', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL3, async () => {\n      let driver = Driver.create();\n      let input = await driver.findComponent(ON.type('TextInput'));\n      let center = await input.getBoundsCenter();\n      // 该接口从API version 20开始支持\n      await driver.inputText(center, '123', { paste: true, addition: true });\n    })\n\n    /**\n     * 基于坐标的文本输入，指定以复制粘贴方式注入输入指定文本\n     * 指定以追加方式输入，即点击指定位置使输入框获焦后将光标移动至原有文本末尾后输入\n     * 当输入内容包含中文或特殊字符时，仅支持以复制粘贴方式输入文本，'paste'字段不生效\n     */\n    it('pointInputTextChinese', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL3, async () => {\n      let driver = Driver.create();\n      let input = await driver.findComponent(ON.type('TextInput'));\n      let center = await input.getBoundsCenter();\n      // 该接口从API version 20开始支持\n      await driver.inputText(center, '你好', { paste: false, addition: true });\n    })\n  })\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "截图",
      children: "截图"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(585073)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["指定截图文件保存路径，路径需为当前应用的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/core-file-kit/app-file/app-sandbox-directory",
          children: "沙箱路径"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["测试HAP的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-security/access-control/app-permission-mgmt/app-permission-mgmt-overview#%E6%9D%83%E9%99%90%E6%9C%BA%E5%88%B6%E4%B8%AD%E7%9A%84%E5%9F%BA%E6%9C%AC%E6%A6%82%E5%BF%B5",
          children: "APL等级级别"
        }), "为normal，对应要求使用用户级加密区的应用沙箱路径。且需指定将文件保存在应用在本设备上存放持久化数据的子目录。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如下给出屏幕截图的示例，指定屏幕id和截取屏幕区域，并将截图保存到指定路径下。下面代码执行前请参考UI测试示例，实现对应的Index.ets页面代码。多屏场景下，期望对指定屏幕做截图操作时，可以调用display模块的接口", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/display-manager/screenproperty-guideline#%E8%8E%B7%E5%8F%96display%E5%AF%B9%E8%B1%A1",
        children: "获取Display对象"
      }), "，实现", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/display-manager/screenproperty-guideline#%E8%8E%B7%E5%8F%96%E5%B1%8F%E5%B9%95%E7%9B%B8%E5%85%B3%E5%B1%9E%E6%80%A7",
        children: "屏幕相关属性获取"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { describe, it, Level, Size, TestType } from '@ohos/hypium';\n// 导入测试依赖kit\nimport { Driver } from '@kit.TestKit';\nimport { display } from '@kit.ArkUI';\n\nexport default function abilityTest() {\n  describe('screenCap_sample', () => {\n    /**\n     * 截取指定区域的屏幕，并保存到指定路径\n     */\n    it('screenCapture', TestType.FUNCTION, async () => {\n      let driver = Driver.create();\n      // 应用沙箱路径，el2为用户级加密区，base为应用在本设备上存放持久化数据的子目录\n      // 请开发者使用时替换为实际的路径\n      let savePath = '/data/storage/el2/base/cache/1.png';\n      let res = await driver.screenCapture(savePath, {\n        left: 0,\n        top: 0,\n        right: 100,\n        bottom: 100\n      });\n    })\n\n    /**\n     * 截取指定屏幕id的屏幕全屏，并保存到指定路径\n     */\n    it('screenCapWithId', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL3, async () => {\n      let driver = Driver.create();\n      // 获取默认屏幕对象\n      let disPlay = display.getDefaultDisplaySync();\n      let savePath = '/data/storage/el2/base/cache/1.png';\n      // 从API version 20开始支持\n      let res = await driver.screenCap(savePath, disPlay.id); // 获取默认屏幕ID属性\n    })\n  })\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ui事件监听",
      children: "UI事件监听"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如下给出UI界面事件的监听的示例，设置监听回调函数，监听toast、dialog等控件的出现，等待事件发生后进行下一步操作。下面代码执行前请参考UI测试示例，实现对应的Index.ets页面代码。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { describe, it, TestType } from '@ohos/hypium';\n// 导入测试依赖kit\nimport { Driver, UIElementInfo } from '@kit.TestKit';\n\nexport default function abilityTest() {\n  describe('eventObserver_sample', () => {\n    // 监听Toast控件出现\n    it('toastObserver', TestType.FUNCTION, async () => {\n      let driver = Driver.create();\n      let observer = driver.createUIEventObserver();\n      let callback = (uiElementInfo: UIElementInfo) => {\n        let bundleName = uiElementInfo.bundleName;\n        let text = uiElementInfo.text;\n        let type = uiElementInfo.type;\n      }\n      observer.once('toastShow', callback);\n    })\n  })\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "模拟键鼠操作",
      children: "模拟键鼠操作"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如下给出键鼠模拟操作，包括键盘按键、组合键输入操作的示例，包括鼠标点击、移动、拖拽操作和键鼠组合操作等。下面代码执行前请参考UI测试示例，实现对应的Index.ets页面代码。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { describe, it, Level, Size, TestType } from '@ohos/hypium';\n// 导入测试依赖kit\nimport { Driver, MouseButton } from '@kit.TestKit';\nimport { KeyCode } from '@kit.InputKit';\n\nexport default function abilityTest() {\n  describe('mouseAndKey_sample', () => {\n    // 模拟键盘按键输入、组合键输入\n    it('keyBoardOperation', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL3, async () => {\n      let driver = Driver.create();\n      // 键盘按键输入（注入返回键）\n      await driver.triggerKey(KeyCode.KEYCODE_BACK);\n      // 键盘组合键输入（注入保存组合键）\n      await driver.triggerCombineKeys(KeyCode.KEYCODE_CTRL_LEFT, KeyCode.KEYCODE_S);\n    })\n\n    // 模拟鼠标左键单击、鼠标移动、鼠标拖拽操作\n    it('mouseOperation', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL3, async () => {\n      let driver = Driver.create();\n      // 鼠标左键单击\n      await driver.mouseClick({ x: 100, y: 100 }, MouseButton.MOUSE_BUTTON_LEFT);\n      // 鼠标移动\n      await driver.mouseMoveTo({ x: 100, y: 100 });\n      // 鼠标拖拽\n      await driver.mouseDrag({ x: 100, y: 100 }, { x: 200, y: 200 }, 600);\n    })\n\n    // 模拟键盘、鼠标组合操作\n    it('combinedOperation', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL3, async () => {\n      let driver = Driver.create();\n      // 按下左CTRL键，同时鼠标滚轮滚动\n      await driver.mouseScroll({ x: 100, y: 100 }, true, 30, KeyCode.KEYCODE_CTRL_LEFT);\n      // 按下左CTRL键，同时鼠标左键长按\n      await driver.mouseLongClick({ x: 100, y: 100 }, MouseButton.MOUSE_BUTTON_LEFT, KeyCode.KEYCODE_CTRL_LEFT);\n    })\n  })\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "窗口查找与操作",
      children: "窗口查找与操作"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如下给出窗口查找和操作的示例，根据窗口属性查找窗口，并进行窗口最小化等操作。下面代码执行前请参考UI测试示例，实现对应的Index.ets页面代码。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { describe, expect, it, TestType } from '@ohos/hypium';\n// 导入测试依赖kit\nimport { Driver } from '@kit.TestKit';\n\n// 设备不支持时的错误代码\nconst DeviceErrorCode = 17000005;\n\nexport default function abilityTest() {\n  describe('findWindowAndOp_sample', () => {\n    // 根据指定条件查找活跃窗口，并对其进行窗口最小化操作\n    it('windowSearchAndOperation', TestType.FUNCTION, async () => {\n      let driver = Driver.create();\n      try {\n        let window = await driver.findWindow({ active: true });\n        await window.minimize();\n      } catch (error) {\n        // 在不支持窗口操作的设备上调用minimize接口操作窗口时，将抛出17000005错误码\n        expect(error.code).assertEqual(DeviceErrorCode);\n      }\n    })\n  })\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "模拟触摸板操作",
      children: "模拟触摸板操作"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如下给出触摸板模拟操作的示例，触摸板三指上滑返回桌面，三指下滑恢复应用窗口。下面代码执行前请参考UI测试示例，实现对应的Index.ets页面代码。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { describe, expect, it, Level, Size, TestType } from '@ohos/hypium';\n// 导入测试依赖kit\nimport { Driver, UiDirection } from '@kit.TestKit';\n\n// 设备不支持时的错误代码\nconst DeviceErrorCode = 17000005;\n\nexport default function abilityTest() {\n  describe('touchPadOp_sample', () => {\n    // PC/2in1场景，模拟触摸板三指上滑（界面返回桌面），三指下滑（界面恢复窗口）操作\n    it('touchPadOperation', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL3, async () => {\n      let driver = Driver.create();\n      try {\n        // 触摸板三指上滑返回桌面\n        await driver.touchPadMultiFingerSwipe(3, UiDirection.UP);\n        // 触摸板三指下滑恢复窗口\n        await driver.touchPadMultiFingerSwipe(3, UiDirection.DOWN);\n      } catch (error) {\n        // 在不支持触摸板操作的设备上调用时，将抛出17000005错误码\n        expect(error.code).assertEqual(DeviceErrorCode);\n      }\n    })\n  })\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "模拟手写笔操作",
      children: "模拟手写笔操作"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如下给出手写笔模拟操作，包括点击、滑动等操作的示例，支持设置操作时的压力值大小。下面代码执行前请参考UI测试示例，实现对应的Index.ets页面代码。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { describe, it, Level, Size, TestType } from '@ohos/hypium';\n// 导入测试依赖kit\nimport { Driver } from '@kit.TestKit';\n\nexport default function abilityTest() {\n  describe('penOp_sample', () => {\n    // 模拟手写笔单击、双击、长按、滑动操作\n    it('penOperation', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL3, async () => {\n      let driver = Driver.create();\n      // 手写笔单击\n      await driver.penClick({ x: 100, y: 100 });\n      // 手写笔双击\n      await driver.penDoubleClick({ x: 100, y: 100 });\n      // 手写笔长按\n      await driver.penLongClick({ x: 100, y: 100 }, 0.5);\n      // 手写笔滑动\n      await driver.penSwipe({ x: 100, y: 100 }, { x: 100, y: 500 }, 600, 0.5);\n    })\n  })\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "模拟表冠操作",
      children: "模拟表冠操作"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如下给出表冠模拟操作的示例，包括表冠的顺/逆时针旋转。下面代码执行前请参考UI测试示例，实现对应的Index.ets页面代码。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { describe, expect, it, Level, Size, TestType } from '@ohos/hypium';\n// 导入测试依赖kit\nimport { Driver } from '@kit.TestKit';\n\n// 设备不支持时的错误代码\nconst CapabilityCode = 801;\n\nexport default function abilityTest() {\n  describe('watchOp_sample', () => {\n    // 手表场景，模拟表冠顺/逆时针旋转，从API version 20开始支持\n    it('crownRotate', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL3, async () => {\n      let driver = Driver.create();\n      try {\n        // 顺时针旋转50格，旋转速度为30格/秒\n        await driver.crownRotate(50, 30);\n        // 逆时针旋转20格，旋转速度为30格/秒\n        await driver.crownRotate(-20, 30);\n      } catch (error) {\n        // driver.crownRotate接口仅在智能表设备上生效，其他设备调用时将抛出801错误码\n        expect(error.code).assertEqual(CapabilityCode);\n      }\n    })\n  })\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "屏幕显示操作",
      children: "屏幕显示操作"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如下给出屏幕显示操作的示例，包括获取屏幕大小、分辨率等属性和屏幕唤醒、屏幕旋转等操作。下面代码执行前请参考UI测试示例，实现对应的Index.ets页面代码。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { describe, it, Level, Size, TestType } from '@ohos/hypium';\n// 导入测试依赖kit\nimport { DisplayRotation, Driver, Point } from '@kit.TestKit';\n\nexport default function abilityTest() {\n  describe('displayOp_sample', () => {\n    // 屏幕属性获取和屏幕操作\n    it('displayOperation', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL3, async () => {\n      let driver = Driver.create();\n      // 获取屏幕大小\n      let size: Point = await driver.getDisplaySize();\n      // 获取屏幕清晰度\n      let density: Point = await driver.getDisplayDensity();\n      // 唤醒屏幕\n      await driver.wakeUpDisplay();\n      // 屏幕顺时针旋转90度\n      await driver.setDisplayRotation(DisplayRotation.ROTATION_90);\n    })\n  })\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基于命令行进行ui测试",
      children: "基于命令行进行UI测试"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在开发阶段，如果需要快速执行截图、界面操作录制、UI模拟操作注入、控件树获取等测试相关操作，可借助命令行实现，提升测试效率。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "环境要求",
      children: "环境要求"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["根据hdc命令行工具指导，完成", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-debug-optimize/debugging-commands/hdc#%E7%8E%AF%E5%A2%83%E5%87%86%E5%A4%87",
        children: "环境准备"
      }), "。确保设备已成功连接，并执行hdc shell。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "命令列表",
      children: "命令列表"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "命令"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "help"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "显示UITest工具能够支持的命令信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "screenCap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[-p] [-d]"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["截图。  各参数代表的含义请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E8%8E%B7%E5%8F%96%E6%88%AA%E5%9B%BE",
              children: "获取截图"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dumpLayout"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[-p] <-i"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-a"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uiRecord"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "<record"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "read>"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uiInput"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "<help"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "click"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--version"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取当前UITest工具版本信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "start-daemon"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "拉起UITest测试进程。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "获取截图",
      children: "获取截图"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "二级参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-p"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.savepath, {})
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定存储路径和文件名，只支持存放在'/data/local/tmp/'下。默认存储路径：'/data/local/tmp'，文件名：'时间戳 + .png'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-d"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.displayid, {})
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["多屏场景下，获取指定ID屏幕下的截图。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 从API version 20开始支持该命令。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# 存储路径：/data/local/tmp，文件名：时间戳 + .png。\nhdc shell uitest screenCap\n# 指定存储路径和文件名，存放在/data/local/tmp/下。\nhdc shell uitest screenCap -p /data/local/tmp/1.png\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "获取控件树",
      children: "获取控件树"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "二级参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-p"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.savepath, {})
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定存储路径和文件名，只支持存放在'/data/local/tmp/'下。默认存储路径：'/data/local/tmp'，文件名：'时间戳 + .json'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-i"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不过滤不可见控件，也不做窗口合并。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-a"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["保存控件的BackgroundColor、Content、FontColor、FontSize、extraAttrs属性数据。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            }), " ：默认不保存上述属性数据， ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "-a和-i不可同时使用。"
              })
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-b"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.bundlename, {})
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取指定包名对应目标窗口的控件树信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-w"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.windowid, {})
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取指定ID目标窗口的控件树信息。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明:"
              })
            }), "  可通过hidumper工具", (0,jsx_runtime.jsx)(_components.a, {
              href: "/system-debug-optimize/debugging-commands/hidumper-tool/hidumper#%E8%8E%B7%E5%8F%96%E5%BA%94%E7%94%A8%E7%AA%97%E5%8F%A3%E4%BF%A1%E6%81%AF",
              children: "获取应用窗口信息"
            }), ", 包含应用对应窗口的id。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-m"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "<true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false>"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-d"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.displayid, {})
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["多屏场景下，获取指定ID屏幕下的控件树。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  1. 从API version 20开始支持该命令。  2. 可通过hidumper工具", (0,jsx_runtime.jsx)(_components.a, {
              href: "/system-debug-optimize/debugging-commands/hidumper-tool/hidumper#%E8%8E%B7%E5%8F%96%E5%BA%94%E7%94%A8%E7%AA%97%E5%8F%A3%E4%BF%A1%E6%81%AF",
              children: "获取应用窗口信息"
            }), "，包含应用对应窗口的DisplayId。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# 指定存储路径和文件名，存放在/data/local/tmp/下。\nhdc shell uitest dumpLayout -p /data/local/tmp/1.json\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "录制界面操作",
      children: "录制界面操作"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(608601)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "录制过程中，需等待当前操作的识别结果在命令行输出后，再进行下一步操作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数列表"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "二级参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-W"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "<true/false>"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["录制过程中是否保存操作坐标对应的控件信息到/data/local/tmp/record.csv文件中。true表示保存控件信息，false表示仅记录坐标信息，不设置时默认为true。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 从API version 20开始支持该命令。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-l"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["在每次操作后保存当前布局信息，文件保存路径：/data/local/tmp/layout_录制启动时间戳_操作序号.json。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 从API version 20开始支持该命令。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-c"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "<true/false>"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["是否将录制到的操作事件信息打印到控制台，true表示打印，false表示打印，不设置时默认为true。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 从API version 20开始支持该命令。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# 将当前界面操作记录到/data/local/tmp/record.csv，结束录制操作使用Ctrl+C结束录制。\nhdc shell uitest uiRecord record\n# 录制时仅记录操作的坐标，不匹配目标控件。\nhdc shell uitest uiRecord record -W false\n# 每次操作后，保存页面布局，文件保存路径：/data/local/tmp/layout_录制启动时间戳_操作序号.json。\nhdc shell uitest uiRecord record -l\n# 录制到的操作事件信息不打印到控制台。\nhdc shell uitest uiRecord record -c false\n# 读取并打印录制数据。\nhdc shell uitest uiRecord read\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "录制数据中字段及含义如下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"ABILITY\": \"com.ohos.launcher.MainAbility\", // 被操作应用对应的Ability名称\n  \"BUNDLE\": \"com.ohos.launcher\", // 被操作应用对应的包名\n  \"CENTER_X\": \"\", // 预留字段，暂未使用\n  \"CENTER_Y\": \"\", // 预留字段，暂未使用\n  \"EVENT_TYPE\": \"pointer\", // 操作类型\n  \"LENGTH\": \"0\", // 总体步长\n  \"OP_TYPE\": \"click\", // 事件类型，当前支持点击、双击、长按、拖拽、滑动、抛滑动作录制\n  \"VELO\": \"0.000000\", // 离手速度\n  \"direction.X\": \"0.000000\",// 总体移动X方向\n  \"direction.Y\": \"0.000000\", // 总体移动Y方向\n  \"duration\": 33885000.0, // 手势操作持续时间\n  \"fingerList\": [{\n    \"LENGTH\": \"0\", // 总体步长\n    \"MAX_VEL\": \"40000\", // 最大速度\n    \"VELO\": \"0.000000\", // 离手速度\n    \"W1_BOUNDS\": \"{\"bottom\":361,\"left\":37,\"right\":118,\"top\":280}\", // 起点控件边界\n    \"W1_HIER\": \"ROOT,3,0,0,0,0,0,0,0,0,5,0,0,0,0,0,0,0\", // 起点控件页面层级\n    \"W1_ID\": \"\", // 起点控件id\n    \"W1_Text\": \"\", // 起点控件text\n    \"W1_Type\": \"Image\", // 起点控件类型\n    \"W2_BOUNDS\": \"{\"bottom\":361,\"left\":37,\"right\":118,\"top\":280}\", // 终点控件边界\n    \"W2_HIER\": \"ROOT,3,0,0,0,0,0,0,0,0,5,0,0,0,0,0,0,0\", // 终点控件页面层级\n    \"W2_ID\": \"\", // 终点控件id\n    \"W2_Text\": \"\", // 终点控件text\n    \"W2_Type\": \"Image\", // 终点控件类型\n    \"X2_POSI\": \"47\", // 终点X\n    \"X_POSI\": \"47\", // 起点X\n    \"Y2_POSI\": \"301\", // 终点Y\n    \"Y_POSI\": \"301\", // 起点Y\n    \"direction.X\": \"0.000000\", // X方向移动量\n    \"direction.Y\": \"0.000000\" // Y方向移动量\n  }],\n  \"fingerNumber\": \"1\" // 手指数量\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "注入ui模拟操作",
      children: "注入UI模拟操作"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "help"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uiInput命令相关帮助信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "click"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["模拟单击操作。具体请参考下方", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "uiInput-click/doubleClick/longClick使用示例"
              })
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "doubleClick"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["模拟双击操作。具体请参考下方", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "uiInput click/doubleClick/longClick使用示例"
              })
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "longClick"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["模拟长按操作。具体请参考下方", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "uiInput click/doubleClick/longClick使用示例"
              })
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fling"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["模拟快滑操作，即操作结束后页面存在惯性滚动。具体请参考下方", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "uiInput fling使用示例"
              })
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "swipe"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["模拟慢滑操作。具体请参考下方", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "uiInput swipe/drag使用示例"
              })
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "drag"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["模拟拖拽操作。具体请参考下方", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "uiInput swipe/drag使用示例"
              })
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dircFling"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["模拟指定方向滑动操作。具体请参考下方", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "uiInput dircFling使用示例"
              })
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "inputText"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指定坐标点，模拟输入框输入文本操作。具体请参考下方", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "uiInput inputText使用示例"
              })
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "text"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["无需指定坐标点，在当前获焦处，模拟输入框输入文本操作。具体请参考下方", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "uiInput text使用示例"
              })
            }), "。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 从API version 18开始支持该命令。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "keyEvent"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["模拟实体按键事件（如：键盘，电源键，返回上一级，返回桌面等），以及组合按键操作。具体请参考下方", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "uiInput keyEvent使用示例"
              })
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "uiInput-click/doubleClick/longClick使用示例"
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "point_x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "点击x坐标点。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "point_y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "点击y坐标点。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# 执行单击事件。\nhdc shell uitest uiInput click 100 100\n\n# 执行双击事件。\nhdc shell uitest uiInput doubleClick 100 100\n\n# 执行长按事件。\nhdc shell uitest uiInput longClick 100 100\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "uiInput fling使用示例"
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "from_x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "滑动起点x坐标。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "from_y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "滑动起点y坐标。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "to_x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "滑动终点x坐标。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "to_y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "滑动终点y坐标。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "swipeVelocityPps_"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "滑动速度，单位：px/s，取值范围：200-40000。  默认值：600。取值超出限定范围时，取默认值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "stepLength_"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["滑动步长，单位：px。默认值：滑动距离/50。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  滑动距离根据入参给出的滑动起止坐标点计算得出。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "为实现更好的模拟效果，推荐参数缺省/使用默认值。"
              })
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# 执行快滑操作，stepLength_缺省。\nhdc shell uitest uiInput fling 10 10 200 200 500\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "uiInput swipe/drag使用示例"
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "from_x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "滑动起点x坐标。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "from_y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "滑动起点y坐标。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "to_x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "滑动终点x坐标。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "to_y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "滑动终点y坐标。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "swipeVelocityPps_"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "滑动速度，单位：px/s，取值范围：200-40000。  默认值：600。取值超出限定范围时，取默认值。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# 执行慢滑操作。\nhdc shell uitest uiInput swipe 10 10 200 200 500\n\n# 执行拖拽操作。\nhdc shell uitest uiInput drag 10 10 100 100 500\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "uiInput dircFling使用示例"
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "direction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "滑动方向，取值范围：[0,1,2,3]，默认值为0。  0代表向左滑动，1代表向右滑动，2代表向上滑动，3代表向下滑动。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "swipeVelocityPps_"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["滑动速度，单位：px/s，取值范围：200-40000。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "默认值"
              })
            }), ": 600。取值超出限定范围时，取默认值。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "stepLength"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["滑动步长，单位：px。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "默认值"
              })
            }), "： 如果滑动方向为0、1，默认值为屏幕宽度/200； 如果滑动方向为2、3，默认值为屏幕高度/200。为更好的模拟效果，推荐参数缺省/使用默认值。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# 执行左滑操作。\nhdc shell uitest uiInput dircFling 0 500\n# 执行向右滑动操作。\nhdc shell uitest uiInput dircFling 1 600\n# 执行向上滑动操作。\nhdc shell uitest uiInput dircFling 2\n# 执行向下滑动操作。\nhdc shell uitest uiInput dircFling 3\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "uiInput inputText使用示例"
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "point_x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入框x坐标点。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "point_y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入框y坐标点。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "text"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入文本内容。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# 执行输入框输入操作。\nhdc shell uitest uiInput inputText 100 100 hello\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "uiInput text使用示例"
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "text"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入文本内容。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# 无需输入坐标点，在当前获焦处，执行输入框输入操作。若当前获焦处不支持文本输入，则无实际效果。\nhdc shell uitest uiInput text hello\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "uiInput keyEvent使用示例"
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "keyID1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["实体按键对应ID，取值范围：Back、Home、Power、或", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-arkts/js-apis-keycode/js-apis-keycode#keycode",
              children: "KeyCode键码值"
            }), "。  当取值为Back、Home或Power时，不支持输入组合键。  当前注入大写锁定键（KeyCode=2074）无效，请使用组合键实现大写字母输入。如“按键shift+按键V”输入大写字母V。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "keyID2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["实体按键对应ID，取值范围：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-arkts/js-apis-keycode/js-apis-keycode#keycode",
              children: "KeyCode键码值"
            }), "，默认值为空。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "keyID3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["实体按键对应ID，取值范围：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-arkts/js-apis-keycode/js-apis-keycode#keycode",
              children: "KeyCode键码值"
            }), "，默认值为空。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# 返回主页。\nhdc shell uitest uiInput keyEvent Home\n# 返回。\nhdc shell uitest uiInput keyEvent Back\n# 组合键粘贴。\nhdc shell uitest uiInput keyEvent 2072 2038\n# 输入小写字母v。\nhdc shell uitest uiInput keyEvent 2038\n# 输入大写字母V。\nhdc shell uitest uiInput keyEvent 2047 2038\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "获取版本信息",
      children: "获取版本信息"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hdc shell uitest --version\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "拉起uitest测试进程",
      children: "拉起UITest测试进程"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(637558)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["仅元能力aa test拉起的测试HAP才能调用Uitest的能力，且测试HAP的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/access-control/app-permission-mgmt/app-permission-mgmt-overview#%E6%9D%83%E9%99%90%E6%9C%BA%E5%88%B6%E4%B8%AD%E7%9A%84%E5%9F%BA%E6%9C%AC%E6%A6%82%E5%BF%B5",
        children: "APL等级级别"
      }), "需为normal。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hdc shell uitest start-daemon\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "常见问题",
      children: "常见问题"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "失败日志有uitest-api-does-not-allow-calling-concurrently错误信息",
      children: "失败日志有“uitest-api does not allow calling concurrently”错误信息"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "问题描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "UI测试用例执行失败，查看hilog日志发现日志中有“uitest-api does not allow calling concurrently”错误信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "用例中UI测试框架提供异步接口没有增加await语法糖调用。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "多进程执行UI测试用例，导致拉起多个UITest进程，框架不支持多进程调用。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "解决方法"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查用例实现，异步接口增加await语法糖调用。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "避免多进程执行UI测试用例。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "失败日志有does-not-exist-on-current-ui-check-if-the-ui-has-changed-after-you-got-the-widget-object错误信息",
      children: "失败日志有“does not exist on current UI! Check if the UI has changed after you got the widget object”错误信息"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "问题描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "UI测试用例执行失败，查看hilog日志发现日志中有“does not exist on current UI! Check if the UI has changed after you got the widget object”错误信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在用例中代码查找到目标控件后，设备界面发生了变化，导致查找到的控件丢失，无法进行下一步的模拟操作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "解决方法"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "重新执行UI测试用例，确保进行模拟操作时控件在界面中存在。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "失败日志有cannot-connect-to-aams-ret_err_connection_exist错误信息",
      children: "失败日志有“Cannot connect to AAMS, RET_ERR_CONNECTION_EXIST”错误信息"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "问题描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "UI测试用例执行失败，查看hilog日志发现日志中有“Cannot connect to AAMS, RET_ERR_CONNECTION_EXIST”错误信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在用例执行的同时使用了其他依赖UI测试框架运行的测试工具。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "解决方法"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "关闭依赖UI测试框架运行的测试工具或重启设备。"
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
637558(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
608601(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
585073(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
345692(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002550617948-7387d2a18649dfd1daa935629d44b6ef.png");

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