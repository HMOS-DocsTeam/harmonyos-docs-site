"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["825812"], {
448244(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_hardware_driver_development_kit_environmental_preparation_environmental_preparation_md_eb9_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-hardware-driver-development-kit-environmental-preparation-environmental-preparation-md-eb9.json
var site_docs_system_hardware_driver_development_kit_environmental_preparation_environmental_preparation_md_eb9_namespaceObject = JSON.parse('{"id":"system-hardware/driver-development-kit/environmental-preparation/environmental-preparation","title":"环境准备","description":"开发工具及配置","source":"@site/docs/system-hardware/driver-development-kit/environmental-preparation/environmental-preparation.md","sourceDirName":"system-hardware/driver-development-kit/environmental-preparation","slug":"/system-hardware/driver-development-kit/environmental-preparation/","permalink":"/harmonyos-docs-site/system-hardware/driver-development-kit/environmental-preparation/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"环境准备","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/environmental-preparation","kit":"system/hardware","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Driver Development Kit简介","permalink":"/harmonyos-docs-site/system-hardware/driver-development-kit/driverdevelopment-overview/"},"next":{"title":"开发无UI界面基础驱动","permalink":"/harmonyos-docs-site/system-hardware/driver-development-kit/development-of-basic-drivers/driverextensionability/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-hardware/driver-development-kit/environmental-preparation/environmental-preparation.md


const frontMatter = {
	title: '环境准备',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/environmental-preparation',
	kit: 'system/hardware',
	last_updated: '2026-04-22'
};
const contentTitle = '环境准备';

const assets = {

};



const toc = [{
  "value": "开发工具及配置",
  "id": "开发工具及配置",
  "level": 2
}, {
  "value": "SDK版本配置",
  "id": "sdk版本配置",
  "level": 2
}, {
  "value": "检验环境是否搭建成功",
  "id": "检验环境是否搭建成功",
  "level": 2
}, {
  "value": "HDC配置",
  "id": "hdc配置",
  "level": 2
}, {
  "value": "开发设备",
  "id": "开发设备",
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
        id: "环境准备",
        children: "环境准备"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发工具及配置",
      children: "开发工具及配置"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DevEco Studio作为驱动开发工具，是进行驱动开发的必备条件之一，我们可以使用该工具进行开发、调试、打包等操作。请下载安装该工具，并参考工具概述中的创建一个新的工程进行基本的操作验证，保证DevEco Studio可正常运行。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["请使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/download/",
        children: "华为账号-登录"
      }), "下载安装该工具，并参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-tools-overview",
        children: "工具概述"
      }), "中的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-project/ide-create-new-project",
        children: "创建一个新的工程"
      }), "进行基本的操作验证，保证DevEco Studio可正常运行。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "sdk版本配置",
      children: "SDK版本配置"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "扩展外设管理模块提供的ArkTS接口，所需SDK版本为API10及以上版本才可使用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "基于DDK能力开发专业专用扩展外设驱动或扩展外设增强驱动时，对SDK版本的要求如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "NDK接口"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "SDK版本"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-module/capi-usbddk/capi-usbddk",
              children: "UsbDdk"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "API10及以上"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-module/capi-hidddk/capi-hidddk",
              children: "HidDdk"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "API11及以上"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-module/capi-serialddk/capi-serialddk",
              children: "USBSerialDDK"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "API18及以上"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/driver-development-api/driver-development-c/driver-development-module/capi-scsiperipheralddk/capi-scsiperipheralddk",
              children: "ScsiPeripheralDDK"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "API18及以上"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "检验环境是否搭建成功",
      children: "检验环境是否搭建成功"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查DevEco Studio是否已连接上HarmonyOS设备。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(231497)/* ["default"] */.A) + "",
        width: "1920",
        height: "550"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hdc配置",
      children: "HDC配置"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["HDC（HarmonyOS Device Connector）是为开发人员提供的用于调试的命令行工具，通过该工具可以在Windows/Linux/Mac系统上与真实设备或者模拟器进行交互，详细参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-debug-optimize/debugging-commands/hdc",
        children: "hdc"
      }), "配置。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(9581)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "“配置环境变量hdc_server_port”和“全局环境变量”为必须操作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发设备",
      children: "开发设备"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当前开发调试及验证，以PC作为开发设备进行说明。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["开发扩展外设驱动客户端和扩展外设驱动时，需要一个外接USB设备进行调试，", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "当前仅支持通过USB总线连接的外接设备"
          })
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "需要知道外接USB设备的ProductId和VendorId，用于定义驱动以及IPC通信。"
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
231497(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798824-e87c75e3b126df13ab6e936655d34fe2.png");

},
9581(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

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