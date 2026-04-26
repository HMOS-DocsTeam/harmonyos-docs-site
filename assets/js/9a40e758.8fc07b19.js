"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["13995"], {
490548(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_share_kit_guide_knock_share_knock_share_between_phones_knock_share_between_phones_group_knock_share_between_phones_group_md_9a4_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-share-kit-guide-knock-share-knock-share-between-phones-knock-share-between-phones-group-knock-share-between-phones-group-md-9a4.json
var site_docs_share_kit_guide_knock_share_knock_share_between_phones_knock_share_between_phones_group_knock_share_between_phones_group_md_9a4_namespaceObject = JSON.parse('{"id":"share-kit-guide/knock-share/knock-share-between-phones/knock-share-between-phones-group/knock-share-between-phones-group","title":"邀请组队","description":"注册碰一碰事件","source":"@site/docs/share-kit-guide/knock-share/knock-share-between-phones/knock-share-between-phones-group/knock-share-between-phones-group.md","sourceDirName":"share-kit-guide/knock-share/knock-share-between-phones/knock-share-between-phones-group","slug":"/share-kit-guide/knock-share/knock-share-between-phones/knock-share-between-phones-group/","permalink":"/harmonyos-docs-site/share-kit-guide/knock-share/knock-share-between-phones/knock-share-between-phones-group/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"邀请组队","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/knock-share-between-phones-group","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"内容分享","permalink":"/harmonyos-docs-site/share-kit-guide/knock-share/knock-share-between-phones/knock-share-between-phones-content/"},"next":{"title":"概述","permalink":"/harmonyos-docs-site/share-kit-guide/knock-share/knock-share-pc-phones/knock-share-pc-phones-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/share-kit-guide/knock-share/knock-share-between-phones/knock-share-between-phones-group/knock-share-between-phones-group.md


const frontMatter = {
	title: '邀请组队',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/knock-share-between-phones-group',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '邀请组队';

const assets = {

};



const toc = [{
  "value": "注册碰一碰事件",
  "id": "注册碰一碰事件",
  "level": 2
}, {
  "value": "注册单向分享能力",
  "id": "注册单向分享能力",
  "level": 2
}, {
  "value": "设置组队邀请预览",
  "id": "设置组队邀请预览",
  "level": 2
}, {
  "value": "处理组队链接",
  "id": "处理组队链接",
  "level": 2
}, {
  "value": "异常场景终止分享",
  "id": "异常场景终止分享",
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
    p: "p",
    pre: "pre",
    strong: "strong",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "邀请组队",
        children: "邀请组队"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "注册碰一碰事件",
      children: "注册碰一碰事件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在组队房间邀请界面注册碰一碰事件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1"
        })
      }), " 横屏应用示例"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(909618)/* ["default"] */.A) + "",
        width: "763",
        height: "352"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图2"
        })
      }), " 竖屏应用示例"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(137650)/* ["default"] */.A) + "",
        width: "363",
        height: "798"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "注册单向分享能力",
      children: "注册单向分享能力"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过碰一碰分享邀请好友加入组队房间，若双方都同时在组队房间内互相邀请，无法相互加入对方的组队房间。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["针对以上场景，Share Kit提供单向仅发送能力。参考：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/share-api/share-arkts/share-harmony-share/share-harmony-share#sendcapabilityregistry",
        children: "SendCapabilityRegistry"
      }), "的sendOnly属性。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "若碰一碰的双方都设置单向仅发送，则终止本次分享并提示用户\"请任意一方退出当前应用后再试\"；反之，均可分享成功。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { uniformTypeDescriptor as utd } from '@kit.ArkData';\nimport { systemShare, harmonyShare } from '@kit.ShareKit';\nimport { fileUri } from '@kit.CoreFileKit';\n\n@Component\nexport default struct Index {\n  aboutToAppear(): void {\n    let capabilityRegistry: harmonyShare.SendCapabilityRegistry = {\n      windowId: 999, // 此值仅为示例 实际使用时请替换正确的windowId\n      sendOnly: true, // 声明仅支持单向发送 若对端也同样声明仅支持单向发送 则双向分享时会失败\n    }\n    harmonyShare.on('knockShare', capabilityRegistry, (sharableTarget: harmonyShare.SharableTarget) => {\n      let uiContext: UIContext = this.getUIContext();\n      let contextFaker: Context = uiContext.getHostContext() as Context;\n      let filePath = contextFaker.filesDir + '/exampleKnock1.jpg'; // 仅为示例 请替换正确的文件路径\n      let shareData: systemShare.SharedData = new systemShare.SharedData({\n        utd: utd.UniformDataType.HYPERLINK,\n        content: 'https://sharekitdemo.drcn.agconnect.link/ZB3p',\n        // 根据title,description,thumbnailUri会生成不同的卡片模板。\n        thumbnailUri: fileUri.getUriFromPath(filePath),\n        title: '碰一碰分享卡片标题',\n        description: '碰一碰分享卡片描述'\n      });\n      sharableTarget.share(shareData);\n    });\n  }\n\n  aboutToDisappear(): void {\n    let capabilityRegistry: harmonyShare.SendCapabilityRegistry = {\n      windowId: 999, // 此值仅为示例 实际使用时请替换正确的windowId\n    }\n    // 解除碰一碰分享'knockShare'监听事件\n    harmonyShare.off('knockShare', capabilityRegistry);\n  }\n\n  build() {\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "设置组队邀请预览",
      children: "设置组队邀请预览"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["预览图设置参考：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/share-kit-guide/knock-share/knock-share-between-phones/knock-share-between-phones-content#%E8%AE%BE%E7%BD%AE%E5%88%86%E4%BA%AB%E9%A2%84%E8%A7%88",
        children: "设置分享预览"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "处理组队链接",
      children: "处理组队链接"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当目标应用被分享拉起时，可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability#oncreate",
        children: "onCreate"
      }), "或", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability#onnewwant",
        children: "onNewWant"
      }), "回调中获取传入的want参数。其中want.uri字段为邀请组队的链接，通过链接上携带的参数信息，处理组队邀请的业务逻辑。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';\nimport { window } from '@kit.ArkUI';\n\nexport default class EntryAbility extends UIAbility {\n  async onWindowStageCreate(windowStage: window.WindowStage): Promise<void> {\n    try {\n      windowStage.loadContent('pages/Index');\n    } catch (error) {\n      console.error(`onWindowStageCreate error. Code: ${error?.code}, message: ${error?.message}`);\n    }\n  }\n\n  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {\n    console.info('EntryAbility onCreate invoked. uri: ', want.uri);\n    // to do things.\n  }\n\n  onNewWant(want: Want, launchParam: AbilityConstant.LaunchParam): void {\n    console.info('EntryAbility onNewWant invoked. uri: ', want.uri);\n    // to do things.\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "异常场景终止分享",
      children: "异常场景终止分享"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当碰一碰分享回调触发时，发生异常场景导致无法继续分享，可终止本次分享。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["参考：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/share-kit-guide/knock-share/knock-share-between-phones/knock-share-between-phones-content#%E5%BC%82%E5%B8%B8%E5%9C%BA%E6%99%AF%E9%9C%80%E7%BB%88%E6%AD%A2%E5%88%86%E4%BA%AB",
        children: "异常场景终止分享"
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
909618(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959188-a0e5b27ee16560031251da9f2b6e4a33.png");

},
137650(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479189-75ea8fe98746c792a68c2c9305b9afe8.png");

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