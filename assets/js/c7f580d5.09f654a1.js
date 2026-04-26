"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["244948"], {
472813(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_basicfun_input_kit_inputdevice_guidelines_inputdevice_guidelines_md_c7f_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-basicfun-input-kit-inputdevice-guidelines-inputdevice-guidelines-md-c7f.json
var site_docs_system_basicfun_input_kit_inputdevice_guidelines_inputdevice_guidelines_md_c7f_namespaceObject = JSON.parse('{"id":"system-basicfun/input-kit/inputdevice-guidelines/inputdevice-guidelines","title":"输入设备开发指导","description":"场景介绍","source":"@site/docs/system-basicfun/input-kit/inputdevice-guidelines/inputdevice-guidelines.md","sourceDirName":"system-basicfun/input-kit/inputdevice-guidelines","slug":"/system-basicfun/input-kit/inputdevice-guidelines/","permalink":"/harmonyos-docs-site/system-basicfun/input-kit/inputdevice-guidelines/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"输入设备开发指导","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/inputdevice-guidelines","kit":"system/basic-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Input Kit简介","permalink":"/harmonyos-docs-site/system-basicfun/input-kit/input-overview/"},"next":{"title":"优先响应系统功能键开发指导","permalink":"/harmonyos-docs-site/system-basicfun/input-kit/keypressed-guidelines/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-basicfun/input-kit/inputdevice-guidelines/inputdevice-guidelines.md


const frontMatter = {
	title: '输入设备开发指导',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/inputdevice-guidelines',
	kit: 'system/basic-services',
	last_updated: '2026-04-22'
};
const contentTitle = '输入设备开发指导';

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
  "value": "虚拟键盘弹出检测",
  "id": "虚拟键盘弹出检测",
  "level": 2
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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "输入设备开发指导",
        children: "输入设备开发指导"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "输入设备管理提供设备热插拔监听、查询指定设备的键盘类型等能力。使用场景例如：当用户需要输入文本时，输入法会根据当前是否插入了物理键盘来决定是否弹出虚拟键盘，开发者可以通过监听设备热插拔判断是否有物理键盘插入。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "导入模块",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { inputDevice } from '@kit.InputKit';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["输入设备管理常用接口如下表所示，接口详细介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/input-api/input-arkts/js-apis-inputdevice/js-apis-inputdevice",
        children: "@ohos.multimodalInput.inputDevice"
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
            children: "getDeviceList(): Promise<Array<number>>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取输入设备列表。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "getKeyboardType(deviceId: number): Promise<KeyboardType>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取输入设备的键盘类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "on(type: \"change\", listener: Callback<DeviceListener>): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "监听输入设备的热插拔事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "off(type: \"change\", listener?: Callback<DeviceListener>): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消监听输入设备的热插拔事件。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "虚拟键盘弹出检测",
      children: "虚拟键盘弹出检测"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当用户需要输入文本时，输入法会根据当前是否插入了物理键盘来决定是否弹出虚拟键盘，开发者可以通过监听设备热插拔，判断是否有物理键盘插入。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-basicfun-api/input-api/input-arkts/js-apis-inputdevice/js-apis-inputdevice#inputdevicegetdevicelist9",
          children: "getDeviceList"
        }), "方法查询所有连接的输入设备，调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-basicfun-api/input-api/input-arkts/js-apis-inputdevice/js-apis-inputdevice#inputdevicegetkeyboardtype9",
          children: "getKeyboardType"
        }), "方法遍历所有连接的设备，判断是否有物理键盘，若有则标记已有物理键盘连接，该步骤确保监听设备热插拔之前，检测所有插入的输入设备。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-basicfun-api/input-api/input-arkts/js-apis-inputdevice/js-apis-inputdevice#inputdeviceonchange9",
          children: "on"
        }), "接口监听输入设备热插拔事件，若监听到有物理键盘插入，则标记已有物理键盘连接；若监听到有物理键盘拔掉，则标记没有物理键盘连接。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { inputDevice } from '@kit.InputKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst DOMAIN = 0x0000;\n\n@Entry\n@Component\nstruct Index {\n  @State isPhysicalKeyboardExist: boolean = false;\n  @State message: string = \"Click to obtain the device list and monitor device hot-plug events\";\n  keyBoards: Map<number, inputDevice.KeyboardType> = new Map();\n\n  // ...\n\n  build() {\n    RelativeContainer() {\n      Column() {\n        // ...\n\n        Text(this.message)\n          .onClick(() => {\n            try {\n              // 1.获取设备列表，判断是否有物理键盘连接\n              inputDevice.getDeviceList().then(data => {\n                for (let i = 0; i < data.length; ++i) {\n                  inputDevice.getKeyboardType(data[i]).then(type => {\n                    if (type === inputDevice.KeyboardType.ALPHABETIC_KEYBOARD) {\n                      // 物理键盘已连接\n                      this.isPhysicalKeyboardExist = true;\n                      this.keyBoards.set(data[i], type);\n                    }\n                  });\n                }\n              });\n              // 2.监听设备热插拔\n              inputDevice.on(\"change\", (data) => {\n                hilog.info(DOMAIN, 'InputDevice', `Device event info: %{public}s`, JSON.stringify(data));\n                inputDevice.getKeyboardType(data.deviceId).then((type) => {\n                  hilog.info(DOMAIN, 'InputDevice', 'The keyboard type is: %{public}d', type);\n                  if (type === inputDevice.KeyboardType.ALPHABETIC_KEYBOARD && data.type === 'add') {\n                    // 物理键盘已插入\n                    this.isPhysicalKeyboardExist = true;\n                    this.keyBoards.set(data.deviceId, type);\n                  }\n                });\n                if (this.keyBoards.get(data.deviceId) === inputDevice.KeyboardType.ALPHABETIC_KEYBOARD &&\n                  data.type === 'remove') {\n                  // 物理键盘已拔掉\n                  this.isPhysicalKeyboardExist = false;\n                  this.keyBoards.delete(data.deviceId);\n                }\n              });\n              this.message = \"Device monitoring enabled successfully\"\n            } catch (error) {\n              hilog.error(DOMAIN, 'InputDevice', `Execute failed, error: %{public}s`,\n                JSON.stringify(error, [\"code\", \"message\"]));\n              this.message = `Failed to enable device monitoring. Click to retry. Error message:${JSON.stringify(error,\n                [\"code\", \"message\"])}`\n            }\n          })\n          // ...\n      }\n      // ...\n    }\n  }\n}\n"
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