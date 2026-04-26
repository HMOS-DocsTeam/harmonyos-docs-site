"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["753237"], {
520621(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_file_manager_service_kit_guide_filemanagerservice_getfileicon_filemanagerservice_getfileicon_md_6dc_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-file-manager-service-kit-guide-filemanagerservice-getfileicon-filemanagerservice-getfileicon-md-6dc.json
var site_docs_file_manager_service_kit_guide_filemanagerservice_getfileicon_filemanagerservice_getfileicon_md_6dc_namespaceObject = JSON.parse('{"id":"file-manager-service-kit-guide/filemanagerservice-getfileicon/filemanagerservice-getfileicon","title":"获取文件图标","description":"场景介绍","source":"@site/docs/file-manager-service-kit-guide/filemanagerservice-getfileicon/filemanagerservice-getfileicon.md","sourceDirName":"file-manager-service-kit-guide/filemanagerservice-getfileicon","slug":"/file-manager-service-kit-guide/filemanagerservice-getfileicon/","permalink":"/harmonyos-docs-site/file-manager-service-kit-guide/filemanagerservice-getfileicon/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"获取文件图标","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/filemanagerservice-getfileicon","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"删除文件到回收站","permalink":"/harmonyos-docs-site/file-manager-service-kit-guide/filemanagerservice-deletetotrash/"},"next":{"title":"Game Controller Kit简介","permalink":"/harmonyos-docs-site/game-controller-kit/game-controller-introduction/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/file-manager-service-kit-guide/filemanagerservice-getfileicon/filemanagerservice-getfileicon.md


const frontMatter = {
	title: '获取文件图标',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/filemanagerservice-getfileicon',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '获取文件图标';

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
  "value": "示例代码",
  "id": "示例代码",
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
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "获取文件图标",
        children: "获取文件图标"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据文件类型获取对应的文件图标。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
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
            children: ["function ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/file-manager-service-api/filemanagerservice-arkts/filemanagerservice-arkts-filemanagerservice/filemanagerservice-arkts-filemanagerservice#filemanagerservicegetfileiconsync",
              children: "getFileIconSync"
            }), "(fileType: string): string"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Resource"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["function ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/file-manager-service-api/filemanagerservice-arkts/filemanagerservice-arkts-filemanagerservice/filemanagerservice-arkts-filemanagerservice#filemanagerservicegetfileicon",
              children: "getFileIcon"
            }), "(fileType: string): Promise<string"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Resource>"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例代码",
      children: "示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1.导入文件管理服务模块及相关模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { fileManagerService } from '@kit.FileManagerServiceKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { uniformTypeDescriptor } from '@kit.ArkData';\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["2.申请权限。使用获取文件图标接口时，需要在module.json5中声明申请接口所需的权限：ohos.permission.GET_FILE_ICON。具体指导可见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions",
        children: "声明权限"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "3.获取文件图标"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct Index {\n  @State fileIcon: string | Resource = '';\n\n  private getFileIconByFileExtension(filenameExtension: string): void {\n    try {\n      let typeId: string = uniformTypeDescriptor.getUniformDataTypeByFilenameExtension(filenameExtension);\n      this.fileIcon = fileManagerService.getFileIconSync(typeId);\n    } catch (error) {\n      let err: BusinessError = error as BusinessError;\n      console.error('getFileIconByFileExtension failed with err: ' + JSON.stringify(err));\n    }\n  }\n\n  build() {\n    RelativeContainer() {\n      Column() {\n        Image(this.fileIcon)\n          .height(88)\n          .border({ width: 1, radius: 6 })\n        Button('Update FileIcon')\n          .onClick(() => {\n            // 以txt格式为例\n            this.getFileIconByFileExtension('.txt');\n          })\n      }\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n"
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