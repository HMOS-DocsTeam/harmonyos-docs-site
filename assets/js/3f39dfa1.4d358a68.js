"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["587497"], {
533172(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_data_guard_kit_guide_dataguard_fileguard_guide_fileguard_update_policy_fileguard_update_policy_md_3f3_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-data-guard-kit-guide-dataguard-fileguard-guide-fileguard-update-policy-fileguard-update-policy-md-3f3.json
var site_docs_system_security_data_guard_kit_guide_dataguard_fileguard_guide_fileguard_update_policy_fileguard_update_policy_md_3f3_namespaceObject = JSON.parse('{"id":"system-security/data-guard-kit-guide/dataguard-fileguard-guide/fileguard-update-policy/fileguard-update-policy","title":"更新安全管控策略","description":"场景介绍","source":"@site/docs/system-security/data-guard-kit-guide/dataguard-fileguard-guide/fileguard-update-policy/fileguard-update-policy.md","sourceDirName":"system-security/data-guard-kit-guide/dataguard-fileguard-guide/fileguard-update-policy","slug":"/system-security/data-guard-kit-guide/dataguard-fileguard-guide/fileguard-update-policy/","permalink":"/harmonyos-docs-site/system-security/data-guard-kit-guide/dataguard-fileguard-guide/fileguard-update-policy/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"title":"更新安全管控策略","sidebar_position":7,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/fileguard-update-policy","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"删除指定路径下的文件","permalink":"/harmonyos-docs-site/system-security/data-guard-kit-guide/dataguard-fileguard-guide/fileguard-delete-file/"},"next":{"title":"设置KIA文件列表","permalink":"/harmonyos-docs-site/system-security/data-guard-kit-guide/dataguard-fileguard-guide/fileguard-kia-file-list/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/data-guard-kit-guide/dataguard-fileguard-guide/fileguard-update-policy/fileguard-update-policy.md


const frontMatter = {
	title: '更新安全管控策略',
	sidebar_position: 7,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/fileguard-update-policy',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '更新安全管控策略';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
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
        id: "更新安全管控策略",
        children: "更新安全管控策略"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Enterprise Data Guard Kit为应用提供下发管控策略的能力，相关策略会被分发到HarmonyOS系统中执行。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["详细接口说明可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-security-api/data-guard-api/data-guard-arkts/dataguard-fileguard/dataguard-fileguard",
        children: "接口文档"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/data-guard-api/data-guard-arkts/dataguard-fileguard/dataguard-fileguard#updatepolicy",
              children: "updatePolicy"
            }), "(policy: string, callback: AsyncCallback<void>): void"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用Callback方式更新安全管控策略。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/data-guard-api/data-guard-arkts/dataguard-fileguard/dataguard-fileguard#updatepolicy-1",
              children: "updatePolicy"
            }), "(policy: string): Promise<void>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用Promise方式更新安全管控策略。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { fileGuard } from '@kit.EnterpriseDataGuardKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["初始化", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/data-guard-api/data-guard-arkts/dataguard-fileguard/dataguard-fileguard#fileguard",
            children: "FileGuard"
          }), "对象guard，调用接口updatePolicy，更新安全管控策略。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "通过回调函数方式，更新安全管控策略。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "function updatePolicyCallback() {\n  let guard: fileGuard.FileGuard = new fileGuard.FileGuard();\n  let policy: string = '{' +\n    '\"net_intercept_toggle\":1,' +\n    '\"default_policy\":1,' +\n    '\"net_reject_cache_time\":30,' +\n    '\"boundary\":[\"10.0.0.0-10.255.255.255\",\"172.16.0.0-172.31.255.255\"],' +\n    '\"netsegment_trustlist\":[\"10.0.0.0-10.255.255.255\"],' +\n    '\"netsegment_blocklist\":[\"172.16.0.0-172.31.255.255\",\"192.168.0.0-192.168.255.255\"],' +\n    '\"netsegment_update_type\": 0,' +\n    '\"usb_intercept_toggle\":1,' +\n    '\"smb_client_intercept_toggle\":1,' +\n    '\"smb_server_intercept_toggle\":1,' +\n    '\"new_file_audit_toggle\":1,' +\n    '\"kia_variant_toggle\":1,' +\n    '\"audit_filter_toggle\":1,' +\n    '\"bluetooth_intercept_toggle\":[\"bt_socket\",\"bt_ble\",\"bt_opp\"],' +\n    '\"bluetooth_intercept_time\":30,' +\n    '\"nearlink_intercept_toggle\":[\"nearlink_ssap\",\"nearlink_dataTransfer\"],' +\n    '\"nearlink_intercept_time\":30,' +\n    '\"trust_app_list\":[\"ohos.app.hap.myapplication_BPch04bPYBrkJX8RAsmiGDbHFaG+BYvhkg4TK4fHQzJOL4VnoBCZU3boBBXGVEB+M/j0X2nnd7KVeyWuEORVxI2g=\"],' +\n    '\"Tag1\":{' +\n    '   \"tag\":\"sensitive\",' +\n    '   \"usb_intercept_toggle\":1,' +\n    '   \"net_intercept_toggle\":1,' +\n    '   \"boundary\":[\"10.0.0.0-10.255.255.255\"],' +\n    '   \"netsegment_trustlist\":[\"10.0.0.0-10.255.255.255\"],' +\n    '   \"netsegment_blocklist\":[\"192.168.0.0-192.168.255.255\"]' +\n    '  }' +\n    '}';\n  guard.updatePolicy(policy, (err: BusinessError) => {\n    if (err) {\n      console.error(`Failed to update policy. Code: ${err.code}, message: ${err.message}.`);\n    } else {\n      console.info(`Succeeded in updating policy.`);\n    }\n  });\n}\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "通过Promise方式，更新安全管控策略。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "function updatePolicyPromise() {\n  let guard: fileGuard.FileGuard = new fileGuard.FileGuard();\n  let policy: string = '{' +\n    '\"net_intercept_toggle\":1,' +\n    '\"default_policy\":1,' +\n    '\"net_reject_cache_time\":30,' +\n    '\"boundary\":[\"10.0.0.0-10.255.255.255\",\"172.16.0.0-172.31.255.255\"],' +\n    '\"netsegment_trustlist\":[\"10.0.0.0-10.255.255.255\"],' +\n    '\"netsegment_blocklist\":[\"172.16.0.0-172.31.255.255\",\"192.168.0.0-192.168.255.255\"],' +\n    '\"netsegment_update_type\": 0,' +\n    '\"usb_intercept_toggle\":1,' +\n    '\"smb_client_intercept_toggle\":1,' +\n    '\"smb_server_intercept_toggle\":1,' +\n    '\"new_file_audit_toggle\":1,' +\n    '\"kia_variant_toggle\":1,' +\n    '\"audit_filter_toggle\":1,' +\n    '\"bluetooth_intercept_toggle\":[\"bt_socket\",\"bt_ble\",\"bt_opp\"],' +\n    '\"bluetooth_intercept_time\":30,' +\n    '\"nearlink_intercept_toggle\":[\"nearlink_ssap\",\"nearlink_dataTransfer\"],' +\n    '\"nearlink_intercept_time\":30,' +\n    '\"trust_app_list\":[\"ohos.app.hap.myapplication_BPch04bPYBrkJX8RAsmiGDbHFaG+BYvhkg4TK4fHQzJOL4VnoBCZU3boBBXGVEB+M/j0X2nnd7KVeyWuEORVxI2g=\"],' +\n    '\"Tag1\":{' +\n    '   \"tag\":\"sensitive\",' +\n    '   \"usb_intercept_toggle\":1,' +\n    '   \"net_intercept_toggle\":1,' +\n    '   \"boundary\":[\"10.0.0.0-10.255.255.255\"],' +\n    '   \"netsegment_trustlist\":[\"10.0.0.0-10.255.255.255\"],' +\n    '   \"netsegment_blocklist\":[\"192.168.0.0-192.168.255.255\"]' +\n    '  }' +\n    '}';\n  guard.updatePolicy(policy).then(() => {\n    console.info(`Succeeded in updating policy.`);\n  }).catch((err: BusinessError) => {\n    console.error(`Failed to update policy. Code: ${err.code}, message: ${err.message}.`);\n  });\n}\n"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
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