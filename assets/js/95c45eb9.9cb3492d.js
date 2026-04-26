"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["228402"], {
912681(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_system_hardware_api_driver_development_api_driver_development_c_driver_development_struct_capi_usbddk_usbdevicememmap_capi_usbddk_usbdevicememmap_md_95c_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-system-hardware-api-driver-development-api-driver-development-c-driver-development-struct-capi-usbddk-usbdevicememmap-capi-usbddk-usbdevicememmap-md-95c.json
var site_docs_ref_system_hardware_api_driver_development_api_driver_development_c_driver_development_struct_capi_usbddk_usbdevicememmap_capi_usbddk_usbdevicememmap_md_95c_namespaceObject = JSON.parse('{"id":"system-hardware-api/driver-development-api/driver-development-c/driver-development-struct/capi-usbddk-usbdevicememmap/capi-usbddk-usbdevicememmap","title":"UsbDeviceMemMap","description":"概述","source":"@site/docs-ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-struct/capi-usbddk-usbdevicememmap/capi-usbddk-usbdevicememmap.md","sourceDirName":"system-hardware-api/driver-development-api/driver-development-c/driver-development-struct/capi-usbddk-usbdevicememmap","slug":"/system-hardware-api/driver-development-api/driver-development-c/driver-development-struct/capi-usbddk-usbdevicememmap/capi-usbddk-usbdevicememmap","permalink":"/harmonyos-docs-site/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-struct/capi-usbddk-usbdevicememmap/capi-usbddk-usbdevicememmap","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":35,"frontMatter":{"title":"UsbDeviceMemMap","sidebar_position":35,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-usbddk-usbdevicememmap","kit":"系统","last_updated":"2026-04-22","slug":"capi-usbddk-usbdevicememmap"},"sidebar":"ref","previous":{"title":"UsbRequestPipe","permalink":"/harmonyos-docs-site/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-struct/capi-usbddk-usbrequestpipe/capi-usbddk-usbrequestpipe"},"next":{"title":"Usb_DeviceArray","permalink":"/harmonyos-docs-site/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-struct/capi-usbddk-usb-devicearray/capi-usbddk-usb-devicearray"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-struct/capi-usbddk-usbdevicememmap/capi-usbddk-usbdevicememmap.md


const frontMatter = {
	title: 'UsbDeviceMemMap',
	sidebar_position: 35,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-usbddk-usbdevicememmap',
	kit: '系统',
	last_updated: '2026-04-22',
	slug: 'capi-usbddk-usbdevicememmap'
};
const contentTitle = 'UsbDeviceMemMap';

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
        id: "usbdevicememmap",
        children: "UsbDeviceMemMap"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct UsbDeviceMemMap {...} UsbDeviceMemMap\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设备内存映射，通过OH_Usb_CreateDeviceMemMap创建设备内存映射，使用内存映射后的缓冲区，可提升数据传输性能。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "uint8_t* const address"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "映射后的缓冲区地址。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const size_t size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "缓冲区大小。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t offset"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "所使用的缓冲区的偏移量，默认为0，表示没有偏移，从映射后的缓冲区地址address开始。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t bufferLength"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "所使用的缓冲区的长度，默认等于缓冲区大小 size，表示使用全部的缓冲区。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t transferedLength"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "实际传输的数据的长度。"
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