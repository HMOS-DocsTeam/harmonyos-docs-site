"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["271351"], {
3287(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_payment_kit_guide_payment_common_pay_connect_payment_common_pay_introduction_payment_common_pay_introduction_md_36e_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-payment-kit-guide-payment-common-pay-connect-payment-common-pay-introduction-payment-common-pay-introduction-md-36e.json
var site_docs_payment_kit_guide_payment_common_pay_connect_payment_common_pay_introduction_payment_common_pay_introduction_md_36e_namespaceObject = JSON.parse('{"id":"payment-kit-guide/payment-common-pay-connect/payment-common-pay-introduction/payment-common-pay-introduction","title":"业务规则说明","description":"接入通用收银台需先开通对应的产品，参见产品开通操作。","source":"@site/docs/payment-kit-guide/payment-common-pay-connect/payment-common-pay-introduction/payment-common-pay-introduction.md","sourceDirName":"payment-kit-guide/payment-common-pay-connect/payment-common-pay-introduction","slug":"/payment-kit-guide/payment-common-pay-connect/payment-common-pay-introduction/","permalink":"/harmonyos-docs-site/payment-kit-guide/payment-common-pay-connect/payment-common-pay-introduction/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"业务规则说明","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/payment-common-pay-introduction","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"数字人民币支付场景","permalink":"/harmonyos-docs-site/payment-kit-guide/payment-digital-cny-pay/"},"next":{"title":"混合支付场景","permalink":"/harmonyos-docs-site/payment-kit-guide/payment-common-pay-connect/payment-common-pay-mix/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/payment-kit-guide/payment-common-pay-connect/payment-common-pay-introduction/payment-common-pay-introduction.md


const frontMatter = {
	title: '业务规则说明',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/payment-common-pay-introduction',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '业务规则说明';

const assets = {

};



const toc = [{
  "value": "产品开通与配置",
  "id": "产品开通与配置",
  "level": 2
}, {
  "value": "约束与限制",
  "id": "约束与限制",
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
        id: "业务规则说明",
        children: "业务规则说明"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(612778)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["接入通用收银台需先开通对应的产品，参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/payment-kit-guide/payment-preparations/payment-product-configuration#%E5%9C%BA%E6%99%AF%E4%B8%80%E4%BA%A7%E5%93%81%E5%BC%80%E9%80%9A%E6%93%8D%E4%BD%9C",
        children: "产品开通操作"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Payment Kit通用收银台上可以包含多种支付方式，支持自由组合。根据不同的资金处理方式可将通用收银台支付分为以下支付模式："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "支付模式"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "资金处理"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/payment-kit-guide/payment-payment-process",
              children: "华为支付"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "支付方式全由华为支付处理资金"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "收银台支付方式有华为支付、三方支付，都由华为支付提供资金处理。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/payment-kit-guide/payment-common-pay-connect/payment-common-pay-mix",
              children: "混合支付"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "部分支付方式由华为支付处理资金"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "收银台支付方式有华为支付、三方支付，其中华为支付由华为支付提供资金处理，三方支付由三方支付平台提供资金处理。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/payment-kit-guide/payment-common-pay-connect/payment-common-pay-external",
              children: "纯外部支付"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "支付方式不通过华为支付处理资金"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "收银台支付方式仅包含三方支付，由三方支付平台提供资金处理。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "产品开通与配置",
      children: "产品开通与配置"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如接入", (0,jsx_runtime.jsx)(_components.a, {
        href: "/payment-kit-guide/payment-common-pay-connect/payment-common-pay-mix",
        children: "混合支付"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/payment-kit-guide/payment-common-pay-connect/payment-common-pay-external",
        children: "纯外部支付"
      }), "，开发者需与华为支付业务侧沟通（合作咨询可", (0,jsx_runtime.jsx)(_components.a, {
        href: "/payment-kit-guide/payment-service-support",
        children: "点击此处"
      }), "）后提供以下信息给华为支付业务侧添加支付模式相关配置，配置项内容参考如下："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "配置项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "是否必选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "元服务/应用名称"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用的名称（AppID关联应用的名称）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AppID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["应用的AppID（在", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.huawei.com/consumer/cn/service/josp/agc/index.html",
              children: "AppGallery Connect"
            }), "网站点击“开发与服务”，在项目列表中找到项目，在“项目设置 > 常规”页面的“应用”区域获取“APP ID”的值）。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "收银台模式"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["收银台接入的支付模式（未配置商户三方支付相关配置时，默认为", (0,jsx_runtime.jsx)(_components.a, {
              href: "/payment-kit-guide/payment-payment-process",
              children: "华为支付"
            }), "模式）。  2：混合支付模式（部分交易走华为支付通道，部分走外部三方支付通道）  3：纯外部支付模式（全部交易走外部三方支付通道）"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "启用状态"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否启用应用申请的三方支付相关配置。  - 启用（默认）  - 未启用"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "支付方式名称"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "三方支付方式配置项。 收银台展示的支付方式名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "支付方式code"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "三方支付方式配置项。当支付方式非微信支付和支付宝时需要填写该项。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "拉起收银台方式"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["三方支付方式配置项。是否SDK方式拉起收银台  - 是：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/payment-kit-guide/payment-common-pay-connect/payment-launch-third-party-payment/payment-launch-third-party-payment-sdk",
              children: "基于接口拉起三方支付收银台"
            }), "  - 否：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/payment-kit-guide/payment-common-pay-connect/payment-launch-third-party-payment/payment-launch-third-party-payment-url",
              children: "基于URL拉起三方支付收银台"
            }), "。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 不同的配置在", (0,jsx_runtime.jsx)(_components.a, {
              href: "/payment-kit-guide/payment-common-pay-connect/payment-launch-third-party-payment/payment-launch-third-party-payment-url",
              children: "拉起三方支付收银台"
            }), "方式上有区别，当前支持", (0,jsx_runtime.jsx)(_components.a, {
              href: "/payment-kit-guide/payment-common-pay-connect/payment-launch-third-party-payment/payment-launch-third-party-payment-sdk",
              children: "基于接口拉起方式"
            }), "拉起三方支付收银台支持的支付方式参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/payment-api/payment-arkts/payment-third-payment-service/payment-third-payment-service#paymethod",
              children: "PayMethod"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "支付方式跳转路径"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["三方支付方式配置项。", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsxs)(_components.strong, {
                children: [(0,jsx_runtime.jsx)(_components.a, {
                  href: "/payment-kit-guide/payment-common-pay-connect/payment-launch-third-party-payment/payment-launch-third-party-payment-url",
                  children: "基于URL拉起三方支付收银台"
                }), "方式时必选。"]
              })
            }), "  常见支付方式的跳转链接如下（供参考）。  - 支付宝：", (0,jsx_runtime.jsx)(_components.code, {
              children: "https://mclient.alipay.com"
            }), "  - 微信支付：", (0,jsx_runtime.jsx)(_components.code, {
              children: "https://wx.tenpay.com"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "支付方式deeplink链接"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["三方支付方式配置项。", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsxs)(_components.strong, {
                children: [(0,jsx_runtime.jsx)(_components.a, {
                  href: "/payment-kit-guide/payment-common-pay-connect/payment-launch-third-party-payment/payment-launch-third-party-payment-url",
                  children: "基于URL拉起三方支付收银台"
                }), " 方式时必选。"]
              })
            }), "  常见支付方式的deeplink链接如下（供参考）。  - 支付宝：alipays://platformapi  - 微信支付：weixin://wap/pay"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "支付方式referer链接"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "三方支付方式配置项。根据支付方式情况填写，若不涉及则不填。H5微信支付场景下必填，值为商户在微信支付商户管理平台申请开通微信支付H5支付时登记配置的链接。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "支付方式的logo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "三方支付方式配置项。支持png、jpg、jpeg、gif、webp、bmp格式。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可参考如下表格格式填写配置提供："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(306550)/* ["default"] */.A) + "",
        width: "927",
        height: "407"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设备类型：华为手机。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HarmonyOS系统：HarmonyOS 5.0.2(14)及以上。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HarmonyOS SDK版本：HarmonyOS 5.0.2(14)及以上。"
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
306550(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959090-06c9f0cece3740d30d467818e4a768a9.png");

},
612778(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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