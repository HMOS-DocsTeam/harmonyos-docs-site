"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["956545"], {
344161(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ability_kit_stage_model_development_stage_model_application_components_abilitystage_abilitystage_md_c03_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ability-kit-stage-model-development-stage-model-application-components-abilitystage-abilitystage-md-c03.json
var site_docs_ability_kit_stage_model_development_stage_model_application_components_abilitystage_abilitystage_md_c03_namespaceObject = JSON.parse('{"id":"ability-kit/stage-model-development/stage-model-application-components/abilitystage/abilitystage","title":"AbilityStage组件管理器","description":"概述","source":"@site/docs/ability-kit/stage-model-development/stage-model-application-components/abilitystage/abilitystage.md","sourceDirName":"ability-kit/stage-model-development/stage-model-application-components/abilitystage","slug":"/ability-kit/stage-model-development/stage-model-application-components/abilitystage/","permalink":"/harmonyos-docs-site/ability-kit/stage-model-development/stage-model-application-components/abilitystage/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"AbilityStage组件管理器","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/abilitystage","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用AppServiceExtensionAbility组件实现后台服务","permalink":"/harmonyos-docs-site/ability-kit/stage-model-development/stage-model-application-components/extensionability-overview/app-service-extension-ability/"},"next":{"title":"应用上下文Context","permalink":"/harmonyos-docs-site/ability-kit/stage-model-development/stage-model-application-components/application-context-stage/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ability-kit/stage-model-development/stage-model-application-components/abilitystage/abilitystage.md


const frontMatter = {
	title: 'AbilityStage组件管理器',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/abilitystage',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'AbilityStage组件管理器';

const assets = {

};



const toc = [{
  "value": "概述",
  "id": "概述",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}, {
  "value": "创建AbilityStage文件",
  "id": "创建abilitystage文件",
  "level": 3
}, {
  "value": "监听系统环境变量的变化",
  "id": "监听系统环境变量的变化",
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
        id: "abilitystage组件管理器",
        children: "AbilityStage组件管理器"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-abilitystage/js-apis-app-ability-abilitystage",
        children: "AbilityStage"
      }), "是一个", (0,jsx_runtime.jsx)(_components.a, {
        href: "/development-fundamentals/application-package-fundamentals/application-package-overview#%E5%BA%94%E7%94%A8%E7%9A%84%E5%A4%9Amodule%E8%AE%BE%E8%AE%A1%E6%9C%BA%E5%88%B6",
        children: "Module"
      }), "级别的组件管理器，应用的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/development-fundamentals/application-package-fundamentals/application-package-dev/hap-package",
        children: "HAP"
      }), "在首次加载时会创建一个AbilityStage实例，可以对该Module进行初始化等操作。AbilityStage与HAP一一对应，即每个HAP拥有一个AbilityStage实例。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["AbilityStage拥有", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-abilitystage/js-apis-app-ability-abilitystage#oncreate",
        children: "onCreate()"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-abilitystage/js-apis-app-ability-abilitystage#ondestroy12",
        children: "onDestroy()"
      }), "生命周期回调和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-abilitystage/js-apis-app-ability-abilitystage#onacceptwant",
        children: "onAcceptWant()"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-abilitystage/js-apis-app-ability-abilitystage#onconfigurationupdate",
        children: "onConfigurationUpdate()"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-abilitystage/js-apis-app-ability-abilitystage#onmemorylevel",
        children: "onMemoryLevel()"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-abilitystage/js-apis-app-ability-abilitystage#onnewprocessrequest11",
        children: "onNewProcessRequest()"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-abilitystage/js-apis-app-ability-abilitystage#onpreparetermination15",
        children: "onPrepareTermination()"
      }), "等事件回调。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["onCreate()生命周期回调：在开始加载对应Module的第一个应用组件（如", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability",
          children: "UIAbility组件"
        }), "或具体扩展能力的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-extensionability/js-apis-app-ability-extensionability",
          children: "ExtensionAbility组件"
        }), "）实例之前会先创建AbilityStage，并在AbilityStage创建完成之后执行其onCreate()生命周期回调。AbilityStage模块提供在Module加载的时候，通知开发者，可以在此进行该Module的初始化（如资源预加载、线程创建等）。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["onAcceptWant()事件回调：UIAbility", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-launch-type#specified%E5%90%AF%E5%8A%A8%E6%A8%A1%E5%BC%8F",
          children: "指定实例模式（specified）"
        }), "启动时触发的事件回调，具体使用请参见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-launch-type",
          children: "UIAbility启动模式综述"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["onConfigurationUpdate()事件回调：当系统环境变量（例如系统语言、深浅色等）发生变更时触发的事件回调，配置项均定义在", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/ability-api/ability-arkts/both-models/js-apis-app-ability-configuration/js-apis-app-ability-configuration",
          children: "Configuration"
        }), "类中。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "onMemoryLevel()事件回调：当系统调整内存时触发的事件回调。应用被切换到后台时，系统会将在后台的应用保留在缓存中。即使应用处于缓存中，也会影响系统整体性能。当系统资源不足时，系统会通过多种方式从应用中回收内存，必要时会完全停止应用，从而释放内存用于执行关键任务。为了进一步保持系统内存的平衡，避免系统停止用户的应用进程，可以在AbilityStage中的onMemoryLevel()生命周期回调中订阅系统内存的变化情况，释放不必要的资源。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["onNewProcessRequest()事件回调：UIAbility启动时触发的事件回调。通过该回调，开发者可以指定每个UIAbility启动时是否在独立的进程中创建。该回调返回一个开发者自定义字符串标识，如果返回的字符串标识为开发者曾创建的，则复用该标识所对应的进程，否则创建新的进程。需要注意该回调需要配合在module.json5中声明", (0,jsx_runtime.jsx)(_components.a, {
          href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file#abilities%E6%A0%87%E7%AD%BE",
          children: "isolationProcess"
        }), "字段为true。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["onPrepareTermination()事件回调：当应用被用户关闭时调用，可用于询问用户选择立即执行操作还是取消操作。开发者通过在回调中返回", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-abilityconstant/js-apis-app-ability-abilityconstant#preparetermination15",
          children: "AbilityConstant.PrepareTermination"
        }), "中定义的枚举类型通知系统是否继续执行关闭动作。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "onDestroy()生命周期回调：当对应Module的最后一个Ability实例退出后触发。此方法仅在应用正常销毁时触发。当应用程序异常退出或被终止时，将不会调用此方法。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "创建abilitystage文件",
      children: "创建AbilityStage文件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DevEco Studio默认工程中未自动生成AbilityStage，如需要使用AbilityStage的能力，可以手动新建一个AbilityStage文件，具体步骤如下。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在工程Module对应的ets目录下，右键选择“New > Directory”，新建一个目录并命名为exampleabilitystage。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在exampleabilitystage目录，右键选择“New > ArkTS File”，新建一个文件并命名为MyAbilityStage.ets。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["打开MyAbilityStage.ets文件，导入AbilityStage的依赖包，自定义类继承AbilityStage并加上需要的生命周期回调，示例中增加了一个", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-abilitystage/js-apis-app-ability-abilitystage#oncreate",
            children: "onCreate()"
          }), "生命周期回调。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { AbilityStage, Want } from '@kit.AbilityKit';\n\nexport default class MyAbilityStage extends AbilityStage {\n  onCreate(): void {\n    // 应用HAP首次加载时触发，可以在此执行该Module的初始化操作（例如资源预加载、线程创建等）。\n  }\n\n  onAcceptWant(want: Want): string {\n    // 仅specified模式下触发\n    return 'MyAbilityStage';\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在", (0,jsx_runtime.jsx)(_components.a, {
            href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file",
            children: "module.json5配置文件"
          }), "中，通过配置 srcEntry 参数来指定模块对应的代码路径，以作为HAP加载的入口。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  \"module\": {\n    \"name\": \"entry\",\n    \"type\": \"entry\",\n    \"srcEntry\": \"./ets/myabilitystage/MyAbilityStage.ets\",\n    // ···\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "监听系统环境变量的变化",
      children: "监听系统环境变量的变化"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下面以监听系统环境变量的变化的开发场景为例，介绍AbilityStage组件回调函数的使用。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在onCreate()生命周期中，通过EnvironmentCallback来监听系统环境变化，例如系统语言、深浅色模式、屏幕方向、字体大小缩放比例、字体粗细缩放比例等信息。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当系统环境变量发生变更时，会触发EnvironmentCallback中的onConfigurationUpdated()回调，并打印相关信息。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过关闭应用进程，可以触发AbilityStage的onDestroy()生命周期回调。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { EnvironmentCallback, AbilityStage } from '@kit.AbilityKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nexport default class MyAbilityStage extends AbilityStage {\n  onCreate(): void {\n    console.info('AbilityStage onCreate');\n    let envCallback: EnvironmentCallback = {\n      onConfigurationUpdated(config) {\n        console.info(`envCallback onConfigurationUpdated success: ${JSON.stringify(config)}`);\n        let language = config.language; // 应用程序的当前语言\n        let colorMode = config.colorMode; // 深浅色模式\n        let direction = config.direction; // 屏幕方向\n        let fontSizeScale = config.fontSizeScale; // 字体大小缩放比例\n        let fontWeightScale = config.fontWeightScale; // 字体粗细缩放比例\n      },\n      onMemoryLevel(level) {\n        console.info(`onMemoryLevel level: ${level}`);\n      }\n    };\n    try {\n      let applicationContext = this.context.getApplicationContext();\n      let callbackId = applicationContext.on('environment', envCallback);\n      console.info(`callbackId: ${callbackId}`);\n    } catch (paramError) {\n      console.error(`error: ${(paramError as BusinessError).code}, ${(paramError as BusinessError).message}`);\n    }\n  }\n\n  onDestroy(): void {\n    // 通过onDestroy()方法，可以监听到Ability的销毁事件。\n    console.info('AbilityStage onDestroy');\n  }\n}\n"
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