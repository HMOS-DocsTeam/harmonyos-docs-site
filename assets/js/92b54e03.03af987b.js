"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["629172"], {
177777(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_state_management_arkts_state_management_uiutils_arkts_new_applysync_flushupdates_flushuiupdates_arkts_new_applysync_flushupdates_flushuiupdates_md_92b_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-state-management-arkts-state-management-uiutils-arkts-new-applysync-flushupdates-flushuiupdates-arkts-new-applysync-flushupdates-flushuiupdates-md-92b.json
var site_docs_arkui_arkts_ui_development_arkts_state_management_arkts_state_management_uiutils_arkts_new_applysync_flushupdates_flushuiupdates_arkts_new_applysync_flushupdates_flushuiupdates_md_92b_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-state-management/arkts-state-management-uiutils/arkts-new-applysync-flushupdates-flushuiupdates/arkts-new-applysync-flushupdates-flushuiupdates","title":"applySync/flushUpdates/flushUIUpdates接口：同步刷新","description":"为了实现状态管理V2与animateTo等动效的同步刷新，开发者可以使用applySync、flushUpdates或flushUIUpdates接口。","source":"@site/docs/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-uiutils/arkts-new-applysync-flushupdates-flushuiupdates/arkts-new-applysync-flushupdates-flushuiupdates.md","sourceDirName":"arkui/arkts-ui-development/arkts-state-management/arkts-state-management-uiutils/arkts-new-applysync-flushupdates-flushuiupdates","slug":"/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-uiutils/arkts-new-applysync-flushupdates-flushuiupdates/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-uiutils/arkts-new-applysync-flushupdates-flushuiupdates/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"applySync/flushUpdates/flushUIUpdates接口：同步刷新","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-new-applysync-flushupdates-flushuiupdates","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"addMonitor/clearMonitor接口：动态添加/取消监听","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-uiutils/arkts-new-addmonitor-clearmonitor/"},"next":{"title":"$$语法：系统组件双向同步","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-syntactic-sugar/arkts-two-way-sync/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-uiutils/arkts-new-applysync-flushupdates-flushuiupdates/arkts-new-applysync-flushupdates-flushuiupdates.md


const frontMatter = {
	title: 'applySync/flushUpdates/flushUIUpdates接口：同步刷新',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-new-applysync-flushupdates-flushuiupdates',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'applySync/flushUpdates/flushUIUpdates接口：同步刷新';

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
  "value": "使用场景",
  "id": "使用场景",
  "level": 2
}, {
  "value": "动效场景",
  "id": "动效场景",
  "level": 3
}, {
  "value": "路由场景",
  "id": "路由场景",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "applysyncflushupdatesflushuiupdates接口同步刷新",
        children: "applySync/flushUpdates/flushUIUpdates接口：同步刷新"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为了实现状态管理V2与", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext#animateto",
        children: "animateTo"
      }), "等动效的同步刷新，开发者可以使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-statemanagement/js-apis-statemanagement#applysync22",
        children: "applySync"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-statemanagement/js-apis-statemanagement#flushupdates22",
        children: "flushUpdates"
      }), "或", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-statemanagement/js-apis-statemanagement#flushuiupdates22",
        children: "flushUIUpdates"
      }), "接口。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(449313)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 22开始，开发者可以使用UIUtils中的applySync、flushUpdates和flushUIUpdates接口实现状态管理V2的同步标脏。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["与状态管理V1不同的是，状态管理V2修改完状态变量后不会立即", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-glossary#%E6%A0%87%E8%84%8Fmark-dirty",
        children: "标脏"
      }), "，而是抛出一个Promise微任务（优先级低于宏任务），该微任务在当前宏任务执行完成后才会处理自定义组件标脏，具体差异可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-v1-v2-update-difference#v1%E7%8A%B6%E6%80%81%E5%8F%98%E9%87%8F%E6%9B%B4%E6%96%B0%E5%92%8Cv2%E7%8A%B6%E6%80%81%E5%8F%98%E9%87%8F%E6%9B%B4%E6%96%B0%E5%B7%AE%E5%BC%82",
        children: "V1状态变量更新和V2状态变量更新差异"
      }), "。而animateTo动效会立刻刷新已标脏节点来决定动效首帧。如果动效中使用了V2状态变量，并且在动效前修改了该状态变量，由于调用animateTo时状态变量的变化尚未标脏，这会导致animateTo的动效首帧不符合预期。为此，引入applySync、flushUpdates和flushUIUpdates接口，实现状态管理V2的同步标脏，确保动效达到预期效果。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用applySync/flushUpdates/flushUIUpdates接口需要导入UIUtils工具。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { UIUtils } from '@kit.ArkUI';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用规则",
      children: "使用规则"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["applySync接口用于同步刷新指定的状态变量，该接口接收一个闭包函数，仅刷新闭包函数内的修改，包括更新", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-data-object-state/arkts-new-computed",
            children: "@Computed"
          }), "计算、", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-data-object-state/arkts-new-monitor",
            children: "@Monitor"
          }), "回调以及重新渲染UI节点。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { UIUtils } from '@kit.ArkUI';\n\n@Entry\n@ComponentV2\nstruct Index {\n  @Local w: number = 50; // 宽度\n  @Local h: number = 50; // 高度\n  @Local message: string = 'Hello';\n\n  @Monitor('message')\n  onMessageChange(monitor: IMonitor) {\n    monitor.dirty.forEach((path: string) => {\n      console.info(`${path} change from ${monitor.value(path)?.before} to ${monitor.value(path)?.now}`);\n    });\n  }\n\n  build() {\n    Column() {\n      Button('change size')\n        .margin(20)\n        .onClick(() => {\n          // 在执行动画前，存在额外的修改\n          UIUtils.applySync(() => {\n            this.w = 100;\n            this.h = 100;\n            this.message = 'Hello World';\n          });\n\n          this.getUIContext().animateTo({\n            duration: 1000\n          }, () => {\n            this.w = 200;\n            this.h = 200;\n            this.message = 'Hello ArkUI';\n          });\n        })\n        // ...\n      Column() {\n        Text(`${this.message}`)\n      }\n      .backgroundColor('#ff17a98d')\n      .width(this.w)\n      .height(this.h)\n    }\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(640026)/* ["default"] */.A) + "",
            width: "283",
            height: "326"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "flushUpdates接口用于同步刷新在调用该函数之前所有的状态变量修改，包括更新@Computed计算、@Monitor回调以及重新渲染UI节点。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { UIUtils } from '@kit.ArkUI';\n\n@Entry\n@ComponentV2\nstruct Index {\n  @Local w: number = 50; // 宽度\n  @Local h: number = 50; // 高度\n  @Local message: string = 'Hello';\n\n  @Monitor('message')\n  onMessageChange(monitor: IMonitor) {\n    monitor.dirty.forEach((path: string) => {\n      console.info(`${path} change from ${monitor.value(path)?.before} to ${monitor.value(path)?.now}`);\n    });\n  }\n\n  build() {\n    Column() {\n      Button('change size')\n        .margin(20)\n        .onClick(() => {\n          // 在执行动画前，存在额外的修改\n          this.w = 100;\n          this.h = 100;\n          this.message = 'Hello World';\n          UIUtils.flushUpdates();\n\n          this.getUIContext().animateTo({\n            duration: 1000\n          }, () => {\n            this.w = 200;\n            this.h = 200;\n            this.message = 'Hello ArkUI';\n          });\n        })\n        // ...\n      Column() {\n        Text(`${this.message}`)\n      }\n      .backgroundColor('#ff17a98d')\n      .width(this.w)\n      .height(this.h)\n    }\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(970372)/* ["default"] */.A) + "",
            width: "283",
            height: "326"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "上述的applySync、flushUpdates接口都会同步执行@Computed计算和@Monitor回调，这会使得在上述示例代码中，一次点击事件里触发了两次@Monitor回调，这可能会与开发者的预期不符，因此引入了flushUIUpdates接口，该接口仅用于同步刷新在调用该函数之前所有的UI节点，不会执行@Computed计算和@Monitor回调。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { UIUtils } from '@kit.ArkUI';\n\n@Entry\n@ComponentV2\nstruct Index {\n  @Local message: string = 'Hello';\n\n  @Monitor('message')\n  onMessageChange(monitor: IMonitor) {\n    monitor.dirty.forEach((path: string) => {\n      console.info(`${path} change from ${monitor.value(path)?.before} to ${monitor.value(path)?.now}`);\n    });\n  }\n\n  build() {\n    Column() {\n      Text(`message: ${this.message}`)\n      Button('change size')\n        .margin(20)\n        .onClick(() => {\n          // test1：调用applySync接口，日志打印两次\n          // UIUtils.applySync(() => { this.message = 'Hello World'; });\n\n          // test2：调用flushUpdates接口，日志打印两次\n          // this.message = 'Hello World';\n          // UIUtils.flushUpdates();\n\n          // test3：调用flushUIUpdates接口，日志打印一次\n          this.message = 'Hello World';\n          UIUtils.flushUIUpdates();\n          this.message = 'Hello ArkUI';\n        })\n        // ...\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "限制条件",
      children: "限制条件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在applySync闭包函数中嵌套调用applySync，内层的applySync将会被跳过并返回undefined，同时打印出警告信息UIUtils.applySync will be skipped when called within another UIUtils.applySync. The inner UIUtils.applySync will return undefined。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { UIUtils } from '@kit.ArkUI';\n\n@Entry\n@ComponentV2\nstruct Index {\n  @Local w: number = 50; // 宽度\n  @Local h: number = 50; // 高度\n\n  build() {\n    Column() {\n      Button('change size')\n        .margin(20)\n        .onClick(() => {\n          // 在执行动画前，存在额外的修改\n          UIUtils.applySync(() => {\n            this.w = 100;\n            // 内层applySync会被跳过\n            UIUtils.applySync(() => {\n              this.h = 100;\n            });\n          });\n\n          this.getUIContext().animateTo({\n            duration: 1000\n          }, () => {\n            this.w = 200;\n            this.h = 200;\n          });\n        })\n        // ...\n      Column() {\n        Text('BOX')\n      }\n      .backgroundColor('#ff17a98d')\n      .width(this.w)\n      .height(this.h)\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在applySync闭包函数中调用flushUpdates或flushUIUpdates接口将不起作用。同时打印出对应警告信息UIUtils.flushUpdates will be skipped when called within UIUtils.applySync/UIUtils.flushUIUpdates will be skipped when called within UIUtils.applySync。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { UIUtils } from '@kit.ArkUI';\n\n@Entry\n@ComponentV2\nstruct Index {\n  @Local w: number = 50; // 宽度\n  @Local h: number = 50; // 高度\n\n  build() {\n    Column() {\n      Button('change size')\n        .margin(20)\n        .onClick(() => {\n          // 在执行动画前，存在额外的修改\n          UIUtils.applySync(() => {\n            this.w = 100;\n            UIUtils.flushUpdates(); // 在applySync中，flushUpdates被忽略\n            UIUtils.flushUIUpdates(); // 在applySync中，flushUIUpdates被忽略\n          });\n          this.h = 100;\n          UIUtils.flushUpdates(); // 会生效\n\n          this.getUIContext().animateTo({\n            duration: 1000\n          }, () => {\n            this.w = 200;\n            this.h = 200;\n          });\n        })\n        // ...\n      Column() {\n        Text('BOX')\n      }\n      .backgroundColor('#ff17a98d')\n      .width(this.w)\n      .height(this.h)\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["不支持在@Computed装饰的getter方法中调用applySync、flushUpdates和flushUIUpdates接口，否则运行时会报错。错误信息为The function is not allowed to be called in @Computed，错误码为", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-arkts-errcode/arkui-ui-arkts-errcode/errorcode-statemanagement/errorcode-statemanagement#section140001-applysyncflushupdatesflushuiupdates%E9%9D%9E%E6%B3%95%E8%B0%83%E7%94%A8",
            children: "140001"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { UIUtils } from '@kit.ArkUI';\n\n@Entry\n@ComponentV2\nstruct Page {\n  @Local firstName: string = 'Hua';\n  @Local lastName: string = 'Li';\n  @Local count: number = 0;\n\n  @Computed\n  get fullName() {\n    // 在computed中调用applySync、flushUpdates、flushUIUpdates运行时报错\n    UIUtils.flushUIUpdates();\n    UIUtils.flushUpdates();\n    UIUtils.applySync(() => {\n      this.count++;\n    });\n    return this.firstName + ' ' + this.lastName;\n  }\n\n  build() {\n    Column() {\n      Text(`${this.fullName}`)\n      Text(`${this.count}`)\n      Button('change fullName').onClick(() => {\n        this.firstName = 'Zhang';\n        this.lastName = 'San';\n      })\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["不支持在@Monitor回调函数中调用flushUpdates和flushUIUpdates接口，否则运行时会报错。错误信息为The function is not allowed to be called in @Monitor，错误码为", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-arkts-errcode/arkui-ui-arkts-errcode/errorcode-statemanagement/errorcode-statemanagement#section140002-flushupdatesflushuiupdates%E9%9D%9E%E6%B3%95%E8%B0%83%E7%94%A8",
            children: "140002"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { UIUtils } from '@kit.ArkUI';\n\n@Entry\n@ComponentV2\nstruct Page {\n  @Local count: number = 0;\n\n  @Monitor('count')\n  onCountChange(monitor: IMonitor) {\n    monitor.dirty.forEach((path: string) => {\n      console.info(`${path} changed from ${monitor.value(path)?.before} to ${monitor.value(path)?.now}`);\n    });\n    UIUtils.flushUpdates(); // 在monitor中调用flushUpdates会运行时报错\n    UIUtils.flushUIUpdates(); // 在monitor中调用flushUIUpdates会运行时报错\n  }\n\n  build() {\n    Column() {\n      Text(`${this.count}`)\n      Button('change count')\n        .onClick(() => {\n        this.count++;\n        })\n        // ...\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用场景",
      children: "使用场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "动效场景",
      children: "动效场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "状态管理V2的异步标脏逻辑与animateTo立即刷新脏节点的逻辑存在冲突，导致在@Monitor中触发animateTo时不显示动画。使用applySync接口同步刷新状态变量的改变能够实现预期效果，示例如下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { UIUtils } from '@kit.ArkUI';\n\n@Entry\n@ComponentV2\nstruct Index {\n  @Local message: string = 'Hello World';\n  @Local x: number = 0;\n  @Local y: number = 0;\n  @Local w: number = 200;\n  @Local h: number = 50;\n\n  @Monitor('message')\n  onMsgChange() {\n    console.info('message change to', this.message);\n    this.animateAction();\n  }\n\n  animateAction() {\n    this.getUIContext().animateTo({\n      duration: 1000\n    }, () => {\n      // 调用applySync接口同步刷新动画尾帧，若不调用该接口则不显示动画\n      UIUtils.applySync(() => {\n        this.x = 100;\n        this.y = 100;\n      });\n    });\n  }\n\n  build() {\n    Column() {\n      Text(this.message)\n        .fontSize(20)\n        .width(this.w)\n        .height(this.h)\n        .backgroundColor(Color.Pink)\n        .onClick(() => {\n          this.message = 'New Message';\n        })\n        .position({\n          x: this.x,\n          y: this.y\n        })\n        // ...\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(252809)/* ["default"] */.A) + "",
        width: "318",
        height: "248"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "路由场景",
      children: "路由场景"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在路由场景下设置", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/animation/ts-transition-animation-shared-elements/ts-transition-animation-shared-elements#sharedtransition",
        children: "共享元素转场动效"
      }), "，使用applySync接口可以使得转场时同步刷新name值，实现转场动效效果。在如下示例代码中，从Index页面向PageTransitionTwo页面跳转时，两个页面的id值不匹配，没有转场动效。从PageTransitionTwo页面返回Index页面时，两个页面的id值匹配，有转场动效。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// PageUse.ets\n\nimport { UIUtils, AppStorageV2 } from '@kit.ArkUI';\n\n@ObservedV2\nexport class Info {\n  @Trace public name: string = '';\n}\n\n@Entry\n@ComponentV2\nstruct SharedTransitionExample {\n  @Local info: Info = AppStorageV2.connect(Info, () => new Info())!;\n\n  build() {\n    Column() {\n      // 此处'app.media.startIcon'仅做示例，请开发者自行替换\n      Image($r('app.media.startIcon'))\n        .width(50)\n        .height(50)\n        .margin({ left: 20, top: 20 })\n        .sharedTransition(this.info.name, { duration: 800, curve: Curve.Linear, delay: 100 })\n    }\n    .width('100%')\n    .height('100%')\n    .alignItems(HorizontalAlign.Start)\n    .onClick(() => {\n      UIUtils.applySync(() => {\n        this.info.name = 'id1'; // 不匹配\n      });\n      this.getUIContext().getRouter().pushUrl({ url: 'pages/PageTransitionTwo' })\n    })\n    // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// PageTransitionTwo.ets\n\nimport { UIUtils, AppStorageV2 } from '@kit.ArkUI';\nimport { Info } from './PageUse';\n\n@Entry\n@ComponentV2\nstruct PageBExample {\n  build() {\n    Stack() {\n      // 此处'app.media.startIcon'仅做示例，请开发者自行替换\n      Image($r('app.media.startIcon'))\n        .width(150)\n        .height(150)\n        .sharedTransition('sharedImage', { duration: 800, curve: Curve.Linear, delay: 100 })\n        .onClick(() => {\n          UIUtils.applySync(() => {\n            AppStorageV2.connect(Info, () => new Info())!.name = 'sharedImage'; // 匹配\n          });\n          this.getUIContext().getRouter().back();\n        })\n        // ...\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(852390)/* ["default"] */.A) + "",
        width: "266",
        height: "575"
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
970372(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477621-1e40d6ae3306c26f976255a1bb901997.gif");

},
852390(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437667-72cefec9783f322c31117407da4831af.gif");

},
640026(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477621-1e40d6ae3306c26f976255a1bb901997.gif");

},
449313(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
252809(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552797972-b0820a64277056faa8fa67d9f51fd06b.gif");

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