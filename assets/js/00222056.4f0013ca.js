"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["804361"], {
339559(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_project_ide_module_management_ide_ohpm_repo_ide_ohpm_repo_command_ide_ohpm_repo_command_data_migration_ide_ohpm_repo_import_pkgpermission_ide_ohpm_repo_import_pkgpermission_md_002_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-project-ide-module-management-ide-ohpm-repo-ide-ohpm-repo-command-ide-ohpm-repo-command-data-migration-ide-ohpm-repo-import-pkgpermission-ide-ohpm-repo-import-pkgpermission-md-002.json
var site_docs_ide_project_ide_module_management_ide_ohpm_repo_ide_ohpm_repo_command_ide_ohpm_repo_command_data_migration_ide_ohpm_repo_import_pkgpermission_ide_ohpm_repo_import_pkgpermission_md_002_namespaceObject = JSON.parse('{"id":"ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-repo-command/ide-ohpm-repo-command-data-migration/ide-ohpm-repo-import-pkgpermission/ide-ohpm-repo-import-pkgpermission","title":"ohpm-repo import_pkgPermission","description":"ohpm-repo 5.4.0版本开始，支持导入包权限数据。","source":"@site/docs/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-repo-command/ide-ohpm-repo-command-data-migration/ide-ohpm-repo-import-pkgpermission/ide-ohpm-repo-import-pkgpermission.md","sourceDirName":"ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-repo-command/ide-ohpm-repo-command-data-migration/ide-ohpm-repo-import-pkgpermission","slug":"/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-repo-command/ide-ohpm-repo-command-data-migration/ide-ohpm-repo-import-pkgpermission/","permalink":"/harmonyos-docs-site/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-repo-command/ide-ohpm-repo-command-data-migration/ide-ohpm-repo-import-pkgpermission/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"title":"ohpm-repo import_pkgPermission","sidebar_position":7,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-ohpm-repo-import-pkgpermission","kit":"devtools/setup","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"ohpm-repo export_pkgPermission","permalink":"/harmonyos-docs-site/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-repo-command/ide-ohpm-repo-command-data-migration/ide-ohpm-repo-export-pkgpermission/"},"next":{"title":"单点部署","permalink":"/harmonyos-docs-site/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-deploy-guide/ide-ohpm-deploy-single-instance/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-repo-command/ide-ohpm-repo-command-data-migration/ide-ohpm-repo-import-pkgpermission/ide-ohpm-repo-import-pkgpermission.md


const frontMatter = {
	title: 'ohpm-repo import_pkgPermission',
	sidebar_position: 7,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-ohpm-repo-import-pkgpermission',
	kit: 'devtools/setup',
	last_updated: '2026-04-24'
};
const contentTitle = 'ohpm-repo import_pkgPermission';

const assets = {

};



const toc = [{
  "value": "前提条件",
  "id": "前提条件",
  "level": 2
}, {
  "value": "命令格式",
  "id": "命令格式",
  "level": 2
}, {
  "value": "功能描述",
  "id": "功能描述",
  "level": 2
}, {
  "value": "参数",
  "id": "参数",
  "level": 2
}, {
  "value": "&lt;pkg_permission_list&gt;",
  "id": "pkg_permission_list",
  "level": 3
}, {
  "value": "选项",
  "id": "选项",
  "level": 2
}, {
  "value": "--mode",
  "id": "--mode",
  "level": 3
}, {
  "value": "示例",
  "id": "示例",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    li: "li",
    p: "p",
    pre: "pre",
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
        id: "ohpm-repo-import_pkgpermission",
        children: "ohpm-repo import_pkgPermission"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ohpm-repo 5.4.0版本开始，支持导入包权限数据。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "前提条件",
      children: "前提条件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["已成功执行 ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-repo-command/ide-ohpm-repo-command-data-migration/ide-ohpm-repo-export-userinfo",
        children: "export_userinfo 命令"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-repo-command/ide-ohpm-repo-command-data-migration/ide-ohpm-repo-import-userinfo",
        children: "import_userinfo 命令"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-repo-command/ide-ohpm-repo-command-data-migration/ide-ohpm-repo-batch-download",
        children: "batch_download 命令"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-repo-command/ide-ohpm-repo-command-data-migration/ide-ohpm-repo-batch-publish",
        children: "batch_publish 命令"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-repo-command/ide-ohpm-repo-command-data-migration/ide-ohpm-repo-export-pkgpermission",
        children: "export_pkgPermission 命令"
      }), "，确保每个包指定的包文件、用户和组织都存在。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "命令格式",
      children: "命令格式"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ohpm-repo import_pkgPermission <pkg_permission_list> [options]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "功能描述",
      children: "功能描述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据提供的记录着包权限数据的.json文件，向ohpm-repo导入包权限数据。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "参数",
      children: "参数"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pkg_permission_list",
      children: "<pkg_permission_list>"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "类型： String"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "必填参数"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在import_pkgPermission命令后面配置<pkg_permission_list>参数，指定执行", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-repo-command/ide-ohpm-repo-command-data-migration/ide-ohpm-repo-export-pkgpermission",
        children: "export_pkgPermission 命令"
      }), "导出的.json文件。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "选项",
      children: "选项"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "--mode",
      children: "--mode"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "类型：String"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "必填参数"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于指定包权限的导入模式，在import_pkgPermission命令后通过--mode <mode>格式配置，mode有三种不同模式：merge-origin、merge-target、override。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "merge-origin模式"
        })
      }), "：保留源数据的可见性配置，合并源数据与ohpm-repo的包权限（以ohpm-repo权限为主），取权限并集。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "源数据可见性"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "ohpm-repo可见性"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "最终可见性"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "最终包权限"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "授权可读"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "授权可读"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "授权可读"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "源数据与ohpm-repo的所有者、维护者、查看者权限并集"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "公开可读"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "公开可读"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "授权可读"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "公开可读"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "源数据与ohpm-repo的所有者、维护者权限并集"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "公开可读"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****merge-target 模式：****处理规则：保留ohpm-repo的可见性配置，合并源数据与ohpm-repo的包权限（以ohpm-repo权限为主），取权限并集。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "源数据可见性"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "ohpm-repo可见性"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "最终可见性"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "最终包权限"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "授权可读"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "授权可读"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "授权可读"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "源数据与ohpm-repo的所有者、维护者、查看者权限并集"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "公开可读"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "授权可读"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "公开可读"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "公开可读"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "源数据与ohpm-repo的所有者、维护者权限并集"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "公开可读"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "****override 模式：****删除ohpm-repo中对应包的所有包权限数据，完全使用源数据替代。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "源数据可见性"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "ohpm-repo可见性"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "最终可见性"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "最终包权限"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "授权可读"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "授权可读"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "授权可读"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "源数据中的所有者、维护者、查看者权限"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "公开可读"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "公开可读"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "授权可读"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "公开可读"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "源数据中的所有者、维护者权限"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "公开可读"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "--target-repo"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "默认值：无"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "类型： string"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-project/ide-module-management/ide-ohpm-repo/ide-ohpm-repo-command/ide-ohpm-repo-command-data-migration/ide-ohpm-repo-export-pkgpermission",
        children: "export_pkgPermission命令"
      }), "导出的json文件中仅包含一个仓库的包权限数据时，可在import_pkgPermission命令后面配置--target-repo <string>，用于指定待导入的仓库名称。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例",
      children: "示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["以", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "merge-origin"
                })
              })
            })
          }), "模式导入包权限"]
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ohpm-repo import_pkgPermission <pkg_permission_list> --mode merge-origin\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "结果示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "PS D:\\> ohpm-repo import_pkgPermission D:\\packagePermission_1758008466123.json --mode merge-origin\n...\n[2025-09-17T14:44:38.451] [INFO] default - > start importing package permissions to the \"ohpm\" repository.\n[2025-09-17T14:44:38.459] [INFO] default - import package permissions completed.\n"
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