"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["703190"], {
304430(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkweb_api_arkweb_arkts_js_apis_webview_arkts_apis_webview_arkts_apis_webview_md_077_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkweb-api-arkweb-arkts-js-apis-webview-arkts-apis-webview-arkts-apis-webview-md-077.json
var site_docs_ref_arkweb_api_arkweb_arkts_js_apis_webview_arkts_apis_webview_arkts_apis_webview_md_077_namespaceObject = JSON.parse('{"id":"arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview/arkts-apis-webview","title":"模块描述","description":"本模块提供Web控制能力，网页显示的能力请参考组件描述。","source":"@site/docs-ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview/arkts-apis-webview.md","sourceDirName":"arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview","slug":"/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview/arkts-apis-webview","permalink":"/harmonyos-docs-site/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview/arkts-apis-webview","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"模块描述","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-webview","kit":"应用框架","last_updated":"2026-04-22","slug":"arkts-apis-webview"},"sidebar":"ref","previous":{"title":"编译错误码","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-arkts-errcode/arkui-compile-arkts-errcode/x_ark_ui_compile/x_ark_ui_compile"},"next":{"title":"Functions","permalink":"/harmonyos-docs-site/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-f/arkts-apis-webview-f"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview/arkts-apis-webview.md


const frontMatter = {
	title: '模块描述',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-webview',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'arkts-apis-webview'
};
const contentTitle = '模块描述';

const assets = {

};



const toc = [{
  "value": "需要权限",
  "id": "需要权限",
  "level": 2
}, {
  "value": "导入模块",
  "id": "导入模块",
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
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "模块描述",
        children: "模块描述"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本模块提供Web控制能力，网页显示的能力请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web/arkts-basic-components-web",
        children: "组件描述"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["元服务中使用ArkWeb的说明，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/atomic-guides/atomicserviceweb-guidelines",
        children: "Web组件概述"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(263322)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "本模块首批接口从API version 9开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "示例效果请以真机运行为准。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "静态方法必须在用户界面（UI）线程上使用。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该模块提供以下Web控制相关的常用功能："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-adsblockmanager/arkts-apis-webview-adsblockmanager",
          children: "AdsBlockManager"
        }), "：广告过滤配置。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-backforwardcacheoptions/arkts-apis-webview-backforwardcacheoptions",
          children: "BackForwardCacheOptions"
        }), "：前进后退缓存配置。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/kts-apis-webview-backforwardcachesupportedfeatures/kts-apis-webview-backforwardcachesupportedfeatures",
          children: "BackForwardCacheSupportedFeatures"
        }), "：设置前进后退缓存配置所支持的特性。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-geolocationpermissions/arkts-apis-webview-geolocationpermissions",
          children: "GeolocationPermissions"
        }), "：地理位置权限配置。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-jsmessageext/arkts-apis-webview-jsmessageext",
          children: "JsMessageExt"
        }), "：执行JavaScript脚本的结果。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-mediasourceinfo/arkts-apis-webview-mediasourceinfo",
          children: "MediaSourceInfo"
        }), "：媒体源信息。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-nativemediaplayersurfaceinfo/arkts-apis-webview-nativemediaplayersurfaceinfo",
          children: "NativeMediaPlayerSurfaceInfo"
        }), "：应用接管媒体播放时渲染信息。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-pdfdata/arkts-apis-webview-pdfdata",
          children: "PdfData"
        }), "：生成的PDF输出数据。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-proxyconfig/arkts-apis-webview-proxyconfig",
          children: "ProxyConfig"
        }), "：网络代理配置。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-proxycontroller/arkts-apis-webview-proxycontroller",
          children: "ProxyController"
        }), "：网络代理控制器。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webviewcontroller/arkts-apis-webview-webviewcontroller",
          children: "WebviewController"
        }), "：Web组件控制器。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webcookiemanager/arkts-apis-webview-webcookiemanager",
          children: "WebCookieManager"
        }), "：Cookie管理。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webdatabase/arkts-apis-webview-webdatabase",
          children: "WebDataBase"
        }), "：数据库管理。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webdownloaddelegate/arkts-apis-webview-webdownloaddelegate",
          children: "WebDownloadDelegate"
        }), "：下载任务状态事件。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webdownloaditem/arkts-apis-webview-webdownloaditem",
          children: "WebDownloadItem"
        }), "：下载任务。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webdownloadmanager/arkts-apis-webview-webdownloadmanager",
          children: "WebDownloadManager"
        }), "：下载任务管理。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webhttpbodystream/arkts-apis-webview-webhttpbodystream",
          children: "WebHttpBodyStream"
        }), "：HTTP请求体。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webmessageext/arkts-apis-webview-webmessageext",
          children: "WebMessageExt"
        }), "：前端与应用通信数据对象。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webresourcehandler/arkts-apis-webview-webresourcehandler",
          children: "WebResourceHandler"
        }), "：资源加载控制。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webschemehandler/arkts-apis-webview-webschemehandler",
          children: "WebSchemeHandler"
        }), "：指定Scheme的请求拦截器。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webschemehandlerrequest/arkts-apis-webview-webschemehandlerrequest",
          children: "WebSchemeHandlerRequest"
        }), "：通过拦截器拦截到的请求。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webschemehandlerresponse/arkts-apis-webview-webschemehandlerresponse",
          children: "WebSchemeHandlerResponse"
        }), "：为拦截到的请求创建自定义响应。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webstorage/arkts-apis-webview-webstorage",
          children: "WebStorage"
        }), "：Web组件存储操作接口。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-backforwardlist/arkts-apis-webview-backforwardlist",
          children: "BackForwardList"
        }), "：历史信息列表。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-nativemediaplayerbridge/arkts-apis-webview-nativemediaplayerbridge",
          children: "NativeMediaPlayerBridge"
        }), "：托管网页媒体播放器桥接接口。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-nativemediaplayerhandler/arkts-apis-webview-nativemediaplayerhandler",
          children: "NativeMediaPlayerHandler"
        }), "：托管网页媒体播放器的事件接口。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webmessageport/arkts-apis-webview-webmessageport",
          children: "WebMessagePort"
        }), "：网页前端与应用的消息端口。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "需要权限",
      children: "需要权限"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["访问在线网页时需添加网络权限：ohos.permission.INTERNET，具体申请方式请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions",
        children: "声明权限"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "导入模块",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { webview } from '@kit.ArkWeb';\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Web.Webview.Core"]
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
263322(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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