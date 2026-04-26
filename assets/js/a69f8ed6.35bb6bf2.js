"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["97061"], {
71601(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ability_kit_application_models_application_models_md_a69_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ability-kit-application-models-application-models-md-a69.json
var site_docs_ability_kit_application_models_application_models_md_a69_namespaceObject = JSON.parse('{"id":"ability-kit/application-models/application-models","title":"应用模型","description":"应用模型的构成要素","source":"@site/docs/ability-kit/application-models/application-models.md","sourceDirName":"ability-kit/application-models","slug":"/ability-kit/application-models/","permalink":"/harmonyos-docs-site/ability-kit/application-models/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"应用模型","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/application-models","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Ability Kit简介","permalink":"/harmonyos-docs-site/ability-kit/abilitykit-overview/"},"next":{"title":"Stage模型开发概述","permalink":"/harmonyos-docs-site/ability-kit/stage-model-development/stage-model-development-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ability-kit/application-models/application-models.md


const frontMatter = {
	title: '应用模型',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/application-models',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '应用模型';

const assets = {

};



const toc = [{
  "value": "应用模型的构成要素",
  "id": "应用模型的构成要素",
  "level": 2
}, {
  "value": "应用模型概况",
  "id": "应用模型概况",
  "level": 2
}, {
  "value": "通过对比认识FA模型与Stage模型",
  "id": "通过对比认识fa模型与stage模型",
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
        id: "应用模型",
        children: "应用模型"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "应用模型的构成要素",
      children: "应用模型的构成要素"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用模型是系统为开发者提供的应用程序所需能力的抽象提炼，它提供了应用程序必备的组件和运行机制。有了应用模型，开发者可以基于一套统一的模型进行应用开发，使应用开发更简单、高效。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用模型的构成要素包括："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用组件"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用组件是应用的基本组成单位和运行入口。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在用户启动、使用和退出应用的过程中，应用组件会在不同的状态间切换，这些状态称为", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-lifecycle",
            children: "应用组件的生命周期"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用组件提供生命周期回调函数，开发者通过这些回调可以感知应用状态的变化。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在开发应用时，开发者首先需要编写应用组件及其生命周期回调函数，并在应用配置文件中配置相关信息。操作系统在运行时通过配置文件创建应用组件实例，并调度其生命周期回调函数，从而执行开发者的代码。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用进程模型"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用进程模型定义应用进程的创建和销毁方式，以及进程间的通信方式。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用线程模型"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用线程模型定义应用进程内线程的创建和销毁方式、主线程和UI线程的创建方式、线程间的通信方式。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用任务管理模型（仅对系统应用开放）"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用任务管理模型定义任务（Mission）的创建和销毁方式，以及任务与组件间的关系。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "任务是用户使用一个应用组件实例的记录。每次用户启动一个新的应用组件实例，都会生成一个新的任务。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "例如，用户启动一个视频应用，在\"最近任务\"界面可以看到视频应用这个任务。当用户点击这个任务时，系统会把该任务切换到前台。如果这个视频应用中的视频编辑功能也是通过应用组件编写的，在用户启动视频编辑功能时，会创建视频编辑的应用组件实例，在\"最近任务\"界面中将会展示视频应用、视频编辑两个任务。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用配置文件"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用配置文件中包含应用配置信息、应用组件信息、权限信息、开发者自定义信息等，这些信息在编译构建、分发和运行阶段分别提供给编译工具、应用市场和操作系统使用。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "应用模型概况",
      children: "应用模型概况"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "随着系统的演进发展，先后提供了两种应用模型："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ability-kit/ability-terminology#fa%E6%A8%A1%E5%9E%8B",
          children: "FA（Feature Ability）模型"
        }), "：从API 7开始支持的模型，已经不再主推。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ability-kit/ability-terminology#stage%E6%A8%A1%E5%9E%8B",
          children: "Stage模型"
        }), "：从API 9开始新增的模型，是目前主推且会长期演进的模型。在该模型中，由于提供了AbilityStage、WindowStage等类作为应用组件和Window窗口的“舞台”，因此称这种应用模型为Stage模型。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "通过对比认识fa模型与stage模型",
      children: "通过对比认识FA模型与Stage模型"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Stage模型与FA模型最大的区别在于"
        })
      }), "：Stage模型中，多个应用组件共享同一个ArkTS引擎实例；而FA模型中，每个应用组件独享一个ArkTS引擎实例。因此在Stage模型中，应用组件之间可以方便的共享对象和状态，同时减少复杂应用运行对内存的占用。Stage模型作为主推的应用模型，开发者通过它能够更加便利地开发出分布式场景下的复杂应用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可通过如下对比表格了解两种模型的整体概况。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表1"
        })
      }), " FA模型与Stage模型差异概览"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "项目"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "FA模型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Stage模型"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "应用组件"
              })
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["1. 组件分类  - PageAbility组件：包含UI，提供展示UI的能力。详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ability-kit/fa-model-development/fa-model-application-components/pageability/pageability-overview",
              children: "PageAbility组件概述"
            }), "。  - ServiceAbility组件：提供后台服务的能力，无UI。详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ability-kit/fa-model-development/fa-model-application-components/serviceability/serviceability-overview",
              children: "ServiceAbility组件概述"
            }), "。  - DataAbility组件：提供数据分享的能力，无UI。详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ability-kit/fa-model-development/fa-model-application-components/dataability/dataability-overview",
              children: "DataAbility组件概述"
            }), "。  2. 开发方式  通过导出匿名对象、固定入口文件的方式指定应用组件。开发者无法进行派生，不利于扩展能力。"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["1. 组件分类  - UIAbility组件：包含UI，提供展示UI的能力，主要用于和用户交互。详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-overview",
              children: "UIAbility组件概述"
            }), "。  - ExtensionAbility组件：提供特定场景（如卡片、输入法）的扩展能力，满足更多的使用场景。详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/extensionability-overview",
              children: "ExtensionAbility组件概述"
            }), "。  2. 开发方式  采用面向对象的方式，将应用组件以类接口的形式开放给开发者，可以进行派生，利于扩展能力。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "进程模型"
              })
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["有两类进程：  1. 主进程  2. 渲染进程  详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ability-kit/fa-model-development/process-model-fa",
              children: "进程模型"
            }), "。"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["包含主进程、ExtensionAbility进程、渲染进程等基本进程类型，以及其他进程类型。  详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ability-kit/stage-model-development/process-model-stage",
              children: "进程模型"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "线程模型"
              })
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["1. ArkTS引擎实例的创建  一个进程可以运行多个应用组件实例，每个应用组件实例分别运行在单独的ArkTS引擎实例中。  2. 线程模型  每个ArkTS引擎实例都在一个单独线程（非主线程）上创建，主线程没有ArkTS引擎实例。  3. 进程内对象共享：不支持。  详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ability-kit/fa-model-development/thread-model-fa",
              children: "线程模型"
            }), "。"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["1. ArkTS引擎实例的创建  一个进程可以运行多个应用组件实例，所有应用组件实例共享一个ArkTS引擎实例。  2. 线程模型  ArkTS引擎实例在主线程上创建。  3. 进程内对象共享：支持。  详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ability-kit/stage-model-development/thread-model-stage",
              children: "线程模型"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "应用配置文件"
              })
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["使用config.json描述应用信息、HAP信息和应用组件信息。  详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/development-fundamentals/application-configuration-file-fa/application-configuration-file-overview-fa",
              children: "应用配置文件概述（FA模型）"
            }), "。"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["使用app.json5描述应用信息，module.json5描述HAP信息、应用组件信息。  详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/development-fundamentals/application-configuration-file-stage/application-configuration-file-overview-stage",
              children: "应用配置文件概述（Stage模型）"
            }), "。"]
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