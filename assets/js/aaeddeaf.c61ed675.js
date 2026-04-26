"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["911667"], {
394707(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_share_kit_guide_system_share_share_map_creation_share_app_actions_share_app_actions_md_aae_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-share-kit-guide-system-share-share-map-creation-share-app-actions-share-app-actions-md-aae.json
var site_docs_share_kit_guide_system_share_share_map_creation_share_app_actions_share_app_actions_md_aae_namespaceObject = JSON.parse('{"id":"share-kit-guide/system-share/share-map-creation/share-app-actions/share-app-actions","title":"自定义配置操作区","description":"场景介绍","source":"@site/docs/share-kit-guide/system-share/share-map-creation/share-app-actions/share-app-actions.md","sourceDirName":"share-kit-guide/system-share/share-map-creation/share-app-actions","slug":"/share-kit-guide/system-share/share-map-creation/share-app-actions/","permalink":"/harmonyos-docs-site/share-kit-guide/system-share/share-map-creation/share-app-actions/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"自定义配置操作区","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/share-app-actions","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"配置目标应用名单（仅对企业应用开放）","permalink":"/harmonyos-docs-site/share-kit-guide/system-share/share-map-creation/share-app-sharing-mode/"},"next":{"title":"获取分享结果","permalink":"/harmonyos-docs-site/share-kit-guide/system-share/share-map-creation/share-share-completed/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/share-kit-guide/system-share/share-map-creation/share-app-actions/share-app-actions.md


const frontMatter = {
	title: '自定义配置操作区',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/share-app-actions',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '自定义配置操作区';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "自定义配置操作区",
        children: "自定义配置操作区"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "系统操作区提供了复制、保存、另存为、打印、复制到中转站等系统级快捷操作。宿主应用可以根据自己的业务体验需要判断是否给用户提供相关操作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "比如，分享的图片不需要被打印出来，本次分享将打印按钮从操作区移除。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入相关模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { common } from '@kit.AbilityKit';\nimport { fileUri } from '@kit.CoreFileKit';\nimport { systemShare } from '@kit.ShareKit';\nimport { uniformTypeDescriptor as utd } from '@kit.ArkData';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "构造分享数据，可添加多条分享记录。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 构造ShareData，需配置一条有效数据信息\nlet data: systemShare.SharedData = new systemShare.SharedData({\n  utd: utd.UniformDataType.PLAIN_TEXT,\n  content: 'Hello HarmonyOS'\n});\n// 通过addRecord方法可添加多条记录 通过设置selectionMode实现一条或批量分享\nlet uiContext: UIContext = this.getUIContext();\nlet contextFaker: Context = uiContext.getHostContext() as Context;\nlet filePath = contextFaker.filesDir + '/exampleImage.jpg'; // 仅为示例 请替换正确的文件路径\ndata.addRecord({\n  utd: utd.UniformDataType.PNG,\n  uri: fileUri.getUriFromPath(filePath)\n});\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["启动分享面板，并配置不显示打印快捷操作。如需屏蔽其他系统级快捷操作，请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/share-api/share-arkts/share-system-share/share-system-share#shareabilitytype",
            children: "ShareAbilityType"
          }), "介绍。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 构建ShareController\nlet controller: systemShare.ShareController = new systemShare.ShareController(data);\nlet context: common.UIAbilityContext = uiContext.getHostContext() as common.UIAbilityContext;\n// 注册分享面板关闭监听\ncontroller.on('dismiss', () => {\n  console.info('Share panel closed');\n  // 分享结束，可处理其他业务。\n});\n// 进行分享面板显示\ncontroller.show(context, {\n  previewMode: systemShare.SharePreviewMode.DETAIL,\n  selectionMode: systemShare.SelectionMode.SINGLE,\n  excludedAbilities: [systemShare.ShareAbilityType.PRINT]\n})\n"
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