"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["176527"], {
372336(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_device_certificate_kit_certificate_framework_certificate_framework_overview_certificate_framework_overview_md_dfb_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-device-certificate-kit-certificate-framework-certificate-framework-overview-certificate-framework-overview-md-dfb.json
var site_docs_system_security_device_certificate_kit_certificate_framework_certificate_framework_overview_certificate_framework_overview_md_dfb_namespaceObject = JSON.parse('{"id":"system-security/device-certificate-kit/certificate-framework/certificate-framework-overview/certificate-framework-overview","title":"证书算法库框架概述","description":"证书算法库框架是一个屏蔽了第三方算法库实现差异的证书算法框架，向应用提供证书、证书扩展域段、证书吊销列表的创建、解析及校验能力，此外还提供了证书链的校验能力。","source":"@site/docs/system-security/device-certificate-kit/certificate-framework/certificate-framework-overview/certificate-framework-overview.md","sourceDirName":"system-security/device-certificate-kit/certificate-framework/certificate-framework-overview","slug":"/system-security/device-certificate-kit/certificate-framework/certificate-framework-overview/","permalink":"/harmonyos-docs-site/system-security/device-certificate-kit/certificate-framework/certificate-framework-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"证书算法库框架概述","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/certificate-framework-overview","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Device Certificate Kit简介","permalink":"/harmonyos-docs-site/system-security/device-certificate-kit/device-certificate-kit-intro/"},"next":{"title":"证书对象的创建、解析和校验","permalink":"/harmonyos-docs-site/system-security/device-certificate-kit/certificate-framework/create-parse-verify-cert-object/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/device-certificate-kit/certificate-framework/certificate-framework-overview/certificate-framework-overview.md


const frontMatter = {
	title: '证书算法库框架概述',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/certificate-framework-overview',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '证书算法库框架概述';

const assets = {

};



const toc = [{
  "value": "基本概念",
  "id": "基本概念",
  "level": 2
}, {
  "value": "证书规格",
  "id": "证书规格",
  "level": 2
}, {
  "value": "证书链校验不包含对时间有效性的校验",
  "id": "证书链校验不包含对时间有效性的校验",
  "level": 3
}, {
  "value": "证书格式",
  "id": "证书格式",
  "level": 3
}, {
  "value": "X509证书的基本结构",
  "id": "x509证书的基本结构",
  "level": 3
}, {
  "value": "X509证书吊销列表（CRL）基本结构",
  "id": "x509证书吊销列表crl基本结构",
  "level": 3
}, {
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 2
}, {
  "value": "开发总览",
  "id": "开发总览",
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
        id: "证书算法库框架概述",
        children: "证书算法库框架概述"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "证书算法库框架是一个屏蔽了第三方算法库实现差异的证书算法框架，向应用提供证书、证书扩展域段、证书吊销列表的创建、解析及校验能力，此外还提供了证书链的校验能力。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者通过调用证书算法库框架接口，忽略底层不同三方算法库的差异，实现快速开发。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(167786)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本框架具备处理已有证书及证书吊销列表数据后处理的能力，并不具备生成或签发证书及证书吊销列表的能力，签发证书及证书吊销列表的能力由证书颁发机构（CA）来完成，不由单个应用签发。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "证书算法库框架提供X509证书的解析、序列化、X509证书签名验证、X509证书吊销列表、证书链校验器等相关的功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在开发具体的功能前，开发者需要先了解证书领域的一些基本概念。包括但不限于："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "数字证书、数字证书标准X.509（本指导中的“X509”均代指X.509）、证书链、TBS（To Be Signed，待签名部分：指X.509证书中被签名的数据结构，通常包含版本号、序列号、签名算法标识、颁发者、有效期、主体、主体公钥信息和扩展等字段）、CRL（Certificate Revoked List，证书吊销列表）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "证书规格",
      children: "证书规格"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "证书相关规格说明如下所示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "证书链校验不包含对时间有效性的校验",
      children: "证书链校验不包含对时间有效性的校验"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["由于端侧系统时间不可信，证书链校验不包含对证书有效时间的校验。如果需要检查证书的时间有效性，可使用X509证书的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-security-api/device-certificate-api/device-certificate-arkts/js-apis-cert/js-apis-cert#checkvaliditywithdate",
        children: "checkValidityWithDate()"
      }), "方法进行检查。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "证书格式",
      children: "证书格式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "目前仅支持DER与PEM格式的证书。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "x509证书的基本结构",
      children: "X509证书的基本结构"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(645804)/* ["default"] */.A) + "",
        width: "1104",
        height: "467"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "样例证书文件："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(902116)/* ["default"] */.A) + "",
        width: "989",
        height: "661"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "x509证书吊销列表crl基本结构",
      children: "X509证书吊销列表（CRL）基本结构"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(216669)/* ["default"] */.A) + "",
        width: "1853",
        height: "539"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "样例CRL文件："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(47481)/* ["default"] */.A) + "",
        width: "680",
        height: "707"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["依赖加解密算法库框架的基础算法能力的部分，算法库框架不支持多线程并发操作，详情请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/crypto-architecture-kit/crypto-architecture-kit-intro#%E7%BA%A6%E6%9D%9F%E4%B8%8E%E9%99%90%E5%88%B6",
        children: "加解密算法框架"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发总览",
      children: "开发总览"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["证书算法库框架为开发者提供了以下相关功能的开发指导，请开发者参照开发。在开发前，请先查阅", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E8%AF%81%E4%B9%A6%E8%A7%84%E6%A0%BC",
        children: "证书规格"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-security/device-certificate-kit/certificate-framework/create-parse-verify-cert-object",
          children: "证书对象的创建、解析和校验"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-security/device-certificate-kit/certificate-framework/create-parse-verify-certextension-object",
          children: "证书扩展信息对象的创建、解析和校验"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-security/device-certificate-kit/certificate-framework/create-parse-verify-crl-object",
          children: "证书吊销列表对象的创建、解析和校验"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-security/device-certificate-kit/certificate-framework/create-verify-cerchainvalidator-object",
          children: "证书链校验器对象的创建和校验"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-security/device-certificate-kit/certificate-framework/create-get-cert-crl-object",
          children: "证书集合及证书吊销列表集合对象的创建和获取"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-security/device-certificate-kit/certificate-framework/create-verify-certchain-object",
          children: "证书链对象的创建和校验"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-security/device-certificate-kit/certificate-framework/create-trustanchor-from-p12",
          children: "证书链校验时从p12文件构造TrustAnchor对象数组"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-security/device-certificate-kit/certificate-framework/verify-certchain-by-systemca",
          children: "使用系统预置CA证书校验证书链"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-security/device-certificate-kit/certificate-framework/create-cms-sign-object",
          children: "证书CMS签名"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-security/device-certificate-kit/certificate-framework/create-cms-enveloped-object",
          children: "证书CMS封装"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-security/device-certificate-kit/certificate-framework/create-cms-verify-object",
          children: "证书CMS验签"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-security/device-certificate-kit/certificate-framework/create-cms-decapsulation-object",
          children: "证书CMS解封装"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-security/device-certificate-kit/certificate-framework/create-parse-pkcs12",
          children: "证书PKCS12的创建和解析"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-security/device-certificate-kit/certificate-framework/create-verify-cerchainvalidator-revocation-object",
          children: "证书链在线校验证书吊销状态"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/allow-download-intermediate-cert",
          children: "证书链校验时下载缺失的中间CA证书"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "证书算法库框架主要提供了以下类，开发者可以查阅对应API参考，了解以下接口："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "功能"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "X509证书"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/device-certificate-api/device-certificate-arkts/js-apis-cert/js-apis-cert#x509cert",
              children: "X509Cert"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "提供X509证书的解析、序列化、X509证书签名验证、证书相关的信息查询等功能。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "证书扩展域段"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/device-certificate-api/device-certificate-arkts/js-apis-cert/js-apis-cert#certextension10",
              children: "CertExtension"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "提供X509证书中扩展域段的获取，如是否CA，CRL分发点等字段。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "X509证书吊销列表"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/device-certificate-api/device-certificate-arkts/js-apis-cert/js-apis-cert#x509crl11",
              children: "X509CRL"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "提供X509证书吊销列表的解析、序列化、信息查询等功能。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "证书链校验器"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/device-certificate-api/device-certificate-arkts/js-apis-cert/js-apis-cert#certchainvalidator",
              children: "CertChainValidator"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "提供证书链校验（不包括证书有效期的校验）、证书链算法名称查询的功能。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "证书和证书吊销列表集合"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/device-certificate-api/device-certificate-arkts/js-apis-cert/js-apis-cert#certcrlcollection11",
              children: "CertCRLCollection"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "提供证书和证书吊销列表集合的查询功能。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "X509证书链"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/device-certificate-api/device-certificate-arkts/js-apis-cert/js-apis-cert#x509certchain11",
              children: "X509CertChain"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "提供证书链校验、证书列表获取的功能。"
          })]
        })]
      })]
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
167786(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
47481(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478379-a1e5965dbae5a41f2cbf7dc73bbb63a4.png");

},
216669(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958378-cc2491d7b1181cad618af231d8fa327f.png");

},
902116(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438423-e4468c512c4e05b86e0cdf0185d20be0.png");

},
645804(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798728-14c6e4424c6ebf2bd01ddd1e66b192c6.png");

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