"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["164682"], {
864710(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_app_linking_kit_guide_applinking_deferredlink_applinking_deferredlink_md_697_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-app-linking-kit-guide-applinking-deferredlink-applinking-deferredlink-md-697.json
var site_docs_app_linking_kit_guide_applinking_deferredlink_applinking_deferredlink_md_697_namespaceObject = JSON.parse('{"id":"app-linking-kit-guide/applinking-deferredlink/applinking-deferredlink","title":"通过延迟链接跳转至应用详情页","description":"场景介绍","source":"@site/docs/app-linking-kit-guide/applinking-deferredlink/applinking-deferredlink.md","sourceDirName":"app-linking-kit-guide/applinking-deferredlink","slug":"/app-linking-kit-guide/applinking-deferredlink/","permalink":"/harmonyos-docs-site/app-linking-kit-guide/applinking-deferredlink/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"通过延迟链接跳转至应用详情页","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/applinking-deferredlink","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"通过直达应用市场能力跳转至应用市场下载详情页","permalink":"/harmonyos-docs-site/app-linking-kit-guide/applinking-direct-to-ag/"},"next":{"title":"通过聚合链接按指定方式跳转至应用","permalink":"/harmonyos-docs-site/app-linking-kit-guide/applinking-cross-platform/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/app-linking-kit-guide/applinking-deferredlink/applinking-deferredlink.md


const frontMatter = {
	title: '通过延迟链接跳转至应用详情页',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/applinking-deferredlink',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '通过延迟链接跳转至应用详情页';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "原理机制",
  "id": "原理机制",
  "level": 2
}, {
  "value": "一次性机制",
  "id": "一次性机制",
  "level": 3
}, {
  "value": "缓存机制",
  "id": "缓存机制",
  "level": 3
}, {
  "value": "前提条件",
  "id": "前提条件",
  "level": 2
}, {
  "value": "约束与限制",
  "id": "约束与限制",
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
        id: "通过延迟链接跳转至应用详情页",
        children: "通过延迟链接跳转至应用详情页"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从5.0.3(15)版本开始，新增支持延迟链接能力。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当被分享用户未安装应用时，通过延迟链接能力，应用首次打开时，调用延迟链接接口，系统仍能获取用户之前点击的应用相关链接。在获取链接后，应用可直接跳转至对应的详情页，无需先跳转至应用首页，从而提升用户体验和链接的转化率。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "例如：华为阅读结合App Linking Kit延迟链接能力，实现了即使用户未安装应用，点击链接完成下载并首次打开时，仍能直接跳转至预设页面（如书籍详情页）。与传统方式（需先打开APP再手动定位内容）相比，操作步骤减少了43%。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(4624)/* ["default"] */.A) + "",
        width: "267",
        height: "529"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "原理机制",
      children: "原理机制"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "一次性机制",
      children: "一次性机制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "延迟链接只能获取一次，获取后，系统会从缓存中删除该链接；后续调用时，返回为空。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "缓存机制",
      children: "缓存机制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "缓存时效性：系统缓存链接的最大时长为10分钟，超过则自动删除该缓存链接。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "缓存条数限制：系统最多缓存的链接条目数为50条，超过则自动删除最早的缓存链接。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "前提条件",
      children: "前提条件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["目标方应用已", (0,jsx_runtime.jsx)(_components.a, {
          href: "/app-linking-kit-guide/app-linking-startupapp",
          children: "配置App Linking应用链接"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "该能力目前仅适用于5.0.3(15)及以上版本的HarmonyOS应用。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "支持Phone、Tablet设备。并且从6.1.0(23)版本开始，新增支持PC/2in1设备。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["只能获取通过App Linking域名校验的应用链接，请参见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/app-linking-kit-guide/app-linking-startupapp#%E5%9C%A8agc%E4%B8%BA%E5%BA%94%E7%94%A8%E5%88%9B%E5%BB%BA%E5%85%B3%E8%81%94%E7%9A%84%E7%BD%91%E5%9D%80%E5%9F%9F%E5%90%8D",
          children: "在AGC为应用创建关联的网址域名"
        }), "。建议在首次启动签署隐私协议后再调用延迟链接接口，确保此时域名校验通过。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取延迟链接。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["在入口类文件页面Index.ets中添加如下代码。当应用首次启动时，调用", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/app-linking-api/applinking-arkts-api/applinking-deferredlink-api/applinking-deferredlink-api#popdeferredlink",
                children: "deferredLink.popDeferredLink()"
              }), "接口，获取用户此前点击的该应用相关链接。"]
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "import { deferredLink } from '@kit.AppLinkingKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\n@Entry\n@Component\nstruct Index {\npageStack: NavPathStack = new NavPathStack();\n   build() {\n      Column() {\n         Navigation(this.pageStack) {\n            Button(\"获取延迟链接\").onClick(() => {\n               // 应用首次启动时，获取用户此前点击的该应用相关链接\n               deferredLink.popDeferredLink().then((link: string) => {\n                  hilog.info(0x0000, 'testTag', `Succeeded in getting deferred link, result: ${link}`);\n               }).catch(() => {\n                 // 发生未知错误\n                  hilog.error(0x0000, 'testTag', `Failed to get deferred link.`);\n               })\n            })\n            // ...\n         }\n         // ...\n      }\n   }\n}\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "根据自身业务逻辑配置链接，实现跳转到对应的详情页面。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "import { deferredLink } from '@kit.AppLinkingKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { url } from '@kit.ArkTS';\n\n@Entry\n@Component\nstruct Index {\n  pageStack: NavPathStack = new NavPathStack();\n  build() {\n    Column() {\n      Navigation(this.pageStack) {\n        Button(\"获取延迟链接\").onClick(() => {\n          // 应用首次启动时，获取用户此前点击的该应用相关链接\n          deferredLink.popDeferredLink().then((link: string) => {\n            hilog.info(0x0000, 'testTag', `Succeeded in getting deferred link, result: ${link}`);\n            // 若延迟链接不为空，开发者可根据自身业务逻辑配置链接，跳转至详情页面\n            if (link) {\n              // 根据业务逻辑配置链接，自行跳转至详情页面\n              // 如传入的url为：<https://www.example.com/product?pageName=productDetail>\n              // 从链接中解析query参数，拿到参数后，开发者可根据自己的业务需求进行后续的处理，示例如下：\n              try {\n                let urlObject = url.URL.parseURL(link);\n                let pageName = urlObject.params.get('pageName');\n                this.pageStack.pushPath({ name: pageName });\n              } catch (error) {\n                hilog.error(0x0000, 'testTag', `Failed to parse url.`);\n              }\n            }\n          }).catch(() => {\n            // 发生未知错误\n            hilog.error(0x0000, 'testTag', `Failed to get deferred link.`);\n          })\n        })\n        // ...\n      }\n      // ...\n    }\n  }\n}\n"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "验证应用被拉起效果。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["拉起方应用可调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiabilitycontext/js-apis-inner-application-uiabilitycontext#openlink12",
            children: "UIAbilityContext.openLink()"
          }), "接口，传入目标应用的链接，从而拉起目标应用。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "openLink接口提供了两种拉起目标应用的方式，开发者可根据业务需求进行选择。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "方式一： 仅以App Linking的方式打开应用。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "将appLinkingOnly参数设为true，若有App Linking匹配的应用，则直接打开目标应用。若无App Linking匹配的应用，则抛异常给开发者进行处理。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "适用于无法打开目标应用时，开发者做了相应的异常处理。例如：拉起方应用集成了ArkWeb，当目标应用不存在时，可通过ArkWeb打开链接。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "方式二： 以App Linking优先的方式打开应用。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "将appLinkingOnly参数设为false或者不传，若有App Linking匹配的应用，则直接打开目标应用。若无App Linking匹配的应用，则尝试以浏览器打开链接的方式打开应用。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "适用于无法打开目标应用时，开发者未做任何处理。此时目标应用不存在时，会通过系统浏览器打开链接。"
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "本文为了方便验证App Linking的配置是否正确，选择方式一，示例如下。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "在“entry/src/main/ets/common”目录下添加GlobalContext.ets文件，开发初始化和获取应用上下文的接口。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "import { common } from '@kit.AbilityKit';\n\nexport class GlobalContext {\n  private static context: common.UIAbilityContext;\n\n  public static initContext(context: common.UIAbilityContext): void {\n    GlobalContext.context = context;\n  }\n\n  public static getContext(): common.UIAbilityContext {\n    return GlobalContext.context;\n  }\n}\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "在“entry/src/main/ets/entryability/EntryAbility.ets”文件中导入GlobalContext，在onCreate方法中使用GlobalContext.initContext(this.context)初始化全局应用上下文。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["在“entry/src/main/ets/pages/Index.ets”文件中，使用", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiabilitycontext/js-apis-inner-application-uiabilitycontext#openlink12",
                children: "UIAbilityContext.openLink()"
              }), "接口打开应用。"]
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "import { hilog } from '@kit.PerformanceAnalysisKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { GlobalContext } from '../common/GlobalContext';\n\n@Entry\n@Component\nstruct Index {\n  build() {\n    Button('start link', { type: ButtonType.Capsule, stateEffect: true })\n      .width('87%')\n      .height('5%')\n      .margin({ bottom: '12vp' })\n      .onClick(() => {\n        let context = GlobalContext.getContext();\n        let link: string = \"https://www.example.com/product?pageName=productDetail\";\n        // 仅以App Linking的方式打开应用\n        context.openLink(link, { appLinkingOnly: true })\n          .then(() => {\n            hilog.info(0x0000, 'testTag', `Succeeded in opening link.`);\n          })\n          .catch((error: BusinessError) => {\n            hilog.error(0x0000, 'testTag', `Failed to open link, code: ${error.code}, message: ${error.message}`);\n          })\n      })\n  }\n}\n"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "安装拉起方应用，点击拉起方应用中的跳转按钮。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如果此时目标方应用未安装，会抛出系统异常。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "安装目标方应用后，会根据获取的延迟链接直接跳转到目标方应用的详情页面。"
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
4624(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958806-2e04295c3c6c03353cb95d2857c29da0.gif");

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