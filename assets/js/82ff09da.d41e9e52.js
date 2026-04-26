"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["213362"], {
452945(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_user_authentication_kit_user_authentication_dev_apply_custom_authentication_apply_custom_authentication_md_82f_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-user-authentication-kit-user-authentication-dev-apply-custom-authentication-apply-custom-authentication-md-82f.json
var site_docs_system_security_user_authentication_kit_user_authentication_dev_apply_custom_authentication_apply_custom_authentication_md_82f_namespaceObject = JSON.parse('{"id":"system-security/user-authentication-kit/user-authentication-dev/apply-custom-authentication/apply-custom-authentication","title":"切换自定义认证","description":"若开发者定义了自定义认证方式，则用户进行生物认证失败点击导航按钮时，统一用户认证框架会结束系统认证流程并通知调用者拉起自定义认证界面。","source":"@site/docs/system-security/user-authentication-kit/user-authentication-dev/apply-custom-authentication/apply-custom-authentication.md","sourceDirName":"system-security/user-authentication-kit/user-authentication-dev/apply-custom-authentication","slug":"/system-security/user-authentication-kit/user-authentication-dev/apply-custom-authentication/","permalink":"/harmonyos-docs-site/system-security/user-authentication-kit/user-authentication-dev/apply-custom-authentication/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"切换自定义认证","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/apply-custom-authentication","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"感知和调整认证过程","permalink":"/harmonyos-docs-site/system-security/user-authentication-kit/user-authentication-dev/perceive-adjust-authentication-process/"},"next":{"title":"查询用户注册凭据的状态","permalink":"/harmonyos-docs-site/system-security/user-authentication-kit/user-authentication-dev/obtain-enrolled-state-capabilities/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/user-authentication-kit/user-authentication-dev/apply-custom-authentication/apply-custom-authentication.md


const frontMatter = {
	title: '切换自定义认证',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/apply-custom-authentication',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '切换自定义认证';

const assets = {

};



const toc = [{
  "value": "开发示例",
  "id": "开发示例",
  "level": 2
}, {
  "value": "示例代码",
  "id": "示例代码",
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
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "切换自定义认证",
        children: "切换自定义认证"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "若开发者定义了自定义认证方式，则用户进行生物认证失败点击导航按钮时，统一用户认证框架会结束系统认证流程并通知调用者拉起自定义认证界面。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "例如，在支付场景中，如果厂商自定义了支付密码认证的方式，当调用系统人脸或指纹认证失败后，用户可以选择切换支付密码认证。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "支付密码认证不属于系统认证能力，因此业务在发起认证时需要传入导航键的显式信息，例如“使用支付密码”。这样，用户看到的认证界面便会包含一个“使用支付密码”的按钮。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当用户点击该按钮，发起认证的业务应用便会收到统一用户认证框架返回的一个特殊认证结果，提示业务系统认证结束，需要拉起业务自定义的认证界面。这样，用户在点击“使用支付密码”按钮后，便会看到系统认证控件消失，显示出业务自定义的支付密码认证界面。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(11686)/* ["default"] */.A) + "",
        width: "334",
        height: "344"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如图所示，框选区域为WidgetParam.navigationButtonText字段。开发者可配置此字段，引导用户从生物认证切换到应用自定义的业务密码认证。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(492980)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "锁屏口令认证与业务自定义认证只能二选一，不能同时存在。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "认证类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "支持切换业务自定义认证方式。  （√表示支持，x表示不支持。）"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "锁屏口令认证"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "×"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "人脸认证"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "指纹认证"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "人脸+指纹18+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "人脸+锁屏口令认证"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "×"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "指纹+锁屏口令认证"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "×"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "人脸+指纹+锁屏口令认证"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "×"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发示例",
      children: "开发示例"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["针对需要切换自定义认证方式的场景，发起认证请求的方式请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/user-authentication-kit/user-authentication-dev/start-authentication",
        children: "发起认证"
      }), "，但传入的widgetParam必须包含navigationButtonText字段。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前示例仅展示如何配置界面和选择切换到自定义认证界面。具体拉起的页面及对应页面的实现，请开发者自行实现，代码插入位置可参考注释提示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "handleCustomAuthResult(userAuthInstance: userAuth.UserAuthInstance, exampleNumber: number) {\n  // ...\n    userAuthInstance.on('result', {\n      onResult: (result: userAuth.UserAuthResult) => {\n        // ...\n          Logger.info('userAuthInstance callback');\n          // ...\n          if (result.result == userAuth.UserAuthResultCode.CANCELED_FROM_WIDGET ||\n            result.result == userAuth.UserAuthResultCode.NOT_ENROLLED) {\n            // 请开发者自行完成拉起自定义认证界面的实现\n            // ...\n          }\n          // ...\n      }\n    });\n    // 启动认证\n    userAuthInstance.start();\n    Logger.info('auth start successfully');\n    // ...\n}\n\n/*\n * apply-custom-authentication.md\n * 当前示例仅展示如何配置界面、选择切换到自定义认证界面，具体拉起的页面及对应页面的实现，请开发者自行实现\n * */\napplyingCustomAuthentication() {\n  try {\n    const randData = getRandData();\n    if (!randData) {\n      return;\n    }\n    const authParam: userAuth.AuthParam = {\n      challenge: randData,\n      authType: [userAuth.UserAuthType.FACE],\n      authTrustLevel: userAuth.AuthTrustLevel.ATL3,\n    };\n    // 配置自定义认证，需设置导航键文本\n    const widgetParam: userAuth.WidgetParam = {\n      title: resourceToString($r('app.string.title')),\n      navigationButtonText: resourceToString($r('app.string.navigationButtonText'))\n    };\n    // 获取认证对象\n    const userAuthInstance = userAuth.getUserAuthInstance(authParam, widgetParam);\n    Logger.info('get userAuth instance successfully');\n    // 订阅认证结果\n    this.handleCustomAuthResult(userAuthInstance, ResultIndex.CUSTOMIZE);\n  } catch (error) {\n    const err: BusinessError = error as BusinessError;\n    Logger.error(`auth failed, code is ${err?.code}, message is ${err?.message}`);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例代码",
      children: "示例代码"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://gitcode.com/openharmony/applications_app_samples/blob/master/code/DocsSample/UserAuthentication",
          children: "切换自定义认证"
        })
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
11686(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438463-ed0661aa7537d6b6eaebf5c1ee9b4c11.png");

},
492980(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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