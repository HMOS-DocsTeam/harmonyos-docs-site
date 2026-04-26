"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["191573"], {
922269(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkts_arkts_concurrency_multithread_develop_guide_multithread_develop_case_global_configuration_guide_global_configuration_guide_md_5ee_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkts-arkts-concurrency-multithread-develop-guide-multithread-develop-case-global-configuration-guide-global-configuration-guide-md-5ee.json
var site_docs_arkts_arkts_concurrency_multithread_develop_guide_multithread_develop_case_global_configuration_guide_global_configuration_guide_md_5ee_namespaceObject = JSON.parse('{"id":"arkts/arkts-concurrency/multithread-develop-guide/multithread-develop-case/global-configuration-guide/global-configuration-guide","title":"全局配置项功能场景","description":"对于需要使用进程单例的场景，例如不同并发实例间需要数据保持一致的全局配置项功能，可以采用共享模块来实现。","source":"@site/docs/arkts/arkts-concurrency/multithread-develop-guide/multithread-develop-case/global-configuration-guide/global-configuration-guide.md","sourceDirName":"arkts/arkts-concurrency/multithread-develop-guide/multithread-develop-case/global-configuration-guide","slug":"/arkts/arkts-concurrency/multithread-develop-guide/multithread-develop-case/global-configuration-guide/","permalink":"/harmonyos-docs-site/arkts/arkts-concurrency/multithread-develop-guide/multithread-develop-case/global-configuration-guide/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"全局配置项功能场景","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/global-configuration-guide","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"业务模块并发加载场景","permalink":"/harmonyos-docs-site/arkts/arkts-concurrency/multithread-develop-guide/multithread-develop-case/concurrent-loading-modules-guide/"},"next":{"title":"ArkUI数据更新场景","permalink":"/harmonyos-docs-site/arkts/arkts-concurrency/multithread-develop-guide/multithread-develop-case/makeobserved-sendable/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkts/arkts-concurrency/multithread-develop-guide/multithread-develop-case/global-configuration-guide/global-configuration-guide.md


const frontMatter = {
	title: '全局配置项功能场景',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/global-configuration-guide',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '全局配置项功能场景';

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
    ol: "ol",
    p: "p",
    pre: "pre",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "全局配置项功能场景",
        children: "全局配置项功能场景"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["对于需要使用进程单例的场景，例如不同并发实例间需要数据保持一致的全局配置项功能，可以采用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/sendable-object/arkts-sendable-module",
        children: "共享模块"
      }), "来实现。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下示例展示了只有在Wi-Fi打开且用户登录的情况下才能进行下载的功能，具体步骤如下。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编写全局配置文件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { ArkTSUtils } from '@kit.ArkTS';\n\n'use shared'\n\n@Sendable\nclass Config {\n  public lock: ArkTSUtils.locks.AsyncLock = new ArkTSUtils.locks.AsyncLock;\n  public isLogin: boolean = false;\n  public loginUser?: string;\n  public wifiOn: boolean = false;\n\n  async login(user: string) {\n    return this.lock.lockAsync(() => {\n      this.isLogin = true;\n      this.loginUser = user;\n    }, ArkTSUtils.locks.AsyncLockMode.EXCLUSIVE)\n  }\n\n  async logout(user?: string) {\n    return this.lock.lockAsync(() => {\n      this.isLogin = false;\n      this.loginUser = '';\n    }, ArkTSUtils.locks.AsyncLockMode.EXCLUSIVE)\n  }\n\n  async getIsLogin(): Promise<boolean> {\n    return this.lock.lockAsync(() => {\n      return this.isLogin;\n    }, ArkTSUtils.locks.AsyncLockMode.SHARED)\n  }\n\n  async getUser(): Promise<string> {\n    return this.lock.lockAsync(() => {\n      return this.loginUser!;\n    }, ArkTSUtils.locks.AsyncLockMode.SHARED)\n  }\n\n  async setWifiState(state: boolean) {\n    return this.lock.lockAsync(() => {\n      this.wifiOn = state;\n    }, ArkTSUtils.locks.AsyncLockMode.EXCLUSIVE)\n  }\n\n  async isWifiOn() {\n    return this.lock.lockAsync(() => {\n      return this.wifiOn;\n    }, ArkTSUtils.locks.AsyncLockMode.SHARED)\n  }\n}\n\nexport let config = new Config();\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "UI主线程及子线程访问全局配置项。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { config } from './Config';\nimport { taskpool } from '@kit.ArkTS';\n\n@Concurrent\nasync function download() {\n  if (!await config.isWifiOn()) {\n    console.info('wifi is off');\n    return false;\n  }\n  if (!await config.getIsLogin()) {\n    console.info('not login');\n    return false;\n  }\n  console.info(`User[${await config.getUser()}] start download ...`);\n  return true;\n}\n\n@Entry\n@Component\nstruct Index {\n  @State message: string = 'not login';\n  @State wifiState: string = 'wifi off';\n  @State downloadResult: string = '';\n  input: string = '';\n\n  build() {\n    Row() {\n      Column() {\n        Text(this.message)\n          .fontSize(50)\n          .fontWeight(FontWeight.Bold)\n          .alignRules({\n            center: { anchor: '__container__', align: VerticalAlign.Center },\n            middle: { anchor: '__container__', align: HorizontalAlign.Center }\n          })\n        TextInput({ placeholder: '请输入用户名' })\n          .id('textInput')\n          .fontSize(20)\n          .fontWeight(FontWeight.Bold)\n          .alignRules({\n            center: { anchor: '__container__', align: VerticalAlign.Center },\n            middle: { anchor: '__container__', align: HorizontalAlign.Center }\n          })\n          .onChange((value) => {\n            this.input = value;\n          })\n        Text('login')\n          .fontSize(50)\n          .fontWeight(FontWeight.Bold)\n          .alignRules({\n            center: { anchor: '__container__', align: VerticalAlign.Center },\n            middle: { anchor: '__container__', align: HorizontalAlign.Center }\n          })\n          .onClick(async () => {\n            if (!await config.getIsLogin() && this.input) {\n              this.message = 'login: ' + this.input;\n              try {\n                config.login(this.input);\n              } catch (e) {\n                console.info('login failed');\n              }\n            }\n          })\n          .backgroundColor(0xcccccc)\n        Text('logout')\n          .fontSize(50)\n          .fontWeight(FontWeight.Bold)\n          .alignRules({\n            center: { anchor: '__container__', align: VerticalAlign.Center },\n            middle: { anchor: '__container__', align: HorizontalAlign.Center }\n          })\n          .onClick(async () => {\n            if (await config.getIsLogin()) {\n              this.message = 'not login';\n              try {\n                config.logout();\n              } catch (e) {\n                console.info('logout failed');\n              }\n            }\n          })\n          .backgroundColor(0xcccccc)\n        Text(this.wifiState)\n          .fontSize(50)\n          .fontWeight(FontWeight.Bold)\n          .alignRules({\n            center: { anchor: '__container__', align: VerticalAlign.Center },\n            middle: { anchor: '__container__', align: HorizontalAlign.Center }\n          })\n        Toggle({ type: ToggleType.Switch })\n          .onChange(async (isOn: boolean) => {\n            await config.setWifiState(isOn)\n            this.wifiState = isOn ? 'wifi on' : 'wifi off';\n          })\n        Text('download')\n          .fontSize(50)\n          .fontWeight(FontWeight.Bold)\n          .alignRules({\n            center: { anchor: '__container__', align: VerticalAlign.Center },\n            middle: { anchor: '__container__', align: HorizontalAlign.Center }\n          })\n          .onClick(async () => {\n            let ret = await taskpool.execute(download);\n            this.downloadResult = ret ? 'download success' : 'download fail';\n          })\n        Text(this.downloadResult)\n          .fontSize(20)\n          .fontWeight(FontWeight.Bold)\n          .alignRules({\n            center: { anchor: '__container__', align: VerticalAlign.Center },\n            middle: { anchor: '__container__', align: HorizontalAlign.Center }\n          })\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
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