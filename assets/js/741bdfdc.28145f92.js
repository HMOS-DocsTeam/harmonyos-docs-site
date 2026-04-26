"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["549503"], {
561084(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ability_kit_abilitykit_overview_abilitykit_overview_md_741_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ability-kit-abilitykit-overview-abilitykit-overview-md-741.json
var site_docs_ability_kit_abilitykit_overview_abilitykit_overview_md_741_namespaceObject = JSON.parse('{"id":"ability-kit/abilitykit-overview/abilitykit-overview","title":"Ability Kit简介","description":"Ability Kit（程序框架服务）提供了应用程序开发和运行的应用模型。开发者可以基于应用模型，实现不同类型的应用组件，更加简单高效地完成应用生命周期管理、组件间交互、进程线程管理等业务逻辑，无需关注底层实现细节。","source":"@site/docs/ability-kit/abilitykit-overview/abilitykit-overview.md","sourceDirName":"ability-kit/abilitykit-overview","slug":"/ability-kit/abilitykit-overview/","permalink":"/harmonyos-docs-site/ability-kit/abilitykit-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Ability Kit简介","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/abilitykit-overview","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"应用开发准备","permalink":"/harmonyos-docs-site/application-dev-overview/"},"next":{"title":"应用模型","permalink":"/harmonyos-docs-site/ability-kit/application-models/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ability-kit/abilitykit-overview/abilitykit-overview.md


const frontMatter = {
	title: 'Ability Kit简介',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/abilitykit-overview',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'Ability Kit简介';

const assets = {

};



const toc = [{
  "value": "使用场景",
  "id": "使用场景",
  "level": 2
}, {
  "value": "能力范围",
  "id": "能力范围",
  "level": 2
}, {
  "value": "亮点/特征",
  "id": "亮点特征",
  "level": 2
}, {
  "value": "与相关Kit的关系",
  "id": "与相关kit的关系",
  "level": 2
}, {
  "value": "模拟器支持情况",
  "id": "模拟器支持情况",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    header: "header",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "ability-kit简介",
        children: "Ability Kit简介"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ability Kit（程序框架服务）提供了应用程序开发和运行的应用模型。开发者可以基于应用模型，实现不同类型的应用组件，更加简单高效地完成应用生命周期管理、组件间交互、进程线程管理等业务逻辑，无需关注底层实现细节。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用场景",
      children: "使用场景"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["应用的多Module开发：应用可通过不同类型的Module（", (0,jsx_runtime.jsx)(_components.a, {
          href: "/development-fundamentals/application-package-fundamentals/application-package-dev/hap-package",
          children: "HAP"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/development-fundamentals/application-package-fundamentals/application-package-dev/har-package",
          children: "HAR"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/development-fundamentals/application-package-fundamentals/application-package-dev/in-app-hsp",
          children: "HSP"
        }), "）来实现应用的功能开发。其中，HAP用于实现应用的功能和特性，HAR与HSP用于实现代码和资源的共享。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["应用内的交互：应用内的不同组件之间可以相互跳转。比如，在移动办公应用中，通过入口UIAbility组件启动视频会议的UIAbility组件。详见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-intra-device-interaction",
          children: "启动应用内的UIAbility组件"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["应用间的交互：当前应用可以启动其他应用，来完成某个任务或操作。比如，在购物类应用中购买商品时，可以跳转到支付应用完成支付。详见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ability-kit/stage-model-development/inter-app-redirection/link-between-apps-overview",
          children: "应用间跳转"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["应用的跨设备流转：通过应用的跨端迁移和多端协同，获得更好的使用体验。比如，在平板上播放的视频，迁移到智慧屏继续播放。详见", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-hopping",
          children: "自由流转"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "能力范围",
      children: "能力范围"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "提供应用进程创建和销毁、应用生命周期调度能力。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "提供应用组件运行入口、应用组件生命周期调度、组件间交互等能力。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "提供应用上下文环境、系统环境变化监听、组件生命周期监听等能力。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["提供启动框架能力，详见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ability-kit/stage-model-development/stage-model-application-components/app-startup",
          children: "启动框架"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["提供意图框架能力，详见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ability-kit/stage-model-development/insight-intent/insight-intent-overview",
          children: "意图框架概述"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "提供应用流转能力。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["提供多包机制、共享包、应用信息配置等能力，详见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/development-fundamentals/application-package-fundamentals/application-package-overview",
          children: "应用程序包概述"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["提供应用快捷方式能力，详见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/development-fundamentals/application-typical-scenarios/typical-scenario-configuration",
          children: "快捷方式"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["提供程序访问控制能力，详见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-security/access-control/access-token-overview",
          children: "访问控制概述"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["提供安全密码自动填充能力，详见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-security/passwordvault/passwordvault-overview",
          children: "密码自动填充服务概述"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "亮点特征",
      children: "亮点/特征"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "UI与业务逻辑分离"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "从架构设计层面，规范开发者编写业务逻辑和UI交互分离的开发方式。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "从业务逻辑层到UI：开发者在Ability中完成核心业务逻辑，将数据通过绑定机制传递至UI框架。ArkUI基于声明式语法自动渲染视图，并在状态变更时触发UI更新。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "从UI到业务逻辑层：通过捕获用户在UI交互中的输入后，通过事件回调或状态绑定机制，将用户行为产生的数据反向同步至Ability框架。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "支持应用组件级的跨端迁移和多端协同"
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "/ability-kit/ability-terminology#stage%E6%A8%A1%E5%9E%8B",
            children: "Stage模型"
          }), "实现了应用组件与UI解耦。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "在跨端迁移场景下，系统在多设备的应用组件之间迁移数据/状态后，UI便可利用ArkUI的声明式特点，通过应用组件中保存的数据/状态恢复用户界面，便捷实现跨端迁移。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "在多端协同场景下，应用组件具备组件间通信的RPC调用能力，天然支持跨设备应用组件的交互。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "支持多设备和多窗口形态"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用组件管理和窗口管理在架构层面解耦。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "便于系统对应用组件进行裁剪（无屏设备可裁剪窗口）。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "便于系统扩展窗口形态。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "在多设备（如桌面设备和移动设备）上，应用组件可使用同一套生命周期。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "平衡应用能力和系统管控成本"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Stage模型重新定义应用能力的边界，平衡应用能力和系统管控成本。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "提供特定场景（如服务卡片、输入法）的应用组件，以便满足更多的使用场景。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "规范化后台进程管理：为保障用户体验，Stage模型对后台应用进程进行了有序治理，应用程序不能随意驻留在后台，同时应用后台行为受到严格管理，防止恶意应用行为。"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "与相关kit的关系",
      children: "与相关Kit的关系"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkUI：在Ability Kit的UIAbility组件中，可以使用ArkUI提供的组件、事件、动效、状态管理等能力。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS：ArkTS提供了语言运行时相关能力。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "模拟器支持情况",
      children: "模拟器支持情况"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本Kit支持模拟器开发，但与真机存在部分能力差异，具体如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "不支持拉起垂类应用面板。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "不支持以免安装方式拉起元服务。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "不支持使用App Linking实现应用间跳转。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "不支持使用Deep Linking拉起应用选择框。由于模拟器无应用选择框，当使用Deep Linking匹配到多个应用时，无法弹出应用选择框。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["模拟器上支持安装未经签名的应用，同时针对使用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-security/access-control/app-permission-mgmt/app-permissions/restricted-permissions",
          children: "受限开放的权限"
        }), "，将自动放行，不会进行权限授权校验。而真机上会对应用签名与权限授权状态进行校验。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["不支持安装签名Profile类型为", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/app/agc-help-release-profile-0000002248341090",
          children: "发布"
        }), "的应用。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["在基于NDK开发的应用中，如果应用依赖的动态链接库（.so文件）与模拟器的CPU架构不兼容，模拟器将不支持该应用安装，详情请参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/hardware-compatibility/ohos-abi",
          children: "HarmonyOS ABI"
        }), "。"]
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