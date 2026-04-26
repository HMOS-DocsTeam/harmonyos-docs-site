"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["355130"], {
309662(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ability_kit_stage_model_development_stage_model_application_components_application_context_stage_application_context_stage_md_559_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ability-kit-stage-model-development-stage-model-application-components-application-context-stage-application-context-stage-md-559.json
var site_docs_ability_kit_stage_model_development_stage_model_application_components_application_context_stage_application_context_stage_md_559_namespaceObject = JSON.parse('{"id":"ability-kit/stage-model-development/stage-model-application-components/application-context-stage/application-context-stage","title":"应用上下文Context","description":"概述","source":"@site/docs/ability-kit/stage-model-development/stage-model-application-components/application-context-stage/application-context-stage.md","sourceDirName":"ability-kit/stage-model-development/stage-model-application-components/application-context-stage","slug":"/ability-kit/stage-model-development/stage-model-application-components/application-context-stage/","permalink":"/harmonyos-docs-site/ability-kit/stage-model-development/stage-model-application-components/application-context-stage/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"应用上下文Context","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/application-context-stage","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"AbilityStage组件管理器","permalink":"/harmonyos-docs-site/ability-kit/stage-model-development/stage-model-application-components/abilitystage/"},"next":{"title":"Want概述","permalink":"/harmonyos-docs-site/ability-kit/stage-model-development/stage-model-application-components/want/want-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ability-kit/stage-model-development/stage-model-application-components/application-context-stage/application-context-stage.md


const frontMatter = {
	title: '应用上下文Context',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/application-context-stage',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '应用上下文Context';

const assets = {

};



const toc = [{
  "value": "概述",
  "id": "概述",
  "level": 2
}, {
  "value": "不同类型Context的对比",
  "id": "不同类型context的对比",
  "level": 2
}, {
  "value": "Context的获取方式",
  "id": "context的获取方式",
  "level": 2
}, {
  "value": "获取ApplicationContext（应用的全局上下文）",
  "id": "获取applicationcontext应用的全局上下文",
  "level": 3
}, {
  "value": "获取AbilityStageContext（模块级别的上下文）",
  "id": "获取abilitystagecontext模块级别的上下文",
  "level": 3
}, {
  "value": "获取本应用中其他Module的Context（模块级别的上下文）",
  "id": "获取本应用中其他module的context模块级别的上下文",
  "level": 3
}, {
  "value": "获取UIAbilityContext（UIAbility组件的上下文）",
  "id": "获取uiabilitycontextuiability组件的上下文",
  "level": 3
}, {
  "value": "获取ExtensionAbilityContext (ExtensionAbility组件的上下文)",
  "id": "获取extensionabilitycontext-extensionability组件的上下文",
  "level": 3
}, {
  "value": "Context的典型使用场景",
  "id": "context的典型使用场景",
  "level": 2
}, {
  "value": "获取基本信息",
  "id": "获取基本信息",
  "level": 3
}, {
  "value": "获取应用文件路径",
  "id": "获取应用文件路径",
  "level": 3
}, {
  "value": "获取和修改加密分区",
  "id": "获取和修改加密分区",
  "level": 3
}, {
  "value": "监听应用前后台变化",
  "id": "监听应用前后台变化",
  "level": 3
}, {
  "value": "监听UIAbility生命周期变化",
  "id": "监听uiability生命周期变化",
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
    "module-name": "module-name",
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
  }, _component0 = _components["module-name"];
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "应用上下文context",
        children: "应用上下文Context"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context",
        children: "Context"
      }), "是应用中对象的上下文，其提供了应用的一些基础信息，例如", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/localization-api/localization-arkts/js-apis-resource-manager/js-apis-resource-manager",
        children: "resourceManager"
      }), "（资源管理）、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/bundlemanager/js-apis-bundlemanager-applicationinfo/js-apis-bundlemanager-applicationinfo",
        children: "applicationInfo"
      }), "（当前应用信息）、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-contextconstant/js-apis-app-ability-contextconstant#areamode",
        children: "area"
      }), "（文件分区）等。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "不同类型context的对比",
      children: "不同类型Context的对比"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability",
        children: "UIAbility"
      }), "组件和各种", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-extensionability/js-apis-app-ability-extensionability",
        children: "ExtensionAbility"
      }), "派生类组件都有各自不同的Context类。分别有基类Context、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-applicationcontext/js-apis-inner-application-applicationcontext",
        children: "ApplicationContext"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-abilitystagecontext/js-apis-inner-application-abilitystagecontext",
        children: "AbilityStageContext"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiabilitycontext/js-apis-inner-application-uiabilitycontext",
        children: "UIAbilityContext"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-extensioncontext/js-apis-inner-application-extensioncontext",
        children: "ExtensionContext"
      }), "等Context。各类Context的继承和持有关系详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context#%E4%B8%8D%E5%90%8C%E7%B1%BB%E5%9E%8Bcontext%E7%9A%84%E7%BB%A7%E6%89%BF%E5%92%8C%E6%8C%81%E6%9C%89%E5%85%B3%E7%B3%BB",
        children: "不同类型Context的继承和持有关系"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "不同类型Context的获取方式与使用场景说明，如下表所示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(614531)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["不同类型的Context具有不同的能力，不可相互替代或强行转换。例如，", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-applicationcontext/js-apis-inner-application-applicationcontext",
        children: "ApplicationContext"
      }), "绑定了", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-applicationcontext/js-apis-inner-application-applicationcontext#applicationcontextsetfontsizescale13",
        children: "setFontSizeScale"
      }), "方法，但", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiabilitycontext/js-apis-inner-application-uiabilitycontext",
        children: "UIAbilityContext"
      }), "中没有此方法。因此，即使将UIAbilityContext强行转换为ApplicationContext，也无法调用setFontSizeScale方法。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表1"
        })
      }), " 不同类型Context的说明"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Context类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "获取方式"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "使用场景"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-applicationcontext/js-apis-inner-application-applicationcontext",
              children: "ApplicationContext"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用的全局上下文，提供应用级别的信息和能力。"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["- 从API version 14开始，可以直接使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-application/js-apis-app-ability-application#applicationgetapplicationcontext14",
              children: "getApplicationContext"
            }), "获取。  - API version 14以前版本，只能使用其他Context实例的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context#getapplicationcontext",
              children: "getApplicationContext"
            }), "方法获取。"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["- ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E8%8E%B7%E5%8F%96%E5%9F%BA%E6%9C%AC%E4%BF%A1%E6%81%AF",
              children: "获取当前应用的基本信息"
            }), "。  - ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E8%8E%B7%E5%8F%96%E5%BA%94%E7%94%A8%E6%96%87%E4%BB%B6%E8%B7%AF%E5%BE%84",
              children: "获取应用级别的文件路径"
            }), "。  - ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E8%8E%B7%E5%8F%96%E5%92%8C%E4%BF%AE%E6%94%B9%E5%8A%A0%E5%AF%86%E5%88%86%E5%8C%BA",
              children: "获取和修改加密分区"
            }), "。  - ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E7%9B%91%E5%90%AC%E5%BA%94%E7%94%A8%E5%89%8D%E5%90%8E%E5%8F%B0%E5%8F%98%E5%8C%96",
              children: "监听应用前后台变化"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-abilitystagecontext/js-apis-inner-application-abilitystagecontext",
              children: "AbilityStageContext"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模块级别的上下文，提供模块级别的信息和能力。"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["- 如果需要获取当前AbilityStage的Context，可以直接通过AbilityStage实例获取", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-abilitystage/js-apis-app-ability-abilitystage#%E5%B1%9E%E6%80%A7",
              children: "context"
            }), "属性。  - 如果需要获取同一应用中其他Module的Context，可以通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-application/js-apis-app-ability-application#applicationcreatemodulecontext",
              children: "createModuleContext"
            }), "方法。"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["- 获取当前模块的基本信息。  - ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E8%8E%B7%E5%8F%96%E5%BA%94%E7%94%A8%E6%96%87%E4%BB%B6%E8%B7%AF%E5%BE%84",
              children: "获取模块级别的文件路径"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiabilitycontext/js-apis-inner-application-uiabilitycontext",
              children: "UIAbilityContext"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UIAbility组件对应的上下文，提供UIAbility对外的信息和能力。"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["- 通过UIAbility实例直接获取", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability#%E5%B1%9E%E6%80%A7",
              children: "context"
            }), "属性。  - 在UIAbility的窗口中加载的UI组件实例，需要使用@ohos.arkui.UIContext提供的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext#gethostcontext12",
              children: "getHostContext"
            }), "方法。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "- 获取当前UIAbility的基本信息。  - 启动其他应用或元服务、连接/断连系统应用创建的ServiceExtensionAbility等。  - 销毁自身的UIAbility。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-extensioncontext/js-apis-inner-application-extensioncontext",
              children: "ExtensionContext"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ExtensionAbility组件对应的上下文，每种类型的ExtensionContext提供不同的信息和能力。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过ExtensionAbility实例直接获取Context属性。"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["不同类型的ExtensionAbility对应的Context提供的能力不同。以输入法上下文", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-arkts/js-apis-inputmethod-extension-context/js-apis-inputmethod-extension-context",
              children: "InputMethodExtensionContext"
            }), "为例，主要提供如下能力：  - 获取InputMethodExtensionAbility的基本信息。  - 销毁当前输入法。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext",
              children: "UIContext"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArkUI的UI实例上下文，提供UI操作相关的能力。与上述其他类型的Context无直接关系。"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["- 在UI组件内获取UIContext，直接使用组件内置的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/custom-comp/ts-custom-component-api/ts-custom-component-api#getuicontext",
              children: "getUIContext"
            }), "方法。  - 在存在Window实例的情况下，使用@ohos.window提供的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-window/arkts-apis-window-window#getuicontext10",
              children: "getUIContext"
            }), "方法。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "主要用于UI实例中UI相关操作，例如：  - 获取当前UI实例的字体。  - 显示不同类型的弹框。  - 设置软键盘弹出时UI避让模式。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "context的获取方式",
      children: "Context的获取方式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者如果需要通过Context获取应用资源、应用路径等信息，或者使用Context提供的方法来实现应用跳转、设置环境变量、清理数据、获取权限等操作，需要先获取对应的Context。本节分别介绍不同类型Context的获取方式与使用场景。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "获取applicationcontext应用的全局上下文",
      children: "获取ApplicationContext（应用的全局上下文）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-applicationcontext/js-apis-inner-application-applicationcontext",
        children: "ApplicationContext"
      }), "在基类Context的基础上提供了监听应用内应用组件的生命周期的变化、监听系统内存变化、监听应用内系统环境变化、设置应用语言、设置应用颜色模式、清除应用自身数据的同时撤销应用向用户申请的权限等能力，在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability",
        children: "UIAbility"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-extensionability/js-apis-app-ability-extensionability",
        children: "ExtensionAbility"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-abilitystage/js-apis-app-ability-abilitystage",
        children: "AbilityStage"
      }), "中均可以获取。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { UIAbility, AbilityConstant, Want } from '@kit.AbilityKit';\n\nexport default class EntryAbility extends UIAbility {\n  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {\n    let applicationContext = this.context.getApplicationContext();\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "获取abilitystagecontext模块级别的上下文",
      children: "获取AbilityStageContext（模块级别的上下文）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-abilitystagecontext/js-apis-inner-application-abilitystagecontext",
        children: "AbilityStageContext"
      }), "和基类Context相比，额外提供", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/bundlemanager/js-apis-bundlemanager-hapmoduleinfo/js-apis-bundlemanager-hapmoduleinfo",
        children: "HapModuleInfo"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/both-models/js-apis-app-ability-configuration/js-apis-app-ability-configuration",
        children: "Configuration"
      }), "等信息。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { AbilityStage } from '@kit.AbilityKit';\n\nexport default class MyAbilityStage extends AbilityStage {\n  onCreate(): void {\n    let abilityStageContext = this.context;\n    // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "获取本应用中其他module的context模块级别的上下文",
      children: "获取本应用中其他Module的Context（模块级别的上下文）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-application/js-apis-app-ability-application#applicationcreatemodulecontext",
        children: "createModuleContext"
      }), "方法，获取本应用中其他Module的Context。获取到其他Module的Context之后，即可获取到相应Module的资源信息。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { common, application } from '@kit.AbilityKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst TAG = '[CreateModuleContext]';\nconst DOMAIN = 0xF811;\n\nlet storageEventCall = new LocalStorage();\n\n@Entry(storageEventCall)\n@Component\nstruct CreateModuleContext {\n  private context = this.getUIContext().getHostContext() as common.UIAbilityContext;\n\n  build() {\n    Column() {\n      // ...\n      List({ initialIndex: 0 }) {\n        ListItem() {\n          Row() {\n            // ...\n          }\n          .onClick(() => {\n            let moduleName2: string = 'entry';\n            application.createModuleContext(this.context, moduleName2)\n              .then((data: common.Context) => {\n                hilog.info(DOMAIN, TAG, `CreateModuleContext success, data: ${JSON.stringify(data)}`);\n                if (data !== null) {\n                  this.getUIContext().getPromptAction().showToast({\n                    // 请将$r('app.string.success_message')替换为实际资源文件，在本示例中该资源文件的value值为\"成功获取Context\"\n                    message: $r('app.string.success_message')\n                  });\n                }\n              })\n              .catch((err: BusinessError) => {\n                hilog.error(DOMAIN, TAG, `CreateModuleContext failed, err code:${err.code}, err msg: ${err.message}`);\n              });\n          })\n        }\n        // ...\n      }\n      // ...\n    }\n    // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "获取uiabilitycontextuiability组件的上下文",
      children: "获取UIAbilityContext（UIAbility组件的上下文）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiabilitycontext/js-apis-inner-application-uiabilitycontext",
        children: "UIAbilityContext"
      }), "和基类", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context",
        children: "Context"
      }), "相比，额外提供abilityInfo、currentHapModuleInfo等属性。通过UIAbilityContext可以获取UIAbility的相关配置信息，如包代码路径、Bundle名称、Ability名称和应用程序需要的环境状态等属性信息，也可以获取操作UIAbility实例的方法（如", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiabilitycontext/js-apis-inner-application-uiabilitycontext#startability",
        children: "startAbility()"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiabilitycontext/js-apis-inner-application-uiabilitycontext#connectserviceextensionability",
        children: "connectServiceExtensionAbility()"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiabilitycontext/js-apis-inner-application-uiabilitycontext#terminateself",
        children: "terminateSelf()"
      }), "等）。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在UIAbility中可以通过this.context获取UIAbility实例的上下文信息。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { UIAbility, AbilityConstant, Want } from '@kit.AbilityKit';\n\nexport default class EntryAbility extends UIAbility {\n  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {\n    // 获取UIAbility实例的上下文\n    let context = this.context;\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在页面中获取UIAbility实例的上下文信息。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { common, Want } from '@kit.AbilityKit'; // 导入依赖资源context模块\n\n@Entry\n@Component\nstruct EventHub {\n  // 定义context变量\n  private context = this.getUIContext().getHostContext() as common.UIAbilityContext;\n\n  startAbilityTest(): void {\n    let want: Want = {\n      // Want参数信息\n    };\n    this.context.startAbility(want);\n  }\n\n  // 页面展示\n  build() {\n    // ···\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["也可以在导入依赖资源context模块后，在具体使用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiabilitycontext/js-apis-inner-application-uiabilitycontext",
            children: "UIAbilityContext"
          }), "前进行变量定义。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { common, Want } from '@kit.AbilityKit';\n\n@Entry\n@Component\nstruct UIAbilityComponentsBasicUsage {\n  startAbilityTest(): void {\n    let context = this.getUIContext().getHostContext() as common.UIAbilityContext;\n    let want: Want = {\n      // Want参数信息\n    };\n    context.startAbility(want);\n  }\n\n  // 页面展示\n  build() {\n    // ···\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["当业务完成后，开发者如果想要终止当前", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability",
            children: "UIAbility"
          }), "实例，可以通过调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiabilitycontext/js-apis-inner-application-uiabilitycontext#terminateself",
            children: "terminateSelf()"
          }), "方法实现。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { common } from '@kit.AbilityKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst TAG = '[UIAbilityComponentsUsage]';\nconst DOMAIN = 0xF811;\n@Entry\n@Component\nstruct UIAbilityComponentsUsage {\n  // 页面展示\n  build() {\n    Column() {\n    // ···\n      Button('FuncAbilityB')\n        .onClick(() => {\n          let context = this.getUIContext().getHostContext() as common.UIAbilityContext;\n          try {\n            context.terminateSelf((err: BusinessError) => {\n              if (err.code) {\n                // 处理业务逻辑错误\n                hilog.error(DOMAIN, TAG, `terminateSelf failed, code is ${err.code}, message is ${err.message}.`);\n                return;\n              }\n              // 执行正常业务\n              hilog.info(DOMAIN, TAG, `terminateSelf succeed.`);\n            });\n          } catch (err) {\n            // 捕获同步的参数错误\n            let code = (err as BusinessError).code;\n            let message = (err as BusinessError).message;\n            hilog.error(DOMAIN, TAG, `terminateSelf failed, code is ${code}, message is ${message}.`);\n          }\n        })\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "获取extensionabilitycontext-extensionability组件的上下文",
      children: "获取ExtensionAbilityContext (ExtensionAbility组件的上下文)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["获取特定场景", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-extensioncontext/js-apis-inner-application-extensioncontext",
        children: "ExtensionContext"
      }), "。以FormExtensionContext为例，表示卡片服务的上下文环境，继承自ExtensionContext，提供卡片服务相关的接口能力。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { FormExtensionAbility, formBindingData } from '@kit.FormKit';\nimport { Want } from '@kit.AbilityKit';\n\nexport default class MyFormExtensionAbility extends FormExtensionAbility {\n  onAddForm(want: Want) {\n    let formExtensionContext = this.context;\n    let dataObj1: Record<string, string> = {\n      'temperature': '11c',\n      'time': '11:00'\n    };\n    let obj1: formBindingData.FormBindingData = formBindingData.createFormBindingData(dataObj1);\n    return obj1;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "context的典型使用场景",
      children: "Context的典型使用场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本章节通过以下具体场景来介绍Context的用法："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E8%8E%B7%E5%8F%96%E5%9F%BA%E6%9C%AC%E4%BF%A1%E6%81%AF",
          children: "获取基本信息"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E8%8E%B7%E5%8F%96%E5%BA%94%E7%94%A8%E6%96%87%E4%BB%B6%E8%B7%AF%E5%BE%84",
          children: "获取应用文件路径"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E8%8E%B7%E5%8F%96%E5%92%8C%E4%BF%AE%E6%94%B9%E5%8A%A0%E5%AF%86%E5%88%86%E5%8C%BA",
          children: "获取和修改加密分区"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E7%9B%91%E5%90%AC%E5%BA%94%E7%94%A8%E5%89%8D%E5%90%8E%E5%8F%B0%E5%8F%98%E5%8C%96",
          children: "监听应用前后台变化"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E7%9B%91%E5%90%ACuiability%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E5%8F%98%E5%8C%96",
          children: "监听UIAbility生命周期变化"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "获取基本信息",
      children: "获取基本信息"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["继承自", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context",
        children: "Context"
      }), "的不同类型Context，默认会继承父类的方法和属性，还会拥有自己独立的方法与属性。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过Context属性可以获取当前应用、模块、UIAbility或ExtensionAbility的基本信息（例如资源管理对象、应用程序信息等），下面以UIAbility的信息获取为例："
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果需要跨包获取资源对象，可以参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/resource-categories-and-access#%E8%B5%84%E6%BA%90%E8%AE%BF%E9%97%AE",
        children: "资源访问"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { UIAbility, AbilityConstant, Want } from '@kit.AbilityKit';\n\nexport default class EntryAbility extends UIAbility {\n  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {\n    // 获取ResourceManager（资源管理）\n    let resourceManager = this.context.getApplicationContext().resourceManager;\n    // 获取applicationInfo（当前应用信息）\n    let applicationInfo = this.context.getApplicationContext().applicationInfo;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "获取应用文件路径",
      children: "获取应用文件路径"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context",
        children: "基类Context"
      }), "提供了获取应用文件路径的能力，", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-applicationcontext/js-apis-inner-application-applicationcontext",
        children: "ApplicationContext"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-abilitystagecontext/js-apis-inner-application-abilitystagecontext",
        children: "AbilityStageContext"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiabilitycontext/js-apis-inner-application-uiabilitycontext",
        children: "UIAbilityContext"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-extensioncontext/js-apis-inner-application-extensioncontext",
        children: "ExtensionContext"
      }), "均继承该能力。不同类型的Context获取的路径可能存在差异。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-applicationcontext/js-apis-inner-application-applicationcontext",
            children: "ApplicationContext"
          }), "可以获取应用级的文件路径。该路径用于存放应用全局信息，路径下的文件会跟随应用的卸载而删除。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-abilitystagecontext/js-apis-inner-application-abilitystagecontext",
            children: "AbilityStageContext"
          }), "、", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiabilitycontext/js-apis-inner-application-uiabilitycontext",
            children: "UIAbilityContext"
          }), "、", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-extensioncontext/js-apis-inner-application-extensioncontext",
            children: "ExtensionContext"
          }), "，可以获取", (0,jsx_runtime.jsx)(_components.a, {
            href: "/development-fundamentals/application-package-fundamentals/application-package-overview",
            children: "Module"
          }), "级的文件路径。该路径用于存放Module相关信息，路径下的文件会跟随", (0,jsx_runtime.jsx)(_components.a, {
            href: "/development-fundamentals/application-package-fundamentals/application-package-dev/hap-package",
            children: "HAP"
          }), "/", (0,jsx_runtime.jsx)(_components.a, {
            href: "/development-fundamentals/application-package-fundamentals/application-package-dev/in-app-hsp",
            children: "HSP"
          }), "的卸载而删除。HAP/HSP的卸载不会影响应用级路径下的文件，除非该应用的HAP/HSP已全部卸载。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "UIAbilityContext：可以获取UIAbility所在Module的文件路径。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "ExtensionContext：可以获取ExtensionAbility所在Module的文件路径。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "AbilityStageContext：由于AbilityStageContext创建时机早于UIAbilityContext和ExtensionContext，通常用于在AbilityStage中获取文件路径。"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(456429)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用文件路径属于应用沙箱路径，具体请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/core-file-kit/app-file/app-sandbox-directory",
        children: "应用沙箱目录"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表1"
        })
      }), " 不同级别Context获取的应用文件路径说明"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "属性"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "ApplicationContext获取的路径"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "AbilityStageContext、UIAbilityContext、ExtensionContext获取的路径"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bundleCodeDir"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "安装包目录。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "<路径前缀>/el1/bundle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "<路径前缀>/el1/bundle"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "cacheDir"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "缓存目录。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "<路径前缀>/<加密等级>/base/cache"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["<路径前缀>/<加密等级>/base/", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsxs)(_components.strong, {
                children: ["haps/", (0,jsx_runtime.jsx)(_component0, {})]
              })
            }), "/cache"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "filesDir"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文件目录。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "<路径前缀>/<加密等级>/base/files"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["<路径前缀>/<加密等级>/base/", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsxs)(_components.strong, {
                children: ["haps/", (0,jsx_runtime.jsx)(_component0, {})]
              })
            }), "/files"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "preferencesDir"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "preferences目录。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "<路径前缀>/<加密等级>/base/preferences"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["<路径前缀>/<加密等级>/base/", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsxs)(_components.strong, {
                children: ["haps/", (0,jsx_runtime.jsx)(_component0, {})]
              })
            }), "/preferences"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "tempDir"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "临时目录。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "<路径前缀>/<加密等级>/base/temp"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["<路径前缀>/<加密等级>/base/", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsxs)(_components.strong, {
                children: ["haps/", (0,jsx_runtime.jsx)(_component0, {})]
              })
            }), "/temp"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "databaseDir"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数据库目录。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "<路径前缀>/<加密等级>/database"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["<路径前缀>/<加密等级>/database/", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_component0, {})
              })
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "distributedFilesDir"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "分布式文件目录。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "<路径前缀>/el2/distributedFiles"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "<路径前缀>/el2/distributedFiles/"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "resourceDir11+"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["资源目录。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  需要开发者手动在<module-name>\\resources路径下创建resfile目录。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不涉及"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["<路径前缀>/el1/bundle/", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_component0, {})
              })
            }), "/resources/resfile"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "cloudFileDir12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "云文件目录。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "<路径前缀>/el2/cloud"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "<路径前缀>/el2/cloud/"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "logFileDir22+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "日志文件目录。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "<路径前缀>/el2/log"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "<路径前缀>/el2/log/"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本节以使用ApplicationContext获取cacheDir和filesDir为例，分别介绍如何获取应用缓存目录，以及如何获取应用文件目录，并用于新建文件和读写文件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "获取应用缓存目录"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { common } from '@kit.AbilityKit';\n\n@Entry\n@Component\nstruct ApplicationContextCache {\n  @State message: string = 'Hello World';\n  private context = this.getUIContext().getHostContext() as common.UIAbilityContext;\n\n  build() {\n    Row() {\n      Column() {\n        Text(this.message)\n        // ···\n        Button() {\n          Text('create file')\n        // ···\n            .onClick(() => {\n              let applicationContext = this.context.getApplicationContext();\n              // 获取应用缓存路径\n              let cacheDir = applicationContext.cacheDir;\n            })\n        }\n        // ···\n      }\n    // ···\n    }\n    // ···\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "获取应用文件目录"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { common } from '@kit.AbilityKit';\nimport { buffer } from '@kit.ArkTS';\nimport { fileIo, ReadOptions } from '@kit.CoreFileKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst TAG: string = '[ApplicationContextFile]';\nconst DOMAIN_NUMBER: number = 0xFF00;\n\n@Entry\n@Component\nstruct ApplicationContextFile {\n  @State message: string = 'Hello World';\n  private context = this.getUIContext().getHostContext() as common.UIAbilityContext;\n\n  build() {\n    Row() {\n      Column() {\n        Text(this.message)\n        // ···\n        Button() {\n          Text('create file')\n              // ···\n            .onClick(() => {\n              let applicationContext = this.context.getApplicationContext();\n              // 获取应用文件路径\n              let filesDir = applicationContext.filesDir;\n              hilog.info(DOMAIN_NUMBER, TAG, `filePath: ${filesDir}`);\n              // 文件不存在时创建并打开文件，文件存在时打开文件\n              let file = fileIo.openSync(filesDir + '/test.txt', fileIo.OpenMode.READ_WRITE | fileIo.OpenMode.CREATE);\n              // 写入一段内容至文件\n              let writeLen = fileIo.writeSync(file.fd, 'Try to write str.');\n              hilog.info(DOMAIN_NUMBER, TAG, `The length of str is: ${writeLen}`);\n              // 创建一个大小为1024字节的ArrayBuffer对象，用于存储从文件中读取的数据\n              let arrayBuffer = new ArrayBuffer(1024);\n              // 设置读取的偏移量和长度\n              let readOptions: ReadOptions = {\n                offset: 0,\n                length: arrayBuffer.byteLength\n              };\n              // 读取文件内容到ArrayBuffer对象中，并返回实际读取的字节数\n              let readLen = fileIo.readSync(file.fd, arrayBuffer, readOptions);\n              // 将ArrayBuffer对象转换为Buffer对象，并转换为字符串输出\n              let buf = buffer.from(arrayBuffer, 0, readLen);\n              hilog.info(DOMAIN_NUMBER, TAG, `the content of file: ${buf.toString()}`);\n              // 关闭文件\n              fileIo.closeSync(file);\n            })\n        }\n        // ···\n      }\n    // ···\n    }\n    // ···\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "获取和修改加密分区",
      children: "获取和修改加密分区"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用文件加密是一种保护数据安全的方法，可以使得文件在未经授权访问的情况下得到保护。在不同的场景下，应用需要不同程度的文件保护。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在实际应用中，开发者需要根据不同场景的需求选择合适的加密分区，从而保护应用数据的安全。通过合理使用不同级别的加密分区，可以有效提升应用数据的安全性。关于不同分区的权限说明，详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-contextconstant/js-apis-app-ability-contextconstant",
        children: "ContextConstant"
      }), "的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-contextconstant/js-apis-app-ability-contextconstant#areamode",
        children: "AreaMode"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "EL1：对于私有文件，如闹铃、壁纸等，应用可以将这些文件放到设备级加密分区（EL1）中，以保证在用户输入密码前就可以被访问。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "EL2：对于更敏感的文件，如个人隐私信息等，应用可以将这些文件放到更高级别的加密分区（EL2）中，以保证更高的安全性。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "EL3：对于应用中的记录步数、文件下载、音乐播放，需要在锁屏时读写和创建新文件，放在（EL3）的加密分区比较合适。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "EL4：对于用户安全信息相关的文件，锁屏时不需要读写文件、也不能创建文件，放在（EL4）的加密分区更合适。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["EL5：对于用户隐私敏感数据文件，锁屏后默认不可读写，如果锁屏后需要读写文件，则锁屏前可以调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/ability-api/ability-arkts/both-models/js-apis-screenlockfilemanager/js-apis-screenlockfilemanager#screenlockfilemanageracquireaccess",
          children: "acquireAccess"
        }), "接口申请继续读写文件，或者锁屏后也需要创建新文件且可读写，放在（EL5）的应用级加密分区更合适。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["要实现获取和设置当前加密分区，可以通过读写", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context",
        children: "Context"
      }), "的area属性来实现。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { UIAbility, contextConstant, AbilityConstant, Want } from '@kit.AbilityKit';\n\nexport default class EntryAbility extends UIAbility {\n  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam) {\n    // 存储普通信息前，切换到EL1设备级加密\n    this.context.area = contextConstant.AreaMode.EL1; // 切换area\n    // 存储普通信息\n\n    // 存储敏感信息前，切换到EL2用户级加密\n    this.context.area = contextConstant.AreaMode.EL2; // 切换area\n    // 存储敏感信息\n\n    // 存储敏感信息前，切换到EL3用户级加密\n    this.context.area = contextConstant.AreaMode.EL3; // 切换area\n    // 存储敏感信息\n\n    // 存储敏感信息前，切换到EL4用户级加密\n    this.context.area = contextConstant.AreaMode.EL4; // 切换area\n    // 存储敏感信息\n\n    // 存储敏感信息前，切换到EL5应用级加密\n    this.context.area = contextConstant.AreaMode.EL5; // 切换area\n    // 存储敏感信息\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// AreaContext.ets\nimport { contextConstant, common } from '@kit.AbilityKit';\n\n@Entry\n@Component\nstruct AreaContext {\n  private context = this.getUIContext().getHostContext() as common.UIAbilityContext;\n\n  build() {\n    Column() {\n    // ···\n      List({ initialIndex: 0 }) {\n        // ···\n        ListItem() {\n          Row() {\n            // ···\n          }\n          .onClick(() => {\n            // 存储普通信息前，切换到EL1设备级加密\n            if (this.context.area === contextConstant.AreaMode.EL2) { // 获取area\n              this.context.area = contextConstant.AreaMode.EL1; // 修改area\n              this.getUIContext().getPromptAction().showToast({\n                message: 'SwitchToEL1'\n              });\n            }\n            // 存储普通信息\n          })\n        }\n        // ···\n        ListItem() {\n          Row() {\n            // ···\n          }\n          .onClick(() => {\n            // 存储敏感信息前，切换到EL2用户级加密\n            if (this.context.area === contextConstant.AreaMode.EL1) { // 获取area\n              this.context.area = contextConstant.AreaMode.EL2; // 修改area\n              this.getUIContext().getPromptAction().showToast({\n                message: 'SwitchToEL2'\n              });\n            }\n            // 存储敏感信息\n          })\n        }\n        // ···\n      }\n    // ···\n    }\n    // ···\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "监听应用前后台变化",
      children: "监听应用前后台变化"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者可以使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-applicationcontext/js-apis-inner-application-applicationcontext",
        children: "ApplicationContext"
      }), "的相关能力，监听应用的前后台变化。当应用前后台切换时，可以收到相应回调函数的通知，从而执行一些依赖前后台的方法，或者进行应用前后台切换频率等数据统计。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiabilitycontext/js-apis-inner-application-uiabilitycontext",
        children: "UIAbilityContext"
      }), "中的使用为例进行说明。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { UIAbility, ApplicationStateChangeCallback } from '@kit.AbilityKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n  \nconst TAG = '[LifecycleAbility]';\nconst DOMAIN = 0xF811;\n\nexport default class LifecycleAbility extends UIAbility {\n  onCreate() {\n    let applicationStateChangeCallback: ApplicationStateChangeCallback = {\n      onApplicationForeground() {\n        hilog.info(DOMAIN, TAG, 'applicationStateChangeCallback onApplicationForeground');\n      },\n      onApplicationBackground() {\n        hilog.info(DOMAIN, TAG, 'applicationStateChangeCallback onApplicationBackground');\n      }\n    }\n\n    // 1.获取applicationContext\n    let applicationContext = this.context.getApplicationContext();\n    try {\n      // 2.通过applicationContext注册应用前后台状态监听\n      applicationContext.on('applicationStateChange', applicationStateChangeCallback);\n    } catch (paramError) {\n      hilog.error(DOMAIN, TAG, `error: ${(paramError as BusinessError).code}, ${(paramError as BusinessError).message}`);\n    }\n    hilog.info(DOMAIN, TAG, 'Register applicationStateChangeCallback');\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "监听uiability生命周期变化",
      children: "监听UIAbility生命周期变化"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-applicationcontext/js-apis-inner-application-applicationcontext",
        children: "ApplicationContext"
      }), "监听UIAbility生命周期变化。当", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability",
        children: "UIAbility"
      }), "生命周期变化时，如UIAbility创建、切换至前/后台、销毁等情况，UIAbility会收到相应回调函数的通知，从而执行依赖UIAbility生命周期的方法，也可以统计指定页面停留时间和访问频率等信息。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["每次注册回调函数时，都会返回一个监听生命周期的ID，此ID会自增1。以", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiabilitycontext/js-apis-inner-application-uiabilitycontext",
        children: "UIAbilityContext"
      }), "中的使用为例进行说明。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { AbilityConstant, AbilityLifecycleCallback, UIAbility, Want } from '@kit.AbilityKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { window } from '@kit.ArkUI';\nimport  { BusinessError } from '@kit.BasicServicesKit';\n\nconst TAG: string = '[EntryLifecycleAbility]';\nconst DOMAIN_NUMBER: number = 0xFF00;\n\nexport default class EntryLifecycleAbility extends UIAbility {\n  // 定义生命周期ID\n  private lifecycleId: number = -1;\n\n  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {\n    // 定义生命周期回调对象\n    let abilityLifecycleCallback: AbilityLifecycleCallback = {\n      // 当UIAbility创建时被调用\n      onAbilityCreate(uiAbility) {\n        hilog.info(DOMAIN_NUMBER, TAG, `onAbilityCreate uiAbility.launchWant: ${JSON.stringify(uiAbility.launchWant)}`);\n      },\n      // 当窗口创建时被调用\n      onWindowStageCreate(uiAbility, windowStage: window.WindowStage) {\n        hilog.info(DOMAIN_NUMBER, TAG, `onWindowStageCreate uiAbility.launchWant: ${JSON.stringify(uiAbility.launchWant)}`);\n        hilog.info(DOMAIN_NUMBER, TAG, `onWindowStageCreate windowStage: ${JSON.stringify(windowStage)}`);\n      },\n      // 当窗口处于活动状态时被调用\n      onWindowStageActive(uiAbility, windowStage: window.WindowStage) {\n        hilog.info(DOMAIN_NUMBER, TAG, `onWindowStageActive uiAbility.launchWant: ${JSON.stringify(uiAbility.launchWant)}`);\n        hilog.info(DOMAIN_NUMBER, TAG, `onWindowStageActive windowStage: ${JSON.stringify(windowStage)}`);\n      },\n      // 当窗口处于非活动状态时被调用\n      onWindowStageInactive(uiAbility, windowStage: window.WindowStage) {\n        hilog.info(DOMAIN_NUMBER, TAG, `onWindowStageInactive uiAbility.launchWant: ${JSON.stringify(uiAbility.launchWant)}`);\n        hilog.info(DOMAIN_NUMBER, TAG, `onWindowStageInactive windowStage: ${JSON.stringify(windowStage)}`);\n      },\n      // 当窗口被销毁时被调用\n      onWindowStageDestroy(uiAbility, windowStage: window.WindowStage) {\n        hilog.info(DOMAIN_NUMBER, TAG, `onWindowStageDestroy uiAbility.launchWant: ${JSON.stringify(uiAbility.launchWant)}`);\n        hilog.info(DOMAIN_NUMBER, TAG, `onWindowStageDestroy windowStage: ${JSON.stringify(windowStage)}`);\n      },\n      // 当UIAbility被销毁时被调用\n      onAbilityDestroy(uiAbility) {\n        hilog.info(DOMAIN_NUMBER, TAG, `onAbilityDestroy uiAbility.launchWant: ${JSON.stringify(uiAbility.launchWant)}`);\n      },\n      // 当UIAbility从后台转到前台时触发回调\n      onAbilityForeground(uiAbility) {\n        hilog.info(DOMAIN_NUMBER, TAG, `onAbilityForeground uiAbility.launchWant: ${JSON.stringify(uiAbility.launchWant)}`);\n      },\n      // 当UIAbility从前台转到后台时触发回调\n      onAbilityBackground(uiAbility) {\n        hilog.info(DOMAIN_NUMBER, TAG, `onAbilityBackground uiAbility.launchWant: ${JSON.stringify(uiAbility.launchWant)}`);\n      },\n      // 当UIAbility迁移时被调用\n      onAbilityContinue(uiAbility) {\n        hilog.info(DOMAIN_NUMBER, TAG, `onAbilityContinue uiAbility.launchWant: ${JSON.stringify(uiAbility.launchWant)}`);\n      }\n    };\n    // 获取应用上下文\n    let applicationContext = this.context.getApplicationContext();\n    try {\n      // 注册应用内生命周期回调\n      this.lifecycleId = applicationContext.on('abilityLifecycle', abilityLifecycleCallback);\n    } catch (err) {\n      let code = (err as BusinessError).code;\n      let message = (err as BusinessError).message;\n      hilog.error(DOMAIN_NUMBER, TAG, `Failed to register applicationContext. Code is ${code}, message is ${message}`);\n    }\n\n    hilog.info(DOMAIN_NUMBER, TAG, `register callback number: ${this.lifecycleId}`);\n  }\n  onDestroy(): void {\n    // 获取应用上下文\n    let applicationContext = this.context.getApplicationContext();\n    try {\n      // 取消应用内生命周期回调\n      applicationContext.off('abilityLifecycle', this.lifecycleId);\n    } catch (err) {\n      let code = (err as BusinessError).code;\n      let message = (err as BusinessError).message;\n      hilog.error(DOMAIN_NUMBER, TAG, `Failed to unregister applicationContext. Code is ${code}, message is ${message}`);\n    }\n  }\n}\n"
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
614531(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
456429(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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