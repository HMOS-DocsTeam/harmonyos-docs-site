"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["622938"], {
854844(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_health_service_kit_guide_health_harmonyos_health_app_dev_health_privacy_authorization_health_privacy_authorization_md_225_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-health-service-kit-guide-health-harmonyos-health-app-dev-health-privacy-authorization-health-privacy-authorization-md-225.json
var site_docs_health_service_kit_guide_health_harmonyos_health_app_dev_health_privacy_authorization_health_privacy_authorization_md_225_namespaceObject = JSON.parse('{"id":"health-service-kit-guide/health-harmonyos/health-app-dev/health-privacy-authorization/health-privacy-authorization","title":"拉起运动健康App隐私授权","description":"场景介绍","source":"@site/docs/health-service-kit-guide/health-harmonyos/health-app-dev/health-privacy-authorization/health-privacy-authorization.md","sourceDirName":"health-service-kit-guide/health-harmonyos/health-app-dev/health-privacy-authorization","slug":"/health-service-kit-guide/health-harmonyos/health-app-dev/health-privacy-authorization/","permalink":"/harmonyos-docs-site/health-service-kit-guide/health-harmonyos/health-app-dev/health-privacy-authorization/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"拉起运动健康App隐私授权","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/health-privacy-authorization","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"配置Client ID","permalink":"/harmonyos-docs-site/health-service-kit-guide/health-harmonyos/health-preparations/health-configuration-client-id/"},"next":{"title":"管理用户授权","permalink":"/harmonyos-docs-site/health-service-kit-guide/health-harmonyos/health-app-dev/health-add-permissions/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/health-service-kit-guide/health-harmonyos/health-app-dev/health-privacy-authorization/health-privacy-authorization.md


const frontMatter = {
	title: '拉起运动健康App隐私授权',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/health-privacy-authorization',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '拉起运动健康App隐私授权';

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
        id: "拉起运动健康app隐私授权",
        children: "拉起运动健康App隐私授权"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用户在设备上首次使用运动健康服务时，需要用户同意运动健康服务隐私协议，当前隐私授权依赖运动健康App，需引导用户打开运动健康App并完成隐私授权。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者调用后续章节的接口后，如果返回错误码", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/health-service-api/errorcode-healthservice/errorcode-healthservice#section1002703001-%E7%94%A8%E6%88%B7%E9%9A%90%E7%A7%81%E6%9C%AA%E5%90%8C%E6%84%8F",
        children: "1002703001"
      }), "，可参考本章节，引导用户同意运动健康服务隐私授权。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在module.json5文件中增加querySchemes字段，并在列表中配置\"huaweischeme\"。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "\"huaweischeme\"为需要跳转到的运动健康App首页的scheme，页面参考如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(98456)/* ["default"] */.A) + "",
            width: "409",
            height: "382"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入相关功能模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { bundleManager, common, Want } from '@kit.AbilityKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { productViewManager } from '@kit.AppGalleryKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/both-models/js-apis-bundlemanager/js-apis-bundlemanager#bundlemanagercanopenlink12",
            children: "canOpenLink"
          }), "判断运动健康App是否安装。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["已安装则调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiabilitycontext/js-apis-inner-application-uiabilitycontext#openlink12",
              children: "openLink"
            }), "接口拉起运动健康App；"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["未安装调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/store-kit-guide/store-productview#%E5%BA%94%E7%94%A8%E8%AF%A6%E6%83%85%E9%A1%B5%E5%B1%95%E7%A4%BA",
              children: "应用市场推荐"
            }), "接口，引导用户下载运动健康App。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "try {\n // 请在组件内获取context，确保this.getUIContext().getHostContext()返回结果为UIAbilityContext\n  let result = bundleManager.canOpenLink('huaweischeme://healthapp/home/main');\n  let context = this.getUIContext().getHostContext() as common.UIAbilityContext;\n  if (result) {\n    // 拉起运动健康App首页，进行隐私授权\n    let link: string = 'huaweischeme://healthapp/home/main';\n    await context.openLink(link)\n  } else {\n    // 拉起应用市场推荐，引导用户下载运动健康App，进行隐私授权\n    const wantParam: Want = {\n      parameters: {\n        bundleName: 'com.huawei.hmos.health'\n      }\n    };\n    const callback: productViewManager.ProductViewCallback = {\n      onError: (error: BusinessError) => {\n        hilog.error(0x0001, 'TAG', `Failed to open AppGallery.Code: ${error.code}, message: ${error.message}`);\n      }\n    }\n    productViewManager.loadProduct(context, wantParam, callback);\n  }\n} catch (err) {\n  hilog.error(0x0000, 'testTag', `Failed to agree user privacy.Code: ${err.code}, message: ${err.message}`);\n}\n"
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
98456(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799264-c976ac4beb80bda2483cba772c8c3da0.png");

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