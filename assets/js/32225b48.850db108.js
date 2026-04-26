"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["402654"], {
496790(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_share_kit_guide_system_share_share_service_scenarios_share_utd_text_share_utd_text_md_322_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-share-kit-guide-system-share-share-service-scenarios-share-utd-text-share-utd-text-md-322.json
var site_docs_share_kit_guide_system_share_share_service_scenarios_share_utd_text_share_utd_text_md_322_namespaceObject = JSON.parse('{"id":"share-kit-guide/system-share/share-service-scenarios/share-utd-text/share-utd-text","title":"分享文本","description":"纯文本类型分享支持将一段文字分享到目标设备/目标应用。","source":"@site/docs/share-kit-guide/system-share/share-service-scenarios/share-utd-text/share-utd-text.md","sourceDirName":"share-kit-guide/system-share/share-service-scenarios/share-utd-text","slug":"/share-kit-guide/system-share/share-service-scenarios/share-utd-text/","permalink":"/harmonyos-docs-site/share-kit-guide/system-share/share-service-scenarios/share-utd-text/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"分享文本","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/share-utd-text","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"分享视频","permalink":"/harmonyos-docs-site/share-kit-guide/system-share/share-service-scenarios/share-utd-video/"},"next":{"title":"概述","permalink":"/harmonyos-docs-site/share-kit-guide/knock-share/knock-share-between-phones/knock-share-between-phones-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/share-kit-guide/system-share/share-service-scenarios/share-utd-text/share-utd-text.md


const frontMatter = {
	title: '分享文本',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/share-utd-text',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '分享文本';

const assets = {

};



const toc = [{
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
    img: "img",
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
        id: "分享文本",
        children: "分享文本"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "纯文本类型分享支持将一段文字分享到目标设备/目标应用。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "目标设备接收时，文本会转化为.txt文件保存在文件管理中。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "目标应用接收时，可便捷地处理文本内容。例如：将文字分享给备忘录，可新增一条备忘录内容。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(525850)/* ["default"] */.A) + "",
            width: "328",
            height: "760"
          })
        }), "\n"]
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
            children: "import { systemShare } from '@kit.ShareKit';\nimport { uniformTypeDescriptor as utd } from '@kit.ArkData';\nimport { common } from '@kit.AbilityKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "构造分享数据。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 构造ShareData，需配置一条有效数据信息\nlet shareData: systemShare.SharedData = new systemShare.SharedData({\n  utd: utd.UniformDataType.TEXT,\n  content: '这是一段文本内容',\n  title: '文本内容', // 不传title字段时,显示content\n  description: '文本描述',\n  // thumbnail: new Uint8Array() // 推荐传入适合的缩略图 不传则显示默认text图标\n});\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "额外增加一条数据。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "shareData.addRecord({\n  utd: utd.UniformDataType.TEXT,\n  content: '这是一段文本内容',\n  title: '文本内容', // 不传title字段时,显示content\n  description: '文本描述',\n});\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "启动分享面板。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 进行分享面板显示\nlet controller: systemShare.ShareController = new systemShare.ShareController(shareData);\nlet uiContext: UIContext = this.getUIContext();\nlet context: common.UIAbilityContext = uiContext.getHostContext() as common.UIAbilityContext;\ncontroller.show(context, {\n  selectionMode: systemShare.SelectionMode.SINGLE,\n  previewMode: systemShare.SharePreviewMode.DETAIL,\n}).then(() => {\n  console.info('ShareController show success.');\n}).catch((error: BusinessError) => {\n  console.error(`ShareController show error. code: ${error.code}, message: ${error.message}`);\n});\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["完整示例代码请参见：", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://gitcode.com/harmonyos_samples/share-kit_-sample-code_-clientdemo_-arkts/blob/master/entry/src/main/ets/scenario/TextScenario.ets",
            children: "samplecode-分享文本"
          }), "。"]
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
525850(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439227-25f3da79598c32f404c92fec8e607721.png");

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