"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["161406"], {
365493(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_screen_time_guard_kit_guide_screentimeguard_apps_restriction_screentimeguard_release_apps_restriction_screentimeguard_release_apps_restriction_md_f99_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-screen-time-guard-kit-guide-screentimeguard-apps-restriction-screentimeguard-release-apps-restriction-screentimeguard-release-apps-restriction-md-f99.json
var site_docs_screen_time_guard_kit_guide_screentimeguard_apps_restriction_screentimeguard_release_apps_restriction_screentimeguard_release_apps_restriction_md_f99_namespaceObject = JSON.parse('{"id":"screen-time-guard-kit-guide/screentimeguard-apps-restriction/screentimeguard-release-apps-restriction/screentimeguard-release-apps-restriction","title":"解除应用访问限制","description":"场景介绍","source":"@site/docs/screen-time-guard-kit-guide/screentimeguard-apps-restriction/screentimeguard-release-apps-restriction/screentimeguard-release-apps-restriction.md","sourceDirName":"screen-time-guard-kit-guide/screentimeguard-apps-restriction/screentimeguard-release-apps-restriction","slug":"/screen-time-guard-kit-guide/screentimeguard-apps-restriction/screentimeguard-release-apps-restriction/","permalink":"/harmonyos-docs-site/screen-time-guard-kit-guide/screentimeguard-apps-restriction/screentimeguard-release-apps-restriction/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"解除应用访问限制","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/screentimeguard-release-apps-restriction","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"设置应用访问限制","permalink":"/harmonyos-docs-site/screen-time-guard-kit-guide/screentimeguard-apps-restriction/screentimeguard-set-apps-restriction/"},"next":{"title":"Share Kit简介","permalink":"/harmonyos-docs-site/share-kit-guide/share-introduction/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/screen-time-guard-kit-guide/screentimeguard-apps-restriction/screentimeguard-release-apps-restriction/screentimeguard-release-apps-restriction.md


const frontMatter = {
	title: '解除应用访问限制',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/screentimeguard-release-apps-restriction',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '解除应用访问限制';

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
  "value": "开发前提",
  "id": "开发前提",
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
    strong: "strong",
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
        id: "解除应用访问限制",
        children: "解除应用访问限制"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当用户希望解除用户访问某些特定应用的限制时，可以调用解除应用访问限制的接口。根据参数中传入的token以及限制类型（允许/禁用），将允许/禁用清单解析后，解除对应的应用的限制。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "业务流程",
      children: "业务流程"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(693833)/* ["default"] */.A) + "",
        width: "669",
        height: "721"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "流程说明："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用调用解除应用访问限制的接口，拉起健康使用设备查询开发者是否已申请权限，以及用户是否授权。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "若开发者没有权限或用户没有授权，则抛出相应错误码。若开发者有权限且用户已授权，则解析参数中传入的限制类型以及token。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "该接口判断传入的应用列表，是否其中有应用被其他三方应用或健康使用设备设置的策略给管控，若有，则对应的应用不解除限制。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "对剩余的应用解除限制，返回处理结果。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "解除应用访问限制的关键接口如下表所示："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/screen-time-guard-api/screentimeguard-arkts/screentimeguard-guardservice/screentimeguard-guardservice#releaseappsrestriction",
              children: "releaseAppsRestriction"
            }), "(appInfo: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/screen-time-guard-api/screentimeguard-arkts/screentimeguard-guardservice/screentimeguard-guardservice#appinfo",
              children: "AppInfo"
            }), ", restrictionType: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/screen-time-guard-api/screentimeguard-arkts/screentimeguard-guardservice/screentimeguard-guardservice#restrictiontype",
              children: "RestrictionType"
            }), "): Promise<void>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据传入的应用token数组和限制类型（允许/禁用清单），解除对应应用的访问限制。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(449422)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "定义释义："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "限制类型为禁用清单时，对应用数组中的应用做解除限制。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "限制类型为允许清单时，对应用数组以外的应用做解除限制。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "边界场景："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1、如果传入的应用数组为空，限制类型为禁用清单，则不对任何应用做解除限制。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "2、如果传入的应用数组为空，限制类型为允许清单，则对除了系统内置允许清单应用（电话、联系人、设置、未成年人模式）、管控发起应用本身、已授权的管控应用之外的所有应用做解除限制。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "3、同一个管控应用的限制和解除限制需对称使用，即解除限制必须和其限制的类型匹配上，如不匹配，则为参数错误；如果之前没有做过setAppsRestriction管控，也为参数错误。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "4、如果要对之前用禁用清单方式做限制的应用做解除限制，则传入的应用数组需包含所有的禁用清单应用，才可全部解除。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "5、传入的应用数组中如果包含了限制时传入的应用数组以外的应用（或包含无效token），则为参数错误。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发前提",
      children: "开发前提"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["解除应用访问限制需要申请用户授权，请先参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/screen-time-guard-kit-guide/screentimeguard-interface-call-auth/screentimeguard-request-user-auth",
        children: "请求用户授权"
      }), "章节完成用户授权。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入相关模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { guardService, appPicker } from '@kit.ScreenTimeGuardKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用releaseAppsRestriction，解除应用访问限制。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Entry\n@Component\nstruct TestPage {\n   build() {\n      Column() {\n         Button(\"TestReleaseAppsRestriction\")\n            .onClick(async () => {\n               try {\n                  // 先调用startAppPicker获取相应应用的token\n                  const tokens = await appPicker.startAppPicker(this.getUIContext().getHostContext(), { appTokens: [] });\n\n                  const appInfo: guardService.AppInfo = { appTokens: tokens };\n                  const restrictionType: guardService.RestrictionType = guardService.RestrictionType.BLOCKLIST_TYPE;\n                  await guardService.releaseAppsRestriction(appInfo, restrictionType);\n               } catch (err) {\n                  const message = (err as BusinessError).message;\n                  const code = (err as BusinessError).code;\n                  hilog.error(0x0000, `ScreenTimeGuard:releaseAppsRestriction`, `releaseAppsRestriction failed with error code: ${code}, message: ${message}`)\n               }\n            })\n      }\n   }\n}\n"
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
693833(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479175-5cdd17eef382cd4713e12f5e711effac.png");

},
449422(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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