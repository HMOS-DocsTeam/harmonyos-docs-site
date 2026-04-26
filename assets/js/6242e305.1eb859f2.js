"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["152689"], {
535563(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_basicfun_input_kit_pointerstyle_guidelines_pointerstyle_guidelines_md_624_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-basicfun-input-kit-pointerstyle-guidelines-pointerstyle-guidelines-md-624.json
var site_docs_system_basicfun_input_kit_pointerstyle_guidelines_pointerstyle_guidelines_md_624_namespaceObject = JSON.parse('{"id":"system-basicfun/input-kit/pointerstyle-guidelines/pointerstyle-guidelines","title":"鼠标光标开发指导","description":"场景介绍","source":"@site/docs/system-basicfun/input-kit/pointerstyle-guidelines/pointerstyle-guidelines.md","sourceDirName":"system-basicfun/input-kit/pointerstyle-guidelines","slug":"/system-basicfun/input-kit/pointerstyle-guidelines/","permalink":"/harmonyos-docs-site/system-basicfun/input-kit/pointerstyle-guidelines/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"鼠标光标开发指导","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/pointerstyle-guidelines","kit":"system/basic-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"优先响应系统功能键开发指导","permalink":"/harmonyos-docs-site/system-basicfun/input-kit/keypressed-guidelines/"},"next":{"title":"事件监听开发指导（C/C++）","permalink":"/harmonyos-docs-site/system-basicfun/input-kit/monitor-guidelines/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-basicfun/input-kit/pointerstyle-guidelines/pointerstyle-guidelines.md


const frontMatter = {
	title: '鼠标光标开发指导',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/pointerstyle-guidelines',
	kit: 'system/basic-services',
	last_updated: '2026-04-22'
};
const contentTitle = '鼠标光标开发指导';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "导入模块",
  "id": "导入模块",
  "level": 2
}, {
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "设置鼠标光标隐藏",
  "id": "设置鼠标光标隐藏",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 3
}, {
  "value": "设置鼠标光标样式",
  "id": "设置鼠标光标样式",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤-1",
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
        id: "鼠标光标开发指导",
        children: "鼠标光标开发指导"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "鼠标光标控制提供鼠标光标显示和隐藏、光标样式查询和设置的能力。使用场景例如：用户在全屏观看视频时，开发者可以控制鼠标光标的显示隐藏；当用户执行取色时，开发者可以将鼠标光标样式切换为取色器样式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "导入模块",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { pointer } from '@kit.InputKit';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["鼠标光标控制常用接口如下表所示，接口详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/input-api/input-arkts/js-apis-pointer/js-apis-pointer",
        children: "@ohos.multimodalInput.pointer"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "isPointerVisible(callback: AsyncCallback<boolean>): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取鼠标光标显示或隐藏状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "setPointerVisible(visible: boolean, callback: AsyncCallback<void>): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置鼠标光标显示或隐藏状态，该接口会影响全局鼠标光标的显示状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "setPointerStyle(windowId: number, pointerStyle: PointerStyle, callback: AsyncCallback<void>): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置鼠标光标样式，该接口会影响指定窗口鼠标光标样式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "getPointerStyle(windowId: number, callback: AsyncCallback<PointerStyle>): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询鼠标光标样式。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "设置鼠标光标隐藏",
      children: "设置鼠标光标隐藏"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用户在全屏观看视频时，可以调用鼠标光标的隐藏接口设置鼠标光标不可见，提升用户体验。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用切换到全屏播放。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在应用中调用鼠标光标隐藏接口隐藏光标。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用退出全屏播放。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在应用中调用鼠标光标显示接口显示光标。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Text(\"Click to hide pointer\")\n  .onClick(() => {\n    // 1.应用切换到全屏播放\n    // 2.调用鼠标光标隐藏接口隐藏光标\n    try {\n      pointer.setPointerVisible(false, (error: Error) => {\n        if (error) {\n          hilog.error(DOMAIN, 'Pointer', `Set pointer visible failed, error: %{public}s`,\n            JSON.stringify(error, [\"code\", \"message\"]));\n          return;\n        }\n        hilog.info(DOMAIN, 'Pointer', 'Set pointer visible success.');\n      });\n    } catch (error) {\n      hilog.error(DOMAIN, 'Pointer', `The mouse pointer hide attributes is failed. %{public}s`,\n        JSON.stringify(error, [\"code\", \"message\"]));\n    }\n  })\n  // ...\n\n// 3.应用退出全屏播放\n// 4.调用鼠标光标显示接口显示光标\nText(\"Click to display pointer\")\n  .onClick(() => {\n    try {\n      pointer.setPointerVisible(true, (error: Error) => {\n        if (error) {\n          hilog.error(DOMAIN, 'Pointer', `Set pointer visible failed, error: %{public}s`,\n            JSON.stringify(error, [\"code\", \"message\"]));\n          return;\n        }\n        hilog.info(DOMAIN, 'Pointer', 'Set pointer visible success.');\n      });\n    } catch (error) {\n      hilog.error(DOMAIN, 'Pointer', `Set pointer visible failed, error: %{public}s`,\n        JSON.stringify(error, [\"code\", \"message\"]));\n    }\n  })\n  // ...\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "设置鼠标光标样式",
      children: "设置鼠标光标样式"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当开发者设计取色器特性时，可以将鼠标光标样式切换为取色器样式，完成取色后，设置鼠标光标样式为默认样式，该接口设置和查询当前应用内指定窗口的光标样式，总共可设置49种光标样式，具体参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/input-api/input-arkts/js-apis-pointer/js-apis-pointer#pointerstyle",
        children: "光标样式"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "开发步骤-1",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "开发者使能取色功能。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "调用窗口实例获取对应的窗口ID。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "设置鼠标光标样式为取色器样式。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "取色结束。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "设置鼠标光标样式为默认样式。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Text(`Click to set the mouse pointer style to the color picker style`)\n  .onClick(() => {\n    // 1.开发者使能取色功能\n    // 2.调用窗口实例获取对应的窗口id\n    window.getLastWindow(this.getUIContext().getHostContext(),\n      (error: BusinessError, windowClass: window.Window) => {\n        if (error.code) {\n          hilog.error(DOMAIN, 'Pointer', 'Failed to obtain the top window. Cause: %{public}s',\n            JSON.stringify(error));\n          return;\n        }\n        let windowId = windowClass.getWindowProperties().id;\n        if (windowId < 0) {\n          hilog.info(DOMAIN, 'Pointer', 'Invalid windowId');\n          return;\n        }\n        try {\n          // 3.设置鼠标光标样式为取色器样式\n          pointer.setPointerStyle(windowId, pointer.PointerStyle.COLOR_SUCKER).then(() => {\n            hilog.info(DOMAIN, 'Pointer', 'Successfully set mouse pointer style');\n          });\n        } catch (error) {\n          hilog.error(DOMAIN, 'Pointer', `Failed to set the pointer style, error=%{public}s, msg=%{public}s`,\n            JSON.stringify(error), error.message);\n        }\n      });\n  })\n  // ...\n\n\nText(`Click to set the mouse pointer style to default style`)\n  .onClick(() => {\n    // 4.取色结束\n    window.getLastWindow(this.getUIContext().getHostContext(),\n      (error: BusinessError, windowClass: window.Window) => {\n        if (error.code) {\n          hilog.error(DOMAIN, 'Pointer', 'Failed to obtain the top window. Cause: %{public}s',\n            JSON.stringify(error));\n          return;\n        }\n        let windowId = windowClass.getWindowProperties().id;\n        if (windowId < 0) {\n          hilog.info(DOMAIN, 'Pointer', 'Invalid windowId');\n          return;\n        }\n        try {\n          // 5.设置鼠标光标样式为默认样式\n          pointer.setPointerStyle(windowId, pointer.PointerStyle.DEFAULT).then(() => {\n            hilog.info(DOMAIN, 'Pointer', 'Successfully set mouse pointer style');\n          });\n        } catch (error) {\n          hilog.error(DOMAIN, 'Pointer', `Failed to set the pointer style, error=%{public}s, msg=%{public}s`,\n            JSON.stringify(error), error.message);\n        }\n      });\n  })\n"
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