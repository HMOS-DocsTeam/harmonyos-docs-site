"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["564318"], {
501112(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_ability_api_ability_arkts_both_models_js_apis_app_ability_wantconstant_js_apis_app_ability_wantconstant_md_53f_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-ability-api-ability-arkts-both-models-js-apis-app-ability-wantconstant-js-apis-app-ability-wantconstant-md-53f.json
var site_docs_ref_ability_api_ability_arkts_both_models_js_apis_app_ability_wantconstant_js_apis_app_ability_wantconstant_md_53f_namespaceObject = JSON.parse('{"id":"ability-api/ability-arkts/both-models/js-apis-app-ability-wantconstant/js-apis-app-ability-wantconstant","title":"@ohos.app.ability.wantConstant (Want常量)","description":"wantConstant模块提供了Want操作相关的系统预设枚举和常量，例如在启动Ability时常用的Flag、Param参数等。","source":"@site/docs-ref/ability-api/ability-arkts/both-models/js-apis-app-ability-wantconstant/js-apis-app-ability-wantconstant.md","sourceDirName":"ability-api/ability-arkts/both-models/js-apis-app-ability-wantconstant","slug":"/ability-api/ability-arkts/both-models/js-apis-app-ability-wantconstant/js-apis-app-ability-wantconstant","permalink":"/harmonyos-docs-site/ref/ability-api/ability-arkts/both-models/js-apis-app-ability-wantconstant/js-apis-app-ability-wantconstant","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":15,"frontMatter":{"title":"@ohos.app.ability.wantConstant (Want常量)","sidebar_position":15,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-wantconstant","kit":"应用框架","last_updated":"2026-04-22","slug":"js-apis-app-ability-wantconstant"},"sidebar":"ref","previous":{"title":"@ohos.app.ability.wantAgent (WantAgent模块)","permalink":"/harmonyos-docs-site/ref/ability-api/ability-arkts/both-models/js-apis-app-ability-wantagent/js-apis-app-ability-wantagent"},"next":{"title":"@ohos.bundle.bundleManager (应用程序包管理模块)","permalink":"/harmonyos-docs-site/ref/ability-api/ability-arkts/both-models/js-apis-bundlemanager/js-apis-bundlemanager"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/ability-api/ability-arkts/both-models/js-apis-app-ability-wantconstant/js-apis-app-ability-wantconstant.md


const frontMatter = {
	title: '@ohos.app.ability.wantConstant (Want常量)',
	sidebar_position: 15,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-wantconstant',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'js-apis-app-ability-wantconstant'
};
const contentTitle = '@ohos.app.ability.wantConstant (Want常量)';

const assets = {

};



const toc = [{
  "value": "导入模块",
  "id": "导入模块",
  "level": 2
}, {
  "value": "Params",
  "id": "params",
  "level": 2
}, {
  "value": "Flags",
  "id": "flags",
  "level": 2
}, {
  "value": "ShowMode12+",
  "id": "showmode12",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
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
        id: "ohosappabilitywantconstant-want常量",
        children: "@ohos.app.ability.wantConstant (Want常量)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["wantConstant模块提供了", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/both-models/js-apis-app-ability-want/js-apis-app-ability-want",
        children: "Want"
      }), "操作相关的系统预设枚举和常量，例如在启动Ability时常用的Flag、Param参数等。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(372062)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本模块首批接口从API version 9开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "导入模块",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { wantConstant } from '@kit.AbilityKit';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "params",
      children: "Params"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/both-models/js-apis-app-ability-want/js-apis-app-ability-want#want",
        children: "Want.parameters"
      }), "字段常用的系统预置关键字。开发者可以通过这些预置关键字设置或获取应用跳转等场景中额外携带的参数信息。例如在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability",
        children: "UIAbility"
      }), "的启动阶段，如果从onCreate回调的入参want字段中获取到ABILITY_RECOVERY_RESTART的值为true，则表示当前UIAbility发生了故障重启。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Ability.AbilityBase"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ABILITY_BACK_TO_OTHER_MISSION_STACK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ability.params.backToOtherMissionStack"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示是否支持跨任务链返回。  该参数用于控制跨应用的UIAbility返回逻辑，其核心作用是改变用户执行返回键时的应用跳转行为。例如现有UIAbility A和UIAbility B，当前前台显示的是UIAbility A，随后系统服务又拉起UIAbility B（同时在Want的Params字段配置该参数为true），那么，当UIAbility B退出时，会返回到UIAbility A（即返回到最近一次的访问任务）。如果未配置该参数，则默认直接返回桌面。需要注意的是，该字段仅支持系统设置，三方应用传入该字段不生效。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API"
              })
            }), "：从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ABILITY_RECOVERY_RESTART10+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ohos.ability.params.abilityRecoveryRestart"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示当前Ability是否发生了故障恢复重启。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API"
              })
            }), "：从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CONTENT_TITLE_KEY10+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ohos.extra.param.key.contentTitle"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示元服务分享的标题。  在跨端分享的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability#onshare10",
              children: "onShare"
            }), "回调中，开发者可通过该字段设置分享的标题。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API"
              })
            }), "：从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHARE_ABSTRACT_KEY10+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ohos.extra.param.key.shareAbstract"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示元服务分享的内容摘要。  在跨端分享的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability#onshare10",
              children: "onShare"
            }), "回调中，开发者可通过该字段设置分享的摘要。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API"
              })
            }), "：从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHARE_URL_KEY10+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ohos.extra.param.key.shareUrl"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示元服务分享的URL链接。  在跨端分享的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability#onshare10",
              children: "onShare"
            }), "回调中，开发者可通过该字段设置分享的URL链接。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API"
              })
            }), "：从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SUPPORT_CONTINUE_PAGE_STACK_KEY10+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ohos.extra.param.key.supportContinuePageStack"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示在跨端迁移过程中是否迁移页面栈信息。默认值为true，表示在跨端迁移过程中自动迁移页面栈信息。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API"
              })
            }), "：从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SUPPORT_CONTINUE_SOURCE_EXIT_KEY10+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ohos.extra.param.key.supportContinueSourceExit"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示跨端迁移源端应用是否退出。默认值为true，表示在跨端迁移过程中源端应用自动退出。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API"
              })
            }), "：从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHOW_MODE_KEY12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ohos.extra.param.key.showMode"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-embeddableuiability/js-apis-app-ability-embeddableuiability",
              children: "EmbeddableUIAbility"
            }), "的显示模式，值为枚举类型", (0,jsx_runtime.jsx)(_components.a, {
              href: "#showmode12",
              children: "ShowMode"
            }), "  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API"
              })
            }), "：从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PARAMS_STREAM12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ability.params.stream"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示授权给目标方的文件URI列表。对应的value必须是string类型的文件URI数组。文件URI的获取参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/core-file-api/core-file-arkts/js-apis-file-fileuri/js-apis-file-fileuri#fileurigeturifrompath",
              children: "fileUri"
            }), " 。该字段需要与文件URI读写", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/both-models/js-apis-app-ability-wantconstant/js-apis-app-ability-wantconstant#flags",
              children: "Flags"
            }), "配合使用。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API"
              })
            }), "：从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "APP_CLONE_INDEX_KEY12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ohos.extra.param.key.appCloneIndex"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示分身应用索引。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API"
              })
            }), "：从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CALLER_REQUEST_CODE12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ohos.extra.param.key.callerRequestCode"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示应用拉起的请求码。  当调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiabilitycontext/js-apis-inner-application-uiabilitycontext#startabilityforresult",
              children: "startAbilityForResult"
            }), "或", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiabilitycontext/js-apis-inner-application-uiabilitycontext#openlink12",
              children: "openLink"
            }), "拉起目标方Ability时，需要目标方返回结果。为了确保目标方能够将结果准确返回到调用方，系统会自动生成唯一的requestCode，以标识本次调用。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API"
              })
            }), "：从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PAGE_PATH12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ohos.param.atomicservice.pagePath"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示元服务的页面路径。  如果元服务的页面跳转是通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-set-navigation-routing/arkts-routing",
              children: "router"
            }), "实现的，可以使用该参数指定跳转的页面，例如\"library/ets/pages/menu\"。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API"
              })
            }), "：从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ROUTER_NAME12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ohos.param.atomicservice.routerName"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示元服务的页面路由名称，即进行页面跳转时指定的页面名称。  如果元服务的页面跳转是通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-navigation-architecture",
              children: "Navigation"
            }), "实现的，可以通过ROUTER_NAME、PAGE_SOURCE_FILE及BUILD_FUNCTION联合使用指定跳转的页面。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API"
              })
            }), "：从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PAGE_SOURCE_FILE12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ohos.param.atomicservice.pageSourceFile"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示元服务的页面源文件。  如果元服务的页面跳转是通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-navigation-architecture",
              children: "Navigation"
            }), "实现的，可以通过ROUTER_NAME、PAGE_SOURCE_FILE及BUILD_FUNCTION联合使用指定跳转的页面。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API"
              })
            }), "：从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BUILD_FUNCTION12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ohos.param.atomicservice.buildFunction"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示元服务的生成函数。  如果元服务的页面跳转是通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-navigation-architecture",
              children: "Navigation"
            }), "实现的，可以通过ROUTER_NAME、PAGE_SOURCE_FILE及BUILD_FUNCTION联合使用指定跳转的页面。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API"
              })
            }), "：从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SUB_PACKAGE_NAME12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ohos.param.atomicservice.subpackageName"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示元服务的分包名。应用程序包支持多模块开发，每个应用程序包可能包含多个HAP或HSP。元服务为了实现快速启动效果，对HAP和HSP文件大小做了限制，并同时优化了启动机制，元服务的这种多模块开发方式称为“分包”。  打开元服务的时候，可以通过设置该参数拉起对应的分包。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API"
              })
            }), "：从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "APP_INSTANCE_KEY14+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ohos.extra.param.key.appInstance"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示具体的应用实例。  在", (0,jsx_runtime.jsx)(_components.a, {
              href: "/development-fundamentals/application-typical-scenarios/multiinstance",
              children: "应用创建多实例"
            }), "时，系统会为每个实例分配唯一的标识。应用跳转时，开发者可以通过设置该参数指定希望跳转到的已创建的应用实例。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CREATE_APP_INSTANCE_KEY14+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ohos.extra.param.key.createAppInstance"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示是否创建新应用实例。默认为false，表示不创建新应用实例。  开发者可以通过设置该参数为true拉起新的应用实例。需要注意的是，被拉起的应用需要支持多实例，参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/development-fundamentals/application-typical-scenarios/multiinstance",
              children: "应用创建多实例"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CALLER_APP_CLONE_INDEX14+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ohos.param.callerAppCloneIndex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示拉起方应用的分身索引。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "APP_LAUNCH_TRUSTLIST17+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ohos.params.appLaunchTrustList"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示隐式启动时的应用过滤列表。  隐式启动时仅匹配列表中的应用，值为string类型的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/bundlemanager/js-apis-bundlemanager-bundleinfo/js-apis-bundlemanager-bundleinfo#signatureinfo",
              children: "AppIdentifier"
            }), "数组，过滤列表最多支持50个应用，传入空数组不生效。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API"
              })
            }), "：从API version 17开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LAUNCH_REASON_MESSAGE18+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ohos.params.launchReasonMessage"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示应用拉起的原因。  调用方必须为系统应用，且需要申请ohos.permission.SET_LAUNCH_REASON_MESSAGE权限。当前取值支持：  \"ReasonMessage_SystemShare\"：表示系统分享拉起。  \"ReasonMessage_DesktopShortcut\"：表示桌面快捷方式拉起。  \"ReasonMessage_Notification\"：表示通知拉起。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API"
              })
            }), "：从API version 18开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DESTINATION_PLUGIN_ABILITY19+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ohos.params.pluginAbility"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指示目标Ability是插件Ability。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ATOMIC_SERVICE_SHARE_ROUTER20+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ohos.params.atomicservice.shareRouter"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示被拉起的元服务的页面栈信息。仅当拉起方为UIAbilityContext，被拉起方为元服务时生效。  例如，某元服务中包含首页和第2页，如果希望直接拉起元服务的第2页，可以在拉起元服务时通过该字段传递第2页的页面栈信息。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API"
              })
            }), "：从API version 20开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ABILITY_UNIFIED_DATA_KEY20+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ohos.param.ability.udKey"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示基于", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-unifieddatachannel/js-apis-data-unifieddatachannel",
              children: "UDMF"
            }), "进行文件分享时使用的唯一标识。该字段只允许系统应用设置，三方应用可以读取。  当Want中存在URI授权Flag字段（即", (0,jsx_runtime.jsx)(_components.a, {
              href: "#flags",
              children: "FLAG_AUTH_READ_URI_PERMISSION"
            }), "或", (0,jsx_runtime.jsx)(_components.a, {
              href: "#flags",
              children: "FLAG_AUTH_WRITE_URI_PERMISSION"
            }), "），且同时存在PARAMS_STREAM字段时，该字段将不生效。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API"
              })
            }), "：从API version 20开始，该接口支持在元服务中使用。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "flags",
      children: "Flags"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/both-models/js-apis-app-ability-want/js-apis-app-ability-want#want",
        children: "Want.flags"
      }), "字段常用的系统预置关键字。开发者可以通过这些预置关键字设置或获取应用跳转等场景中额外携带的标志位信息。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Ability.AbilityBase"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FLAG_AUTH_READ_URI_PERMISSION"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x00000001"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示临时授予接收方读取该URI指向的数据的权限。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API"
              })
            }), "：从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FLAG_AUTH_WRITE_URI_PERMISSION"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x00000002"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示临时授予接收方写入该URI指向的数据的权限。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API"
              })
            }), "：从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FLAG_AUTH_PERSISTABLE_URI_PERMISSION12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x00000040"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示该URI可被接收方持久化。目标应用可以通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/core-file-api/core-file-arkts/js-apis-fileshare/js-apis-fileshare#filesharepersistpermission11",
              children: "fileShare.persistPermission"
            }), "接口进行权限持久化。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FLAG_INSTALL_ON_DEMAND"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x00000800"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示拉起元服务时开启免安装功能。  - 如果开启了免安装功能，当系统检测到被拉起的元服务未安装时，会自动安装元服务，再进行拉起。  - 如果未开启免安装功能，当元服务未安装时，将拉起失败。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API"
              })
            }), "：从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FLAG_START_WITHOUT_TIPS11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x40000000"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示是否关闭匹配失败弹窗功能。  通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ability-kit/stage-model-development/inter-app-redirection/directional-redirection/app-startup-overview",
              children: "隐式方式拉起应用"
            }), "时，如果没有能够匹配的应用，默认会弹出提示弹窗“暂无可用打开方式”。开发者可以通过该字段屏蔽该弹窗。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FLAG_ABILITY_ON_COLLABORATE18+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x00002000"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["在多设备协同场景下，调用方应用通过DMS系统发起请求并且通过Flags字段携带此标志，协同方应用才会触发生命周期回调方法", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability#oncollaborate18",
              children: "onCollaborate()"
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "showmode12",
      children: "ShowMode12+"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["表示", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-embeddableuiability/js-apis-app-ability-embeddableuiability",
        children: "EmbeddableUIAbility"
      }), "被拉起时的显示模式。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Ability.AbilityBase"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "WINDOW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示独立窗口拉起模式。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API"
              })
            }), "：从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EMBEDDED_FULL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示嵌入式全屏拉起模式。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API"
              })
            }), "：从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EMBEDDED_HALF23+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示嵌入式半屏拉起模式。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "模型约束："
              })
            }), " 此接口仅可在Stage模型下使用。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API"
              })
            }), "：从API version 23开始，该接口支持在元服务中使用。"]
          })]
        })]
      })]
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
372062(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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