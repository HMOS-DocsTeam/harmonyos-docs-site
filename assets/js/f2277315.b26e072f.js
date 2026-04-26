"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["745855"], {
817980(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_payment_kit_guide_payment_preparations_payment_config_app_identity_info_payment_config_app_identity_info_md_f22_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-payment-kit-guide-payment-preparations-payment-config-app-identity-info-payment-config-app-identity-info-md-f22.json
var site_docs_payment_kit_guide_payment_preparations_payment_config_app_identity_info_payment_config_app_identity_info_md_f22_namespaceObject = JSON.parse('{"id":"payment-kit-guide/payment-preparations/payment-config-app-identity-info/payment-config-app-identity-info","title":"端侧应用配置","description":"可下载并参考示例代码-客户端，以此来快速的完成商户端侧应用开发环境的构建。","source":"@site/docs/payment-kit-guide/payment-preparations/payment-config-app-identity-info/payment-config-app-identity-info.md","sourceDirName":"payment-kit-guide/payment-preparations/payment-config-app-identity-info","slug":"/payment-kit-guide/payment-preparations/payment-config-app-identity-info/","permalink":"/harmonyos-docs-site/payment-kit-guide/payment-preparations/payment-config-app-identity-info/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"端侧应用配置","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/payment-config-app-identity-info","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"准备证书","permalink":"/harmonyos-docs-site/payment-kit-guide/payment-preparations/payment-certificates-config/"},"next":{"title":"云侧服务准备","permalink":"/harmonyos-docs-site/payment-kit-guide/payment-preparations/payment-server-connect/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/payment-kit-guide/payment-preparations/payment-config-app-identity-info/payment-config-app-identity-info.md


const frontMatter = {
	title: '端侧应用配置',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/payment-config-app-identity-info',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '端侧应用配置';

const assets = {

};



const toc = [{
  "value": "配置bundleName",
  "id": "配置bundlename",
  "level": 2
}, {
  "value": "配置应用属性",
  "id": "配置应用属性",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "端侧应用配置",
        children: "端侧应用配置"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["可下载并参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/HarmonyOS_Samples/payment-kit-sample-code-clientdemo-arkts",
        children: "示例代码-客户端"
      }), "，以此来快速的完成商户端侧应用开发环境的构建。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过下载示例代码或商户自行创建端侧应用后，需完成以下配置："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "配置bundleName"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "配置应用属性"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "配置bundlename",
      children: "配置bundleName"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在HarmonyOS应用/元服务“AppScope/app.json5”下的", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "bundleName"
        })
      }), "配置需要与开发者在", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/service/josp/agc/index.html",
        children: "AppGallery Connect"
      }), "中", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/service/josp/agc/index.html",
        children: "创建应用"
      }), "时的包名保持一致。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "配置内容示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"app\": {\n    \"bundleName\": \"com.huawei.******.******.demo\",\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "配置应用属性",
      children: "配置应用属性"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在HarmonyOS应用/元服务“entry/src/main/module.json5”文件中", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "module"
        })
      }), "的", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "metadata"
        })
      }), "节点下增加", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "client_id"
        })
      }), "和", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "app_id"
        })
      }), "属性配置。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "配置内容示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n    \"module\": {\n        \"metadata\": [\n            {\n                \"name\": \"app_id\",\n                \"value\": \"...\"\n            },\n            {\n                \"name\": \"client_id\",\n                \"value\": \"...\"\n            },\n        ]\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["其中", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "app_id"
          })
        }), "的value值为应用的APP ID（在", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/service/josp/agc/index.html",
          children: "AppGallery Connect"
        }), "网站点击“开发与服务”，在项目列表中找到项目，在“项目设置 > 常规”页面的“应用”区域获取“APP ID”的值），详见下图的", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "标号1"
          })
        }), "处。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["其中", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "client_id"
          })
        }), "的value值为应用的OAuth 2.0客户端ID（在", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/service/josp/agc/index.html",
          children: "AppGallery Connect"
        }), "网站点击“开发与服务”，在项目列表中找到项目，在“项目设置 > 常规”页面的“应用”区域获取“OAuth 2.0客户端ID（凭据）：Client ID”的值），详见下图的", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "标号2"
          })
        }), "处。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(835530)/* ["default"] */.A) + "",
        width: "960",
        height: "452"
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
835530(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799434-f190f153e78dfbb41d7b76db0fc5e886.png");

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