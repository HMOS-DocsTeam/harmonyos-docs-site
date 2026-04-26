"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["816271"], {
475861(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ability_kit_stage_model_development_stage_model_application_components_subscribe_system_environment_variable_changes_subscribe_system_environment_variable_changes_md_11c_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ability-kit-stage-model-development-stage-model-application-components-subscribe-system-environment-variable-changes-subscribe-system-environment-variable-changes-md-11c.json
var site_docs_ability_kit_stage_model_development_stage_model_application_components_subscribe_system_environment_variable_changes_subscribe_system_environment_variable_changes_md_11c_namespaceObject = JSON.parse('{"id":"ability-kit/stage-model-development/stage-model-application-components/subscribe-system-environment-variable-changes/subscribe-system-environment-variable-changes","title":"获取/设置环境变量","description":"环境变量涵盖了所有可能影响应用运行时的环境配置信息，包括应用可指定的内部环境变量（字体大小、外观、语言等）和应用可感知的外部环境变量（屏幕方向等）。","source":"@site/docs/ability-kit/stage-model-development/stage-model-application-components/subscribe-system-environment-variable-changes/subscribe-system-environment-variable-changes.md","sourceDirName":"ability-kit/stage-model-development/stage-model-application-components/subscribe-system-environment-variable-changes","slug":"/ability-kit/stage-model-development/stage-model-application-components/subscribe-system-environment-variable-changes/","permalink":"/harmonyos-docs-site/ability-kit/stage-model-development/stage-model-application-components/subscribe-system-environment-variable-changes/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":11,"frontMatter":{"title":"获取/设置环境变量","sidebar_position":11,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/subscribe-system-environment-variable-changes","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"获取应用异常退出原因","permalink":"/harmonyos-docs-site/ability-kit/stage-model-development/stage-model-application-components/ability-exit-info-record/"},"next":{"title":"应用间跳转概述","permalink":"/harmonyos-docs-site/ability-kit/stage-model-development/inter-app-redirection/link-between-apps-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ability-kit/stage-model-development/stage-model-application-components/subscribe-system-environment-variable-changes/subscribe-system-environment-variable-changes.md


const frontMatter = {
	title: '获取/设置环境变量',
	sidebar_position: 11,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/subscribe-system-environment-variable-changes',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '获取/设置环境变量';

const assets = {

};



const toc = [{
  "value": "使用场景",
  "id": "使用场景",
  "level": 2
}, {
  "value": "获取环境变量",
  "id": "获取环境变量",
  "level": 2
}, {
  "value": "设置环境变量",
  "id": "设置环境变量",
  "level": 2
}, {
  "value": "设置字体大小",
  "id": "设置字体大小",
  "level": 3
}, {
  "value": "设置深浅色模式",
  "id": "设置深浅色模式",
  "level": 3
}, {
  "value": "设置应用语言",
  "id": "设置应用语言",
  "level": 3
}, {
  "value": "订阅环境变量",
  "id": "订阅环境变量",
  "level": 2
}, {
  "value": "使用ApplicationContext订阅回调",
  "id": "使用applicationcontext订阅回调",
  "level": 3
}, {
  "value": "在AbilityStage组件管理器中订阅回调",
  "id": "在abilitystage组件管理器中订阅回调",
  "level": 3
}, {
  "value": "在UIAbility组件中订阅回调",
  "id": "在uiability组件中订阅回调",
  "level": 3
}, {
  "value": "在ExtensionAbility组件中订阅回调",
  "id": "在extensionability组件中订阅回调",
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
        id: "获取设置环境变量",
        children: "获取/设置环境变量"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "环境变量涵盖了所有可能影响应用运行时的环境配置信息，包括应用可指定的内部环境变量（字体大小、外观、语言等）和应用可感知的外部环境变量（屏幕方向等）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通常条件下，环境变量会跟随系统设置变化。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用场景",
      children: "使用场景"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "场景"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "约束限制"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "场景举例"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E8%8E%B7%E5%8F%96%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F",
              children: "获取环境变量"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["开发者可以使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-arkts/js-apis-resource-manager/js-apis-resource-manager#getconfigurationsync10",
              children: "getConfigurationSync"
            }), "主动获取当前环境变量，包括深浅色模式、屏幕方向、语言地区、屏幕密度、设备类型等。"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["当前仅支持同步获取，使用方式参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-arkts/js-apis-resource-manager/js-apis-resource-manager#getconfigurationsync10",
              children: "ResourceManager.getConfigurationSync"
            }), "。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用运行过程中，可以主动获取当前应用深浅色模式，以更新用户界面显示。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E8%AE%BE%E7%BD%AE%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F",
              children: "设置环境变量"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["当前仅支持应用自定义字体大小、深浅色、语言。  - ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E8%AE%BE%E7%BD%AE%E5%AD%97%E4%BD%93%E5%A4%A7%E5%B0%8F",
              children: "设置字体大小"
            }), "  - ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E8%AE%BE%E7%BD%AE%E6%B7%B1%E6%B5%85%E8%89%B2%E6%A8%A1%E5%BC%8F",
              children: "设置深浅色模式"
            }), "  - ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E8%AE%BE%E7%BD%AE%E5%BA%94%E7%94%A8%E8%AF%AD%E8%A8%80",
              children: "设置应用语言"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当应用设置环境变量后，应用将无法通过订阅感知到对应的环境变量在系统中的变化。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用自定义字体大小，以提升用户体验。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E8%AE%A2%E9%98%85%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F",
              children: "订阅环境变量"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["通过订阅环境变量，及时感知系统环境变化 。支持订阅的环境变量包括语言、深浅色、屏幕方向等，详见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/both-models/js-apis-app-ability-configuration/js-apis-app-ability-configuration",
              children: "Configuration"
            }), "。"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["- 如果开发者将环境变量配置为不跟随系统变化（即", (0,jsx_runtime.jsx)(_components.a, {
              href: "/development-fundamentals/application-configuration-file-stage/app-configuration-file#configuration%E6%A0%87%E7%AD%BE",
              children: "configuration标签"
            }), "中的对应字段取值为“nonFollowSystem”），应用将无法通过订阅感知对应的环境变量在系统中的变化。  - 应用订阅环境变量后，当应用处于后台时，环境变量发生变更，应用将无法实时收到订阅通知。相关通知推送会被延迟处理，待应用切换回前台时，才会收到订阅通知。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当用户旋转设备屏幕时，应用可以通过订阅环境变量感知环境变化重新布局用户界面，以适应屏幕方向和尺寸。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "获取环境变量",
      children: "获取环境变量"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者可以使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/localization-api/localization-arkts/js-apis-resource-manager/js-apis-resource-manager#getconfigurationsync10",
        children: "getConfigurationSync"
      }), "主动获取当前", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/localization-api/localization-arkts/js-apis-resource-manager/js-apis-resource-manager#configuration",
        children: "环境变量"
      }), "，包括深浅色模式、屏幕方向、语言地区、屏幕密度、设备类型等，对应用程序作出相应处理，提供更好的用户体验。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst DOMAIN_NUMBER = 0xF811;\nconst TAG = '[EnvAbility0]';\n\nexport default class EnvAbility0 extends UIAbility {\n  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {\n    try {\n      let value = this.context.resourceManager.getConfigurationSync();\n      // 屏幕方向\n      let direction = value.direction;\n      // 语言文字国家地区\n      let locale = value.locale;\n    } catch (error) {\n      hilog.error(DOMAIN_NUMBER, TAG, 'getConfigurationSync error is ' + error);\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "设置环境变量",
      children: "设置环境变量"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["支持应用自定义的环境变量包括", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E8%AE%BE%E7%BD%AE%E5%AD%97%E4%BD%93%E5%A4%A7%E5%B0%8F",
        children: "字体大小"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E8%AE%BE%E7%BD%AE%E6%B7%B1%E6%B5%85%E8%89%B2%E6%A8%A1%E5%BC%8F",
        children: "深浅色模式"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E8%AE%BE%E7%BD%AE%E5%BA%94%E7%94%A8%E8%AF%AD%E8%A8%80",
        children: "应用语言"
      }), "，其他环境变量（例如屏幕方向等）均不支持直接设置。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "设置字体大小",
      children: "设置字体大小"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用字体大小默认不跟随系统变化，开发者可以通过将", (0,jsx_runtime.jsx)(_components.a, {
        href: "/development-fundamentals/application-configuration-file-stage/app-configuration-file#configuration%E6%A0%87%E7%AD%BE",
        children: "configuration标签"
      }), "中fontSizeScale的值配置为followSystem，使得应用字体大小跟随系统变化。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者可以使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-applicationcontext/js-apis-inner-application-applicationcontext#applicationcontextsetfontsizescale13",
        children: "setFontSizeScale"
      }), "设置应用字体大小。设置后，应用字体将不跟随系统变化，不再支持订阅系统字体大小变化。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { UIAbility } from '@kit.AbilityKit';\nimport { window } from '@kit.ArkUI';\n\nexport default class EnvAbility1 extends UIAbility {\n  onWindowStageCreate(windowStage: window.WindowStage) {\n    windowStage.loadContent('pages/Index', (err, data) => {\n      if (err.code) {\n        return;\n      }\n    });\n    let applicationContext = this.context.getApplicationContext();\n    applicationContext.setFontSizeScale(2);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "设置深浅色模式",
      children: "设置深浅色模式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用深浅色模式默认跟随系统。开发者可以设置应用或组件的深浅色模式。设置后，不再支持订阅系统的深浅色模式变化。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "配置生效的优先级为：UIAbility/UIExtensionAbility的深浅色模式 > 应用的深浅色模式 > 系统的深浅色模式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "设置应用的深浅色模式："
            })
          }), " 使用ApplicationContext的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-applicationcontext/js-apis-inner-application-applicationcontext#applicationcontextsetcolormode11",
            children: "setColorMode"
          }), "接口，可以设置应用深浅色模式。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { UIAbility, ConfigurationConstant } from '@kit.AbilityKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { window } from '@kit.ArkUI';\n\nexport default class EnvAbility2 extends UIAbility {\n  onWindowStageCreate(windowStage: window.WindowStage) {\n    windowStage.loadContent('pages/Index', (err, data) => {\n      if (err.code) {\n        hilog.error(0x0000, 'testTag', 'Failed to load the content.');\n        return;\n      }\n      let applicationContext = this.context.getApplicationContext();\n      applicationContext.setColorMode(ConfigurationConstant.ColorMode.COLOR_MODE_DARK);\n    });\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "设置UIAbility的深浅色模式："
            })
          }), " 使用UIAbilityContext的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiabilitycontext/js-apis-inner-application-uiabilitycontext#setcolormode18",
            children: "setColorMode"
          }), "，可以设置UIAbility的深浅色模式。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { UIAbility, ConfigurationConstant } from '@kit.AbilityKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { window } from '@kit.ArkUI';\n\nexport default class EnvAbility3 extends UIAbility {\n  onWindowStageCreate(windowStage: window.WindowStage) {\n    windowStage.loadContent('pages/Index', (err, data) => {\n      if (err.code) {\n        hilog.error(0x0000, 'testTag', 'Failed to load the content.');\n        return;\n      }\n      let uiAbilityContext = this.context;\n      uiAbilityContext.setColorMode(ConfigurationConstant.ColorMode.COLOR_MODE_DARK);\n    });\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "设置UIExtensionAbility的深浅色模式："
            })
          }), " 使用UIExtensionContext的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiextensioncontext/js-apis-inner-application-uiextensioncontext#setcolormode18",
            children: "setColorMode"
          }), "，可以设置UIExtensionAbility的深浅色模式。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// UIExtensionAbility不支持三方应用直接继承，故以派生类ShareExtensionAbility举例说明。\nimport { ShareExtensionAbility, ConfigurationConstant } from '@kit.AbilityKit';\n\nexport default class EnvAbility4 extends ShareExtensionAbility {\n  onForeground() {\n    let uiExtensionContext = this.context;\n    uiExtensionContext.setColorMode(ConfigurationConstant.ColorMode.COLOR_MODE_DARK);\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "设置应用语言",
      children: "设置应用语言"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用语言默认跟随系统语言变化。开发者可以使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-applicationcontext/js-apis-inner-application-applicationcontext#applicationcontextsetlanguage11",
        children: "setLanguage"
      }), "设置应用语言。设置后，不再支持订阅系统语言变化。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { UIAbility } from '@kit.AbilityKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { window } from '@kit.ArkUI';\n\nexport default class EnvAbility5 extends UIAbility {\n  onWindowStageCreate(windowStage: window.WindowStage) {\n    windowStage.loadContent('pages/Index', (err, data) => {\n      if (err.code) {\n        hilog.error(0x0000, 'testTag', 'Failed to load the content.');\n        return;\n      }\n      let applicationContext = this.context.getApplicationContext();\n      applicationContext.setLanguage('zh-cn');\n    });\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "订阅环境变量",
      children: "订阅环境变量"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["系统配置的变化通常由“设置”中的选项或“控制中心”中的图标触发。订阅环境变量变化，可以使应用程序更加智能地响应系统环境变化，从而提供更好的用户体验。查看当前支持订阅变化的环境变量，参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/both-models/js-apis-app-ability-configuration/js-apis-app-ability-configuration",
        children: "Configuration"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "基于当前的应用模型，可以通过以下几种方式来实现订阅环境变量的变化。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E4%BD%BF%E7%94%A8applicationcontext%E8%AE%A2%E9%98%85%E5%9B%9E%E8%B0%83",
          children: "使用ApplicationContext订阅回调"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E5%9C%A8abilitystage%E7%BB%84%E4%BB%B6%E7%AE%A1%E7%90%86%E5%99%A8%E4%B8%AD%E8%AE%A2%E9%98%85%E5%9B%9E%E8%B0%83",
          children: "在AbilityStage组件管理器中订阅回调"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E5%9C%A8uiability%E7%BB%84%E4%BB%B6%E4%B8%AD%E8%AE%A2%E9%98%85%E5%9B%9E%E8%B0%83",
          children: "在UIAbility组件中订阅回调"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E5%9C%A8extensionability%E7%BB%84%E4%BB%B6%E4%B8%AD%E8%AE%A2%E9%98%85%E5%9B%9E%E8%B0%83",
          children: "在ExtensionAbility组件中订阅回调"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用applicationcontext订阅回调",
      children: "使用ApplicationContext订阅回调"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-applicationcontext/js-apis-inner-application-applicationcontext",
        children: "ApplicationContext"
      }), "提供了注册回调函数以订阅环境变量的变化，并且可以通过调用相应的方法来撤销该回调。这有助于在资源不再需要时释放相关资源，从而提高系统的可靠性和性能。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-applicationcontext/js-apis-inner-application-applicationcontext#applicationcontextonenvironment",
            children: "on"
          }), "方法，应用程序可以通过在非应用组件模块中订阅环境变量的变化来动态响应这些变化。例如，使用该方法在页面中监测系统语言的变化。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { common, EnvironmentCallback, Configuration } from '@kit.AbilityKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nconst TAG: string = '[EnvAbilityPage6]';\nconst DOMAIN_NUMBER: number = 0xFF00;\n\n@Entry\n@Component\nstruct EnvAbilityPage6 {\n  private context = this.getUIContext().getHostContext() as common.UIAbilityContext;\n  private callbackId: number = 0; // 注册订阅系统环境变化的ID\n\n  subscribeConfigurationUpdate(): void {\n    let systemLanguage: string | undefined = this.context.config.language; // 获取系统当前语言\n\n    // 1.获取ApplicationContext\n    let applicationContext = this.context.getApplicationContext();\n\n    // 2.通过applicationContext订阅环境变量变化\n    let environmentCallback: EnvironmentCallback = {\n      onConfigurationUpdated(newConfig: Configuration) {\n        hilog.info(DOMAIN_NUMBER, TAG, `onConfigurationUpdated systemLanguage is ${systemLanguage}, newConfig: ${JSON.stringify(newConfig)}`);\n        if (systemLanguage !== newConfig.language) {\n          hilog.info(DOMAIN_NUMBER, TAG, `systemLanguage from ${systemLanguage} changed to ${newConfig.language}`);\n          systemLanguage = newConfig.language; // 将变化之后的系统语言保存，作为下一次变化前的系统语言\n        }\n      },\n      onMemoryLevel(level) {\n        hilog.info(DOMAIN_NUMBER, TAG, `onMemoryLevel level: ${level}`);\n      }\n    }\n    try {\n      this.callbackId = applicationContext.on('environment', environmentCallback);\n    } catch (err) {\n      let code = (err as BusinessError).code;\n      let message = (err as BusinessError).message;\n      hilog.error(DOMAIN_NUMBER, TAG, `Failed to register applicationContext. Code is ${code}, message is ${message}`);\n    }\n  }\n\n  // 页面展示\n  build() {\n    // ...\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在资源使用完成之后，可以通过调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-applicationcontext/js-apis-inner-application-applicationcontext#applicationcontextoffenvironment-1",
            children: "off"
          }), "方法释放相关资源。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { common } from '@kit.AbilityKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nconst TAG: string = '[EnvAbilityPage7]';\nconst DOMAIN_NUMBER: number = 0xFF00;\n\n@Entry\n@Component\nstruct EnvAbilityPage7 {\n  private context = this.getUIContext().getHostContext() as common.UIAbilityContext;\n  private callbackId: number = 0; // 注册订阅系统环境变化的ID\n\n  unsubscribeConfigurationUpdate() {\n    let applicationContext = this.context.getApplicationContext();\n    try {\n      applicationContext.off('environment', this.callbackId);\n    } catch (err) {\n      let code = (err as BusinessError).code;\n      let message = (err as BusinessError).message;\n      hilog.error(DOMAIN_NUMBER, TAG, `Failed to unregister applicationContext. Code is ${code}, message is ${message}`);\n    }\n  }\n\n  // 页面展示\n  build() {\n    // ...\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "在abilitystage组件管理器中订阅回调",
      children: "在AbilityStage组件管理器中订阅回调"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-abilitystage/js-apis-app-ability-abilitystage#onconfigurationupdate",
        children: "AbilityStage.onConfigurationUpdate()"
      }), "回调方法订阅环境变量的变化。当环境变量发生变化时，会调用该回调方法。在该方法中，通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/both-models/js-apis-app-ability-configuration/js-apis-app-ability-configuration",
        children: "Configuration"
      }), "对象获取最新的环境变量信息。可以进行相应的界面适配等操作，从而提高系统的灵活性和可维护性。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(992135)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["DevEco Studio默认工程中未自动生成", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-abilitystage/js-apis-app-ability-abilitystage",
          children: "AbilityStage"
        }), "，AbilityStage文件的创建参见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ability-kit/stage-model-development/stage-model-application-components/abilitystage#%E5%BC%80%E5%8F%91%E6%AD%A5%E9%AA%A4",
          children: "AbilityStage开发步骤"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当使用回调方法订阅系统环境变量的变化时，该回调方法会随着AbilityStage的生命周期而存在，在Module销毁时一并销毁。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["例如，在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-abilitystage/js-apis-app-ability-abilitystage#onconfigurationupdate",
        children: "AbilityStage.onConfigurationUpdate()"
      }), "回调方法中实现监测系统语言的变化。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { AbilityStage, Configuration } from '@kit.AbilityKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst TAG: string = '[EnvAbilityStage]';\nconst DOMAIN_NUMBER: number = 0xFF00;\n\nlet systemLanguage: string | undefined; // 系统当前语言\n\nexport default class EnvAbilityStage extends AbilityStage {\n  onCreate(): void {\n    systemLanguage = this.context.config.language; // Module首次加载时，获取系统当前语言\n    hilog.info(DOMAIN_NUMBER, TAG, `systemLanguage is ${systemLanguage}`);\n  }\n\n  onConfigurationUpdate(newConfig: Configuration): void {\n    hilog.info(DOMAIN_NUMBER, TAG, `onConfigurationUpdate, language: ${newConfig.language}`);\n    hilog.info(DOMAIN_NUMBER, TAG, `onConfigurationUpdated systemLanguage is ${systemLanguage}, newConfig: ${JSON.stringify(newConfig)}`);\n\n    if (systemLanguage !== newConfig.language) {\n      hilog.info(DOMAIN_NUMBER, TAG, `systemLanguage from ${systemLanguage} changed to ${newConfig.language}`);\n      systemLanguage = newConfig.language; // 将变化之后的系统语言保存，作为下一次变化前的系统语言\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "在uiability组件中订阅回调",
      children: "在UIAbility组件中订阅回调"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability",
        children: "UIAbility"
      }), "组件提供了", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-ability/js-apis-app-ability-ability#abilityonconfigurationupdate",
        children: "UIAbility.onConfigurationUpdate()"
      }), "回调方法用于订阅环境变量的变化。当环境变量发生变化时，会调用该回调方法。在该方法中，通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/both-models/js-apis-app-ability-configuration/js-apis-app-ability-configuration",
        children: "Configuration"
      }), "对象获取最新的环境变量信息，而无需重启UIAbility。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(324371)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当应用通过回调方法订阅环境变量变化时，该订阅会随着所在UIAbility的生命周期持续有效。一旦UIAbility被销毁，之前注册的所有回调订阅将自动失效，同时应用将不会再收到订阅的回调信息。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["如果使用该接口监听屏幕方向变化，需要在module.json5配置文件的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file#abilities%E6%A0%87%E7%AD%BE",
          children: "abilities标签"
        }), "中将orientation字段配置为auto_rotation。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["例如，在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-ability/js-apis-app-ability-ability#abilityonconfigurationupdate",
        children: "onConfigurationUpdate()"
      }), "回调方法中实现监测系统语言的变化。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { AbilityConstant, Configuration, UIAbility, Want } from '@kit.AbilityKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst TAG: string = '[EnvAbility9]';\nconst DOMAIN_NUMBER: number = 0xFF00;\n\nlet systemLanguage: string | undefined; // 系统当前语言\n\nexport default class EnvAbility9 extends UIAbility {\n  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {\n    systemLanguage = this.context.config.language; // UIAbility实例首次加载时，获取系统当前语言\n    hilog.info(DOMAIN_NUMBER, TAG, `systemLanguage is ${systemLanguage}`);\n  }\n\n  onConfigurationUpdate(newConfig: Configuration): void {\n    hilog.info(DOMAIN_NUMBER, TAG, `onConfigurationUpdated systemLanguage is ${systemLanguage}, newConfig: ${JSON.stringify(newConfig)}`);\n\n    if (systemLanguage !== newConfig.language) {\n      hilog.info(DOMAIN_NUMBER, TAG, `systemLanguage from ${systemLanguage} changed to ${newConfig.language}`);\n      systemLanguage = newConfig.language; // 将变化之后的系统语言保存，作为下一次变化前的系统语言\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "在extensionability组件中订阅回调",
      children: "在ExtensionAbility组件中订阅回调"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-extensionability/js-apis-app-ability-extensionability",
        children: "ExtensionAbility"
      }), "组件提供了", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-ability/js-apis-app-ability-ability#abilityonconfigurationupdate",
        children: "onConfigurationUpdate()"
      }), "回调方法用于订阅环境变量的变化。当环境变量发生变化时，会调用该回调方法。在该方法中，通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/both-models/js-apis-app-ability-configuration/js-apis-app-ability-configuration",
        children: "Configuration"
      }), "对象获取最新的环境变量信息。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(600462)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当应用通过回调方法订阅环境变量变化时，该订阅会随着所在ExtensionAbility的生命周期持续有效。一旦ExtensionAbility被销毁，之前注册的所有回调订阅将自动失效，同时应用将不会再收到订阅的回调信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/form-api/form-arkts/js-apis-app-form-formextensionability/js-apis-app-form-formextensionability",
        children: "FormExtensionAbility"
      }), "为例说明。例如，在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/form-api/form-arkts/js-apis-app-form-formextensionability/js-apis-app-form-formextensionability#formextensionabilityonconfigurationupdate",
        children: "onConfigurationUpdate()"
      }), "回调方法中实现环境变量的变化。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { FormExtensionAbility } from '@kit.FormKit';\nimport { Configuration } from '@kit.AbilityKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst TAG: string = '[EnvFormExtensionAbility]';\nconst DOMAIN_NUMBER: number = 0xFF00;\n\nexport default class EnvFormExtensionAbility extends FormExtensionAbility {\n  onConfigurationUpdate(newConfig: Configuration) {\n    hilog.info(DOMAIN_NUMBER, TAG, 'onConfigurationUpdate: ' + JSON.stringify(newConfig));\n  }\n}\n"
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
600462(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
992135(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
324371(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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