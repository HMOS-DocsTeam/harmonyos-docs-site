"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["678218"], {
618302(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_system_network_api_service_collaboration_api_servicecollaboration_arkts_servicecollaboration_collaborationdevicepicker_servicecollaboration_collaborationdevicepicker_md_640_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-system-network-api-service-collaboration-api-servicecollaboration-arkts-servicecollaboration-collaborationdevicepicker-servicecollaboration-collaborationdevicepicker-md-640.json
var site_docs_ref_system_network_api_service_collaboration_api_servicecollaboration_arkts_servicecollaboration_collaborationdevicepicker_servicecollaboration_collaborationdevicepicker_md_640_namespaceObject = JSON.parse('{"id":"system-network-api/service-collaboration-api/servicecollaboration-arkts/servicecollaboration-collaborationdevicepicker/servicecollaboration-collaborationdevicepicker","title":"CollaborationDevicePicker (流转控件)","description":"该模块提供流转入口组件，点击流转入口组件后，会拉起设备选择面板。","source":"@site/docs-ref/system-network-api/service-collaboration-api/servicecollaboration-arkts/servicecollaboration-collaborationdevicepicker/servicecollaboration-collaborationdevicepicker.md","sourceDirName":"system-network-api/service-collaboration-api/servicecollaboration-arkts/servicecollaboration-collaborationdevicepicker","slug":"/system-network-api/service-collaboration-api/servicecollaboration-arkts/servicecollaboration-collaborationdevicepicker/servicecollaboration-collaborationdevicepicker","permalink":"/harmonyos-docs-site/ref/system-network-api/service-collaboration-api/servicecollaboration-arkts/servicecollaboration-collaborationdevicepicker/servicecollaboration-collaborationdevicepicker","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"CollaborationDevicePicker (流转控件)","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/servicecollaboration-collaborationdevicepicker","kit":"系统","last_updated":"2026-04-22","slug":"servicecollaboration-collaborationdevicepicker"},"sidebar":"ref","previous":{"title":"CollaborationService (跨设备互通组件)","permalink":"/harmonyos-docs-site/ref/system-network-api/service-collaboration-api/servicecollaboration-arkts/servicecollaboration-collaborationservice/servicecollaboration-collaborationservice"},"next":{"title":"devicePicker (设备选择控制器)","permalink":"/harmonyos-docs-site/ref/system-network-api/service-collaboration-api/servicecollaboration-arkts/servicecollaboration-devicepicker/servicecollaboration-devicepicker"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/system-network-api/service-collaboration-api/servicecollaboration-arkts/servicecollaboration-collaborationdevicepicker/servicecollaboration-collaborationdevicepicker.md


const frontMatter = {
	title: 'CollaborationDevicePicker (流转控件)',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/servicecollaboration-collaborationdevicepicker',
	kit: '系统',
	last_updated: '2026-04-22',
	slug: 'servicecollaboration-collaborationdevicepicker'
};
const contentTitle = 'CollaborationDevicePicker (流转控件)';

const assets = {

};



const toc = [{
  "value": "导入模块",
  "id": "导入模块",
  "level": 2
}, {
  "value": "CollaborationDevicePicker",
  "id": "collaborationdevicepicker",
  "level": 2
}, {
  "value": "build",
  "id": "build",
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
    p: "p",
    pre: "pre",
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
        id: "collaborationdevicepicker-流转控件",
        children: "CollaborationDevicePicker (流转控件)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该模块提供流转入口组件，点击流转入口组件后，会拉起设备选择面板。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["与devicePicker.", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/service-collaboration-api/servicecollaboration-arkts/servicecollaboration-devicepicker/servicecollaboration-devicepicker#createdevicepickercontroller",
        children: "createDevicePickerController"
      }), "配合使用，通过创建的controller可以与设备选择面板进行交互。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.0.0(10)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "导入模块",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { CollaborationDevicePicker } from '@kit.ServiceCollaborationKit'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "collaborationdevicepicker",
      children: "CollaborationDevicePicker"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "装饰器类型："
        })
      }), " @Component"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Collaboration.DevicePicker"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.0.0(10)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "controller"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["devicePicker.", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/service-collaboration-api/servicecollaboration-arkts/servicecollaboration-devicepicker/servicecollaboration-devicepicker#devicepickercontroller",
              children: "DevicePickerController"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备选择控制器，通过该控制器与设备选择界面进行交互。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "attribute"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["devicePicker.", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/service-collaboration-api/servicecollaboration-arkts/servicecollaboration-devicepicker/servicecollaboration-devicepicker#devicepickerattribute",
              children: "DevicePickerAttribute"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备选择属性，指定设备选择界面的应用描述信息，如果不指定，默认使用调用者所属ability配置文件中的信息。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "build",
      children: "build"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "build(): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "struct的默认构造函数，开发者无法直接调用此方法。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Collaboration.DevicePicker"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.0.0(10)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { devicePicker, CollaborationDevicePicker } from '@kit.ServiceCollaborationKit'\n\n@Entry\n@Component\nstruct Index {\n  controller: devicePicker.DevicePickerController = devicePicker.createDevicePickerController()\n\n  build() {\n    Column() {\n      // 流转控件，应用流转的入口\n      CollaborationDevicePicker({\n        controller: this.controller, attribute: {\n          abilityName: '流转测试',\n          abilityDesc: '这是一个流转测试的控件',\n          abilityIcon: $r('sys.media.ohos_app_icon'),\n          businessDesc: '流转到'\n        }\n      })\n    }.width('100%').alignItems(HorizontalAlign.Center)\n  }\n}\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.th, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "图1"
              })
            }), " 设备选择界面的应用描述信息效果图"]
          }), (0,jsx_runtime.jsxs)(_components.th, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "图2"
              })
            }), " 点击流转入口组件后，拉起设备选择面板效果图"]
          }), (0,jsx_runtime.jsxs)(_components.th, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "图3"
              })
            }), " 设备流转成功后效果图"]
          }), (0,jsx_runtime.jsxs)(_components.th, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "图4"
              })
            }), " 流转失败效果图"]
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "设备选择界面最上方为应用描述部分，包括应用图标、应用名称、应用描述信息"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "页面右上角为流转图标，点击后会从设备底部弹出设备选择面板"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "流转图标和设备信息会变蓝色"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "流转失败效果图"
          })]
        })
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