"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["398644"], {
518955(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_screen_time_guard_kit_guide_screentimeguard_interface_call_auth_screentimeguard_switch_state_change_callback_screentimeguard_switch_state_change_callback_md_c2c_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-screen-time-guard-kit-guide-screentimeguard-interface-call-auth-screentimeguard-switch-state-change-callback-screentimeguard-switch-state-change-callback-md-c2c.json
var site_docs_screen_time_guard_kit_guide_screentimeguard_interface_call_auth_screentimeguard_switch_state_change_callback_screentimeguard_switch_state_change_callback_md_c2c_namespaceObject = JSON.parse('{"id":"screen-time-guard-kit-guide/screentimeguard-interface-call-auth/screentimeguard-switch-state-change-callback/screentimeguard-switch-state-change-callback","title":"健康使用设备授权列表页中应用授权开关打开/关闭时触发回调","description":"场景介绍","source":"@site/docs/screen-time-guard-kit-guide/screentimeguard-interface-call-auth/screentimeguard-switch-state-change-callback/screentimeguard-switch-state-change-callback.md","sourceDirName":"screen-time-guard-kit-guide/screentimeguard-interface-call-auth/screentimeguard-switch-state-change-callback","slug":"/screen-time-guard-kit-guide/screentimeguard-interface-call-auth/screentimeguard-switch-state-change-callback/","permalink":"/harmonyos-docs-site/screen-time-guard-kit-guide/screentimeguard-interface-call-auth/screentimeguard-switch-state-change-callback/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"健康使用设备授权列表页中应用授权开关打开/关闭时触发回调","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/screentimeguard-switch-state-change-callback","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"取消用户授权","permalink":"/harmonyos-docs-site/screen-time-guard-kit-guide/screentimeguard-interface-call-auth/screentimeguard-revoke-user-auth/"},"next":{"title":"概述","permalink":"/harmonyos-docs-site/screen-time-guard-kit-guide/screentimeguard-app-picker-pages/screentimeguard-app-picker-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/screen-time-guard-kit-guide/screentimeguard-interface-call-auth/screentimeguard-switch-state-change-callback/screentimeguard-switch-state-change-callback.md


const frontMatter = {
	title: '健康使用设备授权列表页中应用授权开关打开/关闭时触发回调',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/screentimeguard-switch-state-change-callback',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '健康使用设备授权列表页中应用授权开关打开/关闭时触发回调';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "业务流程",
  "id": "业务流程",
  "level": 2
}, {
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
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
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "健康使用设备授权列表页中应用授权开关打开关闭时触发回调",
        children: "健康使用设备授权列表页中应用授权开关打开/关闭时触发回调"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当通过健康使用设备授权列表页中的授权开关开启或者关闭应用授权时（设置-健康使用设备-右上角四点设置", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(312157)/* ["default"] */.A) + "",
        width: "45",
        height: "42"
      }), "-可访问健康使用设备的应用），会执行TimeGuardExtensionAbility中的onUserAuthSwitchOn/onUserAuthSwitchOff回调方法，支持开发者在用户授予授权和撤销授权时执行特定逻辑。若之前已设置过健康使用设备的密码，则在此页面取消应用授权时需要输入健康使用设备的密码。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(150376)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用调用Screen Time Guard Kit接口获取授权或者取消授权时，不会触发onUserAuthSwitchOn/onUserAuthSwitchOff回调方法。只有在健康使用设备授权列表页操作授权开关时才会触发。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(615082)/* ["default"] */.A) + "",
        width: "1104",
        height: "624"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "业务流程",
      children: "业务流程"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(515613)/* ["default"] */.A) + "",
        width: "881",
        height: "471"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "流程说明（以关闭授权开关为例）："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用继承TimeGuardExtensionAbility，实现onUserAuthSwitchOn、onUserAuthSwitchOff方法，以监听用户授权状态。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "用户在健康使用设备的授权列表页中关闭授权开关后会拉起extension进程，执行TimeGuardExtensionAbility的onUserAuthSwitchOff回调。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "onUserAuthSwitchOff回调执行，应用可以在该回调中可以执行特定逻辑。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "授权开关打开/关闭时的回调关键接口如下表所示："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/screen-time-guard-api/screentimeguard-arkts/screentimeguard-timeguardextensionability/screentimeguard-timeguardextensionability#onuserauthswitchon",
              children: "onUserAuthSwitchOn"
            }), "(): Promise<void>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当用户授予授权时执行特定逻辑。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/screen-time-guard-api/screentimeguard-arkts/screentimeguard-timeguardextensionability/screentimeguard-timeguardextensionability#onuserauthswitchoff",
              children: "onUserAuthSwitchOff"
            }), "(): Promise<void>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当用户撤销授权时执行特定逻辑。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(134881)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "TimeGuardExtensionAbility与应用运行在不同进程，但共用沙箱。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["TimeGuardExtensionAbility与应用直接无法直接传递数据，如需传递数据可以通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-preferences/js-apis-data-preferences",
          children: "用户首选项"
        }), "/", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/js-apis-data-relationalstore",
          children: "数据库"
        }), "等数据持久化手段进行传递，或者通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/js-apis-commoneventmanager/js-apis-commoneventmanager",
          children: "公共事件模块"
        }), "传递。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入相关模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { TimeGuardExtensionAbility } from '@kit.ScreenTimeGuardKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "继承TimeGuardExtensionAbility，重写onUserAuthSwitchOn和onUserAuthSwitchOff 回调。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "export default class EntryAbility extends TimeGuardExtensionAbility {\n   async onUserAuthSwitchOn(): Promise<void> {\n      hilog.info(0x0000, 'EntryAbility', 'test --- onUserAuthSwitchOn');\n   }\n\n   async onUserAuthSwitchOff(): Promise<void> {\n      hilog.info(0x0000, 'EntryAbility', 'test --- onUserAuthSwitchOff');\n   }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在工程中entry模块的module.json5文件中的\"extensionAbilities\"节点添加如下代码。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "\"extensionAbilities\": [{\n   \"name\": \"EntryAbility\",\n   \"type\": \"screenTimeGuard\",\n   \"srcEntry\": \"./ets/entryability/EntryAbility.ets\",\n   \"exported\": false,\n   \"skills\": [{\n   \"actions\": [\"action.ohos.timeGuard.listener\"]\n   }]\n}],\n"
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
150376(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
312157(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
134881(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
515613(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959166-a67033b945f55c1850ad3b127d02704d.png");

},
615082(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439211-fbe661de0c411fd6816cb60e5785a6d7.png");

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