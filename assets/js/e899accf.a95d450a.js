"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["825622"], {
477863(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkweb_web_use_multimedia_web_rtc_web_rtc_md_e89_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkweb-web-use-multimedia-web-rtc-web-rtc-md-e89.json
var site_docs_arkweb_web_use_multimedia_web_rtc_web_rtc_md_e89_namespaceObject = JSON.parse('{"id":"arkweb/web-use-multimedia/web-rtc/web-rtc","title":"在Web中打开摄像头和麦克风","description":"WebRTC（Web Real-Time Communications）是一项实时通讯技术，它允许网络应用或站点在无需中间媒介的情况下建立浏览器之间的点对点（Peer-to-Peer）连接，实现视频流、音频流或其他任意数据的传输。WebRTC所包含的标准使得用户无需安装任何插件或第三方软件即可创建点对点（Peer-to-Peer）的数据共享与音视频会议。WebRTC技术适用于所有现代浏览器和主要平台的本机客户端，其背后的技术作为开放的Web标准实现，并在所有主要浏览器中作为常规JavaScript API提供。","source":"@site/docs/arkweb/web-use-multimedia/web-rtc/web-rtc.md","sourceDirName":"arkweb/web-use-multimedia/web-rtc","slug":"/arkweb/web-use-multimedia/web-rtc/","permalink":"/harmonyos-docs-site/arkweb/web-use-multimedia/web-rtc/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"在Web中打开摄像头和麦克风","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/web-rtc","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用Web组件的下载能力","permalink":"/harmonyos-docs-site/arkweb/web-manage-upload-download/web-download/"},"next":{"title":"托管网页中的媒体播放","permalink":"/harmonyos-docs-site/arkweb/web-use-multimedia/app-takeovers-web-media/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkweb/web-use-multimedia/web-rtc/web-rtc.md


const frontMatter = {
	title: '在Web中打开摄像头和麦克风',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/web-rtc',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '在Web中打开摄像头和麦克风';

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
        id: "在web中打开摄像头和麦克风",
        children: "在Web中打开摄像头和麦克风"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "WebRTC（Web Real-Time Communications）是一项实时通讯技术，它允许网络应用或站点在无需中间媒介的情况下建立浏览器之间的点对点（Peer-to-Peer）连接，实现视频流、音频流或其他任意数据的传输。WebRTC所包含的标准使得用户无需安装任何插件或第三方软件即可创建点对点（Peer-to-Peer）的数据共享与音视频会议。WebRTC技术适用于所有现代浏览器和主要平台的本机客户端，其背后的技术作为开放的Web标准实现，并在所有主要浏览器中作为常规JavaScript API提供。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Web组件可以通过W3C标准协议接口访问摄像头和麦克风，通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-events/arkts-basic-components-web-events#onpermissionrequest9",
        children: "onPermissionRequest"
      }), "接口接收权限请求通知，需在配置文件中声明相应的音视频权限。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["使用摄像头和麦克风功能前请在module.json5中添加音视频相关权限，权限的添加方法请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions#%E5%9C%A8%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E4%B8%AD%E5%A3%B0%E6%98%8E%E6%9D%83%E9%99%90",
            children: "在配置文件中声明权限"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "  // src/main/resources/base/element/string.json\n  {\n    \"name\": \"reason_for_camera\",\n    \"value\": \"reason_for_camera\"\n  },\n  {\n    \"name\": \"reason_for_microphone\",\n    \"value\": \"reason_for_microphone\"\n  }\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "  // src/main/module.json5\n  \"requestPermissions\":[\n    {\n      \"name\" : \"ohos.permission.CAMERA\",\n      \"reason\": \"$string:reason_for_camera\",\n      \"usedScene\": {\n        \"abilities\": [\n          \"EntryAbility\"\n        ],\n        \"when\":\"inuse\"\n      }\n    },\n    {\n      \"name\" : \"ohos.permission.MICROPHONE\",\n      \"reason\": \"$string:reason_for_microphone\",\n      \"usedScene\": {\n        \"abilities\": [\n          \"EntryAbility\"\n        ],\n        \"when\":\"inuse\"\n      }\n    }\n  ]\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过在JavaScript中调用W3C标准协议接口navigator.mediaDevices.getUserMedia()，该接口用于拉起摄像头和麦克风。constraints参数是一个包含了video和audio两个成员的MediaStreamConstraints对象，用于说明请求的媒体类型。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在下面的示例中，点击前端页面中的开启摄像头按钮再点击onConfirm，打开摄像头和麦克风。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用侧代码。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { webview } from '@kit.ArkWeb';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { abilityAccessCtrl } from '@kit.AbilityKit';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n  uiContext: UIContext = this.getUIContext();\n\n  aboutToAppear() {\n    // 配置Web开启调试模式\n    webview.WebviewController.setWebDebuggingAccess(true);\n    // 获取权限请求通知，点击onConfirm按钮后，拉起摄像头和麦克风。\n    let atManager = abilityAccessCtrl.createAtManager();\n    atManager.requestPermissionsFromUser(this.uiContext.getHostContext(), ['ohos.permission.CAMERA', 'ohos.permission.MICROPHONE'])\n      .then((data) => {\n        console.info('data:' + JSON.stringify(data));\n        console.info('data permissions:' + data.permissions);\n        console.info('data authResults:' + data.authResults);\n      }).catch((error: BusinessError) => {\n      console.error(`Failed to request permissions from user. Code is ${error.code}, message is ${error.message}`);\n    })\n  }\n\n  build() {\n    Column() {\n      Web({ src: $rawfile('index.html'), controller: this.controller })\n        .onPermissionRequest((event) => {\n          if (event) {\n            this.uiContext.showAlertDialog({\n              title: 'title',\n              message: 'text',\n              primaryButton: {\n                value: 'deny',\n                action: () => {\n                  event.request.deny();\n                }\n              },\n              secondaryButton: {\n                value: 'onConfirm',\n                action: () => {\n                  event.request.grant(event.request.getAccessibleResource());\n                }\n              },\n              cancel: () => {\n                event.request.deny();\n              }\n            })\n          }\n        })\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "前端页面index.html代码。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "<!-- index.html -->\n<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"UTF-8\">\n</head>\n<body>\n<video id=\"video\" width=\"500px\" height=\"500px\" autoplay></video>\n<canvas id=\"canvas\" width=\"500px\" height=\"500px\"></canvas>\n<br>\n<input type=\"button\" title=\"HTML5摄像头\" value=\"开启摄像头\" onclick=\"getMedia()\"/>\n<script>\n  function getMedia()\n  {\n    let constraints = {\n      video: {width: 500, height: 500},\n      audio: true\n    };\n    // 获取video摄像头区域\n    let video = document.getElementById(\"video\");\n    // 返回的Promise对象\n    let promise = navigator.mediaDevices.getUserMedia(constraints);\n    // then()异步，调用MediaStream对象作为参数\n    promise.then(function(MediaStream) {\n      video.srcObject = MediaStream;\n      video.play();\n    }).catch(function(err) {\n        console.info(err.name + \": \" + err.message);\n    });\n  }\n</script>\n</body>\n</html>\n"
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