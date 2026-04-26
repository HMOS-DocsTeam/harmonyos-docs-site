"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["887096"], {
515169(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_asset_store_kit_asset_scenarios_asset_scenario_1_asset_scenario_1_md_dd3_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-asset-store-kit-asset-scenarios-asset-scenario-1-asset-scenario-1-md-dd3.json
var site_docs_system_security_asset_store_kit_asset_scenarios_asset_scenario_1_asset_scenario_1_md_dd3_namespaceObject = JSON.parse('{"id":"system-security/asset-store-kit/asset-scenarios/asset-scenario1/asset-scenario1","title":"保护密码类数据","description":"密码类数据可以是密码、登录令牌、信用卡号等用户敏感数据。","source":"@site/docs/system-security/asset-store-kit/asset-scenarios/asset-scenario1/asset-scenario1.md","sourceDirName":"system-security/asset-store-kit/asset-scenarios/asset-scenario1","slug":"/system-security/asset-store-kit/asset-scenarios/asset-scenario1/","permalink":"/harmonyos-docs-site/system-security/asset-store-kit/asset-scenarios/asset-scenario1/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"保护密码类数据","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/asset-scenario1","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Asset Store Kit简介","permalink":"/harmonyos-docs-site/system-security/asset-store-kit/asset-store-kit-overview/"},"next":{"title":"保护需要用户认证的密码类数据","permalink":"/harmonyos-docs-site/system-security/asset-store-kit/asset-scenarios/asset-scenario2/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/asset-store-kit/asset-scenarios/asset-scenario1/asset-scenario1.md


const frontMatter = {
	title: '保护密码类数据',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/asset-scenario1',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '保护密码类数据';

const assets = {

};



const toc = [{
  "value": "场景描述",
  "id": "场景描述",
  "level": 2
}, {
  "value": "关键流程",
  "id": "关键流程",
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
    ol: "ol",
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "保护密码类数据",
        children: "保护密码类数据"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(339991)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "密码类数据可以是密码、登录令牌、信用卡号等用户敏感数据。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景描述",
      children: "场景描述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用户在应用/浏览器中登录账号时，可以选择“记住密码”（如图）。针对此种场景，应用/浏览器可以将用户密码存储在ASSET中，由ASSET保证用户密码的安全性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用户再次打开登录界面时，应用/浏览器可以从ASSET中查询用户密码，并将其自动填充到密码输入框，用户只需点击“登录”按钮即可完成账号登录，极大地提升了用户体验。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(906581)/* ["default"] */.A) + "",
        width: "528",
        height: "439"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "关键流程",
      children: "关键流程"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "业务调用ASSET保护密码类数据（后文统称为“关键资产”），可以参照以下流程进行开发。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(656606)/* ["default"] */.A) + "",
        width: "1098",
        height: "921"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "业务查询符合条件的关键资产属性，根据查询成功/失败，判断关键资产是否存在。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["开发步骤参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/system-security/asset-store-kit/asset-arkts/asset-js-query",
              children: "查询关键资产(ArkTS)"
            }), " / ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/system-security/asset-store-kit/asset-native/asset-native-query",
              children: "查询关键资产(C/C++)"
            }), "，代码示例参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/system-security/asset-store-kit/asset-arkts/asset-js-query#%E6%9F%A5%E8%AF%A2%E5%8D%95%E6%9D%A1%E5%85%B3%E9%94%AE%E8%B5%84%E4%BA%A7%E5%B1%9E%E6%80%A7",
              children: "查询单条关键资产属性(ArkTS)"
            }), " / ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/system-security/asset-store-kit/asset-native/asset-native-query#%E6%9F%A5%E8%AF%A2%E5%8D%95%E6%9D%A1%E5%85%B3%E9%94%AE%E8%B5%84%E4%BA%A7%E5%B1%9E%E6%80%A7",
              children: "查询单条关键资产属性(C/C++)"
            }), "。"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如果关键资产不存在，业务可选择："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["新增关键资产，开发步骤参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/system-security/asset-store-kit/asset-arkts/asset-js-add",
              children: "新增关键资产(ArkTS)"
            }), " / ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/system-security/asset-store-kit/asset-native/asset-native-add",
              children: "新增关键资产(C/C++)"
            }), "。"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如果关键资产存在，业务可选择："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["删除关键资产，开发步骤参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/system-security/asset-store-kit/asset-arkts/asset-js-remove",
              children: "删除关键资产(ArkTS)"
            }), " / ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/system-security/asset-store-kit/asset-native/asset-native-remove",
              children: "删除关键资产(C/C++)"
            }), "。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["更新关键资产，开发步骤参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/system-security/asset-store-kit/asset-arkts/asset-js-update",
              children: "更新关键资产(ArkTS)"
            }), " / ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/system-security/asset-store-kit/asset-native/asset-native-update",
              children: "更新关键资产(C/C++)"
            }), "。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["查询关键资产明文，开发步骤参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/system-security/asset-store-kit/asset-arkts/asset-js-query",
              children: "查询关键资产(ArkTS)"
            }), " / ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/system-security/asset-store-kit/asset-native/asset-native-query",
              children: "查询关键资产(C/C++)"
            }), "，代码示例参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/system-security/asset-store-kit/asset-arkts/asset-js-query#%E6%9F%A5%E8%AF%A2%E5%8D%95%E6%9D%A1%E5%85%B3%E9%94%AE%E8%B5%84%E4%BA%A7%E6%98%8E%E6%96%87",
              children: "查询单条关键资产明文(ArkTS)"
            }), " / ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/system-security/asset-store-kit/asset-native/asset-native-query#%E6%9F%A5%E8%AF%A2%E5%8D%95%E6%9D%A1%E5%85%B3%E9%94%AE%E8%B5%84%E4%BA%A7%E6%98%8E%E6%96%87",
              children: "查询单条关键资产明文(C/C++)"
            }), "。"]
          }), "\n"]
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
906581(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478375-40403216a7b18ce8f9a4dc4ec11ca260.png");

},
339991(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
656606(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798726-ecb309428fdfee4696c07657c8b418a3.png");

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