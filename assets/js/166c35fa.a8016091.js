"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["146445"], {
444514(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_hardware_multimodal_awareness_kit_devicestatus_guidelines_devicestatus_guidelines_md_166_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-hardware-multimodal-awareness-kit-devicestatus-guidelines-devicestatus-guidelines-md-166.json
var site_docs_system_hardware_multimodal_awareness_kit_devicestatus_guidelines_devicestatus_guidelines_md_166_namespaceObject = JSON.parse('{"id":"system-hardware/multimodal-awareness-kit/devicestatus-guidelines/devicestatus-guidelines","title":"设备状态感知开发指导","description":"DeviceStatus（设备状态感知）模块提供设备状态感知能力，可以获取到设备的信息，例如：获取设备静止姿态感知状态（支架态）。","source":"@site/docs/system-hardware/multimodal-awareness-kit/devicestatus-guidelines/devicestatus-guidelines.md","sourceDirName":"system-hardware/multimodal-awareness-kit/devicestatus-guidelines","slug":"/system-hardware/multimodal-awareness-kit/devicestatus-guidelines/","permalink":"/harmonyos-docs-site/system-hardware/multimodal-awareness-kit/devicestatus-guidelines/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"设备状态感知开发指导","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/devicestatus-guidelines","kit":"system/hardware","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"获取用户动作开发指导","permalink":"/harmonyos-docs-site/system-hardware/multimodal-awareness-kit/motion-guidelines/"},"next":{"title":"用户状态感知开发指导","permalink":"/harmonyos-docs-site/system-hardware/multimodal-awareness-kit/userstatus-guidelines/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-hardware/multimodal-awareness-kit/devicestatus-guidelines/devicestatus-guidelines.md


const frontMatter = {
	title: '设备状态感知开发指导',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/devicestatus-guidelines',
	kit: 'system/hardware',
	last_updated: '2026-04-22'
};
const contentTitle = '设备状态感知开发指导';

const assets = {

};



const toc = [{
  "value": "基本概念",
  "id": "基本概念",
  "level": 2
}, {
  "value": "获取设备静止姿态感知状态（支架态）开发指导",
  "id": "获取设备静止姿态感知状态支架态开发指导",
  "level": 2
}, {
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 3
}, {
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 3
}, {
  "value": "接口说明",
  "id": "接口说明",
  "level": 3
}, {
  "value": "开发步骤",
  "id": "开发步骤",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "设备状态感知开发指导",
        children: "设备状态感知开发指导"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DeviceStatus（设备状态感知）模块提供设备状态感知能力，可以获取到设备的信息，例如：获取设备静止姿态感知状态（支架态）。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["详细的接口介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-hardware-api/multimodal-awareness-api/multimodal-awareness-arkts/js-apis-awareness-devicestatus/js-apis-awareness-devicestatus",
        children: "@ohos.multimodalAwareness.deviceStatus (设备状态感知)"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在进行设备状态感知模块的使用前，开发者应了解以下基本概念："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "支架态"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设备进入支架态指设备静止，且屏幕与水平面角度处于45度-135度。折叠屏手机需处于折叠状态或者完全展开状态。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "获取设备静止姿态感知状态支架态开发指导",
      children: "获取设备静止姿态感知状态（支架态）开发指导"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发过程中，需要订阅设备静止姿态（支架态）感知，并且通过订阅时传入的回调函数来获取到当前的状态值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 18开始，支持获取设备静止姿态（支架态）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设备需要支持加速度计。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "接口说明",
      children: "接口说明"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "on(type: 'steadyStandingDetect', callback: Callback<SteadyStandingStatus>): void;"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "订阅设备静止姿态（支架态）感知，结果通过callback返回。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "off(type: 'steadyStandingDetect', callback?: Callback<SteadyStandingStatus>): void;"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消订阅设备静止姿态（支架态）感知。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { deviceStatus } from '@kit.MultimodalAwarenessKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "订阅设备静止姿态（支架态）感知事件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "try {\n   deviceStatus.on('steadyStandingDetect', (data:deviceStatus.SteadyStandingStatus) => {\n      console.info('succeed to get status, now status = ' + data);\n   });\n} catch (err) {\n   console.error('on failed, err = ' + err);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "取消本客户端订阅的所有设备静止姿态（支架态）感知事件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "try {\n   deviceStatus.off('steadyStandingDetect');\n} catch (err) {\n   console.error('off failed, err = ' + err);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "取消订阅设备静止姿态（支架态）感知事件的特定回调。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 定义callback变量\nlet callback : Callback<deviceStatus.SteadyStandingStatus> = (data : deviceStatus.SteadyStandingStatus) => {\n   console.info('succeed to get status, now status = ' + data);\n};\n// 以callback为回调函数，订阅设备静止姿态感知（支架态）事件\ntry {\n   deviceStatus.on('steadyStandingDetect', callback);\n} catch (err) {\n   console.error('on failed, err = ' + err);\n}\n// 取消该客户端订阅设备静止姿态感知（支架态）事件的特定回调函数\ntry {\n   deviceStatus.off('steadyStandingDetect', callback);\n} catch (err) {\n   console.error('off failed, err = ' + err);\n}\n"
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