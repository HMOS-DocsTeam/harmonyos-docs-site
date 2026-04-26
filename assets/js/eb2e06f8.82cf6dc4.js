"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["43106"], {
435223(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkui_overview_arkui_overview_md_eb2_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkui-overview-arkui-overview-md-eb2.json
var site_docs_arkui_arkui_overview_arkui_overview_md_eb2_namespaceObject = JSON.parse('{"id":"arkui/arkui-overview/arkui-overview","title":"ArkUI简介","description":"ArkUI（方舟UI框架）为应用的UI开发提供了完整的基础设施，包括简洁的UI语法、丰富的UI功能（组件、布局、动画以及交互事件），以及实时界面预览工具等，可以支持开发者进行可视化界面开发。","source":"@site/docs/arkui/arkui-overview/arkui-overview.md","sourceDirName":"arkui/arkui-overview","slug":"/arkui/arkui-overview/","permalink":"/harmonyos-docs-site/arkui/arkui-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"ArkUI简介","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkui-overview","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"在build-profile.json5中配置arkOptions","permalink":"/harmonyos-docs-site/arkts/arkts-compilation-tool-chain/arkoptions-guide/"},"next":{"title":"UI开发（ArkTS声明式开发范式）概述","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-ui-development-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkui-overview/arkui-overview.md


const frontMatter = {
	title: 'ArkUI简介',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkui-overview',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'ArkUI简介';

const assets = {

};



const toc = [{
  "value": "基本概念",
  "id": "基本概念",
  "level": 2
}, {
  "value": "两种开发范式",
  "id": "两种开发范式",
  "level": 2
}, {
  "value": "不同应用类型支持的开发范式",
  "id": "不同应用类型支持的开发范式",
  "level": 2
}, {
  "value": "分层API架构与选型建议",
  "id": "分层api架构与选型建议",
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
        id: "arkui简介",
        children: "ArkUI简介"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkUI（方舟UI框架）为应用的UI开发提供了完整的基础设施，包括简洁的UI语法、丰富的UI功能（组件、布局、动画以及交互事件），以及实时界面预览工具等，可以支持开发者进行可视化界面开发。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "UI："
          })
        }), " 即用户界面。开发者可以将应用的用户界面设计为多个功能页面", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-basic-components-navdestination/ts-basic-components-navdestination",
          children: "NavDestination"
        }), "，页面通过栈结构管理，并通过导航容器", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-basic-components-navigation/ts-basic-components-navigation",
          children: "Navigation"
        }), "完成页面间的调度管理如跳转、回退等操作，以实现应用内的功能解耦。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "组件："
          })
        }), " UI构建与显示的最小单位，如列表、网格、按钮、单选框、进度条、文本等。开发者通过多种组件的组合，构建出满足自身应用诉求的完整界面。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "两种开发范式",
      children: "两种开发范式"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["针对不同的应用场景及技术背景，方舟UI框架提供了两种开发范式，分别是", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-ui-development-overview",
        children: "基于ArkTS的声明式开发范式"
      }), "（简称“声明式开发范式”）和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/ui-js-dev/ui-js-overview",
        children: "兼容JS的类Web开发范式"
      }), "（简称“类Web开发范式”）。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "声明式开发范式"
          })
        }), "：采用基于TypeScript声明式UI语法扩展而来的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/learning-arkts/arkts-get-started",
          children: "ArkTS语言"
        }), "，从组件、动画和状态管理三个维度提供UI绘制能力。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "类Web开发范式"
          })
        }), "：采用经典的HML、CSS、JavaScript三段式开发方式，即使用HML标签文件搭建布局、使用CSS文件描述样式、使用JavaScript文件处理逻辑。该范式更符合Web前端开发者的使用习惯，便于快速将已有的Web应用改造成方舟UI框架应用。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在开发一款新应用时，推荐采用声明式开发范式来构建UI，主要基于以下几点考虑："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "开发效率："
            })
          }), " 声明式开发范式更接近自然语义的编程方式，开发者可以直观地描述UI，无需关心如何实现UI绘制和渲染，开发高效简洁。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "应用性能："
            })
          }), " 如下图所示，两种开发范式的UI后端引擎和语言运行时是共用的，但是相比类Web开发范式，声明式开发范式无需JS框架进行页面DOM管理，渲染更新链路更为精简，占用内存更少，应用性能更佳。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "发展趋势"
            })
          }), "：声明式开发范式后续会作为主推的开发范式持续演进，为开发者提供更丰富、更强大的能力。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "图1"
            })
          }), " 方舟UI框架示意图"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(575824)/* ["default"] */.A) + "",
            width: "587",
            height: "451"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "不同应用类型支持的开发范式",
      children: "不同应用类型支持的开发范式"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["根据所选用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ability-kit/application-models",
        children: "应用模型"
      }), "（Stage模型、FA模型）和页面形态（应用或服务的普通页面、卡片）的不同，对应支持的UI开发范式也有所差异，详见下表。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表1"
        })
      }), " 支持的UI开发范式"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "应用模型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "页面形态"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "支持的UI开发范式"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Stage模型（推荐）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用或服务的页面"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "声明式开发范式（推荐）"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Stage模型（推荐）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "卡片"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "声明式开发范式（推荐）  类Web开发范式"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FA模型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用或服务的页面"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "声明式开发范式  类Web开发范式"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FA模型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "卡片"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "类Web开发范式"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "分层api架构与选型建议",
      children: "分层API架构与选型建议"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "声明式开发范式"
            })
          }), "：采用ArkTS语言，通过声明UI结构和状态，自动驱动界面渲染。开发者只需描述“界面应该是什么样”，无需手动管理UI更新。适用于复杂度较高、团队协作的应用开发，具有高开发效率、良好性能和易维护等优势。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "适用场景"
            })
          }), "：复杂应用、需要高效开发和维护的项目、推荐新项目优先选用。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "自定义能力"
            })
          }), "：ArkUI支持多层次自定义能力，包括自定义组合、自定义扩展（", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-modifier/arkts-user-defined-modifier",
            children: "Modifier"
          }), "）、自定义节点（", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode",
            children: "FrameNode"
          }), "、", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-rendernode/js-apis-arkui-rendernode",
            children: "RenderNode"
          }), "、", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-buildernode/js-apis-arkui-buildernode",
            children: "BuilderNode"
          }), "）、自定义渲染等。开发者可根据业务需求选择不同层级的自定义方式，实现灵活的UI定制和扩展。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "适用场景"
            })
          }), "：需要特殊UI表现、底层渲染控制、与系统组件深度集成等场景。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "NDK开发"
            })
          }), "：ArkUI开发框架提供了一系列NDK接口，能够在应用中使用C和C++代码构建UI界面，包括UI组件创建、UI树操作、属性设置和事件监听等。详细使用方式可参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkui/arkts-use-ndk/ndk-build-ui-overview",
            children: "NDK接口概述"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "适用场景"
            })
          }), "：需要精细化创建和挂载UI组件、对性能有高要求的场景、业务已存在C或C++库可使用NDK能力进行对接。"]
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
575824(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477551-37f0e3b3dd95663d3401a89e79902690.png");

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