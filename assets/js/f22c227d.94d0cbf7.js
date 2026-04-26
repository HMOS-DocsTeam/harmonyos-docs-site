"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["444512"], {
184015(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkweb_web_manage_cyber_security_privacy_web_cross_origin_web_cross_origin_md_f22_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkweb-web-manage-cyber-security-privacy-web-cross-origin-web-cross-origin-md-f22.json
var site_docs_arkweb_web_manage_cyber_security_privacy_web_cross_origin_web_cross_origin_md_f22_namespaceObject = JSON.parse('{"id":"arkweb/web-manage-cyber-security-privacy/web-cross-origin/web-cross-origin","title":"解决Web组件本地资源跨域问题","description":"拦截本地资源跨域","source":"@site/docs/arkweb/web-manage-cyber-security-privacy/web-cross-origin/web-cross-origin.md","sourceDirName":"arkweb/web-manage-cyber-security-privacy/web-cross-origin","slug":"/arkweb/web-manage-cyber-security-privacy/web-cross-origin/","permalink":"/harmonyos-docs-site/arkweb/web-manage-cyber-security-privacy/web-cross-origin/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"解决Web组件本地资源跨域问题","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/web-cross-origin","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用Web组件的拖拽功能与网页交互","permalink":"/harmonyos-docs-site/arkweb/web-manage-page-interaction/web-drag/"},"next":{"title":"使用智能防跟踪功能","permalink":"/harmonyos-docs-site/arkweb/web-manage-cyber-security-privacy/web-intelligent-tracking-prevention/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkweb/web-manage-cyber-security-privacy/web-cross-origin/web-cross-origin.md


const frontMatter = {
	title: '解决Web组件本地资源跨域问题',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/web-cross-origin',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '解决Web组件本地资源跨域问题';

const assets = {

};



const toc = [{
  "value": "拦截本地资源跨域",
  "id": "拦截本地资源跨域",
  "level": 2
}, {
  "value": "本地资源跨域问题解决方法",
  "id": "本地资源跨域问题解决方法",
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
    p: "p",
    pre: "pre",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "解决web组件本地资源跨域问题",
        children: "解决Web组件本地资源跨域问题"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "拦截本地资源跨域",
      children: "拦截本地资源跨域"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为了提高安全性，ArkWeb内核禁止file协议和resource协议访问跨域请求。因此，在使用Web组件加载本地离线资源的时候，Web组件会拦截file协议和resource协议的跨域访问。通过方法二设置一个路径列表，再使用file协议访问该路径列表中的资源，允许跨域访问本地文件。Web组件无法访问本地跨域资源时，DevTools控制台会显示报错信息："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Access to script at 'xxx' from origin 'xxx' has been blocked by CORS policy: Cross origin requests are only supported for protocol schemes: http, arkweb, data, chrome-extension, chrome, https, chrome-untrusted.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "本地资源跨域问题解决方法",
      children: "本地资源跨域问题解决方法"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "方法一"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["开发者应使用http或https协议替代file或resource协议，使Web组件成功访问跨域资源。替代的URL域名为自定义构造，仅供个人或组织使用，避免与互联网上的实际域名冲突。同时，开发者需使用Web组件的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-events/arkts-basic-components-web-events#oninterceptrequest9",
            children: "onInterceptRequest"
          }), "方法，对本地资源进行拦截和相应的替换。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["以下结合示例说明如何使用http或者https等协议解决本地资源跨域访问失败的问题。其中，index.html和js/script.js置于工程中的rawfile目录下。当使用resource协议访问index.html时，js/script.js将因跨域而被拦截，无法加载。在示例中，使用", (0,jsx_runtime.jsx)(_components.code, {
            children: "https://www.example.com/域名替换了原本的resource协议，同时利用onInterceptRequest接口替换资源，使得js/script.js可以成功加载，从而解决了跨域拦截的问题"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { webview } from '@kit.ArkWeb';\n\n@Entry\n@Component\nstruct Index {\n  @State message: string = 'Hello World';\n  webviewController: webview.WebviewController = new webview.WebviewController();\n  // 构造域名和本地文件的映射表\n  schemeMap = new Map([\n    ['https://www.example.com/index.html', 'index.html'],\n    ['https://www.example.com/js/script.js', 'js/script.js'],\n  ]);\n  // 构造本地文件和构造返回的格式mimeType\n  mimeTypeMap = new Map([\n    ['index.html', 'text/html'],\n    ['js/script.js', 'text/javascript']\n  ]);\n\n  build() {\n    Row() {\n      Column() {\n        // 针对本地index.html,使用http或者https协议代替file协议或者resource协议，并且构造一个属于自己的域名。\n        // 本例中构造www.example.com为例。\n        Web({ src: 'https://www.example.com/index.html', controller: this.webviewController })\n          .javaScriptAccess(true)\n          .fileAccess(true)\n          .domStorageAccess(true)\n          .geolocationAccess(true)\n          .width('100%')\n          .height('100%')\n          .onInterceptRequest((event) => {\n            if (!event) {\n              return;\n            }\n            // 此处匹配自己想要加载的本地离线资源，进行资源拦截替换，绕过跨域\n            if (this.schemeMap.has(event.request.getRequestUrl())) {\n              let rawfileName: string = this.schemeMap.get(event.request.getRequestUrl())!;\n              let mimeType = this.mimeTypeMap.get(rawfileName);\n              if (typeof mimeType === 'string') {\n                let response = new WebResourceResponse();\n                // 构造响应数据，如果本地文件在rawfile下，可以通过如下方式设置\n                response.setResponseData($rawfile(rawfileName));\n                response.setResponseEncoding('utf-8');\n                response.setResponseMimeType(mimeType);\n                response.setResponseCode(200);\n                response.setReasonMessage('OK');\n                response.setResponseIsReady(true);\n                return response;\n              }\n            }\n            return null;\n          })\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "<!-- main/resources/rawfile/index.html -->\n<html>\n<head>\n    <meta name=\"viewport\" content=\"width=device-width,initial-scale=1\">\n</head>\n<body>\n<script crossorigin src=\"./js/script.js\"></script>\n</body>\n</html>\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "const body = document.body;\nconst element = document.createElement('div');\nelement.textContent = 'success';\nbody.appendChild(element);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "方法二"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webviewcontroller/arkts-apis-webview-webviewcontroller#setpathallowinguniversalaccess12",
            children: "setPathAllowingUniversalAccess"
          }), "设置一个路径列表。当使用file协议访问该列表中的资源时，允许进行跨域访问本地文件。此外，一旦设置了路径列表，file协议将仅限于访问列表内的资源（此时，", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-attributes/arkts-basic-components-web-attributes#fileaccess",
            children: "fileAccess"
          }), "的行为将会被此接口行为覆盖）。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "setPathAllowingUniversalAccess放开目录的跨域访问限制是一个高风险操作。基于最小权限原则，当前el1，el2放开的路径是固定的，路径列表中的路径应符合以下任一路径格式："
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["1.应用文件目录通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context#%E5%B1%9E%E6%80%A7",
            children: "Context.filesDir"
          }), "获取，其子目录示例如下："]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "/data/storage/el2/base/files/example"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "/data/storage/el2/base/haps/entry/files/example"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["2.应用资源目录通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context#%E5%B1%9E%E6%80%A7",
            children: "Context.resourceDir"
          }), "获取，其子目录示例如下："]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "/data/storage/el1/bundle/entry/resources/resfile"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "/data/storage/el1/bundle/entry/resources/resfile/example"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["3.从API version 21开始，还包括了应用缓存目录通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context#%E5%B1%9E%E6%80%A7",
            children: "Context.cacheDir"
          }), "获取，其子目录示例如下："]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "/data/storage/el2/base/cache"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "/data/storage/el2/base/haps/entry/cache/example"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "设置的目录路径中，不允许包含cache/web，否则会抛出异常码401。如果设置目录路径是cache，cache/web也不允许访问。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["4.从API version 21开始，还包括了应用临时目录通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context#%E5%B1%9E%E6%80%A7",
            children: "Context.tempDir"
          }), "获取，其子目录示例如下："]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "/data/storage/el2/base/temp"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "/data/storage/el2/base/haps/entry/temp/example"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["当路径列表中的任一路径不满足上述条件时，系统将抛出异常码401，并判定路径列表设置失败。如果路径列表设置为空，file协议的可访问范围将遵循", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-attributes/arkts-basic-components-web-attributes#fileaccess",
            children: "fileAccess"
          }), "规则，具体示例如下。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { webview } from '@kit.ArkWeb';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: WebviewController = new webview.WebviewController();\n  uiContext: UIContext = this.getUIContext();\n\n  build() {\n    Row() {\n      Web({ src: '', controller: this.controller })\n        .onControllerAttached(() => {\n          try {\n            // 设置允许可以跨域访问的路径列表\n            this.controller.setPathAllowingUniversalAccess([\n              this.uiContext.getHostContext()!.resourceDir,\n              this.uiContext.getHostContext()!.filesDir + '/example'\n              ]);\n            this.controller.loadUrl('file://' + this.uiContext.getHostContext()!.resourceDir + '/index.html');\n          } catch (error) {\n            console.error(\n              `ErrorCode: ${(error as BusinessError).code},  Message: ${(error as   BusinessError).message}`);\n          }\n        })\n        .javaScriptAccess(true)\n        .fileAccess(true)\n        .domStorageAccess(true)\n    }\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "<!-- main/resources/resfile/index.html -->\n<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n    <meta charset=\"utf-8\">\n    <title>Demo</title>\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, user-scalable=no,   viewport-fit=cover\">\n    <script>\n        function getFile() {\n            var file = \"file:///data/storage/el1/bundle/entry/resources/resfile/js/script.js\";\n      // 使用file协议通过XMLHttpRequest跨域访问本地js文件。\n            var xmlHttpReq = new XMLHttpRequest();\n            xmlHttpReq.onreadystatechange = function(){\n                console.info(\"readyState:\" + xmlHttpReq.readyState);\n                console.info(\"status:\" + xmlHttpReq.status);\n                if(xmlHttpReq.readyState == 4){\n                    if (xmlHttpReq.status == 200) {\n                // 如果ets侧正确设置路径列表，则此处能正常获取资源\n                        const element = document.getElementById('text');\n                        element.textContent = \"load \" + file + \" success\";\n                    } else {\n                // 如果ets侧不设置路径列表，则此处会触发CORS跨域检查错误\n                        const element = document.getElementById('text');\n                        element.textContent = \"load \" + file + \" failed\";\n                    }\n                }\n            }\n            xmlHttpReq.open(\"GET\", file);\n            xmlHttpReq.send(null);\n        }\n    </script>\n</head>\n\n<body>\n<div class=\"page\">\n    <button id=\"example\" onclick=\"getFile()\">loadFile</button>\n</div>\n<div id=\"text\"></div>\n</body>\n\n</html>\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "const body = document.body;\nconst element = document.createElement('div');\nelement.textContent = 'success';\nbody.appendChild(element);\n"
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