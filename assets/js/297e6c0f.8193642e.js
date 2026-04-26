"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["477936"], {
674978(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_debug_optimize_debugging_commands_atm_tool_atm_tool_md_297_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-debug-optimize-debugging-commands-atm-tool-atm-tool-md-297.json
var site_docs_system_debug_optimize_debugging_commands_atm_tool_atm_tool_md_297_namespaceObject = JSON.parse('{"id":"system-debug-optimize/debugging-commands/atm-tool/atm-tool","title":"atm工具","description":"Access Token Manager (程序访问控制管理工具，简称atm工具)，是用于查询应用进程的权限、使用类型等信息的工具，为开发者提供了根据tokenid、包名、进程名等信息进行访问控制管理的能力。","source":"@site/docs/system-debug-optimize/debugging-commands/atm-tool/atm-tool.md","sourceDirName":"system-debug-optimize/debugging-commands/atm-tool","slug":"/system-debug-optimize/debugging-commands/atm-tool/","permalink":"/harmonyos-docs-site/system-debug-optimize/debugging-commands/atm-tool/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":13,"frontMatter":{"title":"atm工具","sidebar_position":13,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/atm-tool","kit":"system/debug-optimize","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"power-shell工具","permalink":"/harmonyos-docs-site/system-debug-optimize/debugging-commands/power-shell/"},"next":{"title":"network-cfg工具","permalink":"/harmonyos-docs-site/system-debug-optimize/debugging-commands/network-cfg/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-debug-optimize/debugging-commands/atm-tool/atm-tool.md


const frontMatter = {
	title: 'atm工具',
	sidebar_position: 13,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/atm-tool',
	kit: 'system/debug-optimize',
	last_updated: '2026-04-22'
};
const contentTitle = 'atm工具';

const assets = {

};



const toc = [{
  "value": "环境说明",
  "id": "环境说明",
  "level": 2
}, {
  "value": "atm工具命令列表",
  "id": "atm工具命令列表",
  "level": 2
}, {
  "value": "帮助命令",
  "id": "帮助命令",
  "level": 2
}, {
  "value": "查询命令",
  "id": "查询命令",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    "bundle-name": "bundle-name",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    p: "p",
    "permission-name": "permission-name",
    pre: "pre",
    "process-name": "process-name",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    "token-id": "token-id",
    tr: "tr",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, _component2 = _components["bundle-name"], _component0 = _components["permission-name"], _component3 = _components["process-name"], _component1 = _components["token-id"];
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "atm工具",
        children: "atm工具"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Access Token Manager (程序访问控制管理工具，简称atm工具)，是用于查询应用进程的权限、使用类型等信息的工具，为开发者提供了根据tokenid、包名、进程名等信息进行访问控制管理的能力。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "环境说明",
      children: "环境说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在使用本工具前，开发者需要先获取", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-debug-optimize/debugging-commands/hdc",
        children: "hdc工具"
      }), "，执行hdc shell。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "atm工具命令列表",
      children: "atm工具命令列表"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "命令"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "help"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "帮助命令，显示atm支持的命令信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dump"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询命令，用于查询访问控制相关数据信息。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "帮助命令",
      children: "帮助命令"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# 显示帮助信息\natm help\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "查询命令",
      children: "查询命令"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "atm dump [-h] [-t [-i <token-id>] [-b <bundle-name>] [-n <process-name>]] [-v [-i <token-id>] [-p <permission-name>]]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下表所列命令中，-t为必选参数，-i、-b、-n、-p为可选参数。对atm dump -t命令，-i、-b、-n参数只能单独使用。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "参数说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-d"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必选参数，查询系统中所有的权限定义。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["-d -p ", (0,jsx_runtime.jsx)(_component0, {})]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选参数，通过权限名，查询权限定义。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "帮助信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必选参数，查询系统中所有应用进程信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["-t -i ", (0,jsx_runtime.jsx)(_component1, {})]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["可选参数，通过应用进程的tokenid，查询该应用的基本信息以及对应的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/both-models/js-apis-abilityaccessctrl/js-apis-abilityaccessctrl#grantstatus",
              children: "权限信息"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["-t -b ", (0,jsx_runtime.jsx)(_component2, {})]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["可选参数，通过应用进程的包名bundle-name，查询该应用的基本信息以及对应的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/both-models/js-apis-abilityaccessctrl/js-apis-abilityaccessctrl#grantstatus",
              children: "权限信息"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["-t -n ", (0,jsx_runtime.jsx)(_component3, {})]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["可选参数，通过应用进程的进程名process-name，查询该应用的基本信息以及对应的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/both-models/js-apis-abilityaccessctrl/js-apis-abilityaccessctrl#grantstatus",
              children: "权限信息"
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#查询系统中所有的权限定义\natm dump -d\n\n#按权限名查询权限定义\natm dump -d -p *********\n# 执行结果\n# {\n#     \"permissionName\": \"ohos.permission.KERNEL_ATM_SELF_USE\",\n#     \"grantMode\": \"SYSTEM_GRANT\",\n#     \"availableLevel\": \"SYSTEM_CORE\",\n#     \"availableType\": \"SYSTEM\",\n#     \"distributedSceneEnable\": true,\n#     \"isKernelEffect\": true,\n#     \"hasValue\": true,\n# }\n\n#显示atm dump的帮助信息\natm dump -h\n\n#查询系统中所有应用进程的tokenid和包名\natm dump -t\n\n#按tokenid查询权限信息\natm dump -t -i *********\n# 执行结果\n# {\n#   \"tokenID\": 672078897,\n#   \"processName\": \"samgr\",\n#   \"apl\": 2,\n#   \"permStateList\": [\n#     {\n#       \"permissionName\": \"ohos.permission.DISTRIBUTED_DATASYNC\",\n#       \"grantStatus\": 0,\n#       \"grantFlag\": 4,\n#     }\n#   ]\n# }\n\n#按包名查询权限信息\natm dump -t -b ohos.telephony.resources\n# 执行结果\n# {\n#   \"tokenID\": 537280686,\n#   \"tokenAttr\": 1,\n#   \"ver\": 1,\n#   \"userId\": 100,\n#   \"bundleName\": \"ohos.telephony.resources\",\n#   \"instIndex\": 0,\n#   \"dlpType\": 0,\n#   \"isRemote\": false,\n#   \"isPermDialogForbidden\": false,\n#   \"permStateList\": [\n#     {\n#       \"permissionName\": \"ohos.permission.DISTRIBUTED_DATASYNC\",\n#       \"grantStatus\": 0,\n#       \"grantFlag\": 4,\n#     }\n#   ]\n# }\n\n#按进程名查询权限信息\natm dump -t -n *********\n"
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