"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["911270"], {
326489(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_hardware_driver_development_kit_externaldevice_faqs_externaldevice_faqs_md_2e3_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-hardware-driver-development-kit-externaldevice-faqs-externaldevice-faqs-md-2e3.json
var site_docs_system_hardware_driver_development_kit_externaldevice_faqs_externaldevice_faqs_md_2e3_namespaceObject = JSON.parse('{"id":"system-hardware/driver-development-kit/externaldevice-faqs/externaldevice-faqs","title":"常见问题","description":"编译或运行时无法找到头文件","source":"@site/docs/system-hardware/driver-development-kit/externaldevice-faqs/externaldevice-faqs.md","sourceDirName":"system-hardware/driver-development-kit/externaldevice-faqs","slug":"/system-hardware/driver-development-kit/externaldevice-faqs/","permalink":"/harmonyos-docs-site/system-hardware/driver-development-kit/externaldevice-faqs/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"常见问题","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/externaldevice-faqs","kit":"system/hardware","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"开发使用SCSI协议的设备驱动","permalink":"/harmonyos-docs-site/system-hardware/driver-development-kit/specialized-driver-development/scsi-peripheral-ddk-guidelines/"},"next":{"title":"扩展外设驱动开发术语","permalink":"/harmonyos-docs-site/system-hardware/driver-development-kit/terms/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-hardware/driver-development-kit/externaldevice-faqs/externaldevice-faqs.md


const frontMatter = {
	title: '常见问题',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/externaldevice-faqs',
	kit: 'system/hardware',
	last_updated: '2026-04-22'
};
const contentTitle = '常见问题';

const assets = {

};



const toc = [{
  "value": "编译或运行时无法找到头文件",
  "id": "编译或运行时无法找到头文件",
  "level": 2
}, {
  "value": "问题现象",
  "id": "问题现象",
  "level": 3
}, {
  "value": "解决措施",
  "id": "解决措施",
  "level": 3
}, {
  "value": "安装HAP时提示版本不匹配",
  "id": "安装hap时提示版本不匹配",
  "level": 2
}, {
  "value": "问题现象",
  "id": "问题现象-1",
  "level": 3
}, {
  "value": "解决措施",
  "id": "解决措施-1",
  "level": 3
}, {
  "value": "参考信息",
  "id": "参考信息",
  "level": 3
}, {
  "value": "安装HAP时提示解析本地so文件失败",
  "id": "安装hap时提示解析本地so文件失败",
  "level": 2
}, {
  "value": "问题现象",
  "id": "问题现象-2",
  "level": 3
}, {
  "value": "解决措施",
  "id": "解决措施-2",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    li: "li",
    p: "p",
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
        id: "常见问题",
        children: "常见问题"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "编译或运行时无法找到头文件",
      children: "编译或运行时无法找到头文件"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "问题现象",
      children: "问题现象"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "编译或运行时提示“usb/usb_ddk_api.h not found”、“hid/hid_ddk_api.h not found” 等。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "解决措施",
      children: "解决措施"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "编译时报错：请确认HarmonyOS版本，是否为最新版本。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "运行时报错：请确认设备SDK版本为API11及以上。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "安装hap时提示版本不匹配",
      children: "安装HAP时提示版本不匹配"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "问题现象-1",
      children: "问题现象"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "安装HAP时提示 “compileSdkVersion and releaseType of the app do not match the apiVersion and releaseType on the device”。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "解决措施-1",
      children: "解决措施"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["请根据", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%8F%82%E8%80%83%E4%BF%A1%E6%81%AF",
        children: "参考信息"
      }), "提供的对应关系，检查设备SDK的API版本是否匹配。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "参考信息",
      children: "参考信息"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "支持的最小API"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "应用开发接口（ArkTS接口）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "API10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "USB DDK接口"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "API10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HID DDK接口"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "API11"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "安装hap时提示解析本地so文件失败",
      children: "安装HAP时提示解析本地so文件失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "问题现象-2",
      children: "问题现象"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "安装HAP时提示\"code:9568347 error: install parse native so failed\"。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "解决措施-2",
      children: "解决措施"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["根据应用调试中", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs-V5/faqs-app-debugging-14-V5",
        children: "安装HAP时提示“code:9568347 error: install parse native so failed”错误，或者运行时候提示“TypeError：Cannot read property xxx of undefined”错误"
      }), "提供的解决方法，在build-profile.json5中的buildOption/externalNativeOptions内手动配置abiFilters的值。"]
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