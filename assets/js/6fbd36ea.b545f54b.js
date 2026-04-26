"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["860941"], {
762189(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_store_kit_guide_store_attribution_appendix_appgallery_attribution_appendix_triger_appgallery_attribution_appendix_triger_md_6fb_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-store-kit-guide-store-attribution-appendix-appgallery-attribution-appendix-triger-appgallery-attribution-appendix-triger-md-6fb.json
var site_docs_store_kit_guide_store_attribution_appendix_appgallery_attribution_appendix_triger_appgallery_attribution_appendix_triger_md_6fb_namespaceObject = JSON.parse('{"id":"store-kit-guide/store-attribution-appendix/appgallery-attribution-appendix-triger/appgallery-attribution-appendix-triger","title":"标准化事件及应用归因签名","description":"标准转化事件信息","source":"@site/docs/store-kit-guide/store-attribution-appendix/appgallery-attribution-appendix-triger/appgallery-attribution-appendix-triger.md","sourceDirName":"store-kit-guide/store-attribution-appendix/appgallery-attribution-appendix-triger","slug":"/store-kit-guide/store-attribution-appendix/appgallery-attribution-appendix-triger/","permalink":"/harmonyos-docs-site/store-kit-guide/store-attribution-appendix/appgallery-attribution-appendix-triger/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"标准化事件及应用归因签名","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/appgallery-attribution-appendix-triger","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"应用内快捷方式加桌返回401错误码","permalink":"/harmonyos-docs-site/store-kit-guide/store-faq/appgallery-faq-32/"},"next":{"title":"支持的国家/地区","permalink":"/harmonyos-docs-site/store-kit-guide/store-attribution-appendix/appgallery-support-regions/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/store-kit-guide/store-attribution-appendix/appgallery-attribution-appendix-triger/appgallery-attribution-appendix-triger.md


const frontMatter = {
	title: '标准化事件及应用归因签名',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/appgallery-attribution-appendix-triger',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '标准化事件及应用归因签名';

const assets = {

};



const toc = [{
  "value": "标准转化事件信息",
  "id": "标准转化事件信息",
  "level": 2
}, {
  "value": "归因来源签名计算规则",
  "id": "归因来源签名计算规则",
  "level": 2
}, {
  "value": "生成签名方法",
  "id": "生成签名方法",
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
    pre: "pre",
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
        id: "标准化事件及应用归因签名",
        children: "标准化事件及应用归因签名"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "标准转化事件信息",
      children: "标准转化事件信息"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "定义值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "回传值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "含义说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "安装应用"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["应用安装完成  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 安装应用事件归因结果回传通过白名单方式向合作伙伴开放，默认不回传（白名单开放方式请联系华为运营）。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "激活应用"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "历史首次激活应用"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "启动应用"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "打开应用"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "次日留存"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "次日仍然使用应用"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "付费"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在应用内发生付费"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "提交表单"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在应用内提交表单"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "授权"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "发生应用的授权"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "注册"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册应用或服务"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "关键页面访问"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "发生关键页面浏览行为"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "申请"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "14"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "申请服务"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "下单"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "18"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将购物清单正式生成订单"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "预约"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "21"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "预约商品、内容或服务"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "归因来源签名计算规则",
      children: "归因来源签名计算规则"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1.按照如下规则（字段顺序及分隔符）拼接待签名的字符串："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "adTechId+ '\\u2063' + campaignId+ '\\u2063'  + destinationId+ '\\u2063' + serviceTag+ '\\u2063' + mmpIdStr + '\\u2063' + nonce + '\\u2063' + timestamp\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "其中，mmpIdStr生成规则为："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "若归因监测平台的数组不为空，则将归因监测平台中的元素以'\\u2063'为连接符进行拼接，假设mmpIds中有两个归因监测平台，拼接示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "mmpIdStr = mmpId1 + '\\u2063' + mmpId2\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "2.使用分发平台在应用归因服务云侧注册角色时，提供的公钥所对应的私钥，对步骤1拼接的字符串进行签名计算（签名算法：SHA256withRSA/PSS；生成密钥位数：RSA3072）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "3.接口中字段不为空则参与签名/验签，否则不参与签名/验签。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "生成签名方法",
      children: "生成签名方法"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "您可以参考如下代码生成签名，也可以自行生成签名。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n// 具体引用方法参考本示例代码底部说明\nimport {AegRsaSign} from \"@hw-agconnect/petal-aegis\";\n\n\nconst TAG: string = 'SignUtil';\nconst SEPARATOR: string = '\\u2063';\n\nexport class SignUtil {\n  public static genSignContent(adTechId: string, campaignId: string, destinationId: string, mmpIds: string[], serviceTag: string, nonce: string, timestamp: number) {\n    // mmpIdStr = mmpId1 + '\\u2063' + mmpId2\n    // signContent:string= adTechId+ '\\u2063' + campaignId+ '\\u2063'  + destinationId+ '\\u2063' + serviceTag+ '\\u2063' + mmpIdStr + '\\u2063' + nonce + '\\u2063' + timestamp\n    let content = SignUtil.addSeparator(adTechId)\n      + SignUtil.addSeparator(campaignId)\n      + SignUtil.addSeparator(destinationId)\n      + SignUtil.addSeparator(serviceTag)\n      + SignUtil.genMmpIds(mmpIds)\n      + SignUtil.addSeparator(nonce)\n      + timestamp;\n    hilog.info(0,TAG,`content = ${JSON.stringify(content)}`);\n    return content;\n  }\n\n  private static addSeparator(value: string | undefined): string {\n    return value ? value + SEPARATOR : '';\n  }\n\n  private static genMmpIds(mmpIds: string[]) {\n    let result: string = '';\n    for (let mmpId of mmpIds) {\n      if (mmpId) {\n        result += SignUtil.addSeparator(mmpId);\n      }\n    }\n    return result;\n  }\n\n  public static getSign(content: string, privateKey: string): Promise<string> {\n    return new Promise<string>((resolve) => {\n      AegRsaSign.ohAegSignRSAWithPSSTextBase64(content, privateKey).then(async (sign: string) => {\n        hilog.info(0, TAG, \"getSign success.\");\n        resolve(sign);\n      }).catch((error: BusinessError) => {\n        hilog.error(0, TAG, `getSign failed. code is ${error.code}, message is ${error.message}`);\n      });\n    })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(291694)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "其中import {AegRsaSign} from \"@hw-agconnect/petal-aegis\" ， 使用AegRsaSign.ohAegSignRSAWithPSSTextBase64生成签名，使用方法如下:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "执行安装命令：ohpm i @hw-agconnect/petal-aegis"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["具体的接口使用方法，请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/ohaegsignrsawithpsstextbase64-0000001864508922",
        children: "ohAegSignRSAWithPSSTextBase64"
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
291694(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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