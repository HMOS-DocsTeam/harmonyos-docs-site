"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["276421"], {
993080(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_share_kit_guide_system_share_share_service_scenarios_share_utd_link_share_utd_link_md_392_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-share-kit-guide-system-share-share-service-scenarios-share-utd-link-share-utd-link-md-392.json
var site_docs_share_kit_guide_system_share_share_service_scenarios_share_utd_link_share_utd_link_md_392_namespaceObject = JSON.parse('{"id":"share-kit-guide/system-share/share-service-scenarios/share-utd-link/share-utd-link","title":"分享链接","description":"分享App Linking直达应用","source":"@site/docs/share-kit-guide/system-share/share-service-scenarios/share-utd-link/share-utd-link.md","sourceDirName":"share-kit-guide/system-share/share-service-scenarios/share-utd-link","slug":"/share-kit-guide/system-share/share-service-scenarios/share-utd-link/","permalink":"/harmonyos-docs-site/share-kit-guide/system-share/share-service-scenarios/share-utd-link/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"分享链接","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/share-utd-link","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"目标应用设计规范","permalink":"/harmonyos-docs-site/share-kit-guide/system-share/share-target-application/share-design-specification/"},"next":{"title":"分享图片","permalink":"/harmonyos-docs-site/share-kit-guide/system-share/share-service-scenarios/share-utd-image/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/share-kit-guide/system-share/share-service-scenarios/share-utd-link/share-utd-link.md


const frontMatter = {
	title: '分享链接',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/share-utd-link',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '分享链接';

const assets = {

};



const toc = [{
  "value": "分享App Linking直达应用",
  "id": "分享app-linking直达应用",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 3
}, {
  "value": "分享普通链接直达浏览器",
  "id": "分享普通链接直达浏览器",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤-1",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
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
        id: "分享链接",
        children: "分享链接"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "分享app-linking直达应用",
      children: "分享App Linking直达应用"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用App Linking分享应用，目标设备接收后可直达应用，参见：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ability-kit/stage-model-development/inter-app-redirection/directional-redirection/app-linking-startup",
        children: "使用App Linking实现应用间跳转"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(490356)/* ["default"] */.A) + "",
        width: "325",
        height: "701"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["开通App Linking服务，并完成相关配置，App Linking需经过调试。参见：", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agc-applinking-debug-0000001059139667",
            children: "调试App Linking"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在应用配置文件（src/main/module.json5）的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file#skills%E6%A0%87%E7%AD%BE",
            children: "skills"
          }), "配置中增加关联配置。参见：", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ability-kit/stage-model-development/inter-app-redirection/directional-redirection/app-linking-startup#section1101111611317",
            children: "声明应用关联的网站域名"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用App Linking发起系统分享。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { systemShare } from '@kit.ShareKit';\nimport { uniformTypeDescriptor as utd } from '@kit.ArkData';\nimport { common } from '@kit.AbilityKit';\nimport { image } from '@kit.ImageKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n@Component\nexport default struct Index {\n  private async share() {\n    // 生成应用图标缩略图\n    let uiContext: UIContext = this.getUIContext();\n    let contextFaker: Context = uiContext.getHostContext() as Context;\n    let thumbnailPath = contextFaker.filesDir + '/exampleImage.jpg'; // 仅为示例 请替换正确的文件路径\n    let imageSource: image.ImageSource = image.createImageSource(thumbnailPath);\n    let imagePacker: image.ImagePacker = image.createImagePacker();\n    let buffer: ArrayBuffer = await imagePacker.packToData(imageSource, {\n      // 当前只支持'image/jpeg','image/webp'和'image/png'类型图片.\n      format: 'image/jpeg',\n      // JPEG编码中设定输出图片质量的参数,取值范围为0-100.\n      // 建议适当压缩,图片过大无法拉起分享.\n      quality: 30\n    });\n    // 构造ShareData，需配置一条有效数据信息\n    let shareData: systemShare.SharedData = new systemShare.SharedData({\n      utd: utd.UniformDataType.HYPERLINK,\n      // App Linking链接 仅为示例\n      content: 'https://sharekitdemo.drcn.agconnect.link/ZB3p',\n      title: '应用名称', // 不传title时 显示链接\n      description: '应用描述', // 不传则不显示描述内容\n      thumbnail: new Uint8Array(buffer) // 推荐传入应用图标 不传则显示默认html图标\n    });\n    // 进行分享面板显示\n    let controller: systemShare.ShareController = new systemShare.ShareController(shareData);\n    let context: common.UIAbilityContext = uiContext.getHostContext() as common.UIAbilityContext;\n    controller.show(context, {\n      previewMode: systemShare.SharePreviewMode.DEFAULT,\n      selectionMode: systemShare.SelectionMode.SINGLE\n    }).then(() => {\n      console.info('ShareController show success.');\n    }).catch((error: BusinessError) => {\n      console.error(`ShareController show error. code: ${error.code}, message: ${error.message}`);\n    });\n  }\n\n  build() {\n    Button('分享')\n      .onClick(() => this.share())\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["目标应用处理App Linking。参见：", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ability-kit/stage-model-development/inter-app-redirection/directional-redirection/app-linking-startup#section93961521541",
            children: "拉起方实现跳转指导"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { common, OpenLinkOptions } from '@kit.AbilityKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n@Entry\n@Component\nstruct Index {\n  build() {\n    Button('start link', { type: ButtonType.Capsule, stateEffect: true })\n      .width('87%')\n      .height('5%')\n      .margin({ bottom: '12vp' })\n      .onClick(() => {\n        let uiContext: UIContext = this.getUIContext();\n        let context: common.UIAbilityContext = uiContext.getHostContext() as common.UIAbilityContext;\n        let link: string = \"https://www.example.com/programs?action=showall\";\n        let openLinkOptions: OpenLinkOptions = {\n          appLinkingOnly: false\n        };\n        context.openLink(link, openLinkOptions)\n          .then(() => {\n            console.info('openlink success.');\n          })\n          .catch((error: BusinessError) => {\n            console.error(`openlink failed. code: ${error.code}, message: ${error.message}`);\n          });\n      })\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["完整示例代码请参见：", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://gitcode.com/harmonyos_samples/share-kit_-sample-code_-clientdemo_-arkts/blob/master/entry/src/main/ets/scenario/AppLinkingScenario.ets",
            children: "samplecode-分享App Linking直达应用"
          }), "。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "分享普通链接直达浏览器",
      children: "分享普通链接直达浏览器"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "普通链接分享支持将网页链接到目标设备/目标应用。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "目标设备接收时，通过浏览器直接打开链接。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "目标应用接收时，可便捷地处理链接内容。例如：将一个链接分享给畅连，发送给畅连好友。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "开发步骤-1",
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
            children: "// 构造ShareData，需配置一条有效数据信息\nlet shareData: systemShare.SharedData = new systemShare.SharedData({\n  utd: utd.UniformDataType.HYPERLINK,\n  content: 'https://www.vmall.com/index.html?cid=128688', // 仅为示例 使用时请替换为自己的链接\n  title: '华为商城',\n  description: '华为手机',\n  // thumbnail: new Uint8Array() // 推荐传入适合的缩略图 不传则显示默认html图标\n});\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "额外增加一条数据。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "shareData.addRecord({\n  utd: utd.UniformDataType.HYPERLINK,\n  content: 'https://www.vmall.com/index.html?cid=128688', // 仅为示例 使用时请替换为自己的链接\n  title: '测试链接',\n  description: '测试描述',\n});\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "启动分享面板。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 进行分享面板显示\nlet controller: systemShare.ShareController = new systemShare.ShareController(shareData);\nlet uiContext: UIContext = this.getUIContext();\nlet context: common.UIAbilityContext = uiContext.getHostContext() as common.UIAbilityContext;\ncontroller.show(context, {\n  selectionMode: systemShare.SelectionMode.SINGLE,\n  previewMode: systemShare.SharePreviewMode.DEFAULT,\n}).then(() => {\n  console.info('ShareController show success.');\n}).catch((error: BusinessError) => {\n  console.error(`ShareController show error. code: ${error.code}, message: ${error.message}`);\n});\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["完整示例代码请参见：", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://gitcode.com/harmonyos_samples/share-kit_-sample-code_-clientdemo_-arkts/blob/master/entry/src/main/ets/scenario/LinkScenario.ets",
            children: "samplecode-分享普通链接直达浏览器"
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
490356(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959180-99ea807c7e319ad514b25f2cb62922a2.png");

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