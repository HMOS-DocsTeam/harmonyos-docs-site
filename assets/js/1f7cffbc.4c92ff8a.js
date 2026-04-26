"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["592498"], {
440667(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_iap_kit_guide_iap_preparations_iap_config_product_iap_config_product_md_1f7_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-iap-kit-guide-iap-preparations-iap-config-product-iap-config-product-md-1f7.json
var site_docs_iap_kit_guide_iap_preparations_iap_config_product_iap_config_product_md_1f7_namespaceObject = JSON.parse('{"id":"iap-kit-guide/iap-preparations/iap-config-product/iap-config-product","title":"配置商品信息","description":"在接入商品购买前，开发者需要在AppGallery Connect中录入商品信息（包括商品ID、商品类型、不同国家/地区的商品价格、商品名称等）。在客户端调用购买接口时，只需传入此处配置的商品ID和商品类型，IAP Kit会根据用户当前的账号服务地自动展示对应国家/地区的商品信息（包括商品价格、商品名称等），无需开发者处理因账号所在服务地变动带来的商品价格适配问题。","source":"@site/docs/iap-kit-guide/iap-preparations/iap-config-product/iap-config-product.md","sourceDirName":"iap-kit-guide/iap-preparations/iap-config-product","slug":"/iap-kit-guide/iap-preparations/iap-config-product/","permalink":"/harmonyos-docs-site/iap-kit-guide/iap-preparations/iap-config-product/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"配置商品信息","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/iap-config-product","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"（可选）配置应用内购买服务参数","permalink":"/harmonyos-docs-site/iap-kit-guide/iap-preparations/iap-basic-preparation/iap-set-necessary-parameters/"},"next":{"title":"配置签名","permalink":"/harmonyos-docs-site/iap-kit-guide/iap-preparations/iap-config-sign/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/iap-kit-guide/iap-preparations/iap-config-product/iap-config-product.md


const frontMatter = {
	title: '配置商品信息',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/iap-config-product',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '配置商品信息';

const assets = {

};



const toc = [{
  "value": "配置消耗型/非消耗型/非续期订阅商品",
  "id": "配置消耗型非消耗型非续期订阅商品",
  "level": 2
}, {
  "value": "配置自动续期订阅商品",
  "id": "配置自动续期订阅商品",
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
        id: "配置商品信息",
        children: "配置商品信息"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在接入商品购买前，开发者需要在", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/service/josp/agc/index.html",
        children: "AppGallery Connect"
      }), "中录入商品信息（包括商品ID、商品类型、不同国家/地区的商品价格、商品名称等）。在客户端调用购买接口时，只需传入此处配置的商品ID和商品类型，IAP Kit会根据用户当前的账号服务地自动展示对应国家/地区的商品信息（包括商品价格、商品名称等），无需开发者处理因账号所在服务地变动带来的商品价格适配问题。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "配置消耗型非消耗型非续期订阅商品",
      children: "配置消耗型/非消耗型/非续期订阅商品"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["如新增商品，请参见", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/app/non-subscription-0000001959074885",
          children: "消耗型/非消耗型/非续期订阅商品"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["如为消耗型/非消耗型/非续期订阅商品设置优惠促销（自定义人群促销），具体操作请参见", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/app/promotion-non-subscription-0000001931836332#section1429175616582",
          children: "设置促销价格"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["如需修改商品配置（商品名称、商品价格等），具体操作请参见", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/app/revise-non-subscription-0000001931836328",
          children: "修改单个商品-非自动续期订阅商品"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "配置自动续期订阅商品",
      children: "配置自动续期订阅商品"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["如新增商品，请先", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/app/non-subscription-0000001958955109#section37862471018",
          children: "新增订阅组"
        }), "，然后在创建", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/app/non-subscription-0000001958955109",
          children: "自动续期订阅商品"
        }), "时指定商品所在的订阅组。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["如为自动续期订阅商品设置促销，包含", (0,jsx_runtime.jsx)(_components.a, {
          href: "/iap-kit-guide/iap-purchases/iap-subscription/iap-subscription-functions#%E6%8F%90%E4%BE%9B%E4%BC%98%E6%83%A0",
          children: "推介促销"
        }), "（新用户促销）、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/iap-kit-guide/iap-purchases/iap-subscription/iap-subscription-functions#%E6%8F%90%E4%BE%9B%E4%BC%98%E6%83%A0",
          children: "优惠促销"
        }), "（自定义人群促销）和", (0,jsx_runtime.jsx)(_components.a, {
          href: "/iap-kit-guide/iap-purchases/iap-subscription/iap-subscription-functions#%E6%8F%90%E4%BE%9B%E4%BC%98%E6%83%A0",
          children: "挽留促销"
        }), "（退订挽留促销，", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "即将开放"
          })
        }), "），具体操作请参见", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/app/promotion-renewal-0000001959074897#section128611895910",
          children: "设置促销价格"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["如需修改商品配置（商品名称、商品价格等），具体操作请参见", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/app/revise-renewal-0000001959074893",
          children: "修改单个商品-自动续期订阅商品"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(902359)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/service/josp/agc/index.html",
        children: "AppGallery Connect"
      }), "完成商品配置后，", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/service/josp/agc/index.html",
        children: "AppGallery Connect"
      }), "不会跟随汇率实时刷新商品价格，需要开发者定期手动刷新价格，具体请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/app/single-0000001931995708",
        children: "修改单个商品"
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
902359(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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