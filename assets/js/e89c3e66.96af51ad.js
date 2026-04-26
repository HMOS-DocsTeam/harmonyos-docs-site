"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["305641"], {
674343(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ability_kit_stage_model_development_stage_model_application_components_extensionability_overview_embeddeduiextensionability_embeddeduiextensionability_md_e89_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ability-kit-stage-model-development-stage-model-application-components-extensionability-overview-embeddeduiextensionability-embeddeduiextensionability-md-e89.json
var site_docs_ability_kit_stage_model_development_stage_model_application_components_extensionability_overview_embeddeduiextensionability_embeddeduiextensionability_md_e89_namespaceObject = JSON.parse('{"id":"ability-kit/stage-model-development/stage-model-application-components/extensionability-overview/embeddeduiextensionability/embeddeduiextensionability","title":"EmbeddedUIExtensionAbility","description":"概述","source":"@site/docs/ability-kit/stage-model-development/stage-model-application-components/extensionability-overview/embeddeduiextensionability/embeddeduiextensionability.md","sourceDirName":"ability-kit/stage-model-development/stage-model-application-components/extensionability-overview/embeddeduiextensionability","slug":"/ability-kit/stage-model-development/stage-model-application-components/extensionability-overview/embeddeduiextensionability/","permalink":"/harmonyos-docs-site/ability-kit/stage-model-development/stage-model-application-components/extensionability-overview/embeddeduiextensionability/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"EmbeddedUIExtensionAbility","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/embeddeduiextensionability","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"UIAbility备份恢复","permalink":"/harmonyos-docs-site/ability-kit/stage-model-development/stage-model-application-components/uiability/ability-recover-guideline/"},"next":{"title":"使用AppServiceExtensionAbility组件实现后台服务","permalink":"/harmonyos-docs-site/ability-kit/stage-model-development/stage-model-application-components/extensionability-overview/app-service-extension-ability/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ability-kit/stage-model-development/stage-model-application-components/extensionability-overview/embeddeduiextensionability/embeddeduiextensionability.md


const frontMatter = {
	title: 'EmbeddedUIExtensionAbility',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/embeddeduiextensionability',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'EmbeddedUIExtensionAbility';

const assets = {

};



const toc = [{
  "value": "概述",
  "id": "概述",
  "level": 2
}, {
  "value": "约束限制",
  "id": "约束限制",
  "level": 2
}, {
  "value": "生命周期",
  "id": "生命周期",
  "level": 2
}, {
  "value": "开发EmbeddedUIExtensionAbility提供方",
  "id": "开发embeddeduiextensionability提供方",
  "level": 2
}, {
  "value": "开发EmbeddedUIExtensionAbility使用方",
  "id": "开发embeddeduiextensionability使用方",
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
        id: "embeddeduiextensionability",
        children: "EmbeddedUIExtensionAbility"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-embeddeduiextensionability/js-apis-app-ability-embeddeduiextensionability",
        children: "EmbeddedUIExtensionAbility"
      }), "是EMBEDDED_UI类型的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-extensionability/js-apis-app-ability-extensionability",
        children: "ExtensionAbility"
      }), "组件，提供了跨进程界面嵌入的能力。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["EmbeddedUIExtensionAbility需要和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/rendering-drawing/ts-container-embedded-component/ts-container-embedded-component",
        children: "EmbeddedComponent"
      }), "一起配合使用，开发者可以在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability",
        children: "UIAbility"
      }), "的页面中通过EmbeddedComponent嵌入本应用的EmbeddedUIExtensionAbility提供的UI。EmbeddedUIExtensionAbility在独立进程中运行，完成其页面的布局和渲染，与UIAbility数据不互通，适用于有进程隔离诉求的模块化开发场景。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在下面的示例中，UIAbility运行在主进程，其中包含多个EmbeddedComponent。每个EmbeddedComponent对应一个EmbeddedUIExtensionAbility。多个EmbeddedUIExtensionAbility可以分别用于实现办公软件中的文档、表格、演示文件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1"
        })
      }), " EmbeddedUIExtensionAbility示意图"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(347536)/* ["default"] */.A) + "",
        width: "621",
        height: "621"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束限制",
      children: "约束限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前EmbeddedUIExtensionAbility和EmbeddedComponent仅支持在拥有多进程配置的设备上使用，目前支持多进程配置的设备有2in1与Tablet。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "生命周期",
      children: "生命周期"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-embeddeduiextensionability/js-apis-app-ability-embeddeduiextensionability",
        children: "EmbeddedUIExtensionAbility"
      }), "提供了onCreate、onSessionCreate、onSessionDestroy、onForeground、onBackground和onDestroy生命周期回调，根据需要重写对应的回调方法。以下生命周期回调均继承自", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiextensionability/js-apis-app-ability-uiextensionability",
        children: "UIExtensionAbility"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "onCreate"
          })
        }), "：当EmbeddedUIExtensionAbility创建时回调，执行初始化业务逻辑操作。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "onSessionCreate"
          })
        }), "：当EmbeddedUIExtensionAbility界面内容对象创建后调用。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "onSessionDestroy"
          })
        }), "：当EmbeddedUIExtensionAbility界面内容对象销毁后调用。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "onForeground"
          })
        }), "：当EmbeddedUIExtensionAbility从后台转到前台时触发。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "onBackground"
          })
        }), "：当EmbeddedUIExtensionAbility从前台转到后台时触发。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "onDestroy"
          })
        }), "：当EmbeddedUIExtensionAbility销毁时回调，可以执行资源清理等操作。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(402134)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "EmbeddedComponent只能在UIAbility中使用，且被拉起的EmbeddedUIExtensionAbility需与UIAbility属于同一应用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "EmbeddedUIExtensionAbility支持应用分身，被拉起的EmbeddedUIExtensionAbility与UIAbility属于同一分身应用。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["EmbeddedUIExtensionAbility通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiextensioncontext/js-apis-inner-application-uiextensioncontext",
        children: "UIExtensionContext"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiextensioncontentsession/js-apis-app-ability-uiextensioncontentsession",
        children: "UIExtensionContentSession"
      }), "提供相关能力。本文描述中称被启动的EmbeddedUIExtensionAbility为提供方，称启动EmbeddedUIExtensionAbility的EmbeddedComponent组件为使用方。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发embeddeduiextensionability提供方",
      children: "开发EmbeddedUIExtensionAbility提供方"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者在实现一个", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-embeddeduiextensionability/js-apis-app-ability-embeddeduiextensionability",
        children: "EmbeddedUIExtensionAbility"
      }), "提供方时，需要在DevEco Studio工程中手动新建一个EmbeddedUIExtensionAbility，具体步骤如下。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在工程Module对应的ets目录下，右键选择“New > Directory”，新建一个目录并命名为embeddeduiextability。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在embeddeduiextability目录，右键选择“New > File”，新建一个.ets文件并命名为EmbeddedUIExtAbility.ets。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "打开EmbeddedUIExtAbility.ets文件，导入EmbeddedUIExtensionAbility的依赖包，自定义类继承EmbeddedUIExtensionAbility并实现onCreate、onSessionCreate、onSessionDestroy、onForeground、onBackground和onDestroy生命周期回调。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { EmbeddedUIExtensionAbility, UIExtensionContentSession, Want } from '@kit.AbilityKit';\n\nconst TAG: string = '[EmbeddedUIExtAbility]';\n\nexport default class EmbeddedUIExtAbility extends EmbeddedUIExtensionAbility {\n  onCreate() {\n    console.info(TAG, `onCreate`);\n  }\n\n  onForeground() {\n    console.info(TAG, `onForeground`);\n  }\n\n  onBackground() {\n    console.info(TAG, `onBackground`);\n  }\n\n  onDestroy() {\n    console.info(TAG, `onDestroy`);\n  }\n\n  onSessionCreate(want: Want, session: UIExtensionContentSession) {\n    console.info(TAG, `onSessionCreate, want: ${JSON.stringify(want)}`);\n    let param: Record<string, UIExtensionContentSession> = {\n      'session': session\n    };\n    let storage: LocalStorage = new LocalStorage(param);\n    session.loadContent('pages/extension', storage);\n  }\n\n  onSessionDestroy(session: UIExtensionContentSession) {\n    console.info(TAG, `onSessionDestroy`);\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "EmbeddedUIExtensionAbility的onSessionCreate中加载了入口页面文件pages/extension.ets内容如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { UIExtensionContentSession } from '@kit.AbilityKit';\n\n@Entry()\n@Component\nstruct Extension {\n  @State message: string = 'EmbeddedUIExtensionAbility Index';\n  localStorage: LocalStorage | undefined = this.getUIContext().getSharedLocalStorage();\n  private session: UIExtensionContentSession | undefined = this.localStorage?.get<UIExtensionContentSession>('session');\n\n  build() {\n    Column() {\n      Text(this.message)\n        .fontSize(20)\n        .fontWeight(FontWeight.Bold)\n      Button('terminateSelfWithResult').fontSize(20).onClick(() => {\n        this.session?.terminateSelfWithResult({\n          resultCode: 1,\n          want: {\n            bundleName: 'com.samples.embeddeduiextensionability',\n            abilityName: 'ExampleEmbeddedAbility'\n          }});\n      })\n    }.width('100%').height('100%')\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在工程Module对应的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file",
            children: "module.json5配置文件"
          }), "中注册EmbeddedUIExtensionAbility，type标签需要设置为“embeddedUI”，srcEntry标签表示当前EmbeddedUIExtensionAbility组件所对应的代码路径。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  \"module\": {\n    // ···\n    \"extensionAbilities\": [\n    // ···\n      {\n        \"name\": \"EmbeddedUIExtAbility\",\n        \"icon\": \"$media:startIcon\",\n        \"description\": \"EmbeddedUIExtAbility\",\n        \"type\": \"embeddedUI\",\n        \"srcEntry\": \"./ets/embeddeduiextability/EmbeddedUIExtAbility.ets\"\n      }\n    ]\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发embeddeduiextensionability使用方",
      children: "开发EmbeddedUIExtensionAbility使用方"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者可以在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability",
        children: "UIAbility"
      }), "的页面中通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/rendering-drawing/ts-container-embedded-component/ts-container-embedded-component",
        children: "EmbeddedComponent"
      }), "容器加载自己应用内的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-embeddeduiextensionability/js-apis-app-ability-embeddeduiextensionability",
        children: "EmbeddedUIExtensionAbility"
      }), "。此外，EmbeddedUIExtensionAbility在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/both-models/js-apis-app-ability-want/js-apis-app-ability-want",
        children: "want"
      }), ".parameters中新增了两个字段ohos.extension.processMode.hostSpecified和ohos.extension.processMode.hostInstance。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["ohos.extension.processMode.hostSpecified控制非首次启动的EmbeddedUIExtensionAbility是否运行在同", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiextensionability/js-apis-app-ability-uiextensionability",
          children: "UIExtensionAbility"
        }), "的进程中，参数是进程名称。例如，\"ohos.extension.processMode.hostSpecified\"： \"com.ohos.inentexecutedemo:embeddedUI\"。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ohos.extension.processMode.hostInstance控制启动的EmbeddedUIExtensionAbility是否按照独立进程启动，传入false时，按照UIExtensionAbility的进程模型启动，入参true的时候，不管被拉起的UIExtensionAbility配置的是什么进程模型，都会新增一个进程，例如，\"ohos.extension.processMode.hostInstance\": \"true\"。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ohos.extension.processMode.hostSpecified和ohos.extension.processMode.hostInstance同时配置时，hostSpecified优先，会运行在指定的进程中。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如在首页文件：pages/Index.ets中添加如下内容："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { Want } from '@kit.AbilityKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n@Entry\n@Component\nstruct BasicClass {\n  @State message: string = 'Message: ';\n  private want: Want = {\n    bundleName: 'com.samples.embeddeduiextensionability',\n    abilityName: 'EmbeddedUIExtAbility',\n    parameters: {\n      'ohos.extension.processMode.hostInstance': 'true'\n    }\n  };\n\n  build() {\n    Row() {\n      Column() {\n        Text(this.message).fontSize(30)\n        EmbeddedComponent(this.want, EmbeddedType.EMBEDDED_UI_EXTENSION)\n          .width('100%')\n          .height('90%')\n          .onTerminated((info: TerminationInfo) => {\n            this.message = 'Termination: code = ' + info.code + ', want = ' + JSON.stringify(info.want);\n          })\n          .onError((error: BusinessError) => {\n            this.message = 'Error: code = ' + error.code;\n          })\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
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
402134(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
347536(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552797844-dcd6414f18751a5f68e887622292513f.png");

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