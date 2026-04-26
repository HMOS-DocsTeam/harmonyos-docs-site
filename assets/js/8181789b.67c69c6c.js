"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["77528"], {
57712(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_iap_kit_guide_iap_introduction_iap_introduction_md_818_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-iap-kit-guide-iap-introduction-iap-introduction-md-818.json
var site_docs_iap_kit_guide_iap_introduction_iap_introduction_md_818_namespaceObject = JSON.parse('{"id":"iap-kit-guide/iap-introduction/iap-introduction","title":"IAP Kit简介","description":"IAP Kit（应用内支付服务）为开发者提供便捷的应用内支付体验和简便的接入流程，让开发者聚焦应用本身的业务能力，助力开发者商业变现。开发者应用可通过使用IAP Kit提供的系统级支付API快速启动IAP收银台，即可实现应用内支付。","source":"@site/docs/iap-kit-guide/iap-introduction/iap-introduction.md","sourceDirName":"iap-kit-guide/iap-introduction","slug":"/iap-kit-guide/iap-introduction/","permalink":"/harmonyos-docs-site/iap-kit-guide/iap-introduction/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"IAP Kit简介","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/iap-introduction","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"标志使用规范","permalink":"/harmonyos-docs-site/health-service-kit-guide/health-appendix/health-logo-usage-regulations/"},"next":{"title":"IAP Kit接入规范","permalink":"/harmonyos-docs-site/iap-kit-guide/iap-access-specifications/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/iap-kit-guide/iap-introduction/iap-introduction.md


const frontMatter = {
	title: 'IAP Kit简介',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/iap-introduction',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = 'IAP Kit简介';

const assets = {

};



const toc = [{
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 2
}, {
  "value": "支持的设备",
  "id": "支持的设备",
  "level": 3
}, {
  "value": "支持的国家/地区",
  "id": "支持的国家地区",
  "level": 3
}, {
  "value": "模拟器支持情况",
  "id": "模拟器支持情况",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    img: "img",
    p: "p",
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
        id: "iap-kit简介",
        children: "IAP Kit简介"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "IAP Kit（应用内支付服务）为开发者提供便捷的应用内支付体验和简便的接入流程，让开发者聚焦应用本身的业务能力，助力开发者商业变现。开发者应用可通过使用IAP Kit提供的系统级支付API快速启动IAP收银台，即可实现应用内支付。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过IAP Kit，用户可以在应用内购买各种类型的", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "数字商品（虚拟商品）"
        })
      }), " ，包括消耗型商品、非消耗型商品、自动续期订阅商品和非续期订阅商品。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "商品类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "定义"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "用户权益时间"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "开发者权益处理"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "场景举例"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "消耗型商品"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用一次后即消耗掉，随使用减少，需要再次购买的商品"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无限制"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开发者发放权益后，后续不再进行管理"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "游戏货币，游戏道具等"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "非消耗型商品"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "一次性购买，永久拥有，无需消耗"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "永久"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开发者永久维护用户权益"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "游戏中额外的游戏关卡、应用中无时限的高级会员等"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "自动续期订阅商品"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户购买后在一段时间内允许访问增值功能或内容，周期结束前自动续期购买下一期的服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "连续性周期"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开发者周期性维护用户权益"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用中有时限的自动续期高级会员，如：视频连续包月会员"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "非续期订阅商品"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户购买后在一段时间内允许访问增值功能或内容，周期结束后禁止访问，除非再次购买自动续期订阅或非续期订阅商品"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "一个周期"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开发者在一个周期内要进行权益维护"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用中有时限的高级会员，如：视频一个月会员"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "支持的设备",
      children: "支持的设备"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(225295)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/iap-kit-guide/iap-appendix/iap-appendix-coverage",
        children: "华为IAP范围覆盖"
      }), "中的国家/地区（不包括中国境内（香港特别行政区、澳门特别行政区、中国台湾除外））仅支持Wearable设备。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "中国境内（香港特别行政区、澳门特别行政区、中国台湾除外）："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "商品类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "支持设备"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "消耗型商品"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Phone、PC/2in1、Tablet、Wearable、TV"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "非消耗型商品"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Phone、PC/2in1、Tablet、Wearable、TV"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "自动续期订阅商品"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Phone、PC/2in1、Tablet、TV"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "非续期订阅商品"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Phone、PC/2in1、Tablet、TV"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从6.1.0（23）开始，提供了IAP嵌入式收银台组件。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "IAP Kit提供的能力"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "支持设备"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/iap-api/iap-arkts-component/iap-cashier-component/iap-cashier-component",
              children: "IAP嵌入式收银台组件"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TV"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在TV设备拉起支付收银台页面为扫码支付页，参考示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(695488)/* ["default"] */.A) + "",
        width: "717",
        height: "427"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "支持的国家地区",
      children: "支持的国家/地区"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["由于IAP Kit支持的国家/地区和设备类型相关，具体请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E6%94%AF%E6%8C%81%E7%9A%84%E8%AE%BE%E5%A4%87",
        children: "支持的设备"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "模拟器支持情况",
      children: "模拟器支持情况"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本Kit暂不支持模拟器。"
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
695488(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478921-289be9517698790dd5119e7d36d0b517.png");

},
225295(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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