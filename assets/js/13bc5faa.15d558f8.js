"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["724466"], {
794601(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_system_security_api_user_authentication_api_user_authentication_comp_ohos_useriam_userauthicon_ohos_useriam_userauthicon_md_13b_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-system-security-api-user-authentication-api-user-authentication-comp-ohos-useriam-userauthicon-ohos-useriam-userauthicon-md-13b.json
var site_docs_ref_system_security_api_user_authentication_api_user_authentication_comp_ohos_useriam_userauthicon_ohos_useriam_userauthicon_md_13b_namespaceObject = JSON.parse('{"id":"system-security-api/user-authentication-api/user-authentication-comp/ohos-useriam-userauthicon/ohos-useriam-userauthicon","title":"@ohos.userIAM.userAuthIcon (嵌入式用户身份认证控件)","description":"提供应用界面上展示的人脸、指纹认证图标，具体功能如下：","source":"@site/docs-ref/system-security-api/user-authentication-api/user-authentication-comp/ohos-useriam-userauthicon/ohos-useriam-userauthicon.md","sourceDirName":"system-security-api/user-authentication-api/user-authentication-comp/ohos-useriam-userauthicon","slug":"/system-security-api/user-authentication-api/user-authentication-comp/ohos-useriam-userauthicon/ohos-useriam-userauthicon","permalink":"/harmonyos-docs-site/ref/system-security-api/user-authentication-api/user-authentication-comp/ohos-useriam-userauthicon/ohos-useriam-userauthicon","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"@ohos.userIAM.userAuthIcon (嵌入式用户身份认证控件)","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ohos-useriam-userauthicon","kit":"系统","last_updated":"2026-04-22","slug":"ohos-useriam-userauthicon"},"sidebar":"ref","previous":{"title":"@ohos.userIAM.userAuth (用户认证)","permalink":"/harmonyos-docs-site/ref/system-security-api/user-authentication-api/user-authentication-arkts/js-apis-useriam-userauth/js-apis-useriam-userauth"},"next":{"title":"用户认证错误码","permalink":"/harmonyos-docs-site/ref/system-security-api/user-authentication-api/user-authentication-arkts-errcode/errorcode-useriam/errorcode-useriam"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/system-security-api/user-authentication-api/user-authentication-comp/ohos-useriam-userauthicon/ohos-useriam-userauthicon.md


const frontMatter = {
	title: '@ohos.userIAM.userAuthIcon (嵌入式用户身份认证控件)',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ohos-useriam-userauthicon',
	kit: '系统',
	last_updated: '2026-04-22',
	slug: 'ohos-useriam-userauthicon'
};
const contentTitle = '@ohos.userIAM.userAuthIcon (嵌入式用户身份认证控件)';

const assets = {

};



const toc = [{
  "value": "导入模块",
  "id": "导入模块",
  "level": 2
}, {
  "value": "子组件",
  "id": "子组件",
  "level": 2
}, {
  "value": "属性",
  "id": "属性",
  "level": 2
}, {
  "value": "UserAuthIcon",
  "id": "userauthicon",
  "level": 2
}, {
  "value": "事件",
  "id": "事件",
  "level": 2
}, {
  "value": "示例",
  "id": "示例",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "ohosuseriamuserauthicon-嵌入式用户身份认证控件",
        children: "@ohos.userIAM.userAuthIcon (嵌入式用户身份认证控件)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "提供应用界面上展示的人脸、指纹认证图标，具体功能如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "提供嵌入式的人脸、指纹认证控件图标，可被应用集成。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "支持自定义图标的颜色和大小，但图标样式不可变更。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "点击控件图标后将以系统弹窗的方式，拉起人脸、指纹认证控件。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(703975)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "本模块首批接口从API version 12开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "导入模块",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { userAuth, UserAuthIcon } from '@kit.UserAuthenticationKit';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "子组件",
      children: "子组件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "无"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "属性",
      children: "属性"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "不支持通用属性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "userauthicon",
      children: "UserAuthIcon"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "UserAuthIcon({\n  authParam: userAuth.AuthParam,\n  widgetParam: userAuth.WidgetParam,\n  iconHeight?: Dimension,\n  iconColor?: ResourceColor,\n  onIconClick?: ()=>void,\n  onAuthResult: (result: userAuth.UserAuthResult)=>void\n})\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "装饰器类型："
        })
      }), "@Component"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.UserIAM.UserAuth.Core"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "authParam"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/user-authentication-api/user-authentication-arkts/js-apis-useriam-userauth/js-apis-useriam-userauth#authparam10",
              children: "userAuth.AuthParam"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户认证相关参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "widgetParam"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/user-authentication-api/user-authentication-arkts/js-apis-useriam-userauth/js-apis-useriam-userauth#widgetparam10",
              children: "userAuth.WidgetParam"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户认证界面配置相关参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "iconHeight"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#dimension10",
              children: "Dimension"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置icon的高度，宽高比1:1，默认64fp，不支持百分比字符串。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "iconColor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcecolor",
              children: "ResourceColor"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置icon的颜色，默认值：$r('sys.color.ohos_id_color_activated')。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onIconClick"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "()=>void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户点击icon回调接口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onAuthResult"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["(result: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/user-authentication-api/user-authentication-arkts/js-apis-useriam-userauth/js-apis-useriam-userauth#userauthresult10",
              children: "userAuth.UserAuthResult"
            }), ")=>void"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户认证结果信息回调接口。  应用需要申请ohos.permission.ACCESS_BIOMETRIC权限，否则应用将仅展示图标，无法正常拉起身份认证控件。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "事件",
      children: "事件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "不支持通用事件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例",
      children: "示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { cryptoFramework } from '@kit.CryptoArchitectureKit';\nimport { userAuth, UserAuthIcon } from '@kit.UserAuthenticationKit';\n\n@Entry\n@Component\nstruct Index {\n  rand = cryptoFramework.createRandom();\n  len: number = 16;\n  randData: Uint8Array = this.rand?.generateRandomSync(this.len)?.data;\n  authParam: userAuth.AuthParam = {\n    challenge: this.randData,\n    authType: [userAuth.UserAuthType.FACE, userAuth.UserAuthType.PIN],\n    authTrustLevel: userAuth.AuthTrustLevel.ATL3\n  };\n  widgetParam: userAuth.WidgetParam = {\n    title: '请进行身份认证'\n  };\n\n  build() {\n    Row() {\n      Column() {\n        UserAuthIcon({\n          authParam: this.authParam,\n          widgetParam: this.widgetParam,\n          iconHeight: 200,\n          iconColor: Color.Blue,\n          onIconClick: () => {\n            console.info('The user clicked the icon.');\n          },\n          onAuthResult: (result: userAuth.UserAuthResult) => {\n            console.info(`Get user auth result, result = ${result.result}`);\n          }\n        })\n      }\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["调用onAuthResult可能会抛出错误码，错误码详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-security-api/user-authentication-api/user-authentication-arkts-errcode/errorcode-useriam/errorcode-useriam",
        children: "用户认证错误码"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "人脸认证图例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(111445)/* ["default"] */.A) + "",
        width: "84",
        height: "84"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "指纹认证图例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(499282)/* ["default"] */.A) + "",
        width: "83",
        height: "84"
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
499282(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
703975(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
111445(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

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