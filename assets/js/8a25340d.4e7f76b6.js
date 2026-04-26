"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["275109"], {
653641(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_push_api_push_rest_api_push_rest_api_scenes_push_msg_freq_control_push_msg_freq_control_md_8a2_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-push-api-push-rest-api-push-rest-api-scenes-push-msg-freq-control-push-msg-freq-control-md-8a2.json
var site_docs_ref_push_api_push_rest_api_push_rest_api_scenes_push_msg_freq_control_push_msg_freq_control_md_8a2_namespaceObject = JSON.parse('{"id":"push-api/push-rest-api/push-rest-api-scenes/push-msg-freq-control/push-msg-freq-control","title":"消息频控","description":"Push Kit消息频控包括场景化消息频控、设备消息频控、测试消息频控和消息推送速率管控，当超过了某个频控规则限制会返回对应的回执状态码。","source":"@site/docs-ref/push-api/push-rest-api/push-rest-api-scenes/push-msg-freq-control/push-msg-freq-control.md","sourceDirName":"push-api/push-rest-api/push-rest-api-scenes/push-msg-freq-control","slug":"/push-api/push-rest-api/push-rest-api-scenes/push-msg-freq-control/push-msg-freq-control","permalink":"/harmonyos-docs-site/ref/push-api/push-rest-api/push-rest-api-scenes/push-msg-freq-control/push-msg-freq-control","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"消息频控","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/push-msg-freq-control","kit":"应用服务","last_updated":"2026-04-22","slug":"push-msg-freq-control"},"sidebar":"ref","previous":{"title":"请求示例","permalink":"/harmonyos-docs-site/ref/push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-request-example/push-scenariozed-api-request-example"},"next":{"title":"消息撤回","permalink":"/harmonyos-docs-site/ref/push-api/push-rest-api/push-msg-revoke/push-msg-revoke"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/push-api/push-rest-api/push-rest-api-scenes/push-msg-freq-control/push-msg-freq-control.md


const frontMatter = {
	title: '消息频控',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/push-msg-freq-control',
	kit: '应用服务',
	last_updated: '2026-04-22',
	slug: 'push-msg-freq-control'
};
const contentTitle = '消息频控';

const assets = {

};



const toc = [{
  "value": "场景化消息频控",
  "id": "场景化消息频控",
  "level": 2
}, {
  "value": "设备消息频控",
  "id": "设备消息频控",
  "level": 2
}, {
  "value": "测试消息频控",
  "id": "测试消息频控",
  "level": 2
}, {
  "value": "消息推送速率管控",
  "id": "消息推送速率管控",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
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
        id: "消息频控",
        children: "消息频控"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Push Kit消息频控包括场景化消息频控、设备消息频控、测试消息频控和消息推送速率管控，当超过了某个频控规则限制会返回对应的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/push-kit-guide/push-server/push-msg-receipt#%E5%9B%9E%E6%89%A7%E7%8A%B6%E6%80%81%E7%A0%81",
        children: "回执状态码"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(378617)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["消息频控的数量是指应用发起消息推送请求的数量，无论设备是否成功展示消息都会增加计数，如果消息未按预期展示，建议不要频繁发起消息推送请求，请先进行", (0,jsx_runtime.jsx)(_components.a, {
        href: "/push-kit-guide/push-faq/push-faq-2",
        children: "问题排查"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景化消息频控",
      children: "场景化消息频控"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为了给用户提供更好的体验，营造清朗网络空间，华为推送服务根据不同的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/push-kit-guide/push-server/push-scenes-send",
        children: "推送场景"
      }), "，设置了多条频控规则。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["若场景化消息超出对应的频控规则限制，推送服务将向您的回执服务器返回", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "256结果码"
        })
      }), "，详情请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/push-kit-guide/push-server/push-msg-receipt#%E5%9B%9E%E6%89%A7%E7%8A%B6%E6%80%81%E7%A0%81",
        children: "回执状态码"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "具体频控规则见下表："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "场景"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "频控规则"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "通知消息"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["1.应用违规处罚时，按照处罚频次限制，参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/push-kit-guide/push-appendix/push-punishment-standards",
              children: "通知违规处罚标准"
            }), "。  2.消息为资讯营销类（", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-request-param/push-scenariozed-api-request-param#notification",
              children: "category"
            }), "取值为MARKETING）时，按照应用营销消息频次限制，参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/push-kit-guide/push-preparations/push-apply-right#%E9%80%9A%E7%9F%A5%E6%B6%88%E6%81%AF%E6%8E%A8%E9%80%81%E6%95%B0%E9%87%8F%E7%AE%A1%E7%90%86%E8%A7%84%E5%88%99",
              children: "通知消息推送数量管理规则"
            }), "（若未", (0,jsx_runtime.jsx)(_components.a, {
              href: "/push-kit-guide/push-scenes/push-alert/push-send-alert#%E5%BC%80%E9%80%9A%E6%9D%83%E7%9B%8A",
              children: "开通消息自分类权益"
            }), "，则推送的通知消息", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "默认为资讯营销类消息"
              })
            }), "）。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "卡片刷新消息"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按照应用下单个卡片限制刷新频次。  默认频次：应用每个设备单个卡片已上架为2条/天，未上架为5条/天。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "实况窗消息"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "单个实况窗消息每个设备每5分钟最多更新10次，每小时最多更新60次。  出行打车与赛事比分场景，5分钟最多更新30次，每小时最多更新180次。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "设备消息频控",
      children: "设备消息频控"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["除了单个场景的次数限制外，推送服务还对单个设备下的单个应用一天内所能接收的所有消息总量进行了限制，系统会根据现网使用场景和流量进行管控，不合理的使用场景系统会进行频控，并且推送服务将向您的回执服务器返回", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "102结果码"
        })
      }), "，详情请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/push-kit-guide/push-server/push-msg-receipt#%E5%9B%9E%E6%89%A7%E7%8A%B6%E6%80%81%E7%A0%81",
        children: "回执状态码"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "测试消息频控",
      children: "测试消息频控"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为了方便开发者测试消息，您可以设置pushOptions.", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-request-param/push-scenariozed-api-request-param#pushoptions",
        children: "testMessage"
      }), "为true，发送测试消息。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["每个项目每日可推送总共1000条测试消息（非设备级，所有设备共用1000条）且不受", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%9C%BA%E6%99%AF%E5%8C%96%E6%B6%88%E6%81%AF%E9%A2%91%E6%8E%A7",
        children: "场景化消息频控"
      }), "。若项目当天已推送超过1000条测试消息，则会进行消息限流（限流直到次日后恢复），并且推送服务将向您的回执服务器返回", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "256结果码"
        })
      }), "，详情请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/push-kit-guide/push-server/push-msg-receipt#%E5%9B%9E%E6%89%A7%E7%8A%B6%E6%80%81%E7%A0%81",
        children: "回执状态码"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "消息推送速率管控",
      children: "消息推送速率管控"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["消息推送速率是指应用QPS（每秒推送的设备个数），当应用QPS超过阈值时请求会返回", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-response/push-scenariozed-api-response#http%E5%93%8D%E5%BA%94%E7%A0%81",
        children: "HTTP响应码"
      }), " 503。应用QPS与应用类型相关，并且随着应用在华为终端上的月活跃用户人数增加而增长，您可以登录", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/service/josp/agc/index.html",
        children: "AppGallery Connect"
      }), "查询到应用QPS阈值，查询路径：“开发与服务 > 推送服务 > 配置 > 选择应用”，选择需要查看的应用，下方即可查到对应的QPS阈值。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(475051)/* ["default"] */.A) + "",
        width: "661",
        height: "231"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(433686)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["全网流量较高时，会出现系统级流控，请求也会返回", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-response/push-scenariozed-api-response#http%E5%93%8D%E5%BA%94%E7%A0%81",
        children: "HTTP响应码"
      }), " 503。"]
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
475051(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552801260-dad498e6af4b47bd35d8089158f25c2b.png");

},
433686(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
378617(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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