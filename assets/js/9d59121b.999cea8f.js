"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["38079"], {
733724(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ability_kit_stage_model_development_stage_model_application_components_uiability_uiability_lifecycle_uiability_lifecycle_md_9d5_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ability-kit-stage-model-development-stage-model-application-components-uiability-uiability-lifecycle-uiability-lifecycle-md-9d5.json
var site_docs_ability_kit_stage_model_development_stage_model_application_components_uiability_uiability_lifecycle_uiability_lifecycle_md_9d5_namespaceObject = JSON.parse('{"id":"ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-lifecycle/uiability-lifecycle","title":"UIAbility组件生命周期","description":"概述","source":"@site/docs/ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-lifecycle/uiability-lifecycle.md","sourceDirName":"ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-lifecycle","slug":"/ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-lifecycle/","permalink":"/harmonyos-docs-site/ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-lifecycle/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"UIAbility组件生命周期","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/uiability-lifecycle","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"UIAbility组件概述","permalink":"/harmonyos-docs-site/ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-overview/"},"next":{"title":"UIAbility组件启动模式","permalink":"/harmonyos-docs-site/ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-launch-type/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-lifecycle/uiability-lifecycle.md


const frontMatter = {
	title: 'UIAbility组件生命周期',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/uiability-lifecycle',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'UIAbility组件生命周期';

const assets = {

};



const toc = [{
  "value": "概述",
  "id": "概述",
  "level": 2
}, {
  "value": "生命周期回调",
  "id": "生命周期回调",
  "level": 2
}, {
  "value": "onCreate()",
  "id": "oncreate",
  "level": 3
}, {
  "value": "onWindowStageCreate()",
  "id": "onwindowstagecreate",
  "level": 3
}, {
  "value": "onForeground()",
  "id": "onforeground",
  "level": 3
}, {
  "value": "onBackground()",
  "id": "onbackground",
  "level": 3
}, {
  "value": "onWindowStageWillDestroy()",
  "id": "onwindowstagewilldestroy",
  "level": 3
}, {
  "value": "onWindowStageDestroy()",
  "id": "onwindowstagedestroy",
  "level": 3
}, {
  "value": "onDestroy()",
  "id": "ondestroy",
  "level": 3
}, {
  "value": "onNewWant()",
  "id": "onnewwant",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "uiability组件生命周期",
        children: "UIAbility组件生命周期"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当用户在执行应用启动、应用前后台切换、应用退出等操作时，系统会触发相关应用组件的生命周期回调。其中，UIAbility组件的核心生命周期回调包括", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability#oncreate",
        children: "onCreate"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability#onforeground",
        children: "onForeground"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability#onbackground",
        children: "onBackground"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability#ondestroy",
        children: "onDestroy"
      }), "。作为一种包含UI的应用组件，UIAbility的生命周期不可避免地与", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/window-manager/application-window-stage",
        children: "WindowStage"
      }), "的生命周期存在关联关系。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "UIAbility的生命周期示意图如下所示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(290320)/* ["default"] */.A) + "",
        width: "665",
        height: "650"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下是UIAbility启动到前台和后台两种场景说明，以及生命周期回调流程讲解。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "UIAbility启动到前台，对应流程图参见上图。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "当用户启动一个UIAbility时，系统会依次触发onCreate()、onWindowStageCreate()、onForeground()生命周期回调。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "当用户跳转到其他应用（当前UIAbility切换到后台）时，系统会触发onBackground()生命周期回调。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "当用户再次将UIAbility切换到前台时，系统会依次触发onNewWant()、onForeground()生命周期回调。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "UIAbility启动到后台，对应流程图参见下图。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["当用户通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiabilitycontext/js-apis-inner-application-uiabilitycontext#startabilitybycall",
              children: "UIAbilityContext.startAbilityByCall()"
            }), "接口启动一个UIAbility到后台时，系统会依次触发onCreate()、onBackground()（不会执行onWindowStageCreate()生命周期回调）生命周期回调。"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "当用户将UIAbility拉到前台，系统会依次触发onNewWant()、onWindowStageCreate()、onForeground()生命周期回调。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(643731)/* ["default"] */.A) + "",
            width: "393",
            height: "613"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "生命周期回调",
      children: "生命周期回调"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(43053)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "生命周期回调是在应用主线程执行，为了确保应用性能，建议在生命周期回调中，仅执行必要的轻量级操作。对于耗时任务，推荐采用异步处理或交由子线程执行，避免阻塞主线程。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["如果需要感知UIAbility生命周期变化，开发者可以使用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-applicationcontext/js-apis-inner-application-applicationcontext#applicationcontextonabilitylifecycle",
          children: "ApplicationContext注册接口"
        }), "监听UIAbility生命周期变化。详见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ability-kit/stage-model-development/stage-model-application-components/application-context-stage#%E7%9B%91%E5%90%ACuiability%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E5%8F%98%E5%8C%96",
          children: "监听UIAbility生命周期变化"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oncreate",
      children: "onCreate()"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在首次创建UIAbility实例时，系统触发", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability#oncreate",
        children: "onCreate()"
      }), "回调。开发者可以在该回调中执行UIAbility整个生命周期中仅发生一次的启动逻辑。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';\n// ···\n\nexport default class EntryAbility extends UIAbility {\n  // ···\n  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {\n    // 执行UIAbility整个生命周期中仅发生一次的业务逻辑\n  }\n  // ···\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onwindowstagecreate",
      children: "onWindowStageCreate()"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability",
        children: "UIAbility"
      }), "实例创建完成之后，在进入前台之前，系统会创建一个", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/window-manager/application-window-stage",
        children: "WindowStage"
      }), "。WindowStage创建完成后会进入", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability#onwindowstagecreate",
        children: "onWindowStageCreate()"
      }), "回调，开发者可以在该回调中进行UI加载、WindowStage的事件订阅。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在onWindowStageCreate()回调中通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-window/arkts-apis-window-window#loadcontent9",
        children: "loadContent()"
      }), "方法设置应用要加载的页面，并根据需要调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-windowstage/arkts-apis-window-windowstage#onwindowstageevent9",
        children: "on('windowStageEvent')"
      }), "方法订阅", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-e/arkts-apis-window-e#windowstageeventtype9",
        children: "WindowStage的事件"
      }), "（获焦/失焦、切到前台/切到后台、前台可交互/前台不可交互）。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(868883)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["不同开发场景下", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-e/arkts-apis-window-e#windowstageeventtype9",
          children: "WindowStage事件"
        }), "的时序可能存在差异，WindowStage的相关使用请参见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/window-manager/application-window-stage",
          children: "窗口开发指导"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["对于不同类型的产品，当应用主窗口从前台进入后台时，UIAbility生命周期的变化也会存在差异。详见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/window-manager/window-overview#%E4%B8%8D%E5%90%8C%E8%AE%BE%E5%A4%87%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E7%9A%84%E5%B7%AE%E5%BC%82%E5%8C%96%E8%A1%8C%E4%B8%BA",
          children: "不同设备生命周期的差异化行为"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { UIAbility } from '@kit.AbilityKit';\nimport { window } from '@kit.ArkUI';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n// ···\n\nconst DOMAIN = 0x0000;\n\nexport default class EntryAbility extends UIAbility {\n\n  // ···\n\n  onWindowStageCreate(windowStage: window.WindowStage): void {\n    // ···\n    // 设置WindowStage的事件订阅（获焦/失焦、切到前台/切到后台、前台可交互/前台不可交互）\n    try {\n      windowStage.on('windowStageEvent', (data) => {\n        let stageEventType: window.WindowStageEventType = data;\n        switch (stageEventType) {\n          case window.WindowStageEventType.SHOWN: // 切到前台\n            hilog.info(DOMAIN, 'testTag', `windowStage foreground.`);\n            break;\n          case window.WindowStageEventType.ACTIVE: // 获焦状态\n            hilog.info(DOMAIN, 'testTag', `windowStage active.`);\n            break;\n          case window.WindowStageEventType.INACTIVE: // 失焦状态\n            hilog.info(DOMAIN, 'testTag', `windowStage inactive.`);\n            break;\n          case window.WindowStageEventType.HIDDEN: // 切到后台\n            hilog.info(DOMAIN, 'testTag', `windowStage background.`);\n            break;\n          case window.WindowStageEventType.RESUMED: // 前台可交互状态\n            hilog.info(DOMAIN, 'testTag', `windowStage resumed.`);\n            break;\n          case window.WindowStageEventType.PAUSED: // 前台不可交互状态\n            hilog.info(DOMAIN, 'testTag', `windowStage paused.`);\n            break;\n          default:\n            break;\n        }\n      });\n    } catch (exception) {\n      hilog.error(DOMAIN, 'testTag',\n        `Failed to enable the listener for window stage event changes. Cause: ${JSON.stringify(exception)}`);\n    }\n    hilog.info(DOMAIN, 'testTag', `%{public}s`, `Ability onWindowStageCreate`);\n    // 设置UI加载\n    windowStage.loadContent('pages/Index', (err) => {\n      // ···\n    });\n  }\n\n// ···\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onforeground",
      children: "onForeground()"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability",
        children: "UIAbility"
      }), "切换至前台时且UIAbility的UI可见之前，系统触发", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability#onforeground",
        children: "onForeground"
      }), "回调。开发者可以在该回调中申请系统需要的资源，或者重新申请在onBackground()中释放的资源。系统回调该方法后，UIAbility实例进入前台状态，即UIAbility实例可以与用户交互的状态。UIAbility实例会一直处于这个状态，直到被某些动作打断（例如屏幕关闭、用户跳转到其他UIAbility）。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "例如，应用已获得地理位置权限。在UI显示之前，开发者可以在onForeground()回调中开启定位功能，从而获取到当前的位置信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { UIAbility } from '@kit.AbilityKit';\n// ···\n\nexport default class EntryAbility extends UIAbility {\n// ···\n\n  onForeground(): void {\n    // 申请系统需要的资源，或者重新申请在onBackground()中释放的资源\n  }\n\n// ···\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onbackground",
      children: "onBackground()"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability",
        children: "UIAbility"
      }), "的UI完全不可见之后，系统触发", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability#onbackground",
        children: "onBackground"
      }), "回调，将UIAbility实例切换至后台状态。开发者可以在该回调中释放UI不可见时的无用资源，例如停止定位功能，以节省系统的资源消耗。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onBackground()执行时间较短，无法提供足够的时间做一些耗时动作。请勿在该方法中执行保存用户数据或执行数据库事务等耗时操作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { UIAbility } from '@kit.AbilityKit';\n// ···\n\nexport default class EntryAbility extends UIAbility {\n// ···\n\n  onBackground(): void {\n    // 释放UI不可见时无用的资源\n  }\n\n// ···\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onwindowstagewilldestroy",
      children: "onWindowStageWillDestroy()"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability",
        children: "UIAbility"
      }), "实例销毁之前，系统触发", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability#onwindowstagewilldestroy12",
        children: "onWindowStageWillDestroy()"
      }), "回调。该回调在WindowStage销毁前执行，此时WindowStage可以使用。开发者可以在该回调中释放通过WindowStage获取的资源、注销WindowStage事件订阅等。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { UIAbility } from '@kit.AbilityKit';\nimport { window } from '@kit.ArkUI';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nconst DOMAIN = 0x0000;\n\nexport default class EntryAbility extends UIAbility {\n  public windowStage: window.WindowStage | undefined = undefined;\n\n// ···\n\n  onWindowStageCreate(windowStage: window.WindowStage): void {\n    // 加载UI资源\n    this.windowStage = windowStage;\n    // ···\n  }\n\n  onWindowStageWillDestroy(windowStage: window.WindowStage): void {\n    // 释放通过windowStage对象获取的资源\n    // 在onWindowStageWillDestroy()中注销WindowStage事件订阅（获焦/失焦、切到前台/切到后台、前台可交互/前台不可交互）\n    try {\n      if (this.windowStage) {\n        this.windowStage.off('windowStageEvent');\n      }\n    } catch (err) {\n      let code = (err as BusinessError).code;\n      let message = (err as BusinessError).message;\n      hilog.error(DOMAIN, 'testTag', `Failed to disable the listener for windowStageEvent. Code is ${code}, message is ${message}`);\n    }\n  }\n\n// ···\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onwindowstagedestroy",
      children: "onWindowStageDestroy()"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability",
        children: "UIAbility"
      }), "实例销毁之前，系统触发", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability#onwindowstagedestroy",
        children: "onWindowStageDestroy()"
      }), "回调，开发者可以在该回调中释放UI资源。该回调在WindowStage销毁后执行，此时WindowStage不可以使用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { UIAbility } from '@kit.AbilityKit';\nimport { window } from '@kit.ArkUI';\n// ···\n\nexport default class EntryAbility extends UIAbility {\n// ···\n\n  onWindowStageCreate(windowStage: window.WindowStage): void {\n    // 加载UI资源\n    // ···\n  }\n\n// ···\n\n  onWindowStageDestroy(): void {\n    // 释放UI资源\n  }\n  // ···\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ondestroy",
      children: "onDestroy()"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability",
        children: "UIAbility"
      }), "实例销毁之前，系统触发", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability#ondestroy",
        children: "onDestroy"
      }), "回调。该回调是UIAbility接收到的最后一个生命周期回调，开发者可以在onDestroy()回调中进行系统资源的释放、数据的保存等操作。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["例如，开发者调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiabilitycontext/js-apis-inner-application-uiabilitycontext#terminateself",
        children: "terminateSelf()"
      }), "方法通知系统停止当前UIAbility实例时，系统会触发onDestroy()回调。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(85407)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "从API version 13开始，用户在最近任务列表中使用一键清理来关闭应用，对于无实况窗的应用将不会触发onDestroy()回调，而是会直接终止进程；对于有实况窗的应用会继续触发onDestroy()回调。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当在开发者模式下调试某个应用时，如果用户从最近任务列表中移除了该调试应用的一个任务，则该调试应用的进程会被强制销毁，不会触发onDestroy()回调。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { UIAbility } from '@kit.AbilityKit';\n// ···\n\nexport default class EntryAbility extends UIAbility {\n// ···\n\n  onDestroy(): void {\n    // 系统资源的释放、数据的保存等\n  }\n\n// ···\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onnewwant",
      children: "onNewWant()"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当应用的UIAbility实例已创建，再次调用方法启动该UIAbility实例时，系统触发该UIAbility的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability#onnewwant",
        children: "onNewWant()"
      }), "回调。开发者可以在该回调中更新要加载的资源和数据等，用于后续的UI展示。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';\n// ···\n\nexport default class EntryAbility extends UIAbility {\n// ···\n\n  onNewWant(want: Want, launchParam: AbilityConstant.LaunchParam) {\n    // 更新资源、数据\n  }\n}\n"
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
43053(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
85407(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
290320(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957488-3377d1af865831a4e51b0130cf1acc68.png");

},
643731(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477489-a1a59fbbbb00065b33d0b00c71e37cf1.png");

},
868883(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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