"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["960152"], {
21708(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_core_file_kit_app_file_app_file_backup_restore_app_file_clone_app_file_clone_md_505_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-core-file-kit-app-file-app-file-backup-restore-app-file-clone-app-file-clone-md-505.json
var site_docs_core_file_kit_app_file_app_file_backup_restore_app_file_clone_app_file_clone_md_505_namespaceObject = JSON.parse('{"id":"core-file-kit/app-file/app-file-backup-restore/app-file-clone/app-file-clone","title":"应用克隆适配指导","description":"简介","source":"@site/docs/core-file-kit/app-file/app-file-backup-restore/app-file-clone/app-file-clone.md","sourceDirName":"core-file-kit/app-file/app-file-backup-restore/app-file-clone","slug":"/core-file-kit/app-file/app-file-backup-restore/app-file-clone/","permalink":"/harmonyos-docs-site/core-file-kit/app-file/app-file-backup-restore/app-file-clone/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"应用克隆适配指导","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/app-file-clone","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"应用接入数据备份恢复","permalink":"/harmonyos-docs-site/core-file-kit/app-file/app-file-backup-restore/app-file-backup-extension/"},"next":{"title":"应用数据迁移功能介绍","permalink":"/harmonyos-docs-site/core-file-kit/app-file/app-file-backup-restore/app-data-migration-guidelines/app-data-migration-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/core-file-kit/app-file/app-file-backup-restore/app-file-clone/app-file-clone.md


const frontMatter = {
	title: '应用克隆适配指导',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/app-file-clone',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '应用克隆适配指导';

const assets = {

};



const toc = [{
  "value": "简介",
  "id": "简介",
  "level": 2
}, {
  "value": "适配指导",
  "id": "适配指导",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    p: "p",
    strong: "strong",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "应用克隆适配指导",
        children: "应用克隆适配指导"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "简介",
      children: "简介"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["用户在日常换机过程中，需要将一台设备的数据备份并发送到另一台设备上进行恢复，以完成跨设备的数据迁移，此时需要使用克隆工具（\"数据克隆\"应用）。接入克隆工具时，应用需实现备份恢复接口", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/core-file-api/core-file-arkts/js-apis-application-backupextensionability/js-apis-application-backupextensionability#backupextensionability",
        children: "BackupExtensionAbility"
      }), "，在onBackup中实现数据备份，在onRestore中实现数据恢复。若应用未实现BackupExtensionAbility，克隆过程将仅迁移旧设备上的应用，而不迁移应用数据。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(664798)/* ["default"] */.A) + "",
        width: "485",
        height: "372"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "适配指导",
      children: "适配指导"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["API version 12开始，三方应用接入克隆只需要接入备份恢复能力即可，接入指导： ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.a, {
            href: "/core-file-kit/app-file/app-file-backup-restore/app-file-backup-extension",
            children: "应用接入数据备份恢复"
          })
        })
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
664798(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478265-040865806310aa6e1abc0feb0f26801b.png");

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