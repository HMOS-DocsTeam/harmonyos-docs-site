"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["676391"], {
486637(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_system_hardware_api_driver_development_api_driver_development_c_driver_development_struct_capi_usbddk_usbendpointdescriptor_capi_usbddk_usbendpointdescriptor_md_7a9_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-system-hardware-api-driver-development-api-driver-development-c-driver-development-struct-capi-usbddk-usbendpointdescriptor-capi-usbddk-usbendpointdescriptor-md-7a9.json
var site_docs_ref_system_hardware_api_driver_development_api_driver_development_c_driver_development_struct_capi_usbddk_usbendpointdescriptor_capi_usbddk_usbendpointdescriptor_md_7a9_namespaceObject = JSON.parse('{"id":"system-hardware-api/driver-development-api/driver-development-c/driver-development-struct/capi-usbddk-usbendpointdescriptor/capi-usbddk-usbendpointdescriptor","title":"UsbEndpointDescriptor","description":"概述","source":"@site/docs-ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-struct/capi-usbddk-usbendpointdescriptor/capi-usbddk-usbendpointdescriptor.md","sourceDirName":"system-hardware-api/driver-development-api/driver-development-c/driver-development-struct/capi-usbddk-usbendpointdescriptor","slug":"/system-hardware-api/driver-development-api/driver-development-c/driver-development-struct/capi-usbddk-usbendpointdescriptor/capi-usbddk-usbendpointdescriptor","permalink":"/harmonyos-docs-site/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-struct/capi-usbddk-usbendpointdescriptor/capi-usbddk-usbendpointdescriptor","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":29,"frontMatter":{"title":"UsbEndpointDescriptor","sidebar_position":29,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-usbddk-usbendpointdescriptor","kit":"系统","last_updated":"2026-04-22","slug":"capi-usbddk-usbendpointdescriptor"},"sidebar":"ref","previous":{"title":"UsbInterfaceDescriptor","permalink":"/harmonyos-docs-site/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-struct/capi-usbddk-usbinterfacedescriptor/capi-usbddk-usbinterfacedescriptor"},"next":{"title":"UsbDdkEndpointDescriptor","permalink":"/harmonyos-docs-site/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-struct/capi-usbddk-usbddkendpointdescriptor/capi-usbddk-usbddkendpointdescriptor"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-struct/capi-usbddk-usbendpointdescriptor/capi-usbddk-usbendpointdescriptor.md


const frontMatter = {
	title: 'UsbEndpointDescriptor',
	sidebar_position: 29,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-usbddk-usbendpointdescriptor',
	kit: '系统',
	last_updated: '2026-04-22',
	slug: 'capi-usbddk-usbendpointdescriptor'
};
const contentTitle = 'UsbEndpointDescriptor';

const assets = {

};



const toc = [{
  "value": "概述",
  "id": "概述",
  "level": 2
}, {
  "value": "汇总",
  "id": "汇总",
  "level": 2
}, {
  "value": "成员变量",
  "id": "成员变量",
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
        id: "usbendpointdescriptor",
        children: "UsbEndpointDescriptor"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct UsbEndpointDescriptor {...} __attribute__((packed)) UsbEndpointDescriptor\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "标准端点描述符，对应USB协议中Standard Endpoint Descriptor。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 10"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "相关模块："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-module/capi-usbddk/capi-usbddk",
        children: "UsbDdk"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "所在头文件："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-usb-ddk-types-h/capi-usb-ddk-types-h",
        children: "usb_ddk_types.h"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "成员变量",
      children: "成员变量"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "uint8_t bLength"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该描述符的大小，单位为字节。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint8_t bDescriptorType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "描述符类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint8_t bEndpointAddress"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "端点地址，包含端点编号以及端点方向。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint8_t bmAttributes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "端点属性，包括传输类型、同步类型、使用类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint16_t wMaxPacketSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该端点所能承载的最大包的大小。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint8_t bInterval"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数据传输轮询端点的时间间隔。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint8_t bRefresh"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于音频类设备，同步反馈的速率。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint8_t bSynchAddress"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于音频类设备，同步端点的地址。"
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