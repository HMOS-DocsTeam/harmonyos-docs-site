"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["447176"], {
367157(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_hardware_wear_engine_kit_guide_wearengine_phonedev_wear_engine_app_development_request_user_authorization_request_user_authorization_md_947_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-hardware-wear-engine-kit-guide-wearengine-phonedev-wear-engine-app-development-request-user-authorization-request-user-authorization-md-947.json
var site_docs_system_hardware_wear_engine_kit_guide_wearengine_phonedev_wear_engine_app_development_request_user_authorization_request_user_authorization_md_947_namespaceObject = JSON.parse('{"id":"system-hardware/wear-engine-kit-guide/wearengine_phonedev/wear-engine-app-development/request_user_authorization/request_user_authorization","title":"请求用户授权","description":"为保护用户隐私，Wear Engine的API需要用户授权才可以正常访问。建议开发者在用户首次调用Wear Engine开放能力的时候执行本章节操作。","source":"@site/docs/system-hardware/wear-engine-kit-guide/wearengine_phonedev/wear-engine-app-development/request_user_authorization/request_user_authorization.md","sourceDirName":"system-hardware/wear-engine-kit-guide/wearengine_phonedev/wear-engine-app-development/request_user_authorization","slug":"/system-hardware/wear-engine-kit-guide/wearengine_phonedev/wear-engine-app-development/request_user_authorization/","permalink":"/harmonyos-docs-site/system-hardware/wear-engine-kit-guide/wearengine_phonedev/wear-engine-app-development/request_user_authorization/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"请求用户授权","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/request_user_authorization","kit":"system/hardware","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"已连接穿戴设备查询","permalink":"/harmonyos-docs-site/system-hardware/wear-engine-kit-guide/wearengine_phonedev/wear-engine-app-development/query_connected_devices/"},"next":{"title":"穿戴设备信息查询","permalink":"/harmonyos-docs-site/system-hardware/wear-engine-kit-guide/wearengine_phonedev/wear-engine-app-development/query_device_info/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-hardware/wear-engine-kit-guide/wearengine_phonedev/wear-engine-app-development/request_user_authorization/request_user_authorization.md


const frontMatter = {
	title: '请求用户授权',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/request_user_authorization',
	kit: 'system/hardware',
	last_updated: '2026-04-22'
};
const contentTitle = '请求用户授权';

const assets = {

};



const toc = [{
  "value": "申请用户穿戴设备权限",
  "id": "申请用户穿戴设备权限",
  "level": 2
}, {
  "value": "查询用户授权结果",
  "id": "查询用户授权结果",
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
        id: "请求用户授权",
        children: "请求用户授权"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为保护用户隐私，Wear Engine的API需要用户授权才可以正常访问。建议开发者在用户首次调用Wear Engine开放能力的时候执行本章节操作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "申请用户穿戴设备权限",
      children: "申请用户穿戴设备权限"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用拉起华为账号登录和授权界面，由用户授权相应的数据访问权限。用户可以自主选择授权的数据类型，可以只授权部分数据权限。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(124244)/* ["default"] */.A) + "",
        width: "224",
        height: "465"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["应用调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-hardware-api/wear-engine-api/wearengine_arkts_api/wearengine_api/wearengine_api",
            children: "wearEngine"
          }), "中的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-hardware-api/wear-engine-api/wearengine_arkts_api/wearengine_api/wearengine_api#wearenginegetauthclient",
            children: "getAuthClient"
          }), "方法，获取", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-hardware-api/wear-engine-api/wearengine_arkts_api/wearengine_api/wearengine_api#authclient",
            children: "AuthClient"
          }), "对象。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["定义需要用户授权的权限请求类", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-hardware-api/wear-engine-api/wearengine_arkts_api/wearengine_api/wearengine_api#authorizationrequest",
            children: "AuthorizationRequest"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-hardware-api/wear-engine-api/wearengine_arkts_api/wearengine_api/wearengine_api#requestauthorization",
            children: "requestAuthorization"
          }), "方法，向用户请求权限。执行成功后，会弹出授权界面，让用户选择授予权限（若未登录华为账号则会先弹出登录界面）。当用户允许后才能正常使用接口，否则会遇到错误码为201的提示。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(279948)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["请确保向用户请求的权限已在", (0,jsx_runtime.jsx)(_components.a, {
              href: "/system-hardware/wear-engine-kit-guide/wearengine_phonedev/wearengine_preparation/wearengine_apply",
              children: "申请接入Wear Engine服务"
            }), "中审批通过，否则会遇到错误码为1008500004的提示。"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "该功能可以多次调用，如果申请的权限之前已经授予了，不会再弹出授权页面，接口会返回已经授权的权限。"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["通过入参的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_arkts_api/wearengine_api/wearengine_api#authorizationrequest",
              children: "AuthorizationRequest"
            }), "对象，获取应用需要的权限。参见步骤3中", (0,jsx_runtime.jsx)(_components.a, {
              href: "/system-hardware/wear-engine-kit-guide/wearengine_phonedev/wearengine_preparation/wearengine_apply",
              children: "权限说明"
            }), "了解应用所需请求的权限类型。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_arkts_api/wearengine_api/wearengine_api#authorizationresponse",
              children: "AuthorizationResponse"
            }), "对象，返回用户的授权结果。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 在使用Wear Engine服务前，请导入WearEngine与相关模块\nimport { wearEngine } from '@kit.WearEngine';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n// 步骤1：获取AuthClient对象\nlet authClient: wearEngine.AuthClient = wearEngine.getAuthClient(this.getUIContext().getHostContext());\n\n// 步骤2：基于需要用户授权的权限定义权限请求类\nlet request: wearEngine.AuthorizationRequest = {\n  permissions: [wearEngine.Permission.USER_STATUS]\n}\n\n// 步骤3：请求用户授权\nauthClient.requestAuthorization(request).then(result => {\n  console.info(`Succeeded in requesting authorize, authorized permissions is ${result.permissions}`);\n}).catch((error: BusinessError) => {\n  console.error(`Failed to request authorize. Code is ${error.code}, message is ${error.message}`);\n})\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "查询用户授权结果",
      children: "查询用户授权结果"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["用于查询已被用户授予的应用权限。如果所需权限用户未授权，请参见上一节", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E7%94%B3%E8%AF%B7%E7%94%A8%E6%88%B7%E7%A9%BF%E6%88%B4%E8%AE%BE%E5%A4%87%E6%9D%83%E9%99%90",
        children: "申请用户穿戴设备权限"
      }), "向用户请求权限。建议在请求用户授权前，先使用该接口查询应用是否已有相关权限。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(574751)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["请确保权限已在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-hardware/wear-engine-kit-guide/wearengine_phonedev/wearengine_preparation/wearengine_apply",
        children: "申请接入Wear Engine服务"
      }), "中审批通过，否则会遇到错误码为1008500004的提示。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["应用调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-hardware-api/wear-engine-api/wearengine_arkts_api/wearengine_api/wearengine_api",
            children: "wearEngine"
          }), "中的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-hardware-api/wear-engine-api/wearengine_arkts_api/wearengine_api/wearengine_api#wearenginegetauthclient",
            children: "getAuthClient"
          }), "方法，获取", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-hardware-api/wear-engine-api/wearengine_arkts_api/wearengine_api/wearengine_api#authclient",
            children: "AuthClient"
          }), "对象。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-hardware-api/wear-engine-api/wearengine_arkts_api/wearengine_api/wearengine_api#getauthorization",
            children: "getAuthorization"
          }), "方法，查询用户已授权的权限。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 在使用Wear Engine服务前，请导入WearEngine与相关模块\nimport { wearEngine } from '@kit.WearEngine';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n// 步骤1：获取AuthClient对象\nlet authClient: wearEngine.AuthClient = wearEngine.getAuthClient(this.getUIContext().getHostContext());\n\n// 步骤2：调用API查询已授权权限\nauthClient.getAuthorization().then(result => {\n  console.info(`Succeeded in getting authorized permissions, authorized permissions is ${result.permissions}`);\n}).catch((error: BusinessError) => {\n  console.error(`Failed to get authorized permissions. Code is ${error.code}, message is ${error.message}`);\n})\n"
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
574751(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
279948(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
124244(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958488-204ea3b1ec28387a55f0e9cb02258f85.png");

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