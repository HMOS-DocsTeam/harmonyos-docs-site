"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["411066"], {
376167(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_data_guard_kit_guide_dataguard_fileguard_guide_fileguard_delete_file_fileguard_delete_file_md_6c5_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-data-guard-kit-guide-dataguard-fileguard-guide-fileguard-delete-file-fileguard-delete-file-md-6c5.json
var site_docs_system_security_data_guard_kit_guide_dataguard_fileguard_guide_fileguard_delete_file_fileguard_delete_file_md_6c5_namespaceObject = JSON.parse('{"id":"system-security/data-guard-kit-guide/dataguard-fileguard-guide/fileguard-delete-file/fileguard-delete-file","title":"删除指定路径下的文件","description":"场景介绍","source":"@site/docs/system-security/data-guard-kit-guide/dataguard-fileguard-guide/fileguard-delete-file/fileguard-delete-file.md","sourceDirName":"system-security/data-guard-kit-guide/dataguard-fileguard-guide/fileguard-delete-file","slug":"/system-security/data-guard-kit-guide/dataguard-fileguard-guide/fileguard-delete-file/","permalink":"/harmonyos-docs-site/system-security/data-guard-kit-guide/dataguard-fileguard-guide/fileguard-delete-file/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"删除指定路径下的文件","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/fileguard-delete-file","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"获取文件URI","permalink":"/harmonyos-docs-site/system-security/data-guard-kit-guide/dataguard-fileguard-guide/fileguard-get-file-url/"},"next":{"title":"更新安全管控策略","permalink":"/harmonyos-docs-site/system-security/data-guard-kit-guide/dataguard-fileguard-guide/fileguard-update-policy/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/data-guard-kit-guide/dataguard-fileguard-guide/fileguard-delete-file/fileguard-delete-file.md


const frontMatter = {
	title: '删除指定路径下的文件',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/fileguard-delete-file',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '删除指定路径下的文件';

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
        id: "删除指定路径下的文件",
        children: "删除指定路径下的文件"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Enterprise Data Guard Kit为应用提供对指定路径下文件的删除能力。"
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
              href: "/ref/system-security-api/data-guard-api/data-guard-arkts/dataguard-fileguard/dataguard-fileguard#deletefile",
              children: "deleteFile"
            }), "(path: string, callback: AsyncCallback<void>): void"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用Callback方式删除指定路径下的文件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/data-guard-api/data-guard-arkts/dataguard-fileguard/dataguard-fileguard#deletefile-1",
              children: "deleteFile"
            }), "(path: string): Promise<void>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用Promise方式删除指定路径下的文件。"
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
          }), "对象guard，调用接口deleteFile，删除扫描范围内的文件。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "通过回调函数方式，删除扫描范围内的文件。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "function deleteFileCallback() {\n  let guard: fileGuard.FileGuard = new fileGuard.FileGuard();\n  let path: string = '/data/service/el2/{account_id}/hmdfs/account/files/Docs/Documents/test.txt';\n  guard.deleteFile(path, (err: BusinessError) => {\n    if (err) {\n      console.error(`Failed to delete file. Code: ${err.code}, message: ${err.message}.`);\n    } else {\n      console.info(`Succeeded in deleting file.`);\n    }\n  });\n}\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "通过Promise方式，删除扫描范围内的文件。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "function deleteFilePromise() {\n  let guard: fileGuard.FileGuard = new fileGuard.FileGuard();\n  let path: string = '/data/service/el2/{account_id}/hmdfs/account/files/Docs/Documents/test.txt';\n  guard.deleteFile(path).then(() => {\n    console.info(`Succeeded in deleting file.`);\n  }).catch((err: BusinessError) => {\n    console.error(`Failed to delete file. Code: ${err.code}, message: ${err.message}.`);\n  });\n}\n"
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