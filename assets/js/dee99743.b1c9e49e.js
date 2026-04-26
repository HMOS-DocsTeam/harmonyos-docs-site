"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["55356"], {
327136(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ability_kit_stage_model_development_inter_app_redirection_directional_redirection_uiability_startup_adjust_uiability_startup_adjust_md_dee_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ability-kit-stage-model-development-inter-app-redirection-directional-redirection-uiability-startup-adjust-uiability-startup-adjust-md-dee.json
var site_docs_ability_kit_stage_model_development_inter_app_redirection_directional_redirection_uiability_startup_adjust_uiability_startup_adjust_md_dee_namespaceObject = JSON.parse('{"id":"ability-kit/stage-model-development/inter-app-redirection/directional-redirection/uiability-startup-adjust/uiability-startup-adjust","title":"显式Want跳转切换应用链接跳转适配指导","description":"从API 12开始，已不再推荐三方应用使用指定Ability方式（即显式Want）拉起其他应用，推荐通过指定应用链接的方式来实现。","source":"@site/docs/ability-kit/stage-model-development/inter-app-redirection/directional-redirection/uiability-startup-adjust/uiability-startup-adjust.md","sourceDirName":"ability-kit/stage-model-development/inter-app-redirection/directional-redirection/uiability-startup-adjust","slug":"/ability-kit/stage-model-development/inter-app-redirection/directional-redirection/uiability-startup-adjust/","permalink":"/harmonyos-docs-site/ability-kit/stage-model-development/inter-app-redirection/directional-redirection/uiability-startup-adjust/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"显式Want跳转切换应用链接跳转适配指导","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/uiability-startup-adjust","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用Deep Linking实现应用间跳转","permalink":"/harmonyos-docs-site/ability-kit/stage-model-development/inter-app-redirection/directional-redirection/deep-linking-startup/"},"next":{"title":"应用链接说明","permalink":"/harmonyos-docs-site/ability-kit/stage-model-development/inter-app-redirection/directional-redirection/app-uri-config/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ability-kit/stage-model-development/inter-app-redirection/directional-redirection/uiability-startup-adjust/uiability-startup-adjust.md


const frontMatter = {
	title: '显式Want跳转切换应用链接跳转适配指导',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/uiability-startup-adjust',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '显式Want跳转切换应用链接跳转适配指导';

const assets = {

};



const toc = [{
  "value": "启动其他应用的UIAbility",
  "id": "启动其他应用的uiability",
  "level": 2
}, {
  "value": "启动其他应用的UIAbility并获取返回结果",
  "id": "启动其他应用的uiability并获取返回结果",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
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
        id: "显式want跳转切换应用链接跳转适配指导",
        children: "显式Want跳转切换应用链接跳转适配指导"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API 12开始，已不再推荐三方应用使用指定Ability方式（即显式Want）拉起其他应用，推荐通过指定", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ability-kit/stage-model-development/inter-app-redirection/directional-redirection/app-startup-overview#%E5%BA%94%E7%94%A8%E9%93%BE%E6%8E%A5",
        children: "应用链接"
      }), "的方式来实现。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本章节介绍如何从显式Want跳转切换到应用链接跳转。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "启动其他应用的uiability",
      children: "启动其他应用的UIAbility"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["将待跳转的应用安装到设备，在其对应UIAbility的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file",
            children: "module.json5配置文件"
          }), "中配置skills标签的entities字段、actions字段和uri字段："]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "\"actions\"列表中包含\"ohos.want.action.viewData\"。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "\"entities\"列表中包含\"entity.system.browsable\"。"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\"uris\"列表中包含\"scheme\"为\"https\"且\"domainVerify\"为true的元素。uri的匹配规则参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ability-kit/stage-model-development/stage-model-application-components/want/explicit-implicit-want-mappings#uri%E5%8C%B9%E9%85%8D%E8%A7%84%E5%88%99",
              children: "uri匹配"
            }), "，domainVerify为true代表开启域名检查，通过App Linking匹配该应用时需经过配置的域名校验后才能匹配到。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  \"module\": {\n    // ···\n    \"abilities\": [\n    // ···\n      {\n        // ···\n        \"skills\": [\n          {\n            \"entities\": [\n              \"entity.system.browsable\"\n            ],\n            \"actions\": [\n              \"ohos.want.action.viewData\"\n            ],\n            \"uris\": [\n              {\n                \"scheme\": \"https\",\n                \"host\": \"www.example.com\"\n              }\n            ],\n            \"domainVerify\": true\n          }\n        ]\n      },\n    // ···\n    ],\n    // ···\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用方通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiabilitycontext/js-apis-inner-application-uiabilitycontext#openlink12",
            children: "openLink"
          }), "接口执行跳转，需要传入link和", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-openlinkoptions/js-apis-app-ability-openlinkoptions",
            children: "options"
          }), "，不再需要传入bundleName、moduleName和abilityName。系统会根据传入的link匹配到符合skills配置的应用。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "当options中的appLinkingOnly为true时，匹配到的应用会经过应用市场域名检查（需联网）返回域名校验检查的唯一匹配项或未匹配结果。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "当options中的appLinkingOnly为false时，会优先尝试以App Linking的方式拉起，如果没有匹配的应用则跳转默认浏览器打开网页。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { common, OpenLinkOptions } from '@kit.AbilityKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst TAG: string = '[UIAbilityComponentsOpenLink]';\nconst DOMAIN_NUMBER: number = 0xFF00;\n\n@Entry\n@Component\nstruct WantAbilityPage1 {\n  build() {\n    Button('start link', { type: ButtonType.Capsule, stateEffect: true })\n      .width('87%')\n      .height('5%')\n      .margin({ bottom: '12vp' })\n      .onClick(() => {\n        let context = this.getUIContext().getHostContext() as common.UIAbilityContext;\n        /*\n         * 通过startAbility接口显式启动其他UIAbility，推荐使用openLink接口。\n         * let want: Want = {\n         *   bundleName: \"com.test.example\",\n         *   moduleName: \"entry\",\n         *   abilityName: \"EntryAbility\"\n         * };\n         * try {\n         *   context.startAbility(want)\n         *     .then(() => {\n         *       hilog.info(DOMAIN_NUMBER, TAG, 'startAbility success.');\n         *     }).catch((err: BusinessError) => {\n         *       hilog.error(DOMAIN_NUMBER, TAG, `startAbility failed. Code is ${err.code}, message is ${err.message}`);\n         *     })\n         * } catch (paramError) {\n         *   hilog.error(DOMAIN_NUMBER, TAG, `Failed to startAbility. Code is ${paramError.code},\\\n         *   message is ${paramError.message}`);\n         * }\n         */\n        let link: string = 'https://www.example.com';\n        let openLinkOptions: OpenLinkOptions = {\n          // 匹配的abilities选项是否需要通过App Linking域名校验，匹配到唯一配置过的应用ability\n          appLinkingOnly: true,\n          // 同want中的parameter，用于传递的参数\n          parameters: {demo_key: 'demo_value'}\n        };\n\n        try {\n          context.openLink(link, openLinkOptions)\n            .then(() => {\n              hilog.info(DOMAIN_NUMBER, TAG, 'open link success.');\n            }).catch((err: BusinessError) => {\n            hilog.error(DOMAIN_NUMBER, TAG, `open link failed. Code is ${err.code}, message is ${err.message}`);\n          })\n        } catch (paramError) {\n          hilog.error(DOMAIN_NUMBER, TAG, `Failed to start link. Code is ${paramError.code}, message is ${paramError.message}`);\n        }\n      })\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "启动其他应用的uiability并获取返回结果",
      children: "启动其他应用的UIAbility并获取返回结果"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["将待跳转的应用安装到设备，在其对应UIAbility的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file",
            children: "module.json5配置文件"
          }), "中配置skills标签的entities字段、actions字段和uri字段："]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "\"actions\"列表中包含\"ohos.want.action.viewData\"。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "\"entities\"列表中包含\"entity.system.browsable\"。"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\"uris\"列表中包含\"scheme\"为\"https\"且\"domainVerify\"为true的元素。uri的匹配规则参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ability-kit/stage-model-development/stage-model-application-components/want/explicit-implicit-want-mappings#uri%E5%8C%B9%E9%85%8D%E8%A7%84%E5%88%99",
              children: "uri匹配"
            }), "，domainVerify为true代表开启域名检查，通过App Linking匹配该应用时需经过配置的域名校验后才能匹配到。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  \"module\": {\n    // ···\n    \"abilities\": [\n    // ···\n      {\n        // ···\n        \"skills\": [\n          {\n            \"entities\": [\n              \"entity.system.browsable\"\n            ],\n            \"actions\": [\n              \"ohos.want.action.viewData\"\n            ],\n            \"uris\": [\n              {\n                \"scheme\": \"https\",\n                \"host\": \"www.example.com\"\n              }\n            ],\n            \"domainVerify\": true\n          }\n        ]\n      },\n    // ···\n    ],\n    // ···\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用方通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiabilitycontext/js-apis-inner-application-uiabilitycontext#openlink12",
            children: "openLink"
          }), "接口执行跳转，需要传入link和", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-openlinkoptions/js-apis-app-ability-openlinkoptions",
            children: "options"
          }), "，不再需要传入bundleName、moduleName和abilityName。系统会根据传入的link匹配到符合skills配置的应用。AbilityResult回调结果通过入参传入回调函数，在被启动的UIAbility停止自身后返回给调用方。启动成功和失败结果仍通过Promise返回。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "当options中的appLinkingOnly为true时，匹配到的应用会经过应用市场域名检查（需联网）返回域名校验检查的唯一匹配项或未匹配结果。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "当options中的appLinkingOnly为false时，会优先尝试以App Linking的方式拉起，如果没有匹配的应用则跳转默认浏览器打开网页。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { common, OpenLinkOptions } from '@kit.AbilityKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst TAG: string = '[UIAbilityComponentsOpenLink]';\nconst DOMAIN_NUMBER: number = 0xFF00;\n\n@Entry\n@Component\nstruct WantAbilityPage2 {\n  build() {\n    Button('start link', { type: ButtonType.Capsule, stateEffect: true })\n      .width('87%')\n      .height('5%')\n      .margin({ bottom: '12vp' })\n      .onClick(() => {\n        let context = this.getUIContext().getHostContext() as common.UIAbilityContext;\n        /*\n         * 通过startAbility接口显式启动其他UIAbility，推荐使用openLink接口。\n         * let want: Want = {\n         *   bundleName: \"com.test.example\",\n         *   moduleName: \"entry\",\n         *   abilityName: \"EntryAbility\"\n         * };\n         * try {\n         *   context.startAbilityForResult(want)\n         *     .then((data) => {\n         *       hilog.info(DOMAIN_NUMBER, TAG, 'startAbility success. data: ' + JSON.stringify(data));\n         *     }).catch((err: BusinessError) => {\n         *       hilog.error(DOMAIN_NUMBER, TAG, `startAbility failed. Code is ${err.code}, message is ${err.message}`);\n         *     })\n         * } catch (paramError) {\n         *   hilog.error(DOMAIN_NUMBER, TAG, `Failed to startAbility. Code is ${paramError.code}, \\\n         *   message is ${paramError.message}`);\n         * }\n         */\n        let link: string = 'https://www.example.com';\n        let openLinkOptions: OpenLinkOptions = {\n          // 匹配的abilities选项是否需要通过App Linking域名校验，匹配到唯一配置过的应用ability\n          appLinkingOnly: true,\n          // 同want中的parameter，用于传递的参数\n          parameters: {demo_key: 'demo_value'}\n        };\n\n        try {\n          context.openLink(link, openLinkOptions, (err, data) => {\n            // AbilityResult回调函数，仅在被启动的UIAbility终止时触发\n            hilog.info(DOMAIN_NUMBER, TAG, 'open link success. Callback result: ' + JSON.stringify(data));\n          }).then(() => {\n            hilog.info(DOMAIN_NUMBER, TAG, 'open link success.');\n          }).catch((err: BusinessError) => {\n            hilog.error(DOMAIN_NUMBER, TAG, `open link failed. Code is ${err.code}, message is ${err.message}`);\n          })\n        } catch (paramError) {\n          hilog.error(DOMAIN_NUMBER, TAG, `Failed to start link. Code is ${paramError.code}, message is ${paramError.message}`);\n        }\n      })\n  }\n}\n"
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