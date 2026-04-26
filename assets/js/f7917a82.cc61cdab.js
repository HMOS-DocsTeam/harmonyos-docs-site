"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["75595"], {
696051(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ability_kit_stage_model_development_inter_app_redirection_directional_redirection_app_startup_overview_app_startup_overview_md_f79_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ability-kit-stage-model-development-inter-app-redirection-directional-redirection-app-startup-overview-app-startup-overview-md-f79.json
var site_docs_ability_kit_stage_model_development_inter_app_redirection_directional_redirection_app_startup_overview_app_startup_overview_md_f79_namespaceObject = JSON.parse('{"id":"ability-kit/stage-model-development/inter-app-redirection/directional-redirection/app-startup-overview/app-startup-overview","title":"拉起指定应用概述","description":"本章节主要介绍如何通过应用链接跳转的方式拉起指定应用。","source":"@site/docs/ability-kit/stage-model-development/inter-app-redirection/directional-redirection/app-startup-overview/app-startup-overview.md","sourceDirName":"ability-kit/stage-model-development/inter-app-redirection/directional-redirection/app-startup-overview","slug":"/ability-kit/stage-model-development/inter-app-redirection/directional-redirection/app-startup-overview/","permalink":"/harmonyos-docs-site/ability-kit/stage-model-development/inter-app-redirection/directional-redirection/app-startup-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"拉起指定应用概述","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/app-startup-overview","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"应用间跳转概述","permalink":"/harmonyos-docs-site/ability-kit/stage-model-development/inter-app-redirection/link-between-apps-overview/"},"next":{"title":"（可选）使用canOpenLink判断应用是否可访问","permalink":"/harmonyos-docs-site/ability-kit/stage-model-development/inter-app-redirection/directional-redirection/canopenlink/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ability-kit/stage-model-development/inter-app-redirection/directional-redirection/app-startup-overview/app-startup-overview.md


const frontMatter = {
	title: '拉起指定应用概述',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/app-startup-overview',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '拉起指定应用概述';

const assets = {

};



const toc = [{
  "value": "应用链接",
  "id": "应用链接",
  "level": 2
}, {
  "value": "运作机制",
  "id": "运作机制",
  "level": 2
}, {
  "value": "应用链接分类",
  "id": "应用链接分类",
  "level": 2
}, {
  "value": "FAQ",
  "id": "faq",
  "level": 2
}, {
  "value": "跨应用拉起UIAbility时，如何感知跳转弹框的用户选择结果",
  "id": "跨应用拉起uiability时如何感知跳转弹框的用户选择结果",
  "level": 3
}, {
  "value": "应用间跳转时如何取消“是否允许跳转”的确认弹框",
  "id": "应用间跳转时如何取消是否允许跳转的确认弹框",
  "level": 3
}, {
  "value": "应用间跳转时如何取消“暂无可用打开方式”弹框",
  "id": "应用间跳转时如何取消暂无可用打开方式弹框",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "拉起指定应用概述",
        children: "拉起指定应用概述"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本章节主要介绍如何通过应用链接跳转的方式拉起指定应用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(812845)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API 12开始，已不再推荐三方应用使用指定Ability方式（即显式Want）拉起其他应用。关于如何从指定Ability方式切换到指定", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ability-kit/stage-model-development/inter-app-redirection/directional-redirection/app-startup-overview#%E5%BA%94%E7%94%A8%E9%93%BE%E6%8E%A5",
        children: "应用链接"
      }), "方式，详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ability-kit/stage-model-development/inter-app-redirection/directional-redirection/uiability-startup-adjust",
        children: "显式Want跳转切换应用链接跳转适配指导"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "应用链接",
      children: "应用链接"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用链接是指可以将用户引导至应用内特定位置或相关网页的URL，常见的格式如下。更多关于应用链接格式与字段含义的说明，详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ability-kit/stage-model-development/inter-app-redirection/directional-redirection/app-uri-config",
        children: "应用链接说明"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "scheme://host[:port]/path\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "运作机制",
      children: "运作机制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "目标应用在配置文件中注册自己的URL，并对外提供URL。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "拉起方应用在跳转接口中传入目标应用的URL等信息。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "系统接收到URL等相关信息，会寻找对应匹配项，并跳转至目标应用。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "应用链接分类",
      children: "应用链接分类"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "按照应用链接的scheme以及校验机制的不同，可以分为Deep Linking与App Linking两种方式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Deep Linking"
          })
        }), "：是一种通过链接跳转至应用特定页面的技术，其特点是支持开发者定义任意形式的scheme。由于缺乏域名校验机制，容易被其他应用所仿冒。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "App Linking"
          })
        }), "：其限定了scheme必须为https，同时通过增加域名校验机制，可以从已匹配到的应用中筛选过滤出目标应用，消除应用查询和定位中产生的歧义，直达受信的目标应用。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "相比Deep Linking，App Linking具有更高的安全性和可靠性，用户体验更佳。推荐开发者将App Linking作为首选方案。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "App Linking（推荐）"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Deep Linking"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "实现方案"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "目标应用需要在module.json5中声明应用链接；同时需要向系统注册域名并通过域名认证。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "目标应用需要在module.json5中声明应用链接。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "链接格式"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "scheme必须为https。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "scheme可以自定义。通常不为https、http、file，否则会拉起默认的系统浏览器。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "是否可用于分享或直接在网页中访问"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可以"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不可以，需在代码中调用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "是否可以直接拉起目标应用"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可以"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可以，但不推荐使用，存在被仿冒风险。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Deep Linking与App Linking均可以使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiabilitycontext/js-apis-inner-application-uiabilitycontext#openlink12",
        children: "openLink"
      }), "接口实现，不同条件下的跳转效果如下。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(508979)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该接口中的appLinkingOnly字段表示是否必须以App Linking的方式启动UIAbility，默认为false。appLinkingOnly为true一般只用于浏览器等应用。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "应用链接类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "App Linking（推荐）"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Deep Linking"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "appLinkingOnly为false且目标应用已安装"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "直接跳转打开目标应用。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "跳转目标应用（如果有多个符合条件的应用时，展示应用选择弹框）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "appLinkingOnly为false且目标应用未安装"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "跳转默认浏览器打开网页。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回失败，系统不跳转，由应用自行处理；当前会展示“链接无法打开”弹框。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "appLinkingOnly为true且目标应用已安装"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "直接跳转打开目标应用。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回失败，系统不跳转，由应用自行处理。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "appLinkingOnly为true且目标应用未安装"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回失败，系统不跳转由应用自行处理。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回失败，系统不跳转，由应用自行处理。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过App Linking方式拉起指定应用的示意图如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(86365)/* ["default"] */.A) + "",
        width: "485",
        height: "238"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过Deep Linking方式拉起应用时，如果存在多个符合条件的应用，需要用户选择后方可跳转到指定应用。示意图如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(379081)/* ["default"] */.A) + "",
        width: "766",
        height: "272"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faq",
      children: "FAQ"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "跨应用拉起uiability时如何感知跳转弹框的用户选择结果",
      children: "跨应用拉起UIAbility时，如何感知跳转弹框的用户选择结果"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过startAbility方式或Deep Linking方式拉起其他应用的UIAbility时，系统会弹出“是否允许跳转”的确认弹框，由用户进行选择。当前暂不支持获取用户操作结果，当用户取消跳转时，应用也无法感知。相关能力已纳入版本需求规划，请持续关注。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "应用间跳转时如何取消是否允许跳转的确认弹框",
      children: "应用间跳转时如何取消“是否允许跳转”的确认弹框"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiabilitycontext/js-apis-inner-application-uiabilitycontext#openlink12",
        children: "openLink"
      }), "或", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiabilitycontext/js-apis-inner-application-uiabilitycontext#startability",
        children: "startAbility"
      }), "拉起其他应用时，为了防止应用的恶意跳转，系统会弹出“是否允许跳转”的确认弹框，由用户进行确认。不支持开发者取消该弹框。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(844155)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "“是否允许跳转”的确认弹框实际显示的提示语由系统定义，比如“xx想要拉起xx”，此处仅为举例。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "应用间跳转时如何取消暂无可用打开方式弹框",
      children: "应用间跳转时如何取消“暂无可用打开方式”弹框"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiabilitycontext/js-apis-inner-application-uiabilitycontext#openlink12",
        children: "openLink"
      }), "或", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiabilitycontext/js-apis-inner-application-uiabilitycontext#startability",
        children: "startAbility"
      }), "隐式启动其他应用时，如果没有找到匹配的应用，系统会弹框提示“暂无可用打开方式”。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "openLink方式启动其他应用：API version 21版本之前，不支持取消弹框提示。从API version 21版本开始，可以将OpenLinkOptions中的hideFailureTipDialog字段设置为true，取消弹框提示。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "示例如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { common, OpenLinkOptions, wantConstant, CompletionHandler, bundleManager } from '@kit.AbilityKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nconst DOMAIN = 0xeeee;\nconst TAG: string = '[openLinkDemo]';\n\n@Entry\n@Component\nstruct Index {\n  @State message: string = 'I am caller';\n\n  build() {\n    Row() {\n      Column() {\n        Text(this.message)\n          .fontSize(50)\n          .fontWeight(FontWeight.Bold)\n        Button('start browser', { type: ButtonType.Capsule, stateEffect: true })\n          .width('87%')\n          .height('5%')\n          .margin({ bottom: '12vp' })\n          .onClick(() => {\n            let context = this.getUIContext().getHostContext() as common.UIAbilityContext;\n            let link: string = 'https://www.example.com';\n            let completionHandler: CompletionHandler = {\n              onRequestSuccess: (elementName: bundleManager.ElementName, message: string): void => {\n                console.info(`${elementName.bundleName}-${elementName.moduleName}-${elementName.abilityName} start succeeded: ${message}`);\n              },\n              onRequestFailure: (elementName: bundleManager.ElementName, message: string): void => {\n                console.error(`${elementName.bundleName}-${elementName.moduleName}-${elementName.abilityName} start failed: ${message}`);\n              }\n            };\n            let openLinkOptions: OpenLinkOptions = {\n              appLinkingOnly: false,\n              // hideFailureTipDialog字段需要在appLinkingOnly字段是false时才生效\n              hideFailureTipDialog: true,\n              parameters: {\n                [wantConstant.Params.CONTENT_TITLE_KEY]: 'contentTitle',\n                keyString: 'str',\n                keyNumber: 200,\n                keyBool: false,\n                keyObj: {\n                  keyObjKey: 'objValue',\n                }\n              },\n              completionHandler: completionHandler\n            };\n            try {\n              context.openLink(\n                link,\n                openLinkOptions,\n                (err, result) => {\n                  hilog.error(DOMAIN, TAG, `openLink callback error.code: ${JSON.stringify(err)}`);\n                  hilog.info(DOMAIN, TAG, `openLink callback result: ${JSON.stringify(result.resultCode)}`);\n                  hilog.info(DOMAIN, TAG, `openLink callback result data: ${JSON.stringify(result.want)}`);\n                }\n              ).then(() => {\n                hilog.info(DOMAIN, TAG, `open link success.`);\n              }).catch((err: BusinessError) => {\n                hilog.error(DOMAIN, TAG, `open link failed, errCode: ${JSON.stringify(err.code)}`);\n              });\n            } catch (e) {\n              hilog.error(DOMAIN, TAG, `open link failed, errCode: ${JSON.stringify(e.code)}`);\n            }\n          })\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["startAbility隐式启动其他应用：可以通过将Want中的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/both-models/js-apis-app-ability-wantconstant/js-apis-app-ability-wantconstant#flags",
            children: "flags字段"
          }), "设置为FLAG_START_WITHOUT_TIPS，取消弹框提示。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "示例如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { common, Want, wantConstant } from '@kit.AbilityKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nconst TAG: string = '[Page_UIAbilityComponentsInteractive]';\nconst DOMAIN_NUMBER: number = 0xFF00;\n\n@Entry\n@Component\nstruct Page_UIAbilityComponentsInteractive {\n  private context = this.getUIContext().getHostContext() as common.   UIAbilityContext;\n\n  build() {\n    Column() {\n      // ...\n      List({ initialIndex: 0 }) {\n        ListItem() {\n          Row() {\n            // ...\n          }\n          .onClick(() => {\n            // context为UIAbility对象的成员\n            let wantInfo: Want = {\n              deviceId: '', // deviceId为空表示本设备\n              action: 'xxxx', // 隐式启动\n              flags: wantConstant.Flags.FLAG_START_WITHOUT_TIPS,\n            };\n            // context为调用方UIAbility的UIAbilityContext\n            this.context.startAbility(wantInfo).then(() => {\n              hilog.info(DOMAIN_NUMBER, TAG, 'startAbility success.');\n            }).catch((error: BusinessError) => {\n              hilog.error(DOMAIN_NUMBER, TAG, 'startAbility failed.');\n            });\n          })\n        }\n        // ...\n      }\n      // ...\n    }\n    // ...\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
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
379081(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957502-87b6ca239eb41c77dcee545bcab2e9d2.png");

},
86365(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437547-675d978123b8a095739074aa5841cba0.png");

},
508979(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
844155(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
812845(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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