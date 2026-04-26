"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["872138"], {
676975(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_debug_optimize_debugging_commands_hidumper_tool_hidumper_privacymanagerservice_hidumper_privacymanagerservice_md_a8c_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-debug-optimize-debugging-commands-hidumper-tool-hidumper-privacymanagerservice-hidumper-privacymanagerservice-md-a8c.json
var site_docs_system_debug_optimize_debugging_commands_hidumper_tool_hidumper_privacymanagerservice_hidumper_privacymanagerservice_md_a8c_namespaceObject = JSON.parse('{"id":"system-debug-optimize/debugging-commands/hidumper-tool/hidumper-privacymanagerservice/hidumper-privacymanagerservice","title":"PrivacyManagerService","description":"PrivacyManagerService是访问控制基于hidumper增强开发的命令行能力，可显示访问控制基础信息，获取敏感权限使用记录。","source":"@site/docs/system-debug-optimize/debugging-commands/hidumper-tool/hidumper-privacymanagerservice/hidumper-privacymanagerservice.md","sourceDirName":"system-debug-optimize/debugging-commands/hidumper-tool/hidumper-privacymanagerservice","slug":"/system-debug-optimize/debugging-commands/hidumper-tool/hidumper-privacymanagerservice/","permalink":"/harmonyos-docs-site/system-debug-optimize/debugging-commands/hidumper-tool/hidumper-privacymanagerservice/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"PrivacyManagerService","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/hidumper-privacymanagerservice","kit":"system/debug-optimize","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"hidumper","permalink":"/harmonyos-docs-site/system-debug-optimize/debugging-commands/hidumper-tool/hidumper/"},"next":{"title":"hitrace","permalink":"/harmonyos-docs-site/system-debug-optimize/debugging-commands/hitrace/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-debug-optimize/debugging-commands/hidumper-tool/hidumper-privacymanagerservice/hidumper-privacymanagerservice.md


const frontMatter = {
	title: 'PrivacyManagerService',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/hidumper-privacymanagerservice',
	kit: 'system/debug-optimize',
	last_updated: '2026-04-22'
};
const contentTitle = 'PrivacyManagerService';

const assets = {

};



const toc = [{
  "value": "环境准备",
  "id": "环境准备",
  "level": 2
}, {
  "value": "获取帮助信息",
  "id": "获取帮助信息",
  "level": 2
}, {
  "value": "获取敏感权限使用记录信息",
  "id": "获取敏感权限使用记录信息",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "privacymanagerservice",
        children: "PrivacyManagerService"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["PrivacyManagerService是访问控制基于", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-debug-optimize/debugging-commands/hidumper-tool/hidumper",
        children: "hidumper"
      }), "增强开发的命令行能力，可显示访问控制基础信息，获取敏感权限使用记录。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "环境准备",
      children: "环境准备"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["根据hidumper工具指导，完成", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-debug-optimize/debugging-commands/hidumper-tool/hidumper#%E7%8E%AF%E5%A2%83%E8%A6%81%E6%B1%82",
        children: "环境准备"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "获取帮助信息",
      children: "获取帮助信息"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果需要查看帮助信息，可以通过下列命令实现。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hidumper -s PrivacyManagerService -a '-h'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用样例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "-------------------------------[ability]-------------------------------\n\n\n----------------------------------PrivacyManagerService----------------------------------\nPrivacy Dump:\nUsage:\n       -h: command help\n       -t <TOKEN_ID>: according to specific token id dump permission used records\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "获取敏感权限使用记录信息",
      children: "获取敏感权限使用记录信息"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "支持通过应用进程的tokenid，查看敏感权限使用记录的信息，可以通过下列命令实现。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hidumper -s PrivacyManagerService -a '-t <tokenId>'\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["命令所需的tokenId可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-debug-optimize/debugging-commands/atm-tool#%E6%9F%A5%E8%AF%A2%E5%91%BD%E4%BB%A4",
        children: "atm-tool"
      }), "进行查询。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用样例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hidumper -s PrivacyManagerService -a '-t 536992218'\n\n-------------------------------[ability]-------------------------------\n\n\n----------------------------------PrivacyManagerService----------------------------------\nPrivacy Dump:\n{\n  \"permissionRecord\": [\n    {\n      \"bundleName\": \"com.ohos.camera\",\n      \"isRemote\": false,\n      \"permissionName\": \"ohos.permission.READ_IMAGEVIDEO\",\n      \"lastAccessTime\": 1508577149393,\n      \"lastAccessDuration\": 0,\n      \"accessCount\": 2\n    }\n  ]\n}\n"
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