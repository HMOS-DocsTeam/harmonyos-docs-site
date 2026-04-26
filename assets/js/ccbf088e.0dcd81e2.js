"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["490521"], {
778571(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_use_ndk_ndk_build_ui_overview_ndk_build_ui_overview_md_ccb_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-use-ndk-ndk-build-ui-overview-ndk-build-ui-overview-md-ccb.json
var site_docs_arkui_arkts_use_ndk_ndk_build_ui_overview_ndk_build_ui_overview_md_ccb_namespaceObject = JSON.parse('{"id":"arkui/arkts-use-ndk/ndk-build-ui-overview/ndk-build-ui-overview","title":"基于NDK构建UI概述","description":"ArkUI开发框架提供了一系列NDK接口，能够在应用中使用C和C++代码构建UI界面，这些接口包括UI组件创建、UI树操作、属性设置和事件监听等。面向通用UI界面开发场景，建议使用ArkTS代码和ArkUI声明式开发框架。然而，如果需要实现以下一个或多个目标，那么ArkUI NDK接口就能派上用场：","source":"@site/docs/arkui/arkts-use-ndk/ndk-build-ui-overview/ndk-build-ui-overview.md","sourceDirName":"arkui/arkts-use-ndk/ndk-build-ui-overview","slug":"/arkui/arkts-use-ndk/ndk-build-ui-overview/","permalink":"/harmonyos-docs-site/arkui/arkts-use-ndk/ndk-build-ui-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"基于NDK构建UI概述","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ndk-build-ui-overview","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"同应用进程嵌入式组件 (EmbeddedComponent)","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-ui-system-scenarization-capability/arkts-ui-cross-process/arkts-embedded-components/"},"next":{"title":"接入ArkTS页面","permalink":"/harmonyos-docs-site/arkui/arkts-use-ndk/ndk-access-the-arkts-page/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-use-ndk/ndk-build-ui-overview/ndk-build-ui-overview.md


const frontMatter = {
	title: '基于NDK构建UI概述',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ndk-build-ui-overview',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '基于NDK构建UI概述';

const assets = {

};



const toc = [{
  "value": "整体架构",
  "id": "整体架构",
  "level": 2
}, {
  "value": "开发流程",
  "id": "开发流程",
  "level": 2
}, {
  "value": "注意事项",
  "id": "注意事项",
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
        id: "基于ndk构建ui概述",
        children: "基于NDK构建UI概述"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ArkUI开发框架提供了一系列", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ndk-development-overview",
        children: "NDK接口"
      }), "，能够在应用中使用C和C++代码构建UI界面，这些接口包括UI组件创建、UI树操作、属性设置和事件监听等。面向通用UI界面开发场景，建议使用ArkTS代码和ArkUI声明式开发框架。然而，如果需要实现以下一个或多个目标，那么ArkUI NDK接口就能派上用场："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "需要使用UI组件树控制接口来动态创建和挂载UI组件，方便实现自身UI开发框架的系统桥接。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "重复使用自己或其他开发者的C或C++UI库。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkUI NDK接口能力主要包括："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "布局"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "布局是UI的必要元素，定义了组件在界面中的大小位置。ArkUI NDK接口提供了线性布局、层叠布局、弹性布局、相对布局、滚动容器、轮播容器等。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "组件"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "组件是UI的必要元素，形成了在界面中的样子。包括系统组件和用户自定义布局绘制行为的组件。系统组件包括按钮、单选框、图片、文本等，可以使用ArkUI NDK提供的接口快速创建相应组件并设置属性和事件。针对UI组件的自定义能力包括了布局测算和绘制，用户可以通过这些自定义能力构建差异化UI组件。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "弹窗"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "弹窗是UI界面交互的重要元素。ArkUI NDK接口提供了自定义弹窗相关接口，可以自定义弹窗界面内容并调用相关弹窗接口展示弹窗。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "动画"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "动画是UI的重要元素之一。优秀的动画设计能够极大地提升用户体验，ArkUI NDK提供了显式动画接口用于快速构建组件的属性动画、实现高效精致的动画效果。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "交互事件"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "交互事件是UI和用户交互的必要元素。ArkUI NDK接口提供了多种交互事件，除了触摸事件、鼠标事件、焦点事件等通用事件外，还包括基于通用事件进行进一步识别的手势事件。手势事件有单一手势如点击手势、长按手势、拖动手势、捏合手势、旋转手势、滑动手势，以及通过单一手势事件进行组合的组合手势事件。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "整体架构",
      children: "整体架构"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1"
        })
      }), " NDK接口和ArkTS声明式关系架构图"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(634902)/* ["default"] */.A) + "",
        width: "547",
        height: "548"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图2"
        })
      }), " 通过NDK接口创建的组件挂载示意图"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(788499)/* ["default"] */.A) + "",
        width: "1230",
        height: "643"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ArkTS声明式UI前端和NDK接口都是针对ArkUI底层实现的接口暴露，NDK接口相比于ArkTS声明式UI前端，除了剥离状态管理等声明式UI语法外，还精简了组件能力，将ArkUI组件核心功能通过C接口进行封装暴露。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "NDK创建的UI组件需要通过ArkTS层的占位组件进行挂载显示，挂载后，NDK创建的组件和ArkTS创建的组件位于同一个UI树上，相关布局渲染和事件处理遵循相同规则。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发流程",
      children: "开发流程"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用NDK接口开发UI界面时，主要涉及如下开发过程。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "任务"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "简介"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ndk-development-overview",
              children: "NDK开发导读"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "介绍NDK的适用场景与必备基础知识。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-use-ndk/ndk-access-the-arkts-page",
              children: "接入ArkTS页面"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "介绍了如何将NDK接口开发的UI界面挂载到ArkTS主页面上进行渲染显示。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-use-ndk/arkts-add-event/ndk-listen-to-component-events",
              children: "添加交互事件"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "介绍了如何添加组件的交互事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-use-ndk/ndk-use-animation",
              children: "使用动画"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "介绍了如何在Native侧添加动画。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-use-ndk/arkts-build-layout-ndk/ndk-loading-long-list",
              children: "构建布局"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "介绍了如何在Native侧使用容器组件构建布局。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-use-ndk/ndk-build-pop-up-window",
              children: "构建弹窗"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "介绍了如何使用弹窗接口构建UI界面进行弹窗显示。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-use-ndk/ndk-build-custom-components",
              children: "构建自定义组件"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "介绍了如何使用NDK接口能力构建自定义组件，实现差异化UI组件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-use-ndk/ndk-embed-arkts-components",
              children: "嵌入ArkTS组件"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "介绍了如何在Native侧构建带有ArkTS组件的界面。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-use-ndk/ndk-embed-render-components",
              children: "构建渲染节点"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "介绍了如何在Native侧构建渲染节点。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-use-ndk/ndk-accessibility-xcomponent",
              children: "通过自绘制接入无障碍"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "介绍了自绘制机制接入的第三方UI框架平台，通过获取AccessibilityProvider如何对接系统无障碍。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-use-ndk/arkts-user-defined-draw",
              children: "自定义绘制"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "介绍了如何使用自定义绘制能力，实现自定义内容的绘制。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-use-ndk/ndk-node-query-operate",
              children: "查询和操作自定义节点"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "介绍了如何对自定义节点进行查询和操作。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-use-ndk/ndk-embedded-component",
              children: "通过EmbeddedComponent拉起EmbeddedUIExtensionAbility"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "介绍了如何在Native侧通过EmbeddedComponent拉起EmbeddedUIExtensionAbility。主要用于有进程隔离需求的模块化开发场景。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-use-ndk/arkts-build-text-ndk/ndk-styled-string",
              children: "使用文本"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "介绍了Text组件与字体引擎如何配套使用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-use-ndk/ndk-scope-task",
              children: "在NDK中保证多实例场景功能正常"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "介绍了如何在NDK多线程场景中保证接口调用的功能正常。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-use-ndk/ndk-build-on-multi-thread",
              children: "使用多线程NDK接口并行化构建UI页面"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "介绍了如何使用NDK进行多线程UI组件创建。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "注意事项",
      children: "注意事项"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用NDK接口开发UI界面时，需要保证相关UI接口调用在应用主线程上调用，避免多线程操作导致应用崩溃问题。"
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
788499(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798412-e9baeaea5ff2024394a9e945445c0909.png");

},
634902(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478061-9fb47c0f9c8a951fc4968a7d180981d3.png");

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