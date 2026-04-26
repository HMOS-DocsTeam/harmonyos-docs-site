"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["425169"], {
778737(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_screen_time_guard_kit_guide_screentimeguard_preparations_screentimeguard_permission_application_screentimeguard_permission_application_md_e8e_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-screen-time-guard-kit-guide-screentimeguard-preparations-screentimeguard-permission-application-screentimeguard-permission-application-md-e8e.json
var site_docs_screen_time_guard_kit_guide_screentimeguard_preparations_screentimeguard_permission_application_screentimeguard_permission_application_md_e8e_namespaceObject = JSON.parse('{"id":"screen-time-guard-kit-guide/screentimeguard-preparations/screentimeguard-permission-application/screentimeguard-permission-application","title":"受限ACL权限申请","description":"1. 在 申请调试Profile和发布Profile文件之前，需要申请相应的ACL权限。","source":"@site/docs/screen-time-guard-kit-guide/screentimeguard-preparations/screentimeguard-permission-application/screentimeguard-permission-application.md","sourceDirName":"screen-time-guard-kit-guide/screentimeguard-preparations/screentimeguard-permission-application","slug":"/screen-time-guard-kit-guide/screentimeguard-preparations/screentimeguard-permission-application/","permalink":"/harmonyos-docs-site/screen-time-guard-kit-guide/screentimeguard-preparations/screentimeguard-permission-application/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"受限ACL权限申请","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/screentimeguard-permission-application","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"配置签名","permalink":"/harmonyos-docs-site/screen-time-guard-kit-guide/screentimeguard-preparations/screentimeguard-app-signature/"},"next":{"title":"概述","permalink":"/harmonyos-docs-site/screen-time-guard-kit-guide/screentimeguard-interface-call-auth/screentimeguard-interface-call-auth-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/screen-time-guard-kit-guide/screentimeguard-preparations/screentimeguard-permission-application/screentimeguard-permission-application.md


const frontMatter = {
	title: '受限ACL权限申请',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/screentimeguard-permission-application',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '受限ACL权限申请';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    header: "header",
    img: "img",
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
        id: "受限acl权限申请",
        children: "受限ACL权限申请"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在 ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/doc/app/agc-help-debug-profile-0000002248181278",
            children: "申请调试Profile"
          }), "和", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/doc/app/agc-help-release-profile-0000002248341090",
            children: "发布Profile文件"
          }), "之前，需要", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/doc/app/agc-help-apply-acl-0000002394212138",
            children: "申请相应的ACL权限"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["登录", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/service/josp/agc/index.html#/",
            children: "AppGallery Connect"
          }), "，点击“开发与服务”，在项目列表中找到对应的项目，并点击选择您需要申请ACL权限的应用。在“项目设置”页面，选择“ACL权限”页签，开始为应用申请ACL权限。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(901364)/* ["default"] */.A) + "",
            width: "1099",
            height: "263"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在核对注意事项后，在“未获取权限”区域中勾选“我已知晓”。在权限搜索框中输入\"ohos.permission.MANAGE_SCREEN_TIME_GUARD\"，查找并勾选权限，提交申请。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "根据实际业务需求填写申请原因并提交，提交后将在1个工作日回复。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(966067)/* ["default"] */.A) + "",
            width: "950",
            height: "543"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "权限申请通过后，在申请profile文件时，在“申请权限”栏选中“受限ACL权限（HarmonyOS API9及以上）”选项，点击“选择”。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(367783)/* ["default"] */.A) + "",
            width: "445",
            height: "97"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在弹出的“选择受限ACL权限”窗口可以看到已申请的权限，勾选后点击确定。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(778908)/* ["default"] */.A) + "",
            width: "849",
            height: "352"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["选择权限后点击“添加”生成新的Profile文件，下载后按", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ide-signing#section297715173233",
            children: "手动配置签名信息"
          }), "替换profile文件。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在工程中entry模块的module.json5文件中添加\"ohos.permission.MANAGE_SCREEN_TIME_GUARD\"权限，如下所示："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "\"requestPermissions\": [{\n   \"name\": \"ohos.permission.MANAGE_SCREEN_TIME_GUARD\"\n}]\n"
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
778908(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799514-871ee429a4a8a670802299d1f990fb6e.png");

},
966067(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959162-063a12b5fb0276efd9ff2f66e6b083e9.png");

},
901364(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439207-69d70af0f59fd3515e6a94490a72ae51.png");

},
367783(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479163-3e00e4a1639822ae67ce8bbfe8232199.png");

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