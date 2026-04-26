"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["415526"], {
754398(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_access_control_app_permission_mgmt_request_app_permissions_one_time_authorization_one_time_authorization_md_521_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-access-control-app-permission-mgmt-request-app-permissions-one-time-authorization-one-time-authorization-md-521.json
var site_docs_system_security_access_control_app_permission_mgmt_request_app_permissions_one_time_authorization_one_time_authorization_md_521_namespaceObject = JSON.parse('{"id":"system-security/access-control/app-permission-mgmt/request-app-permissions/one-time-authorization/one-time-authorization","title":"向用户申请单次授权","description":"基于授权最小化原则，防止应用获取和滥用用户数据。针对部分应用敏感权限，在弹窗向用户申请授权时，新增“允许本次使用”的授权选项。","source":"@site/docs/system-security/access-control/app-permission-mgmt/request-app-permissions/one-time-authorization/one-time-authorization.md","sourceDirName":"system-security/access-control/app-permission-mgmt/request-app-permissions/one-time-authorization","slug":"/system-security/access-control/app-permission-mgmt/request-app-permissions/one-time-authorization/","permalink":"/harmonyos-docs-site/system-security/access-control/app-permission-mgmt/request-app-permissions/one-time-authorization/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"向用户申请单次授权","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/one-time-authorization","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"再次向用户申请授权","permalink":"/harmonyos-docs-site/system-security/access-control/app-permission-mgmt/request-app-permissions/request-user-authorization-second/"},"next":{"title":"手动设置授权","permalink":"/harmonyos-docs-site/system-security/access-control/app-permission-mgmt/request-app-permissions/open-permission-on-setting/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/access-control/app-permission-mgmt/request-app-permissions/one-time-authorization/one-time-authorization.md


const frontMatter = {
	title: '向用户申请单次授权',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/one-time-authorization',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '向用户申请单次授权';

const assets = {

};



const toc = [{
  "value": "支持范围",
  "id": "支持范围",
  "level": 2
}, {
  "value": "使用限制",
  "id": "使用限制",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "向用户申请单次授权",
        children: "向用户申请单次授权"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "基于授权最小化原则，防止应用获取和滥用用户数据。针对部分应用敏感权限，在弹窗向用户申请授权时，新增“允许本次使用”的授权选项。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者在开发应用时，无需额外配置，仍然调用requestPermissionsFromUser()", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/request-user-authorization",
        children: "向用户申请授权"
      }), "。系统会根据该能力", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E6%94%AF%E6%8C%81%E8%8C%83%E5%9B%B4",
        children: "支持的权限"
      }), "，弹出对应的弹窗。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "授权弹窗如下图所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(492546)/* ["default"] */.A) + "",
        width: "346",
        height: "447"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "同时，用户可以在“设置”中修改授权。修改路径：设置 > 隐私 > 权限管理 > 应用 > 目标应用 > 位置信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "支持范围",
      children: "支持范围"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前仅支持以下权限，当应用向用户申请这些权限时，弹窗将显示“允许本次使用”的选项；在设置中修改这些权限时，系统将显示“每次询问”的选项。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["剪切板：", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-security/access-control/app-permission-mgmt/app-permissions/restricted-permissions#ohospermissionread_pasteboard",
          children: "\"ohos.permission.READ_PASTEBOARD\""
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["模糊位置：", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-security/access-control/app-permission-mgmt/app-permissions/permissions-for-all-user#ohospermissionapproximately_location",
          children: "\"ohos.permission.APPROXIMATELY_LOCATION\""
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["位置：", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-security/access-control/app-permission-mgmt/app-permissions/permissions-for-all-user#ohospermissionlocation",
          children: "\"ohos.permission.LOCATION\""
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["后台位置：", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-security/access-control/app-permission-mgmt/app-permissions/permissions-for-all-user#ohospermissionlocation_in_background",
          children: "\"ohos.permission.LOCATION_IN_BACKGROUND\""
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用限制",
      children: "使用限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当用户点击“允许本次使用”按钮后，应用将获得临时权限。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["当应用切换至前台、应用展开卡片且处于当前屏幕可见即", (0,jsx_runtime.jsx)(_components.a, {
                href: "/form-kit/arkts-ui/arkts-ui-widget-lifecycle",
                children: "卡片可见"
              }), "或者", (0,jsx_runtime.jsx)(_components.a, {
                href: "/background-task-kit/continuous-task",
                children: "设置后台长时任务"
              }), "的时候（当前仅支持定位导航长时任务），应用的临时权限会一直保持。"]
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "其他情况下启动计时器，十秒后取消临时权限。若需再次获取，必须重新授予。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "当应用切换到后台，开始十秒计时，如果在计时期间，应用处于卡片可见状态或者设置了后台长时任务，计时停止。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "当卡片不再可见或长时任务结束时，再次启动十秒计时，计时结束后，取消临时授权。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "如下图样例所示，小艺建议处于卡片可见状态："
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(184432)/* ["default"] */.A) + "",
                width: "367",
                height: "183"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当用户在权限设置中选择“每次询问”时，应用将获得模糊位置和位置临时权限。取消临时授权的操作与此相同。"
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
184432(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958356-a7b38723b5c9b5753bb4ee4240ab4b54.png");

},
492546(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438401-a5c75647b0b83e9c2a9cae449433d8e6.png");

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