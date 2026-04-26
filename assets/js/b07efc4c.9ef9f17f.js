"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["457740"], {
74020(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_ui_system_scenarization_capability_arkts_ui_cross_process_arkts_embedded_components_arkts_embedded_components_md_b07_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-ui-system-scenarization-capability-arkts-ui-cross-process-arkts-embedded-components-arkts-embedded-components-md-b07.json
var site_docs_arkui_arkts_ui_development_arkts_ui_system_scenarization_capability_arkts_ui_cross_process_arkts_embedded_components_arkts_embedded_components_md_b07_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-ui-system-scenarization-capability/arkts-ui-cross-process/arkts-embedded-components/arkts-embedded-components","title":"同应用进程嵌入式组件 (EmbeddedComponent)","description":"EmbeddedComponent组件允许当前页面嵌入同一应用内其他EmbeddedUIExtensionAbility供给的UI内容，这些UI运行在独立进程中，提供更高的安全性和稳定性。","source":"@site/docs/arkui/arkts-ui-development/arkts-ui-system-scenarization-capability/arkts-ui-cross-process/arkts-embedded-components/arkts-embedded-components.md","sourceDirName":"arkui/arkts-ui-development/arkts-ui-system-scenarization-capability/arkts-ui-cross-process/arkts-embedded-components","slug":"/arkui/arkts-ui-development/arkts-ui-system-scenarization-capability/arkts-ui-cross-process/arkts-embedded-components/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-ui-system-scenarization-capability/arkts-ui-cross-process/arkts-embedded-components/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"同应用进程嵌入式组件 (EmbeddedComponent)","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-embedded-components","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"全屏启动元服务组件（FullScreenLaunchComponent）","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-ui-system-scenarization-capability/arkts-ui-cross-process/arkts-fullscreencomponent/"},"next":{"title":"基于NDK构建UI概述","permalink":"/harmonyos-docs-site/arkui/arkts-use-ndk/ndk-build-ui-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-ui-system-scenarization-capability/arkts-ui-cross-process/arkts-embedded-components/arkts-embedded-components.md


const frontMatter = {
	title: '同应用进程嵌入式组件 (EmbeddedComponent)',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-embedded-components',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '同应用进程嵌入式组件 (EmbeddedComponent)';

const assets = {

};



const toc = [{
  "value": "基本概念",
  "id": "基本概念",
  "level": 2
}, {
  "value": "使用约束",
  "id": "使用约束",
  "level": 2
}, {
  "value": "场景示例",
  "id": "场景示例",
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
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "同应用进程嵌入式组件-embeddedcomponent",
        children: "同应用进程嵌入式组件 (EmbeddedComponent)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "EmbeddedComponent组件允许当前页面嵌入同一应用内其他EmbeddedUIExtensionAbility供给的UI内容，这些UI运行在独立进程中，提供更高的安全性和稳定性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "EmbeddedComponent组件主要用于实现跨模块、跨进程的嵌入式界面集成，其核心目标是通过模块化设计提升应用的灵活性和用户体验。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者在使用时需注意其使用限制和生命周期管理，合理设计应用架构以最大限度地发挥其优势。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/rendering-drawing/ts-container-embedded-component/ts-container-embedded-component",
            children: "EmbeddedComponent"
          }), "组件"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "EmbeddedComponent组件用于在当前页面嵌入本应用内其他EmbeddedUIExtensionAbility提供的UI。它允许开发者将应用的某些功能或界面嵌入另一个界面中，实现更灵活的用户界面设计，适用于需要进程隔离的模块化开发场景。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-embeddeduiextensionability/js-apis-app-ability-embeddeduiextensionability",
            children: "EmbeddedUIExtensionAbility"
          }), "组件"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "提供方应用中定义使用，用于实现跨进程界面嵌入功能，仅能被同应用的UIAbility拉起，并需在多进程权限的场景下使用。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用约束",
      children: "使用约束"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设备要求"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["EmbeddedComponent组件仅可在支持", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-embeddeduiextensionability/js-apis-app-ability-embeddeduiextensionability",
            children: "EmbeddedUIExtensionAbility"
          }), "的设备上正常运行。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用范围"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "EmbeddedComponent组件只能在UIAbility中使用，且被拉起的EmbeddedUIExtensionAbility需与UIAbility属于同一应用。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "属性限制"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["EmbeddedComponent组件支持", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/ts-component-general-attributes",
            children: "通用属性"
          }), "，且宽高默认值和最小值均为10vp；"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "不支持如下与宽高相关的属性："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "\"constraintSize\"、\"aspectRatio\"、\"layoutWeight\"、\"flexBasis\"、\"flexGrow\"和\"flexShrink\"。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "事件调用"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "与屏幕坐标相关的事件信息会基于EmbeddedComponent的位置宽高进行坐标转换后传递给被拉起的EmbeddedUIExtensionAbility处理。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["EmbeddedComponent组件不支持", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/interaction-events/ts-universal-events-click/ts-universal-events-click",
            children: "点击"
          }), "等通用事件，仅支持", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/rendering-drawing/ts-container-embedded-component/ts-container-embedded-component#onterminated",
            children: "onTerminated"
          }), "事件和", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/rendering-drawing/ts-container-embedded-component/ts-container-embedded-component#onerror",
            children: "onError"
          }), "事件。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景示例",
      children: "场景示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例简单展示了EmbeddedComponent组件和EmbeddedUIExtensionAbility的基础使用方式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "加载项首页"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "加载项首页是EmbeddedComponent组件的宿主页面，负责加载和展示嵌入式UI扩展能力的内容。以下是一个完整的加载项首页实现示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { Want } from '@kit.AbilityKit';\n\n@Component\nexport struct Embedded {\n  @State message: string = 'Message: ';\n  private want: Want = {\n    bundleName: 'com.samples.uiextensionandaccessibility',\n    abilityName: 'ExampleEmbeddedAbility',\n  };\n  build() {\n    // ...\n      Row() {\n        Column() {\n          Text(this.message).fontSize(30)\n          EmbeddedComponent(this.want, EmbeddedType.EMBEDDED_UI_EXTENSION)\n            .width('100%')\n            .height('90%')\n            .onTerminated((info) => {\n              // 点击extension页面内的terminateSelfWithResult按钮后触发onTerminated回调，文本框显示如下信息\n              this.message = `Termination: code = ${info.code} , want = ${JSON.stringify(info.want)}`;\n            })\n            .onError((error) => {\n              // 失败或异常触发onError回调，文本框显示如下报错内容\n              this.message = `Error: code = ${error.code}`;\n            })\n        }\n        .width('100%')\n      }\n      .height('100%')\n      // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在ArkTS项目中，EmbeddedUIExtensionAbility的实现代码通常位于项目的ets/extensionAbility目录下。例如，ExampleEmbeddedAbility.ets文件位于./ets/extensionAbility/目录中。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在实现加载项首页时，开发者需要注意以下几点："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "多进程模型检测"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在应用启动时，建议检测设备是否已开启多进程模型。如果未开启，应提供明确的错误提示或引导用户开启。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "异常处理"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/rendering-drawing/ts-container-embedded-component/ts-container-embedded-component#onerror",
            children: "onError"
          }), "事件处理加载或运行嵌入式能力时可能出现的错误，提升用户体验。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "生命周期管理"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "了解并管理好嵌入式组件的生命周期，确保资源的正确释放和回收。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "样式配置"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "合理配置EmbeddedComponent组件的大小和位置，确保嵌入式界面能够以期望的尺寸和位置显示。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "提供方应用生命周期实现"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "提供方应用是指提供嵌入式UI扩展能力的应用。以下是提供方应用生命周期实现的代码示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { EmbeddedUIExtensionAbility, UIExtensionContentSession, Want } from '@kit.AbilityKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst TAG: string = '[ExampleEmbeddedAbility]'\n\nexport default class ExampleEmbeddedAbility extends EmbeddedUIExtensionAbility {\n  onCreate() {\n    hilog.info(0x0000, TAG, '%{public}s', `onCreate`);\n  }\n\n  onForeground() {\n    hilog.info(0x0000, TAG, '%{public}s',  `onForeground`);\n  }\n\n  onBackground() {\n    hilog.info(0x0000, TAG, '%{public}s', `onBackground`);\n  }\n\n  onDestroy() {\n    hilog.info(0x0000, TAG, '%{public}s', `onDestroy`);\n  }\n\n  onSessionCreate(want: Want, session: UIExtensionContentSession) {\n    hilog.info(0x0000, TAG , '%{public}s', `onSessionCreate, want: ${JSON.stringify(want)}`);\n    let param: Record<string, UIExtensionContentSession> = {\n      'session': session\n    };\n    let storage: LocalStorage = new LocalStorage(param);\n    // 加载 Extension.ets 页面内容\n    session.loadContent('pages/EmbeddedComponent/Extension', storage);\n  }\n\n  onSessionDestroy(session: UIExtensionContentSession) {\n    hilog.info(0x0000, TAG , '%{public}s',  `onSessionDestroy`);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "关键实现说明："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "生命周期阶段"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "onCreate → onForeground：组件初始化到可见的完整流程；"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "onBackground → onForeground：前后台切换时的状态迁移；"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "onDestroy：组件被宿主主动销毁时的资源回收点。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "会话管理"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "onSessionCreate：创建独立存储上下文并加载UI界面；"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "onSessionDestroy：处理会话结束时（如用户主动关闭）的清理操作。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "上下文传递"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过LocalStorage实现UIExtensionContentSession的跨组件传递；"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用loadContent方法绑定ArkTS页面与扩展能力上下文。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "入口页面"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下提供方应用的入口组件实现，展示了如何使用UIExtensionContentSession会话以及如何通过按钮点击事件退出嵌入式页面并返回结果，该代码文件需要在main_pages.json配置文件中声明使用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { UIExtensionContentSession } from '@kit.AbilityKit';\n\n@Entry()\n@Component\nstruct Extension {\n  @State message: string = 'EmbeddedUIExtensionAbility Index';\n  private storage: LocalStorage | undefined = this.getUIContext().getSharedLocalStorage();\n  private session: UIExtensionContentSession | undefined = this.storage?.get<UIExtensionContentSession>('session');\n\n  build() {\n    Column() {\n      Text(this.message)\n        .fontSize(20)\n        .fontWeight(FontWeight.Bold)\n      Button('terminateSelfWithResult').fontSize(20).onClick(() => {\n        // 点击按钮后调用terminateSelfWithResult退出\n        this.session?.terminateSelfWithResult({\n          resultCode: 1,\n          want: {\n            bundleName: 'com.samples.uiextensionandaccessibility',\n            abilityName: 'ExampleEmbeddedAbility',\n          }\n        });\n      })\n    }.width('100%').height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在实现入口页面时，开发者需要注意以下几点："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "会话管理"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "正确获取并使用UIExtensionContentSession会话对象，确保与宿主应用的通信正常。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "结果返回"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过terminateSelfWithResult方法向宿主应用返回结果时，需要指定："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "resultCode：结果代码；"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "want：目标意图，指定结果的接收方。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "页面生命周期"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "了解并管理好入口页面的生命周期，确保资源的正确释放和回收。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "样式配置"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "合理配置页面元素的样式，确保界面显示效果符合预期。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "添加配置项"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为了使嵌入式UI扩展能力正常工作，需要在应用的配置文件中进行相应的设置。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在module.json5配置文件的\"extensionAbilities\"标签下增加ExampleEmbeddedAbility配置，以注册ExampleEmbeddedAbility嵌入式UI扩展能力。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"name\": \"ExampleEmbeddedAbility\",\n  \"srcEntry\": \"./ets/extensionability/ExampleEmbeddedAbility.ets\",\n  \"type\": \"embeddedUI\"\n},\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "预期效果"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在支持EmbeddedUIExtensionAbility的设备上启动应用；"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(376234)/* ["default"] */.A) + "",
            width: "619",
            height: "192"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "点击terminateSelfWithResult按钮，提供方内容消失，页面显示onTerminated信息。"
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
376234(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958060-3fe13df985e2ea278ae7835505af84e1.jpg");

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