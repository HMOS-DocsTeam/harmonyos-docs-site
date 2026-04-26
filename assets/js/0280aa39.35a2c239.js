"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["780884"], {
880831(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_quick_start_start_overview_start_overview_md_028_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-quick-start-start-overview-start-overview-md-028.json
var site_docs_quick_start_start_overview_start_overview_md_028_namespaceObject = JSON.parse('{"id":"quick-start/start-overview/start-overview","title":"开发准备","description":"本文档适用于HarmonyOS应用开发的初学者。通过构建一个简单的具有页面跳转/返回功能的应用（如下图所示），快速了解工程目录的主要文件，熟悉HarmonyOS应用开发流程。","source":"@site/docs/quick-start/start-overview/start-overview.md","sourceDirName":"quick-start/start-overview","slug":"/quick-start/start-overview/","permalink":"/harmonyos-docs-site/quick-start/start-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"开发准备","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/start-overview","kit":"getting-started","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"应用开发导读","permalink":"/harmonyos-docs-site/application-dev-guide/"},"next":{"title":"构建第一个HarmonyOS应用（ArkTS）","permalink":"/harmonyos-docs-site/quick-start/start-with-ets-stage/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/quick-start/start-overview/start-overview.md


const frontMatter = {
	title: '开发准备',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/start-overview',
	kit: 'getting-started',
	last_updated: '2026-04-22'
};
const contentTitle = '开发准备';

const assets = {

};



const toc = [{
  "value": "基本概念",
  "id": "基本概念",
  "level": 2
}, {
  "value": "UI框架",
  "id": "ui框架",
  "level": 3
}, {
  "value": "应用模型",
  "id": "应用模型",
  "level": 3
}, {
  "value": "工具准备",
  "id": "工具准备",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    h3: "h3",
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
        id: "开发准备",
        children: "开发准备"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本文档适用于HarmonyOS应用开发的初学者。通过构建一个简单的具有页面跳转/返回功能的应用（如下图所示），快速了解工程目录的主要文件，熟悉HarmonyOS应用开发流程。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(63060)/* ["default"] */.A) + "",
        width: "518",
        height: "481"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在开始之前，您需要了解有关HarmonyOS应用的一些基本概念：UI框架的简单说明、应用模型的基本概念。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ui框架",
      children: "UI框架"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HarmonyOS提供了一套UI开发框架，即方舟开发框架（ArkUI框架）。方舟开发框架可为开发者提供应用UI开发所必需的能力，比如多种组件、布局计算、动画能力、UI交互、绘制等。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "方舟开发框架针对不同目的和技术背景的开发者提供了两种开发范式，分别是基于ArkTS的声明式开发范式（简称“声明式开发范式”）和兼容JS的类Web开发范式（简称“类Web开发范式”）。以下是两种开发范式的简单对比。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "开发范式名称"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "语言生态"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "UI更新方式"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "适用场景"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "适用人群"
              })
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "声明式开发范式"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArkTS语言"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数据驱动更新"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "复杂度较大、团队合作度较高的程序"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "移动系统应用开发人员、系统应用开发人员"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "类Web开发范式"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JS语言"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数据驱动更新"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "界面较为简单的程序应用和卡片"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Web前端开发人员"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["更多UI框架的开发内容及指导，详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkui-overview",
        children: "UI开发"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "应用模型",
      children: "应用模型"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用模型是HarmonyOS为开发者提供的应用程序所需能力的抽象提炼，它提供了应用程序必备的组件和运行机制。有了应用模型，开发者可以基于一套统一的模型进行应用开发，使应用开发更简单、高效。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "随着系统的演进发展，HarmonyOS先后提供了两种应用模型："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "FA（Feature Ability）模型："
          })
        }), " HarmonyOS API 7开始支持的模型，已经不再主推。FA模型开发可见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ability-kit/fa-model-development/fa-model-development-overview",
          children: "FA模型开发概述"
        }), "。", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "快速入门章节不再详细说明此模型"
          })
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Stage模型："
          })
        }), " HarmonyOS API 9开始新增的模型，是目前主推且会长期演进的模型。在该模型中，由于提供了AbilityStage、WindowStage等类作为应用组件和Window窗口的“舞台”，因此称这种应用模型为Stage模型。Stage模型开发可见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ability-kit/stage-model-development/stage-model-development-overview",
          children: "Stage模型开发概述"
        }), "。", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "快速入门以此为例提供开发指导。"
          })
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["FA模型和Stage模型的整体架构和设计思想等更多区别，请见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ability-kit/application-models",
        children: "应用模型"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "快速入门提供了一个含有两个页面的开发实例，并基于Stage模型构建第一个ArkTS应用，以便开发者理解以上基本概念及应用开发流程。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "工具准备",
      children: "工具准备"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["请下载并安装", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/download/",
        children: "最新版DevEco Studio"
      }), "，具体可参照", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-software-install",
        children: "下载与安装DevEco Studio"
      }), "，更多工具使用指导可见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-tools-overview",
        children: "工具概述"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["完成上述操作及基本概念的理解后，可参照", (0,jsx_runtime.jsx)(_components.a, {
        href: "/quick-start/start-with-ets-stage",
        children: "构建第一个HarmonyOS应用（ArkTS）"
      }), "进行下一步体验和学习。"]
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
63060(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957468-43cb96834dac71b8d620ffb6a6f1bfd4.png");

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