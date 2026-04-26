"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["691787"], {
925772(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_share_kit_guide_system_share_share_target_application_share_sec_panel_share_sec_panel_md_7ea_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-share-kit-guide-system-share-share-target-application-share-sec-panel-share-sec-panel-md-7ea.json
var site_docs_share_kit_guide_system_share_share_target_application_share_sec_panel_share_sec_panel_md_7ea_namespaceObject = JSON.parse('{"id":"share-kit-guide/system-share/share-target-application/share-sec-panel/share-sec-panel","title":"分享详情页处理分享内容","description":"分享详情页能力基于UIExtensionAbility界面嵌入能力。目标应用可以通过ShareExtensionAbility构建接收分享内容的分享详情页，并将应用显示到分享面板应用推荐区内，通过分享详情页便捷的处理分享内容。开发时需要接入方实现ShareExtensionAbility并于module.json5中注册支持分享内容的能力。","source":"@site/docs/share-kit-guide/system-share/share-target-application/share-sec-panel/share-sec-panel.md","sourceDirName":"share-kit-guide/system-share/share-target-application/share-sec-panel","slug":"/share-kit-guide/system-share/share-target-application/share-sec-panel/","permalink":"/harmonyos-docs-site/share-kit-guide/system-share/share-target-application/share-sec-panel/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"分享详情页处理分享内容","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/share-sec-panel","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"应用内处理分享内容","permalink":"/harmonyos-docs-site/share-kit-guide/system-share/share-target-application/share-interface-description/"},"next":{"title":"分享详情页关闭分享面板","permalink":"/harmonyos-docs-site/share-kit-guide/system-share/share-target-application/share-sec-panel-back/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/share-kit-guide/system-share/share-target-application/share-sec-panel/share-sec-panel.md


const frontMatter = {
	title: '分享详情页处理分享内容',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/share-sec-panel',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '分享详情页处理分享内容';

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
        id: "分享详情页处理分享内容",
        children: "分享详情页处理分享内容"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["分享详情页能力基于", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiextensionability/js-apis-app-ability-uiextensionability",
        children: "UIExtensionAbility"
      }), "界面嵌入能力。目标应用可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-shareextensionability/js-apis-app-ability-shareextensionability",
        children: "ShareExtensionAbility"
      }), "构建接收分享内容的分享详情页，并将应用显示到分享面板应用推荐区内，通过分享详情页便捷的处理分享内容。开发时需要接入方实现", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-shareextensionability/js-apis-app-ability-shareextensionability",
        children: "ShareExtensionAbility"
      }), "并于module.json5中注册支持分享内容的能力。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过此方式注册的应用，点击时将跳转到分享详情页，也可返回分享面板。参见：", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/design-guides/share-0000001957076313#section27599419404",
        children: "分享详情页面"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入相关模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { Want, ShareExtensionAbility, UIExtensionContentSession } from '@kit.AbilityKit';\nimport { systemShare } from '@kit.ShareKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["目标应用可以使用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-shareextensionability/js-apis-app-ability-shareextensionability",
            children: "ShareExtensionAbility"
          }), "为基类构建分享能力Ability。在Ability被启动后，可以在其", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiextensionability/js-apis-app-ability-uiextensionability#onsessioncreate",
            children: "onSessionCreate"
          }), "回调中获取传入的want参数，将want参数通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/share-api/share-arkts/share-system-share/share-system-share#getshareddata",
            children: "getSharedData"
          }), "解析后得到分享数据。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "export default class TestShareAbility extends ShareExtensionAbility {\n  onSessionCreate(want: Want, session: UIExtensionContentSession) {\n    systemShare.getSharedData(want)\n      .then((data: systemShare.SharedData) => {\n        data.getRecords().forEach((record: systemShare.SharedRecord) => {\n          // 处理分享数据\n        });\n        session.loadContent('pages/Index');\n      })\n      .catch((error: BusinessError) => {\n        console.error(`Failed to getSharedData. Code: ${error.code}, message: ${error.message}`);\n        session.terminateSelf();\n      });\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["（可选）社交类应用可通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/intents-kit-guide/intents-introduction",
            children: "意图框架"
          }), "捐献联系人推荐信息。当用户在推荐区选择联系人进行内容分享时，社交应用注册的Ability可从接收的want数据中获取到联系人信息，直接分享数据到指定用户。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "export default class TestShareAbility extends ShareExtensionAbility {\n  onSessionCreate(want: Want, session: UIExtensionContentSession) {\n    systemShare.getContactInfo(want)\n      .then(async (contact: systemShare.ContactInfo) => {\n        // 处理联系人信息，可通过联系人类型（如：个人，群组等），联系人ID，进行指定用户分享。\n        // 获取分享数据\n        let data = await systemShare.getSharedData(want);\n      })\n      .catch((error: BusinessError) => {\n        console.error(`Failed to getContactInfo. Code: ${error.code}, message: ${error.message}`);\n        // 联系人不存在或数据获取异常\n        session.terminateSelf();\n      });\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["构建完分享能力Ability，需要在应用配置文件（src/main/module.json5）的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file#skills%E6%A0%87%E7%AD%BE",
            children: "skills"
          }), "配置中注册。配置actions为ohos.want.action.sendData，并且uris需穷举所有支持的数据类型。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "\"extensionAbilities\": [\n  {\n    \"name\": \"TestShareAbility\",\n    \"srcEntry\": \"./ets/abilities/TestShareAbility.ts\",\n    \"type\": \"share\", // 支持分享数据处理\n    \"description\": \"xxx\",\n    \"exported\": true,\n    \"label\": \"$string:xx_label\",\n    \"icon\": \"$media:icon\",\n    \"skills\": [\n      {\n        \"actions\": [\n          \"ohos.want.action.sendData\"\n        ],\n        // scheme为预留字段，在此处不生效，配置file仅为示例\n        // 目标应用在配置支持接收的数据类型时，需穷举支持的UTD，比如：支持全部图片类型，可声明：general.image\n        // maxFileSupported 对于归属指定类型的文件，标识一次支持接收的最大数量。默认为0，代表不支持此类文件的分享。\n        // 文件类型归属关系参考：@ohos.data.uniformTypeDescriptor (标准化数据定义与描述)\n        \"uris\": [\n          {\n            \"scheme\": \"file\",\n            \"utd\": \"general.text\",\n            \"maxFileSupported\": 1\n          },\n          {\n            \"scheme\": \"file\",\n            \"utd\": \"general.png\",\n            \"maxFileSupported\": 1\n          },\n          {\n            \"scheme\": \"file\",\n            \"utd\": \"general.jpeg\",\n            \"maxFileSupported\": 1\n          }\n        ]\n      }\n    ]\n  }\n]\n"
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