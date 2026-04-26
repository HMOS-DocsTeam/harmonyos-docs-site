"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["343925"], {
443254(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkweb_web_set_attributes_events_web_cookie_and_data_storage_mgmt_web_cookie_and_data_storage_mgmt_md_7c7_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkweb-web-set-attributes-events-web-cookie-and-data-storage-mgmt-web-cookie-and-data-storage-mgmt-md-7c7.json
var site_docs_arkweb_web_set_attributes_events_web_cookie_and_data_storage_mgmt_web_cookie_and_data_storage_mgmt_md_7c7_namespaceObject = JSON.parse('{"id":"arkweb/web-set-attributes-events/web-cookie-and-data-storage-mgmt/web-cookie-and-data-storage-mgmt","title":"管理Cookie及数据存储","description":"Cookie是服务端生成并发送到客户端的数据。客户端持有Cookie，便于服务端快速识别身份和状态。","source":"@site/docs/arkweb/web-set-attributes-events/web-cookie-and-data-storage-mgmt/web-cookie-and-data-storage-mgmt.md","sourceDirName":"arkweb/web-set-attributes-events/web-cookie-and-data-storage-mgmt","slug":"/arkweb/web-set-attributes-events/web-cookie-and-data-storage-mgmt/","permalink":"/harmonyos-docs-site/arkweb/web-set-attributes-events/web-cookie-and-data-storage-mgmt/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"管理Cookie及数据存储","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/web-cookie-and-data-storage-mgmt","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"User-Agent开发指导","permalink":"/harmonyos-docs-site/arkweb/web-set-attributes-events/web-default-useragent/"},"next":{"title":"Web深色模式适配","permalink":"/harmonyos-docs-site/arkweb/web-set-attributes-events/web-set-dark-mode/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkweb/web-set-attributes-events/web-cookie-and-data-storage-mgmt/web-cookie-and-data-storage-mgmt.md


const frontMatter = {
	title: '管理Cookie及数据存储',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/web-cookie-and-data-storage-mgmt',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '管理Cookie及数据存储';

const assets = {

};



const toc = [{
  "value": "Cookie管理",
  "id": "cookie管理",
  "level": 2
}, {
  "value": "缓存与存储管理",
  "id": "缓存与存储管理",
  "level": 2
}, {
  "value": "Cache",
  "id": "cache",
  "level": 3
}, {
  "value": "DOM Storage",
  "id": "dom-storage",
  "level": 3
}, {
  "value": "常见问题",
  "id": "常见问题",
  "level": 2
}, {
  "value": "ArkWeb组件对静态资源文件缓存的大小限制是多少？",
  "id": "arkweb组件对静态资源文件缓存的大小限制是多少",
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
    p: "p",
    pre: "pre",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "管理cookie及数据存储",
        children: "管理Cookie及数据存储"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cookie是服务端生成并发送到客户端的数据。客户端持有Cookie，便于服务端快速识别身份和状态。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当Cookie的SameSite属性未指定时，默认值为SameSite=Lax。这种设置下，Cookie仅在用户导航到其源站点时发送，不会在跨站请求中发送。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cookie管理",
      children: "Cookie管理"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Web组件提供", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webcookiemanager/arkts-apis-webview-webcookiemanager",
        children: "WebCookieManager"
      }), "类来管理Cookie信息。Cookie信息存储在应用沙箱路径下/proc/{pid}/root/data/storage/el2/base/cache/web/Cookies的文件中。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["下面以", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webcookiemanager/arkts-apis-webview-webcookiemanager#configcookiesync11",
        children: "configCookieSync()"
      }), "接口为例，为“", (0,jsx_runtime.jsx)(_components.code, {
        children: "www.example.com”设置单个Cookie的值“value=test"
      }), "”。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { webview } from '@kit.ArkWeb';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n\n  build() {\n    Column() {\n      Button('configCookieSync')\n        .onClick(() => {\n          try {\n            webview.WebCookieManager.configCookieSync('https://www.example.com', 'value=test');\n          } catch (error) {\n            console.error(\n              `ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n          }\n        })\n      Web({ src: 'www.example.com', controller: this.controller });\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 22开始，开发者可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webcookiemanager/arkts-apis-webview-webcookiemanager#setlazyinitializewebengine22",
        children: "setLazyInitializeWebEngine()"
      }), "，为“", (0,jsx_runtime.jsx)(_components.code, {
        children: "www.example.com”设置单个Cookie的值“value=test”时跳过初始化ArkWeb内核，以节省[configCookieSync()](/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webcookiemanager/arkts-apis-webview-webcookiemanager#configcookiesync11)接口耗时。其他Cookie的相关功能及使用，请参考�LINK2"
      }), "�接口文档。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { webview } from '@kit.ArkWeb';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nwebview.WebCookieManager.setLazyInitializeWebEngine(true);\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n\n  aboutToAppear(): void {\n    try {\n      webview.WebCookieManager.configCookieSync('https://www.example.com', 'value=test');\n    } catch (error) {\n      console.error(\n        `ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n    }\n  }\n\n  build() {\n    Column() {\n      Web({ src: 'www.example.com', controller: this.controller })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(855604)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Cookie每30s周期性保存到磁盘中，也可以使用接口", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webcookiemanager/arkts-apis-webview-webcookiemanager#savecookieasync",
        children: "saveCookieAsync"
      }), "进行强制落盘（PC/2in1和Tablet设备不会持久化session cookie，即使调用saveCookieAsync，也不会将session cookie写入磁盘）。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "缓存与存储管理",
      children: "缓存与存储管理"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在访问网站时，网络资源请求通常需要较长的时间。开发者可以通过Cache和Dom Storage等手段将资源保存到本地，以提高访问同一网站的速度。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cache",
      children: "Cache"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-attributes/arkts-basic-components-web-attributes#cachemode",
        children: "cacheMode()"
      }), "配置页面资源的缓存模式，Web组件为开发者提供四种缓存模式，分别为："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Default：优先使用未过期的缓存。如果缓存不存在，则从网络获取。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "None：加载资源使用缓存。如果缓存中无该资源，则从网络中获取。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Online：加载资源不使用缓存。全部从网络中获取。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Only：只从缓存中加载资源。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在下面的示例中，缓存设置为None模式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { webview } from '@kit.ArkWeb';\n\n@Entry\n@Component\nstruct WebComponent {\n  @State mode: CacheMode = CacheMode.None;\n  controller: webview.WebviewController = new webview.WebviewController();\n\n  build() {\n    Column() {\n      Web({ src: 'www.example.com', controller: this.controller })\n        .cacheMode(this.mode)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为了获取最新资源，开发者可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webviewcontroller/arkts-apis-webview-webviewcontroller#removecache",
        children: "removeCache()"
      }), "接口清除已经缓存的资源，示例代码如下："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { webview } from '@kit.ArkWeb';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n@Entry\n@Component\nstruct WebComponent {\n  @State mode: CacheMode = CacheMode.None;\n  controller: webview.WebviewController = new webview.WebviewController();\n\n  build() {\n    Column() {\n      Button('removeCache')\n        .onClick(() => {\n          try {\n            // 设置为true时同时清除rom和ram中的缓存，设置为false时只清除ram中的缓存\n            this.controller.removeCache(true);\n          } catch (error) {\n            console.error(`ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n          }\n        });\n      Web({ src: 'www.example.com', controller: this.controller })\n        .cacheMode(this.mode)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dom-storage",
      children: "DOM Storage"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["DOM Storage包含了Session Storage和Local Storage两类。Session Storage为临时数据，其存储与释放跟随会话生命周期；Local Storage为持久化数据，保存在应用目录下。两者的数据均通过Key-Value的形式存储，在访问需要客户端存储的页面时使用。开发者可以通过Web组件的属性接口", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-attributes/arkts-basic-components-web-attributes#domstorageaccess",
        children: "domStorageAccess()"
      }), "进行使能配置，示例如下："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { webview } from '@kit.ArkWeb';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n\n  build() {\n    Column() {\n      Web({ src: 'www.example.com', controller: this.controller })\n        .domStorageAccess(true)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "常见问题",
      children: "常见问题"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "arkweb组件对静态资源文件缓存的大小限制是多少",
      children: "ArkWeb组件对静态资源文件缓存的大小限制是多少？"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkWeb对于单个应用静态资源缓存的大小限制是100M。"
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
855604(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

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