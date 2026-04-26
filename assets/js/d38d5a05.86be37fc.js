"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["935316"], {
383899(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_share_kit_guide_knock_share_knock_share_pc_phones_knock_share_pc_phones_sandbox_knock_share_pc_phones_sandbox_md_d38_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-share-kit-guide-knock-share-knock-share-pc-phones-knock-share-pc-phones-sandbox-knock-share-pc-phones-sandbox-md-d38.json
var site_docs_share_kit_guide_knock_share_knock_share_pc_phones_knock_share_pc_phones_sandbox_knock_share_pc_phones_sandbox_md_d38_namespaceObject = JSON.parse('{"id":"share-kit-guide/knock-share/knock-share-pc-phones/knock-share-pc-phones-sandbox/knock-share-pc-phones-sandbox","title":"分享内容直达应用界面","description":"从6.0.0(20)版本开始，沙箱接收能力支持PC/2in1设备；从6.1.0(23)版本开始，新增支持Tablet设备。","source":"@site/docs/share-kit-guide/knock-share/knock-share-pc-phones/knock-share-pc-phones-sandbox/knock-share-pc-phones-sandbox.md","sourceDirName":"share-kit-guide/knock-share/knock-share-pc-phones/knock-share-pc-phones-sandbox","slug":"/share-kit-guide/knock-share/knock-share-pc-phones/knock-share-pc-phones-sandbox/","permalink":"/harmonyos-docs-site/share-kit-guide/knock-share/knock-share-pc-phones/knock-share-pc-phones-sandbox/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"分享内容直达应用界面","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/knock-share-pc-phones-sandbox","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"概述","permalink":"/harmonyos-docs-site/share-kit-guide/knock-share/knock-share-pc-phones/knock-share-pc-phones-overview/"},"next":{"title":"手机与PC/2in1间相互分享","permalink":"/harmonyos-docs-site/share-kit-guide/knock-share/knock-share-pc-phones/knock-share-pc-phones-mutually/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/share-kit-guide/knock-share/knock-share-pc-phones/knock-share-pc-phones-sandbox/knock-share-pc-phones-sandbox.md


const frontMatter = {
	title: '分享内容直达应用界面',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/knock-share-pc-phones-sandbox',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '分享内容直达应用界面';

const assets = {

};



const toc = [{
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}, {
  "value": "拒绝本次沙箱接收",
  "id": "拒绝本次沙箱接收",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "分享内容直达应用界面",
        children: "分享内容直达应用界面"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从6.0.0(20)版本开始，沙箱接收能力支持PC/2in1设备；从6.1.0(23)版本开始，新增支持Tablet设备。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "PC/2in1、Tablet设备创新交互方案：支持手机轻贴屏幕即可将单/多文件快速传输至PC/2in1或Tablet设备应用沙箱，传输完成后通知目标应用接收文件列表，实现无缝预览与编辑。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "沙箱接收仅支持文件类型的数据，应用需指定支持接收的文件类型和最大数量。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["若类型不匹配，则跳过已注册的沙箱接口能力，采用华为分享默认逻辑接收文件数据。参考：", (0,jsx_runtime.jsx)(_components.a, {
          href: "/share-kit-guide/share-access-precautions/share-access-one-step",
          children: "目标设备接收分享数据一步直达体验"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "若数量不匹配，则通过系统弹窗提示用户异常。"
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
            children: "import { uniformTypeDescriptor as utd } from '@kit.ArkData';\nimport { systemShare, harmonyShare } from '@kit.ShareKit';\nimport { common } from '@kit.AbilityKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "进入可接收数据的窗口，注册沙箱接收事件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "aboutToAppear(): void {\n  let capabilityRegistry: harmonyShare.RecvCapabilityRegistry = {\n    windowId: 999, // 此值仅为示例 实际使用时请替换正确的windowId\n    capabilities: [{ // 设置接收端支持的数据类型及数量\n      utd: utd.UniformDataType.IMAGE,\n      maxSupportedCount: 1,\n    }]\n  }\n  // 注册沙箱接收'dataReceive'监听事件\n  harmonyShare.on('dataReceive', capabilityRegistry, (receivableTarget: harmonyShare.ReceivableTarget) => {\n    let uiContext: UIContext = this.getUIContext();\n    let context = uiContext.getHostContext() as common.UIAbilityContext;\n    receivableTarget.receive(context.filesDir, { // 此路径仅为示例 使用时请替换实际路径\n      onDataReceived: (sharedData: systemShare.SharedData) => {\n        let sharedRecords = sharedData.getRecords();\n        sharedRecords.forEach((record: systemShare.SharedRecord) => {\n          // 处理分享数据\n        });\n      },\n      onResult(resultCode: harmonyShare.ShareResultCode) {\n        if (resultCode === harmonyShare.ShareResultCode.SHARE_SUCCESS) {\n          // To do things.\n        }\n      }\n    });\n  });\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "关闭可接收数据的窗口，解除沙箱接收事件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "aboutToDisappear(): void {\n  let capabilityRegistry: harmonyShare.RecvCapabilityRegistry = {\n    windowId: 999, // 此值仅为示例 实际使用时请替换正确的windowId\n    capabilities: [{\n      utd: utd.UniformDataType.IMAGE,\n      maxSupportedCount: 1,\n    }]\n  }\n  // 解除沙箱接收'dataReceive'监听事件\n  harmonyShare.off('dataReceive', capabilityRegistry);\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "拒绝本次沙箱接收",
      children: "拒绝本次沙箱接收"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当本次沙箱接收回调触发时，如果应用因为业务实现需要拒绝本次接收时，可使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/share-api/share-arkts/share-harmony-share/share-harmony-share#reject-1",
        children: "ReceivableTarget.reject()"
      }), "方法拒绝本次接收。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { uniformTypeDescriptor as utd } from '@kit.ArkData';\nimport { harmonyShare } from '@kit.ShareKit';\n\n@Component\nexport default struct Index {\n  aboutToAppear(): void {\n    let capabilityRegistry: harmonyShare.RecvCapabilityRegistry = {\n      windowId: 999, // 此值仅为示例 实际使用时请替换正确的windowId\n      capabilities: [{\n        utd: utd.UniformDataType.IMAGE,\n        maxSupportedCount: 1,\n      }]\n    }\n    // 注册沙箱接收'dataReceive'监听事件\n    harmonyShare.on('dataReceive', capabilityRegistry, (receivableTarget: harmonyShare.ReceivableTarget) => {\n      receivableTarget.reject(harmonyShare.ReceivableErrorCode.NO_RECEIVABLE_ERROR);\n    });\n  }\n\n  aboutToDisappear(): void {\n    let capabilityRegistry: harmonyShare.RecvCapabilityRegistry = {\n      windowId: 999, // 此值仅为示例 实际使用时请替换正确的windowId\n      capabilities: [{\n        utd: utd.UniformDataType.IMAGE,\n        maxSupportedCount: 1,\n      }]\n    }\n    // 解除沙箱接收'dataReceive'监听事件\n    harmonyShare.off('dataReceive', capabilityRegistry);\n  }\n\n  build() {\n  }\n}\n"
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