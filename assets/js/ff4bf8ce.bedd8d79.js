"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["520284"], {
392492(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ability_kit_stage_model_development_stage_model_development_overview_stage_model_development_overview_md_ff4_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ability-kit-stage-model-development-stage-model-development-overview-stage-model-development-overview-md-ff4.json
var site_docs_ability_kit_stage_model_development_stage_model_development_overview_stage_model_development_overview_md_ff4_namespaceObject = JSON.parse('{"id":"ability-kit/stage-model-development/stage-model-development-overview/stage-model-development-overview","title":"Stage模型开发概述","description":"基本概念","source":"@site/docs/ability-kit/stage-model-development/stage-model-development-overview/stage-model-development-overview.md","sourceDirName":"ability-kit/stage-model-development/stage-model-development-overview","slug":"/ability-kit/stage-model-development/stage-model-development-overview/","permalink":"/harmonyos-docs-site/ability-kit/stage-model-development/stage-model-development-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Stage模型开发概述","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/stage-model-development-overview","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"应用模型","permalink":"/harmonyos-docs-site/ability-kit/application-models/"},"next":{"title":"应用/组件级配置","permalink":"/harmonyos-docs-site/ability-kit/stage-model-development/stage-model-application-components/application-component-configuration-stage/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ability-kit/stage-model-development/stage-model-development-overview/stage-model-development-overview.md


const frontMatter = {
	title: 'Stage模型开发概述',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/stage-model-development-overview',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'Stage模型开发概述';

const assets = {

};



const toc = [{
  "value": "基本概念",
  "id": "基本概念",
  "level": 2
}, {
  "value": "构成要素",
  "id": "构成要素",
  "level": 2
}, {
  "value": "开发流程",
  "id": "开发流程",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    li: "li",
    p: "p",
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
        id: "stage模型开发概述",
        children: "Stage模型开发概述"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["下图展示了", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ability-kit/ability-terminology#stage%E6%A8%A1%E5%9E%8B",
        children: "Stage模型"
      }), "中的基本概念。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1"
        })
      }), " Stage模型概念图"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(886663)/* ["default"] */.A) + "",
        width: "1385",
        height: "454"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.a, {
            href: "/ability-kit/stage-model-development/stage-model-application-components/abilitystage",
            children: "AbilityStage"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["每个Entry类型或者Feature类型的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/development-fundamentals/application-package-fundamentals/application-package-dev/hap-package",
            children: "HAP"
          }), "在运行期都有一个AbilityStage实例，当", (0,jsx_runtime.jsx)(_components.a, {
            href: "/development-fundamentals/application-package-fundamentals/application-package-dev/hap-package",
            children: "HAP"
          }), "中的代码首次被加载到进程中的时候，系统会先创建AbilityStage实例。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "/ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-overview",
            children: "UIAbility组件"
          }), "和", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/extensionability-overview",
            children: "ExtensionAbility组件"
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Stage模型提供UIAbility和ExtensionAbility两种类型的组件，这两种组件都有具体的类承载，支持面向对象的开发方式。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "UIAbility组件是一种包含UI的应用组件，主要用于和用户交互。例如，图库类应用可以在UIAbility组件中展示图片瀑布流，在用户选择某个图片后，在新的页面中展示图片的详细内容。同时用户可以通过返回键返回到瀑布流页面。UIAbility组件的生命周期只包含创建、销毁、前台、后台等状态，与显示相关的状态通过WindowStage的事件暴露给开发者。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "ExtensionAbility组件是一种面向特定场景的应用组件。开发者并不直接从ExtensionAbility组件派生，而是需要使用ExtensionAbility组件的派生类。目前ExtensionAbility组件有用于卡片场景的FormExtensionAbility，用于输入法场景的InputMethodExtensionAbility，用于延时任务场景的WorkSchedulerExtensionAbility等多种派生类，这些派生类都是基于特定场景提供的。例如，用户在桌面创建应用的卡片，需要开发者从FormExtensionAbility派生，实现其中的回调函数，并在配置文件中配置该能力。ExtensionAbility组件的派生类实例由用户触发创建，并由系统管理生命周期。在Stage模型上，三方应用开发者不能开发自定义服务，而需要根据自身的业务场景通过ExtensionAbility组件的派生类来实现。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["一个HAP包中可以包含一个或多个UIAbility/ExtensionAbility组件，这些组件在运行时共用同一个AbilityStage实例。当", (0,jsx_runtime.jsx)(_components.a, {
            href: "/development-fundamentals/application-package-fundamentals/application-package-dev/hap-package",
            children: "HAP"
          }), "中的代码（无论是UIAbility组件还是ExtensionAbility组件）首次被加载到进程中的时候，系统会先创建对应的AbilityStage实例。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-windowstage/arkts-apis-window-windowstage",
            children: "WindowStage"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "每个UIAbility实例都会与一个WindowStage类实例绑定，该类起到了应用进程内窗口管理器的作用。它包含一个主窗口。也就是说UIAbility实例通过WindowStage持有了一个主窗口，该主窗口为ArkUI提供了绘制区域，可以加载不同的ArkUI页面。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.a, {
            href: "/ability-kit/stage-model-development/stage-model-application-components/application-context-stage",
            children: "Context"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在Stage模型上，Context及其派生类向开发者提供在运行期可以调用的各种资源和能力。UIAbility组件和各种ExtensionAbility组件的派生类都有各自不同的Context类，他们都继承自基类Context，但是各自又根据所属组件，提供不同的能力。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ArkUI页面"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ArkUI页面是基于ArkUI框架构建的用户界面组件，可以将不同UI组件组合在一起，实现复杂的页面效果。UIAbility组件可以通过ArkUI页面展示其功能，同时也可以通过ArkUI页面与用户进行交互。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Application"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Application是应用在设备上的运行实例，作为一个完整的软件实体与用户交互。在Stage模型中，它由一个或多个HAP作为功能模块构成，这些HAP可以共享一个或多个HSP中的代码与资源。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Bundle"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Bundle是应用在安装部署阶段的静态文件，包含了所有HAP、HSP及相关资源；当其被安装并启动后，便形成了在运行期的动态实例Application。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "构成要素",
      children: "构成要素"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ability-kit/application-models",
        children: "应用模型"
      }), "章节中介绍了应用模型的构成要素，主要包含应用组件、配置文件、进程模型、线程模型和任务管理模型。下面我们以Demo.app这个应用为例，从应用的开发阶段和运行阶段分别展开介绍，帮助开发者更好地理解Stage模型的构成要素。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该Demo应用主要实现了如下功能："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "实现了两个独立的带界面的窗口（UIAbilityA、UIAbilityB），可以与用户交互。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "实现了卡片功能，便于用户将应用的卡片添加到桌面上。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图2"
        })
      }), " Stage模型构成要素"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(143354)/* ["default"] */.A) + "",
        width: "1203",
        height: "598"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "开发阶段"
        })
      }), " ：需要通过Stage模型提供的应用组件（UIAbility组件和ExtensionAbility组件）开发应用功能，并在应用的配置文件（app.json5和module.json5）中注册应用的相关信息。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用组件：本例中使用UIAbility组件开发带界面的与用户交互的模块，使用FormExtensionAbility组件开发卡片模块，实现卡片的添加、删除、更新功能。为了减少不同功能模块间的依赖和耦合，将UIAbility和FormExtensionAbility的实现分别放在不同的HAP包中，同时，将两者共同依赖的一些通用功能放在HSP包中。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "配置文件：开发者可以在app.json5中配置应用的应用名、版本号、应用图标等，在module.json5中配置该HAP包下的组件清单、组件权限等信息。这些配置信息会在应用安装时注册到系统，便于系统和其他模块获取这个应用的详细信息，与应用进行交互。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "运行阶段"
        })
      }), "：当应用安装到设备运行时，系统通过一套应用进程和线程的管理机制，确保功能的有序运行。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["进程模型：在本例中，UIAbility组件默认运行在主进程中，FormExtensionAbility组件运行在独立进程中，UIAbility和FormExtensionAbility组件之间是进程隔离的。更多详情可参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ability-kit/stage-model-development/process-model-stage",
          children: "进程模型"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "线程模型：Stage模型提供了worker、taskpool等机制支撑应用多线程开发场景。应用如果有复杂的耗时逻辑需要处理，可以通过创建worker的方式开启worker线程，交由worker线程处理。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发流程",
      children: "开发流程"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "基于Stage模型开发应用时，在应用模型部分，涉及如下开发过程。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表1"
        })
      }), " Stage模型开发流程"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "任务"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "简介"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "相关指导"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "应用组件开发"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "本章节介绍了如何使用Stage模型的UIAbility组件和ExtensionAbility组件开发应用。"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["- ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ability-kit/stage-model-development/stage-model-application-components/application-component-configuration-stage",
              children: "应用/组件级配置"
            }), "  - ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-overview",
              children: "UIAbility组件"
            }), "  - ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/extensionability-overview",
              children: "ExtensionAbility组件"
            }), "  - ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ability-kit/stage-model-development/stage-model-application-components/abilitystage",
              children: "AbilityStage组件管理器"
            }), "  - ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ability-kit/stage-model-development/stage-model-application-components/application-context-stage",
              children: "应用上下文Context"
            }), "  - ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ability-kit/stage-model-development/stage-model-application-components/component-startup-rules",
              children: "组件启动规则"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "了解进程模型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "本章节介绍了Stage模型的进程模型，包括基本进程类型、其他进程类型。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ability-kit/stage-model-development/process-model-stage",
              children: "进程模型概述"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "了解线程模型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "本章节介绍了Stage模型的线程模型，包括线程类型以及使用EventHub进行线程内通信的方法。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ability-kit/stage-model-development/thread-model-stage",
              children: "线程模型概述"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "应用配置文件"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "本章节介绍Stage模型中应用配置文件的开发要求。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/development-fundamentals/application-configuration-file-stage/application-configuration-file-overview-stage",
              children: "Stage模型应用配置文件"
            })
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
143354(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437533-fc86426d7d8c269aae9cad68e991fc49.png");

},
886663(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552797838-618333b72b1c6cb4f3206bea05b579f3.png");

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