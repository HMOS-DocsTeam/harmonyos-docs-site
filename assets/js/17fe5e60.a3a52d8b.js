"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["355729"], {
886187(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_access_control_app_permission_mgmt_faqs_permissions_debug_faqs_permissions_debug_md_17f_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-access-control-app-permission-mgmt-faqs-permissions-debug-faqs-permissions-debug-md-17f.json
var site_docs_system_security_access_control_app_permission_mgmt_faqs_permissions_debug_faqs_permissions_debug_md_17f_namespaceObject = JSON.parse('{"id":"system-security/access-control/app-permission-mgmt/faqs-permissions-debug/faqs-permissions-debug","title":"抓包/调试权限常见问题","description":"ohos.permission.kernel.NET\\\\_RAW权限使用说明","source":"@site/docs/system-security/access-control/app-permission-mgmt/faqs-permissions-debug/faqs-permissions-debug.md","sourceDirName":"system-security/access-control/app-permission-mgmt/faqs-permissions-debug","slug":"/system-security/access-control/app-permission-mgmt/faqs-permissions-debug/","permalink":"/harmonyos-docs-site/system-security/access-control/app-permission-mgmt/faqs-permissions-debug/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"抓包/调试权限常见问题","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/faqs-permissions-debug","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"应用权限组列表","permalink":"/harmonyos-docs-site/system-security/access-control/app-permission-mgmt/app-permission-group-list/"},"next":{"title":"安全控件概述","permalink":"/harmonyos-docs-site/system-security/access-control/security-components/security-component-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/access-control/app-permission-mgmt/faqs-permissions-debug/faqs-permissions-debug.md


const frontMatter = {
	title: '抓包/调试权限常见问题',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/faqs-permissions-debug',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '抓包/调试权限常见问题';

const assets = {

};



const toc = [{
  "value": "ohos.permission.kernel.NET_RAW权限使用说明",
  "id": "ohospermissionkernelnet_raw权限使用说明",
  "level": 2
}, {
  "value": "ohos.permission.kernel.DEBUGGER权限使用说明",
  "id": "ohospermissionkerneldebugger权限使用说明",
  "level": 2
}, {
  "value": "ohos.permission.kernel.ALLOW_DEBUG使用说明",
  "id": "ohospermissionkernelallow_debug使用说明",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "抓包调试权限常见问题",
        children: "抓包/调试权限常见问题"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ohospermissionkernelnet_raw权限使用说明",
      children: "ohos.permission.kernel.NET_RAW权限使用说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "约束与限制："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "仅支持在PC/2in1设备上申请使用。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在PC/2in1设备上，二进制程序可以申请ohos.permission.kernel.NET_RAW权限进行网络抓包，使用时需要sudo提权使权限生效。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用说明："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.host/OpenHarmonyToolkitsPlaza/tcpdump",
        children: "tcpdump工具"
      }), "为例，使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-debug-optimize/debugging-commands/binary-sign-tool",
        children: "二进制签名工具"
      }), "签名时在module.json文件中配置ohos.permission.kernel.NET_RAW权限。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n    \"requestPermissions\": [\n        {\n            \"name\": \"ohos.permission.kernel.NET_RAW\"\n        }\n    ]\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在hishell终端中使用sudo提权执行携带ohos.permission.kernel.NET_RAW权限的tcpdump，认证成功后可以进行下述操作："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "支持通过PF_PACKET协议族创建PACKET类型套接字，在数据链路层直接捕获原始网络帧。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "支持通过NETLINK_ROUTE和NETLINK_GENERIC类型的netlink套接字与内核通信，可以查询和管理网络接口。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# 示例\nsudo ./tcpdump\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ohospermissionkerneldebugger权限使用说明",
      children: "ohos.permission.kernel.DEBUGGER权限使用说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "约束与限制："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "仅支持在PC/2in1设备上申请使用。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "仅允许调试同UID进程。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在PC/2in1设备上，二进制程序或应用申请ohos.permission.kernel.DEBUGGER权限后，可作为调试方，调试与其具有相同UID的以下内容："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "自签名的二进制程序。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "调试证书签名的应用/二进制程序。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "由发布证书签名且具备 ohos.permission.kernel.ALLOW_DEBUG 权限的应用/二进制程序。"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用说明："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以", (0,jsx_runtime.jsx)(_components.a, {
        href: "/debugging-profiling/debug-lldb",
        children: "lldb高性能调试器"
      }), "为例，使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-debug-optimize/debugging-commands/binary-sign-tool",
        children: "二进制签名工具"
      }), "签名时在module.json文件中配置ohos.permission.kernel.DEBUGGER权限。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n    \"requestPermissions\": [\n        {\n            \"name\": \"ohos.permission.kernel.DEBUGGER\"\n        }\n    ]\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在hishell终端中，使用携带ohos.permission.kernel.DEBUGGER权限的lldb工具，以ATTACH模式附加到调试证书签名的debug_bin进行调试。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# 示例：\n# 确认UID一致\nUID            PID  PPID C STIME TTY          TIME CMD\n20020109     50262 32365 0 17:29:41 ?     00:00:00 lldb\n20020109     52219 50262 0 17:31:15 ?     00:00:00 lldb-server\n20020109     57631 13564 0 17:31:15 ?     00:00:00 debug_bin\n\n# 附加到目标进程\n(lldb) process attach --name debug_bin\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ohospermissionkernelallow_debug使用说明",
      children: "ohos.permission.kernel.ALLOW_DEBUG使用说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "约束与限制："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "仅支持在PC/2in1设备上申请使用。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在PC/2in1设备上，二进制程序或应用申请ohos.permission.kernel.ALLOW_DEBUG权限后，可作为被调试方，支持被同UID且具备ohos.permission.kernel.DEBUGGER权限的二进制程序或应用调试。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "此外，Deveco Studio在使用真机设备调试时，如果PC/2in1设备上的应用使用了release签名并且配置了ohos.permission.kernel.ALLOW_DEBUG权限，也支持被attach调试。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用说明："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以DevEco Studio真机设备调试PC应用为例，在应用的module.json5文件中配置ohos.permission.kernel.ALLOW_DEBUG权限。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n    \"requestPermissions\": [\n        {\n            \"name\": \"ohos.permission.kernel.ALLOW_DEBUG\"\n        }\n    ]\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在DecEco Studio调试器的进程列表中可以查看到携带ohos.permission.kernel.ALLOW_DEBUG权限的发布应用进程，选择目标进程后即可进行附加并调试，具体可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-debug-app",
        children: "应用调试"
      }), "。"]
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