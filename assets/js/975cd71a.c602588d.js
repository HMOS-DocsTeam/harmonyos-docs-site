"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["698763"], {
1737(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_data_guard_kit_guide_dataguard_preparations_dataguard_preparations_md_975_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-data-guard-kit-guide-dataguard-preparations-dataguard-preparations-md-975.json
var site_docs_system_security_data_guard_kit_guide_dataguard_preparations_dataguard_preparations_md_975_namespaceObject = JSON.parse('{"id":"system-security/data-guard-kit-guide/dataguard-preparations/dataguard-preparations","title":"开发准备","description":"环境准备","source":"@site/docs/system-security/data-guard-kit-guide/dataguard-preparations/dataguard-preparations.md","sourceDirName":"system-security/data-guard-kit-guide/dataguard-preparations","slug":"/system-security/data-guard-kit-guide/dataguard-preparations/","permalink":"/harmonyos-docs-site/system-security/data-guard-kit-guide/dataguard-preparations/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"开发准备","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/dataguard-preparations","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Enterprise Data Guard Kit简介","permalink":"/harmonyos-docs-site/system-security/data-guard-kit-guide/dataguard-introduction/"},"next":{"title":"启动文件扫描任务","permalink":"/harmonyos-docs-site/system-security/data-guard-kit-guide/dataguard-fileguard-guide/fileguard-start-task/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/data-guard-kit-guide/dataguard-preparations/dataguard-preparations.md


const frontMatter = {
	title: '开发准备',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/dataguard-preparations',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '开发准备';

const assets = {

};



const toc = [{
  "value": "环境准备",
  "id": "环境准备",
  "level": 2
}, {
  "value": "申请资质",
  "id": "申请资质",
  "level": 2
}, {
  "value": "申请权限",
  "id": "申请权限",
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
        id: "开发准备",
        children: "开发准备"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "环境准备",
      children: "环境准备"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "HarmonyOS系统：HarmonyOS NEXT Developer Beta1及以上。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DevEco Studio版本：DevEco Studio NEXT Developer Beta1及以上。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "HarmonyOS SDK版本：HarmonyOS NEXT Developer Beta1 SDK及以上。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "申请资质",
      children: "申请资质"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在开发应用前，需要在AppGallery Connect中配置项目和应用信息。包括："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/start/registration-and-verification-0000001053628148",
          children: "注册账号"
        }), "和", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/start/edrna-0000001062678489",
          children: "企业开发者实名认证"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/app/agc-help-create-project-0000002242804048",
          children: "创建项目"
        }), "和", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/app/agc-help-create-app-0000002247955506",
          children: "创建HarmonyOS应用"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/app/agc-help-enterprise-mdm-cert-0000002283256801",
          children: "申请企业MDM应用发布证书"
        }), "和", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/app/agc-help-enterprise-mdm-profile-0000002248341094",
          children: "申请企业MDM应用发布Profile"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "申请权限",
      children: "申请权限"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在申请权限前，请确保符合", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/access-control/app-permission-mgmt/app-permission-mgmt-overview#%E6%9D%83%E9%99%90%E4%BD%BF%E7%94%A8%E7%9A%84%E5%9F%BA%E6%9C%AC%E5%8E%9F%E5%88%99",
        children: "权限使用的基本原则"
      }), "。然后在工程模块对应的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file",
        children: "module.json5配置文件"
      }), "中\"requestPermissions\"标签下申请实际所需的开发权限。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "应用能力"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "需要权限"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "文件分级管控"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ohos.permission.FILE_GUARD_MANAGER  ohos.permission.SET_FILE_GUARD_POLICY"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "企业恢复密钥"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ohos.permission.ENTERPRISE_RECOVERY_KEY"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "例如："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\"requestPermissions\": [\n  {\n    \"name\": \"ohos.permission.FILE_GUARD_MANAGER\"\n  },\n  {\n    \"name\": \"ohos.permission.SET_FILE_GUARD_POLICY\"\n  },\n  {\n    \"name\": \"ohos.permission.ENTERPRISE_RECOVERY_KEY\"\n  }\n]\n"
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