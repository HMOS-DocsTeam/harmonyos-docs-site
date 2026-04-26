"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["871440"], {
481859(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_push_kit_guide_push_gettingstart_push_gettingstart_md_c55_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-push-kit-guide-push-gettingstart-push-gettingstart-md-c55.json
var site_docs_push_kit_guide_push_gettingstart_push_gettingstart_md_c55_namespaceObject = JSON.parse('{"id":"push-kit-guide/push-gettingstart/push-gettingstart","title":"使用入门","description":"示例代码","source":"@site/docs/push-kit-guide/push-gettingstart/push-gettingstart.md","sourceDirName":"push-kit-guide/push-gettingstart","slug":"/push-kit-guide/push-gettingstart/","permalink":"/harmonyos-docs-site/push-kit-guide/push-gettingstart/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"使用入门","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/push-gettingstart","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Push Kit简介","permalink":"/harmonyos-docs-site/push-kit-guide/push-kit-introduction/"},"next":{"title":"学习Push Kit接入规范","permalink":"/harmonyos-docs-site/push-kit-guide/push-preparations/push-specification/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/push-kit-guide/push-gettingstart/push-gettingstart.md


const frontMatter = {
	title: '使用入门',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/push-gettingstart',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '使用入门';

const assets = {

};



const toc = [{
  "value": "示例代码",
  "id": "示例代码",
  "level": 2
}, {
  "value": "开发流程",
  "id": "开发流程",
  "level": 2
}, {
  "value": "（可选）其他消息类型",
  "id": "可选其他消息类型",
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
        id: "使用入门",
        children: "使用入门"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例代码",
      children: "示例代码"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者可以参考", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "服务端"
        })
      }), (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/harmonyos_samples/push-kit_-sample-code_-server-demo_-java",
        children: "示例代码"
      }), "，了解推送Push场景化消息的过程。参考", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "客户端"
        })
      }), (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/harmonyos_samples/push-kit-sample-code-clientdemo-arkts",
        children: "示例代码"
      }), "，了解生成Push Token和接收Push场景化消息的功能和流程。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发流程",
      children: "开发流程"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者需要按照流程来完成应用的开发工作，", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["以", (0,jsx_runtime.jsx)(_components.a, {
            href: "/push-kit-guide/push-scenes/push-alert/push-send-alert",
            children: "推送通知消息"
          }), "为例"]
        })
      }), "，完整的开发流程如下："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "序号"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "步骤"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/push-kit-guide/push-preparations/push-config-setting",
              children: "开通推送服务"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["在开发应用前，请先参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/push-kit-guide/push-preparations/push-config-setting#%E6%93%8D%E4%BD%9C%E6%AD%A5%E9%AA%A4",
              children: "操作步骤"
            }), "开通推送服务。其中", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "配置签名信息"
              })
            }), "时，请使用", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "手动签名"
              })
            }), "方式。  DevEco Studio 6.0.0 Beta5版本开始，新增", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ide-signing#section18815157237",
              children: "自动签名"
            }), "方式。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/push-kit-guide/push-preparations/push-apply-right#%E7%94%B3%E8%AF%B7%E9%80%9A%E7%9F%A5%E6%B6%88%E6%81%AF%E8%87%AA%E5%88%86%E7%B1%BB%E6%9D%83%E7%9B%8A",
              children: "申请通知消息自分类权益"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["· 请根据", (0,jsx_runtime.jsx)(_components.a, {
              href: "/push-kit-guide/push-preparations/push-apply-right#%E9%80%9A%E7%9F%A5%E6%B6%88%E6%81%AF%E5%88%86%E7%B1%BB%E6%A0%87%E5%87%86%E4%B8%8E%E6%8F%90%E9%86%92%E6%96%B9%E5%BC%8F",
              children: "通知消息分类标准"
            }), "，申请对应场景化消息权益。不同类型的消息有对应的通知消息分类标准与提醒方式和", (0,jsx_runtime.jsx)(_components.a, {
              href: "/push-kit-guide/push-preparations/push-apply-right#%E9%80%9A%E7%9F%A5%E6%B6%88%E6%81%AF%E6%8E%A8%E9%80%81%E6%95%B0%E9%87%8F%E7%AE%A1%E7%90%86%E8%A7%84%E5%88%99",
              children: "通知消息推送数量管理规则"
            }), "。  · 若未开通权益，或开通的权益类型与", (0,jsx_runtime.jsx)(_components.a, {
              href: "/push-kit-guide/push-server/push-scenes-send",
              children: "调用REST API推送场景化消息"
            }), "时，请求体中携带的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-request-param/push-scenariozed-api-request-param#notification",
              children: "category"
            }), "字段值不一致，消息将会默认归为", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "资讯营销类消息"
              })
            }), "，则会受到“单个应用每日每设备推送数量为2条或5条”的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/push-kit-guide/push-preparations/push-apply-right#%E9%80%9A%E7%9F%A5%E6%B6%88%E6%81%AF%E6%8E%A8%E9%80%81%E6%95%B0%E9%87%8F%E7%AE%A1%E7%90%86%E8%A7%84%E5%88%99",
              children: "频控"
            }), "限制。若超出限制，设备将会收不到该条消息。  · 调测阶段建议设置", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-request-param/push-scenariozed-api-request-param#pushoptions",
              children: "testMessage"
            }), "为true，以防发送成功的消息被", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/push-api/push-rest-api/push-rest-api-scenes/push-msg-freq-control/push-msg-freq-control",
              children: "频控"
            }), "，设备将会收不到该条消息。  · 若消息被频控，请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/push-kit-guide/push-faq/push-faq-5",
              children: "频控FAQ"
            }), "进行问题排查。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "客户端"
              })
            }), "获取Push Token"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/push-kit-guide/push-server/push-jwt-token#%E8%B0%83%E7%94%A8%E6%8E%A8%E9%80%81%E6%9C%8D%E5%8A%A1rest-api",
              children: "调用推送服务REST API"
            }), "时，需要设置token参数，对应的参数值参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/push-kit-guide/push-preparations/push-get-token",
              children: "获取Push Token"
            }), "进行获取。注意", (0,jsx_runtime.jsx)(_components.a, {
              href: "/push-kit-guide/push-preparations/push-get-token#%E5%9C%BA%E6%99%AF%E4%BB%8B%E7%BB%8D",
              children: "Push Token变化的场景"
            }), "，若设备的Push Token发生变化但服务端调用推送服务REST API时未更新token的值，将会导致设备收不到该条消息。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "客户端"
              })
            }), "请求通知授权"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为确保应用可正常收到消息，应用发送通知前需调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/notification-api/notification-arkts/js-apis-notificationmanager/js-apis-notificationmanager#notificationmanagerrequestenablenotification10-1",
              children: "requestEnableNotification"
            }), "()方法弹出提醒，告知用户需要允许接收通知消息。示例代码参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/push-kit-guide/push-scenes/push-alert/push-send-alert#%E5%BC%80%E5%8F%91%E6%AD%A5%E9%AA%A4",
              children: "开发步骤"
            }), "中第2步。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "客户端"
              })
            }), "配置skills标签"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为确保点击消息可以正常跳转应用页面，在应用项目中完成skills标签配置，详情请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/push-kit-guide/push-scenes/push-alert/push-send-alert#%E7%82%B9%E5%87%BB%E6%B6%88%E6%81%AF%E5%8A%A8%E4%BD%9C",
              children: "点击消息动作"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "服务端"
              })
            }), "基于服务账号生成鉴权令牌"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/push-kit-guide/push-server/push-jwt-token#%E8%B0%83%E7%94%A8%E6%8E%A8%E9%80%81%E6%9C%8D%E5%8A%A1rest-api",
              children: "调用推送服务REST API"
            }), "推送场景化消息时，请求头需设置Authorization参数，请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/push-kit-guide/push-server/push-jwt-token",
              children: "基于服务账号生成鉴权令牌"
            }), "章节进行获取。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "服务端"
              })
            }), (0,jsx_runtime.jsx)(_components.a, {
              href: "/push-kit-guide/push-server/push-scenes-send",
              children: "调用REST API推送场景化消息"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["应用服务端参考HarmonyOS NEXT版本", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-request-struct/push-scenariozed-api-request-struct",
              children: "请求体结构说明"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-request-param/push-scenariozed-api-request-param",
              children: "请求体参数说明"
            }), "发送REST API请求。若请求失败请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-response/push-scenariozed-api-response",
              children: "响应参数"
            }), "进行问题排查，若请求成功但设备未收到消息请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/push-kit-guide/push-faq/push-faq-2",
              children: "FAQ"
            }), "进行问题排查。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "（可选）开发消息回执"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Push服务端会将消息送达状态以回执消息形式发送给您的应用回执服务端，方便您获取消息下达端侧后的状态，定位问题。详情请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/push-kit-guide/push-server/push-msg-receipt",
              children: "开发消息回执"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["（可选）", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "客户端"
              })
            }), "收到并处理消息"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["通过服务端请求传参和客户端的数据获取，可以进行服务端和客户端的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/push-kit-guide/push-scenes/push-alert/push-send-alert#%E6%95%B0%E6%8D%AE%E4%BC%A0%E9%80%92",
              children: "数据传递"
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "可选其他消息类型",
      children: "（可选）其他消息类型"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Push Kit支持的所有消息类型及使用场景可以参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/push-kit-guide/push-kit-introduction#%E6%8E%A8%E9%80%81%E6%B6%88%E6%81%AF%E7%B1%BB%E5%9E%8B",
        children: "推送消息类型"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如通过应用内通话消息实现音视频通话，通过语音播报消息实现语音播报业务处理，通过后台消息实现配置更新等。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["部分场景化消息类型需要您申请特殊权益才能正常发送，详情请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/push-kit-guide/push-preparations/push-apply-right#%E5%9C%BA%E6%99%AF%E5%8C%96%E6%B6%88%E6%81%AF%E6%9D%83%E7%9B%8A%E7%AE%80%E4%BB%8B",
            children: "场景化消息权益简介"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "权益申请通过后，请参考对应消息类型的开发指南章节进行开发。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(544895)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如果您的项目之前已经基于HarmonyOS 3.x/4.x的系统接入过推送服务，现在需要给HarmonyOS Next/5.x及之后的系统版本推送通知，客户端和服务端仍然需要按照上述开发流程重新进行开发。"
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
544895(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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