"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["453565"], {
271822(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_core_file_kit_app_file_app_file_backup_restore_app_data_migration_guidelines_app_data_migration_verification_e_2_e_verification_e_2_e_verification_md_f5d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-core-file-kit-app-file-app-file-backup-restore-app-data-migration-guidelines-app-data-migration-verification-e-2-e-verification-e-2-e-verification-md-f5d.json
var site_docs_core_file_kit_app_file_app_file_backup_restore_app_data_migration_guidelines_app_data_migration_verification_e_2_e_verification_e_2_e_verification_md_f5d_namespaceObject = JSON.parse('{"id":"core-file-kit/app-file/app-file-backup-restore/app-data-migration-guidelines/app-data-migration-verification/e2e-verification/e2e-verification","title":"端到端验证","description":"应用适配完成并上架到华为应用市场之后，开发者需要模拟终端用户将终端设备从HarmonyOS升级到HarmonyOS NEXT的场景，端到端验证应用数据迁移结果。","source":"@site/docs/core-file-kit/app-file/app-file-backup-restore/app-data-migration-guidelines/app-data-migration-verification/e2e-verification/e2e-verification.md","sourceDirName":"core-file-kit/app-file/app-file-backup-restore/app-data-migration-guidelines/app-data-migration-verification/e2e-verification","slug":"/core-file-kit/app-file/app-file-backup-restore/app-data-migration-guidelines/app-data-migration-verification/e2e-verification/","permalink":"/harmonyos-docs-site/core-file-kit/app-file/app-file-backup-restore/app-data-migration-guidelines/app-data-migration-verification/e2e-verification/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"端到端验证","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/e2e-verification","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"开发者自验证","permalink":"/harmonyos-docs-site/core-file-kit/app-file/app-file-backup-restore/app-data-migration-guidelines/app-data-migration-verification/self-verification/"},"next":{"title":"常见问题与异常处理","permalink":"/harmonyos-docs-site/core-file-kit/app-file/app-file-backup-restore/app-data-migration-guidelines/app-data-migration-faqs/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/core-file-kit/app-file/app-file-backup-restore/app-data-migration-guidelines/app-data-migration-verification/e2e-verification/e2e-verification.md


const frontMatter = {
	title: '端到端验证',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/e2e-verification',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '端到端验证';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    header: "header",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "端到端验证",
        children: "端到端验证"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用适配完成并", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/app/agc-help-releaseharmony-0000001933963166",
        children: "上架到华为应用市场"
      }), "之后，开发者需要模拟终端用户将终端设备从HarmonyOS升级到HarmonyOS NEXT的场景，端到端验证应用数据迁移结果。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["在应用适配完成并上架到华为应用市场之后，开发者可以端到端验证应用数据迁移结果。当前开发者持有的终端设备为HarmonyOS NEXT。开发者在验证升级前，需要将设备从HarmonyOS NEXT回退到HarmonyOS。系统回退的入口为：", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "设置"
          })
        }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "系统"
          })
        }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "开发者选项"
          })
        }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "系统回退"
          })
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["将终端设备回退到HarmonyOS后，需要预置APK应用的数据。在数据预置完成后，开发者需要将终端设备从HarmonyOS升级到HarmonyOS NEXT。系统更新的入口为：", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "设置"
          })
        }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "系统和更新"
          })
        }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "软件更新"
          })
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "终端设备成功从HarmonyOS升级到HarmonyOS NEXT，走过开机向导界面后，开始执行应用数据迁移。开发者请在应用数据迁移结束后，验证应用数据迁移的结果。"
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