"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["360169"], {
213442(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_application_dev_overview_application_dev_overview_md_ba9_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-application-dev-overview-application-dev-overview-md-ba9.json
var site_docs_application_dev_overview_application_dev_overview_md_ba9_namespaceObject = JSON.parse('{"id":"application-dev-overview/application-dev-overview","title":"应用开发准备","description":"在开始应用开发前，需要先完成以下准备工作。","source":"@site/docs/application-dev-overview/application-dev-overview.md","sourceDirName":"application-dev-overview","slug":"/application-dev-overview/","permalink":"/harmonyos-docs-site/application-dev-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"应用开发准备","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/application-dev-overview","kit":"dev-preparation","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"HarmonyOS术语","permalink":"/harmonyos-docs-site/glossary/"},"next":{"title":"Ability Kit简介","permalink":"/harmonyos-docs-site/ability-kit/abilitykit-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/application-dev-overview/application-dev-overview.md


const frontMatter = {
	title: '应用开发准备',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/application-dev-overview',
	kit: 'dev-preparation',
	last_updated: '2026-04-22'
};
const contentTitle = '应用开发准备';

const assets = {

};



const toc = [{
  "value": "注册成为开发者",
  "id": "注册成为开发者",
  "level": 2
}, {
  "value": "创建应用",
  "id": "创建应用",
  "level": 2
}, {
  "value": "配置安装DevEco Studio",
  "id": "配置安装deveco-studio",
  "level": 2
}, {
  "value": "使用DevEco Studio创建应用工程",
  "id": "使用deveco-studio创建应用工程",
  "level": 2
}, {
  "value": "配置签名信息",
  "id": "配置签名信息",
  "level": 2
}, {
  "value": "（条件必选）添加公钥指纹",
  "id": "条件必选添加公钥指纹",
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
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "应用开发准备",
        children: "应用开发准备"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在开始应用开发前，需要先完成以下准备工作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "注册成为开发者",
      children: "注册成为开发者"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在华为开发者联盟网站上，", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/start/registration-and-verification-0000001053628148",
        children: "注册成为开发者"
      }), "，并完成", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/start/rna-0000001062530373",
        children: "实名认证"
      }), "，从而享受联盟开放的各类能力和服务。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "创建应用",
      children: "创建应用"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/service/josp/agc/index.html",
        children: "AppGallery Connect"
      }), "（简称AGC）上，参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/app/agc-help-create-project-0000002242804048",
        children: "创建项目"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/app/agc-help-create-app-0000002247955506",
        children: "创建应用"
      }), "完成", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "HarmonyOS"
        })
      }), "应用的创建，从而使用各类服务。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "配置安装deveco-studio",
      children: "配置安装DevEco Studio"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["安装最新版", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/download/",
        children: "DevEco Studio"
      }), "。具体安装指导请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-software-install",
        children: "安装DevEco Studio"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用deveco-studio创建应用工程",
      children: "使用DevEco Studio创建应用工程"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用DevEco Studio创建应用工程。具体创建工程指导请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-project/ide-create-new-project",
        children: "创建一个新的工程"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "配置签名信息",
      children: "配置签名信息"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用模拟器和预览器调试无需配置签名信息，使用真机设备调试则需要对HAP进行签名。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "目前提供了两种签名方式，请根据实际情况选择："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ide-signing#section18815157237",
          children: "自动签名"
        }), "：如果您只需要使用一台调试设备，建议使用DevEco Studio提供的自动签名。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["手动签名：如果您使用多台调试设备或者会在断网情况下调试，您需要在AGC中", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/app/agc-help-debug-cert-0000002283256797",
          children: "申请调试证书"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/app/agc-help-add-device-0000002283189937",
          children: "注册调试设备"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/app/agc-help-debug-profile-0000002248181278",
          children: "申请调试Profile"
        }), "后，再", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ide-signing#section1240072619462",
          children: "手动配置签名信息"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "条件必选添加公钥指纹",
      children: "（条件必选）添加公钥指纹"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当应用需要使用以下开放能力的一种或多种时，为正常调试运行应用，需要预先添加公钥指纹。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Account Kit（华为账号服务）"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Game Service Kit（游戏服务）"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Health Service Kit（运动健康服务）"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "IAP Kit（应用内支付服务）"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Payment Kit（华为支付服务）"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Wallet Kit（钱包服务）"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Wear Engine Kit（穿戴服务）"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(37673)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "发布应用前，需要将调试应用的指纹更新为发布指纹。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["添加公钥指纹，具体操作请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/app/agc-help-cert-fingerprint-0000002278002933",
        children: "配置应用签名证书指纹"
      }), "。"]
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
37673(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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