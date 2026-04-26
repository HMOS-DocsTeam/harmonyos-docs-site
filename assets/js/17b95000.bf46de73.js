"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["827396"], {
71486(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_payment_kit_guide_payment_preparations_payment_binding_appid_to_merc_payment_binding_appid_to_merc_md_17b_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-payment-kit-guide-payment-preparations-payment-binding-appid-to-merc-payment-binding-appid-to-merc-md-17b.json
var site_docs_payment_kit_guide_payment_preparations_payment_binding_appid_to_merc_payment_binding_appid_to_merc_md_17b_namespaceObject = JSON.parse('{"id":"payment-kit-guide/payment-preparations/payment-binding-appid-to-merc/payment-binding-appid-to-merc","title":"商户号绑定AppID","description":"商户号绑定AppID的商户需要通过华为支付商户平台入网，详见商户入网和获取商户号。通过华为开发者联盟官网开通商户服务入网的商户暂不支持直接接入华为支付以及绑定AppID操作。","source":"@site/docs/payment-kit-guide/payment-preparations/payment-binding-appid-to-merc/payment-binding-appid-to-merc.md","sourceDirName":"payment-kit-guide/payment-preparations/payment-binding-appid-to-merc","slug":"/payment-kit-guide/payment-preparations/payment-binding-appid-to-merc/","permalink":"/harmonyos-docs-site/payment-kit-guide/payment-preparations/payment-binding-appid-to-merc/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"商户号绑定AppID","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/payment-binding-appid-to-merc","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"开通支付服务","permalink":"/harmonyos-docs-site/payment-kit-guide/payment-preparations/payment-config-agc/"},"next":{"title":"准备证书","permalink":"/harmonyos-docs-site/payment-kit-guide/payment-preparations/payment-certificates-config/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/payment-kit-guide/payment-preparations/payment-binding-appid-to-merc/payment-binding-appid-to-merc.md


const frontMatter = {
	title: '商户号绑定AppID',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/payment-binding-appid-to-merc',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '商户号绑定AppID';

const assets = {

};



const toc = [{
  "value": "基本概念",
  "id": "基本概念",
  "level": 2
}, {
  "value": "绑定AppID说明",
  "id": "绑定appid说明",
  "level": 2
}, {
  "value": "直连商户/平台类商户绑定",
  "id": "直连商户平台类商户绑定",
  "level": 2
}, {
  "value": "服务商绑定",
  "id": "服务商绑定",
  "level": 2
}, {
  "value": "服务商绑定",
  "id": "服务商绑定-1",
  "level": 3
}, {
  "value": "服务商邀请特约商户绑定",
  "id": "服务商邀请特约商户绑定",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "商户号绑定appid",
        children: "商户号绑定AppID"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(188666)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["商户号绑定AppID的商户需要通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://petalpay-merchant.cloud.huawei.com/",
        children: "华为支付商户平台"
      }), "入网，详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/payment-kit-guide/payment-preparations/payment-merc-regist-apply",
        children: "商户入网和获取商户号"
      }), "。通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/",
        children: "华为开发者联盟官网"
      }), "开通", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/app/open-0000001959074873",
        children: "商户服务"
      }), "入网的商户暂不支持直接接入华为支付以及绑定AppID操作。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["商户（以下所称商户均包含所有商户模型）后续支付交易依赖于", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/service/josp/agc/index.html",
        children: "AppGallery Connect"
      }), "中", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/app/agc-help-create-app-0000002247955506",
        children: "创建应用"
      }), "生成的AppID与商户号的关联关系。商户在请求预下单接口传递AppID入参，后续可以在", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/service/josp/agc/index.html",
        children: "AppGallery Connect"
      }), "网站上基于应用维度查看交易报表数据。传递AppID参数后，华为支付侧会校验商户号与传递的AppID是否匹配，如不匹配则会直接响应异常。因此，接入鸿蒙支付服务前商户需要为商户号绑定AppID，如无商户号则需要先申请，详细介绍参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/payment-kit-guide/payment-preparations/payment-merc-regist-apply",
        children: "商户入网和获取商户号"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["AppID绑定详细可参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/pay-docs/hwzf-appidguanli-0000001757041165",
        children: "AppID管理及关联"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "同主体"
        })
      }), "：商户号与AppID所关联的营业主体信息一致。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "异主体"
        })
      }), "：商户号与AppID关联的营业主体信息不一致。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "绑定appid说明",
      children: "绑定AppID说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "暂不支持平台子商户及特约商户发起绑定AppID申请。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["商户发起绑定AppID申请，异主体绑定需要商户与华为支付侧沟通申请开通异主体绑定权限（可参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/payment-kit-guide/payment-preparations/payment-product-configuration#%E5%9C%BA%E6%99%AF%E4%B8%80%E4%BA%A7%E5%93%81%E5%BC%80%E9%80%9A%E6%93%8D%E4%BD%9C",
          children: "产品开通操作"
        }), "）后才可在", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://petalpay-merchant.cloud.huawei.com/",
          children: "华为支付商户平台"
        }), "发起异主体AppID绑定操作。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "AppID关联的营业主体与特约商户商户号或与服务商商户号关联的营业主体一致，都认为是同主体，可直接发起绑定。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["商户发起绑定申请后，商户应用管理员登录", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/service/josp/agc/index.html",
          children: "AppGallery Connect"
        }), "网站才能对商户号绑定AppID进行授权（提示“主体不一致”可", (0,jsx_runtime.jsx)(_components.a, {
          href: "/payment-kit-guide/payment-faq/payment-faq-26",
          children: "参见这里"
        }), "）。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "直连商户平台类商户绑定",
      children: "直连商户/平台类商户绑定"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["请登录", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://petalpay-merchant.cloud.huawei.com/",
            children: "华为支付商户平台"
          }), "进入“商户中心 > 产品功能 > AppID管理 > 新增关联AppID”。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(765254)/* ["default"] */.A) + "",
            width: "1881",
            height: "850"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["申请绑定AppID后，应用管理员登录", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/service/josp/agc/index.html",
            children: "AppGallery Connect"
          }), "网站选择对应的项目后，在左侧导航栏选择“盈利 > 鸿蒙支付服务（可在‘全部功能’中搜索服务并固定到导航栏）> 支付服务（非虚拟类）> 待关联商户号”选择对应的商户点击“授权”。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(898179)/* ["default"] */.A) + "",
            width: "1881",
            height: "827"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "服务商绑定",
      children: "服务商绑定"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "服务商绑定AppID涉及如下场景："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "服务商绑定"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "服务商需要绑定服务商应用AppID可直接在华为支付商户平台发起绑定申请。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "特约商户绑定"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "特约商户需要绑定特约商户应用AppID，需要服务商在华为支付商户平台发起邀请特约商户绑定AppID才可以进行绑定。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "服务商绑定-1",
      children: "服务商绑定"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["服务商登录", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://petalpay-merchant.cloud.huawei.com/",
            children: "华为支付商户平台"
          }), "进入“商户中心 > 产品功能 > AppID管理”，在“服务商绑定的AppID”页签内点击“新增关联AppID”。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(390478)/* ["default"] */.A) + "",
            width: "1881",
            height: "827"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["申请绑定AppID后，应用管理员登录", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/service/josp/agc/index.html",
            children: "AppGallery Connect"
          }), "网站选择对应的项目后，在左侧导航栏选择“盈利 > 鸿蒙支付服务（可在‘全部功能’中搜索服务并固定到导航栏）> 支付服务（非虚拟类）> 待关联商户号”选择对应的商户点击“授权”。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(372436)/* ["default"] */.A) + "",
            width: "1881",
            height: "827"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "服务商邀请特约商户绑定",
      children: "服务商邀请特约商户绑定"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["服务商登录", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://petalpay-merchant.cloud.huawei.com/",
            children: "华为支付商户平台"
          }), "进入“商户中心 > 产品功能 > AppID管理”，在“特约商户绑定的AppID”页签内根据服务商下的特约商户列表，选择特约商户发起AppID绑定申请邀请。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(666101)/* ["default"] */.A) + "",
            width: "1422",
            height: "582"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["特约商户登录", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://petalpay-merchant.cloud.huawei.com/",
            children: "华为支付商户平台"
          }), "进入“商户中心 > 产品功能 > AppID管理”选择“服务商为我绑定的AppID列表”中的数据，点击去确认，对服务商邀请绑定AppID进行确认。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(318267)/* ["default"] */.A) + "",
            width: "1396",
            height: "663"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["特约商户确认绑定AppID后，应用管理员登录", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/service/josp/agc/index.html",
            children: "AppGallery Connect"
          }), "网站选择对应的项目后，在左侧导航栏选择“盈利 > 鸿蒙支付服务（可在‘全部功能’中搜索服务并固定到导航栏）> 支付服务（非虚拟类）> 待关联商户号”选择对应的商户点击“授权”。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(236886)/* ["default"] */.A) + "",
            width: "1881",
            height: "827"
          })
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
188666(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
372436(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959078-46681920eb08f8e39952e49806db3adc.png");

},
898179(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799428-46681920eb08f8e39952e49806db3adc.png");

},
765254(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479077-d8efda8abdc5ded5ac9cea982ef7242a.png");

},
390478(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439123-46681920eb08f8e39952e49806db3adc.png");

},
666101(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479079-0d3338272262dc0e4f53d4d96c93df53.png");

},
318267(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799430-42d177dadff7fcb4e32ba79fcc24773f.png");

},
236886(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439125-46681920eb08f8e39952e49806db3adc.png");

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