"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["654683"], {
480757(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_ability_api_ability_arkts_stage_model_js_apis_app_ability_abilitylifecyclecallback_js_apis_app_ability_abilitylifecyclecallback_md_eb1_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-ability-api-ability-arkts-stage-model-js-apis-app-ability-abilitylifecyclecallback-js-apis-app-ability-abilitylifecyclecallback-md-eb1.json
var site_docs_ref_ability_api_ability_arkts_stage_model_js_apis_app_ability_abilitylifecyclecallback_js_apis_app_ability_abilitylifecyclecallback_md_eb1_namespaceObject = JSON.parse('{"id":"ability-api/ability-arkts/stage-model/js-apis-app-ability-abilitylifecyclecallback/js-apis-app-ability-abilitylifecyclecallback","title":"@ohos.app.ability.abilityLifecycleCallback (UIAbility生命周期回调监听器)","description":"UIAbility从创建到销毁过程其生命周期是动态变化的。AbilityLifecycleCallback模块提供监听UIAbility生命周期变化的能力，可用于统计每个UIAbility的运行时长、执行与UIAbility业务逻辑解耦的数据加载等场景。","source":"@site/docs-ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-abilitylifecyclecallback/js-apis-app-ability-abilitylifecyclecallback.md","sourceDirName":"ability-api/ability-arkts/stage-model/js-apis-app-ability-abilitylifecyclecallback","slug":"/ability-api/ability-arkts/stage-model/js-apis-app-ability-abilitylifecyclecallback/js-apis-app-ability-abilitylifecyclecallback","permalink":"/harmonyos-docs-site/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-abilitylifecyclecallback/js-apis-app-ability-abilitylifecyclecallback","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"@ohos.app.ability.abilityLifecycleCallback (UIAbility生命周期回调监听器)","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-abilitylifecyclecallback","kit":"应用框架","last_updated":"2026-04-22","slug":"js-apis-app-ability-abilitylifecyclecallback"},"sidebar":"ref","previous":{"title":"@ohos.app.ability.AbilityConstant (Ability相关常量)","permalink":"/harmonyos-docs-site/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-abilityconstant/js-apis-app-ability-abilityconstant"},"next":{"title":"@ohos.app.ability.AbilityStage (AbilityStage组件管理器)","permalink":"/harmonyos-docs-site/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-abilitystage/js-apis-app-ability-abilitystage"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-abilitylifecyclecallback/js-apis-app-ability-abilitylifecyclecallback.md


const frontMatter = {
	title: '@ohos.app.ability.abilityLifecycleCallback (UIAbility生命周期回调监听器)',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-abilitylifecyclecallback',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'js-apis-app-ability-abilitylifecyclecallback'
};
const contentTitle = '@ohos.app.ability.abilityLifecycleCallback (UIAbility生命周期回调监听器)';

const assets = {

};



const toc = [{
  "value": "使用说明",
  "id": "使用说明",
  "level": 2
}, {
  "value": "导入模块",
  "id": "导入模块",
  "level": 2
}, {
  "value": "AbilityLifecycleCallback",
  "id": "abilitylifecyclecallback",
  "level": 2
}, {
  "value": "onAbilityCreate",
  "id": "onabilitycreate",
  "level": 3
}, {
  "value": "onWindowStageCreate",
  "id": "onwindowstagecreate",
  "level": 3
}, {
  "value": "onWindowStageActive",
  "id": "onwindowstageactive",
  "level": 3
}, {
  "value": "onWindowStageInactive",
  "id": "onwindowstageinactive",
  "level": 3
}, {
  "value": "onWindowStageDestroy",
  "id": "onwindowstagedestroy",
  "level": 3
}, {
  "value": "onAbilityDestroy",
  "id": "onabilitydestroy",
  "level": 3
}, {
  "value": "onAbilityForeground",
  "id": "onabilityforeground",
  "level": 3
}, {
  "value": "onAbilityBackground",
  "id": "onabilitybackground",
  "level": 3
}, {
  "value": "onAbilityContinue",
  "id": "onabilitycontinue",
  "level": 3
}, {
  "value": "onAbilityWillCreate12+",
  "id": "onabilitywillcreate12",
  "level": 3
}, {
  "value": "onWindowStageWillCreate12+",
  "id": "onwindowstagewillcreate12",
  "level": 3
}, {
  "value": "onWindowStageWillDestroy12+",
  "id": "onwindowstagewilldestroy12",
  "level": 3
}, {
  "value": "onAbilityWillForeground12+",
  "id": "onabilitywillforeground12",
  "level": 3
}, {
  "value": "onAbilityWillDestroy12+",
  "id": "onabilitywilldestroy12",
  "level": 3
}, {
  "value": "onAbilityWillBackground12+",
  "id": "onabilitywillbackground12",
  "level": 3
}, {
  "value": "onWillNewWant12+",
  "id": "onwillnewwant12",
  "level": 3
}, {
  "value": "onNewWant12+",
  "id": "onnewwant12",
  "level": 3
}, {
  "value": "onAbilityWillContinue12+",
  "id": "onabilitywillcontinue12",
  "level": 3
}, {
  "value": "onWindowStageWillRestore12+",
  "id": "onwindowstagewillrestore12",
  "level": 3
}, {
  "value": "onWindowStageRestore12+",
  "id": "onwindowstagerestore12",
  "level": 3
}, {
  "value": "onAbilityWillSaveState12+",
  "id": "onabilitywillsavestate12",
  "level": 3
}, {
  "value": "onAbilitySaveState12+",
  "id": "onabilitysavestate12",
  "level": 3
}, {
  "value": "AbilityLifecycleCallback使用示例",
  "id": "abilitylifecyclecallback使用示例",
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
        id: "ohosappabilityabilitylifecyclecallback-uiability生命周期回调监听器",
        children: "@ohos.app.ability.abilityLifecycleCallback (UIAbility生命周期回调监听器)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability",
        children: "UIAbility"
      }), "从创建到销毁过程其生命周期是动态变化的。AbilityLifecycleCallback模块提供监听", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability",
        children: "UIAbility"
      }), "生命周期变化的能力，可用于统计每个UIAbility的运行时长、执行与UIAbility业务逻辑解耦的数据加载等场景。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(732877)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本模块首批接口从API version 9 开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本模块接口仅可在Stage模型下使用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本模块接口只能监听进程内UIAbility生命周期变化。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用说明",
      children: "使用说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["应用创建AbilityLifecycleCallback对象，并调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-applicationcontext/js-apis-inner-application-applicationcontext#applicationcontextonabilitylifecycle",
          children: "ApplicationContext.on('abilityLifecycle')"
        }), "接口注册UIAbility生命周期变化监听。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当UIAbility生命周期变化时，应用可以通过已注册的AbilityLifecycleCallback对象接收到UIAbility生命周期的变化通知。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["当应用不需要监听UIAbility生命周期变化时，需要通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-applicationcontext/js-apis-inner-application-applicationcontext#applicationcontextoffabilitylifecycle",
          children: "ApplicationContext.off('abilityLifecycle')"
        }), "接口取消监听。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "导入模块",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { AbilityLifecycleCallback } from '@kit.AbilityKit';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "abilitylifecyclecallback",
      children: "AbilityLifecycleCallback"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onabilitycreate",
      children: "onAbilityCreate"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onAbilityCreate(ability: UIAbility): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在UIAbility的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability#oncreate",
        children: "onCreate"
      }), "触发后回调。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API"
        })
      }), "：从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Ability.AbilityRuntime.AbilityCore"]
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
            children: "ability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability",
              children: "UIAbility"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调事件对应的UIAbility对象。"
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
      children: ["参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "#abilitylifecyclecallback%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B",
        children: "AbilityLifecycleCallback使用示例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onwindowstagecreate",
      children: "onWindowStageCreate"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onWindowStageCreate(ability: UIAbility, windowStage: window.WindowStage): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在UIAbility的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability#onwindowstagecreate",
        children: "onWindowStageCreate"
      }), "触发后回调。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API"
        })
      }), "：从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Ability.AbilityRuntime.AbilityCore"]
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
            children: "ability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability",
              children: "UIAbility"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调事件对应的UIAbility对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "windowStage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-windowstage/arkts-apis-window-windowstage",
              children: "window.WindowStage"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调事件对应的UIAbility主窗管理器。"
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
      children: ["参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "#abilitylifecyclecallback%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B",
        children: "AbilityLifecycleCallback使用示例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onwindowstageactive",
      children: "onWindowStageActive"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onWindowStageActive(ability: UIAbility, windowStage: window.WindowStage): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在UIAbility主窗获焦时触发回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API"
        })
      }), "：从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Ability.AbilityRuntime.AbilityCore"]
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
            children: "ability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability",
              children: "UIAbility"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调事件对应的UIAbility对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "windowStage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-windowstage/arkts-apis-window-windowstage",
              children: "window.WindowStage"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调事件对应的UIAbility主窗管理器。"
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
      children: ["参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "#abilitylifecyclecallback%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B",
        children: "AbilityLifecycleCallback使用示例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onwindowstageinactive",
      children: "onWindowStageInactive"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onWindowStageInactive(ability: UIAbility, windowStage: window.WindowStage): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在UIAbility主窗失焦时触发回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API"
        })
      }), "：从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Ability.AbilityRuntime.AbilityCore"]
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
            children: "ability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability",
              children: "UIAbility"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调事件对应的UIAbility对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "windowStage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-windowstage/arkts-apis-window-windowstage",
              children: "window.WindowStage"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调事件对应的UIAbility主窗管理器。"
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
      children: ["参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "#abilitylifecyclecallback%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B",
        children: "AbilityLifecycleCallback使用示例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onwindowstagedestroy",
      children: "onWindowStageDestroy"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onWindowStageDestroy(ability: UIAbility, windowStage: window.WindowStage): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在UIAbility的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability#onwindowstagedestroy",
        children: "onWindowStageDestroy"
      }), "触发后回调。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API"
        })
      }), "：从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Ability.AbilityRuntime.AbilityCore"]
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
            children: "ability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability",
              children: "UIAbility"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调事件对应的UIAbility对象"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "windowStage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-windowstage/arkts-apis-window-windowstage",
              children: "window.WindowStage"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调事件对应的UIAbility主窗管理器。"
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
      children: ["参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "#abilitylifecyclecallback%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B",
        children: "AbilityLifecycleCallback使用示例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onabilitydestroy",
      children: "onAbilityDestroy"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onAbilityDestroy(ability: UIAbility): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在UIAbility的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability#ondestroy",
        children: "onDestroy"
      }), "触发后回调。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API"
        })
      }), "：从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Ability.AbilityRuntime.AbilityCore"]
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
            children: "ability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability",
              children: "UIAbility"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调事件对应的UIAbility对象。"
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
      children: ["参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "#abilitylifecyclecallback%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B",
        children: "AbilityLifecycleCallback使用示例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onabilityforeground",
      children: "onAbilityForeground"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onAbilityForeground(ability: UIAbility): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在UIAbility的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability#onforeground",
        children: "onForeground"
      }), "触发后回调。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API"
        })
      }), "：从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Ability.AbilityRuntime.AbilityCore"]
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
            children: "ability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability",
              children: "UIAbility"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调事件对应的UIAbility对象。"
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
      children: ["参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "#abilitylifecyclecallback%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B",
        children: "AbilityLifecycleCallback使用示例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onabilitybackground",
      children: "onAbilityBackground"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onAbilityBackground(ability: UIAbility): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在UIAbility的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability#onbackground",
        children: "onBackground"
      }), "触发后回调。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API"
        })
      }), "：从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Ability.AbilityRuntime.AbilityCore"]
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
            children: "ability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability",
              children: "UIAbility"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调事件对应的UIAbility对象。"
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
      children: ["参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "#abilitylifecyclecallback%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B",
        children: "AbilityLifecycleCallback使用示例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onabilitycontinue",
      children: "onAbilityContinue"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onAbilityContinue(ability: UIAbility): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在UIAbility的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability#oncontinue",
        children: "onContinue"
      }), "触发后回调。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API"
        })
      }), "：从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Ability.AbilityRuntime.AbilityCore"]
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
            children: "ability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability",
              children: "UIAbility"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调事件对应的UIAbility对象。"
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
      children: ["参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "#abilitylifecyclecallback%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B",
        children: "AbilityLifecycleCallback使用示例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onabilitywillcreate12",
      children: "onAbilityWillCreate12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onAbilityWillCreate?(ability: UIAbility): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在UIAbility的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability#oncreate",
        children: "onCreate"
      }), "触发前回调。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API"
        })
      }), "：从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Ability.AbilityRuntime.AbilityCore"]
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
            children: "ability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability",
              children: "UIAbility"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调事件对应的UIAbility对象。"
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
      children: ["参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "#abilitylifecyclecallback%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B",
        children: "AbilityLifecycleCallback使用示例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onwindowstagewillcreate12",
      children: "onWindowStageWillCreate12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onWindowStageWillCreate?(ability: UIAbility, windowStage: window.WindowStage): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在UIAbility的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability#onwindowstagecreate",
        children: "onWindowStageCreate"
      }), "触发前回调。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API"
        })
      }), "：从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Ability.AbilityRuntime.AbilityCore"]
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
            children: "ability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability",
              children: "UIAbility"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调事件对应的UIAbility对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "windowStage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-windowstage/arkts-apis-window-windowstage",
              children: "window.WindowStage"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调事件对应的UIAbility主窗管理器。"
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
      children: ["参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "#abilitylifecyclecallback%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B",
        children: "AbilityLifecycleCallback使用示例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onwindowstagewilldestroy12",
      children: "onWindowStageWillDestroy12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onWindowStageWillDestroy?(ability: UIAbility, windowStage: window.WindowStage): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在UIAbility的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability#onwindowstagedestroy",
        children: "onWindowStageDestroy"
      }), "触发前回调。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API"
        })
      }), "：从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Ability.AbilityRuntime.AbilityCore"]
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
            children: "ability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability",
              children: "UIAbility"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调事件对应的UIAbility对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "windowStage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-windowstage/arkts-apis-window-windowstage",
              children: "window.WindowStage"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调事件对应的UIAbility主窗管理器。"
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
      children: ["参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "#abilitylifecyclecallback%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B",
        children: "AbilityLifecycleCallback使用示例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onabilitywillforeground12",
      children: "onAbilityWillForeground12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onAbilityWillForeground?(ability: UIAbility): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在UIAbility的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability#onforeground",
        children: "onForeground"
      }), "触发前回调。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API"
        })
      }), "：从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Ability.AbilityRuntime.AbilityCore"]
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
            children: "ability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability",
              children: "UIAbility"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调事件对应的UIAbility对象。"
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
      children: ["参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "#abilitylifecyclecallback%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B",
        children: "AbilityLifecycleCallback使用示例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onabilitywilldestroy12",
      children: "onAbilityWillDestroy12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onAbilityWillDestroy?(ability: UIAbility): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在UIAbility的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability#ondestroy",
        children: "onDestroy"
      }), "触发前回调。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API"
        })
      }), "：从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Ability.AbilityRuntime.AbilityCore"]
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
            children: "ability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability",
              children: "UIAbility"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调事件对应的UIAbility对象。"
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
      children: ["参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "#abilitylifecyclecallback%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B",
        children: "AbilityLifecycleCallback使用示例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onabilitywillbackground12",
      children: "onAbilityWillBackground12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onAbilityWillBackground?(ability: UIAbility): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在UIAbility的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability#onbackground",
        children: "onBackground"
      }), "触发前回调。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API"
        })
      }), "：从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Ability.AbilityRuntime.AbilityCore"]
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
            children: "ability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability",
              children: "UIAbility"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调事件对应的UIAbility对象。"
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
      children: ["参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "#abilitylifecyclecallback%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B",
        children: "AbilityLifecycleCallback使用示例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onwillnewwant12",
      children: "onWillNewWant12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onWillNewWant?(ability: UIAbility): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在UIAbility的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability#onnewwant",
        children: "onNewWant"
      }), "触发前回调。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API"
        })
      }), "：从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Ability.AbilityRuntime.AbilityCore"]
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
            children: "ability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability",
              children: "UIAbility"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调事件对应的UIAbility对象。"
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
      children: ["参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "#abilitylifecyclecallback%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B",
        children: "AbilityLifecycleCallback使用示例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onnewwant12",
      children: "onNewWant12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onNewWant?(ability: UIAbility): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在UIAbility的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability#onnewwant",
        children: "onNewWant"
      }), "触发后回调。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API"
        })
      }), "：从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Ability.AbilityRuntime.AbilityCore"]
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
            children: "ability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability",
              children: "UIAbility"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调事件对应的UIAbility对象。"
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
      children: ["参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "#abilitylifecyclecallback%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B",
        children: "AbilityLifecycleCallback使用示例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onabilitywillcontinue12",
      children: "onAbilityWillContinue12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onAbilityWillContinue?(ability: UIAbility): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在UIAbility的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability#oncontinue",
        children: "onContinue"
      }), "触发前回调。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API"
        })
      }), "：从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Ability.AbilityRuntime.AbilityCore"]
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
            children: "ability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability",
              children: "UIAbility"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调事件对应的UIAbility对象。"
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
      children: ["参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "#abilitylifecyclecallback%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B",
        children: "AbilityLifecycleCallback使用示例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onwindowstagewillrestore12",
      children: "onWindowStageWillRestore12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onWindowStageWillRestore?(ability: UIAbility, windowStage: window.WindowStage): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在UIAbility的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability#onwindowstagerestore",
        children: "onWindowStageRestore"
      }), "触发前回调。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API"
        })
      }), "：从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Ability.AbilityRuntime.AbilityCore"]
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
            children: "ability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability",
              children: "UIAbility"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调事件对应的UIAbility对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "windowStage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-windowstage/arkts-apis-window-windowstage",
              children: "window.WindowStage"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调事件对应的UIAbility主窗管理器。"
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
      children: ["参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "#abilitylifecyclecallback%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B",
        children: "AbilityLifecycleCallback使用示例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onwindowstagerestore12",
      children: "onWindowStageRestore12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onWindowStageRestore?(ability: UIAbility, windowStage: window.WindowStage): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在UIAbility的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability#onwindowstagerestore",
        children: "onWindowStageRestore"
      }), "触发后回调。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API"
        })
      }), "：从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Ability.AbilityRuntime.AbilityCore"]
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
            children: "ability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability",
              children: "UIAbility"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调事件对应的UIAbility对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "windowStage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-windowstage/arkts-apis-window-windowstage",
              children: "window.WindowStage"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调事件对应的UIAbility主窗管理器。"
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
      children: ["参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "#abilitylifecyclecallback%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B",
        children: "AbilityLifecycleCallback使用示例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onabilitywillsavestate12",
      children: "onAbilityWillSaveState12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onAbilityWillSaveState?(ability: UIAbility): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在UIAbility的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability#onsavestate",
        children: "onSaveState"
      }), "触发前回调。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API"
        })
      }), "：从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Ability.AbilityRuntime.AbilityCore"]
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
            children: "ability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability",
              children: "UIAbility"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调事件对应的UIAbility对象。"
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
      children: ["参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "#abilitylifecyclecallback%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B",
        children: "AbilityLifecycleCallback使用示例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onabilitysavestate12",
      children: "onAbilitySaveState12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onAbilitySaveState?(ability: UIAbility): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在UIAbility的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability#onsavestate",
        children: "onSaveState"
      }), "触发后回调。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API"
        })
      }), "：从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Ability.AbilityRuntime.AbilityCore"]
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
            children: "ability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability",
              children: "UIAbility"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调事件对应的UIAbility对象。"
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
      children: ["参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "#abilitylifecyclecallback%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B",
        children: "AbilityLifecycleCallback使用示例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "abilitylifecyclecallback使用示例",
      children: "AbilityLifecycleCallback使用示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本示例展示了生命周期监听机制的部分使用场景："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["在", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ability-kit/stage-model-development/stage-model-application-components/abilitystage",
          children: "AbilityStage"
        }), "创建时注册监听。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["在", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ability-kit/stage-model-development/stage-model-application-components/abilitystage",
          children: "AbilityStage"
        }), "销毁时注销监听。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "监听到对应UIAbility创建时加载资源，监听到对应UIAbility销毁时释放资源。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在UIAbility创建、销毁及前后台状态切换时，记录事件并向外发送通知。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 以MyStage.ets文件为例，使用AbilityLifecycleCallback监听UIAbility生命周期\nimport { AbilityLifecycleCallback, AbilityStage, application, UIAbility } from \"@kit.AbilityKit\";\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { JSON } from \"@kit.ArkTS\";\nimport { window } from \"@kit.ArkUI\";\nimport { BusinessError } from \"@kit.BasicServicesKit\";\n\nconst DOMAIN = 0x0000;\nconst TAG = 'testTag';\n\nfunction loadContent() {\n  // 加载数据\n}\n\nfunction releaseContent() {\n  // 释放数据\n}\n\nfunction recordAbilityEvent(abilityName: string) {\n  // 执行打点\n}\n\nfunction publishEvent() {\n  // 对外发布通知\n}\n\nlet abilityLifecycleCallback: AbilityLifecycleCallback = {\n  onAbilityCreate(ability: UIAbility) {\n    hilog.info(DOMAIN, TAG, 'onAbilityCreate: ' + ability.context.abilityInfo.name);\n    // UIAbility事件打点记录\n    recordAbilityEvent(ability.context.abilityInfo.name);\n    // 模拟入口UIAbility创建时，加载资源对外发布通知\n    if (ability.context.abilityInfo.name === 'EntryAbility') {\n      loadContent();\n      publishEvent();\n    }\n  },\n  onWindowStageCreate(ability: UIAbility, windowStage: window.WindowStage) {\n    hilog.info(DOMAIN, TAG, 'AbilityLifecycleCallback onWindowStageCreate.');\n  },\n  onWindowStageActive(ability: UIAbility, windowStage: window.WindowStage) {\n    hilog.info(DOMAIN, TAG, 'AbilityLifecycleCallback onWindowStageActive.');\n  },\n  onWindowStageInactive(ability: UIAbility, windowStage: window.WindowStage) {\n    hilog.info(DOMAIN, TAG, 'AbilityLifecycleCallback onWindowStageInactive.');\n  },\n  onWindowStageDestroy(ability: UIAbility, windowStage: window.WindowStage) {\n    hilog.info(DOMAIN, TAG, 'AbilityLifecycleCallback onWindowStageDestroy.');\n  },\n  onAbilityDestroy(ability: UIAbility) {\n    hilog.info(DOMAIN, TAG, 'onAbilityDestroy: ' + ability.context.abilityInfo.name);\n    recordAbilityEvent(ability.context.abilityInfo.name);\n    // 模拟入口UIAbility销毁时，释放资源\n    if (ability.context.abilityInfo.name === 'EntryAbility') {\n      releaseContent();\n      publishEvent();\n    }\n  },\n  onAbilityForeground(ability: UIAbility) {\n    hilog.info(DOMAIN, TAG, 'AbilityLifecycleCallback onAbilityForeground.');\n    recordAbilityEvent(ability.context.abilityInfo.name);\n    if (ability.context.abilityInfo.name === 'EntryAbility') {\n      publishEvent();\n    }\n  },\n  onAbilityBackground(ability: UIAbility) {\n    hilog.info(DOMAIN, TAG, 'AbilityLifecycleCallback onAbilityBackground.');\n    recordAbilityEvent(ability.context.abilityInfo.name);\n    if (ability.context.abilityInfo.name === 'EntryAbility') {\n      publishEvent();\n    }\n  },\n  onAbilityContinue(ability: UIAbility) {\n    hilog.info(DOMAIN, TAG, 'AbilityLifecycleCallback onAbilityContinue.');\n  },\n  onNewWant(ability: UIAbility) {\n    hilog.info(DOMAIN, TAG, 'AbilityLifecycleCallback onNewWant');\n  },\n  onWillNewWant(ability: UIAbility) {\n    hilog.info(DOMAIN, TAG, 'AbilityLifecycleCallback onWillNewWant');\n  },\n  onAbilityWillCreate(ability: UIAbility) {\n    hilog.info(DOMAIN, TAG, 'AbilityLifecycleCallback onAbilityWillCreate');\n  },\n  onWindowStageWillCreate(ability: UIAbility, windowStage: window.WindowStage) {\n    hilog.info(DOMAIN, TAG, 'AbilityLifecycleCallback onWindowStageWillCreate');\n  },\n  onWindowStageWillDestroy(ability: UIAbility, windowStage: window.WindowStage) {\n    hilog.info(DOMAIN, TAG, 'AbilityLifecycleCallback onWindowStageWillDestroy');\n  },\n  onAbilityWillDestroy(ability: UIAbility) {\n    hilog.info(DOMAIN, TAG, 'AbilityLifecycleCallback onAbilityWillDestroy');\n  },\n  onAbilityWillForeground(ability: UIAbility) {\n    hilog.info(DOMAIN, TAG, 'AbilityLifecycleCallback onAbilityWillForeground');\n  },\n  onAbilityWillBackground(ability: UIAbility) {\n    hilog.info(DOMAIN, TAG, 'AbilityLifecycleCallback onAbilityWillBackground');\n  },\n  onAbilityWillContinue(ability: UIAbility) {\n    hilog.info(DOMAIN, TAG, 'AbilityLifecycleCallback onAbilityWillContinue.');\n  },\n  onWindowStageWillRestore(ability: UIAbility, windowStage: window.WindowStage) {\n    hilog.info(DOMAIN, TAG, 'AbilityLifecycleCallback onWindowStageWillRestore.');\n  },\n  onWindowStageRestore(ability: UIAbility, windowStage: window.WindowStage) {\n    hilog.info(DOMAIN, TAG, 'AbilityLifecycleCallback onWindowStageRestore.');\n  },\n  onAbilityWillSaveState(ability: UIAbility) {\n    hilog.info(DOMAIN, TAG, 'AbilityLifecycleCallback onAbilityWillSaveState.');\n  },\n  onAbilitySaveState(ability: UIAbility) {\n    hilog.info(DOMAIN, TAG, 'AbilityLifecycleCallback onAbilitySaveState.');\n  }\n};\n\nlet lifecycleId = -1; // 保存监听id\n\nexport default class MyStage extends AbilityStage {\n  onCreate(): void {\n    hilog.info(DOMAIN, TAG, 'AbilityStage onCreate')\n\n    // AbilityStage创建时注册UIAbility生命周期监听，并把监听id保存起来\n    try {\n      let applicationContext = application.getApplicationContext();\n      lifecycleId = applicationContext.on('abilityLifecycle', abilityLifecycleCallback);\n    } catch (e) {\n      hilog.error(DOMAIN, TAG, `register abilityLifecycle failed: ${JSON.stringify(e)}`);\n    }\n  }\n\n  onDestroy(): void {\n    // AbilityStage销毁时取消UIAbility生命周期监听注册\n    let applicationContext = application.getApplicationContext();\n    applicationContext.off('abilityLifecycle', lifecycleId).catch((e: BusinessError) => {\n      hilog.error(DOMAIN, TAG, `unregister abilityLifecycle failed: ${JSON.stringify(e)}`);\n    });\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 以EntryAbility.ets为例，展示应用入口UIAbility\nimport { AbilityConstant, ConfigurationConstant, UIAbility, Want } from '@kit.AbilityKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { window } from '@kit.ArkUI';\n\nconst DOMAIN = 0x0000;\nconst TAG = 'testTag';\n\nexport default class EntryAbility extends UIAbility {\n  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {\n    this.context.getApplicationContext().setColorMode(ConfigurationConstant.ColorMode.COLOR_MODE_NOT_SET);\n    hilog.info(DOMAIN, TAG, 'EntryAbility onCreate');\n  }\n\n  onDestroy(): void {\n    hilog.info(DOMAIN, TAG, 'EntryAbility onDestroy');\n  }\n\n  onWindowStageCreate(windowStage: window.WindowStage): void {\n    // 主窗创建\n    hilog.info(DOMAIN, TAG, 'EntryAbility onWindowStageCreate');\n\n    windowStage.loadContent('pages/Index', (err) => {\n      if (err.code) {\n        hilog.error(DOMAIN, TAG, 'Failed to load the content. Cause: %{public}s', JSON.stringify(err));\n        return;\n      }\n      hilog.info(DOMAIN, TAG, 'Succeeded in loading the content.');\n    });\n  }\n\n  onWindowStageDestroy(): void {\n    // 主窗销毁\n    hilog.info(DOMAIN, TAG, 'EntryAbility onWindowStageDestroy');\n  }\n\n  onForeground(): void {\n    // UIAbility切换到前台\n    hilog.info(DOMAIN, TAG, 'EntryAbility onForeground');\n  }\n\n  onBackground(): void {\n    // UIAbility切换到后台\n    hilog.info(DOMAIN, TAG, 'EntryAbility  onBackground');\n  }\n}\n"
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
732877(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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