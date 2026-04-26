"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["567688"], {
622440(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ability_kit_ability_terminology_ability_terminology_md_889_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ability-kit-ability-terminology-ability-terminology-md-889.json
var site_docs_ability_kit_ability_terminology_ability_terminology_md_889_namespaceObject = JSON.parse('{"id":"ability-kit/ability-terminology/ability-terminology","title":"Ability Kit术语","description":"A","source":"@site/docs/ability-kit/ability-terminology/ability-terminology.md","sourceDirName":"ability-kit/ability-terminology","slug":"/ability-kit/ability-terminology/","permalink":"/harmonyos-docs-site/ability-kit/ability-terminology/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"Ability Kit术语","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ability-terminology","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"获取Native子进程退出信息","permalink":"/harmonyos-docs-site/ability-kit/native-childprocess-development/capi-nativechildprocess-exit-info/"},"next":{"title":"Accessibility Kit 简介","permalink":"/harmonyos-docs-site/accessibility-kit/accessibilitykit-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ability-kit/ability-terminology/ability-terminology.md


const frontMatter = {
	title: 'Ability Kit术语',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ability-terminology',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'Ability Kit术语';

const assets = {

};



const toc = [{
  "value": "A",
  "id": "a",
  "level": 2
}, {
  "value": "AbilityStage",
  "id": "abilitystage",
  "level": 3
}, {
  "value": "ArkTS子进程",
  "id": "arkts子进程",
  "level": 3
}, {
  "value": "App Linking",
  "id": "app-linking",
  "level": 3
}, {
  "value": "C",
  "id": "c",
  "level": 2
}, {
  "value": "CandidateMasterProcess（备选主控进程）",
  "id": "candidatemasterprocess备选主控进程",
  "level": 3
}, {
  "value": "Context",
  "id": "context",
  "level": 3
}, {
  "value": "D",
  "id": "d",
  "level": 2
}, {
  "value": "Deep Linking",
  "id": "deep-linking",
  "level": 3
}, {
  "value": "多实例模式",
  "id": "多实例模式",
  "level": 3
}, {
  "value": "F",
  "id": "f",
  "level": 2
}, {
  "value": "FA模型",
  "id": "fa模型",
  "level": 3
}, {
  "value": "I",
  "id": "i",
  "level": 2
}, {
  "value": "InsightIntentProvider (意图提供方管理能力)",
  "id": "insightintentprovider-意图提供方管理能力",
  "level": 3
}, {
  "value": "K",
  "id": "k",
  "level": 2
}, {
  "value": "跨端迁移",
  "id": "跨端迁移",
  "level": 3
}, {
  "value": "M",
  "id": "m",
  "level": 2
}, {
  "value": "MasterProcess（主控进程）",
  "id": "masterprocess主控进程",
  "level": 3
}, {
  "value": "N",
  "id": "n",
  "level": 2
}, {
  "value": "Native子进程",
  "id": "native子进程",
  "level": 3
}, {
  "value": "P",
  "id": "p",
  "level": 2
}, {
  "value": "PageAbility组件",
  "id": "pageability组件",
  "level": 3
}, {
  "value": "S",
  "id": "s",
  "level": 2
}, {
  "value": "Stage模型",
  "id": "stage模型",
  "level": 3
}, {
  "value": "U",
  "id": "u",
  "level": 2
}, {
  "value": "UIAbility",
  "id": "uiability",
  "level": 3
}, {
  "value": "UIAbility生命周期",
  "id": "uiability生命周期",
  "level": 3
}, {
  "value": "UIAbility冷启动",
  "id": "uiability冷启动",
  "level": 3
}, {
  "value": "UIAbility热启动",
  "id": "uiability热启动",
  "level": 3
}, {
  "value": "X",
  "id": "x",
  "level": 2
}, {
  "value": "显式Want启动",
  "id": "显式want启动",
  "level": 3
}, {
  "value": "系统级so",
  "id": "系统级so",
  "level": 3
}, {
  "value": "Y",
  "id": "y",
  "level": 2
}, {
  "value": "隐式Want启动",
  "id": "隐式want启动",
  "level": 3
}, {
  "value": "应用级so",
  "id": "应用级so",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    p: "p",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "ability-kit术语",
        children: "Ability Kit术语"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "a",
      children: "A"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "abilitystage",
      children: "AbilityStage"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-abilitystage/js-apis-app-ability-abilitystage",
        children: "AbilityStage"
      }), "是一个", (0,jsx_runtime.jsx)(_components.a, {
        href: "/development-fundamentals/application-package-fundamentals/application-package-overview#%E5%BA%94%E7%94%A8%E7%9A%84%E5%A4%9Amodule%E8%AE%BE%E8%AE%A1%E6%9C%BA%E5%88%B6",
        children: "Module"
      }), "级别的组件管理器。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "arkts子进程",
      children: "ArkTS子进程"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS子进程是指启动后系统默认创建ArkTS运行时环境的应用子进程。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "app-linking",
      children: "App Linking"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "App Linking是一种实现应用间跳转的技术，通过系统传入的uri信息（HTTPS链接）将用户引导至目标应用中的特定内容。无论目标应用是否已安装，用户都能够访问链接对应的内容。这种跳转方式相比Deep Linking增加了域名校验机制，可以避免应用被仿冒，更加安全。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "c",
      children: "C"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "candidatemasterprocess备选主控进程",
      children: "CandidateMasterProcess（备选主控进程）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当应用存在多个进程时，系统会在应用启动时自动指定主控进程。如果开发者希望当前进程被选为主控进程，可以将其放入备选主控进程列表中，该列表中的进程即为备选主控进程。当现在的主控进程销毁后，系统会将位于链表首节点的备选主控进程设置为主控进程。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "context",
      children: "Context"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Context是Stage模型中的上下文基类，它封装了应用程序运行所需的基本环境和能力。作为框架与应用组件之间的核心桥梁，Context提供了访问所属应用的资源、获取应用信息、管理应用生命周期等通用接口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在Stage模型中，Context作为基类，定义了所有上下文共有的基本能力。其具体子类（如ApplicationContext、AbilityStageContext、UIAbilityContext、ExtensionContext等）则在此基础之上，扩展了特定组件层级或运行场景的专属功能。例如，ApplicationContext作为应用上下文，提供了应用生命周期监听、进程管理、应用环境设置等应用级别的管控能力；而AbilityStageContext则是AbilityStage的上下文环境，提供获取AbilityStage对应的ModuleInfo对象、环境变化对象。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "d",
      children: "D"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "deep-linking",
      children: "Deep Linking"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Deep Linking是一种通过链接拉起指定应用的技术，其特点是支持开发者定义任意形式的scheme。然而，由于缺乏对域名的所有权验证机制，存在被其他应用仿冒的风险。这与采用标准HTTPS链接并强制进行域名验证以保障唯一性和安全的App Linking形成显著区别。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "多实例模式",
      children: "多实例模式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "多实例模式是一种允许同一个应用组件（比如UIAbility）同时存在多个独立运行实例的启动模式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "f",
      children: "F"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fa模型",
      children: "FA模型"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FA模型是早期的应用模型，为应用程序提供必备的组件与运行机制。在该模型中每个应用组件独享一个ArkTS引擎实例，适用于简单应用的开发。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "i",
      children: "I"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "insightintentprovider-意图提供方管理能力",
      children: "InsightIntentProvider (意图提供方管理能力)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-insightintentprovider/js-apis-app-ability-insightintentprovider",
        children: "意图提供方管理能力"
      }), "指通过声明标准意图或自定义意图，将业务功能接入意图框架的应用主体。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "k",
      children: "K"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "跨端迁移",
      children: "跨端迁移"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "跨端迁移指在A端运行的UIAbility迁移到B端上，完成迁移后，B端UIAbility继续任务，而A端UIAbility可按需决定是否退出。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "m",
      children: "M"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "masterprocess主控进程",
      children: "MasterProcess（主控进程）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当应用存在多个进程时，如果开发者需要将不同的Ability实例动态分配给指定进程，系统会在应用启动时自动指定一个进程来负责总体的协调分配工作，该进程即为主控进程。默认情况下，系统指定应用启动的第一个进程为主控进程。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者可以设置", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-abilitystage/js-apis-app-ability-abilitystage#onnewprocessrequest11",
        children: "onNewProcessRequest"
      }), "的返回值，让主控进程通过接收该接口的回调信息，决定新的Ability实例运行在哪个进程中。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "n",
      children: "N"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "native子进程",
      children: "Native子进程"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Native子进程是指启动后只有C/C++代码运行环境的应用子进程，针对这种类型的子进程系统默认不会创建ArkTS运行时环境。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "p",
      children: "P"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pageability组件",
      children: "PageAbility组件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "PageAbility是FA模型下的包含UI、提供展示UI能力的应用组件，主要用于与用户交互。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "s",
      children: "S"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "stage模型",
      children: "Stage模型"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Stage模型是当前系统主推的应用模型，为应用程序提供必备的组件与运行机制。该模型提供了AbilityStage组件管理器和WindowStage窗口管理器，分别作为应用组件与窗口的“舞台”，故得名\"Stage模型\"。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Stage模型支持多个应用组件共享同一个ArkTS引擎实例，以及应用组件间的状态共享与对象调用，可以降低内存开销、提升开发效率，适用于复杂应用的开发。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "u",
      children: "U"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "uiability",
      children: "UIAbility"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "UIAbility是包含UI界面的应用组件，是系统调度的基本单元，为应用提供绘制界面的窗口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "uiability生命周期",
      children: "UIAbility生命周期"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "UIAbility生命周期是指一个UIAbility组件从创建到销毁的完整过程，在这个过程中系统会在特定时间点调用相应的回调函数。例如，应用首次创建UIAbility实例时，系统会调用onCreate()回调。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "uiability冷启动",
      children: "UIAbility冷启动"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当UIAbility实例处于完全关闭状态并被启动时，将发生冷启动。冷启动意味着系统需要完整地加载并初始化该UIAbility的所有代码和资源。随后，其生命周期回调将按顺序触发：依次是onCreate、onWindowStageCreate和onForeground。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "uiability热启动",
      children: "UIAbility热启动"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "UIAbility热启动发生在实例已启动并切换至后台后再次被启动时。由于实例无需完全重建，系统可快速恢复其原有状态，其生命周期会跳过初始创建阶段，直接触发onNewWant回调，随后UIAbility进入前台状态并触发onForeground回调。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "x",
      children: "X"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "显式want启动",
      children: "显式Want启动"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["显式Want启动是指在启动目标应用组件时，调用方传入的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/both-models/js-apis-app-ability-want/js-apis-app-ability-want",
        children: "want"
      }), "参数中指定了abilityName和bundleName，称为显式Want启动。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当有明确处理请求的对象时，显式Want启动是一种简单有效的启动目标应用组件的方式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "系统级so",
      children: "系统级so"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "系统提供的so，属于操作系统的一部分，随系统镜像发布。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "y",
      children: "Y"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "隐式want启动",
      children: "隐式Want启动"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["隐式Want启动是指在启动目标应用组件时，调用方传入的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/both-models/js-apis-app-ability-want/js-apis-app-ability-want",
        children: "want"
      }), "参数中未指定abilityName，称为隐式Want启动。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当目标处理对象不明确时，可以使用隐式Want启动。它允许当前应用直接调用其他应用提供的某项能力，而无需关心该能力由哪个具体应用提供。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "应用级so",
      children: "应用级so"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用开发者通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/coding/using-napi-interaction-with-cpp/use-napi-process",
        children: "Node-API"
      }), "方式自行开发的so，属于应用的一部分，随应用发布。"]
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