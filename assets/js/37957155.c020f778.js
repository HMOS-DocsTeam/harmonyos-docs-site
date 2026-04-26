"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["796990"], {
325168(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_system_security_api_device_security_api_devicesecurity_c_devicesecurity_capi_files_devicesecurity_capi_device_security_mode_8_h_devicesecurity_capi_device_security_mode_8_h_md_379_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-system-security-api-device-security-api-devicesecurity-c-devicesecurity-capi-files-devicesecurity-capi-device-security-mode-8-h-devicesecurity-capi-device-security-mode-8-h-md-379.json
var site_docs_ref_system_security_api_device_security_api_devicesecurity_c_devicesecurity_capi_files_devicesecurity_capi_device_security_mode_8_h_devicesecurity_capi_device_security_mode_8_h_md_379_namespaceObject = JSON.parse('{"id":"system-security-api/device-security-api/devicesecurity-c/devicesecurity-capi-files/devicesecurity-capi-device-security-mode-8h/devicesecurity-capi-device-security-mode-8h","title":"device_security_mode.h","description":"概述","source":"@site/docs-ref/system-security-api/device-security-api/devicesecurity-c/devicesecurity-capi-files/devicesecurity-capi-device-security-mode-8h/devicesecurity-capi-device-security-mode-8h.md","sourceDirName":"system-security-api/device-security-api/devicesecurity-c/devicesecurity-capi-files/devicesecurity-capi-device-security-mode-8h","slug":"/system-security-api/device-security-api/devicesecurity-c/devicesecurity-capi-files/devicesecurity-capi-device-security-mode-8h/devicesecurity-capi-device-security-mode-8h","permalink":"/harmonyos-docs-site/ref/system-security-api/device-security-api/devicesecurity-c/devicesecurity-capi-files/devicesecurity-capi-device-security-mode-8h/devicesecurity-capi-device-security-mode-8h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"device_security_mode.h","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/devicesecurity-capi-device-security-mode-8h","kit":"系统","last_updated":"2026-04-22","slug":"devicesecurity-capi-device-security-mode-8h"},"sidebar":"ref","previous":{"title":"SecurityAntivirus","permalink":"/harmonyos-docs-site/ref/system-security-api/device-security-api/devicesecurity-c/devicesecurity-capi-index/devicesecurity-capi-securityantivirus/devicesecurity-capi-securityantivirus"},"next":{"title":"security_audit.h","permalink":"/harmonyos-docs-site/ref/system-security-api/device-security-api/devicesecurity-c/devicesecurity-capi-files/devicesecurity-capi-security-audit-8h/devicesecurity-capi-security-audit-8h"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/system-security-api/device-security-api/devicesecurity-c/devicesecurity-capi-files/devicesecurity-capi-device-security-mode-8h/devicesecurity-capi-device-security-mode-8h.md


const frontMatter = {
	title: 'device_security_mode.h',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/devicesecurity-capi-device-security-mode-8h',
	kit: '系统',
	last_updated: '2026-04-22',
	slug: 'devicesecurity-capi-device-security-mode-8h'
};
const contentTitle = 'device_security_mode.h';

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
  "value": "类型定义",
  "id": "类型定义",
  "level": 3
}, {
  "value": "枚举",
  "id": "枚举",
  "level": 3
}, {
  "value": "函数",
  "id": "函数",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    h3: "h3",
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
        id: "device_security_modeh",
        children: "device_security_mode.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "文件中定义了与设备安全模式相关的函数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <DeviceSecurityKit/device_security_mode.h>"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "库："
        })
      }), " libdevice_security_mode.z.so"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Security.SafetyDetect"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.1(13)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "相关模块："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-security-api/device-security-api/devicesecurity-c/devicesecurity-capi-index/devicesecurity-capi-devicesecuritymode/devicesecurity-capi-devicesecuritymode",
        children: "DeviceSecurityMode"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "类型定义",
      children: "类型定义"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef enum ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/device-security-api/devicesecurity-c/devicesecurity-capi-index/devicesecurity-capi-devicesecuritymode/devicesecurity-capi-devicesecuritymode#dsm_devicesecuritymode-1",
              children: "DSM_DeviceSecurityMode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/device-security-api/devicesecurity-c/devicesecurity-capi-index/devicesecurity-capi-devicesecuritymode/devicesecurity-capi-devicesecuritymode#dsm_devicesecuritymode",
              children: "DSM_DeviceSecurityMode"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备安全模式枚举类型定义。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "枚举",
      children: "枚举"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/device-security-api/devicesecurity-c/devicesecurity-capi-index/devicesecurity-capi-devicesecuritymode/devicesecurity-capi-devicesecuritymode#dsm_devicesecuritymode-1",
              children: "DSM_DeviceSecurityMode"
            }), " {  DSM_NORMAL_MODE = 0,  DSM_SECURE_SHIELD_MODE = 1  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备安全模式枚举值。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "函数",
      children: "函数"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/device-security-api/devicesecurity-c/devicesecurity-capi-index/devicesecurity-capi-devicesecuritymode/devicesecurity-capi-devicesecuritymode#dsm_devicesecuritymode-1",
              children: "DSM_DeviceSecurityMode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/device-security-api/devicesecurity-c/devicesecurity-capi-index/devicesecurity-capi-devicesecuritymode/devicesecurity-capi-devicesecuritymode#hms_dsm_getdevicesecuritymode",
              children: "HMS_DSM_GetDeviceSecurityMode()"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询当前设备安全模式。"
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