"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["445683"], {
249574(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_c_arkui_module_capi_arkui_nativemodule_capi_arkui_nativemodule_md_64e_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-c-arkui-module-capi-arkui-nativemodule-capi-arkui-nativemodule-md-64e.json
var site_docs_ref_arkui_api_arkui_c_arkui_module_capi_arkui_nativemodule_capi_arkui_nativemodule_md_64e_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-c/arkui-module/capi-arkui-nativemodule/capi-arkui-nativemodule","title":"ArkUI_NativeModule","description":"概述","source":"@site/docs-ref/arkui-api/arkui-c/arkui-module/capi-arkui-nativemodule/capi-arkui-nativemodule.md","sourceDirName":"arkui-api/arkui-c/arkui-module/capi-arkui-nativemodule","slug":"/arkui-api/arkui-c/arkui-module/capi-arkui-nativemodule/capi-arkui-nativemodule","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-c/arkui-module/capi-arkui-nativemodule/capi-arkui-nativemodule","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"ArkUI_NativeModule","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule","kit":"应用框架","last_updated":"2026-04-22","slug":"capi-arkui-nativemodule"},"sidebar":"ref","previous":{"title":"数据类型说明","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-js-comp/arkui-card-comp/js-service-widget-appendix-types/js-service-widget-appendix-types"},"next":{"title":"ArkUI_Accessibility","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-c/arkui-module/capi-arkui-accessibility/capi-arkui-accessibility"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-c/arkui-module/capi-arkui-nativemodule/capi-arkui-nativemodule.md


const frontMatter = {
	title: 'ArkUI_NativeModule',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'capi-arkui-nativemodule'
};
const contentTitle = 'ArkUI_NativeModule';

const assets = {

};



const toc = [{
  "value": "概述",
  "id": "概述",
  "level": 2
}, {
  "value": "文件汇总",
  "id": "文件汇总",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    header: "header",
    p: "p",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "arkui_nativemodule",
        children: "ArkUI_NativeModule"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["提供ArkUI在Native侧的通用拖拽及主动发起拖拽能力。更多详细介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-use-ndk/arkts-add-event/ndk-drag-event",
        children: "拖拽事件"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "提供ArkUI在Native侧的通用按键事件能力。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["提供ArkUI在Native侧的注册手势回调的能力。更多详细介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-use-ndk/arkts-add-event/ndk-bind-gesture-events",
        children: "绑定手势事件"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["提供ArkUI在Native侧使用动画回调的能力。更多详细介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-use-ndk/ndk-use-animation",
        children: "使用动画"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["提供ArkUI在Native侧的UI能力，如UI组件创建销毁、树节点操作、属性设置、事件监听等。更多详细介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-use-ndk/ndk-access-the-arkts-page",
        children: "接入ArkTS页面"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "文件汇总",
      children: "文件汇总"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-drag-and-drop-h/capi-drag-and-drop-h",
              children: "drag_and_drop.h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "提供NativeDrag相关接口定义。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-drawable-descriptor-h/capi-drawable-descriptor-h",
              children: "drawable_descriptor.h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "提供NativeDrawableDescriptor接口的类型定义。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-animate-h/capi-native-animate-h",
              children: "native_animate.h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "提供ArkUI在Native侧的动画接口定义集合。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-dialog-h/capi-native-dialog-h",
              children: "native_dialog.h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "提供ArkUI在Native侧的自定义弹窗接口定义集合。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-gesture-h/capi-native-gesture-h",
              children: "native_gesture.h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "提供NativeGesture接口的类型定义。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-h/capi-native-interface-h",
              children: "native_interface.h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "提供NativeModule接口的统一入口函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-focus-h/capi-native-interface-focus-h",
              children: "native_interface_focus.h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义焦点管理的相关接口，主要用于主动转移焦点或管理控制焦点转移默认行为，控制焦点激活态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-key-event-h/capi-native-key-event-h",
              children: "native_key_event.h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "提供NativeKeyEvent相关接口定义。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-node-h/capi-native-node-h",
              children: "native_node.h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "提供NativeNode接口的类型定义。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-node-napi-h/capi-native-node-napi-h",
              children: "native_node_napi.h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "提供ArkTS侧的FrameNode转换NodeHandle的方式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h",
              children: "native_type.h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "提供NativeModule公共的类型定义。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-styled-string-h/capi-styled-string-h",
              children: "styled_string.h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "提供ArkUI在Native侧的属性字符串能力。"
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