"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["94712"], {
279959(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_payment_kit_guide_payment_preparations_payment_certificates_config_payment_certificates_config_md_aa7_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-payment-kit-guide-payment-preparations-payment-certificates-config-payment-certificates-config-md-aa7.json
var site_docs_payment_kit_guide_payment_preparations_payment_certificates_config_payment_certificates_config_md_aa7_namespaceObject = JSON.parse('{"id":"payment-kit-guide/payment-preparations/payment-certificates-config/payment-certificates-config","title":"准备证书","description":"开发者接入华为支付开放API接口，需要通过证书来对请求内容及响应内容做签名和验证签名，以保证请求的安全性和可靠性。","source":"@site/docs/payment-kit-guide/payment-preparations/payment-certificates-config/payment-certificates-config.md","sourceDirName":"payment-kit-guide/payment-preparations/payment-certificates-config","slug":"/payment-kit-guide/payment-preparations/payment-certificates-config/","permalink":"/harmonyos-docs-site/payment-kit-guide/payment-preparations/payment-certificates-config/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"准备证书","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/payment-certificates-config","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"商户号绑定AppID","permalink":"/harmonyos-docs-site/payment-kit-guide/payment-preparations/payment-binding-appid-to-merc/"},"next":{"title":"端侧应用配置","permalink":"/harmonyos-docs-site/payment-kit-guide/payment-preparations/payment-config-app-identity-info/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/payment-kit-guide/payment-preparations/payment-certificates-config/payment-certificates-config.md


const frontMatter = {
	title: '准备证书',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/payment-certificates-config',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '准备证书';

const assets = {

};



const toc = [{
  "value": "证书说明",
  "id": "证书说明",
  "level": 2
}, {
  "value": "商户证书",
  "id": "商户证书",
  "level": 2
}, {
  "value": "生成商户证书",
  "id": "生成商户证书",
  "level": 3
}, {
  "value": "上传商户证书",
  "id": "上传商户证书",
  "level": 3
}, {
  "value": "华为支付证书",
  "id": "华为支付证书",
  "level": 2
}, {
  "value": "下载华为支付证书",
  "id": "下载华为支付证书",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "准备证书",
        children: "准备证书"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者接入华为支付开放API接口，需要通过证书来对请求内容及响应内容做签名和验证签名，以保证请求的安全性和可靠性。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本文将介绍接入过程中相关证书的作用和获取方法。在准备证书前，请在", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://petalpay-merchant.cloud.huawei.com/",
        children: "华为支付商户平台"
      }), "入网，具体请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/hwzf-jieruliucheng-0000001251448455",
        children: "商户入网"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "需准备证书：商户证书、华为支付证书（公钥）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "证书说明",
      children: "证书说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "证书使用如图所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(313172)/* ["default"] */.A) + "",
        width: "980",
        height: "542"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "商户证书",
      children: "商户证书"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["商户证书是指由商户自行生成（参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E7%94%9F%E6%88%90%E5%95%86%E6%88%B7%E8%AF%81%E4%B9%A6",
        children: "生成商户证书"
      }), "）或申请（可自行选择符合资质的CA认证机构申请证书）的，包含商户公钥和私钥信息的证书。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["私钥用于商户在华为支付开放API接口请求过程中的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/payment-api/payment-rest/payment-rest-overview/payment-rest-overview#%E7%AD%BE%E5%90%8D%E8%A7%84%E5%88%99",
        children: "签名"
      }), "，公钥用于提供给华为支付侧进行请求验签。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该证书文件要求为pem格式，支持RSA和SM2两种算法类型的证书。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "证书私钥"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "商户自行生成或申请商户证书时，会配套生成商户私钥。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "商户私钥用于商户对华为支付开放API请求中的信息进行签名。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "请妥善保管好商户私钥文件，不要把私钥文件暴露在公共场合，如上传到Github，写在客户端代码等。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "证书公钥"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "商户自行生成或申请商户证书时，会配套生成商户公钥。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["商户需将生成的证书公钥上传到", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://petalpay-merchant.cloud.huawei.com/",
            children: "华为支付商户平台"
          }), "来获取证书ID，证书ID为请求华为支付开放API接口时请求头鉴权信息", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/payment-api/payment-model/payment-model#paymercauth",
            children: "PayMercAuth"
          }), "对象中的authId字段以及订单信息参数", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/payment-api/payment-model/payment-model#orderstr",
            children: "orderStr"
          }), "中的auth_id字段。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["证书上传（参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "#%E4%B8%8A%E4%BC%A0%E5%95%86%E6%88%B7%E8%AF%81%E4%B9%A6",
            children: "上传商户证书"
          }), "）后，可以在“商户中心 > 证书管理 > 上传商户证书 > 证书ID”处获取。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(489214)/* ["default"] */.A) + "",
            width: "3760",
            height: "1082"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "生成商户证书",
      children: "生成商户证书"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "方式1：使用JavaScript的库线下生成（生成RSA算法类型证书为例，推荐方法）"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "配置Node.js执行环境。下面以Windows开发环境为例："
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["登录", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://nodejs.org/en/download/",
            children: "Node.js"
          }), "官方网站，下载Node.js软件包。请选择LTS版本，并根据电脑操作系统选择对应的软件包。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(620943)/* ["default"] */.A) + "",
            width: "960",
            height: "594"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "双击下载后的软件包进行安装。全部按照默认设置点击“Next”，直至“Finish”。安装过程中，Node.js会自动在系统的path环境变量中配置node.exe的目录路径。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(110982)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如果安装Node.js没有选择默认安装目录，则需要在系统变量“path”中手动添加环境变量信息“我的电脑>属性>高级系统设置>环境变量”增加Node.js的安装路径。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["打开命令行工具，输入", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "node -v"
            })
          }), "命令，能正常查询Node.js的版本号，说明Node.js执行环境配置完成。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(274881)/* ["default"] */.A) + "",
            width: "303",
            height: "49"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用文本编辑器新建文件（编码为UTF-8），拷贝以下代码到文件中并保存命名为“generateKeyPair.js”。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "const crypto = require('crypto');\n// 生成密钥对\nconst { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {\n  modulusLength: 3072, // 密钥长度，不少于3072\n  publicKeyEncoding: {\n    type: 'spki', // 公钥编码格式\n    format: 'pem' // 公钥输出格式\n  },\n  privateKeyEncoding: {\n    type: 'pkcs8', // 私钥编码格式\n    format: 'pem' // 私钥输出格式\n  }\n});\nconsole.info('生成的公钥：');\nconsole.info(publicKey);\nconsole.info('生成的私钥：');\nconsole.info(privateKey);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["打开命令行工具，进入generateKeyPair.js所在目录，执行", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "node generateKeyPair.js"
            })
          }), "命令。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "从结果中拷贝生成的公私钥并保存。结果如下图所示："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(811291)/* ["default"] */.A) + "",
            width: "960",
            height: "630"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "方式2：使用在线工具生成"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者可自行搜索使用相关开源的在线工具或网站生成相应证书公私钥对。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(65733)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "生成公私钥为敏感操作，请谨慎使用，建议开发者自行生成密钥对。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "上传商户证书",
      children: "上传商户证书"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["证书公钥生成后须商户手动上传到", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://petalpay-merchant.cloud.huawei.com/",
        children: "华为支付商户平台"
      }), "，用于华为支付服务器对支付请求验证签名。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(92068)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "私钥信息用于对发送请求的内容签名，请妥善保管，请勿公开泄露。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["商户成功登录", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://petalpay-merchant.cloud.huawei.com/",
          children: "华为支付商户平台"
        }), "后，须在证书管理中上传商户证书，上传完商户证书后商户方可进行交易。证书必须与商户号相匹配且是有效的。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "上传的证书公钥需要满足如下要求："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["后缀要求：", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://petalpay-merchant.cloud.huawei.com/",
          children: "华为支付商户平台"
        }), "接收的公钥证书格式为“*.pem”。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "格式要求：生成RSA公私钥时，密钥长度要求不小于3072，密钥格式为PKCS#8。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["请登录", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://petalpay-merchant.cloud.huawei.com/",
        children: "华为支付商户平台"
      }), "，在“证书管理 > 上传商户证书”模块进行商户证书公钥上传。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "待上传公钥信息示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkq*********************************vW7gQTM8BHFTezQjdRI\nA7xka2TaVHt***********************************rOA3P5rew9cO96q/7Z\nkQ6lRd3oVsf************************************rGYCrA2RVgr79mRx+\ns22qfA5FdTC*************************************i6I2cRVb1grBQphR\nyFBxCGC/NeV*************************************K1QM1SC4GCORHocS\nMQvApBQwQF9*************************************eEQvwpVfFxg4dGBz\nDQIDAQAB\n-----END PUBLIC KEY-----\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "华为支付证书",
      children: "华为支付证书"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "华为支付证书是指由华为支付提供的，包含华为支付平台标识、公钥信息的证书。该证书算法为SM2。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["商户请通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://petalpay-merchant.cloud.huawei.com/",
          children: "华为支付商户平台"
        }), "下载华为支付证书。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "华为支付证书中的公钥用于商户对回调通知中的信息进行验签。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "下载华为支付证书",
      children: "下载华为支付证书"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["登录", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://petalpay-merchant.cloud.huawei.com/",
        children: "华为支付商户平台"
      }), "后，通过“商户中心 > 证书管理 > 华为支付证书”页签进行华为支付证书下载，该证书用于校验华为支付给商户业务系统发送的信息，如支付结果信息等。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(74558)/* ["default"] */.A) + "",
        width: "960",
        height: "277"
      })
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
811291(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959082-3955e3d6b77e40d5d0f5d3bbc210bf67.png");

},
110982(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
489214(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479081-289fdabf9b5a3abbddd668894947e2f4.png");

},
620943(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799432-3f0a429578ad5d4333fd2e147d966638.png");

},
313172(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959080-ed9e99aac472aa63153ee4c539f221d9.png");

},
74558(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479083-130381298c106c848a48baaa163d52c3.png");

},
92068(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
274881(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAS8AAAAxCAIAAAAEF7jQAAAD10lEQVR4Ae2ca47bMAyE9wB7/1PlUEWgdMoObVp+ILGULz8WJDWkyJFm3RjF/vzygQEYuAcDP/dogy5gAAZ+USOXAAbuwgBqvMtJ0AcMoEbuAAzchQHUeJeToA8YOKLGx+MBcTAAA5cz8FLj4//P5jZZkCrQcs3dLHgGkJs5U41cGPgUA0812m02d7GzRYwFzV2sc1Xw8r3ab5Or2qMODPQwMIka8++UnuFrzOUKr7djFQZ+Nu/c2lMiJ1rE3Ddwfe2O11Z7w/hsMToDb1KjvkaatmO8UalIe9wV+EW1KKjEWFCnpaDwtrvSc1xFdhnacXGuXaUAz8rAthrXJrd7nP+tKICMVkquDIvrvlq8wMcmBcuKsoLmKrEzHjeNtoQnwwpmrmI69tcycFyN+Up13mZxvYbPlVuK4VUnGhET7Vjzqnjct8eO+0a7JxfMNzDwDjU2JdiDwoJrzzE7AxVZvM0WXHMPxOO+lm4d1m7LPVOhrs/q0AwcfKeqmePFinZ8FgncDMFkGKDIjUhLNzcXEUBG3Y9gMuLux+xW6sKCx9og654MuBrzRbGnlo0R8dGOYtgbj7lxu7U6e/FrdWI8Th3ja3vFPmvbqtVgVr+Kgaca2w2L9y9SsBZXYgZbSnP1s8YLZkVik7a0eL9VR33GLK1aruLaztINH2fptM9X6NwI2HAMvNR4pm+u1xn2yIUBMYAaRQUGDHyYgQvU+OEJ2B4GZmEANc5ykswxPgOocfwzZIJZGNhQo94x5lc18RVlJxu5iL267KlzYN+esmBg4OMMVGo08URXtox6EqnaYEqXYQBzBZNhAFwYGJeBI2o0JZhbcGFIc4vEtmR4czfTAcDAzRlAjTc/INr7Igae/2u8ffQVbu2Zo7iMxpO5BXmGbO7f/bf/8tVierEdSzAwFgPPZ2O85dGOk8R4tC09pmQ7J8ZItHNu3mgTv1iEIAzcloEuNdq9r91i1DrRVnMdA5ib8URgYCwGXt8b281evN85aBFzi/kNWbu5zl58rkAEBu7MwIYaTQBtEguaW0xryNrNdfbicwUiMHBnBl5qzN/KciSKQbaMho9uHjuvxohsvVUqKgicMURgYFAGNtSoF55ZIT0RkbJZJ6orV1adHs1HMDYMDMTAPzUO1DStwsCUDKDGKY+VoYZkADUOeWw0PSUDqHHKY2WoIRlAjUMeG01PyQBqnPJYGWpIBlDjkMdG01MygBqnPFaGGpIB1DjksdH0lAygximPlaGGZAA1DnlsND0lA6hxymNlqCEZQI1DHhtNT8kAapzyWBlqSAZQ45DHRtNTMvAHJEWuwuc0KgAAAAAASUVORK5CYII=");

},
65733(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

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