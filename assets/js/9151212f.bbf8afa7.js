"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["742453"], {
697855(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_share_kit_guide_gestures_share_gestures_share_scenes_gestures_share_scenes_md_915_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-share-kit-guide-gestures-share-gestures-share-scenes-gestures-share-scenes-md-915.json
var site_docs_share_kit_guide_gestures_share_gestures_share_scenes_gestures_share_scenes_md_915_namespaceObject = JSON.parse('{"id":"share-kit-guide/gestures-share/gestures-share-scenes/gestures-share-scenes","title":"分享App Linking直达应用","description":"提供如何通过隔空传送分享实现直达应用，应用需接入App Linking以确保端到端完整的体验。参考：使用App Linking实现应用间跳转。","source":"@site/docs/share-kit-guide/gestures-share/gestures-share-scenes/gestures-share-scenes.md","sourceDirName":"share-kit-guide/gestures-share/gestures-share-scenes","slug":"/share-kit-guide/gestures-share/gestures-share-scenes/","permalink":"/harmonyos-docs-site/share-kit-guide/gestures-share/gestures-share-scenes/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"分享App Linking直达应用","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/gestures-share-scenes","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"可信任设备间传输","permalink":"/harmonyos-docs-site/share-kit-guide/gestures-share/gestures-share-trust/"},"next":{"title":"拉起系统分享框失败","permalink":"/harmonyos-docs-site/share-kit-guide/share-faq/share-faq-1/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/share-kit-guide/gestures-share/gestures-share-scenes/gestures-share-scenes.md


const frontMatter = {
	title: '分享App Linking直达应用',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/gestures-share-scenes',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '分享App Linking直达应用';

const assets = {

};



const toc = [{
  "value": "注意事项",
  "id": "注意事项",
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
    strong: "strong",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "分享app-linking直达应用",
        children: "分享App Linking直达应用"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["提供如何通过隔空传送分享实现直达应用，应用需接入App Linking以确保端到端完整的体验。参考：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ability-kit/stage-model-development/inter-app-redirection/directional-redirection/app-linking-startup",
        children: "使用App Linking实现应用间跳转"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "注意事项",
      children: "注意事项"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["当进入可分享页面时，使用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/share-api/share-arkts/share-harmony-share/share-harmony-share#ongesturesshare",
          children: "harmonyShare.on('gesturesShare')"
        }), "方法注册隔空传送监听事件。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["当离开可分享页面（包括", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "应用退至后台"
          })
        }), "等场景）时，使用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/share-api/share-arkts/share-harmony-share/share-harmony-share#offgesturesshare",
          children: "harmonyShare.off('gesturesShare')"
        }), "方法取消隔空传送监听事件。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入相关模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { uniformTypeDescriptor as utd } from '@kit.ArkData';\nimport { systemShare, harmonyShare } from '@kit.ShareKit';\nimport { fileUri } from '@kit.CoreFileKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["定义隔空传送分享事件监听/取消监听方法（收到隔空传送分享事件回调后，建议3秒内调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/share-api/share-arkts/share-harmony-share/share-harmony-share#share",
            children: "sharableTarget.share()"
          }), "方法发起分享，否则可能导致超时失败）。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "private immersiveCallback = (sharableTarget: harmonyShare.SharableTarget) => {\n  let uiContext: UIContext = this.getUIContext();\n  let contextFaker: Context = uiContext.getHostContext() as Context;\n  let filePath = contextFaker.filesDir + '/exampleKnock1.jpg'; // 仅为示例 请替换正确的文件路径\n  let shareData: systemShare.SharedData = new systemShare.SharedData({\n    utd: utd.UniformDataType.HYPERLINK,\n    content: 'https://sharekitdemo.drcn.agconnect.link/ZB3p',\n    thumbnailUri: fileUri.getUriFromPath(filePath),\n    title: '隔空传送分享卡片标题',\n    description: '隔空传送分享卡片描述'\n  });\n  sharableTarget.share(shareData);\n}\n\nprivate immersiveListening() {\n  harmonyShare.on('gesturesShare', this.immersiveCallback);\n}\n\nprivate immersiveDisablingListening() {\n  harmonyShare.off('gesturesShare', this.immersiveCallback);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["进入可分享页面时，注册隔空传送分享监听事件；离开可分享页面（包括", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "应用退至后台"
            })
          }), "等场景）时，取消隔空传送分享监听事件。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// Entry Component 代码片段\nonPageHide(): void {\n  let uiContext: UIContext = this.getUIContext();\n  let context: Context = uiContext.getHostContext() as Context;\n  context.eventHub.emit('onBackGround');\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "aboutToAppear(): void {\n  this.immersiveListening();\n  let uiContext: UIContext = this.getUIContext();\n  let context: Context = uiContext.getHostContext() as Context;\n  context.eventHub.on('onBackGround', this.onBackGround);\n}\n\naboutToDisappear(): void {\n  this.immersiveDisablingListening();\n  let uiContext: UIContext = this.getUIContext();\n  let context: Context = uiContext.getHostContext() as Context;\n  context.eventHub.off('onBackGround', this.onBackGround);\n}\n\nprivate onBackGround = () => {\n  this.immersiveDisablingListening();\n}\n"
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