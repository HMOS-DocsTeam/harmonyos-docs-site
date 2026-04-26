"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["277786"], {
217851(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_debug_optimize_performance_analysis_kit_error_manager_apprecovery_guidelines_apprecovery_guidelines_md_437_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-debug-optimize-performance-analysis-kit-error-manager-apprecovery-guidelines-apprecovery-guidelines-md-437.json
var site_docs_system_debug_optimize_performance_analysis_kit_error_manager_apprecovery_guidelines_apprecovery_guidelines_md_437_namespaceObject = JSON.parse('{"id":"system-debug-optimize/performance-analysis-kit/error-manager/apprecovery-guidelines/apprecovery-guidelines","title":"应用恢复开发指导","description":"场景介绍","source":"@site/docs/system-debug-optimize/performance-analysis-kit/error-manager/apprecovery-guidelines/apprecovery-guidelines.md","sourceDirName":"system-debug-optimize/performance-analysis-kit/error-manager/apprecovery-guidelines","slug":"/system-debug-optimize/performance-analysis-kit/error-manager/apprecovery-guidelines/","permalink":"/harmonyos-docs-site/system-debug-optimize/performance-analysis-kit/error-manager/apprecovery-guidelines/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"应用恢复开发指导","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/apprecovery-guidelines","kit":"system/debug-optimize","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"错误管理开发指导","permalink":"/harmonyos-docs-site/system-debug-optimize/performance-analysis-kit/error-manager/errormanager-guidelines/"},"next":{"title":"Performance Analysis Kit术语","permalink":"/harmonyos-docs-site/system-debug-optimize/performance-analysis-kit/performance-analysis-kit-terminology/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-debug-optimize/performance-analysis-kit/error-manager/apprecovery-guidelines/apprecovery-guidelines.md


const frontMatter = {
	title: '应用恢复开发指导',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/apprecovery-guidelines',
	kit: 'system/debug-optimize',
	last_updated: '2026-04-22'
};
const contentTitle = '应用恢复开发指导';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "应用恢复接口功能介绍",
  "id": "应用恢复接口功能介绍",
  "level": 3
}, {
  "value": "应用恢复状态管理示意",
  "id": "应用恢复状态管理示意",
  "level": 3
}, {
  "value": "应用卡死的状态保存及恢复",
  "id": "应用卡死的状态保存及恢复",
  "level": 3
}, {
  "value": "框架故障管理流程示意",
  "id": "框架故障管理流程示意",
  "level": 3
}, {
  "value": "应用故障管理接口支持场景",
  "id": "应用故障管理接口支持场景",
  "level": 3
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}, {
  "value": "使能开启自恢复特性",
  "id": "使能开启自恢复特性",
  "level": 3
}, {
  "value": "配置支持恢复的UIAbility",
  "id": "配置支持恢复的uiability",
  "level": 3
}, {
  "value": "数据保存和恢复",
  "id": "数据保存和恢复",
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
        id: "应用恢复开发指导",
        children: "应用恢复开发指导"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用在运行中不可避免会产生一些非预期的行为，如运行时抛出未处理的异常和错误，违反框架的调用/运行约束等。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "系统默认对异常的处理方式为进程退出，如果应用使用过程中产生了用户数据，直接退出可能会导致用户工作中断，数据丢失。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果应用在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-abilitystage/js-apis-app-ability-abilitystage#abilitystage",
        children: "AbilityStage"
      }), "中使能", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%BA%94%E7%94%A8%E6%81%A2%E5%A4%8D%E6%8E%A5%E5%8F%A3%E5%8A%9F%E8%83%BD%E4%BB%8B%E7%BB%8D",
        children: "应用恢复功能"
      }), "，并对临时数据进行保存，应用非预期退出后的下一次启动会恢复先前的状态和数据，给用户更连贯的使用体验。这里状态包括应用的页面栈以及onSaveState接口中保存的数据。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "API 9上的应用恢复接口支持单UIAbility的Stage模型应用开发。支持JsError故障时的状态保存与自动重启。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "API 10在API 9的基础上新增支持多UIAbility的Stage模型应用开发。支持AppFreeze故障时的状态保存回调。支持应用被管控模式杀死后，下次启动的状态恢复。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用故障恢复接口由appRecovery模块提供，开发者可以通过import引入，详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%BC%80%E5%8F%91%E6%AD%A5%E9%AA%A4",
        children: "开发步骤"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "应用恢复接口功能介绍",
      children: "应用恢复接口功能介绍"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "enableAppRecovery(restart?: RestartFlag, saveOccasion?: SaveOccasionFlag, saveMode?: SaveModeFlag) : void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使能应用恢复功能。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "saveAppState(): boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "主动保存当前应用中支持恢复的UIAbility的状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "restartApp(): void"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["重启当前进程，并启动由", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "setRestartWant"
              })
            }), "指定的UIAbility，如果未指定，将重新拉起处于前台且支持恢复的UIAbility。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "saveAppState(context?: UIAbilityContext): boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "主动保存由Context指定的UIAbility状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "setRestartWant(want: Want): void"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置主动调用", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "restartApp"
              })
            }), "以及", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "RestartFlag"
              })
            }), "不为", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "NO_RESTART"
              })
            }), "时重启的UIAbility（want的abilityName属性可设置为UIAbility的名称）。该UIAbility必须在同一个包名下。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["由于上述接口可能在故障处理时使用，所以不会返回异常，需要开发者熟悉使用的场景。具体其各参数定义详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/openharmony/docs/blob/master/zh-cn/application-dev/reference/apis-ability-kit/js-apis-app-ability-appRecovery.md",
        children: "参数说明"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "enableAppRecovery"
        })
      }), "：需要在应用初始化阶段调用，比如AbilityStage的onCreate调用。调用该接口后，应用恢复时将按首个支持恢复的UIAbility进行恢复。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "saveAppState"
        })
      }), "：调用后框架会回调当前进程中所有支持恢复的UIAbility的onSaveState方法。如果在onSaveState方法中同意保存数据，则会将相关数据及UIAbility的页面栈持久化到应用的本地缓存。如果需要保存指定UIAbility，则需要指定UIAbility对应的Context。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "setRestartWant"
        })
      }), "：指定由appRecovery发起重启的UIAbility。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "restartApp"
        })
      }), "：调用后框架会杀死当前应用进程，并重新拉起由", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "setRestartWant"
        })
      }), "指定的UIAbility，其中启动原因为APP_RECOVERY。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["API 9以及未使用", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "setRestartWant"
        })
      }), "指定UIAbility的场景，会拉起最后一个支持恢复且在前台的UIAbility，如果当前前台的UIAbility不支持恢复，则应用表现闪退。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果重启的UIAbility存在已经保存的状态，这些状态数据会在UIAbility的OnCreate生命周期回调的want参数中作为wantParam属性传入。两次重启的间隔应大于一分钟，一分钟之内重复调用此接口只会退出应用不会重启应用。自动重启的行为与主动重启一致。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "应用恢复状态管理示意",
      children: "应用恢复状态管理示意"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API 10起，应用恢复的场景不仅局限于异常时自动重启。所以需要理解应用何时会加载恢复的状态。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "简而言之，如果应用任务的上次退出不是由用户发起的，且应用存在用于恢复的状态，应用下一次由用户拉起时的启动原因会被设为APP_RECOVERY，并清理该任务的恢复状态。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用恢复状态标识会在状态保存接口主动或者被动调用时设置。在应用正常退出或者应用异常退出重启后，该状态会被清理。正常退出目前包括用户按后退键退出以及用户清理最近任务。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(677229)/* ["default"] */.A) + "",
        width: "966",
        height: "594"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "应用卡死的状态保存及恢复",
      children: "应用卡死的状态保存及恢复"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "API 10开始支持应用卡死时的状态保存。JsError故障时，onSaveState接口在主线程进行回调。对于AppFreeze故障，主线程可能处于卡死的状态，onSaveState会在非主线程进行回调。其主要流程如下图："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(831755)/* ["default"] */.A) + "",
        width: "1339",
        height: "935"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "由于卡死时的回调不在JS线程上执行，onSaveState回调中的代码建议不要使用import进来的Native动态库，禁止访问主线程创建的thread_local对象。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "框架故障管理流程示意",
      children: "框架故障管理流程示意"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "故障管理是应用提升用户体验的重要手段。应用程序框架为开发者提供了故障监听、故障恢复、以及故障查询三种方式来管理应用的故障。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["故障监听指的是通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/ability-api/ability-arkts/both-models/js-apis-app-ability-errormanager/js-apis-app-ability-errormanager",
          children: "errorManager"
        }), "注册", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-errorobserver/js-apis-inner-application-errorobserver",
          children: "ErrorObserver"
        }), "，监听故障的发生，并通知到监听方。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["故障恢复指的是", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/ability-api/ability-arkts/both-models/js-apis-app-ability-apprecovery/js-apis-app-ability-apprecovery",
          children: "appRecovery"
        }), "，及故障发生后，将应用重启恢复到故障之前的状态。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["故障查询指的是", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-arkts/performance-analysis-arkts-dep/js-apis-faultlogger/js-apis-faultlogger",
          children: "faultLogger"
        }), "通过其查询接口获取当前的故障信息。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["下图中并没有标记faultLogger的调用时机，开发者可以根据应用启动时传入的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-abilityconstant/js-apis-app-ability-abilityconstant#lastexitreason",
        children: "LastExitReason"
      }), "来决定是否调用faultLogger查询上次的故障信息。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(970217)/* ["default"] */.A) + "",
        width: "958",
        height: "636"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "这里建议应用开发者使用errorManager对应用的异常进行处理，处理完成后开发者可以选择调用状态保存接口并主动重启应用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果开发者没有注册ErrorObserver也没有使能应用恢复，则按照系统的默认逻辑执行进程退出。用户可以选择从启动器再次打开应用。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果开发者使能应用恢复，框架会首先检查当前故障是否支持状态保存以及开发者是否配置了状态保存，如果支持则会回调UIAbility的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability#onsavestate",
        children: "onSaveState"
      }), "的接口。最后重启应用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "应用故障管理接口支持场景",
      children: "应用故障管理接口支持场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通常的故障类型有JS程序Crash、应用程序卡死、C++程序Crash。Crash故障时应用一般都会被关闭。Freeze故障为应用无响应卡屏场景。应用上层无需关注故障类型，底层恢复框架会根据故障类型来实现不同场景的故障管理。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "故障名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "故障监听"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "状态保存"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "自动重启"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "日志查询"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-arkts/performance-analysis-arkts-dep/js-apis-faultlogger/js-apis-faultlogger#faulttype",
              children: "JS_CRASH"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-arkts/performance-analysis-arkts-dep/js-apis-faultlogger/js-apis-faultlogger#faulttype",
              children: "APP_FREEZE"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "API18及以上支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-arkts/performance-analysis-arkts-dep/js-apis-faultlogger/js-apis-faultlogger#faulttype",
              children: "CPP_CRASH"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "这里状态保存指的是故障时状态保存，对于应用卡死场景，开发者可以采用定时保存状态或者在UIAbility切入后台后自动保存的方式最大限度的保护用户数据。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使能开启自恢复特性",
      children: "使能开启自恢复特性"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者需要在应用模块初始化时使能appRecovery功能。下面为示例的AbilityStage。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { AbilityStage, appRecovery } from '@kit.AbilityKit';\n\nexport default class MyAbilityStage extends AbilityStage {\n    onCreate() {\n        console.info(\"[Demo] MyAbilityStage onCreate\");\n        appRecovery.enableAppRecovery(appRecovery.RestartFlag.ALWAYS_RESTART,\n            appRecovery.SaveOccasionFlag.SAVE_WHEN_ERROR | appRecovery.SaveOccasionFlag.SAVE_WHEN_BACKGROUND,\n            appRecovery.SaveModeFlag.SAVE_WITH_FILE);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "配置支持恢复的uiability",
      children: "配置支持恢复的UIAbility"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "UIAbility的配置清单一般的名字为module.json5。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n    \"abilities\": [\n      {\n        \"name\": \"EntryAbility\",\n        \"recoverable\": true,\n      }]\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "数据保存和恢复",
      children: "数据保存和恢复"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在使能appRecovery功能后，开发者可以在UIAbility中采用主动保存状态，主动恢复或者选择被动恢复的方式使用appRecovery功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下面为示例的EntryAbility。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "导包"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { AbilityConstant, appRecovery, errorManager } from '@kit.AbilityKit';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "主动触发保存和恢复"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["定义和注册", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-errorobserver/js-apis-inner-application-errorobserver",
          children: "ErrorObserver"
        }), " callback，具体可参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/ability-api/ability-arkts/both-models/js-apis-app-ability-errormanager/js-apis-app-ability-errormanager",
          children: "errorManager"
        }), "里的使用方法。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { appRecovery, errorManager, UIAbility } from '@kit.AbilityKit';\nimport { window } from '@kit.ArkUI';\n\nlet registerId = -1;\nlet callback: errorManager.ErrorObserver = {\n    onUnhandledException(errMsg) {\n    console.error(errMsg);\n    appRecovery.saveAppState();\n    appRecovery.restartApp();\n    }\n}\n\nexport default class EntryAbility extends UIAbility {\n    onWindowStageCreate(windowStage: window.WindowStage) {\n    // 为已创建的主窗口设置主页面\n    console.info(\"[Demo] EntryAbility onWindowStageCreate\");\n    registerId = errorManager.on('error', callback);\n\n    windowStage.loadContent(\"pages/index\", (err, data) => {\n        if (err.code) {\n            console.error('Failed to load the content. Cause:' + JSON.stringify(err));\n            return;\n        }\n        console.info('Succeeded in loading the content. Data: ' + JSON.stringify(data));\n    })\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "数据保存"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "callback触发appRecovery.saveAppState()调用后，会触发EntryAbility的onSaveState(state, wantParams)函数回调。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { AbilityConstant, UIAbility } from '@kit.AbilityKit';\n\nexport default class EntryAbility extends UIAbility {\n    onSaveState(state:AbilityConstant.StateType, wantParams: Record<string, Object>) {\n        // UIAbility已调用以保存应用程序数据\n        console.info(\"[Demo] EntryAbility onSaveState\");\n        wantParams[\"myData\"] = \"my1234567\";\n        return AbilityConstant.OnSaveResult.ALL_AGREE;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "数据恢复"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "callback触发后appRecovery.restartApp()调用后，应用会重启，重启后会走到EntryAbility的onCreate(want, launchParam)函数，保存的数据会在want参数的parameters里。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';\n\nlet abilityWant: Want;\n\nexport default class EntryAbility extends UIAbility {\n    storage: LocalStorage | undefined = undefined;\n\n    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam) {\n        console.info(\"[Demo] EntryAbility onCreate\");\n        abilityWant = want;\n        if (launchParam.launchReason == AbilityConstant.LaunchReason.APP_RECOVERY) {\n            this.storage = new LocalStorage();\n            if (want.parameters) {\n                let recoveryData = want.parameters[\"myData\"];\n                this.storage.setOrCreate(\"myData\", recoveryData);\n                this.context.restoreWindowStage(this.storage);\n            }\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "取消注册ErrorObserver callback"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { errorManager, UIAbility } from '@kit.AbilityKit';\n\nlet registerId = -1;\n\nexport default class EntryAbility extends UIAbility {\n    onWindowStageDestroy() {\n        // 销毁主窗口，释放相关UI资源\n        console.info(\"[Demo] EntryAbility onWindowStageDestroy\");\n\n        errorManager.off('error', registerId, (err) => {\n            console.error(\"[Demo] err:\", err);\n        });\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "被动保存和恢复"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "被动保存和恢复依赖恢复框架底层触发，无需注册监听ErrorObserver callback，只需实现UIAbility的onSaveState接口数据保存和onCreate接口数据恢复流程即可。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';\n\nlet abilityWant: Want;\n\nexport default class EntryAbility extends UIAbility {\n    storage: LocalStorage | undefined = undefined\n    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam) {\n    console.info(\"[Demo] EntryAbility onCreate\");\n        abilityWant = want;\n        if (launchParam.launchReason == AbilityConstant.LaunchReason.APP_RECOVERY) {\n            this.storage = new LocalStorage();\n            if (want.parameters) {\n                let recoveryData = want.parameters[\"myData\"];\n                this.storage.setOrCreate(\"myData\", recoveryData);\n                this.context.restoreWindowStage(this.storage);\n            }\n        }\n    }\n\n    onSaveState(state:AbilityConstant.StateType, wantParams: Record<string, Object>) {\n        // UIAbility已调用以保存应用程序数据\n        console.info(\"[Demo] EntryAbility onSaveState\");\n        wantParams[\"myData\"] = \"my1234567\";\n        return AbilityConstant.OnSaveResult.ALL_AGREE;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "故障UIAbility的重启恢复标记"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["发生故障的UIAbility再次重新启动时，在调用onCreate生命周期里，参数want的parameters成员会有", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/both-models/js-apis-app-ability-wantconstant/js-apis-app-ability-wantconstant#params",
        children: "ABILITY_RECOVERY_RESTART"
      }), "标记数据，并且值为true。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { AbilityConstant, UIAbility, Want, wantConstant } from '@kit.AbilityKit';\n\nexport default class EntryAbility extends UIAbility {\n    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam) {\n        if (want.parameters === undefined) {\n            return;\n        }\n        if (want.parameters[wantConstant.Params.ABILITY_RECOVERY_RESTART] != undefined &&\n            want.parameters[wantConstant.Params.ABILITY_RECOVERY_RESTART] == true) {\n            console.info(\"This ability need to recovery\");\n        }\n    }\n}\n"
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
831755(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958500-aef5b1ddb3d1d3b311da4c2b4a45a1aa.png");

},
970217(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478501-38ad778264a44907aa192727aa6bcf6e.png");

},
677229(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438545-931f873a5347c4ca2862e071cb7f962f.png");

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