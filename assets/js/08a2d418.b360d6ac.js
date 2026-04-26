"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["982362"], {
375874(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkweb_web_set_attributes_events_web_geolocation_permission_web_geolocation_permission_md_08a_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkweb-web-set-attributes-events-web-geolocation-permission-web-geolocation-permission-md-08a.json
var site_docs_arkweb_web_set_attributes_events_web_geolocation_permission_web_geolocation_permission_md_08a_namespaceObject = JSON.parse('{"id":"arkweb/web-set-attributes-events/web-geolocation-permission/web-geolocation-permission","title":"管理位置权限","description":"从API version 9开始，支持Web组件的GeolocationPermissions类和onGeolocationShow方法对网页进行位置权限管理。更多信息请参见应用数据安全。","source":"@site/docs/arkweb/web-set-attributes-events/web-geolocation-permission/web-geolocation-permission.md","sourceDirName":"arkweb/web-set-attributes-events/web-geolocation-permission","slug":"/arkweb/web-set-attributes-events/web-geolocation-permission/","permalink":"/harmonyos-docs-site/arkweb/web-set-attributes-events/web-geolocation-permission/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"管理位置权限","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/web-geolocation-permission","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"在新窗口中打开页面","permalink":"/harmonyos-docs-site/arkweb/web-set-attributes-events/web-open-in-new-window/"},"next":{"title":"使用隐私模式","permalink":"/harmonyos-docs-site/arkweb/web-set-attributes-events/web-incognito-mode/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkweb/web-set-attributes-events/web-geolocation-permission/web-geolocation-permission.md


const frontMatter = {
	title: '管理位置权限',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/web-geolocation-permission',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '管理位置权限';

const assets = {

};



const toc = [{
  "value": "需要权限",
  "id": "需要权限",
  "level": 2
}, {
  "value": "申请位置权限",
  "id": "申请位置权限",
  "level": 2
}, {
  "value": "管理位置权限",
  "id": "管理位置权限-1",
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
        id: "管理位置权限",
        children: "管理位置权限"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 9开始，支持Web组件的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-geolocationpermissions/arkts-apis-webview-geolocationpermissions",
        children: "GeolocationPermissions"
      }), "类和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-events/arkts-basic-components-web-events#ongeolocationshow",
        children: "onGeolocationShow"
      }), "方法对网页进行位置权限管理。更多信息请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-app-data-security",
        children: "应用数据安全"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Web组件根据", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-geolocationpermissions/arkts-apis-webview-geolocationpermissions",
        children: "GeolocationPermissions"
      }), "类和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-events/arkts-basic-components-web-events#ongeolocationshow",
        children: "onGeolocationShow"
      }), "方法的响应结果，决定是否赋予前端页面权限。用户可以获取位置信息，以便使用出行导航、天气预报等服务。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "需要权限",
      children: "需要权限"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用获取位置功能，需在module.json5中配置位置权限。具体添加方法请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions#%E5%9C%A8%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E4%B8%AD%E5%A3%B0%E6%98%8E%E6%9D%83%E9%99%90",
        children: "在配置文件中声明权限"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\"requestPermissions\":[\n   {\n     \"name\" : \"ohos.permission.LOCATION\" // 精准定位\n   },\n   {\n     \"name\" : \"ohos.permission.APPROXIMATELY_LOCATION\" // 模糊定位\n   },\n   {\n     \"name\" : \"ohos.permission.LOCATION_IN_BACKGROUND\" // 后台定位\n   }\n ]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "申请位置权限",
      children: "申请位置权限"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在下面的示例中，用户点击前端页面\"获取位置\"按钮，Web组件通过弹窗通知应用侧位置权限请求消息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "前端页面代码。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>位置信息</title>\n</head>\n<body>\n    <p id=\"locationInfo\">位置信息</p>\n    <button onclick=\"getLocation()\">获取位置</button>\n\n    <script>\n        var locationInfo=document.getElementById(\"locationInfo\");\n        function getLocation(){\n            if (navigator.geolocation) {\n                // 访问设备地理位置\n                navigator.geolocation.getCurrentPosition(showPosition);\n            }\n        }\n        function showPosition(position){\n            locationInfo.innerHTML=\"Latitude: \" + position.coords.latitude + \"<br />Longitude: \" + position.coords.longitude;\n        }\n    </script>\n</body>\n</html>\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用代码。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { webview } from '@kit.ArkWeb';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { abilityAccessCtrl, common } from '@kit.AbilityKit';\n\nlet atManager = abilityAccessCtrl.createAtManager();\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n  uiContext: UIContext = this.getUIContext();\n\n  // 组件的生命周期函数，创建组件实例后触发\n  aboutToAppear(): void {\n    let context : Context | undefined = this.uiContext.getHostContext() as common.UIAbilityContext;\n    if (!context) {\n      console.error(\"context is undefined\");\n      return;\n    }\n    // 向用户请求位置权限，对整个应用生效\n    atManager.requestPermissionsFromUser(context, [\"ohos.permission.APPROXIMATELY_LOCATION\"]).then((data) => {\n      console.info('data:' + JSON.stringify(data));\n      console.info('data permissions:' + data.permissions);\n      console.info('data authResults:' + data.authResults);\n    }).catch((error: BusinessError) => {\n      console.error(`Failed to request permissions from user. Code is ${error.code}, message is ${error.message}`);\n    })\n  }\n\n  build() {\n    Column() {\n      // Web组件的geolocationAccess属性默认为true，可以显式配置为false以禁止Web组件获取地理位置信息\n      Web({ src: $rawfile('getLocation.html'), controller: this.controller })\n        .geolocationAccess(true)\n        .onGeolocationShow((event) => {\n          // 位置权限申请通知仅对当前Web组件生效，应用内的其他Web组件不受影响\n          this.uiContext.showAlertDialog({\n            title: '位置权限请求',\n            message: '是否允许获取位置信息',\n            primaryButton: {\n              value: 'cancel',\n              action: () => {\n                if (event) {\n                  // 不允许此站点位置权限请求\n                  // 注意invoke的第3个参数表示是否记住当前选择，如果传true，则下次不再弹框\n                  event.geolocation.invoke(event.origin, false, false);\n                }\n              }\n            },\n            secondaryButton: {\n              value: 'ok',\n              action: () => {\n                if (event) {\n                  // 允许此站点位置权限请求\n                  // 注意invoke的第3个参数表示是否记住当前选择，如果传true，则下次不再弹框\n                  event.geolocation.invoke(event.origin, true, false);\n                }\n              }\n            },\n            cancel: () => {\n              if (event) {\n                // 不允许此站点位置权限请求\n                // 注意invoke的第3个参数表示是否记住当前选择，如果传true，则下次不再弹框\n                event.geolocation.invoke(event.origin, false, false);\n              }\n            }\n          })\n        })\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "管理位置权限-1",
      children: "管理位置权限"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过Web组件的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-geolocationpermissions/arkts-apis-webview-geolocationpermissions",
        children: "GeolocationPermissions"
      }), "类管理网页的位置权限，提供了新增（", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-geolocationpermissions/arkts-apis-webview-geolocationpermissions#allowgeolocation",
        children: "allowGeolocation"
      }), "）、查看（", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-geolocationpermissions/arkts-apis-webview-geolocationpermissions#getaccessiblegeolocation",
        children: "getAccessibleGeolocation"
      }), "）和删除（", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-geolocationpermissions/arkts-apis-webview-geolocationpermissions#deletegeolocation",
        children: "deleteGeolocation"
      }), "）网页位置权限的方法。例如查看网页是否已申请位置权限、将网页已申请的位置权限删除。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { webview } from '@kit.ArkWeb';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n  origin: string = \"www.example.com\";\n\n  build() {\n    Column() {\n      // 新增指定源的位置权限，再次获取位置信息时则不再触发onGeolocationShow的回调\n      Button('allowGeolocation')\n        .onClick(() => {\n          try {\n            webview.GeolocationPermissions.allowGeolocation(this.origin);\n          } catch (error) {\n            console.error(`ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n          }\n        })\n\n      // 删除指定源的位置权限，再次获取位置信息时则触发onGeolocationShow的回调\n      Button('deleteGeolocation')\n        .onClick(() => {\n          try {\n            webview.GeolocationPermissions.deleteGeolocation(this.origin);\n          } catch (error) {\n            console.error(`ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n          }\n        })\n\n      // 查询指定源的位置权限\n      Button('getAccessibleGeolocation')\n        .onClick(() => {\n          try {\n            webview.GeolocationPermissions.getAccessibleGeolocation(this.origin)\n              .then(result => {\n                console.info('getAccessibleGeolocationPromise result: ' + result);\n              }).catch((error: BusinessError) => {\n              console.error(`getAccessibleGeolocationPromise error, ErrorCode: ${error.code},  Message: ${error.message}`);\n            });\n          } catch (error) {\n            console.error(`ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n          }\n        })\n\n      // 注意添加网络权限ohos.permission.INTERNET\n      Web({ src: 'www.example.com', controller: this.controller })\n    }\n  }\n}\n"
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