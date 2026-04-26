"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["631565"], {
337312(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_push_api_push_rest_api_push_rest_api_scenes_push_scenariozed_api_intro_push_scenariozed_api_intro_md_90c_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-push-api-push-rest-api-push-rest-api-scenes-push-scenariozed-api-intro-push-scenariozed-api-intro-md-90c.json
var site_docs_ref_push_api_push_rest_api_push_rest_api_scenes_push_scenariozed_api_intro_push_scenariozed_api_intro_md_90c_namespaceObject = JSON.parse('{"id":"push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-intro/push-scenariozed-api-intro","title":"功能介绍","description":"为了更安全的网络访问，华为推送服务于2022年11月30日关闭Push相关域名的TLS1.0、TLS1.1协议及规定之外的加密套件，当前应用使用TLS1.2以下协议或使用规定外的加密套件将无法正常推送消息。","source":"@site/docs-ref/push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-intro/push-scenariozed-api-intro.md","sourceDirName":"push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-intro","slug":"/push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-intro/push-scenariozed-api-intro","permalink":"/harmonyos-docs-site/ref/push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-intro/push-scenariozed-api-intro","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"功能介绍","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/push-scenariozed-api-intro","kit":"应用服务","last_updated":"2026-04-22","slug":"push-scenariozed-api-intro"},"sidebar":"ref","previous":{"title":"图片风控","permalink":"/harmonyos-docs-site/ref/push-api/push-rest-api/push-image-control/push-image-control"},"next":{"title":"请求体结构说明","permalink":"/harmonyos-docs-site/ref/push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-request-struct/push-scenariozed-api-request-struct"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-intro/push-scenariozed-api-intro.md


const frontMatter = {
	title: '功能介绍',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/push-scenariozed-api-intro',
	kit: '应用服务',
	last_updated: '2026-04-22',
	slug: 'push-scenariozed-api-intro'
};
const contentTitle = '功能介绍';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "使用约束",
  "id": "使用约束",
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
        id: "功能介绍",
        children: "功能介绍"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(101804)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为了更安全的网络访问，华为推送服务于2022年11月30日关闭Push相关域名的TLS1.0、TLS1.1协议及规定之外的加密套件，当前应用使用TLS1.2以下协议或使用规定外的加密套件将无法正常推送消息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "若您的应用访问Push相关域名使用协议是TLS1.0或TLS1.1，可能无法正常发送消息，请您务必升级到TLS1.2及以上版本。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["V3场景化接口将典型的推送场景按照类型拆分为多种场景，不同场景定义为不同", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "push-type"
        })
      }), "，提供基于场景的消息发送，治理和差异化能力，实现更好的消息触达和用户使用体验。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "push-type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "场景介绍"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "备注"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Alert消息"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通知消息。"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["需", (0,jsx_runtime.jsx)(_components.a, {
              href: "/push-kit-guide/push-preparations/push-apply-right#%E7%94%B3%E8%AF%B7%E9%80%9A%E7%9F%A5%E6%B6%88%E6%81%AF%E8%87%AA%E5%88%86%E7%B1%BB%E6%9D%83%E7%9B%8A",
              children: "申请通知消息自分类权益"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "卡片刷新"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "卡片刷新。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "语音播报消息"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Push Kit拉起通知扩展子进程，您可以在通知扩展子进程中处理语音播报业务。"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["需申请", (0,jsx_runtime.jsx)(_components.a, {
              href: "/push-kit-guide/push-preparations/push-apply-right#%E7%94%B3%E8%AF%B7%E9%80%9A%E7%9F%A5%E6%B6%88%E6%81%AF%E8%87%AA%E5%88%86%E7%B1%BB%E6%9D%83%E7%9B%8A",
              children: "推送语音播报消息权益"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "后台消息"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Push Kit检测应用是否启动，应用如果启动消息传递到目标应用。应用如果未启动，则缓存。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "实况窗消息"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "实况窗创建、更新或结束。"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["需", (0,jsx_runtime.jsx)(_components.a, {
              href: "/live-view-kit-guide/liveview-preparations/liveview-rights",
              children: "申请实况窗权益"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用内通话消息"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用内通话消息。"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["需", (0,jsx_runtime.jsx)(_components.a, {
              href: "/push-kit-guide/push-preparations/push-apply-right#%E7%94%B3%E8%AF%B7%E6%8E%A8%E9%80%81%E5%BA%94%E7%94%A8%E5%86%85%E9%80%9A%E8%AF%9D%E6%B6%88%E6%81%AF%E6%9D%83%E7%9B%8A",
              children: "申请推送应用内通话消息权益"
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用约束",
      children: "使用约束"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["消息体最大不能超过4096Bytes（不包括Push Token），若超过请求会返回错误码", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-response/push-scenariozed-api-response#section80300008-%E6%B6%88%E6%81%AF%E4%BD%93%E5%A4%A7%E5%B0%8F%E8%B6%85%E8%BF%874096bytes%E4%B8%8D%E5%8C%85%E6%8B%ACpush-token",
          children: "80300008"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["每个项目每日全网最多可推送1000条测试消息，正式消息区分场景有不同的配额，参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/push-api/push-rest-api/push-rest-api-scenes/push-msg-freq-control/push-msg-freq-control",
          children: "消息频控"
        }), "说明。"]
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
101804(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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