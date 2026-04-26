"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["391908"], {
418659(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkweb_web_set_attributes_events_web_incognito_mode_web_incognito_mode_md_538_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkweb-web-set-attributes-events-web-incognito-mode-web-incognito-mode-md-538.json
var site_docs_arkweb_web_set_attributes_events_web_incognito_mode_web_incognito_mode_md_538_namespaceObject = JSON.parse('{"id":"arkweb/web-set-attributes-events/web-incognito-mode/web-incognito-mode","title":"使用隐私模式","description":"开发者在创建Web组件时，可以将可选参数incognitoMode设置为true，来开启Web组件的隐私模式。使用隐私模式浏览网页时，Cookie、缓存等数据不会写入本地持久化存储；隐私模式的Web组件销毁后，这些数据将被清除，不会保留。","source":"@site/docs/arkweb/web-set-attributes-events/web-incognito-mode/web-incognito-mode.md","sourceDirName":"arkweb/web-set-attributes-events/web-incognito-mode","slug":"/arkweb/web-set-attributes-events/web-incognito-mode/","permalink":"/harmonyos-docs-site/arkweb/web-set-attributes-events/web-incognito-mode/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"使用隐私模式","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/web-incognito-mode","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"管理位置权限","permalink":"/harmonyos-docs-site/arkweb/web-set-attributes-events/web-geolocation-permission/"},"next":{"title":"使用运动和方向传感器监测设备状态","permalink":"/harmonyos-docs-site/arkweb/web-set-attributes-events/web-sensor/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkweb/web-set-attributes-events/web-incognito-mode/web-incognito-mode.md


const frontMatter = {
	title: '使用隐私模式',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/web-incognito-mode',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '使用隐私模式';

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
    p: "p",
    pre: "pre",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "使用隐私模式",
        children: "使用隐私模式"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者在创建Web组件时，可以将可选参数", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-i/arkts-basic-components-web-i#weboptions",
        children: "incognitoMode"
      }), "设置为true，来开启Web组件的隐私模式。使用隐私模式浏览网页时，Cookie、缓存等数据不会写入本地持久化存储；隐私模式的Web组件销毁后，这些数据将被清除，不会保留。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["创建隐私模式的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web/arkts-basic-components-web",
            children: "Web组件"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { webview } from '@kit.ArkWeb';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n\n  build() {\n    Column() {\n      Web({ src: 'www.example.com', controller: this.controller, incognitoMode: true });\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webviewcontroller/arkts-apis-webview-webviewcontroller#isincognitomode11",
            children: "isIncognitoMode"
          }), " 判断当前Web组件是否是隐私模式。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { webview } from '@kit.ArkWeb';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n\n  build() {\n    Column() {\n      Button('isIncognitoMode')\n        .onClick(() => {\n          try {\n            let result = this.controller.isIncognitoMode();\n            console.info('isIncognitoMode' + result);\n          } catch (error) {\n            console.error(\n              `ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n          }\n        })\n      Web({ src: 'www.example.com', controller: this.controller });\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "隐私模式提供了一系列接口，用于操作地理位置、Cookie以及Cache Data。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-geolocationpermissions/arkts-apis-webview-geolocationpermissions#allowgeolocation",
            children: "allowGeolocation"
          }), "设置隐私模式下的Web组件允许指定来源使用地理位置。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { webview } from '@kit.ArkWeb';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n  origin: string = 'file:///';\n\n  build() {\n    Column() {\n      Button('allowGeolocation')\n        .onClick(() => {\n          try {\n            // allowGeolocation第二个参数表示隐私模式（true）或非隐私模式（false）下，允许指定来源使用地理位置。\n            webview.GeolocationPermissions.allowGeolocation(this.origin, true);\n          } catch (error) {\n            console.error(\n              `ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n          }\n        })\n      Web({ src: 'www.example.com', controller: this.controller, incognitoMode: true });\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-geolocationpermissions/arkts-apis-webview-geolocationpermissions#deletegeolocation",
            children: "deleteGeolocation"
          }), "清除隐私模式下指定来源的地理位置权限状态。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { webview } from '@kit.ArkWeb';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n  origin: string = 'file:///';\n\n  build() {\n    Column() {\n      Button('deleteGeolocation')\n        .onClick(() => {\n          try {\n            // deleteGeolocation第二个参数表示隐私模式（true）或非隐私模式（false）下，清除指定来源的地理位置权限状态。\n            webview.GeolocationPermissions.deleteGeolocation(this.origin, true);\n          } catch (error) {\n            console.error(\n              `ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n          }\n        })\n      Web({ src: 'www.example.com', controller: this.controller, incognitoMode: true });\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-geolocationpermissions/arkts-apis-webview-geolocationpermissions#getaccessiblegeolocation",
            children: "getAccessibleGeolocation"
          }), "以回调方式异步获取隐私模式下指定源的地理位置权限状态。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { webview } from '@kit.ArkWeb';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n  origin: string = 'file:///';\n\n  build() {\n    Column() {\n      Button('getAccessibleGeolocation')\n        .onClick(() => {\n          try {\n            // getAccessibleGeolocation第三个参数表示隐私模式（true）或非隐私模式（false）下\n            // 以回调方式异步获取指定源的地理位置权限状态。\n            webview.GeolocationPermissions.getAccessibleGeolocation(this.origin, (error, result) => {\n              if (error) {\n                console.error(`getAccessibleGeolocationAsync error: + Code: ${error.code}, message: ${error.message}`);\n                return;\n              }\n              console.info('getAccessibleGeolocationAsync result: ' + result);\n            }, true);\n          } catch (error) {\n            console.error(\n              `ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n          }\n        })\n      Web({ src: 'www.example.com', controller: this.controller, incognitoMode: true });\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webstorage/arkts-apis-webview-webstorage#deletealldata",
            children: "deleteAllData"
          }), "清除隐私模式下Web SQL当前使用的所有存储。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { webview } from '@kit.ArkWeb';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n\n  build() {\n    Column() {\n      Button('deleteAllData')\n        .onClick(() => {\n          try {\n            // deleteAllData参数表示删除所有隐私模式（true）或非隐私模式（false）下，内存中的web数据。\n            webview.WebStorage.deleteAllData(true);\n          } catch (error) {\n            console.error(\n              `ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n          }\n        })\n      Web({ src: $rawfile('index.html'), controller: this.controller, incognitoMode: true })\n        .databaseAccess(true)\n    }\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "加载的html文件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "<!-- index.html -->\n<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"UTF-8\">\n  <title>test</title>\n  <script type=\"text/javascript\">\n\n    var db = openDatabase('mydb','1.0','Test DB',2 * 1024 * 1024);\n    var msg;\n\n    db.transaction(function(tx){\n      tx.executeSql('INSERT INTO LOGS (id,log) VALUES(1,\"test1\")');\n      tx.executeSql('INSERT INTO LOGS (id,log) VALUES(2,\"test2\")');\n      msg = '<p>数据表已创建,且插入了两条数据。</p>';\n\n      document.querySelector('#status').innerHTML = msg;\n    });\n\n    db.transaction(function(tx){\n      tx.executeSql('SELECT * FROM LOGS', [], function (tx, results) {\n        var len = results.rows.length,i;\n        msg = \"<p>查询记录条数：\" + len + \"</p>\";\n\n        document.querySelector('#status').innerHTML += msg;\n\n            for(i = 0; i < len; i++){\n              msg = \"<p><b>\" + results.rows.item(i).log + \"</b></p>\";\n\n        document.querySelector('#status').innerHTML += msg;\n        }\n      },null);\n    });\n\n    </script>\n</head>\n<body>\n<div id=\"status\" name=\"status\">状态信息</div>\n</body>\n</html>\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webcookiemanager/arkts-apis-webview-webcookiemanager#fetchcookiesync11",
            children: "fetchCookieSync"
          }), "获取隐私模式下指定url对应cookie的值。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { webview } from '@kit.ArkWeb';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n\n  build() {\n    Column() {\n      Button('fetchCookieSync')\n        .onClick(() => {\n          try {\n            // fetchCookieSync第二个参数表示获取隐私模式（true）或非隐私模式（false）下，webview的内存cookies。\n            let value = webview.WebCookieManager.fetchCookieSync('https://www.example.com', true);\n            console.info('fetchCookieSync cookie = ' + value);\n          } catch (error) {\n            console.error(\n              `ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n          }\n        })\n      Web({ src: 'www.example.com', controller: this.controller, incognitoMode: true });\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webcookiemanager/arkts-apis-webview-webcookiemanager#configcookiesync11",
            children: "configCookieSync"
          }), "设置隐私模式下指定url的单个cookie的值。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { webview } from '@kit.ArkWeb';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n\n  build() {\n    Column() {\n      Button('configCookieSync')\n        .onClick(() => {\n          try {\n            // configCookieSync第三个参数表示设置隐私模式（true）或非隐私模式（false）下，对应url的cookies。\n            webview.WebCookieManager.configCookieSync('https://www.example.com', 'a=b', true);\n          } catch (error) {\n            console.error(\n              `ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n          }\n        })\n      Web({ src: 'www.example.com', controller: this.controller, incognitoMode: true });\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webcookiemanager/arkts-apis-webview-webcookiemanager#existcookie",
            children: "existCookie"
          }), "查询隐私模式下是否存在cookie。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { webview } from '@kit.ArkWeb';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n\n  build() {\n    Column() {\n      Button('existCookie')\n        .onClick(() => {\n          // existCookie参数表示隐私模式（true）或非隐私模式（false）下，查询是否存在cookies。\n          let result = webview.WebCookieManager.existCookie(true);\n          console.info('result: ' + result);\n        })\n      Web({ src: 'www.example.com', controller: this.controller, incognitoMode: true });\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webcookiemanager/arkts-apis-webview-webcookiemanager#clearallcookiessync11",
            children: "clearAllCookiesSync"
          }), "清除隐私模式下所有cookie。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { webview } from '@kit.ArkWeb';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n\n  build() {\n    Column() {\n      Button('clearAllCookiesSync')\n        .onClick(() => {\n          // clearAllCookiesSync参数表示清除隐私模式（true）或非隐私模式（false）下，webview的所有内存cookies。\n          webview.WebCookieManager.clearAllCookiesSync(true);\n        })\n      Web({ src: 'www.example.com', controller: this.controller, incognitoMode: true });\n    }\n  }\n}\n"
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