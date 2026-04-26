"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["300607"], {
835620(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_system_hardware_api_driver_development_api_driver_development_c_driver_development_struct_capi_baseddk_ddk_ashmem_capi_baseddk_ddk_ashmem_md_55d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-system-hardware-api-driver-development-api-driver-development-c-driver-development-struct-capi-baseddk-ddk-ashmem-capi-baseddk-ddk-ashmem-md-55d.json
var site_docs_ref_system_hardware_api_driver_development_api_driver_development_c_driver_development_struct_capi_baseddk_ddk_ashmem_capi_baseddk_ddk_ashmem_md_55d_namespaceObject = JSON.parse('{"id":"system-hardware-api/driver-development-api/driver-development-c/driver-development-struct/capi-baseddk-ddk-ashmem/capi-baseddk-ddk-ashmem","title":"DDK_Ashmem","description":"概述","source":"@site/docs-ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-struct/capi-baseddk-ddk-ashmem/capi-baseddk-ddk-ashmem.md","sourceDirName":"system-hardware-api/driver-development-api/driver-development-c/driver-development-struct/capi-baseddk-ddk-ashmem","slug":"/system-hardware-api/driver-development-api/driver-development-c/driver-development-struct/capi-baseddk-ddk-ashmem/capi-baseddk-ddk-ashmem","permalink":"/harmonyos-docs-site/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-struct/capi-baseddk-ddk-ashmem/capi-baseddk-ddk-ashmem","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"DDK_Ashmem","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-baseddk-ddk-ashmem","kit":"系统","last_updated":"2026-04-22","slug":"capi-baseddk-ddk-ashmem"},"sidebar":"ref","previous":{"title":"usb_serial_types.h","permalink":"/harmonyos-docs-site/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-usb-serial-types-h/capi-usb-serial-types-h"},"next":{"title":"Hid_EmitItem","permalink":"/harmonyos-docs-site/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-struct/capi-hidddk-hid-emititem/capi-hidddk-hid-emititem"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-struct/capi-baseddk-ddk-ashmem/capi-baseddk-ddk-ashmem.md


const frontMatter = {
	title: 'DDK_Ashmem',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-baseddk-ddk-ashmem',
	kit: '系统',
	last_updated: '2026-04-22',
	slug: 'capi-baseddk-ddk-ashmem'
};
const contentTitle = 'DDK_Ashmem';

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
        id: "ddk_ashmem",
        children: "DDK_Ashmem"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct DDK_Ashmem {...} DDK_Ashmem\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["定义通过接口", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "OH_DDK_CreateAshmem"
        })
      }), "创建的共享内存，共享内存的缓冲区提供更好的性能。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "相关模块："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-module/capi-baseddk/capi-baseddk",
        children: "Ddk"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "所在头文件："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-headerfile/capi-ddk-types-h/capi-ddk-types-h",
        children: "ddk_types.h"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "成员变量",
      children: "成员变量"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "int32_t ashmemFd"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "共享内存的文件描述符。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const uint8_t* address"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "缓存区地址。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const uint32_t size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "缓存区大小。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t offset"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "已使用缓冲区的偏移量。默认值为0，表示没有偏移，缓冲区从指定地址开始。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t bufferLength"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用的缓冲区长度。默认情况下，该值等于size，表示使用整个缓冲区。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t transferredLength"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "已传输数据的长度。"
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