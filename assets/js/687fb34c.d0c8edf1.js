"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["442105"], {
313135(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_share_kit_guide_share_access_precautions_share_access_utd_share_access_utd_md_687_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-share-kit-guide-share-access-precautions-share-access-utd-share-access-utd-md-687.json
var site_docs_share_kit_guide_share_access_precautions_share_access_utd_share_access_utd_md_687_namespaceObject = JSON.parse('{"id":"share-kit-guide/share-access-precautions/share-access-utd/share-access-utd","title":"宿主应用发起分享需使用精细化的utd类型","description":"utd类型指分享数据的数据类型，精准的数据类型有助于帮助宿主应用匹配到精确的目标应用，让分享内容更好的传递。","source":"@site/docs/share-kit-guide/share-access-precautions/share-access-utd/share-access-utd.md","sourceDirName":"share-kit-guide/share-access-precautions/share-access-utd","slug":"/share-kit-guide/share-access-precautions/share-access-utd/","permalink":"/harmonyos-docs-site/share-kit-guide/share-access-precautions/share-access-utd/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"宿主应用发起分享需使用精细化的utd类型","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/share-access-utd","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Share Kit术语","permalink":"/harmonyos-docs-site/share-kit-guide/share-terminology/"},"next":{"title":"目标设备接收分享数据一步直达体验","permalink":"/harmonyos-docs-site/share-kit-guide/share-access-precautions/share-access-one-step/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/share-kit-guide/share-access-precautions/share-access-utd/share-access-utd.md


const frontMatter = {
	title: '宿主应用发起分享需使用精细化的utd类型',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/share-access-utd',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '宿主应用发起分享需使用精细化的utd类型';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    header: "header",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "宿主应用发起分享需使用精细化的utd类型",
        children: "宿主应用发起分享需使用精细化的utd类型"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "utd类型指分享数据的数据类型，精准的数据类型有助于帮助宿主应用匹配到精确的目标应用，让分享内容更好的传递。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当构造分享数据时，推荐宿主应用填写精准的utd类型，可通过以下两种方式获取："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["根据给定的文件后缀名和所归属的标准化数据类型查询标准化数据类型的ID。参见：", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-uniformtypedescriptor/js-apis-data-uniformtypedescriptor#uniformtypedescriptorgetuniformdatatypebyfilenameextension11",
            children: "uniformTypeDescriptor.getUniformDataTypeByFilenameExtension"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { common } from '@kit.AbilityKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { uniformTypeDescriptor as utd } from '@kit.ArkData';\nimport { systemShare } from '@kit.ShareKit';\n\ntry {\n  let utdTypeId = utd.getUniformDataTypeByFilenameExtension('.jpg', utd.UniformDataType.IMAGE);\n  if (utdTypeId) {\n    // 构造ShareData，需配置一条有效数据信息\n    let shareData: systemShare.SharedData = new systemShare.SharedData({\n      utd: utdTypeId,\n      uri: 'file://.../xxx.jpg'\n    });\n    // 构建ShareController\n    let controller: systemShare.ShareController = new systemShare.ShareController(shareData);\n    // 获取UIAbility上下文对象\n    let uiContext: UIContext = this.getUIContext();\n    let context: common.UIAbilityContext = uiContext.getHostContext() as common.UIAbilityContext;\n    // 进行分享面板显示\n    controller.show(context, {\n      previewMode: systemShare.SharePreviewMode.DEFAULT,\n      selectionMode: systemShare.SelectionMode.SINGLE\n    });\n  }\n} catch (e) {\n  let error: BusinessError = e as BusinessError;\n  console.error(`Failed to getUniformDataTypeByFilenameExtension. Code: ${error.code}, message: ${error.message} `);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["根据给定的MIME类型和所归属的标准化数据类型查询标准化数据类型的ID。参见：", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-uniformtypedescriptor/js-apis-data-uniformtypedescriptor#uniformtypedescriptorgetuniformdatatypebymimetype11",
            children: "uniformTypeDescriptor.getUniformDataTypeByMIMEType"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { common } from '@kit.AbilityKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { uniformTypeDescriptor as utd } from '@kit.ArkData';\nimport { systemShare } from '@kit.ShareKit';\n\ntry {\n  let utdTypeId = utd.getUniformDataTypeByMIMEType('image/jpeg', utd.UniformDataType.IMAGE);\n  if (utdTypeId) {\n    // 构造ShareData，需配置一条有效数据信息\n    let shareData: systemShare.SharedData = new systemShare.SharedData({\n      utd: utdTypeId,\n      uri: 'file://.../xxx.jpg'\n    });\n    // 构建ShareController\n    let controller: systemShare.ShareController = new systemShare.ShareController(shareData);\n    // 获取UIAbility上下文对象\n    let uiContext: UIContext = this.getUIContext();\n    let context: common.UIAbilityContext = uiContext.getHostContext() as common.UIAbilityContext;\n    // 进行分享面板显示\n    controller.show(context, {\n      previewMode: systemShare.SharePreviewMode.DEFAULT,\n      selectionMode: systemShare.SelectionMode.SINGLE\n    });\n  }\n} catch (e) {\n  let error: BusinessError = e as BusinessError;\n  console.error(`Failed to getUniformDataTypeByMIMEType. Code: ${error.code}, message: ${error.message} `);\n}\n"
          })
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