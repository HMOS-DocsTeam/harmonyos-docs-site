"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["596811"], {
355321(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_notification_kit_notification_overview_notification_overview_md_d06_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-notification-kit-notification-overview-notification-overview-md-d06.json
var site_docs_notification_kit_notification_overview_notification_overview_md_d06_namespaceObject = JSON.parse('{"id":"notification-kit/notification-overview/notification-overview","title":"Notification Kit简介","description":"Notification Kit（用户通知服务）为开发者提供本地通知发布通道，开发者可借助Notification Kit将应用产生的通知直接在客户端本地推送给用户，本地通知根据通知类型及发布场景会产生对应的铃声、震动、横幅、锁屏、息屏、通知栏提醒和显示。","source":"@site/docs/notification-kit/notification-overview/notification-overview.md","sourceDirName":"notification-kit/notification-overview","slug":"/notification-kit/notification-overview/","permalink":"/harmonyos-docs-site/notification-kit/notification-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Notification Kit简介","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/notification-overview","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"支持的国家/地区","permalink":"/harmonyos-docs-site/map-kit-guide/map-appendix/map-supported/"},"next":{"title":"请求通知授权","permalink":"/harmonyos-docs-site/notification-kit/notification-enable/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/notification-kit/notification-overview/notification-overview.md


const frontMatter = {
	title: 'Notification Kit简介',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/notification-overview',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = 'Notification Kit简介';

const assets = {

};



const toc = [{
  "value": "使用场景",
  "id": "使用场景",
  "level": 2
}, {
  "value": "能力范围",
  "id": "能力范围",
  "level": 2
}, {
  "value": "业务流程",
  "id": "业务流程",
  "level": 2
}, {
  "value": "通知样式",
  "id": "通知样式",
  "level": 2
}, {
  "value": "约束限制",
  "id": "约束限制",
  "level": 2
}, {
  "value": "违规处罚",
  "id": "违规处罚",
  "level": 2
}, {
  "value": "与相关Kit的关系",
  "id": "与相关kit的关系",
  "level": 2
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
    header: "header",
    img: "img",
    li: "li",
    p: "p",
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
        id: "notification-kit简介",
        children: "Notification Kit简介"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Notification Kit（用户通知服务）为开发者提供本地通知发布通道，开发者可借助Notification Kit将应用产生的通知直接在客户端本地推送给用户，本地通知根据通知类型及发布场景会产生对应的铃声、震动、横幅、锁屏、息屏、通知栏提醒和显示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用场景",
      children: "使用场景"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当应用进程处于运行时，开发者可以使用Notification Kit向用户发布通知。当应用进程终止后，本地通知发布通道关闭，开发者需要接入", (0,jsx_runtime.jsx)(_components.a, {
        href: "/push-kit-guide/push-kit-introduction",
        children: "Push Kit"
      }), "进行云侧离线通知的发布。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者可以在多种场景中运用本地通知能力。如同步用户的上传下载进度、发布即时的客服支付通知、更新运动步数等。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "能力范围",
      children: "能力范围"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Notification Kit支持的能力主要包括："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "发布文本、进度条等类型通知。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "携带或更新应用通知数字角标。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "取消曾经发布的某条或全部通知。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "查询已发布的通知列表。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "查询应用自身通知开关状态。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用通知用户的能力默认关闭，开发者可拉起授权框，请求用户授权发布通知。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(259934)/* ["default"] */.A) + "",
        width: "484",
        height: "279"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "业务流程",
      children: "业务流程"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(953486)/* ["default"] */.A) + "",
        width: "484",
        height: "227"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用Notification Kit的主要业务流程如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1.请求通知授权。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "2.应用发布通知到通知服务。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "3.将通知展示到通知中心。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "通知样式",
      children: "通知样式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(429355)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "实际显示效果依赖设备能力和通知中心UI设计样式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Notification Kit中常用的通知样式如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "通知样式"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "规格描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/notification-kit/publish-notification/text-notification",
              children: "文本"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "通知文本内容最多显示三行，超长后以“...”截断。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/notification-kit/publish-notification/text-notification",
              children: "多行文本"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "最多可显示三行内容，每行内容超长后以“...”截断。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/notification-kit/notification-badge",
              children: "通知角标"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "以数字的形式展示在右上角。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/notification-kit/publish-notification/progress-bar-notification",
              children: "进度条"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "进度类通知。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束限制",
      children: "约束限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "单个应用已发布的通知在通知中心等系统入口的留存数量有限（当前规格最多24条）。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "通知的长度不能超过200KB（跨进程序列化大小限制）。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["通知的发布频次和更新频次需要满足如下要求，否则会导致发布或更新失败，返回相应错误码。\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "单个应用发布新通知的频次累计不能超过每秒10条，更新通知的频次累计不能超过每秒20条。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "所有三方应用发布新通知的频次累计不能超过每秒15条，更新通知的频次累计不能超过每秒30条。"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "违规处罚",
      children: "违规处罚"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用发送的通知需遵守Push Kit的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/push-kit-guide/push-appendix/push-detail-rules",
        children: "通知内容原则"
      }), "，如出现违反通知内容原则的行为，将被视为违规。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["违规行为及相应的处理措施请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/push-kit-guide/push-appendix/push-punishment-standards",
        children: "违规分类、违规行为及违规处罚标准"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "与相关kit的关系",
      children: "与相关Kit的关系"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Notification Kit创建的通知会即时显示在通知中心等系统入口。如果开发者希望在应用退到后台或进程终止后仍然有一些提醒用户的定时类通知，例如购物类应用抢购提醒等，可通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/background-task-kit/background-task-overview",
          children: "Background Tasks Kit"
        }), "创建。目前支持基于倒计时、日历、闹钟等类型的通知提醒功能。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["开发者可通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ability-kit/abilitykit-overview",
          children: "Ability Kit"
        }), "的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/ability-api/ability-arkts/both-models/js-apis-app-ability-wantagent/js-apis-app-ability-wantagent#wantagentgetwantagent",
          children: "getWantAgent"
        }), "接口设置用户点击通知后的行为意图。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["开发者可通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/push-kit-guide/push-kit-introduction",
          children: "Push Kit"
        }), "远程推送用户通知到本地。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "模拟器支持情况",
      children: "模拟器支持情况"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本Kit支持模拟器。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["模拟器与真机存在通用差异，详情请参见“", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-run-emulator/ide-emulator-overview/ide-emulator-specification",
        children: "模拟器与真机的差异"
      }), "”。"]
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
429355(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
259934(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959058-80817e50c651d75b1e015ae730665a5b.png");

},
953486(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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0qVLTgkIHI47BALHWXAQyD7iOj0Eg976Mjq4cuWKU7rd1atXnVLUdB7vcePGOWv3drf38brX+/lKb1d6L+PHj3dK0U/Pnj2dEgKJJmsfcftFBEOwbr94+vRp+fDDD+1mF3p9dMqUKZ1H/mrXrl3Su3dv+fTTT50tN+mMY0OGDLFFpwj1SpAggbRu3Vo2bNhgs0S1bNnStut+hw8ftnKmTJnsvb30vttPPvmkzJ492+6vfScN6xdffNE+d1hYmLNV5I8//rD7cEdVCyxVqpQ8/vjj0q9fv9s+n1fmzJntNbt27Wr39R49erQcPXrUeVQkXrx40rhxY0mePLl06dJFPv74Y9s+ffr0Gzf913nJX331VVffwIHbLwYHgewjAhnBEKxA1qDMnj27rFq1SoYOHSpfffWV88hNOre7hs6cOXOkbNmykiRJEueR655//nkLQw2w+vXry3fffScVK1a02lihQoUsrNu1ayf79++Xc+fOSa1atWTBggX2d6bh2aZNGwto79/dhQsXrDat4a2zm6VIkcL+fXRWM32N48eP2wnEt99+K507d7bnqPXr11sLl4bvrTTgDx06ZDOk3cuOHTtk2LBhMmDAAPuMxYsXt8+iJyODBg2ykxE9UdDpT59++mn7LPoZNKj/85//yNixYy2Y3YpADg6arAHcU8GCBa2WqcF3tzncGzRoIJ06dZIiRYpYWGk5PDxcBg4caItur1q1qu2nJxX//e9/ba7u+++/3yZC0Zqw1sS1Fqx3udKfd06QooF++fJladu2rT2uNVatber6999/byG9bt06O3FYsWKFfW6dk1mDVoPQ24RdoUIFadWqlRQuXNieW6ZMGXvP8uXLy6JFiyxQ77ZERETYyUn//v3lp59+kgkTJkiaNGnss+XPn19+//13mT9/vnzwwQfyyCOPWBAz4xr+CQIZwD0dOXJEXnnlFattVq9e3dn6V++//740atTImminTZtmNWutOevzNDA1+Pbs2WOB/NBDD1nNWKcK1Vq11mo1sBcuXCgrV66050TVB6whrU3UuugJwq1l7dvV8L/1eXqJYurUqSVXrlyydetW26Y18ObNm1uo609thu7YsaOcOXPGavcNGza0cNWaov4uGqx6QqHr2rxerVo1mTVrlsyYMUNKlChhlwnp77Fx40b7nbUFTac/jYyMtN9fTyKAeyGQfaRn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");

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